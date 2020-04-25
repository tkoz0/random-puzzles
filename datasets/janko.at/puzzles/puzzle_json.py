import json,sys,os

# puzzles from janko.at look something like:

# begin
# puzzle sudoku
# size 9
# problem
# - - 1 - - 2 - - 3
# ...

# this scrypt is for converting the files into easier to work with json files
# further postprocessing may be needed such as converting grid values to
# integers or standardizing the value names used to represent grid size
# this scrypt also provides no guarantee that the puzzles are valid (solvable
# with only 1 solution), it only (attempts to) convert to a convenient format

# usage: puzzle_json.py <puzzle .txt dir> <puzzle type>

# enumeration of value types
STRING = 0 # <prop> <value>
INTEGER = 1
FLOAT = 2
# grid
# 1,1 1,2 ...
# 2,1 2,2 ...
# ...
GRID = 10
MULTISTRING = 11

class UnknownProp(Exception):
    def __init__(self,msg=''):
        super().__init__(msg)

class ParseGridError(Exception):
    def __init__(self,msg=''):
        super().__init__(msg)

class ParseError(Exception):
    def __init__(self,msg=''):
        super().__init__(msg)

# lines: array of strings
# i: line index where the property name string occurs
# type: from the enumeration above
# settings: additional parameters to read a value
# props: dict containing the values parsed so far
# not all exceptions may be handled properly
def parseValue(lines,i,type,settings,props):
    if type < 10: # value on same line, use right function to parse it
        typefunc = [str,int,float][type]
        try: return (i+1,typefunc(lines[i][lines[i].find(' ')+1:].strip()))
        except Exception as ex: raise ParseError(typefunc.__name__)
    elif type == GRID: # read following lines as a grid with ' ' separators
        rows = props[settings[0]]
        cols = props[settings[1]]
        if rows <= 0 or cols <= 0: raise ParseGridError('rows<=0 or cols<=0')
        try: data = [ [s.strip() for s in line.split()]
                      for line in lines[i+1:i+1+rows] ]
        except Exception as ex: raise ParseGridError('not enough rows left')
        for row in data:
            if len(row) != cols: raise ParseGridError('row %d length'%len(row))
        return (i+rows+1,data)
    elif type == MULTISTRING: # read following lines containing some string
        ch = settings
        j = i+1
        data = ''
        while ch in lines[j]:
            data += lines[j].strip()
            j += 1
        return (j,data)
    else: assert 0

# represents properties to find in a puzzle file
# supports string/integer/float values on the same line as the property name
# supports grids that use existing integers to specify their dimensions
# supports multiline strings that each contain a substring
# the multiline strings are probably only needed for the moves data
# the ignore argument for 
class PuzzleParser:
    def __init__(self):
        # maps property name --> (TYPE,settings)
        self.properties = dict()
        self.ignore = dict()
    def _hasProp(self,name):
        assert type(name) == str
        return (name in self.properties) or (name in self.ignore)
    def removeProp(self,name):
        if name in self.properties: self.properties.pop(name)
        if name in self.ignore: self.ignore.pop(name)
    def addString(self,name,ignore=False):
        assert not self._hasProp(name)
        if ignore: self.ignore[name] = (STRING,None)
        else: self.properties[name] = (STRING,None)
    def addInteger(self,name,ignore=False):
        assert not self._hasProp(name)
        if ignore: self.ignore[name] = (INTEGER,None)
        else: self.properties[name] = (INTEGER,None)
    def addFloat(self,name,ignore=False):
        assert not self._hasProp(name)
        if ignore: self.ignore[name] = (FLOAT,None)
        else: self.properties[name] = (FLOAT,None)
    def addGrid(self,name,rowprop,colprop,ignore=False):
        # gets dimensions from other properties
        assert not self._hasProp(name)
        assert type(rowprop) == str and type(colprop) == str
        assert self.properties[rowprop] == (INTEGER,None)
        assert self.properties[colprop] == (INTEGER,None)
        if ignore: self.ignore[name] = (GRID,(rowprop,colprop))
        else: self.properties[name] = (GRID,(rowprop,colprop))
    def addMultiString(self,name,ch,ignore=False):
        # ch is character to find in lines
        assert not self._hasProp(name)
        assert type(ch) == str
        if ignore: self.ignore[name] = (MULTISTRING,ch)
        else: self.properties[name] = (MULTISTRING,ch)
    def parseFile(self,file,jobj): # jobj = object to add properties to
        assert type(jobj) == dict
        lines = [line[:-1] for line in open(file,'r') if line != '\n']
        assert lines[0] == 'begin'
        assert lines[-1] == 'end'
        i = 0
        while i < len(lines):
            if lines[i] == 'begin': i += 1; continue
            if lines[i] == 'end': i += 1; continue
            si = lines[i].find(' ')
            if si == -1: si = len(lines[i])
            prop = lines[i][:si].strip()
            if prop in self.ignore:
                typ,sett = self.ignore[prop]
                try: i,_ = parseValue(lines,i,typ,sett,jobj)
                except Exception as ex:
                    log('error: '+prop)
                    i += 1
            elif prop in self.properties:
                typ,sett = self.properties[prop]
                try: i,jobj[prop] = parseValue(lines,i,typ,sett,jobj)
                except Exception as ex:
                    log('error: '+prop)
                    i += 1
            else: raise UnknownProp(prop)

def addInfos(parser): # standard puzzle info strings
    parser.addString('puzzle')
    parser.addString('variant')
    parser.addString('options')
    parser.addString('author')
    parser.addString('solver')
    parser.addString('source')
    parser.addString('title')
    parser.addString('info')
    parser.addMultiString('moves',';')

def addRCGrid(parser): # grids specified by "rows" and "cols"
    parser.addInteger('rows')
    parser.addInteger('cols')
    parser.addGrid('problem','rows','cols')
    parser.addGrid('areas','rows','cols')
    parser.addGrid('solution','rows','cols')

def addSizeGrid(parser): # grids specified by "size"
    parser.addInteger('size')
    parser.addInteger('depth')
    parser.addGrid('problem','size','size')
    parser.addGrid('areas','size','size')
    parser.addGrid('solution','size','size')

def addPxPy(parser): # may be sudoku specific?
    parser.addInteger('pattern')
    parser.addInteger('patternx')
    parser.addInteger('patterny')

# given a directory and set of parsers, this will try parsers on each file until
# successful and write the result json objects on their own line to output.json
def parserLoop(path,parsers):
    path = os.path.normpath(path)
    assert os.path.isdir(path)
    files = [f for f in os.listdir(path) if f.endswith('.txt')]
    outf = open(path+'/'+'output.json','w')
    for f in sorted(files):
        log('processing: '+f)
        fname,fext = os.path.splitext(f)
        success = False
        for parsername in parsers:
            jobj = {'file':fname}
            try:
                parsers[parsername].parseFile(path+'/'+f,jobj)
                log('success: parser = '+parsername)
                success = True
                break
            except Exception as ex: pass
                #log('fail: parser = '+parsername+' message = '
                #    +'%s(%s)'%(type(ex).__name__,str(ex)))
        if success:
            outf.write(json.dumps(jobj))
            outf.write('\n')
        else:
            log('failed on file: '+f)
            outf.close()
            quit()
    outf.close()

allparsers = dict()

# notes: the options property only has the value diagonal
def addSudokuParsers():
    sudokurc = PuzzleParser()
    addInfos(sudokurc)
    addRCGrid(sudokurc)
    addPxPy(sudokurc)
    sudokurc.addInteger('unit')
    sudokusize = PuzzleParser()
    addInfos(sudokusize)
    addSizeGrid(sudokusize)
    addPxPy(sudokusize)
    sudokusize.addInteger('unit')
    allparsers['sudoku'] = {'sudokurc':sudokurc,'sudokusize':sudokusize}

def initParsers():
    addSudokuParsers()

# for writing info/error messages
logfile = None
def log(msg):
    print(msg)
    if logfile: logfile.write(msg+'\n')

if __name__ == '__main__':
    logfile = open(os.path.normpath(sys.argv[1])+'/output.log','w')
    initParsers()
    parserLoop(sys.argv[1],allparsers[sys.argv[2]])
    logfile.close()

function Tairupeinto(){var a=this;a.constructor();a.uis.puzzle=["Tairupeinto"];var h=a.board.c,k=0,l=0,n=nil;a.charToValue=a.charToValue.concat(["a",0,"s",1,"d",nil,"x",0,"c",1,"v",nil,",",0,".",1,"-",nil,"/",nil]);a.cell.values=[0,1,n];a.enable.dragging=!0;a.keypad.left=nil;a.labels.west=a.labels.north=1;a.uic.dark[0]="#666666";a.init=function(){Object.getPrototypeOf(a).init.call(a)};a.reset2=function(){try{k=a.size.x;l=a.size.y;a.level.areas&&a.reset2areas(1,1,k,l,a.level.areas);if(a.level.problem){var b=
0;var c=a.level.problem.replace(/\s+/g," ").trim().split(" ");for(var d=1;d<l;d++)for(var f=1;f<k;f++){var e=c[b++];var g=h[f][d];"."==e||"-"==e?g.label=g.value=nil:"x"==e?g.value=0:"o"==e?g.value=1:g.label=parseInt(e);g.value!=nil&&(g.fixed=!0)}}if(a.level.clabels)for(b=0,c=a.level.clabels.replace(/\s+/g," ").trim().split(" "),f=1;f<k;f++)g=h[f][0],e=c[b++],"-"!=e&&"."!=e&&(g.label=parseInt(e));if(a.level.rlabels)for(b=0,c=a.level.rlabels.replace(/\s+/g," ").trim().split(" "),d=1;d<l;d++)g=h[0][d],
e=c[b++],"-"!=e&&"."!=e&&(g.label=parseInt(e));a.reset2labels();if(a.level.solution)for(b=0,c=a.level.solution.replace(/\s+/g," ").trim().split(" "),d=1;d<l;d++)for(f=1;f<k;f++)g=h[f][d],e=c[b++],g.solution="x"==e?0:1}catch(m){throw a.exception(m),m;}};a.check2=function(){try{for(var b=1;b<k;b++)for(var c=1;c<l;c++){var d=h[b][c];d.value==nil&&(d.error=4)}var f=[];for(b=1;b<k;b++)for(c=1;c<l;c++)if(d=h[b][c],void 0===f[d.areas])f[d.areas]=d.value;else if(f[d.areas]!=d.value)for(var e=1;e<k;e++)for(var g=
1;g<l;g++)h[e][g].areas==d.areas&&(h[e][g].error=3);for(b=1;b<k;++b)if(d=h[b][0],d.label!=nil){var m=0;for(c=1;c<l;++c)0==h[b][c].value&&m++;m!=d.label&&(d.error=1)}for(c=1;c<l;++c)if(d=h[0][c],d.label!=nil){m=0;for(b=1;b<k;++b)0==h[b][c].value&&m++;m!=d.label&&(d.error=1)}}catch(p){throw a.exception(p),p;}};a.makeMove2=function(b,c,d){try{for(Object.getPrototypeOf(this).makeMove2.call(this,b,c,d),c=1;c<k;c++)for(d=1;d<l;d++){var f=h[c][d];f.areas==b.areas&&(f.value=b.value,f.color=b.color)}}catch(e){throw a.exception(e),
e;}};a.valueToString=function(a,c){switch(a){case nil:return"-";case 0:return"x";case 1:return c?".":"-";default:return"%"}};a.paintCell=function(b){try{b.areas==a.cell.label?a.paintLabelCell(b):a.paintValueCell(b)}catch(c){throw a.exception(c),c;}};a.paintLabelCell=function(b){try{var c=a.canvas.getContext("2d");c.fillStyle=a.uic.label;c.fillRect(b.px,b.py,a.unit.x,a.unit.y);b.label!=nil&&a.paintText(b.label.toString(),b);b.error&&a.display.errors&&a.paintErrorCircle(b)}catch(d){throw a.exception(d),
d;}};a.paintValueCell=function(b){try{var c=a.canvas.getContext("2d");c.fillStyle=b.value==n?a.paintToImage&&a.moves.current==nil?a.uic.white:a.uic.gray:1==b.value?a.uic.light[b.color]:a.uic.dark[b.color];c.fillRect(b.px,b.py,a.unit.x,a.unit.y);a.paintSymbolMarkers(b);b.error&&a.display.errors&&(b.label!=nil?a.paintErrorCircle(b):a.paintErrorDot(b))}catch(d){throw a.exception(d),d;}};a.paintCurrentValue=function(){try{var b=a.uie.value,c=b.getContext("2d");c.fillStyle=a.current.value==n?a.uic.gray:
0==a.current.value?a.uic.black:a.uic.white;c.fillRect(0,0,b.width,b.height)}catch(d){throw a.exception(d),d;}}}Tairupeinto.prototype=new Puzzle;

function Cryptarithm(){var a=this;a.constructor();a.uis.puzzle=["Cryptarithm","Symbolrechnen"];var k=a.board.c,m=0,p=0,n=0,q=0;a.enable.pgrid=!1;a.enable.plines=!1;a.enable.values=!1;a.enable.currentValue=!1;a.uim.padding=20;a.uic.letter="#666666";a.charToValue=a.charToValue.concat(["/",nil,"-",nil,",",nil]);a.init=function(){Object.getPrototypeOf(a).init.call(a)};a.reset2=function(){var b;try{m=a.labels.west;p=a.labels.north;n=a.size.x-a.labels.east;q=a.size.y-a.labels.south;zmin=1;zmax=9;a.cell.min=
0;a.cell.max=9;a.cell.values=[];var c=0;for(b=0;b<=a.size.z;b++)a.cell.values[c++]=b;a.cell.values[c++]=nil;c=a.size.z;a.keypadValues=a.keypad.numbers.slice(0,c);a.keypadValues[c++]=["\u2022",nil];if(a.level.problem){b=0;var d=a.level.problem.replace(/\s+/g," ").trim().split(" ");for(var h=p;h<q;h++){var l=d[b++];for(var f=m;f<n;f++){var e=k[f][h];var g=l.charAt(f);e.valid=!1;e.fixed=!0;"="==g?e.label=35:"+"==g?e.label=31:"-"==g?e.label=32:"*"==g||"x"==g?e.label=33:"/"==g||"\u00f7"==g||":"==g?e.label=
34:"."==g?e.label=nil:"a"<=g&&"z">=g?e.label=g.charCodeAt(0)-96:"A"<=g&&"Z">=g&&(e.label=g.charCodeAt(0)-64);0<=e.label&&25>=e.label&&(e.fixed=!1,e.valid=!0)}}}if(a.level.solution)for(b=0,d=a.level.solution.replace(/\s+/g," ").trim().split(" "),h=p;h<q;h++)for(l=d[b++],f=m;f<n;f++)e=k[f][h],g=l.charAt(f),e.solution="."==g||"+"==g||"-"==g||"*"==g||"x"==g||"/"==g||"\u00f7"==g||":"==g||"="==g?nil:parseInt(g)}catch(r){throw a.exception(r),r;}};a.check2=function(){try{for(var b=[[0,0,0],[0,0,0],[0,0,0]],
c=m;c<n;c++)for(var d=p;d<q;d++)k[c][d].valid&&k[c][d].value==nil&&(k[c][d].error=1);for(d=p;d<q;d+=2){var h=nil,l=nil;var f=0;var e=d/2;b[f][e]=0;for(c=m;c<n;c++){var g=k[c][d];g.value!=nil?b[f][e]=10*b[f][e]+g.value:25<g.label&&(35==g.label?l=c:h=g.label,f++)}switch(h){case 31:b[0][e]+b[1][e]!=b[2][e]&&(k[l][d].error=4);break;case 32:b[0][e]-b[1][e]!=b[2][e]&&(k[l][d].error=4);break;case 33:b[0][e]*b[1][e]!=b[2][e]&&(k[l][d].error=4);break;case 34:b[0][e]/b[1][e]!=b[2][e]&&(k[l][d].error=4)}}f=
0;for(c=m;c<n;c++)if(k[c][1].label!=nil){switch(k[c][1].label){case 31:b[f][0]+b[f][1]!=b[f][2]&&(k[c][3].error=4);break;case 32:b[f][0]-b[f][1]!=b[f][2]&&(k[c][3].error=4);break;case 33:b[f][0]*b[f][1]!=b[f][2]&&(k[c][3].error=4);break;case 34:b[f][0]/b[f][1]!=b[f][2]&&(k[c][3].error=4)}f++}}catch(r){throw a.exception(r),r;}};a.makeMove2=function(b,c,d){try{for(Object.getPrototypeOf(this).makeMove2.call(this,b,c,d),c=p;c<q;c++)for(d=m;d<n;d++)k[d][c].label==b.label&&(k[d][c].value=b.value)}catch(h){throw a.exception(h),
h;}};a.labelToString=function(b){try{return 31==b?"+":32==b?"\u2013":33==b?"\u00d7":34==b?":":35==b?"=":b==nil?".":String.fromCharCode(b+64)}catch(c){throw a.exception(c),c;}};a.solutionToString=function(b){try{for(var c="solution\n",d=p;d<q;d++){for(var h=m;h<n;h++){var l=k[h][d],f=b?l.solution:l.value;c=f==nil?c+".":c+a.valueToString(f)}c=c.rtrim()+"\n"}return c+"end\n"}catch(e){throw a.exception(e),e;}};a.paintCell=function(b){try{var c=a.canvas.getContext("2d");if(25<b.label)a.paintText(a.labelToString(b.label),
b),b.error&&a.display.errors&&a.paintErrorCircle(b);else if(b.valid){var d=-2;var h=-a.uim.edge-1,k=d+d+1,f=h+h;c.fillStyle=a.uic.light[b.color];c.fillRect(b.px-d,b.py-d,a.unit.x+k,a.unit.y+k);c.beginPath();c.lineWidth=a.uim.edge;c.strokeStyle=a.uic.edge;c.lineCap="round";c.rect(b.px-h+.5,b.py-h+.5,a.unit.x+f,a.unit.y+f);c.stroke();b.value!=nil?(d=Math.floor(a.unit.x/5),a.paintText(a.valueToString(b.value),c,{x:b.px+d,y:b.py+d,w:a.unit.x-d,h:a.unit.y-d,color:a.uic.text}),a.paintText(a.labelToString(b.label),
c,{x:b.px+4,y:b.py+4,w:d+d+4,h:d+d+4,color:a.uic.clue})):b.label!=nil&&a.paintText(a.labelToString(b.label),b,{color:a.uic.letter});b.error&&a.display.errors&&(b.value==nil?a.paintErrorDot(b):a.paintErrorCircle(b,100))}}catch(e){throw a.exception(e),e;}};a.paintCursor=function(b,c){try{if(b){var d=-a.uim.edge-1;c=d+d;var h=a.canvas.getContext("2d");h.beginPath();h.lineWidth=a.uim.edge;h.strokeStyle=a.uic.cursor;h.lineCap="round";h.rect(b.px-d+.5,b.py-d+.5,a.unit.x+c,a.unit.y+c);h.stroke()}else Object.getPrototypeOf(this).paintCursor.call(this,
b,c)}catch(l){throw a.exception(l),l;}}}Cryptarithm.prototype=new Puzzle;
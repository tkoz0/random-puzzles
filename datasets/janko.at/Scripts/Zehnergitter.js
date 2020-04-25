function Zehnergitter(){var a=this;a.constructor();a.uis.puzzle=["Number Grid","Zehnergitter"];var k=[-1,-1,-1,0,1,1,1,0],l=[-1,0,1,-1,-1,0,1,1];a.cell.min=0;a.cell.max=9;a.labels.south=1;a.enable.vmarkers=!0;a.enable.pgrid=!0;a.enable.values=!1;a.enable.currentValue=!1;a.cell.values=[0,1,2,3,4,5,6,7,8,9,nil];a.charToValue=a.charToValue.concat(["-",nil,"/",nil]);a.init=function(){Object.getPrototypeOf(a).init.call(a)};a.setup2=function(){try{--a.size.y}catch(b){throw a.exception(b),b;}};a.reset2=
function(){try{var b=10;a.keypadValues=a.keypad.numbers.slice(0,b);a.keypadValues[b++]=["\u2022",nil];if(a.level.problem){var d=0;var c=a.level.problem.replace(/\s+/g," ").trim().split(" ");for(var e=0;e<a.size.y;e++)for(var f=0;f<a.size.x;f++){var g=a.board.c[f][e];var h=c[d++];"."==h||"-"==h?g.value=nil:e==a.size.y-1?(g.label=parseInt(h),g.valid=!1):(g.value=parseInt(h),g.fixed=!0)}}if(a.level.solution)for(d=0,c=a.level.solution.replace(/\s+/g," ").trim().split(" "),e=0;e<a.size.y-1;e++)for(f=0;f<
a.size.x;f++)g=a.board.c[f][e],h=c[d++],g.solution="."==h||"-"==h?nil:parseInt(h)}catch(m){throw a.exception(m),m;}};a.check2=function(){try{for(var b=0;b<a.size.y-1;b++)for(var d=[],c=0;c<a.size.x;c++){var e=a.board.c[c][b];e.value==nil?e.error=1:void 0===d[e.value]?d[e.value]=c:(e.error=5,a.board.c[d[e.value]][b].error=5)}for(c=0;c<a.size.x;c++)for(b=0;b<a.size.y-1;b++)for(d=0;8>d;d++){e=a.board.c[c][b];var f=c+k[d],g=b+l[d];0<=f&&f<a.size.x&&0<=g&&g<a.size.y-1&&a.board.c[f][g].value==e.value&&
(e.error=3,a.board.c[f][g].error=3)}for(c=0;c<a.size.x;c++)if(a.board.c[c][a.size.y-1].label!=nil){for(b=e=0;b<a.size.y-1;b++)e+=a.board.c[c][b].value;e!=a.board.c[c][a.size.y-1].label&&(a.board.c[c][a.size.y-1].error=2)}}catch(h){throw a.exception(h),h;}};a.initValueMarkers2=function(){try{for(var b=0;b<a.size.x;b++)for(var d=0;d<a.size.y-1;d++){var c=a.board.c[b][d];if(c.value==nil)for(var e=0;10>e;e++)c.markers.set(a.marker.numberBase+e)}}catch(f){throw a.exception(f),f;}};a.updateValueMarkers2=
function(){try{for(var b=0;b<a.size.x;b++)for(var d=0;d<a.size.y-1;d++)for(var c=0;8>c;c++){var e=a.board.c[b][d];var f=b+k[c],g=d+l[c];0<=f&&f<a.size.x&&0<=g&&g<a.size.y-1&&a.board.c[f][g].markers.clear(a.marker.numberBase+e.value)}for(d=0;d<a.size.y-1;d++){f=[];for(b=0;b<a.size.x;b++)e=a.board.c[b][d],e.value!=nil&&(f[e.value]=!0);for(b=0;b<a.size.x;b++)if(e=a.board.c[b][d],e.value==nil)for(c=0;10>c;c++)f[c]&&e.markers.clear(a.marker.numberBase+c)}}catch(h){throw a.exception(h),h;}};a.makeMove2=
function(b,d,c){try{Object.getPrototypeOf(this).makeMove2.call(this,b,d,c)}catch(e){throw a.exception(e),e;}};a.paintCell=function(b){try{b.y==a.size.y-1?a.paintLabelCell(b):a.paintValueCell(b)}catch(d){throw a.exception(d),d;}};a.paintLabelCell=function(b){try{var d=a.canvas.getContext("2d");d.fillStyle=a.uic.label;d.fillRect(b.px,b.py,a.unit.x,a.unit.y);b.label!=nil&&a.paintText(b.label.toString(),b);b.error&&a.display.errors&&a.paintErrorCircle(b)}catch(c){throw a.exception(c),c;}};a.paintValueCell=
function(b){try{var d=a.canvas.getContext("2d");d.fillStyle=a.uic.light[b.color];d.fillRect(b.px,b.py,a.unit.x,a.unit.y);a.paintSymbolMarkers(b);a.paintValueMarkers(b);b.value!=nil&&a.paintText(b.value.toString(),b,{color:b.fixed?a.uic.clue:a.uic.text});b.error&&a.display.errors&&(b.value==nil?a.paintErrorDot(b):a.paintErrorCircle(b))}catch(c){throw a.exception(c),c;}}}Zehnergitter.prototype=new Puzzle;
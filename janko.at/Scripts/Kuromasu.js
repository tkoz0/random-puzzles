function Kuromasu(){var a=this;a.constructor();a.uis.puzzle=["Kuromasu"];var k=a.board.c,n=0,p=0,l=0,m=0,d={gray:nil,dark:0,light:1};a.charToValue=a.charToValue.concat(["a",d.dark,"s",d.light,"d",nil,"x",d.dark,"c",d.light,"v",nil,",",d.dark,".",d.light,"-",nil,"/",nil]);a.cell.values=[d.dark,d.light,d.gray];a.enable.dragging=!0;a.enable.pgrid=!0;a.keypad.left=nil;a.cell.nilalias=d.light;a.init=function(){Object.getPrototypeOf(a).init.call(a)};a.reset2=function(){try{n=a.labels.west;p=a.labels.north;
l=a.size.x-a.labels.east;m=a.size.y-a.labels.south;if(a.level.problem){var b=0;var c=a.level.problem.replace(/\s+/g," ").trim().split(" ");for(var e=p;e<m;e++)for(var h=n;h<l;h++){var f=k[h][e];var g=c[b++];"."!=g&&"-"!=g&&("@"==g?(call.areas=a.cell.outside,f.fixed=!0,f.valid=!1):"x"==g?f.value=d.dark:"o"==g||"?"==g?f.value=d.light:"a"<=g&&"z">=g?f.clues=g.charCodeAt(0)-96:"A"<=g&&"Z">=g?f.clues=g.charCodeAt(0)-64:f.label=parseInt(g));f.label!=nil&&(f.value=d.light);if(f.label!=nil||f.value!=nil)f.fixed=
!0}}if(a.level.solution)for(b=0,c=a.level.solution.replace(/\s+/g," ").trim().split(" "),e=p;e<m;e++)for(h=n;h<l;h++)f=k[h][e],g=c[b++],f.solution="x"==g?d.dark:d.light}catch(q){throw a.exception(q),q;}};a.check2=function(){try{for(var b=n;b<l;b++)for(var c=p;c<m;c++){var e=k[b][c];e.value==d.dark&&(b<l-1&&k[b+1][c].value==d.dark&&(e.error=k[b+1][c].error=3),c<m-1&&k[b][c+1].value==d.dark&&(e.error=k[b][c+1].error=3))}for(b=n;b<l;b++)for(c=p;c<m;c++)if(e=k[b][c],0<e.label){for(var h=1,f=b-1;f>=n;f--)if(k[f][c].value!=
d.dark)h++;else break;for(f=c-1;f>=p;f--)if(k[b][f].value!=d.dark)h++;else break;for(f=b+1;f<l;f++)if(k[f][c].value!=d.dark)h++;else break;for(f=c+1;f<m;f++)if(k[b][f].value!=d.dark)h++;else break;h!=e.label&&(e.error=2)}h=1;a.cell.nilalias=nil;for(b=n;b<l;b++)for(c=p;c<m;c++)e=k[b][c],e.value!=d.dark&&0==e.count&&a.markArea(e,h++);a.cell.nilalias=d.white;2!=h&&(a.solved=!1)}catch(g){throw a.exception(g),g;}};a.cleanSolution=function(){for(var a=n;a<l;a++)for(var c=p;c<m;c++){var e=k[a][c];e.value==
nil&&(e.value=d.light)}};a.valueToString=function(a,c){try{switch(a){case nil:return"-";case d.dark:return"x";case d.light:return c?".":"-";default:return"%"}}catch(e){return ojdebug(e.toString()),"%"}};a.paintCell=function(b){try{var c=a.canvas.getContext("2d");c.fillStyle=b.value==d.dark?a.uic.dark[b.color]:!a.solved&&a.display.errors?a.uic.light[(b.count-1)%10]:b.value==nil?a.paintToImage&&a.moves.current==nil?a.uic.white:a.uic.gray:a.uic.light[b.color];c.fillRect(b.px,b.py,a.unit.x,a.unit.y);
b.label!=nil&&(a.paintToImage?(a.paintText(b.label.toString(),b,{color:a.uic.text,scale:50}),a.paintCircle(b,{stroke:a.uic.black})):a.paintText(b.label.toString(),b,{color:a.uic.text}));a.paintSymbolMarkers(b);b.error&&a.display.errors&&(b.label!=nil?a.paintErrorCircle(b):a.paintErrorDot(b))}catch(e){throw a.exception(e),e;}};a.paintCurrentValue=function(){try{var b=a.uie.value,c=b.getContext("2d");c.fillStyle=a.current.value==d.gray?a.uic.gray:a.current.value==d.dark?a.uic.black:a.uic.white;c.fillRect(0,
0,b.width,b.height)}catch(e){throw a.exception(e),e;}}}Kuromasu.prototype=new Puzzle;

function Winds(){var c=this;c.constructor();c.uis.puzzle=["Four Winds","Vier Winde"];var e=c.board.c,k=0,l=0;c.charToValue=c.charToValue.concat(["n",1,"s",4,"e",2,"w",8,"h",10,"v",5,"x",nil,",",nil,".",nil,"-",nil,"/",nil]);c.enable.dragging=!0;c.enable.pgrid=!0;c.enable.values=!1;c.enable.currentValue=!1;c.keypad.left=nil;c.uic.smarkers="#000000";c.init=function(){Object.getPrototypeOf(c).init.call(c)};c.reset2=function(){try{k=c.size.x;l=c.size.y;if(c.level.problem){var a=0;var b=c.level.problem.replace(/\s+/g,
" ").trim().split(" ");for(var d=0;d<l;d++)for(var h=0;h<k;h++){var f=e[h][d];var g=b[a++];"."!=g&&"-"!=g&&("n"==g?f.value=1:"e"==g?f.value=2:"s"==g?f.value=4:"w"==g?f.value=8:"ns"==g||"v"==g?f.value=5:"ew"==g||"h"==g?f.value=10:f.label=parseInt(g));if(f.value!=nil||f.label!=nil)f.fixed=!0}}if(c.level.solution)for(a=0,b=c.level.solution.replace(/\s+/g," ").trim().split(" "),d=0;d<l;d++)for(h=0;h<k;h++)if(f=e[h][d],g=b[a++],"."==g||"-"==g)f.solution=nil;else if("n"==g)f.solution=1;else if("e"==g)f.solution=
2;else if("s"==g)f.solution=4;else if("w"==g)f.solution=8;else if("ns"==g||"v"==g)f.solution=5;else if("ew"==g||"h"==g)f.solution=10}catch(m){throw c.exception(m),m;}};c.check2=function(){try{for(var a=0;a<k;a++)for(var b=0;b<l;b++)if(e[a][b].label!=nil){var d=e[a][b];var h=0;d.checked=!0;for(var f=a;0<f&&e[f-1][b].value!=nil&&0!=(e[f-1][b].value&2)&&(h++,f--,e[f][b].checked=!0,0!=(e[f][b].value&8)););for(f=a;f<k-1&&e[f+1][b].value!=nil&&0!=(e[f+1][b].value&8)&&(h++,f++,e[f][b].checked=!0,0!=(e[f][b].value&
2)););for(y1=b;0<y1&&e[a][y1-1].value!=nil&&0!=(e[a][y1-1].value&4)&&(h++,y1--,e[a][y1].checked=!0,0!=(e[a][y1].value&1)););for(y1=b;y1<l-1&&e[a][y1+1].value!=nil&&0!=(e[a][y1+1].value&1)&&(h++,y1++,e[a][y1].checked=!0,0!=(e[a][y1].value&4)););e[a][b].label!=h&&(e[a][b].error=3)}for(a=0;a<k;a++)for(b=0;b<l;b++)d=e[a][b],d.checked||d.fixed||(d.error=1)}catch(g){throw c.exception(g),g;}};c.cleanSolution=function(){for(var a=0;a<k;a++)for(var b=0;b<l;b++)e[a][b].label!=nil&&(e[a][b].value=nil);for(a=
0;a<k;a++)for(b=0;b<l;b++){var c=e[a][b];if(10==c.value){if(0==a||e[a-1][b].value!=nil&&0==(e[a-1][b].value&2))c.value=2;if(a==k-1||e[a+1][b].value!=nil&&0==(e[a+1][b].value&8))c.value=8}if(5==c.value){if(0==b||e[a][b-1].value!=nil&&0==(e[a][b-1].value&4))c.value=4;if(b==l-1||e[a][b+1].value!=nil&&0==(e[a][b+1].value&1))c.value=1}}};c.dragTo2=function(a,b){if(a.x==b.x-1&&b.y==a.y){var d=b.value==nil?0:b.value;b.label!=nil?c.makeMove(b,d|8):c.makeMove(b,(d|8)&10);d=a.value==nil?0:a.value;a.label!=
nil?c.makeMove(a,d|2):c.makeMove(a,(d|2)&10)}a.x==b.x+1&&b.y==a.y&&(d=b.value==nil?0:b.value,b.label!=nil?c.makeMove(b,d|2):c.makeMove(b,(d|2)&10),d=a.value==nil?0:a.value,a.label!=nil?c.makeMove(a,d|8):c.makeMove(a,(d|8)&10));a.y==b.y+1&&b.x==a.x&&(d=b.value==nil?0:b.value,b.label!=nil?c.makeMove(b,d|4):c.makeMove(b,(d|4)&5),d=a.value==nil?0:a.value,a.label!=nil?c.makeMove(a,d|1):c.makeMove(a,(d|1)&5));a.y==b.y-1&&b.x==a.x&&(d=b.value==nil?0:b.value,b.label!=nil?c.makeMove(b,d|1):c.makeMove(b,(d|
1)&5),d=a.value==nil?0:a.value,a.label!=nil?c.makeMove(a,d|4):c.makeMove(a,(d|4)&5))};c.valueToString=function(a,b){switch(a){case 16:return b?"x":"-";case 15:return"nsew";case 0:return"o";case 4:return"s";case 1:return"n";case 2:return"e";case 8:return"w";case 3:return"ne";case 9:return"nw";case 6:return"se";case 12:return"sw";case 5:return"ns";case 10:return"ew";default:return"-"}};c.paintCell=function(a){try{var b=c.canvas.getContext("2d");b.fillStyle=a.label!=nil?c.uic.black:c.uic.light[0];b.fillRect(a.px,
a.py,c.unit.x,c.unit.y);if(a.value!=nil){var d=Math.floor((c.unit.x-Math.floor(c.unit.x/4))/2),e=c.unit.x-2*d,f=e+d;b.fillStyle=c.display.errors&&0<a.count?c.uic.dark[a.count%10]:0==a.color?c.uic.line:c.uic.dark[a.color];0!=(a.value&1)&&b.fillRect(a.px+d,a.py,e,f);0!=(a.value&4)&&b.fillRect(a.px+d,a.py+d,e,f);0!=(a.value&2)&&b.fillRect(a.px+d,a.py+d,f,e);0!=(a.value&8)&&b.fillRect(a.px,a.py+d,f,e)}a.label>nil&&c.paintText(a.label.toString(),a,{color:c.uic.white});c.paintSymbolMarkers(a);a.error&&
c.display.errors&&(a.value==nil&&a.label==nil?c.paintErrorDot(a):c.paintErrorCircle(a))}catch(g){throw c.exception(g),g;}}}Winds.prototype=new Puzzle;
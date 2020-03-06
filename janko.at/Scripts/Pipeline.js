function Pipeline(){var a=this;a.constructor();a.uis.puzzle=["Pipeline"];var k=a.board.c,n=0,p=0,h=null;a.charToValue=a.charToValue.concat(["-",nil,"/",nil,".",0,"o",0,",",16,"x",16]);a.enable.dragging=!0;a.keypad.left=nil;a.labels.north=a.labels.west=1;a.cell.nilalias=16;a.uic.clues="#333333";a.init=function(){Object.getPrototypeOf(a).init.call(a)};a.reset2=function(){try{n=a.size.x;p=a.size.y;h={x:nil,y:nil};if(a.level.problem){var c=0;var b=a.level.problem.replace(/\s+/g," ").trim().split(" ");
for(var e=1;e<p;e++)for(var d=1;d<n;d++){var f=k[d][e];var g=b[c++];if("."!=g&&"-"!=g)if(isNaN(parseInt(g))){var m=0;g.contains("n")&&(m|=1);g.contains("s")&&(m|=4);g.contains("e")&&(m|=2);g.contains("w")&&(m|=8);0!=m&&(f.value=m)}else f.value=parseInt(g);f.value!=nil&&(f.fixed=!0)}}if(a.level.solution)for(c=0,b=a.level.solution.replace(/\s+/g," ").trim().split(" "),e=1;e<p;e++)for(d=1;d<n;d++)f=k[d][e],g=b[c++],"-"==g||"."==g?f.solution=nil:(m=0,g.contains("n")&&(m|=1),g.contains("s")&&(m|=4),g.contains("e")&&
(m|=2),g.contains("w")&&(m|=8),0!=m&&(f.solution=m));if(a.level.clabels)for(c=0,b=a.level.clabels.replace(/\s+/g," ").trim().split(" "),d=1;d<a.size.x;d++)f=a.board.c[d][0],g=b[c++],f.label="-"==g||"."==g?nil:parseInt(g);if(a.level.rlabels)for(c=0,b=a.level.rlabels.replace(/\s+/g," ").trim().split(" "),e=1;e<a.size.y;e++)f=a.board.c[0][e],g=b[c++],f.label="-"==g||"."==g?nil:parseInt(g);if(a.level.solution&&!a.level.clabels&&!a.level.clabels){for(d=1;d<n;d++)for(f=k[d][0],f.label=0,e=1;e<p;e++)k[d][e].solution!=
nil&&f.label++;for(e=1;e<p;e++)for(f=k[0][e],f.label=0,d=1;d<n;d++)k[d][e].solution!=nil&&f.label++}a.reset2labels()}catch(q){throw a.exception(q),q;}};a.check2=function(){try{for(var c=function(d,e,f){try{var g=k[d][e];if(g.value!=nil){g.checked=!0;g.count=f;var h=16;15==g.value&&(2==b?h=8:8==b?h=2:1==b?h=4:4==b&&(h=1));if(8==h||16==h&&0!=(g.value&8))if(1==d)g.error=1;else if(15!=g.value||2==b){b=2;var l=k[d-1][e];l.value==nil||0==(l.value&2)?g.error=1:l.checked&&15!=l.value||c(d-1,e,f)}if(2==h||
16==h&&0!=(g.value&2))if(d==n-1)g.error=1;else if(15!=g.value||8==b)b=8,l=k[d+1][e],l.value==nil||0==(l.value&8)?g.error=1:l.checked&&15!=l.value||c(d+1,e,f);if(1==h||16==h&&0!=(g.value&1))if(1==e)g.error=1;else if(15!=g.value||4==b)b=4,l=k[d][e-1],l.value==nil||0==(l.value&4)?g.error=1:l.checked&&15!=l.value||c(d,e-1,f);if(4==h||16==h&&0!=(g.value&4))if(e==p-1)g.error=1;else if(15!=g.value||1==b)b=1,l=k[d][e+1],l.value==nil||0==(l.value&1)?g.error=1:l.checked&&15!=l.value||c(d,e+1,f)}}catch(r){throw a.exception(r),
r;}},b=0,e=0,d=1;d<n;d++)for(var f=1;f<p;f++){var g=k[d][f];g.checked||g.value==nil||16==g.value||c(d,f,e++)}1!=e&&(a.solved=!1);for(d=1;d<n;++d)if(k[d][0].label!=nil){var h=0;for(f=1;f<p;++f)k[d][f].value!=nil&&16!=k[d][f].value&&h++;h!=k[d][0].label&&(k[d][0].error=2)}for(f=1;f<p;++f)if(k[0][f].label!=nil){h=0;for(d=1;d<n;++d)k[d][f].value!=nil&&16!=k[d][f].value&&h++;h!=k[0][f].label&&(k[0][f].error=2)}for(d=1;d<n;d++)for(f=1;f<p;f++)g=k[d][f],g.checked||g.value==nil||16==g.value||(g.error=3),
15!=g.value||1!=d&&d!=n-1&&1!=f&&f!=p-1&&0!=(k[d-1][f].value&2)&&0!=(k[d+1][f].value&8)&&0!=(k[d][f-1].value&4)&&0!=(k[d][f+1].value&1)||(g.error=1)}catch(q){throw a.exception(q),q;}};a.solve2=function(){try{for(var c=1;c<n;c++)for(var b=1;b<p;b++){var e=k[c][b];if(e.fixed){if(0!=(e.value&1)){var d=k[e.x][e.y-1];d.value=d.value==nil?4:d.value|4}0!=(e.value&4)&&(d=k[e.x][e.y+1],d.value=d.value==nil?1:d.value|1);0!=(e.value&8)&&(d=k[e.x-1][e.y],d.value=d.value==nil?2:d.value|2);0!=(e.value&2)&&(d=k[e.x+
1][e.y],d.value=d.value==nil?8:d.value|8)}}}catch(f){throw a.exception(f),f;}};a.makeMove2=function(c,b,e){try{if(void 0===b||null==b)b=a.current.value==c.value||a.current.value!=nil&&0!=a.current.value&&16!=a.current.value?c.value==nil?0:0==c.value?16:nil:a.current.value;Object.getPrototypeOf(this).makeMove2.call(this,c,b,e)}catch(d){throw a.exception(d),d;}};a.makeMove2Alt=function(c,b,e){try{if(void 0===b||null==b)b=a.current.value==c.value||a.current.value!=nil&&0!=a.current.value&&16!=a.current.value?
c.value==nil?16:16==c.value?0:nil:a.current.value;Object.getPrototypeOf(this).makeMove2.call(this,c,b,e)}catch(d){throw a.exception(d),d;}};a.dragTo2=function(c,b){try{if(c.x==b.x-1&&b.y==c.y){switch(b.value){case nil:case 16:case 0:a.makeMove(b,8);break;case 10:a.makeMove(b,10);break;case 12:a.makeMove(b,12);break;case 9:a.makeMove(b,9);break;case 1:a.makeMove(b,9);break;case 2:a.makeMove(b,10);break;case 4:a.makeMove(b,12);break;case 8:a.makeMove(b,8);break;case 5:h.y==b.y-1?a.makeMove(b,9):h.y==
b.y+1?a.makeMove(b,12):a.makeMove(b,8);break;case 3:h.y==b.y-1?a.makeMove(b,9):h.x==b.x+1?a.makeMove(b,10):a.makeMove(b,8);break;case 6:h.y==b.y+1?a.makeMove(b,12):h.x==b.x+1?a.makeMove(b,10):a.makeMove(b,8)}switch(c.value){case nil:case 16:case 0:a.makeMove(c,2);break;case 5:a.makeMove(c,2);break;case 10:a.makeMove(c,10);break;case 3:a.makeMove(c,3);break;case 6:a.makeMove(c,6);break;case 12:a.makeMove(c,2);break;case 9:a.makeMove(c,2);break;case 1:a.makeMove(c,3);break;case 2:a.makeMove(c,2);break;
case 4:a.makeMove(c,6);break;case 8:a.makeMove(c,10)}}if(c.x==b.x+1&&b.y==c.y){switch(b.value){case nil:case 16:case 0:a.makeMove(b,2);break;case 10:a.makeMove(b,10);break;case 3:a.makeMove(b,3);break;case 6:a.makeMove(b,6);break;case 1:a.makeMove(b,3);break;case 2:a.makeMove(b,2);break;case 4:a.makeMove(b,6);break;case 8:a.makeMove(b,10);break;case 5:h.y==b.y-1?a.makeMove(b,3):h.y==b.y+1?a.makeMove(b,6):a.makeMove(b,2);break;case 12:h.x==b.x-1?a.makeMove(b,10):h.y==b.y+1?a.makeMove(b,6):a.makeMove(b,
2);break;case 9:h.y==b.y-1?a.makeMove(b,3):h.x==b.x-1?a.makeMove(b,10):a.makeMove(b,2)}switch(c.value){case nil:case 16:case 0:a.makeMove(c,8);break;case 5:a.makeMove(c,8);break;case 10:a.makeMove(c,10);break;case 3:a.makeMove(c,8);break;case 6:a.makeMove(c,8);break;case 12:a.makeMove(c,12);break;case 9:a.makeMove(c,9);break;case 1:a.makeMove(c,9);break;case 2:a.makeMove(c,10);break;case 4:a.makeMove(c,12);break;case 8:a.makeMove(c,8)}}if(c.y==b.y+1&&b.x==c.x){switch(b.value){case nil:case 16:case 0:a.makeMove(b,
4);break;case 6:a.makeMove(b,6);break;case 12:a.makeMove(b,12);break;case 1:a.makeMove(b,5);break;case 2:a.makeMove(b,6);break;case 4:a.makeMove(b,4);break;case 8:a.makeMove(b,12);break;case 5:a.makeMove(b,5);break;case 10:h.x==b.x-1?a.makeMove(b,12):h.x==b.x+1?a.makeMove(b,6):a.makeMove(b,4);break;case 3:h.y==b.y-1?a.makeMove(b,5):h.x==b.x+1?a.makeMove(b,6):a.makeMove(b,4);break;case 9:h.x==b.x-1?a.makeMove(b,12):h.y==b.y-1?a.makeMove(b,5):a.makeMove(b,4)}switch(c.value){case nil:case 16:case 0:a.makeMove(c,
1);break;case 5:a.makeMove(c,5);break;case 10:a.makeMove(c,1);break;case 3:a.makeMove(c,3);break;case 6:a.makeMove(c,1);break;case 12:a.makeMove(c,1);break;case 9:a.makeMove(c,9);break;case 1:a.makeMove(c,1);break;case 2:a.makeMove(c,3);break;case 4:a.makeMove(c,5);break;case 8:a.makeMove(c,9)}}if(c.y==b.y-1&&b.x==c.x){switch(b.value){case nil:case 16:case 0:a.makeMove(b,1);break;case 5:a.makeMove(b,5);break;case 3:a.makeMove(b,3);break;case 9:a.makeMove(b,9);break;case 1:a.makeMove(b,1);break;case 2:a.makeMove(b,
3);break;case 4:a.makeMove(b,5);break;case 8:a.makeMove(b,9);break;case 10:h.x==b.x-1?a.makeMove(b,9):h.x==b.x+1?a.makeMove(b,3):a.makeMove(b,1);break;case 6:h.y==b.y+1?a.makeMove(b,5):h.x==b.x+1?a.makeMove(b,6):a.makeMove(b,4);break;case 12:h.x==b.x-1?a.makeMove(b,3):h.y==b.y+1?a.makeMove(b,5):a.makeMove(b,4)}switch(c.value){case nil:case 16:case 0:a.makeMove(c,4);break;case 5:a.makeMove(c,5);break;case 10:a.makeMove(c,4);break;case 3:a.makeMove(c,4);break;case 6:a.makeMove(c,6);break;case 12:a.makeMove(c,
12);break;case 9:a.makeMove(c,4);break;case 1:a.makeMove(c,5);break;case 2:a.makeMove(c,6);break;case 4:a.makeMove(c,4);break;case 8:a.makeMove(c,12)}}h.x=b.x;h.y=b.y;a.moveTo(c);a.current.value=0}catch(e){throw a.exception(e),e;}};a.dragTo2Alt=function(c,b){try{b.value!=nil&&a.makeMove(b,nil,a.current.color),c.value!=nil&&a.makeMove(c,nil,a.current.color),a.moveTo(c)}catch(e){throw a.exception(e),e;}};a.valueToString=function(a,b){switch(a){case 16:return b?"x":"-";case 15:return"nsew";case 0:return"o";
case 4:return"s";case 1:return"n";case 2:return"e";case 8:return"w";case 3:return"ne";case 9:return"nw";case 6:return"se";case 12:return"sw";case 5:return"ns";case 10:return"ew";default:return"-"}};a.paintCell=function(c){try{c.areas==a.cell.label?a.paintLabelCell(c):a.paintValueCell(c)}catch(b){throw a.exception(b),b;}};a.paintLabelCell=function(c){try{var b=a.canvas.getContext("2d");b.fillStyle=a.uic.label;b.fillRect(c.px,c.py,a.unit.x,a.unit.y);c.label!=nil&&a.paintText(c.label.toString(),c);c.error&&
a.display.errors&&a.paintErrorCircle(c)}catch(e){throw a.exception(e),e;}};a.paintValueCell=function(c){try{var b=a.canvas.getContext("2d");b.fillStyle=a.uic.light[0];b.fillRect(c.px,c.py,a.unit.x,a.unit.y);if(c.value!=nil){var e=Math.floor((a.unit.x-Math.floor(a.unit.x/4))/2),d=a.unit.x-2*e,f=d+e;b.fillStyle=a.display.errors&&0<c.count?a.uic.dark[c.count%10]:c.fixed?a.uic.clues:0==c.color?a.uic.line:a.uic.dark[c.color];16!=c.value||a.solved||a.paintCross(c);0==c.value&&b.fillRect(c.px+e,c.py+e,d,
d);0!=(c.value&1)&&b.fillRect(c.px+e,c.py,d,f);0!=(c.value&4)&&b.fillRect(c.px+e,c.py+e,d,f);0!=(c.value&2)&&b.fillRect(c.px+e,c.py+e,f,d);0!=(c.value&8)&&b.fillRect(c.px,c.py+e,f,d);!c.fixed||1!=c.value&&2!=c.value&&4!=c.value&&8!=c.value||a.paintCircle(c,{fill:a.uic.clue,stroke:a.uic.clue,scale:50})}a.paintSymbolMarkers(c);c.error&&a.display.errors&&(c.label!=nil?a.paintErrorCircle(c):c.value==nil&&a.paintErrorDot(c))}catch(g){throw a.exception(g),g;}};a.paintCurrentValue=function(){try{var c=a.uie.value,
b=c.getContext("2d");b.fillStyle=a.uic.white;b.fillRect(0,0,c.width,c.height);a.current.value!=nil&&(0==a.current.value?a.paintSquare(b,{x:0,y:0,w:c.width,h:c.height,scale:30,stroke:a.uic.none,fill:a.uic.line}):16==a.current.value?a.paintCross(b,{x:0,y:0,w:c.width,h:c.height,stroke:a.uic.cross,fill:a.uic.cross}):a.paintText("#",b,{x:0,y:0,w:c.width,h:c.height,scale:90,stroke:a.uic.black,fill:a.uic.black}))}catch(e){throw a.exception(e),e;}}}Pipeline.prototype=new Puzzle;

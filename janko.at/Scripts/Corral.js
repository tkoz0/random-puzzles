function Corral(){var a=this;a.constructor();a.uis.puzzle=["Corral (Cave)","Corral (H\u00f6hle)"];var h=a.board.c,m=a.board.h,l=a.board.v,n=0,p=0,g={outside:0,inside:1,n:2,s:3,e:4,w:5};a.charToValue=a.charToValue.concat(["8",g.n,"2",g.s,"4",g.w,"6",g.e,"i",g.n,"m",g.s,"j",g.w,"k",g.e,"a",g.outside,"s",g.inside,"d",nil,"x",g.outside,"c",g.inside,"v",nil,",",g.outside,".",g.inside,"-",nil,"/",nil]);a.cell.values=[g.inside,g.outside,nil];a.line.values=[a.line.wall,a.line.cross,a.line.grid];a.enable.dragging=
!0;a.enable.pnodes=!0;a.enable.pgridlines=!0;a.enable.pedgelines=!1;a.enable.cells=!0;a.enable.lines=!a.config.touch;a.keypad.left=nil;a.init=function(){Object.getPrototypeOf(a).init.call(a)};a.reset2=function(){try{n=a.size.x-a.labels.east;p=a.size.y-a.labels.south;if(a.level.problem){var b=0;var f=a.level.problem.replace(/\s+/g," ").trim().split(" ");for(var e=0;e<p;e++)for(var k=0;k<n;k++){var c=h[k][e];var d=f[b++];"."==d||"-"==d?c.value=nil:"o"==d?c.value=g.inside:"x"==d?c.value=g.outside:"?"==
d?(c.label=-2,a.level.options.contains("outside")||(c.value=g.inside)):"@"==d?(call.areas=a.cell.outside,c.fixed=!0,c.valid=!1):(d.endsWith("o")?(d=d.substring(0,d.length-1),c.clues=1):d.endsWith("s")&&(d=d.substring(0,d.length-1),c.clues=2),c.label=parseInt(d),a.level.options.contains("outside")||(c.value=g.inside));if(c.value!=nil||c.label!=nil&&!a.level.options.contains("outside"))c.fixed=!0}}if(a.level.solution){b=0;f=a.level.solution.replace(/\s+/g," ").trim().split(" ");for(e=0;e<p;e++)for(k=
0;k<n;k++)c=h[k][e],d=f[b++],c.solution="-"==d||"."==d?g.outside:g.inside;for(k=0;k<n;k++)for(e=0;e<p;e++)c=h[k][e],0==k&&c.solution==g.inside&&(l[0][e].solution=a.line.wall),k==n-1&&c.solution==g.inside&&(l[n][e].solution=a.line.wall),0==e&&c.solution==g.inside&&(m[k][0].solution=a.line.wall),e==p-1&&c.solution==g.inside&&(m[k][p].solution=a.line.wall),k<n-1&&c.solution!=h[k+1][e].solution&&(l[k+1][e].solution=a.line.wall),e<p-1&&c.solution!=h[k][e+1].solution&&(m[k][e+1].solution=a.line.wall)}}catch(q){throw a.exception(q),
q;}};a.check2=function(){var b;try{for(var f=0,e=0;e<a.board.l.length;e++){var k=a.board.l[e];k.value!=a.line.wall||k.checked||a.markPath(k,f++)}if(1!=f)for(a.solved=!1,e=0;e<a.board.l.length;e++)1==a.board.l[e].error&&(a.board.l[e].error=0);if(1==f){for(var c=0;c<n;c++)for(var d=b=0;d<p;d++)m[c][d].value==a.line.wall&&b++,h[c][d].label!=nil&&0==b%2&&(h[c][d].error=2);for(d=0;d<p;d++)for(c=b=0;c<n;c++)l[c][d].value==a.line.wall&&b++,h[c][d].label!=nil&&0==b%2&&(h[c][d].error=2)}for(c=0;c<n;c++)for(d=
0;d<p;d++)if(h[c][d].label!=nil&&-2!=h[c][d].label){var q=1;for(b=c;0<=b&&l[b][d].value!=a.line.wall;b--)q++;for(b=c;b<n-1&&l[b+1][d].value!=a.line.wall;b++)q++;for(b=d;0<=b&&m[c][b].value!=a.line.wall;b--)q++;for(b=d;b<p-1&&m[c][b+1].value!=a.line.wall;b++)q++;h[c][d].label!=q&&(h[c][d].error=3)}if(a.level.options.contains("no2x2"))for(c=0;c<n-1;c++)for(d=0;d<p-1;d++)h[c][d].value==g.inside&&(q=0,h[c][d+1].value==g.inside&&q++,h[c+1][d+1].value==g.inside&&q++,h[c+1][d].value==g.inside&&q++,3==q&&
(h[c][d].error=4,h[c+1][d].error=4,h[c][d+1].error=4,h[c+1][d+1].error=4))}catch(r){throw a.exception(r),r;}};a.markPath=function(b,f){try{var e=b;b.checked=!0;b.count=f;for(var g=0;2>g;g++){var c=b.x,d=b.y;if(0==g)if(b.type==a.item.hline){var h=4;c+=1}else h=8,d+=1;else h=b.type==a.item.hline?1:2;for(;;)if(1!=h&&c<n&&m[c][d].value==a.line.wall){e=m[c][d];if(e.checked)break;e.checked=!0;e.count=f;h=4;c++}else if(2!=h&&d<p&&l[c][d].value==a.line.wall){e=l[c][d];if(e.checked)break;e.checked=!0;e.count=
f;h=8;d++}else if(4!=h&&0<c&&m[c-1][d].value==a.line.wall){e=m[c-1][d];if(e.checked)break;e.checked=!0;e.count=f;h=1;c--}else if(8!=h&&0<d&&l[c][d-1].value==a.line.wall){e=l[c][d-1];if(e.checked)break;e.checked=!0;e.count=f;h=2;d--}else{0==f&&(e.error=1);break}c==b.x&&d==b.y||0!=f||(e.error=1)}}catch(r){throw a.exception(r),r;}};a.solve2=function(){try{for(var b=0;b<n;b++)for(var f=0;f<p;f++)h[b][f].label!=nil&&(0==b&&(l[b][f].value=a.line.wall),0==f&&(m[b][f].value=a.line.wall),b==n-1&&(l[b+1][f].value=
a.line.wall),f==p-1&&(m[b][f+1].value=a.line.wall))}catch(e){throw a.exception(e),e;}};a.cleanSolution=function(){try{for(var b=!1,f=0;f<p;f++){b=l[0][f].value==a.line.wall;for(var e=0;e<n;e++)h[e][f].value=b?g.inside:g.outside,e<n&&l[e+1][f].value==a.line.wall&&(b=!b)}}catch(k){throw a.exception(k),k;}};a.showSolution2=function(){try{for(var b=0;b<a.board.a.length;b++){var f=a.board.a[b];f.value=f.solution}}catch(e){throw a.exception(e),e;}};a.makeMove2=function(b,f,e){try{var k=b;f&&(f==g.n?b=m[b.x][b.y]:
f==g.s?b=m[b.x][b.y+1]:f==g.w?b=l[b.x][b.y]:f==g.e&&(b=l[b.x+1][b.y]));if(k!=b){if(b.fixed||!b.valid)return;f=null}Object.getPrototypeOf(this).makeMove2.call(this,b,f,e);k!=b&&(a.current.item=k);if(b.type==a.item.cell&&b.value!=nil){var c=b.x,d=b.y;0==c?l[c][d].value=h[c][d].value==g.outside?a.line.grid:a.line.wall:h[c-1][d].value!=nil&&l[c][d].valid&&!l[c][d].fixed&&(h[c-1][d].value==b.value&&(l[c][d].value=a.line.grid),h[c-1][d].value!=b.value&&(l[c][d].value=a.line.wall,l[c][d].color=b.color));
c==n-1?l[c+1][d].value=h[c][d].value==g.outside?a.line.grid:a.line.wall:h[c+1][d].value!=nil&&l[c+1][d].valid&&!l[c+1][d].fixed&&(h[c+1][d].value==b.value&&(l[c+1][d].value=a.line.grid),h[c+1][d].value!=b.value&&(l[c+1][d].value=a.line.wall,l[c+1][d].color=b.color));0==d?m[c][d].value=h[c][d].value==g.outside?a.line.grid:a.line.wall:h[c][d-1].value!=nil&&m[c][d].valid&&!m[c][d].fixed&&(h[c][d-1].value==b.value&&(m[c][d].value=a.line.grid),h[c][d-1].value!=b.value&&(m[c][d].value=a.line.wall,m[c][d].color=
b.color));d==p-1?m[c][d+1].value=h[c][d].value==g.outside?a.line.grid:a.line.wall:h[c][d+1].value!=nil&&m[c][d+1].valid&&!m[c][d+1].fixed&&(h[c][d+1].value==b.value&&(m[c][d+1].value=a.line.grid),h[c][d+1].value!=b.value&&(m[c][d+1].value=a.line.wall,m[c][d+1].color=b.color))}}catch(q){throw a.exception(q),q;}};a.valueToString=function(a,f){try{return a==nil?"-":a==g.cross?f?"x":"-":a==g.outside?f?"o":"-":a==g.inside?"x":"?"}catch(e){return ojdebug(e.toString()),"%"}};a.onValues=function(){try{a.config.touch?
a.enable.lines?(a.enable.lines=!1,a.enable.cells=!0,a.current.type=a.item.cell,a.current.value=nil):(a.enable.lines=!0,a.enable.cells=!1,a.current.type=a.item.line,a.current.value=a.line.wall):Object.getPrototypeOf(this).onValues.call(this)}catch(b){throw a.exception(b),b;}};a.paintCell=function(b){try{var f=a.canvas.getContext("2d");f.fillStyle=b.value==g.inside?0==b.color?a.uic.gray:a.uic.light[b.color]:a.uic.white;f.fillRect(b.px,b.py,a.unit.x,a.unit.y);if(b.value==g.outside&&!a.solved){var e=
{width:1,fill:a.uic.none,stroke:a.uic.dark[b.color],color:a.uic.dark[b.color]};a.level.options.contains("outside")?a.paintSquare(b,e):a.paintCross(b,e)}0!=b.clues&&(e={width:1,stroke:a.uic.black},1==b.clues?a.paintCircle(b,e):2==b.clues&&a.paintSquare(b,e));-2==b.label?a.paintText("?",b,{color:a.uic.text}):b.label!=nil&&a.paintText(b.label.toString(),b,{color:a.uic.text});a.paintSymbolMarkers(b);b.error&&a.display.errors&&a.paintErrorCircle(b)}catch(k){throw a.exception(k),k;}};a.paintNode=function(b){try{var f=
a.canvas.getContext("2d");f.fillStyle=a.uic.wall;f.fillRect(b.px+.5-a.uim.wall/2,b.py+.5-a.uim.wall/2,a.uim.wall,a.uim.wall)}catch(e){throw a.exception(e),e;}};a.paintCurrentValue=function(){try{var b=a.uie.value,f=b.getContext("2d");f.fillStyle=a.uic.white;f.fillRect(0,0,b.width,b.height);if(a.current.type==a.item.cell)a.current.value==g.inside?a.paintSquare(f,{x:0,y:0,w:b.width,h:b.height,fill:a.uic.gray,stroke:a.uic.gray,scale:60}):a.current.value==g.outside&&(a.level.options.contains("outside")?
a.paintSquare(f,{x:0,y:0,w:b.width,h:b.height,fill:a.uic.white,stroke:a.uic.black,scale:60}):a.paintCross(f,{x:0,y:0,w:b.width,h:b.height,width:2,color:a.uic.black,scale:60}));else if(a.current.type>=a.item.line){var e={x:0,y:0,w:b.width,h:b.height,color:a.uic.black,bold:!0,scale:80};a.current.value==a.line.wall?a.paintText("\u2014",f,e):a.current.value==a.line.cross?a.paintText("\u00d7",f,e):a.current.value==a.line.grid&&a.paintText("\u2022",f,e)}}catch(k){throw a.exception(k),k;}}}
Corral.prototype=new Puzzle;

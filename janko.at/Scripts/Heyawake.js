function Heyawake(){var a=this;a.constructor();a.uis.puzzle=["Heyawake"];var g=a.board.c,v=a.alist,q=0,r=0,l=0,m=0;a.variant.heyawake=["heyawake",["Heyawake"]];a.variant.std=["std",["Heyawake"]];a.variant.aye=["aye",["Heyawake (\u2200\u4eba\u2203\uff28\uff25\uff39\uff21)"]];a.variant.sleep=["sleep",["Heyawake (Sleep)"]];var x=nil;a.charToValue=a.charToValue.concat(["a",0,"s",1,"d",nil,"x",0,"c",1,"v",nil,",",0,".",1,"-",nil,"/",nil]);a.cell.values=[0,1,x];a.enable.dragging=!0;a.keypad.left=nil;a.cell.nilalias=
1;a.uic.dark[0]="#666666";a.init=function(){Object.getPrototypeOf(a).init.call(a)};a.reset2=function(){try{a.variant.init(a.variant.heyawake,a.variant.std);a.variant.isv(a.variant.std)&&(a.uis.puzzle=a.variant.std[1]);a.variant.isv(a.variant.aye)&&(a.uis.puzzle=a.variant.aye[1]);a.variant.isv(a.variant.sleep)&&(a.uis.puzzle=a.variant.sleep[1]);q=a.labels.west;r=a.labels.north;l=a.size.x-a.labels.east;m=a.size.y-a.labels.south;a.level.areas&&a.reset2areas(q,r,l,m,a.level.areas);if(a.level.problem){var c=
0;var n=a.level.problem.replace(/\s+/g," ").trim().split(" ");for(var f=r;f<m;f++)for(var d=q;d<l;d++){var b=n[c++];var h=g[d][f];"."==b||"-"==b?h.label=h.value=nil:"x"==b?h.value=0:"o"==b?h.value=1:"s"==b&&a.variant.isv(a.variant.sleep)?(h.label=-2,h.value=1):b.match(/^[0-9]+$/)?h.label=parseInt(b):"a"<=b&&"z">=b?h.clues=b.charCodeAt(0)-96:"A"<=b&&"Z">=b&&(h.clues=b.charCodeAt(0)-64);h.value!=nil&&(h.fixed=!0)}}if(a.level.solution)for(c=0,n=a.level.solution.replace(/\s+/g," ").trim().split(" "),
f=r;f<m;f++)for(d=q;d<l;d++)h=g[d][f],b=n[c++],h.solution="x"==b?0:1}catch(t){throw a.exception(t),t;}};a.check2=function(){var c,n,f;try{for(var d=q;d<l;d++)for(var b=r;b<m;b++)g[d][b].value==nil&&(g[d][b].error=5);for(d=q;d<l;d++)for(b=r;b<m;b++)0==g[d][b].value&&(d<l-1&&0==g[d+1][b].value&&(g[d][b].error=4,g[d+1][b].error=4),b<m-1&&0==g[d][b+1].value&&(g[d][b].error=4,g[d][b+1].error=4));if(!a.variant.isv(a.variant.sleep))for(c=1;c<v.length;c++){for(var h=null,t=0,k=0;k<v[c].length;k++){var e=
v[c][k];e.label!=nil&&(h=e);0==e.value&&t++}null!=h&&h.label!=t&&(h.error=1)}if(a.variant.isv(a.variant.aye))for(c=1;c<v.length;c++){var p=f=999999;for(k=h=t=0;k<v[c].length;k++)e=v[c][k],e.x<f&&(f=e.x),e.y<p&&(p=e.y),e.x>t&&(t=e.x),e.y>h&&(h=e.y);t=t-f+1;h=h-p+1;for(k=0;k<v[c].length;k++)if(e=v[c][k],0==e.value){var y=g[f+t-(e.x-f)-1][p+h-(e.y-p)-1];if(y.areas!=e.areas||0!=y.value)e.error=3}}if(a.variant.isv(a.variant.sleep))for(y=[1,0,-1,0],h=[0,1,0,-1],d=q;d<l;++d)for(b=r;b<m;++b)if(e=g[d][b],
-2==e.label){for(k=c=0;4>k;k++)if(f=d+y[k],p=b+h[k],f>=q&&f<l&&p>=r&&p<m){var x=g[f][p];1==x.value&&c++;x.value==nil&&(e.error=6)}1!=c&&(e.error=6)}for(d=q;d<l;++d){var u=n=0;var w=nil;for(b=r;b<m;++b)if(e=g[d][b],0==e.value)w=nil,u=0;else if(e.areas!=w&&(0==u&&(n=b),u++,w=e.areas,2<u))for(p=n;p<m;p++)if(0!=g[d][p].value)g[d][p].error=2;else break}for(b=r;b<m;++b)for(u=n=0,w=nil,d=q;d<l;++d)if(e=g[d][b],0==e.value)w=nil,u=0;else if(e.areas!=w&&(0==u&&(n=d),u++,w=e.areas,2<u))for(f=n;f<l;f++)if(0!=
g[f][b].value)g[f][b].error=2;else break;c=1;a.cell.nilalias=nil;for(d=q;d<l;d++)for(b=r;b<m;b++)e=g[d][b],1==e.value&&0==e.count&&a.markArea(e,c++);a.cell.nilalias=1;2!=c&&(a.solved=!1)}catch(z){throw a.exception(z),z;}};a.cleanSolution=function(){for(var a=q;a<l;a++)for(var n=r;n<m;n++){var f=g[a][n];f.value==nil&&(f.value=1)}};a.valueToString=function(a,g){switch(a){case nil:return"-";case 0:return"x";case 1:return g?".":"-";default:return"%"}};a.paintCell=function(c){try{var g=a.canvas.getContext("2d");
g.fillStyle=c.value==x?a.paintToImage&&a.moves.current==nil?a.uic.white:a.uic.gray:0==c.value?a.uic.dark[c.color]:!a.solved&&a.display.errors?a.uic.light[(c.count-1)%10]:a.uic.light[c.color];g.fillRect(c.px,c.py,a.unit.x,a.unit.y);c.label!=nil&&(-2==c.label?a.paintStar(c):a.paintText(c.label.toString(),c,{color:0!=c.value?a.uic.text:a.uic.text2}));a.paintSymbolMarkers(c);c.error&&a.display.errors&&(c.label!=nil?a.paintErrorCircle(c):a.paintErrorDot(c))}catch(f){throw a.exception(f),f;}};a.paintCurrentValue=
function(){try{var c=a.uie.value,g=c.getContext("2d");g.fillStyle=a.current.value==x?a.uic.gray:0==a.current.value?a.uic.black:a.uic.white;g.fillRect(0,0,c.width,c.height)}catch(f){throw a.exception(f),f;}}}Heyawake.prototype=new Puzzle;
function Creek(){var c=this;ojdebug("v1");c.constructor();c.uis.puzzle=["Creek"];var d=c.board.c,h=0,k=0,f=0,l=0,m=nil;c.charToValue=c.charToValue.concat(["a",0,"s",1,"d",nil,".",0,",",1,"-",nil,"o",0,"x",1,"/",nil]);c.cell.values=[0,1,m];c.enable.dragging=!0;c.enable.nodes=!0;c.enable.pnodes=!0;c.enable.pgrid=!0;c.keypad.left=nil;c.cell.nilalias=1;c.uim.padding=25;c.uic.circlefill="#ffffff";c.uic.circleedge="#000000";c.init=function(){Object.getPrototypeOf(c).init.call(c)};c.reset2=function(){try{h=
c.labels.west;k=c.labels.north;f=c.size.x-c.labels.east;l=c.size.y-c.labels.south;if(c.level.problem){var a=0;var b=c.level.problem.replace(/\s+/g," ").trim().split(" ");for(var e=k;e<=l;e++)for(var g=h;g<=f;g++){var p=c.board.n[g][e];var n=b[a++];p.label="."==n||"-"==n?nil:parseInt(n)}}if(c.level.solution)for(a=0,b=c.level.solution.replace(/\s+/g," ").trim().split(" "),e=k;e<l;e++)for(g=h;g<f;g++){var m=d[g][e];n=b[a++];m.solution="x"==n?0:1}}catch(q){throw c.exception(q),q;}};c.check2=function(){try{for(var a=
h;a<=f;a++)for(var b=k;b<=l;b++)if(0<=c.board.n[a][b].label){var e=0;a>h&&b>k&&0==d[a-1][b-1].value&&e++;a>h&&b<l&&0==d[a-1][b].value&&e++;b>k&&a<f&&0==d[a][b-1].value&&e++;a<f&&b<l&&0==d[a][b].value&&e++;e!=c.board.n[a][b].label&&(c.board.n[a][b].error=2)}e=1;for(a=h;a<f;a++)for(b=k;b<l;b++){var g=d[a][b];0!=g.value&&0==g.count&&c.markArea(g,e++)}2!=e&&(c.solved=!1)}catch(p){throw c.exception(p),p;}};c.solve2=function(){try{for(var a=h;a<=f;a++)for(var b=k;b<=l;b++)0==c.board.n[a][b].label&&(a!=
f&&b!=l&&(d[a][b].value=1),a!=f&&b!=k&&(d[a][b-1].value=1),b!=l&&a!=h&&(d[a-1][b].value=1),a!=h&&b!=k&&(d[a-1][b-1].value=1)),4==c.board.n[a][b].label&&(a!=f&&b!=l&&(d[a][b].value=0),a!=f&&b!=k&&(d[a][b-1].value=0),b!=l&&a!=h&&(d[a-1][b].value=0),a!=h&&b!=k&&(d[a-1][b-1].value=0)),1==c.board.n[a][b].label&&(a==h&&b==k?d[a][b].value=0:a==h&&b==l?d[a][b-1].value=0:a==f&&b==k?d[a-1][b].value=0:a==f&&b==l&&(d[a-1][b-1].value=0)),2==c.board.n[a][b].label&&(a==h&&(d[a][b-1].value=d[a][b].value=0),b==k&&
(d[a-1][b].value=d[a][b].value=0),a==f&&(d[a-1][b-1].value=d[a-1][b].value=0),b==f&&(d[a-1][b-1].value=d[a][b-1].value=0))}catch(e){throw c.exception(e),e;}};c.cleanSolution=function(){for(var a=h;a<f;a++)for(var b=k;b<l;b++){var c=d[a][b];c.value==nil&&(c.value=1)}};c.valueToString=function(a,b){switch(a){case nil:return"-";case 0:return"x";case 1:return b?".":"-";default:return"%"}};c.paintCell=function(a){try{var b=c.canvas.getContext("2d");if(0==a.value)b.fillStyle=c.uic.dark[a.color];else if(!c.solved&&
c.display.errors){var d=(a.count-1)%10;b.fillStyle=0==d?c.uic.gray:c.uic.light[d]}else b.fillStyle=a.value==m?c.paintToImage&&c.moves.current==nil?c.uic.white:c.uic.gray:c.uic.light[a.color];b.fillRect(a.px,a.py,c.unit.x,c.unit.y);c.paintSymbolMarkers(a);a.error&&c.display.errors&&c.paintErrorDot(a)}catch(g){throw c.exception(g),g;}};c.paintNode=function(a){try{if(a.label!=nil){var b=c.canvas.getContext("2d"),d=c.unit.x/3;b.fillStyle=c.uic.circlefill;c.display.errors&&a.error?(b.strokeStyle=c.uic.error,
b.lineWidth=2):(b.strokeStyle=c.uic.circleedge,b.lineWidth=1);b.beginPath();b.arc(a.px,a.py,d,0,2*Math.PI);b.fill();b.stroke();b.textAlign="center";b.textBaseline="middle";b.font=Math.floor(c.unit.x/2).toString()+"px sans-serif";b.fillStyle=c.uic.text;b.fillText(a.label.toString(),a.px,a.py)}}catch(g){throw c.exception(g),g;}};c.paintCurrentValue=function(){try{var a=c.uie.value,b=a.getContext("2d");b.fillStyle=c.current.value==m?c.uic.gray:0==c.current.value?c.uic.black:c.uic.white;b.fillRect(0,
0,a.width,a.height)}catch(e){throw c.exception(e),e;}}}Creek.prototype=new Puzzle;

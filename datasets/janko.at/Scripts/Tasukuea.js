function Tasukuea(){var a=this;a.constructor();a.uis.puzzle=["Tasquare"];var h=a.board.c,k=0,l=0,x=nil,u=nil-1,y=[1,0,-1,0],z=[0,1,0,-1];a.charToValue=a.charToValue.concat(["a",0,"s",1,"d",nil,"x",0,"c",1,"v",nil,",",0,".",1,"-",nil,"/",nil]);a.cell.values=[0,1,x];a.enable.dragging=!0;a.enable.pgrid=!0;a.keypad.left=nil;a.cell.nilalias=1;a.init=function(){Object.getPrototypeOf(a).init.call(a)};a.reset2=function(){try{k=a.size.x;l=a.size.y;if(a.level.problem){var b=0;var d=a.level.problem.replace(/\s+/g,
" ").trim().split(" ");for(var c=0;c<l;c++)for(var e=0;e<k;e++){var g=h[e][c];var f=d[b++];"."!=f&&"-"!=f&&("x"==f?g.value=0:"o"==f?g.value=1:g.label="?"==f?u:parseInt(f));g.label!=nil&&(g.value=1);if(g.label!=nil||g.value!=nil)g.fixed=!0}}if(a.level.solution)for(b=0,d=a.level.solution.replace(/\s+/g," ").trim().split(" "),c=0;c<l;c++)for(e=0;e<k;e++)g=h[e][c],f=d[b++],g.solution="x"==f?0:1}catch(n){throw a.exception(n),n;}};a.check2=function(){var b,d;try{for(var c=0;c<k;c++)for(var e=0;e<l;e++)h[c][e].value==
nil&&(h[c][e].error=1);var g=1;for(c=0;c<k;++c)for(e=0;e<l;++e){var f=h[c][e];if(0==f.value&&0==f.count){for(var n=!1,r=c,t=e,p=r;p<k&&0==h[p][t].value;)p++;for(var q=t;q<l&&0==h[r][q].value;)q++;p-r!=q-t&&(n=!0);for(d=r;d<p;d++)for(b=t;b<q;b++)0==h[d][b].value?h[d][b].count=g:n=!0;if(n)for(d=r;d<p;d++)for(b=t;b<q;b++)h[d][b].error=3;else for(n=(p-r)*(q-t),d=r;d<p;d++)for(b=t;b<q;b++)h[d][b].work=n;g++}}for(c=0;c<k;++c)for(e=0;e<l;++e)for(var m=0;4>m;m++)if(d=c+y[m],b=e+z[m],0<d&&d<k&&0<b&&b<l){var v=
h[c][e],w=h[d][b];0!=v.count&&0!=w.count&&v.count!=w.count&&(v.error=w.error=4)}for(c=0;c<k;++c)for(e=0;e<l;++e)if(f=h[c][e],f.label!=nil){for(m=g=0;4>m;m++)d=c+y[m],b=e+z[m],0<=d&&d<k&&0<=b&&b<l&&0==h[d][b].value&&(g+=h[d][b].work);f.label==u?0==g&&(f.error=2):g!=f.label&&(f.error=2)}g=1;a.cell.nilalias=nil;for(c=0;c<k;c++)for(e=0;e<l;e++)f=h[c][e],1==f.value&&0==f.count&&a.markArea(f,g++);a.cell.nilalias=1;2!=g&&(a.solved=!1)}catch(A){throw a.exception(A),A;}};a.cleanSolution=function(){for(var a=
0;a<k;a++)for(var d=0;d<l;d++){var c=h[a][d];c.value==nil&&(c.value=1)}};a.valueToString=function(a,d){switch(a){case nil:return"-";case 0:return"x";case 1:return d?".":"-";default:return"%"}};a.labelToString=function(a,d){try{switch(a){case nil:return"-";case u:return"?";default:return parseInt(a)}}catch(c){return ojdebug(c.toString()),"%"}};a.paintCell=function(b){try{var d=a.canvas.getContext("2d");d.fillStyle=b.value==nil?a.paintToImage&&a.moves.current==nil?a.uic.white:a.uic.gray:0==b.value?
a.uic.dark[b.color]:!a.solved&&a.display.errors?a.uic.light[(b.count-1)%10]:a.uic.light[b.color];d.fillRect(b.px,b.py,a.unit.x,a.unit.y);b.label!=nil&&(b.label!=u&&a.paintText(b.label.toString(),b,{color:a.uic.text,scale:50}),a.paintSquare(b,{stroke:a.uic.black,scale:70}));a.paintSymbolMarkers(b);b.error&&a.display.errors&&(b.label!=nil?a.paintErrorSquare(b):a.paintErrorDot(b))}catch(c){throw a.exception(c),c;}};a.paintCurrentValue=function(){try{var b=a.uie.value,d=b.getContext("2d");d.fillStyle=
a.current.value==x?a.uic.gray:0==a.current.value?a.uic.black:a.uic.white;d.fillRect(0,0,b.width,b.height)}catch(c){throw a.exception(c),c;}}}Tasukuea.prototype=new Puzzle;
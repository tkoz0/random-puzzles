function Shimaguni(){var d=this;d.constructor();d.uis.puzzle=["Shimaguni"];var c=d.board.c,h=0,k=0,r=nil;d.charToValue=d.charToValue.concat(["a",0,"s",1,"d",nil,"x",0,"c",1,"v",nil,",",0,".",1,"-",nil,"/",nil]);d.cell.values=[0,1,r];d.enable.dragging=!0;d.keypad.left=nil;d.cell.nilalias=1;d.uic.dark[0]="#666666";d.init=function(){Object.getPrototypeOf(d).init.call(d)};d.reset2=function(){try{h=d.size.x;k=d.size.y;d.level.areas&&d.reset2areas(0,0,h,k,d.level.areas);if(d.level.problem){var a=0;var b=
d.level.problem.replace(/\s+/g," ").trim().split(" ");for(var g=0;g<k;g++)for(var l=0;l<h;l++){var m=c[l][g];var e=b[a++];"."==e||"-"==e?m.label=m.value=nil:"x"==e?m.value=0:"o"==e?m.value=1:e.match(/^[0-9]+$/)?m.label=parseInt(e):"a"<=e&&"z">=e?m.clues=e.charCodeAt(0)-96:"A"<=e&&"Z">=e&&(m.clues=e.charCodeAt(0)-64);m.value!=nil&&(m.fixed=!0)}}if(d.level.solution)for(a=0,b=d.level.solution.replace(/\s+/g," ").trim().split(" "),g=0;g<k;g++)for(l=0;l<h;l++)m=c[l][g],e=b[a++],m.solution="x"==e?0:1}catch(f){throw d.exception(f),
f;}};d.check2=function(){try{for(var a=0;a<h;a++)for(var b=0;b<k;b++)0==c[a][b].value&&(a<h-1&&0==c[a+1][b].value&&c[a+1][b].areas!=c[a][b].areas&&(c[a][b].error=c[a+1][b].error=4),b<k-1&&0==c[a][b+1].value&&c[a][b+1].areas!=c[a][b].areas&&(c[a][b].error=c[a][b+1].error=4));for(a=0;a<h;a++)for(b=0;b<k;b++){var g=c[a][b];if(0==g.checked){for(var l=null,m=0,e=0;e<h;e++)for(var f=0;f<k;f++){var n=c[e][f];n.areas==g.areas&&(n.checked=!0,n.label!=nil&&(l=n),0==n.value&&m++)}if(0==m||null!=l&&l.label!=
m)for(e=0;e<h;e++)for(f=0;f<k;f++)c[e][f].areas==g.areas&&(c[e][f].error=3);for(e=0;e<h;e++)for(f=0;f<k;f++)c[e][f].areas==g.areas&&(c[e][f].count=m)}}for(a=0;a<h;a++)for(b=0;b<k;b++)c[a][b].checked=!1;for(a=0;a<h;a++)for(b=0;b<k;b++)if(g=c[a][b],0==g.value&&!g.checked)for(d.check4(a,b,g.areas),l=0;l<h;l++)for(m=0;m<k;m++)if(n=c[l][m],n.areas==g.areas&&0==n.value&&!n.checked)for(var p=0;p<h;p++)for(var q=0;q<k;q++)c[p][q].areas==g.areas&&(c[p][q].error=5);for(a=0;a<h;a++)for(b=0;b<k;b++){if(b<k-1&&
c[a][b+1].areas!=c[a][b].areas&&c[a][b+1].count==c[a][b].count)for(e=0;e<h;e++)for(f=0;f<k;f++)if(c[e][f].areas==c[a][b].areas||c[e][f].areas==c[a][b+1].areas)c[e][f].error=2;if(a<h-1&&c[a+1][b].areas!=c[a][b].areas&&c[a+1][b].count==c[a][b].count)for(e=0;e<h;e++)for(f=0;f<k;f++)if(c[e][f].areas==c[a][b].areas||c[e][f].areas==c[a+1][b].areas)c[e][f].error=2}}catch(t){throw d.exception(t),t;}};d.check4=function(a,b,g){try{c[a][b].checked=!0,0<a&&!c[a-1][b].checked&&0==c[a-1][b].value&&c[a-1][b].areas==
g&&d.check4(a-1,b,g),0<b&&!c[a][b-1].checked&&0==c[a][b-1].value&&c[a][b-1].areas==g&&d.check4(a,b-1,g),a<h-1&&!c[a+1][b].checked&&0==c[a+1][b].value&&c[a+1][b].areas==g&&d.check4(a+1,b,g),b<k-1&&!c[a][b+1].checked&&0==c[a][b+1].value&&c[a][b+1].areas==g&&d.check4(a,b+1,g)}catch(l){throw d.exception(l),l;}};d.solve2=function(){try{for(var a=0;a<h;a++)for(var b=0;b<k;b++)c[a][b].checked=!1;for(a=0;a<h;a++)for(b=0;b<k;b++)if(!c[a][b].checked){for(var g=c[a][b].areas,l=0,m=nil,e=0;e<h;e++)for(var f=
0;f<k;f++)c[e][f].areas==g&&(c[e][f].checked=!0,l++,c[a][f].label!=nil&&(m=c[a][f].label));if(1==l||m==l)for(e=0;e<h;e++)for(f=0;f<k;f++)c[e][f].areas==g&&(c[e][f].value=0,0<e&&c[e-1][f].areas!=g&&(c[e-1][f].value=1),0<f&&c[e][f-1].areas!=g&&(c[e][f-1].value=1),e<h-1&&c[e+1][f].areas!=g&&(c[e+1][f].value=1),f<k-1&&c[e][f+1].areas!=g&&(c[e][f+1].value=1))}}catch(n){throw d.exception(n),n;}};d.cleanSolution=function(){for(var a=0;a<h;a++)for(var b=0;b<k;b++){var d=c[a][b];d.value==nil&&(d.value=1)}};
d.valueToString=function(a,b){switch(a){case nil:return"-";case 0:return"x";case 1:return b?".":"-";default:return"%"}};d.labelToString=function(a,b){try{return a==nil?"-":0==a?"?":parseInt(label)}catch(g){return ojdebug(g.toString()),"%"}};d.paintCell=function(a){try{var b=d.canvas.getContext("2d");b.fillStyle=a.value==nil?d.paintToImage&&d.moves.current==nil?d.uic.white:d.uic.gray:0==a.value?a.error&&d.display.errors?d.uic.error:d.uic.dark[a.color]:d.uic.light[a.color];b.fillRect(a.px,a.py,d.unit.x,
d.unit.y);if(a.label!=nil){var c=0!=a.value?d.uic.text:d.uic.text2;0==a.label?d.paintText("?",a,{color:c}):d.paintText(a.label.toString(),a,{color:c})}d.paintSymbolMarkers(a);a.error&&d.display.errors&&(a.label!=nil?d.paintErrorCircle(a):d.paintErrorDot(a))}catch(l){throw d.exception(l),l;}};d.paintCurrentValue=function(){try{var a=d.uie.value,b=a.getContext("2d");b.fillStyle=d.current.value==r?d.uic.gray:0==d.current.value?d.uic.black:d.uic.white;b.fillRect(0,0,a.width,a.height)}catch(g){throw d.exception(g),
g;}}}Shimaguni.prototype=new Puzzle;

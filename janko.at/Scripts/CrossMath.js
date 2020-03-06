function CrossMath(){var a=this;a.constructor();a.uis.puzzle=["Cross Math","Rechengitter"];var e=a.board.c,n=0,p=0,k=0,l=0,m={none:0,empty:1,range:2,unique:3,operation:4,negative:5};a.enable.vmarkers=!0;a.enable.pgrid=!1;a.enable.plines=!1;a.enable.values=!1;a.enable.currentValue=!1;a.uim.padding=20;a.uis.unique=["Unique","Unikate"];a.uis.negative=["Negative","Negativ"];a.uis.precedence=["precedence","Punkt-Vor-Strich"];a.charToValue=a.charToValue.concat(["/",nil,"-",nil,",",nil]);a.init=function(){Object.getPrototypeOf(a).init.call(a)};
a.setup2=function(){try{a.size.x=2*a.size.x+1,a.size.y=2*a.size.y+1}catch(b){throw a.exception(b),b;}};a.reset2=function(){var b;try{n=a.labels.west;p=a.labels.north;k=a.size.x-a.labels.east;l=a.size.y-a.labels.south;a.cell.min=1;a.cell.max=a.size.z;a.infoText=a.uis.get("numbers")+": 1~"+a.size.z;a.infoText+=", "+a.uis.get("negative")+": ";a.level.options.contains("negative")?a.infoText+=a.uis.get("yes"):a.infoText+=a.uis.get("no");a.cell.values=[];var d=0;for(b=10;b<=a.size.z;b++)a.cell.values[d++]=
b;a.cell.values[d++]=nil;d=a.size.z;9<d?a.keypadValues=a.keypad.numbers:(a.keypadValues=a.keypad.numbers.slice(0,d),a.keypadValues[d++]=["\u2022",nil]);for(d=p;d<l;d++)for(var c=n;c<k;c++)if(1==d%2||1==c%2||c==k-1||d==l-1)e[c][d].valid=!1;if(a.level.problem){b=0;var f=a.level.problem.replace(/\s+/g," ").trim().split(" ");for(d=p;d<l;d++)for(c=n;c<k;){var g=e[c][d];var h=f[b++];"?"==h?g.label=nil:"="==h?g.label=35:"+"==h?g.label=31:"-"==h?g.label=32:"*"==h||"x"==h?g.label=33:"/"==h||"\u00f7"==h||":"==
h?g.label=34:(g.value=parseInt(h),g.fixed=!0);if(0==d%2&&d<l-1)c+=1;else if(c==k-3)break;else c+=2}}if(a.level.solution)for(b=0,f=a.level.solution.replace(/\s+/g," ").trim().split(" "),d=p;d<l-1;d+=2)for(c=n;c<k-1;c+=2)g=e[c][d],h=f[b++],g.solution="."==h||"-"==h?nil:parseInt(h)}catch(q){throw a.exception(q),q;}};a.check2=function(){var b;try{var d=[];for(b=0;b<a.size.z+1;b++)d[b]=nil;for(b=n;b<k;b++)for(var c=p;c<l;c++)e[b][c].valid&&(0>=e[b][c].value||e[b][c].value>a.size.z?e[b][c].error=m.valid:
a.level.options.contains("unique")&&d[e[b][c].value]!=nil?e[b][c].error=e[d[e[b][c].value]/100][d[e[b][c].value]%100].error=m.unique:d[e[b][c].value]=100*b+c);for(c=p;c<l;c+=2){var f=e[0][c].value;for(b=2;b<k;b+=2)switch(e[b-1][c].label){case 31:f+=e[b][c].value;break;case 33:f*=e[b][c].value;break;case 32:f-=e[b][c].value;!a.level.options.contains("negative")&&b!=k-3&&0>f&&(e[b-1][c].error=m.negative);break;case 34:f/=e[b][c].value;Math.floor(f)!=f&&(e[b-1][c].error=m.operation);break;case 35:e[k-
1][c].value!=nil&&e[k-1][c].value!=f&&(e[b][c].error=m.operation)}}for(b=n;b<k;b+=2)for(f=e[b][0].value,c=2;c<l;c+=2)switch(e[b][c-1].label){case 31:f+=e[b][c].value;break;case 33:f*=e[b][c].value;break;case 32:f-=e[b][c].value;!a.level.options.contains("negative")&&c!=l-3&&0>f&&(e[b][c-1].error=m.negative);break;case 34:f/=e[b][c].value;Math.floor(f)!=f&&(e[b][c-1].error=m.operation);break;case 35:e[b][l-1].value!=nil&&e[b][l-1].value!=f&&(e[b][c].error=m.operation)}}catch(g){throw a.exception(g),
g;}};a.valueToString=function(b,d){try{return b==nil?"?":a.numberToString(b)}catch(c){throw a.exception(c),c;}};a.labelToString=function(a){return 31==a?"+":32==a?"\u2013":33==a?"\u00d7":34==a?":":35==a?"=":a==nil?".":"?"};a.solutionToString=function(b){try{for(var d="solution\n",c=p;c<l-2;c+=2){for(var f=n;f<k-2;f+=2){var g=e[f][c];d+=a.valueToString(b?g.solution:g.value)+" "}d=d.rtrim()+"\n"}return d+"end\n"}catch(h){throw a.exception(h),h;}};a.paintCell=function(b){try{if(!(1==b.x%2&&1==b.y%2||
b.x==k-1&&1==b.y%2||b.y==l-1&&1==b.x%2||b.x==k-1&&b.y==l-1)){var d=a.canvas.getContext("2d");if(b.label!=nil)a.paintText(a.labelToString(b.label),b),b.error&&a.display.errors&&a.paintErrorCircle(b,50);else if(0==b.x%2&&0==b.y%2){var c=a.uim.edge+1,e=c+c;d.fillStyle=a.uic.light[b.color];d.fillRect(b.px-2,b.py-2,a.unit.x+5,a.unit.y+5);d.beginPath();d.lineWidth=a.uim.edge;d.strokeStyle=b.x==k-1||b.y==l-1?a.uic.clue:a.uic.edge;d.lineCap="round";d.rect(b.px-c+.5,b.py-c+.5,a.unit.x+e,a.unit.y+e);d.stroke();
a.paintSymbolMarkers(b);a.paintValueMarkers(b);b.value!=nil&&a.paintText(b.value.toString(),b,{color:b.fixed?a.uic.clue:a.uic.text});b.error&&a.display.errors&&(b.value==nil?a.paintErrorDot(b):a.paintErrorCircle(b,100))}}}catch(g){throw a.exception(g),g;}};a.paintCursor=function(b,d){try{if(b){var c=a.uim.edge+1;d=c+c;var e=a.canvas.getContext("2d");e.beginPath();e.lineWidth=a.uim.edge;e.strokeStyle=a.uic.cursor;e.lineCap="round";e.rect(b.px-c+.5,b.py-c+.5,a.unit.x+d,a.unit.y+d);e.stroke()}else Object.getPrototypeOf(this).paintCursor.call(this,
b,d)}catch(g){throw a.exception(g),g;}}}CrossMath.prototype=new Puzzle;

function Haunted(){var a=this;a.constructor();a.uis.puzzle=["Haunted Maze","Spukschloss"];var h=a.board.c,k=0,l=0,m=0,n=0,p=[new Image,new Image,new Image];p[0].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACt0lEQVRIie1Xrc6rQBDtu/AARSAQmBoEngcg4Q1wTTAVTdZUEExNBSEoHARRgWmamro2FYgmTQivMZ86e4e/pd8VV90xTbqzc3bOzpxZVqv/prCm7eiYZiSimEzbobW1obW1IdfzabsXVNQX+lXA++NJrufLIMMATdvR4ZSMgEQUk4hiCsIdmbZDmm5M7p81ZHA4JfIAIooJoEG4I003KAh39Hp/JoM2bUdFfZH787JaBt/uBZm2MwISUUzbvSBNN74LxPabtkPn602955hmtLY21LSdBAcgDvANKAc3bYdcz1fvuz+epOkGHdNMOjZtR67nk2k7kl7UAvdbSub+eKp9Xc8n1/Nl1vw/fhAU0DDDINz19r/en+/uuqgvvbvERmSHdU03ZD3ARBTLNWQIur9hp5f1+XrrUXVMMxk8CHe9YGilvwYGGHrUtB1JHYDX1qZXrU3bSdC1tZH1AODDKaGm7XpXOGmgDULBAeYKa21tSNMN2u6FXHu9P2Tajqxu1IbyAHA8nJJJp9f702uxY5rRdi967QgtwGHzsiJNN9SqBqc5AUCPT63nZSXlk7ODllUCQ3nmaEFgTi2YALVDaQ3CXU+kJs20nVHlcsOdTvlMBUYrKhUQla2iBFW8KIks3qIvBoZqCn0LzEHn4klbonm1+i7jor7Ix8KiXuMulgY5ikt1QBSTij1pkMzX+0N5Wc0eAD2qGgB4GAyVbmTn603SNzeFuO+iCq3+tNesXvORx8F5L5+vt8mnz5IOu54/fyXQZ/5QO5wSMm2Hivoi5W8oGvfHUwoGl0sRxTLOcNiMKBneAx+DoIurD1oFlQtwPptdz6fDKRnJp9LO1xuZtkMiint0I2s+bfKykuD4PaYZ8TmtkuBFQy1MKRFniLPHD/DbR2PPivoySxu+MqbW8rJafu7+C/sBSdytm/nt46cAAAAASUVORK5CYII=";
p[1].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACTUlEQVRIid1WMa6jMBDNKbgBDR0FDa0LGkofwAUlJ6BA1BScgJqChjoF+hLNRoqUIpGiNGkiRcotZovVWOOxHfh/9f9Ka8kSmPG8mec3g3e7/2mUdQNSFbA/nODHQI+XK4SpgCCKQaoCjpfrNvDb8/VXUU7zAmEqNHjVdrDqsx9GKOsGpnnZDM4zmuYFgijWwEmWr/tLslwb82+/lg/n5rJujPXj5QpBFBvg3MaKHDcEUWxEeXu+oB9GK/L94QRhKgw7XKO+3mZdtZ0RqVSFRWGYCkMsUhUWO0g1n1XbuYGlKgzDMBWWKJIshyTLNTjauVhwZb0JOIhi6IfRoLGsGwhTAVXbATLAHXKq8TlMhZtuFBbdxEVBaZSq0La0UewPJ0Bfm+imkVF6KN3n+8NJI2WGaoVPrhsvMHdK7aitVAX0wwj9MAL3w+2tZsIBaZRIJS857tQVFJ9W//adC1KOk4P4AOheuscS2DvgtenLtGo7ON8fhtj40RnlxLNYe3d9C1OhaUXBYSkawFyNSZav0khBXA0DhURLzMq4H0bjTKZ50U1ia7bvSqesG+3XAD7fH8ZGjLZqO28negfMmw+WmvPfjOecZDmc7w/Y7f60Slz3iYj+e+kFgCeGwVjgeM5SFUZktDH4sg1ToZtIkuX2WboAcRwvVx01ZozRYm+u2g4o/bR70UA/c4vRWfMeTdfxnf4kuFpvz9f6PYuP2/MFVdtZt0Ncp++0MVCGvjx8TngwWIJetX7nkKqwxPgjY5qXbXfn7xj7w+nfAH8F9DdO5IBSqRcU2QAAAABJRU5ErkJggg==";
p[2].src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACqklEQVRIie2Wr66rQBDGeQfeAI9AkSAhR+AwBHMwpwbTYCpIWleD4Ql4ABI8BkFCCBIFjoZk0wf5rriZzfKvh96ca27uJpMChf3Nzjc7s5L0fwjjwZ6I4gQfn19QDAuyqkNWdSiGBdPzcb7dkWY5xonhx6Bl085g35np+YjiBGXTIs1ypFmOoqrxYM/jTo0Tewv6yhTDQtm0x+Bplu+Ct54vZVi+o9nOcbAbhJBVHW4Qco0phLKqI4oTmJ4P0/NBjkZxwgEfn19wg5A7cQgcxQmKqsbH5xfGieF0ueJ8u0OSJMkNQrhBiK4foBgWiqpGmuXQbGem5+lyBS3iMJgSg+67fkDXD5AkSSqqmv+XZjke7ImiquEG4WxyNwgxTow7dRicZvlbW4RWKzpyvt1RVPVMgrfBD/acbRO6Xt4/2BPjxCCumMJ+CHzYy8UgB03P56tdyvASSsm0NXHZtCCti6pG1w+zxCqblifg6XKFYlg43+77xYQS4bvwUDjHieHBnqsJSWNywPR8aLazP+fpckWa5ej6AW4QQtS1bFqUTbtbl8eJgbJf3F5Uz8mJ1fddP/CXxeQ4Xa7cW8WweESWK9Rsh4dUsx3Iqg5qMlQyxesZWDEsdP2AcWLQbGemken5/HeZeEVV83CKnazrB5iez2FU5VbhopWRExReSiDSdFv539p3/cA7lDhPFCdQDGv7+6KqeThlVZ9Vrz8ZBCYZXhalrh+4d+KLpP0r0DLDy6aFrOo43+685O5CaR8vwVQUXoGXxaKoat7JKLM3vV32UTGJqPVRp9oyzXZmYOpMoq3gFBbRxElob39nYpSiOFnNudJ574wVxQkvDO/Y3ilmBRaLwNbR5l3bO4NtgglC2+lv2C74b8NXYCqPZOfbHVGczJ79hB0+6v5z4xe+LYG58yKdkAAAAABJRU5ErkJggg==";
l=k=1;a.charToValue=a.charToValue.concat(["z",2,"g",0,"v",1,"-",nil,"/",nil]);a.valueToMarker=[0,a.marker.letterBase+6,1,a.marker.letterBase+21,2,a.marker.letterBase+25];a.cell.values=[0,1,2,nil];a.enable.vmarkers=!0;a.enable.pgrid=!0;a.keypad.left=nil;a.keypad.right=a.keypad.values;a.labels.north=a.labels.south=a.labels.east=a.labels.west=1;a.keys=a.keys.concat(["ghosts","vampires","zombies"]);a.uis.vampires=["Vampires","Vampire"];a.uis.zombies=["Zombies"];a.uis.ghosts=["Ghosts","Geister"];a.uic.mirror=
"#000000";a.keypadValues=[["G",0],["V",1],["Z",2],["\u2022",nil]];a.init=function(){Object.getPrototypeOf(a).init.call(a)};a.reset2=function(){try{k=a.labels.west;l=a.labels.north;m=a.size.x-a.labels.east;n=a.size.y-a.labels.south;a.infoText=a.uis.get("ghosts")+": "+a.level.ghosts+", "+a.uis.get("vampires")+": "+a.level.vampires+", "+a.uis.get("zombies")+": "+a.level.zombies;if(a.level.problem){var b=0;var c=a.level.problem.replace(/\s+/g," ").trim().split(" ");for(var e=0;e<a.size.y;e++)for(var d=
0;d<a.size.x;d++){var f=h[d][e];var g=c[b++];"."!=g&&"-"!=g&&("g"==g?f.value=0:"v"==g?f.value=1:"z"==g?f.value=2:f.label="/"==g?-2:"\\"==g?-3:parseInt(g));if(f.value!=nil||f.label!=nil)f.fixed=!0}}if(a.level.solution)for(b=0,c=a.level.solution.replace(/\s+/g," ").trim().split(" "),e=l;e<n;e++)for(d=k;d<m;d++)if(f=h[d][e],g=c[b++],"."!=g&&"-"!=g)if("g"==g||"G"==g)f.solution=0;else if("v"==g||"V"==g)f.solution=1;else if("z"==g||"Z"==g)f.solution=2;a.reset2labels()}catch(q){throw a.exception(q),q;}};
a.check2=function(){try{for(var b=0,c=0,e=0,d=k;d<m;d++)for(var f=l;f<n;f++){var g=h[d][f];g.value==nil&&g.label==nil?g.error=1:0==g.value?c++:1==g.value?e++:2==g.value&&b++}if(c!=a.level.ghosts||e!=a.level.vampires||b!=a.level.zombies)a.solved=!1;for(d=k;d<m;d++)for(f=l;f<n;f++)g=h[d][f],0!=g.value&&2!=g.value||a.check3Mirrored(d,f),1!=g.value&&2!=g.value||a.check3Directly(d,f);for(d=k;d<m;d++)h[d][0].count!=h[d][0].label&&(h[d][0].error=2),h[d][a.size.y-1].count!=h[d][a.size.y-1].label&&(h[d][a.size.y-
1].error=2);for(f=l;f<n;f++)h[0][f].count!=h[0][f].label&&(h[0][f].error=2),h[a.size.x-1][f].count!=h[a.size.x-1][f].label&&(h[a.size.x-1][f].error=2)}catch(q){throw a.exception(q),q;}};a.check3Directly=function(b,c){a.check4Directly(b,c,0,1);a.check4Directly(b,c,1,0);a.check4Directly(b,c,0,-1);a.check4Directly(b,c,-1,0)};a.check4Directly=function(b,c,e,d){for(;;){if(0==b||b==a.size.x-1||0==c||c==a.size.y-1){h[b][c].count++;break}if(h[b][c].label==nil)b+=e,c+=d;else break}};a.check3Mirrored=function(b,
c){a.check4Mirrored(b,c,1,0);a.check4Mirrored(b,c,0,1);a.check4Mirrored(b,c,-1,0);a.check4Mirrored(b,c,0,-1)};a.check4Mirrored=function(b,c,e,d){for(var f=!1;;){if(0==b||b==a.size.x-1||0==c||c==a.size.y-1){f&&h[b][c].count++;break}-2==h[b][c].label?(f=!0,-1==e?(c++,e=0,d=1):1==e?(c--,e=0,d=-1):-1==d?(b++,e=1,d=0):1==d&&(b--,e=-1,d=0)):-3==h[b][c].label?(f=!0,-1==e?(c--,e=0,d=-1):1==e?(c++,e=0,d=1):-1==d?(b--,e=-1,d=0):1==d&&(b++,e=1,d=0)):(b+=e,c+=d)}};a.valueToString=function(a,c){switch(a){case 0:return"g";
case 1:return"v";case 2:return"z";default:return"-"}};a.labelToString=function(b,c){try{switch(b){case -2:return"/";case -3:return"\\";default:return a.numberToString(b)}}catch(e){return ojdebug(e.toString()),"%"}};a.paintCell=function(b){try{b.areas==a.cell.label?a.paintLabelCell(b):a.paintValueCell(b)}catch(c){throw a.exception(c),c;}};a.paintLabelCell=function(b){try{var c=a.canvas.getContext("2d");c.fillStyle=a.uic.label;c.fillRect(b.px,b.py,a.unit.x,a.unit.y);b.label!=nil&&a.paintText(b.label.toString(),
b);b.error&&a.display.errors&&a.paintErrorCircle(b)}catch(e){throw a.exception(e),e;}};a.paintValueCell=function(b){try{var c=a.canvas.getContext("2d");0!=b.color&&(c.fillStyle=a.uic.light[b.color],c.fillRect(b.px,b.py,a.unit.x,a.unit.y));a.paintSymbolMarkers(b);a.paintValueMarkers(b);b.label!=nil&&(c.strokeStyle=a.uic.black,c.lineWidth=a.uim.wall,c.beginPath(),-2==b.label?(c.moveTo(b.px,b.py+a.unit.y),c.lineTo(b.px+a.unit.x,b.py)):-3==b.label&&(c.moveTo(b.px,b.py),c.lineTo(b.px+a.unit.x,b.py+a.unit.y)),
c.stroke());if(b.value!=nil){var e=a.uim.wall;c.drawImage(p[b.value],b.px+e,b.py+e,a.unit.x-2*e,a.unit.y-2*e)}b.error&&a.display.errors&&a.paintErrorDot(b)}catch(d){throw a.exception(d),d;}};a.paintCurrentValue=function(){try{var b=a.uie.value,c=b.getContext("2d");c.fillStyle=a.uic.white;c.fillRect(0,0,b.width,b.height);a.current.value!=nil&&c.drawImage(p[a.current.value],0,0,b.width,b.width)}catch(e){throw a.exception(e),e;}}}Haunted.prototype=new Puzzle;

function ExtMapTypeControl(a){this.options=a||{}}
ExtMapTypeControl.prototype=new GControl();
ExtMapTypeControl.prototype.initialize=function(d){var e=document.createElement("div");var f=this;var g=d.getMapTypes();var h=f.addMapTypeButtons_(d);GEvent.addListener(d,"addmaptype",function(){var a=d.getMapTypes();var b=a.pop();var c=f.createButton_(b.getName());g.push(b);h.push(c);f.resetButtonEvents_(d,h);e.appendChild(c)});GEvent.addListener(d,"removemaptype",function(){for(var i=0;i<h.length;i++){GEvent.clearListeners(h[i],"click");e.removeChild(h[i])}h=f.addMapTypeButtons_(d);f.resetButtonEvents_(d,h);for(var i=0;i<h.length;i++){e.appendChild(h[i])}});if(f.options.showTraffic){var j=f.createButton_("Traffic");j.style.marginRight="8px";j.style.visibility='hidden';j.firstChild.style.cssFloat="left";j.firstChild.style.styleFloat="left";f.trafficInfo=new GTrafficOverlay(true);f.trafficInfo.hidden=true;GEvent.addListener(f.trafficInfo,"changed",function(a){if(a){j.style.visibility='visible'}else{j.style.visibility='hidden'}});d.addOverlay(f.trafficInfo);GEvent.addDomListener(j.firstChild,"click",function(){if(f.trafficInfo.hidden){f.trafficInfo.hidden=false;f.trafficInfo.show()}else{f.trafficInfo.hidden=true;f.trafficInfo.hide()}f.toggleButton_(j.firstChild,!f.trafficInfo.hidden)});if(f.options.showTrafficKey){keyDiv=document.createElement("div");keyDiv.style.cssFloat="left";keyDiv.style.styleFloat="left";keyDiv.innerHTML="&nbsp;?&nbsp;";var k=document.createElement("div");k.style.clear="both";k.style.padding="2px";var l=[{"color":"#30ac3e","text":"&gt; 50 MPH"},{"color":"#ffcf00","text":"25-50 MPH"},{"color":"#ff0000","text":"&lt; 25 MPH"},{"color":"#c0c0c0","text":"No data"}];for(var i=0;i<l.length;i++){k.innerHTML+="<div style='text-align: left'><span style='background-color: "+l[i].color+"'>&nbsp;&nbsp</span>"+"<span style='color: "+l[i].color+"'> "+l[i].text+" </span>"+"</div>"}k.style.display="none";GEvent.addDomListener(keyDiv,"click",function(){if(f.keyExpanded){f.keyExpanded=false;k.style.display="none"}else{f.keyExpanded=true;k.style.display="block"}f.toggleButton_(keyDiv,f.keyExpanded)});f.toggleButton_(keyDiv,f.keyExpanded)}var m=document.createElement("div");m.style.clear="both";if(f.options.showTrafficKey)j.appendChild(keyDiv);j.appendChild(m);if(f.options.showTrafficKey)j.appendChild(k);f.toggleButton_(j.firstChild,false);e.appendChild(j)}for(var i=0;i<h.length;i++){e.appendChild(h[i])}d.getContainer().appendChild(e);return e}
ExtMapTypeControl.prototype.addMapTypeButtons_=function(a){var b=this;var c=a.getMapTypes();var d=new Array();for(var i=0;i<c.length;i++){d[i]=b.createButton_(c[i].getName())}b.resetButtonEvents_(a,d);return d}
ExtMapTypeControl.prototype.resetButtonEvents_=function(c,d){var e=this;var f=c.getMapTypes();for(var i=0;i<d.length;i++){var g=new Array;for(var j=0;j<f.length;j++){if(j!=i){g.push(d[j])}}e.assignButtonEvent_(d[i],c,f[i],g)}GEvent.addListener(c,"maptypechanged",function(){var a=0;var b=c.getCurrentMapType();for(var i=0;i<f.length;i++){if(f[i]==b){a=i}}GEvent.trigger(d[a],"click")})}
ExtMapTypeControl.prototype.createButton_=function(a){var b=document.createElement("div");this.setButtonStyle_(b);b.style.cssFloat="left";b.style.styleFloat="left";var c=document.createElement("div");c.appendChild(document.createTextNode(a));c.style.width="6em";b.appendChild(c);return b}
ExtMapTypeControl.prototype.assignButtonEvent_=function(a,b,c,d){var e=this;GEvent.addDomListener(a,"click",function(){for(var i=0;i<d.length;i++){e.toggleButton_(d[i].firstChild,false)}e.toggleButton_(a.firstChild,true);b.setMapType(c)})}
ExtMapTypeControl.prototype.toggleButton_=function(a,b){a.style.fontWeight=b?"bold":"";a.style.border="1px solid white";var c=b?["Top","Left"]:["Bottom","Right"];for(var j=0;j<c.length;j++){a.style["border"+c[j]]="1px solid #b0b0b0"}}
ExtMapTypeControl.prototype.getDefaultPosition=function(){return new GControlPosition(G_ANCHOR_TOP_RIGHT,new GSize(7,7))}
ExtMapTypeControl.prototype.setButtonStyle_=function(a){a.style.color="#000000";a.style.backgroundColor="white";a.style.font="small Arial";a.style.border="1px solid black";a.style.padding="0px";a.style.margin="0px";a.style.textAlign="center";a.style.fontSize="12px";a.style.cursor="pointer"}

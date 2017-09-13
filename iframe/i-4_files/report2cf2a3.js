define("appmsg/report.js",["biz_common/dom/event.js","biz_common/utils/huatuo.js","biz_wap/utils/ajax.js","appmsg/cdn_img_lib.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_common/utils/monitor.js"],function(e){
"use strict";
function t(){
var t=(e("biz_wap/utils/mmversion.js"),e("biz_common/utils/report.js"),e("biz_common/utils/monitor.js")),r=!1,s=window.performance||window.msPerformance||window.webkitPerformance;
return function(){
return;
}(),s&&s.timing&&s.timing.navigationStart?(r=s.timing.navigationStart,function(){
return;
}(),function(){
function e(){
if(-1==n.indexOf("NetType/"))return!1;
for(var e=["2G","cmwap","cmnet","uninet","uniwap","ctwap","ctnet"],t=0,i=e.length;i>t;++t)if(-1!=n.indexOf(e[t]))return!0;
return!1;
}
var i=window.performance&&window.performance.timing,s=write_sceen_time-r,d=first_sceen__time-r,m=page_endtime-r,p=window.logs.jsapi_ready_time?window.logs.jsapi_ready_time-r:void 0,w=window.logs.a8key_ready_time?window.logs.a8key_ready_time-r:void 0,c=i&&i.connectEnd-i.connectStart,g=i&&i.secureConnectionStart&&i.connectEnd-i.secureConnectionStart,u=i&&i.domainLookupEnd&&i.domainLookupStart&&i.domainLookupEnd-i.domainLookupStart;
if(window.logs.pagetime.wtime=s,window.logs.pagetime.ftime=d,window.logs.pagetime.ptime=m,
window.logs.pagetime.jsapi_ready_time=p,window.logs.pagetime.a8key_ready_time=w,
Math.random()<.01){
var f={
28:m,
29:d,
30:s,
31:p,
32:w,
33:c,
34:g
};
o.setFlags(1636,1,1);
for(var l in f)!f[l]||f[l]<0||o.setPoint(l,f[l]);
o.report();
}
if(need_report_cost?a({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["1|1|"+m,"1|2|"+d,"1|3|"+s,"1|4|"+p,"1|5|"+w,"1|6|"+c,"1|7|"+g,"1|8|"+u].join(";")
}
}):Math.random()<.01&&a({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["#1|1|"+m,"1|2|"+d,"1|3|"+s,"1|4|"+p,"1|5|"+w,"1|6|"+c,"1|7|"+g,"1|8|"+u].join(";")
}
}),need_report_cost&&d>3e3){
var _=new Image,v=(new Date).getTime();
_.onload=function(){
var e=(new Date).getTime()-v,t=(new Date).getTime(),i=new Image;
i.onload=function(){
var i=(new Date).getTime()-t;
a({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["^2|1|"+e,"2|2|"+i].join(";")
}
});
},i.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
},_.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
}
if(!(Math.random()>.2||0>s||0>d||0>m)){
if(p&&t.setAvg(27822,15,p),w&&t.setAvg(27822,17,w),m>=15e3)return t.setAvg(27822,29,m),
void t.send();
t.setAvg(27822,1,m).setAvg(27822,3,s).setAvg(27822,5,d),window.isWeixinCached&&t.setAvg(27822,19,m),
e()?(t.setAvg(27822,9,m),window.isWeixinCached&&t.setAvg(27822,23,m)):"wifi"==networkType?(t.setAvg(27822,7,m),
window.isWeixinCached&&t.setAvg(27822,21,m)):"2g/3g"==networkType?(t.setAvg(27822,11,m),
window.isWeixinCached&&t.setAvg(27822,25,m)):(t.setAvg(27822,13,m),window.isWeixinCached&&t.setAvg(27822,28,m)),
t.send();
}
}(),function(){
window.logs.jsapi_ready_fail&&(t.setSum(24729,55,window.logs.jsapi_ready_fail),t.send());
}(),function(){
var e=document.getElementById("js_toobar3"),t=document.getElementById("page-content"),n=window.innerHeight||document.documentElement.clientHeight;
if(t&&!(Math.random()>.1)){
var o=function(){
var a=window.pageYOffset||document.documentElement.scrollTop,r=e.offsetTop;
if(a+n>=r){
for(var d,m,p=t.getElementsByTagName("img"),w={},c=[],g=0,u=0,f=0,l=0,_=p.length;_>l;++l){
var v=p[l];
d=v.getAttribute("data-src")||v.getAttribute("src"),m=v.getAttribute("src"),d&&(d.isCDN()?u++:f++,
g++,w[m]={});
}
if(c.push("1="+1e3*g),c.push("2="+1e3*u),c.push("3="+1e3*f),s.getEntries){
var h=s.getEntries(),y=window.logs.img.download,j=[0,0,0],b=[0,0,0];
g=u=0;
for(var l=0,k=h.length;k>l;++l){
var T=h[l],A=T.name;
A&&"img"==T.initiatorType&&w[A]&&(A.isCDN()&&(b[0]+=T.duration,u++),j[0]+=T.duration,
g++,w[A]={
startTime:T.startTime,
responseEnd:T.responseEnd
});
}
j[0]>0&&g>0&&(j[2]=j[0]/g),b[0]>0&&u>0&&(b[2]=b[0]/u);
for(var l in y)if(y.hasOwnProperty(l)){
for(var M=y[l],E=0,x=0,z=0,C=0,S=0,_=M.length;_>S;++S){
var d=M[S];
if(w[d]&&w[d].startTime&&w[d].responseEnd){
var D=w[d].startTime,I=w[d].responseEnd;
E=Math.max(E,I),x=x?Math.min(x,D):D,d.isCDN()&&(z=Math.max(E,I),C=x?Math.min(x,D):D);
}
}
j[1]+=Math.round(E-x),b[1]+=Math.round(z-C);
}
for(var N=4,W=7,l=0;3>l;l++)j[l]=Math.round(j[l]),b[l]=Math.round(b[l]),j[l]>0&&(c.push(N+l+"="+j[l]),
"wifi"==networkType?c.push(N+l+6+"="+j[l]):"2g/3g"==networkType&&c.push(N+l+12+"="+j[l])),
b[l]>0&&(c.push(W+l+"="+b[l]),"wifi"==networkType?c.push(W+l+6+"="+b[l]):"2g/3g"==networkType&&c.push(W+l+12+"="+b[l]));
}
i.off(window,"scroll",o,!1);
}
};
i.on(window,"scroll",o,!1);
}
}(),void function(){
if(!(Math.random()>.001)){
var e=document.createElement("iframe"),t=[600,800,1e3,1200,1500,2e3,3e3,5e3,1e4,18e3],i=Math.ceil(10*Math.random())-1,n=uin+mid+idx+Math.ceil(1e3*Math.random())+(new Date).getTime();
e.style.display="none",e.id="js_ajax",e.setAttribute("data-time",i),e.src="/mp/iframetest?action=page&traceid="+n+"&devicetype="+devicetype+"&timeout="+t[i];
var o=document.getElementById("js_article");
o.appendChild(e);
}
}()):!1;
}
var i=e("biz_common/dom/event.js"),n=navigator.userAgent,o=e("biz_common/utils/huatuo.js"),a=e("biz_wap/utils/ajax.js");
e("appmsg/cdn_img_lib.js"),i.on(window,"load",function(){
if(""==networkType&&window.isInWeixinApp()){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(i){
networkType=e[i.err_msg],t();
});
}else t();
},!1);
});
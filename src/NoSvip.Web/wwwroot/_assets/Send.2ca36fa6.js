let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{d as n,r as a,o as s,c as o,e as t,a as r,f as i,t as l,F as c,b as d}from"./index.a64795a6.js";import{P as u,e as m}from"./PeerConnectionManager.7514179a.js";var g={setup(){const e=t(),r=n(()=>e.params.rid),i=a(""),l=new u;function c(e){i.value=e}return s(()=>{var e;o.on("message",(function(e){console.log("Client received message:",e),l.signalingMessageCallback(e)})),e=r.value,l.waitForConnection(e),m.on("onReceiveMessage",c)}),{roomId:r,sendMessage:function(){l.sendData()},message:i}}};g.render=function(e,n,a,s,o,t){return d(),r(c,null,[i("h1",null,"房间号: "+l(s.roomId)+" 发送端",1),i("button",{onClick:n[1]||(n[1]=(...e)=>s.sendMessage(...e))},"发消息"),i("p",null,l(s.message),1)],64)},g.__file="src/views/Send.vue";export default g;

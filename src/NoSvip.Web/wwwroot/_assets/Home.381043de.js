let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{r as n,o,u as t,c as r,a as s,F as a,b as l,d as c,t as i}from"./index.cbdd0f50.js";import{P as d,e as u,s as f}from"./Peer.f91c321c.js";var m={setup(){t(),n([]);const e=n([]),r=new d,s=n(0),a=n([]),l=e=>{"string"==typeof e?(console.log("接收到文本消息：",e),c(e)):(console.log("接收到流数据:",e),a.value.push(e))},c=e=>{const n=JSON.parse(e);if("TransferStart"===n.type)s.value=n.fileId;else if("TransferEnd"===n.type){n.fileId;const e=new Blob(a.value),o=document.createElement("a");o.href=window.URL.createObjectURL(e),o.download="test.xls",o.click(),window.URL.revokeObjectURL(o.href)}},i=e=>{r.signalingMessageCallback(e)},m=e=>{r.connectPeer(e,!1)};return o(()=>{u.on("onCreatedRoom",m),u.on("onSignalingMessage",i),r.on("onReceiveMessage",l)}),{createRoom:()=>{f.invoke("CreateRoom").catch((function(e){return console.error(e.toString())}))},receiveFileList:e}}};m.render=function(e,n,o,t,d,u){return c(),r(a,null,[s("button",{onClick:n[1]||(n[1]=(...e)=>t.createRoom(...e))},"文件已选好"),s("ol",null,[(c(!0),r(a,null,l(t.receiveFileList,(e,n)=>(c(),r("li",{key:n},i(e),1))),128))])],64)},m.__file="src/views/Home.vue";export default m;

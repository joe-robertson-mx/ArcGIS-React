"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8511],{99880:(e,t,s)=>{s.d(t,{V:()=>a});var n=s(68773),r=(s(3172),s(20102)),o=s(92604),i=s(17452);const l=o.Z.getLogger("esri.assets");function a(e){if(!n.Z.assetsPath)throw l.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new r.Z("assets:path-not-set","config.assetsPath is not set");return(0,i.v_)(n.Z.assetsPath,e)}},80903:(e,t,s)=>{s.d(t,{Z:()=>a});var n=s(50758),r=s(92604),o=s(95330),i=s(25045);const l=r.Z.getLogger("esri.core.workers.Connection");class a{constructor(){this._clients=new Array,this._clientPromises=new Array,this._clientIdx=0}destroy(){this.close()}get closed(){return!this._clients||!this._clients.length}open(e,t){return new Promise(((s,n)=>{let r=!0;const l=e=>{(0,o.k_)(t.signal),r&&(r=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length;for(let r=0;r<e.length;++r){const a=e[r];(0,o.y8)(a)?this._clientPromises[r]=a.then((e=>(this._clients[r]=new i.default(e,t),l(s),this._clients[r])),(()=>(l(n),null))):(this._clients[r]=new i.default(a,t),this._clientPromises[r]=Promise.resolve(this._clients[r]),l(s))}}))}broadcast(e,t,s){const n=new Array(this._clientPromises.length);for(let r=0;r<this._clientPromises.length;++r){const o=this._clientPromises[r];n[r]=o.then((n=>n.invoke(e,t,s)))}return n}close(){for(const e of this._clientPromises)e.then((e=>e.close()));this._clients.length=0,this._clientPromises.length=0}getAvailableClient(){let e;for(let t=0;t<this._clients.length;++t){const s=this._clients[t];if(s){if(!s.isBusy())return Promise.resolve(s)}else e=e||[],e.push(this._clientPromises[t])}return e?Promise.race(e):(this._clientIdx=(this._clientIdx+1)%this._clients.length,Promise.resolve(this._clients[this._clientIdx]))}invoke(e,t,s){let n=null;return Array.isArray(s)?(l.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),n={transferList:s}):n=s,this.closed?Promise.reject(new Error("Connection closed")):this.getAvailableClient().then((s=>s.invoke(e,t,n)))}on(e,t){return Promise.all(this._clientPromises).then((()=>(0,n.AL)(this._clients.map((s=>s.on(e,t))))))}openPorts(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let s=t.length;for(let n=0;n<this._clientPromises.length;++n)this._clientPromises[n].then((r=>{t[n]=r.openPort(),0==--s&&e(t)}))}))}get test(){return{numClients:this._clients.length}}}},25045:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var n=s(40330),r=s(20102),o=s(91460),i=s(70586),l=s(95330),a=s(94362),c=s(17202);const h={statsWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(2303),s.e(6841)]).then(s.bind(s,36841)),geometryEngineWorker:()=>Promise.all([s.e(5837),s.e(8227)]).then(s.bind(s,48227)),CSVSourceWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(2303),s.e(7668),s.e(411),s.e(1534),s.e(3578),s.e(8961),s.e(7054),s.e(2781),s.e(966)]).then(s.bind(s,27793)),EdgeProcessingWorker:()=>Promise.all([s.e(6481),s.e(8936)]).then(s.bind(s,18936)),ElevationSamplerWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(411),s.e(2781),s.e(6481),s.e(6459),s.e(3553)]).then(s.bind(s,61787)),FeatureServiceSnappingSourceWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(2303),s.e(7668),s.e(4588),s.e(411),s.e(1534),s.e(3485),s.e(3578),s.e(8961),s.e(7054),s.e(2781),s.e(5158)]).then(s.bind(s,41650)),GeoJSONSourceWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(2303),s.e(7668),s.e(411),s.e(1534),s.e(3578),s.e(8961),s.e(7054),s.e(2781),s.e(6348),s.e(7845)]).then(s.bind(s,97845)),LercWorker:()=>s.e(3027).then(s.bind(s,23027)),MemorySourceWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(2303),s.e(7668),s.e(411),s.e(1534),s.e(3578),s.e(8961),s.e(7054),s.e(2781),s.e(6348),s.e(639)]).then(s.bind(s,30639)),PBFDecoderWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(8961),s.e(147)]).then(s.bind(s,61916)),Pipeline:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(2303),s.e(7668),s.e(5638),s.e(4588),s.e(411),s.e(1534),s.e(3485),s.e(3578),s.e(8961),s.e(7054),s.e(2730),s.e(7783)]).then(s.bind(s,97783)),PointCloudWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(2303),s.e(411),s.e(9294),s.e(9474)]).then(s.bind(s,16583)),RasterWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(2303),s.e(411),s.e(176),s.e(8034)]).then(s.bind(s,61576)),SceneLayerWorker:()=>s.e(5265).then(s.bind(s,55265)),WFSSourceWorker:()=>Promise.all([s.e(8778),s.e(6570),s.e(8316),s.e(2303),s.e(7668),s.e(411),s.e(1534),s.e(3578),s.e(8961),s.e(7054),s.e(2781),s.e(6348),s.e(4556),s.e(3230)]).then(s.bind(s,43230)),WorkerTileHandler:()=>Promise.all([s.e(2303),s.e(1785),s.e(6810),s.e(9872)]).then(s.bind(s,56456))},{CLOSE:u,ABORT:d,INVOKE:p,RESPONSE:f,OPEN_PORT:_,ON:g}=a.Cs;class m{constructor(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}push(e){e.type===a.Cs.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class b{constructor(e,t){this._port=e,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new m((e=>this._onInvokeMessage(e))),this._client=t.client,this._onMessage=this._onMessage.bind(this),this._channel=t.channel,this._schedule=t.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}static connect(e){const t=new MessageChannel;let s;s="function"==typeof e?new e:"default"in e&&"function"==typeof e.default?new e.default:e;const n=new b(t.port1,{channel:t,client:s});return"object"==typeof s&&"remoteClient"in s&&(s.remoteClient=n),b.clients.set(n,s),t.port2}static loadWorker(e){const t=h[e];return t?t():Promise.resolve(null)}close(){this._post({type:u}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,t,s){const n=s&&s.signal,o=s&&s.transferList;if(!this._port)return Promise.reject(new r.Z("worker:port-closed",`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:t}));const i=(0,a.jt)();return new Promise(((s,r)=>{const a=(0,l.$F)(n,(()=>{var e;const t=this._outJobs.get(i);t&&(this._outJobs.delete(i),null==(e=t.abortHandle)||e.remove(),this._post({type:d,jobId:i}),r((0,l.zE)()))})),c={resolve:s,reject:r,abortHandle:a,debugInfo:e};this._outJobs.set(i,c),this._post({type:p,jobId:i,methodName:e,abortable:null!=n},t,o)}))}on(e,t){const s=new MessageChannel;function n(e){t(e.data)}return this._port.postMessage({type:a.Cs.ON,eventType:e,port:s.port2},[s.port2]),s.port1.addEventListener("message",n),s.port1.start(),{remove(){s.port1.postMessage({type:a.Cs.CLOSE}),s.port1.close(),s.port1.removeEventListener("message",n)}}}openPort(){const e=new MessageChannel;return this._post({type:_,port:e.port2}),e.port1}_close(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach((e=>{var t;null==(t=e.abortHandle)||t.remove(),e.reject((0,l.zE)(`Worker closing, aborting job calling '${e.debugInfo}'`))})),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=this._client=this._schedule=null}_onMessage(e){(0,i.pC)(this._schedule)?this._schedule((()=>this._processMessage(e))):this._processMessage(e)}_processMessage(e){const t=(0,a.QM)(e);if(t)switch(t.type){case f:this._onResponseMessage(t);break;case p:this._invokeQueue.push(t);break;case d:this._onAbortMessage(t);break;case u:this._onCloseMessage();break;case _:this._onOpenPortMessage(t);break;case g:this._onOnMessage(t)}}_onAbortMessage(e){const t=this._inJobs,s=e.jobId,n=t.get(s);this._invokeQueue.push(e),n&&(n.controller&&n.controller.abort(),t.delete(s))}_onCloseMessage(){const e=this._client;this._close(),e&&"destroy"in e&&b.clients.get(this)===e&&e.destroy(),b.clients.delete(this),e&&e.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){const{methodName:t,jobId:s,data:n,abortable:r}=e,o=r?new AbortController:null,i=this._inJobs;let c,h=this._client,u=h[t];try{if(!u&&t&&-1!==t.indexOf(".")){const e=t.split(".");for(let t=0;t<e.length-1;t++)h=h[e[t]],u=h[e[t+1]]}if("function"!=typeof u)throw new TypeError(`${t} is not a function`);c=u.call(h,n,{client:this,signal:o?o.signal:null})}catch(e){return void this._post({type:f,jobId:s,error:(0,a.AB)(e)})}(0,l.y8)(c)?(i.set(s,{controller:o,promise:c}),c.then((e=>{i.has(s)&&(i.delete(s),this._post({type:f,jobId:s},e))}),(e=>{i.has(s)&&(i.delete(s),(0,l.D_)(e)||this._post({type:f,jobId:s,error:(0,a.AB)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:f,jobId:s},c)}_onOpenPortMessage(e){new b(e.port,{client:this._client})}_onOnMessage(e){const{port:t}=e,s=this._client.on(e.eventType,(e=>{t.postMessage(e)})),n=(0,o.on)(e.port,"message",(e=>{(0,a.QM)(e).type===a.Cs.CLOSE&&(n.remove(),s.remove(),t.close())}))}_onResponseMessage(e){var t;const{jobId:s,error:n,data:o}=e,i=this._outJobs;if(!i.has(s))return;const l=i.get(s);i.delete(s),null==(t=l.abortHandle)||t.remove(),n?l.reject(r.Z.fromJSON(JSON.parse(n))):l.resolve(o)}_post(e,t,s){return(0,a.oi)(this._port,e,t,s)}}b.kernelInfo={revision:c.$,version:n.i8,buildDate:c.r},b.clients=new Map},94362:(e,t,s)=>{s.d(t,{Cs:()=>n,jt:()=>l,oi:()=>c,QM:()=>h,AB:()=>a});var n,r,o=s(80442);(r=n||(n={}))[r.HANDSHAKE=0]="HANDSHAKE",r[r.OPEN=1]="OPEN",r[r.OPENED=2]="OPENED",r[r.RESPONSE=3]="RESPONSE",r[r.INVOKE=4]="INVOKE",r[r.ABORT=5]="ABORT",r[r.CLOSE=6]="CLOSE",r[r.OPEN_PORT=7]="OPEN_PORT",r[r.ON=8]="ON";let i=0;function l(){return i++}function a(e){return e?"string"==typeof e?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details||{stack:e.stack}}):null}function c(e,t,s,r){if(t.type===n.OPEN_PORT)return void e.postMessage(t,[t.port]);if(t.type!==n.INVOKE&&t.type!==n.RESPONSE)return void e.postMessage(t);let o;!function(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}(s)?(o=u(r),t.data=s):(o=u(s.transferList),t.data=s.result),o?e.postMessage(t,o):e.postMessage(t)}function h(e){if(!e)return null;const t=e.data;return t?"string"==typeof t?JSON.parse(t):t:null}function u(e){if(!e||!e.length)return null;if((0,o.Z)("esri-workers-arraybuffer-transfer"))return e;const t=e.filter((e=>!function(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name}(e)));return t.length?t:null}},69285:(e,t,s)=>{s.d(t,{k:()=>i});var n=s(70586),r=s(67900),o=s(8744);function i(e,t,s){if((0,n.Wi)(t)||(0,n.Wi)(s)||s.vcsWkid||(0,o.fS)(t,s))return null;const i=(0,r._R)(t)/(0,r._R)(s);if(1===i)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,i);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const s of e.paths)for(const e of s)e.length>2&&(e[2]*=t)}(e,i);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const s of e.rings)for(const e of s)e.length>2&&(e[2]*=t)}(e,i);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const s of e.points)s.length>2&&(s[2]*=t)}(e,i);case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,i);default:return null}}},66677:(e,t,s)=>{s.d(t,{ld:()=>f,B5:()=>u,M8:()=>g,G:()=>y,Qc:()=>d,DR:()=>p,Nm:()=>m,XG:()=>b,a7:()=>_,wH:()=>v});var n=s(70586),r=s(17452),o=s(25929);const i={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},l=Object.values(i),a=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${l.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${l.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),h=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function u(e){return!!a.test(e)}function d(e){const t=(0,r.mN)(e),s=t.path.match(a)||t.path.match(c);if(!s)return null;const[,n,o,l,h]=s,u=o.indexOf("/");return{title:f(-1!==u?o.slice(u+1):o),serverType:i[l.toLowerCase()],sublayer:null!=h&&""!==h?parseInt(h,10):null,url:{path:n}}}function p(e){const t=(0,r.mN)(e).path.match(h);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function f(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function _(e,t){const s=[];if(e){const t=d(e);(0,n.pC)(t)&&t.title&&s.push(t.title)}if(t){const e=f(t);s.push(e)}if(2===s.length){if(-1!==s[0].toLowerCase().indexOf(s[1].toLowerCase()))return s[0];if(-1!==s[1].toLowerCase().indexOf(s[0].toLowerCase()))return s[1]}return s.join(" - ")}function g(e){if(!e)return!1;const t=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),s=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return t&&s}function m(e,t){return e?(0,r.Qj)((0,r.Hu)(e,t)):e}function b(e){let{url:t}=e;if(!t)return{url:t};t=(0,r.Hu)(t,e.logger);const s=(0,r.mN)(t),o=d(s.path);let i;if((0,n.pC)(o))null!=o.sublayer&&null==e.layer.layerId&&(i=o.sublayer),t=o.url.path;else if(e.nonStandardUrlAllowed){const e=p(s.path);(0,n.pC)(e)&&(t=e.serviceUrl,i=e.sublayerId)}return{url:(0,r.Qj)(t),layerId:i}}function v(e,t,s,n,i){(0,o.w)(t,n,"url",i),n.url&&null!=e.layerId&&(n.url=(0,r.v_)(n.url,s,e.layerId.toString()))}function y(e){if(!e)return!1;const t=e.toLowerCase(),s=-1!==t.indexOf("/services/"),n=-1!==t.indexOf("/mapserver/wmsserver"),r=-1!==t.indexOf("/imageserver/wmsserver"),o=-1!==t.indexOf("/wmsserver");return s&&(n||r||o)}},28694:(e,t,s)=>{s.d(t,{p:()=>o});var n=s(70586),r=s(69285);function o(e,t,s){if(!s||!s.features||!s.hasZ)return;const o=(0,r.k)(s.geometryType,t,e.outSpatialReference);if(!(0,n.Wi)(o))for(const e of s.features)o(e.geometry)}},17202:(e,t,s)=>{s.d(t,{r:()=>n,$:()=>r});const n="20211215",r="ad43611b413b1d0a625293a3ce87543dde5c1fa2"}}]);
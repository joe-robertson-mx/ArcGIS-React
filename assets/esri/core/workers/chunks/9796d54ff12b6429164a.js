"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8961],{82397:(e,t,n)=>{n.d(t,{vY:()=>l,J9:()=>f,U1:()=>g,Ie:()=>d,G6:()=>m});var r=n(70586);n(33955);const o=(e,t,n)=>[t,n],s=(e,t,n)=>[t,n,e[2]],i=(e,t,n)=>[t,n,e[2],e[3]];function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,r.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function c({scale:e,translate:t},n){return n*e[0]+t[0]}function u({scale:e,translate:t},n){return t[1]-n*e[1]}function h(e,t,n){const r=new Array(n.length);if(!n.length)return r;const[o,s]=e.scale;let i=c(e,n[0][0]),l=u(e,n[0][1]);r[0]=t(n[0],i,l);for(let e=1;e<n.length;e++){const c=n[e];i+=c[0]*o,l-=c[1]*s,r[e]=t(c,i,l)}return r}function a(e,t,n){const r=new Array(n.length);for(let o=0;o<n.length;o++)r[o]=h(e,t,n[o]);return r}function f(e,t,n,l,c){return(0,r.pC)(n)&&(t.points=function(e,t,n,r){return h(e,n?r?i:s:r?s:o,t)}(e,n.points,l,c)),t}function g(e,t,n,o,s){return(0,r.Wi)(n)||(t.x=c(e,n.x),t.y=u(e,n.y),t!==n&&(o&&(t.z=n.z),s&&(t.m=n.m))),t}function d(e,t,n,l,c){return(0,r.pC)(n)&&(t.rings=function(e,t,n,r){return a(e,n?r?i:s:r?s:o,t)}(e,n.rings,l,c)),t}function m(e,t,n,l,c){return(0,r.pC)(n)&&(t.paths=function(e,t,n,r){return a(e,n?r?i:s:r?s:o,t)}(e,n.paths,l,c)),t}},70272:(e,t,n)=>{n.d(t,{nd:()=>i,ZP:()=>o,S6:()=>s});var r=n(70586);class o{constructor(e=null,t={},n,r){this.geometry=e,this.attributes=t,this.centroid=n,this.objectId=r,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new o(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function s(e){return!((0,r.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}class i extends o{}},44876:(e,t,n)=>{n.d(t,{Z:()=>r});class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new r;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},5428:(e,t,n)=>{n.d(t,{Z:()=>r});class r{constructor(e=[],t=[],n=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=n}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const r=this.lengths[n];for(let n=0;n<r;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=r}}clone(e){return e?(e.set(this.coords),new r(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new r(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},98732:(e,t,n)=>{n.d(t,{XA:()=>U,h_:()=>X,Yn:()=>S,GH:()=>A,Uy:()=>W,EI:()=>$,cn:()=>_,di:()=>O,Iv:()=>q,fQ:()=>G,eG:()=>L,J6:()=>v,oB:()=>se,zj:()=>Q,$:()=>ee,lz:()=>oe,RZ:()=>B,Nh:()=>H,Jd:()=>I,IN:()=>b,hY:()=>ne,lM:()=>J,$g:()=>te});var r=n(20102),o=n(92604),s=n(70586),i=n(33955),l=n(70272),c=n(44876),u=n(5428);function h(e,t){return e?t?4:3:t?3:2}const a=o.Z.getLogger("esri.tasks.support.optimizedFeatureSet"),f={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},g=(e,t,n,r,o,s)=>{e[n]=o,e[n+1]=s},d=(e,t,n,r,o,s)=>{e[n]=o,e[n+1]=s,e[n+2]=t[r+2]},m=(e,t,n,r,o,s)=>{e[n]=o,e[n+1]=s,e[n+2]=t[r+3]},y=(e,t,n,r,o,s)=>{e[n]=o,e[n+1]=s,e[n+2]=t[r+2],e[n+3]=t[r+3]};function p(e,t,n,r){if(e){if(n)return t&&r?y:d;if(t&&r)return m}else if(t&&r)return d;return g}function I({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function b({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function w({scale:e,translate:t},n){return n*e[0]+t[0]}function Z({scale:e,translate:t},n){return t[1]-n*e[1]}function G(e,t,n){return e?t?n?k(e):F(e):n?T(e):M(e):null}function M(e){const t=e.coords;return{x:t[0],y:t[1]}}function N(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function F(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function P(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function T(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function x(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function k(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function C(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function j(e,t){return e&&t?C:e?P:t?x:N}function q(e,t,n){if((0,s.Wi)(e))return null;const r=h(t,n),o=[];for(let t=0;t<e.coords.length;t+=r){const n=[];for(let o=0;o<r;o++)n.push(e.coords[t+o]);o.push(n)}return t?n?{points:o,hasZ:t,hasM:n}:{points:o,hasZ:t}:n?{points:o,hasM:n}:{points:o}}function R(e,t,n=h(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const r=e.coords;let o=0;for(const e of t.points)for(let t=0;t<n;t++)r[o++]=e[t];return e}function v(e,t,n){if(!e)return null;const r=h(t,n),{coords:o,lengths:s}=e,i=[];let l=0;for(const e of s){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<r;t++)e.push(o[l++]);t.push(e)}i.push(t)}return t?n?{paths:i,hasZ:t,hasM:n}:{paths:i,hasZ:t}:n?{paths:i,hasM:n}:{paths:i}}function z(e,t,n=h(t.hasZ,t.hasM)){const{lengths:r,coords:o}=e;let s=0;for(const e of t.paths){for(const t of e)for(let e=0;e<n;e++)o[s++]=t[e];r.push(e.length)}return e}function L(e,t,n){if(!e)return null;const r=h(t,n),{coords:o,lengths:s}=e,i=[];let l=0;for(const e of s){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<r;t++)e.push(o[l++]);t.push(e)}i.push(t)}return t?n?{rings:i,hasZ:t,hasM:n}:{rings:i,hasZ:t}:n?{rings:i,hasM:n}:{rings:i}}function W(e,t,n=t.hasZ,r=t.hasM){return function(e,t,n,r){const o=h(n,r),{lengths:s,coords:i}=e;let l=0;s.length=i.length=0;for(const e of t){for(const t of e)for(let e=0;e<o;e++)i[l++]=t[e];s.push(e.length)}}(e,t.rings,n,r),e}const Y=[],E=[];function U(e,t,n,r,o){Y[0]=e;const[s]=S(E,Y,t,n,r,o);return Y.length=E.length=0,s}function S(e,t,n,o,i,c){if(e.length=0,!n){for(const n of t){const t=n.attributes[c];e.push(new l.ZP(null,n.attributes,null,t))}return e}switch(n){case"esriGeometryPoint":return function(e,t,n,r,o){const s=j(n,r);for(const n of t){const{geometry:t,attributes:r}=n;let i;t&&(i=s(new u.Z,t)),e.push(new l.ZP(i,r,null,r[o]))}return e}(e,t,o,i,c);case"esriGeometryMultipoint":return function(e,t,n,r,o){const s=h(n,r);for(const n of t){const t=n.geometry,r=n.attributes;let i;t&&(i=R(new u.Z,t,s)),e.push(new l.ZP(i,r,null,r[o]))}return e}(e,t,o,i,c);case"esriGeometryPolyline":return function(e,t,n,r,o){const s=h(n,r);for(const n of t){const t=n.geometry,r=n.attributes;let i;t&&(i=z(new u.Z,t,s)),e.push(new l.ZP(i,r,null,r[o]))}return e}(e,t,o,i,c);case"esriGeometryPolygon":return function(e,t,n,r,o){for(const i of t){const t=i.geometry,c=i.centroid,h=i.attributes;let a;t&&(a=W(new u.Z,t,n,r)),(0,s.pC)(c)?e.push(new l.ZP(a,h,N(new u.Z,c),h[o])):e.push(new l.ZP(a,h,null,h[o]))}return e}(e,t,o,i,c);default:a.error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`)),e.length=0}return e}function $(e,t,n,r){E[0]=e,V(Y,E,t,n,r);const o=Y[0];return Y.length=E.length=0,o}function A(e,t,n){if((0,s.Wi)(e))return null;const o=new u.Z;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),(0,i.wp)(e)?j(null!=t?t:null!=e.z,null!=n?n:null!=e.m)(o,e):(0,i.oU)(e)?W(o,e,t,n):(0,i.l9)(e)?z(o,e,h(t,n)):(0,i.aW)(e)?R(o,e,h(t,n)):void a.error("convertFromGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${e}'`))}function O(e,t,n,o){const i=e&&("coords"in e?e:e.geometry);if((0,s.Wi)(i))return null;switch(t){case"esriGeometryPoint":{let e=M;return n&&o?e=k:n?e=F:o&&(e=T),e(i)}case"esriGeometryMultipoint":return q(i,n,o);case"esriGeometryPolyline":return v(i,n,o);case"esriGeometryPolygon":return L(i,n,o);default:return void a.error("convertToGeometry:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${t}'`))}}function V(e,t,n,o,i){if(e.length=0,(0,s.Wi)(n))return function(e,t){for(const n of t)e.push({attributes:n.attributes});return e}(e,t);switch(n){case"esriGeometryPoint":return function(e,t,n,r){let o=M;n&&r?o=k:n?o=F:r&&(o=T);for(const n of t){const{geometry:t,attributes:r}=n,i=(0,s.pC)(t)?o(t):null;e.push({attributes:r,geometry:i})}return e}(e,t,o,i);case"esriGeometryMultipoint":return function(e,t,n,r){for(const o of t){const{geometry:t,attributes:s}=o;let i;t&&(i=q(t,n,r)),e.push({attributes:s,geometry:i})}return e}(e,t,o,i);case"esriGeometryPolyline":return function(e,t,n,r){for(const o of t){const{geometry:t,attributes:i}=o;let l;(0,s.pC)(t)&&(l=v(t,n,r)),e.push({attributes:i,geometry:l})}return e}(e,t,o,i);case"esriGeometryPolygon":return function(e,t,n,r){for(const o of t){const{geometry:t,attributes:i,centroid:l}=o;let c;if((0,s.pC)(t)&&(c=L(t,n,r)),l){const t=M(l);e.push({attributes:i,centroid:t,geometry:c})}else e.push({attributes:i,geometry:c})}return e}(e,t,o,i);default:a.error("convertToFeatureSet:unknown-geometry",new r.Z(`Unable to parse unknown geometry type '${n}'`))}return e}function _(e){const{objectIdFieldName:t,spatialReference:n,transform:r,fields:o,hasM:s,hasZ:i,features:l,geometryType:c,exceededTransferLimit:u,uniqueIdField:h,queryGeometry:a,queryGeometryType:f}=e,g={features:V([],l,c,i,s),fields:o,geometryType:c,objectIdFieldName:t,spatialReference:n,uniqueIdField:h,queryGeometry:O(a,f,!1,!1)};return r&&(g.transform=r),u&&(g.exceededTransferLimit=u),s&&(g.hasM=s),i&&(g.hasZ=i),g}function X(e,t){const n=new c.Z,{hasM:o,hasZ:s,features:i,objectIdFieldName:l,spatialReference:u,geometryType:h,exceededTransferLimit:f,transform:g,fields:d}=e;return d&&(n.fields=d),n.geometryType=h,n.objectIdFieldName=l||t,n.spatialReference=u,n.objectIdFieldName?(i&&S(n.features,i,h,s,o,n.objectIdFieldName),f&&(n.exceededTransferLimit=f),o&&(n.hasM=o),s&&(n.hasZ=s),g&&(n.transform=g),n):(a.error(new r.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function J(e){const{transform:t,features:n,hasM:r,hasZ:o}=e;if(!t)return e;for(const e of n)(0,s.pC)(e.geometry)&&te(e.geometry,e.geometry,r,o,t),e.centroid&&te(e.centroid,e.centroid,r,o,t);return e.transform=null,e}function B(e,t){const{geometryType:n,features:r,hasM:o,hasZ:s}=t;if(!e)return t;for(let t=0;t<r.length;t++){const i=r[t],l=i.weakClone();l.geometry=new u.Z,H(l.geometry,i.geometry,o,s,n,e),i.centroid&&(l.centroid=new u.Z,H(l.centroid,i.centroid,o,s,"esriGeometryPoint",e)),r[t]=l}return t.transform=e,t}function H(e,t,n,r,o,i,l=n,c=r){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),(0,s.Wi)(t)||!t.coords.length)return null;const u=f[o],{coords:a,lengths:g}=t,d=h(n,r),m=h(n&&l,r&&c),y=p(n,r,l,c);if(!g.length)return y(e.coords,a,0,0,I(i,a[0]),b(i,a[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=d,e;let w,Z,G,M,N=0,F=0,P=F;for(const t of g){if(t<u)continue;let n=0;F=P,G=w=I(i,a[N]),M=Z=b(i,a[N+1]),y(e.coords,a,F,N,G,M),n++,N+=d,F+=m;for(let r=1;r<t;r++,N+=d)G=I(i,a[N]),M=b(i,a[N+1]),G===w&&M===Z||(y(e.coords,a,F,N,G-w,M-Z),F+=m,n++,w=G,Z=M);n>=u&&(e.lengths.push(n),P=F)}return e.coords.length=P,e.coords.length?e:null}function Q(e,t,n,r,o,s,i=n,l=r){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const c=f[o],{coords:u,lengths:a}=t,g=h(n,r),d=h(n&&i,r&&l),m=p(n,r,i,l);if(!a.length)return m(e.coords,u,0,0,u[0],u[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;let y=0;const I=s*s;for(const t of a){if(t<c){y+=t*g;continue}const n=e.coords.length/d,r=y,o=y+(t-1)*g;m(e.coords,u,e.coords.length,r,u[r],u[r+1]),K(e.coords,u,g,I,m,r,o),m(e.coords,u,e.coords.length,o,u[o],u[o+1]);const s=e.coords.length/d-n;s>=c?e.lengths.push(s):e.coords.length=n*d,y+=t*g}return e.coords.length?e:null}function D(e,t,n,r){const o=e[t],s=e[t+1],i=e[n],l=e[n+1],c=e[r],u=e[r+1];let h=i,a=l,f=c-h,g=u-a;if(0!==f||0!==g){const e=((o-h)*f+(s-a)*g)/(f*f+g*g);e>1?(h=c,a=u):e>0&&(h+=f*e,a+=g*e)}return f=o-h,g=s-a,f*f+g*g}function K(e,t,n,r,o,s,i){let l,c=r,u=0;for(let e=s+n;e<i;e+=n)l=D(t,e,s,i),l>c&&(u=e,c=l);c>r&&(u-s>n&&K(e,t,n,r,o,s,u),o(e,t,e.length,u,t[u],t[u+1]),i-u>n&&K(e,t,n,r,o,u,i))}function ee(e,t,n,r){if((0,s.Wi)(t)||!t.coords||!t.coords.length)return null;const o=h(n,r);let i=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,u=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=o){const n=e[t],r=e[t+1];i=Math.min(i,n),c=Math.max(c,n),l=Math.min(l,r),u=Math.max(u,r)}}return e[0]=i,e[1]=l,e[2]=c,e[3]=u,e}function te(e,t,n,r,o){const{coords:s,lengths:i}=t,l=n?r?y:d:r?d:g,c=h(n,r);if(!s.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return l(e.coords,s,0,0,w(o,s[0]),Z(o,s[1])),e!==t&&(e.lengths.length=0,e.coords.length=c),e;const[u,a]=o.scale;let f=0;for(let t=0;t<i.length;t++){const n=i[t];e.lengths[t]=n;let r=w(o,s[f]),h=Z(o,s[f+1]);l(e.coords,s,f,f,r,h),f+=c;for(let t=1;t<n;t++,f+=c)r+=s[f]*u,h-=s[f+1]*a,l(e.coords,s,f,f,r,h)}return e!==t&&(e.lengths.length=i.length,e.coords.length=s.length),e}function ne(e,t,n,r,o,s){const i=h(n,r),l=p(n,r,o,s),c=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let t=0;t<c.length;t+=i)l(e.coords,c,e.coords.length,t,c[t],c[t+1]);return e}function re(e,t,n,r){let o=0,s=e[r*t],i=e[r*(t+1)];for(let l=1;l<n;l++){const n=s+e[r*(t+l)],c=i+e[r*(t+l)+1],u=(n-s)*(c+i);s=n,i=c,o+=u}return.5*o}function oe(e,t){const{coords:n,lengths:r}=e;let o=0,s=0;for(let e=0;e<r.length;e++)s+=re(n,o,r[e],t),o+=e;return Math.abs(s)}function se(e,t){if((0,s.Wi)(e))return null;const n=e.clone(),r=e.coords,o=e.lengths;let i=0;for(let e=0;e<o.length;e++){const s=o[e];let l=r[t*i],c=r[t*i+1];for(let e=1;e<s;e++){const o=l+r[t*(i+e)],s=c+r[t*(i+e)+1];n.coords[t*(i+e)]=o,n.coords[t*(i+e)+1]=s,l=o,c=s}i+=s}return n}}}]);
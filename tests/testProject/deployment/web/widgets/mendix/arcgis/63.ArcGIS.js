(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js ***!
  \********************************************************************************************/
/*! exports provided: computeProjectedScales, defaultGridSpacing, getDefaultDatumTransformationForDataset, getProjectionOffsetGrid, getRasterDatasetAlignmentInfo, getWorldWrapCount, load, projectExtent, projectPoint, projectResolution, snapExtent, snapPyramid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeProjectedScales", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridSpacing", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultDatumTransformationForDataset", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectionOffsetGrid", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRasterDatasetAlignmentInfo", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorldWrapCount", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPoint", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectResolution", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapExtent", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapPyramid", function() { return C; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const m=5e-4,u=function(e,n){const t=(e.isWGS84||e.isWebMercator)&&(n.isWGS84||n.isWebMercator);return!(e.equals(n)||t)},f=function(e,n){const t=(e[0]+e[4]+e[4*n.cols]+e[4*n.cols+4])/4,o=(e[1]+e[5]+e[4*n.rows+1]+e[4*n.rows+5])/4;return[Math.abs(t-e[2*n.rows+2]),Math.abs(o-e[2*n.rows+3])]},p={3395:20037508.342789244,3410:17334193.943686873,3832:3339584.723798206,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,8858:7396237.374497803,8859:2465412.4581659334,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53025:7276828.3848298555,53031:10384677.558821043,53034:20015086.79602057,53036:7389443.187332862,53037:2463147.729110953,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54025:7311399.09166516,54031:10396310.810074743,54034:20037508.342789244,54050:808820.9223376509,54053:1920897.3915568967,54079:20037508.342789244,54080:20037508.342789244,54099:13524439.768288724,54100:20037508.342789244,54101:20037508.342789244,102038:4297258.582585486,102299:5013965.117483125},h=32;async function y(){if(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])()||!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isSupported"])())return null;await Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["load"])()}function M(n,t,r){if(!u(n.spatialReference,t))return null;if(!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");return r?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["getTransformation"])(t,n.spatialReference,n):Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["getTransformation"])(n.spatialReference,t,n)}function g(n,t,r,i=null){if(n.spatialReference.equals(t))return n;const a=u(n.spatialReference,t);if(a&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");const x=r.center,m=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__["default"]({xmin:x.x-n.x/2,xmax:x.x+n.x/2,ymin:x.y-n.y/2,ymax:x.y+n.y/2,spatialReference:n.spatialReference}),f=a?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(m,t,i):Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__["project"])(m,t);if(null==f)return null;return{x:f.xmax-f.xmin,y:f.ymax-f.ymin}}function d(e,n=.01){return Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(e)?n/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(e):0}function w(n,t,r=null,i=!0){const a=n.spatialReference;if(a.equals(t))return n;const c=u(a,t);if(c&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");const x=c?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(n,t,r):Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__["project"])(n,t);if(x&&i&&t.isGeographic){const[e,t]=v(a,!0),o=d(a);o&&null!=e&&null!=t&&(Math.abs(n.x-e)<o&&Math.abs(180-x.x)<m?x.x-=360:Math.abs(n.x-t)<o&&Math.abs(180+x.x)<m&&(x.x+=360))}return x}function R(e){const t=S(e[0].spatialReference);if(e.length<2||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t))return e[0];let{xmin:o,xmax:r,ymin:i,ymax:a}=e[0];for(let n=1;n<e.length;n++){const o=e[n];r=o.xmax+t*n,i=Math.min(i,o.ymin),a=Math.max(a,o.ymax)}return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__["default"]({xmin:o,xmax:r,ymin:i,ymax:a,spatialReference:e[0].spatialReference})}function j(e,t,o=null,r=!0){if(e.spatialReference.equals(t))return e;const i=W(e),a=S(e.spatialReference,!0);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(a)||0===i)return b(e,t,o,r);return R(e.clone().normalize().map((e=>b(e,t,o,r))))}function b(n,t,r=null,i=!0){const a=n.spatialReference;if(a.equals(t))return n;const c=u(a,t);if(c&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectExtent","projection engine is not loaded");const f=c?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(n,t,r):Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__["project"])(n,t);let[p,h]=v(a,!0);if(f&&i&&a.isWebMercator&&t.isGeographic&&null!=p&&null!=h){const e=.001,o=1e3;if(Math.abs(n.xmin-p)<e&&Math.abs(h-n.xmax)>o&&Math.abs(180-f.xmax)<m){f.xmin=-180;const e=[];e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmax,n.ymin,a)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmax,(n.ymin+n.ymax)/2,a)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmax,n.ymax,a));const o=e.map((e=>w(e,t,r))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));f.xmax=Math.max.apply(null,o)}if(Math.abs(n.xmax-h)<e&&Math.abs(p-n.xmin)>o&&Math.abs(180+f.xmin)<m){f.xmax=180;const e=[];e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmin,n.ymin,a)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmin,(n.ymin+n.ymax)/2,a)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"](n.xmin,n.ymax,a));const o=e.map((e=>w(e,t,r))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));f.xmin=Math.min.apply(null,o)}}[p,h]=v(t,!0);const y=d(t);return y&&null!=p&&null!=h&&(Math.abs(f.xmin-p)<y&&(f.xmin=p),Math.abs(f.xmax-h)<y&&(f.xmax=h)),f}function S(e,n=!1){const t=n?20037508.342787:20037508.342788905;return e.isWebMercator?2*t:e.wkid&&e.isGeographic?360:2*p[e.wkid]||null}function v(e,t=!1){const o=[],r=S(e,t);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r)&&(o.push(-r/2),o.push(r/2)),o}function N(e,n,t,o){let r=(e-n)/t;return r-Math.floor(r)!=0?r=Math.floor(r):o&&(r-=1),r}function W(e,t=!1){const o=S(e.spatialReference);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o))return 0;const r=t?0:-(o/2);return N(e.xmax,r,o,!0)-N(e.xmin,r,o,!1)}function z(e){const t=e.storageInfo.origin.x,o=S(e.spatialReference,!0);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const r=o/2,{nativePixelSize:i,storageInfo:a,extent:s}=e,{maximumPyramidLevel:l,blockWidth:c,pyramidScalingFactor:x}=a;let m=i.x;const u=[],f=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.transform)&&"gcs-shift"===e.transform.type,p=t+r,h=f?o-t:r-t;for(let n=0;n<=l;n++){const e=(s.xmax-t)/m/c,n=e-Math.floor(e)==0?e:Math.ceil(e),r=(o/2-t)/m/c,i=r-Math.floor(r)==0?r:Math.ceil(r),a=Math.floor(p/m/c),l=Math.round(p/m)%c,f=(c-Math.round(h/m)%c)%c;u.push({resolutionX:m,blockWidth:c,datsetColumnCount:n,worldColumnCountFromOrigin:i,leftMargin:l,rightPadding:f,originColumnOffset:a}),m*=x}return{originX:t,halfWorldWidth:r,pyramidsInfo:u,hasGCSSShiftTransform:f}}function G(t,r,i,a=null,s=null,l=!1,c=[h,h]){if(u(t.spatialReference,r.spatialReference)&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");if(!(t&&r&&i))return null;const{xmin:m,ymin:p,xmax:y,ymax:M}=t,g=t.spatialReference,d=r.spatialReference,R=S(d);l=l||"gcs-shift"===(null==s?void 0:s.type);const j={x:c[0]*i.x,y:c[1]*i.y},b={cols:Math.ceil((y-m)/j.x-.1)+1,rows:Math.ceil((M-p)/j.y-.1)+1},v=j.x,N=j.y,W=[];let z,G=!1;for(let e=0;e<b.cols;e++){const t=[];for(let o=0;o<b.rows;o++){let i=w(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:m+v*e,y:M-N*o,spatialReference:g}),d,a);s&&(i=s.inverseTransform(i)),t.push(i),e>0&&l&&i&&z[o]&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(R)&&i.x<z[o].x&&(i.x+=R),i?(W.push((i.x-r.xmin)/(r.xmax-r.xmin)),W.push((r.ymax-i.y)/(r.ymax-r.ymin))):(W.push(NaN),W.push(NaN),G=!0)}z=t}const P=f(W,b),C=new Float32Array((b.cols-1)*(b.rows-1)*2*6),L=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),k=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let e=0;e<b.cols-1;e++){for(let n=0;n<b.rows-1;n++){let t=e*b.rows*2+2*n;const o=W[t],r=W[t+1],i=W[t+2],a=W[t+3];t+=2*b.rows;const s=W[t],l=W[t+1],c=W[t+2],x=W[t+3];let m=0,u=12*(n*(b.cols-1)+e);for(let e=0;e<3;e++)C[u++]=L[m++]*o+L[m++]*i+L[m++]*c;m=0;for(let e=0;e<3;e++)C[u++]=L[m++]*r+L[m++]*a+L[m++]*x;m=0;for(let e=0;e<3;e++)C[u++]=k[m++]*o+k[m++]*s+k[m++]*c;m=0;for(let e=0;e<3;e++)C[u++]=k[m++]*r+k[m++]*l+k[m++]*x}if(G)for(let e=0;e<C.length;e++)isNaN(C[e])&&(C[e]=-1)}return{offsets:W,error:P,coefficients:C,spacing:c,size:[b.cols-1,b.rows-1]}}function P(e){const n=e.clone().normalize();return 1===n.length?n[0]:R(n)}function C(e,t,o){const{storageInfo:r,pixelSize:i}=t;let a,s=!1;const{pyramidResolutions:l}=r;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(l)&&l.length){const n=(e.x+e.y)/2,r=l[l.length-1],c=(r.x+r.y)/2,m=(i.x+i.y)/2;if(n<=m)a=0;else if(n>=c)a=l.length,s=n/c>8;else{let e,t=m;for(let r=1;r<=l.length;r++){if(e=(l[r-1].x+l[r-1].y)/2,n<=e){n===e?a=r:"down"===o?(a=r-1,s=n/t>8):a="up"===o||n-t>e-n||n/t>2?r:r-1;break}t=e}}const u=0===a?i:l[a-1];return{pyramidLevel:a,pyramidResolution:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:u.x,y:u.y,spatialReference:t.spatialReference}),excessiveReading:s}}const c=Math.log(e.x/i.x)/Math.LN2,m=Math.log(e.y/i.y)/Math.LN2,u=t.storageInfo.maximumPyramidLevel||0;a="down"===o?Math.floor(Math.min(c,m)):"up"===o?Math.ceil(Math.max(c,m)):Math.round((c+m)/2),a<0?a=0:a>u&&(s=a>u+3,a=u);const f=2**a;return{pyramidLevel:a,pyramidResolution:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:f*t.nativePixelSize.x,y:f*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:s}}function L(e,n,o=512,r=!0){const{extent:i,spatialReference:a,pixelSize:s}=e,l=g(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:s.x,y:s.y,spatialReference:a}),n,i);if(null==l)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const c=(l.x+l.y)/2,m=Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(n),u=c*m*96*39.37,f=n.isGeographic?256/o*295828763.7958547:256/o*591657527.591555;let p=!1;const h=j(i,n);r&&(n.isGeographic||n.isWebMercator)&&(p=h.xmin*h.xmax<0);let y,M=u;const d=1.001;if(p){M=f;const e=n.isGeographic?1341104507446289e-21:.29858214164761665,t=e*(96*m*39.37),o=n.isGeographic?4326:3857;y=g(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:e,y:e,spatialReference:{wkid:o}}),a,h),y.x*=M/t,y.y*=M/t}else{y={x:s.x,y:s.y};const n=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let t=0;for(;M<f*(d/2)&&t<n;)t++,M*=2,y.x*=2,y.y*=2;Math.max(M,f)/Math.min(M,f)<=d&&(M=f)}const w=[M],R=[{x:y.x,y:y.y}],b=70.5310735,S=Math.min(b,u)/d;for(;M>=S;)M/=2,y.x/=2,y.y/=2,w.push(M),R.push({x:y.x,y:y.y});return{projectedPixelSize:l,scales:w,srcResolutions:R,isCustomTilingScheme:!p}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js ***!
  \**************************************************************************************/
/*! exports provided: convertVectorFieldData, convertVectorFieldUnit, getUnitConversionFactor, isValidPixelBlock, snapImageToSymbolTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertVectorFieldData", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertVectorFieldUnit", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnitConversionFactor", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPixelBlock", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapImageToSymbolTile", function() { return p; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PixelBlock.js */ "./node_modules/@arcgis/core/layers/support/PixelBlock.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=180/Math.PI,n=function(e){return e&&"esri.layers.support.PixelBlock"===e.declaredClass&&e.pixels&&e.pixels.length>0},r=new Map;function o(e,t){return r.get(e)/r.get(t)||1}function a(e){return(450-e)%360}function h(e,t="geographic"){const[n,r]=e,o=Math.sqrt(n*n+r*r);let h=Math.atan2(r,n)*i;return h=(360+h)%360,"geographic"===t&&(h=a(h)),[o,h]}function s(e,t="geographic"){let n=e[1];"geographic"===t&&(n=a(n)),n%=360;const r=e[0];return[r*Math.cos(n/i),r*Math.sin(n/i)]}function l(e,i,r="geographic",o=1){if(!n(e))return e;const{pixels:a,width:l,height:c}=e,p=l*c,u=a[0],x=a[1],m=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].createEmptyBand(e.pixelType,p),f=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"].createEmptyBand(e.pixelType,p);let d=0;for(let t=0;t<c;t++)for(let e=0;e<l;e++)"vector-uv"===i?([m[d],f[d]]=h([u[d],x[d]],r),m[d]*=o):([m[d],f[d]]=s([u[d],x[d]],r),m[d]*=o,f[d]*=o),d++;const g=new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"]({pixelType:e.pixelType,width:e.width,height:e.height,mask:e.mask,validPixelCount:e.validPixelCount,maskIsAlpha:e.maskIsAlpha,pixels:[m,f]});return g.updateStatistics(),g}function c(e,t,i=1){if(1===i||!n(e))return e;const r=e.clone(),{pixels:o,width:a,height:h}=r,s=o[0],l=o[1];let c=0;for(let n=0;n<h;n++)for(let e=0;e<a;e++)"vector-uv"===t?(s[c]*=i,l[c]*=i):s[c]*=i,c++;return r.updateStatistics(),r}function p(t,i,n,r,o){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)||!o.spatialReference.equals(t.spatialReference))return{extent:t,width:i,height:n,resolution:t.width/i};const a=o.xmin,h=o.ymax;r=Math.max(r||0,30);const s=Math.ceil(i*(1/r)),l=Math.ceil(n*(1/r)),c=((t.xmax-t.xmin)/s+(t.ymax-t.ymin)/l)/2;return t.xmin=a+Math.floor((t.xmin-a)/c)*c,t.xmax=a+Math.ceil((t.xmax-a)/c)*c,t.ymin=h+Math.floor((t.ymin-h)/c)*c,t.ymax=h+Math.ceil((t.ymax-h)/c)*c,{extent:t,width:Math.round(t.width/c),height:Math.round(t.height/c),resolution:c}}r.set("meter-per-second",1),r.set("kilometer-per-hour",.277778),r.set("knots",.514444),r.set("feet-per-second",.3048),r.set("mile-per-hour",.44704);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/Bitmap.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js ***!
  \*************************************************************/
/*! exports provided: Bitmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bitmap", function() { return g; });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/mat3.js */ "./node_modules/@arcgis/core/chunks/mat3.js");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "./node_modules/@arcgis/core/chunks/mat3f32.js");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/vec2f32.js */ "./node_modules/@arcgis/core/chunks/vec2f32.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "./node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "./node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webgl/RenderingContext.js */ "./node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "./node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DisplayObject.js */ "./node_modules/@arcgis/core/views/2d/engine/DisplayObject.js");
/* harmony import */ var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ImageryBitmapSource.js */ "./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function d(t){return t&&"render"in t}function c(t){return t&&!("render"in t)}function l(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function x(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__["default"](t,s)}class g extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_11__["DisplayObject"]{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])()},this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(h){const o=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this.transforms.dvs),[u,a]=h.toScreenNoRotation([0,0],this.x,this.y),d=this.resolution/this.pixelRatio/h.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__["f"])(u,a)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__["f"])(c/2,l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["r"])(o,o,-x),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__["f"])(-c/2,-l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["k"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__["f"])(c,l)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["m"])(this.transforms.dvs,h.displayViewMat3,o)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(t){var e;if(!this.stage)return null==(e=this._texture)||e.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=x(t,this.sourceWidth,this.sourceHeight):this._texture=x(t));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),d(i))if(i instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_12__["default"]){const t=i.getRenderedRasterPixels();this._texture.setData(t.renderedRasterPixels)}else this._texture.setData(l(i));else c(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js ***!
  \**********************************************************************/
/*! exports provided: BitmapContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapContainer", function() { return t; });
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brushes.js */ "./node_modules/@arcgis/core/views/2d/engine/brushes.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/enums.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/WGLContainer.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/WGLContainer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_0__["brushes"].bitmap],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),l=i.pixelBlock.getAsRGBA(),h=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);h.data.set(l),e.putImageData(h,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/ImageryLayerView2D.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/ImageryLayerView2D.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "./node_modules/@arcgis/core/core/watchUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LayerView2D.js */ "./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js");
/* harmony import */ var _imagery_ImageryGraphicsView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imagery/ImageryGraphicsView2D.js */ "./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryGraphicsView2D.js");
/* harmony import */ var _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imagery/ImageryView2D.js */ "./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryView2D.js");
/* harmony import */ var _layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/ImageryLayerView.js */ "./node_modules/@arcgis/core/views/layers/ImageryLayerView.js");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/LayerView.js */ "./node_modules/@arcgis/core/views/layers/LayerView.js");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends(Object(_layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_10__["ImageryLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_7__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__["default"])))){constructor(){super(...arguments),this._exportImageVersion=-1}initialize(){this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_1__["init"])(this,["layer.blendMode"],(e=>{this.subview&&(this.subview.container.blendMode=e)}),!0))}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return!(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_1__["init"])(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate()})),this.layer.on("redraw",(()=>this.subview.redraw())),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_1__["watch"])(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update")}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var s,i;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(s=this.subview)||s.uninstall(this.container),null==(i=this.subview)||i.destroy(),this.subview="Imagery"===t?new _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_9__["default"]({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new _imagery_ImageryGraphicsView2D_js__WEBPACK_IMPORTED_MODULE_8__["default"]({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode);this.requestUpdate()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"pixelData",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],p.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"subview",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.ImageryLayerView2D")],p);var d=p;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js ***!
  \******************************************************************/
/*! exports provided: LayerView2DMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerView2DMixin", function() { return l; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "./node_modules/@arcgis/core/core/watchUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _engine_Container_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../engine/Container.js */ "./node_modules/@arcgis/core/views/2d/engine/Container.js");
/* harmony import */ var _layers_support_ClipArea_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/ClipArea.js */ "./node_modules/@arcgis/core/views/layers/support/ClipArea.js");
/* harmony import */ var _layers_support_ClipRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/support/ClipRect.js */ "./node_modules/@arcgis/core/views/layers/support/ClipRect.js");
/* harmony import */ var _layers_support_Geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/support/Geometry.js */ "./node_modules/@arcgis/core/views/layers/support/Geometry.js");
/* harmony import */ var _layers_support_Path_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/support/Path.js */ "./node_modules/@arcgis/core/views/layers/support/Path.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c=_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType({key:"type",base:_layers_support_ClipArea_js__WEBPACK_IMPORTED_MODULE_10__["default"],typeMap:{rect:_layers_support_ClipRect_js__WEBPACK_IMPORTED_MODULE_11__["default"],path:_layers_support_Path_js__WEBPACK_IMPORTED_MODULE_13__["default"],geometry:_layers_support_Geometry_js__WEBPACK_IMPORTED_MODULE_12__["default"]}}),l=e=>{let p=class extends e{constructor(){super(...arguments),this.clips=new c,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var t;this.container||(this.container=new _engine_Container_js__WEBPACK_IMPORTED_MODULE_9__["Container"]),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__["init"])(this,"suspended",(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),!0),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__["init"])(this,["layer.opacity","container"],(()=>{var t,e;this.container&&(this.container.opacity=null!=(t=null==(e=this.layer)?void 0:e.opacity)?t:1)}),!0),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__["init"])(this,["layer.blendMode"],(t=>{this.container&&(this.container.blendMode=t)}),!0),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__["init"])(this,["layer.effect"],(t=>{this.container&&(this.container.effect=t)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(t=this.view)&&t.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(t){let e=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,o=!r;!s&&t<=i&&(s=!0),!o&&t>=r&&(o=!0),e=s&&o}return e}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:c,set(t){const e=Object(_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__["referenceSetter"])(t,this._get("clips"),c);this._set("clips",e)}})],p.prototype,"clips",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"moving",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"attached",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"suspended",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],p.prototype,"updateParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"updateRequested",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"view",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.2d.layers.LayerView2D")],p),p};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseGraphicContainer.js */ "./node_modules/@arcgis/core/views/2d/layers/graphics/BaseGraphicContainer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{renderChildren(r){this.attributeView.bindTextures(r.context),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP&&this._renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT&&this._renderHighlight(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryGraphicsView2D.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryGraphicsView2D.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/rasterProjectionHelper.js */ "./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js");
/* harmony import */ var _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/vectorFieldUtils.js */ "./node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js");
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../support/GraphicsCollection.js */ "./node_modules/@arcgis/core/support/GraphicsCollection.js");
/* harmony import */ var _engine_Container_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../engine/Container.js */ "./node_modules/@arcgis/core/views/2d/engine/Container.js");
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../graphics/GraphicContainer.js */ "./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../graphics/GraphicsView2D.js */ "./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const v=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let _=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(){super(...arguments),this.attached=!1,this.container=new _engine_Container_js__WEBPACK_IMPORTED_MODULE_17__["Container"],this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._previousExtents=[],this._previousSymbolTileResolution=0,this._previousRendererSignature="",this.type="Graphics",this._graphics=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_16__["default"],this._updateGraphics=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["debounce"])((async(e,t)=>{if(!e.stationary)return;const i=e.state,r=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"]({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),[s,o]=e.state.size,n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(r.spatialReference));const p="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,h=await this._projectFullExtentPromise,{extent:c,resolution:l,width:m,height:y}=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_15__["snapImageToSymbolTile"])(r,s,o,p,h),g=await this.layer.fetchImage(c,m,y,n),x=this.layer.renderer;if("vector-field"===x.type){const t=g.pixelData.pixelBlock,i=x.sizeVariables[0];i.minDataValue&&i.maxDataValue||(i.minDataValue=t.statistics[0].minValue,i.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:c,pixelBlock:g.pixelData.pixelBlock};const r=JSON.stringify(this.layer.renderer),s=this._previousRendererSignature===r,o=Math.abs(this._previousSymbolTileResolution-l)/l<.01,n=c.clone().normalize(),p=this._previousExtents.some((e=>n.some((t=>e.intersects(t))))),h=s&&o&&p?this._previousExtents:[],u=await x.getGraphicsFromPixelData(g.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,h);if(h.length){const e=this._graphics.items.filter((e=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(e.geometry)&&h.some((t=>t.intersects(e.geometry)))&&!n.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(u)}else this._graphics.set("items",u);this._graphicsView.update(e),this._previousExtents=n,this._previousRendererSignature=r,this._previousSymbolTileResolution=l}}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(e)||v.error(e)}))}hitTest(e,i){const r=this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["createScreenPoint"])(e,i));return Promise.resolve(new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]({attributes:{},geometry:r,layer:this.layer}))}attach(){this._graphicsView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_19__["default"]({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_18__["default"](this.view.featuresTilingScheme)}),this.attached=!0}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container)}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}async _getProjectedFullExtent(e){try{return await Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_14__["projectExtent"])(this.layer.fullExtent,e)}catch(t){try{const t=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(t):null}catch{return null}}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],_.prototype,"attached",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],_.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],_.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],_.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],_.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],_.prototype,"updateRequested",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],_.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_11__["enumeration"])({graphics:"Graphics"})],_.prototype,"type",void 0),_=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__["subclass"])("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],_);var w=_;/* harmony default export */ __webpack_exports__["default"] = (w);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryView2D.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryView2D.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/pixelUtils.js */ "./node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../engine/BitmapContainer.js */ "./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js");
/* harmony import */ var _engine_Container_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../engine/Container.js */ "./node_modules/@arcgis/core/views/2d/engine/Container.js");
/* harmony import */ var _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../engine/ImageryBitmapSource.js */ "./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../support/ExportStrategy.js */ "./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.imagery.ImageryView2D");let g=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(){super(...arguments),this.attached=!1,this.container=new _engine_Container_js__WEBPACK_IMPORTED_MODULE_13__["Container"],this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(e)||u.error(e)}))}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e,r){const i=this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["createScreenPoint"])(e,r));return Promise.resolve(new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]({attributes:{},geometry:i,layer:this.layer}))}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_12__["BitmapContainer"],this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_15__["default"]({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_11__["mosaicPixelData"])(r,t);return i?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_14__["default"](t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],g.prototype,"attached",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],g.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],g.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],g.prototype,"strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],g.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],g.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],g.prototype,"updateRequested",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],g.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__["enumeration"])({imagery:"Imagery"})],g.prototype,"type",void 0),g=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.layers.imagery.ImageryView2D")],g);var y=g;/* harmony default export */ __webpack_exports__["default"] = (y);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "./node_modules/@arcgis/core/layers/support/TileInfo.js");
/* harmony import */ var _viewStateUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../viewStateUtils.js */ "./node_modules/@arcgis/core/views/2d/viewStateUtils.js");
/* harmony import */ var _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../engine/Bitmap.js */ "./node_modules/@arcgis/core/views/2d/engine/Bitmap.js");
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../tiling/TileInfoView.js */ "./node_modules/@arcgis/core/views/2d/tiling/TileInfoView.js");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "./node_modules/@arcgis/core/views/2d/tiling/TileKey.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__["create"])(),g=[0,0],f=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_15__["default"](0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let y=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=x.hidpi,this.imageMaxWidth=x.imageMaxWidth,this.imageMaxHeight=x.imageMaxHeight,this.imageRotationSupported=x.imageRotationSupported,this.imageNormalizationSupported=x.imageNormalizationSupported,this.update=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["debounce"])((async(t,e)=>{if(!t.stationary||this.destroyed)return null;const i=t.state,o=Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__["getInfo"])(i.spatialReference),r=this.hidpi?t.pixelRatio:1,s=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];s?(g[0]=i.worldScreenWidth,g[1]=i.size[1]):this.imageRotationSupported?(g[0]=i.size[0],g[1]=i.size[1]):Object(_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_12__["getOuterSize"])(g,i);const a=Math.floor(g[0]*r)>this.imageMaxWidth||Math.floor(g[1]*r)>this.imageMaxHeight,n=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),l=!this.imageNormalizationSupported&&n,d=!a&&!l,h=this.imageRotationSupported?i.rotation:0;if(d){const t=s?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,g,t,i.resolution,h,r,e)}else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);l&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,h,r,e)}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=t?t:[];for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove()}));for(const e of t)this.container.addChild(e),e.fadeIn()}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e),e.invalidateTexture(),e.requestRender()}}async _export(t,e,i,o,r,s){const a=await this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:o,pixelRatio:r,signal:s}),p=new _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_13__["Bitmap"](a,"additive");return p.x=t.xmin,p.y=t.ymax,p.resolution=t.width/e,p.rotation=o,p.pixelRatio=r,p}async _singleExport(t,e,i,o,r,a,p){Object(_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_12__["getBBox"])(u,i,o,e);const n=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_8__["default"](u[0],u[1],u[2],u[3],t.spatialReference);return[await this._export(n,e[0],e[1],r,a,p)]}_tiledExport(t,e,i,o,r){const a=_layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"].create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),p=new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_14__["default"](a),m=p.getTileCoverage(t);if(!m)return null;const l=[];return m.forEach(((a,n,m,d)=>{f.set(a,n,m,d),p.getTileBounds(u,f);const h=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_8__["default"](u[0],u[1],u[2],u[3],t.spatialReference);l.push(this._export(h,e,e,i,o,r))})),Promise.all(l)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"_imagePromise",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"bitmaps",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"fetchSource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"hidpi",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"imageMaxWidth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"imageMaxHeight",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"imageRotationSupported",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"imageNormalizationSupported",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"requestUpdate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],y.prototype,"updating",null),y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.layers.support.ExportStrategy")],y);var S=y;/* harmony default export */ __webpack_exports__["default"] = (S);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/viewStateUtils.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/viewStateUtils.js ***!
  \**************************************************************/
/*! exports provided: bboxIntersects, getBBox, getOuterSize, snapToPixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bboxIntersects", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBBox", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterSize", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapToPixel", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=Math.PI/180;function n(n){return n*t}function o(t,n,o){const{resolution:r,size:u}=o;return t[0]=r*(Math.round(n[0]/r)+u[0]%2*.5),t[1]=r*(Math.round(n[1]/r)+u[1]%2*.5),t}function r(t,o){const r=n(o.rotation),u=Math.abs(Math.cos(r)),a=Math.abs(Math.sin(r)),[s,c]=o.size;return t[0]=Math.round(c*a+s*u),t[1]=Math.round(c*u+s*a),t}function u(t,n,o,r){const[u,a]=n,[s,c]=r,i=.5*o;return t[0]=u-i*s,t[1]=a-i*c,t[2]=u+i*s,t[3]=a+i*c,t}function a(t,n){const[o,r,u,a]=t,[s,c,i,e]=n;return!(o>i||u<s||r>e||a<c)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/ImageryLayerView.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/ImageryLayerView.js ***!
  \********************************************************************/
/*! exports provided: default, ImageryLayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageryLayerView", function() { return u; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ "./node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/popupUtils.js */ "./node_modules/@arcgis/core/views/layers/support/popupUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:i}=s,u=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__["getFetchPopupTemplate"])(s,o);if(!i||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(u))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_10__["default"];c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"](l,l,this.view.spatialReference):new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"](.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o)?o.signal:null};return s.queryVisibleRasters(c,d).then((e=>e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],m.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],m.prototype,"suspended",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__["combinedViewLayerTimeExtentProperty"])],m.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],m.prototype,"view",void 0),m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.layers.ImageryLayerView")],m),m};/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/LayerView.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/LayerView.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "./node_modules/@arcgis/core/core/HandleOwner.js");
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Identifiable.js */ "./node_modules/@arcgis/core/core/Identifiable.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Promise.js */ "./node_modules/@arcgis/core/core/Promise.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__["HandleOwnerMixin"])(Object(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_4__["IdentifiableMixin"])(Object(_core_Promise_js__WEBPACK_IMPORTED_MODULE_6__["EsriPromiseMixin"])(_core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"].EventedMixin(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer&&this.layer.title||"no title";throw _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],p.prototype,"fullOpacity",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],p.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],p.prototype,"parent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],p.prototype,"suspended",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],p.prototype,"suspendInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],p.prototype,"legendEnabled",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:Boolean,readOnly:!0})],p.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],p.prototype,"updatingProgress",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],p.prototype,"visible",null),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.layers.LayerView")],p);var d=p;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/support/ClipArea.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/ClipArea.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{};e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.support.ClipArea")],e);var p=e;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/support/ClipRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/ClipRect.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _ClipArea_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClipArea.js */ "./node_modules/@arcgis/core/views/layers/support/ClipArea.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s;let i=s=class extends _ClipArea_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({readOnly:!0})],i.prototype,"version",null),i=s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.support.ClipRect")],i);var p=i;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/support/Geometry.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/Geometry.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/Geometry.js */ "./node_modules/@arcgis/core/geometry/Geometry.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _ClipArea_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ClipArea.js */ "./node_modules/@arcgis/core/views/layers/support/ClipArea.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var y;const n={base:_geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["default"],key:"type",typeMap:{extent:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"],polygon:_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__["default"]}};let c=y=class extends _ClipArea_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({types:n,json:{read:_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["fromJSON"],write:!0}})],c.prototype,"geometry",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],c.prototype,"version",null),c=y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.support.Geometry")],c);var a=c;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/support/Path.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/Path.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _ClipArea_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClipArea.js */ "./node_modules/@arcgis/core/views/layers/support/ClipArea.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t=class extends _ClipArea_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({readOnly:!0})],t.prototype,"version",null),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.support.Path")],t);var p=t;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/support/popupUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/popupUtils.js ***!
  \**********************************************************************/
/*! exports provided: getFetchPopupTemplate, getRequiredFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFetchPopupTemplate", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequiredFields", function() { return t; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function t(t,d=t.popupTemplate){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d))return[];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return["*"];const f=n?await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(t):[],r=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(t.fieldsIndex,[...i,...f]);return a&&r.push(a),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r&&p&&t.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p)})),r}function d(p,l){return p.popupTemplate?p.popupTemplate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)&&l.defaultPopupTemplateEnabled&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}


/***/ })

}]);
//# sourceMappingURL=63.ArcGIS.js.map
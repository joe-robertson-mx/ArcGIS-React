(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./node_modules/@arcgis/core/chunks/LercCodec.js":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/LercCodec.js ***!
  \*******************************************************/
/*! exports provided: d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return m; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e=new Float32Array(1);function t(e){return i(Math.max(-n,Math.min(e,n)))}function i(t){return e[0]=t,e[0]}const n=i(34028234663852886e22);var a={};a.defaultNoDataValue=t(-1/0),a.decode=function(e,i){var n=(i=i||{}).encodedMaskData||null===i.encodedMaskData,f=o(e,i.inputOffset||0,n),m=null!=i.noDataValue?t(i.noDataValue):a.defaultNoDataValue,u=l(f,i.pixelType||Float32Array,i.encodedMaskData,m,i.returnMask),d={width:f.width,height:f.height,pixelData:u.resultPixels,minValue:f.pixels.minValue,maxValue:f.pixels.maxValue,noDataValue:m};return u.resultMask&&(d.maskData=u.resultMask),i.returnEncodedMask&&f.mask&&(d.encodedMaskData=f.mask.bitset?f.mask.bitset:null),i.returnFileInfo&&(d.fileInfo=s(f,m),i.computeUsedBitDepths&&(d.fileInfo.bitDepths=r(f))),d};var l=function(e,t,i,n,a){var l,s,r=0,o=e.pixels.numBlocksX,m=e.pixels.numBlocksY,u=Math.floor(e.width/o),d=Math.floor(e.height/m),c=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&i&&(s=new Uint8Array(e.width*e.height));for(var g,h,k=new Float32Array(u*d),x=0;x<=m;x++){var w=x!==m?d:e.height%m;if(0!==w)for(var p=0;p<=o;p++){var y=p!==o?u:e.width%o;if(0!==y){var V,B,v,U,M=x*e.width*d+p*u,D=e.width-y,b=e.pixels.blocks[r];if(b.encoding<2?(0===b.encoding?V=b.rawData:(f(b.stuffedData,b.bitsPerPixel,b.numValidPixels,b.offset,c,k,e.pixels.maxValue),V=k),B=0):v=2===b.encoding?0:b.offset,i)for(h=0;h<w;h++){for(7&M&&(U=i[M>>3],U<<=7&M),g=0;g<y;g++)7&M||(U=i[M>>3]),128&U?(s&&(s[M]=1),l[M++]=b.encoding<2?V[B++]:v):(s&&(s[M]=0),l[M++]=n),U<<=1;M+=D}else if(b.encoding<2)for(h=0;h<w;h++){for(g=0;g<y;g++)l[M++]=V[B++];M+=D}else for(h=0;h<w;h++)if(l.fill)l.fill(v,M,M+y),M+=y+D;else{for(g=0;g<y;g++)l[M++]=v;M+=D}if(1===b.encoding&&B!==b.numValidPixels)throw"Block and Mask do not match";r++}}}return{resultPixels:l,resultMask:s}},s=function(e,t){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:t}}},r=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},o=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var l=new DataView(e,t,24);if(n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var s=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(l=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var m=l.getUint8(o++);for(r=-r;r--;)s[f++]=m}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else if(0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)){s=new Uint8Array(Math.ceil(n.width*n.height/8));n.mask.bitset=s}l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var u=n.pixels.numBlocksX,d=n.pixels.numBlocksY,c=u+(n.width%u>0?1:0),g=d+(n.height%d>0?1:0);n.pixels.blocks=new Array(c*g);for(var h=1e9,k=0,x=0;x<g;x++)for(var w=0;w<c;w++){var p=0,y=e.byteLength-t;l=new DataView(e,t,Math.min(10,y));var V={};n.pixels.blocks[k++]=V;var B=l.getUint8(0);if(p++,V.encoding=63&B,V.encoding>3)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==B&&2!==B){if(B>>=6,V.offsetType=B,2===B)V.offset=l.getInt8(1),p++;else if(1===B)V.offset=l.getInt16(1,!0),p+=2;else{if(0!==B)throw"Invalid block offset type";V.offset=l.getFloat32(1,!0),p+=4}if(h=Math.min(V.offset,h),1===V.encoding)if(B=l.getUint8(p),p++,V.bitsPerPixel=63&B,B>>=6,V.numValidPixelsType=B,2===B)V.numValidPixels=l.getUint8(p),p++;else if(1===B)V.numValidPixels=l.getUint16(p,!0),p+=2;else{if(0!==B)throw"Invalid valid pixel count type";V.numValidPixels=l.getUint32(p,!0),p+=4}}var v;if(t+=p,3!=V.encoding)if(0===V.encoding){var U=(n.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*U),new Uint8Array(v).set(new Uint8Array(e,t,4*U));for(var M=new Float32Array(v),D=0;D<M.length;D++)h=Math.min(h,M[D]);V.rawData=M,t+=4*U}else if(1===V.encoding){var b=Math.ceil(V.numValidPixels*V.bitsPerPixel/8),I=Math.ceil(b/4);v=new ArrayBuffer(4*I),new Uint8Array(v).set(new Uint8Array(e,t,b)),V.stuffedData=new Uint32Array(v),t+=b}}else t++,h=Math.min(h,0)}return n.pixels.minValue=h,n.eofOffset=t,n},f=function(e,t,i,n,a,l,s){var r,o,f,m=(1<<t)-1,u=0,d=0,c=Math.ceil((s-n)/a),g=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*g,r=0;r<i;r++){if(0===d&&(f=e[u++],d=32),d>=t)o=f>>>d-t&m,d-=t;else{var h=t-d;o=(f&m)<<h&m,o+=(f=e[u++])>>>(d=32-h)}l[r]=o<c?n+o*a:s}return l};const m=a.decode;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/LercWorker.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LercWorker.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_LercCodec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/LercCodec.js */ "./node_modules/@arcgis/core/chunks/LercCodec.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r{_decode(r){const s=Object(_chunks_LercCodec_js__WEBPACK_IMPORTED_MODULE_0__["d"])(r.buffer,r.options);return Promise.resolve({result:s,transferList:[s.pixelData.buffer]})}}function s(){return new r}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ })

}]);
//# sourceMappingURL=115.ArcGIS.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/@arcgis/core/views/2d/engine/FeatureContainer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/FeatureContainer.js ***!
  \***********************************************************************/
/*! exports provided: FeatureContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureContainer", function() { return o; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_Queue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Queue.js */ "./node_modules/@arcgis/core/core/Queue.js");
/* harmony import */ var _webgl_AttributeStoreView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/AttributeStoreView.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/AttributeStoreView.js");
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/TileContainer.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js");
/* harmony import */ var _webgl_WGLRendererInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/WGLRendererInfo.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/WGLRendererInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class o extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(e){super(e),this._rendererInfo=new _webgl_WGLRendererInfo_js__WEBPACK_IMPORTED_MODULE_4__["WGLRendererInfo"],this._materialItemsRequestQueue=new _core_Queue_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.attributeView=new _webgl_AttributeStoreView_js__WEBPACK_IMPORTED_MODULE_2__["AttributeStoreView"]((()=>this.onAttributeStoreUpdate()))}destroy(){this.removeAllChildren(),this.children.forEach((e=>e.destroy())),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()}async getMaterialItems(t,r){if(!t||0===t.length)return null;const s=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createResolver"])();return this._materialItemsRequestQueue.push({items:t,abortOptions:r,resolver:s}),this.requestRender(),s.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e)}createRenderParams(e){return{...super.createRenderParams(e),rendererInfo:this._rendererInfo,attributeView:this.attributeView}}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:r,resolver:s}){const{painter:i,pixelRatio:o}=e,n=t.map((e=>i.textureManager.rasterizeItem(e.symbol,o,e.glyphIds,r)));Promise.all(n).then((e=>{if(!this.stage)return void s.reject();const r=e.map(((e,r)=>({id:t[r].id,mosaicItem:e})));s.resolve(r)}),s.reject)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/webgl/AttributeStoreView.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/AttributeStoreView.js ***!
  \*******************************************************************************/
/*! exports provided: AttributeStoreView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeStoreView", function() { return A; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "./node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "./node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "./node_modules/@arcgis/core/views/webgl/RenderingContext.js");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "./node_modules/@arcgis/core/chunks/builtins.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./definitions.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Utils.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js");
/* harmony import */ var _util_debug_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util/debug.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const z=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),U=Object(_util_debug_js__WEBPACK_IMPORTED_MODULE_14__["createDebugLogger"])(_util_debug_js__WEBPACK_IMPORTED_MODULE_14__["DEBUG_ATTR_UPDATES"],z),D=2147483647,S=t=>t&D;class j{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:a}=t,h=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_13__["getPixelArrayCtor"])(r);this.shared=i,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new h(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(s))),this._resetRange()}destroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(this._texture,(t=>t.dispose()));for(const t in this._fbos)Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose()})),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}setData(t,e,i){const s=S(t),r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(this.data),a=s*this.texelSize+e;!r||a>=r.length||(r[a]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this.data))return null;const i=S(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrapOr"])(this._texture,(()=>this._initTexture(t)))}getFBO(t,e=0){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this._fbos[e])){const i={colorTarget:0,depthStencilTarget:0},s=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](t,i,s)}return this._fbos[e]}get locked(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(e,i){if(!this.locked){try{const i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(this.data).buffer,a=this.getTexture(e),h=4,d=(i-i%this.size)/this.size,o=(s-s%this.size)/this.size,u=d,l=this.size,p=o,x=d*this.size*h,c=(l+p*this.size)*h-x,g=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_13__["getPixelArrayCtor"])(this.pixelType),_=new g(r,x*g.BYTES_PER_ELEMENT,c),f=this.size,b=p-u+1;if(b>this.size)return void z.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,u,f,b,_)}catch(s){}i()}}update(t){const{data:e,start:i,end:s}=t;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const a=1<<i%this.texelSize;t.layout&a&&(s[r+i]=e[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_13__["getPixelArrayCtor"])(this.pixelType);this.destroy(),this.data=new s(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__["default"](t,this._textureDesc,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrapOr"])(this.data,void 0));if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,h=this.getFBO(t),n=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_13__["getPixelBytes"])(r),d=new(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_13__["getPixelArrayCtor"])(r))(new ArrayBuffer(i*s*n*this.texelSize)),o=t.getBoundFramebufferObject(),{x:u,y:l,width:p,height:x}=t.getViewport();t.bindFramebuffer(h),h.readPixels(0,0,i,s,a,r,d),e.updateData(0,0,0,2*i,s/2,d),t.setViewport(u,l,p,x),t.bindFramebuffer(o)}return this.destroy(),this._texture=e,this._texture}}class A{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:i,size:h}=t;if(this.shared=i,this.size=h,U("Initializing AttributeStoreView",t),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this._data))this._data=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["mapMany"])(e,(t=>new j(t,h,i)));else for(let r=0;r<this._data.length;r++){const t=this._data[r],n=e[r];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(n)&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(t)?this._data[r]=new j(n,h,i):t.resize(n,h))}this._initialized=!0}destroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(this._data,(t=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["mapMany"])(t,(t=>t.destroy())))),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(this._defaultTexture,(t=>t.dispose()))}isUpdating(){const t=this._data;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(t))return!0;const i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._pendingAttributeUpdate),r=i;return Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${r}\n  -> hasPendingUpdate ${i}`),r}getBlock(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this._data))return null;return this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,_definitions_js__WEBPACK_IMPORTED_MODULE_12__["ATTRIBUTE_DATA_VV"],0,0)}getData(t,e,i,r){if(!this._data)return 0;const h=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(this._data)[e];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(h))return 0;const d=h.getData(t,i);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(d)?d:r}setData(t,e,i,s){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(this._data)[e];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(r).setData(t,i,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void z.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-webgl","Tried to update attribute data with a pending update"));const i=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["createResolver"])();return U("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:i},i.promise}update(){if(this._initialized&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._pendingAttributeUpdate)){const{data:t,resolver:e}=this._pendingAttributeUpdate,i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(this._data);for(let s=0;s<t.blocks.length;s++){const e=t.blocks[s],r=i[s];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(r,(t=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["andThen"])(e,(e=>{U(`Updating block ${s}`,e),t.update(e)}))))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t){this.update();const e=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_12__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]),t.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_12__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]),t.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_12__["TEXTURE_BINDING_ATTRIBUTE_DATA_2"]),void t.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_12__["TEXTURE_BINDING_ATTRIBUTE_DATA_3"]);const i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(this._data);this._locked&&!this._forceNextUpload||(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["forEachSome"])(i,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["mapOr"])(i[0],e,(e=>e.getTexture(t))),_definitions_js__WEBPACK_IMPORTED_MODULE_12__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]),t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["mapOr"])(i[1],e,(e=>e.getTexture(t))),_definitions_js__WEBPACK_IMPORTED_MODULE_12__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]),t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["mapOr"])(i[2],e,(e=>e.getTexture(t))),_definitions_js__WEBPACK_IMPORTED_MODULE_12__["TEXTURE_BINDING_ATTRIBUTE_DATA_2"]),t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["mapOr"])(i[3],e,(e=>e.getTexture(t))),_definitions_js__WEBPACK_IMPORTED_MODULE_12__["TEXTURE_BINDING_ATTRIBUTE_DATA_3"])}_getDefaultTexture(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this._defaultTexture)){const e={wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1};this._defaultTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__["default"](t,e,new Uint8Array(4))}return this._defaultTexture}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
  \**************************************************************************/
/*! exports provided: default, sortByLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByLevel", function() { return i; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js");
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLContainer.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/WGLContainer.js");
/* harmony import */ var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brushes/WGLBrushInfo.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushInfo.js");
/* harmony import */ var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brushes/WGLBrushStencil.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushStencil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class o extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(i),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:r}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(r.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(r.scale)}}prepareRenderPasses(s){const i=super.prepareRenderPasses(s);return i.push(s.registerRenderPass({name:"stencil",brushes:[_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].DEBUG|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-tiles-debug")&&i.push(s.registerRenderPass({name:"tileInfo",brushes:[_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].DEBUG,target:()=>this.children})),i}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s)}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++}}/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
  \*******************************************************************************/
/*! exports provided: TiledDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledDisplayObject", function() { return r; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "./node_modules/@arcgis/core/chunks/mat3.js");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ "./node_modules/@arcgis/core/chunks/mat3f32.js");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DisplayObject.js */ "./node_modules/@arcgis/core/views/2d/engine/DisplayObject.js");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "./node_modules/@arcgis/core/views/2d/tiling/TileKey.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_3__["DisplayObject"]{constructor(s,t,i,r=i){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),tileMat3:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])()},this.triangleCount=0,this.key=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_4__["default"](s),this.bounds=t,this.size=i,this.coordRange=r}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(s){this._coords=[s[0],s[3]],this._bounds=s}setTransform(o,i){const e=i/(o.resolution*o.pixelRatio),r=this.transforms.tileMat3,[n,h]=o.toScreenNoRotation([0,0],this.coords),a=this.size[0]/this.coordRange[0]*e,d=this.size[1]/this.coordRange[1]*e;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(r,a,0,0,0,d,0,n,h,1),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs,o.displayViewMat3,r)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/webgl/WGLRendererInfo.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLRendererInfo.js ***!
  \****************************************************************************/
/*! exports provided: WGLRendererInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLRendererInfo", function() { return p; });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../renderers/support/lengthUtils.js */ "./node_modules/@arcgis/core/renderers/support/lengthUtils.js");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./definitions.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js");
/* harmony import */ var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/capabilities.js */ "./node_modules/@arcgis/core/views/webgl/capabilities.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function c(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}function h(e,t,i=0){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))return e[i+0]=0,e[i+1]=0,e[i+2]=0,void(e[i+3]=0);const{r:s,g:o,b:l,a:r}=t;e[i+0]=s*r/255,e[i+1]=o*r/255,e[i+2]=l*r/255,e[i+3]=r}class p{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(e){const s=this._vvSizeFieldStops;switch(s.type){case"static":return s;case"level-dependent":return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(s.levels[e],(()=>{let t=1/0,a=0;for(const i in s.levels){const s=parseFloat(i),o=Math.abs(e-s);o<t&&(t=o,a=s)}if(t===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const o=2**((e-a)/2),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(s.levels[a]),r=new Float32Array(l.values);return r[2]*=o,r[3]*=o,{sizes:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(l.sizes),values:r}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,i){switch(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i)&&i.forEach((e=>this._updateEffects(e))),this._vvInfo=t,e.type){case"dot-density":this._updateDotDensityInfo(e)}}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_7__["default"])().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e)&&e.filter&&e.filter.enabled&&(this.outsideLabelsVisible=e.excludedLabelsVisible)}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,a;if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["isDefined"])(e.minSize)&&Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["isDefined"])(e.maxSize))if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(e.minSize)&&Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(e.maxSize))i=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(e.minSize),a=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(e.maxSize);else{const s=t.scale;i=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(c(s,e.minSize.stops)),a=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(c(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,a])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(c(t.scale,s.scaleStops.stops))),s.unitValue){const e=Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(t.spatialReference)/_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__["meterIn"][s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const a=e.color;a&&(i.vvColorEnabled=!0,this.vvColorValues.set(a.values),this.vvColors.set(a.colors));const n=e.opacity;n&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities));const u=e.rotation;u&&(i.vvRotationEnabled=!0,i.vvRotationType=u.type)}_updateDotDensityInfo(t){const i=t.attributes;this.ddDotValue=t.dotValue,this.ddDotScale=t.referenceScale,this.ddDotSize=t.dotSize,this.ddDotBlending=t.dotBlendingEnabled,this.ddSeed=t.seed;for(let s=0;s<_definitions_js__WEBPACK_IMPORTED_MODULE_5__["DOT_DENSITY_MAX_FIELDS"];s++){const t=s>=i.length?new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0,0,0,0]):i[s].color;h(this.ddColors,t,4*s)}for(let e=0;e<8;e++)this.ddActiveDots[e]=e<t.attributes.length?1:0;h(this.ddBackgroundColor,t.backgroundColor)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/webgl/WGLTile.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLTile.js ***!
  \********************************************************************/
/*! exports provided: WGLTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLTile", function() { return r; });
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/* harmony import */ var _TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TiledDisplayObject.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r extends _TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_1__["TiledDisplayObject"]{constructor(o,r){super(o,r,[_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TILE_SIZE"],_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TILE_SIZE"]])}}


/***/ })

}]);
//# sourceMappingURL=15.ArcGIS.js.map
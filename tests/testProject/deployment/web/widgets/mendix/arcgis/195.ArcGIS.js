(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[195],{

/***/ "./node_modules/@arcgis/core/views/2d/layers/SubtypeGroupLayerView2D.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/SubtypeGroupLayerView2D.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "./node_modules/@arcgis/core/core/watchUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeatureLayerView2D.js */ "./node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js");
/* harmony import */ var _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/support/FeatureFilter.js */ "./node_modules/@arcgis/core/views/layers/support/FeatureFilter.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o(e,r){return!e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_8__["default"]{initialize(){this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__["init"])(this.view,"viewpoint",(()=>this._update()))])}_injectOverrides(e){const s=super._injectOverrides(e),t=this.view.scale,i=this.layer.sublayers.filter((e=>o(e,t))).map((e=>e.subtypeCode));if(!i.length)return s;const l=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s))return new _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_9__["default"]({where:l});const n=s.clone();return n.where+=` AND ${l}`,n}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);var n=l;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ })

}]);
//# sourceMappingURL=195.ArcGIS.js.map
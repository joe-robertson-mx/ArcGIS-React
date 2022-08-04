(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[166],{

/***/ "./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
  \**************************************************************************/
/*! exports provided: create, projectGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectGeometry", function() { return n; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/support/ProjectParameters.js */ "./node_modules/@arcgis/core/rest/support/ProjectParameters.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i(o=null,i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl){return new(0,(await __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ../../tasks/GeometryService.js */ "./node_modules/@arcgis/core/tasks/GeometryService.js"))).default)({url:_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl})}if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");let n;if(n="portal"in o?o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault():o,await n.load({signal:i}),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url){return new(0,(await __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ../../tasks/GeometryService.js */ "./node_modules/@arcgis/core/tasks/GeometryService.js"))).default)({url:n.helperServices.geometry.url})}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured")}async function n(e,t,n=null,a){const l=await i(n,a),s=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"];s.geometries=[e],s.outSpatialReference=t;const c=await l.project(s,{signal:a});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-projection-failed")}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/ProjectParameters.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ProjectParameters.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const r=this.geometries.map((function(r){return r.toJSON()})),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__["getJsonType"])(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"geometries",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{read:{source:"outSR"}}})],i.prototype,"outSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"transformation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"transformForward",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.support.ProjectParameters")],i);var a=i;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ })

}]);
//# sourceMappingURL=166.ArcGIS.js.map
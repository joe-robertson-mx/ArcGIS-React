(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/@arcgis/core/core/queryUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/queryUtils.js ***!
  \******************************************************/
/*! exports provided: createQueryParamsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryParamsHelper", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=t=>{if(!Array.isArray(t))return!1;const[e]=t;return"number"==typeof e||"string"==typeof e};class e{constructor(t={}){this._options=t}toQueryParams(e){if(!e)return null;const o=e.toJSON(),n={};return Object.keys(o).forEach((e=>{const r=this._options[e];if(r){const s="boolean"!=typeof r&&r.name?r.name:e,i="boolean"!=typeof r&&r.getter?r.getter(o):o[e];null!=i&&(n[s]=t(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i)}else n[e]=o[e]}),this),n}}function o(t){return new e(t)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/networkService.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/networkService.js ***!
  \**********************************************************/
/*! exports provided: collectGeometries, dropZValuesOffInputGeometry, fetchServiceDescription, handleSolveResponse, isInputGeometryZAware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectGeometries", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropZValuesOffInputGeometry", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchServiceDescription", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSolveResponse", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputGeometryZAware", function() { return d; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _support_NetworkServiceDescription_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support/NetworkServiceDescription.js */ "./node_modules/@arcgis/core/rest/support/NetworkServiceDescription.js");
/* harmony import */ var _support_RouteResultsContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/RouteResultsContainer.js */ "./node_modules/@arcgis/core/rest/support/RouteResultsContainer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u(e,r,t,o){o[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry)}))}function p(e,r){for(let t=0;t<r.length;t++){const o=e[r[t]];if(o&&o.length)for(const e of o)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function f(e){const r=[],t=[],{directions:o=[],routes:{features:s=[],spatialReference:a=null}={},stops:{features:l=[],spatialReference:n=null}={},barriers:u,polygonBarriers:p,polylineBarriers:f,messages:d}=e.data,c="esri.tasks.RouteTask.NULL_ROUTE_NAME";let v,m,h=!0;const T=s&&a||l&&n||u&&u.spatialReference||p&&p.spatialReference||f&&f.spatialReference;o.forEach((e=>{r.push(v=e.routeName),t[v]={directions:e}})),s.forEach((e=>{-1===r.indexOf(v=e.attributes.Name)&&(r.push(v),t[v]={}),e.geometry&&(e.geometry.spatialReference=T),t[v].route=e})),l.forEach((e=>{m=e.attributes,-1===r.indexOf(v=m.RouteName||c)&&(r.push(v),t[v]={}),v!==c&&(h=!1),e.geometry&&(e.geometry.spatialReference=T),null==t[v].stops&&(t[v].stops=[]),t[v].stops.push(e)})),l.length>0&&!0===h&&(t[r[0]].stops=t[c].stops,delete t[c],r.splice(r.indexOf(c),1));const g=r.map((e=>(t[e].routeName=e===c?null:e,t[e])));return _support_RouteResultsContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON({routeResults:g,pointBarriers:u,polygonBarriers:p,polylineBarriers:f,messages:d})}function d(e,r){for(let o=0;o<r.length;o++){const s=e[r[o]];if(s&&s.length)for(const e of s)if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&e.hasZ)return!0}return!1}async function c(t,o,s){if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("network-service:missing-url","Url to Network service is missing");const l=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["asValidOptions"])({f:"json",token:o},s),{data:i}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,l);i.supportedTravelModes||(i.supportedTravelModes=[]);for(let e=0;e<i.supportedTravelModes.length;e++)i.supportedTravelModes[e].id||(i.supportedTravelModes[e].id=i.supportedTravelModes[e].itemId);const u=i.currentVersion>=10.4?m(t,o,s):v(t,s),{defaultTravelMode:p,supportedTravelModes:f}=await u;return i.defaultTravelMode=p,i.supportedTravelModes=f,_support_NetworkServiceDescription_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(i)}async function v(r,t){var n,i;const u=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["asValidOptions"])({f:"json"},t),{data:p}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r.replace(/\/rest\/.*$/i,"/info"),u);if(!p||!p.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:f}=p,d=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["removeTrailingSlash"])(f)+"/sharing/rest/portals/self",{data:c}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d,u),v=Object(_core_object_js__WEBPACK_IMPORTED_MODULE_3__["getDeepValue"])("helperServices.routingUtilities.url",c);if(!v)return{supportedTravelModes:[],defaultTravelMode:null};const m=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["parseUrl"])(f),h=/\/solve$/i.test(m.path)?"Route":/\/solveclosestfacility$/i.test(m.path)?"ClosestFacility":"ServiceAreas",T=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["asValidOptions"])({f:"json",serviceName:h},t),g=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["removeTrailingSlash"])(v)+"/GetTravelModes/execute",M=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(g,T),w=[];let y=null;if(null!=M&&null!=(n=M.data)&&null!=(i=n.results)&&i.length){const e=M.data.results;for(const r of e){var N;if("supportedTravelModes"===r.paramName){if(null!=(N=r.value)&&N.features)for(const{attributes:e}of r.value.features)if(e){const r=JSON.parse(e.TravelMode);w.push(r)}}else"defaultTravelMode"===r.paramName&&(y=r.value)}}return{supportedTravelModes:w,defaultTravelMode:y}}async function m(t,o,l){try{const r=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["asValidOptions"])({f:"json",token:o},l),n=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["removeTrailingSlash"])(t)+"/retrieveTravelModes",{data:{supportedTravelModes:i,defaultTravelMode:u}}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n,r);return{supportedTravelModes:i,defaultTravelMode:u}}catch(n){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:n})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/DirectionsFeatureSet.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/DirectionsFeatureSet.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FeatureSet.js */ "./node_modules/@arcgis/core/rest/support/FeatureSet.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/Polyline.js */ "./node_modules/@arcgis/core/geometry/Polyline.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let u=class extends _FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__["default"]{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,o){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,o.summary.envelope.spatialReference)}));const s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(o.spatialReference);return e.map((e=>{const o=_Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(e),a=e.geometry&&e.geometry.spatialReference;return o.geometry&&!a&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(o.geometry).spatialReference=s),o.strings=e.strings,o.events=(e.events||[]).map((r=>{const o=new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({geometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"]({x:r.point.x,y:r.point.y,z:r.point.z,hasZ:void 0!==r.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:r.ETA,arriveTimeUTC:r.arriveTimeUTC}});return o.strings=r.strings,o})),o}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(e))),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,o=0,s=0,a=0;const p=[];let n,i,m,l,u,c,y,g,h=0,f=0,d=0;if(u=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),u||(u=[]),0===parseInt(u[h],32)){h=2;const e=parseInt(u[h],32);h++,c=parseInt(u[h],32),h++,1&e&&(f=u.indexOf("|")+1,y=parseInt(u[f],32),f++),2&e&&(d=u.indexOf("|",f)+1,g=parseInt(u[d],32),d++)}else c=parseInt(u[h],32),h++;for(;h<u.length&&"|"!==u[h];){n=parseInt(u[h],32)+r,h++,r=n,i=parseInt(u[h],32)+o,h++,o=i;const e=[n/c,i/c];f&&(l=parseInt(u[f],32)+s,f++,s=l,e.push(l/y)),d&&(m=parseInt(u[d],32)+a,d++,a=m,e.push(m/g)),p.push(e)}return{paths:[p],hasZ:f>0,hasM:d>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e)}))}));const o=[];let s=[0,0];return r.forEach((e=>{e[0]===s[0]&&e[1]===s[1]||(o.push(e),s=e)})),new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_13__["default"]({paths:[o]},t)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"],json:{read:{source:"summary.envelope"}}})],u.prototype,"extent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],u.prototype,"features",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("features")],u.prototype,"readFeatures",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],u.prototype,"geometryType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],u.prototype,"mergedGeometry",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],u.prototype,"routeId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],u.prototype,"routeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({value:null,readOnly:!0})],u.prototype,"strings",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:{source:"summary.totalDriveTime"}}})],u.prototype,"totalDriveTime",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:{source:"summary.totalLength"}}})],u.prototype,"totalLength",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:{source:"summary.totalTime"}}})],u.prototype,"totalTime",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.rest.support.DirectionsFeatureSet")],u);var c=u;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/GPMessage.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/GPMessage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(e){super(e),this.description=null,this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],i.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.rest.support.GPMessage")],i);var a=i;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/NAMessage.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/NAMessage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _GPMessage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GPMessage.js */ "./node_modules/@arcgis/core/rest/support/GPMessage.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends _GPMessage_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(r){super(r),this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{read:p.read,write:p.write}})],c.prototype,"type",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.support.NAMessage")],c);var i=c;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/NetworkServiceDescription.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/NetworkServiceDescription.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _TravelMode_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TravelMode.js */ "./node_modules/@arcgis/core/rest/support/TravelMode.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(o){super(o),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"currentVersion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"defaultTravelMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"directionsLanguage",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"directionsSupportedLanguages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"directionsTimeAttribute",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"hasZ",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"impedance",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],p.prototype,"networkDataset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[_TravelMode_js__WEBPACK_IMPORTED_MODULE_7__["default"]]})],p.prototype,"supportedTravelModes",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.rest.support.NetworkServiceDescription")],p);var i=p;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/RouteResult.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/RouteResult.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DirectionsFeatureSet.js */ "./node_modules/@arcgis/core/rest/support/DirectionsFeatureSet.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(o){super(o),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],i.prototype,"directions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{write:!0}})],i.prototype,"route",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],i.prototype,"routeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]],json:{write:!0}})],i.prototype,"stops",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.rest.support.RouteResult")],i);var c=i;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/RouteResultsContainer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/RouteResultsContainer.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FeatureSet.js */ "./node_modules/@arcgis/core/rest/support/FeatureSet.js");
/* harmony import */ var _NAMessage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NAMessage.js */ "./node_modules/@arcgis/core/rest/support/NAMessage.js");
/* harmony import */ var _RouteResult_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RouteResult.js */ "./node_modules/@arcgis/core/rest/support/RouteResult.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(r){return r&&_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromJSON(r).features.map((r=>r))}let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__["JSONSupport"]{constructor(r){super(r),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(r,o){return n(o.barriers||o.pointBarriers)}readPolylineBarriers(r){return n(r)}readPolygonBarriers(r){return n(r)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({aliasOf:"pointBarriers"})],u.prototype,"barriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_NAMessage_js__WEBPACK_IMPORTED_MODULE_10__["default"]]})],u.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]]})],u.prototype,"pointBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("pointBarriers",["barriers","pointBarriers"])],u.prototype,"readPointBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]]})],u.prototype,"polylineBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("polylineBarriers")],u.prototype,"readPolylineBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]]})],u.prototype,"polygonBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("polygonBarriers")],u.prototype,"readPolygonBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[_RouteResult_js__WEBPACK_IMPORTED_MODULE_11__["default"]]})],u.prototype,"routeResults",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.rest.support.RouteResultsContainer")],u);var y=u;/* harmony default export */ __webpack_exports__["default"] = (y);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/TravelMode.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/TravelMode.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _networkEnums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./networkEnums.js */ "./node_modules/@arcgis/core/rest/support/networkEnums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var u;let c=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(t){super(t),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new u(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[Object],json:{write:!0}})],c.prototype,"attributeParameterValues",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"distanceAttributeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"impedanceAttributeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:[String],json:{write:!0}})],c.prototype,"restrictionAttributeNames",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Number,json:{write:!0}})],c.prototype,"simplificationTolerance",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__["enumeration"])(_networkEnums_js__WEBPACK_IMPORTED_MODULE_9__["lengthUnitJsonMap"])],c.prototype,"simplificationToleranceUnits",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],c.prototype,"timeAttributeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__["enumeration"])(_networkEnums_js__WEBPACK_IMPORTED_MODULE_9__["travelModeTypeJsonMap"])],c.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Boolean,json:{write:!0}})],c.prototype,"useHierarchy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__["enumeration"])(_networkEnums_js__WEBPACK_IMPORTED_MODULE_9__["restrictUTurnJsonMap"])],c.prototype,"uturnAtJunctions",void 0),c=u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.rest.support.TravelMode")],c);var m=c;/* harmony default export */ __webpack_exports__["default"] = (m);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/networkEnums.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/networkEnums.js ***!
  \****************************************************************/
/*! exports provided: directionsLengthUnitJsonMap, directionsOutputTypeJsonMap, lengthUnitJsonMap, outputLineJsonMap, outputPolygonJsonMap, restrictUTurnJsonMap, timeOfDayUsageJsonMap, travelDirectionJsonMap, travelModeTypeJsonMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionsLengthUnitJsonMap", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionsOutputTypeJsonMap", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengthUnitJsonMap", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputLineJsonMap", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputPolygonJsonMap", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restrictUTurnJsonMap", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeOfDayUsageJsonMap", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelDirectionJsonMap", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelModeTypeJsonMap", function() { return m; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"}),s=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),r=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),t=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),a=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),n=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),l=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),o=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),m=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["strict"])()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"});


/***/ })

}]);
//# sourceMappingURL=34.ArcGIS.js.map
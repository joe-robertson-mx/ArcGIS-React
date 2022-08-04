(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./node_modules/@arcgis/core/layers/OGCFeatureLayer.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/OGCFeatureLayer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PopupTemplate.js */ "./node_modules/@arcgis/core/PopupTemplate.js");
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderers/ClassBreaksRenderer.js */ "./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderers/DictionaryRenderer.js */ "./node_modules/@arcgis/core/renderers/DictionaryRenderer.js");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderers/DotDensityRenderer.js */ "./node_modules/@arcgis/core/renderers/DotDensityRenderer.js");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderers/HeatmapRenderer.js */ "./node_modules/@arcgis/core/renderers/HeatmapRenderer.js");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderers/Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../renderers/SimpleRenderer.js */ "./node_modules/@arcgis/core/renderers/SimpleRenderer.js");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../renderers/UniqueValueRenderer.js */ "./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../renderers/support/jsonUtils.js */ "./node_modules/@arcgis/core/renderers/support/jsonUtils.js");
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../renderers/support/types.js */ "./node_modules/@arcgis/core/renderers/support/types.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../geometry/support/typeUtils.js */ "./node_modules/@arcgis/core/geometry/support/typeUtils.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _graphics_sources_OGCFeatureSource_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./graphics/sources/OGCFeatureSource.js */ "./node_modules/@arcgis/core/layers/graphics/sources/OGCFeatureSource.js");
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ "./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "./node_modules/@arcgis/core/layers/mixins/BlendLayer.js");
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ "./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js");
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/commonProperties.js */ "./node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/FeatureReduction.js */ "./node_modules/@arcgis/core/layers/support/FeatureReduction.js");
/* harmony import */ var _support_FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./support/FeatureReductionCluster.js */ "./node_modules/@arcgis/core/layers/support/FeatureReductionCluster.js");
/* harmony import */ var _support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/FeatureReductionSelection.js */ "./node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js");
/* harmony import */ var _support_FeatureType_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./support/FeatureType.js */ "./node_modules/@arcgis/core/layers/support/FeatureType.js");
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./support/Field.js */ "./node_modules/@arcgis/core/layers/support/Field.js");
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./support/fieldProperties.js */ "./node_modules/@arcgis/core/layers/support/fieldProperties.js");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./support/LabelClass.js */ "./node_modules/@arcgis/core/layers/support/LabelClass.js");
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/labelingInfo.js */ "./node_modules/@arcgis/core/layers/support/labelingInfo.js");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../support/popupUtils.js */ "./node_modules/@arcgis/core/support/popupUtils.js");
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../symbols/support/ElevationInfo.js */ "./node_modules/@arcgis/core/symbols/support/ElevationInfo.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const G=Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_35__["defineFieldProperties"])();let U=class extends(Object(_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_21__["APIKeyMixin"])(Object(_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_23__["CustomParametersMixin"])(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__["BlendLayer"])(Object(_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_28__["TemporalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_24__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_25__["PortalLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_26__["RefreshableLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_19__["default"])))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new _graphics_sources_OGCFeatureSource_js__WEBPACK_IMPORTED_MODULE_20__["default"]({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_36__["fixRendererFields"])(e,this.fieldsIndex),this._set("renderer",e)}on(e,r){return super.on(e,r)}createPopupTemplate(e){return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_40__["createPopupTemplate"])(this,e)}createQuery(){return new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_39__["default"]}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var t;let o,i=!1;const s=null==r||null==(t=r.feature)?void 0:t.attributes,p=this.typeIdField&&(null==s?void 0:s[this.typeIdField]);return null!=p&&this.types&&(i=this.types.some((r=>{var t,i;return r.id==p&&(o=null==(t=r.domains)?void 0:t[e],"inherited"===(null==(i=o)?void 0:i.type)&&(o=this._getLayerDomain(e)),!0)}))),i||o||(o=this._getLayerDomain(e)),o}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_39__["default"].from(e)||this.createQuery(),r))).then((e=>{var r;return null==e||null==(r=e.features)||r.forEach((e=>{e.layer=e.sourceLayer=this})),e}))}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_36__["fixRendererFields"])(this.renderer,this.fieldsIndex),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_36__["fixTimeInfoFields"])(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({readOnly:!0,json:{origins:{service:{read:!0}}}})],U.prototype,"capabilities",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:String,json:{write:!0}})],U.prototype,"collectionId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:String})],U.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({readOnly:!0})],U.prototype,"defaultPopupTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:String})],U.prototype,"definitionExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({readOnly:!0,type:String,json:{origins:{service:{read:{source:"collection.description"}}}}})],U.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:String})],U.prototype,"displayField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:_symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_41__["default"]})],U.prototype,"elevationInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({types:{key:"type",base:_support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_30__["default"],typeMap:{selection:_support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_32__["default"],cluster:_support_FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_31__["default"]}}})],U.prototype,"featureReduction",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:[_support_Field_js__WEBPACK_IMPORTED_MODULE_34__["default"]],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],U.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])(G.fieldsIndex)],U.prototype,"fieldsIndex",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({readOnly:!0,type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_42__["default"],json:{origins:{service:{read:{source:"layerDefinition.extent"}}}}})],U.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_18__["featureGeometryTypeKebabDictionary"].apiValues,json:{origins:{service:{read:{source:"layerDefinition.geometryType",reader:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_18__["featureGeometryTypeKebabDictionary"].read}}}}})],U.prototype,"geometryType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:Boolean,json:{origins:{service:{read:{source:"layerDefinition.hasZ"}}}}})],U.prototype,"hasZ",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:[_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_37__["default"]],json:{origins:{"web-map":{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:_support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_38__["reader"]},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}}}})],U.prototype,"labelingInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["labelsVisible"])],U.prototype,"labelsVisible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["legendEnabled"])],U.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:String,json:{origins:{service:{read:{source:"layerDefinition.objectIdField"}}}}})],U.prototype,"objectIdField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:["OGCFeatureLayer"]})],U.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["popupEnabled"])],U.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__["default"],json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],U.prototype,"popupTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__["rendererTypes"],json:{origins:{service:{read:{source:"layerDefinition.drawingInfo.renderer"},write:!1}},read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer"}}})],U.prototype,"renderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:Boolean})],U.prototype,"screenSizePerspectiveEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({readOnly:!0})],U.prototype,"source",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({readOnly:!0,type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_43__["default"],json:{origins:{service:{read:!0}}}})],U.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:String,json:{origins:{service:{read:{source:"collection.title"}},"web-map":{write:{ignoreOrigin:!0}}}}})],U.prototype,"title",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:String,readOnly:!0})],U.prototype,"typeIdField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:[_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_33__["default"]]})],U.prototype,"types",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__["property"])({type:String,json:{write:!0}})],U.prototype,"url",void 0),U=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__["subclass"])("esri.layers.OGCFeatureLayer")],U);var B=U;/* harmony default export */ __webpack_exports__["default"] = (B);


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js ***!
  \***********************************************************************************/
/*! exports provided: queryCapabilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryCapabilities", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/OGCFeatureSource.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/OGCFeatureSource.js ***!
  \*******************************************************************************/
/*! exports provided: default, OGCFeatureSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OGCFeatureSource", function() { return v; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Loadable.js */ "./node_modules/@arcgis/core/core/Loadable.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ogc/ogcFeatureUtils.js */ "./node_modules/@arcgis/core/layers/ogc/ogcFeatureUtils.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../geometry/support/typeUtils.js */ "./node_modules/@arcgis/core/geometry/support/typeUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const S="http://www.opengis.net/def/crs/OGC/1.3/CRS84";let v=class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:r},layer:{apiKey:o,capabilities:i,customParameters:p}}=this;return{capabilities:i,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:p},spatialReference:s,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){const s=this.getFeatureDefinition();return this.load(t).then((()=>Object(_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__["queryFeatureSet"])(s,e,t)))}queryFeaturesJSON(e,t={}){const s=this.getFeatureDefinition();return this.load(t).then((()=>Object(_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__["queryFeatureSetJSON"])(s,e,t)))}queryObjectIds(e,t={}){return null}supportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||this.featureDefinition.supportedCrs.some((t=>{const s=Object(_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__["getSpatialReference"])(t);return!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(s)&&Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__["equals"])(s,e)}))}_conformsToType(e,t){var s;const r=new RegExp(`^${t}$`,"i");return null!=(s=e.conformsTo.some((e=>r.test(e))))&&s}_getCapabilities(e,t){var s,r,i,p,n,a,u;const l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(t)?null==(s=t.components)?void 0:s.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(r=null!=(i=null==l||null==(p=l.limit)||null==(n=p.schema)?void 0:n.maximum)?i:null==l||null==(a=l.limitFeatures)||null==(u=a.schema)?void 0:u.maximum)?r:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const s=null==(t=e.extent)?void 0:t.spatial;if(!s)return null;const r=s.bbox[0],o=4===r.length,i=r[0],p=r[1],n=o?void 0:r[2];return{xmin:i,ymin:p,xmax:o?r[2]:r[3],ymax:o?r[3]:r[4],zmin:n,zmax:o?void 0:r[5],spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].WGS84.toJSON()}}_getSpatialReference(e){var t;const s=null!=(t=e.storageCrs)?t:S,o=Object(_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__["getSpatialReference"])(s);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(o)?_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].WGS84:o}_getSupportedSpatialReferences(e,t){var s;const r="#/crs",o=null!=(s=e.crs)?s:[S],i=o.includes(r)?o.filter((e=>e!==r)).concat(t.crs):o,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((e=>!p.test(e)))}async _loadOGCServices(e,s){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(s)?s.signal:null,{apiKey:i,collectionId:p,customParameters:n,fields:a,geometryType:u,hasZ:l,objectIdField:h,timeInfo:S,url:v}=e,R={fields:null==a?void 0:a.map((e=>e.toJSON())),geometryType:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_13__["typeKebabDictionary"].toJSON(u),hasZ:l,objectIdField:h,timeInfo:null==S?void 0:S.toJSON()},x={apiKey:i,customParameters:n,signal:r},C=await Object(_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__["getServerLandingPage"])(v,x),[w,j]=await Promise.all([Object(_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__["getServerConformance"])(C,x),Object(_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__["getServerCollections"])(C,x)]);if(!this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("ogc-feature-layer:no-geojson-support","Server does not support geojson");const O=j.collections.find((e=>e.id===p));if(!O)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const F=this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Object(_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__["getServerOpenApi"])(C,x):null,b=await Object(_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__["getCollectionDefinition"])(O,R,x),D=this._getCapabilities(b.hasZ,F),P=this._getExtent(O),T=this._getSpatialReference(O).toJSON(),_=this._getSupportedSpatialReferences(O,j);b.extent=P,this.featureDefinition={capabilities:D,collection:O,layerDefinition:b,queryParameters:{},spatialReference:T,supportedCrs:_}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],v.prototype,"featureDefinition",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({constructOnly:!0})],v.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],v.prototype,"type",void 0),v=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.layers.graphics.sources.OGCFeatureSource")],v);var R=v;/* harmony default export */ __webpack_exports__["default"] = (R);


/***/ })

}]);
//# sourceMappingURL=109.ArcGIS.js.map
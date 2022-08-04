define(["react","mendix/filters/builders"],(function(e,t){"use strict";var a,l,r=(function(e){
/*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
!function(){var t={}.hasOwnProperty;function a(){for(var e=[],l=0;l<arguments.length;l++){var r=arguments[l];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var u=a.apply(null,r);u&&e.push(u)}else if("object"===n)for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):window.classNames=a}()}(l={path:a,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&l.path)}},l.exports),l.exports);const n=({className:t,bootstrapStyle:a,children:l})=>e.Children.count(l)>0?e.createElement("div",{className:r("alert alert-".concat(a),t)},l):null;n.displayName="Alert";var u;function i(t){const[a,l]=e.useState(t.defaultFilter),[n,u]=e.useState(!1),i=e.useRef(null);var s,o;s=i,o=()=>u(!1),e.useEffect((()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&o()};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[s,o]);const c=e.useCallback((e=>{l(e),t.onChange(e),u(!1)}),[t.onChange]);return e.useEffect((()=>{l(t.defaultFilter),t.onChange(t.defaultFilter)}),[t.defaultFilter,t.onChange]),e.createElement("div",{className:"filter-selector"},e.createElement("div",{className:"filter-selector-content",ref:i},e.createElement("button",{"aria-controls":"".concat(t.name,"-filter-selectors"),"aria-expanded":n,"aria-haspopup":!0,"aria-label":t.ariaLabel,className:r("btn btn-default filter-selector-button button-icon",a),onClick:()=>u((e=>!e))}," "),n&&e.createElement("ul",{id:"".concat(t.name,"-filter-selectors"),className:"filter-selectors",role:"menu","data-focusindex":0},t.options.map(((t,l)=>e.createElement("li",{className:r({"filter-selected":a===t.value}),key:l,onClick:()=>c(t.value),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),c(t.value))},role:"menuitem",tabIndex:0},e.createElement("div",{className:r("filter-icon",t.value),"aria-hidden":!0}),e.createElement("div",{className:"filter-label"},t.label)))))))}function s(t){var a;const[l,n]=e.useState(t.defaultFilter),[u,s]=e.useState(""),[o,c]=e.useState(""),d=e.useRef(null);e.useEffect((()=>{t.value&&(c(t.value),s(t.value))}),[t.value]),e.useEffect((()=>{var e;null===(e=t.updateFilters)||void 0===e||e.call(t,u,l)}),[u,l]);const f=e.useCallback(((e,t)=>{let a=null;return(...l)=>{null!==a&&(clearTimeout(a),a=null),a=setTimeout((()=>e(...l)),t)}})((e=>s(e)),t.delay),[t.delay]),m=e.useCallback((()=>{d.current&&d.current.focus()}),[d]);return e.createElement("div",{className:"filter-container","data-focusindex":null!==(a=t.tabIndex)&&void 0!==a?a:0},t.adjustable&&e.createElement(i,{ariaLabel:t.screenReaderButtonCaption,name:t.name,defaultFilter:t.defaultFilter,onChange:e.useCallback((e=>{n(e),m()}),[m]),options:[{value:"contains",label:"Contains"},{value:"startsWith",label:"Starts with"},{value:"endsWith",label:"Ends with"},{value:"greater",label:"Greater than"},{value:"greaterEqual",label:"Greater than or equal"},{value:"equal",label:"Equal"},{value:"notEqual",label:"Not equal"},{value:"smaller",label:"Smaller than"},{value:"smallerEqual",label:"Smaller than or equal"}]}),e.createElement("input",{"aria-label":t.screenReaderInputCaption,className:r("form-control",{"filter-input":t.adjustable}),onChange:e=>{c(e.target.value),f(e.target.value)},placeholder:t.placeholder,ref:d,type:"text",value:o}))}return function(e){e.Number="number",e.DateTime="datetime"}(u||(u={})),function(a){const l=window["com.mendix.widgets.web.datagrid.filterContext"],r=e.createElement(n,{bootstrapStyle:"danger"},"The data grid text filter widget must be placed inside the header of the Data grid 2.0 widget.");return(null==l?void 0:l.Consumer)?e.createElement(l.Consumer,null,(l=>{var u,i,o,c,d,f;if(!l||!l.filterDispatcher||!l.attribute)return r;const{filterDispatcher:m,attribute:v,initialFilters:b}=l,h=function(e){if(e&&1===e.length){const[t]=e;let a="equal";switch(t.type){case"contains":a="contains";break;case"starts-with":a="startsWith";break;case"ends-with":a="endsWith";break;case">":a="greater";break;case">=":a="greaterEqual";break;case"=":a="equal";break;case"!=":a="notEqual";break;case"<":a="smaller";break;case"<=":a="smallerEqual"}return{type:a,value:String(t.value)}}}(b),p=(E=v.type)&&!E.match(/HashString|String/)?"The attribute type being used for Data grid text filter is not 'Hashed string or String'":null;var E;return p?e.createElement(n,{bootstrapStyle:"danger"},p):e.createElement(s,{adjustable:a.adjustable,defaultFilter:null!==(u=null==h?void 0:h.type)&&void 0!==u?u:a.defaultFilter,delay:a.delay,name:a.name,placeholder:null===(i=a.placeholder)||void 0===i?void 0:i.value,screenReaderButtonCaption:null===(o=a.screenReaderButtonCaption)||void 0===o?void 0:o.value,screenReaderInputCaption:null===(c=a.screenReaderInputCaption)||void 0===c?void 0:c.value,tabIndex:a.tabIndex,updateFilters:(e,a)=>m({getFilterCondition:()=>function(e,a,l){if(!e||!e.filterable||!a)return;return{contains:t.contains,startsWith:t.startsWith,endsWith:t.endsWith,greater:t.greaterThan,greaterEqual:t.greaterThanOrEqual,equal:t.equals,notEqual:t.notEqual,smaller:t.lessThan,smallerEqual:t.lessThanOrEqual}[l](t.attribute(e.id),t.literal(a))}(v,e,a)}),value:null!==(d=null==h?void 0:h.value)&&void 0!==d?d:null===(f=a.defaultValue)||void 0===f?void 0:f.value})})):r}}));
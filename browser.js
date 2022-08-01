// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).forOwn=r()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,r){return null!=t&&i.call(t,r)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c,l=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[f],r=u(t,f);try{t[f]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[f]=e:delete t[f],n}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===l(t)}c=function(){return a(arguments)}();var p=c,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,b=Object.defineProperty,v=Object.prototype,g=v.toString,d=v.__defineGetter__,h=v.__defineSetter__,m=v.__lookupGetter__,j=v.__lookupSetter__;y=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?b:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===g.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(m.call(t,r)||j.call(t,r)?(n=t.__proto__,t.__proto__=v,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&d&&d.call(t,r,e.get),u&&h&&h.call(t,r,e.set),t};var w=y;function _(t,r,e){w(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function O(t){return"string"==typeof t}var S=String.prototype.valueOf;var E=n();function T(t){return"object"==typeof t&&(t instanceof String||(E?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function I(t){return O(t)||T(t)}function P(t){return"number"==typeof t}_(I,"isPrimitive",O),_(I,"isObject",T);var A=Number,N=A.prototype.toString;var k=n();function x(t){return"object"==typeof t&&(t instanceof A||(k?function(t){try{return N.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function B(t){return P(t)||x(t)}function V(t){return t!=t}function F(t){return P(t)&&V(t)}function L(t){return x(t)&&V(t.valueOf())}function C(t){return F(t)||L(t)}_(B,"isPrimitive",P),_(B,"isObject",x),_(C,"isPrimitive",F),_(C,"isObject",L);var G=Number.POSITIVE_INFINITY,X=A.NEGATIVE_INFINITY,Y=Math.floor;function M(t){return Y(t)===t}function H(t){return t<G&&t>X&&M(t)}function R(t){return P(t)&&H(t)}function U(t){return x(t)&&H(t.valueOf())}function W(t){return R(t)||U(t)}_(W,"isPrimitive",R),_(W,"isObject",U);var D=Object.prototype.propertyIsEnumerable;var q=!D.call("beep","0");function z(t,r){var e;return null!=t&&(!(e=D.call(t,r))&&q&&I(t)?!F(r=+r)&&R(r)&&r>=0&&r<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}_(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!J(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,r,e){var n,o;if(!rt(t)&&!O(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!R(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(C(r)){for(;o<n;o++)if(C(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var nt=/./;function ot(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ut=n();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ct(t){return ot(t)||ft(t)}function lt(){return new Function("return this;")()}_(ct,"isPrimitive",ot),_(ct,"isObject",ft);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yt="object"==typeof st?st:null;var bt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(at)return at;if(pt)return pt;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),vt=bt.document&&bt.document.childNodes,gt=Int8Array;function dt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;function mt(t){var r,e,n,o;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ht.exec(n.toString()))return r[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}_(dt,"REGEXP",ht);var jt="function"==typeof nt||"object"==typeof gt||"function"==typeof vt?function(t){return mt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?mt(t).toLowerCase():r};function wt(t){return t.constructor&&t.constructor.prototype===t}var _t=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ot="undefined"==typeof window?void 0:window;var St=function(){var t;if("undefined"===jt(Ot))return!1;for(t in Ot)try{-1===et(_t,t)&&u(Ot,t)&&null!==Ot[t]&&"object"===jt(Ot[t])&&wt(Ot[t])}catch(t){return!0}return!1}(),Et="undefined"!=typeof window;var Tt,It=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Tt=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return K(r)?t(Q.call(r)):t(r)}:t:function(t){var r,e,n,o,i,f,c;if(o=[],K(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Z(t))return o;e=$&&n}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(tt)for(r=function(t){if(!1===Et&&!St)return wt(t);try{return wt(t)}catch(t){return!1}}(t),c=0;c<It.length;c++)f=It[c],r&&"constructor"===f||!u(t,f)||o.push(String(f));return o};var Pt=Tt;function At(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t)throw new TypeError(At("0jr3X",t));if("function"!==jt(r))throw new TypeError(At("0jr2S",r));for(o=(n=Pt(t)).length,u=0;u<o;u++)if(i=n[u],!1===r.call(e,t[i],i,t))return t;return t}}));
//# sourceMappingURL=browser.js.map
// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).forOwn=e()}(this,(function(){"use strict";function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&o.call(r,e)}var c="function"==typeof Symbol?Symbol:void 0,u="function"==typeof c?c.toStringTag:"";var f,l=n()?function(r){var e,t,n;if(null==r)return i.call(r);t=r[u],e=a(r,u);try{r[u]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[u]=t:delete r[u],n}:function(r){return i.call(r)};function s(r){return"[object Arguments]"===l(r)}f=function(){return s(arguments)}();var p=f,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=Object.defineProperty;function h(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function b(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!h(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=b(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=b(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var j=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,O=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,x=/^(\d+)e/,I=/\.0$/,A=/\.0*e/,V=/(\..*[^0])0*e/;function P(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!h(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":j(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_.call(t,V,"$1e"),t=_.call(t,A,"e"),t=_.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_.call(t,O,"e+0$1"),t=_.call(t,T,"e-0$1"),r.alternate&&(t=_.call(t,k,"$1."),t=_.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):S.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var N=String.fromCharCode,C=isNaN,$=Array.isArray;function L(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function B(r){var e,t,n,i,o,a,c,u,f,l,s,p,g;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,C(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!C(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(o)?String(n.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+F(g):F(g)+l)),a+=n.arg||"",c+=1}return a}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=R.exec(r);n;)(e=r.slice(i,R.lastIndex-n[0].length)).length&&t.push(e),t.push(G(n)),i=R.lastIndex,n=R.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function W(r){var e,t;if("string"!=typeof r)throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return B.apply(null,e)}var X,Z=Object.prototype,M=Z.toString,Y=Z.__defineGetter__,H=Z.__defineSetter__,z=Z.__lookupGetter__,D=Z.__lookupSetter__;X=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?d:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(r,e)||D.call(r,e)?(n=r.__proto__,r.__proto__=Z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(r,e,t.get),a&&H&&H.call(r,e,t.set),r};var q=X;function J(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function K(r){return"string"==typeof r}var Q=String.prototype.valueOf;var rr=n();function er(r){return"object"==typeof r&&(r instanceof String||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function tr(r){return K(r)||er(r)}function nr(r){return"number"==typeof r}J(tr,"isPrimitive",K),J(tr,"isObject",er);var ir=Number,or=ir.prototype.toString;var ar=n();function cr(r){return"object"==typeof r&&(r instanceof ir||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function ur(r){return nr(r)||cr(r)}function fr(r){return r!=r}function lr(r){return nr(r)&&fr(r)}function sr(r){return cr(r)&&fr(r.valueOf())}function pr(r){return lr(r)||sr(r)}J(ur,"isPrimitive",nr),J(ur,"isObject",cr),J(pr,"isPrimitive",lr),J(pr,"isObject",sr);var gr=Number.POSITIVE_INFINITY,dr=ir.NEGATIVE_INFINITY,hr=Math.floor;function yr(r){return hr(r)===r}function br(r){return r<gr&&r>dr&&yr(r)}function vr(r){return nr(r)&&br(r)}function wr(r){return cr(r)&&br(r.valueOf())}function mr(r){return vr(r)||wr(r)}J(mr,"isPrimitive",vr),J(mr,"isObject",wr);var jr=Object.prototype.propertyIsEnumerable;var Sr=!jr.call("beep","0");function Er(r,e){var t;return null!=r&&(!(t=jr.call(r,e))&&Sr&&tr(r)?!lr(e=+e)&&vr(e)&&e>=0&&e<r.length:t)}var _r=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};var Or=p?s:function(r){return null!==r&&"object"==typeof r&&!_r(r)&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!Er(r,"callee")},Tr=Array.prototype.slice;function kr(r){return null!==r&&"object"==typeof r}J(kr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(W("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!_r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(kr));var xr=Er((function(){}),"prototype"),Ir=!Er({toString:null},"toString"),Ar=9007199254740991;function Vr(r,e,t){var n,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&yr(o.length)&&o.length>=0&&o.length<=Ar||K(r)))throw new TypeError(W("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!vr(t))throw new TypeError(W("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(pr(e)){for(;i<n;i++)if(pr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Pr=/./;function Fr(r){return"boolean"==typeof r}var Nr=Boolean,Cr=Boolean.prototype.toString;var $r=n();function Lr(r){return"object"==typeof r&&(r instanceof Nr||($r?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===l(r)))}function Br(r){return Fr(r)||Lr(r)}J(Br,"isPrimitive",Fr),J(Br,"isObject",Lr);var Rr="object"==typeof self?self:null,Gr="object"==typeof window?window:null,Ur="object"==typeof global?global:null,Wr="object"==typeof globalThis?globalThis:null;var Xr=function(r){if(arguments.length){if(!Fr(r))throw new TypeError(W("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Wr)return Wr;if(Rr)return Rr;if(Gr)return Gr;if(Ur)return Ur;throw new Error("unexpected error. Unable to resolve global object.")}(),Zr=Xr.document&&Xr.document.childNodes,Mr=Int8Array;function Yr(){return/^\s*function\s*([^(]*)/i}var Hr=/^\s*function\s*([^(]*)/i;function zr(r){var e,t,n,i;if(("Object"===(t=l(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Hr.exec(n.toString()))return e[1]}return kr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}J(Yr,"REGEXP",Hr);var Dr="function"==typeof Pr||"object"==typeof Mr||"function"==typeof Zr?function(r){return zr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?zr(r).toLowerCase():e};function qr(r){return r.constructor&&r.constructor.prototype===r}var Jr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kr="undefined"==typeof window?void 0:window;var Qr=function(){var r;if("undefined"===Dr(Kr))return!1;for(r in Kr)try{-1===Vr(Jr,r)&&a(Kr,r)&&null!==Kr[r]&&"object"===Dr(Kr[r])&&qr(Kr[r])}catch(r){return!0}return!1}(),re="undefined"!=typeof window;var ee,te=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ee=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return Or(e)?r(Tr.call(e)):r(e)}:r:function(r){var e,t,n,i,o,c,u;if(i=[],Or(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!kr(r))return i;t=xr&&n}for(o in r)t&&"prototype"===o||!a(r,o)||i.push(String(o));if(Ir)for(e=function(r){if(!1===re&&!Qr)return qr(r);try{return qr(r)}catch(r){return!1}}(r),u=0;u<te.length;u++)c=te[u],e&&"constructor"===c||!a(r,c)||i.push(String(c));return i};var ne=ee;function ie(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r)throw new TypeError(ie("1U13L",r));if("function"!==Dr(e))throw new TypeError(ie("1U12H",e));for(i=(n=ne(r)).length,a=0;a<i;a++)if(o=n[a],!1===e.call(t,r[o],o,r))return r;return r}}));
//# sourceMappingURL=index.js.map

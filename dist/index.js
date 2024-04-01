"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=c(function(y,l){
var f=require('@stdlib/utils-keys/dist'),m=require('@stdlib/assert-is-function/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function g(r,e,v){var a,i,u,n,t;if(typeof r!="object"||r===null)throw new TypeError(s('1U13L',r));if(!m(e))throw new TypeError(s('1U12H',e));for(a=f(r),u=a.length,t=0;t<u;t++)if(n=a[t],i=e.call(v,r[n],n,r),i===!1)return r;return r}l.exports=g
});var p=o();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

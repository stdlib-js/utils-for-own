// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,o,i){var n,d,l,m;if("object"!=typeof s||null===s)throw new TypeError(e("1U13L",s));if(!r(o))throw new TypeError(e("1U12H",o));for(d=(n=t(s)).length,m=0;m<d;m++)if(l=n[m],!1===o.call(i,s[l],l,s))return s;return s}export{s as default};
//# sourceMappingURL=index.mjs.map

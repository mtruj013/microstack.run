!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([,function(e,t){var r=document.querySelectorAll(".js-download"),n="";function o(e){var t=e.dataset.os,r=e.querySelector(".js-version"),o=function(e){for(var t=n,r=0;r<t.length;r++)for(var o=t[r],u=o.assets,a=0;a<u.length;a++){var l=u[a];if(l.name.includes(e)&&!o.prerelease)return!(!l.browser_download_url||!o.tag_name)&&{url:l.browser_download_url,name:o.tag_name}}}(t);o&&e.setAttribute("href",o.url),r&&(r.innerText=o.name)}fetch("https://api.github.com/repos/CanonicalLtd/multipass/releases").then((function(e){return e.json()})).then((function(e){n=e,function(){for(var e=0;e<r.length;e++)o(r[e])}()}))}]);
//# sourceMappingURL=installVersion.js.map
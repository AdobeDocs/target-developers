!function(){"use strict";var e,n,d,t,s,c={},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var d=i[e]={id:e,loaded:!1,exports:{}};return c[e].call(d.exports,d,d.exports,o),d.loaded=!0,d.exports}o.m=c,e=[],o.O=function(n,d,t,s){if(!d){var c=1/0;for(r=0;r<e.length;r++){d=e[r][0],t=e[r][1],s=e[r][2];for(var i=!0,a=0;a<d.length;a++)(!1&s||c>=s)&&Object.keys(o.O).every((function(e){return o.O[e](d[a])}))?d.splice(a--,1):(i=!1,s<c&&(c=s));i&&(e.splice(r--,1),n=t())}return n}s=s||0;for(var r=e.length;r>0&&e[r-1][2]>s;r--)e[r]=e[r-1];e[r]=[d,t,s]},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},o.d=function(e,n){for(var d in n)o.o(n,d)&&!o.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:n[d]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,d){return o.f[d](e,n),n}),[]))},o.u=function(e){return({162:"component---src-pages-sdk-guides-on-device-decisioning-supported-features-audience-targeting-md",305:"5e65052d",461:"e82996df",489:"component---src-pages-api-profile-api-index-md",532:"styles",533:"component---src-pages-sdk-guides-integration-with-experience-cloud-aam-segments-md",548:"component---src-pages-sdk-guides-on-device-decisioning-troubleshooting-md",1010:"component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-downloading-storing-and-updating-md",1033:"component---src-pages-sdk-net-index-md",1083:"component---src-pages-sdk-guides-getting-started-index-md",1142:"component---src-pages-sdk-guides-core-principles-user-permissions-and-properties-md",1150:"component---src-pages-sdk-guides-core-principles-user-identification-and-bucketing-md",1206:"2dee68d8",1249:"component---src-pages-api-guides-recs-api-index-md",1408:"component---src-pages-sdk-guides-integration-with-experience-cloud-analytics-for-target-reporting-md",1720:"component---src-pages-support-faq-index-md",1817:"component---src-pages-sdk-guides-sample-apps-index-md",2099:"component---src-pages-sdk-guides-troubleshooting-index-md",2274:"component---src-pages-sdk-java-send-notifications-md",2544:"component---src-pages-sdk-guides-integration-with-experience-cloud-experience-cloud-id-service-md",2591:"component---src-pages-sdk-guides-integration-with-experience-cloud-index-md",3035:"0abf01d3",3125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",3185:"component---src-pages-support-index-md",3208:"component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-index-md",3490:"b6f3ea4c",3587:"component---src-pages-api-guides-recs-api-fetch-recs-server-side-delivery-api-md",3751:"component---src-pages-support-contribute-index-md",3810:"component---src-pages-sdk-guides-supported-features-supported-features-overview-md",3894:"component---src-pages-sdk-java-get-attributes-md",4082:"component---src-pages-sdk-guides-on-device-decisioning-execute-ab-tests-with-feature-flags-md",4096:"component---src-pages-sdk-guides-core-principles-audience-targeting-on-device-decisioning-md",4198:"component---src-pages-sdk-guides-core-principles-event-tracking-md",4302:"component---src-pages-sdk-python-index-md",4387:"component---src-pages-sdk-guides-on-device-decisioning-index-md",4388:"component---src-pages-sdk-guides-on-device-decisioning-deliver-personalization-md",4473:"component---src-pages-sdk-guides-getting-started-net-md",4486:"component---src-pages-api-admin-api-index-md",4639:"component---src-pages-sdk-guides-index-md",4841:"component---src-pages-sdk-guides-core-principles-audience-targeting-audience-targeting-overview-md",5088:"component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-example-rule-artifact-md",5171:"component---src-pages-api-guides-recs-api-manage-catalog-md",5283:"component---src-pages-sdk-guides-on-device-decisioning-supported-features-md",5476:"component---src-pages-sdk-guides-core-principles-audience-targeting-server-side-decisioning-md",5932:"component---src-pages-api-guides-migrating-index-md",6146:"9f96d65d",6365:"component---src-pages-sdk-java-install-sdk-md",6530:"f5cc1685",6750:"component---src-pages-sdk-guides-on-device-decisioning-execute-feature-tests-with-attributes-md",6834:"component---src-pages-api-guides-index-md",7059:"component---src-pages-sdk-java-initialize-sdk-md",7451:"component---src-pages-sdk-node-js-index-md",7579:"component---src-pages-sdk-guides-getting-started-java-md",7693:"component---src-pages-sdk-guides-getting-started-python-md",7705:"component---src-pages-sdk-guides-supported-features-allocation-method-md",7714:"8b61fb39",7728:"component---src-pages-sdk-java-get-offers-md",7745:"component---src-pages-sdk-guides-on-device-decisioning-manage-rollouts-for-feature-tests-md",8035:"component---src-pages-index-md",8632:"component---src-pages-sdk-guides-on-device-decisioning-supported-features-activity-types-md",8673:"component---src-pages-api-guides-recs-api-manage-custom-criteria-md",8824:"component---src-pages-api-index-md",9002:"component---src-pages-support-community-index-md",9054:"component---src-pages-sdk-guides-supported-features-audience-targeting-md",9150:"component---src-pages-sdk-guides-on-device-decisioning-rule-artifact-downloading-storing-updating-json-md",9198:"component---src-pages-api-guides-configure-authentication-md",9278:"component---src-pages-api-delivery-api-index-md",9335:"component---src-pages-sdk-guides-getting-started-node-js-md",9340:"component---src-pages-sdk-guides-supported-features-activity-types-md",9351:"commons",9548:"component---src-pages-sdk-guides-best-practices-index-md",9595:"component---src-pages-sdk-java-index-md",9598:"component---src-pages-sdk-guides-on-device-decisioning-supported-features-allocation-method-md",9791:"component---src-pages-sdk-guides-core-principles-index-md"}[e]||e)+"-"+{162:"4f457f6207889aac2b9a",305:"27722c13d02374efae78",461:"1ff4fae5c653dfaa3c0d",489:"ebd879300f719d0794da",532:"8ebd799b1143c6f67bdb",533:"6844ed175bf41335fb42",548:"8aac68c32ac50ee237e1",1010:"7e9ba869dd4dd5afc5ec",1033:"dc116dbeafc3ddd719ae",1083:"a9ba796095515bcf544f",1142:"d4a914ffbda3c5bff3fa",1150:"d0f2ca810c958b0e2e59",1206:"1dd5d0a3a3a7b2cb5603",1249:"2afeeaa39c0082f5afd5",1408:"44b6c2eba23e5111f51d",1720:"f66dd88b199a30103d34",1776:"48f1549ff186b50a6584",1817:"d8ea4589c7a90e1e4fad",2099:"7d0e9fe6a321e286f8ff",2274:"543c3aaa88a7a662d08e",2544:"da3bb079e2e43a70b1c8",2591:"6b4838b91bb57dc41d86",3035:"3297a5cd8394d2642a6d",3102:"29dce23af9bf0547bbdd",3125:"e6c3d379cf3e3edb78d1",3185:"379ea86b024d9054239c",3208:"260c4a675c282316d5c5",3490:"6fc826b250d03922c0fc",3587:"4542722cd02f332a1877",3751:"e751ba033634e815da06",3810:"47d3edabf68c8f43df67",3894:"3a2d41c2c4e6a8392ab8",4082:"d9d93e29b181bac53308",4096:"0bda4020de417266b23f",4198:"d55dfc5246209ba5e755",4302:"439f9fe3dad96f47e0df",4387:"049eb29420c4cc0c795b",4388:"06306ed5c0cac0baec6c",4473:"068fd0a6e6f881a085ec",4486:"6beb47feaa83517df0d4",4639:"e26215fd1efc41ad38c8",4841:"9f385ba9fe8c32fb69b2",5088:"e70dd8fc5b1b1ee371e2",5171:"3f02bf89ceffbe0b7a44",5283:"0da51769a80eceb1cb7f",5476:"4d7960a2b27ce15e2bb1",5586:"85a31a87f38366e20cec",5932:"6aee73df712c735f1e24",6146:"4b8c3ec530228eed66cd",6365:"c86ae2d8348314f85819",6530:"c5b6eb8c497095a745da",6750:"b0b80e17061ddc8757c7",6834:"0b20015c09994628760e",7059:"4ea04b5c39e45d3d9b64",7451:"c81da82f16c0e1142830",7579:"0a1291d263946a130c40",7693:"46bd2cb9f07441b9172a",7705:"0a32a8ce6b1fe0ff67df",7714:"00c52198b1b4bde69610",7728:"e644b051ce9dd5a7ded1",7745:"d9a86721613a6f690acc",8035:"e740c8d884861de0dc4e",8632:"79d2cf7d5299c060207e",8673:"4b382f88dfa445cfbed5",8824:"872c49db8811269bddd7",9002:"e29f627ce621bdfa38d4",9054:"d375e533e2bc3ab67257",9150:"46101382bf2331d9b406",9198:"1fc1349b3f6b5349f5b1",9278:"b6bcd91cb03fccb3087d",9335:"b4d641b3a424ac96b660",9340:"3d6836ef2630123ae85c",9351:"8e28e6ecb17c6e5b8060",9548:"3d7b38eeb1652222b256",9595:"365db1f2dea7c3752e45",9598:"a18eb7b43fcb87feb368",9791:"920d6212e9ad34acc437"}[e]+".js"},o.miniCssF=function(e){return"styles.53d22cf95f29e4134944.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},d="dev-site-documentation-template:",o.l=function(e,t,s,c){if(n[e])n[e].push(t);else{var i,a;if(void 0!==s)for(var r=document.getElementsByTagName("script"),p=0;p<r.length;p++){var f=r[p];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==d+s){i=f;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",d+s),i.src=e),n[e]=[t];var u=function(d,t){i.onerror=i.onload=null,clearTimeout(g);var s=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(t)})),d)return d(t)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),a&&document.head.appendChild(i)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.p="/target-developers/",t=function(e){return new Promise((function(n,d){var t=o.miniCssF(e),s=o.p+t;if(function(e,n){for(var d=document.getElementsByTagName("link"),t=0;t<d.length;t++){var s=(i=d[t]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===e||s===n))return i}var c=document.getElementsByTagName("style");for(t=0;t<c.length;t++){var i;if((s=(i=c[t]).getAttribute("data-href"))===e||s===n)return i}}(t,s))return n();!function(e,n,d,t){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onerror=s.onload=function(c){if(s.onerror=s.onload=null,"load"===c.type)d();else{var i=c&&("load"===c.type?"missing":c.type),o=c&&c.target&&c.target.href||n,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=i,a.request=o,s.parentNode.removeChild(s),t(a)}},s.href=n,document.head.appendChild(s)}(e,s,n,d)}))},s={6658:0},o.f.miniCss=function(e,n){s[e]?n.push(s[e]):0!==s[e]&&{532:1}[e]&&n.push(s[e]=t(e).then((function(){s[e]=0}),(function(n){throw delete s[e],n})))},function(){var e={6658:0,532:0};o.f.j=function(n,d){var t=o.o(e,n)?e[n]:void 0;if(0!==t)if(t)d.push(t[2]);else if(/^(532|6658)$/.test(n))e[n]=0;else{var s=new Promise((function(d,s){t=e[n]=[d,s]}));d.push(t[2]=s);var c=o.p+o.u(n),i=new Error;o.l(c,(function(d){if(o.o(e,n)&&(0!==(t=e[n])&&(e[n]=void 0),t)){var s=d&&("load"===d.type?"missing":d.type),c=d&&d.target&&d.target.src;i.message="Loading chunk "+n+" failed.\n("+s+": "+c+")",i.name="ChunkLoadError",i.type=s,i.request=c,t[1](i)}}),"chunk-"+n,n)}},o.O.j=function(n){return 0===e[n]};var n=function(n,d){var t,s,c=d[0],i=d[1],a=d[2],r=0;for(t in i)o.o(i,t)&&(o.m[t]=i[t]);if(a)var p=a(o);for(n&&n(d);r<c.length;r++)s=c[r],o.o(e,s)&&e[s]&&e[s][0](),e[c[r]]=0;return o.O(p)},d=self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[];d.forEach(n.bind(null,0)),d.push=n.bind(null,d.push.bind(d))}()}();
//# sourceMappingURL=webpack-runtime-a09d2504a6c620d6ae76.js.map
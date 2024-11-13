(()=>{var e={8118:e=>{e.exports={}},8185:e=>{e.exports={LOCALEID:"__KOOT_LOCALEID__",STORE:"__KOOT_STORE__",HISTORY:"__KOOT_HISTORY__",CACHE:"__KOOT_CACHE__",REDUXSTATE:"__REDUX_STATE__",SSRSTATE:"__KOOT_SSR_STATE__",SPALOCALEFILEMAP:"__KOOT_SPA_LOCALE_FILE_MAP__",CLIENT_MOUNT:"__KOOT_CLIENT_MOUNT__",CLIENT_UNMOUNT:"__KOOT_CLIENT_UNMOUNT__",DEV_NATIVE_CONSOLE:"__KOOT_DEV_NATIVE_CONSOLE__"}},7722:(e,t,o)=>{const{LOCALEID:n,STORE:r,HISTORY:i}=o(8185),{ssrContext:c,koaContext:s}=o(8118);let a,d;const l=()=>window[n]||"";let _=l();const u=e=>{_=e||l()},p=()=>window[r];let T=p();const O=()=>window[i];let S=O();e.exports={set:function(e){},get:function(){return{}},getKoaCtx:function(){return{}},localeId:_,getLocaleId:l,resetLocaleId:u,store:T,getStore:p,resetStore:e=>{T=e||p()},history:S,getHistory:O,resetHistory:e=>{S=e||O()},reset:function(){u(!1),a=void 0,d=void 0}}},8078:e=>{e.exports={title:"Koot.js Tech Demo",intro:["React full-stack development framework","Also for SPA"],navs:{home:"Koot.js",docs:"Docs",github:"Github"},pages:{home:{title:"Welcome",description:"Koot.js Tech Demo boilerplate/template project.",start:"Quick Start"},start:{title:"Quick Start",titles:{checkout:"Check file",learn:"Learn",learnMore:"Learn More..."},description:"Quick start guide for developing Koot.js project.",linkToDoc:"Read API doc",listBasic:[{checkout:"/src/index.ejs",content:"The template file for rendering. You can modify or add HTML and/or EJS code here.",doc:"/template"},{checkout:"/src/routes/index.js",content:"The config file for react-router. The root component for React can also be found here.",doc:"/config?id=routes"},{learn:"HOC: extend",content:"Enabling data-isomorphic, page infomation modification (<title>, <meta>, etc...), CSS processing, and more for React component",doc:"/react?id=%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6-extend"}],listAdvanced:[{title:"Configuration",content:"Koot.js has tons of config options. Here're some useful ones:",list:["Set bundle target directory","Template injection","I18n / Localization","Define constants that can be used in any file","and more..."],doc:"/config"},{title:"Create Redux store",content:"Koot.js uses Redux for its store management. This boilerplate comes with a basic Store created. Read document below to learn more.",doc:"/config?id=store"},{title:"Deploy on server",content:"After a successful build, you can simply deploy the whole /server folder onto your server, and run index.js using Node.js to start SSR server. For more information, you can check API document.",doc:"/deploy"}],bonus:"Bonus",bonusComponentInTS:"Write in TypeScript",bonusUpdateAppType:"Update Random Value in Store (Current: ${current})"},ts:{title:"TypeScript",description:"A React Component that written in TypeScript",msg:"React Component written in TypeScript!",msgCheckFile:"You can check and modify the file `/src/views/ts-example/index.tsx`.",back:"Back to Quick Start"}}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o(8078),t=o.n(e);const{SSRSTATE:n}=o(8185),{get:r}=o(7722);let i="object"==typeof window[n]&&window[n].locales||{};window.__KOOT_SSR_STATE__={localeId:"en",locales:t()},((e={})=>{i?Object.assign(i,e):i=e})(t())})()})();
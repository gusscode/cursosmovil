(function(e){function t(t){for(var o,r,l=t[0],c=t[1],u=t[2],s=0,d=[];s<l.length;s++)r=l[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={3:0},a={3:0},i=[];function l(e){return c.p+"js/"+({}[e]||e)+"."+{1:"21d7d375",2:"ffd8bc5a",4:"d6005d59",5:"a91ff481",6:"fae36870",7:"2444fac4"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,4:1,5:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{1:"31d6cfe0",2:"d886ff39",4:"c59b8d3e",5:"2307e8ac",6:"31d6cfe0",7:"31d6cfe0"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],s=u.getAttribute("data-href");if(s===o||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=l(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var o=n("ed82"),r=n.n(o);r.a},"2f39":function(e,t,n){"use strict";n.r(t);n("5319");var o=n("c973"),r=n.n(o),a=(n("7d6e"),n("e54f"),n("0ca9"),n("5b0d"),n("2b0e")),i=n("1f91"),l=n("42d2"),c=n("b05d"),u=n("2a19");a["a"].use(c["a"],{config:{},lang:i["a"],iconSet:l["a"],plugins:{Notify:u["a"]}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],p=n("ded3"),f=n.n(p),h=n("2f62"),m={name:"App",methods:f()({},Object(h["b"])("auth",["handleAuthStateChange"])),mounted(){this.handleAuthStateChange()}},g=m,b=(n("034f"),n("2877")),v=Object(b["a"])(g,s,d,!1,null,null,null),y=v.exports,w=n("fc1b");const P={loggedIn:!1,Api:"http://localhost:4000"},S={setLoggedIn(e,t){e.loggedIn=t}},j={loginUser({commit:e},t){w["c"].signInWithEmailAndPassword(t.email,t.password).then(e=>{console.log("response",e)}).catch(e=>{console.log(e)})},logoutUser(){w["c"].signOut()},handleAuthStateChange({commit:e,dispatch:t}){w["c"].onAuthStateChanged(t=>{t?(e("setLoggedIn",!0),localStorage.setItem("loggedIn",!0)):(e("setLoggedIn",!1),localStorage.getItem("loggedIn",!1))})}},A={};var I={namespaced:!0,state:P,mutations:S,actions:j,getters:A};a["a"].use(h["a"]);var O=function(){const e=new h["a"].Store({modules:{auth:I},strict:!1});return e},C=n("8c4f");n("e6cf");const E=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}]},{path:"/fichas",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"/fichas",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"b054"))}]},{path:"/login",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))},{path:"/auth",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"c6f7"))}]},{path:"/crearfichampz",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"6631"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"e51e"))}];var _=E;n("8aa5");a["a"].use(C["a"]);const x=new C["a"]({scrollBehavior:()=>({x:0,y:0}),routes:_,mode:"hash",base:""});var L=x,k=function(){return B.apply(this,arguments)};function B(){return B=r()((function*(){const e="function"===typeof O?yield O({Vue:a["a"]}):O,t="function"===typeof L?yield L({Vue:a["a"],store:e}):L;e.$router=t;const n={router:t,store:e,render:e=>e(y),el:"#q-app"};return{app:n,store:e,router:t}})),B.apply(this,arguments)}var T=n("bc3a"),N=n.n(T);a["a"].prototype.$axios=N.a;var q=({router:e})=>{e.beforeEach((e,t,n)=>{w["c"].onAuthStateChanged(t=>{t||"/auth"===e.path?n():(console.log("esto es del router-auth"),n("/auth")),t||"/fichas"!=e.path||(console.log("estas queriendo entrar a un sitio público"),n())})})};const U="";function V(){return z.apply(this,arguments)}function z(){return z=r()((function*(){const{app:e,store:t,router:n}=yield k();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),l=[void 0,w["default"],q];for(let u=0;!1===o&&u<l.length;u++)if("function"===typeof l[u])try{yield l[u]({app:e,router:n,store:t,Vue:a["a"],ssrContext:null,redirect:r,urlPath:i,publicPath:U})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new a["a"](e)})),z.apply(this,arguments)}V()},"5b0d":function(e,t,n){},ed82:function(e,t,n){},fc1b:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l}));var o=n("59ca");n("e71f"),n("ea7b");const r={apiKey:"AIzaSyA23pzpXV9CJWU3kwt_cLEhIBa-d0Djjwc",authDomain:"cursos-movil.firebaseapp.com",databaseURL:"https://cursos-movil.firebaseio.com",projectId:"cursos-movil",storageBucket:"cursos-movil.appspot.com",messagingSenderId:"989198453504",appId:"1:989198453504:web:447cee9a468d107f0501e5",measurementId:"G-GK17QVQZB2"};let a=o["initializeApp"](r),i=a.auth(),l=o["firestore"]()}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2908:function(t,e,a){"use strict";var n=a("3f84"),o=a.n(n);o.a},"3f84":function(t,e,a){},"77be":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Hola desde tu cuenta")]),a("a",{on:{click:t.logout}},[t._v("Logout")]),a("v-btn",{attrs:{color:"primary"}},[t._v("jajaja")])],1)},o=[],r=(a("ac1f"),a("5319"),a("8aa5")),s=a.n(r),u={data:function(){return{}},methods:{logout:function(){var t=this;s.a.auth().signOut().then((function(){return t.$router.replace("login")}))}}},i=u,l=(a("2908"),a("2877")),c=a("6544"),p=a.n(c),d=a("8336"),m=Object(l["a"])(i,n,o,!1,null,"65578a05",null);e["default"]=m.exports;p()(m,{VBtn:d["a"]})},a55b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("Login")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"contraseña"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("button",{attrs:{type:"submit",value:"acceder"}},[t._v("Submit")])]),a("p",[t._v(t._s(t.mensaje))])])},o=[],r=(a("ac1f"),a("5319"),a("8aa5")),s=a.n(r),u={data:function(){return{email:"",password:"",mensaje:""}},methods:{login:function(){var t=this;s.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){return t.$router.replace("account")}),(function(e){return t.mensaje=e}))}}},i=u,l=a("2877"),c=Object(l["a"])(i,n,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=about.49ab34cd.js.map
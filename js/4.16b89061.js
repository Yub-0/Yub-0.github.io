(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{fd54:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh lpr lFf"}},[a("q-page-container",{staticClass:"bg-image"},[a("q-page",{staticClass:"flex flex-center",attrs:{id:"overlay"}},[a("div",{staticClass:"row"},[a("q-card",{staticClass:"my-card logincard-bg",staticStyle:{width:"400px"},attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"q-pa-xl "},[a("h5",{staticClass:"text-center q-mb-lg text-white"},[e._v("Restaurant Management System")]),a("q-form",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}}},[a("ValidationObserver",{ref:"loginForm"},[a("validation-provider",{attrs:{name:"Username or Email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("q-input",{staticClass:"q-mb-sm input-background",attrs:{dense:"",filled:"",standout:"white",label:"Username or Email"},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"mail"}})]},proxy:!0}],null,!0),model:{value:e.credentials.email,callback:function(t){e.$set(e.credentials,"email",t)},expression:"credentials.email"}}),a("p",[a("span",{staticClass:"text-orange-3 q-pb-sm"},[e._v(e._s(s[0]))])])]}}])}),a("validation-provider",{attrs:{name:"Password",rules:"required|min:1"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("q-input",{staticClass:"q-mb-sm input-background",attrs:{dense:"",type:"password",filled:"",label:"Password",type:e.isPwd?"password":"text"},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!0),model:{value:e.credentials.password,callback:function(t){e.$set(e.credentials,"password",t)},expression:"credentials.password"}}),a("p",[a("span",{staticClass:"text-orange-3"},[e._v(e._s(s[0]))])])]}}])})],1),a("q-btn",{attrs:{"text-color":"black",size:".8rem",push:"",label:"Login",type:"button",color:"orange-3"},on:{click:function(t){return e.login()}}})],1)],1)],1)],1)])],1)],1)},r=[],n=a("ded3"),i=a.n(n),o=a("d1dd"),l=a("7bb1"),d=a("4c93"),c=a("4360");Object(l["d"])("eager"),Object(l["c"])("required",i()(i()({},d["h"]),{},{message:"{_field_} is required"})),Object(l["c"])("email",i()(i()({},d["d"]),{},{message:"{_field_} must be a valid email"})),Object(l["c"])("min",i()(i()({},d["f"]),{},{message:"{_field_} may not be greater than {length} characters"}));var u={components:{ValidationProvider:l["b"],ValidationObserver:l["a"]},data(){return{slide:1,autoplay:!0,loading:!1,credentials:{email:"",password:""},saveEmail:!1,isPwd:!0}},created(){this.checkLogin()},methods:{checkLogin(){const e=c["a"].state.user.auth.access;e&&this.$router.push({name:"Dashboard"})},isRequired(e){return!!e||"This field is required"},login(){this.$refs.loginForm.validate().then((e=>{e&&o["a"].attempt(this.credentials).then((e=>{e&&(c["a"].dispatch("user/storeuser",e),1===c["a"].state.user.user.role?this.$router.push({name:"Dashboard"}):2===c["a"].state.user.user.role&&this.$router.push({name:"Order"}))})).catch((e=>{402!==e.response.status?(this.$q.loading.hide(),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Email or Password Wrong"})):this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:e.response.data.message})}))}))}}},p=u,m=a("2877"),f=a("4d5a"),g=a("09e3"),h=a("9989"),b=a("f09f"),w=a("a370"),y=a("068f"),q=a("0378"),v=a("27f9"),k=a("0016"),_=a("9c40"),x=a("eebe"),C=a.n(x),P=Object(m["a"])(p,s,r,!1,null,null,null);t["default"]=P.exports;C()(P,"components",{QLayout:f["a"],QPageContainer:g["a"],QPage:h["a"],QCard:b["a"],QCardSection:w["a"],QImg:y["a"],QForm:q["a"],QInput:v["a"],QIcon:k["a"],QBtn:_["a"]})}}]);
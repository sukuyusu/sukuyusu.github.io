(function(t){function e(e){for(var r,n,i=e[0],u=e[1],o=e[2],p=0,v=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&v.push(l[n][0]),l[n]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(v.length)v.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var u=a[i];0!==l[u]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},l={app:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var c=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1bd3":function(t,e,a){"use strict";a("3018")},3018:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},s=[],n={name:"App",data:function(){return{}}},i=n,u=(a("034f"),a("2877")),o=a("6544"),c=a.n(o),p=a("7496"),v=a("f6c4"),d=Object(u["a"])(i,l,s,!1,null,null,null),f=d.exports;c()(d,{VApp:p["a"],VMain:v["a"]});var h=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",color:"light",elevation:"0"}},[a("v-spacer",[a("v-toolbar-title",{staticClass:"flex text-center"},[a("h4",[t._v("Kuyular")])])],1)],1),t._l(t.kuyular,(function(e){return a("v-card",{key:e.id,staticClass:"mx-auto",attrs:{elevation:"0"}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"KuyuDetay",params:{hizmet_no:e.hizmet_no,kuyu_adi:e.kuyu_adi,vesile:e.vesile,kuyu_sahibi:e.kuyu_sahibi,tel:e.tel,kuyu_yeri:e.kuyu_yeri,kayit_tarihi:e.kayit_tarihi,grubu:e.grubu,tamamlandi:e.tamamlandi}}}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"text-p mb-2"},[t._v(" "+t._s(e.hizmet_no)+" ")]),a("v-list-item-title",{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(e.kuyu_adi)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(e.kuyu_nevi)+" ")]),a("br"),a("br"),a("v-list-item-subtitle",[a("div",["Kayıt Oluşturuldu"==e.tamamlandi?a("v-progress-linear",{staticClass:"rounded-pill",attrs:{height:"25",color:"#DD9D15",value:"20"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.value;return[a("strong",{staticStyle:{color:"#DD9D15"}},[t._v(t._s(Math.ceil(r))+"%")])]}}],null,!0)}):t._e(),"Bölgeye Gönderildi"==e.tamamlandi?a("v-progress-linear",{staticClass:"rounded-pill",attrs:{height:"25",color:"#DD9D15",value:"40"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.value;return[a("strong",{staticStyle:{color:"#DD9D15"}},[t._v(t._s(Math.ceil(r))+"%")])]}}],null,!0)}):t._e(),"Kuyu Çalışmalarına Başlandı"==e.tamamlandi?a("v-progress-linear",{staticClass:"rounded-pill",attrs:{height:"25",color:"#DD9D15",value:"60"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.value;return[a("strong",{staticStyle:{color:"#F5E2B9"}},[t._v(t._s(Math.ceil(r))+"%")])]}}],null,!0)}):t._e(),"Görseller Yüklendi"==e.tamamlandi?a("v-progress-linear",{staticClass:"rounded-pill",attrs:{height:"25",color:"#DD9D15",value:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.value;return[a("strong",{staticStyle:{color:"#F5E2B9"}},[t._v(t._s(Math.ceil(r))+"%")])]}}],null,!0)}):t._e(),"Kuyu Açılışı Yapıldı"==e.tamamlandi?a("v-progress-linear",{staticClass:"rounded-pill",attrs:{height:"25",color:"#DD9D15",value:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.value;return[a("strong",{staticStyle:{color:"#F5E2B9"}},[t._v(t._s(Math.ceil(r))+"% Tamamlandı")])]}}],null,!0)}):t._e()],1)])],1)],1),a("v-card-actions",[0==e.grubu?a("v-btn",{attrs:{outlined:"",rounded:"",text:""}},[t._v(" Grup Verisi Yok ")]):a("v-btn",{attrs:{outlined:"",rounded:"",text:""}},[t._v(" "+t._s(e.grubu)+" ")])],1)],1),a("v-divider")],1)}))],2)},y=[],m=a("bc3a"),b=a.n(m),g={data:function(){return{kuyular:[]}},created:function(){var t=this;b.a.get("https://script.googleusercontent.com/macros/echo?user_content_key=chvRZGM5Sc19Aezu9CwQ-HDnxFNpIlCE5J1vo-2ZCGxCuL5eyk2zySraGd1uqWaI9z_VZHgnkFW1NgLshwctLYH_lNnnygRvm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNNtJQgcKS3QF702zgK-TH4Gp1eoEYE8i140qHugIjx4FfNLxlvVvL0XNnLGxKGAR1LGqL-Wug6q&lib=MFJ8Tf-r-vhO3YkUjbOqvuh0Jelz85Zt4").then((function(e){t.kuyular=e.data.kuyu}))}},x=g,k=a("40dc"),C=a("8336"),S=a("b0af"),V=a("99d9"),D=a("ce7e"),w=a("da13"),K=a("5d23"),O=a("8e36"),j=a("2fa4"),G=a("2a7f"),B=Object(u["a"])(x,_,y,!1,null,null,null),T=B.exports;c()(B,{VAppBar:k["a"],VBtn:C["a"],VCard:S["a"],VCardActions:V["a"],VDivider:D["a"],VListItem:w["a"],VListItemContent:K["a"],VListItemSubtitle:K["b"],VListItemTitle:K["c"],VProgressLinear:O["a"],VSpacer:j["a"],VToolbarTitle:G["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex text-center"},[a("v-app-bar",{attrs:{app:"",color:"light",elevation:"0"}},[a("v-app-bar-nav-icon",{attrs:{color:"black"}},[a("v-icon",{attrs:{large:""},on:{click:t.back}},[t._v(" mdi-chevron-left ")])],1),a("v-spacer",[a("v-toolbar-title",{staticClass:"flex text-center"},[a("h4",[t._v(" "+t._s(t.kuyu_adi)+" ")])])],1)],1),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead"),a("tbody",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Hizmet No")]),a("th",{staticClass:"text-left"},[t._v(" "+t._s(t.hizmet_no)+" ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("Vesile")]),a("th",{staticClass:"text-left"},[t._v(" "+t._s(t.vesile)+" ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("Kuyu Sahibi")]),a("th",{staticClass:"text-left"},[t._v(" "+t._s(t.kuyu_sahibi)+" ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("Telefon")]),a("th",{staticClass:"text-left"},[t._v(" "+t._s(t.tel)+" ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("Kuyu Yeri")]),a("th",{staticClass:"text-left"},[t._v(" "+t._s(t.kuyu_yeri)+" ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("Kuyu Tarihi")]),a("th",{staticClass:"text-left"},[t._v(" "+t._s(t.kayit_tarihi)+" ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("Grubu")]),a("th",{staticClass:"text-left"},[t._v(" "+t._s(t.grubu)+" ")])])])]},proxy:!0}])}),a("v-stepper",{attrs:{elevation:"0",vertical:""},model:{value:t.e6,callback:function(e){t.e6=e},expression:"e6"}},[a("v-stepper-step",{attrs:{complete:t.e6>1,step:"1"}},[t._v(" Kayıt Oluşturuldu "),a("small")]),a("v-stepper-content",{attrs:{step:"1"}},[a("v-card",{staticClass:"flex text-left",attrs:{color:"white",height:"auto"}})],1),a("v-stepper-step",{attrs:{complete:t.e6>2,step:"2"}},[t._v(" Bölgeye Gönderildi ")]),a("v-stepper-content",{attrs:{step:"2"}},[a("v-card",{staticClass:"flex text-left",attrs:{color:"white",height:"auto"}})],1),a("v-stepper-step",{attrs:{complete:t.e6>3,step:"3"}},[t._v(" Kuyu Çalışmalarına Başlandı ")]),a("v-stepper-content",{attrs:{step:"3"}},[a("v-card",{staticClass:"flex text-left",attrs:{color:"white",height:"auto"}})],1),a("v-stepper-step",{attrs:{complete:t.e6>4,step:"4"}},[t._v(" Görseller Yüklendi ")]),a("v-stepper-content",{attrs:{step:"4"}},[a("v-card",{staticClass:"flex text-left",attrs:{color:"white",height:"auto"}})],1),a("v-stepper-step",{attrs:{step:"5"}},[t._v(" Kuyu Açılışı Yapıldı ")]),a("v-stepper-content",{attrs:{step:"5"}},[a("v-card",{staticClass:"flex text-left",attrs:{color:"white",height:"auto"}})],1)],1)],1)},z=[],M={data:function(){return"Kayıt Oluşturuldu"==this.tamamlandi?{e6:1}:"Bölgeye Gönderildi"==this.tamamlandi?{e6:2}:"Kuyu Çalışmalarına Başlandı"==this.tamamlandi?{e6:3}:"Görseller Yüklendi"==this.tamamlandi?{e6:4}:"Kuyu Açılışı Yapıldı"==this.tamamlandi?{e6:5}:{e6:1}},methods:{back:function(){this.$router.go(-1)}},props:["hizmet_no","kuyu_adi","vesile","kuyu_sahibi","tel","kuyu_yeri","kayit_tarihi","grubu","tamamlandi"]},A=M,E=(a("1bd3"),a("5bc1")),Y=a("132d"),N=a("1f4f"),I=a("7e85"),F=a("e516"),P=a("56a4"),H=Object(u["a"])(A,L,z,!1,null,null,null),J=H.exports;c()(H,{VAppBar:k["a"],VAppBarNavIcon:E["a"],VCard:S["a"],VIcon:Y["a"],VSimpleTable:N["a"],VSpacer:j["a"],VStepper:I["a"],VStepperContent:F["a"],VStepperStep:P["a"],VToolbarTitle:G["a"]}),r["a"].use(h["a"]);var q=[{path:"/",name:"Kuyular",component:T},{path:"/kuyular/:hizmet_no",name:"KuyuDetay",component:J,props:!0}],Z=new h["a"]({mode:"history",routes:q}),$=Z,Q=a("f309");r["a"].use(Q["a"]);var W=new Q["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:$,vuetify:W,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.ba058d43.js.map
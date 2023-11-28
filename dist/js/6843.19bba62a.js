(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[6843],{62635:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return B}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-alert",{attrs:{variant:"danger",show:!0,dismissible:""}},[a("h4",{staticClass:"alert-heading"},[t._v(" DISCLAIMER: ")]),a("div",{staticClass:"alert-body"},[a("span",[t._v("Ping.pub is maintained by the community, Everyone could add a chain to ping.pub. Some of those blockchains are not fully tested, Use at your own risk.")])])]),a("form-wizard",{ref:"wizard",staticClass:"steps-transparent mb-3 md",attrs:{color:"#7367F0",title:null,subtitle:null,shape:"square","finish-button-text":"Save","back-button-text":"Previous"},on:{"on-complete":t.formSubmitted}},[a("tab-content",{attrs:{title:"Device","before-change":t.validationFormDevice}},[a("validation-observer",{ref:"deviceRules",attrs:{tag:"form"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Select a device to import accounts","label-for":"device"}},[a("validation-provider",{attrs:{name:"device",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("b-form-radio-group",{attrs:{stacked:""},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[a("b-form-radio",{staticClass:"mb-1 mt-1",attrs:{name:"device",value:"keplr",checked:""},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[t._v(" Keplr ")]),a("b-form-radio",{staticClass:"mb-1",attrs:{name:"device",value:"ledger"},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[t._v(" Ledger via WebUSB ")]),a("b-form-radio",{staticClass:"mb-1",attrs:{name:"device",value:"ledger2"},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[t._v(" Ledger via Bluetooth ")]),a("b-form-radio",{staticClass:"mb-1 d-none",attrs:{name:"device",value:"metamask"},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[t._v(" Metamask ")]),a("b-form-radio",{attrs:{name:"device",value:"address"},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[t._v(" Address (Observe Only) ")])],1),"address"===t.device?a("b-form-input",{staticClass:"mt-1",attrs:{name:"address",placeholder:"cosmos1ev0vtddkl7jlwfawlk06yzncapw2x9quyxx75u"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}):t._e(),a("small",{staticClass:"text-danger"},[t._v(t._s(t.debug)+t._s(i[0]))])]}}])})],1)],1),t.device.startsWith("ledger")?a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"HD Path","label-for":"hdpath"}},[a("validation-provider",{attrs:{name:"HD Path",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("b-form-input",{staticClass:"mt-1",attrs:{name:"hdpath",placeholder:"m/44'/118/0'/0/0"},model:{value:t.hdpath,callback:function(e){t.hdpath=e},expression:"hdpath"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}],null,!1,2397192972)})],1)],1):t._e()],1)],1)],1),a("tab-content",{attrs:{title:"Accounts","before-change":t.validationFormAddress}},[a("validation-observer",{ref:"accountRules",attrs:{tag:"form"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Account Name","label-for":"account_name"}},[a("validation-provider",{attrs:{name:"Account Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("b-form-input",{attrs:{id:"account_name",state:!(i.length>0)&&null,placeholder:"Ping Nano X",readonly:t.edit},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}])})],1)],1),t.hdpath?a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"HD Path","label-for":"ir"}},[a("b-form-input",{attrs:{id:"ir",value:t.hdpath,readonly:""}})],1)],1):t._e(),t.accounts?a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Public Key","label-for":"ir"}},[a("validation-provider",{attrs:{name:"Public Key",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("b-form-input",{attrs:{id:"ir",value:t.formatPubkey(t.accounts.pubkey),readonly:"",state:!(i.length>0)&&null}}),a("small",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}],null,!1,2851721389)})],1)],1):t._e(),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Import Address For Chains:"}},[a("validation-provider",{attrs:{name:"addrs",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[a("div",{staticClass:"demo-inline-spacing text-uppercase"},[a("b-row",t._l(t.chains,(function(e,i){return a("b-col",{key:i,staticClass:"mb-25",attrs:{xs:"12",md:"4",lg:"3"}},[a("b-form-checkbox",{attrs:{name:"addrs",value:i},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("b-avatar",{attrs:{src:e.logo,size:"18",variant:"light-primary",rounded:""}}),a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}}],class:t.hdpath.startsWith("m/44'/"+e.coin_type)?"text-success":"text-danger",attrs:{title:"Coin Type: "+e.coin_type}},[t._v(" "+t._s(e.chain_name))])],1)],1)})),1)],1),a("small",{staticClass:"text-success"},[t._v(t._s(i[0]))])]}}])})],1),a("b-alert",{attrs:{show:"",variant:"info"}},[a("div",{staticClass:"alert-heading"},[t._v(" IMPORTANT ")]),a("div",{staticClass:"alert-body"},[a("div",[t._v(" If you don't have Ledger, Do not import those addresses in "),a("b",{staticClass:"text-danger"},[t._v("RED")]),t._v(". Because these addresses are derived from different coin_type which is not as same as the official one ")])])])],1)],1)],1)],1),a("tab-content",{attrs:{title:"Confirmation"}},[a("div",{staticClass:"d-flex border-bottom mb-2"},[a("feather-icon",{staticClass:"mb-50",attrs:{icon:"UserIcon",size:"19"}}),a("h4",{staticClass:"mb-0 ml-50"},[t._v(" "+t._s(t.name)+" "),a("small",[t._v(" "+t._s(t.hdpath))])])],1),a("b-row",{staticClass:"mb-2"},t._l(t.addresses,(function(t){return a("b-col",{key:t.addr,attrs:{cols:"12"}},[a("b-input-group",{staticClass:"mb-25"},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-avatar",{attrs:{src:t.logo,size:"18",variant:"light-primary",rounded:""}})],1),a("b-form-input",{attrs:{value:t.addr}})],1)],1)})),1)],1)],1),a("b-alert",{attrs:{variant:"secondary",show:!t.accounts&&"keplr"===t.device}},[a("h4",{staticClass:"alert-heading"},[t._v(" Enable Keplr For "+t._s(t.chainId)+" ")]),a("div",{staticClass:"alert-body p-1"},[a("span",[t._v("If Keplr has not added "),a("code",[t._v(t._s(t.chainId))]),t._v(", We can enable it here.")]),a("b-form-textarea",{staticClass:"mt-1 mb-1",attrs:{value:t.keplr,rows:"10"}}),t.error?a("div",{staticClass:"text-danger"},[t._v(" "+t._s(t.error)+" ")]):t._e(),a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.suggest()}}},[t._v(" Enable Keplr ")])],1)])],1)},n=[],r=(a(26699),a(85498)),s=a(12954),o=a(87608),c=a(79562),l=a(28972),d=a(88384);class u{static create(t){const e=new u;return e.hdpath=(0,c.pathToString)(t).replace("m/","").replace("/60/","/60'/"),e.ethereum=window.ethereum,e}async getAccounts(){return this.ethereum.request({method:"eth_accounts"}).then((t=>t.map((t=>({pubkey:(0,l.fromHex)(t.substring(2)),address:(0,d.ethToEvmos)(t),algo:"ethsecp256k1"})))))}async sign(t,e){return this.ethereum.request({method:"eth_signTypedData_v4",params:[t,JSON.stringify(e)]})}}var h=a(73106),b=a(15193),f=a(75200),v=a(26253),p=a(50725),m=a(54013),g=a(22183),y=a(76398),_=a(19692),x=a(85961),w=a(4060),T=a(27754),k=a(62135),C=a(5870),S=a(39984),I=a(54333),P={components:{BAlert:h.F,BButton:b.T,ValidationProvider:s.d_,ValidationObserver:s._j,FormWizard:r.FormWizard,TabContent:r.TabContent,BAvatar:f.SH,BRow:v.T,BCol:p.l,BFormGroup:m.x,BFormInput:g.e,BFormRadio:y.g,BFormCheckbox:_.l,BFormTextarea:x.y,BInputGroup:w.w,BInputGroupPrepend:T.P,BFormRadioGroup:k.Q,ToastificationContent:o.Z},directives:{"b-tooltip":C.o},data(){return{debug:"",device:"keplr",address:"",hdpath:"m/44'/118/0'/0/0",name:"",options:{},required:S.C1,selected:[],accounts:null,exludes:[],edit:!1,keplr:"",chainId:"",error:null}},computed:{chains(){const t=JSON.parse(localStorage.getItem("chains"));return this.exludes.forEach((e=>{delete t[e]})),t},addresses(){if(this.accounts&&this.accounts.address){const{data:t}=(0,I.addressDecode)(this.accounts.address);return this.selected.map((e=>{if(this.chains[e]){const{logo:a,addr_prefix:i,coin_type:n}=this.chains[e],r=(0,I.addressEnCode)(i,t,n);return{chain:e,addr:r,logo:a,hdpath:this.hdpath}}return null})).filter((t=>null!=t))}return[]}},mounted(){const{selected:t}=this.$store.state.chains;this.$http.getLatestBlock().then((e=>{this.chainId=e.block.header.chain_id,this.keplr=this.initParamsForKeplr(this.chainId,t)})),t&&t.chain_name&&!this.exludes.includes(t.chain_name)&&this.selected.push(t.chain_name);const e=new URLSearchParams(window.location.search).get("name"),a=(0,I.getLocalAccounts)();if(e&&a&&a[e]){const t=a[e];this.device=t.device,this.name=t.name,this.edit=!0,t.address&&(t.address.forEach((t=>{this.selected.includes(t.chain)||this.selected.push(t.chain)})),this.address=t.address[0].addr,this.hdpath=t.address[0].hdpath,this.localAddress()&&this.$refs.wizard.nextTab())}else this.hdpath=`m/44'/${t.coin_type}/0'/0/0`},methods:{suggest(){window.keplr&&window.keplr.experimentalSuggestChain(JSON.parse(this.keplr)).catch((t=>{this.error=t}))},initParamsForKeplr(t,e){return JSON.stringify({chainId:t,chainName:e.chain_name,rpc:Array.isArray(e.rpc)?e.rpc[0]:e.rpc,rest:Array.isArray(e.api)?e.api[0]:e.api,bip44:{coinType:e.coin_type},coinType:e.coin_type,bech32Config:{bech32PrefixAccAddr:e.addr_prefix,bech32PrefixAccPub:`${e.addr_prefix}pub`,bech32PrefixValAddr:`${e.addr_prefix}valoper`,bech32PrefixValPub:`${e.addr_prefix}valoperpub`,bech32PrefixConsAddr:`${e.addr_prefix}valcons`,bech32PrefixConsPub:`${e.addr_prefix}valconspub`},currencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:e.assets[0].exponent,coinGeckoId:e.assets[0].coingecko_id||"unknown"}],feeCurrencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:e.assets[0].exponent,coinGeckoId:e.assets[0].coingecko_id||"unknown"}],stakeCurrency:{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:e.assets[0].exponent,coinGeckoId:e.assets[0].coingecko_id||"unknown"},gasPriceStep:{low:.01,average:.025,high:.03},features:e.keplr_features||[]},null,"\t")},formatPubkey(t){return"string"===typeof t?t:t?(0,l.toHex)(t):""},async connect(){const t="ledger"===this.device?"usb":"bluetooth";return(0,I.getLedgerAddress)(t,this.hdpath)},async cennectKeplr(){if(!window.getOfflineSigner||!window.keplr)return this.debug="Please install keplr extension",null;const t=await this.$http.getLatestBlock().then((t=>t.block.header.chain_id));await window.keplr.enable(t);const e=window.getOfflineSigner(t);return e.getAccounts()},async connectMetamask(){if(!window.ethereum)return this.debug="Please install Metamask extension",null;const t=u.create((0,c.stringToPath)(this.hdpath));return t.getAccounts()},localAddress(){if(!this.address)return!1;try{const{data:t}=(0,I.addressDecode)(this.address);if(t)return this.accounts={address:this.address,pubkey:t},!0}catch(t){this.debug=t}return!1},formSubmitted(){const t=localStorage.getItem("accounts"),e=t?JSON.parse(t):{};e[this.name]={name:this.name,device:this.device,address:this.addresses},localStorage.setItem("accounts",JSON.stringify(e)),this.$store.state.chains.defaultWallet||this.$store.commit("setDefaultWallet",this.name),this.$toast({component:o.Z,props:{title:"Address Saved!",icon:"EditIcon",variant:"success"}}),this.$router.push("./accounts")},async validationFormDevice(){let t=String(this.name).length>0;if(!t)switch(this.device){case"keplr":await this.cennectKeplr().then((e=>{e&&(this.accounts=e[0],t=!0)}));break;case"metamask":await this.connectMetamask().then((e=>{e&&(this.accounts=e[0],t=!0)})).catch((t=>{this.debug=t}));break;case"ledger":case"ledger2":await this.connect().then((e=>{e&&(this.accounts=e[0],t=!0)})).catch((t=>{this.debug=t}));break;default:t=this.localAddress()}return new Promise(((e,a)=>{this.$refs.deviceRules.validate().then((i=>{t&&i&&e(!0),a()}))}))},validationFormAddress(){return new Promise(((t,e)=>{this.$refs.accountRules.validate().then((a=>{a?t(!0):e()}))}))}}},O=P,$=a(1001),z=(0,$.Z)(O,i,n,!1,null,null,null),B=z.exports},85961:function(t,e,a){"use strict";a.d(e,{y:function(){return D}});var i=a(20144),n=a(94689),r=a(12299),s=a(26410),o=a(33284),c=a(21578),l=a(93954),d=a(67040),u=a(20451),h=a(32023),b=a(80685),f=a(49035),v=a(95505),p=a(70403),m=a(94791),g=a(73727),y=a(98596),_=a(76677),x=a(30824),w=a(3058);function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function C(t,e,a){return e&&k(t.prototype,e),a&&k(t,a),t}var S="__bv__visibility_observer",I=function(){function t(e,a,i){T(this,t),this.el=e,this.callback=a.callback,this.margin=a.margin||0,this.once=a.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver(i)}return C(t,[{key:"createObserver",value:function(t){var e=this;if(this.observer&&this.stop(),!this.doneOnce&&(0,o.mf)(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(a){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}t.context.$nextTick((function(){(0,s.bz)((function(){e.observer&&e.observer.observe(e.el)}))}))}}},{key:"handler",value:function(t){var e=t?t[0]:{},a=Boolean(e.isIntersecting||e.intersectionRatio>0);a!==this.visible&&(this.visible=a,this.callback(a),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}]),t}(),P=function(t){var e=t[S];e&&e.stop&&e.stop(),delete t[S]},O=function(t,e,a){var i=e.value,n=e.modifiers,r={margin:"0px",once:!1,callback:i};(0,d.XP)(n).forEach((function(t){x.R2.test(t)?r.margin="".concat(t,"px"):"once"===t.toLowerCase()&&(r.once=!0)})),P(t),t[S]=new I(t,r,a),t[S]._prevModifiers=(0,d.d9)(n)},$=function(t,e,a){var i=e.value,n=e.oldValue,r=e.modifiers;r=(0,d.d9)(r),!t||i===n&&t[S]&&(0,w.W)(r,t[S]._prevModifiers)||O(t,{value:i,modifiers:r},a)},z=function(t){P(t)},B={bind:O,componentUpdated:$,unbind:z};function E(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?E(Object(a),!0).forEach((function(e){A(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function A(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var R=(0,u.y2)((0,d.GE)(j(j(j(j(j(j({},g.N),h.N),f.N),v.N),p.NQ),{},{maxRows:(0,u.pi)(r.fE),noAutoShrink:(0,u.pi)(r.U5,!1),noResize:(0,u.pi)(r.U5,!1),rows:(0,u.pi)(r.fE,2),wrap:(0,u.pi)(r.N0,"soft")})),n.eo),D=i["default"].extend({name:n.eo,directives:{"b-visible":B},mixins:[_.o,g.t,y.E,h.X,f.j,v.J,p.Q_,b.o,m.e],props:R,data:function(){return{heightInPx:null}},computed:{computedStyle:function(){var t={resize:!this.computedRows||this.noResize?"none":null};return this.computedRows||(t.height=this.heightInPx,t.overflowY="scroll"),t},computedMinRows:function(){return(0,c.nP)((0,l.Z3)(this.rows,2),2)},computedMaxRows:function(){return(0,c.nP)(this.computedMinRows,(0,l.Z3)(this.maxRows,0))},computedRows:function(){return this.computedMinRows===this.computedMaxRows?this.computedMinRows:null},computedAttrs:function(){var t=this.disabled,e=this.required;return{id:this.safeId(),name:this.name||null,form:this.form||null,disabled:t,placeholder:this.placeholder||null,required:e,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,rows:this.computedRows,wrap:this.wrap||null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return j(j({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{localValue:function(){this.setHeight()}},mounted:function(){this.setHeight()},methods:{visibleCallback:function(t){t&&this.$nextTick(this.setHeight)},setHeight:function(){var t=this;this.$nextTick((function(){(0,s.bz)((function(){t.heightInPx=t.computeHeight()}))}))},computeHeight:function(){if(this.$isServer||!(0,o.Ft)(this.computedRows))return null;var t=this.$el;if(!(0,s.pn)(t))return null;var e=(0,s.yD)(t),a=(0,l.f_)(e.lineHeight,1),i=(0,l.f_)(e.borderTopWidth,0)+(0,l.f_)(e.borderBottomWidth,0),n=(0,l.f_)(e.paddingTop,0)+(0,l.f_)(e.paddingBottom,0),r=i+n,d=a*this.computedMinRows+r,u=(0,s.C2)(t,"height")||e.height;(0,s.A_)(t,"height","auto");var h=t.scrollHeight;(0,s.A_)(t,"height",u);var b=(0,c.nP)((h-n)/a,2),f=(0,c.bS)((0,c.nP)(b,this.computedMinRows),this.computedMaxRows),v=(0,c.nP)((0,c.hv)(f*a+r),d);return this.noAutoShrink&&(0,l.f_)(u,0)>v?u:"".concat(v,"px")}},render:function(t){return t("textarea",{class:this.computedClass,style:this.computedStyle,directives:[{name:"b-visible",value:this.visibleCallback,modifiers:{640:!0}}],attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},5870:function(t,e,a){"use strict";a.d(e,{o:function(){return A}});var i=a(94689),n=a(43935),r=a(63294),s=a(11572),o=a(79968),c=a(13597),l=a(68265),d=a(33284),u=a(3058),h=a(93954),b=a(67040),f=a(40960);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g="__BV_Tooltip__",y="hover focus",_={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},x=/^html$/i,w=/^noninteractive$/i,T=/^nofade$/i,k=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,C=/^(window|viewport|scrollParent)$/i,S=/^d\d+$/i,I=/^ds\d+$/i,P=/^dh\d+$/i,O=/^o-?\d+$/i,$=/^v-.+$/i,z=/\s+/,B=function(t,e){var a={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:(0,o.wJ)(i.qv,"delay",50),boundary:String((0,o.wJ)(i.qv,"boundary","scrollParent")),boundaryPadding:(0,h.Z3)((0,o.wJ)(i.qv,"boundaryPadding",5),0),variant:(0,o.wJ)(i.qv,"variant"),customClass:(0,o.wJ)(i.qv,"customClass")};if((0,d.HD)(t.value)||(0,d.hj)(t.value)||(0,d.mf)(t.value)?a.title=t.value:(0,d.PO)(t.value)&&(a=p(p({},a),t.value)),(0,d.o8)(a.title)){var n=e.data||{};a.title=n.attrs&&!(0,d.Jp)(n.attrs.title)?n.attrs.title:void 0}(0,d.PO)(a.delay)||(a.delay={show:(0,h.Z3)(a.delay,0),hide:(0,h.Z3)(a.delay,0)}),t.arg&&(a.container="#".concat(t.arg)),(0,b.XP)(t.modifiers).forEach((function(t){if(x.test(t))a.html=!0;else if(w.test(t))a.interactive=!1;else if(T.test(t))a.animation=!1;else if(k.test(t))a.placement=t;else if(C.test(t))t="scrollparent"===t?"scrollParent":t,a.boundary=t;else if(S.test(t)){var e=(0,h.Z3)(t.slice(1),0);a.delay.show=e,a.delay.hide=e}else I.test(t)?a.delay.show=(0,h.Z3)(t.slice(2),0):P.test(t)?a.delay.hide=(0,h.Z3)(t.slice(2),0):O.test(t)?a.offset=(0,h.Z3)(t.slice(1),0):$.test(t)&&(a.variant=t.slice(2)||null)}));var r={};return(0,s.zo)(a.trigger||"").filter(l.y).join(" ").trim().toLowerCase().split(z).forEach((function(t){_[t]&&(r[t]=!0)})),(0,b.XP)(t.modifiers).forEach((function(t){t=t.toLowerCase(),_[t]&&(r[t]=!0)})),a.trigger=(0,b.XP)(r).join(" "),"blur"===a.trigger&&(a.trigger="focus"),a.trigger||(a.trigger=y),a},E=function(t,e,a){if(n.Qg){var i=B(e,a);if(!t[g]){var s=a.context;t[g]=new f.j({parent:s,_scopeId:(0,c.P)(s,void 0)}),t[g].__bv_prev_data__={},t[g].$on(r.l0,(function(){(0,d.mf)(i.title)&&t[g].updateData({title:i.title(t)})}))}var o={title:i.title,triggers:i.trigger,placement:i.placement,fallbackPlacement:i.fallbackPlacement,variant:i.variant,customClass:i.customClass,container:i.container,boundary:i.boundary,delay:i.delay,offset:i.offset,noFade:!i.animation,id:i.id,interactive:i.interactive,disabled:i.disabled,html:i.html},l=t[g].__bv_prev_data__;if(t[g].__bv_prev_data__=o,!(0,u.W)(o,l)){var h={target:t};(0,b.XP)(o).forEach((function(e){o[e]!==l[e]&&(h[e]="title"===e&&(0,d.mf)(o[e])?o[e](t):o[e])})),t[g].updateData(h)}}},j=function(t){t[g]&&(t[g].$destroy(),t[g]=null),delete t[g]},A={bind:function(t,e,a){E(t,e,a)},componentUpdated:function(t,e,a){a.context.$nextTick((function(){E(t,e,a)}))},unbind:function(t){j(t)}}},85498:function(t){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,i,n,r){var s,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,o=t.default);var l,d="function"==typeof o?o.options:o;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),a&&(d.functional=!0),n&&(d._scopeId=n),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=l):i&&(l=i),l){var u=d.functional,h=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(t,e){return l.call(e),h(t,e)}):d.beforeCreate=h?[].concat(h,l):[l]}return{esModule:s,exports:o,options:d}}},function(t,e,a){"use strict";var i=a(2),n=a(4),r=a(14);e.a={name:"form-wizard",components:{WizardButton:i.a,WizardStep:n.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var i=function i(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,i)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,i):(this.setValidationError(null),i())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(r.a)(e.tabId)}},focusPrevTab:function(){var t=Object(r.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(r.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(r.c)(t))this.setLoading(!0),t.then((function(t){a.setLoading(!1);var i=!0===t;a.executeBeforeChange(i,e)})).catch((function(t){a.setLoading(!1),a.setValidationError(t)}));else{var i=!0===t;this.executeBeforeChange(i,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var i=a.beforeChange();this.validateBeforeChange(i,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.tabs[t],n=this.tabs[e];return i&&(i.active=!1),n&&(n.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find((function(a,i){var n=a.route===t;return n&&(e=i),n}));if(a&&!a.active){var i=e>this.activeTabIndex;this.navigateToTab(e,i)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function i(t){a(10)}var n=a(3),r=a(11),s=a(0),o=i,c=s(n.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function i(t){a(12)}var n=a(5),r=a(13),s=a(0),o=i,c=s(n.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(8),n=a(16),r=a(2),s=a(4);a.d(e,"FormWizard",(function(){return i.a})),a.d(e,"TabContent",(function(){return n.a})),a.d(e,"WizardButton",(function(){return r.a})),a.d(e,"WizardStep",(function(){return s.a}));var o={install:function(t){t.component("form-wizard",i.a),t.component("tab-content",n.a),t.component("wizard-button",r.a),t.component("wizard-step",s.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,a){"use strict";function i(t){a(9)}var n=a(1),r=a(15),s=a(0),o=i,c=s(n.a,r.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},n=[],r={render:i,staticRenderFns:n};e.a=r},function(t,e){},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},n=[],r={render:i,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";function i(){return document.activeElement.id}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=i();return t.findIndex((function(t){return t.tabId===e}))}function r(t){document.getElementById(t).focus()}function s(t){return t.then&&"function"==typeof t.then}e.b=n,e.a=r,e.c=s},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,i){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:i},nativeOn:{click:function(e){t.navigateToTab(i)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(i)}}})],{tab:e,index:i,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},n=[],r={render:i,staticRenderFns:n};e.a=r},function(t,e,a){"use strict";var i=a(6),n=a(17),r=a(0),s=r(i.a,n.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},n=[],r={render:i,staticRenderFns:n};e.a=r}])}))}}]);
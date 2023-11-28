(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[8915],{67219:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-md px-0"},[t.chainVals?n("b-row",t._l(Object.keys(t.chainVals),(function(e,r){return n("b-col",{key:r,staticClass:"text-truncate",attrs:{sm:"12",md:"4"}},[n("uptime-my-chain-blocks",{attrs:{chain:e,validators:t.chainVals[e]}})],1)})),1):t._e(),n("b-alert",{staticClass:"mt-2",attrs:{variant:"success",show:""}},[n("div",{staticClass:"alert-heading"},[t._v(" Tips ")]),n("div",{staticClass:"alert-body"},[t._v(" There are two ways to monitor your validators: "),n("li",[t._v(" Pin a validator on Uptime pages.")]),n("li",[t._v(" Specify parameters like following: "),n("pre",[t._v('https://ping.pub/cosmos/uptime/my?validators={"sifchain":["FBADE9A30473BB9ED6DFA16BFB3838E028F33650"],"chain_name":["hexAddress"]}')])])])])],1)},i=[],a=(n(41539),n(21249),n(74916),n(23123),n(54747),n(47941),n(69826),n(82526),n(41817),n(26253)),o=n(50725),s=n(73106),c=n(5870),l=n(54333),u=n(28972),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-0"},[n("b-card",[n("b-card-title",{staticClass:"d-flex justify-content-between"},[n("span",{staticClass:"text-uppercase"},[t._v(" "+t._s(t.chain)+" ")]),n("small",{staticClass:"text-right"},[t._v(" Height: "+t._s(t.height)+" ")])]),n("b-alert",{attrs:{variant:"danger",show:t.syncing}},[n("div",{staticClass:"alert-body"},[n("span",[t._v("No new blocks have been produced since "),n("strong",[t._v(t._s(t.latestTime))])])])]),n("b-row",[0===t.uptime.length?n("span",{staticClass:"text-danger"},[t._v(" Your node is out of active validator set")]):t._e(),t._l(t.uptime,(function(e,r){return n("b-col",{key:r,staticClass:"text-truncate",attrs:{sm:"12"}},[n("div",{staticClass:"d-flex justify-content-between"},[n("b-form-checkbox",{staticClass:"custom-control-warning",attrs:{value:t.chain+"#"+e.address},on:{change:function(n){return t.pinValidator(t.chain+"#"+e.address)}},model:{value:t.pinned,callback:function(e){t.pinned=e},expression:"pinned"}},[n("span",{staticClass:"d-inline-block text-truncate font-weight-bold align-bottom"},[t._v(" "+t._s(e.validator.moniker)+" ")])]),t.missing[e.address]?n("span",[t.missing[e.address].missed_blocks_counter>0?n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}}],staticClass:"text-danger text-bolder",attrs:{variant:"light-danger",title:t.missing[e.address].missed_blocks_counter+" missed blocks"}},[t._v(" "+t._s(t.missing[e.address].missed_blocks_counter)+" ")]):n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-success",modifiers:{hover:!0,"v-success":!0}}],attrs:{variant:"light-success",title:"Perfect! No missed blocks"}},[t._v(" 0 ")])],1):t._e()],1),n("div",{staticClass:"d-flex justify-content-between align-self-stretch flex-wrap"},t._l(t.blocks,(function(r,i){return n("div",{key:i,staticStyle:{width:"1.5%"}},[n("router-link",{attrs:{to:"./blocks/"+r.height}},[n("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-second",modifiers:{hover:!0,"v-second":!0}}],staticClass:"m-auto",class:r.sigs&&r.sigs[e.address]?r.sigs[e.address]:"bg-light-success",attrs:{title:r.height}},[t._v(" ")])])],1)})),0)])}))],2)],1)],1)},d=[],p=(n(91038),n(78783),n(82481),n(9653),n(26034)),h=n(8775),v=n(49379),b=n(19692),g={name:"Blocks",components:{BBadge:p.k,BRow:a.T,BCol:o.l,BCard:h._,BAlert:s.F,BCardTitle:v._,BFormCheckbox:b.l},directives:{"b-tooltip":c.o},props:{chain:{type:String,default:null},validators:{type:Array,default:function(){return[]}}},data:function(){var t=(0,l.getLocalChains)(),e=localStorage.getItem("pinned")?localStorage.getItem("pinned").split(","):"";return{pinned:e,config:t[this.chain],missing:{},blocks:Array.from("0".repeat(50)).map((function(t){return{sigs:{},height:Number(t)}})),syncing:!1,latestTime:"",height:"-"}},computed:{uptime:function(){var t=this.validators;return t}},created:function(){var t=this;this.initBlocks(),this.$http.getSlashingSigningInfo(this.config).then((function(e){e.info&&e.info.forEach((function(e){if(e.address){var n=(0,u.toBase64)((0,u.fromBech32)(e.address).data);t.missing[n]=e}}))}))},beforeDestroy:function(){this.blocks=[],this.syncing=!1,clearInterval(this.timer)},methods:{pinValidator:function(){localStorage.setItem("pinned",this.pinned)},initBlocks:function(){var t=this;this.$http.getLatestBlock(this.config).then((function(e){var n=e.block.last_commit.height;t.height=n,(0,l.timeIn)(e.block.header.time,3,"m")?t.syncing=!0:t.syncing=!1,t.latestTime=(0,l.toDay)(e.block.header.time,"long");for(var r=[],i=Promise.resolve(),a=function(e){r.unshift({sigs:{},height:e>0?e:0}),e>n-48&&e>0&&(i=i.then((function(){return new Promise((function(n){t.fetch_status(e,n)}))})))},o=n-1;o>n-50;o-=1)a(o);var s=t.initColor();e.block.last_commit.signatures.forEach((function(t){t.validator_address&&(s[t.validator_address]="bg-success")})),r.push({sigs:s,height:n}),t.blocks=r,t.timer=setInterval(t.fetch_latest,6e3)}))},initColor:function(){var t={};return this.validators.forEach((function(e){t[e.address]="bg-danger"})),t},fetch_status:function(t,e){var n=this,r=this.blocks.find((function(e){return e.height===t}));r&&this.$http.getBlockByHeight(t,this.config).then((function(t){e();var i=n.initColor();t.block.last_commit.signatures.forEach((function(t){t.validator_address&&(i[t.validator_address]="bg-success")})),n.$set(r,"sigs",i)}))},fetch_latest:function(){var t=this;this.$http.getLatestBlock(this.config).then((function(e){var n=t.initColor();e.block.last_commit.signatures.forEach((function(t){t.validator_address&&(n[t.validator_address]="bg-success")})),t.height=e.block.last_commit.height;var r=t.blocks.find((function(t){return t.height===e.block.last_commit.height}));"undefined"===typeof r&&(t.blocks.length>=50&&t.blocks.shift(),t.blocks.push({sigs:n,height:e.block.last_commit.height}))}))}}},m=g,y=n(1001),_=(0,y.Z)(m,f,d,!1,null,null,null),O=_.exports,w={components:{BRow:a.T,BCol:o.l,BAlert:s.F,UptimeMyChainBlocks:O},directives:{"b-tooltip":c.o},data:function(){var t=this,e=(localStorage.getItem("pinned")||"").split(",").map((function(t){return t.split("#")})).reduce((function(t,e){var n=t;return n[e[0]]?n[e[0]].push(e[1]):n[e[0]]=[e[1]],n}),{});this.$route.query.validators&&(e=JSON.parse(this.$route.query.validators));var n={};if(e){var r=(0,l.getLocalChains)();Object.keys(e).forEach((function(i){var a=JSON.parse((0,l.getCachedValidators)(i));if(a){var o=[];e[i].forEach((function(e){var n=a.find((function(n){return e===t.hex2base64((0,l.consensusPubkeyToHexAddress)(n.consensus_pubkey))}));n&&o.push({address:e,validator:n.description})})),n[i]=o}else t.$http.getValidatorList(r[i]).then((function(n){var r=[];e[i].forEach((function(e){var i=n.find((function(n){return e===t.hex2base64((0,l.consensusPubkeyToHexAddress)(n.consensus_pubkey))}));i&&r.push({address:e,validator:i.description})})),t.$set(t.chainVals,i,r)}))}))}return{chainVals:n}},methods:{hex2base64:function(t){return(0,u.toBase64)((0,u.fromHex)(t))}}},k=w,j=(0,y.Z)(k,r,i,!1,null,null,null),P=j.exports},26034:function(t,e,n){"use strict";n.d(e,{k:function(){return b}});var r=n(20144),i=n(69558),a=n(94689),o=n(12299),s=n(67040),c=n(20451),l=n(30488),u=n(67347);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=(0,s.CE)(u.NQ,["event","routerTag"]);delete h.href.default,delete h.to.default;var v=(0,c.y2)((0,s.GE)(d(d({},h),{},{pill:(0,c.pi)(o.U5,!1),tag:(0,c.pi)(o.N0,"span"),variant:(0,c.pi)(o.N0,"secondary")})),a.dJ),b=r["default"].extend({name:a.dJ,functional:!0,props:v,render:function(t,e){var n=e.props,r=e.data,a=e.children,o=n.active,s=n.disabled,f=(0,l.u$)(n),d=f?u.we:n.tag,p=n.variant||"secondary";return t(d,(0,i.b)(r,{staticClass:"badge",class:["badge-".concat(p),{"badge-pill":n.pill,active:o,disabled:s}],props:f?(0,c.uj)(h,n):{}}),a)}})},50725:function(t,e,n){"use strict";n.d(e,{l:function(){return k}});var r=n(69558),i=n(94689),a=n(12299),o=n(30824),s=n(11572),c=n(79968),l=n(68265),u=n(33284),f=n(91051),d=n(67040),p=n(20451),h=n(46595);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=["auto","start","end","center","baseline","stretch"],y=function(t,e,n){var r=t;if(!(0,u.Jp)(n)&&!1!==n)return e&&(r+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),(0,h.vl)(r)):(0,h.vl)(r)},_=(0,f.H)(y),O=(0,d.Ue)(null),w=function(){var t=(0,c.QC)().filter(l.y),e=t.reduce((function(t,e){return t[e]=(0,p.pi)(a.jy),t}),(0,d.Ue)(null)),n=t.reduce((function(t,e){return t[(0,p.wv)(e,"offset")]=(0,p.pi)(a.fE),t}),(0,d.Ue)(null)),r=t.reduce((function(t,e){return t[(0,p.wv)(e,"order")]=(0,p.pi)(a.fE),t}),(0,d.Ue)(null));return O=(0,d.f0)((0,d.Ue)(null),{col:(0,d.XP)(e),offset:(0,d.XP)(n),order:(0,d.XP)(r)}),(0,p.y2)((0,d.GE)(b(b(b(b({},e),n),r),{},{alignSelf:(0,p.pi)(a.N0,null,(function(t){return(0,s.kI)(m,t)})),col:(0,p.pi)(a.U5,!1),cols:(0,p.pi)(a.fE),offset:(0,p.pi)(a.fE),order:(0,p.pi)(a.fE),tag:(0,p.pi)(a.N0,"div")})),i.ux)},k={name:i.ux,functional:!0,get props(){return delete this.props,this.props=w()},render:function(t,e){var n,i=e.props,a=e.data,s=e.children,c=i.cols,l=i.offset,u=i.order,f=i.alignSelf,d=[];for(var p in O)for(var h=O[p],v=0;v<h.length;v++){var b=_(p,h[v].replace(p,""),i[h[v]]);b&&d.push(b)}var m=d.some((function(t){return o.Es.test(t)}));return d.push((n={col:i.col||!m&&!c},g(n,"col-".concat(c),c),g(n,"offset-".concat(l),l),g(n,"order-".concat(u),u),g(n,"align-self-".concat(f),f),n)),t(i.tag,(0,r.b)(a,{class:d}),s)}}},26253:function(t,e,n){"use strict";n.d(e,{T:function(){return O}});var r=n(69558),i=n(94689),a=n(12299),o=n(11572),s=n(79968),c=n(68265),l=n(91051),u=n(67040),f=n(20451),d=n(46595);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=["start","end","center"],g=(0,l.H)((function(t,e){return e=(0,d.fy)((0,d.BB)(e)),e?(0,d.vl)(["row-cols",t,e].filter(c.y).join("-")):null})),m=(0,l.H)((function(t){return(0,d.vl)(t.replace("cols",""))})),y=[],_=function(){var t=(0,s.QC)().reduce((function(t,e){return t[(0,f.wv)(e,"cols")]=(0,f.pi)(a.fE),t}),(0,u.Ue)(null));return y=(0,u.XP)(t),(0,f.y2)((0,u.GE)(h(h({},t),{},{alignContent:(0,f.pi)(a.N0,null,(function(t){return(0,o.kI)((0,o.zo)(b,"between","around","stretch"),t)})),alignH:(0,f.pi)(a.N0,null,(function(t){return(0,o.kI)((0,o.zo)(b,"between","around"),t)})),alignV:(0,f.pi)(a.N0,null,(function(t){return(0,o.kI)((0,o.zo)(b,"baseline","stretch"),t)})),noGutters:(0,f.pi)(a.U5,!1),tag:(0,f.pi)(a.N0,"div")})),i.tt)},O={name:i.tt,functional:!0,get props(){return delete this.props,this.props=_(),this.props},render:function(t,e){var n,i=e.props,a=e.data,o=e.children,s=i.alignV,c=i.alignH,l=i.alignContent,u=[];return y.forEach((function(t){var e=g(m(t),i[t]);e&&u.push(e)})),u.push((n={"no-gutters":i.noGutters},v(n,"align-items-".concat(s),s),v(n,"justify-content-".concat(c),c),v(n,"align-content-".concat(l),l),n)),t(i.tag,(0,r.b)(a,{staticClass:"row",class:u}),o)}}},5870:function(t,e,n){"use strict";n.d(e,{o:function(){return I}});var r=n(94689),i=n(43935),a=n(63294),o=n(11572),s=n(79968),c=n(13597),l=n(68265),u=n(33284),f=n(3058),d=n(93954),p=n(67040),h=n(40960);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m="__BV_Tooltip__",y="hover focus",_={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},O=/^html$/i,w=/^noninteractive$/i,k=/^nofade$/i,j=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,P=/^(window|viewport|scrollParent)$/i,C=/^d\d+$/i,x=/^ds\d+$/i,E=/^dh\d+$/i,B=/^o-?\d+$/i,S=/^v-.+$/i,$=/\s+/,D=function(t,e){var n={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:(0,s.wJ)(r.qv,"delay",50),boundary:String((0,s.wJ)(r.qv,"boundary","scrollParent")),boundaryPadding:(0,d.Z3)((0,s.wJ)(r.qv,"boundaryPadding",5),0),variant:(0,s.wJ)(r.qv,"variant"),customClass:(0,s.wJ)(r.qv,"customClass")};if((0,u.HD)(t.value)||(0,u.hj)(t.value)||(0,u.mf)(t.value)?n.title=t.value:(0,u.PO)(t.value)&&(n=b(b({},n),t.value)),(0,u.o8)(n.title)){var i=e.data||{};n.title=i.attrs&&!(0,u.Jp)(i.attrs.title)?i.attrs.title:void 0}(0,u.PO)(n.delay)||(n.delay={show:(0,d.Z3)(n.delay,0),hide:(0,d.Z3)(n.delay,0)}),t.arg&&(n.container="#".concat(t.arg)),(0,p.XP)(t.modifiers).forEach((function(t){if(O.test(t))n.html=!0;else if(w.test(t))n.interactive=!1;else if(k.test(t))n.animation=!1;else if(j.test(t))n.placement=t;else if(P.test(t))t="scrollparent"===t?"scrollParent":t,n.boundary=t;else if(C.test(t)){var e=(0,d.Z3)(t.slice(1),0);n.delay.show=e,n.delay.hide=e}else x.test(t)?n.delay.show=(0,d.Z3)(t.slice(2),0):E.test(t)?n.delay.hide=(0,d.Z3)(t.slice(2),0):B.test(t)?n.offset=(0,d.Z3)(t.slice(1),0):S.test(t)&&(n.variant=t.slice(2)||null)}));var a={};return(0,o.zo)(n.trigger||"").filter(l.y).join(" ").trim().toLowerCase().split($).forEach((function(t){_[t]&&(a[t]=!0)})),(0,p.XP)(t.modifiers).forEach((function(t){t=t.toLowerCase(),_[t]&&(a[t]=!0)})),n.trigger=(0,p.XP)(a).join(" "),"blur"===n.trigger&&(n.trigger="focus"),n.trigger||(n.trigger=y),n},N=function(t,e,n){if(i.Qg){var r=D(e,n);if(!t[m]){var o=n.context;t[m]=new h.j({parent:o,_scopeId:(0,c.P)(o,void 0)}),t[m].__bv_prev_data__={},t[m].$on(a.l0,(function(){(0,u.mf)(r.title)&&t[m].updateData({title:r.title(t)})}))}var s={title:r.title,triggers:r.trigger,placement:r.placement,fallbackPlacement:r.fallbackPlacement,variant:r.variant,customClass:r.customClass,container:r.container,boundary:r.boundary,delay:r.delay,offset:r.offset,noFade:!r.animation,id:r.id,interactive:r.interactive,disabled:r.disabled,html:r.html},l=t[m].__bv_prev_data__;if(t[m].__bv_prev_data__=s,!(0,f.W)(s,l)){var d={target:t};(0,p.XP)(s).forEach((function(e){s[e]!==l[e]&&(d[e]="title"===e&&(0,u.mf)(s[e])?s[e](t):s[e])})),t[m].updateData(d)}}},U=function(t){t[m]&&(t[m].$destroy(),t[m]=null),delete t[m]},I={bind:function(t,e,n){N(t,e,n)},componentUpdated:function(t,e,n){n.context.$nextTick((function(){N(t,e,n)}))},unbind:function(t){U(t)}}},82871:function(t,e,n){"use strict";n.d(e,{N:function(){return c},X:function(){return l}});var r=n(20144),i=n(12299),a=n(26410),o=n(20451),s="input, textarea, select",c=(0,o.y2)({autofocus:(0,o.pi)(i.U5,!1),disabled:(0,o.pi)(i.U5,!1),form:(0,o.pi)(i.N0),id:(0,o.pi)(i.N0),name:(0,o.pi)(i.N0),required:(0,o.pi)(i.U5,!1)},"formControls"),l=r["default"].extend({props:c,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){(0,a.bz)((function(){var e=t.$el;t.autofocus&&(0,a.pn)(e)&&((0,a.wB)(e,s)||(e=(0,a.Ys)(s,e)),(0,a.KS)(e))}))}))}}})},49035:function(t,e,n){"use strict";n.d(e,{N:function(){return o},j:function(){return s}});var r=n(20144),i=n(12299),a=n(20451),o=(0,a.y2)({size:(0,a.pi)(i.N0)},"formControls"),s=r["default"].extend({props:o,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},95505:function(t,e,n){"use strict";n.d(e,{J:function(){return c},N:function(){return s}});var r=n(20144),i=n(12299),a=n(33284),o=n(20451),s=(0,o.y2)({state:(0,o.pi)(i.U5,null)},"formState"),c=r["default"].extend({props:s,computed:{computedState:function(){return(0,a.jn)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=this.ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},82481:function(t,e,n){var r=n(82109),i=n(38415);r({target:"String",proto:!0},{repeat:i})}}]);
"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[2189],{52189:function(t,e,a){a.r(e),a.d(e,{default:function(){return L}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pingVals&&t.pingVals.length>0?a("b-card",{staticClass:"overflow-auto",attrs:{title:"❤️ Helping Ping.pub By Staking ❤️"}},[a("b-table",{attrs:{items:t.pingVals,fields:t.validator_fields,"sort-desc":!0,"sort-by":"tokens",striped:"",hover:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v(" "+t._s(e.index+1)+" ")]}},{key:"cell(description)",fn:function(e){return[a("b-media",{staticClass:"text-truncate",staticStyle:{"max-width":"320px"},attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[e.item.avatar?a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:e.item.description.details,expression:"data.item.description.details",modifiers:{hover:!0,right:!0}}],attrs:{size:"32",variant:"light-primary",src:e.item.avatar}}):t._e(),e.item.avatar?t._e():a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:e.item.description.details,expression:"data.item.description.details",modifiers:{hover:!0,right:!0}}]},[a("feather-icon",{attrs:{icon:"ServerIcon"}})],1)]},proxy:!0}],null,!0)},[a("span",{staticClass:"font-weight-bolder d-block text-nowrap"},[a("router-link",{attrs:{to:"./staking/"+e.item.operator_address}},[t._v(" "+t._s(e.item.description.moniker)+" ")])],1),a("small",{staticClass:"text-muted"},[t._v(t._s(e.item.description.website||e.item.description.identity))])])]}},{key:"cell(tokens)",fn:function(e){return[e.item.tokens>0?a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"font-weight-bold mb-0"},[t._v(t._s(t.tokenFormatter(e.item.tokens,t.stakingParameters.bond_denom)))]),a("span",{staticClass:"font-small-2 text-muted text-nowrap d-none d-lg-block"},[t._v(t._s(t.percent(e.item.tokens/t.stakingPool))+"%")])]):a("span",[t._v(t._s(e.item.delegator_shares))])]}},{key:"cell(changes)",fn:function(e){return[e.item.changes>0?a("small",{staticClass:"text-success"},[t._v("+"+t._s(e.item.changes))]):0===e.item.changes?a("small",[t._v("-")]):a("small",{staticClass:"text-danger"},[t._v(t._s(e.item.changes))])]}},{key:"cell(operation)",fn:function(e){return[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.operation-modal",modifiers:{"operation-modal":!0}}],attrs:{name:e.item.operator_address,variant:"primary",size:"sm"},on:{click:function(a){return t.selectValidator(e.item.operator_address)}}},[t._v(" Delegate ")])]}}],null,!1,1954446711)})],1):t._e(),a("b-card",{staticClass:"overflow-auto",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"d-flex justify-content-between"},[a("b-form-group",{staticClass:"mb-0"},[a("b-form-radio-group",{attrs:{id:"btn-radios-1","button-variant":"outline-primary",options:t.statusOptions,buttons:"",name:"radios-btn-default"},on:{change:t.getValidatorListByStatus},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),a("b-card-title",{staticClass:"d-none d-sm-block"},[a("span",[t._v("Validators "+t._s(t.validators.length)+"/"+t._s(t.stakingParameters.max_validators)+" ")])])],1),a("b-card-body",{staticClass:"pl-0 pr-0 pb-0"},[a("b-table",{staticClass:"mb-0",attrs:{items:t.list,fields:t.validator_fields,"sort-desc":!0,"sort-by":"tokens",striped:"",hover:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[a("b-badge",{attrs:{variant:t.rankBadge(e)}},[t._v(" "+t._s(e.index+1)+" ")])]}},{key:"cell(description)",fn:function(e){return[a("b-media",{staticClass:"text-truncate",staticStyle:{"max-width":"320px"},attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[e.item.avatar?a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:e.item.description.details,expression:"data.item.description.details",modifiers:{hover:!0,right:!0}}],attrs:{size:"32",variant:"light-primary",src:e.item.avatar}}):t._e(),e.item.avatar?t._e():a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:e.item.description.details,expression:"data.item.description.details",modifiers:{hover:!0,right:!0}}]},[a("feather-icon",{attrs:{icon:"ServerIcon"}})],1)]},proxy:!0}],null,!0)},[a("span",{staticClass:"font-weight-bolder d-block text-nowrap"},[a("router-link",{attrs:{to:"./staking/"+e.item.operator_address}},[t._v(" "+t._s(e.item.description.moniker)+" ")])],1),a("small",{staticClass:"text-muted"},[t._v(t._s(e.item.description.website||e.item.description.identity))])])]}},{key:"cell(tokens)",fn:function(e){return[e.item.tokens>0?a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"font-weight-bold mb-0"},[t._v(t._s(t.tokenFormatter(e.item.tokens,t.stakingParameters.bond_denom)))]),a("span",{staticClass:"font-small-2 text-muted text-nowrap d-none d-lg-block"},[t._v(t._s(t.percent(e.item.tokens/t.stakingPool))+"%")])]):a("span",[t._v(t._s(e.item.delegator_shares))])]}},{key:"cell(changes)",fn:function(e){return[e.item.changes>0?a("small",{staticClass:"text-success"},[t._v("+"+t._s(e.item.changes))]):0===e.item.changes?a("small",[t._v("-")]):a("small",{staticClass:"text-danger"},[t._v(t._s(e.item.changes))])]}},{key:"cell(operation)",fn:function(e){return[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.operation-modal",modifiers:{"operation-modal":!0}}],attrs:{name:e.item.operator_address,variant:"primary",size:"sm"},on:{click:function(a){return t.selectValidator(e.item.operator_address)}}},[t._v(" Delegate ")])]}}])})],1),a("b-card-footer",{staticClass:"d-none d-md-block d-md-flex justify-content-between"},[a("small",[a("b-badge",{attrs:{variant:"danger"}},[t._v("   ")]),t._v(" Top 33% "),a("b-badge",{attrs:{variant:"warning"}},[t._v("   ")]),t._v(" Top 67% of Voting Power ")],1),a("download-excel",{attrs:{fields:t.excelCols,data:t.list,type:"csv",worksheet:"Validators",name:"validators.xls"}},[a("b-button",{attrs:{variant:"primary",size:"sm"}},[t._v(" Export to Excel ")])],1)],1)],1),a("operation-modal",{attrs:{type:"Delegate","validator-address":t.validator_address}}),a("div",{attrs:{id:"txevent"}})],1)},i=[],n=(a(57327),a(41539),a(82526),a(41817),a(21249),a(47941),a(9653),a(54747),a(92222),a(69826),a(8775)),o=a(13170),s=a(72775),l=a(75200),d=a(26034),c=a(87047),u=a(49379),p=a(40670),f=a(15193),m=a(62135),h=a(54013),v=a(37674),g=a(5870),b=a(54333),y=a(8392),w=a(27036);"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof a.g?a.g:"undefined"!==typeof self&&self;function _(t,e){return e={exports:{}},t(e,e.exports),e.exports}var k=_((function(t,e){(function(e,a){t.exports=a()})(0,(function(){return function t(e,a,r){var i,n,o=window,s="application/octet-stream",l=r||s,d=e,c=!a&&!r&&d,u=document.createElement("a"),p=function(t){return String(t)},f=o.Blob||o.MozBlob||o.WebKitBlob||p,m=a||"download";if(f=f.call?f.bind(o):Blob,"true"===String(this)&&(d=[d,l],l=d[0],d=d[1]),c&&c.length<2048&&(m=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var h=new XMLHttpRequest;return h.open("GET",c,!0),h.responseType="blob",h.onload=function(e){t(e.target.response,m,s)},setTimeout((function(){h.send()}),0),h}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&f!==p))return navigator.msSaveBlob?navigator.msSaveBlob(y(d),m):w(d);d=y(d),l=d.type||s}else if(/([\x80-\xff])/.test(d)){var v=0,g=new Uint8Array(d.length),b=g.length;for(v;v<b;++v)g[v]=d.charCodeAt(v);d=new f([g],{type:l})}function y(t){var e=t.split(/[:;,]/),a=e[1],r="base64"==e[2]?atob:decodeURIComponent,i=r(e.pop()),n=i.length,o=0,s=new Uint8Array(n);for(o;o<n;++o)s[o]=i.charCodeAt(o);return new f([s],{type:a})}function w(t,e){if("download"in u)return u.href=t,u.setAttribute("download",m),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===e&&setTimeout((function(){o.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,s)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var a=document.createElement("iframe");document.body.appendChild(a),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,s)),a.src=t,setTimeout((function(){document.body.removeChild(a)}),333)}if(i=d instanceof f?d:new f([d],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(i,m);if(o.URL)w(o.URL.createObjectURL(i),!0);else{if("string"===typeof i||i.constructor===p)try{return w("data:"+l+";base64,"+o.btoa(i))}catch(_){return w("data:"+l+","+encodeURIComponent(i))}n=new FileReader,n.onload=function(t){w(this.result)},n.readAsDataURL(i)}return!0}}))})),x={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,default:()=>null},exportFields:{type:Object,default:()=>null},defaultValue:{type:String,required:!1,default:""},header:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:()=>[]},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function},escapeCsv:{type:Boolean,default:!0},stringifyLongNum:{type:Boolean,default:!1}},computed:{idName(){var t=(new Date).getTime();return"export_"+t},downloadFields(){return this.fields?this.fields:this.exportFields?this.exportFields:void 0}},methods:{async generate(){"function"===typeof this.beforeGenerate&&await this.beforeGenerate();let t=this.data;if("function"!==typeof this.fetch&&t||(t=await this.fetch()),!t||!t.length)return;let e=this.getProcessedJson(t,this.downloadFields);return"html"===this.type?this.export(this.jsonToXLS(e),this.name.replace(".xls",".html"),"text/html"):"csv"===this.type?this.export(this.jsonToCSV(e),this.name.replace(".xls",".csv"),"application/csv"):this.export(this.jsonToXLS(e),this.name,"application/vnd.ms-excel")},export:async function(t,e,a){let r=this.base64ToBlob(t,a);"function"===typeof this.beforeFinish&&await this.beforeFinish(),k(r,e,a)},jsonToXLS(t){let e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>',a="<thead>";const r=Object.keys(t[0]).length;let i=this;const n=this.header||this.$attrs.title;n&&(a+=this.parseExtraData(n,'<tr><th colspan="'+r+'">${data}</th></tr>')),a+="<tr>";for(let o in t[0])a+="<th>"+o+"</th>";return a+="</tr>",a+="</thead>",a+="<tbody>",t.map((function(t,e){a+="<tr>";for(let r in t)a+="<td>"+i.preprocessLongNum(i.valueReformattedForMultilines(t[r]))+"</td>";a+="</tr>"})),a+="</tbody>",null!=this.footer&&(a+="<tfoot>",a+=this.parseExtraData(this.footer,'<tr><td colspan="'+r+'">${data}</td></tr>'),a+="</tfoot>"),e.replace("${table}",a).replace("${worksheet}",this.worksheet)},jsonToCSV(t){let e=this;var a=[];const r=this.header||this.$attrs.title;r&&a.push(this.parseExtraData(r,"${data}\r\n"));for(let i in t[0])a.push(i),a.push(",");return a.pop(),a.push("\r\n"),t.map((function(t){for(let r in t){let i=t[r]+"";e.escapeCsv&&(i='="'+i+'"',i.match(/[,"\n]/)&&(i='"'+i.replace(/\"/g,'""')+'"')),a.push(i),a.push(",")}a.pop(),a.push("\r\n")})),null!=this.footer&&a.push(this.parseExtraData(this.footer,"${data}\r\n")),a.join("")},getProcessedJson(t,e){let a=this.getKeys(t,e),r=[],i=this;return t.map((function(t,e){let n={};for(let r in a){let e=a[r];n[r]=i.getValue(e,t)}r.push(n)})),r},getKeys(t,e){if(e)return e;let a={};for(let r in t[0])a[r]=r;return a},parseExtraData(t,e){let a="";if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&(a+=e.replace("${data}",t[r]));else a+=e.replace("${data}",t);return a},getValue(t,e){const a="object"!==typeof t?t:t.field;let r="string"!==typeof a?[]:a.split("."),i=this.defaultValue;return i=a?r.length>1?this.getValueFromNestedItem(e,r):this.parseValue(e[a]):e,t.hasOwnProperty("callback")&&(i=this.getValueFromCallback(i,t.callback)),i},valueReformattedForMultilines(t){return"string"==typeof t?t.replace(/\n/gi,"<br/>"):t},preprocessLongNum(t){if(this.stringifyLongNum){if(String(t).startsWith("0x"))return t;if(!isNaN(t)&&""!=t&&(t>99999999999||t<1e-13))return'="'+t+'"'}return t},getValueFromNestedItem(t,e){let a=t;for(let r of e)a&&(a=a[r]);return this.parseValue(a)},getValueFromCallback(t,e){if("function"!==typeof e)return this.defaultValue;const a=e(t);return this.parseValue(a)},parseValue(t){return t||0===t||"boolean"===typeof t?t:this.defaultValue},base64ToBlob(t,e){let a=window.btoa(window.unescape(encodeURIComponent(t))),r=atob(a),i=r.length,n=new Uint8ClampedArray(i);while(i--)n[i]=r.charCodeAt(i);return new Blob([n],{type:e})}}};function C(t,e,a,r,i,n,o,s,l,d){"boolean"!==typeof o&&(l=s,s=o,o=!1);var c,u="function"===typeof a?a.options:a;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),r&&(u._scopeId=r),n?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},u._ssrRegister=c):e&&(c=o?function(){e.call(this,d(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(u.functional){var p=u.render;u.render=function(t,e){return c.call(e),p(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return a}var P=C;const O=x;var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:t.idName},on:{click:t.generate}},[t._t("default",[t._v(" Download "+t._s(t.name)+" ")])],2)},B=[];S._withStripped=!0;const $=void 0,j=void 0,E=void 0,N=!1;var V=P({render:S,staticRenderFns:B},$,O,j,N,E,void 0,void 0),T=V,D={components:{BCard:n._,BTable:o.h,BMedia:s.P,BAvatar:l.SH,BBadge:d.k,BCardHeader:c.p,BCardTitle:u._,BCardBody:p.O,BButton:f.T,BFormRadioGroup:m.Q,BFormGroup:h.x,BCardFooter:v.F,OperationModal:w.Z,DownloadExcel:T},directives:{"b-tooltip":g.o},data:function(){var t=this;return{islive:!0,validator_address:null,mintInflation:0,stakingPool:1,stakingParameters:new b.StakingParameters,validators:[],delegations:[],changes:{},latestPower:{},previousPower:{},excelCols:{Validator:"description.moniker",Identity:"description.identity",Website:"description.website","Operator Address":"operator_address",Status:"status","Bonded Tokens":"tokens","Formated Bonded Tokens":{field:"tokens",callback:function(e){return t.tokenFormatter(e,t.stakingParameters.bond_denom)}},Percent:{field:"tokens",callback:function(e){return t.percent(e/t.stakingPool)}},"24h Changes":"changes","Unbonding Height":"unbonding_height","Unbonding Time":"unbonding_time"},validator_fields:[{key:"index",label:"#",tdClass:"d-none d-md-block",thClass:"d-none d-md-block"},{key:"description",label:"Validator"},{key:"tokens",label:"Voting Power",sortable:!0,tdClass:"text-right",thClass:"text-right",sortByFormatted:!0},{key:"changes",label:"24H Changes"},{key:"commission",formatter:function(t){return"".concat((0,b.percent)(t.rate),"%")},tdClass:"text-right",thClass:"text-right"},{key:"operation",label:"",tdClass:"text-right",thClass:"text-right"}],statusOptions:[{text:"Active",value:"active"},{text:"Inactive",value:"inactive"}],selectedStatus:"active",isInactiveLoaded:!1,inactiveValidators:[]}},computed:{pingVals:function(){return this.list.filter((function(t){return"6783E9F948541962"===t.description.identity}))},list:function(){var t=this,e="active"===this.selectedStatus?this.validators:this.inactiveValidators;return e.map((function(e){var a=e;if(Object.keys(t.latestPower).length>0&&Object.keys(t.previousPower).length>0){var r=t.latestPower[e.consensus_pubkey.key]||0,i=t.previousPower[e.consensus_pubkey.key]||0;a.changes=r-i}return a}))}},created:function(){var t=this;this.$http.getStakingPool().then((function(e){t.stakingPool=e.bondedToken})),this.$http.getStakingParameters().then((function(e){t.stakingParameters=e})),this.initial()},beforeDestroy:function(){this.islive=!1},mounted:function(){var t=this,e=document.getElementById("txevent");e.addEventListener("txcompleted",(function(){t.initial()}))},methods:{initial:function(){var t=this;this.$http.getValidatorList().then((function(e){for(var a=[],r=e,i=0;i<r.length;i+=1){var n=r[i].description.identity,o=t.$store.getters["chains/getAvatarById"](n);o?r[i].avatar=o:n&&""!==n&&a.push(n)}var s=Promise.resolve();a.forEach((function(e){s=s.then((function(){return new Promise((function(a){t.avatar(e,a)}))}))})),t.validators=r,t.getPreviousPower(t.validators.length)}))},getPreviousPower:function(t){var e=this;this.$http.getValidatorListByHeight("latest",0).then((function(a){var r=Number(a.block_height);r>14400?r-=14400:r=1,a.validators.forEach((function(t){e.$set(e.latestPower,t.pub_key.key,Number(t.voting_power))}));for(var i=100;i<t;i+=100)e.$http.getValidatorListByHeight("latest",i).then((function(t){t.validators.forEach((function(t){e.$set(e.latestPower,t.pub_key.key,Number(t.voting_power))}))}));for(var n=0;n<t;n+=100)e.$http.getValidatorListByHeight(r,n).then((function(t){t.validators.forEach((function(t){e.$set(e.previousPower,t.pub_key.key,Number(t.voting_power))}))}))}))},getValidatorListByStatus:function(){var t=this;if(!this.isInactiveLoaded){var e=["BOND_STATUS_UNBONDED","BOND_STATUS_UNBONDING"];e.forEach((function(e){t.$http.getValidatorListByStatus(e).then((function(e){for(var a=[],r=e,i=0;i<r.length;i+=1){var n=r[i].description.identity,o=t.$store.getters["chains/getAvatarById"](n);o?r[i].avatar=o:n&&""!==n&&a.push(n)}var s=Promise.resolve();a.forEach((function(e){s=s.then((function(){return new Promise((function(a){t.avatar(e,a)}))}))})),t.inactiveValidators=t.inactiveValidators.concat(e)}))})),this.isInactiveLoaded=!0}},selectValidator:function(t){this.validator_address=t},percent:b.percent,tokenFormatter:function(t,e){return(0,b.formatToken)({amount:t,denom:e},{},0)},rankBadge:function(t){if("inactive"===this.selectedStatus)return"primary";var e=t.index,a=t.item;0===e?window.sum=a.tokens:window.sum+=a.tokens;var r=window.sum/this.stakingPool;return r<.333?"danger":r<.67?"warning":"primary"},avatar:function(t,e){var a=this;this.islive&&(0,y.i)(t).then((function(r){if(e(),Array.isArray(r.them)&&r.them.length>0){var i=r.them[0].pictures;if(i){var n="active"===a.selectedStatus?a.validators:a.inactiveValidators,o=n.find((function(e){return e.description.identity===t}));a.$set(o,"avatar",i.primary.url),a.$store.commit("cacheAvatar",{identity:t,url:i.primary.url})}}}))}}},F=D,A=a(1001),U=(0,A.Z)(F,r,i,!1,null,null,null),L=U.exports},26034:function(t,e,a){a.d(e,{k:function(){return v}});var r=a(20144),i=a(69558),n=a(94689),o=a(12299),s=a(67040),l=a(20451),d=a(30488),c=a(67347);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m=(0,s.CE)(c.NQ,["event","routerTag"]);delete m.href.default,delete m.to.default;var h=(0,l.y2)((0,s.GE)(p(p({},m),{},{pill:(0,l.pi)(o.U5,!1),tag:(0,l.pi)(o.N0,"span"),variant:(0,l.pi)(o.N0,"secondary")})),n.dJ),v=r["default"].extend({name:n.dJ,functional:!0,props:h,render:function(t,e){var a=e.props,r=e.data,n=e.children,o=a.active,s=a.disabled,u=(0,d.u$)(a),p=u?c.we:a.tag,f=a.variant||"secondary";return t(p,(0,i.b)(r,{staticClass:"badge",class:["badge-".concat(f),{"badge-pill":a.pill,active:o,disabled:s}],props:u?(0,l.uj)(m,a):{}}),n)}})},87272:function(t,e,a){a.d(e,{D:function(){return c}});var r=a(20144),i=a(69558),n=a(94689),o=a(12299),s=a(20451);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d=(0,s.y2)({right:(0,s.pi)(o.U5,!1),tag:(0,s.pi)(o.N0,"div"),verticalAlign:(0,s.pi)(o.N0,"top")},n.u7),c=r["default"].extend({name:n.u7,functional:!0,props:d,render:function(t,e){var a=e.props,r=e.data,n=e.children,o=a.verticalAlign,s="top"===o?"start":"bottom"===o?"end":o;return t(a.tag,(0,i.b)(r,{staticClass:"media-aside",class:l({"media-aside-right":a.right},"align-self-".concat(s),s)}),n)}})},81843:function(t,e,a){a.d(e,{D:function(){return d}});var r=a(20144),i=a(69558),n=a(94689),o=a(12299),s=a(20451),l=(0,s.y2)({tag:(0,s.pi)(o.N0,"div")},n.Ub),d=r["default"].extend({name:n.Ub,functional:!0,props:l,render:function(t,e){var a=e.props,r=e.data,n=e.children;return t(a.tag,(0,i.b)(r,{staticClass:"media-body"}),n)}})},72775:function(t,e,a){a.d(e,{P:function(){return f}});var r=a(20144),i=a(69558),n=a(94689),o=a(12299),s=a(90494),l=a(72345),d=a(20451),c=a(87272),u=a(81843),p=(0,d.y2)({noBody:(0,d.pi)(o.U5,!1),rightAlign:(0,d.pi)(o.U5,!1),tag:(0,d.pi)(o.N0,"div"),verticalAlign:(0,d.pi)(o.N0,"top")},n.vF),f=r["default"].extend({name:n.vF,functional:!0,props:p,render:function(t,e){var a=e.props,r=e.data,n=e.slots,o=e.scopedSlots,d=e.children,p=a.noBody,f=a.rightAlign,m=a.verticalAlign,h=p?d:[];if(!p){var v={},g=n(),b=o||{};h.push(t(u.D,(0,l.O)(s.Pq,v,b,g)));var y=(0,l.O)(s.Q2,v,b,g);y&&h[f?"push":"unshift"](t(c.D,{props:{right:f,verticalAlign:m}},y))}return t(a.tag,(0,i.b)(r,{staticClass:"media"}),h)}})},5870:function(t,e,a){a.d(e,{o:function(){return D}});var r=a(94689),i=a(43935),n=a(63294),o=a(11572),s=a(79968),l=a(13597),d=a(68265),c=a(33284),u=a(3058),p=a(93954),f=a(67040),m=a(40960);function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){g(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b="__BV_Tooltip__",y="hover focus",w={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},_=/^html$/i,k=/^noninteractive$/i,x=/^nofade$/i,C=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,P=/^(window|viewport|scrollParent)$/i,O=/^d\d+$/i,S=/^ds\d+$/i,B=/^dh\d+$/i,$=/^o-?\d+$/i,j=/^v-.+$/i,E=/\s+/,N=function(t,e){var a={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:(0,s.wJ)(r.qv,"delay",50),boundary:String((0,s.wJ)(r.qv,"boundary","scrollParent")),boundaryPadding:(0,p.Z3)((0,s.wJ)(r.qv,"boundaryPadding",5),0),variant:(0,s.wJ)(r.qv,"variant"),customClass:(0,s.wJ)(r.qv,"customClass")};if((0,c.HD)(t.value)||(0,c.hj)(t.value)||(0,c.mf)(t.value)?a.title=t.value:(0,c.PO)(t.value)&&(a=v(v({},a),t.value)),(0,c.o8)(a.title)){var i=e.data||{};a.title=i.attrs&&!(0,c.Jp)(i.attrs.title)?i.attrs.title:void 0}(0,c.PO)(a.delay)||(a.delay={show:(0,p.Z3)(a.delay,0),hide:(0,p.Z3)(a.delay,0)}),t.arg&&(a.container="#".concat(t.arg)),(0,f.XP)(t.modifiers).forEach((function(t){if(_.test(t))a.html=!0;else if(k.test(t))a.interactive=!1;else if(x.test(t))a.animation=!1;else if(C.test(t))a.placement=t;else if(P.test(t))t="scrollparent"===t?"scrollParent":t,a.boundary=t;else if(O.test(t)){var e=(0,p.Z3)(t.slice(1),0);a.delay.show=e,a.delay.hide=e}else S.test(t)?a.delay.show=(0,p.Z3)(t.slice(2),0):B.test(t)?a.delay.hide=(0,p.Z3)(t.slice(2),0):$.test(t)?a.offset=(0,p.Z3)(t.slice(1),0):j.test(t)&&(a.variant=t.slice(2)||null)}));var n={};return(0,o.zo)(a.trigger||"").filter(d.y).join(" ").trim().toLowerCase().split(E).forEach((function(t){w[t]&&(n[t]=!0)})),(0,f.XP)(t.modifiers).forEach((function(t){t=t.toLowerCase(),w[t]&&(n[t]=!0)})),a.trigger=(0,f.XP)(n).join(" "),"blur"===a.trigger&&(a.trigger="focus"),a.trigger||(a.trigger=y),a},V=function(t,e,a){if(i.Qg){var r=N(e,a);if(!t[b]){var o=a.context;t[b]=new m.j({parent:o,_scopeId:(0,l.P)(o,void 0)}),t[b].__bv_prev_data__={},t[b].$on(n.l0,(function(){(0,c.mf)(r.title)&&t[b].updateData({title:r.title(t)})}))}var s={title:r.title,triggers:r.trigger,placement:r.placement,fallbackPlacement:r.fallbackPlacement,variant:r.variant,customClass:r.customClass,container:r.container,boundary:r.boundary,delay:r.delay,offset:r.offset,noFade:!r.animation,id:r.id,interactive:r.interactive,disabled:r.disabled,html:r.html},d=t[b].__bv_prev_data__;if(t[b].__bv_prev_data__=s,!(0,u.W)(s,d)){var p={target:t};(0,f.XP)(s).forEach((function(e){s[e]!==d[e]&&(p[e]="title"===e&&(0,c.mf)(s[e])?s[e](t):s[e])})),t[b].updateData(p)}}},T=function(t){t[b]&&(t[b].$destroy(),t[b]=null),delete t[b]},D={bind:function(t,e,a){V(t,e,a)},componentUpdated:function(t,e,a){a.context.$nextTick((function(){V(t,e,a)}))},unbind:function(t){T(t)}}}}]);
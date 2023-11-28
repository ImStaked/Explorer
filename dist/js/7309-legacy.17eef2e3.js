"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[7309],{16049:function(t,o,e){e.r(o),e.d(o,{default:function(){return D}});var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[t._v(" #"+t._s(t.proposal.id)+" "),1==t.proposal.status?e("b-badge",{staticClass:"text-right",attrs:{pill:"",variant:"light-info"}},[t._v(" Deposit ")]):t._e(),2==t.proposal.status?e("b-badge",{staticClass:"text-right",attrs:{pill:"",variant:"light-primary"}},[t._v(" Voting ")]):t._e(),3==t.proposal.status?e("b-badge",{staticClass:"text-right",attrs:{pill:"",variant:"light-success"}},[t._v(" Passed ")]):t._e(),4==t.proposal.status?e("b-badge",{staticClass:"text-right",attrs:{pill:"",variant:"light-danger"}},[t._v(" Rejected ")]):t._e(),t._v(" "+t._s(t.proposal.title)+" ")],1)],1),e("b-card-body",[e("b-table-simple",{attrs:{stacked:"sm",hover:"",striped:""}},[e("tbody",[e("b-tr",[e("b-td",{staticStyle:{"text-transform":"capitalize","vertical-align":"top",width:"200px"}},[t._v(" "+t._s(t.$t("proposal_proposer"))+" ")]),e("b-td",[e("router-link",{attrs:{to:"../account/"+t.proposer.proposer}},[t._v(" "+t._s(t.formatAddress(t.proposer.proposer))+" ")])],1)],1),e("b-tr",[e("b-td",[t._v(" "+t._s(t.$t("proposal_total_deposit"))+" ")]),e("b-td",[t._v(t._s(t.formatToken(t.proposal.total_deposit))+" ")])],1),e("b-tr",[e("b-td",[t._v(" "+t._s(t.$t("proposal_submit_time"))+" ")]),e("b-td",[t._v(t._s(t.formatDate(t.proposal.submit_time)))])],1),e("b-tr",[e("b-td",[t._v(" "+t._s(t.$t("voting_time"))+" ")]),e("b-td",[t._v(t._s(t.formatDate(t.proposal.voting_start_time))+" - "+t._s(t.formatDate(t.proposal.voting_end_time)))])],1)],1)]),e("div",[e("object-field-component",{attrs:{tablefield:t.proposal.contents,small:!1}})],1),t.proposal.type.indexOf("SoftwareUpgrade")>0?e("b-table-simple",[e("b-tr",[e("b-td",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("upgrade_time"))+" "+t._s(t.upgradeTime)+" "),e("flip-countdown",{attrs:{deadline:t.upgradeTime}})],1)],1)],1):t._e()],1),e("b-card-footer",[e("router-link",{attrs:{to:t.from}},[e("b-button",{attrs:{variant:"outline-primary"}},[t._v(" "+t._s(t.$t("btn_back_list"))+" ")])],1),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.operation-modal",modifiers:{"operation-modal":!0}}],staticClass:"btn float-right mg-2",attrs:{disabled:2!=t.proposal.status,variant:"primary"},on:{click:function(o){return t.openModal("Vote")}}},[t._v(" "+t._s(t.$t("btn_vote"))+" ")])],1)],1),e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[t._v(" Votes ")])],1),e("b-card-body",[e("b-progress",{staticClass:"mb-2",attrs:{max:100,height:"2rem","show-progress":""}},[e("b-progress-bar",{attrs:{id:"vote-yes"+t.proposal.id,variant:"success",value:t.percent(t.proposal.tally.yes),label:t.percent(t.proposal.tally.yes).toFixed()+"%","show-progress":""}}),e("b-progress-bar",{attrs:{id:"vote-no"+t.proposal.id,variant:"warning",value:t.percent(t.proposal.tally.no),label:t.percent(t.proposal.tally.no).toFixed()+"%","show-progress":""}}),e("b-progress-bar",{attrs:{id:"vote-veto"+t.proposal.id,variant:"danger",value:t.percent(t.proposal.tally.veto),label:t.percent(t.proposal.tally.veto).toFixed()+"%","show-progress":""}}),e("b-progress-bar",{attrs:{id:"vote-abstain"+t.proposal.id,variant:"info",value:t.percent(t.proposal.tally.abstain),label:t.percent(t.proposal.tally.abstain).toFixed()+"%","show-progress":""}})],1),e("b-tooltip",{attrs:{target:"vote-yes"+t.proposal.id}},[t._v(" "+t._s(t.percent(t.proposal.tally.yes))+"% voted Yes ")]),e("b-tooltip",{attrs:{target:"vote-no"+t.proposal.id}},[t._v(" "+t._s(t.percent(t.proposal.tally.no))+"% voted No ")]),e("b-tooltip",{attrs:{target:"vote-veto"+t.proposal.id}},[t._v(" "+t._s(t.percent(t.proposal.tally.veto))+"% voted No With Veto ")]),e("b-tooltip",{attrs:{target:"vote-abstain"+t.proposal.id}},[t._v(" "+t._s(t.percent(t.proposal.tally.abstain))+"% voted Abstain ")]),t.votes.votes&&t.votes.votes.length>0?e("b-table",{attrs:{stacked:"sm",fields:t.votes_fields,items:t.votes.votes,striped:""},scopedSlots:t._u([{key:"cell(voter)",fn:function(o){return[e("router-link",{attrs:{to:"../account/"+o.item.voter}},[t._v(" "+t._s(t.formatAddress(o.item.voter))+" ")])]}}],null,!1,2285669664)}):t._e(),t.next?e("div",{staticClass:"addzone text-center pt-50 pb-50 bg-transparent text-primary",on:{click:function(o){return t.loadVotes()}}},[e("feather-icon",{attrs:{icon:"PlusIcon"}}),t._v(" Load More Votes ")],1):t._e()],1)],1),t.proposal.total_deposit?e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[t._v(" Deposits ("+t._s(t.formatToken(t.proposal.total_deposit))+") ")])],1),e("b-card-body",[Array.isArray(t.deposits.deposits||t.deposits)?e("b-table",{attrs:{stacked:"sm",items:t.deposits.deposits||t.deposits,fields:t.deposit_fields,striped:""},scopedSlots:t._u([{key:"cell(depositor)",fn:function(o){return[e("router-link",{attrs:{to:"../account/"+o.item.depositor}},[t._v(" "+t._s(t.formatAddress(o.item.depositor))+" ")])]}}],null,!1,2408756791)}):t._e()],1),e("b-card-footer",[e("router-link",{attrs:{to:t.from}},[e("b-button",{attrs:{variant:"outline-primary"}},[t._v(" "+t._s(t.$t("btn_back_list"))+" ")])],1),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.operation-modal",modifiers:{"operation-modal":!0}}],staticClass:"btn float-right mg-2",attrs:{disabled:1!=t.proposal.status,variant:"primary"},on:{click:function(o){return t.openModal("GovDeposit")}}},[t._v(" "+t._s(t.$t("btn_deposit"))+" ")]),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.operation-modal",modifiers:{"operation-modal":!0}}],staticClass:"btn float-right mg-2 mr-1",attrs:{disabled:2!=t.proposal.status,variant:"primary"},on:{click:function(o){return t.openModal("Vote")}}},[t._v(" "+t._s(t.$t("btn_vote"))+" ")])],1)],1):t._e(),e("operation-modal",{attrs:{type:t.operationModalType,"proposal-id":Number(t.proposal.id),"proposal-title":t.proposal.title}})],1)},r=[],s=(e(9653),e(92222),e(8775)),i=e(49379),n=e(40670),l=e(37674),p=e(15193),d=e(13170),c=e(85589),u=e(87047),b=e(92095),v=e(66456),m=e(22981),_=e(45752),f=e(18365),h=e(26034),g=e(65167),y=e.n(g),k=e(54333),T=e(19186),x=e(27484),$=e.n(x),w=e(27036),B=e(74551),O={components:{BCard:s._,BCardTitle:i._,BCardBody:n.O,BCardFooter:l.F,BButton:p.T,BTable:d.h,BTableSimple:c.t,BCardHeader:u.p,BTr:b.G,BTd:v.S,BProgressBar:m.Q,BProgress:_.D,BTooltip:f.T,BBadge:h.k,ObjectFieldComponent:B.Z,FlipCountdown:y(),OperationModal:w.Z},data:function(){var t=this;return{latest:{},next:null,proposal:new T.rU,proposer:new T.cO,deposits:[],votes:[],operationModalType:"",from:"../gov",votes_fields:[{key:"voter",sortable:!0,formatter:function(o){return t.formatAddress(o)}},{key:"option",sortable:!0,formatter:function(t){switch(t){case 1:case"VOTE_OPTION_YES":return"Yes";case 2:case"VOTE_OPTION_ABSTAIN":return"Abstain";case 3:case"VOTE_OPTION_NO":return"No";case 4:case"VOTE_OPTION_NO_WITH_VETO":return"No With Veto";default:return t}}}],deposit_fields:[{key:"depositor",formatter:function(o){return t.formatAddress(o)}},{key:"amount",sortable:!0,formatter:k.tokenFormatter}]}},computed:{upgradeTime:function(){if(this.proposal.type.indexOf("SoftwareUpgrade")>0){var t,o;if(Number((null===(t=this.proposal)||void 0===t?void 0:t.contents.plan.height)||0)>0&&null!==(o=this.latest)&&void 0!==o&&o.block){var e,a,r=Number(this.proposal.contents.plan.height)-Number((null===(e=this.latest.block)||void 0===e||null===(a=e.header)||void 0===a?void 0:a.height)||0);if(r>0){var s=$()().add(6*r,"second").format("YYYY-MM-DD HH:mm:ss");return s}}return $()(this.proposal.contents.plan.time).format("YYYY-MM-DD HH:mm:ss")}return"0001-01-01 00:00:00"}},created:function(){var t=this,o=this.$route.params.proposalid;this.$route.query.from&&(this.from=this.$route.query.from),this.$http.getLatestBlock().then((function(o){t.latest=o})),this.$http.getGovernance(o).then((function(e){2===e.status&&t.$http.getGovernanceTally(o,0).then((function(t){return e.updateTally(t)})),t.proposal=e})),(0,k.getCachedValidators)()||this.$http.getValidatorList(),this.$http.getGovernanceProposer(o).then((function(o){t.proposer=o})),this.$http.getGovernanceDeposits(o).then((function(o){t.deposits=o})).catch((function(){})),this.$http.getGovernanceVotes(o).then((function(o){t.votes=o,t.next=o.pagination?o.pagination.next_key:null}))},methods:{percent:function(t){return(0,k.percent)(t)},formatDate:function(t){return $()(t).format("YYYY-MM-DD HH:mm")},formatToken:function(t){return(0,k.tokenFormatter)(t,{})},loadVotes:function(){var t=this;if(this.next){var o=this.$route.params.proposalid,e=this.next;this.next=null,this.$http.getGovernanceVotes(o,e).then((function(o){t.$set(t.votes,"votes",t.votes.votes.concat(o.votes)),t.next=o.pagination?o.pagination.next_key:null}))}},formatAddress:function(t){return(0,k.getStakingValidatorByAccount)(this.$http.config.chain_name,t)},openModal:function(t){this.operationModalType=t}}},C=O,V=e(1001),N=(0,V.Z)(C,a,r,!1,null,null,null),D=N.exports}}]);
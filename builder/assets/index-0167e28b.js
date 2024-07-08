import{p as Lt,k as e,F as j,n as A,q as We,o as c,aE as He,B as W,aR as je,aS as Xe,av as qe,aT as Ut,aC as Ye,ae as Je,aA as Qe,aU as Ze,aV as Re,v as et,C as Et,aW as Pt}from"./@illa-design-1f43bb6c.js";import{y as Mt,b as Ae,n as tt,z as at,u as nt,B as ke,q as L,e as it,C as ie,t as p,E as d,a as h,F as Ie,G as ot,W as st,o as Ne,p as De,s as Le,H as Ue,J as rt,K as lt,L as ct,U,A as Ee,M as xe,N as dt,d as Pe,O as mt,P as H,Q as gt,R as pt,T as ut,V as ht,X as E,c as ft,Y as Gt,Z as Fe,_ as Bt,$ as $t,a0 as Ft,a1 as Kt,a2 as Vt,a3 as Ot,a4 as Ke}from"./index-4dce6ee8.js";import{k as yt,r as m,u as At,l as It,m as zt,n as Wt,o as Ht,h as jt,A as Xt}from"./react-9b7e00e3.js";import{u as xt,A as P,C as vt,R as Ct,a as St,P as bt,S as qt,b as Yt,c as Jt}from"./index-e07922b0.js";import{u as wt,a as _t,C as g,S as Qt,c as ve,b as Zt}from"./style-af69883e.js";import{u as Tt}from"./hook-302a78fc.js";import{a as o}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./TableRow-dbb49295.js";import"./clsx-06f54762.js";import"./TableCell-49376b6a.js";import"./index-2fdfc937.js";import"./drive-584d85d3.js";const ea=t=>{const{desktopPage:X,mobilePage:y}=t,{width:I}=Lt(),x=Mt(I);return e(j,{children:x?y:X})},ta=o`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,aa=o`
  padding: 24px;
  border-top: 1px solid ${A("grayBlue","08")};
  display: flex;
  flex-direction: row;
  align-items: center;
`,na=o`
  color: ${A("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`,ia=o`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  & svg {
    height: 100%;
    width: 100%;
  }
`,oa=o`
  display: flex;
  width: 100%;
  gap: 4px;
  flex-direction: row;
  align-items: center;
`,sa=o`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 12px;
  padding-left: 20px;
  padding-right: 20px;
`,ra=o`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,la=o`
  height: 100%;
  width: 100%;
  overflow: hidden;
`,ca=o`
  width: 40px;
  margin-right: 12px;
  height: 40px;
  border-radius: 8px;
`,ye=o`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`,da=o`
  display: flex;
  padding-right: 16px;
  padding-top: 12px;
  align-items: center;
  padding-bottom: 12px;
  flex-direction: row;
`,ma=o`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  flex-grow: 1;
  flex-shrink: 1;
`,ga=o`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`,pa=o`
  color: ${A("grayBlue","02")};
  font-size: 12px;
  font-style: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-shrink: 1;
  font-weight: 400;
  line-height: 15px;
`,ua=o`
  font-size: 14px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
`,ha=o`
  color: ${A("grayBlue","03")};
  font-size: 12px;
  margin-left: 8px;
  white-space: nowrap;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  text-overflow: ellipsis;
`,fa=o`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  padding-bottom: 40px;
`,ya=o`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`,Aa=o`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  flex-direction: row;
`,Ia=o`
  width: 65px;
  flex-shrink: 1;
`,Ve=o`
  display: inline-flex;
  padding-top: 5px;
  flex-direction: column;
`,Oe=o`
  color: ${A("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-transform: capitalize;
`,ze=o`
  width: 100%;
  margin-top: 3px;
  height: 2px;
  background: ${A("grayBlue","02")};
`,Rt=()=>{var ne,ue,$;const{agent:t,marketplace:X}=yt(),[y,I]=m.useState(X),{control:x,handleSubmit:v,getValues:C,reset:S}=wt({mode:"onSubmit",defaultValues:t}),l=Ae(tt),{isDirty:oe,isValid:Ce}=_t({control:x}),M=We(),i=Tt(),[k,F]=m.useState(!1),[R,Se]=m.useState(!1),[q,se]=m.useState(!1),[K,Y]=m.useState(((ne=y==null?void 0:y.marketplace)==null?void 0:ne.isStarredByCurrentUser)??!1),[be,J]=m.useState(!1),[re,le]=m.useState([]),[V,ce]=m.useState(!1),we=Ae(at),[N,Q]=m.useState((y==null?void 0:y.marketplace.numStars)??0),{ownerTeamIdentifier:Z,agentID:D}=At(),[de]=It(),{t:u}=nt(),[G,O]=m.useState("config"),z=ke(l==null?void 0:l.myRole,L(l),(ue=l==null?void 0:l.totalTeamLicense)==null?void 0:ue.teamLicensePurchased,($=l==null?void 0:l.totalTeamLicense)==null?void 0:$.teamLicenseAllPaid),me=z||C("publishedToMarketplace"),ee=it(),{sendMessage:B,generationMessage:te,chatMessages:ge,reconnect:pe,connect:f}=xt({onSendClean:()=>{B({},E.CLEAN,C("agentType"),"clean",!1)},onStartRunning:()=>{},onConnecting:n=>{Se(n)},onReceiving:n=>{ce(n)},onRunning:n=>{F(n)},onSendPrompt(){B({threadID:et(),prompt:C("prompt"),variables:C("variables"),modelConfig:C("modelConfig"),model:C("model"),actionID:C("aiAgentID"),agentType:C("agentType")},E.RUN,C("agentType"),"chat",!1)},onUpdateRoomUsers(n){le(n)}}),ae=e(g,{control:x,name:"publishedToMarketplace",render:({field:n})=>e(dt,{basicTrack:p,pageName:d.AI_AGENT_RUN,children:q&&e(Qt,{canUseBillingFeature:z,itemID:t.aiAgentID,title:u("user_management.modal.social_media.default_text.agent",{agentName:t.name}),redirectURL:`${Pe(window.customDomain)}/${Z}/ai-agent/${t.aiAgentID}/run?myTeamIdentifier=${de.get("myTeamIdentifier")}`,onClose:()=>{se(!1)},canInvite:mt(l.myRole,l.permission.allowEditorManageTeamMember,l.permission.allowViewerManageTeamMember),defaultInviteUserRole:U.VIEWER,teamID:l.id,currentUserRole:l.myRole,defaultBalance:l.currentTeamLicense.balance,defaultAllowInviteLink:l.permission.inviteLinkEnabled,onInviteLinkStateChange:s=>{ee(H.updateTeamMemberPermissionReducer({teamID:l.id,newPermission:{...l.permission,inviteLinkEnabled:s}}))},agentID:t.aiAgentID,defaultAgentContributed:n.value,onAgentContributed:async s=>{if(s){const w=await gt(t.aiAgentID);I(w.data);const T=new URL(pt(w.data.aiAgent.aiAgentID));T.searchParams.set("token",ut()),window.open(T,"_blank")}else I(void 0);n.onChange(s)},onCopyInviteLink:s=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"share_modal_copy_team",parameter5:t.aiAgentID}),ve(u("user_management.modal.custom_copy_text_agent_invite",{userName:we.nickname,teamName:l.name,inviteLink:s}))},onCopyAgentMarketLink:s=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"share_modal_link",parameter5:t.aiAgentID}),ve(u("user_management.modal.contribute.default_text.agent",{agentName:t.name,agentLink:s}))},userRoleForThisAgent:l.id===t.teamID?l.myRole:U.GUEST,ownerTeamID:t.teamID,onBalanceChange:s=>{ee(H.updateTeamMemberSubscribeReducer({teamID:l.id,subscribeInfo:{...l.currentTeamLicense,balance:s}}))},teamPlan:L(l),onShare:s=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"share_modal_social_media",parameter4:s,parameter5:t.aiAgentID})},onInvitedChange:s=>{const w=s.map(T=>({...T,userID:"",nickname:"",avatar:"",userStatus:ht.PENDING,permission:{},createdAt:"",updatedAt:""}));ee(H.updateInvitedUserReducer(w))}})})}),_e=c("div",{css:ya,children:[c("div",{css:fa,children:[e(g,{name:"agentType",control:x,shouldUnregister:!1,render:({field:n})=>e(P,{title:u("editor.ai-agent.label.mode"),tips:u("editor.ai-agent.tips.mode"),children:e(He,{value:n.value,colorScheme:A("grayBlue","02"),type:"button",w:"100%",disp:"flex",forceEqualWidth:!0,options:[{value:ie.CHAT,label:u("editor.ai-agent.option.mode.chat")},{value:ie.TEXT_GENERATION,label:u("editor.ai-agent.option.mode.text")}],onChange:s=>{if(V||R){M.info({content:u("editor.ai-agent.message.generating")});return}p(h.CLICK,d.AI_AGENT_RUN,{element:"mode_radio_button",parameter1:s,parameter5:t.aiAgentID}),n.onChange(s)}})})}),e(g,{name:"prompt",control:x,shouldUnregister:!1,render:({field:n})=>e(g,{name:"variables",control:x,render:({field:s})=>e(P,{title:"Prompt",children:e(vt,{...n,editable:!1,completionOptions:s.value})})})}),e(g,{name:"variables",control:x,rules:{validate:n=>n.every(s=>s.key!==""&&s.value!=="")||n.length===1&&n[0].key===""&&n[0].value===""},shouldUnregister:!1,render:({field:n})=>n.value.length>0?e(P,{title:u("editor.ai-agent.label.variable"),children:e(Ct,{fillOnly:!0,records:n.value,onChangeKey:(s,w)=>{const T=[...n.value];T[s].key=w,n.onChange(T)},onChangeValue:(s,w,T)=>{const he=[...n.value];he[s].value=T,n.onChange(he)},onAdd:()=>{},onDelete:()=>{},label:""})}):e(j,{})}),e(g,{name:"model",control:x,render:({field:n})=>{var s,w;return e(P,{title:u("editor.ai-agent.label.model"),children:c("div",{css:oa,children:[e("span",{css:ia,children:(s=Ie(n.value))==null?void 0:s.logo}),e("span",{css:na,children:(w=Ie(n.value))==null?void 0:w.name})]})})}})]}),e("form",{onSubmit:v(async n=>{if(ot(n.model)&&!z){i({modalType:"agent",from:"agent_run_gpt4"});return}S(n),O("run"),p(h.CLICK,d.AI_AGENT_RUN,{element:k?"restart":"start",parameter1:n.agentType===1?"chat":"text",parameter5:t.aiAgentID}),k?await pe(n.aiAgentID,n.agentType):await f(n.aiAgentID,n.agentType)}),children:e("div",{css:aa,children:e(W,{flex:"1",disabled:!Ce,size:"large",loading:R,ml:"8px",colorScheme:A("grayBlue","02"),leftIcon:k?e(je,{}):e(Xe,{}),children:u(k?"editor.ai-agent.restart":"editor.ai-agent.start")})})})]}),Te=e(g,{name:"agentType",control:x,shouldUnregister:!1,render:({field:n})=>e("div",{css:la,children:e(bt,{editState:"RUN",showEditPanel:!1,showShareDialog:!1,showContributeDialog:!1,isConnecting:R,isRunning:k,hasCreated:!0,isMobile:!0,agentType:n.value,model:C("model"),chatMessages:ge,generationMessage:te,isReceiving:V,blockInput:!k||oe,onSendMessage:(s,w)=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"send",parameter5:t.aiAgentID}),B({threadID:s.threadID,prompt:s.message,actionID:C("aiAgentID"),variables:[],modelConfig:C("modelConfig"),model:C("model"),agentType:C("agentType")},E.RUN,w,"chat",!0,s)},onCancelReceiving:()=>{B({},E.STOP_ALL,n.value,"stop_all",!1),ce(!1)}})})});return m.useEffect(()=>{me&&p(h.SHOW,d.AI_AGENT_RUN,{element:"invite_entry"})},[me]),c(j,{children:[e(st,{children:e("title",{children:t.name})}),e(St.Provider,{value:{inRoomUsers:re},children:c("div",{css:ta,children:[c("div",{css:ra,children:[e(g,{name:"publishedToMarketplace",control:x,render:({field:n})=>c("div",{css:da,children:[e("div",{css:ye,onClick:()=>{const s=ft(window.customDomain);return document.referrer.includes(s)?location.href=`${s}/workspace/${Z}/ai-agents`:document.referrer.includes({}.ILLA_MARKET_URL)&&D?location.href=`${{}.ILLA_MARKET_URL}/ai-agent/${D}/detail`:location.href=s},children:e(qe,{fs:"24px"})}),e("div",{style:{flexGrow:1}}),n.value&&Ne(l.myRole,Le.AI_AGENT,L(l),De.FORK_AI_AGENT)&&e("div",{css:ye,onClick:async()=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"fork",parameter5:t.aiAgentID}),J(!0);try{await Ue(t.aiAgentID),M.success({content:u("dashboard.message.mobile-fork-suc")})}catch{M.error({content:u("dashboard.message.fork-failed")})}finally{J(!1)}},children:be?e(Ut,{spin:!0,fs:"24px"}):e(Ye,{fs:"24px"})}),n.value&&e("div",{css:ye,onClick:async()=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"star",parameter5:t.aiAgentID});const s=K;Y(!K);try{K?(await rt(t.aiAgentID),N>0&&Q(N-1)):(await lt(t.aiAgentID),Q(N+1))}catch{Y(s),M.error({content:u("dashboard.message.star-failed")})}},children:K?e(Je,{c:"#FFBB38",fs:"24px"}):e(Qe,{fs:"24px"})}),(z||n.value)&&e("div",{css:ye,onClick:()=>{if(p(h.CLICK,d.AI_AGENT_RUN,{element:"invite_entry",parameter5:t.aiAgentID}),!ct(l,l.id===t.teamID?l.myRole:U.GUEST,n.value)){i({modalType:"upgrade",from:"agent_run_share"});return}se(!0),p(h.SHOW,d.AI_AGENT_RUN,{element:"share_modal",parameter5:t.aiAgentID})},children:e(Ze,{fs:"24px"})})]})}),c("div",{css:sa,children:[e(g,{name:"icon",control:x,render:({field:n})=>e(Ee,{css:ca,avatarUrl:n.value})}),c("div",{css:ma,children:[e(g,{name:"name",control:x,render:({field:n})=>e("div",{css:ua,children:n.value})}),c("div",{css:ga,children:[e("div",{css:pa,children:t.teamName}),t.publishedToMarketplace&&c("div",{css:ha,children:[N>0&&c("span",{children:[u("marketplace.star"),xe(N)]}),N>0&&((y==null?void 0:y.marketplace.numForks)??0)>0&&e("span",{children:" · "}),((y==null?void 0:y.marketplace.numForks)??0)>0&&c("span",{children:[u("marketplace.fork"),xe((y==null?void 0:y.marketplace.numForks)??0)]})]})]})]})]}),e(g,{name:"agentType",control:x,render:({field:n})=>c("div",{css:Aa,children:[c("div",{css:Ve,onClick:()=>{O("config")},children:[e("div",{css:Oe,children:u("editor.ai-agent.tab.prompt")}),G==="config"&&e(Re.div,{css:ze,layoutId:"underline"})]}),e("div",{css:Ia}),c("div",{css:Ve,onClick:()=>{if(!k||oe){M.info({content:u("editor.ai-agent.message.click-start")});return}O("run")},children:[e("div",{css:Oe,children:n.value===ie.CHAT?u("editor.ai-agent.tab.chat"):u("editor.ai-agent.tab.text")}),G==="run"&&e(Re.div,{css:ze,layoutId:"underline"})]})]})})]}),G==="run"&&Te,G==="config"&&_e,ae]})})]})};Rt.displayName="AIAgentRunMobile";const xa=o`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`,va=o`
  height: 100%;
  width: 528px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: 4px 0 16px 0 rgba(0, 0, 0, 0.06);
  flex: none;
  ${Gt(o`
    display: none;
  `)}
`,Ca=o`
  height: 100%;
  display: flex;
  overflow-y: auto;
  flex-grow: 1;
  flex-direction: column;
`,Sa=o`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-bottom: 1px solid ${A("grayBlue","08")};
`,ba=o`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
  flex-grow: 1;
`,wa=o`
  display: inline-block;
  color: ${A("grayBlue","02")};
  font-size: 14px;
  margin-left: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,_a=o`
  color: ${A("grayBlue","02")};
  display: flex;
  width: 24px;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`,Ta=o`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ra=o`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  & svg {
    height: 100%;
    width: 100%;
  }
`,ka=o`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`,Na=o`
  color: ${A("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`,Da=o`
  color: ${A("grayBlue","02")};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 16px;
  line-height: 24px;
`,La=o`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`,Ua=o`
  color: ${A("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  white-space: pre-wrap;
  word-break: break-word;
  font-weight: 400;
  margin-top: 24px;
  line-height: 22px;
`,Ea=o`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`,Pa=o`
  width: 24px;
  height: 24px;
`,Ma=o`
  display: inline-flex;
  flex-direction: row;
  margin-top: 24px;
`,Ga=o`
  padding: 24px;
  border-top: 1px solid ${A("grayBlue","08")};
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ba=o`
  color: ${A("grayBlue","02")};
  margin-left: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,$a=o`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  padding-bottom: 40px;
`,kt=()=>{var Me,Ge,Be;const{agent:t,marketplace:X}=yt(),y=zt(),[I,x]=m.useState(X),{control:v,handleSubmit:C,getValues:S,reset:l}=wt({mode:"onSubmit",defaultValues:t}),oe=m.useRef(null),{isDirty:Ce,isValid:M}=_t({control:v}),i=Ae(tt),k=Ae(at),F=We(),[R,Se]=m.useState(!1),[q,se]=m.useState(!1),[K,Y]=m.useState(!1),[be,J]=m.useState(!1),[re,le]=m.useState(!1),[V,ce]=m.useState(((Me=I==null?void 0:I.marketplace)==null?void 0:Me.isStarredByCurrentUser)??!1),[we,N]=m.useState([]),[Q,Z]=m.useState(!1),[D,de]=m.useState((I==null?void 0:I.marketplace.numStars)??0),u=Tt(),{ownerTeamIdentifier:G,agentID:O}=At(),[z]=It(),me=ke(i==null?void 0:i.myRole,L(i),(Ge=i==null?void 0:i.totalTeamLicense)==null?void 0:Ge.teamLicensePurchased,(Be=i==null?void 0:i.totalTeamLicense)==null?void 0:Be.teamLicenseAllPaid),[ee,B]=m.useState(!1),te=Fe(i,t.teamID===i.id?i.myRole:U.GUEST,S("publishedToMarketplace")),[ge,pe]=m.useState(!0),{t:f}=nt(),ae=it(),_e=()=>{pe(!1)},Te=()=>{const a=ft(window.customDomain);return document.referrer.includes(a)?location.href=`${a}/workspace/${G}/ai-agents`:document.referrer.includes({}.ILLA_MARKET_URL)&&O?location.href=`${{}.ILLA_MARKET_URL}/ai-agent/${O}/detail`:location.href=a},ne=C(async a=>{if(ot(a.model)&&!me){u({modalType:"agent",from:"agent_run_gpt4"});return}l(a),p(h.CLICK,d.AI_AGENT_RUN,{element:R?"restart":"start",parameter1:a.agentType===1?"chat":"text",parameter5:t.aiAgentID}),R?await w(a.aiAgentID,a.agentType):await T(a.aiAgentID,a.agentType)}),ue=e(g,{control:v,name:"publishedToMarketplace",render:({field:a})=>e(dt,{basicTrack:p,pageName:d.AI_AGENT_RUN,children:K&&e(Zt,{itemID:t.aiAgentID,onInvitedChange:r=>{const b=r.map(_=>({..._,userID:"",nickname:"",avatar:"",userStatus:ht.PENDING,permission:{},createdAt:"",updatedAt:""}));ae(H.updateInvitedUserReducer(b))},canUseBillingFeature:ke(i.myRole,L(i),i.totalTeamLicense.teamLicensePurchased,i.totalTeamLicense.teamLicenseAllPaid),title:f("user_management.modal.social_media.default_text.agent",{agentName:t.name}),redirectURL:`${Pe(window.customDomain)}/${G}/ai-agent/${t.aiAgentID}/run?myTeamIdentifier=${z.get("myTeamIdentifier")}`,onClose:()=>{Y(!1)},canInvite:mt(i.myRole,i.permission.allowEditorManageTeamMember,i.permission.allowViewerManageTeamMember),defaultInviteUserRole:U.VIEWER,teamID:i.id,currentUserRole:i.myRole,defaultBalance:i.currentTeamLicense.balance,defaultAllowInviteLink:i.permission.inviteLinkEnabled,onInviteLinkStateChange:r=>{ae(H.updateTeamMemberPermissionReducer({teamID:i.id,newPermission:{...i.permission,inviteLinkEnabled:r}}))},agentID:t.aiAgentID,defaultAgentContributed:a.value,onAgentContributed:async r=>{if(r){const b=await gt(t.aiAgentID);x(b.data);const _=new URL(pt(b.data.aiAgent.aiAgentID));_.searchParams.set("token",ut()),window.open(_,"_blank")}else x(void 0);a.onChange(r)},onCopyInviteLink:r=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"share_modal_copy_team",parameter5:t.aiAgentID}),ve(f("user_management.modal.custom_copy_text_agent_invite",{userName:k.nickname,teamName:i.name,inviteLink:r}))},onCopyAgentMarketLink:r=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"share_modal_link",parameter5:t.aiAgentID}),ve(f("user_management.modal.contribute.default_text.agent",{agentName:t.name,agentLink:r}))},userRoleForThisAgent:i.id===t.teamID?i.myRole:U.GUEST,ownerTeamID:t.teamID,onBalanceChange:r=>{ae(H.updateTeamMemberSubscribeReducer({teamID:i.id,subscribeInfo:{...i.currentTeamLicense,balance:r}}))},teamPlan:L(i),onShare:r=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"share_modal_social_media",parameter4:r,parameter5:t.aiAgentID})}})})}),{sendMessage:$,generationMessage:n,chatMessages:s,reconnect:w,connect:T}=xt({onSendClean:()=>{$({},E.CLEAN,S("agentType"),"clean",!1)},onStartRunning:()=>{},onConnecting:a=>{se(a)},onReceiving:a=>{Z(a)},onRunning:a=>{Se(a)},onSendPrompt(){$({threadID:et(),prompt:S("prompt"),variables:S("variables"),modelConfig:S("modelConfig"),model:S("model"),actionID:S("aiAgentID"),agentType:S("agentType")},E.RUN,S("agentType"),"chat",!1)},onUpdateRoomUsers(a){N(a)}});m.useEffect(()=>{te&&p(h.SHOW,d.AI_AGENT_RUN,{element:"invite_entry"})},[te]);const he=e(g,{control:v,name:"publishedToMarketplace",render:({field:a})=>c("div",{css:Ma,children:[te&&e(W,{colorScheme:"grayBlue",leftIcon:e(Ze,{}),onClick:()=>{if(p(h.CLICK,d.AI_AGENT_RUN,{element:"invite_entry",parameter5:t.aiAgentID}),!ct(i,i.id===t.teamID?i.myRole:U.GUEST,a.value)){u({modalType:"upgrade",from:"agent_run_share"});return}Y(!0),p(h.SHOW,d.AI_AGENT_RUN,{element:"share_modal",parameter5:t.aiAgentID})},children:f("share")}),a.value&&c(W,{ml:"8px",colorScheme:"grayBlue",onClick:async()=>{J(!0),p(h.CLICK,d.AI_AGENT_RUN,{element:"star",parameter5:t.aiAgentID});try{V?(await rt(t.aiAgentID),D>0&&de(D-1)):(await lt(t.aiAgentID),de(D+1)),ce(!V)}catch{F.error({content:f("dashboard.message.star-failed")})}finally{J(!1)}},loading:be,leftIcon:V?e(Je,{c:"#FFBB38"}):e(Qe,{}),children:[e("span",{children:f("marketplace.star")}),D>0&&c("span",{children:[" ",xe(D)]})]}),Ne(i.myRole,Le.AI_AGENT,L(i),De.FORK_AI_AGENT)&&a.value&&c(W,{ml:"8px",colorScheme:"grayBlue",loading:re,leftIcon:e(Ye,{}),onClick:async()=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"fork",parameter5:t.aiAgentID}),le(!0);try{const r=await Ue(t.aiAgentID);y(`/${i.identifier}/ai-agent/${r.data.aiAgentID}`)}catch{F.error({content:f("dashboard.message.fork-failed")})}finally{le(!1)}},children:[e("span",{children:f("marketplace.fork")}),((I==null?void 0:I.marketplace.numForks)??0)>0&&c("span",{children:[" ",xe((I==null?void 0:I.marketplace.numForks)??0)]})]}),Ne(i.myRole,Le.APP,L(i),De.CREATE_APP)&&e(W,{ml:"8px",colorScheme:"grayBlue",loading:re,leftIcon:e(qt,{}),onClick:async()=>{try{B(!0);const b=(t.teamID===i.id?t:(await Ue(t.aiAgentID)).data).variables.map(Dt=>Dt.key),{appInfo:_,variableKeyMapInputNodeDisplayName:fe}=Yt(b),$e=await Kt({appName:"Untitled app",initScheme:_}),Nt=Jt(t,fe);await Vt($e.data.appId,Nt),window.open(`${Pe(window.customDomain)}/${i.identifier}/app/${$e.data.appId}`,"_blank")}catch{F.error({content:f("create_fail")})}finally{B(!1)}},children:e("span",{children:f("marketplace.agent.create_app")})})]})});return c(j,{children:[e(st,{children:e("title",{children:t.name})}),c(St.Provider,{value:{inRoomUsers:we},children:[c("div",{css:xa,children:[e(Pt,{mode:"wait",initial:!1,children:ge&&c(Re.div,{css:va,initial:{opacity:0,x:"-100%",position:"absolute"},animate:{opacity:1,x:0,position:"relative",transition:{duration:.3}},exit:{opacity:0,x:"-100%",position:"absolute"},children:[c("div",{css:Sa,children:[c("div",{css:ba,children:[c("div",{onClick:Te,children:[e(qe,{fs:"16px"}),e("div",{css:wa,children:f("back")})]}),e(Bt,{onClick:_e,css:_a,children:e(Et,{size:"12px"})})]}),c("div",{css:Ta,children:[e(g,{control:v,name:"icon",render:({field:a})=>e(Ee,{css:La,avatarUrl:a.value})}),e(g,{control:v,name:"name",render:({field:a})=>e("div",{css:Da,children:a.value})})]}),e(g,{control:v,name:"description",render:({field:a})=>e("div",{css:Ua,children:a.value})}),c("div",{css:Ea,children:[e(g,{control:v,name:"teamIcon",render:({field:a})=>e(Ee,{css:Pa,avatarUrl:a.value})}),e(g,{control:v,name:"teamName",render:({field:a})=>e("div",{css:Ba,children:a.value})})]}),he]}),c("div",{css:$a,children:[e(g,{name:"agentType",control:v,shouldUnregister:!1,render:({field:a})=>e(P,{title:f("editor.ai-agent.label.mode"),tips:f("editor.ai-agent.tips.mode"),children:e(He,{value:a.value,colorScheme:A("grayBlue","02"),w:"100%",type:"button",forceEqualWidth:!0,options:[{value:ie.CHAT,label:f("editor.ai-agent.option.mode.chat")},{value:ie.TEXT_GENERATION,label:f("editor.ai-agent.option.mode.text")}],onChange:r=>{if(Q||q){F.info({content:f("editor.ai-agent.message.generating")});return}p(h.CLICK,d.AI_AGENT_RUN,{element:"mode_radio_button",parameter1:r,parameter5:t.aiAgentID}),a.onChange(r)}})})}),e(g,{name:"prompt",control:v,shouldUnregister:!1,render:({field:a})=>e(g,{name:"variables",control:v,render:({field:r})=>e(P,{title:"Prompt",children:e(vt,{...a,editable:!1,completionOptions:r.value})})})}),e(g,{name:"variables",control:v,rules:{validate:a=>a.every(r=>r.key!==""&&r.value!=="")||a.length===1&&a[0].key===""&&a[0].value===""},shouldUnregister:!1,render:({field:a})=>a.value.length>0?e(P,{title:f("editor.ai-agent.label.variable"),children:e(Ct,{fillOnly:!0,records:a.value,onChangeKey:(r,b)=>{const _=[...a.value];_[r].key=b,a.onChange(_)},onChangeValue:(r,b,_)=>{const fe=[...a.value];fe[r].value=_,a.onChange(fe)},onAdd:()=>{},onDelete:()=>{},label:""})}):e(j,{})}),e(g,{name:"model",control:v,render:({field:a})=>{var r,b;return e(P,{title:f("editor.ai-agent.label.model"),children:c("div",{css:ka,children:[e("span",{css:Ra,children:(r=Ie(a.value))==null?void 0:r.logo}),e("span",{css:Na,children:(b=Ie(a.value))==null?void 0:b.name})]})})}})]}),e("form",{ref:oe,onSubmit:ne,children:e("div",{css:Ga,children:e(W,{size:"large",flex:"1",disabled:!M,loading:q,ml:"8px",colorScheme:A("grayBlue","02"),leftIcon:R?e(je,{}):e(Xe,{}),children:f(R?"editor.ai-agent.restart":"editor.ai-agent.start")})})})]})}),e(g,{name:"agentType",control:v,shouldUnregister:!1,render:({field:a})=>e(g,{control:v,name:"publishedToMarketplace",render:({field:r})=>e("div",{css:Ca,children:e(bt,{showShareDialog:$t(i),showContributeDialog:Fe(i,t.teamID===i.id?i.myRole:U.GUEST,r.value),showEditPanel:ge,setShowEditPanel:pe,isRunning:R,isConnecting:q,hasCreated:!0,isMobile:!1,editState:"RUN",agentType:a.value,model:S("model"),chatMessages:s,generationMessage:n,isReceiving:Q,blockInput:!R||Ce,onSendMessage:(b,_)=>{p(h.CLICK,d.AI_AGENT_RUN,{element:"send",parameter5:t.aiAgentID}),$({threadID:b.threadID,prompt:b.message,variables:[],modelConfig:S("modelConfig"),model:S("model"),agentType:S("agentType"),actionID:S("aiAgentID")},E.RUN,_,"chat",!0,b)},onCancelReceiving:()=>{$({},E.STOP_ALL,a.value,"stop_all",!1),Z(!1)},onClickStartRunning:ne})})})})]}),ue,ee&&e(Ft,{hasMask:!0})]})]})};kt.displayName="AIAgentRunPC";const Fa=()=>{const t=Wt();return m.useEffect(()=>(p(h.VISIT,d.AI_AGENT_RUN),Ot(),()=>{Ke(d.AI_AGENT_RUN)}),[]),Ht(()=>{Ke(d.AI_AGENT_RUN)}),e(Xt,{resolve:t.data,errorElement:e(j,{children:jt("404")}),children:e(ea,{desktopPage:e(kt,{}),mobilePage:e(Rt,{})})})};Fa.displayName="AIAgentRun";export{Fa as AIAgentRun,Fa as default};
//# sourceMappingURL=index-0167e28b.js.map

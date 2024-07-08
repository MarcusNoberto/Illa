import{l as v,m as T,n as m,k as e,T as $,o as h,bg as R,B as V,F as k,aQ as W}from"./@illa-design-402f214a.js";import{r as c,u as S,k as j,o as z,n as F,A as O}from"./react-9b7e00e3.js";import{e as M,u as Y,b as E,n as G,fa as X,U as q,B as Q,q as C,o as H,p as J,s as Z,gu as K,w as _,d7 as L,a9 as ee,S as te,x as b,t as ae,E as I,a as oe,a3 as ne,a4 as w,bf as se,bh as ie,bi as re,bj as pe,bk as ce,bm as le,g as de,W as ue,a0 as ge}from"./index-2f1869ab.js";import{a}from"./@emotion-4f16718e.js";import{Page404 as fe}from"./index-9065e6bc.js";import{a as me}from"./index-461ab516.js";import{b as he,s as xe,a as ye,u as Ae,C as Pe,f as be}from"./layoutInfoListener-bba65cc8.js";import{u as Ie}from"./hook-34b2061f.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./errorPage-5944bed0.js";import"./renderComponentCanvasContainer-44ad78fe.js";import"./style-7ce959a8.js";import"./index-f466602f.js";import"./index-cf2bb556.js";import"./index-b8442d1a.js";import"./drive-6b05f117.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-cd761d27.js";import"./clsx-85d7d0af.js";import"./objectWithoutPropertiesLoose-24430c43.js";const Ee=a`
  width: 100%;
  height: 100%;
  position: relative;
`;a`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
`;const B=a`
  padding: 5px 4px;
`;a`
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: ${v(`--${T}-grayBlue-03`)};
  ${B};
`;a`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${v(`--${T}-grayBlue-02`)};
`;a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  ${B};
`;const Ce=a`
  position: absolute;
  bottom: 16px;
  right: 16px;
  box-shadow: 0 0 8px 0 ${m("blackAlpha","07")};
  border: solid 1px ${m("grayBlue","09")};
  border-radius: 8px;
  font-size: 12px;
  padding: 0 12px;
  height: 40px;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  background-color: ${m("white","01")};
  gap: 8px;
`,Le=a`
  width: 25px;
  height: 12px;
`,D=a`
  padding: 5px 4px;
`,we=a`
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};
  ${D};
`,ve=a`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${m("grayBlue","02")};
`,Te=a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  ${D};
`,N=()=>{var n,p;const[r,s]=c.useState(!1),l=M(),x=Ie(),{t:o}=Y(),t=E(G),d=E(X),{appId:u}=S(),y=(t==null?void 0:t.myRole)??q.VIEWER,A=Q(y,C(t),(n=t==null?void 0:t.totalTeamLicense)==null?void 0:n.teamLicensePurchased,(p=t==null?void 0:t.totalTeamLicense)==null?void 0:p.teamLicenseAllPaid);H(y,Z.APP,C(t),J.EDIT_APP);const i=()=>{A||x({modalType:"upgrade",from:"deploy_watermark"})},P=c.useCallback(async(g,f)=>{if(u){f.stopPropagation();const U=await K(!g,u);l(_.updateAppInfoReducer(U.data))}},[u,l]);return e(k,{children:d&&e($,{trigger:"click",colorScheme:"white",position:"top-end",mb:"12px",popupVisible:r,onVisibleChange:s,disabled:!L,content:A?h("div",{css:Te,children:[o("billing.advanced.feature"),e(R,{checked:!d,onChange:P})]}):h("div",{css:we,children:[e("div",{css:ve,children:o("billing.modal.upgrade_now_admin.upgrade_to_plus")}),e("div",{children:o("billing.advanced.feature")}),e(V,{mt:"8px",colorScheme:"techPurple",onClick:()=>{i()},leftIcon:e(ee,{}),children:o("billing.homepage.upgrade")})]}),children:h("div",{css:Ce,onClick:()=>{window.open("https://illacloud.com","_blank")},children:[e("span",{children:"Powered by"}),e(te,{css:Le}),L]})})})};N.displayName="WaterMark";const ke=()=>{const r=j(),s=M();let{pageName:l}=S();return c.useEffect(()=>{const x=[he(b),xe(b),ye(b)];return()=>x.forEach(o=>o())},[]),c.useEffect(()=>{(async()=>{const o=await r.appInfo;document.title=o.data.appInfo.appName,s(se.updateIllaMode("production")),s(_.updateAppInfoReducer(o.data.appInfo));const t=o.data.components;let d=t;if(t.props){const{homepageDisplayName:A,pageSortedKey:i,currentPageIndex:P}=t.props;let n;const p=i==null?void 0:i.findIndex(f=>f===l);p!=null&&p!==-1&&(n=p);const g=i==null?void 0:i.findIndex(f=>f===A);n==null&&g!=null&&g!==-1&&(n=g),n==null&&P!=null&&(n=P),n==null&&(n=0),d={...t,props:{...t.props,currentPageIndex:n}}}const u=be(d);s(ie.initComponentReducer(re(u)));const y=pe(o.data.actions);s(ce.initActionListReducer(y)),s(le.startExecutionReducer())})()},[r,s,l]),Ae(),c.useEffect(()=>(ae(oe.VISIT,I.DEPLOY),ne(),()=>{w(I.DEPLOY)}),[]),z(()=>{w(I.DEPLOY)}),h(W,{renderInBody:!0,zIndex:10,children:[e(Pe,{}),e(N,{})]})},Se=()=>{const r=F(),s=E(de);return h(k,{children:[e(ue,{children:e("title",{children:s.appName})}),e("div",{css:Ee,children:e(c.Suspense,{fallback:e(ge,{}),children:e(O,{resolve:r,errorElement:e(fe,{}),children:e(me,{children:e(ke,{})})})})})]})};Se.displayName="Deploy";export{Se as Deploy,Se as default};
//# sourceMappingURL=index-1a76fd87.js.map

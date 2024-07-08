import{$ as cn,f as r,q as C,k as l,B as ae,a0 as Gt,l as m,U as We,O as de,I as Dn,G as at,H as st,a1 as Pi,a2 as Mn,a3 as Pn,W as je,a4 as Bn,N as Oe,a5 as Se,a6 as Bi,a7 as Oi,a8 as On,a9 as qt,aa as Ni,K as $e,ab as zi,ac as Nn,ad as Vi,E as Yt,ae as dn,F as Fe,af as Ui,ag as xt,C as zn,Y as Fi,ah as Wi,g as Zt,h as Xt,J as ji,X as Hi,ai as pn,aj as Ki,ak as Gi,V as un,al as qi,P as Yi,am as Zi}from"./@illa-design-df878cb8.js";import{F as re,M as Ye,H as Pe,I as He,U,a2 as X,a3 as Ne,a1 as Ke,A as Vn,a4 as Un,a5 as Fn,V as Wn,a6 as ut,a7 as hn,a8 as At,_ as N,a0 as fn,N as Xi,u as kt,G as jn,P as Tt,g as Ji,a9 as Qi,aa as yt,ab as er,T as tr,J as Me,K as Hn}from"./index-36431cb1.js";import{i as te,e as nr,c as Kn,A as Gn,a as qn,f as ir,s as rr,g as or,o as ar}from"./index-744a912b.js";import{r as c,i as Yn,b as Ze}from"./react-bc846394.js";import{I as B}from"./interface-8df5fe4c.js";import{E as sr}from"./index-1e58851c.js";import{i as lr}from"./utils-edf94913.js";import{a as D}from"./style-56e482f1.js";import"./upstash-7245fd7f.js";import{S as cr}from"./index-81d56a34.js";import{u as Zn,a as Xn,C as De}from"./index.esm-11ba4214.js";import{d as Jn}from"./lodash-lib-cfb0e9ed.js";import{e as ze}from"./@emotion-28b7fe46.js";const dr=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;var Qn=(e=>(e.SUCCESS="success",e.EMPTY="empty",e))(Qn||{});const pr=e=>e==null||e===""?"empty":typeof e=="string"||typeof e=="number"?(cn(String(e)),"success"):(cn(JSON.stringify(e)),"success");var ei=(e=>(e.PC="pc",e.MOBILE="mobile",e))(ei||{});const ur=e=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("path",{d:"M7.99992 10.5L2.66679 10.4997C2.48998 10.4997 2.32041 10.4339 2.19538 10.3167C2.07036 10.1995 2.00012 10.0405 2.00012 9.87473V6.50309V3.62787C2.00012 3.46211 2.07036 3.30314 2.19538 3.18593C2.32041 3.06872 2.48998 3.00287 2.66679 3.00287L13.3294 3C13.5063 3 13.6758 3.06585 13.8008 3.18306C13.9259 3.30027 13.9961 3.45924 13.9961 3.625V9.87186C13.9961 10.0376 13.9259 10.1966 13.8008 10.3138C13.6758 10.431 13.5063 10.4969 13.3294 10.4969L7.99992 10.5ZM7.99992 10.5L7.99992 13M7.99992 13H9.99992M7.99992 13H5.99992",stroke:"#1D2129",strokeLinecap:"round"})),hr=e=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("circle",{cx:8,cy:10,r:1,fill:"#1D2129"}),c.createElement("rect",{x:4,y:3,width:8,height:10,rx:1,stroke:"#1D2129"})),gn=r`
  visibility: hidden;
  transition: all 0.2s ease-in-out;
`,fr=e=>{const{t}=re(),{appID:n,appDeployed:o,canEditApp:i}=e,{teamIdentifier:a}=Yn(),{track:s}=c.useContext(Ye),p=c.useMemo(()=>d=>{d.stopPropagation(),s==null||s(B.CLICK,{element:"app_launch",parameter5:n},"both"),window.open(`${Pe(window.customDomain)}/${a}/deploy/app/${n}?token=${He()}`,"_blank")},[n,a,s]),h=c.useMemo(()=>d=>{d.stopPropagation(),s==null||s(B.CLICK,{element:"app_edit",parameter5:n},"both"),window.open(`${Pe(window.customDomain)}/${a}/app/${n}?token=${He()}`,"_blank")},[n,a,s]);return C(Gt,{direction:"horizontal",w:"100%",justifyContent:"end",size:"8px",alignItems:"center",children:[o?l(ae,{css:gn,className:"dashboardAppEditButton",variant:"text",colorScheme:"grayBlue",onClick:p,children:t("dashboard.common.launch")}):null,i?l(ae,{css:gn,className:"dashboardAppLaunchButton",variant:"text",colorScheme:"grayBlue",onClick:h,children:t("dashboard.common.edit")}):null]})},gr=r`
  display: flex;
  flex-direction: row;
  align-items: center;
`,mr=r`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${m("grayBlue","04")};
`,xr=r`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin-left: 22px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${m("grayBlue","01")};
`,yr=r`
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;function wr(e){return r`
    font-size: 14px;
    font-style: normal;
    font-weight: ${e?400:500};
    line-height: 22px;
  `}const br=r`
  margin-left: 4px;
  width: 12px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 12px;
`,$t=e=>{var v;const{onClickItem:t,withoutTips:n,value:o,showOwner:i,currentUserRole:a,isSelf:s,inline:p,excludeUserRole:h}=e,[d,f]=c.useState(!1),g=!s&&te(o,a,!0),{t:u}=re(),_=c.useMemo(()=>[{role:U.OWNER,tips:u("user_management.role.tips.owner"),name:u("user_management.role.owner")},{role:U.ADMIN,tips:u("user_management.role.tips.admin"),name:u("user_management.role.admin")},{role:U.EDITOR,tips:u("user_management.role.tips.editor"),name:u("user_management.role.editor")},{role:U.VIEWER,tips:u("user_management.role.tips.viewer"),name:u("user_management.role.viewer")}],[u]),x=c.useMemo(()=>(i?_:_.filter(w=>w.role!==U.OWNER)).filter(w=>!(h!=null&&h.includes(w.role))&&te(w.role,a)),[a,h,i,_]);return l(je,{disabled:!g||x.length<=1,onVisibleChange:y=>{f(y)},dropList:l(We,{onClickItem:y=>{t==null||t(y)},children:x.map(y=>l(de,{value:y.role,title:C("div",{css:gr,children:[l("div",{children:y.name}),!n&&l(Dn,{zIndex:1e3,children:l(at,{trigger:"hover",position:"top",content:y.tips,children:l("div",{css:mr,children:l(st,{})})})}),o===y.role&&l("div",{css:xr,children:l(Pi,{})})]})},y.role))}),position:"bottom-end",trigger:"click",children:C("div",{css:yr,children:[l("div",{css:wr(p),children:(v=_.find(y=>y.role===o))==null?void 0:v.name}),g&&x.length>1&&l("div",{css:br,children:d?l(Mn,{}):l(Pn,{})})]})})};var lt=(e=>(e.STORAGE="storage",e.TOKEN="token",e.TRAFFIC="traffic",e))(lt||{}),Dt=(e=>(e.CREATE="create",e.TRANSFER_OWNER="transferOwner",e))(Dt||{});X.FREE+"",X.MONTHLY+"",X.YEARLY+"",X.LIFETIME+"";X.FREE+"",X.MONTHLY+"",X.YEARLY+"",X.LIFETIME+"";X.FREE+"",X.MONTHLY+"",X.YEARLY+"",X.LIFETIME+"";X.FREE+"",X.MONTHLY+"",X.YEARLY+"",X.LIFETIME+"";const ce={listener:[],modal:null};function _r(){return{getModal:()=>ce.modal,setModal:e=>{ce.modal=e,ce.listener.forEach(t=>{t.onStoreChange()})},subscribe:e=>{const t={listenerId:Bn(),onStoreChange:e};return ce.listener.push(t),t.onStoreChange(),t},unSubscribe:e=>{ce.listener.splice(ce.listener.findIndex(t=>t.listenerId===e),1)},update:e=>{ce.modal=e,ce.listener.forEach(t=>{t.onStoreChange()})},remove:()=>{ce.modal=null,ce.listener.forEach(e=>{e.onStoreChange()})}}}const Cr=_r(),vr=e=>(e.id||(e.id=Bn()),e.visible||(e.visible=!0),Cr.setModal(e),e.id),Er=e=>vr(e);function Jt(){return Er}r`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 24px;
`;r`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;r`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${m("grayBlue","02")};
`;r`
  color: ${m("grayBlue","03")};
`;r`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;r`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;const ti=r`
  padding: 0 24px;
`;r`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ti};
  padding-bottom: 16px;
`;r`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  cursor: pointer;
`;r`
  font-size: 12px;
`;r`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${m("grayBlue","02")};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  padding: 24px 0;

  ${D(r`
    font-size: 14px;
    line-height: 22px;
  `)}
`;r`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;r`
  padding: 8px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;r`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;r`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
  color: ${m("grayBlue","03")};
  font-weight: 400;
  line-height: 20px;
  font-size: 12px;
`;r`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;r`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
`;r`
  display: flex;
  gap: 16px;
  padding-top: 8px;
`;r`
  display: flex;
  justify-content: space-between;
`;r`
  text-align: end;
`;r`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${m("techPurple","03")};
  margin-bottom: 4px;

  ${D(r`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 4px;
  `)}
`;r`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(r`
    font-size: 12px;
    line-height: 20px;
  `)}
`;r`
  text-align: start;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};
  ${ti};
`;r`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;r`
  border: unset;
  width: 486px;
  min-width: 486px;
  background: ${m("white","01")};
  border: 1px solid ${m("grayBlue","08")};
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border-radius: 8px;
  overflow: hidden;

  ${D(r`
    width: 358px;
    min-width: 358px;
    border-radius: 8px;
  `)}
`;r`
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 10px;
  text-align: center;
  top: 16px;
  right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${m("grayBlue","02")};
`;r`
  width: 100%;

  ${D(r`
    height: 100%;
  `)};
`;r`
  padding: 16px;
`;r`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 8px;

  ${D(r`
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 8px;
  `)};
`;r`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${m("grayBlue","03")};

  ${D(r`
    font-size: 14px;
    line-height: 17px;
  `)};
`;r`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;r`
  padding: 9px 16px;
`;r`
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(r`
    font-size: 12px;
    line-height: 20px;
  `)};
`;r`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${m("grayBlue","02")};
`;r`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    padding: 4px 24px;
  }
`;r`
  padding: 4px 24px;
`;lt.STORAGE+"",lt.TRAFFIC+"",lt.TOKEN+"";r`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;r`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;r`
  position: relative;
  padding: 0 24px;
`;r`
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 24px;
  font-size: 12px;
`;r`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${m("grayBlue","02")};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  ${D(r`
    font-size: 14px;
    line-height: 22px;
  `)}
`;r`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 24px 0 16px;

  ${D(r`
    font-size: 18px;
    line-height: 24px;
    margin: 24px 0 16px 0;
  `)}
`;r`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px 0 24px 0;
`;r`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 24px;
`;r`
  color: ${m("grayBlue","02")};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-transform: capitalize;
`;r`
  text-align: end;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-end;
`;r`
  display: flex;
  flex-direction: column;
`;r`
  color: ${m("grayBlue","02")};
  margin-bottom: 4px;
  text-align: right;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-transform: capitalize;
`;r`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};
`;r`
  text-align: center;
`;r`
  font-size: 14px;
  line-height: 22px;

  ${D(r`
    font-size: 14px;
    line-height: 22px;
  `)}
`;r`
  text-align: start;
  margin-top: 16px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(r`
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 12px;
    line-height: 20px;
  `)}
`;r`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;r`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;r`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;r`
  display: flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 32px;
  background: ${m("green","08")};
  color: ${m("green","03")};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;r`
  color: ${m("red","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: right;
`;r`
  color: ${m("grayBlue","02")};
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;
`;r`
  color: ${m("grayBlue","02")};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;r`
  width: 320px;
  min-width: unset;
  background: ${m("white","01")};
  border: 1px solid ${m("grayBlue","08")};
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border-radius: 4px;

  ${D(r`
    width: 358px;
    min-width: 358px;
    border-radius: 8px;
  `)}
`;r`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 8px;

  ${D(r`
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
    margin-bottom: 8px;
  `)}
`;r`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 8px 24px;

  ${D(r`
    font-size: 14px;
    line-height: 22px;
    margin: 8px 24px;
  `)}
`;r`
  width: 100%;
  padding: 16px;
  text-align: center;

  ${D(r`
    padding: 16px;
  `)}
`;r`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;r`
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 10px;
  text-align: center;
  top: 18px;
  right: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${m("grayBlue","02")};
`;r`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;r`
  border: unset;
  width: 486px;
  min-width: 486px;
  background: ${m("white","01")};
  border: 1px solid ${m("grayBlue","08")};
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border-radius: 8px;
  overflow: hidden;

  ${D(r`
    width: 358px;
    min-width: 358px;
    border-radius: 8px;
  `)}
`;r`
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 10px;
  text-align: center;
  top: 18px;
  right: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${m("grayBlue","02")};
`;r`
  width: 100%;

  ${D(r`
    height: 202px;
  `)};
`;r`
  padding: 16px;
`;r`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 8px;

  ${D(r`
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 8px;
  `)};
`;r`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${m("grayBlue","03")};

  ${D(r`
    font-size: 14px;
    line-height: 17px;
  `)};
`;r`
  color: ${m("purple","03")};
`;r`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;r`
  align-self: center;
`;r`
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(r`
    font-size: 12px;
    line-height: 20px;
  `)};
`;r`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${m("grayBlue","02")};
`;r`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    padding: 4px 24px;
  }
`;r`
  padding: 4px 24px;
`;r`
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;

  &:hover .tips {
    display: block;
  }

  ${D(r`
    width: 16px;
    height: 16px;
  `)};
`;r`
  height: 16px;
  width: 16px;
  flex-shrink: 0;

  ${D(r`
    width: 16px;
    height: 16px;
  `)};
`;Dt.CREATE+"",Dt.TRANSFER_OWNER+"";r`
  border: unset;
  width: 486px;
  min-width: 486px;
  background: ${m("white","01")};
  border: 1px solid ${m("grayBlue","08")};
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border-radius: 8px;
  overflow: hidden;

  ${D(r`
    width: 358px;
    min-width: 358px;
    border-radius: 8px;
  `)}
`;r`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;r`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
`;r`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${m("grayBlue","02")};
`;r`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;r`
  padding: 9px 16px;
`;r`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;r`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;r`
  position: relative;
  padding: 0 24px;

  ${D(r`
    padding: 0 24px;
  `)}
`;r`
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 24px;
  font-size: 12px;

  ${D(r`
    top: 6px;
    right: 24px;
    font-size: 12px;
  `)}
`;r`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${m("grayBlue","02")};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  ${D(r`
    font-size: 14px;
    line-height: 22px;
  `)}
`;r`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 24px 0 16px;

  ${D(r`
    font-size: 18px;
    line-height: 24px;
    margin: 24px 0 16px 0;
  `)}
`;r`
  padding: 8px 0 24px;

  ${D(r`
    padding: 8px 0 24px 0;
  `)}
`;r`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  ${D(r`
    font-size: 14px;
    line-height: 22px;
  `)}
`;r`
  display: flex;
  gap: 16px;
  padding-top: 8px;

  ${D(r`
    gap: 16px;
    padding-top: 8px;
  `)}
`;r`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;

  ${D(r`
    padding: 24px 0;
  `)}
`;r`
  text-align: end;
`;r`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${m("techPurple","03")};
  margin-bottom: 4px;

  ${D(r`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 4px;
  `)}
`;r`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(r`
    font-size: 12px;
    line-height: 20px;
  `)}
`;r`
  text-align: start;
  margin-top: 16px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(r`
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 12px;
    line-height: 20px;
  `)}
`;const Ir=(e,t,n,o,i)=>{const a={email:t,userRole:n,redirectURL:encodeURIComponent(o),hosts:window.location.origin};return Ne({method:"POST",url:"/inviteByEmail",data:a},{teamID:e})},Sr=(e,t,n)=>Ne({method:"PATCH",url:`/teamMembers/${t}/role`,data:{userRole:n}},{teamID:e}),Rr=r`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`,Lr=r`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Ar=r`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`;r`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;r`
  color: ${m("grayBlue","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;const kr=r`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`,Tr=r`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,$r=r`
  color: ${m("grayBlue","02")};
  white-space: nowrap;
  flex: 1;
  text-overflow: ellipsis;
  margin-left: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Dr=r`
  height: 100%;
`,Mt=e=>{const{excludeUserRole:t,defaultInviteUserRole:n,defaultBalance:o,teamID:i,onBalanceChange:a,redirectURL:s,currentUserRole:p,onInvitedChange:h,itemID:d}=e,f=Oe(),{t:g}=re(),u=Jt(),{track:_}=c.useContext(Ye),[x,v]=Se(n,{defaultValue:n}),[y,w]=Se(o,{defaultValue:o}),[I,T]=c.useState([]),[E,F]=c.useState(!1),[L,A]=c.useState([]);return C("div",{css:Rr,children:[l("div",{css:Lr,children:g("user_management.modal.email.invite_title")}),C("div",{css:Ar,children:[l(Bi,{saveOnBlur:!0,flexShrink:"1",readOnly:E,flexGrow:"1",value:L,onChange:b=>{A(b)},w:"unset",colorScheme:"techPurple",validate:b=>{if(b.length===0)return!0;const R=b.length>0&&dr.test(b);return R||f.error({content:g("user_management.modal.email.not_mail")}),R},suffix:l("div",{css:Dr,children:l($t,{inline:!0,currentUserRole:p,excludeUserRole:t,value:x,onClickItem:async b=>{v(b)}})})}),l(ae,{ml:"8px",w:"80px",h:"32px",flexShrink:"0",disabled:L.length===0,colorScheme:m("grayBlue","02"),loading:E,onClick:async()=>{if(_==null||_(B.CLICK,{element:"share_modal_send",parameter5:d}),te(U.EDITOR,x)&&y<L.length){u({modalType:"add-license",from:"invite_by_email"});return}F(!0);const b=[...I];for(let R=0;R<L.length;R++)try{const $=await Ir(i,L[R],x,s,window.customDomain),O=b.findIndex(W=>W.email===L[R]),G={email:L[R],userRole:x,teamMemberID:$.data.teamMemberID};O!==-1?b[O]=G:b.push(G),A([])}catch($){lr($)?$.data.errorFlag===sr.ERROR_FLAG_EMAIL_ALREADY_USED&&f.error({content:g("user_management.modal.email.invited")}):f.error({content:g("user_management.mes.invite_fail")})}te(U.EDITOR,x)&&(w(y-L.length),a(y-L.length)),h(b),T(b),F(!1)},children:E?void 0:g("user_management.modal.email.invite")})]}),Ke,I.length>0&&l("div",{css:kr,children:I.map(b=>C("div",{css:Tr,children:[l(Vn,{name:b.email}),l("div",{css:$r,children:b.email}),l($t,{currentUserRole:p,value:b.userRole,onClickItem:async R=>{F(!0);try{await Sr(i,b.teamMemberID,R);const $=I.findIndex(O=>O.email===b.email);if($!=-1){const O=[...I];O[$].userRole=R,T(O),h==null||h(O)}f.success({content:g("user_management.mes.invite_suc")})}catch{f.error({content:g("user_management.mes.change_role_fail")})}finally{F(!1)}}})]},b.email))})]})};Mt.displayName="InviteByEmailPC";const Mr=(e,t,n,o,i)=>{let a=`/inviteLink/userRole/${t}`;return n&&(a+=`?redirectURL=${encodeURIComponent(n)}`),o&&(n?a+=`&customDomain=${o}`:a+=`?customDomain=${o}`),Ne({url:a,method:"GET",signal:i},{teamID:e})},Pr=(e,t,n,o)=>{let i=`/inviteLink/userRole/${n}`;return t&&(i+=`?redirectURL=${encodeURIComponent(t)}`),o&&(t?i+=`&customDomain=${o}`:i+=`?customDomain=${o}`),Ne({url:i,method:"GET"},{teamID:e})},Br=e=>Ne({method:"PATCH",url:"/configInviteLink",data:{inviteLinkEnabled:!0}},{teamID:e}),Or=e=>Ne({method:"PATCH",url:"/configInviteLink",data:{inviteLinkEnabled:!1}},{teamID:e}),Nr=r`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`,zr=r`
  color: ${m("grayBlue","02")};
  flex-grow: 1;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Vr=r`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`,Ur=r`
  display: flex;
  margin-top: 8px;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`,Fr=r`
  font-size: 16px;
  cursor: pointer;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  flex-shrink: 0;
  color: ${m("grayBlue","01")};
`,Wr=r`
  display: flex;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`,jr=r`
  color: ${m("grayBlue","02")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;r`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;const Pt=e=>{const{excludeUserRole:t,defaultAllowInviteLink:n,defaultInviteUserRole:o,onInviteLinkStateChange:i,teamID:a,currentUserRole:s,onCopyInviteLink:p,redirectURL:h,defaultBalance:d}=e,[f,g]=Se(o,{defaultValue:o}),[u,_]=Se(n,{defaultValue:n}),x=Oe(),v=Jt(),{t:y}=re(),[w,I]=c.useState(""),[T,E]=c.useState(!1);c.useEffect(()=>{if(!u)return;let b=new AbortController;return(async()=>{E(!0);try{const $=await Mr(a,f,h,window.customDomain,b.signal),O=new URL($.data.inviteLink);Ke||(O.host=window.location.host),I(O.toString())}catch{x.error({content:y("user_management.modal.link.fail")})}finally{E(!1)}})(),()=>{b.abort()}},[s,a,u,f,x,y,h]);const F=c.useCallback(async(b,R)=>{E(!0);try{const $=await Pr(b,h,R,window.customDomain);I($.data.inviteLink)}catch{x.error({content:y("user_management.modal.link.fail")})}finally{E(!1)}g(R)},[x,h,g,y]),L=c.useCallback(async b=>{E(!0);try{await Br(b),_(!0),i==null||i(!0)}catch{x.error({content:y("user_management.modal.link.turn_on_fail")})}finally{E(!1)}},[x,i,_,y]),A=c.useCallback(async b=>{E(!0);try{await Or(b),_(!1),i==null||i(!1)}catch{x.error({content:y("user_management.modal.link.turn_off_fail")})}finally{E(!1)}},[x,i,_,y]);return nr(U.ADMIN,s,!1)&&!u?null:C("div",{css:Nr,children:[(u||!u&&te(U.ADMIN,s))&&C("div",{css:Vr,children:[l("div",{css:zr,children:y("user_management.modal.link.invite_title")}),u&&te(U.ADMIN,s)&&l(je,{trigger:"click",position:"bottom-end",dropList:C(We,{children:[l(de,{value:y("user_management.modal.link.update"),title:y("user_management.modal.link.update"),onClick:async()=>{await F(a,f)}},y("user_management.modal.link.update")),l(de,{value:y("user_management.modal.link.turn_off"),title:y("user_management.modal.link.turn_off"),onClick:async()=>{await A(a)}},y("user_management.modal.link.turn_off"))]}),children:l("div",{css:Fr,children:l(Oi,{})})})]}),u?C("div",{css:Ur,children:[l(qt,{flexShrink:"1",flexGrow:"1",w:"unset",readOnly:!0,colorScheme:"techPurple",value:T?l(On,{text:{rows:1},opac:.5,animation:!0,flexGrow:"1"}):w,suffix:l($t,{inline:!0,currentUserRole:s,excludeUserRole:t,value:f,onClickItem:async b=>{te(U.VIEWER,b,!1)&&d===0?v({modalType:"upgrade",from:"invite_by_link"}):await F(a,b)}})}),l(ae,{ml:"8px",w:"80px",colorScheme:m("grayBlue","02"),loading:T,onClick:()=>{if(te(U.VIEWER,f,!1)&&d===0){v({modalType:"upgrade",from:"invite_by_link"});return}const b=new URL(w);h!==""&&b.searchParams.set("redirectURL",h),p==null||p(b.href)},children:T?void 0:y("user_management.modal.link.copy")})]}):te(U.ADMIN,s)&&C("div",{css:Wr,children:[l("div",{css:jr,children:y("user_management.modal.link.description")}),l(ae,{variant:"text",size:"small",loading:T,colorScheme:"techPurple",onClick:async()=>{await L(a)},children:y("user_management.modal.link.turn_on")})]})]})};Pt.displayName="InviteLinkPC";r`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`;r`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;r`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;r`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  margin-bottom: 16px;
`;r`
  display: flex;
  flex-direction: row;
`;r`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;r`
  color: ${m("grayBlue","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;r`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;r`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;r`
  color: ${m("grayBlue","02")};
  white-space: nowrap;
  flex: 1;
  text-overflow: ellipsis;
  margin-left: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;r`
  height: 44px;
  font-size: 14px;
  line-height: 17px;
`;r`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;r`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  padding-bottom: 12px;
`;r`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding-bottom: 32px;
  & > svg {
    width: 48px;
    height: 48px;
  }
`;r`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  & > svg {
    width: 48px;
    height: 48px;
  }
`;r`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

`;r`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;r`
  display: flex;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${m("grayBlue","09")};
`;r`
  position: sticky;
  top: 0;
  padding-top: 12px;
  background-color: ${m("white","01")};
`;r`
  height: 70%;
  width: 100%;
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;r`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: flex-end;
  width: 100%;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;r`
  overflow-y: auto;
`;r`
  margin-bottom: 24px;
`;var ct=(e=>(e[e.UNIT_TYPE_APP=8]="UNIT_TYPE_APP",e[e.UNIT_TYPE_AI_AGENT=29]="UNIT_TYPE_AI_AGENT",e))(ct||{});const Hr=e=>Un({method:"GET",url:`/search?keyword=${e}`}),Kr=e=>Un({method:"GET",url:`/defaultHashtagsList/unitType/${e}`}),Gr=e=>Fn({method:"GET",url:`/apps/${e}`}),qr=e=>Fn({method:"GET",url:`/aiAgents/${e}`}),Yr=r`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`,Zr=r`
  display: flex;
  flex-direction: row;
`,Xr=r`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Jr=r`
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${m("grayBlue","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,Qr=e=>{const{productType:t,productID:n,productContributed:o,onTagChange:i}=e,{t:a}=re(),s=c.useRef(""),[p,h]=c.useState([]),[d,f]=c.useState([]),[g,u]=c.useState([]),[_,x]=c.useState(!1);c.useEffect(()=>{if(!o){h([]);return}switch(t){case ct.UNIT_TYPE_APP:Gr(n).then(y=>{h(y.data.marketplace.hashtags)});break;case ct.UNIT_TYPE_AI_AGENT:qr(n).then(y=>{h(y.data.marketplace.hashtags)});break}},[o,n,t]);const v=c.useRef(Jn(async y=>{x(!0);try{const w=await Hr(y);s.current===y&&u(w.data.match)}catch{}finally{x(!1)}},160));return c.useEffect(()=>{Kr(t).then(y=>{f(y.data.hashtags),s.current===""&&u(y.data.hashtags)})},[t]),C("div",{css:Yr,children:[l("div",{css:Xr,children:a("contribute.tag.tag")}),l("div",{css:Zr,children:l(Ni,{loading:_,options:g,multiple:!0,flexShrink:"1",flexGrow:"1",filterOption:(y,w)=>y===w.value?!0:g.includes(w.value.toString()),defaultFilterOption:(y,w)=>g.includes(w.value.toString()),placeholder:"Enter↵",value:p,onChange:y=>{i==null||i(y),h(y)},onInputValueChange:y=>{s.current=y,y===""?u(d):v.current(y)},colorScheme:"techPurple",labelInValue:!1,inputAsOption:!0,showSearch:!0})}),l("div",{css:Jr,children:a("contribute.tag.recommended")}),d.length===0?l(On,{text:{rows:4},opac:.5,animation:!0}):l(Gt,{wrap:!0,children:d.map(y=>l($e,{clickable:!0,variant:p.includes(y)?"outline":"light",colorScheme:p.includes(y)?"techPurple":"grayBlue",onClick:()=>{if(p.includes(y))return;const w=[...p,y];h(w),i==null||i(w)},children:y},y))})]})};function Xe(e){var t=Object.entries(e).filter(function(n){var o=n[1];return o!=null}).map(function(n){var o=n[0],i=n[1];return"".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(String(i)))});return t.length>0?"?".concat(t.join("&")):""}var eo=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(o[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function o(){this.constructor=t}t.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}}(),fe=globalThis&&globalThis.__assign||function(){return fe=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fe.apply(this,arguments)},to=globalThis&&globalThis.__awaiter||function(e,t,n,o){function i(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function p(f){try{d(o.next(f))}catch(g){s(g)}}function h(f){try{d(o.throw(f))}catch(g){s(g)}}function d(f){f.done?a(f.value):i(f.value).then(p,h)}d((o=o.apply(e,t||[])).next())})},no=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},o,i,a,s;return s={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function p(d){return function(f){return h([d,f])}}function h(d){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,i&&(a=d[0]&2?i.return:d[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,d[1])).done)return a;switch(i=0,a&&(d=[d[0]&2,a.value]),d[0]){case 0:case 1:a=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,i=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!a||d[1]>a[0]&&d[1]<a[3])){n.label=d[1];break}if(d[0]===6&&n.label<a[1]){n.label=a[1],a=d;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(d);break}a[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(f){d=[6,f],i=0}finally{o=a=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},ni=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n},io=function(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"},ro=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},oo=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function ao(e,t,n){var o=t.height,i=t.width,a=ni(t,["height","width"]),s=fe({height:o,width:i,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),p=window.open(e,"",Object.keys(s).map(function(d){return"".concat(d,"=").concat(s[d])}).join(", "));if(n)var h=window.setInterval(function(){try{(p===null||p.closed)&&(window.clearInterval(h),n(p))}catch(d){console.error(d)}},1e3);return p}var so=function(e){eo(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.openShareDialog=function(o){var i=n.props,a=i.onShareWindowClose,s=i.windowHeight,p=s===void 0?400:s,h=i.windowPosition,d=h===void 0?"windowCenter":h,f=i.windowWidth,g=f===void 0?550:f,u=fe({height:p,width:g},d==="windowCenter"?ro(g,p):oo(g,p));ao(o,u,a)},n.handleClick=function(o){return to(n,void 0,void 0,function(){var i,a,s,p,h,d,f,g,u,_;return no(this,function(x){switch(x.label){case 0:return i=this.props,a=i.beforeOnClick,s=i.disabled,p=i.networkLink,h=i.onClick,d=i.url,f=i.openShareDialogOnClick,g=i.opts,u=p(d,g),s?[2]:(o.preventDefault(),a?(_=a(),io(_)?[4,_]:[3,2]):[3,2]);case 1:x.sent(),x.label=2;case 2:return f&&this.openShareDialog(u),h&&h(o,u),[2]}})})},n}return t.prototype.render=function(){var n=this.props;n.beforeOnClick;var o=n.children,i=n.className,a=n.disabled,s=n.disabledStyle,p=n.forwardedRef;n.networkLink;var h=n.networkName;n.onShareWindowClose,n.openShareDialogOnClick,n.opts;var d=n.resetButtonStyle,f=n.style;n.url,n.windowHeight,n.windowPosition,n.windowWidth;var g=ni(n,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"]),u=zi("react-share__ShareButton",{"react-share__ShareButton--disabled":!!a,disabled:!!a},i),_=fe(fe(d?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},f),a&&s);return Ze.createElement("button",fe({},g,{"aria-label":g["aria-label"]||h,className:u,onClick:this.handleClick,ref:p,style:_}),o)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(c.Component);const lo=so;var dt=globalThis&&globalThis.__assign||function(){return dt=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},dt.apply(this,arguments)};function Je(e,t,n,o){function i(a,s){var p=n(a),h=dt({},a),d=Object.keys(p);return d.forEach(function(f){delete h[f]}),Ze.createElement(lo,dt({},o,h,{forwardedRef:s,networkName:e,networkLink:t,opts:n(a)}))}return i.displayName="ShareButton-".concat(e),c.forwardRef(i)}var co=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(o[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function o(){this.constructor=t}t.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}}(),po=function(e){co(t,e);function t(n){var o=e.call(this,n)||this;return o.name="AssertionError",o}return t}(Error);function Re(e,t){if(!e)throw new po(t)}function uo(e,t){var n=t.quote,o=t.hashtag;return Re(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+Xe({u:e,quote:n,hashtag:o})}var ho=Je("facebook",uo,function(e){return{quote:e.quote,hashtag:e.hashtag}},{windowWidth:550,windowHeight:400});const fo=ho;function go(e,t){var n=t.title,o=t.summary,i=t.source;return Re(e,"linkedin.url"),"https://linkedin.com/shareArticle"+Xe({url:e,mini:"true",title:n,summary:o,source:i})}var mo=Je("linkedin",go,function(e){var t=e.title,n=e.summary,o=e.source;return{title:t,summary:n,source:o}},{windowWidth:750,windowHeight:600});const xo=mo;function yo(e,t){var n=t.title;return Re(e,"reddit.url"),"https://www.reddit.com/submit"+Xe({url:e,title:n})}var wo=Je("reddit",yo,function(e){return{title:e.title}},{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"});const bo=wo;function _o(e,t){var n=t.title,o=t.via,i=t.hashtags,a=i===void 0?[]:i,s=t.related,p=s===void 0?[]:s;return Re(e,"twitter.url"),Re(Array.isArray(a),"twitter.hashtags is not an array"),Re(Array.isArray(p),"twitter.related is not an array"),"https://twitter.com/share"+Xe({url:e,text:n,via:o,hashtags:a.length>0?a.join(","):void 0,related:p.length>0?p.join(","):void 0})}var Co=Je("twitter",_o,function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}},{windowWidth:550,windowHeight:400});const vo=Co;function Eo(){return/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)}function Io(e,t){var n=t.title,o=t.separator;return Re(e,"whatsapp.url"),"https://"+(Eo()?"api":"web")+".whatsapp.com/send"+Xe({text:n?n+o+e:e})}var So=Je("whatsapp",Io,function(e){return{title:e.title,separator:e.separator||" "}},{windowWidth:550,windowHeight:400});const Ro=So,Lo=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("g",{clipPath:"url(#clip0_10104_3860)"},c.createElement("path",{d:"M24 12.073C24 5.40405 18.6269 -0.00195312 11.9999 -0.00195312C5.36995 -0.000453125 -0.00305176 5.40405 -0.00305176 12.0745C-0.00305176 18.1 4.38595 23.095 10.1219 24.001V15.5635H7.07695V12.0745H10.1249V9.41205C10.1249 6.38655 11.9174 4.71555 14.6579 4.71555C15.9719 4.71555 17.3444 4.95105 17.3444 4.95105V7.92105H15.8309C14.3414 7.92105 13.8764 8.85255 13.8764 9.80805V12.073H17.2034L16.6724 15.562H13.8749V23.9995C19.6109 23.0935 24 18.0985 24 12.073Z",fill:"url(#paint0_linear_10104_3860)"})),c.createElement("defs",null,c.createElement("linearGradient",{id:"paint0_linear_10104_3860",x1:11.9984,y1:-.00195313,x2:11.9984,y2:24.001,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#17A9FD"}),c.createElement("stop",{offset:1,stopColor:"#0165E1"})),c.createElement("clipPath",{id:"clip0_10104_3860"},c.createElement("rect",{width:24,height:24,fill:"white"})))),Ao=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("g",{clipPath:"url(#clip0_10104_3855)"},c.createElement("path",{d:"M24.0002 21.8182C24.0002 23.0232 23.0234 24 21.8184 24H2.18206C0.977077 24 0.000244141 23.0232 0.000244141 21.8182V2.18182C0.000244141 0.976833 0.977078 0 2.18206 0H21.8184C23.0234 0 24.0002 0.976833 24.0002 2.18182V21.8182Z",fill:"#FF6B00"}),c.createElement("path",{d:"M11.3455 17.2364H12.6546V13.3091L16.2546 6.76367H14.88L12 12.0655L9.12003 6.76367H7.74548L11.3455 13.3091V17.2364Z",fill:"white",stroke:"white",strokeWidth:.545455})),c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_10104_3855"},c.createElement("rect",{width:24,height:24,fill:"white"})))),ko=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("path",{d:"M6.05358 7.88802V21.9879H1.36794V7.88802H6.05358Z",fill:"#0A66C2"}),c.createElement("path",{d:"M6.36192 3.52634C6.36192 4.8807 5.34517 5.96186 3.71173 5.96186H3.68051C2.10757 5.96186 1.09082 4.8807 1.09082 3.52634C1.09082 2.14465 2.1388 1.09082 3.74296 1.09082C5.34712 1.09082 6.33265 2.1427 6.36192 3.52634Z",fill:"#0A66C2"}),c.createElement("path",{d:"M13.2899 14.1134V21.9879H8.60619C8.60619 21.9879 8.66473 9.21116 8.60619 7.88802H13.2899V9.88249C13.9144 8.92039 15.0287 7.55431 17.515 7.55431C20.5984 7.55431 22.909 9.5683 22.909 13.9007V21.9879H18.2234V14.4452C18.2234 12.5483 17.5462 11.2564 15.8503 11.2564C14.5545 11.2564 13.7836 12.1287 13.446 12.9698C13.3211 13.2704 13.2899 13.6919 13.2899 14.1134Z",fill:"#0A66C2"})),To=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("g",{clipPath:"url(#clip0_10104_3846)"},c.createElement("path",{d:"M9.25049 12C8.92042 12.0004 8.60398 12.1317 8.37058 12.3651C8.13719 12.5985 8.00589 12.9149 8.00549 13.245C8.00549 13.9335 8.56349 14.505 9.25049 14.4915C9.57341 14.4803 9.87935 14.3441 10.1038 14.1117C10.3283 13.8793 10.4538 13.5689 10.4538 13.2457C10.4538 12.9226 10.3283 12.6122 10.1038 12.3798C9.87935 12.1474 9.57341 12.0112 9.25049 12ZM12.015 17.4705C12.4875 17.4705 14.1195 17.4135 14.979 16.554C15.0347 16.4905 15.0654 16.4089 15.0654 16.3245C15.0654 16.2401 15.0347 16.1585 14.979 16.095C14.9492 16.0642 14.9135 16.0398 14.8741 16.0231C14.8347 16.0064 14.7923 15.9978 14.7495 15.9978C14.7067 15.9978 14.6643 16.0064 14.6249 16.0231C14.5854 16.0398 14.5498 16.0642 14.52 16.095C13.9905 16.6395 12.831 16.8255 12.015 16.8255C11.1975 16.8255 10.053 16.6395 9.50849 16.095C9.47871 16.0642 9.44304 16.0398 9.40361 16.0231C9.36419 16.0064 9.32181 15.9978 9.27899 15.9978C9.23618 15.9978 9.1938 16.0064 9.15437 16.0231C9.11495 16.0398 9.07928 16.0642 9.04949 16.095C9.01874 16.1248 8.99428 16.1605 8.97758 16.1999C8.96088 16.2393 8.95228 16.2817 8.95228 16.3245C8.95228 16.3673 8.96088 16.4097 8.97758 16.4491C8.99428 16.4885 9.01874 16.5242 9.04949 16.554C9.89549 17.3985 11.5275 17.469 12.015 17.469V17.4705ZM13.503 13.26C13.503 13.947 14.0625 14.505 14.7495 14.505C15.4365 14.505 15.9945 13.9335 15.9945 13.26C15.9788 12.9404 15.8408 12.639 15.609 12.4184C15.3773 12.1977 15.0695 12.0746 14.7495 12.0746C14.4295 12.0746 14.1217 12.1977 13.89 12.4184C13.6582 12.639 13.5202 12.9404 13.5045 13.26H13.503Z",fill:"#FF4500"}),c.createElement("path",{d:"M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM18.258 10.2525C17.7855 10.2525 17.355 10.4385 17.04 10.74C15.8385 9.8805 14.19 9.3225 12.3585 9.2505L13.1595 5.499L15.7665 6.057C15.778 6.30042 15.8606 6.53513 16.0042 6.73203C16.1477 6.92893 16.3459 7.07936 16.5742 7.16469C16.8025 7.25001 17.0507 7.26647 17.2883 7.21203C17.5258 7.15759 17.7421 7.03464 17.9104 6.85841C18.0788 6.68219 18.1917 6.46045 18.2351 6.22067C18.2786 5.9809 18.2508 5.73363 18.1551 5.50952C18.0594 5.28542 17.9 5.09433 17.6967 4.95994C17.4934 4.82555 17.2552 4.75377 17.0115 4.7535C16.7784 4.75431 16.5502 4.82054 16.3529 4.94465C16.1557 5.06875 15.9972 5.24575 15.8955 5.4555L12.9885 4.8405C12.9494 4.83207 12.9089 4.83144 12.8696 4.83865C12.8302 4.84585 12.7926 4.86076 12.759 4.8825C12.724 4.90437 12.6942 4.93374 12.6719 4.9685C12.6496 5.00326 12.6353 5.04254 12.63 5.0835L11.742 9.2655C9.882 9.3225 8.205 9.8805 6.987 10.7535C6.672 10.4535 6.243 10.2675 5.772 10.2675C5.37256 10.2669 4.98501 10.4034 4.67412 10.6542C4.36322 10.905 4.14781 11.2549 4.06387 11.6454C3.97994 12.036 4.03256 12.4435 4.21296 12.7998C4.39335 13.1562 4.69059 13.4399 5.055 13.6035C5.025 13.776 5.0115 13.9485 5.0115 14.133C5.0115 16.8255 8.148 19.017 12.015 19.017C15.8805 19.017 19.017 16.8405 19.017 14.133C19.017 13.962 19.002 13.776 18.9735 13.6035C19.575 13.332 20.0055 12.7155 20.0055 12C20.0055 11.025 19.218 10.2525 18.258 10.2525Z",fill:"#FF4500"})),c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_10104_3846"},c.createElement("rect",{width:24,height:24,fill:"white"})))),$o=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("rect",{width:24,height:24,rx:4,fill:"url(#paint0_linear_8290_2043)"}),c.createElement("path",{d:"M17.6083 6.30043C16.8714 5.55676 15.994 4.96718 15.027 4.56603C14.06 4.16489 13.0228 3.96021 11.9759 3.96392C7.58919 3.96392 4.01411 7.538 4.01009 11.9257C4.01009 13.3311 4.37774 14.6982 5.07187 15.9087L3.9458 20.0362L8.1688 18.9293C9.33706 19.565 10.6459 19.8983 11.9759 19.8986H11.98C16.3677 19.8986 19.9418 16.3245 19.9458 11.9328C19.9468 10.8861 19.7407 9.84959 19.3393 8.88293C18.938 7.91627 18.3503 7.03858 17.6083 6.30043ZM11.9759 18.5506C10.7896 18.551 9.62506 18.2317 8.60476 17.6264L8.36368 17.4817L5.85841 18.1387L6.52742 15.6947L6.37071 15.4426C5.70754 14.3881 5.3568 13.1674 5.35916 11.9217C5.35916 8.27933 8.32953 5.30796 11.98 5.30796C12.8496 5.3064 13.711 5.477 14.5144 5.80991C15.3178 6.14283 16.0474 6.63148 16.661 7.24769C17.2768 7.8615 17.765 8.59116 18.0974 9.39458C18.4298 10.198 18.5999 11.0593 18.5977 11.9288C18.5937 15.5842 15.6233 18.5506 11.9759 18.5506ZM15.6073 13.5943C15.4094 13.4948 14.432 13.0136 14.2482 12.9453C14.0653 12.88 13.9317 12.8459 13.8011 13.0448C13.6675 13.2427 13.2858 13.6937 13.1713 13.8233C13.0568 13.9569 12.9383 13.972 12.7394 13.8735C12.5415 13.7731 11.8996 13.5641 11.1402 12.8841C10.5475 12.3567 10.1507 11.7037 10.0322 11.5059C9.91767 11.307 10.0211 11.2005 10.1206 11.101C10.208 11.0126 10.3185 10.868 10.4179 10.7535C10.5184 10.639 10.5515 10.5546 10.6168 10.422C10.6821 10.2874 10.651 10.1729 10.6018 10.0734C10.5515 9.97396 10.1547 8.99254 9.98698 8.59676C9.82626 8.206 9.66252 8.26025 9.53997 8.25523C9.42546 8.24819 9.29186 8.24819 9.15826 8.24819C9.05736 8.2507 8.95808 8.27404 8.86664 8.31673C8.77519 8.35943 8.69356 8.42057 8.62686 8.49631C8.44404 8.69521 7.93274 9.17637 7.93274 10.1578C7.93274 11.1392 8.64595 12.0824 8.7464 12.216C8.84484 12.3497 10.1467 14.3577 12.1447 15.2216C12.6168 15.4275 12.9885 15.549 13.2788 15.6415C13.7559 15.7941 14.1869 15.771 14.5304 15.7218C14.9121 15.6636 15.7067 15.2397 15.8745 14.7746C16.0392 14.3085 16.0392 13.9107 15.989 13.8273C15.9398 13.7429 15.8062 13.6937 15.6073 13.5943Z",fill:"white"}),c.createElement("defs",null,c.createElement("linearGradient",{id:"paint0_linear_8290_2043",x1:12,y1:0,x2:12,y2:24,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#00FF68"}),c.createElement("stop",{offset:1,stopColor:"#00D523"})))),Do=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("g",{clipPath:"url(#clip0_10030_1462)"},c.createElement("path",{d:"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",fill:"black",stroke:"white",strokeWidth:.0246577,strokeMiterlimit:10}),c.createElement("path",{d:"M5.17864 5.14282L10.8516 12.728L5.14288 18.8952H6.4278L11.4259 13.4956L15.4641 18.8952H19.8364L13.8441 10.8834L19.1578 5.14282H17.8729L13.2701 10.1155L9.55094 5.14282H5.17864ZM7.06816 6.08919H9.07677L17.9466 17.9488H15.938L7.06816 6.08919Z",fill:"white"})),c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_10030_1462"},c.createElement("rect",{width:24,height:24,fill:"white"}))));var ve=(e=>(e.X="x",e.REDDIT="reddit",e.LINKEDIN="linkedin",e.HACKER_NEWS="hacker_news",e.FACEBOOK="facebook",e.WHATSAPP="whatsapp",e))(ve||{});const Mo=[{platform:"x",platformName:"X",icon:l(Do,{})},{platform:"reddit",platformName:"Reddit",icon:l(To,{})},{platform:"linkedin",platformName:"LinkedIn",icon:l(ko,{})},{platform:"hacker_news",platformName:"Hacker News",icon:l(Ao,{})},{platform:"facebook",platformName:"Facebook",icon:l(Lo,{})},{platform:"whatsapp",platformName:"WhatsApp",icon:l($o,{})}],Po=r`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`,Bo=r`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Oo=r`
  margin-top: 8px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(146px, 1fr));
`,No=r`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid ${m("grayBlue","08")};
  transition: all 0.2s ease-in-out;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    border: 1px solid ${m("techPurple","03")};
    background: ${m("techPurple","08")};
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  }
`,zo=r`
  font-size: 24px;
  width: 24px;
  height: 24px;
`,Vo=r`
  margin-top: 8px;
  color: ${m("grayBlue","01")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,ii=e=>{const{title:t,shareUrl:n,onShare:o}=e,{t:i}=re();return C("div",{css:Po,children:[l("div",{css:Bo,children:i("user_management.modal.social_media.label")}),l("div",{css:Oo,children:Mo.map(a=>{const s=C("div",{css:No,onClick:()=>{o==null||o(a.platform)},children:[l("div",{css:zo,children:a.icon}),l("div",{css:Vo,children:a.platformName})]},a.platform);switch(a.platform){case ve.X:return l(vo,{url:n,title:t,children:s},a.platform);case ve.REDDIT:return l(bo,{url:n,title:t,children:s},a.platform);case ve.LINKEDIN:return l(xo,{url:n,title:t,children:s},a.platform);case ve.HACKER_NEWS:return l("div",{onClick:()=>{window.open(`https://news.ycombinator.com/submitlink?u=${n}&t=${t}`,"_blank")},children:s},a.platform);case ve.FACEBOOK:return l(fo,{url:n,title:t,children:s},a.platform);case ve.WHATSAPP:return l(Ro,{url:n,title:t,children:s},a.platform);default:return null}})})]})};ii.displayName="ShareBlockPC";r`
  display: flex;
  flex-direction: column;
`;r`
  margin-top: 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;r`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;r`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`;r`
  margin-top: 8px;
  color: ${m("grayBlue","04")};
  margin-right: 54px;
  white-space: break-spaces;
  word-break: break-all;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;r`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`;r`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;r`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;r`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;r`
  color: ${m("grayBlue","04")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;r`
  width: 100%;
  display: flex;
  gap: 11px;
  justify-content: center;
  align-items: center;
`;r`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 12px;
  border: 1px solid ${m("grayBlue","08")};
  flex: none;
  cursor: pointer;
  &:hover {
    border: 1px solid ${m("techPurple","03")};
    background: ${m("techPurple","08")};
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  }
`;r`
  display: flex;
  flex: none;
  width: 24px;
  height: 24px;
`;r`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
`;r`
  width: 48px;
  height: 48px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;r`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;r``;r`
  position: absolute;
  width: 100%;
  height: 78px;
  bottom: 48px;
`;r`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;r`
  padding-top: 12px;
  width: 100%;
  flex: none;
  overflow-x: hidden;
  background-color: ${m("white","01")};
`;r`
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;r`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
`;r`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: flex-end;
  width: 100%;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;r`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${m("grayBlue","03")};
`;r`
  height: 20px;
  width: 2px;
  background-color: ${m("grayBlue","08")};
`;r`
  margin-top: 20px;
  overflow-y: auto;
`;r`
  margin-bottom: 24px;
`;const Uo=e=>c.createElement("svg",{width:8,height:8,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("g",{clipPath:"url(#clip0_9028_2224)"},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49994 7C3.49994 7.27614 3.7238 7.5 3.99994 7.5C4.27609 7.5 4.49994 7.27614 4.49994 7V4.88312L6.24278 5.92884C6.47957 6.07092 6.7867 5.99414 6.92877 5.75735C7.07085 5.52056 6.99407 5.21343 6.75728 5.07135L4.97182 4.00005L6.75723 2.92884C6.99402 2.78677 7.07081 2.47964 6.92874 2.24285C6.78667 2.00606 6.47954 1.92927 6.24275 2.07134L4.49994 3.11699V1C4.49994 0.723858 4.27609 0.5 3.99994 0.5C3.7238 0.5 3.49994 0.723857 3.49994 1V3.11691L1.7573 2.07131C1.52051 1.92923 1.21338 2.00601 1.07131 2.2428C0.929232 2.47959 1.00601 2.78672 1.2428 2.9288L3.02815 4.00003L1.24277 5.07122C1.00598 5.21329 0.929193 5.52042 1.07126 5.75721C1.21333 5.99401 1.52046 6.07079 1.75725 5.92872L3.49994 4.88315V7Z",fill:"#FF4747"})),c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_9028_2224"},c.createElement("rect",{width:8,height:8,fill:"white"})))),Fo=(e,t,n)=>ut({method:"POST",url:`/products/apps/${t}/updatePropertyWith?property=hashtags`,data:{hashtags:n}},{teamID:e}),ri=async(e,t,n)=>Wn({method:"PATCH",url:`/apps/${e}/config`,data:n},{teamID:t}),Wo=(e,t,n)=>ut({method:"POST",url:`/products/apps/${t}/recontributeWith?property=hashtags`,data:{hashtags:n}},{teamID:e}),mn=r`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
`,xn=r`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 22px;
`,jo=r`
  margin-left: 4px;
`,Ho=r`
  width: 100%;
  padding-top: 16px;
`,oi=e=>{const[t,n]=c.useState(!1),{t:o}=re(),{control:i,formState:a,handleSubmit:s}=Zn({mode:"onSubmit",defaultValues:{appName:e.appName,appDesc:e.appDesc,hashtags:[],publishWithAIAgent:!0}}),p=Oe(),{isValid:h}=Xn({control:i});return C(Yt,{withoutLine:!0,w:"498px",closable:!0,onCancel:()=>{var d;(d=e.onClose)==null||d.call(e)},enableOnFormTags:!1,maskClosable:!1,visible:!0,hideCancel:!e.productContributed,okText:e.productContributed?o("contribute.update_modal.button"):o("contribute.first_time_modal.button"),onOk:s(async d=>{var f;n(!0),await ri(e.productID,e.teamID,{appName:d.appName,description:d.appDesc,publishWithAIAgent:d.publishWithAIAgent});try{e.productContributed?await Fo(e.teamID,e.productID,d.hashtags):await Wo(e.teamID,e.productID,d.hashtags),e.onAppInfoUpdate({appName:d.appName,appDesc:d.appDesc,publishWithAIAgent:d.publishWithAIAgent}),e.onContributed(!0),e.onAppPublic(!0),(f=e.onClose)==null||f.call(e)}catch{p.error({content:o("user_management.modal.message.make_public_failed")})}finally{n(!1)}}),okButtonProps:{colorScheme:m("grayBlue","02"),disabled:!h,loading:t},title:e.productContributed?o("contribute.update_modal.title"):o("contribute.first_time_modal.title"),children:[l(De,{name:"appName",control:i,render:({field:d})=>C("section",{css:mn,children:[C("label",{css:xn,children:[o("new_dashboard.app_setting.app_name"),l(Uo,{css:jo})]}),l(qt,{...d,colorScheme:"techPurple",error:!!(a!=null&&a.errors.appName),placeholder:o("new_dashboard.app_setting.placeholder.app_name")})]}),rules:{required:o("page.user.sign_up.error_message.username.require"),maxLength:{value:280,message:o("page.user.sign_up.error_message.username.length")}}}),l(De,{name:"appDesc",control:i,render:({field:d})=>C("section",{css:mn,children:[l("label",{css:xn,children:o("new_dashboard.app_setting.description")}),l(Nn,{...d,showWordLimit:!0,maxLength:180,autoSize:{minRows:6},colorScheme:"techPurple",error:!!(a!=null&&a.errors.appDesc),placeholder:o("new_dashboard.app_setting.placeholder.description")})]})}),l(De,{name:"hashtags",control:i,render:({field:d})=>l(Qr,{productID:e.productID,productType:e.productType,productContributed:e.productContributed,onTagChange:f=>{d.onChange(f)}})}),!e.productContributed&&l(De,{name:"publishWithAIAgent",control:i,render:({field:d})=>l("div",{css:Ho,children:l(Vi,{...d,value:"",checked:d.value,colorScheme:"techPurple",children:o("contribute.checkbox_ai_agent")})})})]})};oi.displayName="ContributeAppPC";const Ko=async(e,t,n)=>(await Wn({method:"PATCH",url:`/apps/${n}/config`,data:{public:e}},{teamID:t}),!0),Go=(e,t,n)=>ut({method:"POST",url:`/products/apps/${t}`,data:{hashtags:n}},{teamID:e}),qo=(e,t)=>ut({method:"DELETE",url:`/products/apps/${t}`},{teamID:e}),Yo=r`
  display: flex;
  flex-direction: column;
`,yn=r`
  display: flex;
  margin-top: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`,wt=r`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${m("grayBlue","04")};
`,et=r`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Zo=r`
  display: flex;
  gap: 8px;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`,Xo=r`
  align-items: center;
  display: inline-flex;
  margin-left: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1px 7px;
  color: ${m("techPurple","03")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-transform: capitalize;
  background: ${m("techPurple","08")};
`,bt=r`
  display: flex;
  align-items: center;
`,ai=e=>{const{title:t,appDesc:n,appName:o,onAppInfoUpdate:i,onShare:a,appID:s,ownerTeamID:p,ownerTeamIdentify:h,userRoleForThisApp:d,defaultAppPublic:f,defaultAppContribute:g,defaultPublishWithAIAgent:u,canUseBillingFeature:_,onAppPublic:x,onAppContribute:v,onCopyContributeLink:y,onCopyPublicLink:w,hidePublic:I}=e,T=Oe(),{t:E}=re(),[F,L]=c.useState(!1),[A,b]=Se(!1,{defaultValue:f}),[R,$]=c.useState(!1),[O,G]=c.useState(!1),[W,M]=Se(!1,{defaultValue:g}),[J,se]=Se(!1,{defaultValue:u}),[k,Y]=c.useState(!1),{track:K}=c.useContext(Ye),ne=te(U.VIEWER,d,!1),ye=c.useCallback(async j=>{const ke=performance.now();K==null||K(B.CLICK,{element:"invite_modal_contribute_switch",parameter4:!j,parameter5:s}),M(j),b(j);try{$(!0),await ri(s,p,{publishWithAIAgent:J}),e.onAppInfoUpdate({appName:o,appDesc:n,publishWithAIAgent:J}),j?await Go(p,s,void 0):await qo(p,s),K==null||K(B.REQUEST,{element:"invite_modal_contribute_switch",consume:performance.now()-ke,parameter2:"suc",parameter4:j,parameter5:s}),v==null||v(j),x==null||x(j),j&&(K==null||K(B.SHOW,{element:"invite_modal_contribute_copy",parameter5:s}))}catch{T.error({content:E("user_management.modal.message.make_public_failed")}),K==null||K(B.REQUEST,{element:"invite_modal_contribute_switch",consume:performance.now()-ke,parameter2:"failed",parameter4:j,parameter5:s}),M(!j),b(!j)}finally{$(!1)}},[n,s,o,T,v,x,p,e,J,M,b,E,K]),we=C(Fe,{children:[C("div",{css:yn,children:[l("div",{css:et,children:E("user_management.modal.link.make_public_title")}),!_&&C("div",{css:Xo,children:[l(cr,{}),l("div",{style:{marginLeft:4},children:"Premium"})]}),l("div",{style:{flexGrow:1}}),ne&&l(dn,{disabled:W,checked:A,colorScheme:m("grayBlue","02"),onChange:async j=>{b(j);try{L(!0),await Ko(j,p,s),x==null||x(j)}catch{T.error({content:E("user_management.modal.message.make_public_failed")}),b(!j)}finally{L(!1)}}})]}),A&&l(ae,{mt:"8px",colorScheme:"grayBlue",variant:"outline",loading:F,onClick:()=>{w==null||w(hn(h,s))},children:E("contribute.copy_link")})]}),Ae=C(Fe,{children:[l(Dn,{zIndex:1e3,children:C("div",{css:yn,children:[C("div",{css:bt,children:[l(je,{popupVisible:k,onVisibleChange:Y,triggerProps:{renderInBody:!0},dropList:C(We,{children:[l(de,{value:"onlyApp",onClick:()=>{se(!1)},children:C("div",{css:bt,children:[l("div",{css:et,children:E("user_management.modal.contribute.contribute_only")}),l(at,{trigger:"hover",position:"top",content:E("user_management.modal.contribute.contribute_only_tips"),children:l("div",{css:wt,children:l(st,{})})})]})}),l(de,{value:"appAndAgent",onClick:()=>{se(!0)},children:C("div",{css:bt,children:[l("div",{css:et,children:E("user_management.modal.contribute.contribute_together")}),l(at,{trigger:"hover",position:"top",content:E("user_management.modal.contribute.contribute_together_tips"),children:l("div",{css:wt,children:l(st,{})})})]})})]}),disabled:!ne||W,children:C("div",{css:et,children:[E(ne&&J?"user_management.modal.contribute.contribute_together":"user_management.modal.contribute.contribute_only"),ne&&!W&&(k?l(Mn,{}):l(Pn,{}))]})}),l(at,{trigger:"hover",position:"top",content:E(ne&&J?"user_management.modal.contribute.contribute_together_tips":"user_management.modal.contribute.contribute_only_tips"),children:l("div",{css:wt,children:l(st,{})})})]}),ne&&l(dn,{checked:W,colorScheme:m("grayBlue","02"),onChange:ye})]})}),W&&C("div",{css:Zo,children:[ne&&l(ae,{flex:"1",colorScheme:"grayBlue",variant:"outline",loading:R,onClick:()=>{G(!0)},children:E("contribute.update")}),l(ae,{flex:"1",colorScheme:"grayBlue",variant:"outline",loading:R,onClick:()=>{y==null||y(At(s))},children:E("contribute.copy_link")})]})]}),Qe=l(ii,{onShare:a,title:t,shareUrl:W?At(s):hn(h,s)});return C(Fe,{children:[C("div",{css:Yo,children:[!I&&(A||ne)&&we,(W||ne)&&Ae,(W||A)&&Qe]}),O&&l(oi,{onClose:()=>{G(!1)},teamID:p,onContributed:v,onAppInfoUpdate:i,onAppPublic:x,appName:o,appDesc:n,productID:s,productType:ct.UNIT_TYPE_APP,productContributed:W})]})};ai.displayName="AppPublicPC";const Jo=r`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`,Qo=r`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`,ea=r`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`,Qt=e=>{let t="public";e.canInvite&&te(U.VIEWER,e.currentUserRole,!1)?t="edit":e.canInvite&&U.VIEWER===e.currentUserRole&&e.isDeployed?t="use":e.canPublic&&(te(U.VIEWER,e.currentUserRole)||e.defaultAppContribute||e.defaultAppPublic)&&(t="public");const[n,o]=c.useState(e.defaultTab??t);c.useEffect(()=>{e.defaultTab!==void 0&&o(e.defaultTab)},[e.defaultTab]);const{t:i}=re();return C(Yt,{withoutLine:!1,enableOnFormTags:[],withoutPadding:!0,w:"498px",onCancel:()=>{var a;(a=e.onClose)==null||a.call(e)},footer:!1,maskClosable:!1,visible:!0,children:[C("div",{css:Jo,children:[C(Ui,{activeKey:n,variant:"text",colorScheme:"grayBlue",withoutBorderLine:!0,onChange:a=>{o(a)},children:[e.canInvite&&te(U.VIEWER,e.currentUserRole,!1)&&l(xt,{title:i("user_management.modal.title.invite_to_edit")},"edit"),e.canInvite&&e.isDeployed&&l(xt,{title:i("user_management.modal.title.invite_to_use")},"use"),e.canPublic&&(te(U.VIEWER,e.userRoleForThisApp,!1)||e.defaultAppContribute||e.defaultAppPublic)&&Ke&&l(xt,{title:i("user_management.modal.tab.public")},"public")]}),l("div",{css:ea,onClick:()=>{var a;(a=e.onClose)==null||a.call(e)},children:l(zn,{})})]}),C("div",{css:Qo,children:[n==="edit"&&e.canInvite&&C(Fe,{children:[l(Pt,{excludeUserRole:[U.VIEWER],redirectURL:e.editRedirectURL,defaultBalance:e.defaultBalance,defaultInviteUserRole:U.EDITOR,defaultAllowInviteLink:e.defaultAllowInviteLink,teamID:e.teamID,currentUserRole:e.currentUserRole,onInviteLinkStateChange:e.onInviteLinkStateChange,onCopyInviteLink:e.onCopyEditInviteLink}),l(Mt,{itemID:e.appID,excludeUserRole:[U.VIEWER],redirectURL:e.editRedirectURL,onBalanceChange:e.onBalanceChange,defaultInviteUserRole:U.EDITOR,teamID:e.teamID,currentUserRole:e.currentUserRole,defaultBalance:e.defaultBalance,onInvitedChange:e.onInvitedChange})]}),n==="use"&&e.canInvite&&C(Fe,{children:[l(Pt,{excludeUserRole:[],redirectURL:e.useRedirectURL,defaultBalance:e.defaultBalance,defaultInviteUserRole:U.VIEWER,defaultAllowInviteLink:e.defaultAllowInviteLink,teamID:e.teamID,currentUserRole:e.currentUserRole,onInviteLinkStateChange:e.onInviteLinkStateChange,onCopyInviteLink:e.onCopyUseInviteLink}),l(Mt,{itemID:e.appID,excludeUserRole:[],redirectURL:e.useRedirectURL,onBalanceChange:e.onBalanceChange,defaultInviteUserRole:U.VIEWER,teamID:e.teamID,currentUserRole:e.currentUserRole,defaultBalance:e.defaultBalance,onInvitedChange:e.onInvitedChange})]}),e.canPublic&&n==="public"&&Ke&&l(ai,{appDesc:e.appDesc,appName:e.appName,onAppInfoUpdate:e.onAppInfoUpdate,title:e.title,hidePublic:!1,canUseBillingFeature:e.canUseBillingFeature,defaultAppPublic:e.defaultAppPublic,defaultAppContribute:e.defaultAppContribute,defaultPublishWithAIAgent:e.defaultPublishWithAIAgent,appID:e.appID,userRoleForThisApp:e.userRoleForThisApp,ownerTeamIdentify:e.ownerTeamIdentify,onAppPublic:e.onAppPublic,onAppContribute:e.onAppContribute,onCopyPublicLink:e.onCopyPublicLink,onCopyContributeLink:e.onCopyContributeLink,ownerTeamID:e.ownerTeamID,onShare:e.onShare})]})]})};Qt.defaultProps={canPublic:!0};Qt.displayName="ShareAppPC";r`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
`;const ta=r`
  width: 48px;
  height: 48px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;r`
  margin-top: 125px;
  margin-bottom: 71px;
  ${ta};
`;r`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;r``;r`
  position: absolute;
  width: 100%;
  height: 78px;
  bottom: 48px;
`;r`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;r`
  position: sticky;
  top: 0;
  padding-top: 12px;
  background-color: ${m("white","01")};
`;r`
  width: 100%;
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;r`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: flex-end;
  width: 100%;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;r`
  padding-top: 60px;
`;r`
  overflow-y: auto;
`;r`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`;r`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;r`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;r`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`;r`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;r`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;r`
  position: sticky;
  top: 0;
  padding-top: 12px;
  background-color: ${m("white","01")};
`;r`
  width: 100%;
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;r`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: flex-end;
  width: 100%;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;r`
  padding-top: 60px;
`;r`
  overflow-y: auto;
`;const na=c.createContext(null),ia=typeof document<"u",si=ia?c.useLayoutEffect:c.useEffect,ra=c.createContext({});function oa(e){const t=c.useRef(null);return t.current===null&&(t.current=e()),t.current}const aa=e=>e;class wn{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function sa(e){let t=new wn,n=new wn,o=0,i=!1,a=!1;const s=new WeakSet,p={schedule:(h,d=!1,f=!1)=>{const g=f&&i,u=g?t:n;return d&&s.add(h),u.add(h)&&g&&i&&(o=t.order.length),h},cancel:h=>{n.remove(h),s.delete(h)},process:h=>{if(i){a=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),o=t.order.length,o)for(let d=0;d<o;d++){const f=t.order[d];f(h),s.has(f)&&(p.schedule(f),e())}i=!1,a&&(a=!1,p.process(h))}};return p}const tt=["prepare","read","update","preRender","render","postRender"],la=40;function ca(e,t){let n=!1,o=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=tt.reduce((g,u)=>(g[u]=sa(()=>n=!0),g),{}),s=g=>a[g].process(i),p=()=>{const g=performance.now();n=!1,i.delta=o?1e3/60:Math.max(Math.min(g-i.timestamp,la),1),i.timestamp=g,i.isProcessing=!0,tt.forEach(s),i.isProcessing=!1,n&&t&&(o=!1,e(p))},h=()=>{n=!0,o=!0,i.isProcessing||e(p)};return{schedule:tt.reduce((g,u)=>{const _=a[u];return g[u]=(x,v=!1,y=!1)=>(n||h(),_.schedule(x,v,y)),g},{}),cancel:g=>tt.forEach(u=>a[u].cancel(g)),state:i,steps:a}}const{schedule:da,cancel:Jl,state:Ql,steps:ec}=ca(typeof requestAnimationFrame<"u"?requestAnimationFrame:aa,!0);function li(){const e=c.useRef(!1);return si(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function pa(){const e=li(),[t,n]=c.useState(0),o=c.useCallback(()=>{e.current&&n(t+1)},[t]);return[c.useCallback(()=>da.postRender(o),[o]),t]}class ua extends c.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ha({children:e,isPresent:t}){const n=c.useId(),o=c.useRef(null),i=c.useRef({width:0,height:0,top:0,left:0});return c.useInsertionEffect(()=>{const{width:a,height:s,top:p,left:h}=i.current;if(t||!o.current||!a||!s)return;o.current.dataset.motionPopId=n;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${p}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),c.createElement(ua,{isPresent:t,childRef:o,sizeRef:i},c.cloneElement(e,{ref:o}))}const _t=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:a,mode:s})=>{const p=oa(fa),h=c.useId(),d=c.useMemo(()=>({id:h,initial:t,isPresent:n,custom:i,onExitComplete:f=>{p.set(f,!0);for(const g of p.values())if(!g)return;o&&o()},register:f=>(p.set(f,!1),()=>p.delete(f))}),a?void 0:[n]);return c.useMemo(()=>{p.forEach((f,g)=>p.set(g,!1))},[n]),c.useEffect(()=>{!n&&!p.size&&o&&o()},[n]),s==="popLayout"&&(e=c.createElement(ha,{isPresent:n},e)),c.createElement(na.Provider,{value:d},e)};function fa(){return new Map}function ga(e){return c.useEffect(()=>()=>e(),[])}const Ee=e=>e.key||"";function ma(e,t){e.forEach(n=>{const o=Ee(n);t.set(o,n)})}function xa(e){const t=[];return c.Children.forEach(e,n=>{c.isValidElement(n)&&t.push(n)}),t}const ya=({children:e,custom:t,initial:n=!0,onExitComplete:o,exitBeforeEnter:i,presenceAffectsLayout:a=!0,mode:s="sync"})=>{const p=c.useContext(ra).forceRender||pa()[0],h=li(),d=xa(e);let f=d;const g=c.useRef(new Map).current,u=c.useRef(f),_=c.useRef(new Map).current,x=c.useRef(!0);if(si(()=>{x.current=!1,ma(d,_),u.current=f}),ga(()=>{x.current=!0,_.clear(),g.clear()}),x.current)return c.createElement(c.Fragment,null,f.map(I=>c.createElement(_t,{key:Ee(I),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:s},I)));f=[...f];const v=u.current.map(Ee),y=d.map(Ee),w=v.length;for(let I=0;I<w;I++){const T=v[I];y.indexOf(T)===-1&&!g.has(T)&&g.set(T,void 0)}return s==="wait"&&g.size&&(f=[]),g.forEach((I,T)=>{if(y.indexOf(T)!==-1)return;const E=_.get(T);if(!E)return;const F=v.indexOf(T);let L=I;if(!L){const A=()=>{g.delete(T);const b=Array.from(_.keys()).filter(R=>!y.includes(R));if(b.forEach(R=>_.delete(R)),u.current=d.filter(R=>{const $=Ee(R);return $===T||b.includes($)}),!g.size){if(h.current===!1)return;p(),o&&o()}};L=c.createElement(_t,{key:Ee(E),isPresent:!1,onExitComplete:A,custom:t,presenceAffectsLayout:a,mode:s},E),g.set(T,L)}f.splice(F,0,L)}),f=f.map(I=>{const T=I.key;return g.has(T)?I:c.createElement(_t,{key:Ee(I),isPresent:!0,presenceAffectsLayout:a,mode:s},I)}),c.createElement(c.Fragment,null,g.size?f:f.map(I=>c.cloneElement(I)))},wa=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.$),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),ba=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.x),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),_a=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.u),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Ca=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.t),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),va=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e._),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Ea=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.Z),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Ia=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.w),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Sa=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.y),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Ra=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.z),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),La=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.a0),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Aa=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.L),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),ka=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.Y),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Ta=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.K),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),$a=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.B),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Da=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.X),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Ma=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.J),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Pa=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.W),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Ba=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.a1),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Oa=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.s),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Na=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.V),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),za=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.v),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Va=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.q),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Ua=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.r),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Fa=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.Q),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),Wa=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.p),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),ja=c.lazy(()=>N(()=>import("./upstash-7245fd7f.js").then(e=>e.o),["assets/upstash-7245fd7f.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js"])),bn=Fi(),nt=e=>{pr(e)===Qn.EMPTY?bn.info({content:fn.t("empty_copied_tips")}):bn.success({content:fn.t("copied")})};function tc(e,t){switch(e){case"supabasedb":return l(wa,{size:t});case"graphql":return l(ba,{size:t});case"elasticsearch":return l(_a,{size:t});case"dynamodb":return l(Ca,{size:t});case"snowflake":return l(va,{size:t});case"smtp":return l(Ea,{size:t});case"googlesheets":return l(Ia,{size:t});case"hfendpoint":case"huggingface":return l(Sa,{size:t});case"mariadb":return l(Ra,{size:t});case"tidb":return l(La,{size:t});case"neon":return l(Aa,{size:t});case"s3":return l(ka,{size:t});case"mysql":return l(Ta,{size:t});case"mssql":return l($a,{size:t});case"restapi":return l(Da,{size:t});case"mongodb":return l(Ma,{size:t});case"redis":return l(Pa,{size:t});case"upstash":return l(Ba,{size:t});case"hydra":return l(Oa,{size:t});case"postgresql":return l(Na,{size:t});case"firebase":return l(za,{size:t});case"clickhouse":return l(Va,{size:t});case"couchdb":return l(Ua,{size:t});case"oracle":case"oracle9i":return l(Fa,{size:t});case"appwrite":return l(Wa,{size:t});case"airtable":return l(ja,{size:t})}return null}const en=c.createContext({}),nc=e=>{const{children:t,updateAppConfig:n,copyApp:o,deleteApp:i}=e;return l(en.Provider,{value:{updateAppConfig:n,copyApp:o,deleteApp:i},children:t})},Ha=r`
  padding: 24px 24px 0;
  width: 100%;
`;r`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Wi.modal};
  display: flex;
  align-items: center;
  justify-content: center;
`;r`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
  z-index: -1;
`;const Ka=r`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 16px;
  width: 486px;
  position: relative;
`,Ga=r`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${m("grayBlue","02")};
  margin: 0;
  text-align: center;
`,qa=r`
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
`,Ya=r`
  display: grid;
  gap: 32px;
  padding-bottom: 24px;
`,Za=r`
  display: grid;
  gap: 24px;
`,_n=r`
  display: grid;
  gap: 8px;
`,Cn=r``;r`
  &:disabled {
    -webkit-text-fill-color: ${m("grayBlue","05")};
  }
`;const vn=r`
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: ${Zt(`--${Xt}-grayBlue-02`)};
`;r`
  color: ${Zt(`--${Xt}-grayBlue-04`)};
`;r`
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  line-height: 22px;
  color: ${Zt(`--${Xt}-orange-03`)};
`;r`
  position: absolute;
  font-size: 16px;
  line-height: 0;
  top: 3px;
  left: 0;
`;function Xa(e,t){let n=r``;return t&&(n=r`
      margin-left: 4px;
    `),r`
    font-size: 14px;
    color: ${e};
    font-weight: 500;
    ${n};
  `}const ci=e=>{const{appID:t,appDesc:n="",appName:o="",onVisibleChange:i,onSaveEvent:a,onCloseEvent:s}=e,{updateAppConfig:p}=c.useContext(en),{control:h,formState:d,handleSubmit:f,reset:g}=Zn({mode:"onSubmit",criteriaMode:"firstError",defaultValues:{appName:o,description:n}}),{isSubmitting:u,isDirty:_}=Xn({control:h}),{t:x}=re(),v=Oe(),y=c.useCallback(async w=>{try{a(),p(t,{description:w.description,appName:w.appName}),g({appName:w.appName,description:w.description}),v.success({content:x("dashboard.app.rename_success")})}catch{v.error({content:x("dashboard.app.rename_fail")})}i(!1)},[i,a,p,t,g,v,x]);return l(Yt,{maskClosable:!0,withoutPadding:!0,w:"528px",visible:!0,footer:!1,onCancel:()=>{s(),i(!1)},children:C("div",{css:Ha,children:[C("header",{css:Ka,children:[l("h3",{css:Ga,children:x("new_dashboard.app_setting.app_setting")}),l("span",{css:qa,onClick:()=>{s(),i(!1)},children:l(zn,{})})]}),C("form",{css:Ya,autoComplete:"off",onSubmit:f(y),children:[C("section",{css:Za,children:[C("section",{css:_n,children:[C("label",{css:vn,children:[x("new_dashboard.app_setting.app_name"),l("span",{css:Xa(m("red","02")),children:"*"})]}),l("div",{css:Cn,children:l(De,{name:"appName",control:h,render:({field:w})=>l(qt,{...w,colorScheme:"techPurple",error:!!(d!=null&&d.errors.appName),placeholder:x("new_dashboard.app_setting.placeholder.app_name")}),rules:{required:x("page.user.sign_up.error_message.username.require"),maxLength:{value:280,message:x("page.user.sign_up.error_message.username.length")}}})})]}),C("section",{css:_n,children:[l("label",{css:vn,children:x("new_dashboard.app_setting.description")}),l("div",{css:Cn,children:l(De,{name:"description",control:h,render:({field:w})=>l(Nn,{...w,showWordLimit:!0,maxLength:180,autoSize:{minRows:6,maxRows:6},colorScheme:"techPurple",error:!!(d!=null&&d.errors.description),placeholder:x("new_dashboard.app_setting.placeholder.description")})})})]})]}),l(ae,{colorScheme:"techPurple",loading:u,disabled:!_,fullWidth:!0,children:x("new_dashboard.app_setting.save")})]})]})})};ci.displayName="AppSettingModal";const di=e=>{var J,se;const{appID:t,appName:n,appDeployed:o,appConfig:i}=e,{t:a}=re(),s=Oe(),p=ji(),h=Xi(),{deleteApp:d,copyApp:f,updateAppConfig:g}=c.useContext(en),{track:u,pageName:_}=c.useContext(Ye),x=kt(jn),v=Kn(x.myRole,qn.APP,Tt(x),Gn.EDIT_APP),y=kt(Ji),w=Jt(),[I,T]=c.useState(!1),[E,F]=c.useState(!1),L=ir(x.myRole,x.permission.allowEditorManageTeamMember,x.permission.allowViewerManageTeamMember),A=rr(x,x.myRole,i.public,i.publishedToMarketplace),b=or(x.myRole,Tt(x),(J=x==null?void 0:x.totalTeamLicense)==null?void 0:J.teamLicensePurchased,(se=x==null?void 0:x.totalTeamLicense)==null?void 0:se.teamLicenseAllPaid),R=async()=>{u==null||u(B.CLICK,{element:"app_duplicate",parameter5:t},"both"),f(t).catch(()=>{s.error({content:a("dashboard.app.duplicate_fail")})})},$=()=>{F(!0),u==null||u(B.SHOW,{element:"app_setting_modal",parameter5:t},"both")},O=c.useCallback(()=>{if(u==null||u(B.CLICK,{element:"invite_entry",parameter5:t},"both"),!ar(x,x.myRole,i.public,i.publishedToMarketplace)){w({modalType:"upgrade",from:"app_card_more_share"});return}T(!0)},[i.public,i.publishedToMarketplace,t,x,u,w]),G=c.useCallback(()=>{u==null||u(B.CLICK,{element:"app_delete",parameter5:t},"both"),u==null||u(B.CLICK,{element:"app_delete_modal",parameter5:t},"both");const k=p.show({w:"496px",blockOkHide:!0,title:a("dashboard.common.delete_title"),children:a("dashboard.common.delete_content"),cancelText:a("dashboard.common.delete_cancel_text"),okText:a("dashboard.common.delete_ok_text"),okButtonProps:{colorScheme:"red"},maskClosable:!1,onOk:()=>{u==null||u(B.CLICK,{element:"app_delete_modal_delete",parameter5:t},"both"),p.close(k),d(t).then(()=>{s.success({content:a("dashboard.app.trash_success")})},()=>{s.error({content:a("dashboard.app.trash_failure")})})},onCancel:()=>{u==null||u(B.CLICK,{element:"app_delete_modal_close",parameter5:t},"both")}})},[u,t,p,a,s,d]),W=c.useCallback(k=>{k&&(u==null||u(B.CLICK,{element:"app_more",parameter5:t},"both"),u==null||u(B.SHOW,{element:"app_duplicate",parameter5:t},"both"),u==null||u(B.SHOW,{element:"app_delete",parameter5:t},"both"),A&&(u==null||u(B.SHOW,{element:"invite_entry",parameter5:t},"both")))},[t,u,A]),M=c.useCallback(k=>{k&&(u==null||u(B.CLICK,{element:"app_more",parameter5:t},"both"),u==null||u(B.SHOW,{element:"invite_entry",parameter5:t},"both"))},[t,u]);return c.useEffect(()=>{(v||o&&L)&&(u==null||u(B.SHOW,{element:"app_more",parameter5:t},"both"))},[v,o,L,t,u]),c.useEffect(()=>{u==null||u(B.SHOW,{element:"app"},"both")},[u]),c.useEffect(()=>{I&&(u==null||u(B.SHOW,{element:"invite_modal",parameter5:t},"both"))},[t,I,u]),c.useEffect(()=>{E&&(u==null||u(B.SHOW,{element:"app_setting_modal",parameter5:t},"both"))},[t,E,u]),C("div",{onClick:k=>{k.stopPropagation()},children:[v?l(je,{position:"bottom-end",trigger:"click",onVisibleChange:W,dropList:C(We,{w:"184px",children:[l(de,{value:"rename",title:C("div",{children:[l(Hi,{mr:"8px"}),l("span",{children:a("new_dashboard.app_setting.app_setting")})]}),onClick:$},"rename"),A&&l(de,{value:"share",title:C("div",{children:[l(pn,{mr:"8px"}),l("span",{children:a("dashboard.common.share")})]}),onClick:O},"share"),l(de,{value:"duplicate",title:C("div",{children:[l(Ki,{mr:"8px"}),l("span",{children:a("dashboard.common.duplicate")})]}),onClick:R},"duplicate"),l(de,{value:"delete",title:C("div",{children:[l(Gi,{mr:"8px"}),l("span",{children:a("dashboard.common.delete")})]}),deleted:!0,onClick:G},"delete")]}),children:l(ae,{variant:"text",colorScheme:"grayBlue",leftIcon:l(un,{size:"14px"})})}):A&&l(je,{position:"bottom-end",trigger:"click",triggerProps:{closeDelay:0,openDelay:0},onVisibleChange:M,dropList:l(We,{w:"184px",children:l(de,{value:"share",title:C("div",{children:[l(pn,{mr:"8px"}),l("span",{children:a("dashboard.common.share")})]}),onClick:O},"share")}),children:l(ae,{variant:"text",colorScheme:"grayBlue",leftIcon:l(un,{size:"14px"})})}),l(er,{basicTrack:(k,Y,K,ne)=>{u==null||u(k,K,ne)},pageName:_,children:I&&Ke&&l(Qt,{itemID:t,onInvitedChange:k=>{const Y=k.map(K=>({...K,userID:"",nickname:"",avatar:"",userStatus:Qi.PENDING,permission:{},createdAt:"",updatedAt:""}));h(yt.updateInvitedUserReducer(Y))},appDesc:i.description,appName:n,onAppInfoUpdate:k=>{g(t,{...k,appName:k.appName,description:k.appDesc,publishWithAIAgent:k.publishWithAIAgent})},isDeployed:o,title:a("user_management.modal.social_media.default_text.app",{appName:n}),editRedirectURL:`${Pe(window.customDomain)}/${x.identifier}/app/${t}`,useRedirectURL:`${Pe(window.customDomain)}/${x.identifier}/deploy/app/${t}`,defaultAllowInviteLink:x.permission.inviteLinkEnabled,defaultPublishWithAIAgent:i.publishWithAIAgent,onInviteLinkStateChange:k=>{h(yt.updateTeamMemberPermissionReducer({teamID:x.id,newPermission:{...x.permission,inviteLinkEnabled:k}}))},onClose:()=>{T(!1)},canInvite:L,defaultBalance:1/0,teamID:x.id,currentUserRole:x.myRole,onBalanceChange:k=>{h(yt.updateTeamMemberSubscribeReducer({teamID:x.id,subscribeInfo:{...x.currentTeamLicense,balance:k}}))},defaultAppPublic:i.public,defaultAppContribute:i.publishedToMarketplace,appID:t,userRoleForThisApp:x.myRole,ownerTeamID:x.id,ownerTeamIdentify:x.identifier,onAppPublic:k=>{g(t,{public:k})},onAppContribute:k=>{if(g(t,{publishedToMarketplace:k}),k){const Y=new URL(At(t));Y.searchParams.set("token",He()),window.open(Y,"_blank")}},onCopyPublicLink:k=>{nt(a("user_management.modal.custom_copy_text_app_invite",{userName:y.nickname,teamName:x.name,inviteLink:k}))},onCopyContributeLink:k=>{u==null||u(B.CLICK,{element:"invite_modal_public_copy",parameter5:t},"both"),nt(a("user_management.modal.contribute.default_text.app",{appName:n,appLink:k}))},onCopyEditInviteLink:k=>{nt(a("user_management.modal.custom_copy_text_app_invite",{userName:y.nickname,teamName:x.name,inviteLink:k}))},onCopyUseInviteLink:k=>{nt(a("user_management.modal.custom_copy_text_app_invite",{userName:y.nickname,teamName:x.name,inviteLink:k}))},canUseBillingFeature:b,onShare:k=>{const{publishedToMarketplace:Y}=i;u==null||u(B.CLICK,{element:"share_modal_social_media",parameter1:Y,parameter4:k,parameter5:t},"both")}})}),l(ya,{children:E&&l(ci,{appID:t,appDesc:i.description,appName:n,onVisibleChange:k=>{F(k)},onSaveEvent:()=>{u==null||u(B.CLICK,{element:"app_setting_modal_save",parameter5:t},"both")},onCloseEvent:()=>{u==null||u(B.CLICK,{element:"app_setting_modal_close",parameter5:t},"both")}})})]})};di.displayName="AppCardActionItem";r`
  padding: 1px 8px;
  box-sizing: content-box;
`;r`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-transform: capitalize;
`;r`
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;r`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;r`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  width: 110px;
  color: ${m("grayBlue","02")};
`;r`
  cursor: pointer;
  min-width: 110px;
  padding: 8px 0;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: ${m("grayBlue","02")};
`;r`
  display: flex;
  align-items: center;
  gap: 8px;
`;r`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${m("grayBlue","09")};
  }

  & > svg {
    width: 16px;
    height: 16px;
  }
`;r`
  cursor: pointer;
`;const Ja=r`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${m("grayBlue","08")};
  background: ${m("white","01")};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: ${m("techPurple","03")};
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);

    .dashboardAppEditButton,
    .dashboardAppLaunchButton {
      visibility: visible;
    }
  }
`,Qa=r`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;r`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;const es=r`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
  overflow: hidden;
`,pi=r`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`,ts=r`
  color: #1d2129;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  ${pi};
`,ns=r`
  color: #a9aeb8;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  ${pi};
`,is=r`
  color: #787e85;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,rs=r`
  display: flex;
  align-items: flex-start;
  min-height: 24px;
`,os=r`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${m("white","01")};
  margin-right: -6px;
`,as=r`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`,ss=e=>{const{t}=re(),{appInfo:n}=e,{teamIdentifier:o}=Yn(),{track:i}=c.useContext(Ye),a=kt(jn),s=Kn(a.myRole,qn.APP,Tt(a),Gn.EDIT_APP),p=c.useCallback(()=>{i==null||i(B.CLICK,{element:"card",parameter3:"team",parameter5:n.appId},"both"),s?window.open(`${Pe(window.customDomain)}/${o}/app/${n.appId}?token=${He()}`,"_blank"):n.deployed&&window.open(`${Pe(window.customDomain)}/${o}/deploy/app/${n.appId}?token=${He()}`,"_blank")},[n.appId,n.deployed,s,o,i]),h=c.useMemo(()=>{var d;return l("div",{css:rs,children:(d=n==null?void 0:n.editedBy)==null?void 0:d.map(f=>f?l(Vn,{css:os,avatarUrl:f.avatar,name:f.nickname,id:f.userID},f.userID):null)})},[n==null?void 0:n.editedBy]);return C("div",{css:Ja,onClick:p,children:[C("div",{css:Qa,children:[C("div",{css:es,children:[l("div",{css:ts,children:n.appName}),l("div",{css:ns,children:t("dashboard.app.edited_time",{time:tr(n.updatedAt),user:n.appActivity.modifier})}),C(Gt,{children:[n.deployed?l($e,{colorScheme:"green",size:"small",children:t("new_dashboard.status.deployed")}):l($e,{colorScheme:"grayBlue",size:"small",children:t("new_dashboard.status.undeploy")}),n.config.appType===ei.MOBILE?l($e,{colorScheme:"grayBlue",size:"small",icon:l(hr,{}),children:t("new_dashboard.type.mobile")}):l($e,{colorScheme:"grayBlue",size:"small",icon:l(ur,{}),children:t("new_dashboard.type.desktop")}),n.config.publishedToMarketplace&&l($e,{size:"small",colorScheme:"techPurple",children:t("dashboard.common.marketplace")})]})]}),l(di,{appID:n.appId,appDeployed:n.deployed,appName:n.appName,appConfig:n.config})]}),l("div",{children:l("div",{css:is,children:n.config.description||t("new_dashboard.desc.no_description")})}),C("div",{css:as,children:[h,l(fr,{appID:n.appId,appDeployed:n.deployed,canEditApp:s})]})]})};ss.displayName="AppCard";const ic=r`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${m("grayBlue","08")};
  border-radius: 8px;
  background-color: #fff;
`,rc=r`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`,oc=r`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${m("grayBlue","02")};
  margin: 0;
  padding: 0;
`,ac=r`
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","04")};
  margin: 0;
  padding: 0;
`,sc=r`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,lc=r`
  width: 100%;
  overflow: hidden;
  display: flex;
`,cc=r`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: ${m("grayBlue","03")};
`,dc=r`
  margin-right: -6px;
`,pc=r`
  display: flex;
  align-items: center;
  gap: 8px;
`,uc=r`
  display: block;
  line-height: 1;
  font-size: 12px;
`,ls=r`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,cs=r`
  color: ${m("grayBlue","02")};
  font-weight: 600;
  line-height: 22px;
`,hc=e=>{const{onClickButton:t,loading:n,showCreate:o}=e,{t:i}=re(),a=()=>{t==null||t()};return l(Zi,{paddingVertical:"120px",icon:l(qi,{size:"48px",color:m("grayBlue","02")}),description:C("div",{css:ls,children:[l("div",{css:cs,children:i("new_dashboard.desc.blank")}),o&&l(ae,{colorScheme:"grayBlue",loading:n,variant:"outline",leftIcon:l(Yi,{size:"10px"}),onClick:a,children:i("new_dashboard.button.blank")})]})})},fc=r`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  border: 1px solid ${m("grayBlue","08")};
  border-radius: 8px;
  .editActionButton {
    visibility: hidden;
  }
  :hover {
    border-color: ${m("techPurple","03")};
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
    .editActionButton {
      visibility: visible;
    }
  }
`,gc=r`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
`,mc=r`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 304px;
`,xc=r`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  padding: 0;
`,yc=e=>r`
  font-size: 14px;
  line-height: 22px;
  color: ${e?m("grayBlue","02"):m("grayBlue","03")};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  padding: 0;
`,wc=r`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,bc=r`
  color: ${m("grayBlue","03")};
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  padding: 0;
`,ds=ze`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4px 16px 20px 16px;
  align-items: center;
`,ps=ze`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,us=ze`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 40px 32px;
  align-items: center;
`,hs=ze`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`,ui=ze`
  color: ${m("grayBlue","02")};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
  white-space: nowrap;
`,hi=ze`
  display: flex;
  align-items: center;
  gap: 8px;
`,_c=e=>{const{titleName:t,actionGroupComponent:n}=e;return Me("header",{css:us,children:Hn("div",{css:hs,children:[Me("h1",{css:ui,children:t}),!!n&&Me("div",{css:hi,children:n})]})})},Cc=e=>{const{titleName:t,actionGroupComponent:n}=e;return Me("header",{css:ds,children:Hn("div",{css:ps,children:[Me("h1",{css:ui,children:t}),!!n&&Me("div",{css:hi,children:n})]})})};function xe(e){return Array.isArray?Array.isArray(e):mi(e)==="[object Array]"}const fs=1/0;function gs(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-fs?"-0":t}function ms(e){return e==null?"":gs(e)}function pe(e){return typeof e=="string"}function fi(e){return typeof e=="number"}function xs(e){return e===!0||e===!1||ys(e)&&mi(e)=="[object Boolean]"}function gi(e){return typeof e=="object"}function ys(e){return gi(e)&&e!==null}function ie(e){return e!=null}function Ct(e){return!e.trim().length}function mi(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const ws="Incorrect 'index' type",bs=e=>`Invalid value for key ${e}`,_s=e=>`Pattern length exceeds max of ${e}.`,Cs=e=>`Missing ${e} property in key`,vs=e=>`Property 'weight' in key '${e}' must be a positive integer`,En=Object.prototype.hasOwnProperty;class Es{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(o=>{let i=xi(o);n+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(o=>{o.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function xi(e){let t=null,n=null,o=null,i=1,a=null;if(pe(e)||xe(e))o=e,t=In(e),n=Bt(e);else{if(!En.call(e,"name"))throw new Error(Cs("name"));const s=e.name;if(o=s,En.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(vs(s));t=In(s),n=Bt(s),a=e.getFn}return{path:t,id:n,weight:i,src:o,getFn:a}}function In(e){return xe(e)?e:e.split(".")}function Bt(e){return xe(e)?e.join("."):e}function Is(e,t){let n=[],o=!1;const i=(a,s,p)=>{if(ie(a))if(!s[p])n.push(a);else{let h=s[p];const d=a[h];if(!ie(d))return;if(p===s.length-1&&(pe(d)||fi(d)||xs(d)))n.push(ms(d));else if(xe(d)){o=!0;for(let f=0,g=d.length;f<g;f+=1)i(d[f],s,p+1)}else s.length&&i(d,s,p+1)}};return i(e,pe(t)?t.split("."):t,0),o?n:n[0]}const Ss={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Rs={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Ls={location:0,threshold:.6,distance:100},As={useExtendedSearch:!1,getFn:Is,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var S={...Rs,...Ss,...Ls,...As};const ks=/[^ ]+/g;function Ts(e=1,t=3){const n=new Map,o=Math.pow(10,t);return{get(i){const a=i.match(ks).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*e),p=parseFloat(Math.round(s*o)/o);return n.set(a,p),p},clear(){n.clear()}}}class tn{constructor({getFn:t=S.getFn,fieldNormWeight:n=S.fieldNormWeight}={}){this.norm=Ts(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,o)=>{this._keysMap[n.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,pe(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();pe(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,o=this.size();n<o;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!ie(t)||Ct(t))return;let o={v:t,i:n,n:this.norm.get(t)};this.records.push(o)}_addObject(t,n){let o={i:n,$:{}};this.keys.forEach((i,a)=>{let s=i.getFn?i.getFn(t):this.getFn(t,i.path);if(ie(s)){if(xe(s)){let p=[];const h=[{nestedArrIndex:-1,value:s}];for(;h.length;){const{nestedArrIndex:d,value:f}=h.pop();if(ie(f))if(pe(f)&&!Ct(f)){let g={v:f,i:d,n:this.norm.get(f)};p.push(g)}else xe(f)&&f.forEach((g,u)=>{h.push({nestedArrIndex:u,value:g})})}o.$[a]=p}else if(pe(s)&&!Ct(s)){let p={v:s,n:this.norm.get(s)};o.$[a]=p}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function yi(e,t,{getFn:n=S.getFn,fieldNormWeight:o=S.fieldNormWeight}={}){const i=new tn({getFn:n,fieldNormWeight:o});return i.setKeys(e.map(xi)),i.setSources(t),i.create(),i}function $s(e,{getFn:t=S.getFn,fieldNormWeight:n=S.fieldNormWeight}={}){const{keys:o,records:i}=e,a=new tn({getFn:t,fieldNormWeight:n});return a.setKeys(o),a.setIndexRecords(i),a}function it(e,{errors:t=0,currentLocation:n=0,expectedLocation:o=0,distance:i=S.distance,ignoreLocation:a=S.ignoreLocation}={}){const s=t/e.length;if(a)return s;const p=Math.abs(o-n);return i?s+p/i:p?1:s}function Ds(e=[],t=S.minMatchCharLength){let n=[],o=-1,i=-1,a=0;for(let s=e.length;a<s;a+=1){let p=e[a];p&&o===-1?o=a:!p&&o!==-1&&(i=a-1,i-o+1>=t&&n.push([o,i]),o=-1)}return e[a-1]&&a-o>=t&&n.push([o,a-1]),n}const Ie=32;function Ms(e,t,n,{location:o=S.location,distance:i=S.distance,threshold:a=S.threshold,findAllMatches:s=S.findAllMatches,minMatchCharLength:p=S.minMatchCharLength,includeMatches:h=S.includeMatches,ignoreLocation:d=S.ignoreLocation}={}){if(t.length>Ie)throw new Error(_s(Ie));const f=t.length,g=e.length,u=Math.max(0,Math.min(o,g));let _=a,x=u;const v=p>1||h,y=v?Array(g):[];let w;for(;(w=e.indexOf(t,x))>-1;){let A=it(t,{currentLocation:w,expectedLocation:u,distance:i,ignoreLocation:d});if(_=Math.min(A,_),x=w+f,v){let b=0;for(;b<f;)y[w+b]=1,b+=1}}x=-1;let I=[],T=1,E=f+g;const F=1<<f-1;for(let A=0;A<f;A+=1){let b=0,R=E;for(;b<R;)it(t,{errors:A,currentLocation:u+R,expectedLocation:u,distance:i,ignoreLocation:d})<=_?b=R:E=R,R=Math.floor((E-b)/2+b);E=R;let $=Math.max(1,u-R+1),O=s?g:Math.min(u+R,g)+f,G=Array(O+2);G[O+1]=(1<<A)-1;for(let M=O;M>=$;M-=1){let J=M-1,se=n[e.charAt(J)];if(v&&(y[J]=+!!se),G[M]=(G[M+1]<<1|1)&se,A&&(G[M]|=(I[M+1]|I[M])<<1|1|I[M+1]),G[M]&F&&(T=it(t,{errors:A,currentLocation:J,expectedLocation:u,distance:i,ignoreLocation:d}),T<=_)){if(_=T,x=J,x<=u)break;$=Math.max(1,2*u-x)}}if(it(t,{errors:A+1,currentLocation:u,expectedLocation:u,distance:i,ignoreLocation:d})>_)break;I=G}const L={isMatch:x>=0,score:Math.max(.001,T)};if(v){const A=Ds(y,p);A.length?h&&(L.indices=A):L.isMatch=!1}return L}function Ps(e){let t={};for(let n=0,o=e.length;n<o;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<o-n-1}return t}class wi{constructor(t,{location:n=S.location,threshold:o=S.threshold,distance:i=S.distance,includeMatches:a=S.includeMatches,findAllMatches:s=S.findAllMatches,minMatchCharLength:p=S.minMatchCharLength,isCaseSensitive:h=S.isCaseSensitive,ignoreLocation:d=S.ignoreLocation}={}){if(this.options={location:n,threshold:o,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:p,isCaseSensitive:h,ignoreLocation:d},this.pattern=h?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const f=(u,_)=>{this.chunks.push({pattern:u,alphabet:Ps(u),startIndex:_})},g=this.pattern.length;if(g>Ie){let u=0;const _=g%Ie,x=g-_;for(;u<x;)f(this.pattern.substr(u,Ie),u),u+=Ie;if(_){const v=g-Ie;f(this.pattern.substr(v),v)}}else f(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:o}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let x={isMatch:!0,score:0};return o&&(x.indices=[[0,t.length-1]]),x}const{location:i,distance:a,threshold:s,findAllMatches:p,minMatchCharLength:h,ignoreLocation:d}=this.options;let f=[],g=0,u=!1;this.chunks.forEach(({pattern:x,alphabet:v,startIndex:y})=>{const{isMatch:w,score:I,indices:T}=Ms(t,x,v,{location:i+y,distance:a,threshold:s,findAllMatches:p,minMatchCharLength:h,includeMatches:o,ignoreLocation:d});w&&(u=!0),g+=I,w&&T&&(f=[...f,...T])});let _={isMatch:u,score:u?g/this.chunks.length:1};return u&&o&&(_.indices=f),_}}class Ce{constructor(t){this.pattern=t}static isMultiMatch(t){return Sn(t,this.multiRegex)}static isSingleMatch(t){return Sn(t,this.singleRegex)}search(){}}function Sn(e,t){const n=e.match(t);return n?n[1]:null}class Bs extends Ce{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Os extends Ce{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class Ns extends Ce{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class zs extends Ce{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Vs extends Ce{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Us extends Ce{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class bi extends Ce{constructor(t,{location:n=S.location,threshold:o=S.threshold,distance:i=S.distance,includeMatches:a=S.includeMatches,findAllMatches:s=S.findAllMatches,minMatchCharLength:p=S.minMatchCharLength,isCaseSensitive:h=S.isCaseSensitive,ignoreLocation:d=S.ignoreLocation}={}){super(t),this._bitapSearch=new wi(t,{location:n,threshold:o,distance:i,includeMatches:a,findAllMatches:s,minMatchCharLength:p,isCaseSensitive:h,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class _i extends Ce{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,o;const i=[],a=this.pattern.length;for(;(o=t.indexOf(this.pattern,n))>-1;)n=o+a,i.push([o,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const Ot=[Bs,_i,Ns,zs,Us,Vs,Os,bi],Rn=Ot.length,Fs=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ws="|";function js(e,t={}){return e.split(Ws).map(n=>{let o=n.trim().split(Fs).filter(a=>a&&!!a.trim()),i=[];for(let a=0,s=o.length;a<s;a+=1){const p=o[a];let h=!1,d=-1;for(;!h&&++d<Rn;){const f=Ot[d];let g=f.isMultiMatch(p);g&&(i.push(new f(g,t)),h=!0)}if(!h)for(d=-1;++d<Rn;){const f=Ot[d];let g=f.isSingleMatch(p);if(g){i.push(new f(g,t));break}}}return i})}const Hs=new Set([bi.type,_i.type]);class Ks{constructor(t,{isCaseSensitive:n=S.isCaseSensitive,includeMatches:o=S.includeMatches,minMatchCharLength:i=S.minMatchCharLength,ignoreLocation:a=S.ignoreLocation,findAllMatches:s=S.findAllMatches,location:p=S.location,threshold:h=S.threshold,distance:d=S.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:o,minMatchCharLength:i,findAllMatches:s,ignoreLocation:a,location:p,threshold:h,distance:d},this.pattern=n?t:t.toLowerCase(),this.query=js(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let a=0,s=[],p=0;for(let h=0,d=n.length;h<d;h+=1){const f=n[h];s.length=0,a=0;for(let g=0,u=f.length;g<u;g+=1){const _=f[g],{isMatch:x,indices:v,score:y}=_.search(t);if(x){if(a+=1,p+=y,o){const w=_.constructor.type;Hs.has(w)?s=[...s,...v]:s.push(v)}}else{p=0,a=0,s.length=0;break}}if(a){let g={isMatch:!0,score:p/a};return o&&(g.indices=s),g}}return{isMatch:!1,score:1}}}const Nt=[];function Gs(...e){Nt.push(...e)}function zt(e,t){for(let n=0,o=Nt.length;n<o;n+=1){let i=Nt[n];if(i.condition(e,t))return new i(e,t)}return new wi(e,t)}const pt={AND:"$and",OR:"$or"},Vt={PATH:"$path",PATTERN:"$val"},Ut=e=>!!(e[pt.AND]||e[pt.OR]),qs=e=>!!e[Vt.PATH],Ys=e=>!xe(e)&&gi(e)&&!Ut(e),Ln=e=>({[pt.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Ci(e,t,{auto:n=!0}={}){const o=i=>{let a=Object.keys(i);const s=qs(i);if(!s&&a.length>1&&!Ut(i))return o(Ln(i));if(Ys(i)){const h=s?i[Vt.PATH]:a[0],d=s?i[Vt.PATTERN]:i[h];if(!pe(d))throw new Error(bs(h));const f={keyId:Bt(h),pattern:d};return n&&(f.searcher=zt(d,t)),f}let p={children:[],operator:a[0]};return a.forEach(h=>{const d=i[h];xe(d)&&d.forEach(f=>{p.children.push(o(f))})}),p};return Ut(e)||(e=Ln(e)),o(e)}function Zs(e,{ignoreFieldNorm:t=S.ignoreFieldNorm}){e.forEach(n=>{let o=1;n.matches.forEach(({key:i,norm:a,score:s})=>{const p=i?i.weight:null;o*=Math.pow(s===0&&p?Number.EPSILON:s,(p||1)*(t?1:a))}),n.score=o})}function Xs(e,t){const n=e.matches;t.matches=[],ie(n)&&n.forEach(o=>{if(!ie(o.indices)||!o.indices.length)return;const{indices:i,value:a}=o;let s={indices:i,value:a};o.key&&(s.key=o.key.src),o.idx>-1&&(s.refIndex=o.idx),t.matches.push(s)})}function Js(e,t){t.score=e.score}function Qs(e,t,{includeMatches:n=S.includeMatches,includeScore:o=S.includeScore}={}){const i=[];return n&&i.push(Xs),o&&i.push(Js),e.map(a=>{const{idx:s}=a,p={item:t[s],refIndex:s};return i.length&&i.forEach(h=>{h(a,p)}),p})}class Le{constructor(t,n={},o){this.options={...S,...n},this.options.useExtendedSearch,this._keyStore=new Es(this.options.keys),this.setCollection(t,o)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof tn))throw new Error(ws);this._myIndex=n||yi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){ie(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let o=0,i=this._docs.length;o<i;o+=1){const a=this._docs[o];t(a,o)&&(this.removeAt(o),o-=1,i-=1,n.push(a))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:o,includeScore:i,shouldSort:a,sortFn:s,ignoreFieldNorm:p}=this.options;let h=pe(t)?pe(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Zs(h,{ignoreFieldNorm:p}),a&&h.sort(s),fi(n)&&n>-1&&(h=h.slice(0,n)),Qs(h,this._docs,{includeMatches:o,includeScore:i})}_searchStringList(t){const n=zt(t,this.options),{records:o}=this._myIndex,i=[];return o.forEach(({v:a,i:s,n:p})=>{if(!ie(a))return;const{isMatch:h,score:d,indices:f}=n.searchIn(a);h&&i.push({item:a,idx:s,matches:[{score:d,value:a,norm:p,indices:f}]})}),i}_searchLogical(t){const n=Ci(t,this.options),o=(p,h,d)=>{if(!p.children){const{keyId:g,searcher:u}=p,_=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(h,g),searcher:u});return _&&_.length?[{idx:d,item:h,matches:_}]:[]}const f=[];for(let g=0,u=p.children.length;g<u;g+=1){const _=p.children[g],x=o(_,h,d);if(x.length)f.push(...x);else if(p.operator===pt.AND)return[]}return f},i=this._myIndex.records,a={},s=[];return i.forEach(({$:p,i:h})=>{if(ie(p)){let d=o(n,p,h);d.length&&(a[h]||(a[h]={idx:h,item:p,matches:[]},s.push(a[h])),d.forEach(({matches:f})=>{a[h].matches.push(...f)}))}}),s}_searchObjectList(t){const n=zt(t,this.options),{keys:o,records:i}=this._myIndex,a=[];return i.forEach(({$:s,i:p})=>{if(!ie(s))return;let h=[];o.forEach((d,f)=>{h.push(...this._findMatches({key:d,value:s[f],searcher:n}))}),h.length&&a.push({idx:p,item:s,matches:h})}),a}_findMatches({key:t,value:n,searcher:o}){if(!ie(n))return[];let i=[];if(xe(n))n.forEach(({v:a,i:s,n:p})=>{if(!ie(a))return;const{isMatch:h,score:d,indices:f}=o.searchIn(a);h&&i.push({score:d,key:t,value:a,idx:s,norm:p,indices:f})});else{const{v:a,n:s}=n,{isMatch:p,score:h,indices:d}=o.searchIn(a);p&&i.push({score:h,key:t,value:a,norm:s,indices:d})}return i}}Le.version="6.6.2";Le.createIndex=yi;Le.parseIndex=$s;Le.config=S;Le.parseQuery=Ci;Gs(Ks);function vc(e,t){const[n,o]=c.useState(""),i=c.useRef(()=>Jn(d=>{o(d)},160)),a=Le.createIndex(t,e),s=new Le(e,{keys:t},a),p=n?s.search(n).map(d=>d.item):e,h=i.current();return[p,h]}var vi={exports:{}},Ei={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=c;function el(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tl=typeof Object.is=="function"?Object.is:el,nl=Be.useState,il=Be.useEffect,rl=Be.useLayoutEffect,ol=Be.useDebugValue;function al(e,t){var n=t(),o=nl({inst:{value:n,getSnapshot:t}}),i=o[0].inst,a=o[1];return rl(function(){i.value=n,i.getSnapshot=t,vt(i)&&a({inst:i})},[e,n,t]),il(function(){return vt(i)&&a({inst:i}),e(function(){vt(i)&&a({inst:i})})},[e]),ol(n),n}function vt(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tl(e,n)}catch{return!0}}function sl(e,t){return t()}var ll=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?sl:al;Ei.useSyncExternalStore=Be.useSyncExternalStore!==void 0?Be.useSyncExternalStore:ll;vi.exports=Ei;var cl=vi.exports;const be=()=>{},ee=be(),Et=Object,P=e=>e===ee,me=e=>typeof e=="function",_e=(e,t)=>({...e,...t}),dl=e=>me(e.then),rt=new WeakMap;let pl=0;const Ge=e=>{const t=typeof e,n=e&&e.constructor,o=n==Date;let i,a;if(Et(e)===e&&!o&&n!=RegExp){if(i=rt.get(e),i)return i;if(i=++pl+"~",rt.set(e,i),n==Array){for(i="@",a=0;a<e.length;a++)i+=Ge(e[a])+",";rt.set(e,i)}if(n==Et){i="#";const s=Et.keys(e).sort();for(;!P(a=s.pop());)P(e[a])||(i+=a+":"+Ge(e[a])+",");rt.set(e,i)}}else i=o?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return i},ge=new WeakMap,It={},ot={},nn="undefined",ht=typeof window!=nn,Ft=typeof document!=nn,ul=()=>ht&&typeof window.requestAnimationFrame!=nn,Ii=(e,t)=>{const n=ge.get(e);return[()=>!P(t)&&e.get(t)||It,o=>{if(!P(t)){const i=e.get(t);t in ot||(ot[t]=i),n[5](t,_e(i,o),i||It)}},n[6],()=>!P(t)&&t in ot?ot[t]:!P(t)&&e.get(t)||It]};let Wt=!0;const hl=()=>Wt,[jt,Ht]=ht&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[be,be],fl=()=>{const e=Ft&&document.visibilityState;return P(e)||e!=="hidden"},gl=e=>(Ft&&document.addEventListener("visibilitychange",e),jt("focus",e),()=>{Ft&&document.removeEventListener("visibilitychange",e),Ht("focus",e)}),ml=e=>{const t=()=>{Wt=!0,e()},n=()=>{Wt=!1};return jt("online",t),jt("offline",n),()=>{Ht("online",t),Ht("offline",n)}},xl={isOnline:hl,isVisible:fl},yl={initFocus:gl,initReconnect:ml},An=!Ze.useId,qe=!ht||"Deno"in window,wl=e=>ul()?window.requestAnimationFrame(e):setTimeout(e,1),St=qe?c.useEffect:c.useLayoutEffect,Rt=typeof navigator<"u"&&navigator.connection,kn=!qe&&Rt&&(["slow-2g","2g"].includes(Rt.effectiveType)||Rt.saveData),rn=e=>{if(me(e))try{e=e()}catch{e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Ge(e):"",[e,t]};let bl=0;const Kt=()=>++bl,Si=0,Ri=1,Li=2,_l=3;var Ue={__proto__:null,ERROR_REVALIDATE_EVENT:_l,FOCUS_EVENT:Si,MUTATE_EVENT:Li,RECONNECT_EVENT:Ri};async function Ai(...e){const[t,n,o,i]=e,a=_e({populateCache:!0,throwOnError:!0},typeof i=="boolean"?{revalidate:i}:i||{});let s=a.populateCache;const p=a.rollbackOnError;let h=a.optimisticData;const d=a.revalidate!==!1,f=_=>typeof p=="function"?p(_):p!==!1,g=a.throwOnError;if(me(n)){const _=n,x=[],v=t.keys();for(const y of v)!/^\$(inf|sub)\$/.test(y)&&_(t.get(y)._k)&&x.push(y);return Promise.all(x.map(u))}return u(n);async function u(_){const[x]=rn(_);if(!x)return;const[v,y]=Ii(t,x),[w,I,T,E]=ge.get(t),F=()=>{const M=w[x];return d&&(delete T[x],delete E[x],M&&M[0])?M[0](Li).then(()=>v().data):v().data};if(e.length<3)return F();let L=o,A;const b=Kt();I[x]=[b,0];const R=!P(h),$=v(),O=$.data,G=$._c,W=P(G)?O:G;if(R&&(h=me(h)?h(W,O):h,y({data:h,_c:W})),me(L))try{L=L(W)}catch(M){A=M}if(L&&dl(L))if(L=await L.catch(M=>{A=M}),b!==I[x][0]){if(A)throw A;return L}else A&&R&&f(A)&&(s=!0,y({data:W,_c:ee}));if(s&&!A)if(me(s)){const M=s(L,W);y({data:M,error:ee,_c:ee})}else y({data:L,error:ee,_c:ee});if(I[x][1]=Kt(),Promise.resolve(F()).then(()=>{y({_c:ee})}),A){if(g)throw A;return}return L}}const Tn=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},Cl=(e,t)=>{if(!ge.has(e)){const n=_e(yl,t),o={},i=Ai.bind(ee,e);let a=be;const s={},p=(f,g)=>{const u=s[f]||[];return s[f]=u,u.push(g),()=>u.splice(u.indexOf(g),1)},h=(f,g,u)=>{e.set(f,g);const _=s[f];if(_)for(const x of _)x(g,u)},d=()=>{if(!ge.has(e)&&(ge.set(e,[o,{},{},{},i,h,p]),!qe)){const f=n.initFocus(setTimeout.bind(ee,Tn.bind(ee,o,Si))),g=n.initReconnect(setTimeout.bind(ee,Tn.bind(ee,o,Ri)));a=()=>{f&&f(),g&&g(),ge.delete(e)}}};return d(),[e,i,d,a]}return[e,ge.get(e)[4]]},vl=(e,t,n,o,i)=>{const a=n.errorRetryCount,s=i.retryCount,p=~~((Math.random()+.5)*(1<<(s<8?s:8)))*n.errorRetryInterval;!P(a)&&s>a||setTimeout(o,p,i)},El=(e,t)=>Ge(e)==Ge(t),[ki,Il]=Cl(new Map),Sl=_e({onLoadingSlow:be,onSuccess:be,onError:be,onErrorRetry:vl,onDiscarded:be,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:kn?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:kn?5e3:3e3,compare:El,isPaused:()=>!1,cache:ki,mutate:Il,fallback:{}},xl),Rl=(e,t)=>{const n=_e(e,t);if(t){const{use:o,fallback:i}=e,{use:a,fallback:s}=t;o&&a&&(n.use=o.concat(a)),i&&s&&(n.fallback=_e(i,s))}return n},Ll=c.createContext({}),Al="$inf$",Ti=ht&&window.__SWR_DEVTOOLS_USE__,kl=Ti?window.__SWR_DEVTOOLS_USE__:[],Tl=()=>{Ti&&(window.__SWR_DEVTOOLS_REACT__=Ze)},$l=e=>me(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],Dl=()=>_e(Sl,c.useContext(Ll)),Ml=e=>(t,n,o)=>e(t,n&&((...a)=>{const[s]=rn(t),[,,,p]=ge.get(ki);if(s.startsWith(Al))return n(...a);const h=p[s];return P(h)?n(...a):(delete p[s],h)}),o),Pl=kl.concat(Ml),Bl=e=>function(...n){const o=Dl(),[i,a,s]=$l(n),p=Rl(o,s);let h=e;const{use:d}=p,f=(d||[]).concat(Pl);for(let g=f.length;g--;)h=f[g](h);return h(i,a||p.fetcher||null,p)},Ol=(e,t,n)=>{const o=t[e]||(t[e]=[]);return o.push(n),()=>{const i=o.indexOf(n);i>=0&&(o[i]=o[o.length-1],o.pop())}};Tl();const $n=Ze.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)}),Lt={dedupe:!0},Nl=(e,t,n)=>{const{cache:o,compare:i,suspense:a,fallbackData:s,revalidateOnMount:p,revalidateIfStale:h,refreshInterval:d,refreshWhenHidden:f,refreshWhenOffline:g,keepPreviousData:u}=n,[_,x,v,y]=ge.get(o),[w,I]=rn(e),T=c.useRef(!1),E=c.useRef(!1),F=c.useRef(w),L=c.useRef(t),A=c.useRef(n),b=()=>A.current,R=()=>b().isVisible()&&b().isOnline(),[$,O,G,W]=Ii(o,w),M=c.useRef({}).current,J=P(s)?n.fallback[w]:s,se=(z,V)=>{for(const Z in M){const H=Z;if(H==="data"){if(!i(z[H],V[H])&&(!P(z[H])||!i(j,V[H])))return!1}else if(V[H]!==z[H])return!1}return!0},k=c.useMemo(()=>{const z=(()=>!w||!t?!1:P(p)?b().isPaused()||a?!1:P(h)?!0:h:p)(),V=Q=>{const ue=_e(Q);return delete ue._k,z?{isValidating:!0,isLoading:!0,...ue}:ue},Z=$(),H=W(),le=V(Z),Te=Z===H?le:V(H);let q=le;return[()=>{const Q=V($());return se(Q,q)?(q.data=Q.data,q.isLoading=Q.isLoading,q.isValidating=Q.isValidating,q.error=Q.error,q):(q=Q,Q)},()=>Te]},[o,w]),Y=cl.useSyncExternalStore(c.useCallback(z=>G(w,(V,Z)=>{se(Z,V)||z()}),[o,w]),k[0],k[1]),K=!T.current,ne=_[w]&&_[w].length>0,ye=Y.data,we=P(ye)?J:ye,Ae=Y.error,Qe=c.useRef(we),j=u?P(ye)?Qe.current:ye:we,ke=(()=>ne&&!P(Ae)?!1:K&&!P(p)?p:b().isPaused()?!1:a?P(we)?!1:h:P(we)||h)(),ft=!!(w&&t&&K&&ke),$i=P(Y.isValidating)?ft:Y.isValidating,Di=P(Y.isLoading)?ft:Y.isLoading,Ve=c.useCallback(async z=>{const V=L.current;if(!w||!V||E.current||b().isPaused())return!1;let Z,H,le=!0;const Te=z||{},q=!v[w]||!Te.dedupe,Q=()=>An?!E.current&&w===F.current&&T.current:w===F.current,ue={isValidating:!1,isLoading:!1},an=()=>{O(ue)},sn=()=>{const oe=v[w];oe&&oe[1]===H&&delete v[w]},ln={isValidating:!0};P($().data)&&(ln.isLoading=!0);try{if(q&&(O(ln),n.loadingTimeout&&P($().data)&&setTimeout(()=>{le&&Q()&&b().onLoadingSlow(w,n)},n.loadingTimeout),v[w]=[V(I),Kt()]),[Z,H]=v[w],Z=await Z,q&&setTimeout(sn,n.dedupingInterval),!v[w]||v[w][1]!==H)return q&&Q()&&b().onDiscarded(w),!1;ue.error=ee;const oe=x[w];if(!P(oe)&&(H<=oe[0]||H<=oe[1]||oe[1]===0))return an(),q&&Q()&&b().onDiscarded(w),!1;const he=$().data;ue.data=i(he,Z)?he:Z,q&&Q()&&b().onSuccess(Z,w,n)}catch(oe){sn();const he=b(),{shouldRetryOnError:gt}=he;he.isPaused()||(ue.error=oe,q&&Q()&&(he.onError(oe,w,he),(gt===!0||me(gt)&&gt(oe))&&R()&&he.onErrorRetry(oe,w,he,Mi=>{const mt=_[w];mt&&mt[0]&&mt[0](Ue.ERROR_REVALIDATE_EVENT,Mi)},{retryCount:(Te.retryCount||0)+1,dedupe:!0})))}return le=!1,an(),!0},[w,o]),on=c.useCallback((...z)=>Ai(o,F.current,...z),[]);if(St(()=>{L.current=t,A.current=n,P(ye)||(Qe.current=ye)}),St(()=>{if(!w)return;const z=Ve.bind(ee,Lt);let V=0;const H=Ol(w,_,(le,Te={})=>{if(le==Ue.FOCUS_EVENT){const q=Date.now();b().revalidateOnFocus&&q>V&&R()&&(V=q+b().focusThrottleInterval,z())}else if(le==Ue.RECONNECT_EVENT)b().revalidateOnReconnect&&R()&&z();else{if(le==Ue.MUTATE_EVENT)return Ve();if(le==Ue.ERROR_REVALIDATE_EVENT)return Ve(Te)}});return E.current=!1,F.current=w,T.current=!0,O({_k:I}),ke&&(P(we)||qe?z():wl(z)),()=>{E.current=!0,H()}},[w]),St(()=>{let z;function V(){const H=me(d)?d($().data):d;H&&z!==-1&&(z=setTimeout(Z,H))}function Z(){!$().error&&(f||b().isVisible())&&(g||b().isOnline())?Ve(Lt).then(V):V()}return V(),()=>{z&&(clearTimeout(z),z=-1)}},[d,f,g,w]),c.useDebugValue(j),a&&P(we)&&w){if(!An&&qe)throw new Error("Fallback data is required when using suspense in SSR.");L.current=t,A.current=n,E.current=!1;const z=y[w];if(!P(z)){const V=on(z);$n(V)}if(P(Ae)){const V=Ve(Lt);P(j)||(V.status="fulfilled",V.value=!0),$n(V)}else throw Ae}return{mutate:on,get data(){return M.data=!0,j},get error(){return M.error=!0,Ae},get isValidating(){return M.isValidating=!0,$i},get isLoading(){return M.isLoading=!0,Di}}},Ec=Bl(Nl),Ic=()=>{const[e,t]=c.useState(!1);return[e,o=>{o.target.scrollTop>=24?t(!0):t(!1)}]};export{ei as A,_c as D,Cc as M,ss as P,hr as S,hc as T,pc as a,ur as b,ic as c,cc as d,ac as e,sc as f,lc as g,rc as h,dc as i,vc as j,Ic as k,uc as l,nc as m,Il as n,gc as o,mc as p,tc as q,fc as r,xc as s,oc as t,Ec as u,yc as v,wc as w,bc as x};
//# sourceMappingURL=hook-afa33551.js.map

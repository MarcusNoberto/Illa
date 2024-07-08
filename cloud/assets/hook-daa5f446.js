import{X as sn,n as C,j as l,B as ae,Y as Ht,h as m,K as Ue,J as de,E as Tn,z as rt,A as ot,Z as $i,$ as $n,a0 as Dn,O as Fe,a1 as Mn,I as Pe,a2 as Se,a3 as Di,a4 as Mi,a5 as Bn,a6 as Kt,a7 as Bi,H as $e,a8 as Pi,a9 as Pn,aa as Oi,y as Gt,ab as ln,F as Ve,ac as Ni,ad as gt,C as On,V as zi,ae as Vi,g as qt,f as Yt,G as Ui,U as Fi,af as cn,ag as Wi,ah as ji,N as dn,ai as Hi,P as Ki,aj as Gi}from"./@illa-design-764f0835.js";import{F as re,M as Ge,H as Me,I as We,U,$ as X,a0 as Oe,Z as je,A as Nn,a1 as zn,a2 as Vn,R as Un,a3 as dt,a4 as pn,a5 as Rt,_ as N,Y as un,K as qi,u as Lt,G as Fn,N as At,g as Yi,a6 as Zi,a7 as mt,a8 as Xi,Q as Ji}from"./index-00365173.js";import{i as te,e as Qi,c as Wn,A as jn,a as Hn,f as er,s as tr,g as nr,o as ir}from"./index-13078130.js";import{r as c,i as Kn,b as qe}from"./react-bc846394.js";import{a as i}from"./@emotion-09d14760.js";import{I as P}from"./interface-8df5fe4c.js";import{E as rr}from"./index-eab177f8.js";import{i as or}from"./utils-0a07442a.js";import{a as D}from"./style-00a92373.js";import"./upstash-e9b235a2.js";import{S as ar}from"./index-4370180f.js";import{u as Gn,a as qn,C as De}from"./index.esm-11ba4214.js";import{d as Yn}from"./lodash-lib-cfb0e9ed.js";const sr=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;var Zn=(e=>(e.SUCCESS="success",e.EMPTY="empty",e))(Zn||{});const lr=e=>e==null||e===""?"empty":typeof e=="string"||typeof e=="number"?(sn(String(e)),"success"):(sn(JSON.stringify(e)),"success");var Xn=(e=>(e.PC="pc",e.MOBILE="mobile",e))(Xn||{});const cr=e=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("path",{d:"M7.99992 10.5L2.66679 10.4997C2.48998 10.4997 2.32041 10.4339 2.19538 10.3167C2.07036 10.1995 2.00012 10.0405 2.00012 9.87473V6.50309V3.62787C2.00012 3.46211 2.07036 3.30314 2.19538 3.18593C2.32041 3.06872 2.48998 3.00287 2.66679 3.00287L13.3294 3C13.5063 3 13.6758 3.06585 13.8008 3.18306C13.9259 3.30027 13.9961 3.45924 13.9961 3.625V9.87186C13.9961 10.0376 13.9259 10.1966 13.8008 10.3138C13.6758 10.431 13.5063 10.4969 13.3294 10.4969L7.99992 10.5ZM7.99992 10.5L7.99992 13M7.99992 13H9.99992M7.99992 13H5.99992",stroke:"#1D2129",strokeLinecap:"round"})),dr=e=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("circle",{cx:8,cy:10,r:1,fill:"#1D2129"}),c.createElement("rect",{x:4,y:3,width:8,height:10,rx:1,stroke:"#1D2129"})),hn=i`
  visibility: hidden;
  transition: all 0.2s ease-in-out;
`,pr=e=>{const{t}=re(),{appID:n,appDeployed:o,canEditApp:r}=e,{teamIdentifier:a}=Kn(),{track:s}=c.useContext(Ge),p=c.useMemo(()=>d=>{d.stopPropagation(),s==null||s(P.CLICK,{element:"app_launch",parameter5:n},"both"),window.open(`${Me(window.customDomain)}/${a}/deploy/app/${n}?token=${We()}`,"_blank")},[n,a,s]),h=c.useMemo(()=>d=>{d.stopPropagation(),s==null||s(P.CLICK,{element:"app_edit",parameter5:n},"both"),window.open(`${Me(window.customDomain)}/${a}/app/${n}?token=${We()}`,"_blank")},[n,a,s]);return C(Ht,{direction:"horizontal",w:"100%",justifyContent:"end",size:"8px",alignItems:"center",children:[o?l(ae,{css:hn,className:"dashboardAppEditButton",variant:"text",colorScheme:"grayBlue",onClick:p,children:t("dashboard.common.launch")}):null,r?l(ae,{css:hn,className:"dashboardAppLaunchButton",variant:"text",colorScheme:"grayBlue",onClick:h,children:t("dashboard.common.edit")}):null]})},ur=i`
  display: flex;
  flex-direction: row;
  align-items: center;
`,hr=i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${m("grayBlue","04")};
`,fr=i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin-left: 22px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${m("grayBlue","01")};
`,gr=i`
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
`;function mr(e){return i`
    font-size: 14px;
    font-style: normal;
    font-weight: ${e?400:500};
    line-height: 22px;
  `}const xr=i`
  margin-left: 4px;
  width: 12px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 12px;
`,kt=e=>{var v;const{onClickItem:t,withoutTips:n,value:o,showOwner:r,currentUserRole:a,isSelf:s,inline:p,excludeUserRole:h}=e,[d,f]=c.useState(!1),g=!s&&te(o,a,!0),{t:u}=re(),_=c.useMemo(()=>[{role:U.OWNER,tips:u("user_management.role.tips.owner"),name:u("user_management.role.owner")},{role:U.ADMIN,tips:u("user_management.role.tips.admin"),name:u("user_management.role.admin")},{role:U.EDITOR,tips:u("user_management.role.tips.editor"),name:u("user_management.role.editor")},{role:U.VIEWER,tips:u("user_management.role.tips.viewer"),name:u("user_management.role.viewer")}],[u]),x=c.useMemo(()=>(r?_:_.filter(w=>w.role!==U.OWNER)).filter(w=>!(h!=null&&h.includes(w.role))&&te(w.role,a)),[a,h,r,_]);return l(Fe,{disabled:!g||x.length<=1,onVisibleChange:y=>{f(y)},dropList:l(Ue,{onClickItem:y=>{t==null||t(y)},children:x.map(y=>l(de,{value:y.role,title:C("div",{css:ur,children:[l("div",{children:y.name}),!n&&l(Tn,{zIndex:1e3,children:l(rt,{trigger:"hover",position:"top",content:y.tips,children:l("div",{css:hr,children:l(ot,{})})})}),o===y.role&&l("div",{css:fr,children:l($i,{})})]})},y.role))}),position:"bottom-end",trigger:"click",children:C("div",{css:gr,children:[l("div",{css:mr(p),children:(v=_.find(y=>y.role===o))==null?void 0:v.name}),g&&x.length>1&&l("div",{css:xr,children:d?l($n,{}):l(Dn,{})})]})})};var at=(e=>(e.STORAGE="storage",e.TOKEN="token",e.TRAFFIC="traffic",e))(at||{}),Tt=(e=>(e.CREATE="create",e.TRANSFER_OWNER="transferOwner",e))(Tt||{});X.FREE+"",X.MONTHLY+"",X.YEARLY+"",X.LIFETIME+"";X.FREE+"",X.MONTHLY+"",X.YEARLY+"",X.LIFETIME+"";X.FREE+"",X.MONTHLY+"",X.YEARLY+"",X.LIFETIME+"";X.FREE+"",X.MONTHLY+"",X.YEARLY+"",X.LIFETIME+"";const ce={listener:[],modal:null};function yr(){return{getModal:()=>ce.modal,setModal:e=>{ce.modal=e,ce.listener.forEach(t=>{t.onStoreChange()})},subscribe:e=>{const t={listenerId:Mn(),onStoreChange:e};return ce.listener.push(t),t.onStoreChange(),t},unSubscribe:e=>{ce.listener.splice(ce.listener.findIndex(t=>t.listenerId===e),1)},update:e=>{ce.modal=e,ce.listener.forEach(t=>{t.onStoreChange()})},remove:()=>{ce.modal=null,ce.listener.forEach(e=>{e.onStoreChange()})}}}const wr=yr(),br=e=>(e.id||(e.id=Mn()),e.visible||(e.visible=!0),wr.setModal(e),e.id),_r=e=>br(e);function Zt(){return _r}i`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 24px;
`;i`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;i`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${m("grayBlue","02")};
`;i`
  color: ${m("grayBlue","03")};
`;i`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;i`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;const Jn=i`
  padding: 0 24px;
`;i`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Jn};
  padding-bottom: 16px;
`;i`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  cursor: pointer;
`;i`
  font-size: 12px;
`;i`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${m("grayBlue","02")};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  padding: 24px 0;

  ${D(i`
    font-size: 14px;
    line-height: 22px;
  `)}
`;i`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;i`
  padding: 8px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;i`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;i`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
  color: ${m("grayBlue","03")};
  font-weight: 400;
  line-height: 20px;
  font-size: 12px;
`;i`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;i`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
`;i`
  display: flex;
  gap: 16px;
  padding-top: 8px;
`;i`
  display: flex;
  justify-content: space-between;
`;i`
  text-align: end;
`;i`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${m("techPurple","03")};
  margin-bottom: 4px;

  ${D(i`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 4px;
  `)}
`;i`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(i`
    font-size: 12px;
    line-height: 20px;
  `)}
`;i`
  text-align: start;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};
  ${Jn};
`;i`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;i`
  border: unset;
  width: 486px;
  min-width: 486px;
  background: ${m("white","01")};
  border: 1px solid ${m("grayBlue","08")};
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border-radius: 8px;
  overflow: hidden;

  ${D(i`
    width: 358px;
    min-width: 358px;
    border-radius: 8px;
  `)}
`;i`
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
`;i`
  width: 100%;

  ${D(i`
    height: 100%;
  `)};
`;i`
  padding: 16px;
`;i`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 8px;

  ${D(i`
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 8px;
  `)};
`;i`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${m("grayBlue","03")};

  ${D(i`
    font-size: 14px;
    line-height: 17px;
  `)};
`;i`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;i`
  padding: 9px 16px;
`;i`
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(i`
    font-size: 12px;
    line-height: 20px;
  `)};
`;i`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${m("grayBlue","02")};
`;i`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    padding: 4px 24px;
  }
`;i`
  padding: 4px 24px;
`;at.STORAGE+"",at.TRAFFIC+"",at.TOKEN+"";i`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;i`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;i`
  position: relative;
  padding: 0 24px;
`;i`
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 24px;
  font-size: 12px;
`;i`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${m("grayBlue","02")};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  ${D(i`
    font-size: 14px;
    line-height: 22px;
  `)}
`;i`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 24px 0 16px;

  ${D(i`
    font-size: 18px;
    line-height: 24px;
    margin: 24px 0 16px 0;
  `)}
`;i`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px 0 24px 0;
`;i`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 24px;
`;i`
  color: ${m("grayBlue","02")};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-transform: capitalize;
`;i`
  text-align: end;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-end;
`;i`
  display: flex;
  flex-direction: column;
`;i`
  color: ${m("grayBlue","02")};
  margin-bottom: 4px;
  text-align: right;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-transform: capitalize;
`;i`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};
`;i`
  text-align: center;
`;i`
  font-size: 14px;
  line-height: 22px;

  ${D(i`
    font-size: 14px;
    line-height: 22px;
  `)}
`;i`
  text-align: start;
  margin-top: 16px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(i`
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 12px;
    line-height: 20px;
  `)}
`;i`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;i`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;i`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;i`
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
`;i`
  color: ${m("red","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: right;
`;i`
  color: ${m("grayBlue","02")};
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;
`;i`
  color: ${m("grayBlue","02")};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;i`
  width: 320px;
  min-width: unset;
  background: ${m("white","01")};
  border: 1px solid ${m("grayBlue","08")};
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border-radius: 4px;

  ${D(i`
    width: 358px;
    min-width: 358px;
    border-radius: 8px;
  `)}
`;i`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 8px;

  ${D(i`
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
    margin-bottom: 8px;
  `)}
`;i`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 8px 24px;

  ${D(i`
    font-size: 14px;
    line-height: 22px;
    margin: 8px 24px;
  `)}
`;i`
  width: 100%;
  padding: 16px;
  text-align: center;

  ${D(i`
    padding: 16px;
  `)}
`;i`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;i`
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
`;i`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;i`
  border: unset;
  width: 486px;
  min-width: 486px;
  background: ${m("white","01")};
  border: 1px solid ${m("grayBlue","08")};
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border-radius: 8px;
  overflow: hidden;

  ${D(i`
    width: 358px;
    min-width: 358px;
    border-radius: 8px;
  `)}
`;i`
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
`;i`
  width: 100%;

  ${D(i`
    height: 202px;
  `)};
`;i`
  padding: 16px;
`;i`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 8px;

  ${D(i`
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 8px;
  `)};
`;i`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${m("grayBlue","03")};

  ${D(i`
    font-size: 14px;
    line-height: 17px;
  `)};
`;i`
  color: ${m("purple","03")};
`;i`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;i`
  align-self: center;
`;i`
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(i`
    font-size: 12px;
    line-height: 20px;
  `)};
`;i`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${m("grayBlue","02")};
`;i`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    padding: 4px 24px;
  }
`;i`
  padding: 4px 24px;
`;i`
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;

  &:hover .tips {
    display: block;
  }

  ${D(i`
    width: 16px;
    height: 16px;
  `)};
`;i`
  height: 16px;
  width: 16px;
  flex-shrink: 0;

  ${D(i`
    width: 16px;
    height: 16px;
  `)};
`;Tt.CREATE+"",Tt.TRANSFER_OWNER+"";i`
  border: unset;
  width: 486px;
  min-width: 486px;
  background: ${m("white","01")};
  border: 1px solid ${m("grayBlue","08")};
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  border-radius: 8px;
  overflow: hidden;

  ${D(i`
    width: 358px;
    min-width: 358px;
    border-radius: 8px;
  `)}
`;i`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;i`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
`;i`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${m("grayBlue","02")};
`;i`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;i`
  padding: 9px 16px;
`;i`
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
`;i`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
`;i`
  position: relative;
  padding: 0 24px;

  ${D(i`
    padding: 0 24px;
  `)}
`;i`
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 24px;
  font-size: 12px;

  ${D(i`
    top: 6px;
    right: 24px;
    font-size: 12px;
  `)}
`;i`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${m("grayBlue","02")};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  ${D(i`
    font-size: 14px;
    line-height: 22px;
  `)}
`;i`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 24px 0 16px;

  ${D(i`
    font-size: 18px;
    line-height: 24px;
    margin: 24px 0 16px 0;
  `)}
`;i`
  padding: 8px 0 24px;

  ${D(i`
    padding: 8px 0 24px 0;
  `)}
`;i`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  ${D(i`
    font-size: 14px;
    line-height: 22px;
  `)}
`;i`
  display: flex;
  gap: 16px;
  padding-top: 8px;

  ${D(i`
    gap: 16px;
    padding-top: 8px;
  `)}
`;i`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;

  ${D(i`
    padding: 24px 0;
  `)}
`;i`
  text-align: end;
`;i`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${m("techPurple","03")};
  margin-bottom: 4px;

  ${D(i`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 4px;
  `)}
`;i`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(i`
    font-size: 12px;
    line-height: 20px;
  `)}
`;i`
  text-align: start;
  margin-top: 16px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","03")};

  ${D(i`
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 12px;
    line-height: 20px;
  `)}
`;const Cr=(e,t,n,o,r)=>{const a={email:t,userRole:n,redirectURL:encodeURIComponent(o),hosts:window.location.origin};return Oe({method:"POST",url:"/inviteByEmail",data:a},{teamID:e})},vr=(e,t,n)=>Oe({method:"PATCH",url:`/teamMembers/${t}/role`,data:{userRole:n}},{teamID:e}),Er=i`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`,Ir=i`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Sr=i`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`;i`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;i`
  color: ${m("grayBlue","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;const Rr=i`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`,Lr=i`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ar=i`
  color: ${m("grayBlue","02")};
  white-space: nowrap;
  flex: 1;
  text-overflow: ellipsis;
  margin-left: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,kr=i`
  height: 100%;
`,$t=e=>{const{excludeUserRole:t,defaultInviteUserRole:n,defaultBalance:o,teamID:r,onBalanceChange:a,redirectURL:s,currentUserRole:p,onInvitedChange:h,itemID:d}=e,f=Pe(),{t:g}=re(),u=Zt(),{track:_}=c.useContext(Ge),[x,v]=Se(n,{defaultValue:n}),[y,w]=Se(o,{defaultValue:o}),[I,T]=c.useState([]),[E,F]=c.useState(!1),[L,A]=c.useState([]);return C("div",{css:Er,children:[l("div",{css:Ir,children:g("user_management.modal.email.invite_title")}),C("div",{css:Sr,children:[l(Di,{saveOnBlur:!0,flexShrink:"1",readOnly:E,flexGrow:"1",value:L,onChange:b=>{A(b)},w:"unset",colorScheme:"techPurple",validate:b=>{if(b.length===0)return!0;const R=b.length>0&&sr.test(b);return R||f.error({content:g("user_management.modal.email.not_mail")}),R},suffix:l("div",{css:kr,children:l(kt,{inline:!0,currentUserRole:p,excludeUserRole:t,value:x,onClickItem:async b=>{v(b)}})})}),l(ae,{ml:"8px",w:"80px",h:"32px",flexShrink:"0",disabled:L.length===0,colorScheme:m("grayBlue","02"),loading:E,onClick:async()=>{if(_==null||_(P.CLICK,{element:"share_modal_send",parameter5:d}),te(U.EDITOR,x)&&y<L.length){u({modalType:"add-license",from:"invite_by_email"});return}F(!0);const b=[...I];for(let R=0;R<L.length;R++)try{const $=await Cr(r,L[R],x,s,window.customDomain),O=b.findIndex(W=>W.email===L[R]),G={email:L[R],userRole:x,teamMemberID:$.data.teamMemberID};O!==-1?b[O]=G:b.push(G),A([])}catch($){or($)?$.data.errorFlag===rr.ERROR_FLAG_EMAIL_ALREADY_USED&&f.error({content:g("user_management.modal.email.invited")}):f.error({content:g("user_management.mes.invite_fail")})}te(U.EDITOR,x)&&(w(y-L.length),a(y-L.length)),h(b),T(b),F(!1)},children:E?void 0:g("user_management.modal.email.invite")})]}),je,I.length>0&&l("div",{css:Rr,children:I.map(b=>C("div",{css:Lr,children:[l(Nn,{name:b.email}),l("div",{css:Ar,children:b.email}),l(kt,{currentUserRole:p,value:b.userRole,onClickItem:async R=>{F(!0);try{await vr(r,b.teamMemberID,R);const $=I.findIndex(O=>O.email===b.email);if($!=-1){const O=[...I];O[$].userRole=R,T(O),h==null||h(O)}f.success({content:g("user_management.mes.invite_suc")})}catch{f.error({content:g("user_management.mes.change_role_fail")})}finally{F(!1)}}})]},b.email))})]})};$t.displayName="InviteByEmailPC";const Tr=(e,t,n,o,r)=>{let a=`/inviteLink/userRole/${t}`;return n&&(a+=`?redirectURL=${encodeURIComponent(n)}`),o&&(n?a+=`&customDomain=${o}`:a+=`?customDomain=${o}`),Oe({url:a,method:"GET",signal:r},{teamID:e})},$r=(e,t,n,o)=>{let r=`/inviteLink/userRole/${n}`;return t&&(r+=`?redirectURL=${encodeURIComponent(t)}`),o&&(t?r+=`&customDomain=${o}`:r+=`?customDomain=${o}`),Oe({url:r,method:"GET"},{teamID:e})},Dr=e=>Oe({method:"PATCH",url:"/configInviteLink",data:{inviteLinkEnabled:!0}},{teamID:e}),Mr=e=>Oe({method:"PATCH",url:"/configInviteLink",data:{inviteLinkEnabled:!1}},{teamID:e}),Br=i`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`,Pr=i`
  color: ${m("grayBlue","02")};
  flex-grow: 1;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Or=i`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`,Nr=i`
  display: flex;
  margin-top: 8px;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`,zr=i`
  font-size: 16px;
  cursor: pointer;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  flex-shrink: 0;
  color: ${m("grayBlue","01")};
`,Vr=i`
  display: flex;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`,Ur=i`
  color: ${m("grayBlue","02")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;i`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;const Dt=e=>{const{excludeUserRole:t,defaultAllowInviteLink:n,defaultInviteUserRole:o,onInviteLinkStateChange:r,teamID:a,currentUserRole:s,onCopyInviteLink:p,redirectURL:h,defaultBalance:d}=e,[f,g]=Se(o,{defaultValue:o}),[u,_]=Se(n,{defaultValue:n}),x=Pe(),v=Zt(),{t:y}=re(),[w,I]=c.useState(""),[T,E]=c.useState(!1);c.useEffect(()=>{if(!u)return;let b=new AbortController;return(async()=>{E(!0);try{const $=await Tr(a,f,h,window.customDomain,b.signal),O=new URL($.data.inviteLink);je||(O.host=window.location.host),I(O.toString())}catch{x.error({content:y("user_management.modal.link.fail")})}finally{E(!1)}})(),()=>{b.abort()}},[s,a,u,f,x,y,h]);const F=c.useCallback(async(b,R)=>{E(!0);try{const $=await $r(b,h,R,window.customDomain);I($.data.inviteLink)}catch{x.error({content:y("user_management.modal.link.fail")})}finally{E(!1)}g(R)},[x,h,g,y]),L=c.useCallback(async b=>{E(!0);try{await Dr(b),_(!0),r==null||r(!0)}catch{x.error({content:y("user_management.modal.link.turn_on_fail")})}finally{E(!1)}},[x,r,_,y]),A=c.useCallback(async b=>{E(!0);try{await Mr(b),_(!1),r==null||r(!1)}catch{x.error({content:y("user_management.modal.link.turn_off_fail")})}finally{E(!1)}},[x,r,_,y]);return Qi(U.ADMIN,s,!1)&&!u?null:C("div",{css:Br,children:[(u||!u&&te(U.ADMIN,s))&&C("div",{css:Or,children:[l("div",{css:Pr,children:y("user_management.modal.link.invite_title")}),u&&te(U.ADMIN,s)&&l(Fe,{trigger:"click",position:"bottom-end",dropList:C(Ue,{children:[l(de,{value:y("user_management.modal.link.update"),title:y("user_management.modal.link.update"),onClick:async()=>{await F(a,f)}},y("user_management.modal.link.update")),l(de,{value:y("user_management.modal.link.turn_off"),title:y("user_management.modal.link.turn_off"),onClick:async()=>{await A(a)}},y("user_management.modal.link.turn_off"))]}),children:l("div",{css:zr,children:l(Mi,{})})})]}),u?C("div",{css:Nr,children:[l(Kt,{flexShrink:"1",flexGrow:"1",w:"unset",readOnly:!0,colorScheme:"techPurple",value:T?l(Bn,{text:{rows:1},opac:.5,animation:!0,flexGrow:"1"}):w,suffix:l(kt,{inline:!0,currentUserRole:s,excludeUserRole:t,value:f,onClickItem:async b=>{te(U.VIEWER,b,!1)&&d===0?v({modalType:"upgrade",from:"invite_by_link"}):await F(a,b)}})}),l(ae,{ml:"8px",w:"80px",colorScheme:m("grayBlue","02"),loading:T,onClick:()=>{if(te(U.VIEWER,f,!1)&&d===0){v({modalType:"upgrade",from:"invite_by_link"});return}const b=new URL(w);h!==""&&b.searchParams.set("redirectURL",h),p==null||p(b.href)},children:T?void 0:y("user_management.modal.link.copy")})]}):te(U.ADMIN,s)&&C("div",{css:Vr,children:[l("div",{css:Ur,children:y("user_management.modal.link.description")}),l(ae,{variant:"text",size:"small",loading:T,colorScheme:"techPurple",onClick:async()=>{await L(a)},children:y("user_management.modal.link.turn_on")})]})]})};Dt.displayName="InviteLinkPC";i`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`;i`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;i`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;i`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  margin-bottom: 16px;
`;i`
  display: flex;
  flex-direction: row;
`;i`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;i`
  color: ${m("grayBlue","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;i`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;i`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;i`
  color: ${m("grayBlue","02")};
  white-space: nowrap;
  flex: 1;
  text-overflow: ellipsis;
  margin-left: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;i`
  height: 44px;
  font-size: 14px;
  line-height: 17px;
`;i`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;i`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  padding-bottom: 12px;
`;i`
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
`;i`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  & > svg {
    width: 48px;
    height: 48px;
  }
`;i`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

`;i`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;i`
  display: flex;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${m("grayBlue","09")};
`;i`
  position: sticky;
  top: 0;
  padding-top: 12px;
  background-color: ${m("white","01")};
`;i`
  height: 70%;
  width: 100%;
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;i`
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
`;i`
  overflow-y: auto;
`;i`
  margin-bottom: 24px;
`;var st=(e=>(e[e.UNIT_TYPE_APP=8]="UNIT_TYPE_APP",e[e.UNIT_TYPE_AI_AGENT=29]="UNIT_TYPE_AI_AGENT",e))(st||{});const Fr=e=>zn({method:"GET",url:`/search?keyword=${e}`}),Wr=e=>zn({method:"GET",url:`/defaultHashtagsList/unitType/${e}`}),jr=e=>Vn({method:"GET",url:`/apps/${e}`}),Hr=e=>Vn({method:"GET",url:`/aiAgents/${e}`}),Kr=i`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`,Gr=i`
  display: flex;
  flex-direction: row;
`,qr=i`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Yr=i`
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${m("grayBlue","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,Zr=e=>{const{productType:t,productID:n,productContributed:o,onTagChange:r}=e,{t:a}=re(),s=c.useRef(""),[p,h]=c.useState([]),[d,f]=c.useState([]),[g,u]=c.useState([]),[_,x]=c.useState(!1);c.useEffect(()=>{if(!o){h([]);return}switch(t){case st.UNIT_TYPE_APP:jr(n).then(y=>{h(y.data.marketplace.hashtags)});break;case st.UNIT_TYPE_AI_AGENT:Hr(n).then(y=>{h(y.data.marketplace.hashtags)});break}},[o,n,t]);const v=c.useRef(Yn(async y=>{x(!0);try{const w=await Fr(y);s.current===y&&u(w.data.match)}catch{}finally{x(!1)}},160));return c.useEffect(()=>{Wr(t).then(y=>{f(y.data.hashtags),s.current===""&&u(y.data.hashtags)})},[t]),C("div",{css:Kr,children:[l("div",{css:qr,children:a("contribute.tag.tag")}),l("div",{css:Gr,children:l(Bi,{loading:_,options:g,multiple:!0,flexShrink:"1",flexGrow:"1",filterOption:(y,w)=>y===w.value?!0:g.includes(w.value.toString()),defaultFilterOption:(y,w)=>g.includes(w.value.toString()),placeholder:"Enter↵",value:p,onChange:y=>{r==null||r(y),h(y)},onInputValueChange:y=>{s.current=y,y===""?u(d):v.current(y)},colorScheme:"techPurple",labelInValue:!1,inputAsOption:!0,showSearch:!0})}),l("div",{css:Yr,children:a("contribute.tag.recommended")}),d.length===0?l(Bn,{text:{rows:4},opac:.5,animation:!0}):l(Ht,{wrap:!0,children:d.map(y=>l($e,{clickable:!0,variant:p.includes(y)?"outline":"light",colorScheme:p.includes(y)?"techPurple":"grayBlue",onClick:()=>{if(p.includes(y))return;const w=[...p,y];h(w),r==null||r(w)},children:y},y))})]})};function Ye(e){var t=Object.entries(e).filter(function(n){var o=n[1];return o!=null}).map(function(n){var o=n[0],r=n[1];return"".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(String(r)))});return t.length>0?"?".concat(t.join("&")):""}var Xr=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,r){o.__proto__=r}||function(o,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(o[a]=r[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function o(){this.constructor=t}t.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}}(),fe=globalThis&&globalThis.__assign||function(){return fe=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fe.apply(this,arguments)},Jr=globalThis&&globalThis.__awaiter||function(e,t,n,o){function r(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function p(f){try{d(o.next(f))}catch(g){s(g)}}function h(f){try{d(o.throw(f))}catch(g){s(g)}}function d(f){f.done?a(f.value):r(f.value).then(p,h)}d((o=o.apply(e,t||[])).next())})},Qr=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},o,r,a,s;return s={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function p(d){return function(f){return h([d,f])}}function h(d){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,r&&(a=d[0]&2?r.return:d[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,d[1])).done)return a;switch(r=0,a&&(d=[d[0]&2,a.value]),d[0]){case 0:case 1:a=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,r=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!a||d[1]>a[0]&&d[1]<a[3])){n.label=d[1];break}if(d[0]===6&&n.label<a[1]){n.label=a[1],a=d;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(d);break}a[2]&&n.ops.pop(),n.trys.pop();continue}d=t.call(e,n)}catch(f){d=[6,f],r=0}finally{o=a=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}},Qn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},eo=function(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"},to=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},no=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function io(e,t,n){var o=t.height,r=t.width,a=Qn(t,["height","width"]),s=fe({height:o,width:r,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),p=window.open(e,"",Object.keys(s).map(function(d){return"".concat(d,"=").concat(s[d])}).join(", "));if(n)var h=window.setInterval(function(){try{(p===null||p.closed)&&(window.clearInterval(h),n(p))}catch(d){console.error(d)}},1e3);return p}var ro=function(e){Xr(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.openShareDialog=function(o){var r=n.props,a=r.onShareWindowClose,s=r.windowHeight,p=s===void 0?400:s,h=r.windowPosition,d=h===void 0?"windowCenter":h,f=r.windowWidth,g=f===void 0?550:f,u=fe({height:p,width:g},d==="windowCenter"?to(g,p):no(g,p));io(o,u,a)},n.handleClick=function(o){return Jr(n,void 0,void 0,function(){var r,a,s,p,h,d,f,g,u,_;return Qr(this,function(x){switch(x.label){case 0:return r=this.props,a=r.beforeOnClick,s=r.disabled,p=r.networkLink,h=r.onClick,d=r.url,f=r.openShareDialogOnClick,g=r.opts,u=p(d,g),s?[2]:(o.preventDefault(),a?(_=a(),eo(_)?[4,_]:[3,2]):[3,2]);case 1:x.sent(),x.label=2;case 2:return f&&this.openShareDialog(u),h&&h(o,u),[2]}})})},n}return t.prototype.render=function(){var n=this.props;n.beforeOnClick;var o=n.children,r=n.className,a=n.disabled,s=n.disabledStyle,p=n.forwardedRef;n.networkLink;var h=n.networkName;n.onShareWindowClose,n.openShareDialogOnClick,n.opts;var d=n.resetButtonStyle,f=n.style;n.url,n.windowHeight,n.windowPosition,n.windowWidth;var g=Qn(n,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"]),u=Pi("react-share__ShareButton",{"react-share__ShareButton--disabled":!!a,disabled:!!a},r),_=fe(fe(d?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},f),a&&s);return qe.createElement("button",fe({},g,{"aria-label":g["aria-label"]||h,className:u,onClick:this.handleClick,ref:p,style:_}),o)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(c.Component);const oo=ro;var lt=globalThis&&globalThis.__assign||function(){return lt=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lt.apply(this,arguments)};function Ze(e,t,n,o){function r(a,s){var p=n(a),h=lt({},a),d=Object.keys(p);return d.forEach(function(f){delete h[f]}),qe.createElement(oo,lt({},o,h,{forwardedRef:s,networkName:e,networkLink:t,opts:n(a)}))}return r.displayName="ShareButton-".concat(e),c.forwardRef(r)}var ao=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,r){o.__proto__=r}||function(o,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(o[a]=r[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function o(){this.constructor=t}t.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}}(),so=function(e){ao(t,e);function t(n){var o=e.call(this,n)||this;return o.name="AssertionError",o}return t}(Error);function Re(e,t){if(!e)throw new so(t)}function lo(e,t){var n=t.quote,o=t.hashtag;return Re(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+Ye({u:e,quote:n,hashtag:o})}var co=Ze("facebook",lo,function(e){return{quote:e.quote,hashtag:e.hashtag}},{windowWidth:550,windowHeight:400});const po=co;function uo(e,t){var n=t.title,o=t.summary,r=t.source;return Re(e,"linkedin.url"),"https://linkedin.com/shareArticle"+Ye({url:e,mini:"true",title:n,summary:o,source:r})}var ho=Ze("linkedin",uo,function(e){var t=e.title,n=e.summary,o=e.source;return{title:t,summary:n,source:o}},{windowWidth:750,windowHeight:600});const fo=ho;function go(e,t){var n=t.title;return Re(e,"reddit.url"),"https://www.reddit.com/submit"+Ye({url:e,title:n})}var mo=Ze("reddit",go,function(e){return{title:e.title}},{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"});const xo=mo;function yo(e,t){var n=t.title,o=t.via,r=t.hashtags,a=r===void 0?[]:r,s=t.related,p=s===void 0?[]:s;return Re(e,"twitter.url"),Re(Array.isArray(a),"twitter.hashtags is not an array"),Re(Array.isArray(p),"twitter.related is not an array"),"https://twitter.com/share"+Ye({url:e,text:n,via:o,hashtags:a.length>0?a.join(","):void 0,related:p.length>0?p.join(","):void 0})}var wo=Ze("twitter",yo,function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}},{windowWidth:550,windowHeight:400});const bo=wo;function _o(){return/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)}function Co(e,t){var n=t.title,o=t.separator;return Re(e,"whatsapp.url"),"https://"+(_o()?"api":"web")+".whatsapp.com/send"+Ye({text:n?n+o+e:e})}var vo=Ze("whatsapp",Co,function(e){return{title:e.title,separator:e.separator||" "}},{windowWidth:550,windowHeight:400});const Eo=vo,Io=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("g",{clipPath:"url(#clip0_10104_3860)"},c.createElement("path",{d:"M24 12.073C24 5.40405 18.6269 -0.00195312 11.9999 -0.00195312C5.36995 -0.000453125 -0.00305176 5.40405 -0.00305176 12.0745C-0.00305176 18.1 4.38595 23.095 10.1219 24.001V15.5635H7.07695V12.0745H10.1249V9.41205C10.1249 6.38655 11.9174 4.71555 14.6579 4.71555C15.9719 4.71555 17.3444 4.95105 17.3444 4.95105V7.92105H15.8309C14.3414 7.92105 13.8764 8.85255 13.8764 9.80805V12.073H17.2034L16.6724 15.562H13.8749V23.9995C19.6109 23.0935 24 18.0985 24 12.073Z",fill:"url(#paint0_linear_10104_3860)"})),c.createElement("defs",null,c.createElement("linearGradient",{id:"paint0_linear_10104_3860",x1:11.9984,y1:-.00195313,x2:11.9984,y2:24.001,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#17A9FD"}),c.createElement("stop",{offset:1,stopColor:"#0165E1"})),c.createElement("clipPath",{id:"clip0_10104_3860"},c.createElement("rect",{width:24,height:24,fill:"white"})))),So=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("g",{clipPath:"url(#clip0_10104_3855)"},c.createElement("path",{d:"M24.0002 21.8182C24.0002 23.0232 23.0234 24 21.8184 24H2.18206C0.977077 24 0.000244141 23.0232 0.000244141 21.8182V2.18182C0.000244141 0.976833 0.977078 0 2.18206 0H21.8184C23.0234 0 24.0002 0.976833 24.0002 2.18182V21.8182Z",fill:"#FF6B00"}),c.createElement("path",{d:"M11.3455 17.2364H12.6546V13.3091L16.2546 6.76367H14.88L12 12.0655L9.12003 6.76367H7.74548L11.3455 13.3091V17.2364Z",fill:"white",stroke:"white",strokeWidth:.545455})),c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_10104_3855"},c.createElement("rect",{width:24,height:24,fill:"white"})))),Ro=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("path",{d:"M6.05358 7.88802V21.9879H1.36794V7.88802H6.05358Z",fill:"#0A66C2"}),c.createElement("path",{d:"M6.36192 3.52634C6.36192 4.8807 5.34517 5.96186 3.71173 5.96186H3.68051C2.10757 5.96186 1.09082 4.8807 1.09082 3.52634C1.09082 2.14465 2.1388 1.09082 3.74296 1.09082C5.34712 1.09082 6.33265 2.1427 6.36192 3.52634Z",fill:"#0A66C2"}),c.createElement("path",{d:"M13.2899 14.1134V21.9879H8.60619C8.60619 21.9879 8.66473 9.21116 8.60619 7.88802H13.2899V9.88249C13.9144 8.92039 15.0287 7.55431 17.515 7.55431C20.5984 7.55431 22.909 9.5683 22.909 13.9007V21.9879H18.2234V14.4452C18.2234 12.5483 17.5462 11.2564 15.8503 11.2564C14.5545 11.2564 13.7836 12.1287 13.446 12.9698C13.3211 13.2704 13.2899 13.6919 13.2899 14.1134Z",fill:"#0A66C2"})),Lo=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("g",{clipPath:"url(#clip0_10104_3846)"},c.createElement("path",{d:"M9.25049 12C8.92042 12.0004 8.60398 12.1317 8.37058 12.3651C8.13719 12.5985 8.00589 12.9149 8.00549 13.245C8.00549 13.9335 8.56349 14.505 9.25049 14.4915C9.57341 14.4803 9.87935 14.3441 10.1038 14.1117C10.3283 13.8793 10.4538 13.5689 10.4538 13.2457C10.4538 12.9226 10.3283 12.6122 10.1038 12.3798C9.87935 12.1474 9.57341 12.0112 9.25049 12ZM12.015 17.4705C12.4875 17.4705 14.1195 17.4135 14.979 16.554C15.0347 16.4905 15.0654 16.4089 15.0654 16.3245C15.0654 16.2401 15.0347 16.1585 14.979 16.095C14.9492 16.0642 14.9135 16.0398 14.8741 16.0231C14.8347 16.0064 14.7923 15.9978 14.7495 15.9978C14.7067 15.9978 14.6643 16.0064 14.6249 16.0231C14.5854 16.0398 14.5498 16.0642 14.52 16.095C13.9905 16.6395 12.831 16.8255 12.015 16.8255C11.1975 16.8255 10.053 16.6395 9.50849 16.095C9.47871 16.0642 9.44304 16.0398 9.40361 16.0231C9.36419 16.0064 9.32181 15.9978 9.27899 15.9978C9.23618 15.9978 9.1938 16.0064 9.15437 16.0231C9.11495 16.0398 9.07928 16.0642 9.04949 16.095C9.01874 16.1248 8.99428 16.1605 8.97758 16.1999C8.96088 16.2393 8.95228 16.2817 8.95228 16.3245C8.95228 16.3673 8.96088 16.4097 8.97758 16.4491C8.99428 16.4885 9.01874 16.5242 9.04949 16.554C9.89549 17.3985 11.5275 17.469 12.015 17.469V17.4705ZM13.503 13.26C13.503 13.947 14.0625 14.505 14.7495 14.505C15.4365 14.505 15.9945 13.9335 15.9945 13.26C15.9788 12.9404 15.8408 12.639 15.609 12.4184C15.3773 12.1977 15.0695 12.0746 14.7495 12.0746C14.4295 12.0746 14.1217 12.1977 13.89 12.4184C13.6582 12.639 13.5202 12.9404 13.5045 13.26H13.503Z",fill:"#FF4500"}),c.createElement("path",{d:"M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM18.258 10.2525C17.7855 10.2525 17.355 10.4385 17.04 10.74C15.8385 9.8805 14.19 9.3225 12.3585 9.2505L13.1595 5.499L15.7665 6.057C15.778 6.30042 15.8606 6.53513 16.0042 6.73203C16.1477 6.92893 16.3459 7.07936 16.5742 7.16469C16.8025 7.25001 17.0507 7.26647 17.2883 7.21203C17.5258 7.15759 17.7421 7.03464 17.9104 6.85841C18.0788 6.68219 18.1917 6.46045 18.2351 6.22067C18.2786 5.9809 18.2508 5.73363 18.1551 5.50952C18.0594 5.28542 17.9 5.09433 17.6967 4.95994C17.4934 4.82555 17.2552 4.75377 17.0115 4.7535C16.7784 4.75431 16.5502 4.82054 16.3529 4.94465C16.1557 5.06875 15.9972 5.24575 15.8955 5.4555L12.9885 4.8405C12.9494 4.83207 12.9089 4.83144 12.8696 4.83865C12.8302 4.84585 12.7926 4.86076 12.759 4.8825C12.724 4.90437 12.6942 4.93374 12.6719 4.9685C12.6496 5.00326 12.6353 5.04254 12.63 5.0835L11.742 9.2655C9.882 9.3225 8.205 9.8805 6.987 10.7535C6.672 10.4535 6.243 10.2675 5.772 10.2675C5.37256 10.2669 4.98501 10.4034 4.67412 10.6542C4.36322 10.905 4.14781 11.2549 4.06387 11.6454C3.97994 12.036 4.03256 12.4435 4.21296 12.7998C4.39335 13.1562 4.69059 13.4399 5.055 13.6035C5.025 13.776 5.0115 13.9485 5.0115 14.133C5.0115 16.8255 8.148 19.017 12.015 19.017C15.8805 19.017 19.017 16.8405 19.017 14.133C19.017 13.962 19.002 13.776 18.9735 13.6035C19.575 13.332 20.0055 12.7155 20.0055 12C20.0055 11.025 19.218 10.2525 18.258 10.2525Z",fill:"#FF4500"})),c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_10104_3846"},c.createElement("rect",{width:24,height:24,fill:"white"})))),Ao=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("rect",{width:24,height:24,rx:4,fill:"url(#paint0_linear_8290_2043)"}),c.createElement("path",{d:"M17.6083 6.30043C16.8714 5.55676 15.994 4.96718 15.027 4.56603C14.06 4.16489 13.0228 3.96021 11.9759 3.96392C7.58919 3.96392 4.01411 7.538 4.01009 11.9257C4.01009 13.3311 4.37774 14.6982 5.07187 15.9087L3.9458 20.0362L8.1688 18.9293C9.33706 19.565 10.6459 19.8983 11.9759 19.8986H11.98C16.3677 19.8986 19.9418 16.3245 19.9458 11.9328C19.9468 10.8861 19.7407 9.84959 19.3393 8.88293C18.938 7.91627 18.3503 7.03858 17.6083 6.30043ZM11.9759 18.5506C10.7896 18.551 9.62506 18.2317 8.60476 17.6264L8.36368 17.4817L5.85841 18.1387L6.52742 15.6947L6.37071 15.4426C5.70754 14.3881 5.3568 13.1674 5.35916 11.9217C5.35916 8.27933 8.32953 5.30796 11.98 5.30796C12.8496 5.3064 13.711 5.477 14.5144 5.80991C15.3178 6.14283 16.0474 6.63148 16.661 7.24769C17.2768 7.8615 17.765 8.59116 18.0974 9.39458C18.4298 10.198 18.5999 11.0593 18.5977 11.9288C18.5937 15.5842 15.6233 18.5506 11.9759 18.5506ZM15.6073 13.5943C15.4094 13.4948 14.432 13.0136 14.2482 12.9453C14.0653 12.88 13.9317 12.8459 13.8011 13.0448C13.6675 13.2427 13.2858 13.6937 13.1713 13.8233C13.0568 13.9569 12.9383 13.972 12.7394 13.8735C12.5415 13.7731 11.8996 13.5641 11.1402 12.8841C10.5475 12.3567 10.1507 11.7037 10.0322 11.5059C9.91767 11.307 10.0211 11.2005 10.1206 11.101C10.208 11.0126 10.3185 10.868 10.4179 10.7535C10.5184 10.639 10.5515 10.5546 10.6168 10.422C10.6821 10.2874 10.651 10.1729 10.6018 10.0734C10.5515 9.97396 10.1547 8.99254 9.98698 8.59676C9.82626 8.206 9.66252 8.26025 9.53997 8.25523C9.42546 8.24819 9.29186 8.24819 9.15826 8.24819C9.05736 8.2507 8.95808 8.27404 8.86664 8.31673C8.77519 8.35943 8.69356 8.42057 8.62686 8.49631C8.44404 8.69521 7.93274 9.17637 7.93274 10.1578C7.93274 11.1392 8.64595 12.0824 8.7464 12.216C8.84484 12.3497 10.1467 14.3577 12.1447 15.2216C12.6168 15.4275 12.9885 15.549 13.2788 15.6415C13.7559 15.7941 14.1869 15.771 14.5304 15.7218C14.9121 15.6636 15.7067 15.2397 15.8745 14.7746C16.0392 14.3085 16.0392 13.9107 15.989 13.8273C15.9398 13.7429 15.8062 13.6937 15.6073 13.5943Z",fill:"white"}),c.createElement("defs",null,c.createElement("linearGradient",{id:"paint0_linear_8290_2043",x1:12,y1:0,x2:12,y2:24,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#00FF68"}),c.createElement("stop",{offset:1,stopColor:"#00D523"})))),ko=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},c.createElement("g",{clipPath:"url(#clip0_10030_1462)"},c.createElement("path",{d:"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",fill:"black",stroke:"white",strokeWidth:.0246577,strokeMiterlimit:10}),c.createElement("path",{d:"M5.17864 5.14282L10.8516 12.728L5.14288 18.8952H6.4278L11.4259 13.4956L15.4641 18.8952H19.8364L13.8441 10.8834L19.1578 5.14282H17.8729L13.2701 10.1155L9.55094 5.14282H5.17864ZM7.06816 6.08919H9.07677L17.9466 17.9488H15.938L7.06816 6.08919Z",fill:"white"})),c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_10030_1462"},c.createElement("rect",{width:24,height:24,fill:"white"}))));var ve=(e=>(e.X="x",e.REDDIT="reddit",e.LINKEDIN="linkedin",e.HACKER_NEWS="hacker_news",e.FACEBOOK="facebook",e.WHATSAPP="whatsapp",e))(ve||{});const To=[{platform:"x",platformName:"X",icon:l(ko,{})},{platform:"reddit",platformName:"Reddit",icon:l(Lo,{})},{platform:"linkedin",platformName:"LinkedIn",icon:l(Ro,{})},{platform:"hacker_news",platformName:"Hacker News",icon:l(So,{})},{platform:"facebook",platformName:"Facebook",icon:l(Io,{})},{platform:"whatsapp",platformName:"WhatsApp",icon:l(Ao,{})}],$o=i`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`,Do=i`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Mo=i`
  margin-top: 8px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(146px, 1fr));
`,Bo=i`
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
`,Po=i`
  font-size: 24px;
  width: 24px;
  height: 24px;
`,Oo=i`
  margin-top: 8px;
  color: ${m("grayBlue","01")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,ei=e=>{const{title:t,shareUrl:n,onShare:o}=e,{t:r}=re();return C("div",{css:$o,children:[l("div",{css:Do,children:r("user_management.modal.social_media.label")}),l("div",{css:Mo,children:To.map(a=>{const s=C("div",{css:Bo,onClick:()=>{o==null||o(a.platform)},children:[l("div",{css:Po,children:a.icon}),l("div",{css:Oo,children:a.platformName})]},a.platform);switch(a.platform){case ve.X:return l(bo,{url:n,title:t,children:s},a.platform);case ve.REDDIT:return l(xo,{url:n,title:t,children:s},a.platform);case ve.LINKEDIN:return l(fo,{url:n,title:t,children:s},a.platform);case ve.HACKER_NEWS:return l("div",{onClick:()=>{window.open(`https://news.ycombinator.com/submitlink?u=${n}&t=${t}`,"_blank")},children:s},a.platform);case ve.FACEBOOK:return l(po,{url:n,title:t,children:s},a.platform);case ve.WHATSAPP:return l(Eo,{url:n,title:t,children:s},a.platform);default:return null}})})]})};ei.displayName="ShareBlockPC";i`
  display: flex;
  flex-direction: column;
`;i`
  margin-top: 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;i`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;i`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`;i`
  margin-top: 8px;
  color: ${m("grayBlue","04")};
  margin-right: 54px;
  white-space: break-spaces;
  word-break: break-all;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;i`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`;i`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;i`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;i`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;i`
  color: ${m("grayBlue","04")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;i`
  width: 100%;
  display: flex;
  gap: 11px;
  justify-content: center;
  align-items: center;
`;i`
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
`;i`
  display: flex;
  flex: none;
  width: 24px;
  height: 24px;
`;i`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
`;i`
  width: 48px;
  height: 48px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;i`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;i``;i`
  position: absolute;
  width: 100%;
  height: 78px;
  bottom: 48px;
`;i`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;i`
  padding-top: 12px;
  width: 100%;
  flex: none;
  overflow-x: hidden;
  background-color: ${m("white","01")};
`;i`
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;i`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
`;i`
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
`;i`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${m("grayBlue","03")};
`;i`
  height: 20px;
  width: 2px;
  background-color: ${m("grayBlue","08")};
`;i`
  margin-top: 20px;
  overflow-y: auto;
`;i`
  margin-bottom: 24px;
`;const No=e=>c.createElement("svg",{width:8,height:8,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("g",{clipPath:"url(#clip0_9028_2224)"},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49994 7C3.49994 7.27614 3.7238 7.5 3.99994 7.5C4.27609 7.5 4.49994 7.27614 4.49994 7V4.88312L6.24278 5.92884C6.47957 6.07092 6.7867 5.99414 6.92877 5.75735C7.07085 5.52056 6.99407 5.21343 6.75728 5.07135L4.97182 4.00005L6.75723 2.92884C6.99402 2.78677 7.07081 2.47964 6.92874 2.24285C6.78667 2.00606 6.47954 1.92927 6.24275 2.07134L4.49994 3.11699V1C4.49994 0.723858 4.27609 0.5 3.99994 0.5C3.7238 0.5 3.49994 0.723857 3.49994 1V3.11691L1.7573 2.07131C1.52051 1.92923 1.21338 2.00601 1.07131 2.2428C0.929232 2.47959 1.00601 2.78672 1.2428 2.9288L3.02815 4.00003L1.24277 5.07122C1.00598 5.21329 0.929193 5.52042 1.07126 5.75721C1.21333 5.99401 1.52046 6.07079 1.75725 5.92872L3.49994 4.88315V7Z",fill:"#FF4747"})),c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_9028_2224"},c.createElement("rect",{width:8,height:8,fill:"white"})))),zo=(e,t,n)=>dt({method:"POST",url:`/products/apps/${t}/updatePropertyWith?property=hashtags`,data:{hashtags:n}},{teamID:e}),ti=async(e,t,n)=>Un({method:"PATCH",url:`/apps/${e}/config`,data:n},{teamID:t}),Vo=(e,t,n)=>dt({method:"POST",url:`/products/apps/${t}/recontributeWith?property=hashtags`,data:{hashtags:n}},{teamID:e}),fn=i`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
`,gn=i`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 22px;
`,Uo=i`
  margin-left: 4px;
`,Fo=i`
  width: 100%;
  padding-top: 16px;
`,ni=e=>{const[t,n]=c.useState(!1),{t:o}=re(),{control:r,formState:a,handleSubmit:s}=Gn({mode:"onSubmit",defaultValues:{appName:e.appName,appDesc:e.appDesc,hashtags:[],publishWithAIAgent:!0}}),p=Pe(),{isValid:h}=qn({control:r});return C(Gt,{withoutLine:!0,w:"498px",closable:!0,onCancel:()=>{var d;(d=e.onClose)==null||d.call(e)},enableOnFormTags:!1,maskClosable:!1,visible:!0,hideCancel:!e.productContributed,okText:e.productContributed?o("contribute.update_modal.button"):o("contribute.first_time_modal.button"),onOk:s(async d=>{var f;n(!0),await ti(e.productID,e.teamID,{appName:d.appName,description:d.appDesc,publishWithAIAgent:d.publishWithAIAgent});try{e.productContributed?await zo(e.teamID,e.productID,d.hashtags):await Vo(e.teamID,e.productID,d.hashtags),e.onAppInfoUpdate({appName:d.appName,appDesc:d.appDesc,publishWithAIAgent:d.publishWithAIAgent}),e.onContributed(!0),e.onAppPublic(!0),(f=e.onClose)==null||f.call(e)}catch{p.error({content:o("user_management.modal.message.make_public_failed")})}finally{n(!1)}}),okButtonProps:{colorScheme:m("grayBlue","02"),disabled:!h,loading:t},title:e.productContributed?o("contribute.update_modal.title"):o("contribute.first_time_modal.title"),children:[l(De,{name:"appName",control:r,render:({field:d})=>C("section",{css:fn,children:[C("label",{css:gn,children:[o("new_dashboard.app_setting.app_name"),l(No,{css:Uo})]}),l(Kt,{...d,colorScheme:"techPurple",error:!!(a!=null&&a.errors.appName),placeholder:o("new_dashboard.app_setting.placeholder.app_name")})]}),rules:{required:o("page.user.sign_up.error_message.username.require"),maxLength:{value:280,message:o("page.user.sign_up.error_message.username.length")}}}),l(De,{name:"appDesc",control:r,render:({field:d})=>C("section",{css:fn,children:[l("label",{css:gn,children:o("new_dashboard.app_setting.description")}),l(Pn,{...d,showWordLimit:!0,maxLength:180,autoSize:{minRows:6},colorScheme:"techPurple",error:!!(a!=null&&a.errors.appDesc),placeholder:o("new_dashboard.app_setting.placeholder.description")})]})}),l(De,{name:"hashtags",control:r,render:({field:d})=>l(Zr,{productID:e.productID,productType:e.productType,productContributed:e.productContributed,onTagChange:f=>{d.onChange(f)}})}),!e.productContributed&&l(De,{name:"publishWithAIAgent",control:r,render:({field:d})=>l("div",{css:Fo,children:l(Oi,{...d,value:"",checked:d.value,colorScheme:"techPurple",children:o("contribute.checkbox_ai_agent")})})})]})};ni.displayName="ContributeAppPC";const Wo=async(e,t,n)=>(await Un({method:"PATCH",url:`/apps/${n}/config`,data:{public:e}},{teamID:t}),!0),jo=(e,t,n)=>dt({method:"POST",url:`/products/apps/${t}`,data:{hashtags:n}},{teamID:e}),Ho=(e,t)=>dt({method:"DELETE",url:`/products/apps/${t}`},{teamID:e}),Ko=i`
  display: flex;
  flex-direction: column;
`,mn=i`
  display: flex;
  margin-top: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`,xt=i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${m("grayBlue","04")};
`,Je=i`
  color: ${m("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Go=i`
  display: flex;
  gap: 8px;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`,qo=i`
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
`,yt=i`
  display: flex;
  align-items: center;
`,ii=e=>{const{title:t,appDesc:n,appName:o,onAppInfoUpdate:r,onShare:a,appID:s,ownerTeamID:p,ownerTeamIdentify:h,userRoleForThisApp:d,defaultAppPublic:f,defaultAppContribute:g,defaultPublishWithAIAgent:u,canUseBillingFeature:_,onAppPublic:x,onAppContribute:v,onCopyContributeLink:y,onCopyPublicLink:w,hidePublic:I}=e,T=Pe(),{t:E}=re(),[F,L]=c.useState(!1),[A,b]=Se(!1,{defaultValue:f}),[R,$]=c.useState(!1),[O,G]=c.useState(!1),[W,M]=Se(!1,{defaultValue:g}),[J,se]=Se(!1,{defaultValue:u}),[k,Y]=c.useState(!1),{track:K}=c.useContext(Ge),ne=te(U.VIEWER,d,!1),ye=c.useCallback(async j=>{const ke=performance.now();K==null||K(P.CLICK,{element:"invite_modal_contribute_switch",parameter4:!j,parameter5:s}),M(j),b(j);try{$(!0),await ti(s,p,{publishWithAIAgent:J}),e.onAppInfoUpdate({appName:o,appDesc:n,publishWithAIAgent:J}),j?await jo(p,s,void 0):await Ho(p,s),K==null||K(P.REQUEST,{element:"invite_modal_contribute_switch",consume:performance.now()-ke,parameter2:"suc",parameter4:j,parameter5:s}),v==null||v(j),x==null||x(j),j&&(K==null||K(P.SHOW,{element:"invite_modal_contribute_copy",parameter5:s}))}catch{T.error({content:E("user_management.modal.message.make_public_failed")}),K==null||K(P.REQUEST,{element:"invite_modal_contribute_switch",consume:performance.now()-ke,parameter2:"failed",parameter4:j,parameter5:s}),M(!j),b(!j)}finally{$(!1)}},[n,s,o,T,v,x,p,e,J,M,b,E,K]),we=C(Ve,{children:[C("div",{css:mn,children:[l("div",{css:Je,children:E("user_management.modal.link.make_public_title")}),!_&&C("div",{css:qo,children:[l(ar,{}),l("div",{style:{marginLeft:4},children:"Premium"})]}),l("div",{style:{flexGrow:1}}),ne&&l(ln,{disabled:W,checked:A,colorScheme:m("grayBlue","02"),onChange:async j=>{b(j);try{L(!0),await Wo(j,p,s),x==null||x(j)}catch{T.error({content:E("user_management.modal.message.make_public_failed")}),b(!j)}finally{L(!1)}}})]}),A&&l(ae,{mt:"8px",colorScheme:"grayBlue",variant:"outline",loading:F,onClick:()=>{w==null||w(pn(h,s))},children:E("contribute.copy_link")})]}),Ae=C(Ve,{children:[l(Tn,{zIndex:1e3,children:C("div",{css:mn,children:[C("div",{css:yt,children:[l(Fe,{popupVisible:k,onVisibleChange:Y,triggerProps:{renderInBody:!0},dropList:C(Ue,{children:[l(de,{value:"onlyApp",onClick:()=>{se(!1)},children:C("div",{css:yt,children:[l("div",{css:Je,children:E("user_management.modal.contribute.contribute_only")}),l(rt,{trigger:"hover",position:"top",content:E("user_management.modal.contribute.contribute_only_tips"),children:l("div",{css:xt,children:l(ot,{})})})]})}),l(de,{value:"appAndAgent",onClick:()=>{se(!0)},children:C("div",{css:yt,children:[l("div",{css:Je,children:E("user_management.modal.contribute.contribute_together")}),l(rt,{trigger:"hover",position:"top",content:E("user_management.modal.contribute.contribute_together_tips"),children:l("div",{css:xt,children:l(ot,{})})})]})})]}),disabled:!ne||W,children:C("div",{css:Je,children:[E(ne&&J?"user_management.modal.contribute.contribute_together":"user_management.modal.contribute.contribute_only"),ne&&!W&&(k?l($n,{}):l(Dn,{}))]})}),l(rt,{trigger:"hover",position:"top",content:E(ne&&J?"user_management.modal.contribute.contribute_together_tips":"user_management.modal.contribute.contribute_only_tips"),children:l("div",{css:xt,children:l(ot,{})})})]}),ne&&l(ln,{checked:W,colorScheme:m("grayBlue","02"),onChange:ye})]})}),W&&C("div",{css:Go,children:[ne&&l(ae,{flex:"1",colorScheme:"grayBlue",variant:"outline",loading:R,onClick:()=>{G(!0)},children:E("contribute.update")}),l(ae,{flex:"1",colorScheme:"grayBlue",variant:"outline",loading:R,onClick:()=>{y==null||y(Rt(s))},children:E("contribute.copy_link")})]})]}),Xe=l(ei,{onShare:a,title:t,shareUrl:W?Rt(s):pn(h,s)});return C(Ve,{children:[C("div",{css:Ko,children:[!I&&(A||ne)&&we,(W||ne)&&Ae,(W||A)&&Xe]}),O&&l(ni,{onClose:()=>{G(!1)},teamID:p,onContributed:v,onAppInfoUpdate:r,onAppPublic:x,appName:o,appDesc:n,productID:s,productType:st.UNIT_TYPE_APP,productContributed:W})]})};ii.displayName="AppPublicPC";const Yo=i`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`,Zo=i`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`,Xo=i`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`,Xt=e=>{let t="public";e.canInvite&&te(U.VIEWER,e.currentUserRole,!1)?t="edit":e.canInvite&&U.VIEWER===e.currentUserRole&&e.isDeployed?t="use":e.canPublic&&(te(U.VIEWER,e.currentUserRole)||e.defaultAppContribute||e.defaultAppPublic)&&(t="public");const[n,o]=c.useState(e.defaultTab??t);c.useEffect(()=>{e.defaultTab!==void 0&&o(e.defaultTab)},[e.defaultTab]);const{t:r}=re();return C(Gt,{withoutLine:!1,enableOnFormTags:[],withoutPadding:!0,w:"498px",onCancel:()=>{var a;(a=e.onClose)==null||a.call(e)},footer:!1,maskClosable:!1,visible:!0,children:[C("div",{css:Yo,children:[C(Ni,{activeKey:n,variant:"text",colorScheme:"grayBlue",withoutBorderLine:!0,onChange:a=>{o(a)},children:[e.canInvite&&te(U.VIEWER,e.currentUserRole,!1)&&l(gt,{title:r("user_management.modal.title.invite_to_edit")},"edit"),e.canInvite&&e.isDeployed&&l(gt,{title:r("user_management.modal.title.invite_to_use")},"use"),e.canPublic&&(te(U.VIEWER,e.userRoleForThisApp,!1)||e.defaultAppContribute||e.defaultAppPublic)&&je&&l(gt,{title:r("user_management.modal.tab.public")},"public")]}),l("div",{css:Xo,onClick:()=>{var a;(a=e.onClose)==null||a.call(e)},children:l(On,{})})]}),C("div",{css:Zo,children:[n==="edit"&&e.canInvite&&C(Ve,{children:[l(Dt,{excludeUserRole:[U.VIEWER],redirectURL:e.editRedirectURL,defaultBalance:e.defaultBalance,defaultInviteUserRole:U.EDITOR,defaultAllowInviteLink:e.defaultAllowInviteLink,teamID:e.teamID,currentUserRole:e.currentUserRole,onInviteLinkStateChange:e.onInviteLinkStateChange,onCopyInviteLink:e.onCopyEditInviteLink}),l($t,{itemID:e.appID,excludeUserRole:[U.VIEWER],redirectURL:e.editRedirectURL,onBalanceChange:e.onBalanceChange,defaultInviteUserRole:U.EDITOR,teamID:e.teamID,currentUserRole:e.currentUserRole,defaultBalance:e.defaultBalance,onInvitedChange:e.onInvitedChange})]}),n==="use"&&e.canInvite&&C(Ve,{children:[l(Dt,{excludeUserRole:[],redirectURL:e.useRedirectURL,defaultBalance:e.defaultBalance,defaultInviteUserRole:U.VIEWER,defaultAllowInviteLink:e.defaultAllowInviteLink,teamID:e.teamID,currentUserRole:e.currentUserRole,onInviteLinkStateChange:e.onInviteLinkStateChange,onCopyInviteLink:e.onCopyUseInviteLink}),l($t,{itemID:e.appID,excludeUserRole:[],redirectURL:e.useRedirectURL,onBalanceChange:e.onBalanceChange,defaultInviteUserRole:U.VIEWER,teamID:e.teamID,currentUserRole:e.currentUserRole,defaultBalance:e.defaultBalance,onInvitedChange:e.onInvitedChange})]}),e.canPublic&&n==="public"&&je&&l(ii,{appDesc:e.appDesc,appName:e.appName,onAppInfoUpdate:e.onAppInfoUpdate,title:e.title,hidePublic:!1,canUseBillingFeature:e.canUseBillingFeature,defaultAppPublic:e.defaultAppPublic,defaultAppContribute:e.defaultAppContribute,defaultPublishWithAIAgent:e.defaultPublishWithAIAgent,appID:e.appID,userRoleForThisApp:e.userRoleForThisApp,ownerTeamIdentify:e.ownerTeamIdentify,onAppPublic:e.onAppPublic,onAppContribute:e.onAppContribute,onCopyPublicLink:e.onCopyPublicLink,onCopyContributeLink:e.onCopyContributeLink,ownerTeamID:e.ownerTeamID,onShare:e.onShare})]})]})};Xt.defaultProps={canPublic:!0};Xt.displayName="ShareAppPC";i`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
`;const Jo=i`
  width: 48px;
  height: 48px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;i`
  margin-top: 125px;
  margin-bottom: 71px;
  ${Jo};
`;i`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;i``;i`
  position: absolute;
  width: 100%;
  height: 78px;
  bottom: 48px;
`;i`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;i`
  position: sticky;
  top: 0;
  padding-top: 12px;
  background-color: ${m("white","01")};
`;i`
  width: 100%;
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;i`
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
`;i`
  padding-top: 60px;
`;i`
  overflow-y: auto;
`;i`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`;i`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;i`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;i`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${m("grayBlue","09")};
`;i`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;i`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${m("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;i`
  position: sticky;
  top: 0;
  padding-top: 12px;
  background-color: ${m("white","01")};
`;i`
  width: 100%;
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;i`
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
`;i`
  padding-top: 60px;
`;i`
  overflow-y: auto;
`;const Qo=c.createContext(null),ea=typeof document<"u",ri=ea?c.useLayoutEffect:c.useEffect,ta=c.createContext({});function na(e){const t=c.useRef(null);return t.current===null&&(t.current=e()),t.current}const ia=e=>e;class xn{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function ra(e){let t=new xn,n=new xn,o=0,r=!1,a=!1;const s=new WeakSet,p={schedule:(h,d=!1,f=!1)=>{const g=f&&r,u=g?t:n;return d&&s.add(h),u.add(h)&&g&&r&&(o=t.order.length),h},cancel:h=>{n.remove(h),s.delete(h)},process:h=>{if(r){a=!0;return}if(r=!0,[t,n]=[n,t],n.clear(),o=t.order.length,o)for(let d=0;d<o;d++){const f=t.order[d];f(h),s.has(f)&&(p.schedule(f),e())}r=!1,a&&(a=!1,p.process(h))}};return p}const Qe=["prepare","read","update","preRender","render","postRender"],oa=40;function aa(e,t){let n=!1,o=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=Qe.reduce((g,u)=>(g[u]=ra(()=>n=!0),g),{}),s=g=>a[g].process(r),p=()=>{const g=performance.now();n=!1,r.delta=o?1e3/60:Math.max(Math.min(g-r.timestamp,oa),1),r.timestamp=g,r.isProcessing=!0,Qe.forEach(s),r.isProcessing=!1,n&&t&&(o=!1,e(p))},h=()=>{n=!0,o=!0,r.isProcessing||e(p)};return{schedule:Qe.reduce((g,u)=>{const _=a[u];return g[u]=(x,v=!1,y=!1)=>(n||h(),_.schedule(x,v,y)),g},{}),cancel:g=>Qe.forEach(u=>a[u].cancel(g)),state:r,steps:a}}const{schedule:sa,cancel:Yl,state:Zl,steps:Xl}=aa(typeof requestAnimationFrame<"u"?requestAnimationFrame:ia,!0);function oi(){const e=c.useRef(!1);return ri(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function la(){const e=oi(),[t,n]=c.useState(0),o=c.useCallback(()=>{e.current&&n(t+1)},[t]);return[c.useCallback(()=>sa.postRender(o),[o]),t]}class ca extends c.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function da({children:e,isPresent:t}){const n=c.useId(),o=c.useRef(null),r=c.useRef({width:0,height:0,top:0,left:0});return c.useInsertionEffect(()=>{const{width:a,height:s,top:p,left:h}=r.current;if(t||!o.current||!a||!s)return;o.current.dataset.motionPopId=n;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${p}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),c.createElement(ca,{isPresent:t,childRef:o,sizeRef:r},c.cloneElement(e,{ref:o}))}const wt=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:r,presenceAffectsLayout:a,mode:s})=>{const p=na(pa),h=c.useId(),d=c.useMemo(()=>({id:h,initial:t,isPresent:n,custom:r,onExitComplete:f=>{p.set(f,!0);for(const g of p.values())if(!g)return;o&&o()},register:f=>(p.set(f,!1),()=>p.delete(f))}),a?void 0:[n]);return c.useMemo(()=>{p.forEach((f,g)=>p.set(g,!1))},[n]),c.useEffect(()=>{!n&&!p.size&&o&&o()},[n]),s==="popLayout"&&(e=c.createElement(da,{isPresent:n},e)),c.createElement(Qo.Provider,{value:d},e)};function pa(){return new Map}function ua(e){return c.useEffect(()=>()=>e(),[])}const Ee=e=>e.key||"";function ha(e,t){e.forEach(n=>{const o=Ee(n);t.set(o,n)})}function fa(e){const t=[];return c.Children.forEach(e,n=>{c.isValidElement(n)&&t.push(n)}),t}const ga=({children:e,custom:t,initial:n=!0,onExitComplete:o,exitBeforeEnter:r,presenceAffectsLayout:a=!0,mode:s="sync"})=>{const p=c.useContext(ta).forceRender||la()[0],h=oi(),d=fa(e);let f=d;const g=c.useRef(new Map).current,u=c.useRef(f),_=c.useRef(new Map).current,x=c.useRef(!0);if(ri(()=>{x.current=!1,ha(d,_),u.current=f}),ua(()=>{x.current=!0,_.clear(),g.clear()}),x.current)return c.createElement(c.Fragment,null,f.map(I=>c.createElement(wt,{key:Ee(I),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:s},I)));f=[...f];const v=u.current.map(Ee),y=d.map(Ee),w=v.length;for(let I=0;I<w;I++){const T=v[I];y.indexOf(T)===-1&&!g.has(T)&&g.set(T,void 0)}return s==="wait"&&g.size&&(f=[]),g.forEach((I,T)=>{if(y.indexOf(T)!==-1)return;const E=_.get(T);if(!E)return;const F=v.indexOf(T);let L=I;if(!L){const A=()=>{g.delete(T);const b=Array.from(_.keys()).filter(R=>!y.includes(R));if(b.forEach(R=>_.delete(R)),u.current=d.filter(R=>{const $=Ee(R);return $===T||b.includes($)}),!g.size){if(h.current===!1)return;p(),o&&o()}};L=c.createElement(wt,{key:Ee(E),isPresent:!1,onExitComplete:A,custom:t,presenceAffectsLayout:a,mode:s},E),g.set(T,L)}f.splice(F,0,L)}),f=f.map(I=>{const T=I.key;return g.has(T)?I:c.createElement(wt,{key:Ee(I),isPresent:!0,presenceAffectsLayout:a,mode:s},I)}),c.createElement(c.Fragment,null,g.size?f:f.map(I=>c.cloneElement(I)))},ma=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.$),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),xa=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.x),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),ya=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.u),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),wa=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.t),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),ba=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e._),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),_a=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.Z),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Ca=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.w),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),va=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.y),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Ea=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.z),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Ia=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.a0),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Sa=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.L),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Ra=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.Y),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),La=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.K),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Aa=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.B),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),ka=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.X),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Ta=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.J),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),$a=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.W),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Da=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.a1),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Ma=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.s),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Ba=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.V),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Pa=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.v),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Oa=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.q),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Na=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.r),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),za=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.Q),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Va=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.p),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),Ua=c.lazy(()=>N(()=>import("./upstash-e9b235a2.js").then(e=>e.o),["assets/upstash-e9b235a2.js","assets/@illa-design-764f0835.js","assets/react-bc846394.js","assets/@emotion-09d14760.js"])),yn=zi(),et=e=>{lr(e)===Zn.EMPTY?yn.info({content:un.t("empty_copied_tips")}):yn.success({content:un.t("copied")})};function Jl(e,t){switch(e){case"supabasedb":return l(ma,{size:t});case"graphql":return l(xa,{size:t});case"elasticsearch":return l(ya,{size:t});case"dynamodb":return l(wa,{size:t});case"snowflake":return l(ba,{size:t});case"smtp":return l(_a,{size:t});case"googlesheets":return l(Ca,{size:t});case"hfendpoint":case"huggingface":return l(va,{size:t});case"mariadb":return l(Ea,{size:t});case"tidb":return l(Ia,{size:t});case"neon":return l(Sa,{size:t});case"s3":return l(Ra,{size:t});case"mysql":return l(La,{size:t});case"mssql":return l(Aa,{size:t});case"restapi":return l(ka,{size:t});case"mongodb":return l(Ta,{size:t});case"redis":return l($a,{size:t});case"upstash":return l(Da,{size:t});case"hydra":return l(Ma,{size:t});case"postgresql":return l(Ba,{size:t});case"firebase":return l(Pa,{size:t});case"clickhouse":return l(Oa,{size:t});case"couchdb":return l(Na,{size:t});case"oracle":case"oracle9i":return l(za,{size:t});case"appwrite":return l(Va,{size:t});case"airtable":return l(Ua,{size:t})}return null}const Jt=c.createContext({}),Ql=e=>{const{children:t,updateAppConfig:n,copyApp:o,deleteApp:r}=e;return l(Jt.Provider,{value:{updateAppConfig:n,copyApp:o,deleteApp:r},children:t})},Fa=i`
  padding: 24px 24px 0;
  width: 100%;
`;i`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Vi.modal};
  display: flex;
  align-items: center;
  justify-content: center;
`;i`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${m("white","05")};
  backdrop-filter: blur(5px);
  z-index: -1;
`;const Wa=i`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 16px;
  width: 486px;
  position: relative;
`,ja=i`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${m("grayBlue","02")};
  margin: 0;
  text-align: center;
`,Ha=i`
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
`,Ka=i`
  display: grid;
  gap: 32px;
  padding-bottom: 24px;
`,Ga=i`
  display: grid;
  gap: 24px;
`,wn=i`
  display: grid;
  gap: 8px;
`,bn=i``;i`
  &:disabled {
    -webkit-text-fill-color: ${m("grayBlue","05")};
  }
`;const _n=i`
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: ${qt(`--${Yt}-grayBlue-02`)};
`;i`
  color: ${qt(`--${Yt}-grayBlue-04`)};
`;i`
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  line-height: 22px;
  color: ${qt(`--${Yt}-orange-03`)};
`;i`
  position: absolute;
  font-size: 16px;
  line-height: 0;
  top: 3px;
  left: 0;
`;function qa(e,t){let n=i``;return t&&(n=i`
      margin-left: 4px;
    `),i`
    font-size: 14px;
    color: ${e};
    font-weight: 500;
    ${n};
  `}const ai=e=>{const{appID:t,appDesc:n="",appName:o="",onVisibleChange:r,onSaveEvent:a,onCloseEvent:s}=e,{updateAppConfig:p}=c.useContext(Jt),{control:h,formState:d,handleSubmit:f,reset:g}=Gn({mode:"onSubmit",criteriaMode:"firstError",defaultValues:{appName:o,description:n}}),{isSubmitting:u,isDirty:_}=qn({control:h}),{t:x}=re(),v=Pe(),y=c.useCallback(async w=>{try{a(),p(t,{description:w.description,appName:w.appName}),g({appName:w.appName,description:w.description}),v.success({content:x("dashboard.app.rename_success")})}catch{v.error({content:x("dashboard.app.rename_fail")})}r(!1)},[r,a,p,t,g,v,x]);return l(Gt,{maskClosable:!0,withoutPadding:!0,w:"528px",visible:!0,footer:!1,onCancel:()=>{s(),r(!1)},children:C("div",{css:Fa,children:[C("header",{css:Wa,children:[l("h3",{css:ja,children:x("new_dashboard.app_setting.app_setting")}),l("span",{css:Ha,onClick:()=>{s(),r(!1)},children:l(On,{})})]}),C("form",{css:Ka,autoComplete:"off",onSubmit:f(y),children:[C("section",{css:Ga,children:[C("section",{css:wn,children:[C("label",{css:_n,children:[x("new_dashboard.app_setting.app_name"),l("span",{css:qa(m("red","02")),children:"*"})]}),l("div",{css:bn,children:l(De,{name:"appName",control:h,render:({field:w})=>l(Kt,{...w,colorScheme:"techPurple",error:!!(d!=null&&d.errors.appName),placeholder:x("new_dashboard.app_setting.placeholder.app_name")}),rules:{required:x("page.user.sign_up.error_message.username.require"),maxLength:{value:280,message:x("page.user.sign_up.error_message.username.length")}}})})]}),C("section",{css:wn,children:[l("label",{css:_n,children:x("new_dashboard.app_setting.description")}),l("div",{css:bn,children:l(De,{name:"description",control:h,render:({field:w})=>l(Pn,{...w,showWordLimit:!0,maxLength:180,autoSize:{minRows:6,maxRows:6},colorScheme:"techPurple",error:!!(d!=null&&d.errors.description),placeholder:x("new_dashboard.app_setting.placeholder.description")})})})]})]}),l(ae,{colorScheme:"techPurple",loading:u,disabled:!_,fullWidth:!0,children:x("new_dashboard.app_setting.save")})]})]})})};ai.displayName="AppSettingModal";const si=e=>{var J,se;const{appID:t,appName:n,appDeployed:o,appConfig:r}=e,{t:a}=re(),s=Pe(),p=Ui(),h=qi(),{deleteApp:d,copyApp:f,updateAppConfig:g}=c.useContext(Jt),{track:u,pageName:_}=c.useContext(Ge),x=Lt(Fn),v=Wn(x.myRole,Hn.APP,At(x),jn.EDIT_APP),y=Lt(Yi),w=Zt(),[I,T]=c.useState(!1),[E,F]=c.useState(!1),L=er(x.myRole,x.permission.allowEditorManageTeamMember,x.permission.allowViewerManageTeamMember),A=tr(x,x.myRole,r.public,r.publishedToMarketplace),b=nr(x.myRole,At(x),(J=x==null?void 0:x.totalTeamLicense)==null?void 0:J.teamLicensePurchased,(se=x==null?void 0:x.totalTeamLicense)==null?void 0:se.teamLicenseAllPaid),R=async()=>{u==null||u(P.CLICK,{element:"app_duplicate",parameter5:t},"both"),f(t).catch(()=>{s.error({content:a("dashboard.app.duplicate_fail")})})},$=()=>{F(!0),u==null||u(P.SHOW,{element:"app_setting_modal",parameter5:t},"both")},O=c.useCallback(()=>{if(u==null||u(P.CLICK,{element:"invite_entry",parameter5:t},"both"),!ir(x,x.myRole,r.public,r.publishedToMarketplace)){w({modalType:"upgrade",from:"app_card_more_share"});return}T(!0)},[r.public,r.publishedToMarketplace,t,x,u,w]),G=c.useCallback(()=>{u==null||u(P.CLICK,{element:"app_delete",parameter5:t},"both"),u==null||u(P.CLICK,{element:"app_delete_modal",parameter5:t},"both");const k=p.show({w:"496px",blockOkHide:!0,title:a("dashboard.common.delete_title"),children:a("dashboard.common.delete_content"),cancelText:a("dashboard.common.delete_cancel_text"),okText:a("dashboard.common.delete_ok_text"),okButtonProps:{colorScheme:"red"},maskClosable:!1,onOk:()=>{u==null||u(P.CLICK,{element:"app_delete_modal_delete",parameter5:t},"both"),p.close(k),d(t).then(()=>{s.success({content:a("dashboard.app.trash_success")})},()=>{s.error({content:a("dashboard.app.trash_failure")})})},onCancel:()=>{u==null||u(P.CLICK,{element:"app_delete_modal_close",parameter5:t},"both")}})},[u,t,p,a,s,d]),W=c.useCallback(k=>{k&&(u==null||u(P.CLICK,{element:"app_more",parameter5:t},"both"),u==null||u(P.SHOW,{element:"app_duplicate",parameter5:t},"both"),u==null||u(P.SHOW,{element:"app_delete",parameter5:t},"both"),A&&(u==null||u(P.SHOW,{element:"invite_entry",parameter5:t},"both")))},[t,u,A]),M=c.useCallback(k=>{k&&(u==null||u(P.CLICK,{element:"app_more",parameter5:t},"both"),u==null||u(P.SHOW,{element:"invite_entry",parameter5:t},"both"))},[t,u]);return c.useEffect(()=>{(v||o&&L)&&(u==null||u(P.SHOW,{element:"app_more",parameter5:t},"both"))},[v,o,L,t,u]),c.useEffect(()=>{u==null||u(P.SHOW,{element:"app"},"both")},[u]),c.useEffect(()=>{I&&(u==null||u(P.SHOW,{element:"invite_modal",parameter5:t},"both"))},[t,I,u]),c.useEffect(()=>{E&&(u==null||u(P.SHOW,{element:"app_setting_modal",parameter5:t},"both"))},[t,E,u]),C("div",{onClick:k=>{k.stopPropagation()},children:[v?l(Fe,{position:"bottom-end",trigger:"click",onVisibleChange:W,dropList:C(Ue,{w:"184px",children:[l(de,{value:"rename",title:C("div",{children:[l(Fi,{mr:"8px"}),l("span",{children:a("new_dashboard.app_setting.app_setting")})]}),onClick:$},"rename"),A&&l(de,{value:"share",title:C("div",{children:[l(cn,{mr:"8px"}),l("span",{children:a("dashboard.common.share")})]}),onClick:O},"share"),l(de,{value:"duplicate",title:C("div",{children:[l(Wi,{mr:"8px"}),l("span",{children:a("dashboard.common.duplicate")})]}),onClick:R},"duplicate"),l(de,{value:"delete",title:C("div",{children:[l(ji,{mr:"8px"}),l("span",{children:a("dashboard.common.delete")})]}),deleted:!0,onClick:G},"delete")]}),children:l(ae,{variant:"text",colorScheme:"grayBlue",leftIcon:l(dn,{size:"14px"})})}):A&&l(Fe,{position:"bottom-end",trigger:"click",triggerProps:{closeDelay:0,openDelay:0},onVisibleChange:M,dropList:l(Ue,{w:"184px",children:l(de,{value:"share",title:C("div",{children:[l(cn,{mr:"8px"}),l("span",{children:a("dashboard.common.share")})]}),onClick:O},"share")}),children:l(ae,{variant:"text",colorScheme:"grayBlue",leftIcon:l(dn,{size:"14px"})})}),l(Xi,{basicTrack:(k,Y,K,ne)=>{u==null||u(k,K,ne)},pageName:_,children:I&&je&&l(Xt,{itemID:t,onInvitedChange:k=>{const Y=k.map(K=>({...K,userID:"",nickname:"",avatar:"",userStatus:Zi.PENDING,permission:{},createdAt:"",updatedAt:""}));h(mt.updateInvitedUserReducer(Y))},appDesc:r.description,appName:n,onAppInfoUpdate:k=>{g(t,{...k,appName:k.appName,description:k.appDesc,publishWithAIAgent:k.publishWithAIAgent})},isDeployed:o,title:a("user_management.modal.social_media.default_text.app",{appName:n}),editRedirectURL:`${Me(window.customDomain)}/${x.identifier}/app/${t}`,useRedirectURL:`${Me(window.customDomain)}/${x.identifier}/deploy/app/${t}`,defaultAllowInviteLink:x.permission.inviteLinkEnabled,defaultPublishWithAIAgent:r.publishWithAIAgent,onInviteLinkStateChange:k=>{h(mt.updateTeamMemberPermissionReducer({teamID:x.id,newPermission:{...x.permission,inviteLinkEnabled:k}}))},onClose:()=>{T(!1)},canInvite:L,defaultBalance:1/0,teamID:x.id,currentUserRole:x.myRole,onBalanceChange:k=>{h(mt.updateTeamMemberSubscribeReducer({teamID:x.id,subscribeInfo:{...x.currentTeamLicense,balance:k}}))},defaultAppPublic:r.public,defaultAppContribute:r.publishedToMarketplace,appID:t,userRoleForThisApp:x.myRole,ownerTeamID:x.id,ownerTeamIdentify:x.identifier,onAppPublic:k=>{g(t,{public:k})},onAppContribute:k=>{if(g(t,{publishedToMarketplace:k}),k){const Y=new URL(Rt(t));Y.searchParams.set("token",We()),window.open(Y,"_blank")}},onCopyPublicLink:k=>{et(a("user_management.modal.custom_copy_text_app_invite",{userName:y.nickname,teamName:x.name,inviteLink:k}))},onCopyContributeLink:k=>{u==null||u(P.CLICK,{element:"invite_modal_public_copy",parameter5:t},"both"),et(a("user_management.modal.contribute.default_text.app",{appName:n,appLink:k}))},onCopyEditInviteLink:k=>{et(a("user_management.modal.custom_copy_text_app_invite",{userName:y.nickname,teamName:x.name,inviteLink:k}))},onCopyUseInviteLink:k=>{et(a("user_management.modal.custom_copy_text_app_invite",{userName:y.nickname,teamName:x.name,inviteLink:k}))},canUseBillingFeature:b,onShare:k=>{const{publishedToMarketplace:Y}=r;u==null||u(P.CLICK,{element:"share_modal_social_media",parameter1:Y,parameter4:k,parameter5:t},"both")}})}),l(ga,{children:E&&l(ai,{appID:t,appDesc:r.description,appName:n,onVisibleChange:k=>{F(k)},onSaveEvent:()=>{u==null||u(P.CLICK,{element:"app_setting_modal_save",parameter5:t},"both")},onCloseEvent:()=>{u==null||u(P.CLICK,{element:"app_setting_modal_close",parameter5:t},"both")}})})]})};si.displayName="AppCardActionItem";i`
  padding: 1px 8px;
  box-sizing: content-box;
`;i`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-transform: capitalize;
`;i`
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;i`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;i`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  width: 110px;
  color: ${m("grayBlue","02")};
`;i`
  cursor: pointer;
  min-width: 110px;
  padding: 8px 0;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: ${m("grayBlue","02")};
`;i`
  display: flex;
  align-items: center;
  gap: 8px;
`;i`
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
`;i`
  cursor: pointer;
`;const Ya=i`
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
`,Za=i`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;i`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;const Xa=i`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
  overflow: hidden;
`,li=i`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`,Ja=i`
  color: #1d2129;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  ${li};
`,Qa=i`
  color: #a9aeb8;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  ${li};
`,es=i`
  color: #787e85;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,ts=i`
  display: flex;
  align-items: flex-start;
  min-height: 24px;
`,ns=i`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${m("white","01")};
  margin-right: -6px;
`,is=i`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`,rs=e=>{const{t}=re(),{appInfo:n}=e,{teamIdentifier:o}=Kn(),{track:r}=c.useContext(Ge),a=Lt(Fn),s=Wn(a.myRole,Hn.APP,At(a),jn.EDIT_APP),p=c.useCallback(()=>{r==null||r(P.CLICK,{element:"card",parameter3:"team",parameter5:n.appId},"both"),s?window.open(`${Me(window.customDomain)}/${o}/app/${n.appId}?token=${We()}`,"_blank"):n.deployed&&window.open(`${Me(window.customDomain)}/${o}/deploy/app/${n.appId}?token=${We()}`,"_blank")},[n.appId,n.deployed,s,o,r]),h=c.useMemo(()=>{var d;return l("div",{css:ts,children:(d=n==null?void 0:n.editedBy)==null?void 0:d.map(f=>f?l(Nn,{css:ns,avatarUrl:f.avatar,name:f.nickname,id:f.userID},f.userID):null)})},[n==null?void 0:n.editedBy]);return C("div",{css:Ya,onClick:p,children:[C("div",{css:Za,children:[C("div",{css:Xa,children:[l("div",{css:Ja,children:n.appName}),l("div",{css:Qa,children:t("dashboard.app.edited_time",{time:Ji(n.updatedAt),user:n.appActivity.modifier})}),C(Ht,{children:[n.deployed?l($e,{colorScheme:"green",size:"small",children:t("new_dashboard.status.deployed")}):l($e,{colorScheme:"grayBlue",size:"small",children:t("new_dashboard.status.undeploy")}),n.config.appType===Xn.MOBILE?l($e,{colorScheme:"grayBlue",size:"small",icon:l(dr,{}),children:t("new_dashboard.type.mobile")}):l($e,{colorScheme:"grayBlue",size:"small",icon:l(cr,{}),children:t("new_dashboard.type.desktop")}),n.config.publishedToMarketplace&&l($e,{size:"small",colorScheme:"techPurple",children:t("dashboard.common.marketplace")})]})]}),l(si,{appID:n.appId,appDeployed:n.deployed,appName:n.appName,appConfig:n.config})]}),l("div",{children:l("div",{css:es,children:n.config.description||t("new_dashboard.desc.no_description")})}),C("div",{css:is,children:[h,l(pr,{appID:n.appId,appDeployed:n.deployed,canEditApp:s})]})]})};rs.displayName="AppCard";const ec=i`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${m("grayBlue","08")};
  border-radius: 8px;
  background-color: #fff;
`,tc=i`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`,nc=i`
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
`,ic=i`
  font-size: 12px;
  line-height: 20px;
  color: ${m("grayBlue","04")};
  margin: 0;
  padding: 0;
`,rc=i`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,oc=i`
  width: 100%;
  overflow: hidden;
  display: flex;
`,ac=i`
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
`,sc=i`
  margin-right: -6px;
`,lc=i`
  display: flex;
  align-items: center;
  gap: 8px;
`,cc=i`
  display: block;
  line-height: 1;
  font-size: 12px;
`,os=i`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,as=i`
  color: ${m("grayBlue","02")};
  font-weight: 600;
  line-height: 22px;
`,dc=e=>{const{onClickButton:t,loading:n,showCreate:o}=e,{t:r}=re(),a=()=>{t==null||t()};return l(Gi,{paddingVertical:"120px",icon:l(Hi,{size:"48px",color:m("grayBlue","02")}),description:C("div",{css:os,children:[l("div",{css:as,children:r("new_dashboard.desc.blank")}),o&&l(ae,{colorScheme:"grayBlue",loading:n,variant:"outline",leftIcon:l(Ki,{size:"10px"}),onClick:a,children:r("new_dashboard.button.blank")})]})})},pc=i`
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
`,uc=i`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
`,hc=i`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 304px;
`,fc=i`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  padding: 0;
`,gc=e=>i`
  font-size: 14px;
  line-height: 22px;
  color: ${e?m("grayBlue","02"):m("grayBlue","03")};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  padding: 0;
`,mc=i`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,xc=i`
  color: ${m("grayBlue","03")};
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  padding: 0;
`,ss=i`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4px 16px 20px 16px;
  align-items: center;
`,ls=i`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,cs=i`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 40px 32px;
  align-items: center;
`,ds=i`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`,ci=i`
  color: ${m("grayBlue","02")};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
  white-space: nowrap;
`,di=i`
  display: flex;
  align-items: center;
  gap: 8px;
`,yc=e=>{const{titleName:t,actionGroupComponent:n}=e;return l("header",{css:cs,children:C("div",{css:ds,children:[l("h1",{css:ci,children:t}),!!n&&l("div",{css:di,children:n})]})})},wc=e=>{const{titleName:t,actionGroupComponent:n}=e;return l("header",{css:ss,children:C("div",{css:ls,children:[l("h1",{css:ci,children:t}),!!n&&l("div",{css:di,children:n})]})})};function xe(e){return Array.isArray?Array.isArray(e):hi(e)==="[object Array]"}const ps=1/0;function us(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-ps?"-0":t}function hs(e){return e==null?"":us(e)}function pe(e){return typeof e=="string"}function pi(e){return typeof e=="number"}function fs(e){return e===!0||e===!1||gs(e)&&hi(e)=="[object Boolean]"}function ui(e){return typeof e=="object"}function gs(e){return ui(e)&&e!==null}function ie(e){return e!=null}function bt(e){return!e.trim().length}function hi(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const ms="Incorrect 'index' type",xs=e=>`Invalid value for key ${e}`,ys=e=>`Pattern length exceeds max of ${e}.`,ws=e=>`Missing ${e} property in key`,bs=e=>`Property 'weight' in key '${e}' must be a positive integer`,Cn=Object.prototype.hasOwnProperty;class _s{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(o=>{let r=fi(o);n+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(o=>{o.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function fi(e){let t=null,n=null,o=null,r=1,a=null;if(pe(e)||xe(e))o=e,t=vn(e),n=Mt(e);else{if(!Cn.call(e,"name"))throw new Error(ws("name"));const s=e.name;if(o=s,Cn.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(bs(s));t=vn(s),n=Mt(s),a=e.getFn}return{path:t,id:n,weight:r,src:o,getFn:a}}function vn(e){return xe(e)?e:e.split(".")}function Mt(e){return xe(e)?e.join("."):e}function Cs(e,t){let n=[],o=!1;const r=(a,s,p)=>{if(ie(a))if(!s[p])n.push(a);else{let h=s[p];const d=a[h];if(!ie(d))return;if(p===s.length-1&&(pe(d)||pi(d)||fs(d)))n.push(hs(d));else if(xe(d)){o=!0;for(let f=0,g=d.length;f<g;f+=1)r(d[f],s,p+1)}else s.length&&r(d,s,p+1)}};return r(e,pe(t)?t.split("."):t,0),o?n:n[0]}const vs={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Es={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Is={location:0,threshold:.6,distance:100},Ss={useExtendedSearch:!1,getFn:Cs,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var S={...Es,...vs,...Is,...Ss};const Rs=/[^ ]+/g;function Ls(e=1,t=3){const n=new Map,o=Math.pow(10,t);return{get(r){const a=r.match(Rs).length;if(n.has(a))return n.get(a);const s=1/Math.pow(a,.5*e),p=parseFloat(Math.round(s*o)/o);return n.set(a,p),p},clear(){n.clear()}}}class Qt{constructor({getFn:t=S.getFn,fieldNormWeight:n=S.fieldNormWeight}={}){this.norm=Ls(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,o)=>{this._keysMap[n.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,pe(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();pe(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,o=this.size();n<o;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!ie(t)||bt(t))return;let o={v:t,i:n,n:this.norm.get(t)};this.records.push(o)}_addObject(t,n){let o={i:n,$:{}};this.keys.forEach((r,a)=>{let s=r.getFn?r.getFn(t):this.getFn(t,r.path);if(ie(s)){if(xe(s)){let p=[];const h=[{nestedArrIndex:-1,value:s}];for(;h.length;){const{nestedArrIndex:d,value:f}=h.pop();if(ie(f))if(pe(f)&&!bt(f)){let g={v:f,i:d,n:this.norm.get(f)};p.push(g)}else xe(f)&&f.forEach((g,u)=>{h.push({nestedArrIndex:u,value:g})})}o.$[a]=p}else if(pe(s)&&!bt(s)){let p={v:s,n:this.norm.get(s)};o.$[a]=p}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function gi(e,t,{getFn:n=S.getFn,fieldNormWeight:o=S.fieldNormWeight}={}){const r=new Qt({getFn:n,fieldNormWeight:o});return r.setKeys(e.map(fi)),r.setSources(t),r.create(),r}function As(e,{getFn:t=S.getFn,fieldNormWeight:n=S.fieldNormWeight}={}){const{keys:o,records:r}=e,a=new Qt({getFn:t,fieldNormWeight:n});return a.setKeys(o),a.setIndexRecords(r),a}function tt(e,{errors:t=0,currentLocation:n=0,expectedLocation:o=0,distance:r=S.distance,ignoreLocation:a=S.ignoreLocation}={}){const s=t/e.length;if(a)return s;const p=Math.abs(o-n);return r?s+p/r:p?1:s}function ks(e=[],t=S.minMatchCharLength){let n=[],o=-1,r=-1,a=0;for(let s=e.length;a<s;a+=1){let p=e[a];p&&o===-1?o=a:!p&&o!==-1&&(r=a-1,r-o+1>=t&&n.push([o,r]),o=-1)}return e[a-1]&&a-o>=t&&n.push([o,a-1]),n}const Ie=32;function Ts(e,t,n,{location:o=S.location,distance:r=S.distance,threshold:a=S.threshold,findAllMatches:s=S.findAllMatches,minMatchCharLength:p=S.minMatchCharLength,includeMatches:h=S.includeMatches,ignoreLocation:d=S.ignoreLocation}={}){if(t.length>Ie)throw new Error(ys(Ie));const f=t.length,g=e.length,u=Math.max(0,Math.min(o,g));let _=a,x=u;const v=p>1||h,y=v?Array(g):[];let w;for(;(w=e.indexOf(t,x))>-1;){let A=tt(t,{currentLocation:w,expectedLocation:u,distance:r,ignoreLocation:d});if(_=Math.min(A,_),x=w+f,v){let b=0;for(;b<f;)y[w+b]=1,b+=1}}x=-1;let I=[],T=1,E=f+g;const F=1<<f-1;for(let A=0;A<f;A+=1){let b=0,R=E;for(;b<R;)tt(t,{errors:A,currentLocation:u+R,expectedLocation:u,distance:r,ignoreLocation:d})<=_?b=R:E=R,R=Math.floor((E-b)/2+b);E=R;let $=Math.max(1,u-R+1),O=s?g:Math.min(u+R,g)+f,G=Array(O+2);G[O+1]=(1<<A)-1;for(let M=O;M>=$;M-=1){let J=M-1,se=n[e.charAt(J)];if(v&&(y[J]=+!!se),G[M]=(G[M+1]<<1|1)&se,A&&(G[M]|=(I[M+1]|I[M])<<1|1|I[M+1]),G[M]&F&&(T=tt(t,{errors:A,currentLocation:J,expectedLocation:u,distance:r,ignoreLocation:d}),T<=_)){if(_=T,x=J,x<=u)break;$=Math.max(1,2*u-x)}}if(tt(t,{errors:A+1,currentLocation:u,expectedLocation:u,distance:r,ignoreLocation:d})>_)break;I=G}const L={isMatch:x>=0,score:Math.max(.001,T)};if(v){const A=ks(y,p);A.length?h&&(L.indices=A):L.isMatch=!1}return L}function $s(e){let t={};for(let n=0,o=e.length;n<o;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<o-n-1}return t}class mi{constructor(t,{location:n=S.location,threshold:o=S.threshold,distance:r=S.distance,includeMatches:a=S.includeMatches,findAllMatches:s=S.findAllMatches,minMatchCharLength:p=S.minMatchCharLength,isCaseSensitive:h=S.isCaseSensitive,ignoreLocation:d=S.ignoreLocation}={}){if(this.options={location:n,threshold:o,distance:r,includeMatches:a,findAllMatches:s,minMatchCharLength:p,isCaseSensitive:h,ignoreLocation:d},this.pattern=h?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const f=(u,_)=>{this.chunks.push({pattern:u,alphabet:$s(u),startIndex:_})},g=this.pattern.length;if(g>Ie){let u=0;const _=g%Ie,x=g-_;for(;u<x;)f(this.pattern.substr(u,Ie),u),u+=Ie;if(_){const v=g-Ie;f(this.pattern.substr(v),v)}}else f(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:o}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let x={isMatch:!0,score:0};return o&&(x.indices=[[0,t.length-1]]),x}const{location:r,distance:a,threshold:s,findAllMatches:p,minMatchCharLength:h,ignoreLocation:d}=this.options;let f=[],g=0,u=!1;this.chunks.forEach(({pattern:x,alphabet:v,startIndex:y})=>{const{isMatch:w,score:I,indices:T}=Ts(t,x,v,{location:r+y,distance:a,threshold:s,findAllMatches:p,minMatchCharLength:h,includeMatches:o,ignoreLocation:d});w&&(u=!0),g+=I,w&&T&&(f=[...f,...T])});let _={isMatch:u,score:u?g/this.chunks.length:1};return u&&o&&(_.indices=f),_}}class Ce{constructor(t){this.pattern=t}static isMultiMatch(t){return En(t,this.multiRegex)}static isSingleMatch(t){return En(t,this.singleRegex)}search(){}}function En(e,t){const n=e.match(t);return n?n[1]:null}class Ds extends Ce{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ms extends Ce{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class Bs extends Ce{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ps extends Ce{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Os extends Ce{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Ns extends Ce{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class xi extends Ce{constructor(t,{location:n=S.location,threshold:o=S.threshold,distance:r=S.distance,includeMatches:a=S.includeMatches,findAllMatches:s=S.findAllMatches,minMatchCharLength:p=S.minMatchCharLength,isCaseSensitive:h=S.isCaseSensitive,ignoreLocation:d=S.ignoreLocation}={}){super(t),this._bitapSearch=new mi(t,{location:n,threshold:o,distance:r,includeMatches:a,findAllMatches:s,minMatchCharLength:p,isCaseSensitive:h,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class yi extends Ce{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,o;const r=[],a=this.pattern.length;for(;(o=t.indexOf(this.pattern,n))>-1;)n=o+a,r.push([o,n-1]);const s=!!r.length;return{isMatch:s,score:s?0:1,indices:r}}}const Bt=[Ds,yi,Bs,Ps,Ns,Os,Ms,xi],In=Bt.length,zs=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Vs="|";function Us(e,t={}){return e.split(Vs).map(n=>{let o=n.trim().split(zs).filter(a=>a&&!!a.trim()),r=[];for(let a=0,s=o.length;a<s;a+=1){const p=o[a];let h=!1,d=-1;for(;!h&&++d<In;){const f=Bt[d];let g=f.isMultiMatch(p);g&&(r.push(new f(g,t)),h=!0)}if(!h)for(d=-1;++d<In;){const f=Bt[d];let g=f.isSingleMatch(p);if(g){r.push(new f(g,t));break}}}return r})}const Fs=new Set([xi.type,yi.type]);class Ws{constructor(t,{isCaseSensitive:n=S.isCaseSensitive,includeMatches:o=S.includeMatches,minMatchCharLength:r=S.minMatchCharLength,ignoreLocation:a=S.ignoreLocation,findAllMatches:s=S.findAllMatches,location:p=S.location,threshold:h=S.threshold,distance:d=S.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:o,minMatchCharLength:r,findAllMatches:s,ignoreLocation:a,location:p,threshold:h,distance:d},this.pattern=n?t:t.toLowerCase(),this.query=Us(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let a=0,s=[],p=0;for(let h=0,d=n.length;h<d;h+=1){const f=n[h];s.length=0,a=0;for(let g=0,u=f.length;g<u;g+=1){const _=f[g],{isMatch:x,indices:v,score:y}=_.search(t);if(x){if(a+=1,p+=y,o){const w=_.constructor.type;Fs.has(w)?s=[...s,...v]:s.push(v)}}else{p=0,a=0,s.length=0;break}}if(a){let g={isMatch:!0,score:p/a};return o&&(g.indices=s),g}}return{isMatch:!1,score:1}}}const Pt=[];function js(...e){Pt.push(...e)}function Ot(e,t){for(let n=0,o=Pt.length;n<o;n+=1){let r=Pt[n];if(r.condition(e,t))return new r(e,t)}return new mi(e,t)}const ct={AND:"$and",OR:"$or"},Nt={PATH:"$path",PATTERN:"$val"},zt=e=>!!(e[ct.AND]||e[ct.OR]),Hs=e=>!!e[Nt.PATH],Ks=e=>!xe(e)&&ui(e)&&!zt(e),Sn=e=>({[ct.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function wi(e,t,{auto:n=!0}={}){const o=r=>{let a=Object.keys(r);const s=Hs(r);if(!s&&a.length>1&&!zt(r))return o(Sn(r));if(Ks(r)){const h=s?r[Nt.PATH]:a[0],d=s?r[Nt.PATTERN]:r[h];if(!pe(d))throw new Error(xs(h));const f={keyId:Mt(h),pattern:d};return n&&(f.searcher=Ot(d,t)),f}let p={children:[],operator:a[0]};return a.forEach(h=>{const d=r[h];xe(d)&&d.forEach(f=>{p.children.push(o(f))})}),p};return zt(e)||(e=Sn(e)),o(e)}function Gs(e,{ignoreFieldNorm:t=S.ignoreFieldNorm}){e.forEach(n=>{let o=1;n.matches.forEach(({key:r,norm:a,score:s})=>{const p=r?r.weight:null;o*=Math.pow(s===0&&p?Number.EPSILON:s,(p||1)*(t?1:a))}),n.score=o})}function qs(e,t){const n=e.matches;t.matches=[],ie(n)&&n.forEach(o=>{if(!ie(o.indices)||!o.indices.length)return;const{indices:r,value:a}=o;let s={indices:r,value:a};o.key&&(s.key=o.key.src),o.idx>-1&&(s.refIndex=o.idx),t.matches.push(s)})}function Ys(e,t){t.score=e.score}function Zs(e,t,{includeMatches:n=S.includeMatches,includeScore:o=S.includeScore}={}){const r=[];return n&&r.push(qs),o&&r.push(Ys),e.map(a=>{const{idx:s}=a,p={item:t[s],refIndex:s};return r.length&&r.forEach(h=>{h(a,p)}),p})}class Le{constructor(t,n={},o){this.options={...S,...n},this.options.useExtendedSearch,this._keyStore=new _s(this.options.keys),this.setCollection(t,o)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Qt))throw new Error(ms);this._myIndex=n||gi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){ie(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let o=0,r=this._docs.length;o<r;o+=1){const a=this._docs[o];t(a,o)&&(this.removeAt(o),o-=1,r-=1,n.push(a))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:o,includeScore:r,shouldSort:a,sortFn:s,ignoreFieldNorm:p}=this.options;let h=pe(t)?pe(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Gs(h,{ignoreFieldNorm:p}),a&&h.sort(s),pi(n)&&n>-1&&(h=h.slice(0,n)),Zs(h,this._docs,{includeMatches:o,includeScore:r})}_searchStringList(t){const n=Ot(t,this.options),{records:o}=this._myIndex,r=[];return o.forEach(({v:a,i:s,n:p})=>{if(!ie(a))return;const{isMatch:h,score:d,indices:f}=n.searchIn(a);h&&r.push({item:a,idx:s,matches:[{score:d,value:a,norm:p,indices:f}]})}),r}_searchLogical(t){const n=wi(t,this.options),o=(p,h,d)=>{if(!p.children){const{keyId:g,searcher:u}=p,_=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(h,g),searcher:u});return _&&_.length?[{idx:d,item:h,matches:_}]:[]}const f=[];for(let g=0,u=p.children.length;g<u;g+=1){const _=p.children[g],x=o(_,h,d);if(x.length)f.push(...x);else if(p.operator===ct.AND)return[]}return f},r=this._myIndex.records,a={},s=[];return r.forEach(({$:p,i:h})=>{if(ie(p)){let d=o(n,p,h);d.length&&(a[h]||(a[h]={idx:h,item:p,matches:[]},s.push(a[h])),d.forEach(({matches:f})=>{a[h].matches.push(...f)}))}}),s}_searchObjectList(t){const n=Ot(t,this.options),{keys:o,records:r}=this._myIndex,a=[];return r.forEach(({$:s,i:p})=>{if(!ie(s))return;let h=[];o.forEach((d,f)=>{h.push(...this._findMatches({key:d,value:s[f],searcher:n}))}),h.length&&a.push({idx:p,item:s,matches:h})}),a}_findMatches({key:t,value:n,searcher:o}){if(!ie(n))return[];let r=[];if(xe(n))n.forEach(({v:a,i:s,n:p})=>{if(!ie(a))return;const{isMatch:h,score:d,indices:f}=o.searchIn(a);h&&r.push({score:d,key:t,value:a,idx:s,norm:p,indices:f})});else{const{v:a,n:s}=n,{isMatch:p,score:h,indices:d}=o.searchIn(a);p&&r.push({score:h,key:t,value:a,norm:s,indices:d})}return r}}Le.version="6.6.2";Le.createIndex=gi;Le.parseIndex=As;Le.config=S;Le.parseQuery=wi;js(Ws);function bc(e,t){const[n,o]=c.useState(""),r=c.useRef(()=>Yn(d=>{o(d)},160)),a=Le.createIndex(t,e),s=new Le(e,{keys:t},a),p=n?s.search(n).map(d=>d.item):e,h=r.current();return[p,h]}var bi={exports:{}},_i={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=c;function Xs(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Js=typeof Object.is=="function"?Object.is:Xs,Qs=Be.useState,el=Be.useEffect,tl=Be.useLayoutEffect,nl=Be.useDebugValue;function il(e,t){var n=t(),o=Qs({inst:{value:n,getSnapshot:t}}),r=o[0].inst,a=o[1];return tl(function(){r.value=n,r.getSnapshot=t,_t(r)&&a({inst:r})},[e,n,t]),el(function(){return _t(r)&&a({inst:r}),e(function(){_t(r)&&a({inst:r})})},[e]),nl(n),n}function _t(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Js(e,n)}catch{return!0}}function rl(e,t){return t()}var ol=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?rl:il;_i.useSyncExternalStore=Be.useSyncExternalStore!==void 0?Be.useSyncExternalStore:ol;bi.exports=_i;var al=bi.exports;const be=()=>{},ee=be(),Ct=Object,B=e=>e===ee,me=e=>typeof e=="function",_e=(e,t)=>({...e,...t}),sl=e=>me(e.then),nt=new WeakMap;let ll=0;const He=e=>{const t=typeof e,n=e&&e.constructor,o=n==Date;let r,a;if(Ct(e)===e&&!o&&n!=RegExp){if(r=nt.get(e),r)return r;if(r=++ll+"~",nt.set(e,r),n==Array){for(r="@",a=0;a<e.length;a++)r+=He(e[a])+",";nt.set(e,r)}if(n==Ct){r="#";const s=Ct.keys(e).sort();for(;!B(a=s.pop());)B(e[a])||(r+=a+":"+He(e[a])+",");nt.set(e,r)}}else r=o?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return r},ge=new WeakMap,vt={},it={},en="undefined",pt=typeof window!=en,Vt=typeof document!=en,cl=()=>pt&&typeof window.requestAnimationFrame!=en,Ci=(e,t)=>{const n=ge.get(e);return[()=>!B(t)&&e.get(t)||vt,o=>{if(!B(t)){const r=e.get(t);t in it||(it[t]=r),n[5](t,_e(r,o),r||vt)}},n[6],()=>!B(t)&&t in it?it[t]:!B(t)&&e.get(t)||vt]};let Ut=!0;const dl=()=>Ut,[Ft,Wt]=pt&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[be,be],pl=()=>{const e=Vt&&document.visibilityState;return B(e)||e!=="hidden"},ul=e=>(Vt&&document.addEventListener("visibilitychange",e),Ft("focus",e),()=>{Vt&&document.removeEventListener("visibilitychange",e),Wt("focus",e)}),hl=e=>{const t=()=>{Ut=!0,e()},n=()=>{Ut=!1};return Ft("online",t),Ft("offline",n),()=>{Wt("online",t),Wt("offline",n)}},fl={isOnline:dl,isVisible:pl},gl={initFocus:ul,initReconnect:hl},Rn=!qe.useId,Ke=!pt||"Deno"in window,ml=e=>cl()?window.requestAnimationFrame(e):setTimeout(e,1),Et=Ke?c.useEffect:c.useLayoutEffect,It=typeof navigator<"u"&&navigator.connection,Ln=!Ke&&It&&(["slow-2g","2g"].includes(It.effectiveType)||It.saveData),tn=e=>{if(me(e))try{e=e()}catch{e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?He(e):"",[e,t]};let xl=0;const jt=()=>++xl,vi=0,Ei=1,Ii=2,yl=3;var ze={__proto__:null,ERROR_REVALIDATE_EVENT:yl,FOCUS_EVENT:vi,MUTATE_EVENT:Ii,RECONNECT_EVENT:Ei};async function Si(...e){const[t,n,o,r]=e,a=_e({populateCache:!0,throwOnError:!0},typeof r=="boolean"?{revalidate:r}:r||{});let s=a.populateCache;const p=a.rollbackOnError;let h=a.optimisticData;const d=a.revalidate!==!1,f=_=>typeof p=="function"?p(_):p!==!1,g=a.throwOnError;if(me(n)){const _=n,x=[],v=t.keys();for(const y of v)!/^\$(inf|sub)\$/.test(y)&&_(t.get(y)._k)&&x.push(y);return Promise.all(x.map(u))}return u(n);async function u(_){const[x]=tn(_);if(!x)return;const[v,y]=Ci(t,x),[w,I,T,E]=ge.get(t),F=()=>{const M=w[x];return d&&(delete T[x],delete E[x],M&&M[0])?M[0](Ii).then(()=>v().data):v().data};if(e.length<3)return F();let L=o,A;const b=jt();I[x]=[b,0];const R=!B(h),$=v(),O=$.data,G=$._c,W=B(G)?O:G;if(R&&(h=me(h)?h(W,O):h,y({data:h,_c:W})),me(L))try{L=L(W)}catch(M){A=M}if(L&&sl(L))if(L=await L.catch(M=>{A=M}),b!==I[x][0]){if(A)throw A;return L}else A&&R&&f(A)&&(s=!0,y({data:W,_c:ee}));if(s&&!A)if(me(s)){const M=s(L,W);y({data:M,error:ee,_c:ee})}else y({data:L,error:ee,_c:ee});if(I[x][1]=jt(),Promise.resolve(F()).then(()=>{y({_c:ee})}),A){if(g)throw A;return}return L}}const An=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},wl=(e,t)=>{if(!ge.has(e)){const n=_e(gl,t),o={},r=Si.bind(ee,e);let a=be;const s={},p=(f,g)=>{const u=s[f]||[];return s[f]=u,u.push(g),()=>u.splice(u.indexOf(g),1)},h=(f,g,u)=>{e.set(f,g);const _=s[f];if(_)for(const x of _)x(g,u)},d=()=>{if(!ge.has(e)&&(ge.set(e,[o,{},{},{},r,h,p]),!Ke)){const f=n.initFocus(setTimeout.bind(ee,An.bind(ee,o,vi))),g=n.initReconnect(setTimeout.bind(ee,An.bind(ee,o,Ei)));a=()=>{f&&f(),g&&g(),ge.delete(e)}}};return d(),[e,r,d,a]}return[e,ge.get(e)[4]]},bl=(e,t,n,o,r)=>{const a=n.errorRetryCount,s=r.retryCount,p=~~((Math.random()+.5)*(1<<(s<8?s:8)))*n.errorRetryInterval;!B(a)&&s>a||setTimeout(o,p,r)},_l=(e,t)=>He(e)==He(t),[Ri,Cl]=wl(new Map),vl=_e({onLoadingSlow:be,onSuccess:be,onError:be,onErrorRetry:bl,onDiscarded:be,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Ln?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Ln?5e3:3e3,compare:_l,isPaused:()=>!1,cache:Ri,mutate:Cl,fallback:{}},fl),El=(e,t)=>{const n=_e(e,t);if(t){const{use:o,fallback:r}=e,{use:a,fallback:s}=t;o&&a&&(n.use=o.concat(a)),r&&s&&(n.fallback=_e(r,s))}return n},Il=c.createContext({}),Sl="$inf$",Li=pt&&window.__SWR_DEVTOOLS_USE__,Rl=Li?window.__SWR_DEVTOOLS_USE__:[],Ll=()=>{Li&&(window.__SWR_DEVTOOLS_REACT__=qe)},Al=e=>me(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],kl=()=>_e(vl,c.useContext(Il)),Tl=e=>(t,n,o)=>e(t,n&&((...a)=>{const[s]=tn(t),[,,,p]=ge.get(Ri);if(s.startsWith(Sl))return n(...a);const h=p[s];return B(h)?n(...a):(delete p[s],h)}),o),$l=Rl.concat(Tl),Dl=e=>function(...n){const o=kl(),[r,a,s]=Al(n),p=El(o,s);let h=e;const{use:d}=p,f=(d||[]).concat($l);for(let g=f.length;g--;)h=f[g](h);return h(r,a||p.fetcher||null,p)},Ml=(e,t,n)=>{const o=t[e]||(t[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r>=0&&(o[r]=o[o.length-1],o.pop())}};Ll();const kn=qe.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)}),St={dedupe:!0},Bl=(e,t,n)=>{const{cache:o,compare:r,suspense:a,fallbackData:s,revalidateOnMount:p,revalidateIfStale:h,refreshInterval:d,refreshWhenHidden:f,refreshWhenOffline:g,keepPreviousData:u}=n,[_,x,v,y]=ge.get(o),[w,I]=tn(e),T=c.useRef(!1),E=c.useRef(!1),F=c.useRef(w),L=c.useRef(t),A=c.useRef(n),b=()=>A.current,R=()=>b().isVisible()&&b().isOnline(),[$,O,G,W]=Ci(o,w),M=c.useRef({}).current,J=B(s)?n.fallback[w]:s,se=(z,V)=>{for(const Z in M){const H=Z;if(H==="data"){if(!r(z[H],V[H])&&(!B(z[H])||!r(j,V[H])))return!1}else if(V[H]!==z[H])return!1}return!0},k=c.useMemo(()=>{const z=(()=>!w||!t?!1:B(p)?b().isPaused()||a?!1:B(h)?!0:h:p)(),V=Q=>{const ue=_e(Q);return delete ue._k,z?{isValidating:!0,isLoading:!0,...ue}:ue},Z=$(),H=W(),le=V(Z),Te=Z===H?le:V(H);let q=le;return[()=>{const Q=V($());return se(Q,q)?(q.data=Q.data,q.isLoading=Q.isLoading,q.isValidating=Q.isValidating,q.error=Q.error,q):(q=Q,Q)},()=>Te]},[o,w]),Y=al.useSyncExternalStore(c.useCallback(z=>G(w,(V,Z)=>{se(Z,V)||z()}),[o,w]),k[0],k[1]),K=!T.current,ne=_[w]&&_[w].length>0,ye=Y.data,we=B(ye)?J:ye,Ae=Y.error,Xe=c.useRef(we),j=u?B(ye)?Xe.current:ye:we,ke=(()=>ne&&!B(Ae)?!1:K&&!B(p)?p:b().isPaused()?!1:a?B(we)?!1:h:B(we)||h)(),ut=!!(w&&t&&K&&ke),Ai=B(Y.isValidating)?ut:Y.isValidating,ki=B(Y.isLoading)?ut:Y.isLoading,Ne=c.useCallback(async z=>{const V=L.current;if(!w||!V||E.current||b().isPaused())return!1;let Z,H,le=!0;const Te=z||{},q=!v[w]||!Te.dedupe,Q=()=>Rn?!E.current&&w===F.current&&T.current:w===F.current,ue={isValidating:!1,isLoading:!1},rn=()=>{O(ue)},on=()=>{const oe=v[w];oe&&oe[1]===H&&delete v[w]},an={isValidating:!0};B($().data)&&(an.isLoading=!0);try{if(q&&(O(an),n.loadingTimeout&&B($().data)&&setTimeout(()=>{le&&Q()&&b().onLoadingSlow(w,n)},n.loadingTimeout),v[w]=[V(I),jt()]),[Z,H]=v[w],Z=await Z,q&&setTimeout(on,n.dedupingInterval),!v[w]||v[w][1]!==H)return q&&Q()&&b().onDiscarded(w),!1;ue.error=ee;const oe=x[w];if(!B(oe)&&(H<=oe[0]||H<=oe[1]||oe[1]===0))return rn(),q&&Q()&&b().onDiscarded(w),!1;const he=$().data;ue.data=r(he,Z)?he:Z,q&&Q()&&b().onSuccess(Z,w,n)}catch(oe){on();const he=b(),{shouldRetryOnError:ht}=he;he.isPaused()||(ue.error=oe,q&&Q()&&(he.onError(oe,w,he),(ht===!0||me(ht)&&ht(oe))&&R()&&he.onErrorRetry(oe,w,he,Ti=>{const ft=_[w];ft&&ft[0]&&ft[0](ze.ERROR_REVALIDATE_EVENT,Ti)},{retryCount:(Te.retryCount||0)+1,dedupe:!0})))}return le=!1,rn(),!0},[w,o]),nn=c.useCallback((...z)=>Si(o,F.current,...z),[]);if(Et(()=>{L.current=t,A.current=n,B(ye)||(Xe.current=ye)}),Et(()=>{if(!w)return;const z=Ne.bind(ee,St);let V=0;const H=Ml(w,_,(le,Te={})=>{if(le==ze.FOCUS_EVENT){const q=Date.now();b().revalidateOnFocus&&q>V&&R()&&(V=q+b().focusThrottleInterval,z())}else if(le==ze.RECONNECT_EVENT)b().revalidateOnReconnect&&R()&&z();else{if(le==ze.MUTATE_EVENT)return Ne();if(le==ze.ERROR_REVALIDATE_EVENT)return Ne(Te)}});return E.current=!1,F.current=w,T.current=!0,O({_k:I}),ke&&(B(we)||Ke?z():ml(z)),()=>{E.current=!0,H()}},[w]),Et(()=>{let z;function V(){const H=me(d)?d($().data):d;H&&z!==-1&&(z=setTimeout(Z,H))}function Z(){!$().error&&(f||b().isVisible())&&(g||b().isOnline())?Ne(St).then(V):V()}return V(),()=>{z&&(clearTimeout(z),z=-1)}},[d,f,g,w]),c.useDebugValue(j),a&&B(we)&&w){if(!Rn&&Ke)throw new Error("Fallback data is required when using suspense in SSR.");L.current=t,A.current=n,E.current=!1;const z=y[w];if(!B(z)){const V=nn(z);kn(V)}if(B(Ae)){const V=Ne(St);B(j)||(V.status="fulfilled",V.value=!0),kn(V)}else throw Ae}return{mutate:nn,get data(){return M.data=!0,j},get error(){return M.error=!0,Ae},get isValidating(){return M.isValidating=!0,Ai},get isLoading(){return M.isLoading=!0,ki}}},_c=Dl(Bl),Cc=()=>{const[e,t]=c.useState(!1);return[e,o=>{o.target.scrollTop>=24?t(!0):t(!1)}]};export{Xn as A,yc as D,wc as M,rs as P,dr as S,dc as T,lc as a,cr as b,ec as c,ac as d,ic as e,rc as f,oc as g,tc as h,sc as i,bc as j,Cc as k,cc as l,Ql as m,Cl as n,uc as o,hc as p,Jl as q,pc as r,fc as s,nc as t,_c as u,gc as v,mc as w,xc as x};
//# sourceMappingURL=hook-daa5f446.js.map

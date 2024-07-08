import{n as y,o as d,k as t,B as _,aP as F,A as M,q as $,F as G,D as K,aQ as B}from"./@illa-design-1f43bb6c.js";import{u as I,b as A,g as q,c as Q,S as X,d as N,e as V,f as Y,h as T,i as g,j as H,r as Z,k as J,l as tt,m as et,A as rt,n as st,o as ot,p as nt,q as it,s as at,v as ct,w as lt,D as pt,x as w}from"./index-4dce6ee8.js";import{u as D,L as k,r as l}from"./react-9b7e00e3.js";import{n as dt,r as ht,l as ut,i as gt,a as yt,s as mt,b as ft,u as St,e as Ct,c as xt,m as At,d as vt,f as wt,g as It}from"./style-51b259bb.js";import{s as Dt,a as Lt,b as Et,C as Tt}from"./layoutInfoListener-bd63c738.js";import{a as o}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./renderComponentCanvasContainer-2e4cd54a.js";import"./style-49f23046.js";import"./index-d48f7e94.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";import"./drive-584d85d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-a04e2b11.js";import"./objectWithoutPropertiesLoose-e3246981.js";import"./clsx-06f54762.js";const Pt=o`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin-right: 19px;
  color: ${y("grayBlue","02")};
`,bt=()=>{const{teamIdentifier:e,appId:p}=D(),{t:n}=I(),s=A(q);return d("div",{css:dt,children:[d("div",{css:ht,children:[t(k,{to:Q(window.customDomain),children:t(X,{width:"34px",css:ut})}),t("div",{css:gt,children:t("div",{css:yt,children:s.appName})})]}),t("span",{css:Pt,children:n("editor.history.history_list.label")}),t(k,{to:`${N(window.customDomain)}/${e}/app/${p}`,children:t(_,{minW:"200px",colorScheme:"techPurple",leftIcon:t(F,{}),children:n("exit_preview")})})]})},Bt=o`
  padding: 8px 0;
  min-height: 38px;
`,Ht=o`
  min-height: 38px;
  padding: 8px;
  color: ${y("techPurple","03")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;
`,kt=e=>e.currentAppHistory.snapshotList,Rt=e=>e.currentAppHistory.currentPage,_t=e=>e.currentAppHistory.hasMore,U=e=>e.currentAppHistory.currentSnapshotID,j=()=>{const{appId:e}=D(),{t:p}=I(),n=V(),s=A(Rt),[r,i]=l.useState(!1),m=l.useCallback(async()=>{if(!e)return;i(!0);const h=s+1;try{const{data:c}=await Y({page:h,appID:e});n(T.updateCurrentAppHistoryReducer({...c,currentPage:h,hasMore:c.totalPages!==h}))}catch(c){console.error(c)}finally{i(!1)}},[e,s,n]);return t("div",{children:r?t("div",{css:Bt,children:t(M,{colorScheme:"techPurple"})}):t("div",{css:Ht,onClick:m,children:p("editor.history.more")})})};j.displayName="ActionArea";const Mt=e=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("g",{id:"Save"},l.createElement("path",{id:"Vector",d:"M3.5 2.75C3.30109 2.75 3.11032 2.82902 2.96967 2.96967C2.82902 3.11032 2.75 3.30109 2.75 3.5V12.5C2.75 12.6989 2.82902 12.8897 2.96967 13.0303C3.11032 13.171 3.30109 13.25 3.5 13.25H12.5C12.6989 13.25 12.8897 13.171 13.0303 13.0303C13.171 12.8897 13.25 12.6989 13.25 12.5V3.5C13.25 3.30109 13.171 3.11032 13.0303 2.96967C12.8897 2.82902 12.6989 2.75 12.5 2.75H9.125C8.92609 2.75 8.73532 2.82902 8.59467 2.96967C8.45402 3.11032 8.375 3.30109 8.375 3.5V8.96975L10.3595 6.9845C10.4299 6.91408 10.5254 6.87453 10.625 6.87453C10.7246 6.87453 10.8201 6.91408 10.8905 6.9845C10.9609 7.05491 11.0005 7.15042 11.0005 7.25C11.0005 7.34958 10.9609 7.44509 10.8905 7.5155L8.2655 10.1405C8.23067 10.1754 8.18928 10.2031 8.14372 10.222C8.09817 10.2409 8.04933 10.2507 8 10.2507C7.95067 10.2507 7.90183 10.2409 7.85627 10.222C7.81072 10.2031 7.76933 10.1754 7.7345 10.1405L5.1095 7.5155C5.07463 7.48063 5.04698 7.43924 5.02811 7.39369C5.00924 7.34813 4.99953 7.29931 4.99953 7.25C4.99953 7.20069 5.00924 7.15187 5.02811 7.10631C5.04698 7.06076 5.07463 7.01937 5.1095 6.9845C5.14437 6.94963 5.18576 6.92198 5.23131 6.90311C5.27687 6.88424 5.32569 6.87453 5.375 6.87453C5.42431 6.87453 5.47313 6.88424 5.51869 6.90311C5.56424 6.92198 5.60563 6.94963 5.6405 6.9845L7.625 8.96975V3.5C7.625 3.10218 7.78304 2.72064 8.06434 2.43934C8.34564 2.15804 8.72718 2 9.125 2H12.5C12.8978 2 13.2794 2.15804 13.5607 2.43934C13.842 2.72064 14 3.10218 14 3.5V12.5C14 12.8978 13.842 13.2794 13.5607 13.5607C13.2794 13.842 12.8978 14 12.5 14H3.5C3.10218 14 2.72064 13.842 2.43934 13.5607C2.15804 13.2794 2 12.8978 2 12.5V3.5C2 3.10218 2.15804 2.72064 2.43934 2.43934C2.72064 2.15804 3.10218 2 3.5 2H5.375C5.47446 2 5.56984 2.03951 5.64016 2.10983C5.71049 2.18016 5.75 2.27554 5.75 2.375C5.75 2.47446 5.71049 2.56984 5.64016 2.64017C5.56984 2.71049 5.47446 2.75 5.375 2.75H3.5Z",fill:"currentColor",stroke:"currentColor",strokeWidth:.5}))),$t=o`
  position: relative;
  width: 16px;
  display: flex;
  justify-content: center;
`,Nt=o`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  position: relative;
`,Vt=e=>o`
    width: 6px;
    height: 6px;
    background-color: ${e?y("techPurple","03"):y("grayBlue","02")};
    border-radius: 50%;
  `,Ut=o`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jt=o`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 24px;
  width: 1px;
  height: calc(100% - 24px);
  background: ${y("grayBlue","08")};
`,Ot=o`
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
  padding-bottom: 24px;
  display: flex;
  flex-grow: 1;
  width: 263px;
`,Wt=o`
  justify-content: start;
  align-items: stretch;
  gap: 8px;
  display: flex;
`,zt=o`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,R=e=>o`
    color: ${e?y("techPurple","03"):y("grayBlue","02")};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
  `,Ft=o`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${y("grayBlue","04")};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`,Gt=o`
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
  display: flex;
`,Kt=o`
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  display: flex;
`,qt=o`
  justify-content: start;
  align-items: center;
  gap: 8px;
  display: flex;
`,Qt=o`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
`,Xt=o`
  color: ${y("grayBlue","02")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  max-width: 230px;
  ${Ut};
`,Yt=o`
  color: ${y("grayBlue","03")};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,Zt=e=>{const n=e.split("/")[1]||"";if(n.startsWith("add"))return"editor.history.operation.Added";if(n.startsWith("delete"))return"editor.history.operation.Deleted";if(n.startsWith("update"))return"editor.history.operation.Updated";if(n.startsWith("reset"))return"editor.history.operation.Reseted"},O=e=>{const p=$(),{teamIdentifier:n}=D(),{t:s}=I(),{snapshot:r,selected:i,last:m,onChangeCurrentID:h}=e,[c,f]=l.useState(!1),S=l.useCallback((a,C,x)=>(a.split("/")[1]||"")==="setGlobalStateReducer"?C!=null&&C.oldKey?s("editor.history.operation.Updated",{operationTargetName:"globalData"}):s("editor.history.operation.Added",{operationTargetName:"globalData"}):s("editor.history.operation.Added",{operationTargetName:x}),[s]),v=l.useCallback(a=>{const{operation:C,operationTargetName:x,operationBroadcastType:E,operationBroadcastPayload:P,operationTargetModifiedAt:z}=a;switch(C){case g.UPDATE_STATE:const b=Zt(E);return b?s(b,{operationTargetName:x}):S(E,P,x);case g.CREATE_STATE:return s("editor.history.operation.Created",{operationTargetName:x});case g.DELETE_STATE:return s("editor.history.operation.Deleted",{operationTargetName:x});case g.MOVE_STATE:return s("editor.history.operation.Moved",{operationTargetName:x});case g.RECOVER_APP_SNAPSHOT:return s("editor.history.operation.Restored",{versionName:H(z)})}},[s,S]),L=l.useCallback(async()=>{f(!0);try{await Z(r.appID,r.snapshotID),await J(r.appID),p.success({content:s("editor.history.message.suc.restore")}),window.location.href=`${N(window.customDomain)}/${n}/app/${r.appID}`}catch(a){tt(a)?p.error({content:s("editor.history.message.fail.restore")}):p.error({content:s("network_error")})}finally{f(!1)}},[r.appID,r.snapshotID,n,p,s]),u=l.useCallback(()=>{h(r.snapshotID)},[h,r.snapshotID]);return d("div",{css:Wt,children:[d("div",{css:$t,children:[t("div",{css:Nt,children:t("div",{css:Vt(i)})}),!m&&t("div",{css:jt})]}),t("div",{css:Ot,children:r.targetVersion===0?t("div",{css:R(i),onClick:u,children:s("editor.history.history_list.current")}):d(G,{children:[d("div",{css:zt,children:[t("div",{css:R(i),onClick:u,children:H(r.createdAt)}),r.snapshotTriggerMode===et.MANUAL&&d("div",{css:Ft,children:[t(Mt,{}),s("editor.history.history_list.manual")]})]}),r.modifyHistory.length>0&&t("div",{css:Gt,children:r.modifyHistory.map(a=>{const C=v(a);return d("div",{css:Kt,children:[d("div",{css:qt,children:[t(rt,{css:Qt,avatarUrl:a.modifiedBy.avatar,name:a.modifiedBy.nickname,id:a.modifiedBy.userID},a.modifiedBy.userID),t("div",{css:Xt,children:a.modifiedBy.nickname})]}),t("div",{css:Yt,children:C})]},a.modifiedAt)})}),i&&t(_,{colorScheme:"blackAlpha",loading:c,onClick:L,children:s("editor.history.restore")})]})})]})};O.displayName="SnapShotItem";const Jt=o`
  overflow: hidden;
`,te=o`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`,ee=o`
  padding: 24px 16px 64px;
  margin-bottom: 24px;
  overflow: scroll;
  height: 100%;
`,re=[g.CREATE_STATE,g.DELETE_STATE,g.UPDATE_STATE,g.MOVE_STATE,g.RECOVER_APP_SNAPSHOT],W=e=>{const{className:p,onChangeCurrentID:n,...s}=e,r=A(kt),i=A(_t),m=A(U),h=l.useMemo(()=>r.map(c=>{const f=c.modifyHistory.filter(S=>re.includes(S.operation)).slice(0,2);return{...c,modifyHistory:f}}),[r]);return d("div",{css:Jt,className:p,...s,children:[t("div",{css:te,children:"Version History"}),t(K,{}),d("div",{css:ee,children:[h.map((c,f)=>t(O,{snapshot:c,last:!i&&h.length-1===f,selected:m===c.snapshotID,onChangeCurrentID:n},c.snapshotID)),i&&t(j,{})]})]})};W.displayName="SnapShotList";const se=()=>{const e=V(),p=$(),{appId:n}=D(),{t:s}=I(),r=A(st),i=A(U),m=r==null?void 0:r.myRole,h=(r==null?void 0:r.uid)??"",c=(r==null?void 0:r.id)??"",[f,S]=l.useState(!1),v=l.useRef();if(m&&!ot(m,at.APP,it(r),nt.EDIT_APP))throw new Error("You don't have permission to edit this app");l.useEffect(()=>{const u=[Dt(w),Lt(w),Et(w),mt(w),ft(w)];return()=>u.forEach(a=>a())},[]);const L=l.useCallback(u=>{v.current=i,e(T.updateCurrentSnapshotIDReducer(u))},[i,e]);return l.useEffect(()=>{const u=new AbortController;return i&&n&&(S(!0),ct(n,i,u.signal).then(a=>{v.current=i,St(a.data,"preview",n,c,h)}).catch(()=>{p.error({content:s("editor.history.message.fail.preview")}),v.current&&e(T.updateCurrentSnapshotIDReducer(v.current))}).finally(()=>{S(!1)})),()=>{u.abort(),e(lt.updateAppInfoReducer(pt))}},[s,e,p,n,i,c,h]),d("div",{css:Ct,children:[t(bt,{}),d("div",{css:xt,children:[t("div",{css:At,children:f?t("div",{css:vt,children:t(M,{colorScheme:"techPurple"})}):t(B,{renderInBody:!0,zIndex:10,children:t(Tt,{css:wt})})}),t(B,{renderInBody:!0,zIndex:10,children:t(W,{onChangeCurrentID:L,css:It})})]})]})};se.displayName="History";export{se as History,se as default};
//# sourceMappingURL=index-c68cd350.js.map

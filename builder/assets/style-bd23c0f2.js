import{bg as y,bf as c,w as $,bh as E,bi as B,bj as z,bk as p,bl as I,bm as P,e as U,b as D,bn as T,n as j,bo as k,bp as H,bq as L,D as W,br as G,bs as R,bt as w,bu as N,bv as M,bw as _,bx as F,by as O,bz as q,bA as V,bB as J,bC as K,bD as Q}from"./index-2f1869ab.js";import{l as b,n as l,m as A}from"./@illa-design-402f214a.js";import{u as X,r as S}from"./react-9b7e00e3.js";import{f as Y,u as Z}from"./layoutInfoListener-bba65cc8.js";import{a}from"./@emotion-4f16718e.js";import{u as ee,m as te}from"./renderComponentCanvasContainer-44ad78fe.js";const oe=(e,t,o,i,n)=>{y.dispatch(c.updateIllaMode(t)),y.dispatch($.updateAppInfoReducer(e.appInfo));const s=Y(e.components);y.dispatch(E.initComponentReducer(B(s)));const r=z(e.actions);y.dispatch(p.initActionListReducer(r)),I.initApp(o,i,n),I.updateDisplayNameList(e.components,r),y.dispatch(P.startExecutionReducer()),t==="edit"&&r.length>0&&y.dispatch(c.changeSelectedAction(r[0]))},me=e=>{const{appId:t=""}=X(),o=U(),i=D(T),n=D(j),[s,r]=S.useState(!0),[h,f]=S.useState(!1),u=e==="production"?"-2":"0",{uid:g,teamID:d}={uid:(n==null?void 0:n.uid)??"",teamID:(n==null?void 0:n.id)??""};Z();const m=S.useCallback(x=>{oe(x,e,t,d,g)},[e,t,d,g]);return S.useEffect(()=>{const x=new AbortController;return i&&(f(!1),r(!0),Promise.all([k(t,u,x.signal),H(x.signal)]).then(C=>{o(L.updateResourceListReducer(C[1].data)),m(C[0].data)}).catch(()=>{f(!0)}).finally(()=>{r(!1)})),()=>{x.abort(),o($.updateAppInfoReducer(W))}},[t,o,m,i,d,u]),{loadingState:s,errorState:h}},be=a`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
`,Ae=a`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background: #fafafb;
  flex-grow: 1;
  width: 100%;
  overflow: auto;
`,Se=a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,we=a`
  box-sizing: border-box;
  width: 100%;
  height: ${G}px;
  flex: none;
`,Ce=a`
  width: ${R}px;
  height: 100%;
  min-width: ${R}px;
  overflow: hidden;
  box-sizing: border-box;
  border-right: 1px solid ${b(`--${A}-grayBlue-08`)};
  background: ${b(`--${A}-white-01`)};
  padding-bottom: 48px;
`,Ie=a`
  height: 100%;
  width: 100%;
`,De=a`
  box-sizing: border-box;
  width: 100%;
`,Re=a`
  box-sizing: border-box;
  width: ${w}px;
  min-width: ${w}px;
  height: 100%;
  border-left: 1px solid ${b(`--${A}-grayBlue-08`)};
  background: ${b(`--${A}-white-01`)};
`,$e=a`
  flex-grow: 1;
  min-width: ${w}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${b(`--${A}-white-01`)};
`,Ne=a`
  position: absolute;
  top: 47px;
  width: 100vw;
  height: calc(100vh - 47px);
  z-index: 100;
  display: flex;
  justify-content: center;
  user-select: none;
`,ve=a`
  position: absolute;
  top: 17px;
  height: 40px;
  background-color: ${l("white","01")};
  padding: 9px 16px;
  border: 1px solid ${l("grayBlue","08")};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ee=a`
  color: ${l("orange","03")};
  font-size: 16px;
`,ne=(e,t)=>{const o=t.getState().currentApp.collaborators.components,i=M(t.getState()),n=e.payload.map(s=>_(s,i)).flat();t.dispatch(c.addExpandedWidgetReducer(n)),ee(e.payload,o)};async function ae(e,t){t.dispatch(c.updateCachedAction(e.payload))}const v=(e,t)=>{let o=[e];const i=t[e],n=(i==null?void 0:i.$childrenNode)||[];return n.length>0&&n.forEach(s=>{o=[...o,...v(s,t)]}),o},ie=(e,t)=>{if(c.setDraggingNodeIDsReducer.match(e)||c.setResizingNodeIDsReducer.match(e)){const{payload:o}=e;let i=[];const n=F(t.getState());o.forEach(s=>{i=[...i,...v(s,n)]}),t.dispatch(O.filterCursorReducer(i))}};function Be(e){const t=[e({actionCreator:c.changeSelectedAction,effect:ae}),e({actionCreator:c.updateSelectedComponent,effect:ne}),e({matcher:N(c.setDraggingNodeIDsReducer,c.setResizingNodeIDsReducer),effect:ie})];return()=>{t.forEach(o=>o())}}async function ce(e,t){t.dispatch(c.changeSelectedAction(e.payload))}async function se(e,t){var s,r,h;e.payload.displayName===((s=t.getState().config.selectedAction)==null?void 0:s.displayName)&&t.dispatch(c.changeSelectedAction(e.payload));const o=e.payload.displayName,n=q(t.getState())[o];n&&((r=n==null?void 0:n.config)!=null&&r.advancedConfig.isPeriodically)&&((h=n==null?void 0:n.config)!=null&&h.advancedConfig.periodInterval)&&V(n)}async function re(e,t){const o=t.getState().config.selectedAction,i=e.payload.find(n=>n.actionID===(o==null?void 0:o.actionID));i&&t.dispatch(c.changeSelectedAction(i))}const le=(e,t)=>{const{oldDisplayName:o,newDisplayName:i}=e.payload;te(t,o,i)},de=(e,t)=>{var r,h;const o=t.getState(),i=(r=o.config.selectedAction)==null?void 0:r.actionID,n=[];if(p.updateActionDisplayNameReducer.match(e)){const{actionID:f}=e.payload;if(f===((h=o.config.selectedAction)==null?void 0:h.actionID)){const u=o.currentApp.action.find(d=>d.actionID===f);if(!u)return;const g=J(t.getState());if(t.dispatch(c.changeSelectedAction(u)),!g)return;t.dispatch(c.updateCachedAction({...g,displayName:e.payload.newDisplayName})),n.push(u)}}else if(p.batchUpdateMultiActionSlicePropsReducer.match(e)){const f=e.payload.find(d=>d.actionID===i);if(!f)return;const u=f.actionID,g=o.currentApp.action.find(d=>d.actionID===u);if(!g)return;t.dispatch(c.changeSelectedAction(g)),e.payload.forEach(d=>{const m=o.currentApp.action.find(x=>x.actionID===d.actionID);m&&n.push(m)})}const s=K(o);n.length&&!s&&Q(n)};function ze(e){const t=[e({actionCreator:p.updateActionItemReducer,effect:se}),e({actionCreator:p.batchUpdateActionItemReducer,effect:re}),e({actionCreator:p.addActionItemReducer,effect:ce}),e({actionCreator:p.updateActionDisplayNameReducer,effect:le}),e({matcher:N(p.updateActionDisplayNameReducer,p.batchUpdateMultiActionSlicePropsReducer),effect:de})];return()=>{t.forEach(o=>o())}}const Pe=a`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${l("grayBlue","08")};
  padding: 6px 16px;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 16px;
`,pe=a`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ue=()=>a`
  pointer-events: none;
  color: ${l("grayBlue","04")};
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${pe};

  & > svg {
    &:hover {
      color: ${l("grayBlue","02")};
      cursor: pointer;
    }
  }
`,Te=a`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  gap: 29px;
`,je=a`
  display: inline-flex;
  gap: 8px;
`;a`
  z-index: 3;
`;const ke=a`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  flex-shrink: 1;
`,He=a`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 18px;
  color: ${l("grayBlue","04")};
`,Le=a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 18px;
  color: ${l("grayBlue","03")};
  gap: 4px;
`,We=a`
  cursor: pointer;
`,Ge=a`
  width: 8px;
  height: 8px;
  color: ${l("grayBlue","04")};
`,Me=a`
  width: 100%;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: calc(100% + 16px);
  top: 0;
`,_e=a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  gap: 8px;
  color: ${l("grayBlue","02")};
`,Fe=a`
  font-weight: 500;
  cursor: pointer;
  color: ${l("grayBlue","02")};
`,Oe=a`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`,qe=a`
  display: flex;
  gap: 8px;
`,Ve=a`
  margin: 0;
  padding: 0;
  color: ${l("grayBlue","02")};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,Je=a`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${l("grayBlue","02")};
  margin: 0;
`;export{Ue as A,Te as B,je as C,Oe as D,qe as E,Ve as F,Je as G,Fe as a,Be as b,Ae as c,Se as d,be as e,Ie as f,Re as g,me as h,ke as i,we as j,De as k,We as l,$e as m,Pe as n,Ne as o,ve as p,Ce as q,pe as r,ze as s,Me as t,oe as u,_e as v,Ee as w,Ge as x,He as y,Le as z};
//# sourceMappingURL=style-bd23c0f2.js.map

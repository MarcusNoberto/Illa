import{k as t,a8 as O,o as g,F as B,n as k,B as j,bE as N,bF as U,a2 as $,bC as z,bD as G,D as K,bd as Z}from"./@illa-design-1f43bb6c.js";import{u as w,b as D,dF as A,e as P,dl as S,bg as x,he as q,cP as f,a as y,_ as E,fD as J,hc as X,hq as Y,aS as b,bl as Q,fM as ee}from"./index-4dce6ee8.js";import{r as i,L as te}from"./react-9b7e00e3.js";import{a as c}from"./@emotion-08a6282b.js";import{S as R}from"./renderComponentCanvasContainer-2e4cd54a.js";import{K as ne,J as oe}from"./index-cd7c17cc.js";import{g as re}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";import"./style-49f23046.js";import"./index-d48f7e94.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";import"./hook-302a78fc.js";import"./layoutInfoListener-bd63c738.js";import"./drive-584d85d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-a04e2b11.js";import"./objectWithoutPropertiesLoose-e3246981.js";import"./clsx-06f54762.js";import"./index-03ca7e7b.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./index-934389e2.js";import"./style-51b259bb.js";import"./style-af69883e.js";const ae=e=>i.createElement("svg",{width:49,height:49,viewBox:"0 0 49 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M28 34H14C12.8954 34 12 33.1046 12 32V12C12 10.8954 12.8954 10 14 10H22H26H34C35.1046 10 36 10.8954 36 12V26",stroke:"#A9AEB8",strokeWidth:1.5,strokeLinecap:"round"}),i.createElement("path",{d:"M33 12H25.6667H22.3333H15C14.4477 12 14 12.4477 14 13V31C14 31.5523 14.4477 32 15 32H27.3333H33C33.5523 32 34 31.5523 34 31V25.3333V13C34 12.4477 33.5523 12 33 12Z",fill:"#F2F3F5"}),i.createElement("path",{d:"M35.9759 35.3987L34.0592 40.3089L30.9961 29.464L41.1443 34.3638L35.9759 35.3987Z",fill:"white",stroke:"#A9AEB8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ie=c`
  width: 100%;
  height: 319px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,se=c`
  font-size: 30px;
`,L=c`
  margin-top: 4px;
`,H=()=>{const{t:e}=w();return t("div",{css:ie,children:t(O,{icon:t("div",{css:se,children:t(ae,{})}),description:g(B,{children:[t("div",{css:L,children:e("editor.inspect.unselected_tip1")}),t("div",{css:L,children:e("editor.inspect.unselected_tip2")})]})})})};H.displayName="EmptySelected";const le=c`
  padding: 0 16px;
  width: 100%;
  font-size: 14px;
  height: calc(100% - 1px);
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
`,ce=c`
  height: 48px;
  display: flex;
  align-items: center;
  color: ${k("grayBlue","02")};
  font-weight: 600;
  flex: none;
`,de=c`
  overflow: auto;
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid ${k("grayBlue","08")};
  padding: 8px 16px;
  border-radius: 8px;
`,pe=c`
  :not(:nth-of-type(1)) {
    margin-top: 8px;
  }
  line-height: 22px;
  color: ${k("grayBlue","02")};
`,I=()=>{const e=D(A),{t:o}=w(),n=i.useContext(R),a=()=>{n.showDeleteDialog(e,"widget",{source:"left_multi_delete"})};return g("div",{css:le,children:[t("div",{css:ce,children:o("editor.inspect.multi_selected_header",{number:e.length})}),t("div",{css:de,children:e.map(r=>t("div",{css:pe,children:r},r))}),t(j,{fullWidth:!0,size:"medium",colorScheme:"red",variant:"light",onClick:a,children:o("editor.component.delete")})]})};I.displayName="MultiSelectedPanel";const T=e=>{const{widgetDisplayName:o,componentType:n}=e,{t:a}=w(),r=P(),s=i.useContext(R),m=i.useCallback(()=>{var l,C;const d=(C=(l=S(n))==null?void 0:l.config)==null?void 0:C.defaults;if(!o)return;let u=d;typeof d=="function"&&(u=d()),typeof u=="object"&&r(x.updateComponentPropsReducer({displayName:o,updateSlice:u||{}}))},[n,r,o]);return g(U,{w:"184px",children:[t(N,{value:"reset",title:a("editor.inspect.header.action_menu.reset_state"),onClick:m},"reset"),t(N,{value:"delete",title:a("editor.inspect.header.action_menu.delete"),deleted:!0,onClick:()=>{s.showDeleteDialog([o],"widget",{source:"left_delete"})}},"delete")]})};T.displayName="ActionMenu";const me=c`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`,ue=c`
  margin-left: 16px;
  cursor: pointer;
  gap: 8px;
  display: flex;
`,M=()=>{const{widgetDisplayName:e,widgetType:o}=i.useContext(q),n=P(),a=J("widget",o),r=i.useCallback(l=>{n(x.updateComponentDisplayNameReducer({displayName:e,newDisplayName:l}))},[n,e]),s=i.useCallback(()=>{f(y.HOVER,{element:"component_rename",parameter1:o})},[o]),m=i.useCallback(()=>{f(y.CLICK,{element:"component_rename",parameter1:o})},[o]),d=i.useCallback(l=>{f(y.BLUR,{element:"component_rename",parameter1:o,parameter3:l.length})},[o]),u=i.useCallback(l=>{f(y.VALIDATE,{element:"component_rename",parameter1:o,parameter3:l})},[o]);return g("div",{css:me,children:[t(ne,{displayName:e,updateDisplayNameByBlur:r,onMouseEnter:s,onClick:m,onBlur:d,onValidate:u},e),g("div",{css:ue,children:[a&&t(te,{to:a,target:"_blank",children:t(E,{children:t($,{})})}),t(G,{position:"bottom-end",trigger:"click",dropList:t(T,{widgetDisplayName:e,componentType:o}),onVisibleChange:l=>{l&&f(y.SHOW,{element:"component_management_left",parameter1:o})},children:t(E,{children:t(z,{})})})]})]})};M.displayName="PanelHeader";const he=e=>!e||!S(e)?null:S(e).panelConfig,ge=(e,o)=>{const{bindAttrName:n,shown:a}=e;if(!n||!a)return!0;if(Array.isArray(n)){const r=n.map(s=>re(o,s));return a(...r)}return!0},fe=c`
  padding-bottom: 8px;
`,F=e=>{const{config:o,displayName:n,widgetProps:a}=e,{groupName:r,children:s}=o;return t(oe,{title:r,children:s&&s.length>0&&t("div",{css:fe,children:t(v,{panelConfig:s,displayName:n,widgetProps:a})})})};F.displayName="RenderPanelBar";const v=e=>{const{panelConfig:o,displayName:n,widgetProps:a}=e;return!n||!o||!o.length?null:t(B,{children:o.map(r=>{if(!ge(r,a))return null;const{id:m}=r,d=`${m}-${n}`;return r.groupName?t(F,{config:r,displayName:n,widgetProps:a},d):r.setterType?t(X,{config:r,displayName:n,parentAttrName:""},d):null})})};v.displayName="FieldFactory";const ye=c`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,xe=c`
  height: 100%;
  overflow-y: auto;
`,W=()=>{const e=P(),{t:o}=w(),n=D(Y),a=(n==null?void 0:n.type)||"",r=(n==null?void 0:n.displayName)||"",s=(n==null?void 0:n.parentNode)||"",m=(n==null?void 0:n.props)||{},d=i.useCallback((p,h)=>{const V={[p]:h};e(x.updateComponentPropsReducer({displayName:r,updateSlice:V}))},[e,r]),u=i.useCallback(p=>{b(p)&&e(x.updateComponentPropsReducer({displayName:r,updateSlice:p}))},[e,r]),l=i.useCallback((p,h)=>{!p||!b(h)||e(x.updateComponentPropsReducer({displayName:p,updateSlice:h}))},[e]),C=i.useCallback((p,h)=>{b(h)&&e(Q.updateExecutionByDisplayNameReducer({displayName:p,value:h}))},[e]),_=he(a);return _&&t(ee,{widgetType:a,widgetDisplayName:r,widgetParentDisplayName:s,widgetProps:m,handleUpdateDsl:d,handleUpdateMultiAttrDSL:u,handleUpdateOtherMultiAttrDSL:l,handleUpdateExecutionResult:C,widgetOrAction:"WIDGET",children:g("div",{css:ye,children:[t(M,{}),t(K,{}),a==="TABLE_WIDGET"&&t(Z,{type:"warning",title:o("editor.inspect.setter_tips.table_update_title"),content:o("editor.inspect.setter_tips.table_update_content")}),t("div",{css:xe,children:t(v,{panelConfig:_,displayName:r,widgetProps:m})})]})})};W.displayName="SingleSelectedPanel";const Ce=i.memo(W),we=()=>{const e=D(A);return e.length===0?t(H,{}):e.length>1?t(I,{}):t(Ce,{})};we.displayName="InspectPanel";export{we as default};
//# sourceMappingURL=index-53f4fb1f.js.map

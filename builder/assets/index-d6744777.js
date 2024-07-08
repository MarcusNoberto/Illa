import{k as t,a8 as O,o as g,F as L,n as k,B as j,bB as _,bC as U,a2 as $,bz as z,bA as G,D as K,bc as Z}from"./@illa-design-402f214a.js";import{u as w,b as D,dG as A,e as P,dm as S,bh as x,hf as J,cQ as f,a as y,_ as E,fE as Q,hd as X,hr as Y,aS as b,bm as q,fN as ee}from"./index-2f1869ab.js";import{r as i,L as te}from"./react-9b7e00e3.js";import{a as c}from"./@emotion-4f16718e.js";import{S as R}from"./renderComponentCanvasContainer-44ad78fe.js";import{K as ne,J as re}from"./index-e89bb2f6.js";import{g as oe}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";import"./style-7ce959a8.js";import"./index-f466602f.js";import"./index-cf2bb556.js";import"./index-b8442d1a.js";import"./hook-34b2061f.js";import"./layoutInfoListener-bba65cc8.js";import"./drive-6b05f117.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-cd761d27.js";import"./clsx-85d7d0af.js";import"./objectWithoutPropertiesLoose-24430c43.js";import"./index-9dcf4ab8.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./index-323e87cb.js";import"./style-bd23c0f2.js";import"./style-91620c64.js";const ae=e=>i.createElement("svg",{width:49,height:49,viewBox:"0 0 49 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M28 34H14C12.8954 34 12 33.1046 12 32V12C12 10.8954 12.8954 10 14 10H22H26H34C35.1046 10 36 10.8954 36 12V26",stroke:"#A9AEB8",strokeWidth:1.5,strokeLinecap:"round"}),i.createElement("path",{d:"M33 12H25.6667H22.3333H15C14.4477 12 14 12.4477 14 13V31C14 31.5523 14.4477 32 15 32H27.3333H33C33.5523 32 34 31.5523 34 31V25.3333V13C34 12.4477 33.5523 12 33 12Z",fill:"#F2F3F5"}),i.createElement("path",{d:"M35.9759 35.3987L34.0592 40.3089L30.9961 29.464L41.1443 34.3638L35.9759 35.3987Z",fill:"white",stroke:"#A9AEB8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ie=c`
  width: 100%;
  height: 319px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,se=c`
  font-size: 30px;
`,B=c`
  margin-top: 4px;
`,H=()=>{const{t:e}=w();return t("div",{css:ie,children:t(O,{icon:t("div",{css:se,children:t(ae,{})}),description:g(L,{children:[t("div",{css:B,children:e("editor.inspect.unselected_tip1")}),t("div",{css:B,children:e("editor.inspect.unselected_tip2")})]})})})};H.displayName="EmptySelected";const le=c`
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
`,I=()=>{const e=D(A),{t:r}=w(),n=i.useContext(R),a=()=>{n.showDeleteDialog(e,"widget",{source:"left_multi_delete"})};return g("div",{css:le,children:[t("div",{css:ce,children:r("editor.inspect.multi_selected_header",{number:e.length})}),t("div",{css:de,children:e.map(o=>t("div",{css:pe,children:o},o))}),t(j,{fullWidth:!0,size:"medium",colorScheme:"red",variant:"light",onClick:a,children:r("editor.component.delete")})]})};I.displayName="MultiSelectedPanel";const T=e=>{const{widgetDisplayName:r,componentType:n}=e,{t:a}=w(),o=P(),s=i.useContext(R),m=i.useCallback(()=>{var l,C;const d=(C=(l=S(n))==null?void 0:l.config)==null?void 0:C.defaults;if(!r)return;let u=d;typeof d=="function"&&(u=d()),typeof u=="object"&&o(x.updateComponentPropsReducer({displayName:r,updateSlice:u||{}}))},[n,o,r]);return g(U,{w:"184px",children:[t(_,{value:"reset",title:a("editor.inspect.header.action_menu.reset_state"),onClick:m},"reset"),t(_,{value:"delete",title:a("editor.inspect.header.action_menu.delete"),deleted:!0,onClick:()=>{s.showDeleteDialog([r],"widget",{source:"left_delete"})}},"delete")]})};T.displayName="ActionMenu";const me=c`
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
`,M=()=>{const{widgetDisplayName:e,widgetType:r}=i.useContext(J),n=P(),a=Q("widget",r),o=i.useCallback(l=>{n(x.updateComponentDisplayNameReducer({displayName:e,newDisplayName:l}))},[n,e]),s=i.useCallback(()=>{f(y.HOVER,{element:"component_rename",parameter1:r})},[r]),m=i.useCallback(()=>{f(y.CLICK,{element:"component_rename",parameter1:r})},[r]),d=i.useCallback(l=>{f(y.BLUR,{element:"component_rename",parameter1:r,parameter3:l.length})},[r]),u=i.useCallback(l=>{f(y.VALIDATE,{element:"component_rename",parameter1:r,parameter3:l})},[r]);return g("div",{css:me,children:[t(ne,{displayName:e,updateDisplayNameByBlur:o,onMouseEnter:s,onClick:m,onBlur:d,onValidate:u},e),g("div",{css:ue,children:[a&&t(te,{to:a,target:"_blank",children:t(E,{children:t($,{})})}),t(G,{position:"bottom-end",trigger:"click",dropList:t(T,{widgetDisplayName:e,componentType:r}),onVisibleChange:l=>{l&&f(y.SHOW,{element:"component_management_left",parameter1:r})},children:t(E,{children:t(z,{})})})]})]})};M.displayName="PanelHeader";const he=e=>!e||!S(e)?null:S(e).panelConfig,ge=(e,r)=>{const{bindAttrName:n,shown:a}=e;if(!n||!a)return!0;if(Array.isArray(n)){const o=n.map(s=>oe(r,s));return a(...o)}return!0},fe=c`
  padding-bottom: 8px;
`,W=e=>{const{config:r,displayName:n,widgetProps:a}=e,{groupName:o,children:s}=r;return t(re,{title:o,children:s&&s.length>0&&t("div",{css:fe,children:t(v,{panelConfig:s,displayName:n,widgetProps:a})})})};W.displayName="RenderPanelBar";const v=e=>{const{panelConfig:r,displayName:n,widgetProps:a}=e;return!n||!r||!r.length?null:t(L,{children:r.map(o=>{if(!ge(o,a))return null;const{id:m}=o,d=`${m}-${n}`;return o.groupName?t(W,{config:o,displayName:n,widgetProps:a},d):o.setterType?t(X,{config:o,displayName:n,parentAttrName:""},d):null})})};v.displayName="FieldFactory";const ye=c`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,xe=c`
  height: 100%;
  overflow-y: auto;
`,F=()=>{const e=P(),{t:r}=w(),n=D(Y),a=(n==null?void 0:n.type)||"",o=(n==null?void 0:n.displayName)||"",s=(n==null?void 0:n.parentNode)||"",m=(n==null?void 0:n.props)||{},d=i.useCallback((p,h)=>{const V={[p]:h};e(x.updateComponentPropsReducer({displayName:o,updateSlice:V}))},[e,o]),u=i.useCallback(p=>{b(p)&&e(x.updateComponentPropsReducer({displayName:o,updateSlice:p}))},[e,o]),l=i.useCallback((p,h)=>{!p||!b(h)||e(x.updateComponentPropsReducer({displayName:p,updateSlice:h}))},[e]),C=i.useCallback((p,h)=>{b(h)&&e(q.updateExecutionByDisplayNameReducer({displayName:p,value:h}))},[e]),N=he(a);return N&&t(ee,{widgetType:a,widgetDisplayName:o,widgetParentDisplayName:s,widgetProps:m,handleUpdateDsl:d,handleUpdateMultiAttrDSL:u,handleUpdateOtherMultiAttrDSL:l,handleUpdateExecutionResult:C,widgetOrAction:"WIDGET",children:g("div",{css:ye,children:[t(M,{}),t(K,{}),a==="TABLE_WIDGET"&&t(Z,{type:"warning",title:r("editor.inspect.setter_tips.table_update_title"),content:r("editor.inspect.setter_tips.table_update_content")}),t("div",{css:xe,children:t(v,{panelConfig:N,displayName:o,widgetProps:m})})]})})};F.displayName="SingleSelectedPanel";const Ce=i.memo(F),we=()=>{const e=D(A);return e.length===0?t(H,{}):e.length>1?t(I,{}):t(Ce,{})};we.displayName="InspectPanel";export{we as default};
//# sourceMappingURL=index-d6744777.js.map

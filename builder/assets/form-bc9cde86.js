import{l as y,m as v,q as ze,b8 as _e,k as l,o as x}from"./@illa-design-1f43bb6c.js";import{R as ce}from"./index-d48f7e94.js";import{r as s}from"./react-9b7e00e3.js";import{b as W,b2 as Pe,ci as ke,cl as we,e as xe,bg as de,de as ue,dh as Ae,aS as $e,eu as Le,aH as a,ev as Te,ew as he,ex as me,be as j,ey as pe,ez as Be,eA as Fe}from"./index-4dce6ee8.js";import{S as fe}from"./resizeBar-214a8ecc.js";import{R as K}from"./index-4bf26bd7.js";import{a as b}from"./@emotion-08a6282b.js";import{g as V,s as ge,i as Ge}from"./lodash-lib-6e94956b.js";import{k as We}from"./renderComponentCanvasContainer-2e4cd54a.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";import"./style-49f23046.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";const je=b`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`,ye=b`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Ke=b`
  width: 100%;
  height: 100%;
  min-height: 100px;
  flex: 1;
  overflow-y: auto;
  position: relative;
`,ve=b`
  width: 100%;
  height: 100%;
  cursor: row-resize;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ne=b`
  fill: ${y(`--${v}-white-01`)};
  stroke: ${y(`--${v}-techPurple-03`)};
  :hover {
    fill: ${y(`--${v}-techPurple-03`)};
    stroke: ${y(`--${v}-white-01`)};
  }
  :active {
    fill: ${y(`--${v}-techPurple-03`)};
    stroke: ${y(`--${v}-white-01`)};
  }
`;function A($,i,N,R){const r=N[$];r.containerType!=="EDITOR_DOT_PANEL"&&Fe.has(r.type)||R&&r.type==="FORM_WIDGET"?(i.push(r),Array.isArray(r.childrenNode)&&r.childrenNode.forEach(u=>{A(u,i,N,R)})):Array.isArray(r.childrenNode)&&r.childrenNode.forEach(u=>{A(u,i,N,R)})}const Ve=$=>{const{childrenNode:i,showFooter:N,showHeader:R,headerHeight:r,footerHeight:u,disabled:c,displayName:L,disabledSubmit:Y,resetAfterSuccessful:q,validateInputsOnSubmit:U,columnNumber:T,formData:X,dynamicHeight:Re="fixed",padding:h,handleUpdateOriginalDSLMultiAttr:S,updateComponentRuntimeProps:J,deleteComponentRuntimeProps:Q,handleUpdateMultiExecutionResult:n,triggerEventHandler:I}=$,E=ze(),[Me,O]=_e(),Z=s.useRef(c),Ce=s.useRef(null),[M,ee]=s.useState(!1),C=W(Pe),te=W(ke),z=W(we),m=xe(),se=s.useMemo(()=>{let e=[];return i.forEach(t=>{A(t,e,z,!0)}),e.map(t=>t.displayName)},[i,z]),f=s.useMemo(()=>{let e=[];return i.forEach(t=>{A(t,e,z,!1)}),e},[i,z]),ae=s.useMemo(()=>f.map(e=>e.displayName),[f]),_=s.useMemo(()=>ae.map(e=>{const t=V(te,e,{});return{displayName:e,...t}}),[ae,te]),oe=s.useMemo(()=>{const e={};return _.forEach(t=>{ge(e,t.formDataKey||t.displayName,t)}),e},[_]),B=s.useMemo(()=>{const e={};return _.forEach(t=>{ge(e,t.formDataKey||t.displayName,t.value)}),e},[_]);s.useEffect(()=>{Ge(B,X)||n==null||n([{displayName:L,value:{formData:B}}])},[m,L,B,n,X]),s.useEffect(()=>{if(Z.current!==c){const e=se.map(t=>({displayName:t,updateSlice:{disabled:typeof c>"u"?"":`{{${c}}}`}}));m(de.updateMultiComponentPropsReducer(e))}Z.current=c},[c,i,se,m]);const P=s.useCallback(()=>{I("invalid")},[I]),re=s.useCallback(()=>{const e=ue.getCurrentPageCalcContext();f.forEach(t=>{try{return Ae("events",`{{${t.displayName}.validate()}}`,e)}catch{return E.error({content:"eventHandler run error"}),!1}})},[f,E]),ie=s.useCallback(e=>{const t=Object.keys(e),d=[];t.forEach(o=>{V(oe,o,null)&&d.push({displayName:o,value:{value:e[o]}})}),d.length>0&&(n==null||n(d))},[oe,n]),k=s.useCallback(()=>{const e=f.map(t=>({displayName:t.displayName,value:{value:t.props.value,validateMessage:""}}));n==null||n(e)},[f,n]),ne=s.useCallback(()=>{if(!(Y||c)){if(U){const e=ue.getCurrentPageCalcContext();if(!f.every(d=>{try{const o=V(e,`${d.displayName}.validate`);return typeof o=="function"?!o():!1}catch{return E.error({content:"eventHandler run error"}),!1}})){P();return}}I("submit"),q&&k()}},[f,c,Y,P,k,E,q,I,U]);s.useEffect(()=>(J({submit:ne,invalid:P,reset:k,setValue:e=>{$e(e)&&ie(e)},validate:re}),()=>{Q()}),[Q,P,k,ne,re,ie,J]);const De=s.useMemo(()=>Le*a,[]),He=s.useMemo(()=>Te*a,[]),w=s.useMemo(()=>Math.floor((O.height-(he+2*me)-u*a)/a)*a,[O.height,u]),D=s.useMemo(()=>Math.floor((O.height-(he+2*me)-r*a)/a)*a,[O.height,r]),F=s.useCallback(e=>{},[]),G=Re!=="fixed",be=s.useMemo(()=>({bottom:l("div",{css:ve,children:l(fe,{css:Ne})})}),[]),Se=s.useMemo(()=>({top:l("div",{css:ve,children:l(fe,{css:Ne})})}),[]),le=e=>{e.preventDefault(),e.stopPropagation(),m(j.setResizingNodeIDsReducer([`${L}-resize-form-header`]))},Ie=s.useCallback((e,t,d,o)=>{const{height:g}=o;let p=Math.floor((r*a+g)/a);p*a>=w&&(p=Math.floor(w/a)),S({headerHeight:p}),m(j.setResizingNodeIDsReducer([]))},[m,S,r,w]),Ee=s.useCallback((e,t,d,o)=>{const{height:g}=o;let p=Math.floor((u*a+g)/a);p*a>D&&(p=Math.floor(D/a)),S({footerHeight:p}),m(j.setResizingNodeIDsReducer([]))},[m,u,D,S]),[{isDraggingActive:H},Oe]=We(()=>({accept:["components"],hover:(e,t)=>{t.isOver({shallow:!0})},drop:e=>{const{draggedComponents:t}=e,d=t.map(o=>o.displayName);if(c){const o={disabled:"{{true}}"},g=d.map(p=>({displayName:p,updateSlice:o}));m(de.updateMultiComponentPropsReducer(g))}return{isDropOnCanvas:!0}},collect:e=>({isDraggingActive:e.isOver()})}),[c]);return x("div",{css:je,ref:e=>{Oe(e),Me(e),Ce.current=e},onMouseEnter:()=>{ee(!0)},onMouseLeave:()=>{ee(!1)},children:[R&&x(ce,{size:{width:"100%",height:r*a},minHeight:De,maxHeight:w,handleComponent:C&&M&&!H?be:void 0,enable:{bottom:!0},onResizeStart:le,onResizeStop:Ie,children:[l("div",{css:ye,children:l(K,{displayName:i[0],columnNumber:T,handleUpdateHeight:F,canResizeCanvas:G,containerPadding:h==null?void 0:h.size})}),M&&!H&&C&&l("div",{css:pe(!1,!0,!1)})]}),x("div",{css:Ke,children:[l(K,{displayName:i[1],columnNumber:T,handleUpdateHeight:F,canResizeCanvas:G,containerPadding:h==null?void 0:h.size}),M&&!H&&C&&l("div",{css:Be(!1,!0,!1)})]}),N&&x(ce,{size:{width:"100%",height:u*a},minHeight:He,maxHeight:D,handleComponent:C&&M&&!H?Se:void 0,enable:{top:!0},onResizeStart:le,onResizeStop:Ee,children:[l("div",{css:ye,children:l(K,{displayName:i[2],columnNumber:T,handleUpdateHeight:F,canResizeCanvas:G,containerPadding:h==null?void 0:h.size})}),M&&!H&&C&&l("div",{css:pe(!1,!0,!1,D)})]})]})};Ve.displayName="FormWidget";export{Ve as FormWidget,Ve as default};
//# sourceMappingURL=form-bc9cde86.js.map

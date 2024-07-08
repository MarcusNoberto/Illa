import{l as r,m as n,b8 as te,k as s,o as v}from"./@illa-design-1f43bb6c.js";import{R as x}from"./index-d48f7e94.js";import{r as t}from"./react-9b7e00e3.js";import{e as se,eB as oe,aH as e,eC as ie,eD as $,eE as A,b as re,b2 as ne,be as _,ey as B,ez as ae}from"./index-4dce6ee8.js";import{S as C}from"./resizeBar-214a8ecc.js";import{R as b}from"./index-4bf26bd7.js";import{a as m}from"./@emotion-08a6282b.js";import{k as le}from"./renderComponentCanvasContainer-2e4cd54a.js";import"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";import"./style-49f23046.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";const he=m`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`,L=m`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,ce=m`
  width: 100%;
  height: 100%;
  min-height: 100px;
  flex: 1;
  overflow-y: auto;
  position: relative;
`,k=m`
  width: 100%;
  height: 100%;
  cursor: row-resize;
  display: flex;
  align-items: center;
  justify-content: center;
`,T=m`
  fill: ${r(`--${n}-white-01`)};
  stroke: ${r(`--${n}-techPurple-03`)};
  :hover {
    fill: ${r(`--${n}-techPurple-03`)};
    stroke: ${r(`--${n}-white-01`)};
  }
  :active {
    fill: ${r(`--${n}-techPurple-03`)};
    stroke: ${r(`--${n}-white-01`)};
  }
`,de=G=>{const{childrenNode:z,showFooter:P,showHeader:U,headerHeight:a,footerHeight:l,isVisible:p,columnNumber:y,displayName:W,handleUpdateOriginalDSLMultiAttr:g,triggerEventHandler:D}=G,w=t.useRef(),M=t.useRef(!1),h=se();t.useEffect(()=>(M.current=!0,()=>{M.current=!1}),[]),t.useEffect(()=>(p&&w.current!==p&&M.current&&(D("onOpenModal"),w.current=!0),()=>{p&&!M.current&&D("onCloseModal")}),[p,D]);const[j,R]=te(),F=t.useRef(null),[c,I]=t.useState(!1),V=t.useMemo(()=>oe*e,[]),Y=t.useMemo(()=>ie*e,[]),H=t.useMemo(()=>Math.floor((R.height-($+2*A)-l*e)/e)*e,[R.height,l]),d=t.useMemo(()=>Math.floor((R.height-($+2*A)-a*e)/e)*e,[R.height,a]),f=re(ne),S=t.useCallback(o=>{},[]),X=t.useMemo(()=>({bottom:s("div",{css:k,children:s(C,{css:T})})}),[]),q=t.useMemo(()=>({top:s("div",{css:k,children:s(C,{css:T})})}),[]),O=o=>{o.preventDefault(),o.stopPropagation(),h(_.setResizingNodeIDsReducer([`${W}-resize-modal-header`]))},J=t.useCallback((o,Z,ee,N)=>{const{height:E}=N;let i=Math.floor((a*e+E)/e);i*e>=H&&(i=Math.floor(H/e)),g({headerHeight:i}),h(_.setResizingNodeIDsReducer([]))},[h,g,a,H]),K=t.useCallback((o,Z,ee,N)=>{const{height:E}=N;let i=Math.floor((l*e+E)/e);i*e>d&&(i=Math.floor(d/e)),g({footerHeight:i}),h(_.setResizingNodeIDsReducer([]))},[h,l,d,g]),[{isDraggingActive:u},Q]=le(()=>({accept:["components"],collect:o=>({isDraggingActive:o.isOver()})}),[]);return v("div",{css:he,ref:o=>{Q(o),j(o),F.current=o},onMouseEnter:()=>{I(!0)},onMouseLeave:()=>{I(!1)},children:[U&&v(x,{size:{width:"100%",height:a*e},minHeight:V,maxHeight:H,handleComponent:c&&!u?X:void 0,enable:{bottom:f},onResizeStart:O,onResizeStop:J,children:[s("div",{css:L,children:s(b,{displayName:z[0],columnNumber:y,handleUpdateHeight:S})}),f&&c&&!u&&s("div",{css:B(!1,!0,!1)})]}),v("div",{css:ce,children:[s(b,{displayName:z[1],columnNumber:y,handleUpdateHeight:S}),f&&c&&!u&&s("div",{css:ae(!1,!0,!1)})]}),P&&v(x,{size:{width:"100%",height:l*e},minHeight:Y,maxHeight:d,handleComponent:c&&!u?q:void 0,enable:{top:f},onResizeStart:O,onResizeStop:K,children:[s("div",{css:L,children:s(b,{displayName:z[2],columnNumber:y,handleUpdateHeight:S})}),f&&c&&!u&&s("div",{css:B(!1,!0,!1,d)})]})]})};de.displayName="ModalWidget";export{de as ModalWidget,de as default};
//# sourceMappingURL=modal-a5e6e9ee.js.map

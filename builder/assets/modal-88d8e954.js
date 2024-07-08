import{l as r,m as n,b7 as te,k as s,o as v}from"./@illa-design-402f214a.js";import{R as x}from"./index-f466602f.js";import{r as t}from"./react-9b7e00e3.js";import{e as se,eC as oe,aH as e,eD as ie,eE as $,eF as A,b as re,b4 as ne,bf as _,ez as C,eA as ae}from"./index-2f1869ab.js";import{S as L}from"./resizeBar-214a8ecc.js";import{R as b}from"./index-c428eaa3.js";import{a as m}from"./@emotion-4f16718e.js";import{k as le}from"./renderComponentCanvasContainer-44ad78fe.js";import"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";import"./style-7ce959a8.js";import"./index-cf2bb556.js";import"./index-b8442d1a.js";const he=m`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`,B=m`
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
`,de=G=>{const{childrenNode:z,showFooter:P,showHeader:U,headerHeight:a,footerHeight:l,isVisible:p,columnNumber:D,displayName:W,handleUpdateOriginalDSLMultiAttr:g,triggerEventHandler:y}=G,w=t.useRef(),M=t.useRef(!1),h=se();t.useEffect(()=>(M.current=!0,()=>{M.current=!1}),[]),t.useEffect(()=>(p&&w.current!==p&&M.current&&(y("onOpenModal"),w.current=!0),()=>{p&&!M.current&&y("onCloseModal")}),[p,y]);const[j,R]=te(),F=t.useRef(null),[c,I]=t.useState(!1),V=t.useMemo(()=>oe*e,[]),Y=t.useMemo(()=>ie*e,[]),H=t.useMemo(()=>Math.floor((R.height-($+2*A)-l*e)/e)*e,[R.height,l]),d=t.useMemo(()=>Math.floor((R.height-($+2*A)-a*e)/e)*e,[R.height,a]),f=re(ne),S=t.useCallback(o=>{},[]),X=t.useMemo(()=>({bottom:s("div",{css:k,children:s(L,{css:T})})}),[]),q=t.useMemo(()=>({top:s("div",{css:k,children:s(L,{css:T})})}),[]),O=o=>{o.preventDefault(),o.stopPropagation(),h(_.setResizingNodeIDsReducer([`${W}-resize-modal-header`]))},J=t.useCallback((o,Z,ee,N)=>{const{height:E}=N;let i=Math.floor((a*e+E)/e);i*e>=H&&(i=Math.floor(H/e)),g({headerHeight:i}),h(_.setResizingNodeIDsReducer([]))},[h,g,a,H]),K=t.useCallback((o,Z,ee,N)=>{const{height:E}=N;let i=Math.floor((l*e+E)/e);i*e>d&&(i=Math.floor(d/e)),g({footerHeight:i}),h(_.setResizingNodeIDsReducer([]))},[h,l,d,g]),[{isDraggingActive:u},Q]=le(()=>({accept:["components"],collect:o=>({isDraggingActive:o.isOver()})}),[]);return v("div",{css:he,ref:o=>{Q(o),j(o),F.current=o},onMouseEnter:()=>{I(!0)},onMouseLeave:()=>{I(!1)},children:[U&&v(x,{size:{width:"100%",height:a*e},minHeight:V,maxHeight:H,handleComponent:c&&!u?X:void 0,enable:{bottom:f},onResizeStart:O,onResizeStop:J,children:[s("div",{css:B,children:s(b,{displayName:z[0],columnNumber:D,handleUpdateHeight:S})}),f&&c&&!u&&s("div",{css:C(!1,!0,!1)})]}),v("div",{css:ce,children:[s(b,{displayName:z[1],columnNumber:D,handleUpdateHeight:S}),f&&c&&!u&&s("div",{css:ae(!1,!0,!1)})]}),P&&v(x,{size:{width:"100%",height:l*e},minHeight:Y,maxHeight:d,handleComponent:c&&!u?q:void 0,enable:{top:f},onResizeStart:O,onResizeStop:K,children:[s("div",{css:B,children:s(b,{displayName:z[2],columnNumber:D,handleUpdateHeight:S})}),f&&c&&!u&&s("div",{css:C(!1,!0,!1,d)})]})]})};de.displayName="ModalWidget";export{de as ModalWidget,de as default};
//# sourceMappingURL=modal-88d8e954.js.map

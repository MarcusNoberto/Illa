import{k as t,b1 as w,b2 as P,L as z,Z as W,b3 as h}from"./@illa-design-1f43bb6c.js";import{r as b}from"./react-9b7e00e3.js";import{aj as C,ak as L,eV as D,eW as E,eX as O}from"./index-4dce6ee8.js";import{T as V}from"./index-99007076.js";import{a as s}from"./@emotion-08a6282b.js";import{T as j,a as N,b as B,c as F,d as G,e as U}from"./TableRow-dbb49295.js";import{T as y,P as X}from"./TableCell-49376b6a.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./clsx-06f54762.js";import"./objectWithoutPropertiesLoose-4f48578a.js";function Z(r){return s`
    width: 100%;
    display: flex;
    align-items: ${r};
  `}const _=(r,i=0,o=0)=>{switch(r){case"auto":return s`
        height: auto;
      `;case"limited":return s`
        min-height: ${i-6}px;
        height: auto;
        max-height: ${o-6}px;
      `;case"fixed":return s`
        height: 100%;
      `;default:return""}},q=(r,i,o)=>s`
    display: flex;
    width: 100%;
    position: relative;
    ${_(r,i,o)};
  `;function I(r){return s`
    width: 100%;
    text-align: ${r};
    overflow-wrap: break-word;
  `}const J=(r,i)=>s`
    width: 100%;
    font-weight: ${i??400};
    text-align: ${r};
    overflow-wrap: break-word;
  `,x=r=>{const{value:i,horizontalAlign:o,verticalAlign:m,colorScheme:a,fs:d,disableMarkdown:p,weight:n}=r,f={allowedTags:O};return t("div",{css:Z(m),children:p?t(w,{css:J(o,n),colorScheme:a,fs:d,children:i}):t(P,{w:"100%",c:a,children:t(C,{css:I(o),remarkPlugins:[L],rehypePlugins:[D,[E,f]],components:{a:({href:e,children:c})=>t(z,{href:e,target:"_blank",children:c}),code:({children:e})=>t(w,{code:!0,colorScheme:a,children:e}),p:({children:e})=>t(W,{colorScheme:a,children:e}),h1:({children:e})=>t(h,{level:"h1",colorScheme:a,children:e}),h2:({children:e})=>t(h,{level:"h2",colorScheme:a,children:e}),h3:({children:e})=>t(h,{level:"h3",colorScheme:a,children:e}),h4:({children:e})=>t(h,{level:"h4",colorScheme:a,children:e}),h5:({children:e})=>t(h,{level:"h5",colorScheme:a,children:e}),h6:({children:e})=>t(h,{level:"h6",colorScheme:a,children:e}),tr:({children:e})=>t(j,{children:e}),th:({children:e})=>t(y,{align:"center",children:e}),td:({children:e})=>t(y,{align:"left",children:e}),thead:({children:e})=>t(N,{children:e}),tbody:({children:e})=>t(B,{children:e}),tfoot:({children:e})=>t(F,{children:e}),table:({children:e})=>t(G,{component:X,children:t(U,{sx:{minWidth:650},children:e})})},children:i??""})})})};x.displayName="Text";const K=r=>{const{value:i,horizontalAlign:o,verticalAlign:m="start",handleUpdateDsl:a,updateComponentRuntimeProps:d,deleteComponentRuntimeProps:p,updateComponentHeight:n,disableMarkdown:f,tooltipText:e,dynamicHeight:c="fixed",dynamicMinHeight:T,dynamicMaxHeight:k,colorScheme:R,fs:H,fw:M,weight:S}=r;b.useEffect(()=>(d({setValue:l=>{a({value:l})},clearValue:()=>{a({value:void 0})}}),()=>{p()}),[p,a,d]);const g=c!=="fixed"&&c!=null,v=b.useRef(null);return b.useLayoutEffect(()=>{const l=v.current,u=new ResizeObserver($=>{if(!n)return;const A=$[0].contentRect.height;n==null||n(A)});return u&&l&&g&&(u.unobserve(l),u.observe(l)),()=>{l&&g&&u.unobserve(l)}},[g,n]),t(V,{tooltipText:e,tooltipDisabled:!e,children:t("div",{ref:v,css:q(c,T,k),children:t(x,{weight:S,horizontalAlign:o,value:i,verticalAlign:m,colorScheme:R,fs:H,fw:M,disableMarkdown:f})})})};K.displayName="TextWidget";export{x as Text,K as TextWidget,K as default};
//# sourceMappingURL=text-39c5a4b2.js.map

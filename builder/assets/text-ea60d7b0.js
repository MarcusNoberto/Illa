import{k as t,b0 as w,b1 as P,L as z,Z as W,b2 as h}from"./@illa-design-402f214a.js";import{r as b}from"./react-9b7e00e3.js";import{aj as C,ak as L,eW as D,eX as E,eY as O}from"./index-2f1869ab.js";import{T as j}from"./index-5f69abbc.js";import{a as s}from"./@emotion-4f16718e.js";import{T as N,a as V,b as B,c as F,d as G,e as U}from"./TableRow-693549d7.js";import{T as y,P as X}from"./TableCell-3d674201.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./objectWithoutPropertiesLoose-24430c43.js";import"./clsx-85d7d0af.js";function Y(r){return s`
    width: 100%;
    display: flex;
    align-items: ${r};
  `}const Z=(r,i=0,o=0)=>{switch(r){case"auto":return s`
        height: auto;
      `;case"limited":return s`
        min-height: ${i-6}px;
        height: auto;
        max-height: ${o-6}px;
      `;case"fixed":return s`
        height: 100%;
      `;default:return""}},_=(r,i,o)=>s`
    display: flex;
    width: 100%;
    position: relative;
    ${Z(r,i,o)};
  `;function q(r){return s`
    width: 100%;
    text-align: ${r};
    overflow-wrap: break-word;
  `}const I=(r,i)=>s`
    width: 100%;
    font-weight: ${i??400};
    text-align: ${r};
    overflow-wrap: break-word;
  `,x=r=>{const{value:i,horizontalAlign:o,verticalAlign:m,colorScheme:a,fs:d,disableMarkdown:p,weight:n}=r,f={allowedTags:O};return t("div",{css:Y(m),children:p?t(w,{css:I(o,n),colorScheme:a,fs:d,children:i}):t(P,{w:"100%",c:a,children:t(C,{css:q(o),remarkPlugins:[L],rehypePlugins:[D,[E,f]],components:{a:({href:e,children:c})=>t(z,{href:e,target:"_blank",children:c}),code:({children:e})=>t(w,{code:!0,colorScheme:a,children:e}),p:({children:e})=>t(W,{colorScheme:a,children:e}),h1:({children:e})=>t(h,{level:"h1",colorScheme:a,children:e}),h2:({children:e})=>t(h,{level:"h2",colorScheme:a,children:e}),h3:({children:e})=>t(h,{level:"h3",colorScheme:a,children:e}),h4:({children:e})=>t(h,{level:"h4",colorScheme:a,children:e}),h5:({children:e})=>t(h,{level:"h5",colorScheme:a,children:e}),h6:({children:e})=>t(h,{level:"h6",colorScheme:a,children:e}),tr:({children:e})=>t(N,{children:e}),th:({children:e})=>t(y,{align:"center",children:e}),td:({children:e})=>t(y,{align:"left",children:e}),thead:({children:e})=>t(V,{children:e}),tbody:({children:e})=>t(B,{children:e}),tfoot:({children:e})=>t(F,{children:e}),table:({children:e})=>t(G,{component:X,children:t(U,{sx:{minWidth:650},children:e})})},children:i??""})})})};x.displayName="Text";const J=r=>{const{value:i,horizontalAlign:o,verticalAlign:m="start",handleUpdateDsl:a,updateComponentRuntimeProps:d,deleteComponentRuntimeProps:p,updateComponentHeight:n,disableMarkdown:f,tooltipText:e,dynamicHeight:c="fixed",dynamicMinHeight:T,dynamicMaxHeight:k,colorScheme:R,fs:H,fw:M,weight:S}=r;b.useEffect(()=>(d({setValue:l=>{a({value:l})},clearValue:()=>{a({value:void 0})}}),()=>{p()}),[p,a,d]);const g=c!=="fixed"&&c!=null,v=b.useRef(null);return b.useLayoutEffect(()=>{const l=v.current,u=new ResizeObserver($=>{if(!n)return;const A=$[0].contentRect.height;n==null||n(A)});return u&&l&&g&&(u.unobserve(l),u.observe(l)),()=>{l&&g&&u.unobserve(l)}},[g,n]),t(j,{tooltipText:e,tooltipDisabled:!e,children:t("div",{ref:v,css:_(c,T,k),children:t(x,{weight:S,horizontalAlign:o,value:i,verticalAlign:m,colorScheme:R,fs:H,fw:M,disableMarkdown:f})})})};J.displayName="TextWidget";export{x as Text,J as TextWidget,J as default};
//# sourceMappingURL=text-ea60d7b0.js.map

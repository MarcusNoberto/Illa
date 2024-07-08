import{o as b,k as n,S as k}from"./@illa-design-402f214a.js";import{b as w,cj as J,dO as L,dx as D,ha as E,hb as O}from"./index-2f1869ab.js";import{r as c}from"./react-9b7e00e3.js";import{C as j,a as A,b as I}from"./index-9dcf4ab8.js";import{D as W}from"./index-388caa78.js";import{P as F}from"./index-323e87cb.js";import{a as u}from"./@emotion-4f16718e.js";import{g as d,b as m}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";const H=u`
  display: flex;
  padding: 8px 0;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,_=u`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,B=u`
  width: 100%;
`,G=$=>{const{placeholder:f,attrName:r,handleUpdateDsl:a,expectedType:N,value:o,widgetDisplayName:t,labelName:S,detailedDescription:v,defaultValue:i,labelDesc:h,options:M,wrappedCodeFunc:C}=$,x=w(e=>{const s=J(e);return d(s,t,{})}),l=d(x,`${t}.${r}JS`,"select")==="dynamic",g=w(L),P=c.useMemo(()=>{var e;return((e=g[`${t}.${r}JS`]??[])==null?void 0:e.length)>0},[r,g,t]),R=c.useCallback(()=>{l?(a(`${t}.${r}JS`,"select"),a(r,void 0)):a(`${t}.${r}JS`,"dynamic")},[r,a,l,t]),p=d(x,"dataSourceMode","dynamic"),T=c.useMemo(()=>D(o??"")&&m(o)&&(o!=null&&o.includes("currentRow"))?e=>E(e,t,p):C,[o,C,t,p]),y=c.useMemo(()=>{const e=o??i;if(t&&m(e)&&e.includes("currentRow"))return O(o??i,t);if(!(o===void 0&&i===void 0))return m(o??i)?o??i:`{{ ${o??i} }}`},[t,o,i]),V=c.useCallback(e=>{let s=e;D(e??"")&&e.includes("currentRow")?(s=E(e,t,p),a(r,s)):s===""?a(r,void 0):a(r,s)},[r,p,a,t]);return b("div",{css:H,children:[b("div",{css:_,children:[n(F,{labelName:S,labelDesc:h}),n(W,{isDynamic:l,onClick:R,hasRightContent:!1})]}),n("div",{css:B,children:l?n(j,{value:y??"",onChange:V,showLineNumbers:!1,placeholder:f,expectValueType:N,lang:A.JAVASCRIPT,maxHeight:"208px",minHeight:"30px",maxWidth:"100%",codeType:I.EXPRESSION,modalTitle:S,modalDescription:h??v,scopeOfAutoComplete:"page",wrappedCodeFunc:T}):n(k,{colorScheme:"techPurple",placeholder:f,options:M,value:y,onChange:e=>a==null?void 0:a(r,e),showSearch:!0,allowClear:!0,error:P})})]})};G.displayName="ColumnMappedSelect";export{G as default};
//# sourceMappingURL=index-a906e50a.js.map

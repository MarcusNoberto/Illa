import{o as w,k as n,S as k}from"./@illa-design-1f43bb6c.js";import{b as D,ci as J,dN as L,dw as E,h9 as b,ha as A}from"./index-4dce6ee8.js";import{r as c}from"./react-9b7e00e3.js";import{C as I,a as O,b as W}from"./index-03ca7e7b.js";import{D as j}from"./index-8df6bc42.js";import{P as F}from"./index-934389e2.js";import{a as u}from"./@emotion-08a6282b.js";import{g as d,b as m}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";const H=u`
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
`,G=N=>{const{placeholder:f,attrName:r,handleUpdateDsl:a,expectedType:$,value:o,widgetDisplayName:t,labelName:S,detailedDescription:v,defaultValue:i,labelDesc:h,options:M,wrappedCodeFunc:C}=N,g=D(e=>{const s=J(e);return d(s,t,{})}),l=d(g,`${t}.${r}JS`,"select")==="dynamic",x=D(L),P=c.useMemo(()=>{var e;return((e=x[`${t}.${r}JS`]??[])==null?void 0:e.length)>0},[r,x,t]),R=c.useCallback(()=>{l?(a(`${t}.${r}JS`,"select"),a(r,void 0)):a(`${t}.${r}JS`,"dynamic")},[r,a,l,t]),p=d(g,"dataSourceMode","dynamic"),T=c.useMemo(()=>E(o??"")&&m(o)&&(o!=null&&o.includes("currentRow"))?e=>b(e,t,p):C,[o,C,t,p]),y=c.useMemo(()=>{const e=o??i;if(t&&m(e)&&e.includes("currentRow"))return A(o??i,t);if(!(o===void 0&&i===void 0))return m(o??i)?o??i:`{{ ${o??i} }}`},[t,o,i]),V=c.useCallback(e=>{let s=e;E(e??"")&&e.includes("currentRow")?(s=b(e,t,p),a(r,s)):s===""?a(r,void 0):a(r,s)},[r,p,a,t]);return w("div",{css:H,children:[w("div",{css:_,children:[n(F,{labelName:S,labelDesc:h}),n(j,{isDynamic:l,onClick:R,hasRightContent:!1})]}),n("div",{css:B,children:l?n(I,{value:y??"",onChange:V,showLineNumbers:!1,placeholder:f,expectValueType:$,lang:O.JAVASCRIPT,maxHeight:"208px",minHeight:"30px",maxWidth:"100%",codeType:W.EXPRESSION,modalTitle:S,modalDescription:h??v,scopeOfAutoComplete:"page",wrappedCodeFunc:T}):n(k,{colorScheme:"techPurple",placeholder:f,options:M,value:y,onChange:e=>a==null?void 0:a(r,e),showSearch:!0,allowClear:!0,error:P})})]})};G.displayName="ColumnMappedSelect";export{G as default};
//# sourceMappingURL=index-35652f1d.js.map

import{o as L,k as s,B as T,a2 as E}from"./@illa-design-1f43bb6c.js";import{u as b,b as w,dd as V,h2 as k,dw as A,cP as m,a as d,eH as O,h3 as P}from"./index-4dce6ee8.js";import{R as W}from"./index-3fd30822.js";import{r as o,L as B}from"./react-9b7e00e3.js";import{a as R,b as U,C as j}from"./index-03ca7e7b.js";import{r as M,g as v}from"./util-386d549a.js";import{a as u}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";const F=u`
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,H=u`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,Y=h=>{const{className:f,placeholder:C,attrName:a,handleUpdateDsl:p,value:n,widgetDisplayName:c,labelName:N,detailedDescription:g,labelDesc:I,widgetType:i}=h,{t:y}=b(),l=w(V),r=o.useMemo(()=>{const e=Object.keys(l);for(let t=0;t<e.length;t++)if(l[e[t]].includes(c))return e[t];return""},[l,c]),_=o.useMemo(()=>{let e=n;return r&&(e=M(n,r)),k(e,!0)},[r,n]),x=o.useCallback(e=>{let t=e;r&&A(e??"")&&e.includes("currentItem")&&(t=v(e,r)),t=P(t,!0),p(a,t)},[a,r,p]),S=o.useCallback(()=>{m(d.FOCUS,{element:"component_inspect_code_mirror",parameter1:i,parameter2:a})},[a,i]),D=o.useCallback(e=>{m(d.BLUR,{element:"component_inspect_code_mirror",parameter1:i,parameter2:a,parameter3:e.length})},[a,i]);return L("div",{css:F,children:[s("div",{css:H,children:s(B,{to:W,target:"_blank",children:s(T,{leftIcon:s(E,{}),colorScheme:"grayBlue",variant:"text",size:"small",children:y("editor.inspect.header.action_menu.view_documentation")})})}),s(j,{scopeOfAutoComplete:"page",className:f,value:_,onChange:x,showLineNumbers:!1,placeholder:C,expectValueType:O.STRING,lang:R.JAVASCRIPT,maxHeight:"208px",minHeight:"120px",maxWidth:"100%",codeType:U.FUNCTION,modalTitle:N,canShowCompleteInfo:!0,modalDescription:g??I,onFocus:S,onBlur:D})]})};Y.displayName="BaseInput";export{Y as default};
//# sourceMappingURL=index-fe17f705.js.map

import{o as L,k as s,B as T,a2 as E}from"./@illa-design-402f214a.js";import{u as b,b as V,de as k,h3 as w,dx as A,cQ as m,a as d,eI as O,h4 as W}from"./index-2f1869ab.js";import{R as B}from"./index-278fcfb2.js";import{r as o,L as P}from"./react-9b7e00e3.js";import{a as R,b as U,C as j}from"./index-9dcf4ab8.js";import{r as M,g as v}from"./util-302f4200.js";import{a as u}from"./@emotion-4f16718e.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";const F=u`
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Y=u`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,G=h=>{const{className:f,placeholder:C,attrName:a,handleUpdateDsl:p,value:n,widgetDisplayName:c,labelName:N,detailedDescription:g,labelDesc:I,widgetType:i}=h,{t:y}=b(),l=V(k),r=o.useMemo(()=>{const e=Object.keys(l);for(let t=0;t<e.length;t++)if(l[e[t]].includes(c))return e[t];return""},[l,c]),_=o.useMemo(()=>{let e=n;return r&&(e=M(n,r)),w(e,!0)},[r,n]),x=o.useCallback(e=>{let t=e;r&&A(e??"")&&e.includes("currentItem")&&(t=v(e,r)),t=W(t,!0),p(a,t)},[a,r,p]),S=o.useCallback(()=>{m(d.FOCUS,{element:"component_inspect_code_mirror",parameter1:i,parameter2:a})},[a,i]),D=o.useCallback(e=>{m(d.BLUR,{element:"component_inspect_code_mirror",parameter1:i,parameter2:a,parameter3:e.length})},[a,i]);return L("div",{css:F,children:[s("div",{css:Y,children:s(P,{to:B,target:"_blank",children:s(T,{leftIcon:s(E,{}),colorScheme:"grayBlue",variant:"text",size:"small",children:y("editor.inspect.header.action_menu.view_documentation")})})}),s(j,{scopeOfAutoComplete:"page",className:f,value:_,onChange:x,showLineNumbers:!1,placeholder:C,expectValueType:O.STRING,lang:R.JAVASCRIPT,maxHeight:"208px",minHeight:"120px",maxWidth:"100%",codeType:U.FUNCTION,modalTitle:N,canShowCompleteInfo:!0,modalDescription:g??I,onFocus:S,onBlur:D})]})};G.displayName="BaseInput";export{G as default};
//# sourceMappingURL=index-ea2ea0cf.js.map

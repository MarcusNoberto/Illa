import{n as h,k as e,aZ as Y,aE as L,b5 as Z,I as D,o as w,bg as J,F as z,S as O,bd as Q,aY as U}from"./@illa-design-402f214a.js";import{r as v}from"./react-9b7e00e3.js";import{gK as d}from"./index-2f1869ab.js";import{a as t}from"./@emotion-4f16718e.js";function X(g){return g?t`
      display: flex;
      width: 100%;
      flex-direction: row;
      padding-left: 24px;
    `:t`
      display: flex;
      min-height: 48px;
      align-items: center;
      flex-direction: row;
      padding-left: 24px;
    `}const j=t`
  font-size: 14px;
  color: ${h("grayBlue","02")};
  margin-left: 8px;
`,_=t`
  font-size: 14px;
  color: ${h("grayBlue","04")};
  font-weight: 400;
  margin-left: 192px;
  padding: 0 24px 8px 24px;
  line-height: 22px;
  min-height: 30px;
  white-space: normal;
`,V=t`
  display: flex;
  flex-direction: row;
  justify-content: end;
  min-width: 176px;
  width: 176px;
`;function F(g,y){let s=t``;return y&&(s=t`
      margin-left: 4px;
    `),t`
    font-size: 14px;
    color: ${g};
    font-weight: 500;
    ${s};
  `}const ee=t`
  display: flex;
  margin-left: 16px;
  margin-right: 24px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 8px;
`,te=g=>{const{title:y,contentLabel:s,isRequired:q=!1,defaultValue:S,placeholders:K=[],styles:N=[],name:C,tips:P,controlledType:$,control:l,error:T,options:b=[],rules:R=[],tipsStyle:A,allowClear:B=!1,forceEqualWidth:k,labelStyle:E,onValueChange:a}=g,I=(Array.isArray($)?$:[$]).filter(u=>u.trim()&&u!=="none"),G=Array.isArray(C)?C:[C],H=Array.isArray(S)?S:[S],M=I.includes("textarea"),W=v.useCallback((u,o,c,m,p,f={})=>{switch(u){case"input":return e(d,{control:l,defaultValue:c,rules:p,render:({field:{value:r,onChange:i,onBlur:n}})=>e(U,{w:"100%",...f,onBlur:n,onChange:i,value:r,error:T,colorScheme:"techPurple",placeholder:m}),name:o});case"checkbox":return w(z,{children:[e(d,{control:l,defaultValue:c,rules:p,render:({field:{value:r,onChange:i,onBlur:n}})=>e(Q,{...f,onBlur:n,onChange:x=>{i(x),a==null||a(x)},checked:r,colorScheme:"techPurple",placeholder:m}),name:o}),e("span",{css:j,children:s})]});case"select":return e(d,{control:l,defaultValue:c,rules:p,render:({field:{value:r,onChange:i,onBlur:n}})=>e(O,{value:r,onBlur:n,allowClear:B,onChange:x=>{a==null||a(x),i(x)},colorScheme:"techPurple",options:b}),name:o});case"switch":return w(z,{children:[e(d,{control:l,defaultValue:c,rules:p,render:({field:{value:r,onChange:i,onBlur:n}})=>e(J,{checked:r,colorScheme:"techPurple",onChange:x=>{i(x),a==null||a(x)},onBlur:n,...f}),name:o}),e("span",{css:j,children:s})]});case"number":return e(d,{control:l,defaultValue:c,rules:p,render:({field:{value:r,onChange:i,onBlur:n}})=>e(D,{onBlur:n,onChange:i,value:r,colorScheme:"techPurple",w:"100%",placeholder:m,...f}),name:o});case"password":return e(d,{control:l,defaultValue:c,rules:p,render:({field:{value:r,onChange:i,onBlur:n}})=>e(Z,{autoComplete:"new-password",colorScheme:"techPurple",w:"100%",onBlur:n,onChange:i,value:r,placeholder:m,...f}),name:o});case"radio":return e(d,{control:l,defaultValue:c,rules:p,render:({field:{value:r,onChange:i,onBlur:n}})=>e(L,{colorScheme:"techPurple",w:"100%",type:"radio",onBlur:n,onChange:i,value:r,placeholder:m,options:b,...f}),name:o});case"radio-group":return e(d,{control:l,defaultValue:c,rules:p,render:({field:{value:r,onChange:i,onBlur:n}})=>e(L,{colorScheme:"gray",w:"100%",type:"button",onBlur:n,onChange:i,value:r,placeholder:m,forceEqualWidth:k,options:b,...f}),name:o});case"textarea":return e(d,{control:l,defaultValue:c,rules:p,render:({field:{value:r,onChange:i,onBlur:n}})=>e(Y,{w:"100%",h:"100%",pb:"16px",minH:"240px",colorScheme:"techPurple",onBlur:n,onChange:i,value:r,autoSize:!1,placeholder:m,...f}),name:o})}},[B,s,l,T,k,a,b]);return w(z,{children:[!!I.length&&w("div",{css:X(M),children:[w("div",{css:E||V,children:[q&&e("span",{css:F(h("red","03")),children:"*"}),e("span",{css:F(h("grayBlue","02")),children:y})]}),e("div",{css:ee,children:I.map((u,o)=>e(v.Fragment,{children:W(u,G[o],H[o],K[o],R[o],N[o])},o))})]}),P&&e("div",{css:A||_,children:P})]})};te.displayName="ControlledElement";const le=t`
  width: 100%;
  overflow: auto;
  max-height: 656px;
`;function ae(g,y){let s=t``;return y&&(s=t`
      margin-left: 4px;
    `),t`
    font-size: 14px;
    color: ${g};
    font-weight: 500;
    ${s};
  `}const se=t`
  font-size: 14px;
  font-weight: 400;
  margin-left: 192px;
  padding-bottom: 8px;
  line-height: 22px;
  padding-left: 24px;
  color: ${h("grayBlue","04")};
`;t`
  display: flex;
  height: 38px;
  align-items: center;
  padding-left: 24px;
`;t`
  font-size: 14px;
  height: 22px;
  display: flex;
  align-items: center;
  color: ${h("grayBlue","02")};
  margin-left: 16px;
`;const ce=t`
  display: flex;
  justify-content: end;
  min-width: 176px;
`,pe=t`
  height: 38px;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 24px;
  color: ${h("grayBlue","04")};
  align-items: center;
`,de=t`
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  line-height: 22px;
  color: ${h("orange","03")};
`,fe=t`
  position: absolute;
  font-size: 16px;
  line-height: 0;
  top: 3px;
  left: 0;
`,xe=t`
  display: flex;
  width: 100%;
  padding-top: 8px;
  padding-left: 24px;
  align-items: flex-start;
`,he=t`
  display: flex;
  height: 48px;
  align-items: center;
  flex-direction: row;
  padding-left: 24px;
`;export{te as C,fe as a,ae as b,le as c,se as d,de as e,he as f,ee as h,ce as l,pe as o,xe as p};
//# sourceMappingURL=style-8475474f.js.map

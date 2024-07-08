import{n as x,o as l,k as t,bh as E,F as $,be as P,S as v,aE as F}from"./@illa-design-1f43bb6c.js";import{r as d}from"./react-9b7e00e3.js";import{a as i}from"./@emotion-08a6282b.js";const q=i`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  padding: 0 16px;
`,A=i`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 30px;
  padding: 0 16px;
`,G=r=>["checkbox","switch"].includes(r)?i`
      ${A};
      width: 100%;
    `:i`
    ${q};
    width: 100%;
  `,L=i`
  min-width: 160px;
  width: 160px;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  color: ${x("grayBlue","02")};
  line-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`,j=i`
  min-width: 160px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  text-align: left;
  color: ${x("grayBlue","02")};
`,M=i`
  min-height: 22px;
  align-self: flex-start;
  display: flex;
  align-items: center;
`,N=i`
  display: inline-block;
  line-height: 22px;
  font-size: 14px;
  text-align: right;
  color: ${x("grayBlue","04")};
`,O=i`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;
  width: 100%;
`,R=r=>{const{componentType:a,title:I,onChange:e,value:c,options:m,checkoutTitle:g,switchContent:f,onSelectedValueChange:o,onBooleanValueChange:s,placeholder:y,showSearch:u=!1,tips:h,radioOptions:w,forceEqualWidth:S,type:k,loading:b,error:C,style:z={}}=r,T=d.useCallback(n=>{n!==void 0&&(e==null||e(n),typeof n!="boolean"&&(o==null||o(n)))},[e,o]),p=d.useCallback(n=>{e==null||e(n),s==null||s(n)},[s,e]),B=d.useMemo(()=>{switch(a){case"radio-group":return t(F,{w:"100%",colorScheme:"gray",ml:"16px",type:k,forceEqualWidth:S,onChange:e,value:c,options:w});case"select":return t(v,{w:"100%",colorScheme:"techPurple",ml:"16px",loading:b,error:C,showSearch:u,onChange:T,value:c,options:m,placeholder:y});case"checkbox":return l("div",{css:O,children:[l("div",{css:M,children:[t(P,{colorScheme:"techPurple",checked:!!c,ml:"16px",onChange:p}),t("span",{css:j,children:g})]}),h&&t("div",{css:N,children:h})]});case"switch":return l($,{children:[t(E,{colorScheme:"techPurple",checked:!!c,ml:"16px",onChange:p}),t("span",{css:j,children:f})]})}},[g,a,C,S,p,T,b,e,m,y,w,u,f,h,k,c]);return l("div",{css:G(a),style:z,children:[t("span",{css:L,children:I}),t($,{children:B})]})};R.displayName="SingleTypeComponent";export{R as S};
//# sourceMappingURL=index-01ad6233.js.map

import{n as s,o as r,k as e,bP as b,F as m}from"./@illa-design-1f43bb6c.js";import{r as E}from"./react-9b7e00e3.js";import{a as v,C as N}from"./index-03ca7e7b.js";import{eH as A}from"./index-4dce6ee8.js";import{S as L}from"./index-b9f5fd51.js";import{a as t}from"./@emotion-08a6282b.js";const P=t`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  padding: 0 16px;
`,M=t`
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 16px;
  flex-grow: 1;
  width: 0;
`,$=t`
  min-width: 160px;
  width: 160px;
  line-height: 22px;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  color: ${s("grayBlue","02")};
  min-height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: center;
`,j=t`
  color: ${s("techPurple","03")};
  cursor: pointer;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
`,k=t`
  font-size: 14px;
  margin-left: 192px;
  white-space: pre-line;
  min-height: 30px;
  padding-bottom: 8px;
  display: flex;
  align-items: stretch;
  color: ${s("grayBlue","04")};
`,z=o=>t`
  margin-left: ${o?"192px":"32px"};
  margin-top: 0;
  margin-right: 16px;
`,V=o=>{const{title:i,onChange:x,expectedType:g=A.STRING,value:l,tips:p,showSafeModeTips:f,subtitle:n,handleSubtitleClick:a,placeholder:y,style:u={},mode:S=v.JAVASCRIPT,lineNumbers:c=!1,sqlScheme:w,canShowCompleteInfo:C,popoverContent:d,codeType:T,hasExpectedType:I=!0}=o,h=E.useMemo(()=>r("span",{css:$,children:[e("span",{children:i}),n&&e("span",{css:j,onClick:a,children:n})]}),[a,n,i]);return r("div",{style:{width:"100%"},children:[r("div",{css:P,children:[i&&e(m,{children:d?e(b,{content:d,hasCloseIcon:!1,trigger:"hover",colorScheme:"gray",showArrow:!1,children:h}):e(m,{children:h})}),e(N,{...u,singleLine:!c,showLineNumbers:c,wrapperCss:M,lang:S,value:l,sqlScheme:w,onChange:x,expectValueType:I?g:void 0,placeholder:y,modalTitle:i,codeType:T,canShowCompleteInfo:C})]}),p&&e("div",{css:k,children:e("span",{children:p})}),f&&e(L,{value:l,_css:z(!!i)})]})};V.displayName="InputEditor";export{V as I};
//# sourceMappingURL=index-2c4267bb.js.map

import{n as t,o as a,bp as h,k as e,cw as f,C as m}from"./@illa-design-402f214a.js";import{u,b as y,fw as S,dx as w}from"./index-2f1869ab.js";import{r as c}from"./react-9b7e00e3.js";import{k as C}from"./index-e89bb2f6.js";import{a as o}from"./@emotion-4f16718e.js";const T=o`
  padding: 16px;
  margin-top: 8px;
  border-radius: 4px;
  gap: 8px;
  background-color: ${t("orange","08")};
`,b=o`
  display: flex;
  align-items: center;
  gap: 8px;
`,k=o`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${t("orange","03")};
`,I=o`
  color: ${t("grayBlue","02")};
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,M=o`
  display: flex;
  width: 24px;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`,j=o`
  display: flex;
  padding-left: 24px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  color: ${t("grayBlue","04")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`,A=({value:l,...p})=>{const{t:i}=u(),{showSQLModeTip:d,setShowSQLModeTip:x}=c.useContext(C),r=y(S)??{},n=w(l),s=d[r.actionID],g=()=>{x(r.actionID,!1)};return c.useMemo(()=>n&&s===void 0?!0:n&&s,[s,n])?a("div",{css:[T,h(p)],children:[a("div",{css:b,children:[e("span",{css:k,children:e(f,{color:t("white","01"),size:"16px"})}),e("span",{css:I,children:i("editor.action.panel.label.tips.title.safe_mode")}),e("span",{css:M,onClick:g,children:e(m,{color:t("orange","03"),size:"8px"})})]}),e("div",{css:j,children:i("editor.action.panel.label.tips.desc.safe_mode")})]}):null};export{A as S};
//# sourceMappingURL=index-5fb9a68f.js.map

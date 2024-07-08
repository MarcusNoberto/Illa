import{o as s,k as r,F as f,a7 as x,a_ as k,n as v}from"./@illa-design-1f43bb6c.js";import{d4 as y,u as N,_ as c}from"./index-4dce6ee8.js";import{S as u}from"./border-8605a960.js";import{P as w}from"./index-934389e2.js";import B from"./index-cbc543fd.js";import _ from"./index-b1619bf7.js";import{a as p}from"./@emotion-08a6282b.js";import"./react-9b7e00e3.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-548954d1.js";import"./objectWithoutPropertiesLoose-e3246981.js";const g=p`
  padding: 0px 16px;
  width: 100%;
`,S=p`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`,K=m=>{var n,l;const{handleUpdateMultiAttrDSL:o,widgetDisplayName:b}=m,e=y(b),i=(n=e==null?void 0:e.props)==null?void 0:n.borderWidth,a=(l=e==null?void 0:e.props)==null?void 0:l.borderColor,d=!!i&&!!a,{t}=N(),h=()=>{o==null||o({borderWidth:"1px",borderColor:v("white","01")})},C=()=>{o==null||o({borderWidth:void 0,borderColor:void 0})};return s("div",{css:g,children:[s("div",{css:S,children:[r(w,{labelName:t("editor.inspect.setter_label.border")}),d?r(c,{onClick:C,children:r(x,{})}):r(c,{onClick:h,children:r(k,{})})]}),d&&s(f,{children:[r(B,{labelName:t("editor.inspect.setter_group.color"),value:a,attrName:"borderColor",handleUpdateMultiAttrDSL:o}),r(_,{labelName:t("editor.inspect.setter_label.border_width"),value:i,attrName:"borderWidth",handleUpdateMultiAttrDSL:o,icon:r(u,{})})]})]})};export{K as default};
//# sourceMappingURL=index-a99ffe8e.js.map

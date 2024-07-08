import{o as i,k as e,F as b,a7 as f,a_ as x,n as k}from"./@illa-design-1f43bb6c.js";import{d4 as v,u as y,_ as m}from"./index-4dce6ee8.js";import{S as N}from"./border-8605a960.js";import{P as u}from"./index-934389e2.js";import w from"./index-cbc543fd.js";import _ from"./index-b1619bf7.js";import{a as c}from"./@emotion-08a6282b.js";import"./react-9b7e00e3.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-548954d1.js";import"./objectWithoutPropertiesLoose-e3246981.js";const g=c`
  padding: 0px 16px;
  width: 100%;
`,I=c`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`,K=p=>{var n,l;const{handleUpdateMultiAttrDSL:o,widgetDisplayName:h}=p,r=v(h),s=(n=r==null?void 0:r.props)==null?void 0:n.itemBorderWidth,a=(l=r==null?void 0:r.props)==null?void 0:l.itemBorderColor,d=!!s&&!!a,{t}=y(),B=()=>{o==null||o({itemBorderWidth:"1px",itemBorderColor:k("white","01")})},C=()=>{o==null||o({itemBorderWidth:void 0,itemBorderColor:void 0})};return i("div",{css:g,children:[i("div",{css:I,children:[e(u,{labelName:t("editor.inspect.setter_label.border")}),d?e(m,{onClick:C,children:e(f,{})}):e(m,{onClick:B,children:e(x,{})})]}),d&&i(b,{children:[e(w,{labelName:t("editor.inspect.setter_group.color"),value:a,attrName:"itemBorderColor",handleUpdateMultiAttrDSL:o}),e(_,{labelName:t("editor.inspect.setter_label.border_width"),value:s,attrName:"itemBorderWidth",handleUpdateMultiAttrDSL:o,icon:e(N,{})})]})]})};export{K as default};
//# sourceMappingURL=index-6dcfe36e.js.map

import{o as i,k as e,F as b,a7 as f,a_ as x,n as k}from"./@illa-design-402f214a.js";import{d5 as v,u as y,_ as m}from"./index-2f1869ab.js";import{S as N}from"./border-8605a960.js";import{P as u}from"./index-323e87cb.js";import w from"./index-13b8d0ce.js";import _ from"./index-8086d5cc.js";import{a as c}from"./@emotion-4f16718e.js";import"./react-9b7e00e3.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-0e67f358.js";import"./objectWithoutPropertiesLoose-4f48578a.js";const g=c`
  padding: 0px 16px;
  width: 100%;
`,I=c`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`,K=p=>{var n,l;const{handleUpdateMultiAttrDSL:o,widgetDisplayName:h}=p,r=v(h),s=(n=r==null?void 0:r.props)==null?void 0:n.itemBorderWidth,a=(l=r==null?void 0:r.props)==null?void 0:l.itemBorderColor,d=!!s&&!!a,{t}=y(),B=()=>{o==null||o({itemBorderWidth:"1px",itemBorderColor:k("white","01")})},C=()=>{o==null||o({itemBorderWidth:void 0,itemBorderColor:void 0})};return i("div",{css:g,children:[i("div",{css:I,children:[e(u,{labelName:t("editor.inspect.setter_label.border")}),d?e(m,{onClick:C,children:e(f,{})}):e(m,{onClick:B,children:e(x,{})})]}),d&&i(b,{children:[e(w,{labelName:t("editor.inspect.setter_group.color"),value:a,attrName:"itemBorderColor",handleUpdateMultiAttrDSL:o}),e(_,{labelName:t("editor.inspect.setter_label.border_width"),value:s,attrName:"itemBorderWidth",handleUpdateMultiAttrDSL:o,icon:e(N,{})})]})]})};export{K as default};
//# sourceMappingURL=index-b5892731.js.map

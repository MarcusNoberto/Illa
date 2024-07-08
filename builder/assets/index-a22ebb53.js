import{k as o,o as u,S as d}from"./@illa-design-1f43bb6c.js";import{P as f}from"./index-934389e2.js";import{a as l}from"./@emotion-08a6282b.js";import{u as S}from"./index-4dce6ee8.js";import{b}from"./lodash-lib-6e94956b.js";import"./react-9b7e00e3.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";const h=l`
  width: 100%;
  overflow: hidden;
`,v=l`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  width: 100%;
`,w=r=>{const{attrName:i,handleUpdateMultiAttrDSL:t,value:n,defaultValue:m,labelName:p,useCustomLayout:s,options:a}=r,{t:c}=S();return o("div",{css:h,children:u("div",{css:v,children:[o(f,{labelName:p,labelSize:s?"small":"medium"}),o(d,{defaultValue:m,onChange:e=>{t==null||t({[i]:e})},value:n,dropdownProps:{position:"top"},w:s?"170px":"182px",colorScheme:"techPurple",options:a==null?void 0:a.map(e=>({label:b(e.label)?c(e.label):e.value,value:e.value}))})]})})};w.displayName="CustomBgSelect";export{w as default};
//# sourceMappingURL=index-a22ebb53.js.map

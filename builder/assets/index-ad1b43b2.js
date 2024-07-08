import{o as c,k as s,S}from"./@illa-design-402f214a.js";import{r as f}from"./react-9b7e00e3.js";import{P as b}from"./index-323e87cb.js";import g from"./index-13b8d0ce.js";import{a as m}from"./@emotion-4f16718e.js";import{u as h}from"./index-2f1869ab.js";import"./index-0e67f358.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";const x=m`
  width: 100%;
  overflow: hidden;
`,v=m`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  width: 100%;
`,w=n=>{const{attrName:a,handleUpdateMultiAttrDSL:e,value:l,labelName:p,useCustomLayout:t}=n,{t:o}=h(),u=[{label:o("editor.inspect.setter_group.custom_bg.options.auto"),value:"auto"},{label:o("editor.inspect.setter_group.custom_bg.options.custom"),value:"custom"}],[r,d]=f.useState(l?"custom":"auto");return c("div",{css:x,children:[c("div",{css:v,children:[s(b,{labelName:p,labelSize:t?"small":"medium"}),s(S,{onChange:i=>{d(i),i==="auto"&&(e==null||e({[a]:void 0}))},value:r,dropdownProps:{position:"top"},w:t?"170px":"182px",colorScheme:"techPurple",options:u})]}),r==="custom"&&s(g,{labelName:o("editor.inspect.setter_group.color"),labelSize:t?"small":"medium",value:l,defaultValue:"blue",attrName:a,handleUpdateMultiAttrDSL:e})]})};w.displayName="CustomBgSelect";export{w as default};
//# sourceMappingURL=index-ad1b43b2.js.map

import{o as c,k as s,S}from"./@illa-design-1f43bb6c.js";import{r as f}from"./react-9b7e00e3.js";import{P as b}from"./index-934389e2.js";import g from"./index-cbc543fd.js";import{a as m}from"./@emotion-08a6282b.js";import{u as h}from"./index-4dce6ee8.js";import"./index-548954d1.js";import"./objectWithoutPropertiesLoose-e3246981.js";import"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";const x=m`
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
//# sourceMappingURL=index-3be6cbec.js.map

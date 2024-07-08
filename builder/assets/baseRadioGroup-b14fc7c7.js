import{o as u,k as a,aE as f}from"./@illa-design-402f214a.js";import{cQ as y,a as S}from"./index-2f1869ab.js";import{a as t}from"./@emotion-4f16718e.js";import{f as h}from"./style-ab05d1ea.js";import{P as x}from"./index-323e87cb.js";import"./react-9b7e00e3.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const b=(e=!1)=>e?t`
        width: 100%;
      `:h,g=t`
  width: 100%;
`,w=(e=!1)=>{const o=t`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,r=t`
    flex-direction: column;
    gap: 8px;
  `;return t`
    display: flex;
    padding: 8px 0;
    ${e?r:o};
    width: 100%;
  `},E=e=>{const{value:o,options:r,defaultValue:n,isSetterSingleRow:i=!1,attrName:s,widgetType:p,labelName:l,labelDesc:d,handleUpdateDsl:c}=e;return u("div",{css:w(i),children:[l&&a("span",{children:a(x,{labelName:l,labelDesc:d,labelSize:"medium"})}),a("div",{css:b(i),children:a(f,{onChange:m=>{c(s,m),y(S.CLICK,{element:"component_inspect_radio",parameter1:p,parameter2:s})},forceEqualWidth:!0,value:o,defaultValue:n,options:r,type:"button",size:"medium",colorScheme:"grayBlue",css:g})})]})};E.displayName="BaseRadioGroupSetter";export{E as default};
//# sourceMappingURL=baseRadioGroup-b14fc7c7.js.map

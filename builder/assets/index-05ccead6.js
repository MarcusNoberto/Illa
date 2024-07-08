import{o as m,k as o,bg as S}from"./@illa-design-402f214a.js";import{cQ as c,a as p}from"./index-2f1869ab.js";import{r as w}from"./react-9b7e00e3.js";import D from"./index-cda956dd.js";import{D as I}from"./index-388caa78.js";import{P as b}from"./index-323e87cb.js";import{a as n}from"./@emotion-4f16718e.js";import{g as k}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";import"./index-9dcf4ab8.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./style-87b0eeec.js";import"./style-ab05d1ea.js";const v=n`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,E=n`
  display: flex;
  align-items: center;
  min-height: 28px;
`,L=n`
  width: 100%;
  padding: 8px 16px;
`,N=n`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  gap: 8px;
`,P=(r=!1)=>r?N:L,_=r=>{const{attrName:e,labelName:s,labelDesc:l,panelConfig:f,handleUpdateDsl:y,defaultValue:h,handleUpdateMultiAttrDSL:t,value:d,openDynamic:u,detailedDescription:x,widgetType:i}=r,a=k(f,`${e}Dynamic`,!1),g=w.useCallback(()=>{a?(t==null||t({[e]:void 0,[`${e}Dynamic`]:!1}),c(p.CLICK,{element:"fx",parameter1:i,parameter2:e,parameter3:"off"})):(t==null||t({[e]:void 0,[`${e}Dynamic`]:!0}),c(p.CLICK,{element:"fx",parameter1:i,parameter2:e,parameter3:"on"}))},[e,a,t,i]);return m("div",{css:P(a),children:[m("div",{css:v,children:[s&&o(b,{labelName:s,labelDesc:l}),m("div",{css:E,children:[u&&o(I,{isDynamic:a,hasRightContent:!0,onClick:g}),!a&&o(S,{defaultValue:h,onChange:C=>{y(e,C),c(p.CLICK,{element:"component_inspect_radio",parameter1:i,parameter2:e})},checked:!!d,colorScheme:"techPurple"})]})]}),a&&o(D,{...r,value:d,isSetterSingleRow:!0,detailedDescription:x??l,onlyHasSetter:!0})]})};_.displayName="ColumnSwitchSetter";export{_ as default};
//# sourceMappingURL=index-05ccead6.js.map

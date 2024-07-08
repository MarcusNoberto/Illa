import{o as m,k as o,bh as S}from"./@illa-design-1f43bb6c.js";import{cP as c,a as p}from"./index-4dce6ee8.js";import{r as w}from"./react-9b7e00e3.js";import D from"./index-e25abb72.js";import{D as I}from"./index-8df6bc42.js";import{P as b}from"./index-934389e2.js";import{a as n}from"./@emotion-08a6282b.js";import{g as k}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";import"./index-03ca7e7b.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./style-ee1caa0e.js";import"./style-6680c91c.js";const v=n`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,E=n`
  display: flex;
  align-items: center;
  min-height: 28px;
`,P=n`
  width: 100%;
  padding: 8px 16px;
`,L=n`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  gap: 8px;
`,N=(r=!1)=>r?L:P,_=r=>{const{attrName:e,labelName:s,labelDesc:l,panelConfig:f,handleUpdateDsl:y,defaultValue:h,handleUpdateMultiAttrDSL:t,value:d,openDynamic:u,detailedDescription:x,widgetType:i}=r,a=k(f,`${e}Dynamic`,!1),C=w.useCallback(()=>{a?(t==null||t({[e]:void 0,[`${e}Dynamic`]:!1}),c(p.CLICK,{element:"fx",parameter1:i,parameter2:e,parameter3:"off"})):(t==null||t({[e]:void 0,[`${e}Dynamic`]:!0}),c(p.CLICK,{element:"fx",parameter1:i,parameter2:e,parameter3:"on"}))},[e,a,t,i]);return m("div",{css:N(a),children:[m("div",{css:v,children:[s&&o(b,{labelName:s,labelDesc:l}),m("div",{css:E,children:[u&&o(I,{isDynamic:a,hasRightContent:!0,onClick:C}),!a&&o(S,{defaultValue:h,onChange:g=>{y(e,g),c(p.CLICK,{element:"component_inspect_radio",parameter1:i,parameter2:e})},checked:!!d,colorScheme:"techPurple"})]})]}),a&&o(D,{...r,value:d,isSetterSingleRow:!0,detailedDescription:x??l,onlyHasSetter:!0})]})};_.displayName="ColumnSwitchSetter";export{_ as default};
//# sourceMappingURL=index-836762c1.js.map

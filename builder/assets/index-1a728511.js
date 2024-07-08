import{k as t,n as l,o,F as p}from"./@illa-design-1f43bb6c.js";import{b as d,bA as h,u as m,e as g,be as u}from"./index-4dce6ee8.js";import{C as _}from"./index-03ca7e7b.js";import{r as x}from"./react-9b7e00e3.js";import{a as e}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";const b=e`
  width: 100%;
  height: 8px;
`,n=()=>t("div",{css:b});n.displayName="ActionPanelSpace";const f=x.memo(n),w=e`
  display: flex;
  width: 100%;
  padding: 8px 16px;
  gap: 16px;
`,y=e`
  width: 200px;
  text-align: right;
  color: ${l("grayBlue","02")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  white-space: nowrap;
`,S=e`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,v=e`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${l("grayBlue","04")};
`,A=()=>{const i=d(h),{t:a}=m(),s=g(),r=c=>{s(u.updateCachedAction({...i,content:{initialValue:c}}))};return o(p,{children:[t(f,{}),o("div",{css:w,children:[t("span",{css:y,children:a("editor.data_work_space.global_data_modal.initial_value.label")}),o("div",{css:S,children:[t(_,{value:i.content.initialValue,height:"58px",onChange:r,modalTitle:a("editor.data_work_space.global_data_modal.initial_value.label"),modalDescription:a("editor.data_work_space.global_data_modal.initial_value.tooltips"),placeholder:a("editor.data_work_space.global_data_modal.initial_value.placeholder")}),t("span",{css:v,children:a("editor.action.panel.label.tips.global-data.how-to-use")})]})]})]})};A.displayName="GlobalDataPanel";export{A as default};
//# sourceMappingURL=index-1a728511.js.map

import{o as h,k as t,I as C}from"./@illa-design-1f43bb6c.js";import{r as s}from"./react-9b7e00e3.js";import{P as v}from"./index-934389e2.js";import{a as o}from"./@emotion-08a6282b.js";import{g as f}from"./lodash-lib-6e94956b.js";import{u as S}from"./index-4dce6ee8.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";const y=n=>s.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.5 4C3.22386 4 3 3.77614 3 3.5C3 3.22386 3.22386 3 3.5 3H5.5C5.77614 3 6 3.22386 6 3.5V12.5C6 12.7761 5.77614 13 5.5 13H3.5C3.22386 13 3 12.7761 3 12.5C3 12.2239 3.22386 12 3.5 12H5V4L3.5 4ZM10.5 3C10.2239 3 10 3.22386 10 3.5V12.5C10 12.7761 10.2239 13 10.5 13H12.5C12.7761 13 13 12.7761 13 12.5C13 12.2239 12.7761 12 12.5 12H11V4L12.5 4C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3H10.5ZM8 5C7.72386 5 7.5 5.22386 7.5 5.5V10.5C7.5 10.7761 7.72386 11 8 11C8.27614 11 8.5 10.7761 8.5 10.5V5.5C8.5 5.22386 8.27614 5 8 5Z",fill:"#1D2129"})),u=n=>s.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 12.5C4 12.7761 3.77614 13 3.5 13C3.22386 13 3 12.7761 3 12.5L3 10.5C3 10.2239 3.22386 10 3.5 10L12.5 10C12.7761 10 13 10.2239 13 10.5L13 12.5C13 12.7761 12.7761 13 12.5 13C12.2239 13 12 12.7761 12 12.5L12 11L4 11L4 12.5ZM3 5.5C3 5.77614 3.22386 6 3.5 6L12.4993 6L12.5 6C12.7761 6 13 5.77614 13 5.5L13 3.5C13 3.22386 12.7761 3 12.5 3C12.2239 3 12 3.22386 12 3.5L12 5L4 5L4 3.5C4 3.22386 3.77614 3 3.5 3C3.22386 3 3 3.22386 3 3.5L3 5.5ZM5 8C5 8.27614 5.22386 8.5 5.5 8.5L10.5 8.5C10.7761 8.5 11 8.27614 11 8C11 7.72386 10.7761 7.5 10.5 7.5L5.5 7.5C5.22386 7.5 5 7.72386 5 8Z",fill:"#1D2129"})),I=(n=!1)=>{const i=o`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,r=o`
    flex-direction: column;
    gap: 8px;
  `;return o`
    display: flex;
    padding: 8px 0;
    ${n?r:i};
    width: 100%;
  `},_=o`
  display: flex;
  width: 100%;
  gap: 8px;
`,X=n=>{const{handleUpdateDsl:i,widgetType:r,attrName:a,defaultValue:p,componentNode:c,value:w}=n,g=r==="GRID_LIST_WIDGET",{gapX:L,gapY:x}=s.useMemo(()=>{const e=f(c,`props.${a}X`,p),l=f(c,`props.${a}Y`,p);return{gapX:e,gapY:l}},[a,c,p]),{t:m}=S(),d=(e,l)=>{l!==void 0&&i(e,l)};return h("div",{css:I(g),children:[t("span",{children:t(v,{labelName:m("editor.inspect.setter_label.grid_list.item_spacing"),labelDesc:m("editor.inspect.setter_tips.grid_list.item_spacing")})}),g?h("div",{css:_,children:[t(C,{colorScheme:"techPurple",value:parseInt(L??"0"),w:"100%",prefix:t(y,{}),onChange:e=>d(`${a}X`,e)}),t(C,{colorScheme:"techPurple",value:parseInt(x??"0"),w:"100%",prefix:t(u,{}),onChange:e=>d(`${a}Y`,e)})]}):t(C,{colorScheme:"techPurple",w:"184px",value:parseInt(w??"0"),prefix:t(u,{}),onChange:e=>d(a,e)})]})};export{X as default};
//# sourceMappingURL=index-09b92b1b.js.map

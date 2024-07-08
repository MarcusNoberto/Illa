import{c2 as p,k as i}from"./@illa-design-1f43bb6c.js";import{r as h}from"./react-9b7e00e3.js";import{a as o}from"./@emotion-08a6282b.js";import{f1 as m}from"./index-4dce6ee8.js";import{T as g}from"./index-99007076.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const u=(r,t)=>{const e=r?o`
        height: 100%;
        width: auto;
      `:o`
        width: 100%;
        height: auto;
      `,n=t?o`
        color: ${t};
      `:o``;return o`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & div {
      ${e};
    }
    & svg {
      ${e};
      ${n};
      cursor: pointer;
      display: block;
    }
  `},f=r=>{const{tooltipText:t,iconName:e,colorScheme:n,triggerEventHandler:s}=r,[l,c]=p(),a=m(e),d=h.useCallback(()=>{s("click")},[s]);return i(g,{tooltipText:t,tooltipDisabled:!t,children:i("div",{ref:l,css:u(c.width>c.height,n),children:i("div",{onClick:d,children:a?i(a,{}):null})})})};f.displayName="IconWidget";export{f as IconWidget,f as default};
//# sourceMappingURL=icon-effe766e.js.map

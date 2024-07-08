import{b$ as p,k as i}from"./@illa-design-402f214a.js";import{r as h}from"./react-9b7e00e3.js";import{a as o}from"./@emotion-4f16718e.js";import{f2 as m}from"./index-2f1869ab.js";import{T as g}from"./index-5f69abbc.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const u=(r,t)=>{const e=r?o`
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
//# sourceMappingURL=icon-d2d18220.js.map

import{k as i}from"./@illa-design-402f214a.js";import{r as m}from"./react-9b7e00e3.js";import{b as p,dF as l}from"./index-2f1869ab.js";import{a as c}from"./@emotion-4f16718e.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";function u(e){return c`
    pointer-events: ${e?"none":"auto"};
    border: none;
    height: 100%;
    width: 100%;
  `}const d=e=>{const{src:s,deleteComponentRuntimeProps:t,handleUpdateDsl:r,updateComponentRuntimeProps:o}=e,n=p(l);return m.useEffect(()=>(o({setSrc:a=>{r({src:a})}}),()=>{t()}),[t,r,o]),i("iframe",{allow:"*",allowFullScreen:!0,css:u(n),src:s})};d.displayName="IFrameWidget";export{d as IFrameWidget,d as default};
//# sourceMappingURL=iframe-c8372b72.js.map

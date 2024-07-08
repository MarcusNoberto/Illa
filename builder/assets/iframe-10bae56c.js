import{k as i}from"./@illa-design-1f43bb6c.js";import{r as m}from"./react-9b7e00e3.js";import{b as p,dE as l}from"./index-4dce6ee8.js";import{a as c}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";function u(e){return c`
    pointer-events: ${e?"none":"auto"};
    border: none;
    height: 100%;
    width: 100%;
  `}const d=e=>{const{src:s,deleteComponentRuntimeProps:t,handleUpdateDsl:r,updateComponentRuntimeProps:o}=e,n=p(l);return m.useEffect(()=>(o({setSrc:a=>{r({src:a})}}),()=>{t()}),[t,r,o]),i("iframe",{allow:"*",allowFullScreen:!0,css:u(n),src:s})};d.displayName="IFrameWidget";export{d as IFrameWidget,d as default};
//# sourceMappingURL=iframe-10bae56c.js.map

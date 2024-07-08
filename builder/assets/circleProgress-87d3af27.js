import{k as a,b7 as u,bs as h}from"./@illa-design-402f214a.js";import{r as c}from"./react-9b7e00e3.js";import{a as f}from"./@emotion-4f16718e.js";import{T as g}from"./index-5f69abbc.js";import"./index-2f1869ab.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";function W(t="center"){return f`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${t};
    align-items: center;
  `}const d=t=>{const{value:r,showText:s,color:i,trailColor:n,strokeWidth:e,finalWidth:p,finalHeight:o}=t,l=c.useMemo(()=>isNaN(Number(e))?e:e+"px",[e]),m=Math.min(p,o)-8+"px";return a(h,{type:"circle",percent:r,showText:!s,w:m,color:i,trailColor:n,strokeWidth:l})};d.displayName="WrappedCircleProgress";const x=t=>{const{handleUpdateDsl:r,updateComponentRuntimeProps:s,deleteComponentRuntimeProps:i,alignment:n,tooltipText:e}=t;c.useEffect(()=>(s({setValue:l=>{r({value:l})},clearValue:()=>{r({value:0})}}),()=>{i()}),[i,r,s]);const[p,o]=u();return a(g,{tooltipText:e,tooltipDisabled:!e,children:a("div",{css:W(n),ref:p,children:a(d,{...t,finalHeight:o.height,finalWidth:o.width})})})};x.displayName="CircleProgressWidget";export{x as CircleProgressWidget,d as WrappedCircleProgress,x as default};
//# sourceMappingURL=circleProgress-87d3af27.js.map

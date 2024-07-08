import{k as a,b8 as u,bv as h}from"./@illa-design-1f43bb6c.js";import{r as c}from"./react-9b7e00e3.js";import{a as f}from"./@emotion-08a6282b.js";import{T as g}from"./index-99007076.js";import"./index-4dce6ee8.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";function W(t="center"){return f`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${t};
    align-items: center;
  `}const d=t=>{const{value:r,showText:s,color:i,trailColor:n,strokeWidth:e,finalWidth:p,finalHeight:o}=t,l=c.useMemo(()=>isNaN(Number(e))?e:e+"px",[e]),m=Math.min(p,o)-8+"px";return a(h,{type:"circle",percent:r,showText:!s,w:m,color:i,trailColor:n,strokeWidth:l})};d.displayName="WrappedCircleProgress";const x=t=>{const{handleUpdateDsl:r,updateComponentRuntimeProps:s,deleteComponentRuntimeProps:i,alignment:n,tooltipText:e}=t;c.useEffect(()=>(s({setValue:l=>{r({value:l})},clearValue:()=>{r({value:0})}}),()=>{i()}),[i,r,s]);const[p,o]=u();return a(g,{tooltipText:e,tooltipDisabled:!e,children:a("div",{css:W(n),ref:p,children:a(d,{...t,finalHeight:o.height,finalWidth:o.width})})})};x.displayName="CircleProgressWidget";export{x as CircleProgressWidget,d as WrappedCircleProgress,x as default};
//# sourceMappingURL=circleProgress-47e64e66.js.map

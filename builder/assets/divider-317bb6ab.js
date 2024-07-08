import{k as n,D as c}from"./@illa-design-1f43bb6c.js";import{r as l}from"./react-9b7e00e3.js";import{a as u}from"./@emotion-08a6282b.js";const x=u`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
`,p=t=>{const{text:i,fs:e,textAlign:r}=t,s=l.useMemo(()=>isNaN(Number(e))?e==null?void 0:e.toString():e+"px",[e]);return n(c,{w:"100%",textAlign:r,text:i,fs:s})};p.displayName="WrappedDivider";const f=t=>{const{text:i,fs:e,textAlign:r,displayName:s,handleUpdateDsl:a,updateComponentRuntimeProps:d,deleteComponentRuntimeProps:o}=t;return l.useEffect(()=>(d({setValue:m=>{a({text:m})},clearValue:()=>{a({text:""})}}),()=>{o()}),[i,e,r,s,d,a,o]),n("div",{css:x,children:n(p,{...t})})};f.displayName="DividerWidget";export{f as DividerWidget,p as WrappedDivider,f as default};
//# sourceMappingURL=divider-317bb6ab.js.map

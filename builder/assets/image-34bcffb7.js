import{b8 as W,k as c,X as j}from"./@illa-design-1f43bb6c.js";import{r as i}from"./react-9b7e00e3.js";import{M as w}from"./index-a95bdaa9.js";import{eY as y,aE as H}from"./index-4dce6ee8.js";import{a as C}from"./@emotion-08a6282b.js";import{T as I}from"./index-99007076.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const $=(t,e)=>C`
    height: ${e};
    width: ${t};
  `,k=t=>{let e="center";return t==="start"?e="flex-start":t==="end"&&(e="flex-end"),C`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: ${e};
  `},M=(t,e,r)=>t==="auto"?e&&e>0?`${r*e}px`:`${r}px`:t==="fixed"?"100%":"auto",S=t=>{const{imageSrc:e,altText:r,imageRadius:p,objectFit:l,aspectRatio:n=1,dynamicHeight:o,handleOnClick:d,sourceLoadErrorHandle:s}=t,[u,m]=W(),[f,g]=i.useState(!1),h=o==="auto"||l==="cover"||!e||f?"100%":"auto",x=M(o,n,m.width);return c(j,{ref:u,src:e,radius:p,objectFit:o==="auto"?"cover":l,alt:r,width:"100%",height:"100%",css:$(h,x),draggable:!1,onClick:d,onLoad:()=>{g(!1)},onError:()=>{g(!0),s==null||s(e,"image")}})};S.displayName="WrappedImage";const v=t=>{const{imageSrc:e,imageRadius:r,objectFit:p,horizontalAlign:l,dynamicHeight:n,handleUpdateDsl:o,updateComponentRuntimeProps:d,deleteComponentRuntimeProps:s,tooltipText:u,triggerEventHandler:m,updateComponentHeight:f}=t,{sourceLoadErrorHandler:g}=i.useContext(w);i.useEffect(()=>(d({setImageUrl:a=>{o({imageSrc:a})}}),()=>{s()}),[s,o,d]);const h=i.useMemo(()=>{let a=e;return a&&!y(a)&&(a.startsWith("data:")||(a=`https://${a}`)),a},[e]),x=i.useMemo(()=>{const a=/^\d+$/,R=new RegExp(a);return r&&R.test(r)?r+"px":r},[r]),b=i.useCallback(()=>{m("click")},[m]),E=i.useMemo(()=>{switch(n){case"auto":return!0;case"fixed":default:return!1}},[n]);return c(H,{updateComponentHeight:f,enable:E,children:c(I,{tooltipText:u,tooltipDisabled:!u,children:c("div",{css:k(l),children:c(S,{...t,imageSrc:h,imageRadius:x,objectFit:p,dynamicHeight:n,handleOnClick:b,sourceLoadErrorHandle:g})})})})};v.displayName="ImageWidget";export{v as ImageWidget,S as WrappedImage,v as default};
//# sourceMappingURL=image-34bcffb7.js.map

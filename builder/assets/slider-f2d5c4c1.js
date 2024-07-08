import{o as V,k as i,ba as U}from"./@illa-design-1f43bb6c.js";import{r as n}from"./react-9b7e00e3.js";import{aE as z,aM as B}from"./index-4dce6ee8.js";import{h as G,g as J,I as K}from"./utils-1cfed9ac.js";import{L as Q}from"./index-2c54d160.js";import{T as X}from"./index-99007076.js";import{b as Y}from"./style-49f23046.js";import{a as m}from"./@emotion-08a6282b.js";import{w as Z}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";const _=(s="left")=>s==="left"?m`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `:s==="right"?m`
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    `:m``,$=m`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 8px;
  gap: 8px;
  align-items: center;
`,E=m`
  height: 16px;
  width: 16px;
`,j=(s,o={})=>{const{hideValidationMessage:d,required:a,customRule:t}=o;if(!d){const l=G({value:J(s),required:a,customRule:t});return l&&l.length>0?l:""}return""},k=n.forwardRef((s,o)=>{const{prefixIcon:d,suffixIcon:a,hideOutput:t,handleOnChange:l}=s,c=h=>h&&B[h]||null,r=c(d??""),u=c(a??"");return V("div",{css:$,children:[r&&i("span",{css:E,children:r&&r({})}),i(U,{tooltipVisible:!t,isRange:!1,ref:o,...s,onChange:l}),u&&i("span",{css:E,children:u&&u({})})]})});k.displayName="WrappedSlider";const ee=s=>{const{value:o,min:d,displayName:a,handleUpdateMultiExecutionResult:t,updateComponentRuntimeProps:l,deleteComponentRuntimeProps:c,labelPosition:r,labelFull:u,labelWrapping:h,label:M,labelAlign:A,labelWidth:C=33,labelCaption:H,labelWidthUnit:O,required:f,labelHidden:S,tooltipText:y,customRule:b,hideValidationMessage:g,validateMessage:P,defaultValue:p,updateComponentHeight:T,triggerEventHandler:w}=s,W=n.useRef(null),[F,R]=n.useState(p);n.useEffect(()=>{R(p),t([{displayName:a,value:{value:p||""}}])},[p,a,t]);const I=n.useCallback(e=>{const x=j(e,{hideValidationMessage:g,required:f,customRule:b});return t([{displayName:a,value:{validateMessage:x}}]),x},[b,a,t,g,f]),L=n.useRef(Z((e,x,q)=>{new Promise(D=>{const N=j(e,q);t([{displayName:a,value:{value:e||"",validateMessage:N}}]),D(!0)}).then(()=>{x("change")})},180)),v=n.useCallback(e=>{R(e),L.current(e,w,{hideValidationMessage:g,required:f,customRule:b})},[b,g,f,w]);return n.useEffect(()=>(l({setValue:e=>{typeof e=="number"&&v(e)},clearValue:()=>{v(d??0)},validate:()=>I(o),clearValidation:()=>{t([{displayName:a,value:{validateMessage:""}}])},reset:()=>{t([{displayName:a,value:{value:p,validateMessage:""}}])},focus:()=>{var e;(e=W.current)==null||e.focus()}}),()=>{c()}),[p,c,a,v,t,I,d,l,o]),V(z,{updateComponentHeight:T,children:[i(X,{tooltipText:y,tooltipDisabled:!y,children:V("div",{css:_(h?"top":r),children:[i(Q,{labelFull:u,label:M,labelAlign:A,labelWidth:C,labelCaption:H,labelWidthUnit:O,labelPosition:r,required:f,labelHidden:S,hasTooltip:!!y}),i(k,{...s,value:F,ref:W,handleOnChange:v})]})}),!g&&i("div",{css:Y(C,r,S||!M),children:i(K,{validateMessage:P})})]})};ee.displayName="SliderWidget";export{ee as SliderWidget,k as WrappedSlider,ee as default};
//# sourceMappingURL=slider-f2d5c4c1.js.map

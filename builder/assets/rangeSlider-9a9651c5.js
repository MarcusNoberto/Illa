import{o as W,k as r,b9 as N}from"./@illa-design-402f214a.js";import{r as s}from"./react-9b7e00e3.js";import{aE as O,aM as U}from"./index-2f1869ab.js";import{h as D,I as q}from"./utils-c87ab5dc.js";import{L as F}from"./index-94227886.js";import{T as z}from"./index-5f69abbc.js";import{b as B}from"./style-7ce959a8.js";import{a as x}from"./@emotion-4f16718e.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const G=(n="left")=>n==="left"?x`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `:n==="right"?x`
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    `:x``,J=x`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 0 8px;
  align-items: center;
`,k=x`
  height: 16px;
  width: 16px;
`,j=s.forwardRef((n,o)=>{const{startValue:d,endValue:e,prefixIcon:l,suffixIcon:V,hideOutput:b,min:u,max:v,handleOnChange:p,getValidateMessage:f,handleUpdateMultiExecutionResult:R,displayName:m}=n,C=s.useCallback(a=>{new Promise(M=>{const h=f(a);R([{displayName:m,value:{startValue:a[0]??u??0,endValue:a[1]??v??10,validateMessage:h}}]),M(!0)}).then(()=>{p==null||p()})},[m,f,p,R,v,u]),y=a=>a&&U[a]||null,i=y(l??""),c=y(V??"");return W("div",{css:J,children:[i&&r("span",{css:k,children:i&&i({})}),r(N,{value:[d,e],tooltipVisible:!b,onChange:C,isRange:!0,ref:o,...n}),c&&r("span",{css:k,children:c&&c({})})]})});j.displayName="WrappedRangeSlider";const K=n=>{const{startValue:o,endValue:d,displayName:e,handleUpdateMultiExecutionResult:l,updateComponentRuntimeProps:V,deleteComponentRuntimeProps:b,labelPosition:u,labelFull:v,labelWrapping:p,label:f,labelAlign:R,labelWidth:m=33,labelCaption:C,labelWidthUnit:y,required:i,labelHidden:c,tooltipText:a,customRule:M,hideValidationMessage:h,validateMessage:A,updateComponentHeight:H,triggerEventHandler:w}=n,E=s.useRef(null),P=s.useRef(o),T=s.useRef(d),S=s.useCallback(t=>{if(!h){const g=D({value:t,required:i,customRule:M});return g&&g.length>0?g:""}return""},[M,h,i]),I=s.useCallback(t=>{const g=S(t);return l([{displayName:e,value:{validateMessage:g||""}}]),g},[e,S,l]);s.useEffect(()=>(V({setStartOfRange:t=>{l([{displayName:e,value:{startValue:t}}])},setEndOfRange:t=>{l([{displayName:e,value:{endValue:t}}])},validate:()=>I([{displayName:e,value:{startValue:o,endValue:d}}]),clearValidation:()=>{l([{displayName:e,value:{validateMessage:""}}])},reset:()=>{l([{displayName:e,value:{startValue:P,endValue:T,validateMessage:""}}])},focus:()=>{var t;(t=E.current)==null||t.focus()}}),()=>{b()}),[b,e,d,l,I,o,V]);const L=s.useCallback(()=>{w("change")},[w]);return W(O,{updateComponentHeight:H,children:[r(z,{tooltipText:a,tooltipDisabled:!a,children:W("div",{css:G(p?"top":u),children:[r(F,{labelFull:v,label:f,labelAlign:R,labelWidth:m,labelCaption:C,labelWidthUnit:y,labelPosition:u,required:i,labelHidden:c,hasTooltip:!!a}),r(j,{...n,startValue:o,endValue:d,ref:E,getValidateMessage:S,handleOnChange:L})]})}),!h&&r("div",{css:B(m,u,c||!f),children:r(q,{validateMessage:A})})]})};K.displayName="RangeSliderWidget";export{K as RangeSliderWidget,j as WrappedRangeSlider,K as default};
//# sourceMappingURL=rangeSlider-9a9651c5.js.map

import{l as E,m as M,k as r,aY as G,o as S,b6 as J}from"./@illa-design-402f214a.js";import{r as a}from"./react-9b7e00e3.js";import{aE as K}from"./index-2f1869ab.js";import{h as Q,g as X,I as Z}from"./utils-c87ab5dc.js";import{L as _}from"./index-94227886.js";import{T as ee}from"./index-5f69abbc.js";import{a as ae,b as te}from"./style-7ce959a8.js";import{a as F}from"./@emotion-4f16718e.js";import{w as le}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";const se=F`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
`;function ne(s=!1){return F`
    width: 100%;
    height: 32px;
    max-height: 32px;
    padding: 0;
    display: inline-flex;
    font-size: 14px;
    align-items: center;
    box-sizing: border-box;
    max-lines: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 8px;
    color: ${s?E(`--${M}-grayBlue-02`):E(`--${M}-grayBlue-04`)};
    &:hover {
      background-color: ${E(`--${M}-grayBlue-09`)};
      cursor: pointer;
      padding-left: 16px;
      svg {
        opacity: 1;
      }
    }
    transition: all 200ms;
    svg {
      width: 14px;
      height: 14px;
      margin-left: 8px;
      opacity: 0;
      color: ${E(`--${M}-grayBlue-05`)};
      transition: all 200ms;
    }
  `}const $=(s,e={})=>{const{hideValidationMessage:d,pattern:n,regex:o,maxLength:g,minLength:m,required:t,customRule:u}=e;if(!d){const c=Q({value:X(s),pattern:n,regex:o,minLength:m,maxLength:g,required:t,customRule:u});return c&&c.length>0?c:""}return""},I=s=>{const{value:e,placeholder:d,disabled:n,readOnly:o,prefixIcon:g,prefixText:m,suffixIcon:t,suffixText:u,showCharacterCount:c,colorScheme:b,maxLength:L,minLength:w,allowClear:W,className:k,handleOnChange:i}=s,C=a.useRef(null),[v,p]=a.useState(!1),f=()=>{p(!0),setTimeout(()=>{var h;(h=C.current)==null||h.focus()},100)};return r("div",{css:se,className:k,children:v?r(G,{w:"100%",autoFocus:!0,onChange:i,showWordLimit:c,onBlur:()=>{p(!1)},value:e,addAfter:u,addBefore:m,suffix:t,prefix:g,inputRef:C,readOnly:o,allowClear:W,placeholder:d,disabled:n,colorScheme:b,maxLength:L,minLength:w,onClear:()=>i("")}):S("span",{css:ne(!!(e&&(e==null?void 0:e.length)>0)),onClick:f,children:[e&&(e==null?void 0:e.length)>0?e:d,r(J,{})]})})};I.displayName="WrappedEditableText";const oe=s=>{const{displayName:e,value:d,minLength:n,maxLength:o,updateComponentRuntimeProps:g,deleteComponentRuntimeProps:m,handleUpdateDsl:t,labelPosition:u,labelFull:c,label:b,labelAlign:L,labelWidth:w=33,labelCaption:W,labelWidthUnit:k,required:i,labelHidden:C,tooltipText:v,pattern:p,regex:f,customRule:h,hideValidationMessage:y,updateComponentHeight:P,validateMessage:A,defaultValue:T,triggerEventHandler:x,handleUpdateMultiExecutionResult:R}=s,[H,B]=a.useState(T),O=a.useCallback(l=>{const V=$(l,{hideValidationMessage:y,pattern:p,regex:f,minLength:n,maxLength:o,required:i,customRule:h});return t({validateMessage:V}),V},[h,t,y,o,n,p,f,i]);a.useEffect(()=>{B(T),R([{displayName:e,value:{value:T||""}}])},[T,e,R]),a.useEffect(()=>(g({setValue:l=>{t({value:l})},clearValue:()=>{t({value:void 0})},validate:()=>O(d)}),()=>{m()}),[g,t,m,O,d]);const N=a.useRef(le((l,V,z)=>{new Promise(D=>{const Y=$(l,z);R([{displayName:e,value:{value:l||"",validateMessage:Y}}]),D(!0)}).then(()=>{V("change")})},180)),j=a.useCallback(l=>{B(l),N.current(l,x,{hideValidationMessage:y,pattern:p,regex:f,minLength:n,maxLength:o,required:i,customRule:h})},[h,y,o,n,p,f,i,x]),U=a.useCallback(()=>{x("blur")},[x]),q=a.useCallback(()=>{x("focus")},[x]);return S(K,{updateComponentHeight:P,children:[r(ee,{tooltipText:v,tooltipDisabled:!v,children:S("div",{css:ae(u),children:[r(_,{labelFull:c,label:b,labelAlign:L,labelWidth:w,labelCaption:W,labelWidthUnit:k,labelPosition:u,required:i,labelHidden:C,hasTooltip:!!v}),r(I,{...s,value:H,handleOnChange:j,handleOnBlur:U,handleOnFocus:q})]})}),!y&&r("div",{css:te(w,u,C||!b),children:r(Z,{validateMessage:A})})]})};oe.displayName="EditableTextWidget";export{oe as EditableTextWidget,I as WrappedEditableText,oe as default};
//# sourceMappingURL=editableText-4a648dc5.js.map

import{n as j,k as h,o as V,bh as z}from"./@illa-design-1f43bb6c.js";import{r as w}from"./react-9b7e00e3.js";import{aE as B}from"./index-4dce6ee8.js";import{h as D,I as F}from"./utils-1cfed9ac.js";import{L as J}from"./index-2c54d160.js";import{T as K}from"./index-99007076.js";import{a as Q,b as X}from"./style-49f23046.js";import{a as x}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const G=x`
  display: block;
  font-size: 14px;
  text-overflow: ellipsis;
`,Y=x`
  ${G};
  color: ${j("grayBlue","02")};
`,Z=x`
  ${G};
  color: ${j("grey","04")};
`,_=i=>x`
    display: inline-flex;
    word-wrap: break-word;
    flex-direction: ${i==="left"?"row":"row-reverse"};
    gap: 8px;
    cursor: pointer;
    align-items: center;
  `,ee=x`
  display: inline-flex;
  align-items: center;
  margin-right: 24px;
  gap: 6px 24px;
  flex-wrap: wrap;
`,ae=(i="static",s=[],c={labels:[],captions:[],values:[],disableds:[]})=>{if(i==="dynamic"){const t=c.labels??[],a=c.values??[],r=c.captions??[],l=c.disableds??[],p=Math.max(t.length,a.length,l.length,r.length),n=[];for(let e=0;e<p;e++){let d=t[e]||a[e]||e;const y=a[e]||t[e]||e,m=r[e],f=l[e];typeof d=="object"&&(d=e),n.find(v=>v.value===y)||n.push({label:d,caption:P(m),value:y,disabled:f})}return n}else{if(!Array.isArray(s))return[];const t=[];return s.forEach((a,r)=>{let l=a.label||a.value||r;const p=a.caption,n=a.value||l||r,e=a.disabled;typeof l=="object"&&(l=r),t.find(d=>d.value===n)||t.push({label:l,caption:P(p),value:n,disabled:e})}),t}},P=i=>typeof i=="string"?i:void 0,H=i=>{const{options:s,layoutPosition:c,value:t,colorScheme:a,handleOnChange:r}=i;return h("div",{css:ee,children:s&&s.map(({value:l,caption:p,label:n,disabled:e},d)=>V("label",{css:_(c),children:[h(z,{colorScheme:a,disabled:e,"data-value":l,checked:Array.isArray(t)&&t.includes(l),onChange:(y,m)=>{var f;return r(y,(f=m.currentTarget.dataset)==null?void 0:f.value)}}),V("div",{children:[h("span",{css:Y,children:n}),p&&h("span",{css:Z,children:p})]})]},`${d}-${l}`))})};H.displayName="WrappedSwitchGroup";const te=i=>{const{value:s=[],optionConfigureMode:c,mappedOption:t,manualOptions:a,labelPosition:r,labelFull:l,label:p,labelAlign:n,labelWidth:e=33,labelCaption:d,labelWidthUnit:y,required:m,labelHidden:f,tooltipText:v,customRule:W,hideValidationMessage:I,validateMessage:R,displayName:b,upToNumber:k,atLeastNumber:L,updateComponentHeight:O,triggerEventHandler:$,handleUpdateMultiExecutionResult:g,updateComponentRuntimeProps:E,deleteComponentRuntimeProps:N}=i,U=w.useMemo(()=>ae(c,a,t),[c,a,t]),T=w.useCallback(u=>{if(!I){const o=D({value:u,required:m,atLeastNumber:L,upToNumber:k,customRule:W});return o&&o.length>0?o:""}return""},[L,W,I,m,k]),A=w.useCallback(u=>{const o=T(u);return g([{displayName:b,value:{validateMessage:o}}]),o},[b,T,g]);w.useEffect(()=>(E({setValueInArray:u=>{!u||!Array.isArray(u)||g([{displayName:b,value:{value:u}}])},clearValue:()=>{g([{displayName:b,value:{value:[]}}])},validate:()=>A(s)}),()=>{N()}),[E,g,N,A,s,b]);const q=w.useCallback((u,o)=>{if(o===void 0)return;let C;Array.isArray(s)?C=s:C=[];let M;u?M=[...C,o]:M=C.filter(S=>S!==o),A(M),new Promise(S=>{g([{displayName:b,value:{value:M}}]),S(!0)}).then(()=>{$("change")})},[s,A,g,b,$]);return V(B,{updateComponentHeight:O,children:[h(K,{tooltipText:v,tooltipDisabled:!v,children:V("div",{css:Q(r),children:[h(J,{labelFull:l,label:p,labelAlign:n,labelWidth:e,labelCaption:d,labelWidthUnit:y,labelPosition:r,required:m,labelHidden:f,hasTooltip:!!v}),h(H,{...i,value:s,options:U,handleOnChange:q})]})}),!I&&h("div",{css:X(e,r,f||!p),children:h(F,{validateMessage:R})})]})};te.displayName="SwitchGroupWidget";export{te as SwitchGroupWidget,H as WrappedSwitchGroup,te as default};
//# sourceMappingURL=switchGroup-fc42f657.js.map

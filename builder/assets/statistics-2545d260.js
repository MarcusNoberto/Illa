import{n as L,l as U,m as q,af as J,k as s,o as g,c3 as $,F as K}from"./@illa-design-1f43bb6c.js";import{r as c}from"./react-9b7e00e3.js";import{b as Q,f2 as X,aE as Y,aM as Z}from"./index-4dce6ee8.js";import{T as ee}from"./index-99007076.js";import{a as r}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const te=r`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,re=e=>{let t=r``;return(!e||e==="start")&&(t=r`
      align-items: flex-start;
    `),e==="center"&&(t=r`
      align-items: center;
    `),e==="end"&&(t=r`
      align-items: flex-end;
    `),t},ne=e=>{const t=re(e);return r`
    display: flex;
    gap: 4px;
    flex-direction: column;
    align-items: center;
    ${t};
  `},ie=r`
  max-width: 100%;
  overflow: hidden;
  & span {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }
`,oe=r`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  line-height: 36px;
`,ae=(e,t)=>{const o=t?12:24;return r`
    color: ${J(e||"")};
    display: inline-flex;
    height: 100%;
    align-items: center;
    & > svg {
      width: ${o}px;
      height: ${o}px;
    }
  `},se=r`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  align-items: center;
`,le=e=>{let t=r``;return e==="end"&&(t=r`
      justify-content: flex-end;
    `),e==="center"&&(t=r`
      justify-content: center;
    `),r`
    ${t};
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: center;
    gap: 8px;
  `},ce=e=>r`
    display: flex;
    gap: 2px;
    align-items: center;
    height: 18px;
    padding: 0 4px;
    border-radius: 2px;
    background: ${L(e||"","08")};
  `,pe=e=>{let t=r``;return e==="end"&&(t=r`
      text-align: right;
    `),e==="center"&&(t=r`
      text-align: center;
    `),r`
    ${t};
    max-width: 100%;
    color: ${U(`--${q}-grayBlue-04`)};
    ${te};
    font-size: 12px;
    line-height: 16px;
  `},k=(e,t)=>{var n;return e===void 0?"":((n=new Intl.NumberFormat(t,{style:"decimal"}).formatToParts(e).filter(l=>l.type==="group")[0])==null?void 0:n.value)??""},V=e=>e&&Z[e]||null,E=(e,t,o,i,n,l)=>{const p=V(o??""),d=V(i??""),a=(t??0)>=0?p:d;return e&&a&&s("span",{css:ae(n,l),children:a&&a({})})},R=e=>{const t=Q(X),{label:o,primaryValue:i,secondaryValue:n,decimalPlace:l,prefixText:p,suffixText:d,secondaryPrefixText:a,secondarySuffixText:u,showTrendSign:m,positiveSign:S,negativeSign:W,showSeparator:j,enableTrendColor:F,secondaryDecimalPlace:x,secondaryShowTrendSign:N,secondaryPositiveSign:D,secondaryNegativeSign:z,secondaryShowSeparator:H,secondaryEnableTrendColor:B,textAlign:h,handleOnClick:G,colorScheme:y,negativeColorScheme:v,positiveColorScheme:w}=e,M=j?k(i,t.language):"",C=H?k(n,t.language):"",b=c.useCallback((P,A)=>A?P!==void 0&&P>=0?w:v:y,[y,v,w]),T=b(i,F),f=b(n,B),O=E(!!m,i,S,W,T),I=E(!!N,n,D,z,f,!0),_=c.useMemo(()=>s(K,{children:n!==void 0&&g("div",{css:ce(f),children:[I,s($,{_css:ie,groupSeparator:C,value:n,precision:x,prefix:a,suffix:u,colorScheme:f})]})}),[f,x,C,I,a,u,n]);return g("div",{css:ne(h),onClick:G,children:[s("div",{css:pe(h),children:o}),g("div",{css:le(h),children:[g("div",{css:se,children:[O,s($,{_css:oe,value:i,precision:l,prefix:p,suffix:d,colorScheme:T,groupSeparator:M})]}),_]})]})};R.displayName="WrappedStatistic";const de=e=>{const{primaryValue:t,triggerEventHandler:o,handleUpdateDsl:i,tooltipText:n,updateComponentHeight:l,updateComponentRuntimeProps:p,deleteComponentRuntimeProps:d}=e,a=c.useRef(t),u=c.useRef(!1);c.useEffect(()=>{if(u.current){u.current=!1;return}a.current=t},[t]),c.useEffect(()=>(p({setPrimaryValue:S=>{u.current=!0,i({primaryValue:S})},resetPrimaryValue:()=>{i({primaryValue:a.current})}}),()=>{d()}),[d,i,p]);const m=c.useCallback(()=>{o("click")},[o]);return s(Y,{updateComponentHeight:l,enable:!0,children:s(ee,{tooltipText:n,tooltipDisabled:!n,children:s("div",{children:s(R,{...e,handleOnClick:m})})})})};de.displayName="StatisticWidget";export{de as StatisticWidget,R as WrappedStatistic,de as default};
//# sourceMappingURL=statistics-2545d260.js.map

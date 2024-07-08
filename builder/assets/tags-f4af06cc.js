import{ab as v,k as c,Y as V,n as T,b7 as j,o as H,T as N,ah as G}from"./@illa-design-402f214a.js";import{r as u}from"./react-9b7e00e3.js";import{e$ as x,f0 as C,aE as I}from"./index-2f1869ab.js";import{T as O}from"./index-5f69abbc.js";import{a as A}from"./@emotion-4f16718e.js";import{g as E}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";const P=n=>v(n)||Array.isArray(n)?JSON.stringify(n):`${n}`,b=({v:n,c:e,allowWrap:a,handleUpdateWith:t,handleOnSelect:p})=>{const o=u.useRef(null);return u.useEffect(()=>{var r;a||t==null||t(((r=o.current)==null?void 0:r.clientWidth)||0)},[a,t]),c(V,{ref:o,colorScheme:e,clickable:!0,onClick:()=>p==null?void 0:p(n),children:n})},B=A`
  max-width: 240px;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${T("gray","08")};
  background: ${T("white","01")};
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.16);
`,D=({values:n,tagColorMap:e,handleOnSelect:a})=>c("div",{css:B,children:n.map((t,p)=>{const o=P(t),r=E(e,o)??x(C(o));return o?c(b,{c:r,v:o,handleOnSelect:a},`${t}${p}`):null})}),$=8,F=32,J=(n,e="flex-start",a)=>A`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${e};
  gap: ${$}px;
  flex-wrap: ${a?"wrap":"nowrap"};
  min-width: ${n}px;
`,S=n=>{const{value:e=[],tagColor:a,allowWrap:t,alignment:p,handleOnSelect:o}=n,[r,d]=u.useState(e.length),h=v(a)?a:{},l=u.useRef(new Array(e.length).fill(0)),g=u.useRef(F),[m,R]=j(),w=R.width-6,W=u.useCallback((i,s)=>{if(i!==0){const f=l.current,y=s===0?i:i+f[s-1]+(s===e.length-1?0:$);f[s]=y,l.current=f}},[e.length]),k=u.useMemo(()=>t||r===l.current.length?e:e.slice(0,r+1),[r,e,t]);return u.useEffect(()=>{if(t)return;const i=s=>{s<0||(s===l.current.length-1?l.current[s]>w?i(s-1):d(l.current.length):l.current[s]+$+g.current>w?i(s-1):d(s))};i(l.current.length-1)},[t,e.length,w]),u.useEffect(()=>{l.current=new Array(e.length).fill(0),d(e.length)},[e.length]),H("div",{css:J(l.current[0]+g.current,p,t),ref:m,children:[k.map((i,s)=>{const f=P(i),y=E(h,f)??x(C(f));return f?c(b,{c:y,v:f,allowWrap:t,handleUpdateWith:M=>W(M,s),handleOnSelect:o},`${i}${s}`):null}),!t&&!!e.length&&r!==e.length&&c(N,{position:"bottom",withoutPadding:!0,withoutShadow:!0,colorScheme:"white",content:c(D,{values:e.slice(r+1),tagColorMap:h,handleOnSelect:o}),children:c("div",{children:c(b,{c:x(C(`${e.length-r-1}`)),v:`+${e.length-r-1}`,handleUpdateWith:i=>g.current=i})})})]})};S.displayName="WrappedTags";const L=n=>{const{displayName:e,tooltipText:a,disabled:t,updateComponentRuntimeProps:p,deleteComponentRuntimeProps:o,handleUpdateMultiExecutionResult:r,triggerEventHandler:d,updateComponentHeight:h}=n;u.useEffect(()=>(p({setValue:g=>{G(g)&&r([{displayName:e,value:{value:g||[]}}])},clearValue:()=>{r([{displayName:e,value:{value:void 0}}])}}),()=>{o()}),[o,e,r,p]);const l=u.useCallback(g=>{t||new Promise(m=>{r([{displayName:e,value:{selectedTag:g}}]),m(!0)}).then(()=>{d("select")})},[t,e,r,d]);return c(I,{updateComponentHeight:h,children:c(O,{tooltipText:a,tooltipDisabled:!a,children:c("div",{children:c(S,{...n,handleOnSelect:l})})})})};L.displayName="TagsWidget";export{L as TagsWidget,S as WrappedTags,L as default};
//# sourceMappingURL=tags-f4af06cc.js.map

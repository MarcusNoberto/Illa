import{k as o,o as y,aY as P}from"./@illa-design-402f214a.js";import{b as T,bB as k,u as V,e as E,bf as f,F as A,eI as S}from"./index-2f1869ab.js";import{r as l}from"./react-9b7e00e3.js";import{C as z,a as w}from"./index-9dcf4ab8.js";import{R as O}from"./index-654af204.js";import{a as x}from"./@emotion-4f16718e.js";import{T as W}from"./index-e89bb2f6.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./hook-34b2061f.js";import"./renderComponentCanvasContainer-44ad78fe.js";import"./style-7ce959a8.js";import"./index-f466602f.js";import"./index-cf2bb556.js";import"./index-b8442d1a.js";import"./layoutInfoListener-bba65cc8.js";import"./drive-6b05f117.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-cd761d27.js";import"./clsx-85d7d0af.js";import"./objectWithoutPropertiesLoose-24430c43.js";import"./index-323e87cb.js";import"./style-bd23c0f2.js";import"./style-91620c64.js";const D=x`
  width: 160px;
  flex-shrink: 0;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`,L=t=>{const{name:r}=t;return o("span",{css:D,children:r})};L.displayName="ActionPanelLabel";const H=l.memo(L),K=x`
  width: 100%;
  display: flex;
  padding: 8px 16px;
  gap: 16px;
  align-items: center;
`,R=t=>{const{labelName:r,children:i}=t;return y("div",{css:K,children:[o(H,{name:r}),i]})};R.displayName="HorizontalWithLabel";const C=l.memo(R),j=()=>{var u,d,h;const t=T(k),{t:r}=V(),i=E(),e=t.content,I=l.useCallback(n=>{i(f.updateCachedAction({...t,content:{...e,input:n}}))},[t,i,e]),N=l.useCallback((n,s,c)=>{let p=[...e.variables];p[n]={key:s,value:c},i(f.updateCachedAction({...t,content:{...e,variables:p}}))},[e,t,i]),m=l.useMemo(()=>{var b,v,g;const n=(((b=e.virtualResource)==null?void 0:b.variables)??[]).map(a=>a.key);let s={};(((v=e.virtualResource)==null?void 0:v.variables)??[]).length>0&&(((g=e.virtualResource)==null?void 0:g.variables)??[]).forEach(a=>{a&&(s[a.key]=a.value)});let c={};return e.variables.length>0&&e.variables.forEach(a=>{a&&(c[a.key]=a.value)}),n.map(a=>({key:a,value:c[a]||s[a]||""}))},[e.variables,(u=e.virtualResource)==null?void 0:u.variables]);return y("div",{children:[e.virtualResource&&o(C,{labelName:r("editor.ai-agent.label.model"),children:o(P,{prefix:(d=A(e.virtualResource.model))==null?void 0:d.logo,colorScheme:"techPurple",readOnly:!0,value:(h=A(e.virtualResource.model))==null?void 0:h.name})}),m.length>0&&o(O,{fillOnly:!0,records:m,onChangeValue:N,label:r("editor.ai-agent.label.variable")}),o(C,{labelName:r("editor.action.panel.label.ai-agent.input"),children:o(z,{lang:w.JAVASCRIPT,expectValueType:S.STRING,modalTitle:r("editor.action.panel.label.ai-agent.input"),value:e.input,onChange:I})}),o(W,{})]})};j.displayName="AIAgentPanel";export{j as default};
//# sourceMappingURL=index-3ea2ee19.js.map

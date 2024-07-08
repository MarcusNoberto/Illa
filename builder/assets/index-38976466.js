import{k as o,o as y,aY as T}from"./@illa-design-1f43bb6c.js";import{b as k,bA as I,u as V,e as E,be as f,F as A,eH as S}from"./index-4dce6ee8.js";import{r as l}from"./react-9b7e00e3.js";import{C as z,a as w}from"./index-03ca7e7b.js";import{R as H}from"./index-5b916626.js";import{a as x}from"./@emotion-08a6282b.js";import{T as O}from"./index-cd7c17cc.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./hook-302a78fc.js";import"./renderComponentCanvasContainer-2e4cd54a.js";import"./style-49f23046.js";import"./index-d48f7e94.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";import"./layoutInfoListener-bd63c738.js";import"./drive-584d85d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-a04e2b11.js";import"./objectWithoutPropertiesLoose-e3246981.js";import"./clsx-06f54762.js";import"./index-934389e2.js";import"./style-51b259bb.js";import"./style-af69883e.js";const W=x`
  width: 160px;
  flex-shrink: 0;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`,L=t=>{const{name:r}=t;return o("span",{css:W,children:r})};L.displayName="ActionPanelLabel";const D=l.memo(L),K=x`
  width: 100%;
  display: flex;
  padding: 8px 16px;
  gap: 16px;
  align-items: center;
`,R=t=>{const{labelName:r,children:i}=t;return y("div",{css:K,children:[o(D,{name:r}),i]})};R.displayName="HorizontalWithLabel";const C=l.memo(R),j=()=>{var u,d,h;const t=k(I),{t:r}=V(),i=E(),e=t.content,N=l.useCallback(n=>{i(f.updateCachedAction({...t,content:{...e,input:n}}))},[t,i,e]),P=l.useCallback((n,s,c)=>{let p=[...e.variables];p[n]={key:s,value:c},i(f.updateCachedAction({...t,content:{...e,variables:p}}))},[e,t,i]),m=l.useMemo(()=>{var b,v,g;const n=(((b=e.virtualResource)==null?void 0:b.variables)??[]).map(a=>a.key);let s={};(((v=e.virtualResource)==null?void 0:v.variables)??[]).length>0&&(((g=e.virtualResource)==null?void 0:g.variables)??[]).forEach(a=>{a&&(s[a.key]=a.value)});let c={};return e.variables.length>0&&e.variables.forEach(a=>{a&&(c[a.key]=a.value)}),n.map(a=>({key:a,value:c[a]||s[a]||""}))},[e.variables,(u=e.virtualResource)==null?void 0:u.variables]);return y("div",{children:[e.virtualResource&&o(C,{labelName:r("editor.ai-agent.label.model"),children:o(T,{prefix:(d=A(e.virtualResource.model))==null?void 0:d.logo,colorScheme:"techPurple",readOnly:!0,value:(h=A(e.virtualResource.model))==null?void 0:h.name})}),m.length>0&&o(H,{fillOnly:!0,records:m,onChangeValue:P,label:r("editor.ai-agent.label.variable")}),o(C,{labelName:r("editor.action.panel.label.ai-agent.input"),children:o(z,{lang:w.JAVASCRIPT,expectValueType:S.STRING,modalTitle:r("editor.action.panel.label.ai-agent.input"),value:e.input,onChange:N})}),o(O,{})]})};j.displayName="AIAgentPanel";export{j as default};
//# sourceMappingURL=index-38976466.js.map

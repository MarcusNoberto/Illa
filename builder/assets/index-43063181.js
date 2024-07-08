import{n as l,o as s,k as o,T as f,F as u}from"./@illa-design-402f214a.js";import{u as g,e as S,b,bB as x,hX as I,bf as T,eI as y,ee as C}from"./index-2f1869ab.js";import{r as a}from"./react-9b7e00e3.js";import{a as A}from"./index-9dcf4ab8.js";import{O as D,c as q,T as w}from"./index-e89bb2f6.js";import{I as v}from"./index-f4dfedf2.js";import{S as B}from"./index-7a8c0aa8.js";import{a as n}from"./@emotion-4f16718e.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./hook-34b2061f.js";import"./renderComponentCanvasContainer-44ad78fe.js";import"./style-7ce959a8.js";import"./index-f466602f.js";import"./index-cf2bb556.js";import"./index-b8442d1a.js";import"./layoutInfoListener-bba65cc8.js";import"./drive-6b05f117.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-cd761d27.js";import"./clsx-85d7d0af.js";import"./objectWithoutPropertiesLoose-24430c43.js";import"./index-323e87cb.js";import"./style-bd23c0f2.js";import"./style-91620c64.js";import"./index-5fb9a68f.js";const L=n`
  color: ${l("grayBlue","02")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;

  position: relative;
`,O=n`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  border-bottom: 1px dashed ${l("grayBlue","06")};
`,E=n`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`,N=()=>{const{t:i}=g(),p=S(),t=b(x),[c,m]=a.useState(),e=t.content??D;a.useEffect(()=>{t.resourceID!=null&&I(t.resourceID).then(({data:r})=>{m((r==null?void 0:r.Schema)??{})})},[t.resourceID]);const d=a.useCallback(r=>h=>{p(T.updateCachedAction({...t,content:{...e,opts:{...e.opts,[r]:h}}}))},[t,e,p]);return s(u,{children:[s("div",{css:q,children:[o(v,{style:{height:"88px"},placeholder:i("editor.action.panel.mssql.placeholder.query"),lineNumbers:!0,mode:A.SQL,canShowCompleteInfo:!0,expectedType:y.STRING,value:e.opts.raw,onChange:d("raw"),sqlScheme:c,showSafeModeTips:e.mode==="sql-safe"}),o(w,{fullWidth:!0})]}),(e.mode==="sql"||e.mode==="sql-safe")&&s("div",{css:E,children:[o(f,{content:o(C,{textString:i("editor.action.panel.label.tips.general.safe_mode")}),trigger:"hover",position:"left",maxW:"240px",children:s("span",{css:L,children:[i("editor.action.panel.label.general.safe_mode"),o("span",{css:O})]})}),o(B,{})]})]})};N.displayName="OracleDBPanel";export{N as default};
//# sourceMappingURL=index-43063181.js.map

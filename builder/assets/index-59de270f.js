import{n as l,o as s,k as o,T as f,F as u}from"./@illa-design-1f43bb6c.js";import{u as g,e as S,b,bA as x,hW as T,be as I,eH as y,ed as C}from"./index-4dce6ee8.js";import{r as a}from"./react-9b7e00e3.js";import{a as A}from"./index-03ca7e7b.js";import{O as D,c as q,T as w}from"./index-cd7c17cc.js";import{I as v}from"./index-2c4267bb.js";import{S as L}from"./index-6f9b97ef.js";import{a as n}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./hook-302a78fc.js";import"./renderComponentCanvasContainer-2e4cd54a.js";import"./style-49f23046.js";import"./index-d48f7e94.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";import"./layoutInfoListener-bd63c738.js";import"./drive-584d85d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-a04e2b11.js";import"./objectWithoutPropertiesLoose-e3246981.js";import"./clsx-06f54762.js";import"./index-934389e2.js";import"./style-51b259bb.js";import"./style-af69883e.js";import"./index-b9f5fd51.js";const O=n`
  color: ${l("grayBlue","02")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;

  position: relative;
`,B=n`
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
`,N=()=>{const{t:i}=g(),p=S(),t=b(x),[c,m]=a.useState(),e=t.content??D;a.useEffect(()=>{t.resourceID!=null&&T(t.resourceID).then(({data:r})=>{m((r==null?void 0:r.Schema)??{})})},[t.resourceID]);const d=a.useCallback(r=>h=>{p(I.updateCachedAction({...t,content:{...e,opts:{...e.opts,[r]:h}}}))},[t,e,p]);return s(u,{children:[s("div",{css:q,children:[o(v,{style:{height:"88px"},placeholder:i("editor.action.panel.mssql.placeholder.query"),lineNumbers:!0,mode:A.SQL,canShowCompleteInfo:!0,expectedType:y.STRING,value:e.opts.raw,onChange:d("raw"),sqlScheme:c,showSafeModeTips:e.mode==="sql-safe"}),o(w,{fullWidth:!0})]}),(e.mode==="sql"||e.mode==="sql-safe")&&s("div",{css:E,children:[o(f,{content:o(C,{textString:i("editor.action.panel.label.tips.general.safe_mode")}),trigger:"hover",position:"left",maxW:"240px",children:s("span",{css:O,children:[i("editor.action.panel.label.general.safe_mode"),o("span",{css:B})]})}),o(L,{})]})]})};N.displayName="OracleDBPanel";export{N as default};
//# sourceMappingURL=index-59de270f.js.map

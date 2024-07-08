import{ak as E,o as f,k as t,F as Q,n as I,T as _}from"./@illa-design-402f214a.js";import{u as y,hX as N,eI as D,b as C,bB as j,fw as B,e as O,bf as b,ee as R}from"./index-2f1869ab.js";import{r as l}from"./react-9b7e00e3.js";import{S as T}from"./index-511dc243.js";import{I as A}from"./index-f4dfedf2.js";import{n as M,o as x,c as G,T as P}from"./index-e89bb2f6.js";import{S as U}from"./index-7a8c0aa8.js";import{a as g}from"./@emotion-4f16718e.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-9dcf4ab8.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./index-5fb9a68f.js";import"./hook-34b2061f.js";import"./renderComponentCanvasContainer-44ad78fe.js";import"./style-7ce959a8.js";import"./index-f466602f.js";import"./index-cf2bb556.js";import"./index-b8442d1a.js";import"./layoutInfoListener-bba65cc8.js";import"./drive-6b05f117.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-cd761d27.js";import"./clsx-85d7d0af.js";import"./objectWithoutPropertiesLoose-24430c43.js";import"./index-323e87cb.js";import"./style-bd23c0f2.js";import"./style-91620c64.js";const w=i=>{const{modeContent:s,onChange:c,resourceID:e}=i,n=E(),a=s,{t:r}=y(),[q,S]=l.useState([]),[m,o]=l.useState(!1),[d,u]=l.useState(!1),h=l.useCallback(()=>{u(!0),o(!1),n.error({type:"error",content:r("editor.action.message.mssql.table_error")})},[n,r]);return l.useEffect(()=>{e&&(o(!0),N(e).then(({data:p})=>{const k=Object.keys(p.Schema??{}).map(v=>v);S(k),o(!1),u(!1)},()=>{h()}).finally(()=>{o(!1)}))},[h,e]),f(Q,{children:[t(T,{componentType:"select",placeholder:r("editor.action.panel.mssql.placeholder.table"),onSelectedValueChange:p=>c(p||"","table"),options:q,value:a.table,showSearch:!0,title:r("editor.action.panel.mssql.table"),loading:m,error:d}),t(A,{style:{height:"88px"},title:r("editor.action.panel.mssql.insert_record"),placeholder:r("editor.action.panel.mssql.placeholder.insert_record"),lineNumbers:!0,expectedType:D.ARRAY,value:a.records,onChange:p=>c(p,"records")})]})};w.displayName="MSSQLGUIMode";const L=i=>{const{modeContent:s,showSafeModeTips:c,onChange:e}=i,{t:n}=y();return t(A,{title:n("editor.action.panel.mssql.query"),style:{height:"88px"},placeholder:n("editor.action.panel.mssql.placeholder.query"),lineNumbers:!0,value:s.sql,onChange:a=>e(a,"sql"),showSafeModeTips:c})};L.displayName="MSSQLSqlMode";const V=g`
  width: 160px;
  text-align: right;
`,W=g`
  color: ${I("grayBlue","02")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;

  position: relative;
`,F=g`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  border-bottom: 1px dashed ${I("grayBlue","06")};
`,Y=g`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`,$=[{value:"sql",label:"SQL"},{value:"gui",label:"Bulk insert"}],z=()=>{const{t:i}=y(),s=C(j),c=C(B),e=s.content,n=c.content,a=O(),r=e.mode==="sql"||e.mode==="sql-safe"?e.query:M,q=e.mode==="gui"?e.query:x,S=l.useCallback(o=>{const d=o===n.mode,{query:u}=n,h=o==="sql"?M:x;a(b.updateCachedAction({...s,content:{mode:o,query:{...d?u:h}}}))},[s,n,a]),m=l.useCallback((o,d)=>{o&&a(b.updateCachedAction({...s,content:{...e,query:{...e.query,[d]:o}}}))},[s,e,a]);return f("div",{css:G,children:[t(T,{componentType:"radio-group",type:"button",title:i("editor.action.panel.mssql.config_type"),forceEqualWidth:!0,onChange:S,value:e.mode==="sql"||e.mode==="sql-safe"?"sql":"gui",radioOptions:$}),e.mode==="sql"||e.mode==="sql-safe"?t(L,{modeContent:r,onChange:m,showSafeModeTips:e.mode==="sql-safe"}):t(w,{modeContent:q,onChange:m,resourceID:s.resourceID}),(e.mode==="sql"||e.mode==="sql-safe")&&f("div",{css:Y,children:[t("div",{css:V,children:t(_,{content:t(R,{textString:i("editor.action.panel.label.tips.general.safe_mode")}),trigger:"hover",position:"left",maxW:"240px",children:f("span",{css:W,children:[i("editor.action.panel.label.general.safe_mode"),t("span",{css:F})]})})}),t(U,{})]}),t(P,{})]})};z.displayName="MicrosoftSqlPanel";export{z as default};
//# sourceMappingURL=index-ccfa325c.js.map

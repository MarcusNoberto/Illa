import{ak as E,o as f,k as t,F as Q,n as I,T as _}from"./@illa-design-1f43bb6c.js";import{u as y,hW as N,eH as D,b as C,bA as j,fv as O,e as R,be as b,ed as W}from"./index-4dce6ee8.js";import{r as l}from"./react-9b7e00e3.js";import{S as A}from"./index-01ad6233.js";import{I as T}from"./index-2c4267bb.js";import{n as M,o as x,c as B,T as G}from"./index-cd7c17cc.js";import{S as P}from"./index-6f9b97ef.js";import{a as g}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-03ca7e7b.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./index-b9f5fd51.js";import"./hook-302a78fc.js";import"./renderComponentCanvasContainer-2e4cd54a.js";import"./style-49f23046.js";import"./index-d48f7e94.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";import"./layoutInfoListener-bd63c738.js";import"./drive-584d85d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-a04e2b11.js";import"./objectWithoutPropertiesLoose-e3246981.js";import"./clsx-06f54762.js";import"./index-934389e2.js";import"./style-51b259bb.js";import"./style-af69883e.js";const L=i=>{const{modeContent:s,onChange:c,resourceID:e}=i,n=E(),a=s,{t:r}=y(),[q,S]=l.useState([]),[m,o]=l.useState(!1),[d,u]=l.useState(!1),h=l.useCallback(()=>{u(!0),o(!1),n.error({type:"error",content:r("editor.action.message.mssql.table_error")})},[n,r]);return l.useEffect(()=>{e&&(o(!0),N(e).then(({data:p})=>{const w=Object.keys(p.Schema??{}).map(k=>k);S(w),o(!1),u(!1)},()=>{h()}).finally(()=>{o(!1)}))},[h,e]),f(Q,{children:[t(A,{componentType:"select",placeholder:r("editor.action.panel.mssql.placeholder.table"),onSelectedValueChange:p=>c(p||"","table"),options:q,value:a.table,showSearch:!0,title:r("editor.action.panel.mssql.table"),loading:m,error:d}),t(T,{style:{height:"88px"},title:r("editor.action.panel.mssql.insert_record"),placeholder:r("editor.action.panel.mssql.placeholder.insert_record"),lineNumbers:!0,expectedType:D.ARRAY,value:a.records,onChange:p=>c(p,"records")})]})};L.displayName="MSSQLGUIMode";const v=i=>{const{modeContent:s,showSafeModeTips:c,onChange:e}=i,{t:n}=y();return t(T,{title:n("editor.action.panel.mssql.query"),style:{height:"88px"},placeholder:n("editor.action.panel.mssql.placeholder.query"),lineNumbers:!0,value:s.sql,onChange:a=>e(a,"sql"),showSafeModeTips:c})};v.displayName="MSSQLSqlMode";const U=g`
  width: 160px;
  text-align: right;
`,V=g`
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
`,$=[{value:"sql",label:"SQL"},{value:"gui",label:"Bulk insert"}],z=()=>{const{t:i}=y(),s=C(j),c=C(O),e=s.content,n=c.content,a=R(),r=e.mode==="sql"||e.mode==="sql-safe"?e.query:M,q=e.mode==="gui"?e.query:x,S=l.useCallback(o=>{const d=o===n.mode,{query:u}=n,h=o==="sql"?M:x;a(b.updateCachedAction({...s,content:{mode:o,query:{...d?u:h}}}))},[s,n,a]),m=l.useCallback((o,d)=>{o&&a(b.updateCachedAction({...s,content:{...e,query:{...e.query,[d]:o}}}))},[s,e,a]);return f("div",{css:B,children:[t(A,{componentType:"radio-group",type:"button",title:i("editor.action.panel.mssql.config_type"),forceEqualWidth:!0,onChange:S,value:e.mode==="sql"||e.mode==="sql-safe"?"sql":"gui",radioOptions:$}),e.mode==="sql"||e.mode==="sql-safe"?t(v,{modeContent:r,onChange:m,showSafeModeTips:e.mode==="sql-safe"}):t(L,{modeContent:q,onChange:m,resourceID:s.resourceID}),(e.mode==="sql"||e.mode==="sql-safe")&&f("div",{css:Y,children:[t("div",{css:U,children:t(_,{content:t(W,{textString:i("editor.action.panel.label.tips.general.safe_mode")}),trigger:"hover",position:"left",maxW:"240px",children:f("span",{css:V,children:[i("editor.action.panel.label.general.safe_mode"),t("span",{css:F})]})})}),t(P,{})]}),t(G,{})]})};z.displayName="MicrosoftSqlPanel";export{z as default};
//# sourceMappingURL=index-e39f966e.js.map

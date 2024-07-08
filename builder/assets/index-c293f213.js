import{n as L,q as N,o as c,k as s,T as v}from"./@illa-design-1f43bb6c.js";import{b as q,bA as w,e as D,g as P,u as k,hW as Q,be as C,cP as p,a as m,ig as B,l as G,eH as R,ed as O}from"./index-4dce6ee8.js";import{r as o}from"./react-9b7e00e3.js";import{a as I,C as W}from"./index-03ca7e7b.js";import{a}from"./@emotion-08a6282b.js";import{T as j}from"./index-cd7c17cc.js";import{S as V}from"./index-6f9b97ef.js";import{S as $}from"./index-b9f5fd51.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./hook-302a78fc.js";import"./renderComponentCanvasContainer-2e4cd54a.js";import"./style-49f23046.js";import"./index-d48f7e94.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";import"./layoutInfoListener-bd63c738.js";import"./drive-584d85d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-a04e2b11.js";import"./objectWithoutPropertiesLoose-e3246981.js";import"./clsx-06f54762.js";import"./index-934389e2.js";import"./style-51b259bb.js";import"./style-af69883e.js";a`
  display: flex;
  flex-direction: column;
`;const H=a`
  margin: 8px 16px;
`,Y=a`
  padding: 8px 0;
`;a`
  padding: 8px 16px;
  display: flex;
  width: 100%;
  align-items: center;
`;const z=a`
  color: ${L("grayBlue","02")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  position: relative;
`,K=a`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  border-bottom: 1px dashed ${L("grayBlue","06")};
`,U=a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`,X=()=>{const e=q(w),[T,b]=o.useState(),n=D(),u=q(P),{t:d}=k();o.useEffect(()=>{e.resourceID!=null&&Q(e.resourceID).then(({data:t})=>{b((t==null?void 0:t.Schema)??{})})},[e.resourceID]);const A=o.useMemo(()=>{switch(e.actionType){case"hydra":case"postgresql":return I.PGSQL;default:return I.SQL}},[e.actionType]),E=e.displayName,r=e.content,f=o.useMemo(()=>{var t;return((t=e.content)==null?void 0:t.query)||""},[e]),g=o.useRef(null),[F,h]=o.useState(!1),[l,J]=o.useState(1),y=N(),M=o.useCallback(t=>{n(C.updateCachedAction({...e,content:{...r,query:t}}))},[e,n,r]);o.useEffect(()=>{p(m.SHOW,{element:"sql_generation",parameter1:e.actionType})},[e.actionType]);const _=o.useCallback(t=>{p(m.BLUR,{element:"action_edit_code_mirror",parameter2:"content.query",parameter3:t.length})},[]);return o.useCallback(async()=>{var S,x;h(!0),p(m.CLICK,{element:"sql_generation",parameter1:e.actionType,parameter4:{type:l,content:(S=g.current)==null?void 0:S.value}});const t={description:(x=g.current)==null?void 0:x.value,resourceID:e.resourceID,action:l};try{const i=await B(u.appId,t);n(C.updateCachedAction({...e,content:{...r,query:i.data.payload}}))}catch(i){G(i)&&y.error({content:i.data.errorMessage})}h(!1)},[u.appId,e,l,n,y,r]),c("div",{css:Y,children:[null,c("div",{css:H,children:[s(W,{className:`${E}-query`,placeholder:"select * from users;",showLineNumbers:!0,height:"88px",value:f,lang:A,canShowCompleteInfo:!0,expectValueType:R.STRING,sqlScheme:T,onChange:M,onBlur:_}),r.mode==="sql-safe"&&s($,{value:f})]}),(r.mode==="sql"||r.mode==="sql-safe")&&c("div",{css:U,children:[s(v,{content:s(O,{textString:d("editor.action.panel.label.tips.general.safe_mode")}),trigger:"hover",position:"left",maxW:"240px",children:c("span",{css:z,children:[d("editor.action.panel.label.general.safe_mode"),s("span",{css:K})]})}),s(V,{})]}),s(j,{fullWidth:!0})]})};X.displayName="MysqlPanel";export{X as default};
//# sourceMappingURL=index-c293f213.js.map

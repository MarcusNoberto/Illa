import{n as L,q as N,o as c,k as s,T as v}from"./@illa-design-402f214a.js";import{b as I,bB as w,e as D,g as k,u as P,hX as Q,bf as q,cQ as p,a as m,ih as B,l as G,eI as R,ee as O}from"./index-2f1869ab.js";import{r as o}from"./react-9b7e00e3.js";import{a as C,C as j}from"./index-9dcf4ab8.js";import{a}from"./@emotion-4f16718e.js";import{T as V}from"./index-e89bb2f6.js";import{S as W}from"./index-7a8c0aa8.js";import{S as $}from"./index-5fb9a68f.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./hook-34b2061f.js";import"./renderComponentCanvasContainer-44ad78fe.js";import"./style-7ce959a8.js";import"./index-f466602f.js";import"./index-cf2bb556.js";import"./index-b8442d1a.js";import"./layoutInfoListener-bba65cc8.js";import"./drive-6b05f117.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-cd761d27.js";import"./clsx-85d7d0af.js";import"./objectWithoutPropertiesLoose-24430c43.js";import"./index-323e87cb.js";import"./style-bd23c0f2.js";import"./style-91620c64.js";a`
  display: flex;
  flex-direction: column;
`;const X=a`
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
`,H=a`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  border-bottom: 1px dashed ${L("grayBlue","06")};
`,K=a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`,U=()=>{const e=I(w),[T,b]=o.useState(),n=D(),u=I(k),{t:d}=P();o.useEffect(()=>{e.resourceID!=null&&Q(e.resourceID).then(({data:t})=>{b((t==null?void 0:t.Schema)??{})})},[e.resourceID]);const A=o.useMemo(()=>{switch(e.actionType){case"hydra":case"postgresql":return C.PGSQL;default:return C.SQL}},[e.actionType]),E=e.displayName,r=e.content,f=o.useMemo(()=>{var t;return((t=e.content)==null?void 0:t.query)||""},[e]),h=o.useRef(null),[F,g]=o.useState(!1),[l,J]=o.useState(1),y=N(),M=o.useCallback(t=>{n(q.updateCachedAction({...e,content:{...r,query:t}}))},[e,n,r]);o.useEffect(()=>{p(m.SHOW,{element:"sql_generation",parameter1:e.actionType})},[e.actionType]);const _=o.useCallback(t=>{p(m.BLUR,{element:"action_edit_code_mirror",parameter2:"content.query",parameter3:t.length})},[]);return o.useCallback(async()=>{var S,x;g(!0),p(m.CLICK,{element:"sql_generation",parameter1:e.actionType,parameter4:{type:l,content:(S=h.current)==null?void 0:S.value}});const t={description:(x=h.current)==null?void 0:x.value,resourceID:e.resourceID,action:l};try{const i=await B(u.appId,t);n(q.updateCachedAction({...e,content:{...r,query:i.data.payload}}))}catch(i){G(i)&&y.error({content:i.data.errorMessage})}g(!1)},[u.appId,e,l,n,y,r]),c("div",{css:Y,children:[null,c("div",{css:X,children:[s(j,{className:`${E}-query`,placeholder:"select * from users;",showLineNumbers:!0,height:"88px",value:f,lang:A,canShowCompleteInfo:!0,expectValueType:R.STRING,sqlScheme:T,onChange:M,onBlur:_}),r.mode==="sql-safe"&&s($,{value:f})]}),(r.mode==="sql"||r.mode==="sql-safe")&&c("div",{css:K,children:[s(v,{content:s(O,{textString:d("editor.action.panel.label.tips.general.safe_mode")}),trigger:"hover",position:"left",maxW:"240px",children:c("span",{css:z,children:[d("editor.action.panel.label.general.safe_mode"),s("span",{css:H})]})}),s(W,{})]}),s(V,{fullWidth:!0})]})};U.displayName="MysqlPanel";export{U as default};
//# sourceMappingURL=index-6fba99b6.js.map

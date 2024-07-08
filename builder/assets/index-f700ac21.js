import{k as n,l as h,m as g,o as b,a3 as N,J as k,T as D,cs as I,aW as _,O as j}from"./@illa-design-402f214a.js";import{r as a}from"./react-9b7e00e3.js";import{r as v}from"./style-65ce7107.js";import{gY as E,u as S,eo as L}from"./index-2f1869ab.js";import{b as V,a as O,g as z}from"./generateNewColumns-1d8462f1.js";import{a as i}from"./@emotion-4f16718e.js";import{i as w}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";const C=a.createContext({}),$=r=>{const{columnItems:t,attrPath:o,handleUpdateDsl:e}=r,c=a.useCallback(l=>{const s=t.filter((y,p)=>p!==l);e(o,s)},[t,e,o]),u=a.useCallback(l=>{let s=t.find((p,x)=>x===l);if(!s)return;s={...s,id:V()};const y=[...t,s];e(o,y)},[t,e,o]),d=a.useCallback((l,s)=>{const y=t[l],p=[...t];p.splice(l,1),p.splice(s,0,y),e(o,p)},[o,t,e]),m=a.useCallback((l,s)=>{e(l,s)},[e]),f={...r,handleDeleteColumnItem:c,handleCopyColumnItem:u,handleMoveColumnItem:d,handleUpdateItemVisible:m};return n(C.Provider,{value:f,children:r.children})};$.displayName="ColumnsSetterProvider";i`
  width: 100%;
  background-color: ${h(`--${g}-grayBlue-09`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  color: ${h(`--${g}-grayBlue-02`)};
  font-weight: 500;
  box-sizing: border-box;
  ${E}
`;const M=i`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${h(`--${g}-techPurple-03`)};
  cursor: pointer;
  font-weight: 400;
  margin: 0 8px;
`,W=i`
  display: flex;
  justify-content: space-between;
  margin: 0 16px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`,R=i`
  margin-right: 4px;
  font-size: 12px;
`,T=i`
  border: 1px solid ${h(`--${g}-grayBlue-08`)};
  margin: 0 16px;
  border-radius: 8px;
  overflow: hidden;
`,U=i`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  height: 40px;
  align-items: center;
  cursor: pointer;

  &:hover {
    .movableIconWrapper {
      opacity: 1;
    }
  }
`,G=i`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,q=i`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`,J=i`
  font-size: 14px;
  color: ${h(`--${g}-grayBlue-02`)};
`,Y=i`
  opacity: 0;
  cursor: grab;
  display: flex;
  align-items: center;
  color: ${h(`--${g}-grayBlue-04`)};
`,F=i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  color: ${h(`--${g}-grayBlue-04`)};
`,H=i`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,A=i`
  font-size: 16px;
  color: ${h(`--${g}-grayBlue-04`)};
  cursor: pointer;
  :hover {
    color: ${h(`--${g}-grayBlue-02`)};
  }
`;i`
  visibility: hidden;
  ${A}
`;i`
  list-style: none;
  padding: 0;
  margin: 0;
`;const B=r=>{const{index:t,label:o}=r,[e,c]=a.useState(!1),{columnItems:u,widgetDisplayName:d,attrPath:m,childrenSetter:f,handleDeleteColumnItem:l}=a.useContext(C),{t:s}=S(),y=a.useCallback(()=>{c(!1)},[]);return n(D,{withoutPadding:!0,colorScheme:"white",popupVisible:e,content:n(L,{title:o??"",handleCloseModal:y,attrPath:`${m}.${t}`,widgetDisplayName:d,childrenSetter:f}),trigger:"click",showArrow:!1,position:"left",clickOutsideToClose:!0,onVisibleChange:p=>{c(p)},children:b("div",{css:G,children:[b("div",{css:q,children:[n("span",{css:Y,className:"movableIconWrapper",children:n(N,{})}),n("span",{css:J,children:o||s("editor.inspect.setter_content.option_list.list_no_label")})]}),n("div",{css:H,children:(u==null?void 0:u.length)>1?n("span",{css:A,onClick:p=>{l(t),p.stopPropagation()},children:n(k,{})}):null})]})})};B.displayName="DragIconAndLabel";const K=r=>{const{index:t,cellValue:o,label:e,id:c}=r,u=a.useRef(null);return n("div",{ref:u,css:U,children:n(B,{id:c,index:t,label:e,cellValue:o})})},P=()=>n("div",{css:F,children:"No columns"});P.displayName="ColumnsEmptyBody";const Q=()=>{const{columnItems:r,handleUpdateDsl:t,attrPath:o}=a.useContext(C),[e,c]=a.useState(r);a.useEffect(()=>{w(r,e)||c(r)},[r]);const u=d=>{w(d,e)||c(d)};return!r||!Array.isArray(r)||r.length===0?n(P,{}):n(_,{initial:!1,children:n(I.Group,{axis:"y",initial:!1,values:e,onReorder:u,css:v,children:e.map((d,m)=>{const{cellValue:f,id:l,label:s}=d;return n(I.Item,{initial:!1,css:v,value:d,onDragEnd:()=>{const y=e.map((p,x)=>({...p,index:x}));t(o,y)},children:n(K,{label:s,cellValue:f,index:m,id:l},l)},l)})})})},X=r=>{const{attrName:t,handleUpdateDsl:o,value:e=[],childrenSetter:c,widgetDisplayName:u}=r,{t:d}=S(),m=a.useMemo(()=>{var l;return(l=t==null?void 0:t.split("."))==null?void 0:l.pop()},[t]),f=a.useCallback(()=>{const l=e.length+1;if(m==="buttonGroupContent"){const s=O(l);o(t,[...e,s])}else if(m==="iconGroupContent"){const s=z(l);o(t,[...e,s])}},[e,t,o,m]);return!Array.isArray(c)||c.length===0?null:b($,{childrenSetter:c,widgetDisplayName:u,columnItems:e,attrPath:t,handleUpdateDsl:o,children:[b("div",{css:W,children:[n("div",{children:d("editor.inspect.setter_content.column_setter.label",{number:e.length})}),b("div",{css:M,onClick:f,children:[n(j,{_css:R}),n("span",{children:d("editor.inspect.setter_content.column_setter.new")})]})]}),n("div",{css:T,children:n(Q,{})})]})};X.displayName="CellSetter";export{X as default};
//# sourceMappingURL=index-f700ac21.js.map

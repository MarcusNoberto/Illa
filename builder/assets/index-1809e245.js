import{v as U,k as w,l as W,m as P,o as K,O as ee,B as ne,a3 as se,aa as re,T as q,a4 as te,J as oe,cv as S,aW as ie}from"./@illa-design-1f43bb6c.js";import{r as c}from"./react-9b7e00e3.js";import{e as G,b as B,ci as D,bg as T,ho as z,hp as F,aB as ce,u as R,hq as ae,fM as le,en as de,cm as pe,cl as ye,bf as ue}from"./index-4dce6ee8.js";import{g as b,v as me,i as j}from"./lodash-lib-6e94956b.js";import{a as $}from"./@emotion-08a6282b.js";import{r as H}from"./style-a950892e.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";let J=new Set;const we=()=>{let m=1,s=`View ${m}`;for(;J.has(s);)m++,s=`View ${m}`;return s},Q=()=>`views-${U()}`,X=m=>{J=new Set(m);const s=we();return{id:Q(),key:s,label:s}},_=c.createContext({}),Y=m=>{const{viewsList:s,attrPath:t,widgetDisplayName:a,handleUpdateMultiAttrDSL:y,handleUpdateExecutionResult:l,componentNode:d}=m,n=G(),h=B(D),N=B(i=>{const e=D(i);return b(e,a,{})}),f=c.useMemo(()=>b(h,`${a}.${t}`,[]),[t,h,a]),I=c.useMemo(()=>b(N,"linkWidgetDisplayName",""),[N]),o=c.useMemo(()=>b(h,`${a}.currentIndex`),[h,a]),r=c.useMemo(()=>f.map(i=>i.key),[f]),C=c.useCallback(i=>{if(s.length<=1)return;const e=s.filter((k,V)=>V!==i),p=d.childrenNode[i],u={[t]:e,currentIndex:0,currentKey:r[0]};if(o!==i){const k=s[o].key,V=e.findIndex(A=>A.key===k);V!==-1&&(u.currentIndex=V,u.currentKey=k)}y==null||y(u),n(T.deleteComponentNodeReducer({displayNames:[p]}))},[r,t,d.childrenNode,o,n,y,s]),x=c.useCallback(i=>{let e=s.find((V,A)=>A===i);if(!e)return;const p=z(F,d.displayName),u=X(r);e={...e,key:u.key,id:Q()};const k=[...s,e];y==null||y({[t]:k}),n(T.addComponentReducer([p]))},[r,t,d.displayName,n,y,s]),g=c.useCallback(i=>{if(i>s.length||i<0)return;const e=f[i].key;if(l==null||l(a,{currentIndex:i,currentKey:e||i}),I)if(Array.isArray(I))I.forEach(p=>{l==null||l(p,{currentIndex:i,currentKey:e||i})});else{l==null||l(I,{currentIndex:i,currentKey:e||i});const p=b(h,`${I}.linkWidgetDisplayName`,[]);p&&Array.isArray(p)&&p.forEach(u=>{u!==a&&(l==null||l(u,{currentIndex:i,currentKey:e||i}))})}},[f,h,l,I,s.length,a]),E=c.useCallback((i,e)=>{const p=s[i],u=s[o],k=ce(d.childrenNode);[k[i],k[e]]=[k[e],k[i]];const V=[...s];V.splice(i,1),V.splice(e,0,p);const A=V.findIndex(L=>L.key===u.key),M=V[A].key;y==null||y({[t]:V,currentIndex:A,currentKey:M}),n(T.sortComponentNodeChildrenReducer({parentDisplayName:d.displayName,newChildrenNode:k}))},[t,d.childrenNode,d.displayName,o,n,y,s]),v={...m,handleDeleteOptionItem:C,handleCopyOptionItem:x,currentViewIndex:o,handleUpdateCurrentViewIndex:g,handleMoveOptionItem:E};return w(_.Provider,{value:v,children:m.children})};Y.displayName="OptionListSetterProvider";const ge=$`
  padding: 8px 16px;
  width: 100%;
`,he=$`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${W(`--${P}-grayBlue-08`)};
`,fe=$`
  width: 100%;
  background-color: ${W(`--${P}-grayBlue-09`)};
  padding: 8px 8px 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ne=$`
  color: ${W(`--${P}-grayBlue-02`)};
  font-weight: 500;
  font-size: 14px;
`,ke=m=>$`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: ${m?`4px solid ${W(`--${P}-techPurple-03`)}`:`2px solid ${W(`--${P}-grayBlue-08`)}`};
    cursor: pointer;
  `,Ie=$`
  display: flex;
  align-items: center;
  flex: 0;
`,Ce=$`
  display: flex;
  gap: 8px;
  align-items: center;
  white-space: nowrap;
`,xe=$`
  display: flex;
  align-items: center;
  gap: 16px;
`,Z=$`
  cursor: pointer;
  width: 16px;
  height: 16px;
  color: ${W(`--${P}-grayBlue-04`)};
`,be=$`
  ${Z};
  visibility: hidden;
`,$e=$`
  cursor: move;
  color: ${W(`--${P}-grayBlue-04`)};
  width: 16px;
  height: 16px;
  visibility: hidden;
`,ve=$`
  width: 100%;
  height: 40px;
  padding: 9px 16px 9px 0;
  display: flex;
  justify-content: space-between;
  user-select: none;
  :hover {
    #dragIcon {
      visibility: visible;
    }
    #copyIcon {
      visibility: visible;
    }
  }
`,Ve=m=>{const{t:s}=R(),{labelName:t,addAction:a,hasAddAction:y}=m;return K("div",{css:fe,children:[w("span",{css:Ne,children:t}),y&&w(ne,{leftIcon:w(ee,{}),colorScheme:"techPurple",variant:"text",onClick:a,children:s("editor.inspect.setter_content.column_setter.new")})]})},We=({isSelected:m,onClick:s})=>w("div",{css:ke(m),onClick:s}),O=m=>{const{index:s,label:t,isSelected:a}=m,{widgetDisplayName:y,attrPath:l,handleUpdateCurrentViewIndex:d}=c.useContext(_),{t:n}=R(),h=B(D),N=c.useMemo(()=>b(h,`${y}.${l}.${s}`,{}),[l,h,s,y]),f=c.useMemo(()=>b(h,`${y}.${l}`,[]).map((C,x)=>C.key||x).filter((C,x)=>x!=s),[l,h,s,y]),I=c.useMemo(()=>f.some(r=>r==N.key),[f,N]),o=c.useCallback(r=>{r.stopPropagation(),d(s)},[d,s]);return K("span",{css:Ie,children:[w(se,{css:$e,id:"dragIcon"}),K("div",{css:Ce,children:[w(We,{isSelected:a,onClick:o}),w("span",{style:{maxWidth:"147px"},children:t}),I&&w(q,{trigger:"hover",showArrow:!1,position:"bottom",content:`${n("widget.container.key_duplicated")}`,children:w(re,{color:W(`--${P}-orange-03`)})})]})]})};O.displayName="DragIconAndLabel";const Pe=m=>{const{label:s,index:t,isSelected:a}=m,[y,l]=c.useState(!1),{handleDeleteOptionItem:d,handleCopyOptionItem:n,attrPath:h,widgetDisplayName:N,childrenSetter:f,handleUpdateDsl:I,handleUpdateMultiAttrDSL:o,handleUpdateOtherMultiAttrDSL:r}=c.useContext(_),{t:C}=R(),x=c.useCallback(()=>{l(!1)},[]),g=B(ae),E=(g==null?void 0:g.type)||"",v=(g==null?void 0:g.parentNode)||"",i=(g==null?void 0:g.props)||{};return w(q,{withoutPadding:!0,colorScheme:"white",popupVisible:y,content:w(le,{widgetType:E,widgetDisplayName:N,widgetParentDisplayName:v,widgetProps:i,handleUpdateDsl:I,handleUpdateMultiAttrDSL:e=>{o==null||o(e)},handleUpdateOtherMultiAttrDSL:(e,p)=>{r==null||r(e,p)},widgetOrAction:"WIDGET",children:w(de,{title:C("editor.inspect.setter_content.option_list.model_title"),handleCloseModal:x,attrPath:`${h}.${t}`,widgetDisplayName:N,childrenSetter:f})}),trigger:"click",showArrow:!1,position:"left",clickOutsideToClose:!0,onVisibleChange:e=>{l(e)},children:K("span",{css:ve,children:[w(O,{index:t,label:s,isSelected:a}),K("span",{css:xe,children:[w(te,{css:be,id:"copyIcon",onClick:e=>{e.stopPropagation(),n(t)}}),w(oe,{css:Z,onClick:e=>{e.stopPropagation(),d(t)}})]})]})})},Ae=()=>{const m=G(),{viewsList:s,componentNode:t,currentViewIndex:a,attrPath:y,handleUpdateMultiAttrDSL:l}=c.useContext(_),d=s.map((o,r)=>Array.isArray(t.childrenNode)?{...o,childrenNode:t.childrenNode[r]}:{...o,childrenNode:""}),[n,h]=c.useState(d),N=c.useMemo(()=>s[a],[s,a]),f=c.useCallback(()=>{const o=[],r=[];n.forEach(g=>{g!=null&&g.childrenNode&&o.push(g.childrenNode),r.push(me(g,["childrenNode"]))});const C=r.findIndex(g=>g.key===N.key),x=r[C].key;l==null||l({[y]:r,currentIndex:C,currentKey:x}),m(T.sortComponentNodeChildrenReducer({parentDisplayName:t.displayName,newChildrenNode:o}))},[n,l,y,m,t.displayName,N==null?void 0:N.key]);c.useEffect(()=>{j(s,n)||h(s.map((o,r)=>Array.isArray(t.childrenNode)?{...o,childrenNode:t.childrenNode[r]}:{...o,childrenNode:""}))},[t.childrenNode,s]);const I=o=>{j(o,n)||h(o)};return Array.isArray(s)?w(ie,{initial:!1,children:w(S.Group,{axis:"y",initial:!1,values:n,onReorder:I,css:H,children:n.map((o,r)=>{const{id:C,label:x,key:g}=o;return w(S.Item,{initial:!1,css:H,value:o,onDragEnd:f,children:w(Pe,{value:o,label:x,index:r,isSelected:g===(N==null?void 0:N.key)},C)},o.id)})})}):null},Ke=c.memo(m=>{const{value:s,attrName:t,widgetDisplayName:a,childrenSetter:y,handleUpdateExecutionResult:l,handleUpdateMultiAttrDSL:d,handleUpdateOtherMultiAttrDSL:n,componentNode:h}=m,{t:N}=R(),f=B(D),I=G(),o=B(e=>{const p=D(e);return b(p,a,{})}),r=c.useMemo(()=>b(o,"linkWidgetDisplayName",""),[o]),C=c.useMemo(()=>b(f,`${a}.${t}`,[]),[t,f,a]),x=c.useMemo(()=>C.map(e=>e.key),[C]),g=c.useCallback(e=>{if(d==null||d(e),r)if(Array.isArray(r))r.forEach(p=>{n==null||n(p,e)});else{n==null||n(r,e);const p=b(f,`${r}.linkWidgetDisplayName`,[]);p&&Array.isArray(p)&&p.forEach(u=>{u!==a&&(n==null||n(u,e))})}},[f,d,n,r,a]),E=c.useCallback((e,p)=>{if(d==null||d({[e]:p}),r)if(Array.isArray(r))r.forEach(u=>{n==null||n(u,{[e]:p})});else{n==null||n(r,{[e]:p});const u=b(f,`${r}.linkWidgetDisplayName`,[]);u&&Array.isArray(u)&&u.forEach(k=>{k!==a&&(n==null||n(k,{[e]:p}))})}},[d,r,n,f,a]),v=c.useMemo(()=>{if(h.type==="CONTAINER_WIDGET")return h;const e=pe(ye(ue.getState()),r);return(e==null?void 0:e.type)==="CONTAINER_WIDGET"?e:{}},[h,r]),i=c.useCallback(()=>{const e=X(x),p=z(F,v==null?void 0:v.displayName);if(d==null||d({[t]:[...s,e]}),r)if(Array.isArray(r))r.forEach(u=>{n==null||n(u,{[t]:[...s,e]})});else{n==null||n(r,{[t]:[...s,e]});const u=b(f,`${r}.linkWidgetDisplayName`,[]);u&&Array.isArray(u)&&u.forEach(k=>{k!==a&&(n==null||n(k,{[t]:[...s,e]}))})}I(T.addComponentReducer([p]))},[v==null?void 0:v.displayName,x,t,I,f,d,n,r,s,a]);return w(Y,{viewsList:s,childrenSetter:y||[],widgetDisplayName:a,attrPath:t,handleUpdateDsl:E,handleUpdateMultiAttrDSL:g,handleUpdateExecutionResult:l,handleUpdateOtherMultiAttrDSL:n,componentNode:v,children:w("div",{css:ge,children:K("div",{css:he,children:[w(Ve,{labelName:N("editor.inspect.setter_content.view_setter.views"),addAction:i,hasAddAction:!0}),w(Ae,{})]})})})});Ke.displayName="ViewsSetter";export{Ke as default};
//# sourceMappingURL=index-1809e245.js.map

import{v as U,k as w,l as W,m as P,o as K,O as ee,B as ne,a3 as se,aa as re,T as q,a4 as te,J as oe,cs as G,aW as ie}from"./@illa-design-402f214a.js";import{r as c}from"./react-9b7e00e3.js";import{e as j,b as B,cj as D,bh as T,hp as z,hq as F,aB as ce,u as R,hr as ae,fN as le,eo as de,cn as pe,cm as ye,bg as ue}from"./index-2f1869ab.js";import{g as b,v as me,i as S}from"./lodash-lib-6e94956b.js";import{a as $}from"./@emotion-4f16718e.js";import{r as H}from"./style-65ce7107.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";let J=new Set;const we=()=>{let m=1,s=`View ${m}`;for(;J.has(s);)m++,s=`View ${m}`;return s},Q=()=>`views-${U()}`,X=m=>{J=new Set(m);const s=we();return{id:Q(),key:s,label:s}},_=c.createContext({}),Y=m=>{const{viewsList:s,attrPath:t,widgetDisplayName:a,handleUpdateMultiAttrDSL:y,handleUpdateExecutionResult:l,componentNode:d}=m,n=j(),h=B(D),f=B(i=>{const e=D(i);return b(e,a,{})}),N=c.useMemo(()=>b(h,`${a}.${t}`,[]),[t,h,a]),I=c.useMemo(()=>b(f,"linkWidgetDisplayName",""),[f]),o=c.useMemo(()=>b(h,`${a}.currentIndex`),[h,a]),r=c.useMemo(()=>N.map(i=>i.key),[N]),C=c.useCallback(i=>{if(s.length<=1)return;const e=s.filter((k,V)=>V!==i),p=d.childrenNode[i],u={[t]:e,currentIndex:0,currentKey:r[0]};if(o!==i){const k=s[o].key,V=e.findIndex(A=>A.key===k);V!==-1&&(u.currentIndex=V,u.currentKey=k)}y==null||y(u),n(T.deleteComponentNodeReducer({displayNames:[p]}))},[r,t,d.childrenNode,o,n,y,s]),x=c.useCallback(i=>{let e=s.find((V,A)=>A===i);if(!e)return;const p=z(F,d.displayName),u=X(r);e={...e,key:u.key,id:Q()};const k=[...s,e];y==null||y({[t]:k}),n(T.addComponentReducer([p]))},[r,t,d.displayName,n,y,s]),g=c.useCallback(i=>{if(i>s.length||i<0)return;const e=N[i].key;if(l==null||l(a,{currentIndex:i,currentKey:e||i}),I)if(Array.isArray(I))I.forEach(p=>{l==null||l(p,{currentIndex:i,currentKey:e||i})});else{l==null||l(I,{currentIndex:i,currentKey:e||i});const p=b(h,`${I}.linkWidgetDisplayName`,[]);p&&Array.isArray(p)&&p.forEach(u=>{u!==a&&(l==null||l(u,{currentIndex:i,currentKey:e||i}))})}},[N,h,l,I,s.length,a]),E=c.useCallback((i,e)=>{const p=s[i],u=s[o],k=ce(d.childrenNode);[k[i],k[e]]=[k[e],k[i]];const V=[...s];V.splice(i,1),V.splice(e,0,p);const A=V.findIndex(L=>L.key===u.key),M=V[A].key;y==null||y({[t]:V,currentIndex:A,currentKey:M}),n(T.sortComponentNodeChildrenReducer({parentDisplayName:d.displayName,newChildrenNode:k}))},[t,d.childrenNode,d.displayName,o,n,y,s]),v={...m,handleDeleteOptionItem:C,handleCopyOptionItem:x,currentViewIndex:o,handleUpdateCurrentViewIndex:g,handleMoveOptionItem:E};return w(_.Provider,{value:v,children:m.children})};Y.displayName="OptionListSetterProvider";const ge=$`
  padding: 8px 16px;
  width: 100%;
`,he=$`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${W(`--${P}-grayBlue-08`)};
`,Ne=$`
  width: 100%;
  background-color: ${W(`--${P}-grayBlue-09`)};
  padding: 8px 8px 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,fe=$`
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
`,Ve=m=>{const{t:s}=R(),{labelName:t,addAction:a,hasAddAction:y}=m;return K("div",{css:Ne,children:[w("span",{css:fe,children:t}),y&&w(ne,{leftIcon:w(ee,{}),colorScheme:"techPurple",variant:"text",onClick:a,children:s("editor.inspect.setter_content.column_setter.new")})]})},We=({isSelected:m,onClick:s})=>w("div",{css:ke(m),onClick:s}),O=m=>{const{index:s,label:t,isSelected:a}=m,{widgetDisplayName:y,attrPath:l,handleUpdateCurrentViewIndex:d}=c.useContext(_),{t:n}=R(),h=B(D),f=c.useMemo(()=>b(h,`${y}.${l}.${s}`,{}),[l,h,s,y]),N=c.useMemo(()=>b(h,`${y}.${l}`,[]).map((C,x)=>C.key||x).filter((C,x)=>x!=s),[l,h,s,y]),I=c.useMemo(()=>N.some(r=>r==f.key),[N,f]),o=c.useCallback(r=>{r.stopPropagation(),d(s)},[d,s]);return K("span",{css:Ie,children:[w(se,{css:$e,id:"dragIcon"}),K("div",{css:Ce,children:[w(We,{isSelected:a,onClick:o}),w("span",{style:{maxWidth:"147px"},children:t}),I&&w(q,{trigger:"hover",showArrow:!1,position:"bottom",content:`${n("widget.container.key_duplicated")}`,children:w(re,{color:W(`--${P}-orange-03`)})})]})]})};O.displayName="DragIconAndLabel";const Pe=m=>{const{label:s,index:t,isSelected:a}=m,[y,l]=c.useState(!1),{handleDeleteOptionItem:d,handleCopyOptionItem:n,attrPath:h,widgetDisplayName:f,childrenSetter:N,handleUpdateDsl:I,handleUpdateMultiAttrDSL:o,handleUpdateOtherMultiAttrDSL:r}=c.useContext(_),{t:C}=R(),x=c.useCallback(()=>{l(!1)},[]),g=B(ae),E=(g==null?void 0:g.type)||"",v=(g==null?void 0:g.parentNode)||"",i=(g==null?void 0:g.props)||{};return w(q,{withoutPadding:!0,colorScheme:"white",popupVisible:y,content:w(le,{widgetType:E,widgetDisplayName:f,widgetParentDisplayName:v,widgetProps:i,handleUpdateDsl:I,handleUpdateMultiAttrDSL:e=>{o==null||o(e)},handleUpdateOtherMultiAttrDSL:(e,p)=>{r==null||r(e,p)},widgetOrAction:"WIDGET",children:w(de,{title:C("editor.inspect.setter_content.option_list.model_title"),handleCloseModal:x,attrPath:`${h}.${t}`,widgetDisplayName:f,childrenSetter:N})}),trigger:"click",showArrow:!1,position:"left",clickOutsideToClose:!0,onVisibleChange:e=>{l(e)},children:K("span",{css:ve,children:[w(O,{index:t,label:s,isSelected:a}),K("span",{css:xe,children:[w(te,{css:be,id:"copyIcon",onClick:e=>{e.stopPropagation(),n(t)}}),w(oe,{css:Z,onClick:e=>{e.stopPropagation(),d(t)}})]})]})})},Ae=()=>{const m=j(),{viewsList:s,componentNode:t,currentViewIndex:a,attrPath:y,handleUpdateMultiAttrDSL:l}=c.useContext(_),d=s.map((o,r)=>Array.isArray(t.childrenNode)?{...o,childrenNode:t.childrenNode[r]}:{...o,childrenNode:""}),[n,h]=c.useState(d),f=c.useMemo(()=>s[a],[s,a]),N=c.useCallback(()=>{const o=[],r=[];n.forEach(g=>{g!=null&&g.childrenNode&&o.push(g.childrenNode),r.push(me(g,["childrenNode"]))});const C=r.findIndex(g=>g.key===f.key),x=r[C].key;l==null||l({[y]:r,currentIndex:C,currentKey:x}),m(T.sortComponentNodeChildrenReducer({parentDisplayName:t.displayName,newChildrenNode:o}))},[n,l,y,m,t.displayName,f==null?void 0:f.key]);c.useEffect(()=>{S(s,n)||h(s.map((o,r)=>Array.isArray(t.childrenNode)?{...o,childrenNode:t.childrenNode[r]}:{...o,childrenNode:""}))},[t.childrenNode,s]);const I=o=>{S(o,n)||h(o)};return Array.isArray(s)?w(ie,{initial:!1,children:w(G.Group,{axis:"y",initial:!1,values:n,onReorder:I,css:H,children:n.map((o,r)=>{const{id:C,label:x,key:g}=o;return w(G.Item,{initial:!1,css:H,value:o,onDragEnd:N,children:w(Pe,{value:o,label:x,index:r,isSelected:g===(f==null?void 0:f.key)},C)},o.id)})})}):null},Ke=c.memo(m=>{const{value:s,attrName:t,widgetDisplayName:a,childrenSetter:y,handleUpdateExecutionResult:l,handleUpdateMultiAttrDSL:d,handleUpdateOtherMultiAttrDSL:n,componentNode:h}=m,{t:f}=R(),N=B(D),I=j(),o=B(e=>{const p=D(e);return b(p,a,{})}),r=c.useMemo(()=>b(o,"linkWidgetDisplayName",""),[o]),C=c.useMemo(()=>b(N,`${a}.${t}`,[]),[t,N,a]),x=c.useMemo(()=>C.map(e=>e.key),[C]),g=c.useCallback(e=>{if(d==null||d(e),r)if(Array.isArray(r))r.forEach(p=>{n==null||n(p,e)});else{n==null||n(r,e);const p=b(N,`${r}.linkWidgetDisplayName`,[]);p&&Array.isArray(p)&&p.forEach(u=>{u!==a&&(n==null||n(u,e))})}},[N,d,n,r,a]),E=c.useCallback((e,p)=>{if(d==null||d({[e]:p}),r)if(Array.isArray(r))r.forEach(u=>{n==null||n(u,{[e]:p})});else{n==null||n(r,{[e]:p});const u=b(N,`${r}.linkWidgetDisplayName`,[]);u&&Array.isArray(u)&&u.forEach(k=>{k!==a&&(n==null||n(k,{[e]:p}))})}},[d,r,n,N,a]),v=c.useMemo(()=>{if(h.type==="CONTAINER_WIDGET")return h;const e=pe(ye(ue.getState()),r);return(e==null?void 0:e.type)==="CONTAINER_WIDGET"?e:{}},[h,r]),i=c.useCallback(()=>{const e=X(x),p=z(F,v==null?void 0:v.displayName);if(d==null||d({[t]:[...s,e]}),r)if(Array.isArray(r))r.forEach(u=>{n==null||n(u,{[t]:[...s,e]})});else{n==null||n(r,{[t]:[...s,e]});const u=b(N,`${r}.linkWidgetDisplayName`,[]);u&&Array.isArray(u)&&u.forEach(k=>{k!==a&&(n==null||n(k,{[t]:[...s,e]}))})}I(T.addComponentReducer([p]))},[v==null?void 0:v.displayName,x,t,I,N,d,n,r,s,a]);return w(Y,{viewsList:s,childrenSetter:y||[],widgetDisplayName:a,attrPath:t,handleUpdateDsl:E,handleUpdateMultiAttrDSL:g,handleUpdateExecutionResult:l,handleUpdateOtherMultiAttrDSL:n,componentNode:v,children:w("div",{css:ge,children:K("div",{css:he,children:[w(Ve,{labelName:f("editor.inspect.setter_content.view_setter.views"),addAction:i,hasAddAction:!0}),w(Ae,{})]})})})});Ke.displayName="ViewsSetter";export{Ke as default};
//# sourceMappingURL=index-d5a9ce5a.js.map

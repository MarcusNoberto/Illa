import{k as i,af as Te,n as ye,b7 as ge,o as ee,bX as Ne,av as De,bq as Le,A as Oe,F as Be}from"./@illa-design-402f214a.js";import{bg as je,b4 as ve,dT as _e,dU as Ge,aT as We,dl as ie,eG as ue,dI as Ue,b as re,e as Pe,bf as he,ez as $e,eH as Ve,cj as Je,ci as qe,cm as Fe,dg as Ye,dh as Ke,di as Qe,aS as Se,eI as Xe,eJ as Ze,eK as de}from"./index-2f1869ab.js";import{r as o}from"./react-9b7e00e3.js";import{R as Re}from"./index-f466602f.js";import{g as xe}from"./style-7ce959a8.js";import{a as _}from"./@emotion-4f16718e.js";import{R as et}from"./renderComponentCanvasContainerWithJson-bd5b0f08.js";import{R as tt}from"./index-c428eaa3.js";import{G as nt,i as Ie,t as at,g as pe,s as se}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./renderComponentCanvasContainer-44ad78fe.js";import"./index-cf2bb556.js";import"./index-b8442d1a.js";const we=()=>{const n=je.getState(),t=ve(n)?"normal":"production";return{bottom:i("div",{css:_e(!0,t,"b"),children:i("div",{className:"handler",css:Ge(!0,t,"b")})})}},Ce=n=>{switch(n){case"large":return 20;case"medium":return 16;case"small":return 4;case"none":default:return 1}},Ae=_`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  gap: 8px;
  justify-content: space-between;
`,it=_`
  ${Ae};
  overflow-y: auto;
`,ot=_`
  ${Ae};
  overflow-y: auto;
`,me=(n=!1,e=!1,t,l,a,f=!1,B,r,N)=>{let p=n?0:Ue;const{paddingTop:M,paddingBottom:w,paddingLeft:A,paddingRight:P}=We(N);return _`
    width: 100%;
    height: ${r?`${r}px`:"100%"};
    background-color: ${t?Te(t):"transparent"};
    flex: none;
    border: ${ie}px dashed
      ${e?ye("techPurple","03"):"transparent"};
    opacity: ${f&&!n?.5:1};
    ${a};
    box-shadow: ${l};

    padding: ${M+p}px ${P+p}px
      ${w+p}px ${A+p}px;
    pointer-events: ${B?"none":"unset"};
  `},He=_`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
`,ze=(n,e)=>_`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${n??ue}px;
  overflow-y: auto;
  padding: ${Ce(e)}px;
`,fe=(n,e,t,l,a)=>e||!n?_`
      width: 100%;
      height: ${a?`${a}px`:"100%"};
    `:_`
    width: 100%;
    height: ${a?`${a}px`:"100%"};
    outline: 1px solid ${t??ye("blue","03")} !important;
    border-radius: ${l??"unset"};
  `,Me=n=>{const{templateComponentNodes:e,templateContainerHeight:t,columnNumber:l,displayNamePrefix:a}=n;return e?i(et,{componentNode:e,containerPadding:0,columnNumber:l,displayNamePrefix:a}):null},ke=n=>{const{templateComponentDisplayName:e,columnNumber:t,itemGap:l=ue,dynamicHeight:a,extraHeight:f=0,templateContainerHeight:B,handleUpdateOriginalDSLMultiAttr:r,updateComponentHeight:N,itemNumber:p=1,enableAutoPagination:M,itemShadow:w,itemPadding:A}=n,P=a!=="fixed",u=o.useCallback(S=>{if(!N)return;S+2*ie!==B&&r({itemHeight:S+2*ie},!0);let $,R=l>=0?l:ue;M?$=S+f+ue+2*ie+(S+2*ie+R)*(p-1)+Ce(w)*2:$=S+2*ie+(S+2*ie+R)*(p-1)+Ce(w)*2,N($)},[r,p,B,N,f,M,l,w]);return i(tt,{displayName:e,columnNumber:t,handleUpdateHeight:u,canResizeCanvas:P,containerPadding:A==null?void 0:A.size})},st=n=>{const{dataSources:e,itemHeight:t=48,displayName:l,page:a=0,itemPadding:f,dynamicMinHeight:B,dynamicMaxHeight:r,enablePagination:N,childrenNode:p,itemGap:M,itemShadow:w,itemBorderColor:A,itemBorderRadius:P,itemBorderWidth:u,handleUpdateOriginalDSLMultiAttr:S,updateComponentHeight:$,copyComponents:R,pageSize:q,handleUpdateSelectedItem:Y,itemBackGroundColor:G,columnNumber:te,dynamicHeight:K="fixed",selectIndexForMark:ne,themeColor:c,loading:y,handleUpdateMultiExecutionResult:d,h:C}=n,[W,U]=ge(),[k,x]=ge(),[Q,j]=o.useState(!1),V=re(ve),z=Pe(),J=q||0,b=U.height-x.height,g=o.useMemo(()=>N?J:e==null?void 0:e.length,[e==null?void 0:e.length,N,J]),E=o.useCallback(s=>{Y(),d([{displayName:l,value:{page:s-1}}])},[l,d,Y]),H=o.useMemo(()=>{const s=nt(R,g);return s.length===0?[]:a<s.length?s[a]:s[0]},[R,a,g]),X=s=>{s.preventDefault(),s.stopPropagation(),z(he.setResizingNodeIDsReducer([`${l}-resize-listItem`]))},v=o.useCallback((s,T,D,L)=>{const{height:oe}=L;let ae=t+oe;S({itemHeight:ae}),z(he.setResizingNodeIDsReducer([]))},[z,S,t]),h=V&&Q,F=xe(w),le=o.useMemo(()=>{let s,T;const D=u==null?void 0:u.match(/\d+(\.\d+)?/g);D&&(s=(D==null?void 0:D.join(""))+"px");const L=P==null?void 0:P.match(/\d+(\.\d+)?/g);return L&&(T=(L==null?void 0:L.join(""))+"px"),`
    border: ${s?`${s} solid ${A}`:"unset"};
      border-radius: ${T??"unset"}
    `},[A,P,u]);return ee("div",{css:it,onMouseEnter:()=>{j(!0)},onMouseLeave:()=>{j(!1)},ref:W,children:[ee("div",{css:ze(M,w),children:[(a==null||a===0)&&ee(Re,{size:{width:"100%",height:t},bounds:"parent",minHeight:48,maxHeight:K!=="fixed"?"unset":b-4,handleComponent:Q?we():void 0,enable:K!=="fixed"?{}:{bottom:!0},onResizeStart:X,onResizeStop:v,children:[i("div",{css:fe(ne===0,V,c,P),children:i("div",{css:me(!0,h,G,F,le,V,y),onClick:s=>{var D;const T=!!((D=s.target)!=null&&D.getAttribute("data-list-widget-container"));Y(0,T)},children:i(ke,{templateComponentDisplayName:p[0],templateContainerHeight:t,columnNumber:te,dynamicHeight:K,itemNumber:H==null?void 0:H.length,extraHeight:x.height,itemShadow:w,enableAutoPagination:N,handleUpdateOriginalDSLMultiAttr:S,h:C,updateComponentHeight:$,dynamicMinHeight:B,dynamicMaxHeight:r,itemGap:M,itemPadding:f})})}),h&&i("div",{css:$e(!1,!0,!1)})]},p[0]),H.map((s,T)=>{if((a==null||a===0)&&T===0)return null;const D=a??0;return i("div",{css:fe(ne===T,V,c,P,t),children:i("div",{css:me(!1,h,G,F,le,V,y,t,f==null?void 0:f.size),onClick:L=>{var ae;const oe=!!((ae=L.target)!=null&&ae.getAttribute("data-list-widget-container"));Y(T,oe)},children:i(Me,{templateComponentNodes:s,templateContainerHeight:t,columnNumber:te,displayNamePrefix:`list-child-${D*g+T}-`})},s.displayName)},s.displayName)})]}),N&&i("div",{css:He,ref:k,children:i(Ne,{total:e==null?void 0:e.length,current:a<=0?1:a+1,pageSize:g,disableSimplePageJump:!0,size:"medium",sizeCanChange:!1,hideOnSinglePage:!1,simple:!0,onChange:E})})]})},rt=_`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,be=n=>_`
    pointer-events: ${n?"not-allowed":"auto"};
    font-size: 14px;
    width: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    border-radius: 4px;
    cursor: ${n?"not-allowed":"pointer"};
    color: ${ye("grayBlue",n?"08":"03")};
    background-color: unset;
  `,lt=({hasNextPage:n,page:e,onChange:t})=>ee("div",{css:rt,children:[i("span",{css:be(e<=0),onClick:()=>t(!1),children:i(De,{size:"14px"})}),e+1,i("span",{css:be(!n),onClick:()=>n&&t(!0),children:i(Le,{size:"14px"})})]}),ct=n=>{const{itemHeight:e=48,handleUpdateOriginalDSLMultiAttr:t,childrenNode:l,copyComponents:a=[],handleUpdateSelectedItem:f,itemBackGroundColor:B,columnNumber:r,pageSize:N,paginationType:p,totalRowCount:M=1,nextCursor:w,previousCursor:A,itemGap:P,page:u=0,itemBorderColor:S,itemBorderRadius:$,itemBorderWidth:R,itemShadow:q,enableServerSidePagination:Y,dynamicHeight:G,updateComponentHeight:te,h:K,dynamicMinHeight:ne,dynamicMaxHeight:c,displayName:y,handleUpdateMultiExecutionResult:d,triggerEventHandler:C,enablePagination:W,disabled:U,selectIndexForMark:k,themeColor:x,loading:Q,itemPadding:j}=n,[V,z]=ge(),[J,b]=ge(),[g,E]=o.useState(!1),H=N||0,X=z.height-b.height,v=re(ve),h=Pe(),F=o.useRef(n),le=o.useCallback(m=>{m<=0||U||(f(),new Promise(I=>{d([{displayName:y,value:{page:m-1}}]),I(!0)}).then(()=>{C("pageChange")}))},[U,y,d,f,C]),s=o.useCallback(m=>{if(u<=0&&!m||U)return;f();let I;m?I={page:u+1,beforeCursor:void 0,afterCursor:w}:I={page:u-1,beforeCursor:A,afterCursor:void 0},new Promise(O=>{d([{displayName:y,value:I}]),O(!0)}).then(()=>{C("pageChange")})},[U,y,d,f,w,u,A,C]);o.useEffect(()=>{Ie(F.current,n)||(F.current=n)},[n]);const T=m=>{m.preventDefault(),m.stopPropagation(),h(he.setResizingNodeIDsReducer([`${y}-resize-listItem`]))},D=o.useCallback((m,I,O,Z)=>{let ce=e+Z.height;t({itemHeight:ce}),h(he.setResizingNodeIDsReducer([]))},[h,t,e]),L=v&&g,oe=xe(q),ae=o.useMemo(()=>{let m,I;const O=R==null?void 0:R.match(/\d+(\.\d+)?/g);O&&(m=(O==null?void 0:O.join(""))+"px");const Z=$==null?void 0:$.match(/\d+(\.\d+)?/g);return Z&&(I=(Z==null?void 0:Z.join(""))+"px"),`
    border: ${m?`${m} solid ${S}`:"unset"};
      border-radius: ${I??"unset"}
    `},[S,$,R]);return o.useEffect(()=>{d([{displayName:y,value:{offset:H*u}}])},[y,d,u,H]),ee("div",{css:ot,ref:V,onMouseEnter:()=>{E(!0)},onMouseLeave:()=>{E(!1)},children:[ee("div",{css:ze(P,q),children:[ee(Re,{size:{width:"100%",height:e},bounds:"parent",minHeight:48,maxHeight:G!=="fixed"?"unset":X-4,handleComponent:g?we():void 0,enable:G!=="fixed"?{}:{bottom:!0},onResizeStart:T,onResizeStop:D,children:[i("div",{css:fe(k===0,v,x,$),children:i("div",{css:me(!0,L,B,oe,ae,v,Q),onClick:m=>{var O;const I=!!((O=m.target)!=null&&O.getAttribute("data-list-widget-container"));f(0,I)},children:i(ke,{templateComponentDisplayName:l[0],templateContainerHeight:e,columnNumber:r,dynamicHeight:G,extraHeight:b.height,itemShadow:q,enableAutoPagination:W,handleUpdateOriginalDSLMultiAttr:t,itemNumber:a==null?void 0:a.length,updateComponentHeight:te,h:K,dynamicMinHeight:ne,dynamicMaxHeight:c,itemGap:P,itemPadding:j})})}),L&&i("div",{css:$e(!1,!0,!1)})]}),a==null?void 0:a.map((m,I)=>I===0?null:i("div",{css:fe(k===I,v,x,$,e),children:i("div",{css:me(!1,L,B,oe,ae,v,Q,e,j==null?void 0:j.size),onClick:O=>{var ce;const Z=!!((ce=O.target)!=null&&ce.getAttribute("data-list-widget-container"));f(I,Z)},children:i(Me,{templateComponentNodes:m,templateContainerHeight:e,columnNumber:r,displayNamePrefix:`list-child-${I}-`})},m.displayName)},m.displayName))]}),W&&Y&&i("div",{css:He,ref:J,children:p===Ve.LIMIT_OFFSET_BASED?i(Ne,{total:M<=1?1:M,current:u<=0?1:u+1,pageSize:H,size:"medium",disableSimplePageJump:!0,sizeCanChange:!1,hideOnSinglePage:!1,simple:!0,onChange:le}):i(lt,{page:u,hasNextPage:n.hasNextPage,onChange:s})})]})},dt=_`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${ye("white","03")};
`,Ee=({themeColor:n})=>i("div",{css:dt,children:i(Oe,{colorScheme:n})});Ee.displayName="ComponentLoading";const wt=n=>{const{displayName:e,dataSources:t,childrenNode:l,enableServerSidePagination:a,paginationType:f,enablePagination:B,handleUpdateMultiExecutionResult:r,triggerEventHandler:N,disabled:p,loading:M,themeColor:w,page:A=1,pageSize:P=10}=n,u=re(Je),S=re(qe),$=re(Fe),[R,q]=o.useState(),Y=o.useRef(t),G=o.useCallback(c=>c.map((y,d)=>{const C=Ye($[y]),W=C.childrenNode;if(Array.isArray(W)&&W.length>0){let U=W.map(k=>{const x=JSON.parse(JSON.stringify($[k]));if(x.props&&Array.isArray(x.props.$dynamicAttrPaths)){const{displayName:Q}=x,{$dynamicAttrPaths:j}=x.props;j.forEach(V=>{const z=Ke(at(V)),J=pe(x.props,z,"");let b;try{b=Qe("",J,u)}catch(E){console.log(E),b=""}let g=b;if(Array.isArray(b)&&b.length>d){const E=S[Q];if(E&&Se(E.$validationPaths)){const H=E.$validationPaths,X=pe(H,z);if(X===Xe.ARRAY)if(Array.isArray(b)){const v=b[d]??[],h=de[X],F=h==null?void 0:h(v,"");g=(F==null?void 0:F.safeValue)??v}else{const v=de[X],h=v==null?void 0:v(b,"");g=(h==null?void 0:h.safeValue)??b}else{g=b[d];const v=de[X],h=v==null?void 0:v(g,"");g=(h==null?void 0:h.safeValue)??g}}}se(x,`props.${z}`,g)})}return d!==0&&(se(x,"displayName",`list-child-${d}-${k}`),p!=null&&se(x,"props.disabled",p)),x});U=U.map(k=>{const j=k.displayName.split("-").at(-1),z=S[j].$validationPaths;return Se(z)&&Ze(z).forEach(J=>{const b=pe(z,J),g=de[b],E=pe(k,`props.${J}`,""),H=g==null?void 0:g(E,"");se(k,`props.${J}`,H==null?void 0:H.safeValue)}),k}),se(C,"childrenNode",U)}return d!==0&&se(C,"displayName",`list-widget-container-${d}`),C}),[$,p,u,S]),te=o.useCallback(c=>{const y=[];return Array.isArray(t)&&t.length>0?(t.forEach((d,C)=>{y[C]=c}),G(y)):G([c])},[t,G]),K=o.useMemo(()=>{if(l&&l.length>0&&t){let c=l[0];return te(c)}return null},[l,t,te]),ne=o.useCallback((c,y)=>{!Array.isArray(t)||p||(q(R===c&&y||c===void 0?void 0:c),new Promise(d=>{let C;if(c===void 0||R===c&&y)C={selectedItem:void 0,selectedIndex:void 0};else{const W=a?c:c+A*(P??0);C={selectedItem:t[W],selectedIndex:c}}r([{displayName:e,value:C}]),d(C)}).then(()=>{N("rowSelect")}))},[t,p,e,a,r,A,P,R,N]);return o.useEffect(()=>{Ie(Y.current,t)||r==null||r([{displayName:e,value:{selectedIndex:void 0,selectedItem:void 0}}])},[t,e,r]),o.useEffect(()=>{r==null||r([{displayName:e,value:{page:0}}])},[e,r,f,B,a]),ee(Be,{children:[a?i(ct,{...n,copyComponents:K,selectIndexForMark:R,handleUpdateSelectedItem:ne}):i(st,{...n,copyComponents:K,selectIndexForMark:R,handleUpdateSelectedItem:ne}),M&&i(Ee,{themeColor:w})]})};export{wt as ListWidget,wt as default};
//# sourceMappingURL=list-d161ce9f.js.map

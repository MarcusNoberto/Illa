import{l as O,n as ce,m as G,k as e,o,T as Je,aa as ft,C as yt,aY as Z,q as Ze,J as wt,O as St,L as xt,D as qe,bg as Ye,F as Q,az as bt,a1 as ot,a7 as st,a_ as ct,aE as fe,I as Re,bC as vt,bB as Ct,bA as Pt}from"./@illa-design-402f214a.js";import{S as _t,F as Nt}from"./renderComponentCanvasContainer-44ad78fe.js";import{u as Y,b as N,cm as we,d5 as Ie,cQ as D,a as F,_ as Ee,e as ie,aB as Et,bh as m,iF as Lt,iG as Bt,cN as Qe,cn as Ae,iH as Rt,b7 as ye,cF as Wt,gf as X,cD as j,cB as K,cy as Ge,cw as kt,cz as It,iI as Ke,iJ as je,cH as ze,cs as dt,cE as $e,cC as De,cx as Fe,cA as Ve,bf as Xe,hK as $,ct as xe}from"./index-2f1869ab.js";import{r as t}from"./react-9b7e00e3.js";import{L as T,H as v,I as U,J as et}from"./index-e89bb2f6.js";import{a as C}from"./@emotion-4f16718e.js";import{s as At,r as zt}from"./lodash-lib-6e94956b.js";import{C as se}from"./index-0e67f358.js";import{S as $t,a as Dt}from"./all-0a341a74.js";import"./style-7ce959a8.js";import"./index-f466602f.js";import"./index-cf2bb556.js";import"./index-b8442d1a.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";import"./hook-34b2061f.js";import"./layoutInfoListener-bba65cc8.js";import"./drive-6b05f117.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-cd761d27.js";import"./clsx-85d7d0af.js";import"./objectWithoutPropertiesLoose-24430c43.js";import"./index-9dcf4ab8.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./index-323e87cb.js";import"./style-bd23c0f2.js";import"./style-91620c64.js";const Ft=C`
  display: flex;
  flex-direction: column;
  border: 1px solid ${O(`--${G}-grayBlue-08`)};
  border-radius: 8px;
  overflow: hidden;
`,Vt=C`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 287px;
  height: 40px;
  padding: 8px 8px 8px 16px;
  background-color: ${O(`--${G}-grayBlue-09`)};
`,Mt=C`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Tt=C`
  font-size: 14px;
  font-weight: 500;
  color: ${O(`--${G}-grayBlue-02`)};
`;C`
  width: 8px;
  height: 8px;
`;const Ut=C`
  display: flex;
  align-items: center;
`,Ht=C`
  display: flex;
  max-width: 191px;
  align-items: center;
  gap: 8px;
`,Ot=C`
  max-width: 147px;
  font-size: 14px;
  font-weight: 400;
  color: ${O(`--${G}-grayBlue-02`)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Gt=C`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 9px 16px;
  gap: 4px;
  height: 40px;
  cursor: pointer;
`,Kt=C`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${O(`--${G}-white-01`)};
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`,jt=C`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  width: 360px;
`,Xt=C`
  width: 24px;
  height: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${O(`--${G}-grayBlue-02`)};
  cursor: pointer;
`,qt=C`
  font-weight: 500;
  font-size: 16px;
  color: ${O(`--${G}-grayBlue-04`)};
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yt=C`
  padding: 8px 16px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ce("grayBlue","04")};
`,Jt=a=>{const{name:n,isDuplicationKey:d}=a,{t:i}=Y();return e("div",{css:Ut,children:o("div",{css:Ht,children:[e("span",{css:Ot,children:n}),d&&e(Je,{trigger:"hover",showArrow:!1,position:"bottom",content:`${i("widget.page.path_duplicated")}`,children:e(ft,{color:O(`--${G}-orange-03`)})})]})})},Zt=a=>{const{onCloseModal:n,path:d,handleUpdateItem:i}=a,{t:l}=Y();return o("div",{css:Kt,children:[o("div",{css:jt,children:[e("span",{css:qt,children:l("editor.page.label_name.edit_view")}),e("div",{css:Xt,onClick:n,children:e(yt,{})})]}),o(T,{children:[e(v,{labelName:l("editor.page.label_name.view_path"),size:"big",tooltip:l("editor.page.tooltips.view_path")}),e(U,{children:e(Z,{w:"200px",value:d,colorScheme:"techPurple",onChange:i})})]})]})},Qt=a=>{const{otherPaths:n,index:d,handleDeleteSectionView:i,path:l,handleUpdateItem:L,attrPath:f,parentNodeDisplayName:s}=a,[h,c]=t.useState(!1),p=Ze(),w=N(we),S=n.some(g=>g==l),[x,z]=t.useState(l),{t:k}=Y(),H=t.useCallback(()=>{var b;if(x===l)return;const g=Ie(s);if(!g)return;const R=Ie(g.parentNode);if(!R)return;let W=[];if(g.showName!=="bodySection"){const E=R.childrenNode.find(B=>w[B].showName==="bodySection");if(!E)return;W=((b=w[E].props)==null?void 0:b.sectionViewConfigs.map(B=>B.path))??[]}!W.includes(x)&&g.showName!=="bodySection"&&p.info({content:k("editor.page.message.new_path")}),L(`${f}.path`,x)},[f,w,x,L,p,s,l,k]);return e(Je,{withoutPadding:!0,colorScheme:"white",popupVisible:h,content:e(Zt,{onCloseModal:()=>{c(!1)},path:x,handleUpdateItem:z}),trigger:"click",showArrow:!1,position:"left",clickOutsideToClose:!0,onVisibleChange:g=>{g?D(F.SHOW,{element:"edit_view_show"}):H(),c(g)},children:o("div",{css:Gt,children:[e(Jt,{name:l,isDuplicationKey:S}),e(Ee,{onClick:g=>{g.stopPropagation(),i(d)},children:e(wt,{onClick:g=>{g.stopPropagation(),i(d)}})})]})})},ea=a=>{const{sectionViewConfigs:n,viewSortedKey:d,parentNodeDisplayName:i,sectionName:l}=a,L=ie(),f=t.useContext(_t),s=t.useCallback(c=>{if(c>n.length)return;D(F.CLICK,{element:"delete_view",parameter2:l.slice(0,-7)});const p=n[c],w=p.viewDisplayName;f.showDeleteDialog([p.path],"pageView",{parentNodeName:i,originPageSortedKey:d,viewDisplayName:w})},[i,l,n,f,d]),h=t.useCallback((c,p)=>{const w=Et(n);At(w,c,p),L(m.updateSectionViewPropsReducer({parentNodeName:i,newProps:{sectionViewConfigs:w}}))},[L,i,n]);return e("div",{css:Mt,children:n.map((c,p)=>{const w=n.map((S,x)=>S.path||x).filter((S,x)=>x!=p);return e(Qt,{otherPaths:w,path:c.path,viewDisplayName:c.viewDisplayName,index:p,attrPath:`${p}`,handleDeleteSectionView:s,handleUpdateItem:h,parentNodeDisplayName:i},c.id)})})},ta=()=>{const{t:a}=Y();return e("div",{css:Yt,children:a("editor.inspect.page.blank_view")})},aa=a=>{const{t:n}=Y(),d=ie(),i=Ze(),{sectionName:l,parentNodeDisplayName:L}=a,f=N(we),s=t.useCallback(()=>{var z;D(F.CLICK,{element:"add_view",parameter2:l.slice(0,-7)});const h=Ie(L);if(!h||!h||!h.props)return;let c=[];if(l!=="bodySection"){const k=Ie(h.parentNode);if(!k)return;const H=k.childrenNode.find(g=>f[g].showName==="bodySection");if(!H)return;c=((z=f[H].props)==null?void 0:z.sectionViewConfigs.map(g=>g.path))??[]}const p=Lt(L,`${l}Container`),w=h.props.sectionViewConfigs.map(k=>k.path),S=zt(c,w);S.length===0&&l!=="bodySection"&&i.info({content:n("editor.page.message.new_path")});const x=Bt(w,p.displayName,L,S);d(m.addSectionViewConfigByConfigReducer({parentNodeName:L,sectionName:l,sectionViewConfig:x,sectionViewNode:p}))},[f,d,i,L,l,n]);return o("div",{css:Vt,children:[e("span",{css:Tt,children:n("editor.page.label_name.views")}),e(xt,{colorScheme:"techPurple",icon:e(St,{}),hoverable:!0,onClick:s,children:e("span",{children:n("editor.inspect.setter_content.column_setter.new")})})]})},be=a=>{const{sectionName:n}=a,d=N(Qe),{currentPageIndex:i,pageSortedKey:l}=d,L=l[i],f=N(s=>{const h=we(s),c=Ae(h,L);if(!c)return null;const p=c.childrenNode.find(S=>h[S].showName===n);return p&&Rt(s)[p]||null});return f?o("div",{css:Ft,children:[e(aa,{sectionName:n,parentNodeDisplayName:f.displayName}),Array.isArray(f.sectionViewConfigs)&&f.sectionViewConfigs.length>0?e(ea,{sectionName:n,parentNodeDisplayName:f.displayName,currentViewIndex:f.currentViewIndex,viewSortedKey:f.viewSortedKey,sectionViewConfigs:f.sectionViewConfigs}):e(ta,{})]}):null},na=a=>C`
    padding: 0 16px;
    margin-top: ${a?"8px":0};
  `,ae=a=>{const{hasMargin:n=!0}=a;return e("div",{css:na(n),children:e(qe,{})})},ia=C`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
`,ve=a=>{const{children:n}=a;return e("div",{css:ia,children:n})},Ce=C`
  padding-bottom: 8px;
`,la=()=>{const{t:a}=Y(),n=ie(),d=N(Qe),i=t.useRef(null),l=t.useRef(!1),L=t.useRef(new IntersectionObserver(b=>{b.forEach(E=>{if(E.isIntersecting){if(l.current)return;D(F.SHOW,{element:"homepage_switch"}),l.current=!0}})})),{currentPageIndex:f,pageSortedKey:s,homepageDisplayName:h}=d;t.useEffect(()=>{const b=i.current,E=L.current;if(b)return E==null||E.observe(b),()=>{b&&(E==null||E.unobserve(b),l.current=!1)}},[f]);const c=s[f],p=N(b=>{var B;const E=we(b);return((B=Ae(E,c))==null?void 0:B.props)||{}}),w=N(b=>{const E=we(b),B=Ae(E,c);return B?B.childrenNode.map(V=>E[V]):null}),{hasLeft:S,hasRight:x,hasFooter:z,hasHeader:k}=p,H=t.useMemo(()=>h?h===c:c==="page1",[c,h]),g=t.useCallback(()=>{c!==h&&(n(m.updateRootNodePropsReducer({homepageDisplayName:c,currentPageIndex:f})),D(F.CLICK,{element:"homepage_switch"}))},[c,f,n,h]),R=t.useCallback(b=>{if(!Array.isArray(w))return"";const E=w.find(B=>B.showName===b);return E?E.props.defaultViewKey:""},[w]),W=t.useCallback((b,E)=>{if(!Array.isArray(w))return;const B=w.find(V=>V.showName===E);B&&n(m.updateSectionViewPropsReducer({parentNodeName:B.displayName,newProps:{defaultViewKey:b}}))},[n,w]);return o(et,{title:a("editor.page.panel_bar_title.basic"),children:[o(T,{children:[e(v,{labelName:a("editor.page.label_name.set_as_homepage"),size:"big"}),e(U,{children:e(Ye,{checked:H,onChange:g,colorScheme:"techPurple",ref:i})})]}),e(T,{children:o(U,{children:[e("div",{css:Ce,children:e(v,{labelName:a("editor.page.label_name.body"),size:"big"})}),e(be,{sectionName:"bodySection"})]})}),e(U,{children:o(ve,{children:[e(v,{labelName:a("editor.page.label_name.default_view"),size:"small"}),e(Z,{value:R("bodySection"),onChange:b=>{W(b,"bodySection")},colorScheme:"techPurple"})]})}),S&&o(Q,{children:[e(ae,{}),e(T,{children:o(U,{children:[e("div",{css:Ce,children:e(v,{labelName:a("editor.page.label_name.left_panel"),size:"big"})}),e(be,{sectionName:"leftSection"})]})}),e(U,{children:o(ve,{children:[e(v,{labelName:a("editor.page.label_name.default_view"),size:"small"}),e(Z,{value:R("leftSection"),onChange:b=>{W(b,"leftSection")},colorScheme:"techPurple"})]})})]}),x&&o(Q,{children:[e(ae,{}),e(T,{children:o(U,{children:[e("div",{css:Ce,children:e(v,{labelName:a("editor.page.label_name.right_panel"),size:"big"})}),e(be,{sectionName:"rightSection"})]})}),e(U,{children:o(ve,{children:[e(v,{labelName:a("editor.page.label_name.default_view"),size:"small"}),e(Z,{value:R("rightSection"),onChange:b=>{W(b,"rightSection")},colorScheme:"techPurple"})]})})]}),k&&o(Q,{children:[e(ae,{}),e(T,{children:o(U,{children:[e("div",{css:Ce,children:e(v,{labelName:a("editor.page.label_name.header"),size:"big"})}),e(be,{sectionName:"headerSection"})]})}),e(U,{children:o(ve,{children:[e(v,{labelName:a("editor.page.label_name.default_view"),size:"small"}),e(Z,{value:R("headerSection"),onChange:b=>{W(b,"headerSection")},colorScheme:"techPurple"})]})})]}),z&&o(Q,{children:[e(ae,{}),e(T,{children:o(U,{children:[e("div",{css:Ce,children:e(v,{labelName:a("editor.page.label_name.footer"),size:"big"})}),e(be,{sectionName:"footerSection"})]})}),e(U,{children:o(ve,{children:[e(v,{labelName:a("editor.page.label_name.default_view"),size:"small"}),e(Z,{value:R("footerSection"),onChange:b=>{W(b,"footerSection")},colorScheme:"techPurple"})]})})]})]})},ra=a=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("path",{d:"M2.33333 12.0002H13.6667C13.7551 12.0002 13.8399 11.9651 13.9024 11.9026C13.9649 11.8401 14 11.7553 14 11.6669V4.33358C14 4.24517 13.9649 4.16039 13.9024 4.09788C13.8399 4.03536 13.7551 4.00024 13.6667 4.00024H2.33333C2.24493 4.00024 2.16014 4.03536 2.09763 4.09788C2.03512 4.16039 2 4.24517 2 4.33358V11.6669C2 11.7553 2.03512 11.8401 2.09763 11.9026C2.16014 11.9651 2.24493 12.0002 2.33333 12.0002Z",stroke:"currentColor"})),oa=a=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("path",{d:"M5.50006 13.0002V3.00024M11.5001 13.0002V3.00024M14.5001 3.62524C14.5001 3.45948 14.4298 3.30051 14.3048 3.1833C14.1798 3.06609 14.0102 3.00024 13.8334 3.00024H3.16673C2.98992 3.00024 2.82035 3.06609 2.69532 3.1833C2.5703 3.30051 2.50006 3.45948 2.50006 3.62524V12.3752C2.50006 12.541 2.5703 12.7 2.69532 12.8172C2.82035 12.9344 2.98992 13.0002 3.16673 13.0002H13.8334C14.0102 13.0002 14.1798 12.9344 14.3048 12.8172C14.4298 12.7 14.5001 12.541 14.5001 12.3752V3.62524Z",stroke:"currentColor"})),sa=a=>t.createElement("svg",{width:72,height:54,viewBox:"0 0 72 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{filter:"url(#filter0_d_5688_1845)"},t.createElement("g",{clipPath:"url(#clip0_5688_1845)"},t.createElement("rect",{x:8,y:8,width:56,height:38,fill:"white"}))),t.createElement("defs",null,t.createElement("filter",{id:"filter0_d_5688_1845",x:4,y:4,width:64,height:46,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},t.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),t.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),t.createElement("feOffset",null),t.createElement("feGaussianBlur",{stdDeviation:2}),t.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"}),t.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5688_1845"}),t.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5688_1845",result:"shape"})),t.createElement("clipPath",{id:"clip0_5688_1845"},t.createElement("rect",{x:8,y:8,width:56,height:38,rx:2,fill:"white"})))),ca=a=>t.createElement("svg",{width:72,height:54,viewBox:"0 0 72 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{filter:"url(#filter0_d_5688_1851)"},t.createElement("g",{clipPath:"url(#clip0_5688_1851)"},t.createElement("rect",{x:8,y:8,width:12,height:38,fill:"white"}),t.createElement("rect",{x:21,y:8,width:43,height:38,fill:"white"}))),t.createElement("defs",null,t.createElement("filter",{id:"filter0_d_5688_1851",x:4,y:4,width:64,height:46,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},t.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),t.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),t.createElement("feOffset",null),t.createElement("feGaussianBlur",{stdDeviation:2}),t.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"}),t.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5688_1851"}),t.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5688_1851",result:"shape"})),t.createElement("clipPath",{id:"clip0_5688_1851"},t.createElement("rect",{x:8,y:8,width:56,height:38,rx:2,fill:"white"})))),da=a=>t.createElement("svg",{width:72,height:54,viewBox:"0 0 72 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{filter:"url(#filter0_d_5688_1858)"},t.createElement("g",{clipPath:"url(#clip0_5688_1858)"},t.createElement("rect",{x:8,y:8,width:56,height:8,fill:"white"}),t.createElement("rect",{x:8,y:38,width:56,height:8,fill:"white"}),t.createElement("rect",{x:8,y:17,width:56,height:20,fill:"white"}))),t.createElement("defs",null,t.createElement("filter",{id:"filter0_d_5688_1858",x:4,y:4,width:64,height:46,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},t.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),t.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),t.createElement("feOffset",null),t.createElement("feGaussianBlur",{stdDeviation:2}),t.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"}),t.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5688_1858"}),t.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5688_1858",result:"shape"})),t.createElement("clipPath",{id:"clip0_5688_1858"},t.createElement("rect",{x:8,y:8,width:56,height:38,rx:2,fill:"white"})))),ha=a=>t.createElement("svg",{width:72,height:54,viewBox:"0 0 72 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{filter:"url(#filter0_d_5688_1867)"},t.createElement("g",{clipPath:"url(#clip0_5688_1867)"},t.createElement("rect",{x:8,y:8,width:56,height:8,fill:"white"}),t.createElement("rect",{x:8,y:17,width:10,height:29,fill:"white"}),t.createElement("rect",{x:19,y:17,width:45,height:20,fill:"white"}),t.createElement("rect",{x:19,y:38,width:45,height:8,fill:"white"}))),t.createElement("defs",null,t.createElement("filter",{id:"filter0_d_5688_1867",x:4,y:4,width:64,height:46,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},t.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),t.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),t.createElement("feOffset",null),t.createElement("feGaussianBlur",{stdDeviation:2}),t.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"}),t.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5688_1867"}),t.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5688_1867",result:"shape"})),t.createElement("clipPath",{id:"clip0_5688_1867"},t.createElement("rect",{x:8,y:8,width:56,height:38,rx:2,fill:"white"})))),pa=a=>t.createElement("svg",{width:72,height:54,viewBox:"0 0 72 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{filter:"url(#filter0_d_5688_1876)"},t.createElement("g",{clipPath:"url(#clip0_5688_1876)"},t.createElement("rect",{x:8,y:8,width:56,height:8,fill:"white"}),t.createElement("rect",{x:8,y:17,width:10,height:29,fill:"white"}),t.createElement("rect",{x:54,y:17,width:10,height:29,fill:"white"}),t.createElement("rect",{x:19,y:17,width:34,height:20,fill:"white"}),t.createElement("rect",{x:19,y:38,width:34,height:8,fill:"white"}))),t.createElement("defs",null,t.createElement("filter",{id:"filter0_d_5688_1876",x:4,y:4,width:64,height:46,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},t.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),t.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),t.createElement("feOffset",null),t.createElement("feGaussianBlur",{stdDeviation:2}),t.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"}),t.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5688_1876"}),t.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5688_1876",result:"shape"})),t.createElement("clipPath",{id:"clip0_5688_1876"},t.createElement("rect",{x:8,y:8,width:56,height:38,rx:2,fill:"white"})))),ua=a=>t.createElement("svg",{width:72,height:54,viewBox:"0 0 72 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("g",{filter:"url(#filter0_d_5688_1886)"},t.createElement("g",{clipPath:"url(#clip0_5688_1886)"},t.createElement("rect",{x:19,y:8,width:45,height:8,fill:"white"}),t.createElement("rect",{x:8,y:8,width:10,height:38,fill:"white"}),t.createElement("rect",{x:19,y:17,width:45,height:20,fill:"white"}),t.createElement("rect",{x:19,y:38,width:45,height:8,fill:"white"}))),t.createElement("defs",null,t.createElement("filter",{id:"filter0_d_5688_1886",x:4,y:4,width:64,height:46,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},t.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),t.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),t.createElement("feOffset",null),t.createElement("feGaussianBlur",{stdDeviation:2}),t.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"}),t.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5688_1886"}),t.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5688_1886",result:"shape"})),t.createElement("clipPath",{id:"clip0_5688_1886"},t.createElement("rect",{x:8,y:8,width:56,height:38,rx:2,fill:"white"})))),ga=C`
  display: flex;
  align-items: center;
  height: 22px;
  gap: 4px;
  cursor: pointer;
`,ma=C`
  padding: 16px;
  background-color: ${O(`--${G}-white-01`)};
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 88px);
`,fa=C`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,ya=a=>C`
    padding: 8px;
    background-color: ${a?O(`--${G}-techPurple-08`):O(`--${G}-grayBlue-09`)};
    border-radius: 4px;
    flex: none;
    border: 1px solid
      ${a?O(`--${G}-techPurple-03`):"transparent"};
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    :hover {
      border: 1px solid ${O(`--${G}-techPurple-03`)};
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
      background-color: ${O(`--${G}-techPurple-08`)};
    }
    :active {
      border: 1px solid ${O(`--${G}-techPurple-03`)};
      background-color: ${O(`--${G}-techPurple-08`)};
    }
  `,wa=C`
  color: ${O(`--${G}-grayBlue-02`)};
  font-size: 14px;
`,ht=[{label:"Default",value:"default",icon:e(sa,{})},{label:"Preset A",value:"presetA",icon:e(ca,{})},{label:"Preset B",value:"presetB",icon:e(da,{})},{label:"Preset C",value:"presetC",icon:e(ha,{})},{label:"Preset D",value:"presetD",icon:e(pa,{})},{label:"Preset E",value:"presetE",icon:e(ua,{})}],Sa=a=>{const n=ht.find(d=>d.value===a);return(n==null?void 0:n.label)||"Custom"},xa=a=>{const{isSelected:n,label:d,value:i,icon:l,selectedValue:L,currentPageName:f}=a,{t:s}=Y(),h=ie(),c=ot(),p=t.useCallback(()=>{L===i||!f||(D(F.SELECT,{element:"preset_selection",parameter3:i}),c.show({w:"496px",children:s("editor.page.model_tips.change_layout_message"),cancelText:s("editor.page.model_tips.cancel_button"),okText:s("editor.page.model_tips.ok_button"),okButtonProps:{colorScheme:"red"},closable:!1,onOk:()=>{D(F.CLICK,{element:"preset_confirm",parameter3:i}),h(m.updateTargetPageLayoutReducer({pageName:f,layout:i}))}}))},[f,h,c,L,s,i]);return o("div",{css:fa,onClick:p,children:[e("div",{css:ya(n),"data-value":i,children:l}),e("span",{css:wa,"data-value":i,children:d})]})},ba=a=>{const{selectedValue:n,currentPageName:d}=a;return e("div",{css:ma,children:ht.map(i=>e(xa,{label:i.label,value:i.value,icon:i.icon,isSelected:n===i.value,selectedValue:n,currentPageName:d},`${i.label}-${i.value}`))})},va=a=>{const{value:n,currentPageName:d}=a;return e(Je,{trigger:"click",content:e(ba,{selectedValue:n,currentPageName:d}),position:"bottom-end",colorScheme:"white",withoutPadding:!0,closeOnInnerClick:!0,onVisibleChange:i=>{i&&D(F.CLICK,{element:"preset_selection"})},children:o("div",{css:ga,children:[e("span",{children:Sa(n)}),e(bt,{})]})})},Ca=C`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: none;
`,We=a=>{const{hasPanel:n,addPanelAction:d,deletePanelAction:i}=a;return e("div",{css:Ca,children:n?e(Ee,{onClick:i,children:e(st,{})}):e(Ee,{onClick:d,children:e(ct,{})})})},Pa=C`
  border-top: 1px solid ${O(`--${G}-grayBlue-08`)};
  height: 100%;
  width: 100%;
  padding-bottom: 48px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,_a=C`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;C`
  display: flex;
  height: 48px;
  align-items: center;
  padding: 0 16px;
`;const it=C`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,me=C`
  padding: 8px 0;
`;C`
  width: 100%;
  padding: 0 16px;
`;const lt=a=>typeof a!="number"?100:a,Na=[{label:o("div",{css:it,children:[e(oa,{}),e("span",{children:ye.t("page.size.model.auto")})]}),value:"auto"},{label:o("div",{css:it,children:[e(ra,{}),e("span",{children:ye.t("page.size.model.fixed")})]}),value:"fixed"}],pt=()=>{const{t:a}=Y(),n=N(Qe),{currentPageIndex:d,pageSortedKey:i}=n,l=i[d],L=N(u=>{var A;const y=we(u);return((A=Ae(y,l))==null?void 0:A.props)||{}}),f=Ze(),s=N(Wt),h=ie(),{canvasSize:c,canvasWidth:p,layout:w,leftWidth:S,rightWidth:x,isLeftFixed:z,isRightFixed:k,isFooterFixed:H,isHeaderFixed:g,hasLeft:R,hasRight:W,hasFooter:b,hasHeader:E,showLeftFoldIcon:B,showRightFoldIcon:V}=L,[M,de]=t.useState(R?S:0),[le,he]=t.useState(W?x:0);t.useEffect(()=>{de(S)},[S]),t.useEffect(()=>{he(x)},[x]);const re=t.useMemo(()=>c==="fixed"?p-(R?S:0)-(W?x:0):100-(R?S:0)-(W?x:0),[c,p,R,W,S,x]),[oe,ee]=t.useState(re);t.useEffect(()=>{ee(re)},[re]);const[q,te]=t.useState(lt(p));t.useEffect(()=>{te(lt(p))},[p]);const Le=c==="fixed"?"fixed":"auto",pe=t.useMemo(()=>c==="fixed"?`${a("editor.page.label_name.width")}(px)`:`${a("editor.page.label_name.width")}(%)`,[c,a]),Be=ot(),ue=t.useCallback(u=>{l&&Be.show({w:"496px",children:a("editor.page.model_tips.delete_section_message"),cancelText:a("editor.page.model_tips.cancel_button"),okText:a("editor.page.model_tips.ok_button"),okButtonProps:{colorScheme:"red"},closable:!1,onOk:()=>{h(m.deleteTargetPageSectionReducer({pageName:l,deleteSectionName:u}))}})},[l,h,Be,a]),ge=t.useCallback(u=>{l&&h(m.addTargetPageSectionReducer({pageName:l,addedSectionName:u}))},[l,h]),Me=t.useCallback(u=>{!l||!u||ee(u)},[l]),Te=t.useCallback(()=>{let u=oe,y=S,A=x;if(c==="fixed"){let I=A,J=y;u<X&&(u=X),I=s.canvasWidth-u-y,I<j&&(A=j,J=s.canvasWidth-u-A),J<K&&(y=K,I=s.canvasWidth-u-y),J<K&&I<j&&(y=K,A=j),ee(s.canvasWidth-y-A)}else{let I=y/100*s.canvasWidth,J=A/100*s.canvasWidth,nt=u/100*s.canvasWidth;if(nt<=Ge){const Se=s.canvasWidth-Ge;I=I/(I+J)*Se,J=Se-I,y=I/s.canvasWidth*100,A=J/s.canvasWidth*100}else{let Se=s.canvasWidth-nt;I=I/(I+J)*Se,I<K&&(I=K),J=Se-I,J<j&&(J=K),y=I/s.canvasWidth*100,A=j/s.canvasWidth*100}ee((1-y-A)*100)}h(m.updateTargetPagePropsReducer({pageName:l,newProps:{leftWidth:y,rightWidth:A}}))},[s.canvasWidth,c,l,h,oe,S,x]),Ue=u=>{u&&de(u)},He=t.useCallback(u=>{D(F.BLUR,{element:"panel_width",parameter2:"left",parameter3:u.target.value});let y=M;if(c==="fixed")s.canvasWidth-y-le<X&&(y=s.canvasWidth-X-le),y<K&&(y=K);else{const A=M/100*s.canvasWidth,I=le/100*s.canvasWidth;s.canvasWidth-A-I<X&&(y=(s.canvasWidth-I-X)/s.canvasWidth*100),y/100*s.canvasWidth<K&&(y=K/s.canvasWidth*100)}h(m.updateTargetPagePropsReducer({pageName:l,newProps:{leftWidth:y}})),de(y)},[s.canvasWidth,c,l,h,M,le]),Oe=u=>{u&&he(u)},P=t.useCallback(u=>{D(F.BLUR,{element:"panel_width",parameter2:"left",parameter3:u.target.value});let y=M;if(c==="fixed")s.canvasWidth-y-M<X&&(y=s.canvasWidth-X-M),y<j&&(y=j);else{const A=M/100*s.canvasWidth,I=S/100*s.canvasWidth;s.canvasWidth-A-I<X&&(y=(s.canvasWidth-I-X)/s.canvasWidth*100),y/100*s.canvasWidth<j&&(y=j/s.canvasWidth*100)}h(m.updateTargetPagePropsReducer({pageName:l,newProps:{rightWidth:y}}))},[s.canvasWidth,c,l,h,M,S]),r=t.useCallback((u,y)=>{if(!l)return;const A=y==="leftSection"?{showLeftFoldIcon:u}:{showRightFoldIcon:u};h(m.updateTargetPagePropsReducer({pageName:l,newProps:A}))},[l,h]),_=t.useCallback(u=>{if(c===u||!l)return;const y={canvasSize:u,canvasWidth:u==="fixed"?Ke.CANVAS:je.CANVAS,leftWidth:0,rightWidth:0};u==="fixed"?(R&&(y.leftWidth=Ke.LEFT),W&&(y.rightWidth=Ke.RIGHT)):(R&&(y.leftWidth=je.LEFT),W&&(y.rightWidth=je.RIGHT)),h(m.updateTargetPagePropsReducer({pageName:l,newProps:y}))},[c,l,h,R,W]),gt=t.useCallback(u=>{!l||u==null||te(u)},[l]),mt=t.useCallback(()=>{if(c==="fixed")q<X+K+j?(f.error({content:a("frame_size.invalid_tips",{size:Ge+kt+It})}),h(m.updateTargetPagePropsReducer({pageName:l,newProps:{canvasWidth:X+K+j,leftWidth:K,rightWidth:j}})),te(X+K+j)):h(m.updateTargetPagePropsReducer({pageName:l,newProps:{canvasWidth:q}})),D(F.BLUR,{element:"page_width",parameter2:"fixed",parameter3:p});else{const u=s.canvasWidth/(p/100);if(u*(q/100)<X+K+j){const A=(X+K+j)/(u/100);f.error({content:a("frame_size.invalid_tips",{size:A.toFixed(0)})}),h(m.updateTargetPagePropsReducer({pageName:l,newProps:{canvasWidth:A}})),te(A)}else h(m.updateTargetPagePropsReducer({pageName:l,newProps:{canvasWidth:q}}));D(F.BLUR,{element:"page_width",parameter2:"auto",parameter3:p})}},[s.canvasWidth,c,p,l,h,q,f,a]);return o(et,{title:a("editor.page.panel_bar_title.frame"),children:[e(T,{children:e(fe,{type:"button",options:Na,value:Le,w:"100%",forceEqualWidth:!0,colorScheme:"grayBlue",onChange:_})}),o(T,{children:[e(v,{labelName:pe,size:"big",tooltip:Le!=="fixed"?a("editor.page.tooltips.auto_canvas_width"):void 0}),e(U,{children:e(Re,{w:"96px",precision:0,step:1,value:Number(q.toFixed(0)),colorScheme:"techPurple",onChange:gt,onBlur:mt})})]}),e(ae,{}),e("div",{css:me,children:o(T,{children:[e(v,{labelName:a("editor.page.label_name.preset"),size:"big"}),e(U,{children:e(va,{value:w,currentPageName:l})})]})}),e(ae,{hasMargin:!1}),o("div",{css:me,children:[o(T,{children:[e(v,{labelName:a("editor.page.label_name.left_panel"),size:"big"}),e(We,{isFixed:z,hasPanel:R,deletePanelAction:()=>{D(F.CLICK,{element:"panel_show",parameter2:"left",parameter3:"hidden"}),ue("leftSection")},addPanelAction:()=>{D(F.CLICK,{element:"panel_show",parameter2:"left",parameter3:"show"}),ge("leftSection")}})]}),R&&o(Q,{children:[o(T,{children:[e(v,{labelName:pe,size:"small"}),e(U,{children:e(Re,{w:"96px",value:Number(M.toFixed(0)),precision:0,colorScheme:"techPurple",onChange:Ue,step:1,onBlur:He})})]}),o(T,{children:[e(v,{labelName:a("editor.page.label_name.show_fold_icon"),size:"small",tooltip:a("editor.page.tooltips.show_fold_icon")}),e(U,{children:e(Ye,{checked:B,onChange:u=>{D(F.CLICK,{element:"panel_fold",parameter2:"left",parameter3:u?"show":"hidden"}),r(u,"leftSection")},colorScheme:"techPurple"})})]})]})]}),e(ae,{hasMargin:!1}),o("div",{css:me,children:[o(T,{children:[e(v,{labelName:a("editor.page.label_name.right_panel"),size:"big"}),e(We,{isFixed:k,hasPanel:W,deletePanelAction:()=>{D(F.CLICK,{element:"panel_show",parameter2:"right",parameter3:"hidden"}),ue("rightSection")},addPanelAction:()=>{D(F.CLICK,{element:"panel_show",parameter2:"right",parameter3:"show"}),ge("rightSection")}})]}),W&&o(Q,{children:[o(T,{children:[e(v,{labelName:pe,size:"small"}),e(U,{children:e(Re,{w:"96px",precision:0,value:Number(le.toFixed(0)),colorScheme:"techPurple",onChange:Oe,step:1,onBlur:P})})]}),o(T,{children:[e(v,{labelName:a("editor.page.label_name.show_fold_icon"),size:"small",tooltip:a("editor.page.tooltips.show_fold_icon")}),e(U,{children:e(Ye,{checked:V,onChange:u=>{D(F.CLICK,{element:"panel_fold",parameter2:"right",parameter3:u?"show":"hidden"}),r(u,"rightSection")},colorScheme:"techPurple"})})]})]})]}),e(ae,{hasMargin:!1}),o("div",{css:me,children:[e(T,{children:e(v,{labelName:a("editor.page.label_name.body"),size:"big"})}),o(T,{children:[e(v,{labelName:pe,size:"small"}),e(U,{children:e(Re,{w:"96px",precision:0,colorScheme:"techPurple",value:Number(oe.toFixed(0)),onChange:Me,onBlur:Te,step:1,disabled:!R&&!W})})]})]}),e(ae,{hasMargin:!1}),e("div",{css:me,children:o(T,{children:[e(v,{labelName:a("editor.page.label_name.header"),size:"big"}),e(We,{isFixed:g,hasPanel:E,deletePanelAction:()=>{D(F.CLICK,{element:"panel_show",parameter2:"header",parameter3:"hidden"}),ue("headerSection")},addPanelAction:()=>{D(F.CLICK,{element:"panel_show",parameter2:"header",parameter3:"show"}),ge("headerSection")}})]})}),e(ae,{hasMargin:!1}),e("div",{css:me,children:o(T,{children:[e(v,{labelName:a("editor.page.label_name.footer"),size:"big"}),e(We,{isFixed:H,hasPanel:b,deletePanelAction:()=>{D(F.CLICK,{element:"panel_show",parameter2:"footer",parameter3:"hidden"}),ue("footerSection")},addPanelAction:()=>{D(F.CLICK,{element:"panel_show",parameter2:"footer",parameter3:"show"}),ge("footerSection")}})]})})]})};pt.displayName="PageFrame";C`
  padding: 6px;
  font-size: 12px;
  cursor: pointer;
  color: ${ce("grayBlue","04")};
  :hover {
    color: ${ce("grayBlue","02")};
  }
`;const tt=C`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  align-items: center;
`,at=C`
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
`,ne=C`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ea=()=>{const{t:a}=Y(),n=ie(),d=N(ze),{displayName:i,hasFooter:l,hasLeft:L,hasRight:f,hasHeader:s}=d,h=N(dt),c=N($e),p=N(De),w=N(Fe),S=N(Ve),{style:x}=h??{},{style:z}=c??{},{style:k}=p??{},{style:H}=w??{},{style:g}=S??{},R=V=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{background:V},sectionName:"leftSection"}))},W=V=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{background:V},sectionName:"rightSection"}))},b=V=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{background:V},sectionName:"bodySection"}))},E=V=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{background:V},sectionName:"headerSection"}))},B=V=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{background:V},sectionName:"footerSection"}))};return o("section",{css:at,children:[e("div",{css:tt,children:e(v,{labelName:a("editor.inspect.setter_group.background"),size:"big"})}),o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.body"),size:"small"}),e(se,{value:(x==null?void 0:x.background)??"white",handleUpdateColor:b})]}),s&&o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.header"),size:"small"}),e(se,{value:(H==null?void 0:H.background)??"white",handleUpdateColor:E})]}),L&&o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.left_panel"),size:"small"}),e(se,{value:(k==null?void 0:k.background)??"white",handleUpdateColor:R})]}),f&&o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.right_panel"),size:"small"}),e(se,{value:(z==null?void 0:z.background)??"white",handleUpdateColor:W})]}),l&&o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.footer"),size:"small"}),e(se,{value:(g==null?void 0:g.background)??"white",handleUpdateColor:B})]})]})},La=({children:a})=>{const n=ie(),d=N(ze),{displayName:i,hasFooter:l,hasLeft:L,hasRight:f,hasHeader:s}=d,h=N($e),c=N(De),p=N(Fe),w=N(Ve),{style:S}=h??{},{style:x}=c??{},{style:z}=p??{},{style:k}=w??{},H=!!(x!=null&&x.dividerColor),g=!!(S!=null&&S.dividerColor),R=!!(z!=null&&z.dividerColor),W=!!(k!=null&&k.dividerColor),b=[{label:ye.t("editor.page.label_name.left_panel"),value:"leftSection",disabled:!L||H},{label:ye.t("editor.page.label_name.right_panel"),value:"rightSection",disabled:!f||g},{label:ye.t("editor.page.label_name.header"),value:"headerSection",disabled:!s||R},{label:ye.t("editor.page.label_name.footer"),value:"footerSection",disabled:!l||W}];return e(Pt,{position:"bottom-start",trigger:"click",dropList:e(vt,{onClickItem:B=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{dividerColor:ce("grayBlue","08")},sectionName:B}))},children:b.map(B=>e(Ct,{value:B.value,disabled:B.disabled,colorScheme:"techPurple",title:B.label},B.label))}),children:a})},Ba=C`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  overflow: hidden;
  :hover {
    .deleteContainer {
      transform: translateX(0);
    }
  }
`,Ra=C`
  display: flex;
  align-items: center;
  gap: 8px;
  transform: translateX(32px);
  transition: all 0.2s ease-in-out;
`,ke=a=>{const{children:n,onClickDelete:d,labelName:i}=a;return o("div",{css:Ba,children:[e(v,{labelName:i,size:"small"}),o("div",{css:Ra,className:"deleteContainer",children:[n,e(Ee,{onClick:d,children:e(st,{})})]})]})},Wa=()=>{const{t:a}=Y(),n=ie(),d=N(ze),{displayName:i}=d,l=N($e),L=N(De),f=N(Fe),s=N(Ve),{style:h}=l??{},{style:c}=L??{},{style:p}=f??{},{style:w}=s??{},S=!!(c!=null&&c.dividerColor),x=!!(h!=null&&h.dividerColor),z=!!(p!=null&&p.dividerColor),k=!!(w!=null&&w.dividerColor),H=t.useCallback(M=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{dividerColor:M},sectionName:"leftSection"}))},[n,i]),g=t.useCallback(()=>{n(m.deleteCurrentPageStyleReducer({pageName:i,styleKey:"dividerColor",sectionName:"leftSection"}))},[n,i]),R=t.useCallback(M=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{dividerColor:M},sectionName:"rightSection"}))},[n,i]),W=t.useCallback(()=>{n(m.deleteCurrentPageStyleReducer({pageName:i,styleKey:"dividerColor",sectionName:"rightSection"}))},[n,i]),b=t.useCallback(M=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{dividerColor:M},sectionName:"headerSection"}))},[n,i]),E=t.useCallback(()=>{n(m.deleteCurrentPageStyleReducer({pageName:i,styleKey:"dividerColor",sectionName:"headerSection"}))},[n,i]),B=t.useCallback(M=>{n(m.updateCurrentPageStyleReducer({pageName:i,style:{dividerColor:M},sectionName:"footerSection"}))},[n,i]),V=t.useCallback(()=>{n(m.deleteCurrentPageStyleReducer({pageName:i,styleKey:"dividerColor",sectionName:"footerSection"}))},[n,i]);return o("section",{css:at,children:[o("div",{css:tt,children:[e(v,{labelName:a("editor.inspect.setter_group.divider"),size:"big"}),e(La,{children:e("span",{children:e(Ee,{children:e(ct,{})})})})]}),S&&e(ke,{labelName:a("editor.page.label_name.left_panel"),onClickDelete:g,children:e(se,{value:(c==null?void 0:c.dividerColor)??ce("grayBlue","08"),handleUpdateColor:H})}),x&&e(ke,{labelName:a("editor.page.label_name.right_panel"),onClickDelete:W,children:e(se,{value:(h==null?void 0:h.dividerColor)??ce("grayBlue","08"),handleUpdateColor:R})}),z&&e(ke,{labelName:a("editor.page.label_name.header"),onClickDelete:E,children:e(se,{value:(p==null?void 0:p.dividerColor)??ce("grayBlue","08"),handleUpdateColor:b})}),k&&e(ke,{labelName:a("editor.page.label_name.footer"),onClickDelete:V,children:e(se,{value:(w==null?void 0:w.dividerColor)??ce("grayBlue","08"),handleUpdateColor:B})})]})},ka=C`
  display: flex;
  padding: 8px 16px;
`,Pe=C`
  color: ${ce("grayBlue","04")};
  font-size: 12px;
`,Ia=a=>{const n=a.split(" ").filter(d=>d!=="").filter(d=>!isNaN(Number(d)));return n.length===2?`${n[0]} ${n[1]} 0 0`:n.length===3?`${n[0]} ${n[1]} ${n[2]} 0`:n.length>4?`${n[0]} ${n[1]} ${n[2]} ${n[3]}`:n.join(" ")},Aa=(a="")=>/^[0-9]+$/.test(a)?a:"0",_e=a=>{const{isAll:n,value:d,handleUpdateValue:i}=a,l=d.split(" "),L=t.useRef(null),f=ie(),s=S=>{i(S)},h=S=>{i(Ia(S.target.value??"")),f(Xe.updateShowDot(!1))},c=S=>x=>{l[S]=x,!(x!==""&&!/^[0-9]+$/.test(x))&&i(l.join(" "))},p=()=>{f(Xe.updateShowDot(!0))},w=S=>z=>{f(Xe.updateShowDot(!1));const k=Aa(z.target.value);l[S]=k,i(l.join(" "))};return e("div",{css:ka,children:n?e(Z,{prefix:e("span",{css:Pe,children:"All"}),colorScheme:"techPurple",value:d,ref:L,onFocus:p,onChange:s,onBlur:h}):o(Q,{children:[e(Z,{prefix:e("span",{css:Pe,children:"T"}),colorScheme:"techPurple",bdRadius:"8px 0 0 8px",value:l[0],onFocus:p,onBlur:w(0),onChange:c(0)}),e(Z,{prefix:e("span",{css:Pe,children:"R"}),colorScheme:"techPurple",bdRadius:"0",pos:"relative",l:"-1px",value:l[1],onFocus:p,onBlur:w(1),onChange:c(1)}),e(Z,{prefix:e("span",{css:Pe,children:"B"}),colorScheme:"techPurple",bdRadius:"0",pos:"relative",l:"-2px",value:l[2],onFocus:p,onBlur:w(2),onChange:c(2)}),e(Z,{prefix:e("span",{css:Pe,children:"L"}),colorScheme:"techPurple",bdRadius:"0 8px 8px 0",pos:"relative",l:"-3px",value:l[3],onFocus:p,onBlur:w(3),onChange:c(3)})]})})},rt=C`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ne=[{label:e("div",{css:rt,children:e($t,{})}),value:$.ALL},{label:e("div",{css:rt,children:e(Dt,{})}),value:$.PARTIAL}],za=()=>{const{t:a}=Y(),n=N(ze),{displayName:d,hasFooter:i,hasLeft:l,hasRight:L,hasHeader:f}=n,s=N(dt),h=N($e),c=N(De),p=N(Fe),w=N(Ve),{style:S}=s??{},{style:x}=h??{},{style:z}=c??{},{style:k}=p??{},{style:H}=w??{},g=ie(),{padding:R={}}=S??{},{padding:W={}}=k??{},{padding:b={}}=z??{},{padding:E={}}=x??{},{padding:B={}}=H??{},V=R.mode??$.ALL,M=W.mode??$.ALL,de=b.mode??$.ALL,le=E.mode??$.ALL,he=B.mode??$.ALL,re=R.size??`${xe}`,oe=W.size??`${xe}`,ee=b.size??`${xe}`,q=E.size??`${xe}`,te=B.size??`${xe}`,Le=P=>{if(de!==P)switch(P){case $.ALL:{let r=ee;const _=Array.from(new Set(ee.split(" ")));_.length===1&&(r=_[0]),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:r}},sectionName:"leftSection"}));break}case $.PARTIAL:{const r=ee.split(" ");let _=ee;r.length===1&&(_=`${r[0]} ${r[0]} ${r[0]} ${r[0]}`),r.length===4&&(_=`${r[0]} ${r[1]} ${r[2]} ${r[3]}`),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:_}},sectionName:"leftSection"}));break}}},pe=P=>{if(le!==P)switch(P){case $.ALL:{let r=q;const _=Array.from(new Set(q.split(" ")));_.length===1&&(r=_[0]),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:r}},sectionName:"rightSection"}));break}case $.PARTIAL:{const r=q.split(" ");let _=q;r.length===1&&(_=`${r[0]} ${r[0]} ${r[0]} ${r[0]}`),r.length===4&&(_=`${r[0]} ${r[1]} ${r[2]} ${r[3]}`),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:_}},sectionName:"rightSection"}));break}}},Be=P=>{if(M!==P)switch(P){case $.ALL:{let r=oe;const _=Array.from(new Set(oe.split(" ")));_.length===1&&(r=_[0]),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:r}},sectionName:"headerSection"}));break}case $.PARTIAL:{const r=oe.split(" ");let _=oe;r.length===1&&(_=`${r[0]} ${r[0]} ${r[0]} ${r[0]}`),r.length===4&&(_=`${r[0]} ${r[1]} ${r[2]} ${r[3]}`),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:_}},sectionName:"headerSection"}));break}}},ue=P=>{if(he!==P)switch(P){case $.ALL:{let r=te;const _=Array.from(new Set(te.split(" ")));_.length===1&&(r=_[0]),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:r}},sectionName:"footerSection"}));break}case $.PARTIAL:{const r=te.split(" ");let _=te;r.length===1&&(_=`${r[0]} ${r[0]} ${r[0]} ${r[0]}`),r.length===4&&(_=`${r[0]} ${r[1]} ${r[2]} ${r[3]}`),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:_}},sectionName:"footerSection"}));break}}},ge=P=>{if(V!==P)switch(P){case $.ALL:{let r=re;const _=Array.from(new Set(re.split(" ")));_.length===1&&(r=_[0]),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:r}},sectionName:"bodySection"}));break}case $.PARTIAL:{const r=re.split(" ");let _=re;r.length===1&&(_=`${r[0]} ${r[0]} ${r[0]} ${r[0]}`),r.length===4&&(_=`${r[0]} ${r[1]} ${r[2]} ${r[3]}`),g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{mode:P,size:_}},sectionName:"bodySection"}));break}}},Me=P=>{g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{size:P}},sectionName:"leftSection"}))},Te=P=>{g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{size:P}},sectionName:"rightSection"}))},Ue=P=>{g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{size:P}},sectionName:"headerSection"}))},He=P=>{g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{size:P}},sectionName:"footerSection"}))},Oe=P=>{g(m.updateCurrentPageStyleReducer({pageName:d,style:{padding:{size:P}},sectionName:"bodySection"}))};return o("section",{css:at,children:[e("div",{css:tt,children:e(v,{labelName:a("editor.inspect.setter_group.padding"),size:"big"})}),o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.body"),size:"small"}),e(fe,{type:"button",options:Ne,value:V,onChange:ge,size:"small",w:"105px",forceEqualWidth:!0})]}),e(_e,{isAll:V===$.ALL,value:re,handleUpdateValue:Oe}),f&&o(Q,{children:[o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.header"),size:"small"}),e(fe,{type:"button",options:Ne,value:M,onChange:Be,size:"small",w:"105px",forceEqualWidth:!0})]}),e(_e,{isAll:M===$.ALL,value:oe,handleUpdateValue:Ue})]}),l&&o(Q,{children:[o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.left_panel"),size:"small"}),e(fe,{type:"button",options:Ne,value:de,onChange:Le,size:"small",w:"105px",forceEqualWidth:!0})]}),e(_e,{isAll:de===$.ALL,value:ee,handleUpdateValue:Me})]}),L&&o(Q,{children:[o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.right_panel"),size:"small"}),e(fe,{type:"button",options:Ne,value:le,onChange:pe,size:"small",w:"105px",forceEqualWidth:!0})]}),e(_e,{isAll:le===$.ALL,value:q,handleUpdateValue:Te})]}),i&&o(Q,{children:[o("div",{css:ne,children:[e(v,{labelName:a("editor.page.label_name.footer"),size:"small"}),e(fe,{type:"button",options:Ne,value:he,onChange:ue,size:"small",w:"105px",forceEqualWidth:!0})]}),e(_e,{isAll:he===$.ALL,value:te,handleUpdateValue:He})]})]})},ut=()=>{const{t:a}=Y();return o(et,{title:a("editor.inspect.setter_group.style"),children:[e(Wa,{}),e(qe,{}),e(Ea,{}),e(qe,{}),e(za,{})]})};ut.displayName="PageStyle";const $a=()=>e("div",{css:Pa,onClick:()=>{Nt.switchFocus("page_config")},children:o("div",{css:_a,children:[e(pt,{}),e(la,{}),e(ut,{})]})});$a.displayName="PagePanel";export{$a as default};
//# sourceMappingURL=index-d30fcabe.js.map

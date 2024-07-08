import{n as v,l as X,m as Y,o as V,k as i,a3 as z,B as P,T as E,O as q,v as N}from"./@illa-design-1f43bb6c.js";import{hr as O,hs as _,u as D,en as R,b as H,ci as Q,ht as Z,hu as k,hv as A,hw as L,hx as U,hy as ee,hz as te,hA as se,hB as ne,h8 as re,hC as ie,hD as oe,hE as le}from"./index-4dce6ee8.js";import{r as j}from"./react-9b7e00e3.js";import{a as g}from"./@emotion-08a6282b.js";import{g as $,b as B}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";g`
  box-sizing: border-box;
  margin: 8px 16px;
  min-height: 264px;
  border-radius: 8px;
  border: 1px solid ${v("grayBlue","08")};
  overflow: hidden;
`;g`
  width: 100%;
  background-color: ${X(`--${Y}-grayBlue-09`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  color: ${v("grayBlue","02")};
  font-weight: 500;
  box-sizing: border-box;
  padding: 0 8px 0 16px;
`;g`
  cursor: pointer;
  padding: 0 8px;
  font-size: 14px;
  height: 24px;
  display: inline-flex;
  color: ${v("techPurple","03")};
  align-items: center;
  flex-direction: row;
`;const ae=g`
  display: flex;
  flex-direction: column;
`,ce=g`
  height: 40px;
  width: 100%;
  cursor: pointer;
  display: flex;
  padding-right: 8px;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  .dragIcon {
    visibility: hidden;
  }
  &:hover {
    .dragIcon {
      visibility: visible;
    }
  }
`,ue=g`
  height: 40px;
  cursor: pointer;
  width: 100%;
  padding-left: 16px;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  .dragIcon {
    visibility: hidden;
  }
  &:hover {
    .dragIcon {
      visibility: visible;
    }
  }
`,F=g`
  font-weight: 400;
  width: 100%;
  height: 100%;
  line-height: 40px;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${v("grayBlue","02")};
  font-size: 14px;
`;g`
  flex-grow: 1;
`;g`
  list-style: none;
  padding: 0;
  margin: 0;
`;const J=g`
  padding: 0 16px 16px 16px;
`,K=a=>{const{id:t,label:s,onDelete:n,attrPath:u,childrenSetter:b,widgetDisplayName:I}=a,{attributes:d,listeners:S,setNodeRef:r,transform:o,transition:m}=O({id:t}),f={transform:_.Transform.toString(o),transition:m},[x,l]=j.useState(!1),{t:e}=D();return V("div",{css:ue,ref:r,style:f,...d,children:[i(z,{className:"dragIcon",fs:"16px",c:v("grayBlue","04"),...S}),i(E,{withoutPadding:!0,colorScheme:"white",trigger:"click",onVisibleChange:c=>{l(c)},popupVisible:x,content:i(R,{title:s,attrPath:`${u}`,widgetDisplayName:I,childrenSetter:b,handleCloseModal:()=>{l(!1)},extraElement:i("div",{css:J,children:i(P,{w:"100%",variant:"light",colorScheme:"red",onClick:()=>{n()},children:e("editor.inspect.setter_content.menu_setter.delete")})})}),showArrow:!1,position:"left",clickOutsideToClose:!0,children:i("span",{css:F,children:s})})]})};K.displayName="SetterMenuItem";const G=a=>{const{title:t,...s}=a;return i(P,{pd:"1px 8px",variant:"text",colorScheme:"techPurple",leftIcon:i(q,{size:"14px"}),...s,children:t})};G.displayName="NewButton";const W=a=>{const{id:t,label:s,value:n,onDelete:u,onClickAdd:b,children:I,attrPath:d,childrenSetter:S,widgetDisplayName:r,onClick:o}=a,{t:m}=D(),{attributes:f,listeners:x,setNodeRef:l,transform:e,transition:c}=O({id:t}),h={transform:_.Transform.toString(e?{y:(e==null?void 0:e.y)??0,x:(e==null?void 0:e.x)??0,scaleX:1,scaleY:1}:null),transition:c},[w,p]=j.useState(!1);return V("div",{css:ae,ref:l,style:h,onClick:o,...f,children:[V("div",{css:ce,children:[i(z,{className:"dragIcon",fs:"16px",c:v("grayBlue","04"),...x}),i(E,{withoutPadding:!0,colorScheme:"white",trigger:"click",onVisibleChange:y=>{p(y)},popupVisible:w,content:i(R,{title:s,attrPath:`${d}`,widgetDisplayName:r,childrenSetter:S,handleCloseModal:()=>{p(!1)},extraElement:i("div",{css:J,children:i(P,{w:"100%",variant:"light",colorScheme:"red",onClick:()=>{u()},children:m("editor.inspect.setter_content.menu_setter.delete")})})}),showArrow:!1,position:"left",clickOutsideToClose:!0,children:i("span",{css:F,children:s})}),i(G,{title:m("editor.inspect.setter_content.menu_setter.sub"),onClick:()=>{b(n)}})]}),I]})};W.displayName="SetterSubMenu";function T(a,t){let s=`${t}${a.length}`,n=0;for(;a.find(u=>u.label===s);)n++,s=`${t}${a.length+n}`;return s}function M(a,t,s){let n=`${t}${s}${a.length}`,u=0;for(;a.find(b=>b.value===n);)u++,n=`${t}${s}${a.length+u}`;return n}const de=a=>{const{handleUpdateMultiAttrDSL:t,attrName:s,value:n,childrenSetter:u,widgetDisplayName:b}=a,I=H(Q),d=$(I,`${b}.${s}`,[]),S=Z(k(le),k(oe,{coordinateGetter:ie}));return i(re,{attrName:s,value:n,handleUpdateMultiAttrDSL:t,items:n.map(r=>r.id),columnNum:n.length,onClickNew:()=>{t==null||t({[s]:[...n,{id:N(),label:T(n,"Menu "),value:M(n,"","menu")}]})},children:n.map((r,o)=>{var m,f,x;return i(W,{id:r.id,onDelete:()=>{const l=n.filter((e,c)=>c!==o);t==null||t({[s]:l})},value:r.value,label:B(d[o].label)?d[o].label:JSON.stringify(d[o].label),onClickAdd:()=>{const l=n.map(e=>e.value===r.value?"subItems"in e?{...e,subItems:[...e.subItems??[],{id:N(),label:T(e.subItems,"Sub Menu "),value:M(e.subItems,`${r.value}:`,"subMenu")}]}:{...e,subItems:[{id:N(),label:"Sub Menu 0",value:`${r.value}:subMenu0`}]}:e);t==null||t({[s]:[...l]})},attrPath:`${s}.${o}`,childrenSetter:u,widgetDisplayName:b,children:i(A,{modifiers:[L,U],sensors:S,collisionDetection:ee,onDragEnd:l=>{const e=r.subItems;if(e===void 0)return;const{active:c,over:h}=l;if(c&&h&&c.id!==h.id){const w=e.findIndex(C=>C.id===c.id),p=e.findIndex(C=>C.id===h.id),y=te(e,w,p);return t==null||t({[`${s}.${o}.subItems`]:y}),y}},children:i(se,{items:((m=r.subItems)==null?void 0:m.map(l=>l.id))??[],strategy:ne,children:"subItems"in r&&(((f=r.subItems)==null?void 0:f.length)??0)>0&&((x=r.subItems)==null?void 0:x.map((l,e)=>i(K,{id:l.id,onDelete:()=>{var w;const c=[...n],h=((w=r.subItems)==null?void 0:w.filter((p,y)=>y!==e))??[];if(h.length!==0)c[o]={...r,subItems:h};else{const p={...r};delete p.subItems,c[o]=p}t==null||t({[s]:c})},attrPath:`${s}.${o}.subItems.${e}`,childrenSetter:u,widgetDisplayName:b,label:B($(d,`${o}.subItems.${e}.label`))?$(d,`${o}.subItems.${e}.label`)??"":JSON.stringify($(d,`${o}.subItems.${e}.label`)),value:l.value},l.id)))})})},r.id)})})};de.displayName="MenuOptionSetter";export{de as MenuOptionSetter,de as default};
//# sourceMappingURL=index-4bd3d317.js.map

import{v as A,k as o,l as d,m as c,o as y,T as H,bB as C,bC as T,bz as z,bA as j,F as O}from"./@illa-design-402f214a.js";import{u as $,b as W,fb as F,eo as K,cQ as N,a as M,b7 as w}from"./index-2f1869ab.js";import{r as a}from"./react-9b7e00e3.js";import{A as U}from"./addActionLabel-4ec6d248.js";import{a as s}from"./@emotion-4f16718e.js";import{E as q}from"./index-278fcfb2.js";import{g as Q}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";import"./index-323e87cb.js";const E=a.createContext({}),S=t=>{const{eventItems:e,attrPath:n,handleUpdateDsl:r}=t,l=a.useCallback(u=>{const p=e.filter((m,h)=>h!==u);r(n,p)},[e,r,n]),i=a.useCallback(u=>{let p=e.find((h,v)=>v===u);if(!p)return;p={...p,id:`option-${A()}`};const m=[...e,p];r(n,m)},[e,r,n]),g={...t,handleDeleteEventItem:l,handleCopyEventItem:i};return o(E.Provider,{value:g,children:t.children})};S.displayName="BaseEventHandlerProvider";const R=()=>`events-${A()}`,X=(t,e)=>({id:R(),eventType:t,targetId:e,type:"datasource",method:"trigger"});s`
  width: 100%;
  height: 32px;
  border: solid 1px ${d(`--${c}-grayBlue-08`)};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${d(`--${c}-grayBlue-05`)};
  font-size: 12px;

  :not(:first-of-type) {
    margin-top: 8px;
  }

  cursor: pointer;
`;s`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;s`
  display: flex;
  align-items: center;
  color: ${d(`--${c}-purple-03`)};
  cursor: pointer;
  height: 24px;
  padding: 1px 8px;
  border-radius: 8px;
  font-size: 14px;

  &:hover {
    background-color: ${d(`--${c}-grayBlue-09`)};
  }
`;s`
  margin-left: 4px;
`;const Y=s`
  height: 32px;
  width: 100%;
`,G=s`
  width: 100%;
  height: 32px;
  display: flex;
`,J=s`
  width: 32px;
  flex: none;
  height: 32px;
  border: 1px solid ${d(`--${c}-grayBlue-08`)};
  border-radius: 0 8px 8px 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${d(`--${c}-grayBlue-06`)};
`,Z=s`
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${d(`--${c}-grayBlue-08`)};
  border-right: none;
  border-radius: 8px 0 0 8px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 12px;
  gap: 8px;
  overflow: hidden;
`,ee=s`
  color: ${d(`--${c}-grayBlue-02`)};
  min-width: 64px;
  display: block;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,te=s`
  color: ${d(`--${c}-grayBlue-04`)};
  display: block;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,ne=s`
  min-height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: ${d(`--${c}-grayBlue-09`)};
  color: ${d(`--${c}-grayBlue-03`)};
  border-radius: 8px;
  font-size: 14px;
`,k=a.memo(()=>{const{t}=$();return o("div",{css:ne,children:t("editor.inspect.setter_content.event_handler_list.empty")})});k.displayName="EventHandlerEmpty";const re=(t,e,n,r)=>t==="widget"?e&&n?`${e}.${n}()`:w.t("editor.inspect.setter_content.event_handler_list.incomplete_selection"):t==="datasource"?r?`${r}.run()`:w.t("editor.inspect.setter_content.event_handler_list.incomplete_selection"):t?`${t}()`:w.t("editor.inspect.setter_content.event_handler_list.incomplete_selection"),B=t=>{const e=W(F),{index:n}=t,{t:r}=$(),[l,i]=a.useState(!1),{widgetDisplayName:g,attrPath:u,childrenSetter:p,eventItems:m,widgetType:h}=a.useContext(E),v=Q(m,n),{eventType:x,widgetID:f,queryID:b,widgetMethod:_,actionType:P}=v,V=a.useCallback(()=>{i(!1)},[]);return o(H,{withoutPadding:!0,colorScheme:"white",popupVisible:l,content:o(K,{title:r("editor.inspect.setter_content.event_handler_list.title"),handleCloseModal:V,attrPath:`${u}.${n}`,widgetDisplayName:g,childrenSetter:p,docLink:q}),trigger:"click",showArrow:!1,position:e?"left-start":"top-start",clickOutsideToClose:!1,onVisibleChange:I=>{I&&N(M.SHOW,{element:"event_handler_editor",parameter1:h}),i(I)},children:y("div",{css:Z,children:[o("div",{css:ee,children:r(x?`editor.inspect.setter_content.widget_action_type_name.${x}`:"editor.inspect.setter_content.event_handler_list.incomplete_selection")}),o("div",{css:te,children:re(P,f,_,b)})]})})};B.displayName="EventAndMethodLabel";const L=t=>{const{index:e,handleCloseMode:n}=t,{handleCopyEventItem:r,handleDeleteEventItem:l}=a.useContext(E),{t:i}=$();return y(T,{w:"184px",children:[o(C,{value:"duplicate",title:i("editor.inspect.setter_content.option_list.action_menu.duplicate"),onClick:()=>{r(e),n()}},"duplicate"),o(C,{value:"delete",title:i("editor.inspect.setter_content.option_list.action_menu.delete"),deleted:!0,onClick:()=>{l(e),n()}},"delete")]})};L.displayName="ActionMenu";const D=t=>{const{index:e}=t,[n,r]=a.useState(!1),l=a.useCallback(()=>{r(!1)},[]);return o(j,{popupVisible:n,dropList:o(L,{index:e,handleCloseMode:l}),trigger:"click",position:"bottom-end",onVisibleChange:i=>{r(i)},children:o("div",{css:J,children:o(z,{})})})};D.displayName="OptionListSetterMore";const oe=t=>{const{index:e}=t;return o("div",{css:Y,children:y("div",{css:G,children:[o(B,{index:e}),o(D,{index:e})]})})},ie=t=>{const{events:e}=t;return!e||e.length===0?o(k,{}):o(O,{children:e.map((n,r)=>o(oe,{index:r},n.id))})},se=s`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,le=t=>{const{widgetType:e,value:n,childrenSetter:r,handleUpdateDsl:l,attrName:i,widgetDisplayName:g,labelName:u,labelDesc:p,defaultValue:m,eventHandlerConfig:h={events:[`${m}`],method:[]}}=t,v=a.useCallback(async()=>{const{events:x}=h;let f=Array.isArray(n)?n:[];const b=typeof x[0]=="string"?x[0]:x[0].value,_=X(b,"query1");N(M.CLICK,{element:"add_event_handler",parameter1:e}),l(i,[...f,_])},[h,n,e,l,i]);return!r||!Array.isArray(r)||r.length<1?null:o(S,{eventItems:n,attrPath:i,handleUpdateDsl:l,widgetDisplayName:g,childrenSetter:r,widgetType:e,children:y("div",{css:se,children:[o(U,{labelName:u,labelDesc:p,handleAddItem:v}),o(ie,{events:n})]})})};le.displayName="EventHandlerSetter";export{le as default};
//# sourceMappingURL=index-913211d8.js.map

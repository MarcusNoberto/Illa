import{l as d,m as p,o as u,k as t,C as O,aD as R,A as z,ch as V,n as D,T as H}from"./@illa-design-402f214a.js";import{h6 as U,b9 as F,e_ as W,aM as G,cQ as _,a as $}from"./index-2f1869ab.js";import{r as i}from"./react-9b7e00e3.js";import{a as e}from"./@emotion-4f16718e.js";import{f as K}from"./style-ab05d1ea.js";import{P as Q}from"./index-323e87cb.js";const X=(n=!1)=>{const o=n?e`
        width: 100%;
      `:K;return e`
    ${o};
    height: 100%;
  `},Y=e`
  width: 24px;
  height: 24px;
  padding: 4px;
  & > svg {
    width: 16px;
    height: 16px;
  }
`,q=e`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid ${d(`--${p}-grayBlue-08`)};
  padding: 3px 12px;
  border-radius: 8px;
  cursor: pointer;
  gap: 8px;
  display: flex;
  overflow: hidden;
  align-items: center;
  :hover > div:last-child {
    display: flex;
  }
`,J=e`
  height: 100%;
  display: flex;
  font-size: 12px;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,Z=e`
  width: 16px;
  height: 16px;
  display: none;
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 8px;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 12px;
    height: 12px;
  }
`,ee=e`
  min-width: 545px;
  height: 546px;
  display: flex;
  flex-direction: column;
`,te=e`
  width: 100%;
  height: 56px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ne=e`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`,ie=e`
  width: 100%;
  height: 48px;
  padding: 0 16px 16px 16px;
  box-shadow: inset 0px -1px 0px ${d(`--${p}-grayBlue-08`)};
`,oe=e`
  width: 100%;
  flex: 1;
  display: flex;
  overflow: scroll;
`,le=e`
  flex: 1;
  max-height: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0px;
  border-bottom-left-radius: 8px;
  flex: none;
`,se=e`
  width: 100%;
  min-height: 40px;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 9px 16px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: ${d(`--${p}-grayBlue-02`)};
  background: ${d(`--${p}-white-01`)};
`,ce=e`
  width: 440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${d(`--${p}-grayBlue-08`)};
`,re=e`
  width: 100%;
  height: 40px;
  background: ${d(`--${p}-white-01`)};
  padding: 8px 0 0;
  display: flex;
  align-items: center;
`,ae=n=>n?e`
      box-shadow: inset 0px -2px 0px ${d(`--${p}-grayBlue-02`)};
    `:e``,de=n=>n?e`
      background: ${d(`--${p}-grayBlue-09`)};
    `:e``,pe=e`
  width: auto;
  height: 32px;
  background: ${d(`--${p}-white-01`)};
  padding: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`,Pe=e`
  width: 100%;
  flex-grow: 1;
  min-width: 400px;
  overflow: scroll;
  padding: 0px 8px 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
`,_e=e`
  width: 48px;
  cursor: pointer;
  height: 48px;
  display: inline-block;
  padding: 12px;
  & > svg {
    width: 24px;
    height: 24px;
  }
`,he=e`
  cursor: pointer;
`,ge=e`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 8px 8px;
  justify-content: center;
  align-items: center;
`,xe=(n=!1)=>{const o=e`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,r=e`
    flex-direction: column;
    gap: 8px;
  `;return e`
    display: flex;
    padding: 8px 0;
    ${n?r:o};
    width: 100%;
  `},ue={id:"default",name:"All",projectUrl:"",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},fe=U.sort((n,o)=>n.name>o.name?1:-1),[me,...ye]=fe,T=[ue,...ye,me];T.forEach(n=>{if(n.name.length>16){const o=n.name.split(" ");n.name=o.slice(0,o.length-1).join(" ")}});const we=["All","Filled","Outline"],B=n=>{const{handleCurrentIconClick:o,handleCloseModal:r}=n,[s,a]=i.useState("All"),[l,g]=i.useState("default"),[h,f]=i.useState(""),w=i.lazy(()=>F(()=>import("./IconPickerList-7525770c.js"),["assets/IconPickerList-7525770c.js","assets/@illa-design-402f214a.js","assets/react-9b7e00e3.js","assets/@emotion-4f16718e.js","assets/index-2f1869ab.js","assets/codeMirror-vendor-eff8ab8d.js","assets/lodash-lib-6e94956b.js","assets/react-icons-vendor-2430ea65.js","assets/index-cbfab8c9.css","assets/style-ab05d1ea.js","assets/index-323e87cb.js"])),C=c=>{f(c)},S=c=>{g(c)},I=c=>{a(c)},m=i.useCallback(()=>r(!1),[r]),x=i.useMemo(()=>u("div",{css:te,children:[t("div",{css:ne,children:"Icon picker"}),t(O,{css:he,onClick:m})]}),[m]),y=i.useMemo(()=>t("div",{css:le,children:T.map(c=>{const{name:A,id:v}=c;return t("div",{css:[se,de(l===v)],onClick:()=>S(v),children:A},v)})}),[l]),b=i.useMemo(()=>t("div",{css:re,children:we.map(c=>t("div",{css:[pe,ae(s===c)],onClick:()=>I(c),children:c},c))}),[s]),E=()=>t("div",{css:ge,children:t(z,{})}),k=i.useMemo(()=>t(i.Suspense,{fallback:t(E,{}),children:t(w,{iconOrigin:l,iconType:s,searchInput:h,handleCurrentIconClick:o})}),[w,o,l,s,h]),P=i.useMemo(()=>u("div",{css:ce,children:[b,k]}),[k,b]),N=i.useMemo(()=>u("div",{css:oe,children:[y,P]}),[y,P]),j=i.useMemo(()=>t("div",{css:ie,children:t(R,{value:h,colorScheme:"techPurple",variant:"fill",placeholder:W("editor.widget_picker.search_placeholder"),onChange:C})}),[h]);return u("div",{css:ee,children:[x,j,N]})};B.displayName="IconTriggerComponent";const M=n=>{const{attrName:o,isSetterSingleRow:r,handleUpdateDsl:s,showData:a}=n,[l,g]=i.useState(void 0);i.useEffect(()=>{s(o,a==null?void 0:a.name),g(a)},[o,s,a]);const h=i.useCallback(f=>{f.stopPropagation(),g(void 0),s(o,void 0)},[o,s]);return t("div",{css:X(r),children:u("div",{css:q,children:[t("div",{css:Y,children:(l==null?void 0:l.getIcon)&&(l==null?void 0:l.getIcon({}))}),t("span",{css:J,children:(l==null?void 0:l.name)??""}),t("div",{css:Z,onClick:h,children:t(V,{color:D("grayBlue","05")})})]})})};M.displayName="BaseIconSetter";const L=n=>{const{value:o,widgetType:r,attrName:s,labelName:a,labelDesc:l,labelSize:g,isSetterSingleRow:h}=n,[f,w]=i.useState({name:o,getIcon:G[o]}),[C,S]=i.useState(!1),I=i.useCallback(({getIcon:x,name:y})=>{_($.CHANGE,{element:"component_inspect_select",parameter1:r,parameter2:s,parameter3:y}),w({getIcon:x,name:y}),S(!1)},[s,r]),m=i.useCallback(x=>{x&&_($.CLICK,{element:"component_inspect_select",parameter1:r,parameter2:s}),S(x)},[s,r]);return u("div",{css:xe(h),children:[a&&t("span",{children:t(Q,{labelName:a,labelDesc:l,labelSize:g})}),t(H,{withoutPadding:!0,colorScheme:"white",popupVisible:C,content:t(B,{handleCurrentIconClick:I,handleCloseModal:m}),trigger:"click",showArrow:!1,position:"left-start",clickOutsideToClose:!0,onVisibleChange:m,children:t("div",{children:t(M,{...n,showData:f})})})]})};L.displayName="IconSelector";const $e=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{$e as I,_e as a,Pe as r};
//# sourceMappingURL=IconSelector-a6f2b4e8.js.map

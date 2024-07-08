import{n as L,o,k as t,T as _,aj as j,N as B,ay as R,az as U}from"./@illa-design-1f43bb6c.js";import{r as n}from"./react-9b7e00e3.js";import{u as H,b as F,dd as J,eH as v}from"./index-4dce6ee8.js";import{a as z,b as T,C as E}from"./index-03ca7e7b.js";import{r as N,g as X}from"./util-386d549a.js";import{P as Y}from"./index-934389e2.js";import{a as s}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";const $=s`
  width: 100%;
  display: flex;
  justify-content: center;
`,M=s`
  flex: 1;
  .cm-editor {
    border-radius: 8px;
  }
`,G=s`
  width: 9px;
  line-height: 22px;
  margin: 0 8px;
  display: flex;
  align-items: center;
`,K=s`
  padding: 10px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${L("grayBlue","09")};
  }
`,q=s`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 8px 16px;
  gap: 8px;
`,Q=s`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,Z=s`
  width: 66%;
  display: flex;
  align-items: center;
`,ee=s`
  display: flex;
  width: 44px;
  height: 100%;
  z-index: 1;
  gap: 4px;
  cursor: pointer;
  border-left: none;
  align-items: center;
  padding: 2px;
  & > svg {
    width: 12px;
    height: 12px;
  }
`,te=s`
  width: 100px;
  padding: 8px 0;
  font-size: 14px;
  line-height: 22px;
  color: ${L("grayBlue","02")};
`,ie=s`
  line-height: 26px;
`,D=[{label:"KB",value:"kb"},{label:"MB",value:"mb"}],se=I=>{var b,C,w;const{labelName:A,labelDesc:P,handleUpdateDsl:p,widgetDisplayName:x,placeholder:g,componentNode:a}=I,c=((b=a==null?void 0:a.props)==null?void 0:b.sizeType)??"",d=((C=a==null?void 0:a.props)==null?void 0:C.maxSize)??"",m=((w=a==null?void 0:a.props)==null?void 0:w.minSize)??"",[h,V]=n.useState(!1),{t:f}=H(),u=F(J),l=n.useMemo(()=>{const e=Object.keys(u);for(let i=0;i<e.length;i++)if(u[e[i]].includes(x))return e[i];return""},[u,x]),k=n.useMemo(()=>l?N(d,l):d,[l,d]),O=n.useMemo(()=>l?N(m,l):m,[l,m]),S=n.useCallback((e,i)=>{let r=e;l&&(r=X(e,l)),p(i,r)},[l,p]),y=e=>{h!==e&&V(e)},W=e=>{p("sizeType",e),y(!1)};return o("div",{css:q,children:[o("div",{css:Q,children:[t("div",{css:Z,children:t(Y,{labelName:A,labelDesc:P})}),t("div",{children:D&&t(_,{trigger:"click",colorScheme:"white",position:"bottom-start",withoutPadding:!0,showArrow:!1,popupVisible:h,onVisibleChange:y,content:t("div",{css:te,children:D.map(e=>{let i,r;return j(e)||B(e)?i=r=e:(i=e.label,r=e.value),t("div",{css:K,onClick:()=>W(r),children:i},r)})}),children:o("div",{css:ee,children:[t("div",{css:ie,children:c==null?void 0:c.toUpperCase()}),h?t(R,{}):t(U,{})]})})})]}),o("div",{css:$,children:[t(E,{scopeOfAutoComplete:"page",wrapperCss:M,value:O,onChange:e=>S(e,"minSize"),showLineNumbers:!1,expectValueType:v.NUMBER,lang:z.JAVASCRIPT,maxHeight:"208px",placeholder:g,maxWidth:"100%",codeType:T.EXPRESSION,modalTitle:f("editor.inspect.setter_label.max_size")}),t("div",{css:G,children:"~"}),t(E,{scopeOfAutoComplete:"page",wrapperCss:M,value:k,onChange:e=>S(e,"maxSize"),showLineNumbers:!1,expectValueType:v.NUMBER,lang:z.JAVASCRIPT,placeholder:g,maxHeight:"208px",maxWidth:"100%",codeType:T.EXPRESSION,modalTitle:f("editor.inspect.setter_label.min_size")})]})]})};se.displayName="FileMinMaxSetter";export{se as default};
//# sourceMappingURL=index-e829d224.js.map

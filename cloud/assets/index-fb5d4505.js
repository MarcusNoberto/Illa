import{g as r,f as i,j as e,n as l,B as m,aw as f,a6 as g,F as C,ax as I}from"./@illa-design-764f0835.js";import{r as S}from"./react-bc846394.js";import{a}from"./@emotion-09d14760.js";import{F as R}from"./index-00365173.js";function $(c){return a`
    display: flex;
    padding-right: ${c!==""?"24px":"0"};
    flex-direction: row;
    padding-left: 24px;
  `}const B=a`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,y=a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  & > button {
    color: ${r(`--${i}-grayBlue-05`)};
    :hover {
      color: ${r(`--${i}-grayBlue-02`)};
      transition: color 200ms ease-in-out;
    }
  }
`,k=a`
  min-width: 160px;
  margin-left: 16px;
  margin-right: 16px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${r(`--${i}-grayBlue-02`)};
`,E=c=>{const{records:n,label:s,onDelete:p,onAdd:v,onChangeKey:h,onChangeValue:x,customRender:d}=c,{t:b}=R(),w=S.useMemo(()=>e(C,{children:n==null?void 0:n.map((t,o)=>d?l("div",{css:y,children:[d(t,o),e(m,{ml:"-1px",variant:"outline",minW:"32px",bdRadius:"0 8px 8px 0",colorScheme:"grayBlue",onClick:()=>{p(o,t)},leftIcon:e(f,{})})]},o):l("div",{css:y,children:[e(g,{w:"100%",colorScheme:"techPurple",value:t.key,placeholder:"key",bdRadius:"8px 0 0 8px",onChange:u=>{h(o,u,t.value)}}),e(g,{w:"100%",colorScheme:"techPurple",placeholder:"value",value:t.value,ml:"-1px",bdRadius:"0",onChange:u=>{x(o,t.key,u)}}),e(m,{ml:"-1px",type:"button",variant:"outline",minW:"32px",bdRadius:"0 8px 8px 0",colorScheme:"grayBlue",onClick:()=>{p(o,t)},leftIcon:e(f,{})})]},o))}),[d,h,x,p,n]);return l("div",{css:$(s),children:[s!=""&&e("span",{css:k,children:s}),l("div",{css:B,children:[w,e("span",{children:e(m,{type:"button",mb:"8px",pd:"1px 8px",colorScheme:"techPurple",size:"medium",variant:"text",onClick:v,leftIcon:e(I,{color:r(`--${i}-techPurple-08`)}),children:b("editor.action.panel.btn.new")})})]})]})};E.displayName="InputRecordEditor";export{E as I};
//# sourceMappingURL=index-fb5d4505.js.map

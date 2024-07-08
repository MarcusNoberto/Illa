import{l as m,n as B,m as x,k as e,o as u,B as v,a$ as I,aY as R,F as N,O as G}from"./@illa-design-402f214a.js";import{r as k}from"./react-9b7e00e3.js";import{C as T,a as $}from"./index-9dcf4ab8.js";import{u as O,eI as w}from"./index-2f1869ab.js";import{a as r}from"./@emotion-4f16718e.js";function V(c){return r`
    display: flex;
    padding-right: ${c!==""?"16px":"0"};
    flex-direction: row;
  `}const W=r`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`,E=r`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;

  & > button {
    color: ${m(`--${x}-grayBlue-05`)};

    :hover {
      color: ${m(`--${x}-grayBlue-02`)};
      transition: color 200ms ease-in-out;
    }
  }
`,j=r`
  min-width: 160px;
  flex-grow: 1;
  width: 0;
  height: auto;

  .ͼ1.cm-editor {
    border-radius: 8px 0 0 8px;
  }
`,Q=r`
  margin-left: -1px;
  flex-grow: 1;
  width: 0;
  height: auto;

  .ͼ1.cm-editor {
    border-radius: 0;
  }
`;function z(c){const l=c?r`
        .ͼ1.cm-editor {
          border-radius: 0 8px 8px 0;
        }
      `:r`
        .ͼ1.cm-editor {
          border-radius: 0;
        }
      `;return r`
    margin-left: -1px;
    flex-grow: 1;
    width: 0;
    height: auto;
    ${l};
  `}const M=r`
  min-width: 160px;
  margin-left: 16px;
  margin-right: 16px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  font-size: 14px;
  font-weight: 500;
  color: ${m(`--${x}-grayBlue-02`)};
`,Y=r`
  line-height: 20px;
  color: ${B("techPurple","03")};
  font-size: 12px;
  cursor: pointer;
`,F=c=>{const{fillOnly:l,name:o,records:d,customRender:f,label:y,subLabel:S,onSubLabelClick:L,onDelete:a,onAdd:g,withoutCodeMirror:b,onChangeKey:n,onChangeValue:s,valueInputType:h}=c,{t:P}=O(),C=k.useMemo(()=>h?h===w.ANY?void 0:h:w.STRING,[h]),A=k.useMemo(()=>e(N,{children:d==null?void 0:d.map((t,i)=>f?u("div",{css:E,children:[f(t,i,l),e(v,{type:"button",ml:"-1px",minW:"32px",variant:"outline",bdRadius:"0 8px 8px 0",colorScheme:"grayBlue",onClick:()=>{a==null||a(i,t,o)},leftIcon:e(I,{})})]},i):u("div",{css:E,children:[b?e(R,{colorScheme:"techPurple",height:"32px",value:t.key,readOnly:l,minW:"160px",width:"0",flexGrow:"1",bdRadius:"8px 0 0 8px",placeholder:"key",onChange:p=>{n==null||n(i,p.trim(),t.value,o)}}):e(T,{wrapperCss:j,height:"32px",editable:!l,value:t.key,lang:$.JAVASCRIPT,placeholder:"key",expectValueType:w.STRING,onChange:p=>{n==null||n(i,p.trim(),t.value,o)},singleLine:!0}),b?e(R,{colorScheme:"techPurple",height:"32px",bdRadius:l?"0 8px 8px 0":"0",ml:"-1px",placeholder:"value",minW:"160px",width:"0",flexGrow:"1",value:t.value,onChange:p=>{s==null||s(i,t.key,p.trim(),o)}}):e(T,{height:"32px",wrapperCss:z(l),lang:$.JAVASCRIPT,placeholder:"value",value:t.value,expectValueType:C,singleLine:!0,onChange:p=>{s==null||s(i,t.key,p.trim(),o)}}),!l&&e(v,{type:"button",ml:"-1px",minW:"32px",variant:"outline",bdRadius:"0 8px 8px 0",colorScheme:"grayBlue",onClick:()=>{a==null||a(i,t,o)},leftIcon:e(I,{})})]},i))}),[f,l,o,n,s,a,d,C,b]);return u("div",{css:V(y),children:[y!=""&&u("span",{css:M,children:[e("span",{children:y}),S&&e("span",{css:Y,onClick:L,children:S})]}),u("div",{css:W,children:[A,!l&&e("span",{children:e(v,{type:"button",mb:"8px",pd:"1px 8px",colorScheme:"techPurple",size:"medium",variant:"text",onClick:()=>{g==null||g(o)},leftIcon:e(G,{color:m(`--${x}-techPurple-03`)}),children:P("editor.action.panel.btn.new")})})]})]})};F.displayName="RecordEditor";export{F as R,Q as a,j as r};
//# sourceMappingURL=index-654af204.js.map

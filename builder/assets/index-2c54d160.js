import{l as r,m as n,k as d,o as h}from"./@illa-design-1f43bb6c.js";import{r as p}from"./react-9b7e00e3.js";import{a as l}from"./@emotion-08a6282b.js";const x=l`
  display: block;
  font-size: 12px;
  font-weight: 500;
  text-overflow: ellipsis;
  line-height: 16px;
`;function v(e,a,t,o){const i=e==="left",s=!!t,c=i?l`
        margin-right: 8px;
      `:l`
        margin-left: 8px;
      `;return l`
    ${x};
    overflow: hidden;
    align-self: center;
    width: ${s?t:0};
    min-width: ${s?t:0};
    flex-grow: ${o?1:0};
    flex-shrink: 0;
    text-align: ${a};
    ${s&&c}
  `}function C(e){return l`
    ${x};
    margin-bottom: 8px;
    overflow: hidden;
    width: 100%;
    text-align: ${e};
  `}function S(e,a,t,o){return e==="top"?C(a):v(e,a,t,o)}const k=l`
  &:after {
    background-image: repeating-linear-gradient(
      90deg,
      ${r(`--${n}-grayBlue-06`)} 0,
      ${r(`--${n}-grayBlue-06`)} 1px,
      transparent 0,
      transparent 3px,
      ${r(`--${n}-grayBlue-06`)} 0,
      ${r(`--${n}-grayBlue-06`)} 4px
    );
    background-position: 50%;
    background-size: 4px 1px;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
  }
`,T=l`
  white-space: nowrap;
`,B=e=>l`
    position: relative;
    ${e&&k}
  `,W=l`
  overflow: hidden;
  color: ${r(`--${n}-gray-04`)};
  text-overflow: ellipsis;
`,q=l`
  color: ${r(`--${n}-red-03`)};
  margin-left: 2px;
`,M=p.forwardRef((e,a)=>{const{label:t,labelAlign:o="left",labelCaption:i,labelPosition:s="left",labelHidden:c,labelWidth:b=0,labelWidthUnit:$="%",labelFull:m=!1,required:f,hasTooltip:u=!1}=e,g=p.useMemo(()=>f?d("span",{css:q,children:"*"}):null,[f]),y=p.useMemo(()=>h("span",{css:T,children:[d("span",{css:B(u),children:t}),g]}),[t,g,u]),L=p.useMemo(()=>i?d("div",{css:W,children:i}):null,[i]),w=b?b+$:void 0;return!c&&t?h("label",{css:S(s,o,w,m),ref:a,children:[y,L]}):null});M.displayName="SetterLabel";export{M as L};
//# sourceMappingURL=index-2c54d160.js.map

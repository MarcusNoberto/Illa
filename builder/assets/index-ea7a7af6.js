import{n as j,k as n,o as x,aY as f,F as P,aE as w}from"./@illa-design-1f43bb6c.js";import{S as I,a as L}from"./all-0a341a74.js";import{hJ as i,e as N,be as $}from"./index-4dce6ee8.js";import{r as T}from"./react-9b7e00e3.js";import{P as V}from"./index-934389e2.js";import{a as g}from"./@emotion-08a6282b.js";import{g as z}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";const E=g`
  display: flex;
  padding: 8px 16px;
`,k=g`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,b=g`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,h=g`
  color: ${j("grayBlue","04")};
  font-size: 12px;
`,O=(p="")=>{const o=p.split(" ").filter(e=>e!=="").filter(e=>!isNaN(Number(e)));return o.length===2?`${o[0]} ${o[1]} 0 0`:o.length===3?`${o[0]} ${o[1]} ${o[2]} 0`:o.length>4?`${o[0]} ${o[1]} ${o[2]} ${o[3]}`:o.join(" ")},G=(p="")=>/^[0-9]+$/.test(p)?p:"0",q=[{label:n("div",{css:b,children:n(I,{})}),value:i.ALL},{label:n("div",{css:b,children:n(L,{})}),value:i.PARTIAL}],D=p=>{const o=N(),{handleUpdateMultiAttrDSL:e,componentNode:v,attrName:l,labelName:C}=p,a={mode:z(v,`props.${l}.mode`,i.ALL),size:z(v,`props.${l}.size`,"0")},t=a.size.split(" "),y=a.mode===i.ALL,R=T.useRef(null),A=r=>{e==null||e({[l]:{mode:i.ALL,size:r}})},F=r=>{e==null||e({[l]:{mode:i.ALL,size:O(r.target.value??"")}}),o($.updateShowDot(!1))},m=r=>s=>{t[r]=s,!(s!==""&&!/^[0-9]+$/.test(s))&&(e==null||e({[l]:{mode:i.PARTIAL,size:t.join(" ")}}))},B=r=>{if(a.mode!==r)switch(r){case i.ALL:{let s=a.size;const c=Array.from(new Set(a.size.split(" ")));c.length===1&&(s=c[0]),e==null||e({[l]:{size:s,mode:r}});break}case i.PARTIAL:{const s=a.size.split(" ");let c=a.size;s.length===1&&(c=`${s[0]} ${s[0]} ${s[0]} ${s[0]}`),s.length===4&&(c=`${s[0]} ${s[1]} ${s[2]} ${s[3]}`),e==null||e({[l]:{size:c,mode:r}});break}}},u=()=>{o($.updateShowDot(!0))},d=r=>c=>{o($.updateShowDot(!1));const S=G(c.target.value);t[r]=S,e==null||e({[l]:{mode:i.PARTIAL,size:t.join(" ")}})};return x(P,{children:[x("div",{css:k,children:[n(V,{labelName:C}),n(w,{type:"button",options:q,value:a.mode,onChange:B,size:"small",w:"105px",forceEqualWidth:!0})]}),n("div",{css:E,children:y?n(f,{prefix:n("span",{css:h,children:"All"}),colorScheme:"techPurple",value:t.join(" "),ref:R,onFocus:u,onChange:A,onBlur:F}):x(P,{children:[n(f,{prefix:n("span",{css:h,children:"T"}),colorScheme:"techPurple",bdRadius:"8px 0 0 8px",value:t[0],onFocus:u,onBlur:d(0),onChange:m(0)}),n(f,{prefix:n("span",{css:h,children:"R"}),colorScheme:"techPurple",bdRadius:"0",pos:"relative",l:"-1px",value:t[1],onFocus:u,onBlur:d(1),onChange:m(1)}),n(f,{prefix:n("span",{css:h,children:"B"}),colorScheme:"techPurple",bdRadius:"0",pos:"relative",l:"-2px",value:t[2],onFocus:u,onBlur:d(2),onChange:m(2)}),n(f,{prefix:n("span",{css:h,children:"L"}),colorScheme:"techPurple",bdRadius:"0 8px 8px 0",pos:"relative",l:"-3px",value:t[3],onFocus:u,onBlur:d(3),onChange:m(3)})]})})]})};export{D as DirectionPaddingSetter,D as default};
//# sourceMappingURL=index-ea7a7af6.js.map

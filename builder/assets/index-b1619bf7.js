import{o as d,k as o,aY as h}from"./@illa-design-1f43bb6c.js";import{r as c}from"./react-9b7e00e3.js";import{P as b}from"./index-934389e2.js";import{a as g}from"./@emotion-08a6282b.js";import"./index-4dce6ee8.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const v=g`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  width: 100%;
`,C=/^\d+(\.\d+)?(px|vh|vw|%|em|rem|cm|mm|in|pt|pc)$/,N=l=>{const{handleUpdateMultiAttrDSL:e,attrName:r,value:n,icon:i,labelName:m,labelSize:p="small",labelDesc:u}=l,x=c.useCallback(t=>{e==null||e({[r]:t})},[r,e]),f=c.useCallback(t=>{let a=t.target.value.toLocaleLowerCase().replace(/\s*/g,"");if(a&&!C.test(a)){const s=a.match(/\d+(\.\d+)?/g);s&&(a=s.join("")+"px")}e==null||e({[r]:a})},[r,e]);return d("div",{css:v,children:[o(b,{labelName:m,labelDesc:u,labelSize:p}),o(h,{onChange:x,value:n,prefix:i,w:"170px",onBlur:f,colorScheme:"techPurple"})]})};export{N as default};
//# sourceMappingURL=index-b1619bf7.js.map

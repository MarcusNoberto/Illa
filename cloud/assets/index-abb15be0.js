import{u as g,am as h,K as n,J as s}from"./index-23602d79.js";import{l as a,as as u}from"./@illa-design-df878cb8.js";import{e}from"./@emotion-28b7fe46.js";import{u as f,j as v}from"./react-bc846394.js";const y=e`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24rem 12rem;
  background: ${a("white","01")};
  z-index: 2;
`,w=e`
  font-size: 32rem;
  line-height: 44rem;
`,S=e`
  height: calc(var(--dvh, 1vh) * 100);
  padding: 136rem 0 8rem 0;
  font-size: 28rem;
  overflow: auto;
`,k=e`
  font-size: 40rem;
  margin: 20rem;
  cursor: pointer;
`,b=t=>e`
    ${S};
    padding: ${t?"136rem 0 0":"136rem 32rem 8rem"};
  `,x=e`
  width: 100%;
  padding: 8rem 0 40rem 0;
  margin-bottom: 40rem;
  color: ${a("grayBlue","02")};
  font-size: 48rem;
  font-weight: 600;
`,B=t=>{const{children:c,navRight:l,withoutPadding:m,title:o}=t,i=f(),d=v(),r=g(h),p=d.pathname.split("/")[2];return n("div",{css:w,children:[n("div",{css:y,children:[s(u,{css:k,onClick:()=>{i(p?"/setting":r?`/workspace/${r}`:"/workspace")}}),l]}),n("div",{css:b(m),children:[o&&s("div",{css:x,children:o}),c]})]})};B.displayName="SettingMobileLayout";export{B as S};
//# sourceMappingURL=index-abb15be0.js.map

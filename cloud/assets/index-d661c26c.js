import{h as a,n as i,j as s,ap as g}from"./@illa-design-764f0835.js";import{u as h,aj as u}from"./index-d352fe71.js";import{a as e}from"./@emotion-09d14760.js";import{u as f,j as v}from"./react-bc846394.js";const y=e`
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
  `,j=e`
  width: 100%;
  padding: 8rem 0 40rem 0;
  margin-bottom: 40rem;
  color: ${a("grayBlue","02")};
  font-size: 48rem;
  font-weight: 600;
`,x=t=>{const{children:c,navRight:l,withoutPadding:m,title:o}=t,n=f(),d=v(),r=h(u),p=d.pathname.split("/")[2];return i("div",{css:w,children:[i("div",{css:y,children:[s(g,{css:k,onClick:()=>{n(p?"/setting":r?`/workspace/${r}`:"/workspace")}}),l]}),i("div",{css:b(m),children:[o&&s("div",{css:j,children:o}),c]})]})};x.displayName="SettingMobileLayout";export{x as S};
//# sourceMappingURL=index-d661c26c.js.map

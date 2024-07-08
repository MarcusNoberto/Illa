import{g as u,f as m,n as c,j as e,h as v,F as k,ap as T}from"./@illa-design-764f0835.js";import{L as V}from"./index-d58e9443.js";import{an as L,F as q,u as P,G as D,J as G}from"./index-a4f6767e.js";import{S as J}from"./profile-003501eb.js";import{u as W,j,r as z,O as N,N as U}from"./react-bc846394.js";import{a as t}from"./@emotion-09d14760.js";import{a as _}from"./style-00a92373.js";const H=t`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,K=i=>{const s=i?t`
        background: ${u(`--${m}-grayBlue-09`)};
        font-weight: 600;
      `:null;return t`
    display: flex;
    align-items: center;
    padding: 9px 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: ${u(`--${m}-grayBlue-02`)};
    cursor: pointer;
    ${s};
  `},Q=t`
  ${L};
  width: 24px;
  height: 24px;
  margin-right: 12px;
  color: inherit;
`,R=t`
  padding: 10px 40px;

  ${_(t`
    padding: 20rem 70rem;
  `)}
`,X=t`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`,Y=i=>{const s=i?t`
        background: ${u(`--${m}-techPurple-08`)};
        color: ${u(`--${m}-techPurple-03`)};
        font-weight: 500;
      `:null;return t`
    display: flex;
    align-items: center;
    padding: 20rem 32rem;
    font-weight: 400;
    font-size: 32rem;
    line-height: 40rem;
    color: ${u(`--${m}-grayBlue-02`)};
    cursor: pointer;
    ${s};
  `},Z=t`
  ${L};
  width: 48rem;
  height: 48rem;
  margin-right: 12px;
  color: inherit;
  & > svg {
    width: 48rem;
    height: 48rem;
  }
`,I=i=>{const{isMobile:s,index:n,icon:r,label:o,path:a,hash:l="",onClickMenuItem:f,onClick:x,...w}=i,g=W(),p=j(),y=p.pathname===a&&p.hash===l,[h,b]=z.useMemo(()=>s?[Y,Z]:[K,Q],[s]),C=d=>{if(!d)return;const S=document.querySelector(d);S&&S.scrollIntoView({behavior:"smooth"})};return c("div",{css:h(y),...w,onClick:d=>{x&&x(d),f&&f(n),!y&&a&&(g({pathname:a,hash:l}),C(l))},children:[r?e("div",{css:b,children:r}):null,o]},n)},B=i=>{const{containerClassName:s,itemClassName:n,itemList:r,isMobile:o,onClickMenuItem:a}=i,l=j(),f=z.useMemo(()=>o?X:H,[o]);return e("div",{css:f,className:s,children:r==null?void 0:r.map((x,w)=>{const{path:g,hash:p="",hidden:y,subMenu:h,...b}=x,C=l.pathname===g&&l.hash===p;return y?null:c("div",{children:[e(I,{...b,isMobile:o,selected:C,index:w,path:g,hash:p,className:n,onClickMenuItem:a}),h==null?void 0:h.map((d,S)=>{const{path:$,hash:M="",hidden:F,...O}=d,E=l.pathname===$&&l.hash===M;return F?null:e(I,{css:R,...O,isMobile:o,selected:E,index:S,path:$,hash:M,className:n,onClickMenuItem:a},$+M)})]},g+p)})})};B.displayName="Menu";const ee=t`
  position: relative;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  background: ${v("white","01")};
  border-radius: 16px;
  overflow: auto;
`,te=t`
  width: 16px;
  height: 16px;
  font-size: 16px;
  margin-right: 12px;
  cursor: pointer;
`,ne=t`
  padding: 24px 0;
  width: 240px;
  position: relative;
  align-items: center;
  flex: none;
  overflow-y: auto;
  border-right: 1px solid ${v("grayBlue","09")};
`,ie=t`
  padding: 16px 24px 24px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
`,se=t`
  background: ${v("white","01")};
  width: 100vw;
  height: 100vh;
  display: flex;
`,oe=t`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: -12px;
  .settingMenuClass {
    gap: 0;
  }
  .settingMenuItemClass {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`,re=t`
  display: flex;
  padding: 9px 24px;
  align-items: center;
  gap: 8px;
  color: ${v("grayBlue","03")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,ae=t`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,le=t`
  width: 100%;
  height: 100%;
  padding: 0 32px;
`,A=i=>{const{children:s}=i,{t:n}=q(),r=W(),o=P(D),a=[{path:"/setting/account",label:n("profile.setting.personal_info"),icon:e(k,{})},{path:"/setting/password",label:n("profile.setting.password.title"),icon:e(k,{})},{path:"/setting/language",label:n("profile.setting.language"),icon:e(k,{})}];return c("div",{css:se,children:[c("aside",{css:ne,children:[c("div",{css:ie,children:[e(T,{css:te,onClick:()=>{r(`/workspace/${o==null?void 0:o.identifier}`)}}),n("profile.setting.title")]}),e("div",{css:ae,children:c("div",{children:[c("div",{css:re,children:[e(J,{}),e("span",{children:n("profile.setting.group.account")})]}),e("div",{css:oe,children:e(B,{itemList:a,containerClassName:"settingMenuClass",itemClassName:"settingMenuItemClass"})})]})})]}),e("aside",{css:ee,children:e("section",{css:le,children:s})})]})};A.displayName="AccountLayout";const ce=()=>P(G)?e(V,{desktopPage:e(A,{children:e(N,{})}),mobilePage:e(N,{})}):e(U,{to:"/login",replace:!0});ce.displayName="Setting";export{ce as Setting,ce as default};
//# sourceMappingURL=index-f3ceced2.js.map

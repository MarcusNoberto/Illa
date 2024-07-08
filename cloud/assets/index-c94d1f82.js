import{aq as L,K as c,J as e,F,u as P,G as T,S as k,L as V}from"./index-0d175391.js";import{L as D}from"./index-c107d920.js";import{g as u,h as m,l as v,as as G}from"./@illa-design-d2cc591b.js";import{S as J}from"./profile-d5c25de1.js";import{u as W,k as z,r as B,O as N,N as K}from"./react-e2e9745e.js";import{e as t}from"./@emotion-3e4589e3.js";import{a as U}from"./style-21931c95.js";const _=t`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,H=i=>{const s=i?t`
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

  ${U(t`
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
`,I=i=>{const{isMobile:s,index:n,icon:r,label:o,path:a,hash:l="",onClickMenuItem:x,onClick:f,...w}=i,g=W(),p=z(),y=p.pathname===a&&p.hash===l,[h,b]=B.useMemo(()=>s?[Y,Z]:[H,Q],[s]),C=d=>{if(!d)return;const S=document.querySelector(d);S&&S.scrollIntoView({behavior:"smooth"})};return c("div",{css:h(y),...w,onClick:d=>{f&&f(d),x&&x(n),!y&&a&&(g({pathname:a,hash:l}),C(l))},children:[r?e("div",{css:b,children:r}):null,o]},n)},A=i=>{const{containerClassName:s,itemClassName:n,itemList:r,isMobile:o,onClickMenuItem:a}=i,l=z(),x=B.useMemo(()=>o?X:_,[o]);return e("div",{css:x,className:s,children:r==null?void 0:r.map((f,w)=>{const{path:g,hash:p="",hidden:y,subMenu:h,...b}=f,C=l.pathname===g&&l.hash===p;return y?null:c("div",{children:[e(I,{...b,isMobile:o,selected:C,index:w,path:g,hash:p,className:n,onClickMenuItem:a}),h==null?void 0:h.map((d,S)=>{const{path:$,hash:M="",hidden:O,...q}=d,E=l.pathname===$&&l.hash===M;return O?null:e(I,{css:R,...q,isMobile:o,selected:E,index:S,path:$,hash:M,className:n,onClickMenuItem:a},$+M)})]},g+p)})})};A.displayName="Menu";const ee=t`
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
`,j=i=>{const{children:s}=i,{t:n}=F(),r=W(),o=P(T),a=[{path:"/setting/account",label:n("profile.setting.personal_info"),icon:e(k,{})},{path:"/setting/password",label:n("profile.setting.password.title"),icon:e(k,{})},{path:"/setting/language",label:n("profile.setting.language"),icon:e(k,{})}];return c("div",{css:se,children:[c("aside",{css:ne,children:[c("div",{css:ie,children:[e(G,{css:te,onClick:()=>{r(`/workspace/${o==null?void 0:o.identifier}`)}}),n("profile.setting.title")]}),e("div",{css:ae,children:c("div",{children:[c("div",{css:re,children:[e(J,{}),e("span",{children:n("profile.setting.group.account")})]}),e("div",{css:oe,children:e(A,{itemList:a,containerClassName:"settingMenuClass",itemClassName:"settingMenuItemClass"})})]})})]}),e("aside",{css:ee,children:e("section",{css:le,children:s})})]})};j.displayName="AccountLayout";const ce=()=>P(V)?e(D,{desktopPage:e(j,{children:e(N,{})}),mobilePage:e(N,{})}):e(K,{to:"/login",replace:!0});ce.displayName="Setting";export{ce as Setting,ce as default};
//# sourceMappingURL=index-c94d1f82.js.map

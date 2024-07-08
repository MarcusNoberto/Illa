import{j as a,n as r,a7 as f,B as h,g as y,f as b,F as C}from"./@illa-design-764f0835.js";import{L as v}from"./index-86435c63.js";import{F as p,ae as P,u as z,af as w,ag as N,ah as O}from"./index-326de5a1.js";import{r as m}from"./react-bc846394.js";import{S as T}from"./index-09b3fe3a.js";import{a as t}from"./@emotion-09d14760.js";import{H as j}from"./index-c329647b.js";const S=()=>{const{t:n}=p();return P.map(e=>({label:n(`language.${e}`),value:e}))},F=t`
  & input {
    font-size: 28rem;
  }

  & > span {
    font-size: 28rem;
    height: 96rem;
    & > div {
      padding: 0 32rem;
    }
    & svg {
      font-size: 28rem;
    }
  }
`,A=t`
  display: grid;
  gap: 64rem;
  padding-bottom: 40px;
`;t`
  height: 88rem;
  border-radius: 16rem;

  & > span {
    font-size: 32rem;
  }
`;const M=t`
  display: flex;
  flex-direction: column;
  gap: 32rem;
`;t`
  display: flex;
  flex-direction: column;
  gap: 64rem;
`;const L=n=>{const{t:e}=p(),{onSubmit:i,loading:l,language:s,currentLanguage:o,onChangeLanguage:g}=n,c=s===o,u=S();return a(T,{children:r("div",{css:A,children:[r("section",{css:M,children:[a("label",{children:e("profile.setting.language")}),a(f,{_css:F,value:o,size:"large",colorScheme:"techPurple",options:u,onChange:d=>{g(d)}})]}),a(h,{colorScheme:"techPurple",size:"large",disabled:c,loading:l,fullWidth:!0,onClick:()=>{i()},children:e("profile.setting.save")})]})})};L.displayName="LanguageSettingMobile";const _=t`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: ${y(`--${b}-gray-02`)};
`,$=t`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,k=t`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  max-width: 600px;
  width: 100%;
`,B=t`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`,x=n=>{const{t:e}=p(),{onSubmit:i,loading:l,language:s,currentLanguage:o,onChangeLanguage:g}=n,c=s===o,u=S();return r(C,{children:[a(j,{title:e("profile.setting.language")}),a("div",{css:$,children:r("div",{css:k,children:[a("header",{css:_,children:e("profile.setting.language")}),r("div",{css:B,children:[a(f,{value:o,size:"large",colorScheme:"techPurple",options:u,onChange:d=>{g(d)}}),a("span",{children:a(h,{colorScheme:"techPurple",size:"large",disabled:c,loading:l,onClick:()=>{i()},children:e("profile.setting.save")})})]})]})})]})};x.displayName="LanguageSetting";const W=()=>{const n=z(w)||N,[e,i]=m.useState(n),[l,s]=m.useState(!1);m.useEffect(()=>{n!==e&&i(n)},[n]);const o=async()=>{try{s(!0),await O(e),window.location.reload()}catch{}finally{s(!1)}};return a(v,{desktopPage:a(x,{loading:l,language:n,currentLanguage:e,onChangeLanguage:i,onSubmit:o}),mobilePage:a(L,{loading:l,language:n,currentLanguage:e,onChangeLanguage:i,onSubmit:o})})};export{W as default};
//# sourceMappingURL=index-b29885f9.js.map

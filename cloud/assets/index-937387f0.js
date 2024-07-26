import{F as p,ah as y,J as a,K as r,S as b,u as C,ai as v,aj as P,ak as z}from"./index-b65c7b8f.js";import{L as w}from"./index-9a88a049.js";import{aa as h,B as f,g as N,h as O}from"./@illa-design-df878cb8.js";import{r as m}from"./react-bc846394.js";import{S as T}from"./index-cf29da7e.js";import{e as t}from"./@emotion-28b7fe46.js";import{H as j}from"./index-5d45cd74.js";const S=()=>{const{t:n}=p();return y.map(e=>({label:n(`language.${e}`),value:e}))},k=t`
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
`;const F=t`
  display: flex;
  flex-direction: column;
  gap: 32rem;
`;t`
  display: flex;
  flex-direction: column;
  gap: 64rem;
`;const L=n=>{const{t:e}=p(),{onSubmit:i,loading:l,language:s,currentLanguage:o,onChangeLanguage:g}=n,c=s===o,u=S();return a(T,{children:r("div",{css:A,children:[r("section",{css:F,children:[a("label",{children:e("profile.setting.language")}),a(h,{_css:k,value:o,size:"large",colorScheme:"techPurple",options:u,onChange:d=>{g(d)}})]}),a(f,{colorScheme:"techPurple",size:"large",disabled:c,loading:l,fullWidth:!0,onClick:()=>{i()},children:e("profile.setting.save")})]})})};L.displayName="LanguageSettingMobile";const M=t`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: ${N(`--${O}-gray-02`)};
`,_=t`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,$=t`
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
`,x=n=>{const{t:e}=p(),{onSubmit:i,loading:l,language:s,currentLanguage:o,onChangeLanguage:g}=n,c=s===o,u=S();return r(b,{children:[a(j,{title:e("profile.setting.language")}),a("div",{css:_,children:r("div",{css:$,children:[a("header",{css:M,children:e("profile.setting.language")}),r("div",{css:B,children:[a(h,{value:o,size:"large",colorScheme:"techPurple",options:u,onChange:d=>{g(d)}}),a("span",{children:a(f,{colorScheme:"techPurple",size:"large",disabled:c,loading:l,onClick:()=>{i()},children:e("profile.setting.save")})})]})]})})]})};x.displayName="LanguageSetting";const J=()=>{const n=C(v)||P,[e,i]=m.useState(n),[l,s]=m.useState(!1);m.useEffect(()=>{n!==e&&i(n)},[n]);const o=async()=>{try{s(!0),await z(e),window.location.reload()}catch{}finally{s(!1)}};return a(w,{desktopPage:a(x,{loading:l,language:n,currentLanguage:e,onChangeLanguage:i,onSubmit:o}),mobilePage:a(L,{loading:l,language:n,currentLanguage:e,onChangeLanguage:i,onSubmit:o})})};export{J as default};
//# sourceMappingURL=index-937387f0.js.map

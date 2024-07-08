import{U as c,K as s,J as t,F as C,u as x,G as b,ac as w,S as p}from"./index-f5f873ba.js";import{L as f}from"./index-d34ed29e.js";import{S as M}from"./index-3fa1fe08.js";import{l as r,an as v}from"./@illa-design-df878cb8.js";import{S as y}from"./profile-003501eb.js";import{r as d,u as S,N as E}from"./react-bc846394.js";import{i as T}from"./index-cb372556.js";import{e as n}from"./@emotion-28b7fe46.js";const k=e=>d.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.32735 5.45706C9.32735 7.04331 8.02931 8.3145 6.40954 8.3145C4.79036 8.3145 3.49172 7.04331 3.49172 5.45706C3.49172 3.8708 4.79036 2.59961 6.40954 2.59961C8.02931 2.59961 9.32735 3.8708 9.32735 5.45706ZM2 11.5501C2 10.0817 4.03132 9.71435 6.4096 9.71435C8.8008 9.71435 10.8192 10.0944 10.8192 11.5639C10.8192 13.0323 8.78788 13.3997 6.4096 13.3997C4.0184 13.3997 2 13.0197 2 11.5501ZM10.504 5.50885C10.504 6.31664 10.2563 7.07038 9.82181 7.69649C9.77661 7.76088 9.81653 7.8477 9.8952 7.8615C10.0044 7.87932 10.1165 7.89024 10.231 7.89254C11.37 7.92187 12.3921 7.20377 12.6745 6.12231C13.0931 4.51765 11.8649 3.07686 10.3003 3.07686C10.1306 3.07686 9.968 3.0941 9.80948 3.12573C9.78776 3.13032 9.76428 3.14067 9.75254 3.15907C9.73727 3.18264 9.74843 3.21312 9.76369 3.23324C10.2339 3.8789 10.504 4.66484 10.504 5.50885ZM12.3903 9.02151C13.1559 9.16812 13.659 9.46652 13.8674 9.90175C14.0442 10.2582 14.0442 10.6722 13.8674 11.0286C13.5487 11.7025 12.5201 11.9192 12.1203 11.975C12.0375 11.9865 11.9712 11.9175 11.98 11.8358C12.1843 9.96844 10.5598 9.08303 10.1395 8.8795C10.1218 8.86973 10.1177 8.85593 10.1195 8.84673C10.1207 8.84098 10.1283 8.83178 10.1418 8.83006C11.0512 8.81281 12.0293 8.93527 12.3903 9.02151Z",fill:"#787E85"})),R=e=>{var a,g;if(!e)return!1;const i=e==null?void 0:e.myRole,l=(a=e==null?void 0:e.permission)==null?void 0:a.allowEditorManageTeamMember;return((g=e==null?void 0:e.permission)==null?void 0:g.allowViewerManageTeamMember)&&l?T(c.VIEWER,i):[c.OWNER,c.ADMIN].includes(i)},L=n`
  width: 100%;
  padding: 4px 16px 20px 16px;
  color: ${r("grayBlue","02")};
  font-size: 24px;
  font-weight: 600;
`,N=n`
  background-color: #f7f8fa;
  width: 100%;
  height: 12px;
`,h=n`
  display: flex;
  padding: 9px 16px;
  align-items: center;
  gap: 8px;
  color: ${r("grayBlue","04")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`,B=n`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;
  color: ${r("grayBlue","02")};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  &:hover {
    background-color: ${r("grayBlue","09")};
  }
`,$=n`
  color: #a9aeb8;
`;n`
  position: relative;
  margin: 16px;
  min-height: 500px;
`;n`
  margin: 0 auto 48px;
  width: 100px;
  height: 100px;
`;n`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 72px;
  right: 113px;
`;const A=({item:e})=>{const i=S(),l=o=>{i(o)};return s("div",{css:B,onClick:()=>e.onClick?e.onClick():l(e.path),children:[t("div",{children:e.label}),t(v,{css:$})]})},u=({itemList:e})=>t("div",{children:e.map(i=>i.hidden?null:t(A,{item:i},i.path))}),m=()=>{const{t:e}=C(),i=x(b),l=!R(i),o=[{path:"/setting/account",label:e("profile.setting.personal_info")},{path:"/setting/password",label:e("profile.setting.password.title")},{path:"/setting/language",label:e("profile.setting.language")},{path:"",label:e("profile.setting.logout"),onClick:w}],a=[{path:`/setting/${i==null?void 0:i.identifier}/members`,label:e("team_setting.left_panel.member"),hidden:l}];return s(p,{children:[t("div",{css:L,children:e("profile.setting.title")}),s("div",{css:h,children:[t(y,{}),t("span",{children:e("profile.setting.group.account")})]}),t(u,{itemList:o}),l&&s(p,{children:[t("div",{css:N}),i&&t(p,{children:s("div",{css:h,children:[t(k,{}),t("span",{children:e("profile.setting.group.team")})]})}),t(u,{itemList:a})]})]})};m.displayName="MobileEntrance";const F=()=>t(f,{desktopPage:t(E,{to:"/setting/account",replace:!0}),mobilePage:t(M,{withoutPadding:!0,children:t(m,{})})});export{F as default};
//# sourceMappingURL=index-a485bc39.js.map

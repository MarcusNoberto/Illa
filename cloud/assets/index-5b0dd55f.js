import{F as I,J as r,K as o,S as H,u as W,g as k,al as J}from"./index-55e29bd9.js";import{i as K}from"./utils-68b6e47b.js";import{g as C,h as L,ar as m,B as A,aq as z,N as D}from"./@illa-design-df878cb8.js";import{L as G}from"./index-3ed9da6c.js";import{r as v}from"./react-bc846394.js";import{C as u,u as T,F as O}from"./index.esm-11ba4214.js";import{T as B,a as Q}from"./index-bbe62bc6.js";import{S as R}from"./index-a3c0d301.js";import{e as n}from"./@emotion-28b7fe46.js";import{H as V}from"./index-6f2e7a0a.js";const F=n`
  display: flex;
  flex-direction: column;
  gap: 32rem;
`,X=n`
  display: flex;
  flex-direction: column;
  gap: 64rem;
`;n`
  display: grid;
  gap: 24px;
  margin-bottom: 40px;
`;n`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: ${C(`--${L}-gray-02`)};
  margin-bottom: 16px;
`;const Y=n`
  height: 88rem;
  border-radius: 16rem;

  & > span {
    font-size: 32rem;
  }
`,M=n`
  position: absolute;
  font-size: 24rem;
  padding-top: 8rem;
  color: ${C(`--${L}-orange-03`)};
`,$=n`
  font-size: 28rem;
  height: 96rem;

  & > span {
    padding: 0 32rem;

    & svg {
      font-size: 40rem;
    }
  }
`,N=a=>{var _,x,l;const{t:s}=I(),{passwordFormProps:i}=v.useContext(B),{onSubmit:g,loading:P}=a,{handleSubmit:t,control:c,formState:e,getValues:d,watch:h}=i,{currentPassword:w,newPassword:f,confirmPassword:y}=h(),b=v.useMemo(()=>!(w&&f&&y),[w,f,y]);return r(R,{children:o("form",{onSubmit:t==null?void 0:t(g),css:X,children:[o("section",{css:F,children:[r("label",{children:s("profile.setting.current_pwd")}),o("div",{children:[r(u,{name:"currentPassword",control:c,render:({field:p})=>r(m,{...p,_css:$,size:"large",error:!!(e!=null&&e.errors.currentPassword),variant:"fill",placeholder:s("profile.setting.password_placeholder"),colorScheme:"techPurple"}),rules:{required:s("profile.setting.password_empty"),minLength:{value:6,message:s("profile.setting.password_length")},maxLength:{value:20,message:s("profile.setting.password_length")}}}),(e==null?void 0:e.errors.currentPassword)&&r("div",{css:M,children:(_=e==null?void 0:e.errors.currentPassword)==null?void 0:_.message})]})]}),o("section",{css:F,children:[r("label",{children:s("profile.setting.new_pwd")}),o("div",{children:[r(u,{name:"newPassword",control:c,render:({field:p})=>r(m,{...p,_css:$,size:"large",error:!!(e!=null&&e.errors.newPassword),variant:"fill",placeholder:s("profile.setting.new_password_placeholder"),colorScheme:"techPurple"}),rules:{required:s("profile.setting.new_password_empty"),minLength:{value:6,message:s("profile.setting.password_length")},maxLength:{value:20,message:s("profile.setting.password_length")}}}),(e==null?void 0:e.errors.newPassword)&&r("div",{css:M,children:(x=e==null?void 0:e.errors.newPassword)==null?void 0:x.message})]})]}),o("section",{css:F,children:[r("label",{children:s("profile.setting.confirm_pwd")}),o("div",{children:[r(u,{name:"confirmPassword",control:c,render:({field:p})=>r(m,{...p,_css:$,size:"large",error:!!(e!=null&&e.errors.confirmPassword),variant:"fill",placeholder:s("profile.setting.new_password_again_placeholder"),colorScheme:"techPurple"}),rules:{validate:p=>p===(d==null?void 0:d("newPassword"))||s("profile.setting.password_not_match")}}),(e==null?void 0:e.errors.confirmPassword)&&r("div",{css:M,children:(l=e==null?void 0:e.errors.confirmPassword)==null?void 0:l.message})]})]}),r(A,{_css:Y,colorScheme:"techPurple",size:"large",loading:P,disabled:b,fullWidth:!0,children:s("profile.setting.save")})]})})};N.displayName="PasswordSettingMobile";const Z=a=>{const{passwordLoading:s,onPasswordFormSubmit:i}=a;return r(N,{onSubmit:i,loading:s})},ee=n`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,se=n`
  display: flex;
  width: 600px;
  justify-content: center;
`;n`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: ${C(`--${L}-gray-02`)};
  margin-bottom: 16px;
`;const q=n`
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  line-height: 22px;
  color: ${C(`--${L}-orange-03`)};
`,S=n`
  position: absolute;
  font-size: 16px;
  line-height: 0;
  top: 3px;
  left: 0;
`,j=n`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,E=n`
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
`,re=n`
  display: flex;
  justify-content: center;
`,U=a=>{var b,_,x;const{t:s}=I(),{passwordFormProps:i}=v.useContext(B),{onSubmit:g,loading:P}=a,{handleSubmit:t,control:c,formState:e,watch:d}=i,{currentPassword:h,newPassword:w,confirmPassword:f}=d(),y=v.useMemo(()=>!(h&&w&&f),[h,w,f]);return o(H,{children:[r(V,{title:s("profile.setting.password.title")}),r("div",{css:re,children:r("form",{onSubmit:t==null?void 0:t(g),css:se,children:o("section",{css:ee,children:[o("section",{css:j,children:[r("label",{css:E,children:s("profile.setting.current_pwd")}),o("div",{children:[r(u,{name:"currentPassword",control:c,render:({field:l})=>r(m,{...l,size:"large",error:!!(e!=null&&e.errors.currentPassword),variant:"fill",placeholder:s("profile.setting.password_placeholder"),colorScheme:"techPurple"}),rules:{required:s("profile.setting.password_empty"),minLength:{value:6,message:s("profile.setting.password_length")},maxLength:{value:20,message:s("profile.setting.password_length")}}}),(e==null?void 0:e.errors.currentPassword)&&o("div",{css:q,children:[r(z,{css:S}),(b=e==null?void 0:e.errors.currentPassword)==null?void 0:b.message]})]})]}),o("section",{css:j,children:[r("label",{css:E,children:s("profile.setting.new_pwd")}),o("div",{children:[r(u,{name:"newPassword",control:c,render:({field:l})=>r(m,{...l,size:"large",error:!!(e!=null&&e.errors.newPassword),variant:"fill",placeholder:s("profile.setting.new_password_placeholder"),colorScheme:"techPurple"}),rules:{required:s("profile.setting.new_password_empty"),minLength:{value:6,message:s("profile.setting.password_length")},maxLength:{value:20,message:s("profile.setting.password_length")}}}),(e==null?void 0:e.errors.newPassword)&&o("div",{css:q,children:[r(z,{css:S}),(_=e==null?void 0:e.errors.newPassword)==null?void 0:_.message]})]})]}),o("section",{css:j,children:[r("label",{css:E,children:s("profile.setting.confirm_pwd")}),o("div",{children:[r(u,{name:"confirmPassword",control:c,render:({field:l})=>r(m,{...l,size:"large",error:!!(e!=null&&e.errors.confirmPassword),variant:"fill",placeholder:s("profile.setting.new_password_again_placeholder"),colorScheme:"techPurple"}),rules:{validate:l=>l===w||s("profile.setting.password_not_match")}}),(e==null?void 0:e.errors.confirmPassword)&&o("div",{css:q,children:[r(z,{css:S}),(x=e==null?void 0:e.errors.confirmPassword)==null?void 0:x.message]})]})]}),r("span",{children:r(A,{colorScheme:"techPurple",size:"large",loading:P,disabled:y,children:s("profile.setting.save")})})]})})})]})};U.displayName="PasswordSetting";const oe=a=>{const{passwordLoading:s,onPasswordFormSubmit:i}=a;return r(U,{onSubmit:i,loading:s})},we=()=>{const{t:a}=I(),s=W(k),[i,g]=v.useState(!1),P=D(),t=T({mode:"onSubmit",criteriaMode:"firstError"}),c=T({mode:"onSubmit",criteriaMode:"firstError",defaultValues:{email:s==null?void 0:s.email}}),e=async d=>{try{g(!0),await J(d),P.success({content:a("team_setting.message.save_suc")}),t.reset()}catch(h){K(h)}finally{g(!1)}};return r(Q,{passwordFormProps:t,children:r(O,{...c,children:r(G,{desktopPage:r(oe,{onPasswordFormSubmit:e,passwordLoading:i}),mobilePage:r(Z,{onPasswordFormSubmit:e,passwordLoading:i})})})})};export{we as default};
//# sourceMappingURL=index-5b0dd55f.js.map

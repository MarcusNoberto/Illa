import{g as C,f as L,j as r,n as o,ao as m,B as A,an as z,F as N,I as W}from"./@illa-design-764f0835.js";import{F as S,u as k,g as D,ai as G}from"./index-fd774fd8.js";import{i as J}from"./utils-d5d7ac1c.js";import{L as K}from"./index-79a069ed.js";import{r as v}from"./react-bc846394.js";import{C as u,u as T,F as O}from"./index.esm-11ba4214.js";import{T as B,a as Q}from"./index-2ce4c85a.js";import{S as R}from"./index-f57bfdb7.js";import{a as n}from"./@emotion-09d14760.js";import{H as V}from"./index-c329647b.js";const F=n`
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
`,U=a=>{var _,x,l;const{t:s}=S(),{passwordFormProps:i}=v.useContext(B),{onSubmit:g,loading:P}=a,{handleSubmit:t,control:c,formState:e,getValues:d,watch:h}=i,{currentPassword:w,newPassword:f,confirmPassword:y}=h(),b=v.useMemo(()=>!(w&&f&&y),[w,f,y]);return r(R,{children:o("form",{onSubmit:t==null?void 0:t(g),css:X,children:[o("section",{css:F,children:[r("label",{children:s("profile.setting.current_pwd")}),o("div",{children:[r(u,{name:"currentPassword",control:c,render:({field:p})=>r(m,{...p,_css:$,size:"large",error:!!(e!=null&&e.errors.currentPassword),variant:"fill",placeholder:s("profile.setting.password_placeholder"),colorScheme:"techPurple"}),rules:{required:s("profile.setting.password_empty"),minLength:{value:6,message:s("profile.setting.password_length")},maxLength:{value:20,message:s("profile.setting.password_length")}}}),(e==null?void 0:e.errors.currentPassword)&&r("div",{css:M,children:(_=e==null?void 0:e.errors.currentPassword)==null?void 0:_.message})]})]}),o("section",{css:F,children:[r("label",{children:s("profile.setting.new_pwd")}),o("div",{children:[r(u,{name:"newPassword",control:c,render:({field:p})=>r(m,{...p,_css:$,size:"large",error:!!(e!=null&&e.errors.newPassword),variant:"fill",placeholder:s("profile.setting.new_password_placeholder"),colorScheme:"techPurple"}),rules:{required:s("profile.setting.new_password_empty"),minLength:{value:6,message:s("profile.setting.password_length")},maxLength:{value:20,message:s("profile.setting.password_length")}}}),(e==null?void 0:e.errors.newPassword)&&r("div",{css:M,children:(x=e==null?void 0:e.errors.newPassword)==null?void 0:x.message})]})]}),o("section",{css:F,children:[r("label",{children:s("profile.setting.confirm_pwd")}),o("div",{children:[r(u,{name:"confirmPassword",control:c,render:({field:p})=>r(m,{...p,_css:$,size:"large",error:!!(e!=null&&e.errors.confirmPassword),variant:"fill",placeholder:s("profile.setting.new_password_again_placeholder"),colorScheme:"techPurple"}),rules:{validate:p=>p===(d==null?void 0:d("newPassword"))||s("profile.setting.password_not_match")}}),(e==null?void 0:e.errors.confirmPassword)&&r("div",{css:M,children:(l=e==null?void 0:e.errors.confirmPassword)==null?void 0:l.message})]})]}),r(A,{_css:Y,colorScheme:"techPurple",size:"large",loading:P,disabled:b,fullWidth:!0,children:s("profile.setting.save")})]})})};U.displayName="PasswordSettingMobile";const Z=a=>{const{passwordLoading:s,onPasswordFormSubmit:i}=a;return r(U,{onSubmit:i,loading:s})},ee=n`
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
`;const j=n`
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  line-height: 22px;
  color: ${C(`--${L}-orange-03`)};
`,I=n`
  position: absolute;
  font-size: 16px;
  line-height: 0;
  top: 3px;
  left: 0;
`,q=n`
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
`,H=a=>{var b,_,x;const{t:s}=S(),{passwordFormProps:i}=v.useContext(B),{onSubmit:g,loading:P}=a,{handleSubmit:t,control:c,formState:e,watch:d}=i,{currentPassword:h,newPassword:w,confirmPassword:f}=d(),y=v.useMemo(()=>!(h&&w&&f),[h,w,f]);return o(N,{children:[r(V,{title:s("profile.setting.password.title")}),r("div",{css:re,children:r("form",{onSubmit:t==null?void 0:t(g),css:se,children:o("section",{css:ee,children:[o("section",{css:q,children:[r("label",{css:E,children:s("profile.setting.current_pwd")}),o("div",{children:[r(u,{name:"currentPassword",control:c,render:({field:l})=>r(m,{...l,size:"large",error:!!(e!=null&&e.errors.currentPassword),variant:"fill",placeholder:s("profile.setting.password_placeholder"),colorScheme:"techPurple"}),rules:{required:s("profile.setting.password_empty"),minLength:{value:6,message:s("profile.setting.password_length")},maxLength:{value:20,message:s("profile.setting.password_length")}}}),(e==null?void 0:e.errors.currentPassword)&&o("div",{css:j,children:[r(z,{css:I}),(b=e==null?void 0:e.errors.currentPassword)==null?void 0:b.message]})]})]}),o("section",{css:q,children:[r("label",{css:E,children:s("profile.setting.new_pwd")}),o("div",{children:[r(u,{name:"newPassword",control:c,render:({field:l})=>r(m,{...l,size:"large",error:!!(e!=null&&e.errors.newPassword),variant:"fill",placeholder:s("profile.setting.new_password_placeholder"),colorScheme:"techPurple"}),rules:{required:s("profile.setting.new_password_empty"),minLength:{value:6,message:s("profile.setting.password_length")},maxLength:{value:20,message:s("profile.setting.password_length")}}}),(e==null?void 0:e.errors.newPassword)&&o("div",{css:j,children:[r(z,{css:I}),(_=e==null?void 0:e.errors.newPassword)==null?void 0:_.message]})]})]}),o("section",{css:q,children:[r("label",{css:E,children:s("profile.setting.confirm_pwd")}),o("div",{children:[r(u,{name:"confirmPassword",control:c,render:({field:l})=>r(m,{...l,size:"large",error:!!(e!=null&&e.errors.confirmPassword),variant:"fill",placeholder:s("profile.setting.new_password_again_placeholder"),colorScheme:"techPurple"}),rules:{validate:l=>l===w||s("profile.setting.password_not_match")}}),(e==null?void 0:e.errors.confirmPassword)&&o("div",{css:j,children:[r(z,{css:I}),(x=e==null?void 0:e.errors.confirmPassword)==null?void 0:x.message]})]})]}),r("span",{children:r(A,{colorScheme:"techPurple",size:"large",loading:P,disabled:y,children:s("profile.setting.save")})})]})})})]})};H.displayName="PasswordSetting";const oe=a=>{const{passwordLoading:s,onPasswordFormSubmit:i}=a;return r(H,{onSubmit:i,loading:s})},we=()=>{const{t:a}=S(),s=k(D),[i,g]=v.useState(!1),P=W(),t=T({mode:"onSubmit",criteriaMode:"firstError"}),c=T({mode:"onSubmit",criteriaMode:"firstError",defaultValues:{email:s==null?void 0:s.email}}),e=async d=>{try{g(!0),await G(d),P.success({content:a("team_setting.message.save_suc")}),t.reset()}catch(h){J(h)}finally{g(!1)}};return r(Q,{passwordFormProps:t,children:r(O,{...c,children:r(K,{desktopPage:r(oe,{onPasswordFormSubmit:e,passwordLoading:i}),mobilePage:r(Z,{onPasswordFormSubmit:e,passwordLoading:i})})})})};export{we as default};
//# sourceMappingURL=index-35c527b6.js.map

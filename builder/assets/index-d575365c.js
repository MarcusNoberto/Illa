import{n as p,k as e,o as v,F as s,aa as E}from"./@illa-design-1f43bb6c.js";import{gE as G,u as I,gF as R,gN as N,fu as x,gG as _,gH as q,gI as l}from"./index-4dce6ee8.js";import{r as d}from"./react-9b7e00e3.js";import{c as F,C as r}from"./style-49dd2bac.js";import{R as O}from"./index-d6273125.js";import{a as u}from"./@emotion-08a6282b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const V=u`
  width: 100%;
  padding: 8px 24px;
`,D=n=>u`
  width: 100%;
  padding: 9px 16px;
  display: flex;
  gap: 8px;
  height: 40px;
  background: ${n?p("green","08"):p("orange","08")};
  border-radius: 4px;
  align-items: center;
`,K=u`
  font-size: 16px;
  color: ${p("orange","03")};
`,W=n=>{var g,h,f,y;const{resourceID:b}=n,{control:i,watch:k}=G(),{t}=I(),{getResourceByID:C}=d.useContext(R),o=C(b),a=(o==null?void 0:o.content)??N,S=k("authentication",a.authentication)==="oauth2",m=((g=a.opts)==null?void 0:g.status)===x.Authenticated,T=((h=a.opts)==null?void 0:h.status)!==x.Initial,c=d.useCallback(A=>()=>{window.open(A,"_blank")},[]),w=d.useMemo(()=>[{label:t("editor.action.form.option.gs.service_account"),value:"serviceAccount"},{label:t("editor.action.form.option.gs.oauth_2.0"),value:"oauth2"}],[t]);return e(s,{children:v("div",{css:F,children:[e(r,{controlledType:"input",isRequired:!0,title:t("editor.action.resource.db.label.name"),control:i,defaultValue:(o==null?void 0:o.resourceName)??"",rules:[{validate:_}],placeholders:[t("editor.action.resource.db.placeholder.name")],name:"resourceName",tips:t("editor.action.resource.restapi.tip.name")}),e(O,{type:"General Option"}),e(r,{isRequired:!0,title:t("editor.action.form.label.gs.authentication"),defaultValue:a.authentication,name:"authentication",controlledType:"select",control:i,options:w}),S?e(r,{isRequired:!0,title:t("editor.action.form.label.gs.access_type"),defaultValue:((f=a.opts)==null?void 0:f.accessType)??"rw",name:"accessType",controlledType:"radio",control:i,options:[{label:t("editor.action.form.option.gs.read_and_write"),value:"rw"},{label:t("editor.action.form.option.gs.read_only"),value:"r"}]},"editor.action.form.label.gs.access_type"):e(r,{title:t("editor.action.form.label.gs.private_key"),defaultValue:((y=a.opts)==null?void 0:y.privateKey)??"",name:"privateKey",isRequired:!0,rules:[{validate:_}],controlledType:"textarea",control:i,placeholders:[t("editor.action.form.placeholder.gs.private_key")],tips:e(q,{i18nKey:"editor.action.form.tips.gs.private_key",t,components:[e(l,{onClick:c("https://console.cloud.google.com/cloud-resource-manager")},"editor.action.form.tips.gs.private_key.console"),e(l,{onClick:c("https://cloud.google.com/docs/authentication/getting-started")},"editor.action.form.tips.gs.private_key.docs"),e(l,{onClick:c("https://developers.google.com/sheets/api/limits")},"editor.action.form.tips.gs.private_key.limit")]})},"editor.action.form.label.gs.private_key"),T&&e("div",{css:V,children:e("div",{css:D(m),children:m?e(s,{children:t("editor.action.form.tips.gs.successfully_authent")}):v(s,{children:[e(E,{css:K}),e(s,{children:t("editor.action.form.tips.gs.failed_to_authentica")})]})})})]})})};W.displayName="GoogleSheetsConfigElement";export{W as default};
//# sourceMappingURL=index-d575365c.js.map

import{n as p,k as e,o as v,F as s,aa as G}from"./@illa-design-402f214a.js";import{gF as I,u as E,gG as R,gO as O,fv as x,gH as _,gI as q,gJ as l}from"./index-2f1869ab.js";import{r as d}from"./react-9b7e00e3.js";import{c as F,C as r}from"./style-8475474f.js";import{R as N}from"./index-a7414a99.js";import{a as u}from"./@emotion-4f16718e.js";import"./codeMirror-vendor-eff8ab8d.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const V=u`
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
`,W=n=>{var g,h,f,y;const{resourceID:b}=n,{control:i,watch:k}=I(),{t}=E(),{getResourceByID:C}=d.useContext(R),o=C(b),a=(o==null?void 0:o.content)??O,S=k("authentication",a.authentication)==="oauth2",m=((g=a.opts)==null?void 0:g.status)===x.Authenticated,T=((h=a.opts)==null?void 0:h.status)!==x.Initial,c=d.useCallback(A=>()=>{window.open(A,"_blank")},[]),w=d.useMemo(()=>[{label:t("editor.action.form.option.gs.service_account"),value:"serviceAccount"},{label:t("editor.action.form.option.gs.oauth_2.0"),value:"oauth2"}],[t]);return e(s,{children:v("div",{css:F,children:[e(r,{controlledType:"input",isRequired:!0,title:t("editor.action.resource.db.label.name"),control:i,defaultValue:(o==null?void 0:o.resourceName)??"",rules:[{validate:_}],placeholders:[t("editor.action.resource.db.placeholder.name")],name:"resourceName",tips:t("editor.action.resource.restapi.tip.name")}),e(N,{type:"General Option"}),e(r,{isRequired:!0,title:t("editor.action.form.label.gs.authentication"),defaultValue:a.authentication,name:"authentication",controlledType:"select",control:i,options:w}),S?e(r,{isRequired:!0,title:t("editor.action.form.label.gs.access_type"),defaultValue:((f=a.opts)==null?void 0:f.accessType)??"rw",name:"accessType",controlledType:"radio",control:i,options:[{label:t("editor.action.form.option.gs.read_and_write"),value:"rw"},{label:t("editor.action.form.option.gs.read_only"),value:"r"}]},"editor.action.form.label.gs.access_type"):e(r,{title:t("editor.action.form.label.gs.private_key"),defaultValue:((y=a.opts)==null?void 0:y.privateKey)??"",name:"privateKey",isRequired:!0,rules:[{validate:_}],controlledType:"textarea",control:i,placeholders:[t("editor.action.form.placeholder.gs.private_key")],tips:e(q,{i18nKey:"editor.action.form.tips.gs.private_key",t,components:[e(l,{onClick:c("https://console.cloud.google.com/cloud-resource-manager")},"editor.action.form.tips.gs.private_key.console"),e(l,{onClick:c("https://cloud.google.com/docs/authentication/getting-started")},"editor.action.form.tips.gs.private_key.docs"),e(l,{onClick:c("https://developers.google.com/sheets/api/limits")},"editor.action.form.tips.gs.private_key.limit")]})},"editor.action.form.label.gs.private_key"),T&&e("div",{css:V,children:e("div",{css:D(m),children:m?e(s,{children:t("editor.action.form.tips.gs.successfully_authent")}):v(s,{children:[e(G,{css:K}),e(s,{children:t("editor.action.form.tips.gs.failed_to_authentica")})]})})})]})})};W.displayName="GoogleSheetsConfigElement";export{W as default};
//# sourceMappingURL=index-c51f88d3.js.map

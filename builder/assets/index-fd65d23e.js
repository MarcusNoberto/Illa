import{n as C,o as u,k as a,cw as D,F as x,D as W,aE as J,S as X}from"./@illa-design-1f43bb6c.js";import{u as y,eH as m,b5 as g,gH as B,gI as $,e as q,b as R,bA as Q,fv as Z,fl as ee,hW as te,ic as oe,be as I}from"./index-4dce6ee8.js";import{r as _}from"./react-9b7e00e3.js";import{a as c}from"./@emotion-08a6282b.js";import{S as w}from"./index-01ad6233.js";import{I as f}from"./index-2c4267bb.js";import{C as P,a as A,b as O}from"./index-03ca7e7b.js";import{R as ae}from"./index-5b916626.js";import{a as E,c as ne,b as se}from"./style-f068f7a5.js";import{c as ie,T as re}from"./index-cd7c17cc.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-b9f5fd51.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./hook-302a78fc.js";import"./renderComponentCanvasContainer-2e4cd54a.js";import"./style-49f23046.js";import"./index-d48f7e94.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";import"./layoutInfoListener-bd63c738.js";import"./drive-584d85d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-a04e2b11.js";import"./objectWithoutPropertiesLoose-e3246981.js";import"./clsx-06f54762.js";import"./index-934389e2.js";import"./style-51b259bb.js";import"./style-af69883e.js";const le=c`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`,G=c`
  display: flex;
  align-items: center;
  flex: 1;
`,pe=(n,o)=>{const e=n?c`
        margin-right: 16px;
      `:c``;return c`
    width: 16px;
    height: 16px;
    color: ${o?C("techPurple","03"):C("grayBlue","04")};
    cursor: pointer;
    z-index: 1;
    ${e};
    :hover {
      cursor: pointer;
      color: ${C("techPurple","03")};
    }
  `},S=n=>{const{spreadsheet:o,sheetName:e,onChange:s,spreadsheetsOption:t,isHiddenSheetName:d=!1,fx:p}=n,{t:h}=y(),b=()=>{s("fx")(!p)};return u("div",{css:le,children:[u("div",{css:G,children:[p?a(f,{title:h("editor.action.form.label.gs.spreadsheet"),value:o,onChange:s("spreadsheet"),expectedType:m.STRING}):a(w,{title:h("editor.action.form.label.gs.spreadsheet"),componentType:"select",value:o,onChange:s("spreadsheet"),options:t}),a(D,{onClick:b,css:pe(d,p)})]}),!d&&a("div",{css:G,children:a(f,{title:h("editor.action.form.label.gs.sheet_name"),value:e??"",onChange:s("sheetName"),tips:h("editor.action.form.tips.gs.leave_blank_to_selec"),expectedType:m.STRING})})]})};S.displayName="BasicSheetConfig";const K=n=>{const{onChange:o,spreadsheetsOption:e}=n,{t:s}=y(),t=n.opts;return u(x,{children:[a(S,{sheetName:t.sheetName,spreadsheet:t.spreadsheet,onChange:o,spreadsheetsOption:e,fx:t.fx}),a(f,{value:t.values,lineNumbers:!0,style:{height:"88px"},onChange:o("values"),title:s("editor.action.form.label.gs.values_to_append"),placeholder:s("editor.action.form.tips.gs.values_to_append"),expectedType:m.ARRAY})]})};K.displayName="AppendSpreadsheetSubPanel";const M=n=>{const{t:o}=y(),{onChange:e,spreadsheetsOption:s}=n,t=n.opts;return u(x,{children:[a(S,{sheetName:t.sheetName,spreadsheet:t.spreadsheet,onChange:e,spreadsheetsOption:s,fx:t.fx}),a(f,{value:t.primaryKey,onChange:e("primaryKey"),title:o("editor.action.form.label.gs.primary_key_column"),placeholder:o("editor.action.form.placeholder.gs.primary_key_column"),expectedType:m.STRING}),a(f,{value:t.rowsArray,lineNumbers:!0,style:{height:"88px"},onChange:e("rowsArray"),title:o("editor.action.form.label.gs.array_of_rows_to_upd"),placeholder:o("editor.action.form.placeholder.gs.array_of_rows_to_upd"),expectedType:m.ARRAY})]})};M.displayName="BulkUpdateSpreadsheetSubPanel";const ce=c`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`,V=c`
  align-items: center;
  display: flex;
  flex: 1;
`;function de(n){return c`
    width: 16px;
    height: 16px;
    color: ${n?C("techPurple","03"):C("grayBlue","04")};
    cursor: pointer;
    z-index: 1;
    :hover {
      cursor: pointer;
      color: ${C("techPurple","03")};
    }
  `}const U=n=>{const{t:o}=y(),{onChange:e,spreadsheetsOption:s}=n,t=n.opts,{toSpreadsheet:d,toSheet:p,sheetName:h,spreadsheet:b,fx:v,toFx:i=!1}=t,r=()=>{e("toFx")(!i)};return u(x,{children:[a(S,{sheetName:h,spreadsheet:b,onChange:e,spreadsheetsOption:s,fx:v}),u("div",{css:ce,children:[u("div",{css:V,children:[i?a(f,{title:o("editor.action.form.label.gs.sheet_to_copy_to"),value:d,onChange:e("toSpreadsheet"),expectedType:m.STRING}):a(w,{title:o("editor.action.form.label.gs.sheet_to_copy_to"),componentType:"select",value:d,onChange:e("toSpreadsheet"),options:s}),a(D,{onClick:r,css:de(i)})]}),a("div",{css:V,children:a(f,{title:o("editor.action.form.label.gs.sheet_name"),value:p??"",onChange:e("toSheet"),tips:o("editor.action.form.tips.gs.copy_to_sheet_name"),expectedType:m.STRING})})]})]})};U.displayName="CopySpreadsheetSubPanel";const F=n=>{const{onChange:o}=n,{t:e}=y(),s=n.opts;return a(f,{title:e("editor.action.form.label.gs.title_of_spreadsheet"),value:s.title,onChange:o("title")})};F.displayName="CreateSpreadsheetSubPanel";const j=n=>{const{t:o}=y(),{onChange:e,spreadsheetsOption:s}=n,t=n.opts;return u(x,{children:[a(S,{sheetName:t.sheetName,spreadsheet:t.spreadsheet,onChange:e,spreadsheetsOption:s,fx:t.fx}),a(f,{value:t.rowIndex,onChange:e("rowIndex"),title:o("editor.action.form.label.gs.filters_to_match_row"),placeholder:"{{ 2 }}",expectedType:m.NUMBER})]})};j.displayName="DeleteSpreadsheetSubPanel";const H=n=>{const{onChange:o,spreadsheetsOption:e}=n,s=n.opts;return a(S,{spreadsheet:s.spreadsheet,onChange:o,isHiddenSheetName:!0,spreadsheetsOption:e,fx:s.fx})};H.displayName="GetSpreadsheetSubPanel";const he=c`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`,L=c`
  display: flex;
  position: relative;
  width: 50%;
`,me=c`
  flex-grow: 2;
  .cm-editor {
    height: 32px;
  }
`,ue=c`
  flex-grow: 3;
  .cm-editor {
    height: 32px;
  }
`,fe=[{label:g.t("editor.action.form.option.gs.action_type.read_data_from_a_spr"),value:"read"},{label:g.t("editor.action.form.option.gs.action_type.append_data_to_a_spr"),value:"append"},{label:g.t("editor.action.form.option.gs.action_type.update_a_spreadsheet"),value:"update"},{label:g.t("editor.action.form.option.gs.action_type.bulk_update_a_spread"),value:"bulkUpdate"},{label:g.t("editor.action.form.option.gs.action_type.delete_a_single_row_"),value:"delete"},{label:g.t("editor.action.form.option.gs.action_type.create_a_spreadsheet"),value:"create"},{label:g.t("editor.action.form.option.gs.action_type.copy_a_single_sheet_"),value:"copy"},{label:g.t("editor.action.form.option.gs.action_type.list_available_sprea"),value:"list"},{label:g.t("editor.action.form.option.gs.action_type.get_spreadsheet_info"),value:"get"}],ge=[{label:g.t("editor.action.form.option.gs.data_range.use_a1_notation"),value:"a1"},{label:g.t("editor.action.form.option.gs.data_range.use_limit_and_offset"),value:"limit"}],ye=c`
  min-height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 8px;
  gap: 128px;
`,_e=c`
  height: 22px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${C("grayBlue","04")};
`,Se=c`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1px;
  gap: 2px;
  height: 24px;
`,Y=n=>{const{t:o}=y(),{onChange:e,spreadsheetsOption:s}=n,t=n.opts,{spreadsheet:d,sheetName:p,fx:h}=t;return u(x,{children:[a(S,{spreadsheet:d,sheetName:p,onChange:e,spreadsheetsOption:s,fx:h,isHiddenSheetName:t.rangeType==="a1"}),a(W,{direction:"horizontal",w:"unset"}),u("div",{css:ye,children:[a("span",{css:_e,children:o("editor.action.form.label.gs.data_range")}),a("div",{css:Se,children:a(J,{type:"button",value:t.rangeType,defaultValue:t.rangeType,options:ge,onChange:e("rangeType")})})]}),t.rangeType==="limit"&&u("div",{css:he,children:[a("div",{css:L,children:a(f,{value:t.limit??"",onChange:e("limit"),title:o("editor.action.form.label.gs.limit"),expectedType:m.NUMBER})}),a("div",{css:L,children:a(f,{value:t.offset??"",onChange:e("offset"),title:o("editor.action.form.label.gs.offset"),expectedType:m.NUMBER})})]}),t.rangeType==="a1"&&a(f,{title:o("editor.action.form.label.gs.a1_notation"),value:t.a1Notation,onChange:e("a1Notation"),tips:a(B,{i18nKey:"editor.action.form.tips.gs.to_select_the_first_",t:o,components:[a($,{onClick:()=>{window.open("https://developers.google.com/sheets/api/guides/concepts#a1_notation","_blank")}},"notation-link")]})})]})};Y.displayName="ReadSpreadsheetSubPanel";const z=n=>{const{t:o}=y(),{onChange:e,spreadsheetsOption:s}=n,t=n.opts,d=t.filterType==="filter",p=_.useCallback((i,r,l,T,N)=>{let k=[...t.filters];k[i]={key:r,value:l,operator:T},e("filters")(k)},[e,t.filters]),h=_.useCallback(()=>{let r=[...t.filters,{key:"",value:"",operator:""}];e("filters")(r)},[e,t.filters]),b=_.useCallback(i=>{let l=[...t.filters];l.splice(i,1),l.length===0&&(l=[{key:"",value:"",operator:""}]),e("filters")(l)},[e,t.filters]),v=_.useCallback(()=>{const i=t.filterType==="filter"?"a1":"filter";e("filterType")(i)},[e,t.filterType]);return u(x,{children:[a(S,{sheetName:t.sheetName,spreadsheet:t.spreadsheet,onChange:e,isHiddenSheetName:!d,spreadsheetsOption:s,fx:t.fx}),d?a(ae,{label:o("editor.action.form.label.gs.filter_by"),subLabel:o(d?"editor.action.form.option.gs.filter_by.use_a1_notation":"editor.action.form.option.gs.filter_by.use_row_filters"),onSubLabelClick:v,records:t.filters??[],customRender:(i,r)=>u(x,{children:[a("div",{css:[E,me],children:a(P,{value:i.key,singleLine:!0,onChange:l=>{p(r,l,i.value,i.operator)},wrapperCss:ne,expectValueType:m.STRING,lang:A.JAVASCRIPT,codeType:O.EXPRESSION,canShowCompleteInfo:!0,placeholder:o("editor.action.form.placeholder.gs.row_filter.column_name")})}),a(X,{colorScheme:"techPurple",showSearch:!0,defaultValue:i.operator,value:i.operator,w:"0",h:"32px",bdRadius:"0",flexGrow:"1",onChange:l=>p(r,i.key,i.value,l),options:["="]}),a("div",{css:[E,ue],children:a(P,{singleLine:!0,value:i.value,onChange:l=>{p(r,i.key,l,i.operator)},wrapperCss:se,expectValueType:m.STRING,lang:A.JAVASCRIPT,codeType:O.EXPRESSION,canShowCompleteInfo:!0,placeholder:o("editor.action.form.placeholder.gs.row_filter.value")})})]}),name:"filter",onAdd:h,onDelete:b,onChangeKey:()=>{},onChangeValue:()=>{}}):a(f,{title:o("editor.action.form.label.gs.filter_by"),value:t.a1Notation,onChange:e("a1Notation"),tips:a(B,{i18nKey:"editor.action.form.tips.gs.a1_notation",t:o,components:[a($,{onClick:()=>window.open("https://developers.google.com/sheets/api/guides/concepts#a1_notation","_blank")},"editor.action.form.tips.gs.a1_notation")]}),expectedType:m.STRING,subtitle:o(d?"editor.action.form.option.gs.filter_by.use_a1_notation":"editor.action.form.option.gs.filter_by.use_row_filters"),handleSubtitleClick:v}),a(f,{title:o("editor.action.form.label.gs.update_value"),value:t.values,lineNumbers:!0,style:{height:"88px"},onChange:e("values"),placeholder:o("editor.action.form.placeholder.gs.update_value"),expectedType:m.ARRAY})]})};z.displayName="UpdateSpreadsheetSubPanel";const be={read:Y,update:z,delete:j,list:null,append:K,bulkUpdate:M,copy:U,create:F,get:H},Ce=()=>{const{t:n}=y(),o=q(),e=R(Q),s=R(Z),[t,d]=_.useState([]),p=(e==null?void 0:e.content)??ee,h=s.content;_.useEffect(()=>{e.resourceID!=null&&te(e.resourceID).then(({data:r})=>{var T;let l=[];r.Schema&&(l=((T=r.Schema)==null?void 0:T.spreadsheets)??[]),d(l.map(N=>({label:N.name,value:N.id})))})},[e.resourceID]);const b=_.useCallback(r=>{const l=h.method===r?h:{method:r,opts:oe[r]};o(I.updateCachedAction({...e,content:l}))},[e,o,h]),v=_.useCallback(r=>l=>{o(I.updateCachedAction({...e,content:{...p,opts:{...p.opts,[r]:l}}}))},[e,p,o]),i=be[p.method];return u("div",{css:ie,children:[a(w,{title:n("editor.action.form.label.gs.action_type"),componentType:"select",value:p.method,options:fe,onSelectedValueChange:b}),i&&a(i,{opts:p.opts,onChange:v,spreadsheetsOption:t}),a(re,{})]})};Ce.displayName="GoogleSheetsPanel";export{Ce as default};
//# sourceMappingURL=index-fd65d23e.js.map

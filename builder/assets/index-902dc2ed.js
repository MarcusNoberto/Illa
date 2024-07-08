import{k as e,n as I,o as A,bh as k,S as x}from"./@illa-design-1f43bb6c.js";import{a as r}from"./@emotion-08a6282b.js";import{b as y,hV as N,e as w,u as E,a5 as T,be as M,a as h,eH as B,b5 as f,c$ as V,aD as P}from"./index-4dce6ee8.js";import{r as o}from"./react-9b7e00e3.js";import{C as O}from"./index-03ca7e7b.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";const F=r`
  width: 100%;
  height: 8px;
`,L=()=>e("div",{css:F}),W=l=>r`
  display: flex;
  width: 100%;
  padding: 8px 16px;
  gap: 16px;
  align-items: center;
  opacity: ${l?.3:1};
`,U=r`
  font-size: 14px;
  color: ${I("grayBlue","02")};
  font-weight: 500;
`,$=r`
  width: 240px;
  flex: none;
  text-align: right;
  margin: 0;
  ${U};
`,G=r`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  position: relative;
`,H=r`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,v=l=>{const{title:s,children:i,disabled:d,subtitle:p}=l;return A("div",{css:W(d),children:[e("h6",{css:$,children:s}),A("div",{css:G,children:[i,p&&e("span",{css:U,children:p}),d&&e("div",{css:H})]})]})},z=r`
  width: 100%;
  padding: 16px 16px 0;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${I("grayBlue","04")};
  text-transform: uppercase;
`,R=l=>{const{title:s}=l;return e("h3",{css:z,children:s})},j=()=>{const l=y(N),{periodInterval:s,isPeriodically:i}=l,d=w(),{t:p}=E(),{track:g}=o.useContext(T),C=o.useCallback(t=>u=>{const b={[t]:u};switch(t){case"isPeriodically":{u?b.periodInterval="{{1800}}":b.periodInterval="";break}}d(M.updateCachedActionAdvancedConfigReducer(b))},[d]),n=o.useCallback(t=>()=>{g(h.FOCUS,{element:"advanced_code_mirror",parameter2:t})},[g]),c=o.useCallback(t=>u=>{g(h.BLUR,{element:"advanced_code_mirror",parameter2:t,parameter3:u})},[g]);return A("div",{children:[e(R,{title:"Advanced option"}),e(v,{title:"",subtitle:p("editor.action.panel.label.advanced.run_this_action_peri"),children:e(k,{colorScheme:"techPurple",checked:i,onChange:C("isPeriodically")})}),e(v,{title:p("editor.action.panel.label.advanced.interval"),disabled:!i,children:e(O,{value:s,onChange:C("periodInterval"),expectValueType:B.NUMBER,onFocus:n("periodInterval"),onBlur:c("periodInterval")})})]})},Y=[{label:f.t("editor.action.panel.label.option.advanced.on_app_loading"),value:"appLoaded"},{label:f.t("editor.action.panel.label.option.advanced.on_page_loading"),value:"pageLoading"},{label:f.t("editor.action.panel.label.option.advanced.none"),value:"none"}],K=()=>{const l=y(N),s=y(V),{runtime:i,pages:d,delayWhenLoaded:p,displayLoadingPage:g}=l,C=w(),{track:n}=o.useContext(T),{t:c}=E(),t=o.useCallback(a=>_=>{const m={[a]:_};if(a==="runtime")switch(_){case P.APP_LOADED:{m.pages=[],m.displayLoadingPage=!1;break}case P.NONE:{m.pages=[],m.delayWhenLoaded="",m.displayLoadingPage=!1;break}case P.PAGE_LOADING:break}(a==="displayLoadingPage"||a==="isPeriodically")&&n(h.CLICK,{element:"action_inspect_switch",parameter2:a,parameter3:_}),C(M.updateCachedActionAdvancedConfigReducer(m))},[C,n]),u=o.useCallback(a=>()=>{n(h.FOCUS,{element:"advanced_code_mirror",parameter2:a})},[n]),b=o.useCallback(a=>_=>{n(h.BLUR,{element:"advanced_code_mirror",parameter2:a,parameter3:_})},[n]),D=o.useCallback(a=>{a||n(h.CHANGE,{element:"action_inspect_select",parameter2:"pages",parameter3:d.length})},[d.length,n]),S=o.useCallback(a=>()=>{n(h.BLUR,{element:"action_inspect_select",parameter2:a})},[n]);return A("div",{children:[e(R,{title:"TIMING"}),e(v,{title:c("editor.action.panel.label.advanced.page_trigger"),children:e(x,{colorScheme:"techPurple",options:Y,value:i,onChange:t("runtime"),onClick:S("runtime")})}),e(v,{title:c("editor.action.panel.label.advanced.page_load_delay"),disabled:i==="none",children:e(O,{value:p,onChange:t("delayWhenLoaded"),expectValueType:B.NUMBER,onFocus:u("delayWhenLoaded"),onBlur:b("delayWhenLoaded")})}),e(v,{title:c("editor.action.panel.label.advanced.pages"),disabled:i!=="pageLoading",children:e(x,{colorScheme:"techPurple",options:s,value:d,multiple:!0,onChange:t("pages"),placeholder:c("editor.action.panel.label.placeholder.advanced.select_pages"),onVisibleChange:D,onClick:S("pages")})}),e(v,{title:c("editor.action.panel.label.advanced.loading_page"),disabled:i!=="pageLoading",subtitle:c("editor.action.panel.label.option.advanced.show_a_loading_page_"),children:e(k,{checked:g,colorScheme:"techPurple",onChange:t("displayLoadingPage")})})]})},X=r`
  width: 100%;
  overflow-y: auto;
`,q=()=>A("div",{css:X,children:[e(L,{}),e(K,{}),e(L,{}),e(j,{})]});q.displayName="ActionAdvancedPanel";export{q as default};
//# sourceMappingURL=index-902dc2ed.js.map

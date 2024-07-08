import{f as l,l as F,k as o,ac as se,ay as H,ar as ie,az as oe,q as B,ae,F as j,aa as le,ad as ce,a9 as ue}from"./@illa-design-d2cc591b.js";import{b as g,r as N}from"./react-e2e9745e.js";var de=e=>e.type==="checkbox",fe=e=>e instanceof Date,Q=e=>e==null;const pe=e=>typeof e=="object";var O=e=>!Q(e)&&!Array.isArray(e)&&pe(e)&&!fe(e),he=e=>O(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,ge=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ye=(e,r)=>e.has(ge(r)),xe=e=>{const r=e.constructor&&e.constructor.prototype;return O(r)&&r.hasOwnProperty("isPrototypeOf")},me=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function R(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(me&&(e instanceof Blob||e instanceof FileList))&&(t||O(e)))if(r=t?[]:{},!t&&!xe(e))r=e;else for(const s in e)e.hasOwnProperty(s)&&(r[s]=R(e[s]));else return e;return r}var X=e=>Array.isArray(e)?e.filter(Boolean):[],$=e=>e===void 0,m=(e,r,t)=>{if(!r||!O(e))return t;const s=X(r.split(/[,[\].]+?/)).reduce((n,a)=>Q(n)?n:n[a],e);return $(s)||s===e?$(e[r])?t:e[r]:s},M=e=>typeof e=="boolean";const q={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},L={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},be=g.createContext(null),z=()=>g.useContext(be);var we=(e,r,t,s=!0)=>{const n={defaultValues:r._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const u=a;return r._proxyFormState[u]!==L.all&&(r._proxyFormState[u]=!s||L.all),t&&(t[u]=!0),e[u]}});return n},_e=e=>O(e)&&!Object.keys(e).length,Se=(e,r,t,s)=>{t(e);const{name:n,...a}=e;return _e(a)||Object.keys(a).length>=Object.keys(r).length||Object.keys(a).find(u=>r[u]===(!s||L.all))},Ce=e=>Array.isArray(e)?e:[e],Y=(e,r,t)=>!e||!r||e===r||Ce(e).some(s=>s&&(t?s===r:s.startsWith(r)||r.startsWith(s)));function Z(e){const r=g.useRef(e);r.current=e,g.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function Ae(e){const r=z(),{control:t=r.control,disabled:s,name:n,exact:a}=e||{},[u,y]=g.useState(t._formState),c=g.useRef(!0),d=g.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),i=g.useRef(n);return i.current=n,Z({disabled:s,next:b=>c.current&&Y(i.current,b.name,a)&&Se(b,d.current,t._updateFormState)&&y({...t._formState,...b}),subject:t._subjects.state}),g.useEffect(()=>(c.current=!0,d.current.isValid&&t._updateValid(!0),()=>{c.current=!1}),[t]),we(u,t,d.current,!1)}var ve=e=>typeof e=="string",Ve=(e,r,t,s,n)=>ve(e)?(s&&r.watch.add(e),m(t,e,n)):Array.isArray(e)?e.map(a=>(s&&r.watch.add(a),m(t,a))):(s&&(r.watchAll=!0),t);function Fe(e){const r=z(),{control:t=r.control,name:s,defaultValue:n,disabled:a,exact:u}=e||{},y=g.useRef(s);y.current=s,Z({disabled:a,subject:t._subjects.values,next:i=>{Y(y.current,i.name,u)&&d(R(Ve(y.current,t._names,i.values||t._formValues,!1,n)))}});const[c,d]=g.useState(t._getWatch(s,n));return g.useEffect(()=>t._removeUnmounted()),c}var Pe=e=>/^\w*$/.test(e),ke=e=>X(e.replace(/["|']|\]/g,"").split(/\.|\[/));function K(e,r,t){let s=-1;const n=Pe(r)?[r]:ke(r),a=n.length,u=a-1;for(;++s<a;){const y=n[s];let c=t;if(s!==u){const d=e[y];c=O(d)||Array.isArray(d)?d:isNaN(+n[s+1])?{}:[]}e[y]=c,e=e[y]}return e}function Oe(e){const r=z(),{name:t,disabled:s,control:n=r.control,shouldUnregister:a}=e,u=ye(n._names.array,t),y=Fe({control:n,name:t,defaultValue:m(n._formValues,t,m(n._defaultValues,t,e.defaultValue)),exact:!0}),c=Ae({control:n,name:t}),d=g.useRef(n.register(t,{...e.rules,value:y}));return d.current=n.register(t,e.rules),g.useEffect(()=>{const i=n._options.shouldUnregister||a,b=(w,E)=>{const T=m(n._fields,w);T&&(T._f.mount=E)};if(b(t,!0),i){const w=R(m(n._options.defaultValues,t));K(n._defaultValues,t,w),$(m(n._formValues,t))&&K(n._formValues,t,w)}return()=>{(u?i&&!n._state.action:i)?n.unregister(t):b(t,!1)}},[t,n,u,a]),g.useEffect(()=>{m(n._fields,t)&&n._updateDisabledField({disabled:s,fields:n._fields,name:t,value:m(n._fields,t)._f.value})},[s,t,n]),{field:{name:t,value:y,...M(s)||M(c.disabled)?{disabled:c.disabled||s}:{},onChange:g.useCallback(i=>d.current.onChange({target:{value:he(i),name:t},type:q.CHANGE}),[t]),onBlur:g.useCallback(()=>d.current.onBlur({target:{value:m(n._formValues,t),name:t},type:q.BLUR}),[t,n]),ref:i=>{const b=m(n._fields,t);b&&i&&(b._f.ref={focus:()=>i.focus(),select:()=>i.select(),setCustomValidity:w=>i.setCustomValidity(w),reportValidity:()=>i.reportValidity()})}},formState:c,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!m(c.errors,t)},isDirty:{enumerable:!0,get:()=>!!m(c.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!m(c.touchedFields,t)},error:{enumerable:!0,get:()=>m(c.errors,t)}})}}const A=e=>e.render(Oe(e));function Te(e){return e?l`
      display: flex;
      width: 100%;
      flex-direction: row;
      padding-left: 24px;
    `:l`
      display: flex;
      min-height: 48px;
      align-items: center;
      flex-direction: row;
      padding-left: 24px;
    `}const G=l`
  font-size: 14px;
  color: ${F("grayBlue","02")};
  margin-left: 8px;
`,Be=l`
  font-size: 14px;
  color: ${F("grayBlue","04")};
  font-weight: 400;
  margin-left: 192px;
  padding: 0 24px 8px 24px;
  line-height: 22px;
  min-height: 30px;
  white-space: normal;
`,Ee=l`
  display: flex;
  flex-direction: row;
  justify-content: end;
  min-width: 176px;
  width: 176px;
`;function J(e,r){let t=l``;return r&&(t=l`
      margin-left: 4px;
    `),l`
    font-size: 14px;
    color: ${e};
    font-weight: 500;
    ${t};
  `}const Ie=l`
  display: flex;
  margin-left: 16px;
  margin-right: 24px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 8px;
`,je=e=>{const{title:r,contentLabel:t,isRequired:s=!1,defaultValue:n,placeholders:a=[],styles:u=[],name:y,tips:c,controlledType:d,control:i,error:b,options:w=[],rules:E=[],tipsStyle:T,allowClear:U=!1,forceEqualWidth:D,labelStyle:W,onValueChange:_}=e,I=(Array.isArray(d)?d:[d]).filter(k=>k.trim()&&k!=="none"),ee=Array.isArray(y)?y:[y],te=Array.isArray(n)?n:[n],re=I.includes("textarea"),ne=N.useCallback((k,x,S,P,C,v={})=>{switch(k){case"input":return o(A,{control:i,defaultValue:S,rules:C,render:({field:{value:f,onChange:p,onBlur:h}})=>o(ue,{w:"100%",...v,onBlur:h,onChange:p,value:f,error:b,colorScheme:"techPurple",placeholder:P}),name:x});case"checkbox":return B(j,{children:[o(A,{control:i,defaultValue:S,rules:C,render:({field:{value:f,onChange:p,onBlur:h}})=>o(ce,{...v,onBlur:h,onChange:V=>{p(V),_==null||_(V)},checked:f,colorScheme:"techPurple",placeholder:P}),name:x}),o("span",{css:G,children:t})]});case"select":return o(A,{control:i,defaultValue:S,rules:C,render:({field:{value:f,onChange:p,onBlur:h}})=>o(le,{value:f,onBlur:h,allowClear:U,onChange:V=>{_==null||_(V),p(V)},colorScheme:"techPurple",options:w}),name:x});case"switch":return B(j,{children:[o(A,{control:i,defaultValue:S,rules:C,render:({field:{value:f,onChange:p,onBlur:h}})=>o(ae,{checked:f,colorScheme:"techPurple",onChange:V=>{p(V),_==null||_(V)},onBlur:h,...v}),name:x}),o("span",{css:G,children:t})]});case"number":return o(A,{control:i,defaultValue:S,rules:C,render:({field:{value:f,onChange:p,onBlur:h}})=>o(oe,{onBlur:h,onChange:p,value:f,colorScheme:"techPurple",w:"100%",placeholder:P,...v}),name:x});case"password":return o(A,{control:i,defaultValue:S,rules:C,render:({field:{value:f,onChange:p,onBlur:h}})=>o(ie,{autoComplete:"new-password",colorScheme:"techPurple",w:"100%",onBlur:h,onChange:p,value:f,placeholder:P,...v}),name:x});case"radio":return o(A,{control:i,defaultValue:S,rules:C,render:({field:{value:f,onChange:p,onBlur:h}})=>o(H,{colorScheme:"techPurple",w:"100%",type:"radio",onBlur:h,onChange:p,value:f,placeholder:P,options:w,...v}),name:x});case"radio-group":return o(A,{control:i,defaultValue:S,rules:C,render:({field:{value:f,onChange:p,onBlur:h}})=>o(H,{colorScheme:"gray",w:"100%",type:"button",onBlur:h,onChange:p,value:f,placeholder:P,forceEqualWidth:D,options:w,...v}),name:x});case"textarea":return o(A,{control:i,defaultValue:S,rules:C,render:({field:{value:f,onChange:p,onBlur:h}})=>o(se,{w:"100%",h:"100%",pb:"16px",minH:"240px",colorScheme:"techPurple",onBlur:h,onChange:p,value:f,autoSize:!1,placeholder:P,...v}),name:x})}},[U,t,i,b,D,_,w]);return B(j,{children:[!!I.length&&B("div",{css:Te(re),children:[B("div",{css:W||Ee,children:[s&&o("span",{css:J(F("red","03")),children:"*"}),o("span",{css:J(F("grayBlue","02")),children:r})]}),o("div",{css:Ie,children:I.map((k,x)=>o(N.Fragment,{children:ne(k,ee[x],te[x],a[x],E[x],u[x])},x))})]}),c&&o("div",{css:T||Be,children:c})]})};je.displayName="ControlledElement";const Re=l`
  width: 100%;
  overflow: auto;
  max-height: 656px;
`;function ze(e,r){let t=l``;return r&&(t=l`
      margin-left: 4px;
    `),l`
    font-size: 14px;
    color: ${e};
    font-weight: 500;
    ${t};
  `}const Ue=l`
  font-size: 14px;
  font-weight: 400;
  margin-left: 192px;
  padding-bottom: 8px;
  line-height: 22px;
  padding-left: 24px;
  color: ${F("grayBlue","04")};
`;l`
  display: flex;
  height: 38px;
  align-items: center;
  padding-left: 24px;
`;l`
  font-size: 14px;
  height: 22px;
  display: flex;
  align-items: center;
  color: ${F("grayBlue","02")};
  margin-left: 16px;
`;const De=l`
  display: flex;
  justify-content: end;
  min-width: 176px;
`,We=l`
  height: 38px;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 24px;
  color: ${F("grayBlue","04")};
  align-items: center;
`,He=l`
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  line-height: 22px;
  color: ${F("orange","03")};
`,Ne=l`
  position: absolute;
  font-size: 16px;
  line-height: 0;
  top: 3px;
  left: 0;
`,Me=l`
  display: flex;
  width: 100%;
  padding-top: 8px;
  padding-left: 24px;
  align-items: flex-start;
`,qe=l`
  display: flex;
  height: 48px;
  align-items: center;
  flex-direction: row;
  padding-left: 24px;
`;export{je as C,Ne as a,ze as b,Re as c,A as d,He as e,Ue as f,qe as g,Ie as h,De as l,We as o,Me as p,z as u};
//# sourceMappingURL=style-ed77e2a4.js.map

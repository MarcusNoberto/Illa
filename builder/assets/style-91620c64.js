import{am as yt,ak as Fn,n as S,k as c,bC as Lt,bB as tt,o as M,aQ as Rt,T as Pn,x as $n,ax as Hn,ay as Nn,az as Wn,bA as Tt,q as be,bN as fe,bO as jn,B as de,bP as zn,bx as Bt,aY as Dt,A as qn,F as We,S as Gn,Y as Kn,bQ as Zn,M as Vt,bR as Yn,bg as Xn,b6 as Jn,bS as Qn,bT as er,bU as pt,C as Ut,r as tr,D as nr}from"./@illa-design-402f214a.js";import{b7 as xt,u as re,U as q,e5 as Q,e6 as _e,a5 as Ee,e7 as Mt,a as Ae,l as Ot,e8 as Ft,d7 as Pt,A as $t,e9 as rr,ea as Ht,eb as Nt,ec as je,R as Ue,o as ir,p as ar,s as lr}from"./index-2f1869ab.js";import{b as j,r as g}from"./react-9b7e00e3.js";import{a as u}from"./@emotion-4f16718e.js";import{w as sr}from"./lodash-lib-6e94956b.js";import{u as ze}from"./hook-34b2061f.js";var Wt=(e=>(e.SUCCESS="success",e.EMPTY="empty",e))(Wt||{});const or=e=>e==null||e===""?"empty":typeof e=="string"||typeof e=="number"?(yt(String(e)),"success"):(yt(JSON.stringify(e)),"success"),wt=Fn(),Oa=e=>{or(e)===Wt.EMPTY?wt.info({content:xt.t("empty_copied_tips")}):wt.success({content:xt.t("copied")})};var Le=e=>e.type==="checkbox",xe=e=>e instanceof Date,te=e=>e==null;const jt=e=>typeof e=="object";var Z=e=>!te(e)&&!Array.isArray(e)&&jt(e)&&!xe(e),zt=e=>Z(e)&&e.target?Le(e.target)?e.target.checked:e.target.value:e,cr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,qt=(e,r)=>e.has(cr(r)),Re=e=>Array.isArray(e)?e.filter(Boolean):[],K=e=>e===void 0,C=(e,r,t)=>{if(!r||!Z(e))return t;const a=Re(r.split(/[,[\].]+?/)).reduce((n,i)=>te(n)?n:n[i],e);return K(a)||a===e?K(e[r])?t:e[r]:a};const Me={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},le={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ce={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ur=j.createContext(null),rt=()=>j.useContext(ur);var Gt=(e,r,t,a=!0)=>{const n={defaultValues:r._defaultValues};for(const i in e)Object.defineProperty(n,i,{get:()=>{const s=i;return r._proxyFormState[s]!==le.all&&(r._proxyFormState[s]=!a||le.all),t&&(t[s]=!0),e[s]}});return n},ae=e=>Z(e)&&!Object.keys(e).length,Kt=(e,r,t,a)=>{t(e);const{name:n,...i}=e;return ae(i)||Object.keys(i).length>=Object.keys(r).length||Object.keys(i).find(s=>r[s]===(!a||le.all))},De=e=>Array.isArray(e)?e:[e],Zt=(e,r,t)=>t&&r?e===r:!e||!r||e===r||De(e).some(a=>a&&(a.startsWith(r)||r.startsWith(a)));function it(e){const r=j.useRef(e);r.current=e,j.useEffect(()=>{const t=!e.disabled&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function dr(e){const r=rt(),{control:t=r.control,disabled:a,name:n,exact:i}=e||{},[s,f]=j.useState(t._formState),p=j.useRef(!0),o=j.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),w=j.useRef(n);return w.current=n,it({disabled:a,next:_=>p.current&&Zt(w.current,_.name,i)&&Kt(_,o.current,t._updateFormState)&&f({...t._formState,..._}),subject:t._subjects.state}),j.useEffect(()=>{p.current=!0;const _=t._proxyFormState.isDirty&&t._getDirty();return _!==t._formState.isDirty&&t._subjects.state.next({isDirty:_}),o.current.isValid&&t._updateValid(!0),()=>{p.current=!1}},[t]),Gt(s,t,o.current,!1)}var oe=e=>typeof e=="string",Yt=(e,r,t,a,n)=>oe(e)?(a&&r.watch.add(e),C(t,e,n)):Array.isArray(e)?e.map(i=>(a&&r.watch.add(i),C(t,i))):(a&&(r.watchAll=!0),t),fr=e=>{const r=e.constructor&&e.constructor.prototype;return Z(r)&&r.hasOwnProperty("isPrototypeOf")},at=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function he(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(at&&(e instanceof Blob||e instanceof FileList))&&(t||Z(e)))if(r=t?[]:{},!Array.isArray(e)&&!fr(e))r=e;else for(const a in e)r[a]=he(e[a]);else return e;return r}function hr(e){const r=rt(),{control:t=r.control,name:a,defaultValue:n,disabled:i,exact:s}=e||{},f=j.useRef(a);f.current=a,it({disabled:i,subject:t._subjects.watch,next:w=>{Zt(f.current,w.name,s)&&o(he(Yt(f.current,t._names,w.values||t._formValues,!1,n)))}});const[p,o]=j.useState(t._getWatch(a,n));return j.useEffect(()=>t._removeUnmounted()),p}function gr(e){const r=rt(),{name:t,control:a=r.control,shouldUnregister:n}=e,i=qt(a._names.array,t),s=hr({control:a,name:t,defaultValue:C(a._formValues,t,C(a._defaultValues,t,e.defaultValue)),exact:!0}),f=dr({control:a,name:t}),p=j.useRef(a.register(t,{...e.rules,value:s}));return j.useEffect(()=>{const o=(w,_)=>{const x=C(a._fields,w);x&&(x._f.mount=_)};return o(t,!0),()=>{const w=a._options.shouldUnregister||n;(i?w&&!a._stateFlags.action:w)?a.unregister(t):o(t,!1)}},[t,a,i,n]),{field:{name:t,value:s,onChange:j.useCallback(o=>p.current.onChange({target:{value:zt(o),name:t},type:Me.CHANGE}),[t]),onBlur:j.useCallback(()=>p.current.onBlur({target:{value:C(a._formValues,t),name:t},type:Me.BLUR}),[t,a]),ref:o=>{const w=C(a._fields,t);w&&o&&(w._f.ref={focus:()=>o.focus(),select:()=>o.select(),setCustomValidity:_=>o.setCustomValidity(_),reportValidity:()=>o.reportValidity()})}},formState:f,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!C(f.errors,t)},isDirty:{enumerable:!0,get:()=>!!C(f.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!C(f.touchedFields,t)},error:{enumerable:!0,get:()=>C(f.errors,t)}})}}const Fa=e=>e.render(gr(e));var mr=(e,r,t,a,n)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:n||!0}}:{},lt=e=>/^\w*$/.test(e),Xt=e=>Re(e.replace(/["|']|\]/g,"").split(/\.|\[/));function W(e,r,t){let a=-1;const n=lt(r)?[r]:Xt(r),i=n.length,s=i-1;for(;++a<i;){const f=n[a];let p=t;if(a!==s){const o=e[f];p=Z(o)||Array.isArray(o)?o:isNaN(+n[a+1])?{}:[]}e[f]=p,e=e[f]}return e}const nt=(e,r,t)=>{for(const a of t||Object.keys(e)){const n=C(e,a);if(n){const{_f:i,...s}=n;if(i&&r(i.name)){if(i.ref.focus){i.ref.focus();break}else if(i.refs&&i.refs[0].focus){i.refs[0].focus();break}}else Z(s)&&nt(s,r)}}};var vt=e=>({isOnSubmit:!e||e===le.onSubmit,isOnBlur:e===le.onBlur,isOnChange:e===le.onChange,isOnAll:e===le.all,isOnTouch:e===le.onTouched}),Ct=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length)))),yr=(e,r,t)=>{const a=Re(C(e,t));return W(a,"root",r[t]),W(e,t,a),e},we=e=>typeof e=="boolean",st=e=>e.type==="file",ve=e=>typeof e=="function",Oe=e=>{if(!at)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Ve=e=>oe(e)||j.isValidElement(e),ot=e=>e.type==="radio",Fe=e=>e instanceof RegExp;const bt={value:!1,isValid:!1},_t={value:!0,isValid:!0};var Jt=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!K(e[0].attributes.value)?K(e[0].value)||e[0].value===""?_t:{value:e[0].value,isValid:!0}:_t:bt}return bt};const kt={isValid:!1,value:null};var Qt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,kt):kt;function St(e,r,t="validate"){if(Ve(e)||Array.isArray(e)&&e.every(Ve)||we(e)&&!e)return{type:t,message:Ve(e)?e:"",ref:r}}var pe=e=>Z(e)&&!Fe(e)?e:{value:e,message:""},It=async(e,r,t,a,n)=>{const{ref:i,refs:s,required:f,maxLength:p,minLength:o,min:w,max:_,pattern:x,validate:v,name:A,valueAsNumber:P,mount:m,disabled:U}=e._f,I=C(r,A);if(!m||U)return{};const $=s?s[0]:i,O=R=>{a&&$.reportValidity&&($.setCustomValidity(we(R)?"":R||""),$.reportValidity())},D={},H=ot(i),ee=Le(i),B=H||ee,F=(P||st(i))&&K(i.value)&&K(I)||Oe(i)&&i.value===""||I===""||Array.isArray(I)&&!I.length,E=mr.bind(null,A,t,D),V=(R,T,N,J=ce.maxLength,ie=ce.minLength)=>{const se=R?T:N;D[A]={type:R?J:ie,message:se,ref:i,...E(R?J:ie,se)}};if(n?!Array.isArray(I)||!I.length:f&&(!B&&(F||te(I))||we(I)&&!I||ee&&!Jt(s).isValid||H&&!Qt(s).isValid)){const{value:R,message:T}=Ve(f)?{value:!!f,message:f}:pe(f);if(R&&(D[A]={type:ce.required,message:T,ref:$,...E(ce.required,T)},!t))return O(T),D}if(!F&&(!te(w)||!te(_))){let R,T;const N=pe(_),J=pe(w);if(!te(I)&&!isNaN(I)){const ie=i.valueAsNumber||I&&+I;te(N.value)||(R=ie>N.value),te(J.value)||(T=ie<J.value)}else{const ie=i.valueAsDate||new Date(I),se=Se=>new Date(new Date().toDateString()+" "+Se),ge=i.type=="time",ke=i.type=="week";oe(N.value)&&I&&(R=ge?se(I)>se(N.value):ke?I>N.value:ie>new Date(N.value)),oe(J.value)&&I&&(T=ge?se(I)<se(J.value):ke?I<J.value:ie<new Date(J.value))}if((R||T)&&(V(!!R,N.message,J.message,ce.max,ce.min),!t))return O(D[A].message),D}if((p||o)&&!F&&(oe(I)||n&&Array.isArray(I))){const R=pe(p),T=pe(o),N=!te(R.value)&&I.length>R.value,J=!te(T.value)&&I.length<T.value;if((N||J)&&(V(N,R.message,T.message),!t))return O(D[A].message),D}if(x&&!F&&oe(I)){const{value:R,message:T}=pe(x);if(Fe(R)&&!I.match(R)&&(D[A]={type:ce.pattern,message:T,ref:i,...E(ce.pattern,T)},!t))return O(T),D}if(v){if(ve(v)){const R=await v(I,r),T=St(R,$);if(T&&(D[A]={...T,...E(ce.validate,T.message)},!t))return O(T.message),D}else if(Z(v)){let R={};for(const T in v){if(!ae(R)&&!t)break;const N=St(await v[T](I,r),$,T);N&&(R={...N,...E(T,N.message)},O(N.message),t&&(D[A]=R))}if(!ae(R)&&(D[A]={ref:$,...R},!t))return D}}return O(!0),D};function pr(e,r){const t=r.slice(0,-1).length;let a=0;for(;a<t;)e=K(e)?a++:e[r[a++]];return e}function xr(e){for(const r in e)if(!K(e[r]))return!1;return!0}function Y(e,r){const t=Array.isArray(r)?r:lt(r)?[r]:Xt(r),a=t.length===1?e:pr(e,t),n=t.length-1,i=t[n];return a&&delete a[i],n!==0&&(Z(a)&&ae(a)||Array.isArray(a)&&xr(a))&&Y(e,t.slice(0,-1)),e}function Ye(){let e=[];return{get observers(){return e},next:n=>{for(const i of e)i.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(i=>i!==n)}}),unsubscribe:()=>{e=[]}}}var Pe=e=>te(e)||!jt(e);function me(e,r){if(Pe(e)||Pe(r))return e===r;if(xe(e)&&xe(r))return e.getTime()===r.getTime();const t=Object.keys(e),a=Object.keys(r);if(t.length!==a.length)return!1;for(const n of t){const i=e[n];if(!a.includes(n))return!1;if(n!=="ref"){const s=r[n];if(xe(i)&&xe(s)||Z(i)&&Z(s)||Array.isArray(i)&&Array.isArray(s)?!me(i,s):i!==s)return!1}}return!0}var en=e=>e.type==="select-multiple",wr=e=>ot(e)||Le(e),Xe=e=>Oe(e)&&e.isConnected,tn=e=>{for(const r in e)if(ve(e[r]))return!0;return!1};function $e(e,r={}){const t=Array.isArray(e);if(Z(e)||t)for(const a in e)Array.isArray(e[a])||Z(e[a])&&!tn(e[a])?(r[a]=Array.isArray(e[a])?[]:{},$e(e[a],r[a])):te(e[a])||(r[a]=!0);return r}function nn(e,r,t){const a=Array.isArray(e);if(Z(e)||a)for(const n in e)Array.isArray(e[n])||Z(e[n])&&!tn(e[n])?K(r)||Pe(t[n])?t[n]=Array.isArray(e[n])?$e(e[n],[]):{...$e(e[n])}:nn(e[n],te(r)?{}:r[n],t[n]):me(e[n],r[n])?delete t[n]:t[n]=!0;return t}var Je=(e,r)=>nn(e,r,$e(r)),rn=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:a})=>K(e)?e:r?e===""?NaN:e&&+e:t&&oe(e)?new Date(e):a?a(e):e;function Qe(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return st(r)?r.files:ot(r)?Qt(e.refs).value:en(r)?[...r.selectedOptions].map(({value:t})=>t):Le(r)?Jt(e.refs).value:rn(K(r.value)?e.ref.value:r.value,e)}var vr=(e,r,t,a)=>{const n={};for(const i of e){const s=C(r,i);s&&W(n,i,s._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:a}},Ie=e=>K(e)?e:Fe(e)?e.source:Z(e)?Fe(e.value)?e.value.source:e.value:e,Cr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Et(e,r,t){const a=C(e,t);if(a||lt(t))return{error:a,name:t};const n=t.split(".");for(;n.length;){const i=n.join("."),s=C(r,i),f=C(e,i);if(s&&!Array.isArray(s)&&t!==i)return{name:t};if(f&&f.type)return{name:i,error:f};n.pop()}return{name:t}}var br=(e,r,t,a,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(r||e):(t?a.isOnBlur:n.isOnBlur)?!e:(t?a.isOnChange:n.isOnChange)?e:!0,_r=(e,r)=>!Re(C(e,r)).length&&Y(e,r);const kr={mode:le.onSubmit,reValidateMode:le.onChange,shouldFocusError:!0};function Sr(e={},r){let t={...kr,...e};const a=e.resetOptions&&e.resetOptions.keepDirtyValues;let n={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=Z(t.defaultValues)||Z(t.values)?he(t.defaultValues||t.values)||{}:{},f=t.shouldUnregister?{}:he(s),p={action:!1,mount:!1,watch:!1},o={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,_=0;const x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={watch:Ye(),array:Ye(),state:Ye()},A=vt(t.mode),P=vt(t.reValidateMode),m=t.criteriaMode===le.all,U=l=>d=>{clearTimeout(_),_=window.setTimeout(l,d)},I=async l=>{if(x.isValid||l){const d=t.resolver?ae((await F()).errors):await V(i,!0);d!==n.isValid&&v.state.next({isValid:d})}},$=l=>x.isValidating&&v.state.next({isValidating:l}),O=(l,d=[],h,b,k=!0,y=!0)=>{if(b&&h){if(p.action=!0,y&&Array.isArray(C(i,l))){const L=h(C(i,l),b.argA,b.argB);k&&W(i,l,L)}if(y&&Array.isArray(C(n.errors,l))){const L=h(C(n.errors,l),b.argA,b.argB);k&&W(n.errors,l,L),_r(n.errors,l)}if(x.touchedFields&&y&&Array.isArray(C(n.touchedFields,l))){const L=h(C(n.touchedFields,l),b.argA,b.argB);k&&W(n.touchedFields,l,L)}x.dirtyFields&&(n.dirtyFields=Je(s,f)),v.state.next({name:l,isDirty:T(l,d),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else W(f,l,d)},D=(l,d)=>{W(n.errors,l,d),v.state.next({errors:n.errors})},H=(l,d,h,b)=>{const k=C(i,l);if(k){const y=C(f,l,K(h)?C(s,l):h);K(y)||b&&b.defaultChecked||d?W(f,l,d?y:Qe(k._f)):ie(l,y),p.mount&&I()}},ee=(l,d,h,b,k)=>{let y=!1,L=!1;const G={name:l};if(!h||b){x.isDirty&&(L=n.isDirty,n.isDirty=G.isDirty=T(),y=L!==G.isDirty);const z=me(C(s,l),d);L=C(n.dirtyFields,l),z?Y(n.dirtyFields,l):W(n.dirtyFields,l,!0),G.dirtyFields=n.dirtyFields,y=y||x.dirtyFields&&L!==!z}if(h){const z=C(n.touchedFields,l);z||(W(n.touchedFields,l,h),G.touchedFields=n.touchedFields,y=y||x.touchedFields&&z!==h)}return y&&k&&v.state.next(G),y?G:{}},B=(l,d,h,b)=>{const k=C(n.errors,l),y=x.isValid&&we(d)&&n.isValid!==d;if(e.delayError&&h?(w=U(()=>D(l,h)),w(e.delayError)):(clearTimeout(_),w=null,h?W(n.errors,l,h):Y(n.errors,l)),(h?!me(k,h):k)||!ae(b)||y){const L={...b,...y&&we(d)?{isValid:d}:{},errors:n.errors,name:l};n={...n,...L},v.state.next(L)}$(!1)},F=async l=>await t.resolver(f,t.context,vr(l||o.mount,i,t.criteriaMode,t.shouldUseNativeValidation)),E=async l=>{const{errors:d}=await F();if(l)for(const h of l){const b=C(d,h);b?W(n.errors,h,b):Y(n.errors,h)}else n.errors=d;return d},V=async(l,d,h={valid:!0})=>{for(const b in l){const k=l[b];if(k){const{_f:y,...L}=k;if(y){const G=o.array.has(y.name),z=await It(k,f,m,t.shouldUseNativeValidation,G);if(z[y.name]&&(h.valid=!1,d))break;!d&&(C(z,y.name)?G?yr(n.errors,z,y.name):W(n.errors,y.name,z[y.name]):Y(n.errors,y.name))}L&&await V(L,d,h)}}return h.valid},R=()=>{for(const l of o.unMount){const d=C(i,l);d&&(d._f.refs?d._f.refs.every(h=>!Xe(h)):!Xe(d._f.ref))&&qe(l)}o.unMount=new Set},T=(l,d)=>(l&&d&&W(f,l,d),!me(ct(),s)),N=(l,d,h)=>Yt(l,o,{...p.mount?f:K(d)?s:oe(l)?{[l]:d}:d},h,d),J=l=>Re(C(p.mount?f:s,l,e.shouldUnregister?C(s,l,[]):[])),ie=(l,d,h={})=>{const b=C(i,l);let k=d;if(b){const y=b._f;y&&(!y.disabled&&W(f,l,rn(d,y)),k=Oe(y.ref)&&te(d)?"":d,en(y.ref)?[...y.ref.options].forEach(L=>L.selected=k.includes(L.value)):y.refs?Le(y.ref)?y.refs.length>1?y.refs.forEach(L=>(!L.defaultChecked||!L.disabled)&&(L.checked=Array.isArray(k)?!!k.find(G=>G===L.value):k===L.value)):y.refs[0]&&(y.refs[0].checked=!!k):y.refs.forEach(L=>L.checked=L.value===k):st(y.ref)?y.ref.value="":(y.ref.value=k,y.ref.type||v.watch.next({name:l})))}(h.shouldDirty||h.shouldTouch)&&ee(l,k,h.shouldTouch,h.shouldDirty,!0),h.shouldValidate&&Se(l)},se=(l,d,h)=>{for(const b in d){const k=d[b],y=`${l}.${b}`,L=C(i,y);(o.array.has(l)||!Pe(k)||L&&!L._f)&&!xe(k)?se(y,k,h):ie(y,k,h)}},ge=(l,d,h={})=>{const b=C(i,l),k=o.array.has(l),y=he(d);W(f,l,y),k?(v.array.next({name:l,values:f}),(x.isDirty||x.dirtyFields)&&h.shouldDirty&&v.state.next({name:l,dirtyFields:Je(s,f),isDirty:T(l,y)})):b&&!b._f&&!te(y)?se(l,y,h):ie(l,y,h),Ct(l,o)&&v.state.next({}),v.watch.next({name:l}),!p.mount&&r()},ke=async l=>{const d=l.target;let h=d.name;const b=C(i,h),k=()=>d.type?Qe(b._f):zt(l);if(b){let y,L;const G=k(),z=l.type===Me.BLUR||l.type===Me.FOCUS_OUT,Un=!Cr(b._f)&&!t.resolver&&!C(n.errors,h)&&!b._f.deps||br(z,C(n.touchedFields,h),n.isSubmitted,P,A),Ke=Ct(h,o,z);W(f,h,G),z?(b._f.onBlur&&b._f.onBlur(l),w&&w(0)):b._f.onChange&&b._f.onChange(l);const Ze=ee(h,G,z,!1),Mn=!ae(Ze)||Ke;if(!z&&v.watch.next({name:h,type:l.type}),Un)return x.isValid&&I(),Mn&&v.state.next({name:h,...Ke?{}:Ze});if(!z&&Ke&&v.state.next({}),$(!0),t.resolver){const{errors:gt}=await F([h]),On=Et(n.errors,i,h),mt=Et(gt,i,On.name||h);y=mt.error,h=mt.name,L=ae(gt)}else y=(await It(b,f,m,t.shouldUseNativeValidation))[h],y?L=!1:x.isValid&&(L=await V(i,!0));b._f.deps&&Se(b._f.deps),B(h,L,y,Ze)}},Se=async(l,d={})=>{let h,b;const k=De(l);if($(!0),t.resolver){const y=await E(K(l)?l:k);h=ae(y),b=l?!k.some(L=>C(y,L)):h}else l?(b=(await Promise.all(k.map(async y=>{const L=C(i,y);return await V(L&&L._f?{[y]:L}:L)}))).every(Boolean),!(!b&&!n.isValid)&&I()):b=h=await V(i);return v.state.next({...!oe(l)||x.isValid&&h!==n.isValid?{}:{name:l},...t.resolver||!l?{isValid:h}:{},errors:n.errors,isValidating:!1}),d.shouldFocus&&!b&&nt(i,y=>y&&C(n.errors,y),l?k:o.mount),b},ct=l=>{const d={...s,...p.mount?f:{}};return K(l)?d:oe(l)?C(d,l):l.map(h=>C(d,h))},ut=(l,d)=>({invalid:!!C((d||n).errors,l),isDirty:!!C((d||n).dirtyFields,l),isTouched:!!C((d||n).touchedFields,l),error:C((d||n).errors,l)}),An=l=>{l&&De(l).forEach(d=>Y(n.errors,d)),v.state.next({errors:l?n.errors:{}})},Ln=(l,d,h)=>{const b=(C(i,l,{_f:{}})._f||{}).ref;W(n.errors,l,{...d,ref:b}),v.state.next({name:l,errors:n.errors,isValid:!1}),h&&h.shouldFocus&&b&&b.focus&&b.focus()},Rn=(l,d)=>ve(l)?v.watch.subscribe({next:h=>l(N(void 0,d),h)}):N(l,d,!0),qe=(l,d={})=>{for(const h of l?De(l):o.mount)o.mount.delete(h),o.array.delete(h),C(i,h)&&(d.keepValue||(Y(i,h),Y(f,h)),!d.keepError&&Y(n.errors,h),!d.keepDirty&&Y(n.dirtyFields,h),!d.keepTouched&&Y(n.touchedFields,h),!t.shouldUnregister&&!d.keepDefaultValue&&Y(s,h));v.watch.next({}),v.state.next({...n,...d.keepDirty?{isDirty:T()}:{}}),!d.keepIsValid&&I()},Ge=(l,d={})=>{let h=C(i,l);const b=we(d.disabled);return W(i,l,{...h||{},_f:{...h&&h._f?h._f:{ref:{name:l}},name:l,mount:!0,...d}}),o.mount.add(l),h?b&&W(f,l,d.disabled?void 0:C(f,l,Qe(h._f))):H(l,!0,d.value),{...b?{disabled:d.disabled}:{},...t.shouldUseNativeValidation?{required:!!d.required,min:Ie(d.min),max:Ie(d.max),minLength:Ie(d.minLength),maxLength:Ie(d.maxLength),pattern:Ie(d.pattern)}:{},name:l,onChange:ke,onBlur:ke,ref:k=>{if(k){Ge(l,d),h=C(i,l);const y=K(k.value)&&k.querySelectorAll&&k.querySelectorAll("input,select,textarea")[0]||k,L=wr(y),G=h._f.refs||[];if(L?G.find(z=>z===y):y===h._f.ref)return;W(i,l,{_f:{...h._f,...L?{refs:[...G.filter(Xe),y,...Array.isArray(C(s,l))?[{}]:[]],ref:{type:y.type,name:l}}:{ref:y}}}),H(l,!1,void 0,y)}else h=C(i,l,{}),h._f&&(h._f.mount=!1),(t.shouldUnregister||d.shouldUnregister)&&!(qt(o.array,l)&&p.action)&&o.unMount.add(l)}}},dt=()=>t.shouldFocusError&&nt(i,l=>l&&C(n.errors,l),o.mount),Tn=(l,d)=>async h=>{h&&(h.preventDefault&&h.preventDefault(),h.persist&&h.persist());let b=he(f);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:k,values:y}=await F();n.errors=k,b=y}else await V(i);Y(n.errors,"root"),ae(n.errors)?(v.state.next({errors:{}}),await l(b,h)):(d&&await d({...n.errors},h),dt()),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ae(n.errors),submitCount:n.submitCount+1,errors:n.errors})},Bn=(l,d={})=>{C(i,l)&&(K(d.defaultValue)?ge(l,C(s,l)):(ge(l,d.defaultValue),W(s,l,d.defaultValue)),d.keepTouched||Y(n.touchedFields,l),d.keepDirty||(Y(n.dirtyFields,l),n.isDirty=d.defaultValue?T(l,C(s,l)):T()),d.keepError||(Y(n.errors,l),x.isValid&&I()),v.state.next({...n}))},ft=(l,d={})=>{const h=l||s,b=he(h),k=l&&!ae(l)?b:s;if(d.keepDefaultValues||(s=h),!d.keepValues){if(d.keepDirtyValues||a)for(const y of o.mount)C(n.dirtyFields,y)?W(k,y,C(f,y)):ge(y,C(k,y));else{if(at&&K(l))for(const y of o.mount){const L=C(i,y);if(L&&L._f){const G=Array.isArray(L._f.refs)?L._f.refs[0]:L._f.ref;if(Oe(G)){const z=G.closest("form");if(z){z.reset();break}}}}i={}}f=e.shouldUnregister?d.keepDefaultValues?he(s):{}:b,v.array.next({values:k}),v.watch.next({values:k})}o={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!p.mount&&r(),p.mount=!x.isValid||!!d.keepIsValid,p.watch=!!e.shouldUnregister,v.state.next({submitCount:d.keepSubmitCount?n.submitCount:0,isDirty:d.keepDirty||d.keepDirtyValues?n.isDirty:!!(d.keepDefaultValues&&!me(l,s)),isSubmitted:d.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:d.keepDirty||d.keepDirtyValues?n.dirtyFields:d.keepDefaultValues&&l?Je(s,l):{},touchedFields:d.keepTouched?n.touchedFields:{},errors:d.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},ht=(l,d)=>ft(ve(l)?l(f):l,d),Dn=(l,d={})=>{const h=C(i,l),b=h&&h._f;if(b){const k=b.refs?b.refs[0]:b.ref;k.focus&&(k.focus(),d.shouldSelect&&k.select())}},Vn=l=>{n={...n,...l}};return ve(t.defaultValues)&&t.defaultValues().then(l=>{ht(l,t.resetOptions),v.state.next({isLoading:!1})}),{control:{register:Ge,unregister:qe,getFieldState:ut,_executeSchema:F,_focusError:dt,_getWatch:N,_getDirty:T,_updateValid:I,_removeUnmounted:R,_updateFieldArray:O,_getFieldArray:J,_reset:ft,_updateFormState:Vn,_subjects:v,_proxyFormState:x,get _fields(){return i},get _formValues(){return f},get _stateFlags(){return p},set _stateFlags(l){p=l},get _defaultValues(){return s},get _names(){return o},set _names(l){o=l},get _formState(){return n},set _formState(l){n=l},get _options(){return t},set _options(l){t={...t,...l}}},trigger:Se,register:Ge,handleSubmit:Tn,watch:Rn,setValue:ge,getValues:ct,reset:ht,resetField:Bn,clearErrors:An,unregister:qe,setError:Ln,setFocus:Dn,getFieldState:ut}}function Pa(e={}){const r=j.useRef(),[t,a]=j.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ve(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Sr(e,()=>a(i=>({...i}))),formState:t});const n=r.current.control;return n._options=e,it({subject:n._subjects.state,next:i=>{Kt(i,n._proxyFormState,n._updateFormState,!0)&&a({...n._formState})}}),j.useEffect(()=>{n._stateFlags.mount||(n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()}),j.useEffect(()=>{e.values&&!me(e.values,n._defaultValues)&&n._reset(e.values,n._options.resetOptions)},[e.values,n]),j.useEffect(()=>{t.submitCount&&n._focusError()},[n,t.submitCount]),r.current.formState=Gt(t,n),r.current}const Ir=u`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Er=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${S("grayBlue","04")};
`,Ar=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin-left: 22px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${S("grayBlue","01")};
`,Lr=u`
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: ${S("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;function Rr(e){return u`
    font-size: 14px;
    font-style: normal;
    font-weight: ${e?400:500};
    line-height: 22px;
  `}const Tr=u`
  margin-left: 4px;
  width: 12px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 12px;
`,Ce=e=>{var P;const{onClickItem:r,withoutTips:t,value:a,showOwner:n,currentUserRole:i,isSelf:s,inline:f,excludeUserRole:p}=e,[o,w]=g.useState(!1),_=!s&&Q(a,i,!0),{t:x}=re(),v=g.useMemo(()=>[{role:q.OWNER,tips:x("user_management.role.tips.owner"),name:x("user_management.role.owner")},{role:q.ADMIN,tips:x("user_management.role.tips.admin"),name:x("user_management.role.admin")},{role:q.EDITOR,tips:x("user_management.role.tips.editor"),name:x("user_management.role.editor")},{role:q.VIEWER,tips:x("user_management.role.tips.viewer"),name:x("user_management.role.viewer")}],[x]),A=g.useMemo(()=>(n?v:v.filter(U=>U.role!==q.OWNER)).filter(U=>!(p!=null&&p.includes(U.role))&&Q(U.role,i)),[i,p,n,v]);return c(Tt,{disabled:!_||A.length<=1,onVisibleChange:m=>{w(m)},dropList:c(Lt,{onClickItem:m=>{r==null||r(m)},children:A.map(m=>c(tt,{value:m.role,title:M("div",{css:Ir,children:[c("div",{children:m.name}),!t&&c(Rt,{zIndex:1e3,children:c(Pn,{trigger:"hover",position:"top",content:m.tips,children:c("div",{css:Er,children:c($n,{})})})}),a===m.role&&c("div",{css:Ar,children:c(Hn,{})})]})},m.role))}),position:"bottom-end",trigger:"click",children:M("div",{css:Lr,children:[c("div",{css:Rr(f),children:(P=v.find(m=>m.role===a))==null?void 0:P.name}),_&&A.length>1&&c("div",{css:Tr,children:o?c(Nn,{}):c(Wn,{})})]})})},an=(e,r,t,a,n)=>{const i={email:r,userRole:t,redirectURL:encodeURIComponent(a),hosts:window.location.origin};return _e({method:"POST",url:"/inviteByEmail",data:i},{teamID:e})},ln=(e,r,t)=>_e({method:"PATCH",url:`/teamMembers/${r}/role`,data:{userRole:t}},{teamID:e}),Br=u`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`,Dr=u`
  color: ${S("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Vr=u`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`;u`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;u`
  color: ${S("grayBlue","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;const Ur=u`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`,Mr=u`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,Or=u`
  color: ${S("grayBlue","02")};
  white-space: nowrap;
  flex: 1;
  text-overflow: ellipsis;
  margin-left: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Fr=u`
  height: 100%;
`,sn=e=>{const{excludeUserRole:r,defaultInviteUserRole:t,defaultBalance:a,teamID:n,onBalanceChange:i,redirectURL:s,currentUserRole:f,onInvitedChange:p,itemID:o}=e,w=be(),{t:_}=re(),x=ze(),{track:v}=g.useContext(Ee),[A,P]=fe(t,{defaultValue:t}),[m,U]=fe(a,{defaultValue:a}),[I,$]=g.useState([]),[O,D]=g.useState(!1),[H,ee]=g.useState([]);return M("div",{css:Br,children:[c("div",{css:Dr,children:_("user_management.modal.email.invite_title")}),M("div",{css:Vr,children:[c(jn,{saveOnBlur:!0,flexShrink:"1",readOnly:O,flexGrow:"1",value:H,onChange:B=>{ee(B)},w:"unset",colorScheme:"techPurple",validate:B=>{if(B.length===0)return!0;const F=B.length>0&&Mt.test(B);return F||w.error({content:_("user_management.modal.email.not_mail")}),F},suffix:c("div",{css:Fr,children:c(Ce,{inline:!0,currentUserRole:f,excludeUserRole:r,value:A,onClickItem:async B=>{P(B)}})})}),c(de,{ml:"8px",w:"80px",h:"32px",flexShrink:"0",disabled:H.length===0,colorScheme:S("grayBlue","02"),loading:O,onClick:async()=>{if(v==null||v(Ae.CLICK,{element:"share_modal_send",parameter5:o}),Q(q.EDITOR,A)&&m<H.length){x({modalType:"add-license",from:"invite_by_email"});return}D(!0);const B=[...I];for(let F=0;F<H.length;F++)try{const E=await an(n,H[F],A,s,window.customDomain),V=B.findIndex(T=>T.email===H[F]),R={email:H[F],userRole:A,teamMemberID:E.data.teamMemberID};V!==-1?B[V]=R:B.push(R),ee([])}catch(E){Ot(E)?E.data.errorFlag===Ft.ERROR_FLAG_EMAIL_ALREADY_USED&&w.error({content:_("user_management.modal.email.invited")}):w.error({content:_("user_management.mes.invite_fail")})}Q(q.EDITOR,A)&&(U(m-H.length),i(m-H.length)),p(B),$(B),D(!1)},children:O?void 0:_("user_management.modal.email.invite")})]}),Pt,I.length>0&&c("div",{css:Ur,children:I.map(B=>M("div",{css:Mr,children:[c($t,{name:B.email}),c("div",{css:Or,children:B.email}),c(Ce,{currentUserRole:f,value:B.userRole,onClickItem:async F=>{D(!0);try{await ln(n,B.teamMemberID,F);const E=I.findIndex(V=>V.email===B.email);if(E!=-1){const V=[...I];V[E].userRole=F,$(V),p==null||p(V)}w.success({content:_("user_management.mes.invite_suc")})}catch{w.error({content:_("user_management.mes.change_role_fail")})}finally{D(!1)}}})]},B.email))})]})};sn.displayName="InviteByEmailPC";const on=(e,r,t,a,n)=>{let i=`/inviteLink/userRole/${r}`;return t&&(i+=`?redirectURL=${encodeURIComponent(t)}`),a&&(t?i+=`&customDomain=${a}`:i+=`?customDomain=${a}`),_e({url:i,method:"GET",signal:n},{teamID:e})},cn=(e,r,t,a)=>{let n=`/inviteLink/userRole/${t}`;return r&&(n+=`?redirectURL=${encodeURIComponent(r)}`),a&&(r?n+=`&customDomain=${a}`:n+=`?customDomain=${a}`),_e({url:n,method:"GET"},{teamID:e})},un=e=>_e({method:"PATCH",url:"/configInviteLink",data:{inviteLinkEnabled:!0}},{teamID:e}),dn=e=>_e({method:"PATCH",url:"/configInviteLink",data:{inviteLinkEnabled:!1}},{teamID:e}),Pr=u`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`,$r=u`
  color: ${S("grayBlue","02")};
  flex-grow: 1;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Hr=u`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`,Nr=u`
  display: flex;
  margin-top: 8px;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`,Wr=u`
  font-size: 16px;
  cursor: pointer;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  flex-shrink: 0;
  color: ${S("grayBlue","01")};
`,jr=u`
  display: flex;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`,zr=u`
  color: ${S("grayBlue","02")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;u`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;const fn=e=>{const{excludeUserRole:r,defaultAllowInviteLink:t,defaultInviteUserRole:a,onInviteLinkStateChange:n,teamID:i,currentUserRole:s,onCopyInviteLink:f,redirectURL:p,defaultBalance:o}=e,[w,_]=fe(a,{defaultValue:a}),[x,v]=fe(t,{defaultValue:t}),A=be(),P=ze(),{t:m}=re(),[U,I]=g.useState(""),[$,O]=g.useState(!1);g.useEffect(()=>{if(!x)return;let B=new AbortController;return(async()=>{O(!0);try{const E=await on(i,w,p,window.customDomain,B.signal),V=new URL(E.data.inviteLink);Pt||(V.host=window.location.host),I(V.toString())}catch{A.error({content:m("user_management.modal.link.fail")})}finally{O(!1)}})(),()=>{B.abort()}},[s,i,x,w,A,m,p]);const D=g.useCallback(async(B,F)=>{O(!0);try{const E=await cn(B,p,F,window.customDomain);I(E.data.inviteLink)}catch{A.error({content:m("user_management.modal.link.fail")})}finally{O(!1)}_(F)},[A,p,_,m]),H=g.useCallback(async B=>{O(!0);try{await un(B),v(!0),n==null||n(!0)}catch{A.error({content:m("user_management.modal.link.turn_on_fail")})}finally{O(!1)}},[A,n,v,m]),ee=g.useCallback(async B=>{O(!0);try{await dn(B),v(!1),n==null||n(!1)}catch{A.error({content:m("user_management.modal.link.turn_off_fail")})}finally{O(!1)}},[A,n,v,m]);return rr(q.ADMIN,s,!1)&&!x?null:M("div",{css:Pr,children:[(x||!x&&Q(q.ADMIN,s))&&M("div",{css:Hr,children:[c("div",{css:$r,children:m("user_management.modal.link.invite_title")}),x&&Q(q.ADMIN,s)&&c(Tt,{trigger:"click",position:"bottom-end",dropList:M(Lt,{children:[c(tt,{value:m("user_management.modal.link.update"),title:m("user_management.modal.link.update"),onClick:async()=>{await D(i,w)}},m("user_management.modal.link.update")),c(tt,{value:m("user_management.modal.link.turn_off"),title:m("user_management.modal.link.turn_off"),onClick:async()=>{await ee(i)}},m("user_management.modal.link.turn_off"))]}),children:c("div",{css:Wr,children:c(zn,{})})})]}),x?M("div",{css:Nr,children:[c(Dt,{flexShrink:"1",flexGrow:"1",w:"unset",readOnly:!0,colorScheme:"techPurple",value:$?c(Bt,{text:{rows:1},opac:.5,animation:!0,flexGrow:"1"}):U,suffix:c(Ce,{inline:!0,currentUserRole:s,excludeUserRole:r,value:w,onClickItem:async B=>{Q(q.VIEWER,B,!1)&&o===0?P({modalType:"upgrade",from:"invite_by_link"}):await D(i,B)}})}),c(de,{ml:"8px",w:"80px",colorScheme:S("grayBlue","02"),loading:$,onClick:()=>{if(Q(q.VIEWER,w,!1)&&o===0){P({modalType:"upgrade",from:"invite_by_link"});return}const B=new URL(U);p!==""&&B.searchParams.set("redirectURL",p),f==null||f(B.href)},children:$?void 0:m("user_management.modal.link.copy")})]}):Q(q.ADMIN,s)&&M("div",{css:jr,children:[c("div",{css:zr,children:m("user_management.modal.link.description")}),c(de,{variant:"text",size:"small",loading:$,colorScheme:"techPurple",onClick:async()=>{await H(i)},children:m("user_management.modal.link.turn_on")})]})]})};fn.displayName="InviteLinkPC";u`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${S("grayBlue","09")};
`;u`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;u`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${S("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;const qr=e=>u`
  display: flex;
  position: relative;
  flex-direction: column;
  opacity: ${e?.5:1};
`,Gr=u`
  color: ${S("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  margin-bottom: 16px;
`,Kr=u`
  display: flex;
  flex-direction: row;
`,Zr=u`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`,Yr=u`
  color: ${S("grayBlue","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;function Xr(e){return u`
    color: ${e?S("techPurple","03"):S("red","03")};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin-left: 4px;
    line-height: 20px;
  `}const Jr=u`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`,Qr=u`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`,ei=u`
  color: ${S("grayBlue","02")};
  white-space: nowrap;
  flex: 1;
  text-overflow: ellipsis;
  margin-left: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,ti=u`
  height: 44px;
  font-size: 14px;
  line-height: 17px;
`,ni=u`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,hn=e=>{const{excludeUserRole:r,defaultInviteUserRole:t,defaultBalance:a,teamID:n,currentUserRole:i,redirectURL:s,onBalanceChange:f,itemID:p}=e,o=be(),w=ze(),{track:_}=g.useContext(Ee),{t:x}=re(),[v,A]=fe(t,{defaultValue:t}),[P,m]=fe(a,{defaultValue:a}),[U,I]=g.useState([]),[$,O]=g.useState(!1),[D,H]=g.useState(),ee=g.useCallback(E=>!!(E.length>0&&Mt.test(E)),[]),B=g.useCallback(async E=>{if(!D)return;if(_==null||_(Ae.CLICK,{element:"share_modal_send",parameter5:p}),E.currentTarget.blur(),Q(q.EDITOR,v)&&P===0||P<0){w({modalType:"upgrade",from:"invite_by_email"});return}if(ee(D)){if(U.find(R=>R.email===D))return o.error({content:x("user_management.modal.email.invited")})}else return o.error({content:x("user_management.modal.email.not_mail")});O(!0);const V=[...U];try{const R=await an(n,D,v,s,window.customDomain),T=V.findIndex(J=>J.email===D),N={email:D,userRole:v,teamMemberID:R.data.teamMemberID};T!==-1?V[T]=N:V.push(N),H(""),o.success({content:x("user_management.mes.invite_suc")})}catch(R){Ot(R)?R.data.errorFlag===Ft.ERROR_FLAG_EMAIL_ALREADY_USED&&o.error({content:x("user_management.modal.email.invited")}):o.error({content:x("user_management.mes.invite_fail")})}Q(q.EDITOR,v)&&(m(P-1),f(P-1)),I(V),O(!1)},[U,P,D,ee,v,p,o,f,s,m,x,n,_,w]),F=g.useCallback(async(E,V)=>{O(!0);try{await ln(n,E.teamMemberID,V);const R=U.findIndex(T=>T.email===E.email);if(R!=-1){const T=[...U];T[R].userRole=V,I(T)}o.success({content:x("user_management.mes.invite_suc")})}catch{o.error({content:x("user_management.mes.change_role_fail")})}finally{O(!1)}},[U,o,x,n]);return M("div",{css:qr($),children:[c("span",{css:Gr,children:x("user_management.modal.email.invite_title")}),c("div",{css:Kr,children:c(Dt,{flexShrink:"1",_css:ti,readOnly:$,flexGrow:"1",size:"large",variant:"fill",value:D,onChange:E=>{H(E)},onPressEnter:B,w:"unset",colorScheme:"techPurple",placeholder:x("user_management.modal.email.placeholder"),suffix:c(Ce,{inline:!0,withoutTips:!0,excludeUserRole:r,currentUserRole:i,value:v,onClickItem:async E=>{A(E)}})})}),M("div",{css:Zr,children:[c("div",{css:Yr,children:x("user_management.modal.tips.license_insufficient")}),c("div",{css:Xr(!!P&&P>0),children:P??0})]}),c("div",{css:Jr,children:U.map(E=>M("div",{css:Qr,children:[c($t,{name:E.email}),c("div",{css:ei,children:E.email}),c(Ce,{withoutTips:!0,currentUserRole:i,value:E.userRole,onClickItem:V=>F(E,V)})]},E.email))}),$&&c("div",{css:ni,children:c(qn,{colorScheme:"techPurple"})})]})};hn.displayName="InviteByEmailMobile";const ri=e=>g.createElement("svg",{width:96,height:96,viewBox:"0 0 96 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},g.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.6647 30.1503C12.8269 31.2953 6 38.8505 6 48.0002C6 57.9414 14.0589 66.0002 24 66.0002H39.0004C40.6572 66.0002 42.0004 64.6571 42.0004 63.0002C42.0004 61.3434 40.6572 60.0002 39.0004 60.0002H24C17.3726 60.0002 12 54.6277 12 48.0002C12 41.3728 17.3726 36.0002 24 36.0002H27.5146L21.6647 30.1503ZM36.5146 45.0002H33.0004C31.3435 45.0002 30.0004 46.3434 30.0004 48.0002C30.0004 49.6571 31.3435 51.0002 33.0004 51.0002H42.5146L36.5146 45.0002ZM54.038 62.5236C54.0132 62.6788 54.0004 62.838 54.0004 63.0002C54.0004 64.6571 55.3435 66.0002 57.0004 66.0002H57.5146L54.038 62.5236ZM68.9327 73.1757L22.2212 26.4642C21.0709 25.291 21.078 23.4074 22.2424 22.2429C23.414 21.0714 25.3135 21.0714 26.4851 22.2429L34.2424 30.0002H34.2426L40.0528 35.8105C40.0527 35.8105 40.0527 35.8105 40.0526 35.8105L49.2424 45.0002H49.2426L55.2426 51.0002H55.2424L64.2424 60.0002H64.2426L70.2426 66.0002H70.2424L73.1541 68.912C74.3257 70.0836 74.3257 71.9831 73.1541 73.1546C71.9896 74.3191 70.1059 74.3262 68.9327 73.1757ZM74.3352 65.8502C83.1733 64.7055 90.0004 57.1501 90.0004 48.0002C90.0004 38.0591 81.9415 30.0002 72.0004 30.0002H57.0004C55.3435 30.0002 54.0004 31.3434 54.0004 33.0002C54.0004 34.6571 55.3435 36.0002 57.0004 36.0002H72.0004C78.6278 36.0002 84.0004 41.3728 84.0004 48.0002C84.0004 54.6277 78.6278 60.0002 72.0004 60.0002H68.4852L74.3352 65.8502ZM59.4852 51.0002H63.0004C64.6572 51.0002 66.0004 49.6571 66.0004 48.0002C66.0004 46.3434 64.6572 45.0002 63.0004 45.0002H53.4852L59.4852 51.0002ZM41.9626 33.4776C41.9874 33.3222 42.0004 33.1627 42.0004 33.0002C42.0004 31.3434 40.6572 30.0002 39.0004 30.0002H38.4852L41.9626 33.4776Z",fill:"url(#paint0_linear_9725_3976)"}),g.createElement("defs",null,g.createElement("linearGradient",{id:"paint0_linear_9725_3976",x1:48.0002,y1:33.0002,x2:48.0002,y2:63.0002,gradientUnits:"userSpaceOnUse"},g.createElement("stop",{stopColor:"#654AEC"}),g.createElement("stop",{offset:1,stopColor:"#148BFA"})))),gn=e=>g.createElement("svg",{width:96,height:96,viewBox:"0 0 96 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},g.createElement("path",{d:"M39.0004 33H24C15.7157 33 9 39.7157 9 48C9 56.2843 15.7157 63 24 63H39.0004M57.0004 33H72.0004C80.2846 33 87.0003 39.7157 87.0003 48C87.0003 56.2843 80.2846 63 72.0003 63H57.0004M33.0004 48H63.0004",stroke:"url(#paint0_linear_8295_2865)",strokeWidth:6,strokeLinecap:"round"}),g.createElement("defs",null,g.createElement("linearGradient",{id:"paint0_linear_8295_2865",x1:48.0002,y1:33,x2:48.0002,y2:63,gradientUnits:"userSpaceOnUse"},g.createElement("stop",{stopColor:"#654AEC"}),g.createElement("stop",{offset:1,stopColor:"#148BFA"})))),ii=u`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  padding-bottom: 12px;
`,ai=u`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding-bottom: 32px;
  & > svg {
    width: 48px;
    height: 48px;
  }
`,li=u`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  & > svg {
    width: 48px;
    height: 48px;
  }
`,si=u`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

`,et=u`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,oi=u`
  display: flex;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${S("grayBlue","09")};
`,mn=e=>{const{excludeUserRole:r,defaultAllowInviteLink:t,defaultInviteUserRole:a,onInviteLinkStateChange:n,teamID:i,currentUserRole:s,onCopyInviteLink:f,defaultBalance:p,redirectURL:o}=e,[w,_]=fe(a,{defaultValue:a}),[x,v]=fe(t,{defaultValue:t}),A=be(),P=ze(),{t:m}=re(),[U,I]=g.useState(""),[$,O]=g.useState(!1),[D,H]=g.useState(!1);g.useEffect(()=>{if(!x)return;O(!0);let E=new AbortController;return(async()=>{try{const R=await on(i,w,o,window.customDomain,E.signal);I(R.data.inviteLink)}catch{A.error({content:m("user_management.modal.link.fail")})}finally{O(!1)}})(),()=>{E.abort()}},[s,i,x,w,A,m,o]);const ee=g.useCallback(async(E,V)=>{O(!0);try{const R=await cn(E,o,V,window.customDomain);I(R.data.inviteLink)}catch{A.error({content:m("user_management.modal.link.fail")})}finally{O(!1)}_(V)},[A,o,_,m]),B=g.useCallback(async E=>{H(!0);try{await un(E),v(!0),n==null||n(!0)}catch{A.error({content:m("user_management.modal.link.turn_on_fail")})}finally{H(!1)}},[A,n,v,m]),F=g.useCallback(async E=>{H(!0);try{await dn(E),v(!1),n==null||n(!1)}catch{A.error({content:m("user_management.modal.link.turn_off_fail")})}finally{H(!1)}},[A,n,v,m]);return c(We,{children:x?M("div",{css:ii,children:[M("div",{css:li,children:[c(gn,{}),c("div",{css:oi,children:c(Ce,{withoutTips:!0,excludeUserRole:r,currentUserRole:s,value:w,onClickItem:async E=>{Q(q.VIEWER,E,!1)&&p===0?P({modalType:"upgrade",from:"invite_by_link"}):await ee(i,E)}})})]}),M("div",{css:si,children:[c(de,{_css:et,colorScheme:"techPurple",fullWidth:!0,loading:$,disabled:D,onClick:()=>{const E=new URL(U);E.searchParams.set("redirectURL",o),f==null||f(E.href)},children:m("user_management.modal.link.copy")}),c(de,{_css:et,colorScheme:"grayBlue",variant:"text",fullWidth:!0,loading:D,disabled:$,onClick:()=>{F(i)},children:m("user_management.modal.link.turn_off")})]})]}):M("div",{css:ai,children:[c(ri,{}),c(de,{_css:et,colorScheme:"techPurple",fullWidth:!0,loading:D,disabled:$,onClick:()=>{B(i)},children:m("user_management.modal.link.turn_on")})]})})};mn.displayName="InviteLinkMobile";u`
  position: sticky;
  top: 0;
  padding-top: 12px;
  background-color: ${S("white","01")};
`;u`
  height: 70%;
  width: 100%;
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;u`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${S("grayBlue","02")};
  justify-content: flex-end;
  width: 100%;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;u`
  overflow-y: auto;
`;u`
  margin-bottom: 24px;
`;var He=(e=>(e[e.UNIT_TYPE_APP=8]="UNIT_TYPE_APP",e[e.UNIT_TYPE_AI_AGENT=29]="UNIT_TYPE_AI_AGENT",e))(He||{});const ci=e=>Ht({method:"GET",url:`/search?keyword=${e}`}),ui=e=>Ht({method:"GET",url:`/defaultHashtagsList/unitType/${e}`}),di=e=>Nt({method:"GET",url:`/apps/${e}`}),fi=e=>Nt({method:"GET",url:`/aiAgents/${e}`}),hi=u`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`,gi=u`
  display: flex;
  flex-direction: row;
`,mi=u`
  color: ${S("grayBlue","02")};
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,yi=u`
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${S("grayBlue","03")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,pi=e=>{const{productType:r,productID:t,productContributed:a,onTagChange:n}=e,{t:i}=re(),s=g.useRef(""),[f,p]=g.useState([]),[o,w]=g.useState([]),[_,x]=g.useState([]),[v,A]=g.useState(!1);g.useEffect(()=>{if(!a){p([]);return}switch(r){case He.UNIT_TYPE_APP:di(t).then(m=>{p(m.data.marketplace.hashtags)});break;case He.UNIT_TYPE_AI_AGENT:fi(t).then(m=>{p(m.data.marketplace.hashtags)});break}},[a,t,r]);const P=g.useRef(sr(async m=>{A(!0);try{const U=await ci(m);s.current===m&&x(U.data.match)}catch{}finally{A(!1)}},160));return g.useEffect(()=>{ui(r).then(m=>{w(m.data.hashtags),s.current===""&&x(m.data.hashtags)})},[r]),M("div",{css:hi,children:[c("div",{css:mi,children:i("contribute.tag.tag")}),c("div",{css:gi,children:c(Gn,{loading:v,options:_,multiple:!0,flexShrink:"1",flexGrow:"1",filterOption:(m,U)=>m===U.value?!0:_.includes(U.value.toString()),defaultFilterOption:(m,U)=>_.includes(U.value.toString()),placeholder:"Enter↵",value:f,onChange:m=>{n==null||n(m),p(m)},onInputValueChange:m=>{s.current=m,m===""?x(o):P.current(m)},colorScheme:"techPurple",labelInValue:!1,inputAsOption:!0,showSearch:!0})}),c("div",{css:yi,children:i("contribute.tag.recommended")}),o.length===0?c(Bt,{text:{rows:4},opac:.5,animation:!0}):c(Zn,{wrap:!0,children:o.map(m=>c(Kn,{clickable:!0,variant:f.includes(m)?"outline":"light",colorScheme:f.includes(m)?"techPurple":"grayBlue",onClick:()=>{if(f.includes(m))return;const U=[...f,m];p(U),n==null||n(U)},children:m},m))})]})},xi=(e,r,t)=>je({method:"POST",url:`/products/aiAgents/${r}/updatePropertyWith?property=hashtags`,data:{hashtags:t}},{teamID:e}),wi=(e,r,t)=>je({method:"POST",url:`/products/aiAgents/${r}/recontributeWith?property=hashtags`,data:{hashtags:t}},{teamID:e}),yn=e=>{const[r,t]=g.useState(!1),[a,n]=g.useState([]),{t:i}=re(),s=be();return c(Vt,{withoutLine:!0,w:"498px",closable:!0,onCancel:()=>{var f;(f=e.onClose)==null||f.call(e)},maskClosable:!1,enableOnFormTags:!1,visible:!0,hideCancel:!e.productContributed,okText:e.productContributed?i("contribute.update_modal.button"):i("contribute.first_time_modal.button"),onOk:async()=>{var f,p;t(!0);try{e.productContributed?await xi(e.teamID,e.productID,a):await wi(e.teamID,e.productID,a),(f=e.onContributed)==null||f.call(e,!0),(p=e.onClose)==null||p.call(e)}catch{s.error({content:i("user_management.modal.message.make_public_failed")})}finally{t(!1)}},okButtonProps:{colorScheme:S("grayBlue","02"),loading:r},title:e.productContributed?i("contribute.update_modal.title"):i("contribute.first_time_modal.title"),children:c(pi,{productID:e.productID,productType:e.productType,productContributed:e.productContributed,onTagChange:f=>{n(f)}})})};yn.displayName="ContributeAgentPC";function Te(e){var r=Object.entries(e).filter(function(t){var a=t[1];return a!=null}).map(function(t){var a=t[0],n=t[1];return"".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(String(n)))});return r.length>0?"?".concat(r.join("&")):""}var vi=globalThis&&globalThis.__extends||function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])},e(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function a(){this.constructor=r}r.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}}(),ue=globalThis&&globalThis.__assign||function(){return ue=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ue.apply(this,arguments)},Ci=globalThis&&globalThis.__awaiter||function(e,r,t,a){function n(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function f(w){try{o(a.next(w))}catch(_){s(_)}}function p(w){try{o(a.throw(w))}catch(_){s(_)}}function o(w){w.done?i(w.value):n(w.value).then(f,p)}o((a=a.apply(e,r||[])).next())})},bi=globalThis&&globalThis.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,n,i,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(o){return function(w){return p([o,w])}}function p(o){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,n&&(i=o[0]&2?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[o[0]&2,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return t.label++,{value:o[1],done:!1};case 5:t.label++,n=o[1],o=[0];continue;case 7:o=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){t.label=o[1];break}if(o[0]===6&&t.label<i[1]){t.label=i[1],i=o;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(o);break}i[2]&&t.ops.pop(),t.trys.pop();continue}o=r.call(e,t)}catch(w){o=[6,w],n=0}finally{a=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},pn=globalThis&&globalThis.__rest||function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},_i=function(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"},ki=function(e,r){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-r/2}},Si=function(e,r){return{top:(window.screen.height-r)/2,left:(window.screen.width-e)/2}};function Ii(e,r,t){var a=r.height,n=r.width,i=pn(r,["height","width"]),s=ue({height:a,width:n,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),f=window.open(e,"",Object.keys(s).map(function(o){return"".concat(o,"=").concat(s[o])}).join(", "));if(t)var p=window.setInterval(function(){try{(f===null||f.closed)&&(window.clearInterval(p),t(f))}catch(o){console.error(o)}},1e3);return f}var Ei=function(e){vi(r,e);function r(){var t=e!==null&&e.apply(this,arguments)||this;return t.openShareDialog=function(a){var n=t.props,i=n.onShareWindowClose,s=n.windowHeight,f=s===void 0?400:s,p=n.windowPosition,o=p===void 0?"windowCenter":p,w=n.windowWidth,_=w===void 0?550:w,x=ue({height:f,width:_},o==="windowCenter"?ki(_,f):Si(_,f));Ii(a,x,i)},t.handleClick=function(a){return Ci(t,void 0,void 0,function(){var n,i,s,f,p,o,w,_,x,v;return bi(this,function(A){switch(A.label){case 0:return n=this.props,i=n.beforeOnClick,s=n.disabled,f=n.networkLink,p=n.onClick,o=n.url,w=n.openShareDialogOnClick,_=n.opts,x=f(o,_),s?[2]:(a.preventDefault(),i?(v=i(),_i(v)?[4,v]:[3,2]):[3,2]);case 1:A.sent(),A.label=2;case 2:return w&&this.openShareDialog(x),p&&p(a,x),[2]}})})},t}return r.prototype.render=function(){var t=this.props;t.beforeOnClick;var a=t.children,n=t.className,i=t.disabled,s=t.disabledStyle,f=t.forwardedRef;t.networkLink;var p=t.networkName;t.onShareWindowClose,t.openShareDialogOnClick,t.opts;var o=t.resetButtonStyle,w=t.style;t.url,t.windowHeight,t.windowPosition,t.windowWidth;var _=pn(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"]),x=Yn("react-share__ShareButton",{"react-share__ShareButton--disabled":!!i,disabled:!!i},n),v=ue(ue(o?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},w),i&&s);return j.createElement("button",ue({},_,{"aria-label":_["aria-label"]||p,className:x,onClick:this.handleClick,ref:f,style:v}),a)},r.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},r}(g.Component);const Ai=Ei;var Ne=globalThis&&globalThis.__assign||function(){return Ne=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ne.apply(this,arguments)};function Be(e,r,t,a){function n(i,s){var f=t(i),p=Ne({},i),o=Object.keys(f);return o.forEach(function(w){delete p[w]}),j.createElement(Ai,Ne({},a,p,{forwardedRef:s,networkName:e,networkLink:r,opts:t(i)}))}return n.displayName="ShareButton-".concat(e),g.forwardRef(n)}var Li=globalThis&&globalThis.__extends||function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,n){a.__proto__=n}||function(a,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])},e(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function a(){this.constructor=r}r.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}}(),Ri=function(e){Li(r,e);function r(t){var a=e.call(this,t)||this;return a.name="AssertionError",a}return r}(Error);function ye(e,r){if(!e)throw new Ri(r)}function Ti(e,r){var t=r.quote,a=r.hashtag;return ye(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+Te({u:e,quote:t,hashtag:a})}var Bi=Be("facebook",Ti,function(e){return{quote:e.quote,hashtag:e.hashtag}},{windowWidth:550,windowHeight:400});const xn=Bi;function Di(e,r){var t=r.title,a=r.summary,n=r.source;return ye(e,"linkedin.url"),"https://linkedin.com/shareArticle"+Te({url:e,mini:"true",title:t,summary:a,source:n})}var Vi=Be("linkedin",Di,function(e){var r=e.title,t=e.summary,a=e.source;return{title:r,summary:t,source:a}},{windowWidth:750,windowHeight:600});const wn=Vi;function Ui(e,r){var t=r.title;return ye(e,"reddit.url"),"https://www.reddit.com/submit"+Te({url:e,title:t})}var Mi=Be("reddit",Ui,function(e){return{title:e.title}},{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"});const vn=Mi;function Oi(e,r){var t=r.title,a=r.via,n=r.hashtags,i=n===void 0?[]:n,s=r.related,f=s===void 0?[]:s;return ye(e,"twitter.url"),ye(Array.isArray(i),"twitter.hashtags is not an array"),ye(Array.isArray(f),"twitter.related is not an array"),"https://twitter.com/share"+Te({url:e,text:t,via:a,hashtags:i.length>0?i.join(","):void 0,related:f.length>0?f.join(","):void 0})}var Fi=Be("twitter",Oi,function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}},{windowWidth:550,windowHeight:400});const Cn=Fi;function Pi(){return/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)}function $i(e,r){var t=r.title,a=r.separator;return ye(e,"whatsapp.url"),"https://"+(Pi()?"api":"web")+".whatsapp.com/send"+Te({text:t?t+a+e:e})}var Hi=Be("whatsapp",$i,function(e){return{title:e.title,separator:e.separator||" "}},{windowWidth:550,windowHeight:400});const bn=Hi,Ni=e=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},g.createElement("g",{clipPath:"url(#clip0_10104_3860)"},g.createElement("path",{d:"M24 12.073C24 5.40405 18.6269 -0.00195312 11.9999 -0.00195312C5.36995 -0.000453125 -0.00305176 5.40405 -0.00305176 12.0745C-0.00305176 18.1 4.38595 23.095 10.1219 24.001V15.5635H7.07695V12.0745H10.1249V9.41205C10.1249 6.38655 11.9174 4.71555 14.6579 4.71555C15.9719 4.71555 17.3444 4.95105 17.3444 4.95105V7.92105H15.8309C14.3414 7.92105 13.8764 8.85255 13.8764 9.80805V12.073H17.2034L16.6724 15.562H13.8749V23.9995C19.6109 23.0935 24 18.0985 24 12.073Z",fill:"url(#paint0_linear_10104_3860)"})),g.createElement("defs",null,g.createElement("linearGradient",{id:"paint0_linear_10104_3860",x1:11.9984,y1:-.00195313,x2:11.9984,y2:24.001,gradientUnits:"userSpaceOnUse"},g.createElement("stop",{stopColor:"#17A9FD"}),g.createElement("stop",{offset:1,stopColor:"#0165E1"})),g.createElement("clipPath",{id:"clip0_10104_3860"},g.createElement("rect",{width:24,height:24,fill:"white"})))),Wi=e=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},g.createElement("g",{clipPath:"url(#clip0_10104_3855)"},g.createElement("path",{d:"M24.0002 21.8182C24.0002 23.0232 23.0234 24 21.8184 24H2.18206C0.977077 24 0.000244141 23.0232 0.000244141 21.8182V2.18182C0.000244141 0.976833 0.977078 0 2.18206 0H21.8184C23.0234 0 24.0002 0.976833 24.0002 2.18182V21.8182Z",fill:"#FF6B00"}),g.createElement("path",{d:"M11.3455 17.2364H12.6546V13.3091L16.2546 6.76367H14.88L12 12.0655L9.12003 6.76367H7.74548L11.3455 13.3091V17.2364Z",fill:"white",stroke:"white",strokeWidth:.545455})),g.createElement("defs",null,g.createElement("clipPath",{id:"clip0_10104_3855"},g.createElement("rect",{width:24,height:24,fill:"white"})))),ji=e=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},g.createElement("path",{d:"M6.05358 7.88802V21.9879H1.36794V7.88802H6.05358Z",fill:"#0A66C2"}),g.createElement("path",{d:"M6.36192 3.52634C6.36192 4.8807 5.34517 5.96186 3.71173 5.96186H3.68051C2.10757 5.96186 1.09082 4.8807 1.09082 3.52634C1.09082 2.14465 2.1388 1.09082 3.74296 1.09082C5.34712 1.09082 6.33265 2.1427 6.36192 3.52634Z",fill:"#0A66C2"}),g.createElement("path",{d:"M13.2899 14.1134V21.9879H8.60619C8.60619 21.9879 8.66473 9.21116 8.60619 7.88802H13.2899V9.88249C13.9144 8.92039 15.0287 7.55431 17.515 7.55431C20.5984 7.55431 22.909 9.5683 22.909 13.9007V21.9879H18.2234V14.4452C18.2234 12.5483 17.5462 11.2564 15.8503 11.2564C14.5545 11.2564 13.7836 12.1287 13.446 12.9698C13.3211 13.2704 13.2899 13.6919 13.2899 14.1134Z",fill:"#0A66C2"})),zi=e=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},g.createElement("g",{clipPath:"url(#clip0_10104_3846)"},g.createElement("path",{d:"M9.25049 12C8.92042 12.0004 8.60398 12.1317 8.37058 12.3651C8.13719 12.5985 8.00589 12.9149 8.00549 13.245C8.00549 13.9335 8.56349 14.505 9.25049 14.4915C9.57341 14.4803 9.87935 14.3441 10.1038 14.1117C10.3283 13.8793 10.4538 13.5689 10.4538 13.2457C10.4538 12.9226 10.3283 12.6122 10.1038 12.3798C9.87935 12.1474 9.57341 12.0112 9.25049 12ZM12.015 17.4705C12.4875 17.4705 14.1195 17.4135 14.979 16.554C15.0347 16.4905 15.0654 16.4089 15.0654 16.3245C15.0654 16.2401 15.0347 16.1585 14.979 16.095C14.9492 16.0642 14.9135 16.0398 14.8741 16.0231C14.8347 16.0064 14.7923 15.9978 14.7495 15.9978C14.7067 15.9978 14.6643 16.0064 14.6249 16.0231C14.5854 16.0398 14.5498 16.0642 14.52 16.095C13.9905 16.6395 12.831 16.8255 12.015 16.8255C11.1975 16.8255 10.053 16.6395 9.50849 16.095C9.47871 16.0642 9.44304 16.0398 9.40361 16.0231C9.36419 16.0064 9.32181 15.9978 9.27899 15.9978C9.23618 15.9978 9.1938 16.0064 9.15437 16.0231C9.11495 16.0398 9.07928 16.0642 9.04949 16.095C9.01874 16.1248 8.99428 16.1605 8.97758 16.1999C8.96088 16.2393 8.95228 16.2817 8.95228 16.3245C8.95228 16.3673 8.96088 16.4097 8.97758 16.4491C8.99428 16.4885 9.01874 16.5242 9.04949 16.554C9.89549 17.3985 11.5275 17.469 12.015 17.469V17.4705ZM13.503 13.26C13.503 13.947 14.0625 14.505 14.7495 14.505C15.4365 14.505 15.9945 13.9335 15.9945 13.26C15.9788 12.9404 15.8408 12.639 15.609 12.4184C15.3773 12.1977 15.0695 12.0746 14.7495 12.0746C14.4295 12.0746 14.1217 12.1977 13.89 12.4184C13.6582 12.639 13.5202 12.9404 13.5045 13.26H13.503Z",fill:"#FF4500"}),g.createElement("path",{d:"M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM18.258 10.2525C17.7855 10.2525 17.355 10.4385 17.04 10.74C15.8385 9.8805 14.19 9.3225 12.3585 9.2505L13.1595 5.499L15.7665 6.057C15.778 6.30042 15.8606 6.53513 16.0042 6.73203C16.1477 6.92893 16.3459 7.07936 16.5742 7.16469C16.8025 7.25001 17.0507 7.26647 17.2883 7.21203C17.5258 7.15759 17.7421 7.03464 17.9104 6.85841C18.0788 6.68219 18.1917 6.46045 18.2351 6.22067C18.2786 5.9809 18.2508 5.73363 18.1551 5.50952C18.0594 5.28542 17.9 5.09433 17.6967 4.95994C17.4934 4.82555 17.2552 4.75377 17.0115 4.7535C16.7784 4.75431 16.5502 4.82054 16.3529 4.94465C16.1557 5.06875 15.9972 5.24575 15.8955 5.4555L12.9885 4.8405C12.9494 4.83207 12.9089 4.83144 12.8696 4.83865C12.8302 4.84585 12.7926 4.86076 12.759 4.8825C12.724 4.90437 12.6942 4.93374 12.6719 4.9685C12.6496 5.00326 12.6353 5.04254 12.63 5.0835L11.742 9.2655C9.882 9.3225 8.205 9.8805 6.987 10.7535C6.672 10.4535 6.243 10.2675 5.772 10.2675C5.37256 10.2669 4.98501 10.4034 4.67412 10.6542C4.36322 10.905 4.14781 11.2549 4.06387 11.6454C3.97994 12.036 4.03256 12.4435 4.21296 12.7998C4.39335 13.1562 4.69059 13.4399 5.055 13.6035C5.025 13.776 5.0115 13.9485 5.0115 14.133C5.0115 16.8255 8.148 19.017 12.015 19.017C15.8805 19.017 19.017 16.8405 19.017 14.133C19.017 13.962 19.002 13.776 18.9735 13.6035C19.575 13.332 20.0055 12.7155 20.0055 12C20.0055 11.025 19.218 10.2525 18.258 10.2525Z",fill:"#FF4500"})),g.createElement("defs",null,g.createElement("clipPath",{id:"clip0_10104_3846"},g.createElement("rect",{width:24,height:24,fill:"white"})))),qi=e=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},g.createElement("rect",{width:24,height:24,rx:4,fill:"url(#paint0_linear_8290_2043)"}),g.createElement("path",{d:"M17.6083 6.30043C16.8714 5.55676 15.994 4.96718 15.027 4.56603C14.06 4.16489 13.0228 3.96021 11.9759 3.96392C7.58919 3.96392 4.01411 7.538 4.01009 11.9257C4.01009 13.3311 4.37774 14.6982 5.07187 15.9087L3.9458 20.0362L8.1688 18.9293C9.33706 19.565 10.6459 19.8983 11.9759 19.8986H11.98C16.3677 19.8986 19.9418 16.3245 19.9458 11.9328C19.9468 10.8861 19.7407 9.84959 19.3393 8.88293C18.938 7.91627 18.3503 7.03858 17.6083 6.30043ZM11.9759 18.5506C10.7896 18.551 9.62506 18.2317 8.60476 17.6264L8.36368 17.4817L5.85841 18.1387L6.52742 15.6947L6.37071 15.4426C5.70754 14.3881 5.3568 13.1674 5.35916 11.9217C5.35916 8.27933 8.32953 5.30796 11.98 5.30796C12.8496 5.3064 13.711 5.477 14.5144 5.80991C15.3178 6.14283 16.0474 6.63148 16.661 7.24769C17.2768 7.8615 17.765 8.59116 18.0974 9.39458C18.4298 10.198 18.5999 11.0593 18.5977 11.9288C18.5937 15.5842 15.6233 18.5506 11.9759 18.5506ZM15.6073 13.5943C15.4094 13.4948 14.432 13.0136 14.2482 12.9453C14.0653 12.88 13.9317 12.8459 13.8011 13.0448C13.6675 13.2427 13.2858 13.6937 13.1713 13.8233C13.0568 13.9569 12.9383 13.972 12.7394 13.8735C12.5415 13.7731 11.8996 13.5641 11.1402 12.8841C10.5475 12.3567 10.1507 11.7037 10.0322 11.5059C9.91767 11.307 10.0211 11.2005 10.1206 11.101C10.208 11.0126 10.3185 10.868 10.4179 10.7535C10.5184 10.639 10.5515 10.5546 10.6168 10.422C10.6821 10.2874 10.651 10.1729 10.6018 10.0734C10.5515 9.97396 10.1547 8.99254 9.98698 8.59676C9.82626 8.206 9.66252 8.26025 9.53997 8.25523C9.42546 8.24819 9.29186 8.24819 9.15826 8.24819C9.05736 8.2507 8.95808 8.27404 8.86664 8.31673C8.77519 8.35943 8.69356 8.42057 8.62686 8.49631C8.44404 8.69521 7.93274 9.17637 7.93274 10.1578C7.93274 11.1392 8.64595 12.0824 8.7464 12.216C8.84484 12.3497 10.1467 14.3577 12.1447 15.2216C12.6168 15.4275 12.9885 15.549 13.2788 15.6415C13.7559 15.7941 14.1869 15.771 14.5304 15.7218C14.9121 15.6636 15.7067 15.2397 15.8745 14.7746C16.0392 14.3085 16.0392 13.9107 15.989 13.8273C15.9398 13.7429 15.8062 13.6937 15.6073 13.5943Z",fill:"white"}),g.createElement("defs",null,g.createElement("linearGradient",{id:"paint0_linear_8290_2043",x1:12,y1:0,x2:12,y2:24,gradientUnits:"userSpaceOnUse"},g.createElement("stop",{stopColor:"#00FF68"}),g.createElement("stop",{offset:1,stopColor:"#00D523"})))),Gi=e=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},g.createElement("g",{clipPath:"url(#clip0_10030_1462)"},g.createElement("path",{d:"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",fill:"black",stroke:"white",strokeWidth:.0246577,strokeMiterlimit:10}),g.createElement("path",{d:"M5.17864 5.14282L10.8516 12.728L5.14288 18.8952H6.4278L11.4259 13.4956L15.4641 18.8952H19.8364L13.8441 10.8834L19.1578 5.14282H17.8729L13.2701 10.1155L9.55094 5.14282H5.17864ZM7.06816 6.08919H9.07677L17.9466 17.9488H15.938L7.06816 6.08919Z",fill:"white"})),g.createElement("defs",null,g.createElement("clipPath",{id:"clip0_10030_1462"},g.createElement("rect",{width:24,height:24,fill:"white"}))));var ne=(e=>(e.X="x",e.REDDIT="reddit",e.LINKEDIN="linkedin",e.HACKER_NEWS="hacker_news",e.FACEBOOK="facebook",e.WHATSAPP="whatsapp",e))(ne||{});const _n=[{platform:"x",platformName:"X",icon:c(Gi,{})},{platform:"reddit",platformName:"Reddit",icon:c(zi,{})},{platform:"linkedin",platformName:"LinkedIn",icon:c(ji,{})},{platform:"hacker_news",platformName:"Hacker News",icon:c(Wi,{})},{platform:"facebook",platformName:"Facebook",icon:c(Ni,{})},{platform:"whatsapp",platformName:"WhatsApp",icon:c(qi,{})}],Ki=u`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`,Zi=u`
  color: ${S("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,Yi=u`
  margin-top: 8px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(146px, 1fr));
`,Xi=u`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid ${S("grayBlue","08")};
  transition: all 0.2s ease-in-out;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    border: 1px solid ${S("techPurple","03")};
    background: ${S("techPurple","08")};
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  }
`,Ji=u`
  font-size: 24px;
  width: 24px;
  height: 24px;
`,Qi=u`
  margin-top: 8px;
  color: ${S("grayBlue","01")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,kn=e=>{const{title:r,shareUrl:t,onShare:a}=e,{t:n}=re();return M("div",{css:Ki,children:[c("div",{css:Zi,children:n("user_management.modal.social_media.label")}),c("div",{css:Yi,children:_n.map(i=>{const s=M("div",{css:Xi,onClick:()=>{a==null||a(i.platform)},children:[c("div",{css:Ji,children:i.icon}),c("div",{css:Qi,children:i.platformName})]},i.platform);switch(i.platform){case ne.X:return c(Cn,{url:t,title:r,children:s},i.platform);case ne.REDDIT:return c(vn,{url:t,title:r,children:s},i.platform);case ne.LINKEDIN:return c(wn,{url:t,title:r,children:s},i.platform);case ne.HACKER_NEWS:return c("div",{onClick:()=>{window.open(`https://news.ycombinator.com/submitlink?u=${t}&t=${r}`,"_blank")},children:s},i.platform);case ne.FACEBOOK:return c(xn,{url:t,title:r,children:s},i.platform);case ne.WHATSAPP:return c(bn,{url:t,title:r,children:s},i.platform);default:return null}})})]})};kn.displayName="ShareBlockPC";const ea=(e,r)=>je({method:"POST",url:`/products/aiAgents/${r}`},{teamID:e}),ta=(e,r)=>je({method:"DELETE",url:`/products/aiAgents/${r}`},{teamID:e}),na=u`
  display: flex;
  flex-direction: column;
`,ra=u`
  margin-top: 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
`,ia=u`
  color: ${S("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`,aa=u`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`,la=u`
  margin-top: 8px;
  color: ${S("grayBlue","04")};
  margin-right: 54px;
  white-space: break-spaces;
  word-break: break-all;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Sn=e=>{const{title:r,defaultAgentContributed:t,onAgentContributed:a,userRoleForThisAgent:n,agentID:i,onShare:s,onCopyAgentMarketLink:f,ownerTeamID:p}=e,[o,w]=fe(t,{defaultValue:t}),[_,x]=g.useState(!1),[v,A]=g.useState(!1),{track:P}=g.useContext(Ee),{t:m}=re(),U=be();return M(We,{children:[M("div",{css:na,children:[(Q(q.VIEWER,n,!1)||o)&&M("div",{css:ra,children:[c("div",{css:ia,children:m("user_management.modal.contribute.label")}),c("div",{style:{flexGrow:1}}),Q(q.VIEWER,n,!1)&&c(Xn,{checked:o,colorScheme:S("grayBlue","02"),onChange:async I=>{P==null||P(Ae.CLICK,{element:"share_modal_contribute_switch",parameter2:!I,parameter5:i}),w(I);try{A(!0),I?await ea(p,i):await ta(p,i),a==null||a(I)}catch{U.error({content:m("user_management.modal.message.make_public_failed")}),w(!I)}finally{A(!1)}}})]}),o?M("div",{css:aa,children:[Q(q.VIEWER,n,!1)&&c(de,{mr:"8px",flexGrow:"1",variant:"outline",colorScheme:"grayBlue",leftIcon:c(Jn,{}),onClick:()=>{x(!0)},children:m("contribute.update")}),c(de,{flexGrow:"1",variant:"outline",leftIcon:c(Qn,{}),colorScheme:"grayBlue",onClick:()=>{f==null||f(Ue(i))},children:m("user_management.modal.link.copy")})]}):c("div",{css:la,children:m("user_management.modal.contribute.desc")}),o&&c(kn,{onShare:s,title:r,shareUrl:Ue(i)})]}),_&&c(yn,{onContributed:e.onAgentContributed,teamID:p,onClose:()=>{x(!1)},productID:i,productType:He.UNIT_TYPE_AI_AGENT,productContributed:o})]})};Sn.displayName="AgentToMarketplacePC";var X=(e=>(e.SHARE_WITH_TEAM="SHARE_WITH_TEAM",e.TO_MARKETPLACE="TO_MARKETPLACE",e))(X||{});const sa=u`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${S("grayBlue","09")};
`,oa=u`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`,ca=u`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${S("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`,ua=e=>{let r=X.TO_MARKETPLACE;e.canInvite&&e.canUseBillingFeature&&q.VIEWER===e.currentUserRole?r=X.SHARE_WITH_TEAM:(Q(q.VIEWER,e.currentUserRole)||e.defaultAgentContributed)&&(r=X.TO_MARKETPLACE);const[t,a]=g.useState(e.defaultTab??r);g.useEffect(()=>{e.defaultTab!==void 0&&a(e.defaultTab)},[e.defaultTab]);const{t:n}=re(),{track:i}=g.useContext(Ee);return M(Vt,{withoutLine:!1,withoutPadding:!0,enableOnFormTags:[],w:"498px",onCancel:()=>{var s;(s=e.onClose)==null||s.call(e)},footer:!1,maskClosable:!1,visible:!0,children:[M("div",{css:sa,children:[M(er,{activeKey:t,variant:"text",colorScheme:"grayBlue",withoutBorderLine:!0,onChange:s=>{i==null||i(Ae.CLICK,{element:"share_modal_tab",parameter2:s,parameter5:e.agentID}),a(s)},children:[e.canInvite&&c(pt,{title:n("user_management.modal.tab.with_team")},X.SHARE_WITH_TEAM),(ir(e.userRoleForThisAgent,lr.AI_AGENT,e.teamPlan,ar.CREATE_AI_AGENT)||e.defaultAgentContributed)&&c(pt,{title:n("user_management.modal.title.contribute")},X.TO_MARKETPLACE)]}),c("div",{css:ca,onClick:()=>{var s;(s=e.onClose)==null||s.call(e)},children:c(Ut,{})})]}),M("div",{css:oa,children:[t===X.TO_MARKETPLACE&&e.agentID!==""&&e.agentID!==void 0&&c(Sn,{title:e.title,defaultAgentContributed:e.defaultAgentContributed,onAgentContributed:e.onAgentContributed,agentID:e.agentID,onCopyAgentMarketLink:e.onCopyAgentMarketLink,userRoleForThisAgent:e.userRoleForThisAgent,ownerTeamID:e.ownerTeamID,onShare:e.onShare}),t===X.SHARE_WITH_TEAM&&M(We,{children:[c(fn,{excludeUserRole:[],redirectURL:e.redirectURL,defaultBalance:e.defaultBalance,defaultInviteUserRole:e.defaultInviteUserRole,defaultAllowInviteLink:e.defaultAllowInviteLink,teamID:e.teamID,currentUserRole:e.currentUserRole,onInviteLinkStateChange:e.onInviteLinkStateChange,onCopyInviteLink:e.onCopyInviteLink}),c(sn,{excludeUserRole:[],redirectURL:e.redirectURL,onBalanceChange:e.onBalanceChange,defaultInviteUserRole:e.defaultInviteUserRole,teamID:e.teamID,currentUserRole:e.currentUserRole,defaultBalance:e.defaultBalance,onInvitedChange:e.onInvitedChange,itemID:e.agentID})]})]})]})};ua.displayName="ShareAgentPC";const da=u`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,fa=u`
  color: ${S("grayBlue","04")};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`,ha=u`
  width: 100%;
  display: flex;
  gap: 11px;
  justify-content: center;
  align-items: center;
`,ga=u`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 12px;
  border: 1px solid ${S("grayBlue","08")};
  flex: none;
  cursor: pointer;
  &:hover {
    border: 1px solid ${S("techPurple","03")};
    background: ${S("techPurple","08")};
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  }
`,ma=u`
  display: flex;
  flex: none;
  width: 24px;
  height: 24px;
`,In=e=>{const{title:r,shareUrl:t}=e,{t:a}=re();return M("div",{css:da,children:[c("div",{css:fa,children:a("user_management.modal.social_media.label")}),c("div",{css:ha,children:_n.map(n=>{const i=c("div",{css:ga,onClick:()=>{},children:c("div",{css:ma,children:n.icon})},n.platform);switch(n.platform){case ne.X:return c(Cn,{url:e.shareUrl,title:r,children:i},n.platform);case ne.REDDIT:return c(vn,{url:e.shareUrl,title:r,children:i},n.platform);case ne.LINKEDIN:return c(wn,{url:e.shareUrl,title:r,children:i},n.platform);case ne.HACKER_NEWS:return c("div",{onClick:()=>{window.open(`https://news.ycombinator.com/submitlink?u=${t}&t=${r}`,"_blank")},children:i},n.platform);case ne.FACEBOOK:return c(xn,{url:e.shareUrl,title:r,children:i},n.platform);case ne.WHATSAPP:return c(bn,{url:e.shareUrl,title:r,children:i},n.platform);default:return null}})})]})};In.displayName="ShareBlockMobile";const ya=u`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
`,pa=u`
  width: 48px;
  height: 48px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`,xa=u`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;u``;const wa=u`
  position: absolute;
  width: 100%;
  height: 78px;
  bottom: 48px;
`,va=u`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,En=e=>{const{title:r,onShare:t,agentID:a,onCopyAgentMarketLink:n}=e,{t:i}=re();return M("div",{css:ya,children:[c("div",{css:pa,children:c(gn,{})}),c("div",{css:va,children:c(de,{_css:xa,colorScheme:"techPurple",fullWidth:!0,onClick:()=>{n==null||n(Ue(a))},children:i("user_management.modal.link.copy")})}),c("div",{css:wa,children:c(In,{onShare:t,title:r,shareUrl:Ue(a)})})]})};En.displayName="AgentToMarketplaceMobile";const Ca=u`
  padding-top: 12px;
  width: 100%;
  flex: none;
  overflow-x: hidden;
  background-color: ${S("white","01")};
`,ba=u`
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`,_a=u`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
`,ka=u`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${S("grayBlue","02")};
  justify-content: flex-end;
  width: 100%;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`,Sa=u`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${S("grayBlue","03")};
`,At=e=>{let r;return e?r=u`
      font-weight: 500;
      color: ${S("grayBlue","02")};
    `:r=u``,u`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-radius: 4px;
    cursor: pointer;
    ${r};
  `},Ia=u`
  height: 20px;
  width: 2px;
  background-color: ${S("grayBlue","08")};
`,Ea=u`
  margin-top: 20px;
  overflow-y: auto;
`,Aa=u`
  margin-bottom: 24px;
`,La=e=>{const{onClose:r}=e;let t=X.TO_MARKETPLACE;e.defaultAgentContributed?t=X.TO_MARKETPLACE:e.canInvite&&e.canUseBillingFeature&&(t=X.SHARE_WITH_TEAM);const[a,n]=g.useState(t),{t:i}=re(),{track:s}=g.useContext(Ee),f=p=>{s==null||s(Ae.CLICK,{element:"share_modal_tab",parameter2:p,parameter5:e.agentID}),n(p)};return c(Rt,{renderInBody:!0,zIndex:1005,children:c(tr,{css:ba,w:"100%",h:"70%",placement:"bottom",maskClosable:!1,closable:!1,footer:!1,onCancel:r,visible:!0,children:M("div",{css:_a,children:[M("div",{css:Ca,children:[c("div",{css:ka,onClick:()=>{var p;(p=e.onClose)==null||p.call(e)},children:c(Ut,{size:"12"})}),M("div",{css:Sa,children:[e.canInvite&&c("div",{css:At(a===X.SHARE_WITH_TEAM),onClick:()=>f(X.SHARE_WITH_TEAM),children:i("user_management.modal.tab.with_team")}),e.canInvite&&e.canUseBillingFeature&&e.defaultAgentContributed&&c("div",{css:Ia}),e.defaultAgentContributed&&c(We,{children:c("div",{css:At(a===X.TO_MARKETPLACE),onClick:()=>f(X.TO_MARKETPLACE),children:i("user_management.modal.title.contribute")})})]})]}),M("div",{css:Ea,children:[a===X.TO_MARKETPLACE&&e.agentID!==""&&e.agentID!==void 0&&c(En,{title:e.title,agentID:e.agentID,onCopyAgentMarketLink:e.onCopyAgentMarketLink,onShare:e.onShare}),a===X.SHARE_WITH_TEAM&&M("div",{children:[c(mn,{excludeUserRole:[],redirectURL:e.redirectURL,defaultBalance:e.defaultBalance,defaultInviteUserRole:e.defaultInviteUserRole,defaultAllowInviteLink:e.defaultAllowInviteLink,teamID:e.teamID,currentUserRole:e.currentUserRole,onInviteLinkStateChange:e.onInviteLinkStateChange,onCopyInviteLink:e.onCopyInviteLink}),c(nr,{css:Aa}),c(hn,{onInvitedChange:e.onInvitedChange,excludeUserRole:[],onBalanceChange:e.onBalanceChange,defaultInviteUserRole:e.defaultInviteUserRole,teamID:e.teamID,currentUserRole:e.currentUserRole,defaultBalance:e.defaultBalance,redirectURL:e.redirectURL,itemID:e.agentID})]})]})]})})})};La.displayName="ShareAgentMobile";u`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
`;u`
  color: ${S("grayBlue","02")};
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 22px;
`;u`
  margin-left: 4px;
`;u`
  width: 100%;
  padding-top: 16px;
`;u`
  display: flex;
  flex-direction: column;
`;u`
  display: flex;
  margin-top: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: ${S("grayBlue","04")};
`;u`
  color: ${S("grayBlue","02")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;u`
  display: flex;
  gap: 8px;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;u`
  align-items: center;
  display: inline-flex;
  margin-left: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1px 7px;
  color: ${S("techPurple","03")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-transform: capitalize;
  background: ${S("techPurple","08")};
`;u`
  display: flex;
  align-items: center;
`;u`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${S("grayBlue","09")};
`;u`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;u`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${S("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;u`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
`;const Ra=u`
  width: 48px;
  height: 48px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;u`
  margin-top: 125px;
  margin-bottom: 71px;
  ${Ra};
`;u`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;u``;u`
  position: absolute;
  width: 100%;
  height: 78px;
  bottom: 48px;
`;u`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;u`
  position: sticky;
  top: 0;
  padding-top: 12px;
  background-color: ${S("white","01")};
`;u`
  width: 100%;
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;u`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${S("grayBlue","02")};
  justify-content: flex-end;
  width: 100%;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;u`
  padding-top: 60px;
`;u`
  overflow-y: auto;
`;u`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${S("grayBlue","09")};
`;u`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;u`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${S("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;u`
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${S("grayBlue","09")};
`;u`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
`;u`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${S("grayBlue","02")};
  justify-content: center;
  width: 24px;
  height: 24px;
`;u`
  position: sticky;
  top: 0;
  padding-top: 12px;
  background-color: ${S("white","01")};
`;u`
  width: 100%;
  flex: none;
  border-radius: 12px 12px 0 0;
  padding: 0 12px 0 12px;
`;u`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${S("grayBlue","02")};
  justify-content: flex-end;
  width: 100%;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;u`
  padding-top: 60px;
`;u`
  overflow-y: auto;
`;export{Fa as C,He as H,La as S,dr as a,ua as b,Oa as c,X as d,hr as e,yn as f,or as g,Pa as u};
//# sourceMappingURL=style-91620c64.js.map

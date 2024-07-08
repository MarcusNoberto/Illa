import{af as D,b8 as I,o as X,k as f,a9 as L}from"./@illa-design-1f43bb6c.js";import{r as c}from"./react-9b7e00e3.js";import{h as V,I as U}from"./utils-1cfed9ac.js";import{L as z}from"./index-2c54d160.js";import{T as H}from"./index-99007076.js";import{a as v}from"./@emotion-08a6282b.js";import{aT as N}from"./index-4dce6ee8.js";import{a as j}from"./style-49f23046.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";const b=window.devicePixelRatio,A=(n,s)=>{const i=N(n);return v`
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: ${i.paddingTop}px ${i.paddingRight}px
      ${i.paddingBottom}px ${i.paddingLeft}px;
    background-color: ${s};
  `},q=(n="left")=>{const s=j(n);return v`
    ${s};
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: ${n==="top"?"column":"row"};
    & label {
      flex: none;
    }
    position: relative;
  `},F=n=>v`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;
  pointer-events: ${n?"none":"auto"};
  cursor: ${n?"not-allowed":"auto"};
`,O=v`
  width: 100%;
  height: 100%;
  cursor: pointer;
`,G=n=>v`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${D(n)};
  font-size: 14px;
  font-weight: 500;
  transform: translate(-50%, -50%);
`,J=n=>v`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${D(n)};
  cursor: pointer;
`,K=n=>v`
  position: absolute;
  bottom: 32px;
  width: 100%;
  height: 2px;
  background-color: ${D(n)};
`,Q=(n,s="left",i=!1)=>v`
    width: 100%;
    padding-left: ${s==="top"||i?0:`calc(${n}% + 8px)`};
    position: absolute;
    bottom: 0;
  `,Y=c.forwardRef(({value:n,guideColor:s="grayBlue",penColor:i="grayBlue",text:M,disabled:P,handleUpdateSignature:T},$)=>{const[m,C]=c.useState(!1),u=c.useRef(null),[k,x]=I(),a=c.useRef(),w=c.useRef(0),l=c.useRef(0);c.useImperativeHandle($,()=>({clear:()=>d()}));const y=e=>{var t;if(e.stopPropagation(),C(!0),a.current||(a.current=(t=u.current)==null?void 0:t.getContext("2d")),!(!u.current||!a.current)){if("offsetX"in e.nativeEvent&&"offsetY"in e.nativeEvent)w.current=e.nativeEvent.offsetX,l.current=e.nativeEvent.offsetY;else{const o=e.touches[0],r=o.target;w.current=o.clientX-r.getBoundingClientRect().left,l.current=o.clientY-r.getBoundingClientRect().top}a.current.lineWidth=2*b,a.current.lineCap="round",a.current.strokeStyle=D(i),a.current.beginPath()}},R=e=>{e.stopPropagation();const t=a.current;if(!m||!t)return;let o,r;if("offsetX"in e.nativeEvent&&"offsetY"in e.nativeEvent)o=e.nativeEvent.offsetX,r=e.nativeEvent.offsetY;else{const h=e.touches[0],E=h.target;o=h.clientX-E.getBoundingClientRect().left,r=h.clientY-E.getBoundingClientRect().top}t.moveTo(w.current*b,l.current*b),t.lineTo(o*b,r*b),w.current=o,l.current=r,t.stroke()},S=e=>{var r,h;if(e.stopPropagation(),!m)return;C(!1),(r=a.current)==null||r.closePath();const t=(h=u.current)==null?void 0:h.toDataURL("image/png"),o=/^data:image\/png[^,]+base64,/;T(t,t==null?void 0:t.replace(o,""))},d=()=>{var e,t;a.current&&(a.current.clearRect(0,0,((e=u.current)==null?void 0:e.width)||0,((t=u.current)==null?void 0:t.height)||0),T())};return c.useEffect(()=>{const e=u.current,t=o=>{o.preventDefault()};return e==null||e.addEventListener("touchstart",t,{passive:!1}),()=>{e==null||e.removeEventListener("touchstart",t)}},[]),X("div",{css:F(P),ref:k,children:[!n&&!m&&f("span",{css:G(s),children:M}),f(L,{css:J(s),onClick:d,size:"16px"}),f("canvas",{ref:u,css:O,width:b*x.width,height:b*x.height,onMouseDownCapture:y,onMouseMoveCapture:R,onMouseUp:S,onMouseOut:S,onTouchStart:y,onTouchMove:R,onTouchEnd:S}),f("div",{css:K(s)})]})});Y.displayName="SignatureCanvas";const Z=n=>{const{value:s,tooltipText:i,labelWidth:M=33,labelAlign:P,validateMessage:T,labelHidden:$,labelPosition:m,label:C,hideValidationMessage:u,labelCaption:k,required:x,labelFull:a,labelWidthUnit:w,displayName:l,customRule:y,padding:R,backgroundColor:S,handleUpdateMultiExecutionResult:d,triggerEventHandler:e,updateComponentRuntimeProps:t,deleteComponentRuntimeProps:o}=n,r=c.useRef(null),h=c.useCallback(p=>{if(!u){const g=V({value:p,required:x,customRule:y});return g&&g.length>0?g:""}return""},[y,u,x]),E=c.useCallback(p=>{const g=h(p);return d([{displayName:l,value:{validateMessage:g}}]),g},[l,h,d]),B=(p,g)=>{new Promise(W=>{d([{displayName:l,value:{value:p,dataURI:g}}]),W(!0)}).then(()=>{e("change")})};return c.useEffect(()=>(t({clearValue:()=>{var p;(p=r.current)==null||p.clear(),d([{displayName:l,value:{value:void 0,dataURI:void 0}}])},validate:()=>E(s),clearValidation:()=>{d([{displayName:l,value:{validateMessage:void 0}}])},setDisabled:p=>{d([{displayName:l,value:{disabled:p}}])}}),()=>{o()}),[o,l,d,E,t,s]),f("div",{css:A(R==null?void 0:R.size,S),children:f(H,{tooltipText:i,tooltipDisabled:!i,children:X("div",{css:q(m),children:[f(z,{labelFull:a,label:C,labelAlign:P,labelWidth:M,labelCaption:k,labelWidthUnit:w,labelPosition:m,required:x,labelHidden:$,hasTooltip:!!i}),f(Y,{...n,ref:r,handleUpdateSignature:B}),!u&&f("div",{css:Q(M,m,$||!C),children:f(U,{validateMessage:T})})]})})})};Z.displayName="SignatureWidget";export{Z as SignatureWidget,Z as default};
//# sourceMappingURL=signature-ae0471e8.js.map

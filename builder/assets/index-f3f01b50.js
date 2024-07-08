import{n as _,q as yt,o as b,k as i,aX as Gt,C as Ft,B as Me,M as Zt,F as xe,s as $t,aa as Vt,av as Ht,a2 as jt,L as qt,aE as Kt,S as Xt,D as Yt,aY as Jt,aZ as Qt,a_ as en,X as tn,aR as nn,aS as rn,v as on}from"./@illa-design-1f43bb6c.js";import{u as xt,a5 as an,a as A,Y as sn,b as je,n as ln,z as cn,e as dn,B as qe,q as Re,W as pn,C as Ke,t as D,E,a6 as k,G as Te,a7 as un,a8 as hn,a9 as gn,aa as mn,N as De,$ as fn,Z as vn,X as ue,L as wn,V as yn,P as Le,d as Xe,O as xn,U as Cn,R as Ye,T as Je,a0 as bn,ab as _n,ac as Sn,ad as In,ae as Qe,af as En,a1 as An,a2 as Rn,c as Tn,a3 as Dn,a4 as et}from"./index-4dce6ee8.js";import{g as Ln,b as K,r as w,k as Pn,u as Mn,n as kn,o as Nn,h as zn,A as On}from"./react-9b7e00e3.js";import{d as tt,u as Un,a as Wn,A as X,C as Bn,R as Gn,P as Fn,b as Zn,c as $n}from"./index-e07922b0.js";import{a as p}from"./@emotion-08a6282b.js";import{u as Vn,a as Hn,d as Pe,e as jn,C as N,b as qn,c as nt,f as Kn,H as Xn}from"./style-af69883e.js";import{u as Yn}from"./hook-302a78fc.js";import{i as he}from"./lodash-lib-6e94956b.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./TableRow-dbb49295.js";import"./clsx-06f54762.js";import"./TableCell-49376b6a.js";import"./index-2fdfc937.js";import"./drive-584d85d3.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ke=function(r,o){return ke=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ke(r,o)};function Jn(r,o){ke(r,o);function e(){this.constructor=r}r.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}var L=function(){return L=Object.assign||function(o){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(o[s]=e[s])}return o},L.apply(this,arguments)},rt=!1,Y,Ne,ze,ve,we,Ct,ye,Oe,Ue,We,bt,Be,Ge,_t,St;function z(){if(!rt){rt=!0;var r=navigator.userAgent,o=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(r),e=/(Mac OS X)|(Windows)|(Linux)/.exec(r);if(Be=/\b(iPhone|iP[ao]d)/.exec(r),Ge=/\b(iP[ao]d)/.exec(r),We=/Android/i.exec(r),_t=/FBAN\/\w+;/i.exec(r),St=/Mobile/i.exec(r),bt=!!/Win64/.exec(r),o){Y=o[1]?parseFloat(o[1]):o[5]?parseFloat(o[5]):NaN,Y&&document&&document.documentMode&&(Y=document.documentMode);var t=/(?:Trident\/(\d+.\d+))/.exec(r);Ct=t?parseFloat(t[1])+4:Y,Ne=o[2]?parseFloat(o[2]):NaN,ze=o[3]?parseFloat(o[3]):NaN,ve=o[4]?parseFloat(o[4]):NaN,ve?(o=/(?:Chrome\/(\d+\.\d+))/.exec(r),we=o&&o[1]?parseFloat(o[1]):NaN):we=NaN}else Y=Ne=ze=we=ve=NaN;if(e){if(e[1]){var n=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(r);ye=n?parseFloat(n[1].replace("_",".")):!0}else ye=!1;Oe=!!e[2],Ue=!!e[3]}else ye=Oe=Ue=!1}}var Fe={ie:function(){return z()||Y},ieCompatibilityMode:function(){return z()||Ct>Y},ie64:function(){return Fe.ie()&&bt},firefox:function(){return z()||Ne},opera:function(){return z()||ze},webkit:function(){return z()||ve},safari:function(){return Fe.webkit()},chrome:function(){return z()||we},windows:function(){return z()||Oe},osx:function(){return z()||ye},linux:function(){return z()||Ue},iphone:function(){return z()||Be},mobile:function(){return z()||Be||Ge||We||St},nativeApp:function(){return z()||_t},android:function(){return z()||We},ipad:function(){return z()||Ge}},Qn=Fe,ge=!!(typeof window<"u"&&window.document&&window.document.createElement),er={canUseDOM:ge,canUseWorkers:typeof Worker<"u",canUseEventListeners:ge&&!!(window.addEventListener||window.attachEvent),canUseViewport:ge&&!!window.screen,isInWorker:!ge},tr=er,It=tr,Et;It.canUseDOM&&(Et=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function nr(r,o){if(!It.canUseDOM||o&&!("addEventListener"in document))return!1;var e="on"+r,t=e in document;if(!t){var n=document.createElement("div");n.setAttribute(e,"return;"),t=typeof n[e]=="function"}return!t&&Et&&r==="wheel"&&(t=document.implementation.hasFeature("Events.wheel","3.0")),t}var rr=nr,or=Qn,ar=rr,ot=10,at=40,it=800;function At(r){var o=0,e=0,t=0,n=0;return"detail"in r&&(e=r.detail),"wheelDelta"in r&&(e=-r.wheelDelta/120),"wheelDeltaY"in r&&(e=-r.wheelDeltaY/120),"wheelDeltaX"in r&&(o=-r.wheelDeltaX/120),"axis"in r&&r.axis===r.HORIZONTAL_AXIS&&(o=e,e=0),t=o*ot,n=e*ot,"deltaY"in r&&(n=r.deltaY),"deltaX"in r&&(t=r.deltaX),(t||n)&&r.deltaMode&&(r.deltaMode==1?(t*=at,n*=at):(t*=it,n*=it)),t&&!o&&(o=t<1?-1:1),n&&!e&&(e=n<1?-1:1),{spinX:o,spinY:e,pixelX:t,pixelY:n}}At.getEventType=function(){return or.firefox()?"DOMMouseScroll":ar("wheel")?"wheel":"mousewheel"};var ir=At,sr=ir;const lr=Ln(sr);function cr(r,o,e,t,n,s){s===void 0&&(s=0);var d=ee(r,o,s),c=d.width,m=d.height,f=Math.min(c,e),x=Math.min(m,t);return f>x*n?{width:x*n,height:x}:{width:f,height:f/n}}function dr(r){return r.width>r.height?r.width/r.naturalWidth:r.height/r.naturalHeight}function me(r,o,e,t,n){n===void 0&&(n=0);var s=ee(o.width,o.height,n),d=s.width,c=s.height;return{x:st(r.x,d,e.width,t),y:st(r.y,c,e.height,t)}}function st(r,o,e,t){var n=o*t/2-e/2;return Ce(r,-n,n)}function lt(r,o){return Math.sqrt(Math.pow(r.y-o.y,2)+Math.pow(r.x-o.x,2))}function ct(r,o){return Math.atan2(o.y-r.y,o.x-r.x)*180/Math.PI}function pr(r,o,e,t,n,s,d){s===void 0&&(s=0),d===void 0&&(d=!0);var c=d?ur:hr,m=ee(o.width,o.height,s),f=ee(o.naturalWidth,o.naturalHeight,s),x={x:c(100,((m.width-e.width/n)/2-r.x/n)/m.width*100),y:c(100,((m.height-e.height/n)/2-r.y/n)/m.height*100),width:c(100,e.width/m.width*100/n),height:c(100,e.height/m.height*100/n)},I=Math.round(c(f.width,x.width*f.width/100)),T=Math.round(c(f.height,x.height*f.height/100)),C=f.width>=f.height*t,u=C?{width:Math.round(T*t),height:T}:{width:I,height:Math.round(I/t)},g=L(L({},u),{x:Math.round(c(f.width-u.width,x.x*f.width/100)),y:Math.round(c(f.height-u.height,x.y*f.height/100))});return{croppedAreaPercentages:x,croppedAreaPixels:g}}function ur(r,o){return Math.min(r,Math.max(0,o))}function hr(r,o){return o}function gr(r,o,e,t,n,s){var d=ee(o.width,o.height,e),c=Ce(t.width/d.width*(100/r.width),n,s),m={x:c*d.width/2-t.width/2-d.width*c*(r.x/100),y:c*d.height/2-t.height/2-d.height*c*(r.y/100)};return{crop:m,zoom:c}}function mr(r,o,e){var t=dr(o);return e.height>e.width?e.height/(r.height*t):e.width/(r.width*t)}function fr(r,o,e,t,n,s){e===void 0&&(e=0);var d=ee(o.naturalWidth,o.naturalHeight,e),c=Ce(mr(r,o,t),n,s),m=t.height>t.width?t.height/r.height:t.width/r.width,f={x:((d.width-r.width)/2-r.x)*m,y:((d.height-r.height)/2-r.y)*m};return{crop:f,zoom:c}}function dt(r,o){return{x:(o.x+r.x)/2,y:(o.y+r.y)/2}}function vr(r){return r*Math.PI/180}function ee(r,o,e){var t=vr(e);return{width:Math.abs(Math.cos(t)*r)+Math.abs(Math.sin(t)*o),height:Math.abs(Math.sin(t)*r)+Math.abs(Math.cos(t)*o)}}function Ce(r,o,e){return Math.min(Math.max(r,o),e)}function fe(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return r.filter(function(e){return typeof e=="string"&&e.length>0}).join(" ").trim()}var wr=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,yr=1,xr=3,Cr=function(r){Jn(o,r);function o(){var e=r!==null&&r.apply(this,arguments)||this;return e.imageRef=K.createRef(),e.videoRef=K.createRef(),e.containerRef=null,e.styleRef=null,e.containerRect=null,e.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},e.dragStartPosition={x:0,y:0},e.dragStartCrop={x:0,y:0},e.gestureZoomStart=0,e.gestureRotationStart=0,e.isTouching=!1,e.lastPinchDistance=0,e.lastPinchRotation=0,e.rafDragTimeout=null,e.rafPinchTimeout=null,e.wheelTimer=null,e.currentDoc=typeof document<"u"?document:null,e.currentWindow=typeof window<"u"?window:null,e.resizeObserver=null,e.state={cropSize:null,hasWheelJustStarted:!1},e.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!e.containerRef)){var t=!0;e.resizeObserver=new window.ResizeObserver(function(n){if(t){t=!1;return}e.computeSizes()}),e.resizeObserver.observe(e.containerRef)}},e.preventZoomSafari=function(t){return t.preventDefault()},e.cleanEvents=function(){e.currentDoc&&(e.currentDoc.removeEventListener("mousemove",e.onMouseMove),e.currentDoc.removeEventListener("mouseup",e.onDragStopped),e.currentDoc.removeEventListener("touchmove",e.onTouchMove),e.currentDoc.removeEventListener("touchend",e.onDragStopped),e.currentDoc.removeEventListener("gesturemove",e.onGestureMove),e.currentDoc.removeEventListener("gestureend",e.onGestureEnd))},e.clearScrollEvent=function(){e.containerRef&&e.containerRef.removeEventListener("wheel",e.onWheel),e.wheelTimer&&clearTimeout(e.wheelTimer)},e.onMediaLoad=function(){var t=e.computeSizes();t&&(e.emitCropData(),e.setInitialCrop(t)),e.props.onMediaLoaded&&e.props.onMediaLoaded(e.mediaSize)},e.setInitialCrop=function(t){if(e.props.initialCroppedAreaPercentages){var n=gr(e.props.initialCroppedAreaPercentages,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),s=n.crop,d=n.zoom;e.props.onCropChange(s),e.props.onZoomChange&&e.props.onZoomChange(d)}else if(e.props.initialCroppedAreaPixels){var c=fr(e.props.initialCroppedAreaPixels,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),s=c.crop,d=c.zoom;e.props.onCropChange(s),e.props.onZoomChange&&e.props.onZoomChange(d)}},e.computeSizes=function(){var t,n,s,d,c,m,f=e.imageRef.current||e.videoRef.current;if(f&&e.containerRef){e.containerRect=e.containerRef.getBoundingClientRect();var x=e.containerRect.width/e.containerRect.height,I=((t=e.imageRef.current)===null||t===void 0?void 0:t.naturalWidth)||((n=e.videoRef.current)===null||n===void 0?void 0:n.videoWidth)||0,T=((s=e.imageRef.current)===null||s===void 0?void 0:s.naturalHeight)||((d=e.videoRef.current)===null||d===void 0?void 0:d.videoHeight)||0,C=f.offsetWidth<I||f.offsetHeight<T,u=I/T,g=void 0;if(C){var O=e.getObjectFit();switch(O){default:case"contain":g=x>u?{width:e.containerRect.height*u,height:e.containerRect.height}:{width:e.containerRect.width,height:e.containerRect.width/u};break;case"horizontal-cover":g={width:e.containerRect.width,height:e.containerRect.width/u};break;case"vertical-cover":g={width:e.containerRect.height*u,height:e.containerRect.height};break}}else g={width:f.offsetWidth,height:f.offsetHeight};e.mediaSize=L(L({},g),{naturalWidth:I,naturalHeight:T}),e.props.setMediaSize&&e.props.setMediaSize(e.mediaSize);var P=e.props.cropSize?e.props.cropSize:cr(e.mediaSize.width,e.mediaSize.height,e.containerRect.width,e.containerRect.height,e.props.aspect,e.props.rotation);return(((c=e.state.cropSize)===null||c===void 0?void 0:c.height)!==P.height||((m=e.state.cropSize)===null||m===void 0?void 0:m.width)!==P.width)&&e.props.onCropSizeChange&&e.props.onCropSizeChange(P),e.setState({cropSize:P},e.recomputeCropPosition),e.props.setCropSize&&e.props.setCropSize(P),P}},e.onMouseDown=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("mousemove",e.onMouseMove),e.currentDoc.addEventListener("mouseup",e.onDragStopped),e.onDragStart(o.getMousePoint(t)))},e.onMouseMove=function(t){return e.onDrag(o.getMousePoint(t))},e.onTouchStart=function(t){e.currentDoc&&(e.isTouching=!0,!(e.props.onTouchRequest&&!e.props.onTouchRequest(t))&&(e.currentDoc.addEventListener("touchmove",e.onTouchMove,{passive:!1}),e.currentDoc.addEventListener("touchend",e.onDragStopped),t.touches.length===2?e.onPinchStart(t):t.touches.length===1&&e.onDragStart(o.getTouchPoint(t.touches[0]))))},e.onTouchMove=function(t){t.preventDefault(),t.touches.length===2?e.onPinchMove(t):t.touches.length===1&&e.onDrag(o.getTouchPoint(t.touches[0]))},e.onGestureStart=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("gesturechange",e.onGestureMove),e.currentDoc.addEventListener("gestureend",e.onGestureEnd),e.gestureZoomStart=e.props.zoom,e.gestureRotationStart=e.props.rotation)},e.onGestureMove=function(t){if(t.preventDefault(),!e.isTouching){var n=o.getMousePoint(t),s=e.gestureZoomStart-1+t.scale;if(e.setNewZoom(s,n,{shouldUpdatePosition:!0}),e.props.onRotationChange){var d=e.gestureRotationStart+t.rotation;e.props.onRotationChange(d)}}},e.onGestureEnd=function(t){e.cleanEvents()},e.onDragStart=function(t){var n,s,d=t.x,c=t.y;e.dragStartPosition={x:d,y:c},e.dragStartCrop=L({},e.props.crop),(s=(n=e.props).onInteractionStart)===null||s===void 0||s.call(n)},e.onDrag=function(t){var n=t.x,s=t.y;e.currentWindow&&(e.rafDragTimeout&&e.currentWindow.cancelAnimationFrame(e.rafDragTimeout),e.rafDragTimeout=e.currentWindow.requestAnimationFrame(function(){if(e.state.cropSize&&!(n===void 0||s===void 0)){var d=n-e.dragStartPosition.x,c=s-e.dragStartPosition.y,m={x:e.dragStartCrop.x+d,y:e.dragStartCrop.y+c},f=e.props.restrictPosition?me(m,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):m;e.props.onCropChange(f)}}))},e.onDragStopped=function(){var t,n;e.isTouching=!1,e.cleanEvents(),e.emitCropData(),(n=(t=e.props).onInteractionEnd)===null||n===void 0||n.call(t)},e.onWheel=function(t){if(e.currentWindow&&!(e.props.onWheelRequest&&!e.props.onWheelRequest(t))){t.preventDefault();var n=o.getMousePoint(t),s=lr(t).pixelY,d=e.props.zoom-s*e.props.zoomSpeed/200;e.setNewZoom(d,n,{shouldUpdatePosition:!0}),e.state.hasWheelJustStarted||e.setState({hasWheelJustStarted:!0},function(){var c,m;return(m=(c=e.props).onInteractionStart)===null||m===void 0?void 0:m.call(c)}),e.wheelTimer&&clearTimeout(e.wheelTimer),e.wheelTimer=e.currentWindow.setTimeout(function(){return e.setState({hasWheelJustStarted:!1},function(){var c,m;return(m=(c=e.props).onInteractionEnd)===null||m===void 0?void 0:m.call(c)})},250)}},e.getPointOnContainer=function(t){var n=t.x,s=t.y;if(!e.containerRect)throw new Error("The Cropper is not mounted");return{x:e.containerRect.width/2-(n-e.containerRect.left),y:e.containerRect.height/2-(s-e.containerRect.top)}},e.getPointOnMedia=function(t){var n=t.x,s=t.y,d=e.props,c=d.crop,m=d.zoom;return{x:(n+c.x)/m,y:(s+c.y)/m}},e.setNewZoom=function(t,n,s){var d=s===void 0?{}:s,c=d.shouldUpdatePosition,m=c===void 0?!0:c;if(!(!e.state.cropSize||!e.props.onZoomChange)){var f=Ce(t,e.props.minZoom,e.props.maxZoom);if(m){var x=e.getPointOnContainer(n),I=e.getPointOnMedia(x),T={x:I.x*f-x.x,y:I.y*f-x.y},C=e.props.restrictPosition?me(T,e.mediaSize,e.state.cropSize,f,e.props.rotation):T;e.props.onCropChange(C)}e.props.onZoomChange(f)}},e.getCropData=function(){if(!e.state.cropSize)return null;var t=e.props.restrictPosition?me(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;return pr(t,e.mediaSize,e.state.cropSize,e.getAspect(),e.props.zoom,e.props.rotation,e.props.restrictPosition)},e.emitCropData=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,s=t.croppedAreaPixels;e.props.onCropComplete&&e.props.onCropComplete(n,s),e.props.onCropAreaChange&&e.props.onCropAreaChange(n,s)}},e.emitCropAreaChange=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,s=t.croppedAreaPixels;e.props.onCropAreaChange&&e.props.onCropAreaChange(n,s)}},e.recomputeCropPosition=function(){if(e.state.cropSize){var t=e.props.restrictPosition?me(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;e.props.onCropChange(t),e.emitCropData()}},e}return o.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=wr,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},o.prototype.componentWillUnmount=function(){var e,t;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((t=this.styleRef.parentNode)===null||t===void 0||t.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},o.prototype.componentDidUpdate=function(e){var t,n,s,d,c,m,f,x,I;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():((t=e.cropSize)===null||t===void 0?void 0:t.height)!==((n=this.props.cropSize)===null||n===void 0?void 0:n.height)||((s=e.cropSize)===null||s===void 0?void 0:s.width)!==((d=this.props.cropSize)===null||d===void 0?void 0:d.width)?this.computeSizes():(((c=e.crop)===null||c===void 0?void 0:c.x)!==((m=this.props.crop)===null||m===void 0?void 0:m.x)||((f=e.crop)===null||f===void 0?void 0:f.y)!==((x=this.props.crop)===null||x===void 0?void 0:x.y))&&this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&((I=this.videoRef.current)===null||I===void 0||I.load())},o.prototype.getAspect=function(){var e=this.props,t=e.cropSize,n=e.aspect;return t?t.width/t.height:n},o.prototype.getObjectFit=function(){var e,t,n,s;if(this.props.objectFit==="cover"){var d=this.imageRef.current||this.videoRef.current;if(d&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var c=this.containerRect.width/this.containerRect.height,m=((e=this.imageRef.current)===null||e===void 0?void 0:e.naturalWidth)||((t=this.videoRef.current)===null||t===void 0?void 0:t.videoWidth)||0,f=((n=this.imageRef.current)===null||n===void 0?void 0:n.naturalHeight)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoHeight)||0,x=m/f;return x<c?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},o.prototype.onPinchStart=function(e){var t=o.getTouchPoint(e.touches[0]),n=o.getTouchPoint(e.touches[1]);this.lastPinchDistance=lt(t,n),this.lastPinchRotation=ct(t,n),this.onDragStart(dt(t,n))},o.prototype.onPinchMove=function(e){var t=this;if(!(!this.currentDoc||!this.currentWindow)){var n=o.getTouchPoint(e.touches[0]),s=o.getTouchPoint(e.touches[1]),d=dt(n,s);this.onDrag(d),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var c=lt(n,s),m=t.props.zoom*(c/t.lastPinchDistance);t.setNewZoom(m,d,{shouldUpdatePosition:!1}),t.lastPinchDistance=c;var f=ct(n,s),x=t.props.rotation+(f-t.lastPinchRotation);t.props.onRotationChange&&t.props.onRotationChange(x),t.lastPinchRotation=f})}},o.prototype.render=function(){var e=this,t=this.props,n=t.image,s=t.video,d=t.mediaProps,c=t.transform,m=t.crop,f=m.x,x=m.y,I=t.rotation,T=t.zoom,C=t.cropShape,u=t.showGrid,g=t.style,O=g.containerStyle,P=g.cropAreaStyle,H=g.mediaStyle,G=t.classes,te=G.containerClassName,j=G.cropAreaClassName,U=G.mediaClassName,W=this.getObjectFit();return K.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(J){return e.containerRef=J},"data-testid":"container",style:O,className:fe("reactEasyCrop_Container",te)},n?K.createElement("img",L({alt:"",className:fe("reactEasyCrop_Image",W==="contain"&&"reactEasyCrop_Contain",W==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",W==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",U)},d,{src:n,ref:this.imageRef,style:L(L({},H),{transform:c||"translate(".concat(f,"px, ").concat(x,"px) rotate(").concat(I,"deg) scale(").concat(T,")")}),onLoad:this.onMediaLoad})):s&&K.createElement("video",L({autoPlay:!0,loop:!0,muted:!0,className:fe("reactEasyCrop_Video",W==="contain"&&"reactEasyCrop_Contain",W==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",W==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",U)},d,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:L(L({},H),{transform:c||"translate(".concat(f,"px, ").concat(x,"px) rotate(").concat(I,"deg) scale(").concat(T,")")}),controls:!1}),(Array.isArray(s)?s:[{src:s}]).map(function(B){return K.createElement("source",L({key:B.src},B))})),this.state.cropSize&&K.createElement("div",{style:L(L({},P),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:fe("reactEasyCrop_CropArea",C==="round"&&"reactEasyCrop_CropAreaRound",u&&"reactEasyCrop_CropAreaGrid",j)}))},o.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:xr,minZoom:yr,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},o.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o}(K.Component);const br=r=>w.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},w.createElement("path",{d:"M11.3216 3.52267C11.635 3.32684 11.635 2.8705 11.3216 2.67467L8.76504 1.0768C8.43201 0.868661 8.00004 1.10808 8.00004 1.5008L8.00004 4.69655C8.00004 5.08927 8.43201 5.32869 8.76504 5.12055L11.3216 3.52267Z",fill:"#1D2129"}),w.createElement("mask",{id:"path-2-inside-1_1949_926",fill:"white"},w.createElement("rect",{x:5,y:6,width:8,height:8,rx:1})),w.createElement("rect",{x:5,y:6,width:8,height:8,rx:1,stroke:"#1D2129",strokeWidth:3,mask:"url(#path-2-inside-1_1949_926)"}),w.createElement("path",{d:"M8 3.49999H6C4.34315 3.49999 3 4.84314 3 6.49999V8.49999",stroke:"#1D2129",strokeWidth:1.5,strokeLinecap:"round"})),_r=1024*500,Sr=1,pt={x:0,y:0},ut=0,ht=1,Ir={width:120,height:120},Er={width:200,height:200},Ar=r=>p`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: ${r?"default":"pointer"};
  position: relative;
`,Rr=p`
  //border: 1px solid ${_("grayBlue","08")};
  border: unset;
  padding-bottom: 24px;
  overflow: auto;
`,Tr=p`
  margin: 24px 0 16px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${_("grayBlue","02")};
`,Dr=r=>p`
  background-size: ${(r-.5)/2.5*100}% 100%;
`,Rt=p`
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 4px;
  border-radius: 2px;
  background:
    linear-gradient(
        ${_("techPurple","03")},
        ${_("techPurple","03")}
      )
      no-repeat,
    ${_("grayBlue","08")};
  background-size: 0 100%;
  width: 100%;

  &::-moz-range-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid ${_("techPurple","03")};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid ${_("techPurple","03")};
    background: ${_("white","01")};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &:hover {
    cursor: pointer;

    input[type="range"]::-webkit-slider-thumb {
      box-shadow: 0 0 0 8px rgba(63, 81, 181, 0.16);
      border-radius: 50%;
    }

    input[type="range"]::-moz-range-thumb {
      box-shadow: 0 0 0 8px rgba(63, 81, 181, 0.16);
    }
  }
`,Lr=p`
  width: 100%;
  height: 260px;
  position: relative;
  margin-bottom: 18px;

  //.cropArea {
  //  width: 120px !important;
  //  height: 120px !important;
  //}
`,Pr=p`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`,Mr=p`
  cursor: pointer;
  width: 14px;
  height: 14px;
  margin: 5px;
  position: absolute;
  top: 26px;
  right: 24px;
`,kr=p`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 0 8px;
  margin-left: 24px;
`,Nr=p`
  width: 200px;
`,zr=p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,Or=p`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`,Ur=p`
  overflow: hidden;
  border: unset;
  width: 653rem;
  min-width: 653rem;
  border-radius: 16rem;
  padding-bottom: 24rem;

  & > div {
    &:last-child {
      display: flex;
      justify-content: flex-end;
      padding: 48rem 32rem;
    }
  }
`,Wr=p`
  margin: 28rem 0;
  text-align: center;
  font-weight: 500;
  font-size: 32rem;
  line-height: 40rem;
  color: ${_("grayBlue","02")};
`,Br=p`
  width: 100%;
  height: 653rem;
  position: relative;
  margin-bottom: 36rem;
`,Gr=p`
  padding: 0 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44rem;
`,Fr=p`
  ${Rt};
  height: 8rem;
  border-radius: 4rem;

  &::-moz-range-thumb {
    border: 4rem solid ${_("techPurple","03")};
    width: 24rem;
    height: 24rem;
  }

  &::-webkit-slider-thumb {
    border: 4rem solid ${_("techPurple","03")};
    width: 24rem;
    height: 24rem;
  }
`,Zr=p`
  cursor: pointer;
  width: 32rem;
  height: 32rem;
  margin: 0 16rem;
  margin-left: 48rem;
`,$r=p`
  cursor: pointer;
  width: 21rem;
  height: 21rem;
  margin: 13.5rem;
  position: absolute;
  top: 24rem;
  right: 48rem;
`,Vr=p`
  width: 100%;
  height: 88rem;
  border-radius: 16rem;

  & > span {
    font-size: 32rem;
  }
`;function Tt(r){return r*Math.PI/180}function Hr(r,o,e){const t=Tt(e);return{width:Math.abs(Math.cos(t)*r)+Math.abs(Math.sin(t)*o),height:Math.abs(Math.sin(t)*r)+Math.abs(Math.cos(t)*o)}}const jr=r=>new Promise((o,e)=>{const t=new Image;t.addEventListener("load",()=>o(t)),t.addEventListener("error",n=>e(n)),t.setAttribute("crossOrigin","anonymous"),t.src=r});async function qr(r,o,e=0,t={horizontal:!1,vertical:!1}){const n=await jr(r),s=document.createElement("canvas"),d=s.getContext("2d");if(!d)return null;const c=Tt(e),{width:m,height:f}=Hr(n.width,n.height,e);s.width=m,s.height=f,d.translate(m/2,f/2),d.rotate(c),d.scale(t.horizontal?-1:1,t.vertical?-1:1),d.translate(-n.width/2,-n.height/2),d.drawImage(n,0,0);const x=d.getImageData(o.x,o.y,o.width,o.height);return s.width=o.width,s.height=o.height,d.putImageData(x,0,0),new Promise(I=>{s.toBlob(T=>{I(T)})})}const Kr=r=>{const{isMobile:o,onOk:e,children:t,disabled:n=!1}=r,{t:s}=xt(),d=yt(),c=w.useRef(null),m=w.useRef(null),[f,x]=w.useState(!1),[I,T]=w.useState(),[C,u]=w.useState(null),[g,O]=w.useState(!1),[P,H]=w.useState(pt),[G,te]=w.useState(o?Er:Ir),[j,U]=w.useState(ht),[W,B]=w.useState(ut),[J,be]=w.useState(),{track:R}=w.useContext(an),_e=()=>{U(ht),H(pt),B(ut)},Q=()=>{R==null||R(A.CLICK,{element:"avater_crop_close"},"team_id"),O(!1),u(null),c.current&&(c.current.value=""),_e()},Se=()=>{c.current&&c.current.click()},ie=M=>{const Z=M.target.files;if(Z){const F=Z[0];if(F.size>=_r){d.error({content:s("image_exceed")}),R==null||R(A.VALIDATE,{element:"avater_crop_save",parameter1:Math.floor(F.size/1024),parameter2:"failed"},"team_id");return}T(URL.createObjectURL(F)),u(F),O(!0),R==null||R(A.VALIDATE,{element:"avater_crop_save",parameter1:Math.floor(F.size/1024),parameter2:"suc"},"team_id")}M.target.value=""},ne=M=>{const Z=M.target.valueAsNumber;U(Z)},re=()=>{setTimeout(()=>{B(360)},200)},se=async()=>{if(R==null||R(A.CLICK,{element:"avater_crop_save"},"team_id"),f||!C||!J)return;x(!0);const M=await qr(I||"",J,W);if(M){const Z=new File([M],C.name||"image",{type:C.type||"image/*"});await e(Z)&&Q()}else console.error("Cropped Img is null"),d.error({content:s("profile.setting.message.save_fail")});x(!1)};w.useEffect(()=>{g&&(R==null||R(A.SHOW,{element:"avater_crop"},"team_id"))},[g,R]);const[le,q,Ie,oe,Ee,ce,de,pe]=w.useMemo(()=>o?[Ur,Wr,Br,Gr,Fr,Zr,$r,Vr]:[Rr,Tr,Lr,Pr,Rt,kr,Mr,Nr],[o]),Ae=w.useMemo(()=>o?{containerStyle:{width:"100%",height:"653rem"},mediaStyle:{height:"653rem"}}:{containerStyle:{width:"100%",height:260},mediaStyle:{height:260}},[o]);return b(xe,{children:[b("div",{css:Ar(n),onClick:Se,children:[t,i("input",{style:{display:"none"},ref:c,type:"file",accept:".jpg, .jpeg, .png",onChange:ie,disabled:n})]}),C&&i(Zt,{_css:le,visible:g,withoutPadding:!0,onCancel:Q,maskClosable:!1,footer:!1,children:b(Gt,{_css:zr,loading:f,colorScheme:"techPurple",children:[i("span",{css:q,children:s("image.crop.modal.title")}),i(Ft,{css:de,onClick:Q}),i("div",{css:Ie,children:i(Cr,{restrictPosition:!0,cropSize:G,setCropSize:te,style:Ae,objectFit:"vertical-cover",aspect:Sr,cropShape:"round",image:I,crop:P,minZoom:.5,maxZoom:3,zoom:j,zoomSpeed:.01,rotation:W,showGrid:!1,onCropComplete:(M,Z)=>{be(Z)},onCropChange:H,onZoomChange:U,onMediaLoaded:re})}),b("div",{css:oe,children:[b("div",{css:Or,children:[i("input",{ref:m,css:[Ee,Dr(j)],type:"range",value:j,min:.5,max:3,step:.01,"aria-labelledby":"Zoom",onChange:ne,className:"zoom-range"}),i(br,{css:ce,onClick:()=>B(W+90)})]}),i(Me,{_css:pe,colorScheme:"techPurple",onClick:se,children:s("image.crop.modal.save")})]})]})})]})},Xr=r=>w.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},w.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.5884 2.19923C13.5349 2.00244 13.2558 2.00244 13.2024 2.19923L12.8692 3.42626C12.8506 3.49476 12.7971 3.54827 12.7286 3.56687L11.5015 3.90004C11.3047 3.95348 11.3047 4.23263 11.5015 4.28607L12.7286 4.61924C12.7971 4.63784 12.8506 4.69135 12.8692 4.75985L13.2024 5.98688C13.2558 6.18367 13.5349 6.18367 13.5884 5.98688L13.9215 4.75985C13.9401 4.69135 13.9937 4.63784 14.0622 4.61924L15.2892 4.28607C15.486 4.23263 15.486 3.95348 15.2892 3.90004L14.0622 3.56687C13.9937 3.54827 13.9401 3.49476 13.9215 3.42626L13.5884 2.19923ZM6.14756 3.38392C6.09719 3.1817 5.80978 3.1817 5.75942 3.38392L4.7954 7.2544C4.77752 7.3262 4.72146 7.38225 4.64966 7.40013L0.779184 8.36415C0.576966 8.41452 0.576966 8.70193 0.779183 8.7523L4.64966 9.71631C4.72146 9.7342 4.77752 9.79025 4.7954 9.86205L5.75942 13.7325C5.80978 13.9347 6.09719 13.9347 6.14756 13.7325L7.11158 9.86205C7.12946 9.79025 7.18552 9.7342 7.25731 9.71632L11.1278 8.7523C11.33 8.70193 11.33 8.41452 11.1278 8.36415L7.25731 7.40013C7.18552 7.38225 7.12946 7.3262 7.11158 7.2544L6.14756 3.38392Z",fill:"url(#paint0_linear_8511_3215)"}),w.createElement("defs",null,w.createElement("linearGradient",{id:"paint0_linear_8511_3215",x1:1.42373,y1:8.00006,x2:16,y2:8.00006,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{stopColor:"#853DFF"}),w.createElement("stop",{offset:1,stopColor:"#E13EFF"})))),Dt=$t({title:"AILoading",viewBox:"0 0 12 12",path:b(xe,{children:[i("g",{clipPath:"url(#clip0_8958_319)",children:i("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 0.75C5.25 0.335786 5.58579 0 6 0C7.18669 0 8.34673 0.351894 9.33342 1.01118C10.3201 1.67047 11.0892 2.60754 11.5433 3.7039C11.9974 4.80026 12.1162 6.00666 11.8847 7.17054C11.6532 8.33443 11.0818 9.40353 10.2426 10.2426C9.40353 11.0818 8.33443 11.6532 7.17054 11.8847C6.00666 12.1162 4.80026 11.9974 3.7039 11.5433C2.60754 11.0892 1.67047 10.3201 1.01118 9.33342C0.351894 8.34673 0 7.18669 0 6C0 5.58579 0.335786 5.25 0.75 5.25C1.16421 5.25 1.5 5.58579 1.5 6C1.5 6.89002 1.76392 7.76004 2.25839 8.50007C2.75285 9.24009 3.45566 9.81686 4.27792 10.1575C5.10019 10.4981 6.00499 10.5872 6.87791 10.4135C7.75082 10.2399 8.55264 9.81132 9.18198 9.18198C9.81132 8.55264 10.2399 7.75082 10.4135 6.87791C10.5872 6.00499 10.4981 5.10019 10.1575 4.27792C9.81686 3.45566 9.24009 2.75285 8.50007 2.25839C7.76005 1.76392 6.89002 1.5 6 1.5C5.58579 1.5 5.25 1.16421 5.25 0.75Z",fill:"url(#paint0_angular_8958_319)"})}),b("defs",{children:[b("radialGradient",{id:"paint0_angular_8958_319",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(6 6) rotate(90) scale(6)",children:[i("stop",{offset:"0.249663",stopColor:"#E13EFF"}),i("stop",{offset:"0.49925",stopColor:"#853DFF"})]}),i("clipPath",{id:"clip0_8958_319",children:i("rect",{width:"12",height:"12",fill:"white"})})]})]})});Dt.displayName="AILoading";const Yr=p`
  font-size: 14px;
  line-height: 22px;
  color: ${_("orange","03")};
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 8px;
`,ae=({errorMessage:r})=>r?b("div",{css:Yr,children:[i(Vt,{size:"16px",mt:"4px"}),r]}):null;p`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  width: 100%;
`;p`
  display: flex;
  padding: 7px 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 2px;
  background: ${_("grayBlue","09")};
`;p`
  display: flex;
  align-items: center;
  gap: 12px;
`;p`
  width: 16px;
  height: 20px;
`;p`
  color: ${_("grayBlue","02")};
  display: inline-block;
  max-width: 364px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;p`
  display: flex;
  align-items: center;
  gap: 16px;
`;p`
  width: 16px;
  height: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;const Jr=p`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`,Qr=p`
  color: ${_("grayBlue","02")};
  font-size: 14px;
  margin-left: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,eo=p`
  height: 100%;
  width: 528px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 16px 0 rgba(0, 0, 0, 0.06);
  flex: none;
  ${sn(p`
    display: none;
  `)}
`,to=p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  overflow-y: hidden;
`,no=p`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  padding-bottom: 40px;
`,ro=p`
  position: absolute;
  background: ${_("white","03")};
  height: 100%;
  width: 100%;
  z-index: 10;
`,oo=p`
  padding: 24px;
  border-top: 1px solid ${_("grayBlue","08")};
  display: flex;
  flex-direction: row;
  align-items: center;
`,ao=p`
  cursor: pointer;
  color: ${_("grayBlue","02")};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`,io=p`
  height: 100%;
  width: 100%;
  display: flex;
  flex-grow: 1;
  overflow-x: hidden;
  flex-direction: column;
`,gt=p`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
`,mt=p`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  & svg {
    height: 100%;
    width: 100%;
  }
`,ft=p`
  margin-left: 8px;
  flex-grow: 1;
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,so=p`
  align-items: center;
  display: inline-flex;
  margin-left: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1px 7px;
  color: ${_("techPurple","03")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-transform: capitalize;
  background: ${_("techPurple","08")};
`,lo=p`
  cursor: pointer;
  background: ${_("grayBlue","09")};
  width: 100px;
  height: 100px;
  border-radius: 4px;
  display: flex;
  padding: 32px 28px 22px 29px;
  justify-content: center;
  align-items: center;
`,vt=p`
  color: ${_("grayBlue","04")};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`,co=p`
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`,po=p`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`,uo=p`
  margin-left: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  background: linear-gradient(90deg, #853dff 0%, #e13eff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;p`
  display: flex;
  align-items: center;
`;p`
  color: ${_("grayBlue","02")};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  margin-left: 16px;
  width: 34px;
  font-weight: 400;
  line-height: 22px;
  text-transform: capitalize;
`;const ho=p`
  text-decoration: none;
`,go=p`
  display: flex;
  align-items: center;
  gap: 4px;
`,mo=p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px 24px;
  text-decoration: none;
`;p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  padding: 8px 24px;
  color: ${_("grayBlue","04")};
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;p`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;p`
  width: 100%;
  height: 100%;
`;const fo=r=>{let o;return r&&(o=p`
      .cm-editor,
      .cm-editor:hover,
      .cm-editor.cm-focused {
        border-color: ${_("red","03")}!important;
      }
    `),o};p`
  margin-top: 8px;
  padding: 0 24px;
`;const wt=r=>{try{const{agentType:o,modelConfig:{},model:e}=r;return JSON.stringify({mode:o,model:e})}catch{return JSON.stringify({})}},vo=!1,Lt=()=>{var Ve,He;const r=Pn(),o=Vn({mode:"onSubmit",reValidateMode:"onSubmit",defaultValues:{...r.agent,variables:r.agent.variables.length===0?[{key:"",value:""}]:r.agent.variables}}),{control:e,handleSubmit:t,getValues:n,reset:s,clearErrors:d,setError:c,trigger:m}=o,{agentID:f,teamIdentifier:x}=Mn(),{isSubmitting:I,isDirty:T,errors:C}=Hn({control:e}),{t:u}=xt(),g=je(ln),O=yt(),P=Yn(),H=je(cn),G=dn(),[te,j]=w.useState(!1),[U,W]=w.useState(!1),[B,J]=w.useState(!1),[be,R]=w.useState(!1),[_e,Q]=w.useState(!1),[Se,ie]=w.useState(Pe.SHARE_WITH_TEAM),[ne,re]=w.useState([]),[se,le]=w.useState(!1),[q,Ie]=w.useState(),oe=qe(g==null?void 0:g.myRole,Re(g),(Ve=g==null?void 0:g.totalTeamLicense)==null?void 0:Ve.teamLicensePurchased,(He=g==null?void 0:g.totalTeamLicense)==null?void 0:He.teamLicenseAllPaid),[Ee,ce]=w.useState(!1),de=w.useCallback((a,l)=>{const v=[...l];let h=-1;return n("aiAgentID")?h=v.findIndex(y=>y.id===n("aiAgentID")):h=v.findIndex(y=>y.roomRole===tt.ANONYMOUS_AGENT),h!=-1&&(v[h].avatar=a),v},[n]),pe=w.useCallback((a,l)=>{const v=[...l];let h=-1;return n("aiAgentID")?h=v.findIndex(y=>y.id===n("aiAgentID")):h=v.findIndex(y=>y.roomRole===tt.ANONYMOUS_AGENT),h!=-1&&(v[h].nickname=a),v},[n]),Ae=w.useCallback(()=>({variables:n("variables"),model:n("model"),prompt:n("prompt"),agentType:n("agentType")}),[n]),M=jn({control:e,name:["variables","model","prompt","agentType"]}),Z=w.useMemo(()=>q===void 0?!0:!he(q.variables.filter(a=>a.key!==""&&a.value!==""),M[0].filter(a=>a.key!==""&&a.value!==""))||!he(q.model,M[1])||!he(q.prompt,M[2])||!he(q.agentType,M[3]),[q,M]);w.useEffect(()=>{const a=l=>{T&&(l.preventDefault(),l.returnValue="")};return window.addEventListener("beforeunload",a),window.addEventListener("onunload",a),()=>{window.removeEventListener("beforeunload",a),window.removeEventListener("onunload",a)}},[T]);const{sendMessage:F,generationMessage:Pt,chatMessages:Mt,reconnect:kt,connect:Nt}=Un({onStartRunning:()=>{Ie(Ae())},onConnecting:a=>{J(a)},onReceiving:a=>{le(a)},onRunning:a=>{W(a)},onSendClean:()=>{F({},ue.CLEAN,n("agentType"),"clean",!1)},onSendPrompt:()=>{F({threadID:on(),prompt:n("prompt"),variables:n("variables"),actionID:n("aiAgentID"),modelConfig:n("modelConfig"),model:n("model"),agentType:n("agentType")},ue.RUN,n("agentType"),"chat",!1)},onUpdateRoomUsers:a=>{let l=de(n("icon"),a);l=pe(n("name"),a),re(l)}}),zt=()=>{const a=Tn(window.customDomain);return document.referrer.includes(a)?location.href=`${a}/workspace/${x}/ai-agents`:document.referrer.includes({}.ILLA_MARKET_URL)&&f?location.href=`${{}.ILLA_MARKET_URL}/ai-agent/${f}/detail`:location.href=a},V=a=>{const l=document.querySelector(`[data-scroll-id=${a}]`);setTimeout(()=>{l==null||l.scrollIntoView({behavior:"smooth",block:"center"})},30)},Ze=async a=>{var h;let l={...a};!Te(l.model)&&((h=l.knowledge)==null?void 0:h.length)>0&&(l={...l,knowledge:[]}),D(A.CLICK,E.AI_AGENT_EDIT,{element:"save",parameter1:wt(l),parameter5:l.aiAgentID||"-1"});let v;try{let y=l.icon;if(l.icon!==void 0&&l.icon!==""){const S=new URL(l.icon);S.protocol!=="http:"&&S.protocol!=="https:"&&(y=await _n(l.icon))}if(l.aiAgentID===void 0||l.aiAgentID===""){const S=await Sn({...l,icon:y,variables:l.variables.filter($=>$.key!==""&&$.value!=="")});In("create_agent",H.userID),G(Qe.addTeamAIAgentReducer({aiAgent:S.data})),s({...S.data,variables:S.data.variables.length===0?[{key:"",value:""}]:S.data.variables}),v=S.data}else{const S=await En(l.aiAgentID,{...l,icon:y,variables:a.variables.filter($=>$.key!==""&&$.value!=="")});G(Qe.modifyTeamAIAgentReducer({aiAgentID:S.data.aiAgentID,modifiedProps:S.data})),s({...S.data,variables:S.data.variables.length===0?[{key:"",value:""}]:S.data.variables}),v=S.data}return O.success({content:u("dashboard.message.create-suc")}),v}catch{O.error({content:u("dashboard.message.create-failed")})}},$e=async()=>{await m();let a=!0;return C.prompt?(V(k.PROMPT),a=!1):C.knowledge?(V(k.KNOWLEDGE),a=!1):C.variables?(V(k.VARIABLES),a=!1):C.name?(V(k.NAME),a=!1):C.description?(V(k.DESCRIPTION),a=!1):C.icon&&(V(k.ICON),a=!1),a},Ot=async()=>{if(await $e())try{ce(!0);const l=await Ze(n());if(l){const v=l.variables.map(Bt=>Bt.key),{appInfo:h,variableKeyMapInputNodeDisplayName:y}=Zn(v),S=await An({appName:"Untitled app",initScheme:h}),$=$n(l,y);await Rn(S.data.appId,$),window.open(`${Xe(window.customDomain)}/${x}/app/${S.data.appId}`,"_blank")}}catch{O.error({content:u("create_fail")})}finally{ce(!1)}},Ut=()=>{if(d(),n("prompt"))if(n("variables").every(a=>a.key===""&&a.value===""||a.key!==""&&a.value!=="")){if(Array.isArray(n("knowledge"))&&n("knowledge").length>0&&n("knowledge").some(a=>a.value===""))return c("variables",{type:"knowledge",message:u("dashboard.message.parsing_file_in_prog")}),V(k.KNOWLEDGE),!1}else return c("variables",{type:"validate",message:u("editor.ai-agent.validation_blank.variable_value")}),V(k.VARIABLES),!1;else return c("prompt",{type:"required",message:u("editor.ai-agent.validation_blank.prompt")}),V(k.PROMPT),!1;return!0},Wt=async()=>{if(Ut()){if(Te(n("model"))&&!oe){P({modalType:"agent",from:"agent_run_gpt4"});return}D(A.CLICK,E.AI_AGENT_EDIT,{element:U?"restart":"start",parameter1:wt(n()),parameter5:n("aiAgentID")||"-1"}),U?await kt(n("aiAgentID"),n("agentType")):await Nt(n("aiAgentID"),n("agentType"))}};return b(xe,{children:[i(pn,{children:i("title",{children:f?r.agent.name:u("new_dashboard.button.blank-agent")})}),b(Wn.Provider,{value:{inRoomUsers:ne},children:[b("div",{css:Jr,children:[b("div",{css:eo,children:[b("div",{css:to,children:[b("div",{css:mo,children:[b("div",{css:ao,onClick:zt,children:[i(Ht,{fs:"16px"}),i("span",{css:Qr,children:u("editor.ai-agent.title")})]}),i(qt,{href:"https://docs.illacloud.com/ai-agent",target:"__blank",colorScheme:"techPurple",hoverable:!1,css:ho,children:b("span",{css:go,children:[i(jt,{size:"16"}),i("span",{children:u("editor.ai-agent.doc")})]})})]}),b("div",{css:no,children:[i(N,{name:"agentType",control:e,shouldUnregister:!1,render:({field:a})=>i(X,{title:u("editor.ai-agent.label.mode"),tips:u("editor.ai-agent.tips.mode"),required:!0,children:i(Kt,{colorScheme:_("grayBlue","02"),w:"100%",value:a.value,type:"button",forceEqualWidth:!0,options:[{value:Ke.CHAT,label:u("editor.ai-agent.option.mode.chat")},{value:Ke.TEXT_GENERATION,label:u("editor.ai-agent.option.mode.text")}],onChange:l=>{if(se||B){O.info({content:u("editor.ai-agent.message.generating")});return}D(A.CLICK,E.AI_AGENT_EDIT,{element:"mode_radio_button",parameter1:l,parameter5:r.agent.aiAgentID||"-1"}),a.onChange(l)}})})}),i(N,{name:"prompt",control:e,rules:{required:u("editor.ai-agent.validation_blank.prompt")},shouldUnregister:!1,render:({field:a})=>i(X,{title:"Prompt",required:!0,scrollId:k.PROMPT,children:i(N,{name:"variables",control:e,render:({field:l})=>{var v,h;return b("div",{children:[i(Bn,{...a,css:fo(!!C.prompt),placeholder:u("editor.ai-agent.placeholder.prompt"),minHeight:"200px",completionOptions:l.value}),((v=C.prompt)==null?void 0:v.message)&&i(ae,{errorMessage:(h=C.prompt)==null?void 0:h.message})]})}})})}),i(N,{name:"variables",control:e,rules:{validate:a=>{const l=a.every(v=>v.key===""&&v.value===""||v.key!==""&&v.value!=="");return l||u("Please ensure that both the key and value are either empty or not empty.")}},shouldUnregister:!1,render:({field:a})=>{var l,v;return b(X,{title:u("editor.ai-agent.label.variable"),scrollId:k.VARIABLES,children:[i(Gn,{records:a.value,onAdd:()=>{a.onChange([...a.value,{key:"",value:""}])},onChangeKey:(h,y)=>{const S=[...a.value];S[h].key=y,a.onChange(S)},onChangeValue:(h,y,S)=>{const $=[...a.value];$[h].value=S,a.onChange($)},onDelete:h=>{const y=[...a.value];y.splice(h,1),y.length===0&&y.push({key:"",value:""}),a.onChange(y)},label:""}),((l=C.variables)==null?void 0:l.message)&&i(ae,{errorMessage:(v=C.variables)==null?void 0:v.message})]})}}),vo,i(N,{name:"model",control:e,rules:{required:!0},shouldUnregister:!1,render:({field:a})=>i(X,{title:u("editor.ai-agent.label.model"),required:!0,children:i(Xt,{...a,onClick:()=>{D(A.CLICK,E.AI_AGENT_EDIT,{element:"model",parameter1:a.value,parameter5:r.agent.aiAgentID||"-1"})},onChange:l=>{if(D(A.CHANGE,E.AI_AGENT_EDIT,{element:"model",parameter1:l,parameter5:r.agent.aiAgentID||"-1"}),Te(l)&&!oe){P({modalType:"agent",from:"agent_edit_gpt4"});return}a.onChange(l)},colorScheme:"techPurple",options:[...un.map(l=>({label:b("div",{css:gt,children:[i("span",{css:mt,children:l.logo}),i("span",{css:ft,children:l.name})]}),value:l.value})),...hn.map(l=>({label:b("div",{css:gt,children:[i("span",{css:mt,children:l.logo}),i("span",{css:ft,children:l.name}),!oe&&b("div",{css:so,children:[i(gn,{}),i("div",{style:{marginLeft:4},children:"Premium"})]})]}),value:l.value}))]})})}),i(Yt,{mt:"8px",text:u("editor.ai-agent.group.information"),colorScheme:"grayBlue"}),i(N,{name:"name",control:e,rules:{required:u("editor.ai-agent.validation_blank.name")},shouldUnregister:!1,render:({field:a})=>{var l,v;return b(X,{title:u("editor.ai-agent.label.name"),required:!0,scrollId:k.NAME,children:[i(Jt,{...a,placeholder:u("editor.ai-agent.placeholder.name"),colorScheme:"techPurple",error:!!C.name,maxLength:60,onChange:h=>{a.onChange(h),re(pe(h,ne))}}),((l=C.name)==null?void 0:l.message)&&i(ae,{errorMessage:(v=C.name)==null?void 0:v.message})]})}}),i(N,{name:"description",control:e,rules:{required:u("editor.ai-agent.validation_blank.description"),maxLength:{value:160,message:u("editor.ai-agent.length_invalid.description")}},shouldUnregister:!1,render:({field:a})=>{var l,v;return b(X,{title:u("editor.ai-agent.label.desc"),subtitleTips:u("editor.ai-agent.generate-desc.tooltips"),required:!0,scrollId:k.DESCRIPTION,subtitle:b("div",{css:po,onClick:async()=>{D(A.CLICK,E.AI_AGENT_EDIT,{element:"desc_generate",parameter1:!!n("prompt"),parameter5:r.agent.aiAgentID||"-1"});const h=performance.now();if(!n("prompt")){O.error({content:u("editor.ai-agent.generate-desc.blank")});return}j(!0);try{const y=await mn(n("prompt"));D(A.REQUEST,E.AI_AGENT_EDIT,{element:"desc_generate",consume:performance.now()-h,parameter2:"suc"}),a.onChange(y.data.payload)}catch{D(A.REQUEST,E.AI_AGENT_EDIT,{element:"desc_generate",consume:performance.now()-h,parameter2:"failed"}),O.error({content:u("editor.ai-agent.generate-desc.failed")})}finally{j(!1)}},children:[te?i(Dt,{spin:!0,size:"12px"}):i(Xr,{}),i("div",{css:uo,children:u("editor.ai-agent.generate-desc.button")})]}),children:[i(Qt,{...a,minH:"120px",showWordLimit:!0,error:!!C.description,maxLength:160,placeholder:u("editor.ai-agent.placeholder.desc"),colorScheme:"techPurple"}),((l=C.description)==null?void 0:l.message)&&i(ae,{errorMessage:(v=C.description)==null?void 0:v.message})]})}}),i(N,{name:"icon",control:e,rules:{required:u("editor.ai-agent.validation_blank.icon")},shouldUnregister:!1,render:({field:a})=>{var l,v;return b(X,{title:u("editor.ai-agent.label.icon"),required:!0,scrollId:k.ICON,children:[i(De,{basicTrack:D,pageName:E.AI_AGENT_EDIT,children:i(Kr,{onOk:async h=>{let y=new FileReader;return y.onload=()=>{a.onChange(y.result),re(de(y.result,ne))},y.readAsDataURL(h),!0},children:i("div",{onClick:()=>{D(A.CLICK,E.AI_AGENT_EDIT,{element:"avater"})},children:a.value?i(tn,{src:a.value,css:vt,width:"100px",height:"100px"}):i("div",{children:i("div",{css:lo,children:b("div",{css:vt,children:[i(en,{c:_("grayBlue","03")}),i("div",{css:co,children:u("editor.ai-agent.placeholder.icon")})]})})})})})}),((l=C.icon)==null?void 0:l.message)&&i(ae,{errorMessage:(v=C.icon)==null?void 0:v.message})]})}})]}),(B||I)&&i("div",{css:ro})]}),i("form",{onSubmit:t(Ze),children:b("div",{css:oo,children:[i(Me,{flex:"1",size:"large",type:"button",loading:B,colorScheme:"grayBlue",leftIcon:U?i(nn,{}):i(rn,{}),onClick:Wt,children:u(U?"editor.ai-agent.restart":"editor.ai-agent.start")}),i(Me,{id:"save-button",flex:"1",ml:"8px",onClick:$e,colorScheme:_("grayBlue","02"),size:"large",loading:I,children:u("editor.ai-agent.save")})]})})]}),i(N,{name:"agentType",control:e,shouldUnregister:!1,render:({field:a})=>i(N,{name:"aiAgentID",control:e,render:({field:l})=>i(N,{render:({field:v})=>i("div",{css:io,children:i(De,{basicTrack:D,pageName:E.AI_AGENT_EDIT,children:i(Fn,{showShareDialog:fn(g),showContributeDialog:vn(g,g.myRole,v.value),showEditPanel:!1,isRunning:U,isConnecting:B,hasCreated:!!l.value,isMobile:!1,model:n("model"),editState:"EDIT",agentType:a.value,chatMessages:Mt,generationMessage:Pt,isReceiving:se,blockInput:!U||Z,onSendMessage:(h,y)=>{D(A.CLICK,E.AI_AGENT_EDIT,{element:"send",parameter5:n("aiAgentID")||"-1"}),F({threadID:h.threadID,prompt:h.message,variables:[],actionID:n("aiAgentID"),modelConfig:n("modelConfig"),model:n("model"),agentType:n("agentType")},ue.RUN,y,"chat",!0,h)},onCancelReceiving:()=>{F({},ue.STOP_ALL,a.value,"stop_all",!1),le(!1)},onShowShareDialog:()=>{ie(Pe.SHARE_WITH_TEAM),R(!0),D(A.SHOW,E.AI_AGENT_EDIT,{element:"share_modal",parameter5:r.agent.aiAgentID})},onShowContributeDialog:()=>{if(v.value)ie(Pe.TO_MARKETPLACE),R(!0),D(A.SHOW,E.AI_AGENT_EDIT,{element:"share_modal",parameter5:r.agent.aiAgentID});else{if(!wn(g,g.myRole,v.value)){P({modalType:"upgrade",from:"agent_edit_contribute"});return}Q(!0)}},onClickCreateApp:Ot})})}),name:"publishedToMarketplace",control:e})})})]}),i(N,{control:e,name:"aiAgentID",render:({field:a})=>i(N,{control:e,name:"name",render:({field:l})=>i(N,{control:e,name:"publishedToMarketplace",render:({field:v})=>b(De,{basicTrack:D,pageName:E.AI_AGENT_EDIT,children:[be&&i(qn,{itemID:a.value,onInvitedChange:h=>{const y=h.map(S=>({...S,userID:"",nickname:"",avatar:"",userStatus:yn.PENDING,permission:{},createdAt:"",updatedAt:""}));G(Le.updateInvitedUserReducer(y))},canUseBillingFeature:qe(g.myRole,Re(g),g.totalTeamLicense.teamLicensePurchased,g.totalTeamLicense.teamLicenseAllPaid),title:u("user_management.modal.social_media.default_text.agent",{agentName:l.value}),redirectURL:`${Xe(window.customDomain)}/${g.identifier}/ai-agent/${a.value}`,onClose:()=>{R(!1)},canInvite:xn(g.myRole,g.permission.allowEditorManageTeamMember,g.permission.allowViewerManageTeamMember),defaultTab:Se,defaultInviteUserRole:Cn.VIEWER,teamID:g.id,currentUserRole:g.myRole,defaultBalance:g.currentTeamLicense.balance,defaultAllowInviteLink:g.permission.inviteLinkEnabled,onInviteLinkStateChange:h=>{G(Le.updateTeamMemberPermissionReducer({teamID:g.id,newPermission:{...g.permission,inviteLinkEnabled:h}}))},agentID:a.value,defaultAgentContributed:v.value,onAgentContributed:h=>{if(v.onChange(h),h){const y=new URL(Ye(a.value));y.searchParams.set("token",Je()),window.open(y,"_blank")}},onCopyInviteLink:h=>{D(A.CLICK,E.AI_AGENT_EDIT,{element:"share_modal_copy_team",parameter5:a.value}),nt(u("user_management.modal.custom_copy_text_agent_invite",{userName:H.nickname,teamName:g.name,inviteLink:h}))},onCopyAgentMarketLink:h=>{D(A.CLICK,E.AI_AGENT_EDIT,{element:"share_modal_link",parameter5:a.value}),nt(u("user_management.modal.contribute.default_text.agent",{agentName:l.value,agentLink:h}))},userRoleForThisAgent:g.myRole,ownerTeamID:g.id,onBalanceChange:h=>{G(Le.updateTeamMemberSubscribeReducer({teamID:g.id,subscribeInfo:{...g.currentTeamLicense,balance:h}}))},teamPlan:Re(g),onShare:h=>{D(A.CLICK,E.AI_AGENT_EDIT,{element:"share_modal_social_media",parameter4:h,parameter5:a.value})}}),_e&&i(Kn,{onContributed:h=>{if(v.onChange(h),h){const y=new URL(Ye(a.value));y.searchParams.set("token",Je()),window.open(y,"_blank")}},teamID:g.id,onClose:()=>{Q(!1)},productID:a.value,productType:Xn.UNIT_TYPE_AI_AGENT,productContributed:v.value})]})})})}),Ee&&i(bn,{hasMask:!0})]})]})};Lt.displayName="AIAgent";const wo=()=>{const r=kn();return w.useEffect(()=>(D(A.VISIT,E.AI_AGENT_EDIT),Dn(),()=>{et(E.AI_AGENT_EDIT)}),[]),Nn(()=>{et(E.AI_AGENT_EDIT)}),i(On,{resolve:r.data,errorElement:i(xe,{children:zn("404")}),children:i(Lt,{})})};wo.displayName="AIAgentRun";export{wo as AIAgentDefer,wo as default};
//# sourceMappingURL=index-f3f01b50.js.map

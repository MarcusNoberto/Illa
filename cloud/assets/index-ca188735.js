import{ae as lt,a3 as Me,af as ht,F as U,M as pt,u as de,g as ue,J as p,K as v,A as De,ac as dt,S as ut,N as mt,ag as gt,Q as ft}from"./index-eddc38d4.js";import{L as vt}from"./index-6de9b86f.js";import{f as g,l as S,N as Ae,q as Z,k as P,ao as wt,C as yt,B as Q,E as xt,F as Ct,g as B,h as j,ap as bt,a9 as K,aq as St}from"./@illa-design-df878cb8.js";import{g as _t,b as D,r as u}from"./react-bc846394.js";import{C as Le,u as Rt}from"./index.esm-11ba4214.js";import{T as Te,a as Et}from"./index-ce55d952.js";import{I as $}from"./interface-8df5fe4c.js";import{S as Pt}from"./index-7907b7a5.js";import{e as f}from"./@emotion-28b7fe46.js";import{H as zt}from"./index-6a44f0ff.js";const Mt=(r,o)=>{const e=r.split("?")[0];return new Promise(async(t,n)=>{try{await lt.put(r,o,{headers:{"Content-Type":"multipart/form-data","x-amz-acl":"public-read"}}),t(e)}catch(i){n(i)}})},Dt=async r=>{const o=ht();try{return(await Me({url:`/users/avatar/uploadAddress/fileName/${o}.${r}`,method:"GET"})).data}catch(e){throw e}},At=r=>new Promise(async(o,e)=>{try{const t=r.type.split("/")[1],n=await Dt(t);if(n){const i=await Mt(n.uploadAddress,r);o(i)}}catch(t){e(t)}}),Lt=async r=>{try{return await Me({url:"/users/avatar",method:"PATCH",data:{avatar:r}})}catch(o){throw o}};/*! *****************************************************************************
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
***************************************************************************** */var re=function(r,o){return re=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},re(r,o)};function Tt(r,o){re(r,o);function e(){this.constructor=r}r.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}var y=function(){return y=Object.assign||function(o){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i])}return o},y.apply(this,arguments)},me=!1,L,ne,ie,Y,q,Ie,J,ae,se,ce,Ne,le,he,We,Oe;function b(){if(!me){me=!0;var r=navigator.userAgent,o=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(r),e=/(Mac OS X)|(Windows)|(Linux)/.exec(r);if(le=/\b(iPhone|iP[ao]d)/.exec(r),he=/\b(iP[ao]d)/.exec(r),ce=/Android/i.exec(r),We=/FBAN\/\w+;/i.exec(r),Oe=/Mobile/i.exec(r),Ne=!!/Win64/.exec(r),o){L=o[1]?parseFloat(o[1]):o[5]?parseFloat(o[5]):NaN,L&&document&&document.documentMode&&(L=document.documentMode);var t=/(?:Trident\/(\d+.\d+))/.exec(r);Ie=t?parseFloat(t[1])+4:L,ne=o[2]?parseFloat(o[2]):NaN,ie=o[3]?parseFloat(o[3]):NaN,Y=o[4]?parseFloat(o[4]):NaN,Y?(o=/(?:Chrome\/(\d+\.\d+))/.exec(r),q=o&&o[1]?parseFloat(o[1]):NaN):q=NaN}else L=ne=ie=q=Y=NaN;if(e){if(e[1]){var n=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(r);J=n?parseFloat(n[1].replace("_",".")):!0}else J=!1;ae=!!e[2],se=!!e[3]}else J=ae=se=!1}}var pe={ie:function(){return b()||L},ieCompatibilityMode:function(){return b()||Ie>L},ie64:function(){return pe.ie()&&Ne},firefox:function(){return b()||ne},opera:function(){return b()||ie},webkit:function(){return b()||Y},safari:function(){return pe.webkit()},chrome:function(){return b()||q},windows:function(){return b()||ae},osx:function(){return b()||J},linux:function(){return b()||se},iphone:function(){return b()||le},mobile:function(){return b()||le||he||ce||Oe},nativeApp:function(){return b()||We},android:function(){return b()||ce},ipad:function(){return b()||he}},It=pe,G=!!(typeof window<"u"&&window.document&&window.document.createElement),Nt={canUseDOM:G,canUseWorkers:typeof Worker<"u",canUseEventListeners:G&&!!(window.addEventListener||window.attachEvent),canUseViewport:G&&!!window.screen,isInWorker:!G},Wt=Nt,Fe=Wt,ke;Fe.canUseDOM&&(ke=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function Ot(r,o){if(!Fe.canUseDOM||o&&!("addEventListener"in document))return!1;var e="on"+r,t=e in document;if(!t){var n=document.createElement("div");n.setAttribute(e,"return;"),t=typeof n[e]=="function"}return!t&&ke&&r==="wheel"&&(t=document.implementation.hasFeature("Events.wheel","3.0")),t}var Ft=Ot,kt=It,Zt=Ft,ge=10,fe=40,ve=800;function Ze(r){var o=0,e=0,t=0,n=0;return"detail"in r&&(e=r.detail),"wheelDelta"in r&&(e=-r.wheelDelta/120),"wheelDeltaY"in r&&(e=-r.wheelDeltaY/120),"wheelDeltaX"in r&&(o=-r.wheelDeltaX/120),"axis"in r&&r.axis===r.HORIZONTAL_AXIS&&(o=e,e=0),t=o*ge,n=e*ge,"deltaY"in r&&(n=r.deltaY),"deltaX"in r&&(t=r.deltaX),(t||n)&&r.deltaMode&&(r.deltaMode==1?(t*=fe,n*=fe):(t*=ve,n*=ve)),t&&!o&&(o=t<1?-1:1),n&&!e&&(e=n<1?-1:1),{spinX:o,spinY:e,pixelX:t,pixelY:n}}Ze.getEventType=function(){return kt.firefox()?"DOMMouseScroll":Zt("wheel")?"wheel":"mousewheel"};var $t=Ze,Ut=$t;const Bt=_t(Ut);function jt(r,o,e,t,n,i){i===void 0&&(i=0);var a=W(r,o,i),c=a.width,s=a.height,h=Math.min(c,e),l=Math.min(s,t);return h>l*n?{width:l*n,height:l}:{width:h,height:h/n}}function Ht(r){return r.width>r.height?r.width/r.naturalWidth:r.height/r.naturalHeight}function V(r,o,e,t,n){n===void 0&&(n=0);var i=W(o.width,o.height,n),a=i.width,c=i.height;return{x:we(r.x,a,e.width,t),y:we(r.y,c,e.height,t)}}function we(r,o,e,t){var n=o*t/2-e/2;return ee(r,-n,n)}function ye(r,o){return Math.sqrt(Math.pow(r.y-o.y,2)+Math.pow(r.x-o.x,2))}function xe(r,o){return Math.atan2(o.y-r.y,o.x-r.x)*180/Math.PI}function Gt(r,o,e,t,n,i,a){i===void 0&&(i=0),a===void 0&&(a=!0);var c=a?Vt:Xt,s=W(o.width,o.height,i),h=W(o.naturalWidth,o.naturalHeight,i),l={x:c(100,((s.width-e.width/n)/2-r.x/n)/s.width*100),y:c(100,((s.height-e.height/n)/2-r.y/n)/s.height*100),width:c(100,e.width/s.width*100/n),height:c(100,e.height/s.height*100/n)},d=Math.round(c(h.width,l.width*h.width/100)),m=Math.round(c(h.height,l.height*h.height/100)),_=h.width>=h.height*t,C=_?{width:Math.round(m*t),height:m}:{width:d,height:Math.round(d/t)},x=y(y({},C),{x:Math.round(c(h.width-C.width,l.x*h.width/100)),y:Math.round(c(h.height-C.height,l.y*h.height/100))});return{croppedAreaPercentages:l,croppedAreaPixels:x}}function Vt(r,o){return Math.min(r,Math.max(0,o))}function Xt(r,o){return o}function Yt(r,o,e,t,n,i){var a=W(o.width,o.height,e),c=ee(t.width/a.width*(100/r.width),n,i),s={x:c*a.width/2-t.width/2-a.width*c*(r.x/100),y:c*a.height/2-t.height/2-a.height*c*(r.y/100)};return{crop:s,zoom:c}}function qt(r,o,e){var t=Ht(o);return e.height>e.width?e.height/(r.height*t):e.width/(r.width*t)}function Jt(r,o,e,t,n,i){e===void 0&&(e=0);var a=W(o.naturalWidth,o.naturalHeight,e),c=ee(qt(r,o,t),n,i),s=t.height>t.width?t.height/r.height:t.width/r.width,h={x:((a.width-r.width)/2-r.x)*s,y:((a.height-r.height)/2-r.y)*s};return{crop:h,zoom:c}}function Ce(r,o){return{x:(o.x+r.x)/2,y:(o.y+r.y)/2}}function Kt(r){return r*Math.PI/180}function W(r,o,e){var t=Kt(e);return{width:Math.abs(Math.cos(t)*r)+Math.abs(Math.sin(t)*o),height:Math.abs(Math.sin(t)*r)+Math.abs(Math.cos(t)*o)}}function ee(r,o,e){return Math.min(Math.max(r,o),e)}function X(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return r.filter(function(e){return typeof e=="string"&&e.length>0}).join(" ").trim()}var Qt=`.reactEasyCrop_Container {
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
`,eo=1,to=3,oo=function(r){Tt(o,r);function o(){var e=r!==null&&r.apply(this,arguments)||this;return e.imageRef=D.createRef(),e.videoRef=D.createRef(),e.containerRef=null,e.styleRef=null,e.containerRect=null,e.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},e.dragStartPosition={x:0,y:0},e.dragStartCrop={x:0,y:0},e.gestureZoomStart=0,e.gestureRotationStart=0,e.isTouching=!1,e.lastPinchDistance=0,e.lastPinchRotation=0,e.rafDragTimeout=null,e.rafPinchTimeout=null,e.wheelTimer=null,e.currentDoc=typeof document<"u"?document:null,e.currentWindow=typeof window<"u"?window:null,e.resizeObserver=null,e.state={cropSize:null,hasWheelJustStarted:!1},e.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!e.containerRef)){var t=!0;e.resizeObserver=new window.ResizeObserver(function(n){if(t){t=!1;return}e.computeSizes()}),e.resizeObserver.observe(e.containerRef)}},e.preventZoomSafari=function(t){return t.preventDefault()},e.cleanEvents=function(){e.currentDoc&&(e.currentDoc.removeEventListener("mousemove",e.onMouseMove),e.currentDoc.removeEventListener("mouseup",e.onDragStopped),e.currentDoc.removeEventListener("touchmove",e.onTouchMove),e.currentDoc.removeEventListener("touchend",e.onDragStopped),e.currentDoc.removeEventListener("gesturemove",e.onGestureMove),e.currentDoc.removeEventListener("gestureend",e.onGestureEnd))},e.clearScrollEvent=function(){e.containerRef&&e.containerRef.removeEventListener("wheel",e.onWheel),e.wheelTimer&&clearTimeout(e.wheelTimer)},e.onMediaLoad=function(){var t=e.computeSizes();t&&(e.emitCropData(),e.setInitialCrop(t)),e.props.onMediaLoaded&&e.props.onMediaLoaded(e.mediaSize)},e.setInitialCrop=function(t){if(e.props.initialCroppedAreaPercentages){var n=Yt(e.props.initialCroppedAreaPercentages,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=n.crop,a=n.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(a)}else if(e.props.initialCroppedAreaPixels){var c=Jt(e.props.initialCroppedAreaPixels,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=c.crop,a=c.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(a)}},e.computeSizes=function(){var t,n,i,a,c,s,h=e.imageRef.current||e.videoRef.current;if(h&&e.containerRef){e.containerRect=e.containerRef.getBoundingClientRect();var l=e.containerRect.width/e.containerRect.height,d=((t=e.imageRef.current)===null||t===void 0?void 0:t.naturalWidth)||((n=e.videoRef.current)===null||n===void 0?void 0:n.videoWidth)||0,m=((i=e.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((a=e.videoRef.current)===null||a===void 0?void 0:a.videoHeight)||0,_=h.offsetWidth<d||h.offsetHeight<m,C=d/m,x=void 0;if(_){var T=e.getObjectFit();switch(T){default:case"contain":x=l>C?{width:e.containerRect.height*C,height:e.containerRect.height}:{width:e.containerRect.width,height:e.containerRect.width/C};break;case"horizontal-cover":x={width:e.containerRect.width,height:e.containerRect.width/C};break;case"vertical-cover":x={width:e.containerRect.height*C,height:e.containerRect.height};break}}else x={width:h.offsetWidth,height:h.offsetHeight};e.mediaSize=y(y({},x),{naturalWidth:d,naturalHeight:m}),e.props.setMediaSize&&e.props.setMediaSize(e.mediaSize);var R=e.props.cropSize?e.props.cropSize:jt(e.mediaSize.width,e.mediaSize.height,e.containerRect.width,e.containerRect.height,e.props.aspect,e.props.rotation);return(((c=e.state.cropSize)===null||c===void 0?void 0:c.height)!==R.height||((s=e.state.cropSize)===null||s===void 0?void 0:s.width)!==R.width)&&e.props.onCropSizeChange&&e.props.onCropSizeChange(R),e.setState({cropSize:R},e.recomputeCropPosition),e.props.setCropSize&&e.props.setCropSize(R),R}},e.onMouseDown=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("mousemove",e.onMouseMove),e.currentDoc.addEventListener("mouseup",e.onDragStopped),e.onDragStart(o.getMousePoint(t)))},e.onMouseMove=function(t){return e.onDrag(o.getMousePoint(t))},e.onTouchStart=function(t){e.currentDoc&&(e.isTouching=!0,!(e.props.onTouchRequest&&!e.props.onTouchRequest(t))&&(e.currentDoc.addEventListener("touchmove",e.onTouchMove,{passive:!1}),e.currentDoc.addEventListener("touchend",e.onDragStopped),t.touches.length===2?e.onPinchStart(t):t.touches.length===1&&e.onDragStart(o.getTouchPoint(t.touches[0]))))},e.onTouchMove=function(t){t.preventDefault(),t.touches.length===2?e.onPinchMove(t):t.touches.length===1&&e.onDrag(o.getTouchPoint(t.touches[0]))},e.onGestureStart=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("gesturechange",e.onGestureMove),e.currentDoc.addEventListener("gestureend",e.onGestureEnd),e.gestureZoomStart=e.props.zoom,e.gestureRotationStart=e.props.rotation)},e.onGestureMove=function(t){if(t.preventDefault(),!e.isTouching){var n=o.getMousePoint(t),i=e.gestureZoomStart-1+t.scale;if(e.setNewZoom(i,n,{shouldUpdatePosition:!0}),e.props.onRotationChange){var a=e.gestureRotationStart+t.rotation;e.props.onRotationChange(a)}}},e.onGestureEnd=function(t){e.cleanEvents()},e.onDragStart=function(t){var n,i,a=t.x,c=t.y;e.dragStartPosition={x:a,y:c},e.dragStartCrop=y({},e.props.crop),(i=(n=e.props).onInteractionStart)===null||i===void 0||i.call(n)},e.onDrag=function(t){var n=t.x,i=t.y;e.currentWindow&&(e.rafDragTimeout&&e.currentWindow.cancelAnimationFrame(e.rafDragTimeout),e.rafDragTimeout=e.currentWindow.requestAnimationFrame(function(){if(e.state.cropSize&&!(n===void 0||i===void 0)){var a=n-e.dragStartPosition.x,c=i-e.dragStartPosition.y,s={x:e.dragStartCrop.x+a,y:e.dragStartCrop.y+c},h=e.props.restrictPosition?V(s,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):s;e.props.onCropChange(h)}}))},e.onDragStopped=function(){var t,n;e.isTouching=!1,e.cleanEvents(),e.emitCropData(),(n=(t=e.props).onInteractionEnd)===null||n===void 0||n.call(t)},e.onWheel=function(t){if(e.currentWindow&&!(e.props.onWheelRequest&&!e.props.onWheelRequest(t))){t.preventDefault();var n=o.getMousePoint(t),i=Bt(t).pixelY,a=e.props.zoom-i*e.props.zoomSpeed/200;e.setNewZoom(a,n,{shouldUpdatePosition:!0}),e.state.hasWheelJustStarted||e.setState({hasWheelJustStarted:!0},function(){var c,s;return(s=(c=e.props).onInteractionStart)===null||s===void 0?void 0:s.call(c)}),e.wheelTimer&&clearTimeout(e.wheelTimer),e.wheelTimer=e.currentWindow.setTimeout(function(){return e.setState({hasWheelJustStarted:!1},function(){var c,s;return(s=(c=e.props).onInteractionEnd)===null||s===void 0?void 0:s.call(c)})},250)}},e.getPointOnContainer=function(t){var n=t.x,i=t.y;if(!e.containerRect)throw new Error("The Cropper is not mounted");return{x:e.containerRect.width/2-(n-e.containerRect.left),y:e.containerRect.height/2-(i-e.containerRect.top)}},e.getPointOnMedia=function(t){var n=t.x,i=t.y,a=e.props,c=a.crop,s=a.zoom;return{x:(n+c.x)/s,y:(i+c.y)/s}},e.setNewZoom=function(t,n,i){var a=i===void 0?{}:i,c=a.shouldUpdatePosition,s=c===void 0?!0:c;if(!(!e.state.cropSize||!e.props.onZoomChange)){var h=ee(t,e.props.minZoom,e.props.maxZoom);if(s){var l=e.getPointOnContainer(n),d=e.getPointOnMedia(l),m={x:d.x*h-l.x,y:d.y*h-l.y},_=e.props.restrictPosition?V(m,e.mediaSize,e.state.cropSize,h,e.props.rotation):m;e.props.onCropChange(_)}e.props.onZoomChange(h)}},e.getCropData=function(){if(!e.state.cropSize)return null;var t=e.props.restrictPosition?V(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;return Gt(t,e.mediaSize,e.state.cropSize,e.getAspect(),e.props.zoom,e.props.rotation,e.props.restrictPosition)},e.emitCropData=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropComplete&&e.props.onCropComplete(n,i),e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.emitCropAreaChange=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.recomputeCropPosition=function(){if(e.state.cropSize){var t=e.props.restrictPosition?V(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;e.props.onCropChange(t),e.emitCropData()}},e}return o.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=Qt,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},o.prototype.componentWillUnmount=function(){var e,t;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((t=this.styleRef.parentNode)===null||t===void 0||t.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},o.prototype.componentDidUpdate=function(e){var t,n,i,a,c,s,h,l,d;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():((t=e.cropSize)===null||t===void 0?void 0:t.height)!==((n=this.props.cropSize)===null||n===void 0?void 0:n.height)||((i=e.cropSize)===null||i===void 0?void 0:i.width)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.width)?this.computeSizes():(((c=e.crop)===null||c===void 0?void 0:c.x)!==((s=this.props.crop)===null||s===void 0?void 0:s.x)||((h=e.crop)===null||h===void 0?void 0:h.y)!==((l=this.props.crop)===null||l===void 0?void 0:l.y))&&this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&((d=this.videoRef.current)===null||d===void 0||d.load())},o.prototype.getAspect=function(){var e=this.props,t=e.cropSize,n=e.aspect;return t?t.width/t.height:n},o.prototype.getObjectFit=function(){var e,t,n,i;if(this.props.objectFit==="cover"){var a=this.imageRef.current||this.videoRef.current;if(a&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var c=this.containerRect.width/this.containerRect.height,s=((e=this.imageRef.current)===null||e===void 0?void 0:e.naturalWidth)||((t=this.videoRef.current)===null||t===void 0?void 0:t.videoWidth)||0,h=((n=this.imageRef.current)===null||n===void 0?void 0:n.naturalHeight)||((i=this.videoRef.current)===null||i===void 0?void 0:i.videoHeight)||0,l=s/h;return l<c?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},o.prototype.onPinchStart=function(e){var t=o.getTouchPoint(e.touches[0]),n=o.getTouchPoint(e.touches[1]);this.lastPinchDistance=ye(t,n),this.lastPinchRotation=xe(t,n),this.onDragStart(Ce(t,n))},o.prototype.onPinchMove=function(e){var t=this;if(!(!this.currentDoc||!this.currentWindow)){var n=o.getTouchPoint(e.touches[0]),i=o.getTouchPoint(e.touches[1]),a=Ce(n,i);this.onDrag(a),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var c=ye(n,i),s=t.props.zoom*(c/t.lastPinchDistance);t.setNewZoom(s,a,{shouldUpdatePosition:!1}),t.lastPinchDistance=c;var h=xe(n,i),l=t.props.rotation+(h-t.lastPinchRotation);t.props.onRotationChange&&t.props.onRotationChange(l),t.lastPinchRotation=h})}},o.prototype.render=function(){var e=this,t=this.props,n=t.image,i=t.video,a=t.mediaProps,c=t.transform,s=t.crop,h=s.x,l=s.y,d=t.rotation,m=t.zoom,_=t.cropShape,C=t.showGrid,x=t.style,T=x.containerStyle,R=x.cropAreaStyle,O=x.mediaStyle,F=t.classes,te=F.containerClassName,k=F.cropAreaClassName,I=F.mediaClassName,E=this.getObjectFit();return D.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(H){return e.containerRef=H},"data-testid":"container",style:T,className:X("reactEasyCrop_Container",te)},n?D.createElement("img",y({alt:"",className:X("reactEasyCrop_Image",E==="contain"&&"reactEasyCrop_Contain",E==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",E==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",I)},a,{src:n,ref:this.imageRef,style:y(y({},O),{transform:c||"translate(".concat(h,"px, ").concat(l,"px) rotate(").concat(d,"deg) scale(").concat(m,")")}),onLoad:this.onMediaLoad})):i&&D.createElement("video",y({autoPlay:!0,loop:!0,muted:!0,className:X("reactEasyCrop_Video",E==="contain"&&"reactEasyCrop_Contain",E==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",E==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",I)},a,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:y(y({},O),{transform:c||"translate(".concat(h,"px, ").concat(l,"px) rotate(").concat(d,"deg) scale(").concat(m,")")}),controls:!1}),(Array.isArray(i)?i:[{src:i}]).map(function(A){return D.createElement("source",y({key:A.src},A))})),this.state.cropSize&&D.createElement("div",{style:y(y({},R),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:X("reactEasyCrop_CropArea",_==="round"&&"reactEasyCrop_CropAreaRound",C&&"reactEasyCrop_CropAreaGrid",k)}))},o.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:to,minZoom:eo,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},o.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o}(D.Component);const ro=r=>u.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},u.createElement("path",{d:"M11.3216 3.52267C11.635 3.32684 11.635 2.8705 11.3216 2.67467L8.76504 1.0768C8.43201 0.868661 8.00004 1.10808 8.00004 1.5008L8.00004 4.69655C8.00004 5.08927 8.43201 5.32869 8.76504 5.12055L11.3216 3.52267Z",fill:"#1D2129"}),u.createElement("mask",{id:"path-2-inside-1_1949_926",fill:"white"},u.createElement("rect",{x:5,y:6,width:8,height:8,rx:1})),u.createElement("rect",{x:5,y:6,width:8,height:8,rx:1,stroke:"#1D2129",strokeWidth:3,mask:"url(#path-2-inside-1_1949_926)"}),u.createElement("path",{d:"M8 3.49999H6C4.34315 3.49999 3 4.84314 3 6.49999V8.49999",stroke:"#1D2129",strokeWidth:1.5,strokeLinecap:"round"})),no=1024*500,io=1,be={x:0,y:0},Se=0,_e=1,ao={width:120,height:120},so={width:200,height:200},co=r=>g`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: ${r?"default":"pointer"};
  position: relative;
`,lo=g`
  //border: 1px solid ${S("grayBlue","08")};
  border: unset;
  padding-bottom: 24px;
  overflow: auto;
`,ho=g`
  margin: 24px 0 16px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${S("grayBlue","02")};
`,po=r=>g`
  background-size: ${(r-.5)/2.5*100}% 100%;
`,$e=g`
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 4px;
  border-radius: 2px;
  background:
    linear-gradient(
        ${S("techPurple","03")},
        ${S("techPurple","03")}
      )
      no-repeat,
    ${S("grayBlue","08")};
  background-size: 0 100%;
  width: 100%;

  &::-moz-range-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid ${S("techPurple","03")};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid ${S("techPurple","03")};
    background: ${S("white","01")};
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
`,uo=g`
  width: 100%;
  height: 260px;
  position: relative;
  margin-bottom: 18px;

  //.cropArea {
  //  width: 120px !important;
  //  height: 120px !important;
  //}
`,mo=g`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`,go=g`
  cursor: pointer;
  width: 14px;
  height: 14px;
  margin: 5px;
  position: absolute;
  top: 26px;
  right: 24px;
`,fo=g`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 0 8px;
  margin-left: 24px;
`,vo=g`
  width: 200px;
`,wo=g`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,yo=g`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`,xo=g`
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
`,Co=g`
  margin: 28rem 0;
  text-align: center;
  font-weight: 500;
  font-size: 32rem;
  line-height: 40rem;
  color: ${S("grayBlue","02")};
`,bo=g`
  width: 100%;
  height: 653rem;
  position: relative;
  margin-bottom: 36rem;
`,So=g`
  padding: 0 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44rem;
`,_o=g`
  ${$e};
  height: 8rem;
  border-radius: 4rem;

  &::-moz-range-thumb {
    border: 4rem solid ${S("techPurple","03")};
    width: 24rem;
    height: 24rem;
  }

  &::-webkit-slider-thumb {
    border: 4rem solid ${S("techPurple","03")};
    width: 24rem;
    height: 24rem;
  }
`,Ro=g`
  cursor: pointer;
  width: 32rem;
  height: 32rem;
  margin: 0 16rem;
  margin-left: 48rem;
`,Eo=g`
  cursor: pointer;
  width: 21rem;
  height: 21rem;
  margin: 13.5rem;
  position: absolute;
  top: 24rem;
  right: 48rem;
`,Po=g`
  width: 100%;
  height: 88rem;
  border-radius: 16rem;

  & > span {
    font-size: 32rem;
  }
`;function Ue(r){return r*Math.PI/180}function zo(r,o,e){const t=Ue(e);return{width:Math.abs(Math.cos(t)*r)+Math.abs(Math.sin(t)*o),height:Math.abs(Math.sin(t)*r)+Math.abs(Math.cos(t)*o)}}const Mo=r=>new Promise((o,e)=>{const t=new Image;t.addEventListener("load",()=>o(t)),t.addEventListener("error",n=>e(n)),t.setAttribute("crossOrigin","anonymous"),t.src=r});async function Do(r,o,e=0,t={horizontal:!1,vertical:!1}){const n=await Mo(r),i=document.createElement("canvas"),a=i.getContext("2d");if(!a)return null;const c=Ue(e),{width:s,height:h}=zo(n.width,n.height,e);i.width=s,i.height=h,a.translate(s/2,h/2),a.rotate(c),a.scale(t.horizontal?-1:1,t.vertical?-1:1),a.translate(-n.width/2,-n.height/2),a.drawImage(n,0,0);const l=a.getImageData(o.x,o.y,o.width,o.height);return i.width=o.width,i.height=o.height,a.putImageData(l,0,0),new Promise(d=>{i.toBlob(m=>{d(m)})})}const Be=r=>{const{isMobile:o,onOk:e,children:t,disabled:n=!1}=r,{t:i}=U(),a=Ae(),c=u.useRef(null),s=u.useRef(null),[h,l]=u.useState(!1),[d,m]=u.useState(),[_,C]=u.useState(null),[x,T]=u.useState(!1),[R,O]=u.useState(be),[F,te]=u.useState(o?so:ao),[k,I]=u.useState(_e),[E,A]=u.useState(Se),[H,Ve]=u.useState(),{track:w}=u.useContext(pt),Xe=()=>{I(_e),O(be),A(Se)},oe=()=>{w==null||w($.CLICK,{element:"avater_crop_close"},"team_id"),T(!1),C(null),c.current&&(c.current.value=""),Xe()},Ye=()=>{c.current&&c.current.click()},qe=z=>{const M=z.target.files;if(M){const N=M[0];if(N.size>=no){a.error({content:i("image_exceed")}),w==null||w($.VALIDATE,{element:"avater_crop_save",parameter1:Math.floor(N.size/1024),parameter2:"failed"},"team_id");return}m(URL.createObjectURL(N)),C(N),T(!0),w==null||w($.VALIDATE,{element:"avater_crop_save",parameter1:Math.floor(N.size/1024),parameter2:"suc"},"team_id")}z.target.value=""},Je=z=>{const M=z.target.valueAsNumber;I(M)},Ke=()=>{setTimeout(()=>{A(360)},200)},Qe=async()=>{if(w==null||w($.CLICK,{element:"avater_crop_save"},"team_id"),h||!_||!H)return;l(!0);const z=await Do(d||"",H,E);if(z){const M=new File([z],_.name||"image",{type:_.type||"image/*"});await e(M)&&oe()}else console.error("Cropped Img is null"),a.error({content:i("profile.setting.message.save_fail")});l(!1)};u.useEffect(()=>{x&&(w==null||w($.SHOW,{element:"avater_crop"},"team_id"))},[x,w]);const[et,tt,ot,rt,nt,it,at,st]=u.useMemo(()=>o?[xo,Co,bo,So,_o,Ro,Eo,Po]:[lo,ho,uo,mo,$e,fo,go,vo],[o]),ct=u.useMemo(()=>o?{containerStyle:{width:"100%",height:"653rem"},mediaStyle:{height:"653rem"}}:{containerStyle:{width:"100%",height:260},mediaStyle:{height:260}},[o]);return Z(Ct,{children:[Z("div",{css:co(n),onClick:Ye,children:[t,P("input",{style:{display:"none"},ref:c,type:"file",accept:".jpg, .jpeg, .png",onChange:qe,disabled:n})]}),_&&P(xt,{_css:et,visible:x,withoutPadding:!0,onCancel:oe,maskClosable:!1,footer:!1,children:Z(wt,{_css:wo,loading:h,colorScheme:"techPurple",children:[P("span",{css:tt,children:i("image.crop.modal.title")}),P(yt,{css:at,onClick:oe}),P("div",{css:ot,children:P(oo,{restrictPosition:!0,cropSize:F,setCropSize:te,style:ct,objectFit:"vertical-cover",aspect:io,cropShape:"round",image:d,crop:R,minZoom:.5,maxZoom:3,zoom:k,zoomSpeed:.01,rotation:E,showGrid:!1,onCropComplete:(z,M)=>{Ve(M)},onCropChange:O,onZoomChange:I,onMediaLoaded:Ke})}),Z("div",{css:rt,children:[Z("div",{css:yo,children:[P("input",{ref:s,css:[nt,po(k)],type:"range",value:k,min:.5,max:3,step:.01,"aria-labelledby":"Zoom",onChange:Je,className:"zoom-range"}),P(ro,{css:it,onClick:()=>A(E+90)})]}),P(Q,{_css:st,colorScheme:"techPurple",onClick:Qe,children:i("image.crop.modal.save")})]})]})})]})},Ao=f`
  color: ${B(`--${j}-grayBlue-04`)};
`,Lo=f`
  position: absolute;
  font-size: 24rem;
  padding-top: 8rem;
  color: ${B(`--${j}-orange-03`)};
`;f`
  font-size: 28rem;
  height: 96rem;

  & > span {
    padding: 0 32rem;

    & svg {
      font-size: 40rem;
    }
  }
`;const To=f`
  display: flex;
  align-items: center;
  justify-content: center;
`,Io=f`
  border-radius: 50%;
  padding: 4px;
  background-color: ${S("grayBlue","09")};
  font-size: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
`,No=f`
  display: flex;
  flex-direction: column;
  gap: 48px;
`,Re=f`
  color: ${S("grayBlue","02")};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,Ee=f`
  display: flex;
  flex-direction: column;
  gap: 32rem;
`,Wo=f`
  display: flex;
  flex-direction: column;
  gap: 64rem;
`,je=r=>{var d;const{t:o}=U(),{accountFormProps:e}=u.useContext(Te),{onSubmit:t,loading:n,handleUpdateAvatar:i}=r,{handleSubmit:a,control:c,formState:s,formState:{isDirty:h}}=e,l=de(ue);return p(Pt,{children:v("div",{css:No,children:[p("div",{css:To,children:v(Be,{isMobile:!0,onOk:i,children:[p("div",{css:Io,children:p(bt,{})}),p(De,{size:100,id:l==null?void 0:l.userID,name:l==null?void 0:l.nickname,avatarUrl:l==null?void 0:l.avatar})]})}),v("form",{onSubmit:a==null?void 0:a(t),css:Wo,children:[v("section",{css:Ee,children:[p("label",{css:Re,children:o("profile.setting.username")}),v("div",{children:[p(Le,{name:"nickname",control:c,render:({field:m})=>p(K,{...m,size:"large",error:!!(s!=null&&s.errors.nickname),variant:"fill",placeholder:o("profile.setting.username"),colorScheme:"techPurple"}),rules:{required:o("profile.setting.username_empty"),maxLength:{value:15,message:o("profile.setting.username_length")},minLength:{value:3,message:o("profile.setting.username_length")}}}),(s==null?void 0:s.errors.nickname)&&p("div",{css:Lo,children:(d=s==null?void 0:s.errors.nickname)==null?void 0:d.message})]})]}),v("section",{css:Ee,children:[v("label",{css:Re,children:[o("profile.setting.email"),v("span",{css:Ao,children:[" ",o("profile.setting.uneditable")]})]}),p("div",{children:p(K,{disabled:!0,size:"large",variant:"fill",value:l.email,placeholder:o("profile.setting.new_password_placeholder"),colorScheme:"techPurple"})})]}),p(Q,{colorScheme:"techPurple",size:"large",loading:n,disabled:!h,fullWidth:!0,children:o("profile.setting.save")})]})]})})};je.displayName="AccountSettingMobile";const He=()=>{const{t:r}=U(),[o,e]=u.useState(!1);return p("div",{children:p(Q,{colorScheme:"red",variant:"light",size:"large",loading:o,onClick:()=>{e(!0),dt()},children:r("profile.setting.logout")})})};He.displayName="Logout";const Oo=f`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,Fo=f`
  color: ${B(`--${j}-grayBlue-04`)};
`,ko=f`
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  line-height: 22px;
  color: ${B(`--${j}-orange-03`)};
`,Zo=f`
  position: absolute;
  font-size: 16px;
  line-height: 0;
  top: 3px;
  left: 0;
`,Pe=f`
  display: grid;
  gap: 8px;
`,$o=f`
  width: 120px;
  height: 120px;
  margin-right: 64px;
  font-size: 50px;
  flex: none;
`,Uo=f`
  margin-right: 64px;
  margin-top: 8px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${B(`--${j}-grayBlue-04`)};
`,Bo=f`
  display: flex;
  justify-content: center;
  gap: 64px;
`;f`
  display: flex;
  justify-content: center;
`;const ze=f`
  color: ${S("grayBlue","02")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  line-height: 1;
`,jo=f`
  width: 600px;
`,Ge=r=>{var d;const{t:o}=U(),{accountFormProps:e}=u.useContext(Te),{onSubmit:t,loading:n,handleUpdateAvatar:i}=r,{handleSubmit:a,control:c,formState:s,formState:{isDirty:h}}=e,l=de(ue);return v(ut,{children:[p(zt,{title:o("profile.setting.personal_info"),extra:p(He,{})}),v("div",{css:Bo,children:[p("div",{children:v(Be,{onOk:i,children:[p(De,{css:$o,id:l==null?void 0:l.userID,name:l==null?void 0:l.nickname,avatarUrl:l==null?void 0:l.avatar}),p("span",{css:Uo,children:"Edit"})]})}),p("form",{onSubmit:a==null?void 0:a(t),css:jo,children:v("section",{css:Oo,children:[v("section",{css:Pe,children:[p("label",{css:ze,children:o("profile.setting.username")}),v("div",{children:[p(Le,{name:"nickname",control:c,render:({field:m})=>p(K,{...m,size:"large",error:!!(s!=null&&s.errors.nickname),variant:"fill",placeholder:o("profile.setting.username"),colorScheme:"techPurple"}),rules:{required:o("profile.setting.username_empty"),maxLength:{value:15,message:o("profile.setting.username_length")},minLength:{value:3,message:o("profile.setting.username_length")}}}),(s==null?void 0:s.errors.nickname)&&v("div",{css:ko,children:[p(St,{css:Zo}),(d=s==null?void 0:s.errors.nickname)==null?void 0:d.message]})]})]}),v("section",{css:Pe,children:[v("label",{css:ze,children:[o("profile.setting.email"),v("span",{css:Fo,children:[" ",o("profile.setting.uneditable")]})]}),p("div",{children:p(K,{size:"large",value:l.email,disabled:!0,variant:"fill",placeholder:l.email,colorScheme:"techPurple"})})]}),p("span",{children:p(Q,{colorScheme:"techPurple",size:"large",loading:n,disabled:!h,children:o("profile.setting.save")})})]})})]})]})};Ge.displayName="AccountSetting";const Ho=()=>{const{t:r}=U(),o=mt(),e=de(ue),[t,n]=u.useState(!1),i=Ae(),a=Rt({mode:"onSubmit",criteriaMode:"firstError"});u.useEffect(()=>{e&&a.reset({nickname:e==null?void 0:e.nickname})},[e==null?void 0:e.nickname]);const c=async h=>{try{n(!0),await gt(h.nickname),i.success({content:r("team_setting.message.save_suc")}),window.location.reload()}catch{}finally{n(!1)}},s=async h=>{try{const l=await At(h);return await Lt(l),o(ft.updateUserAvatarReducer(l)),i.success({content:r("profile.setting.message.save_suc")}),!0}catch(l){console.error("handleUpdateAvatar error:",l),i.error({content:r("profile.setting.message.save_fail")})}return!1};return p(Et,{accountFormProps:a,children:p(vt,{desktopPage:p(Ge,{loading:t,onSubmit:c,handleUpdateAvatar:s}),mobilePage:p(je,{loading:t,onSubmit:c,handleUpdateAvatar:s})})})};Ho.displayName="PersonalSetting";export{Ho as PersonalSetting,Ho as default};
//# sourceMappingURL=index-ca188735.js.map

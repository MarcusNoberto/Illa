import{h as b,I as Ee,n as g,j as p,al as st,C as ct,B as q,y as lt,F as Pe,g as k,f as Z,am as ht,a6 as Y,an as pt}from"./@illa-design-764f0835.js";import{L as dt}from"./index-7e6ea323.js";import{ab as ut,a0 as ze,ac as mt,F as $,M as gt,u as le,g as he,A as Me,a9 as ft,K as vt,ad as wt,O as yt}from"./index-7f07a8bc.js";import{g as xt,b as z,r as m}from"./react-bc846394.js";import{C as De,u as Ct}from"./index.esm-11ba4214.js";import{T as Ae,a as bt}from"./index-2ce4c85a.js";import{a as d}from"./@emotion-09d14760.js";import{I as F}from"./interface-8df5fe4c.js";import{S as St}from"./index-1e68a3e7.js";import{H as _t}from"./index-c329647b.js";const Rt=(r,o)=>{const e=r.split("?")[0];return new Promise(async(t,n)=>{try{await ut.put(r,o,{headers:{"Content-Type":"multipart/form-data","x-amz-acl":"public-read"}}),t(e)}catch(i){n(i)}})},Et=async r=>{const o=mt();try{return(await ze({url:`/users/avatar/uploadAddress/fileName/${o}.${r}`,method:"GET"})).data}catch(e){throw e}},Pt=r=>new Promise(async(o,e)=>{try{const t=r.type.split("/")[1],n=await Et(t);if(n){const i=await Rt(n.uploadAddress,r);o(i)}}catch(t){e(t)}}),zt=async r=>{try{return await ze({url:"/users/avatar",method:"PATCH",data:{avatar:r}})}catch(o){throw o}};/*! *****************************************************************************
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
***************************************************************************** */var ee=function(r,o){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ee(r,o)};function Mt(r,o){ee(r,o);function e(){this.constructor=r}r.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}var w=function(){return w=Object.assign||function(o){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i])}return o},w.apply(this,arguments)},pe=!1,D,te,oe,G,V,Le,X,re,ne,ie,Te,ae,se,Ie,Ne;function C(){if(!pe){pe=!0;var r=navigator.userAgent,o=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(r),e=/(Mac OS X)|(Windows)|(Linux)/.exec(r);if(ae=/\b(iPhone|iP[ao]d)/.exec(r),se=/\b(iP[ao]d)/.exec(r),ie=/Android/i.exec(r),Ie=/FBAN\/\w+;/i.exec(r),Ne=/Mobile/i.exec(r),Te=!!/Win64/.exec(r),o){D=o[1]?parseFloat(o[1]):o[5]?parseFloat(o[5]):NaN,D&&document&&document.documentMode&&(D=document.documentMode);var t=/(?:Trident\/(\d+.\d+))/.exec(r);Le=t?parseFloat(t[1])+4:D,te=o[2]?parseFloat(o[2]):NaN,oe=o[3]?parseFloat(o[3]):NaN,G=o[4]?parseFloat(o[4]):NaN,G?(o=/(?:Chrome\/(\d+\.\d+))/.exec(r),V=o&&o[1]?parseFloat(o[1]):NaN):V=NaN}else D=te=oe=V=G=NaN;if(e){if(e[1]){var n=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(r);X=n?parseFloat(n[1].replace("_",".")):!0}else X=!1;re=!!e[2],ne=!!e[3]}else X=re=ne=!1}}var ce={ie:function(){return C()||D},ieCompatibilityMode:function(){return C()||Le>D},ie64:function(){return ce.ie()&&Te},firefox:function(){return C()||te},opera:function(){return C()||oe},webkit:function(){return C()||G},safari:function(){return ce.webkit()},chrome:function(){return C()||V},windows:function(){return C()||re},osx:function(){return C()||X},linux:function(){return C()||ne},iphone:function(){return C()||ae},mobile:function(){return C()||ae||se||ie||Ne},nativeApp:function(){return C()||Ie},android:function(){return C()||ie},ipad:function(){return C()||se}},Dt=ce,B=!!(typeof window<"u"&&window.document&&window.document.createElement),At={canUseDOM:B,canUseWorkers:typeof Worker<"u",canUseEventListeners:B&&!!(window.addEventListener||window.attachEvent),canUseViewport:B&&!!window.screen,isInWorker:!B},Lt=At,We=Lt,Oe;We.canUseDOM&&(Oe=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function Tt(r,o){if(!We.canUseDOM||o&&!("addEventListener"in document))return!1;var e="on"+r,t=e in document;if(!t){var n=document.createElement("div");n.setAttribute(e,"return;"),t=typeof n[e]=="function"}return!t&&Oe&&r==="wheel"&&(t=document.implementation.hasFeature("Events.wheel","3.0")),t}var It=Tt,Nt=Dt,Wt=It,de=10,ue=40,me=800;function Fe(r){var o=0,e=0,t=0,n=0;return"detail"in r&&(e=r.detail),"wheelDelta"in r&&(e=-r.wheelDelta/120),"wheelDeltaY"in r&&(e=-r.wheelDeltaY/120),"wheelDeltaX"in r&&(o=-r.wheelDeltaX/120),"axis"in r&&r.axis===r.HORIZONTAL_AXIS&&(o=e,e=0),t=o*de,n=e*de,"deltaY"in r&&(n=r.deltaY),"deltaX"in r&&(t=r.deltaX),(t||n)&&r.deltaMode&&(r.deltaMode==1?(t*=ue,n*=ue):(t*=me,n*=me)),t&&!o&&(o=t<1?-1:1),n&&!e&&(e=n<1?-1:1),{spinX:o,spinY:e,pixelX:t,pixelY:n}}Fe.getEventType=function(){return Nt.firefox()?"DOMMouseScroll":Wt("wheel")?"wheel":"mousewheel"};var Ot=Fe,Ft=Ot;const kt=xt(Ft);function Zt(r,o,e,t,n,i){i===void 0&&(i=0);var a=I(r,o,i),c=a.width,s=a.height,h=Math.min(c,e),l=Math.min(s,t);return h>l*n?{width:l*n,height:l}:{width:h,height:h/n}}function $t(r){return r.width>r.height?r.width/r.naturalWidth:r.height/r.naturalHeight}function j(r,o,e,t,n){n===void 0&&(n=0);var i=I(o.width,o.height,n),a=i.width,c=i.height;return{x:ge(r.x,a,e.width,t),y:ge(r.y,c,e.height,t)}}function ge(r,o,e,t){var n=o*t/2-e/2;return J(r,-n,n)}function fe(r,o){return Math.sqrt(Math.pow(r.y-o.y,2)+Math.pow(r.x-o.x,2))}function ve(r,o){return Math.atan2(o.y-r.y,o.x-r.x)*180/Math.PI}function Ut(r,o,e,t,n,i,a){i===void 0&&(i=0),a===void 0&&(a=!0);var c=a?Bt:jt,s=I(o.width,o.height,i),h=I(o.naturalWidth,o.naturalHeight,i),l={x:c(100,((s.width-e.width/n)/2-r.x/n)/s.width*100),y:c(100,((s.height-e.height/n)/2-r.y/n)/s.height*100),width:c(100,e.width/s.width*100/n),height:c(100,e.height/s.height*100/n)},u=Math.round(c(h.width,l.width*h.width/100)),f=Math.round(c(h.height,l.height*h.height/100)),S=h.width>=h.height*t,x=S?{width:Math.round(f*t),height:f}:{width:u,height:Math.round(u/t)},y=w(w({},x),{x:Math.round(c(h.width-x.width,l.x*h.width/100)),y:Math.round(c(h.height-x.height,l.y*h.height/100))});return{croppedAreaPercentages:l,croppedAreaPixels:y}}function Bt(r,o){return Math.min(r,Math.max(0,o))}function jt(r,o){return o}function Ht(r,o,e,t,n,i){var a=I(o.width,o.height,e),c=J(t.width/a.width*(100/r.width),n,i),s={x:c*a.width/2-t.width/2-a.width*c*(r.x/100),y:c*a.height/2-t.height/2-a.height*c*(r.y/100)};return{crop:s,zoom:c}}function Gt(r,o,e){var t=$t(o);return e.height>e.width?e.height/(r.height*t):e.width/(r.width*t)}function Vt(r,o,e,t,n,i){e===void 0&&(e=0);var a=I(o.naturalWidth,o.naturalHeight,e),c=J(Gt(r,o,t),n,i),s=t.height>t.width?t.height/r.height:t.width/r.width,h={x:((a.width-r.width)/2-r.x)*s,y:((a.height-r.height)/2-r.y)*s};return{crop:h,zoom:c}}function we(r,o){return{x:(o.x+r.x)/2,y:(o.y+r.y)/2}}function Xt(r){return r*Math.PI/180}function I(r,o,e){var t=Xt(e);return{width:Math.abs(Math.cos(t)*r)+Math.abs(Math.sin(t)*o),height:Math.abs(Math.sin(t)*r)+Math.abs(Math.cos(t)*o)}}function J(r,o,e){return Math.min(Math.max(r,o),e)}function H(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return r.filter(function(e){return typeof e=="string"&&e.length>0}).join(" ").trim()}var Yt=`.reactEasyCrop_Container {
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
`,qt=1,Jt=3,Kt=function(r){Mt(o,r);function o(){var e=r!==null&&r.apply(this,arguments)||this;return e.imageRef=z.createRef(),e.videoRef=z.createRef(),e.containerRef=null,e.styleRef=null,e.containerRect=null,e.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},e.dragStartPosition={x:0,y:0},e.dragStartCrop={x:0,y:0},e.gestureZoomStart=0,e.gestureRotationStart=0,e.isTouching=!1,e.lastPinchDistance=0,e.lastPinchRotation=0,e.rafDragTimeout=null,e.rafPinchTimeout=null,e.wheelTimer=null,e.currentDoc=typeof document<"u"?document:null,e.currentWindow=typeof window<"u"?window:null,e.resizeObserver=null,e.state={cropSize:null,hasWheelJustStarted:!1},e.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!e.containerRef)){var t=!0;e.resizeObserver=new window.ResizeObserver(function(n){if(t){t=!1;return}e.computeSizes()}),e.resizeObserver.observe(e.containerRef)}},e.preventZoomSafari=function(t){return t.preventDefault()},e.cleanEvents=function(){e.currentDoc&&(e.currentDoc.removeEventListener("mousemove",e.onMouseMove),e.currentDoc.removeEventListener("mouseup",e.onDragStopped),e.currentDoc.removeEventListener("touchmove",e.onTouchMove),e.currentDoc.removeEventListener("touchend",e.onDragStopped),e.currentDoc.removeEventListener("gesturemove",e.onGestureMove),e.currentDoc.removeEventListener("gestureend",e.onGestureEnd))},e.clearScrollEvent=function(){e.containerRef&&e.containerRef.removeEventListener("wheel",e.onWheel),e.wheelTimer&&clearTimeout(e.wheelTimer)},e.onMediaLoad=function(){var t=e.computeSizes();t&&(e.emitCropData(),e.setInitialCrop(t)),e.props.onMediaLoaded&&e.props.onMediaLoaded(e.mediaSize)},e.setInitialCrop=function(t){if(e.props.initialCroppedAreaPercentages){var n=Ht(e.props.initialCroppedAreaPercentages,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=n.crop,a=n.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(a)}else if(e.props.initialCroppedAreaPixels){var c=Vt(e.props.initialCroppedAreaPixels,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=c.crop,a=c.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(a)}},e.computeSizes=function(){var t,n,i,a,c,s,h=e.imageRef.current||e.videoRef.current;if(h&&e.containerRef){e.containerRect=e.containerRef.getBoundingClientRect();var l=e.containerRect.width/e.containerRect.height,u=((t=e.imageRef.current)===null||t===void 0?void 0:t.naturalWidth)||((n=e.videoRef.current)===null||n===void 0?void 0:n.videoWidth)||0,f=((i=e.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((a=e.videoRef.current)===null||a===void 0?void 0:a.videoHeight)||0,S=h.offsetWidth<u||h.offsetHeight<f,x=u/f,y=void 0;if(S){var A=e.getObjectFit();switch(A){default:case"contain":y=l>x?{width:e.containerRect.height*x,height:e.containerRect.height}:{width:e.containerRect.width,height:e.containerRect.width/x};break;case"horizontal-cover":y={width:e.containerRect.width,height:e.containerRect.width/x};break;case"vertical-cover":y={width:e.containerRect.height*x,height:e.containerRect.height};break}}else y={width:h.offsetWidth,height:h.offsetHeight};e.mediaSize=w(w({},y),{naturalWidth:u,naturalHeight:f}),e.props.setMediaSize&&e.props.setMediaSize(e.mediaSize);var _=e.props.cropSize?e.props.cropSize:Zt(e.mediaSize.width,e.mediaSize.height,e.containerRect.width,e.containerRect.height,e.props.aspect,e.props.rotation);return(((c=e.state.cropSize)===null||c===void 0?void 0:c.height)!==_.height||((s=e.state.cropSize)===null||s===void 0?void 0:s.width)!==_.width)&&e.props.onCropSizeChange&&e.props.onCropSizeChange(_),e.setState({cropSize:_},e.recomputeCropPosition),e.props.setCropSize&&e.props.setCropSize(_),_}},e.onMouseDown=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("mousemove",e.onMouseMove),e.currentDoc.addEventListener("mouseup",e.onDragStopped),e.onDragStart(o.getMousePoint(t)))},e.onMouseMove=function(t){return e.onDrag(o.getMousePoint(t))},e.onTouchStart=function(t){e.currentDoc&&(e.isTouching=!0,!(e.props.onTouchRequest&&!e.props.onTouchRequest(t))&&(e.currentDoc.addEventListener("touchmove",e.onTouchMove,{passive:!1}),e.currentDoc.addEventListener("touchend",e.onDragStopped),t.touches.length===2?e.onPinchStart(t):t.touches.length===1&&e.onDragStart(o.getTouchPoint(t.touches[0]))))},e.onTouchMove=function(t){t.preventDefault(),t.touches.length===2?e.onPinchMove(t):t.touches.length===1&&e.onDrag(o.getTouchPoint(t.touches[0]))},e.onGestureStart=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("gesturechange",e.onGestureMove),e.currentDoc.addEventListener("gestureend",e.onGestureEnd),e.gestureZoomStart=e.props.zoom,e.gestureRotationStart=e.props.rotation)},e.onGestureMove=function(t){if(t.preventDefault(),!e.isTouching){var n=o.getMousePoint(t),i=e.gestureZoomStart-1+t.scale;if(e.setNewZoom(i,n,{shouldUpdatePosition:!0}),e.props.onRotationChange){var a=e.gestureRotationStart+t.rotation;e.props.onRotationChange(a)}}},e.onGestureEnd=function(t){e.cleanEvents()},e.onDragStart=function(t){var n,i,a=t.x,c=t.y;e.dragStartPosition={x:a,y:c},e.dragStartCrop=w({},e.props.crop),(i=(n=e.props).onInteractionStart)===null||i===void 0||i.call(n)},e.onDrag=function(t){var n=t.x,i=t.y;e.currentWindow&&(e.rafDragTimeout&&e.currentWindow.cancelAnimationFrame(e.rafDragTimeout),e.rafDragTimeout=e.currentWindow.requestAnimationFrame(function(){if(e.state.cropSize&&!(n===void 0||i===void 0)){var a=n-e.dragStartPosition.x,c=i-e.dragStartPosition.y,s={x:e.dragStartCrop.x+a,y:e.dragStartCrop.y+c},h=e.props.restrictPosition?j(s,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):s;e.props.onCropChange(h)}}))},e.onDragStopped=function(){var t,n;e.isTouching=!1,e.cleanEvents(),e.emitCropData(),(n=(t=e.props).onInteractionEnd)===null||n===void 0||n.call(t)},e.onWheel=function(t){if(e.currentWindow&&!(e.props.onWheelRequest&&!e.props.onWheelRequest(t))){t.preventDefault();var n=o.getMousePoint(t),i=kt(t).pixelY,a=e.props.zoom-i*e.props.zoomSpeed/200;e.setNewZoom(a,n,{shouldUpdatePosition:!0}),e.state.hasWheelJustStarted||e.setState({hasWheelJustStarted:!0},function(){var c,s;return(s=(c=e.props).onInteractionStart)===null||s===void 0?void 0:s.call(c)}),e.wheelTimer&&clearTimeout(e.wheelTimer),e.wheelTimer=e.currentWindow.setTimeout(function(){return e.setState({hasWheelJustStarted:!1},function(){var c,s;return(s=(c=e.props).onInteractionEnd)===null||s===void 0?void 0:s.call(c)})},250)}},e.getPointOnContainer=function(t){var n=t.x,i=t.y;if(!e.containerRect)throw new Error("The Cropper is not mounted");return{x:e.containerRect.width/2-(n-e.containerRect.left),y:e.containerRect.height/2-(i-e.containerRect.top)}},e.getPointOnMedia=function(t){var n=t.x,i=t.y,a=e.props,c=a.crop,s=a.zoom;return{x:(n+c.x)/s,y:(i+c.y)/s}},e.setNewZoom=function(t,n,i){var a=i===void 0?{}:i,c=a.shouldUpdatePosition,s=c===void 0?!0:c;if(!(!e.state.cropSize||!e.props.onZoomChange)){var h=J(t,e.props.minZoom,e.props.maxZoom);if(s){var l=e.getPointOnContainer(n),u=e.getPointOnMedia(l),f={x:u.x*h-l.x,y:u.y*h-l.y},S=e.props.restrictPosition?j(f,e.mediaSize,e.state.cropSize,h,e.props.rotation):f;e.props.onCropChange(S)}e.props.onZoomChange(h)}},e.getCropData=function(){if(!e.state.cropSize)return null;var t=e.props.restrictPosition?j(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;return Ut(t,e.mediaSize,e.state.cropSize,e.getAspect(),e.props.zoom,e.props.rotation,e.props.restrictPosition)},e.emitCropData=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropComplete&&e.props.onCropComplete(n,i),e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.emitCropAreaChange=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.recomputeCropPosition=function(){if(e.state.cropSize){var t=e.props.restrictPosition?j(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;e.props.onCropChange(t),e.emitCropData()}},e}return o.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=Yt,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},o.prototype.componentWillUnmount=function(){var e,t;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((t=this.styleRef.parentNode)===null||t===void 0||t.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},o.prototype.componentDidUpdate=function(e){var t,n,i,a,c,s,h,l,u;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():((t=e.cropSize)===null||t===void 0?void 0:t.height)!==((n=this.props.cropSize)===null||n===void 0?void 0:n.height)||((i=e.cropSize)===null||i===void 0?void 0:i.width)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.width)?this.computeSizes():(((c=e.crop)===null||c===void 0?void 0:c.x)!==((s=this.props.crop)===null||s===void 0?void 0:s.x)||((h=e.crop)===null||h===void 0?void 0:h.y)!==((l=this.props.crop)===null||l===void 0?void 0:l.y))&&this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&((u=this.videoRef.current)===null||u===void 0||u.load())},o.prototype.getAspect=function(){var e=this.props,t=e.cropSize,n=e.aspect;return t?t.width/t.height:n},o.prototype.getObjectFit=function(){var e,t,n,i;if(this.props.objectFit==="cover"){var a=this.imageRef.current||this.videoRef.current;if(a&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var c=this.containerRect.width/this.containerRect.height,s=((e=this.imageRef.current)===null||e===void 0?void 0:e.naturalWidth)||((t=this.videoRef.current)===null||t===void 0?void 0:t.videoWidth)||0,h=((n=this.imageRef.current)===null||n===void 0?void 0:n.naturalHeight)||((i=this.videoRef.current)===null||i===void 0?void 0:i.videoHeight)||0,l=s/h;return l<c?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},o.prototype.onPinchStart=function(e){var t=o.getTouchPoint(e.touches[0]),n=o.getTouchPoint(e.touches[1]);this.lastPinchDistance=fe(t,n),this.lastPinchRotation=ve(t,n),this.onDragStart(we(t,n))},o.prototype.onPinchMove=function(e){var t=this;if(!(!this.currentDoc||!this.currentWindow)){var n=o.getTouchPoint(e.touches[0]),i=o.getTouchPoint(e.touches[1]),a=we(n,i);this.onDrag(a),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var c=fe(n,i),s=t.props.zoom*(c/t.lastPinchDistance);t.setNewZoom(s,a,{shouldUpdatePosition:!1}),t.lastPinchDistance=c;var h=ve(n,i),l=t.props.rotation+(h-t.lastPinchRotation);t.props.onRotationChange&&t.props.onRotationChange(l),t.lastPinchRotation=h})}},o.prototype.render=function(){var e=this,t=this.props,n=t.image,i=t.video,a=t.mediaProps,c=t.transform,s=t.crop,h=s.x,l=s.y,u=t.rotation,f=t.zoom,S=t.cropShape,x=t.showGrid,y=t.style,A=y.containerStyle,_=y.cropAreaStyle,N=y.mediaStyle,W=t.classes,K=W.containerClassName,O=W.cropAreaClassName,L=W.mediaClassName,R=this.getObjectFit();return z.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(U){return e.containerRef=U},"data-testid":"container",style:A,className:H("reactEasyCrop_Container",K)},n?z.createElement("img",w({alt:"",className:H("reactEasyCrop_Image",R==="contain"&&"reactEasyCrop_Contain",R==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",R==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",L)},a,{src:n,ref:this.imageRef,style:w(w({},N),{transform:c||"translate(".concat(h,"px, ").concat(l,"px) rotate(").concat(u,"deg) scale(").concat(f,")")}),onLoad:this.onMediaLoad})):i&&z.createElement("video",w({autoPlay:!0,loop:!0,muted:!0,className:H("reactEasyCrop_Video",R==="contain"&&"reactEasyCrop_Contain",R==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",R==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",L)},a,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:w(w({},N),{transform:c||"translate(".concat(h,"px, ").concat(l,"px) rotate(").concat(u,"deg) scale(").concat(f,")")}),controls:!1}),(Array.isArray(i)?i:[{src:i}]).map(function(M){return z.createElement("source",w({key:M.src},M))})),this.state.cropSize&&z.createElement("div",{style:w(w({},_),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:H("reactEasyCrop_CropArea",S==="round"&&"reactEasyCrop_CropAreaRound",x&&"reactEasyCrop_CropAreaGrid",O)}))},o.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:Jt,minZoom:qt,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},o.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o}(z.Component);const Qt=r=>m.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},m.createElement("path",{d:"M11.3216 3.52267C11.635 3.32684 11.635 2.8705 11.3216 2.67467L8.76504 1.0768C8.43201 0.868661 8.00004 1.10808 8.00004 1.5008L8.00004 4.69655C8.00004 5.08927 8.43201 5.32869 8.76504 5.12055L11.3216 3.52267Z",fill:"#1D2129"}),m.createElement("mask",{id:"path-2-inside-1_1949_926",fill:"white"},m.createElement("rect",{x:5,y:6,width:8,height:8,rx:1})),m.createElement("rect",{x:5,y:6,width:8,height:8,rx:1,stroke:"#1D2129",strokeWidth:3,mask:"url(#path-2-inside-1_1949_926)"}),m.createElement("path",{d:"M8 3.49999H6C4.34315 3.49999 3 4.84314 3 6.49999V8.49999",stroke:"#1D2129",strokeWidth:1.5,strokeLinecap:"round"})),eo=1024*500,to=1,ye={x:0,y:0},xe=0,Ce=1,oo={width:120,height:120},ro={width:200,height:200},no=r=>d`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: ${r?"default":"pointer"};
  position: relative;
`,io=d`
  //border: 1px solid ${b("grayBlue","08")};
  border: unset;
  padding-bottom: 24px;
  overflow: auto;
`,ao=d`
  margin: 24px 0 16px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${b("grayBlue","02")};
`,so=r=>d`
  background-size: ${(r-.5)/2.5*100}% 100%;
`,ke=d`
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 4px;
  border-radius: 2px;
  background:
    linear-gradient(
        ${b("techPurple","03")},
        ${b("techPurple","03")}
      )
      no-repeat,
    ${b("grayBlue","08")};
  background-size: 0 100%;
  width: 100%;

  &::-moz-range-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid ${b("techPurple","03")};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid ${b("techPurple","03")};
    background: ${b("white","01")};
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
`,co=d`
  width: 100%;
  height: 260px;
  position: relative;
  margin-bottom: 18px;

  //.cropArea {
  //  width: 120px !important;
  //  height: 120px !important;
  //}
`,lo=d`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`,ho=d`
  cursor: pointer;
  width: 14px;
  height: 14px;
  margin: 5px;
  position: absolute;
  top: 26px;
  right: 24px;
`,po=d`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 0 8px;
  margin-left: 24px;
`,uo=d`
  width: 200px;
`,mo=d`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,go=d`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`,fo=d`
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
`,vo=d`
  margin: 28rem 0;
  text-align: center;
  font-weight: 500;
  font-size: 32rem;
  line-height: 40rem;
  color: ${b("grayBlue","02")};
`,wo=d`
  width: 100%;
  height: 653rem;
  position: relative;
  margin-bottom: 36rem;
`,yo=d`
  padding: 0 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44rem;
`,xo=d`
  ${ke};
  height: 8rem;
  border-radius: 4rem;

  &::-moz-range-thumb {
    border: 4rem solid ${b("techPurple","03")};
    width: 24rem;
    height: 24rem;
  }

  &::-webkit-slider-thumb {
    border: 4rem solid ${b("techPurple","03")};
    width: 24rem;
    height: 24rem;
  }
`,Co=d`
  cursor: pointer;
  width: 32rem;
  height: 32rem;
  margin: 0 16rem;
  margin-left: 48rem;
`,bo=d`
  cursor: pointer;
  width: 21rem;
  height: 21rem;
  margin: 13.5rem;
  position: absolute;
  top: 24rem;
  right: 48rem;
`,So=d`
  width: 100%;
  height: 88rem;
  border-radius: 16rem;

  & > span {
    font-size: 32rem;
  }
`;function Ze(r){return r*Math.PI/180}function _o(r,o,e){const t=Ze(e);return{width:Math.abs(Math.cos(t)*r)+Math.abs(Math.sin(t)*o),height:Math.abs(Math.sin(t)*r)+Math.abs(Math.cos(t)*o)}}const Ro=r=>new Promise((o,e)=>{const t=new Image;t.addEventListener("load",()=>o(t)),t.addEventListener("error",n=>e(n)),t.setAttribute("crossOrigin","anonymous"),t.src=r});async function Eo(r,o,e=0,t={horizontal:!1,vertical:!1}){const n=await Ro(r),i=document.createElement("canvas"),a=i.getContext("2d");if(!a)return null;const c=Ze(e),{width:s,height:h}=_o(n.width,n.height,e);i.width=s,i.height=h,a.translate(s/2,h/2),a.rotate(c),a.scale(t.horizontal?-1:1,t.vertical?-1:1),a.translate(-n.width/2,-n.height/2),a.drawImage(n,0,0);const l=a.getImageData(o.x,o.y,o.width,o.height);return i.width=o.width,i.height=o.height,a.putImageData(l,0,0),new Promise(u=>{i.toBlob(f=>{u(f)})})}const $e=r=>{const{isMobile:o,onOk:e,children:t,disabled:n=!1}=r,{t:i}=$(),a=Ee(),c=m.useRef(null),s=m.useRef(null),[h,l]=m.useState(!1),[u,f]=m.useState(),[S,x]=m.useState(null),[y,A]=m.useState(!1),[_,N]=m.useState(ye),[W,K]=m.useState(o?ro:oo),[O,L]=m.useState(Ce),[R,M]=m.useState(xe),[U,He]=m.useState(),{track:v}=m.useContext(gt),Ge=()=>{L(Ce),N(ye),M(xe)},Q=()=>{v==null||v(F.CLICK,{element:"avater_crop_close"},"team_id"),A(!1),x(null),c.current&&(c.current.value=""),Ge()},Ve=()=>{c.current&&c.current.click()},Xe=E=>{const P=E.target.files;if(P){const T=P[0];if(T.size>=eo){a.error({content:i("image_exceed")}),v==null||v(F.VALIDATE,{element:"avater_crop_save",parameter1:Math.floor(T.size/1024),parameter2:"failed"},"team_id");return}f(URL.createObjectURL(T)),x(T),A(!0),v==null||v(F.VALIDATE,{element:"avater_crop_save",parameter1:Math.floor(T.size/1024),parameter2:"suc"},"team_id")}E.target.value=""},Ye=E=>{const P=E.target.valueAsNumber;L(P)},qe=()=>{setTimeout(()=>{M(360)},200)},Je=async()=>{if(v==null||v(F.CLICK,{element:"avater_crop_save"},"team_id"),h||!S||!U)return;l(!0);const E=await Eo(u||"",U,R);if(E){const P=new File([E],S.name||"image",{type:S.type||"image/*"});await e(P)&&Q()}else console.error("Cropped Img is null"),a.error({content:i("profile.setting.message.save_fail")});l(!1)};m.useEffect(()=>{y&&(v==null||v(F.SHOW,{element:"avater_crop"},"team_id"))},[y,v]);const[Ke,Qe,et,tt,ot,rt,nt,it]=m.useMemo(()=>o?[fo,vo,wo,yo,xo,Co,bo,So]:[io,ao,co,lo,ke,po,ho,uo],[o]),at=m.useMemo(()=>o?{containerStyle:{width:"100%",height:"653rem"},mediaStyle:{height:"653rem"}}:{containerStyle:{width:"100%",height:260},mediaStyle:{height:260}},[o]);return g(Pe,{children:[g("div",{css:no(n),onClick:Ve,children:[t,p("input",{style:{display:"none"},ref:c,type:"file",accept:".jpg, .jpeg, .png",onChange:Xe,disabled:n})]}),S&&p(lt,{_css:Ke,visible:y,withoutPadding:!0,onCancel:Q,maskClosable:!1,footer:!1,children:g(st,{_css:mo,loading:h,colorScheme:"techPurple",children:[p("span",{css:Qe,children:i("image.crop.modal.title")}),p(ct,{css:nt,onClick:Q}),p("div",{css:et,children:p(Kt,{restrictPosition:!0,cropSize:W,setCropSize:K,style:at,objectFit:"vertical-cover",aspect:to,cropShape:"round",image:u,crop:_,minZoom:.5,maxZoom:3,zoom:O,zoomSpeed:.01,rotation:R,showGrid:!1,onCropComplete:(E,P)=>{He(P)},onCropChange:N,onZoomChange:L,onMediaLoaded:qe})}),g("div",{css:tt,children:[g("div",{css:go,children:[p("input",{ref:s,css:[ot,so(O)],type:"range",value:O,min:.5,max:3,step:.01,"aria-labelledby":"Zoom",onChange:Ye,className:"zoom-range"}),p(Qt,{css:rt,onClick:()=>M(R+90)})]}),p(q,{_css:it,colorScheme:"techPurple",onClick:Je,children:i("image.crop.modal.save")})]})]})})]})},Po=d`
  color: ${k(`--${Z}-grayBlue-04`)};
`,zo=d`
  position: absolute;
  font-size: 24rem;
  padding-top: 8rem;
  color: ${k(`--${Z}-orange-03`)};
`;d`
  font-size: 28rem;
  height: 96rem;

  & > span {
    padding: 0 32rem;

    & svg {
      font-size: 40rem;
    }
  }
`;const Mo=d`
  display: flex;
  align-items: center;
  justify-content: center;
`,Do=d`
  border-radius: 50%;
  padding: 4px;
  background-color: ${b("grayBlue","09")};
  font-size: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
`,Ao=d`
  display: flex;
  flex-direction: column;
  gap: 48px;
`,be=d`
  color: ${b("grayBlue","02")};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,Se=d`
  display: flex;
  flex-direction: column;
  gap: 32rem;
`,Lo=d`
  display: flex;
  flex-direction: column;
  gap: 64rem;
`,Ue=r=>{var u;const{t:o}=$(),{accountFormProps:e}=m.useContext(Ae),{onSubmit:t,loading:n,handleUpdateAvatar:i}=r,{handleSubmit:a,control:c,formState:s,formState:{isDirty:h}}=e,l=le(he);return p(St,{children:g("div",{css:Ao,children:[p("div",{css:Mo,children:g($e,{isMobile:!0,onOk:i,children:[p("div",{css:Do,children:p(ht,{})}),p(Me,{size:100,id:l==null?void 0:l.userID,name:l==null?void 0:l.nickname,avatarUrl:l==null?void 0:l.avatar})]})}),g("form",{onSubmit:a==null?void 0:a(t),css:Lo,children:[g("section",{css:Se,children:[p("label",{css:be,children:o("profile.setting.username")}),g("div",{children:[p(De,{name:"nickname",control:c,render:({field:f})=>p(Y,{...f,size:"large",error:!!(s!=null&&s.errors.nickname),variant:"fill",placeholder:o("profile.setting.username"),colorScheme:"techPurple"}),rules:{required:o("profile.setting.username_empty"),maxLength:{value:15,message:o("profile.setting.username_length")},minLength:{value:3,message:o("profile.setting.username_length")}}}),(s==null?void 0:s.errors.nickname)&&p("div",{css:zo,children:(u=s==null?void 0:s.errors.nickname)==null?void 0:u.message})]})]}),g("section",{css:Se,children:[g("label",{css:be,children:[o("profile.setting.email"),g("span",{css:Po,children:[" ",o("profile.setting.uneditable")]})]}),p("div",{children:p(Y,{disabled:!0,size:"large",variant:"fill",value:l.email,placeholder:o("profile.setting.new_password_placeholder"),colorScheme:"techPurple"})})]}),p(q,{colorScheme:"techPurple",size:"large",loading:n,disabled:!h,fullWidth:!0,children:o("profile.setting.save")})]})]})})};Ue.displayName="AccountSettingMobile";const Be=()=>{const{t:r}=$(),[o,e]=m.useState(!1);return p("div",{children:p(q,{colorScheme:"red",variant:"light",size:"large",loading:o,onClick:()=>{e(!0),ft()},children:r("profile.setting.logout")})})};Be.displayName="Logout";const To=d`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,Io=d`
  color: ${k(`--${Z}-grayBlue-04`)};
`,No=d`
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  line-height: 22px;
  color: ${k(`--${Z}-orange-03`)};
`,Wo=d`
  position: absolute;
  font-size: 16px;
  line-height: 0;
  top: 3px;
  left: 0;
`,_e=d`
  display: grid;
  gap: 8px;
`,Oo=d`
  width: 120px;
  height: 120px;
  margin-right: 64px;
  font-size: 50px;
  flex: none;
`,Fo=d`
  margin-right: 64px;
  margin-top: 8px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${k(`--${Z}-grayBlue-04`)};
`,ko=d`
  display: flex;
  justify-content: center;
  gap: 64px;
`;d`
  display: flex;
  justify-content: center;
`;const Re=d`
  color: ${b("grayBlue","02")};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  line-height: 1;
`,Zo=d`
  width: 600px;
`,je=r=>{var u;const{t:o}=$(),{accountFormProps:e}=m.useContext(Ae),{onSubmit:t,loading:n,handleUpdateAvatar:i}=r,{handleSubmit:a,control:c,formState:s,formState:{isDirty:h}}=e,l=le(he);return g(Pe,{children:[p(_t,{title:o("profile.setting.personal_info"),extra:p(Be,{})}),g("div",{css:ko,children:[p("div",{children:g($e,{onOk:i,children:[p(Me,{css:Oo,id:l==null?void 0:l.userID,name:l==null?void 0:l.nickname,avatarUrl:l==null?void 0:l.avatar}),p("span",{css:Fo,children:"Edit"})]})}),p("form",{onSubmit:a==null?void 0:a(t),css:Zo,children:g("section",{css:To,children:[g("section",{css:_e,children:[p("label",{css:Re,children:o("profile.setting.username")}),g("div",{children:[p(De,{name:"nickname",control:c,render:({field:f})=>p(Y,{...f,size:"large",error:!!(s!=null&&s.errors.nickname),variant:"fill",placeholder:o("profile.setting.username"),colorScheme:"techPurple"}),rules:{required:o("profile.setting.username_empty"),maxLength:{value:15,message:o("profile.setting.username_length")},minLength:{value:3,message:o("profile.setting.username_length")}}}),(s==null?void 0:s.errors.nickname)&&g("div",{css:No,children:[p(pt,{css:Wo}),(u=s==null?void 0:s.errors.nickname)==null?void 0:u.message]})]})]}),g("section",{css:_e,children:[g("label",{css:Re,children:[o("profile.setting.email"),g("span",{css:Io,children:[" ",o("profile.setting.uneditable")]})]}),p("div",{children:p(Y,{size:"large",value:l.email,disabled:!0,variant:"fill",placeholder:l.email,colorScheme:"techPurple"})})]}),p("span",{children:p(q,{colorScheme:"techPurple",size:"large",loading:n,disabled:!h,children:o("profile.setting.save")})})]})})]})]})};je.displayName="AccountSetting";const $o=()=>{const{t:r}=$(),o=vt(),e=le(he),[t,n]=m.useState(!1),i=Ee(),a=Ct({mode:"onSubmit",criteriaMode:"firstError"});m.useEffect(()=>{e&&a.reset({nickname:e==null?void 0:e.nickname})},[e==null?void 0:e.nickname]);const c=async h=>{try{n(!0),await wt(h.nickname),i.success({content:r("team_setting.message.save_suc")}),window.location.reload()}catch{}finally{n(!1)}},s=async h=>{try{const l=await Pt(h);return await zt(l),o(yt.updateUserAvatarReducer(l)),i.success({content:r("profile.setting.message.save_suc")}),!0}catch(l){console.error("handleUpdateAvatar error:",l),i.error({content:r("profile.setting.message.save_fail")})}return!1};return p(bt,{accountFormProps:a,children:p(dt,{desktopPage:p(je,{loading:t,onSubmit:c,handleUpdateAvatar:s}),mobilePage:p(Ue,{loading:t,onSubmit:c,handleUpdateAvatar:s})})})};$o.displayName="PersonalSetting";export{$o as PersonalSetting,$o as default};
//# sourceMappingURL=index-bb273e86.js.map

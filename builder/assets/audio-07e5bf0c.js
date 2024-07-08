import{n as f,o as S,aj as w,N as m,k as i,A,F as M}from"./@illa-design-1f43bb6c.js";import{r as n}from"./react-9b7e00e3.js";import{R as W}from"./index-207528bc.js";import{M as j}from"./index-a95bdaa9.js";import{a as y}from"./@emotion-08a6282b.js";import{T as I}from"./index-99007076.js";import{k as C}from"./lodash-lib-6e94956b.js";import"./index-4dce6ee8.js";import"./codeMirror-vendor-320207e2.js";import"./react-icons-vendor-2430ea65.js";const N=y`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`,D=y`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: ${f("gray","01")};
  color: ${f("black","01")};
`,U=y`
  & > audio {
    &::-webkit-media-controls {
      justify-content: center;
    }
  }
`;y`
  display: flex;
  gap: 16px;
  padding: 8px;
  max-height: 48px;
  width: 100%;
  background: ${f("white","01")};
  border: 1px solid ${f("grayBlue","08")};
  border-radius: 24px;
`;const T=n.forwardRef((u,g)=>{const{url:o,playing:a,autoPlay:d,controls:l=!0,loop:c,volume:p,muted:s,playbackRate:h,onPlay:b,onReady:x,onPause:k,onEnded:v,onPlaybackRateChange:e}=u,[r,t]=n.useState(!0),[E,P]=n.useState(!1),{sourceLoadErrorHandler:R}=n.useContext(j);return S(M,{children:[r?i("div",{css:D,children:i(A,{colorScheme:"black"})}):null,i(W,{css:U,style:r?{display:"none"}:void 0,config:{file:{forceAudio:!0}},ref:g,width:"100%",height:"100%",url:o||" ",volume:p,muted:s,controls:l,playbackRate:h,loop:c,playing:d||a,draggable:!1,onReady:()=>{t(!1),P(!1),x()},onPlay:b,onPause:k,onEnded:v,onError:()=>{R==null||R(o,"AUDIO_WIDGET"),t(!1),P(!0)},onPlaybackRateChange:e})]})});T.displayName="WrappedAudio";const $=u=>{const{handleUpdateDsl:g,handleUpdateMultiExecutionResult:o,displayName:a,tooltipText:d,triggerEventHandler:l,deleteComponentRuntimeProps:c,updateComponentRuntimeProps:p}=u,s=n.useRef(null);n.useEffect(()=>(p({play:()=>{o([{displayName:a,value:{playing:!0}}])},pause:()=>{o([{displayName:a,value:{playing:!1}}])},setAudioUrl:e=>{if(!w(e)){console.error("TypeError: url is not a string");return}o([{displayName:a,value:{url:e}}])},seekTo:(e,r="seconds")=>{var t;if(!m(e)){console.error("TypeError: value is not a number");return}(t=s.current)==null||t.seekTo(e,r)},mute:e=>{var t;if(!C(e)){console.error("TypeError: value is not a boolean");return}const r=(t=s.current)==null?void 0:t.getInternalPlayer();r&&(r.muted=e),o([{displayName:a,value:{muted:e}}])},setLoop:e=>{var t;if(!C(e)){console.error("TypeError: value is not a boolean");return}const r=(t=s.current)==null?void 0:t.getInternalPlayer();r&&(r.loop=e),o([{displayName:a,value:{loop:e}}])},setSpeed:e=>{if(!m(e)){console.error("TypeError: value is not a number");return}const r=Math.max(.0625,Math.min(16,e));o([{displayName:a,value:{playbackRate:r}}])},setVolume:e=>{var E;if(!m(e)){console.error("TypeError: value is not a number");return}const r=Math.max(0,Math.min(1,e)),t=(E=s.current)==null?void 0:E.getInternalPlayer();t&&(t.volume=r),o([{displayName:a,value:{volume:r}}])}}),()=>{c()}),[a,o,g,p,c]);const h=n.useCallback(()=>{o([{displayName:a,value:{playing:!0}}]),l("play")},[a,l,o]),b=n.useCallback(()=>{o([{displayName:a,value:{playing:!1}}]),l("pause")},[a,l,o]),x=n.useCallback(()=>{l("loaded")},[l]),k=n.useCallback(()=>{l("ended")},[l]),v=n.useCallback(e=>{m(e)&&o([{displayName:a,value:{playbackRate:e}}])},[a,o]);return i(I,{tooltipText:d,tooltipDisabled:!d,children:i("div",{css:N,children:i(T,{...u,ref:s,onReady:x,onPlay:h,onPause:b,onEnded:k,onPlaybackRateChange:v})})})};$.displayName="AudioWidget";export{$ as AudioWidget,T as WrappedAudio,$ as default};
//# sourceMappingURL=audio-07e5bf0c.js.map

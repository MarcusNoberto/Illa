import{k as n,cu as fe,cv as ge,o as v,n as O,bd as me,T as Ce,x as _e,bt as Se,aX as ye,q as Q,C as xe,aD as Ie,B as z,F as J,M as Ee,aE as be}from"./@illa-design-402f214a.js";import{r as t,a as ve}from"./react-9b7e00e3.js";import{u as k,al as B,b7 as F,eI as Te,cU as Le,cT as we,hL as De,ay as K,ax as ee,hM as te,hN as ne,e4 as se,ei as oe,hO as $,hP as Ue,hQ as Pe,b as Re,n as Fe,fz as Me,a9 as Oe}from"./index-2f1869ab.js";import{a as c}from"./@emotion-4f16718e.js";import{S as ke,g as Ae}from"./drive-6b05f117.js";import{w as Ge,g as X}from"./lodash-lib-6e94956b.js";import{S as Be,F as Z,R as Ne,a as $e}from"./panelFolder-5e4290ef.js";import{f as Ve}from"./style-ab05d1ea.js";import{u as ae}from"./hook-34b2061f.js";import{P as We}from"./index-323e87cb.js";import He from"./index-dadf6af3.js";import"./codeMirror-vendor-eff8ab8d.js";import"./react-icons-vendor-2430ea65.js";import"./index-9dcf4ab8.js";import"./index-65ed348a.js";import"./index-e7294a86.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./util-302f4200.js";import"./style-87b0eeec.js";const ze=()=>{const{currentPath:e,totalPath:a,updatePath:s}=t.useContext(N),o=t.useCallback((i,l)=>{l||s(i)},[s]),r=t.useMemo(()=>e?e==null?void 0:e.split("/").map((i,l,u)=>{const h=u.slice(0,l+1).join("/"),g=`${a.split(h)[0]}${h}`,E=l===u.length-1;return{path:g,title:i,last:E}}):[{path:L,title:L,last:!0}],[e,a]);return n(ge,{flexWrap:"wrap",onClickPath:o,blockRouterChange:!0,children:r.map((i,l)=>n(fe,{last:i.last??!1,href:i.path,children:i.title},l))})},Ze=c`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,je=()=>{const{t:e}=k();return v("div",{css:Ze,children:[n(ke,{}),n("span",{children:e("widget.drive_picker.modal.no_file")})]})},V=276,le=46,qe="editor.inspect.setter_message.drive_builder.max_size",Ye="editor.inspect.setter_message.drive_builder.min_size",Xe="editor.inspect.setter_message.drive_builder.max_files",Qe="editor.inspect.setter_message.drive_builder.min_files",L="root",Je=c`
  font-size: 14px;
  color: ${O("grayBlue","02")};
  font-weight: 500;
`,Ke=c`
  display: inline-block;
  width: 24px;
  height: 30px;
  flex: none;
`,ie=c`
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: ${le}px;
  gap: 8px;
  cursor: pointer;
  & > input {
    margin: 3px 4px;
  }
`,et=e=>c`
  ${ie};
  background-color: ${e?O("techPurple","08"):"transparent"};
`,tt=c`
  display: flex;
  width: 16px;
  height: 16px;
`,nt=e=>{const{listData:a,totalPath:s,search:o,selectItems:r,colorScheme:i,singleSelect:l,onChange:u,getFileList:h,updatePath:f,handleSingleChange:g}=e,{t:E}=k(),m=t.useCallback((d,C)=>{if(d.stopPropagation(),C.type===B.FOLDER||C.type===B.ANONYMOUS_FOLDER){f(`${s}/${C.name}`);return}else l&&g(C)},[l,s,f,g]),b=t.useRef(1);return n(Se,{height:V,itemHeight:le,itemKey:"id",data:a,onScroll:d=>{d.currentTarget.scrollHeight-d.currentTarget.scrollTop===V&&h(++b.current,s,o==null?void 0:o.current)},children:d=>{var C;return v("label",{css:l?et(((C=r[0])==null?void 0:C.id)===d.id):ie,onClick:S=>m(S,d),children:[!l&&n(me,{colorScheme:i,disabled:d.type===B.FOLDER||d.type===B.ANONYMOUS_FOLDER,onChange:S=>u(S,d),defaultChecked:r.findIndex(S=>S.id===d.id)!==-1},d.id),Ae(d.type,d.contentType,Ke),n("span",{css:Je,children:d.name}),d.type===B.ANONYMOUS_FOLDER&&n(Ce,{position:"top",content:E("drive.drive_builder.public_folder.tips"),children:n("span",{css:tt,children:n(_e,{size:"16px"})})})]})}})},st=c`
  height: ${V}px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 4;
`,ot=({colorScheme:e})=>n("div",{css:st,children:n(ye,{colorScheme:e})}),at=c`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 8px;
  & > span:first-of-type {
    font-weight: 600;
    font-size: 24px;
  }
`,lt=e=>{const a=c`
    opacity: 0.5;
    transition: opacity 0.3s;
    user-select: none;
    pointer-events: none;
  `;return c`
    height: 100%;
    width: 100%;
    ${e&&a};
  `},it=c`
  height: ${V}px;
  width: 100%;
  position: relative;
`,rt=c`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 24px 24px 16px 24px;
  gap: 8px;
`,ct=c`
  display: flex;
  gap: 16px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,dt=()=>{const{modalVisible:e,fileList:a,totalPath:s,minSize:o,maxSize:r,minFileNum:i,maxFileNum:l,sizeType:u="mb",colorScheme:h,singleSelect:f=!1,getFileList:g,updatePath:E,submitSelect:m,handleCloseModal:b}=t.useContext(N),{t:y}=k(),[d,C]=t.useState(!1),S=t.useRef(""),[p,T]=t.useState([]),[w,_]=t.useState(!0),[x,M]=t.useState(!0),R=Q(),W=t.useCallback(I=>{w&&I.length>0?_(!1):!w&&I.length===0&&_(!0)},[w]),q=t.useCallback(()=>{if(l&&p.length>l)return R.info({content:F.t(Xe,{max:l})}),!1;if(i&&p.length<i)return R.info({content:F.t(Qe,{min:i})}),!1;if(r){const I=u==="mb"?r*1024*1024:r*1024;if(p.some(D=>D.size>I))return R.info({content:F.t(qe,{max:r+u})}),!1}if(o){const I=u==="mb"?o*1024*1024:o*1024;if(p.some(D=>D.size<I))return R.info({content:F.t(Ye,{min:o+u})}),!1}return!0},[l,r,R,i,o,p,u]),de=t.useCallback((I,D)=>{const G=p.findIndex(P=>P.id===D.id);if(!I&&G!==-1){const P=p.concat();P.splice(G,1),T(P),W(P)}else if(I&&G===-1){const P=p.concat(D);T(P),W(P)}},[W,p]),pe=t.useCallback(I=>{var D;((D=p[0])==null?void 0:D.id)!==I.id&&(T([I]),_(!1))},[p]),Y=t.useCallback(()=>{b(),T([])},[b]),ue=t.useCallback(async()=>{q()&&(C(!0),m(p).then(()=>{T([])}).finally(()=>{C(!1)}))},[p,m,q]),A=t.useCallback(async(I,D,G)=>{M(!0);try{await g(I,D,G)}catch{}finally{M(!1)}},[g]),he=t.useMemo(()=>Ge(I=>{A(1,s,I)},500),[A,s]);return t.useEffect(()=>{e&&A(1,s)},[A,e,s]),v(J,{children:[v("div",{css:at,children:[n("span",{children:y("widget.drive_picker.modal.files")}),n("span",{onClick:Y,style:{cursor:"pointer"},children:n(xe,{})})]}),v("div",{css:ct,children:[n(ze,{}),n(Ie,{colorScheme:h,placeholder:"search",onChange:he})]}),v("div",{css:it,children:[n("div",{css:lt(x),children:a.length>0?n(nt,{onChange:de,listData:a,totalPath:s,getFileList:A,search:S,updatePath:E,selectItems:p,colorScheme:h,singleSelect:f,handleSingleChange:pe},s):!x&&n(je,{})}),x&&n(ot,{colorScheme:h})]}),v("div",{css:rt,children:[n(z,{minW:"78px",onClick:Y,colorScheme:"grayBlue",children:y("widget.drive_picker.modal.cancel")}),n(z,{minW:"200px",disabled:w,colorScheme:h,onClick:ue,loading:d,children:f?y("drive.upload.select.confirm_button"):y("widget.drive_picker.modal.confirm",{fileNum:p.length})})]})]})},N=t.createContext({}),H=(e,a)=>{const s=a??e,o=e.split("/"),r=o[o.length-1];return re(`${r}${s.replace(e,"")}`)},re=e=>{var s;const a=/^\/?(.*?)\/?$/;return((s=e==null?void 0:e.match(a))==null?void 0:s[1])||e},pt=(e,a)=>{const[s,o]=t.useState(e||L),[r,i]=t.useState(H(s??"root")),l=t.useCallback(u=>{const h=re(u);o(h),i(H(e,h))},[e]);return t.useEffect(()=>{a?(o(L),i(L)):(o(e||L),i(H(e||L)))},[a,e]),{currentPath:r,updatePath:l,totalPath:s}},ut=()=>{const{modalVisible:e,handleCloseModal:a}=t.useContext(N);return ve.createPortal(n(J,{children:e&&n(Ee,{closable:!0,maskClosable:!0,withoutPadding:!0,visible:!0,onCancel:a,footer:!1,children:n(dt,{})})}),document.body)},ht=(e=!1)=>{let a=e?c`
        width: 100%;
      `:Ve;return c`
    display: flex;
    flex: none;
    flex-direction: column;
    gap: 8px;
    ${a};
  `},ft=c`
  width: 100%;
`,gt=(e=!1)=>{const a=c`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,s=c`
    flex-direction: column;
    gap: 8px;
  `;return c`
    display: flex;
    padding: 8px 0;
    ${e?s:a};
    width: 100%;
  `},mt=c`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4px;
`,Ct=c`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,_t=c`
  display: flex;
  padding: 1px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  & > span {
    color: ${O("grayBlue","02")};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    text-transform: capitalize;
  }
`,St=c`
  width: 16px;
  height: 16px;
`,yt=({labelName:e,labelDesc:a,showSelect:s,canUseDrive:o})=>{const r=ae(),{setModalVisible:i}=t.useContext(N);return v("div",{css:Ct,children:[n(We,{labelName:e,labelDesc:a,labelSize:"medium"}),s&&v("div",{css:_t,onClick:()=>{o?i(!0):r({modalType:"upgrade",from:"panel_setter_select"})},children:[n("span",{css:St,children:n(Be,{})}),n("span",{children:"ILLA Drive"})]})]})},xt=e=>n(He,{...e,isSetterSingleRow:!0,expectedType:Te.STRING}),It=e=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.14493 3.16661C8.0073 3.33437 7.93201 3.54463 7.93188 3.76163V5.3392V5.80869V10.3169C7.51745 10.1371 7.03635 10.0342 6.52336 10.0342C4.96834 10.0342 3.7063 10.9797 3.7063 12.147C3.7063 13.3143 4.96834 14.2598 6.52336 14.2598C7.97261 14.2598 9.16739 13.4385 9.3232 12.3818H9.34041V12.147V5.52698L12.627 4.86967V3.19822C12.6269 3.05934 12.596 2.92222 12.5365 2.79672C12.4771 2.67122 12.3905 2.56047 12.2831 2.47246C12.1757 2.38444 12.0501 2.32134 11.9154 2.28771C11.7806 2.25408 11.6401 2.25076 11.5039 2.27798L8.68685 2.84139C8.47406 2.88392 8.28257 2.99884 8.14493 3.16661Z",fill:"black"})),Et=e=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6667 2H3.33333C2.598 2 2 2.598 2 3.33333V12.6667C2 13.402 2.598 14 3.33333 14H12.6667C13.402 14 14 13.402 14 12.6667V3.33333C14 2.598 13.402 2 12.6667 2ZM3.33333 12.6667V3.33333H12.6667L12.668 12.6667H3.33333ZM6 8.66667L6.66667 9.33333L8.66667 6.66667L12 11.3333H4L6 8.66667Z",fill:"black"})),bt=e=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("path",{d:"M12.2492 8.96591C11.5477 8.97869 10.8494 9.0649 10.1659 9.22313C9.32349 8.38387 8.62476 7.41187 8.09764 6.34598C8.67027 4.34525 8.69588 2.98117 8.26873 2.33521C8.17343 2.19536 8.04653 2.07991 7.89832 1.99822C7.7501 1.91653 7.58473 1.87089 7.41559 1.865C7.2047 1.84739 6.99338 1.89343 6.80893 1.99717C6.62448 2.10091 6.47538 2.25758 6.38089 2.44694C5.78382 3.5154 6.64626 5.63601 7.0478 6.4938C6.59582 8.02563 6.00684 9.51366 5.288 10.9399C2.09428 12.4134 2 13.3084 2 13.6308C2.01164 14.0288 2.22929 14.385 2.56332 14.5526C2.70889 14.6521 2.88305 14.7012 3.05914 14.6923C3.91228 14.6923 4.85154 13.6867 5.88624 11.722C7.15488 11.1424 8.4759 10.6861 9.83184 10.3579C10.5069 10.9829 11.374 11.3624 12.2923 11.4357C12.8556 11.4357 13.9997 11.4357 13.9997 10.2101C14.009 9.7946 13.7786 9.00199 12.2492 8.96474V8.96591ZM3.1185 13.668H3.01608C3.29658 13.2048 3.71442 12.8417 4.2114 12.6252C3.97763 13.088 3.59173 13.4562 3.1185 13.668ZM7.20144 2.98001C7.24529 2.96326 7.29377 2.96326 7.33761 2.98001H7.44004C7.61608 3.58233 7.61608 4.22245 7.44004 4.82478C7.1743 4.24856 7.09105 3.60487 7.20144 2.98001ZM8.91003 9.93194C8.14186 10.1263 7.38533 10.3661 6.64626 10.6524V10.5779H6.57759C6.94655 9.7818 7.28058 8.9694 7.57854 8.1442V8.06971C7.96262 8.7017 8.4049 9.28831 8.90072 9.82137H8.80761L8.91003 9.9331V9.93194ZM12.3261 10.4033C11.9778 10.3888 11.6356 10.3074 11.3181 10.1636C11.5986 10.1042 11.8861 10.0786 12.1724 10.0902C12.83 10.0902 12.9674 10.2648 12.9674 10.3754C12.7564 10.4377 12.5334 10.4473 12.3179 10.4033H12.3261Z",fill:"black"})),vt=e=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("circle",{cx:8,cy:8,r:6.5,stroke:"black"}),t.createElement("path",{d:"M6.75725 10.5457C6.42399 10.7456 6 10.5056 6 10.1169L6 5.8831C6 5.49445 6.42399 5.25439 6.75725 5.45435L10.2854 7.57125C10.6091 7.76545 10.6091 8.23454 10.2854 8.42875L6.75725 10.5457Z",fill:"black"})),Tt=e=>{switch(e){case"IMAGE_WIDGET":case"CAROUSEL_WIDGET":return{name:F.t("editor.inspect.setter_placeholder.choose_image"),icon:n(Et,{})};case"PDF_WIDGET":return{name:F.t("editor.inspect.setter_placeholder.choose_pdf"),icon:n(bt,{})};case"VIDEO_WIDGET":return{name:F.t("editor.inspect.setter_placeholder.choose_video"),icon:n(vt,{})};case"AUDIO_WIDGET":return{name:F.t("editor.inspect.setter_placeholder.choose_audio"),icon:n(It,{})}}},Lt=e=>{switch(e){case"IMAGE_WIDGET":case"CAROUSEL_WIDGET":return"image/*";case"PDF_WIDGET":return".pdf";case"VIDEO_WIDGET":return"video/*";case"AUDIO_WIDGET":return"audio/*"}},wt=e=>e==="root"?"":e.replace("root/",""),Dt=e=>{switch(e){case"IMAGE_WIDGET":return"builder_editor_storage_not_enough_image";case"CAROUSEL_WIDGET":return"builder_editor_storage_not_enough_carousel";case"VIDEO_WIDGET":return"builder_editor_storage_not_enough_video";case"AUDIO_WIDGET":return"builder_editor_storage_not_enough_audio"}},Ut=e=>{switch(e){case"IMAGE_WIDGET":return"builder_editor_traffic_not_enough_image";case"CAROUSEL_WIDGET":return"builder_editor_traffic_not_enough_carousel";case"VIDEO_WIDGET":return"builder_editor_traffic_not_enough_video";case"AUDIO_WIDGET":return"builder_editor_traffic_not_enough_audio"}},Pt=()=>{const e=t.useRef(null),a=Q(),{t:s}=k(),{currentFolderPath:o,setFolderOperateVisible:r}=t.useContext(Z),{widgetType:i,setIsUpLoading:l,setUploadName:u,handleUpdateResult:h}=t.useContext(j),f=async g=>{const E=g.target.files;if(!E)return;l(!0),a.info({content:s("drive.message.start_upload")});const m=E[0];if(!m)return;r(!1);const b=`${m.name}_${new Date().getTime()}`,y=new AbortController,d={folder:wt(o),allowAnonymous:!1,replace:!1};Le.addFileDetailInfo({loaded:0,total:0,status:we.WAITING,fileName:m.name,contentType:m.type,queryID:b,abortController:y,saveToILLADriveParams:{fileData:m,...d}});let C;try{C=await De(b,m,d,y.signal)}catch(S){K(S,ee.TRAFFIC,Dt(i))}if(C)try{const p={ids:[C.id],expirationType:te.PERSISTENT,hotlinkProtection:!1},T=await ne(p);let w=`${se}${oe}/${T.data.tinyURL}`;u(C.name),h(w)}catch{a.error({content:s("drive.message.generate_url_fail")})}finally{l(!1)}else l(!1);g.target.value=""};return n(z,{colorScheme:"techPurple",onClick:()=>{var g;(g=e.current)==null||g.click()},children:v("span",{children:[n("input",{style:{display:"none"},type:"file",accept:Lt(i),ref:e,onChange:f}),s("drive.upload.modal.file_upload")]})})},j=t.createContext({}),Rt=({children:e,widgetType:a,handleUpdateResult:s})=>{const[o,r]=t.useState(Ne),[i,l]=t.useState(!1),[u,h]=t.useState(!1),[f,g]=t.useState(!1),[E,m]=t.useState(""),{t:b}=k();return n(j.Provider,{value:{widgetType:a,handleUpdateResult:s,isUpLoading:f,uploadName:E,setIsUpLoading:g,setUploadName:m},children:n(Z.Provider,{value:{subTitle:b("drive.upload.modal.upload_to"),currentFolderPath:o,folderOperateVisible:i,createFolderVisible:u,setCreateFolderVisible:h,setCurrentFolderPath:r,setFolderOperateVisible:l,operateChildren:n(Pt,{})},children:e})})},Ft=e=>c`
  pointer-events: ${e?"none":"auto"};
  width: 100%;
  cursor: ${e?"not-allowed":"pointer"};
  display: flex;
  padding: 3px 12px 3px 8px;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid ${O("grayBlue","08")};
  opacity: ${e?.5:1};
`,Mt=c`
  padding: 4px;
  display: inline-flex;
  flex: none;
`,Ot=c`
  overflow: hidden;
  color: ${O("grayBlue","02")};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`,kt=({widgetType:e,canUseDrive:a})=>{const s=Tt(e),o=ae(),{uploadName:r,isUpLoading:i}=t.useContext(j),{setFolderOperateVisible:l}=t.useContext(Z),u=()=>{a?l(!0):o({modalType:"upgrade",from:"panel_setter_upload"})};return v("div",{css:Ft(i),onClick:u,children:[n("span",{css:Mt,children:s==null?void 0:s.icon}),n("span",{css:Ot,children:r||(s==null?void 0:s.name)})]})},At=10,Gt="techPurple";var U=(e=>(e.URL="url",e.UPLOAD="upload",e))(U||{});const ce=e=>{const{path:a=L,children:s,widgetType:o,handleUpdateResult:r}=e,{currentPath:i,updatePath:l,totalPath:u}=pt(a),[h,f]=t.useState([]),[g,E]=t.useState(!1),m=t.useMemo(()=>{switch(o){case"IMAGE_WIDGET":case"CAROUSEL_WIDGET":return $.IMAGE;case"PDF_WIDGET":return $.PDF;case"VIDEO_WIDGET":return $.VIDEO;case"AUDIO_WIDGET":return $.AUDIO}},[o]),b=t.useCallback(()=>{E(!1),l(a||L),f([])},[a,l]),y=t.useCallback(S=>new Promise(async(p,T)=>{const _={ids:[S[0].id],expirationType:te.PERSISTENT,hotlinkProtection:!1};try{const x=await ne(_);let M=`${se}${oe}/${x.data.tinyURL}`;await r(M),b(),p(!0)}catch(x){K(x,ee.TRAFFIC,Ut(o)),T(x)}}),[b,r,o]),d=t.useCallback(async(S,p,T)=>{var w;try{const _={path:`/${p||L}`,page:S,limit:At,type:Ue.MIX,search:T,fileCategory:m},x=await Pe(_);f(S===1?((w=x.data)==null?void 0:w.files)||[]:M=>{var R;return[...M,...((R=x.data)==null?void 0:R.files)||[]]})}catch{}},[m]),C={rootPath:L,modalVisible:g,fileList:h,currentPath:i,totalPath:u,colorScheme:Gt,singleSelect:!0,updatePath:l,submitSelect:y,setModalVisible:E,getFileList:d,handleCloseModal:b};return n(N.Provider,{value:C,children:s})};ce.displayName="SourceSelectProvider";const Bt=e=>{const{value:a="",isSetterSingleRow:s=!1,attrName:o,widgetType:r,labelName:i,labelDesc:l,widgetDisplayName:u,componentNode:h,handleUpdateDsl:f}=e,{t:g}=k(),E=Re(Fe),m=Me(E),b=[{label:g("widget.public.select_options.url"),value:U.URL},{label:v("span",{css:mt,children:[!m&&n(Oe,{color:O("techPurple","03")}),n("span",{children:g("widget.public.select_options.upload")})]}),value:U.UPLOAD}],[y,d]=t.useState(U.URL),{srcByURL:C,srcByUpload:S}=t.useMemo(()=>{const _=X(h,`props.${o}ByURL`,a),x=X(h,`props.${o}ByUpload`,a);return{srcByURL:_,srcByUpload:x}},[o,h,a]),p=_=>{d(_),_===U.URL?f(o,C):f(o,S)},T=(_,x)=>{y===U.URL&&f(o,x),f(_,x)};return n(ce,{widgetType:r,path:L,handleUpdateResult:_=>{T(`${o}ByURL`,_)},children:v(Rt,{widgetType:r,handleUpdateResult:_=>{y===U.UPLOAD&&f(o,_),f(`${o}ByUpload`,_)},children:[v("div",{css:gt(s),children:[n(yt,{labelDesc:l,labelName:i,showSelect:y===U.URL,canUseDrive:m}),v("div",{css:ht(s),children:[n(be,{onChange:p,value:y,forceEqualWidth:!0,options:b,type:"button",size:"medium",colorScheme:"grayBlue",css:ft}),y===U.URL&&n(xt,{value:C,attrName:`${o}ByURL`,widgetType:r,handleUpdateDsl:T,widgetDisplayName:u}),y===U.UPLOAD&&n(kt,{widgetType:r,canUseDrive:m})]})]}),n($e,{}),n(ut,{})]})})};Bt.displayName="DriveSourceGroupSetter";export{Bt as default};
//# sourceMappingURL=index-e1daf586.js.map

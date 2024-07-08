import{o as m,k as e,B as E,M as k,n as y,q as A,aY as z,F as V,T as Y,x as U,bw as G,A as Z,C as q,cx as J,cy as K,a_ as Q}from"./@illa-design-1f43bb6c.js";import{r as t}from"./react-9b7e00e3.js";import{u as _,hQ as O,hR as W,al as w,hS as X,hP as P,hO as M,hT as N}from"./index-4dce6ee8.js";import{a as n}from"./@emotion-08a6282b.js";import{S as H,a as ee}from"./drive-584d85d3.js";const R=224,j=32,$=10,te="root",T=t.createContext({}),ae=n`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;n`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;const ne=a=>{const{objectName:d,onCancel:r,createFolder:f}=a,{t:p}=_(),[l,u]=t.useState(!1),s=t.useCallback(g=>async()=>{u(!0);try{await f(d,g),r()}catch(i){console.log(i)}finally{u(!1)}},[f,d,r]);return m("div",{css:ae,children:[e(E,{onClick:s(O.RENAME),disabled:l,children:p("drive.same_name_modal.keep_both")}),e(E,{colorScheme:"red",onClick:s(O.COVER),disabled:l,children:p("drive.same_name_modal.replace")})]})},se=a=>{const{objectName:d,sameModalVisible:r,setSameModalVisible:f,createFolder:p}=a,{t:l}=_(),u=()=>{f(!1)};return e("div",{onClick:s=>{s.stopPropagation()},children:e(k,{closable:!0,visible:r,onCancel:u,title:l("drive.same_name_modal.this_folder_already"),footer:!1,children:e(ne,{objectName:d,createFolder:p,onCancel:u})})})};n`
  background-color: ${y("white","05")};
  backdrop-filter: blur(5px);
`;const oe=n`
  display: inline-flex;
  color: ${y("orange","03")};
  font-size: 14px;
  margin-top: 4px;
`,le=n`
  display: inline-flex;
  color: ${y("grayBlue","04")};
  font-size: 14px;
  margin-top: 4px;
`,re=/^[\u4e00-\u9fa5a-zA-Z0-9=_~\-]+$/u,ie=a=>!re.test(a),ce=({currentFolderID:a})=>{const{currentFolderPath:d,createFolderVisible:r,setCreateFolderVisible:f,setCurrentFolderPath:p}=t.useContext(T),{t:l}=_(),u=A(),[s,g]=t.useState(""),[i,x]=t.useState(""),[b,C]=t.useState(!1),[S,L]=t.useState(!1),I=!!s&&ie((s??"").trim()),v=t.useCallback(async(o,h=O.RENAME)=>{try{const F=await W({name:o,folderID:a,type:w.FOLDER,size:0,resumable:!1,duplicationHandler:h,contentType:""});f(!1),u.success({content:l("drive.message.create_suc")}),p(`${d}/${F.data.name}`)}catch{u.error({content:l("drive.message.create_failed")})}},[a,d,u,f,p,l]),c=t.useCallback(async()=>{C(!0);try{const h=(await X([{folderID:a,name:s,type:w.FOLDER}])).data[0];if(h.isDuplicated){x(h.name),L(!0);return}await v(s.trim())}catch{}finally{C(!1)}},[v,a,s,L]);return m(V,{children:[m(k,{closable:!0,visible:r,okButtonProps:{disabled:(s??"").trim().length<=0||I,loading:b,colorScheme:"techPurple"},enableOnFormTags:[],title:l("drive.create_modal.title.create_a_folder"),okText:l("drive.create_modal.title.create"),cancelText:l("drive.create_modal.title.cancel"),onOk:c,onCancel:()=>{f(!1)},afterClose:()=>{g(""),C(!1)},children:[e(z,{colorScheme:"techPurple",onChange:g,value:s,maxLength:255}),I?e("span",{css:oe,children:l("drive.create_modal.validate_failed")}):e("span",{css:le,children:l("drive.create_modal.validate")})]}),e(se,{objectName:i,createFolder:v,sameModalVisible:S,setSameModalVisible:L})]})},de=n`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,pe=()=>{const{t:a}=_();return m("div",{css:de,children:[e(H,{}),e("span",{children:a("drive.move_modal.no_folders")})]})},ue=n`
  display: flex;
  align-items: center;
  height: ${j}px;
  gap: 4px;
  cursor: pointer;
`,B=n`
  width: 24px;
  height: 24px;
`,he=n`
  font-size: 14px;
  color: ${y("grayBlue","02")};
  font-weight: 500;
`,fe=n`
  display: flex;
  width: 16px;
  height: 16px;
`,me=a=>{const{listData:d,updateListData:r}=a,{t:f}=_(),{currentFolderPath:p,setCurrentFolderPath:l}=t.useContext(T),u=t.useCallback(i=>()=>{const x=`${p}/${i}`;l(x)},[p,l]),s=t.useRef(1);return e(G,{height:R,itemHeight:j,itemKey:"id",data:d,onScroll:i=>{i.currentTarget.scrollHeight-i.currentTarget.scrollTop===R&&r(++s.current,p)},children:i=>m("div",{css:ue,onClick:u(i.name),children:[i.type===w.ANONYMOUS_FOLDER?e(ee,{css:B}):e(H,{css:B}),e("span",{css:he,children:i.name}),i.type===w.ANONYMOUS_FOLDER&&e(Y,{position:"top",content:f("drive.drive_builder.public_folder.tips"),children:e("span",{css:fe,children:e(U,{size:"16px"})})})]})})},ge=n`
  height: ${R}px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 4;
`,ye=()=>e("div",{css:ge,children:e(Z,{colorScheme:"techPurple"})}),xe=n`
  padding: 24px;
`,Ce=n`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  & > span {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
  }
`,be=a=>{const d=n`
    opacity: 0.5;
    transition: opacity 0.3s;
    user-select: none;
    pointer-events: none;
  `;return n`
    height: 100%;
    width: 100%;
    ${a&&d};
  `},Se=n`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
`,ve=n`
  height: ${R}px;
  width: 100%;
  position: relative;
  color: ${y("grayBlue","02")};
`,Fe=n`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
`,_e=n`
  display: flex;
  align-items: center;
  gap: 8px;
`,Le=n`
  color: ${y("grayBlue","02")};
  padding: 5px 8px !important;
`,Ie=n`
  font-size: 14px;
  font-weight: 500;
`,Ee=n`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  cursor: pointer;
`,we=a=>n`
  color: ${a?y("techPurple","03"):y("gray","04")};
`,Re=()=>{const{title:a,subTitle:d,currentFolderPath:r,setCurrentFolderPath:f,setFolderOperateVisible:p,setCreateFolderVisible:l,operateChildren:u}=t.useContext(T),{t:s}=_(),[g,i]=t.useState([]),[x,b]=t.useState(!1),C=t.useRef(0),S=t.useRef(""),L=t.useMemo(()=>r.split("/").map((c,o,h)=>{const F=h.slice(0,o+1).join("/"),D=o===h.length-1;return o===0?{title:s("drive.upload.modal.all"),path:te,last:D}:{path:F,title:c,last:D}}),[r,s]),I=t.useCallback((c=1,o)=>{g.length>=C.current||(b(!0),P({path:`/${o}`,page:c,limit:$,type:M.FOLDER,sortedBy:"name",sortedType:N.ascend}).then(h=>{const F=h.data.files??[];S.current=h.data.currentFolderID,C.current=h.data.total,i(g.concat(F))}).finally(()=>{b(!1)}))},[g]),v=t.useCallback(async c=>{b(!0);try{const o=await P({path:`/${r}`,page:1,limit:$,type:M.FOLDER,sortedBy:"name",sortedType:N.ascend},c),h=o.data.files??[];S.current=o.data.currentFolderID,C.current=o.data.total,i(h),b(!1)}catch(o){console.log("e",o)}},[r,S]);return t.useEffect(()=>{const c=new AbortController;return v(c.signal),()=>{c.abort()}},[v]),m("div",{css:xe,children:[m("div",{css:Ce,children:[e("span",{children:a??s("drive.upload.modal.title")}),e("span",{css:Ee,onClick:()=>p(!1),children:e(q,{size:"12px"})})]}),m("div",{css:Se,children:[m("span",{css:Ie,children:[d,": "]}),e(K,{blockRouterChange:!0,flexWrap:"wrap",onClickPath:(c,o)=>{!o&&f(c)},children:L.map((c,o)=>e(J,{href:c.path,children:e("span",{css:we(c.last),children:c.title})},o))})]}),m("div",{css:ve,children:[e("div",{css:be(x),children:g.length>0?e(me,{listData:g,updateListData:I},r):x?e(V,{}):e(pe,{})}),x&&e(ye,{})]}),m("div",{css:Fe,children:[e(E,{variant:"text",leftIcon:e(Q,{}),css:Le,onClick:()=>{l(!0)},children:s("drive.upload.modal.create_folder")}),m("div",{css:_e,children:[e(E,{colorScheme:"grayBlue",onClick:()=>p(!1),children:s("drive.upload.modal.cancel")}),u]})]}),e(ce,{currentFolderID:S.current})]})},Ne=()=>{const{folderOperateVisible:a,setFolderOperateVisible:d}=t.useContext(T);return e("div",{onClick:r=>{r.stopPropagation()},children:e(k,{visible:a,w:"auto",footer:!1,withoutPadding:!0,onCancel:()=>d(!1),children:e(Re,{})})})},$e=a=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 7H2V4C2 2.89543 2.89543 2 4 2H5.46483C5.79917 2 6.1114 2.16709 6.29687 2.44528L6.70313 3.05465C6.8886 3.33284 7.20083 3.49994 7.53517 3.49994H12C13.1046 3.49994 14 4.39537 14 5.49994V7ZM14 7.99994H2V11.9999C2 13.1045 2.89543 13.9999 4 13.9999H12C13.1046 13.9999 14 13.1045 14 11.9999V7.99994Z",fill:"#1D2129"}));export{T as F,te as R,$e as S,Ne as a};
//# sourceMappingURL=panelFolder-f2333d4f.js.map

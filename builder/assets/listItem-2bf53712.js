import{v as b,k as n,l as e,m as t,a1 as k,o as m,a6 as v,a5 as P,T as S}from"./@illa-design-1f43bb6c.js";import{r as c}from"./react-9b7e00e3.js";import{aB as I,u as O,en as T}from"./index-4dce6ee8.js";import{a as s}from"./@emotion-08a6282b.js";const _=a=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H12Z",fill:"currentColor"})),w=c.createContext({}),J=a=>{const{children:u,datasets:o,attrPath:r,handleUpdateDsl:d}=a,p=c.useCallback(l=>{const i=o.filter((C,x)=>x!==l);d(r,i)},[o,d,r]),F=c.useCallback(l=>{let i=o[l];if(!i)return;i={...i,isHidden:!i.isHidden};const C=I(o);C[l]=i,d(r,C)},[r,o,d]),$=c.useCallback(async()=>{let l=Array.isArray(o)?o:[];const i={id:b(),datasetName:"1",datasetValues:"",aggregationMethod:"SUM",type:"BAR",color:"blue"};d(r,[...l,i])},[r,o,d]),g={...a,handleAddDataSet:$,handleDeleteDataSet:p,handleHiddenDataset:F};return n(w.Provider,{value:g,children:u})},Q=s`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 16px;
`,R=s`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
    #eyeOnIcon {
      visibility: visible;
    }
  }
`,H=a=>s`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: ${a};
    border: 1px solid ${e(`--${t}-grayBlue-09`)};
  `,L=s`
  height: 100%;
  width: 200px;
  display: flex;
  align-items: center;
  padding-right: 8px;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: ${e(`--${t}-grayBlue-09`)};
  }
`,M=a=>s`
    width: 80px;
    white-space: nowrap;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 8px;
    font-size: 14px;
    flex: none;
    color: ${a?e(`--${t}-grayBlue-05`):e(`--${t}-grayBlue-02`)};
  `,N=a=>s`
    width: 64px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    flex: none;
    color: ${a?e(`--${t}-grayBlue-05`):e(`--${t}-grayBlue-03`)};
  `,A=s`
  font-size: 16px;
  color: ${e(`--${t}-grayBlue-04`)};
  cursor: pointer;
  :hover {
    color: ${e(`--${t}-grayBlue-02`)};
  }
`,j=s`
  visibility: hidden;
  ${A}
`,V=s`
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Y=s`
  width: 24px;
  height: 12px;
  border-radius: 2px;
  display: flex;
  overflow: hidden;
`,z=a=>s`
    width: 100%;
    height: 100%;
    background-color: ${a};
  `;s`
  width: 272px;
`;const y={"illa-preset":["#165DFF","#0FC6C2","#BDFF00","#FAC819","#F18765","#C465F1"],"illa-purple":[`${e(`--${t}-techPurple-n-01`)}`,`${e(`--${t}-techPurple-01`)}`,`${e(`--${t}-techPurple-02`)}`,`${e(`--${t}-techPurple-03`)}`,`${e(`--${t}-techPurple-04`)}`,`${e(`--${t}-techPurple-06`)}`],"illa-pink":[`${e(`--${t}-techPink-n-01`)}`,`${e(`--${t}-techPink-01`)}`,`${e(`--${t}-techPink-02`)}`,`${e(`--${t}-techPink-03`)}`,`${e(`--${t}-techPink-04`)}`,`${e(`--${t}-techPink-06`)}`],"cyan-tone":["#09A9AE","#14C9C9","#37D4CF","#5EDFD6","#89E9E0","#BFF4EC"],"green-tone":["#009A29","#00B42A","#23C343","#4CD263","#7BE188","#AFF0B5"],"blue-tone":["#104AE4","#1657FF","#4080FF","#6AA1FF","#94BFFF","#BEDAFF"],"orange-tone":["#E5700E","#FF7D00","#FF9A2E","#FFB65D","#FFCF8B","#FFE4BA"],"yellow-tone":["#E2A214","#F7BA1E","#F9CC45","#FADC6D","#FCE996","#FDF4BF"],"black-tone":[`${e(`--${t}-grayBlue-01`)}`,`${e(`--${t}-grayBlue-03`)}`,`${e(`--${t}-grayBlue-04`)}`,`${e(`--${t}-grayBlue-05`)}`,`${e(`--${t}-grayBlue-06`)}`,`${e(`--${t}-grayBlue-08`)}`]},X=y["illa-preset"].concat(["#5343D0","#C24499","#09A9AE","#009A29","#104AE4","#E5700E","#E2A214","#0B0C0F"]),ee=y["illa-preset"],G=Object.keys(y),U=({color:a})=>{if(G.includes(a)){const u=y[a];return n("div",{css:Y,children:u.map(o=>n("div",{css:z(o)},o))})}return n("div",{css:H(a)})},te=a=>{const{color:u,isHidden:o,datasetName:r,datasetMethod:d,index:p}=a,[F,$]=c.useState(!1),g=k(),{t:l}=O(),i=c.useCallback(()=>{$(!1)},[]),{attrPath:C,widgetDisplayName:x,childrenSetter:B,handleHiddenDataset:f,handleDeleteDataSet:D}=c.useContext(w),E=c.useCallback(()=>{g.show({id:"deleteDatasetItem",title:l("editor.component.delete_title",{displayName:r}),children:l("editor.component.delete_content"),cancelText:l("editor.component.cancel"),okText:l("editor.component.delete"),okButtonProps:{colorScheme:"red"},onOk:()=>{D(p)}})},[r,D,p,g,l]);return n(S,{withoutPadding:!0,colorScheme:"white",popupVisible:F,content:n(T,{title:r,handleCloseModal:i,attrPath:`${C}.${p}`,widgetDisplayName:x,childrenSetter:B}),trigger:"click",showArrow:!1,position:"left-start",clickOutsideToClose:!0,onVisibleChange:h=>{$(h)},children:m("div",{css:R,children:[m("div",{css:L,children:[n(U,{color:u}),n("span",{css:M(o),children:r}),n("span",{css:N(o),children:d})]}),m("div",{css:V,children:[o?n(v,{css:A,onClick:h=>{h.stopPropagation(),f(p)}}):n(P,{css:j,id:"eyeOnIcon",onClick:h=>{h.stopPropagation(),f(p)}}),n(_,{css:A,onClick:h=>{h.stopPropagation(),E()}})]})]})})};export{y as C,J as D,te as L,ee as a,G as b,Q as c,X as d,U as e};
//# sourceMappingURL=listItem-2bf53712.js.map

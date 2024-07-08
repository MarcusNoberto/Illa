import{v as b,k as s,l as e,m as t,a1 as k,o as m,a6 as v,a5 as P,T as S}from"./@illa-design-402f214a.js";import{r as c}from"./react-9b7e00e3.js";import{aB as I,u as O,eo as T}from"./index-2f1869ab.js";import{a as n}from"./@emotion-4f16718e.js";const _=o=>c.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H12Z",fill:"currentColor"})),w=c.createContext({}),J=o=>{const{children:u,datasets:a,attrPath:r,handleUpdateDsl:d}=o,p=c.useCallback(l=>{const i=a.filter((C,x)=>x!==l);d(r,i)},[a,d,r]),F=c.useCallback(l=>{let i=a[l];if(!i)return;i={...i,isHidden:!i.isHidden};const C=I(a);C[l]=i,d(r,C)},[r,a,d]),$=c.useCallback(async()=>{let l=Array.isArray(a)?a:[];const i={id:b(),datasetName:"1",datasetValues:"",aggregationMethod:"SUM",type:"BAR",color:"blue"};d(r,[...l,i])},[r,a,d]),g={...o,handleAddDataSet:$,handleDeleteDataSet:p,handleHiddenDataset:F};return s(w.Provider,{value:g,children:u})},Q=n`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 16px;
`,R=n`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
    #eyeOnIcon {
      visibility: visible;
    }
  }
`,H=o=>n`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: ${o};
    border: 1px solid ${e(`--${t}-grayBlue-09`)};
  `,L=n`
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
`,M=o=>n`
    width: 80px;
    white-space: nowrap;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 8px;
    font-size: 14px;
    flex: none;
    color: ${o?e(`--${t}-grayBlue-05`):e(`--${t}-grayBlue-02`)};
  `,N=o=>n`
    width: 64px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    flex: none;
    color: ${o?e(`--${t}-grayBlue-05`):e(`--${t}-grayBlue-03`)};
  `,A=n`
  font-size: 16px;
  color: ${e(`--${t}-grayBlue-04`)};
  cursor: pointer;
  :hover {
    color: ${e(`--${t}-grayBlue-02`)};
  }
`,j=n`
  visibility: hidden;
  ${A}
`,V=n`
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Y=n`
  width: 24px;
  height: 12px;
  border-radius: 2px;
  display: flex;
  overflow: hidden;
`,z=o=>n`
    width: 100%;
    height: 100%;
    background-color: ${o};
  `;n`
  width: 272px;
`;const y={"illa-preset":["#165DFF","#0FC6C2","#BDFF00","#FAC819","#F18765","#C465F1"],"illa-purple":[`${e(`--${t}-techPurple-n-01`)}`,`${e(`--${t}-techPurple-01`)}`,`${e(`--${t}-techPurple-02`)}`,`${e(`--${t}-techPurple-03`)}`,`${e(`--${t}-techPurple-04`)}`,`${e(`--${t}-techPurple-06`)}`],"illa-pink":[`${e(`--${t}-techPink-n-01`)}`,`${e(`--${t}-techPink-01`)}`,`${e(`--${t}-techPink-02`)}`,`${e(`--${t}-techPink-03`)}`,`${e(`--${t}-techPink-04`)}`,`${e(`--${t}-techPink-06`)}`],"cyan-tone":["#09A9AE","#14C9C9","#37D4CF","#5EDFD6","#89E9E0","#BFF4EC"],"green-tone":["#009A29","#00B42A","#23C343","#4CD263","#7BE188","#AFF0B5"],"blue-tone":["#104AE4","#1657FF","#4080FF","#6AA1FF","#94BFFF","#BEDAFF"],"orange-tone":["#E5700E","#FF7D00","#FF9A2E","#FFB65D","#FFCF8B","#FFE4BA"],"yellow-tone":["#E2A214","#F7BA1E","#F9CC45","#FADC6D","#FCE996","#FDF4BF"],"black-tone":[`${e(`--${t}-grayBlue-01`)}`,`${e(`--${t}-grayBlue-03`)}`,`${e(`--${t}-grayBlue-04`)}`,`${e(`--${t}-grayBlue-05`)}`,`${e(`--${t}-grayBlue-06`)}`,`${e(`--${t}-grayBlue-08`)}`]},X=y["illa-preset"].concat(["#5343D0","#C24499","#09A9AE","#009A29","#104AE4","#E5700E","#E2A214","#0B0C0F"]),ee=y["illa-preset"],G=Object.keys(y),U=({color:o})=>{if(G.includes(o)){const u=y[o];return s("div",{css:Y,children:u.map(a=>s("div",{css:z(a)},a))})}return s("div",{css:H(o)})},te=o=>{const{color:u,isHidden:a,datasetName:r,datasetMethod:d,index:p}=o,[F,$]=c.useState(!1),g=k(),{t:l}=O(),i=c.useCallback(()=>{$(!1)},[]),{attrPath:C,widgetDisplayName:x,childrenSetter:B,handleHiddenDataset:f,handleDeleteDataSet:D}=c.useContext(w),E=c.useCallback(()=>{g.show({id:"deleteDatasetItem",title:l("editor.component.delete_title",{displayName:r}),children:l("editor.component.delete_content"),cancelText:l("editor.component.cancel"),okText:l("editor.component.delete"),okButtonProps:{colorScheme:"red"},onOk:()=>{D(p)}})},[r,D,p,g,l]);return s(S,{withoutPadding:!0,colorScheme:"white",popupVisible:F,content:s(T,{title:r,handleCloseModal:i,attrPath:`${C}.${p}`,widgetDisplayName:x,childrenSetter:B}),trigger:"click",showArrow:!1,position:"left-start",clickOutsideToClose:!0,onVisibleChange:h=>{$(h)},children:m("div",{css:R,children:[m("div",{css:L,children:[s(U,{color:u}),s("span",{css:M(a),children:r}),s("span",{css:N(a),children:d})]}),m("div",{css:V,children:[a?s(v,{css:A,onClick:h=>{h.stopPropagation(),f(p)}}):s(P,{css:j,id:"eyeOnIcon",onClick:h=>{h.stopPropagation(),f(p)}}),s(_,{css:A,onClick:h=>{h.stopPropagation(),E()}})]})]})})};export{y as C,J as D,te as L,ee as a,G as b,Q as c,X as d,U as e};
//# sourceMappingURL=listItem-00848ca6.js.map

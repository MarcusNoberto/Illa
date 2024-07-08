import{a as r}from"./@emotion-08a6282b.js";import{af as n}from"./@illa-design-1f43bb6c.js";const i=e=>{switch(e){case"small":return"0px 2px 8px rgba(0, 0, 0, 0.08);";case"medium":return"0px 4px 16px rgba(0, 0, 0, 0.08);";case"large":return"0px 8px 20px rgba(0, 0, 0, 0.12);";case"none":default:return"unset"}},h=(e,t="left",a=!1)=>r`
    width: 100%;
    padding-left: ${t==="top"||a?0:`calc(${e}% + 8px)`};
  `,f=(e="left")=>{if(e==="top")return r``;if(e==="left")return r`
      display: flex;
    `;if(e==="right")return r`
      display: flex;
      flex-direction: row-reverse;
    `},y=(e="left")=>{const t=f(e);return r`
    ${t};
    width: 100%;
    height: 100%;
    align-items: center;
  `},u=(e,t)=>e==="CONTAINER_WIDGET"||e==="LIST_WIDGET"||e==="MODAL_WIDGET"||e==="FORM_WIDGET"?t?n(t)||t:"white":"transparent",g=(e,t,a,p,l,c)=>{let s="unset";e&&t&&(s=`${t} solid ${e?n(e)||e:"transparent"}`);const o=i(l);return r`
    width: 100%;
    height: 100%;
    border: ${s};
    border-radius: ${a};
    background-color: ${u(c,p)};
    box-shadow: ${o};
    overflow-x: hidden;
  `};export{f as a,h as b,y as c,g as d,i as g};
//# sourceMappingURL=style-49f23046.js.map

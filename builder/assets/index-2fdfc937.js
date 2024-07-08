import{l as g,m as d,k as n,bP as u}from"./@illa-design-1f43bb6c.js";import{dV as m,e3 as f}from"./index-4dce6ee8.js";import{a as r}from"./@emotion-08a6282b.js";function y(i,o,t){const e=r`
    display: inline-block;
    background: ${i};
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;
    color: ${g(`--${d}-white-01`)};
  `;return o==="components"?t==="list"?r`
        ${e};
        width: 24px;
        height: 24px;
        line-height: 24px;
      `:r`
      ${e};
      width: 14px;
      height: 14px;
      line-height: 14px;
      font-weight: 500;
    `:r`
    ${e};
    width: 32px;
    height: 32px;
    line-height: 32px;
  `}const $=(i,o)=>{const t=r`
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    flex-shrink: 0;
  `;return i==="components"?o==="list"?r`
        ${t};
        width: 24px;
        height: 24px;
        line-height: 24px;
      `:r`
      ${t};
      width: 14px;
      height: 14px;
      line-height: 14px;
    `:r`
    ${t};
    width: 32px;
    height: 32px;
    line-height: 32px;
  `};r`
  z-index: 10;
`;const b=i=>{if(!i)return"U";const o=i.trim(),t=/^./u,e=o.match(t);return e?e[0].toUpperCase():"U"},k=i=>{const{userID:o,nickname:t,avatar:e,showType:s,type:a,showTooltips:l,className:h}=i,c=m(o||""),p=b(t),x=e?n("img",{src:e?`${f}${e}`:void 0,css:$(s,a),className:h}):n("span",{css:y(c,s,a),className:h,children:p});return n(u,{trigger:"hover",content:t,disabled:!l,hasCloseIcon:!1,position:"top",colorScheme:"grayBlue",children:x})};export{k as A};
//# sourceMappingURL=index-2fdfc937.js.map

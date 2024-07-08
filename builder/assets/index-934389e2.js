import{n as s,k as a,T as n}from"./@illa-design-1f43bb6c.js";import{r as p}from"./react-9b7e00e3.js";import{ed as c}from"./index-4dce6ee8.js";import{a as t}from"./@emotion-08a6282b.js";const m=r=>{switch(r){case"medium":return t`
        font-size: 14px;
        color: ${s("grayBlue","02")};
      `;case"small":return t`
        font-size: 12px;
        color: ${s("grayBlue","03")};
      `}};function i(r,e){const o=r?t`
        border-bottom: 1px dashed ${s("grayBlue","06")};
      `:t``;return t`
    height: 22px;
    line-height: 22px;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    ${m(e)}
    ${o};
  `}const d=p.memo(r=>{const{labelDesc:e,labelName:o,labelSize:l="medium"}=r;return e?a(n,{content:a(c,{textString:e}),trigger:"hover",position:"left",maxW:"240px",disabled:!e,children:a("span",{css:i(!!e,l),children:o})}):a("span",{css:i(!!e,l),children:o})});d.displayName="PanelLabel";export{d as P};
//# sourceMappingURL=index-934389e2.js.map

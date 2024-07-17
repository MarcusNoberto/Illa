import{F as E,M as fe,u as k,G as B,V as j,P as F,U as N,K as M,J as g,S as H,_ as f,Z as me,$ as xe,a0 as $,a1 as Ce,W as ye,H as P,I as Z}from"./index-23da02d2.js";import{u as be,L as we}from"./index-36caf0ff.js";import{r as ve,o as _e,p as Ie,q as Re,s as Se,v as Ee,w as Me,x as Le,u as ke,k as U,j as q,M as Te,T as G,D as Ve,n as $e}from"./hook-1fb3c393.js";import{k as o,J as He,N as Be,q as v,O as A,U as De,B as D,V as Pe,W as Ze,X as Ae,S as W,y as Q,Y as ze,f as r,l as h,g as C,h as y,Z as Oe,P as je,E as Fe}from"./@illa-design-df878cb8.js";import{r as a,i as Ne}from"./react-bc846394.js";import{I as L}from"./interface-8df5fe4c.js";import{b as K,d as Y,a as J}from"./index-21f5fbe6.js";import{F as X}from"./index-a11029c0.js";import{e as T}from"./@emotion-28b7fe46.js";import{I as Ue,G as qe,A as Ge,a as We,b as Qe,O as Ke,C as Ye,c as Je,F as Xe,P as e1,H as t1,U as r1,R as a1,M as o1,d as n1,e as i1,f as l1,S as s1,N as c1,T as d1,g as p1,h as u1,i as h1,j as g1,k as f1,l as m1,D as x1,E as C1,m as y1,n as b1}from"./upstash-7245fd7f.js";import{a as R}from"./style-56e482f1.js";var I=(t=>(t[t.GPT_3_5=1]="GPT_3_5",t[t.GPT_4=3]="GPT_4",t[t.GLM_4=12]="GLM_4",t[t.MISTRAL=13]="MISTRAL",t[t.CLAUDE=15]="CLAUDE",t[t.MOONSHOT=16]="MOONSHOT",t))(I||{});function w1(t,e){switch(t){case"supabasedb":return o(b1,{size:e});case"graphql":return o(y1,{size:e});case"elasticsearch":return o(C1,{size:e});case"dynamodb":return o(x1,{size:e});case"snowflake":return o(m1,{size:e});case"smtp":return o(f1,{size:e});case"googlesheets":return o(g1,{size:e});case"hfendpoint":case"huggingface":return o(h1,{size:e});case"transformer":return o(u1,{size:e});case"mariadb":return o(p1,{size:e});case"tidb":return o(d1,{size:e});case"neon":return o(c1,{size:e});case"s3":return o(s1,{size:e});case"mysql":return o(l1,{size:e});case"mssql":return o(i1,{size:e});case"restapi":return o(n1,{size:e});case"mongodb":return o(o1,{size:e});case"redis":return o(a1,{size:e});case"upstash":return o(r1,{size:e});case"hydra":return o(t1,{size:e});case"postgresql":return o(e1,{size:e});case"firebase":return o(Xe,{size:e});case"clickhouse":return o(Je,{size:e});case"couchdb":return o(Ye,{size:e});case"oracle9i":case"oracle":return o(Ke,{size:e});case"appwrite":return o(Qe,{size:e});case"airtable":return o(We,{size:e});case"aiagent":return o(Ge,{size:e});case"globalData":return o(qe,{size:e});case"illadrive":return o(Ue,{size:e})}return null}const v1=t=>{const{t:e}=E(),{onDeleteResource:i,onEditResource:l,resourceID:n}=t,{track:c}=a.useContext(fe),d=He(),s=Be(),p=a.useCallback(async()=>{c==null||c(L.CLICK,{element:"resource_more_delete",parameter5:n},"both"),c==null||c(L.SHOW,{element:"resource_more_delete_modal",parameter5:n},"both");const u=d.show({blockOkHide:!0,title:e("dashboard.common.delete_title"),children:e("dashboard.common.delete_content"),cancelText:e("dashboard.common.delete_cancel_text"),okText:e("dashboard.common.delete_ok_text"),okButtonProps:{colorScheme:"red"},closable:!1,onOk:async()=>{d.update(u,{okLoading:!0}),c==null||c(L.CLICK,{element:"resource_more_delete_modal_delete",parameter5:n},"both"),d.close(u),d.update(u,{okLoading:!1});try{await i(n),s.success({content:e("dashboard.resource.delete_success")})}catch{s.error({content:e("dashboard.resource.delete_fail")})}},onCancel:()=>{c==null||c(L.CLICK,{element:"resource_more_delete_modal_close",parameter5:n},"both")}})},[s,d,i,n,e,c]);return o(Ze,{position:"bottom-end",trigger:"click",triggerProps:{closeDelay:0,openDelay:0},dropList:v(De,{w:"184px",children:[o(A,{value:"edit",title:e("dashboard.common.edit"),onClick:()=>l(n)},"edit"),o(A,{value:"delete",title:e("dashboard.common.delete"),deleted:!0,onClick:p},"delete")]}),children:o(D,{variant:"text",colorScheme:"grayBlue",leftIcon:o(Pe,{size:"14px"})})})},ee=t=>{const{resourceType:e,resourceName:i,dbName:l,resourceID:n,onEditResource:c,onDeleteResource:d}=t,s=be(),{t:p}=E(),u=()=>{c==null||c(n)};return v("div",{css:ve,children:[v("header",{css:_e,children:[v("div",{css:Ie,children:[o(a.Suspense,{children:Re(e,"24px")}),o("h6",{css:Se,children:i})]}),!s&&o(v1,{resourceID:n,onEditResource:u,onDeleteResource:d})]}),o("p",{css:Ee(!!l),children:l??"Null"}),v("footer",{css:Me,children:[o("p",{css:Le,children:e}),!s&&o(D,{leftIcon:o(Ae,{}),colorScheme:"grayBlue",variant:"text",className:"editActionButton",onClick:u,children:p("dashboard.common.edit")})]})]})},te=t=>{const e=k(B);return ke(["/resources",e==null?void 0:e.id,t],([i,l])=>t?j({url:i,method:"GET"},{teamID:l}).then(n=>n.data):[])},_1=async(t,e)=>j({url:`/resources/${t}`,method:"DELETE"},{teamID:e}),re=t=>{let e;switch(t.resourceType){case"firebase":case"smtp":case"restapi":case"elasticsearch":case"dynamodb":case"s3":case"huggingface":case"hfendpoint":case"couchdb":case"googlesheets":case"airtable":break;case"clickhouse":case"supabasedb":case"postgresql":case"hydra":case"mysql":case"tidb":case"mariadb":e=t.content.databaseName;break;case"neon":e=t.content.databaseName;break;case"redis":case"upstash":e=t.content.databaseIndex.toString();break;case"mssql":e=t.content.databaseName;break;case"mongodb":const i=t;i.content.configType=="gui"&&(e=i.content.configContent.databaseName);break;case"snowflake":e=t.content.database;break;case"appwrite":e=t.content.databaseID;break;case"oracle":case"oracle9i":e=t.content.name;break}return e},I1=T`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,R1=T`
  display: grid;
  grid-template-columns: 1;
  grid-gap: 24px 24px;
  overflow: auto;
  padding: 0 16px;
  padding-bottom: 24px;
`,S1=()=>{const{t}=E(),e=k(B),i=K((e==null?void 0:e.myRole)??N.VIEWER,J.RESOURCE,F(e),Y.VIEW),{data:l,isLoading:n}=te(i),[c,d]=U(),[s,p]=q(l??[],["resourceName"]);return M("div",{css:I1,children:[g(Te,{titleName:t("page.workspace.menu.resources"),actionGroupComponent:g(W,{w:"100%",size:"large",colorScheme:"techPurple",onChange:p,placeholder:t("dashboard.search"),allowClear:!0})}),n?g(X,{}):s.length>0?M(H,{children:[c&&g(Q,{direction:"horizontal"}),g("div",{css:R1,onScroll:d,children:s==null?void 0:s.map(u=>g(ee,{resourceType:u.resourceType,resourceName:u.resourceName,resourceID:u.resourceID,dbName:re(u)},u.resourceID))})]}):g(G,{loading:!1,showCreate:!1})]})},c2=a.createContext({});a.lazy(()=>f(()=>import("./index-d72ac16b.js"),["assets/index-d72ac16b.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/Trans-4db37129.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-2bd9fceb.js"),["assets/index-2bd9fceb.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/style-99767516.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/index-1e58851c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-9d6ef872.js"),["assets/index-9d6ef872.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-30ad7309.js"),["assets/index-30ad7309.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/style-99767516.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/index-1e58851c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-c07101f7.js"),["assets/index-c07101f7.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/style-99767516.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/index-1e58851c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-3bd6742a.js"),["assets/index-3bd6742a.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/style-99767516.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/index-1e58851c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-c885c865.js"),["assets/index-c885c865.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/Trans-4db37129.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-9af7a5ba.js"),["assets/index-9af7a5ba.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/index-cfc01d0e.js","assets/Trans-4db37129.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-6456cb78.js"),["assets/index-6456cb78.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/style-99767516.js","assets/index-d73a59cf.js","assets/index-23da02d2.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/index-1e58851c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-793d83ac.js"),["assets/index-793d83ac.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/style-ddcba72a.js","assets/index-23da02d2.js","assets/Trans-4db37129.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-18aab74a.js"),["assets/index-18aab74a.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/style-ddcba72a.js","assets/index-23da02d2.js","assets/Trans-4db37129.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-dc7e13a7.js"),["assets/index-dc7e13a7.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/index-d73a59cf.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-ac933c13.js"),["assets/index-ac933c13.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/style-99767516.js","assets/index-1e58851c.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-44695051.js"),["assets/index-44695051.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-1e58851c.js","assets/index-23da02d2.js","assets/style-99767516.js","assets/Trans-4db37129.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-3670e665.js"),["assets/index-3670e665.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/index-cfc01d0e.js","assets/Trans-4db37129.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-9b8e3b61.js"),["assets/index-9b8e3b61.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-d791384a.js"),["assets/index-d791384a.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-5a4c86de.js"),["assets/index-5a4c86de.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/style-99767516.js","assets/index-d73a59cf.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/index-1e58851c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-64feb237.js"),["assets/index-64feb237.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/index-1e58851c.js","assets/style-99767516.js","assets/Trans-4db37129.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-5125029d.js"),["assets/index-5125029d.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/style-99767516.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/index-1e58851c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));a.lazy(()=>f(()=>import("./index-5c438816.js"),["assets/index-5c438816.js","assets/@illa-design-df878cb8.js","assets/react-bc846394.js","assets/@emotion-28b7fe46.js","assets/index-23da02d2.js","assets/style-99767516.js","assets/index-36caf0ff.js","assets/hook-1fb3c393.js","assets/index-21f5fbe6.js","assets/interface-8df5fe4c.js","assets/index-1e58851c.js","assets/utils-32c80abc.js","assets/style-56e482f1.js","assets/upstash-7245fd7f.js","assets/index-a11029c0.js","assets/index.esm-11ba4214.js","assets/lodash-lib-cfb0e9ed.js"]));ze();r`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;function E1(t){switch(t){case"supabasedb":return"Supabase DB";case"mysql":return"MySQL";case"mssql":return"Microsoft SQL";case"oracle9i":return"Oracle DB 9i";case"oracle":return"Oracle DB";case"restapi":return"REST API";case"graphql":return"GraphQL";case"mongodb":return"MongoDB";case"redis":return"Redis";case"upstash":return"Upstash";case"elasticsearch":return"Elastic Search";case"dynamodb":return"DynamoDB";case"snowflake":return"Snowflake";case"postgresql":return"PostgreSQL";case"hydra":return"Hydra";case"mariadb":return"MariaDB";case"tidb":return"TiDB";case"neon":return"Neon";case"smtp":return"SMTP";case"googlesheets":return"Google Sheets";case"huggingface":return"Hugging Face";case"hfendpoint":return"Hugging Face";case"firebase":return"Firebase";case"clickhouse":return"ClickHouse";case"couchdb":return"CouchDB";case"appwrite":return"Appwrite";case"s3":return"Amazon S3";case"transformer":return"Transformer";case"airtable":return"Airtable";case"aiagent":return"AI Agent";case"globalData":return"Global Data";case"illadrive":return"ILLA Drive";default:return""}}function M1(t){const{t:e}=E();switch(t){case"huggingface":return"Inference API";case"hfendpoint":return"Inference Endpoint";case"oracle":return e("editor.action.form.label.new_oracle");case"oracle9i":return e("editor.action.form.label.old_oracle");default:return""}}const d2=t=>t!=null&&t.trim()!="",p2=t=>/(^(127\.|0\.0\.0\.0)(\.*\d*)+$)|(^localhost)/.test(t),u2=t=>me((t??"").trim())?!0:xe().t("editor.action.resource.error.invalid_url"),ae=r`
  display: flex;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  align-items: center;
  border: none;
  border-radius: 2px !important;
`;r`
  ${ae};
  padding: 1px 16px 1px 1px;
  gap: 8px;
  box-shadow:
    0px 1px 1px 0px rgba(0, 0, 0, 0.24),
    0px 0px 1px 0px rgba(0, 0, 0, 0.12);
  background-color: rgba(66, 133, 244, 1);
  color: ${h("white","01")};
  font-family: Helvetica Neue;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
  &:hover {
    background-color: rgba(51, 103, 214, 1);
  }
  &:disabled {
    color: rgba(0, 0, 0, 0.4);
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, 0.09);
    box-shadow: none;
  }
`;r`
  width: 38px;
  height: 38px;
`;r`
  ${ae};
  height: 40px !important;
`;r`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;r`
  width: 1032px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;r`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;r`
  display: flex;
  align-items: center;
  gap: 8px;
`;r`
  font-size: 16px;
  font-weight: 500;
  color: ${h("grayBlue","02")};
  margin: 0;
  padding: 0;
`;r`
  display: flex;
  gap: 8px;
  align-items: center;
`;const L1=[{resourceType:"postgresql",hidden:!1},{resourceType:"mysql",hidden:!1},{resourceType:"mssql",hidden:!1},{resourceType:"oracle",hidden:!1},{resourceType:"oracle9i",hidden:!Ce},{resourceType:"mariadb",hidden:!1},{resourceType:"tidb",hidden:!1},{resourceType:"neon",hidden:!1},{resourceType:"redis",hidden:!1},{resourceType:"upstash",hidden:!1},{resourceType:"mongodb",hidden:!1},{resourceType:"elasticsearch",hidden:!1},{resourceType:"dynamodb",hidden:!1},{resourceType:"snowflake",hidden:!1},{resourceType:"supabasedb",hidden:!1},{resourceType:"clickhouse",hidden:!1},{resourceType:"couchdb",hidden:!1},{resourceType:"appwrite",hidden:!1},{resourceType:"hydra",hidden:!1}],k1=[{resourceType:"restapi",hidden:!1},{resourceType:"s3",hidden:!1},{resourceType:"firebase",hidden:!1},{resourceType:"graphql",hidden:!1},{resourceType:"smtp",hidden:!1},{resourceType:"googlesheets",hidden:!1},{resourceType:"airtable",hidden:!1},{resourceType:"huggingface",hidden:!1},{resourceType:"hfendpoint",hidden:!1}],T1=[{title:$.t("editor.action.type.database"),item:L1,category:"databases"},{title:$.t("editor.action.type.api"),item:k1,category:"apis"},{title:$.t("editor.action.form.title.feedback"),item:[],category:"notFind"}];r`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;r`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: ${h("grayBlue","02")};
`;r`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${h("grayBlue","04")};
`;r`
  padding: 16px;
  border: 1px solid ${h("grayBlue","08")};
  border-radius: 8px;
`;r`
  line-height: 22px;
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  color: ${h("grayBlue","02")};
`;r`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  gap: 16px;
  width: 364px;
`;r`
  display: block;
`;r`
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 1032px;
`;r`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 16px 0;
`;r`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;const oe=r`
  display: flex;
  padding: 0 0 0 16px;
  height: 56px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border: solid 1px ${C(`--${y}-grayBlue-08`)};
  position: relative;
  background-color: ${C(`--${y}-white-01`)};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 4px 10px 0 ${C(`--${y}-blackAlpha-07`)};
    background-color: ${C(`--${y}-techPurple-08`)};
    border-color: ${C(`--${y}-techPurple-03`)};
  }
`,ne=r`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: ${h("grayBlue","02")};
`,ie=r`
  display: inline-flex;
  flex-direction: column;
  margin-left: 12px;
`,V1=r`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${h("grayBlue","04")};
`,le=t=>{const{resourceType:e,onSelect:i}=t,l=M1(e);return v("div",{css:oe,onClick:()=>{i==null||i(e)},children:[w1(e,"24px"),v("div",{css:ie,children:[o("div",{css:ne,children:E1(e)}),l!==""&&o("div",{css:V1,children:l})]})]})};le.displayName="ResourceCard";const se=()=>{const{t}=E();return v("div",{css:oe,onClick:()=>{window.open("https://builder.illacloud.com/illacloud/deploy/app/ILAbx4p1C7Q2","_blank")},children:[o(Oe,{size:"24px"}),o("div",{css:ie,children:o("div",{css:ne,children:t("editor.action.form.option.tell_us")})})]})};se.displayName="SuggestResourceCard";const $1=r`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0 24px 16px 24px;
`,H1=r`
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${h("grayBlue","04")};
`,z=r`
  padding: 8px 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));
`,ce=t=>{const{onSelect:e,filterResourceType:i}=t,l=T1.filter(n=>{const{category:c,item:d}=n;return c==="notFind"?!0:d.filter(({hidden:p})=>!p).filter(({resourceType:p})=>i?i(p):p).length>0});return o("div",{css:$1,children:l.map(({title:n,item:c,category:d})=>v("div",{children:[o("span",{css:H1,children:n}),d==="notFind"?o("div",{css:z,children:o(se,{})}):o("div",{css:z,children:c.filter(({hidden:s})=>!s).filter(({resourceType:s})=>i?i(s):s).map(({resourceType:s})=>o(le,{onSelect:p=>{e(p)},resourceType:s},s))})]},d))})};ce.displayName="ResourceTypeSelector";r`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 16px;
`;r`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;r`
  padding: 1px 8px;
`;r`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${h("grayBlue","02")};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;const B1=t=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 512 512",...t},a.createElement("rect",{fill:"#CC9B7A",width:512,height:512,rx:104.187,ry:105.042}),a.createElement("path",{fill:"#1F1F1E",fillRule:"nonzero",d:"M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"})),D1=t=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M21.8182 1.07812H17.4546V5.44176H21.8182V1.07812Z",fill:"black"}),a.createElement("path",{d:"M23.9999 1.07812H19.6362V5.44176H23.9999V1.07812Z",fill:"#F7D046"}),a.createElement("path",{d:"M4.36364 1.07812H0V5.44176H4.36364V1.07812Z",fill:"black"}),a.createElement("path",{d:"M4.36364 5.44189H0V9.80553H4.36364V5.44189Z",fill:"black"}),a.createElement("path",{d:"M4.36364 9.80518H0V14.1688H4.36364V9.80518Z",fill:"black"}),a.createElement("path",{d:"M4.36364 14.1689H0V18.5326H4.36364V14.1689Z",fill:"black"}),a.createElement("path",{d:"M4.36364 18.5327H0V22.8964H4.36364V18.5327Z",fill:"black"}),a.createElement("path",{d:"M6.54528 1.07812H2.18164V5.44176H6.54528V1.07812Z",fill:"#F7D046"}),a.createElement("path",{d:"M23.9999 5.44189H19.6362V9.80553H23.9999V5.44189Z",fill:"#F2A73B"}),a.createElement("path",{d:"M6.54528 5.44189H2.18164V9.80553H6.54528V5.44189Z",fill:"#F2A73B"}),a.createElement("path",{d:"M17.4545 5.44189H13.0908V9.80553H17.4545V5.44189Z",fill:"black"}),a.createElement("path",{d:"M19.6366 5.44189H15.2729V9.80553H19.6366V5.44189Z",fill:"#F2A73B"}),a.createElement("path",{d:"M10.909 5.44189H6.54541V9.80553H10.909V5.44189Z",fill:"#F2A73B"}),a.createElement("path",{d:"M15.2728 9.80518H10.9092V14.1688H15.2728V9.80518Z",fill:"#EE792F"}),a.createElement("path",{d:"M19.6366 9.80518H15.2729V14.1688H19.6366V9.80518Z",fill:"#EE792F"}),a.createElement("path",{d:"M10.909 9.80518H6.54541V14.1688H10.909V9.80518Z",fill:"#EE792F"}),a.createElement("path",{d:"M13.0907 14.1689H8.72705V18.5326H13.0907V14.1689Z",fill:"black"}),a.createElement("path",{d:"M15.2728 14.1689H10.9092V18.5326H15.2728V14.1689Z",fill:"#EB5829"}),a.createElement("path",{d:"M23.9999 9.80518H19.6362V14.1688H23.9999V9.80518Z",fill:"#EE792F"}),a.createElement("path",{d:"M6.54528 9.80518H2.18164V14.1688H6.54528V9.80518Z",fill:"#EE792F"}),a.createElement("path",{d:"M21.8182 14.1689H17.4546V18.5326H21.8182V14.1689Z",fill:"black"}),a.createElement("path",{d:"M23.9999 14.1689H19.6362V18.5326H23.9999V14.1689Z",fill:"#EB5829"}),a.createElement("path",{d:"M21.8182 18.5327H17.4546V22.8964H21.8182V18.5327Z",fill:"black"}),a.createElement("path",{d:"M6.54528 14.1689H2.18164V18.5326H6.54528V14.1689Z",fill:"#EB5829"}),a.createElement("path",{d:"M23.9999 18.5327H19.6362V22.8964H23.9999V18.5327Z",fill:"#EA3326"}),a.createElement("path",{d:"M6.54528 18.5327H2.18164V22.8964H6.54528V18.5327Z",fill:"#EA3326"})),P1=t=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"85.000000pt",height:"86.000000pt",viewBox:"0 0 85.000000 86.000000",preserveAspectRatio:"xMidYMid meet",...t},a.createElement("g",{transform:"translate(0.000000,86.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},a.createElement("path",{d:"M145 831 c-50 -22 -96 -67 -121 -118 -17 -34 -19 -63 -19 -289 l0 -251 30 -49 c21 -33 48 -60 85 -81 l54 -33 246 0 c244 0 247 0 297 25 60 30 100 78 119 143 20 66 20 454 -1 511 -22 63 -51 98 -108 131 l-52 30 -245 0 c-216 0 -250 -3 -285 -19z m364 -138 c46 -15 138 -79 128 -90 -5 -4 -308 75 -316 82 -6 7 63 23 100 24 20 1 60 -6 88 -16z m-90 -54 c64 -17 118 -33 120 -35 2 -2 -4 -12 -13 -23 -17 -18 -14 -20 69 -42 58 -15 89 -28 96 -41 26 -48 10 -47 -241 20 -135 36 -247 67 -250 70 -7 6 77 82 91 82 7 0 64 -14 128 -31z m-94 -105 c71 -19 131 -37 134 -39 2 -3 -2 -11 -9 -20 -7 -9 -11 -18 -8 -21 3 -3 39 -14 79 -25 190 -52 177 -46 171 -74 -2 -14 -8 -25 -13 -25 -16 0 -520 138 -526 144 -7 7 26 96 35 96 4 0 66 -16 137 -36z m-40 -118 c114 -32 120 -35 117 -58 -2 -24 3 -27 123 -59 l125 -33 -23 -24 -24 -23 -214 57 c-124 33 -219 63 -226 72 -14 17 -18 102 -5 102 4 -1 61 -16 127 -34z m27 -137 c69 -19 77 -23 80 -47 3 -23 11 -28 61 -41 31 -8 57 -18 57 -22 0 -11 -87 -21 -127 -13 -62 11 -119 43 -163 90 -22 24 -40 49 -40 55 0 12 6 11 132 -22z"}))),de=t=>a.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M13.7122 6.7894C13.8613 6.34045 13.9129 5.86484 13.8635 5.39437C13.8141 4.92389 13.6648 4.46938 13.4257 4.06118C13.0713 3.4442 12.53 2.95571 11.8801 2.66616C11.2301 2.3766 10.5049 2.30094 9.80919 2.45007C9.41391 2.01038 8.9099 1.68244 8.34777 1.49919C7.78565 1.31593 7.1852 1.28382 6.60673 1.40606C6.02826 1.5283 5.49215 1.80061 5.05222 2.19562C4.6123 2.59063 4.28406 3.09444 4.10046 3.65646C3.63695 3.75151 3.19905 3.9444 2.81605 4.22223C2.43305 4.50007 2.11376 4.85646 1.87952 5.26757C1.52121 5.88353 1.36807 6.59748 1.44224 7.3062C1.51641 8.01493 1.81405 8.6817 2.29213 9.21013C2.1425 9.65887 2.09042 10.1344 2.13938 10.6049C2.18834 11.0754 2.33721 11.53 2.57602 11.9383C2.93093 12.5555 3.47264 13.0441 4.12308 13.3337C4.77352 13.6232 5.4991 13.6988 6.19524 13.5495C6.50928 13.9031 6.89514 14.1857 7.32708 14.3783C7.75902 14.571 8.22708 14.6692 8.70002 14.6666C9.41315 14.6672 10.108 14.4413 10.6844 14.0213C11.2607 13.6013 11.6887 13.0091 11.9066 12.33C12.37 12.2348 12.8079 12.0418 13.1908 11.764C13.5738 11.4862 13.8932 11.1299 14.1275 10.7188C14.4816 10.1038 14.6321 9.39253 14.5575 8.68677C14.4829 7.98101 14.1871 7.31685 13.7122 6.7894ZM8.70002 13.7939C8.11597 13.7948 7.55024 13.5901 7.10202 13.2157L7.18085 13.171L9.83546 11.6387C9.90153 11.5999 9.95639 11.5447 9.99464 11.4783C10.0329 11.4119 10.0532 11.3368 10.0536 11.2602V7.51746L11.1759 8.16668C11.1814 8.16949 11.1862 8.17357 11.1899 8.1786C11.1935 8.18362 11.196 8.18943 11.197 8.19557V11.297C11.1956 11.9588 10.932 12.5931 10.4641 13.061C9.9961 13.529 9.36181 13.7925 8.70002 13.7939ZM3.33296 11.502C3.04006 10.9962 2.93489 10.4034 3.03596 9.82774L3.11485 9.87507L5.77208 11.4074C5.83782 11.446 5.91268 11.4663 5.98891 11.4663C6.06514 11.4663 6.13999 11.446 6.20574 11.4074L9.45174 9.53602V10.8318C9.45144 10.8385 9.44962 10.8451 9.44643 10.851C9.44323 10.8569 9.43875 10.862 9.4333 10.866L6.74452 12.4167C6.1707 12.7472 5.48916 12.8366 4.84953 12.6651C4.20989 12.4936 3.66445 12.0753 3.33296 11.502ZM2.63385 5.71968C2.92879 5.21067 3.39432 4.82242 3.94802 4.62368V7.77768C3.94702 7.85388 3.96649 7.92895 4.0044 7.99506C4.0423 8.06116 4.09725 8.11589 4.16352 8.15352L7.39374 10.017L6.27146 10.6662C6.26539 10.6694 6.25862 10.6711 6.25174 10.6711C6.24487 10.6711 6.23809 10.6694 6.23202 10.6662L3.54852 9.11813C2.97578 8.78614 2.55794 8.2407 2.3865 7.60128C2.21507 6.96186 2.30401 6.28055 2.63385 5.70657V5.71968ZM11.854 7.86179L8.6133 5.9799L9.73296 5.33324C9.73904 5.33001 9.74581 5.32833 9.75269 5.32833C9.75956 5.32833 9.76634 5.33001 9.77241 5.33324L12.4559 6.88396C12.8662 7.12071 13.2007 7.4693 13.4203 7.88902C13.64 8.30874 13.7357 8.78228 13.6962 9.25435C13.6568 9.72642 13.484 10.1775 13.1978 10.555C12.9116 10.9325 12.524 11.2208 12.0801 11.3863V8.23229C12.0777 8.15622 12.0557 8.08207 12.016 8.0171C11.9764 7.95214 11.9206 7.89865 11.854 7.86179ZM12.9711 6.18229L12.8922 6.13496L10.2402 4.58952C10.1741 4.5507 10.0988 4.53023 10.0221 4.53023C9.94537 4.53023 9.87006 4.5507 9.80391 4.58952L6.56063 6.46085V5.16513C6.55994 5.15854 6.56104 5.15189 6.56382 5.14587C6.5666 5.13986 6.57095 5.13471 6.57641 5.13096L9.25991 3.58285C9.67119 3.34591 10.1414 3.23098 10.6156 3.25149C11.0899 3.272 11.5484 3.42711 11.9377 3.69867C12.327 3.97024 12.6309 4.34703 12.8139 4.78498C12.9969 5.22293 13.0515 5.70393 12.9711 6.17174L12.9711 6.18229ZM5.94813 8.47935L4.82591 7.83279C4.82029 7.82941 4.81549 7.82484 4.81184 7.81939C4.8082 7.81395 4.80579 7.80777 4.8048 7.80129V4.70779C4.80542 4.23322 4.94112 3.76864 5.19605 3.36835C5.45098 2.96806 5.81459 2.64862 6.24438 2.44737C6.67416 2.24612 7.15236 2.17138 7.62306 2.23189C8.09375 2.2924 8.5375 2.48566 8.90241 2.78907L8.82352 2.83379L6.16896 4.36602C6.1029 4.40477 6.04804 4.46003 6.00979 4.52639C5.97154 4.59275 5.95121 4.66792 5.9508 4.74452L5.94813 8.47935ZM6.55791 7.16524L8.00346 6.33202L9.45174 7.16524V8.83157L8.00874 9.66474L6.56058 8.83157L6.55791 7.16524Z",fill:"#1D2129"})),Z1=t=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("g",{id:"ZHIPU Square"},a.createElement("g",{id:"shape"},a.createElement("path",{d:"M11.8923 23.4987C11.8281 23.5139 11.7722 23.5535 11.7365 23.609C11.7008 23.6646 11.6881 23.7319 11.701 23.7966C11.7314 23.9293 11.862 24.0232 11.9919 23.9921C12.0561 23.9771 12.1119 23.9377 12.1476 23.8823C12.1833 23.8268 12.1961 23.7596 12.1832 23.695C12.1528 23.5616 12.0222 23.4677 11.8923 23.4987ZM15.4754 8.52697C16.3105 8.14085 16.681 7.13426 16.3027 6.27944C15.9243 5.42532 14.9403 5.04556 14.1046 5.43238C13.2695 5.81991 12.8982 6.8265 13.2766 7.68062C13.6549 8.53544 14.6389 8.91379 15.4754 8.52697ZM18.0935 13.6284C18.9723 13.358 19.47 12.4107 19.206 11.5129C18.9413 10.6143 18.0152 10.1053 17.1363 10.3757C16.2582 10.646 15.7599 11.5933 16.0246 12.4919C16.2893 13.3898 17.2154 13.8987 18.0935 13.6284ZM5.17233 10.7237C4.84426 11.0278 4.64662 11.4471 4.62083 11.8937C4.59503 12.3403 4.74309 12.7796 5.03398 13.1194C5.17709 13.2847 5.35177 13.4196 5.54777 13.5164C5.74377 13.6132 5.95713 13.6698 6.17533 13.683C6.39352 13.6961 6.61214 13.6655 6.81835 13.593C7.02455 13.5205 7.21418 13.4075 7.3761 13.2606C7.70417 12.9565 7.90182 12.5372 7.92761 12.0906C7.9534 11.644 7.80534 11.2047 7.51445 10.8649C7.37135 10.6996 7.19666 10.5647 7.00066 10.4679C6.80466 10.3711 6.5913 10.3145 6.37311 10.3013C6.15491 10.2882 5.93629 10.3188 5.73009 10.3913C5.52388 10.4638 5.33425 10.5768 5.17233 10.7237ZM19.7686 8.56368C20.1893 8.17968 20.2274 7.51473 19.8526 7.08415C19.7642 6.98189 19.6563 6.89838 19.5352 6.83853C19.414 6.77868 19.2821 6.74371 19.1472 6.73568C19.0123 6.72765 18.8772 6.74673 18.7498 6.79179C18.6224 6.83685 18.5054 6.90698 18.4055 6.99803C18.2027 7.18577 18.0805 7.44488 18.0649 7.72084C18.0492 7.99679 18.1412 8.26806 18.3215 8.47756C18.697 8.90815 19.3472 8.94697 19.7686 8.56368ZM11.946 4.6185C12.5121 4.6185 12.9716 4.14838 12.9716 3.56956C12.9716 2.99074 12.5128 2.52062 11.946 2.52062C11.3792 2.52062 10.9203 2.99003 10.9203 3.56956C10.9203 4.14838 11.3792 4.6185 11.946 4.6185ZM4.80527 8.82979C5.37139 8.82979 5.83022 8.36038 5.83022 7.78085C5.83022 7.20203 5.37139 6.73191 4.80457 6.73191C4.23845 6.73191 3.77892 7.20132 3.77892 7.78085C3.77892 8.35968 4.23845 8.82979 4.80527 8.82979ZM4.11563 15.4361C3.91267 15.6238 3.79043 15.8829 3.77463 16.1588C3.75883 16.4348 3.85071 16.7061 4.03092 16.9157C4.40645 17.3463 5.05727 17.3858 5.47798 17.0018C5.89939 16.6185 5.9368 15.9529 5.56269 15.5223C5.47435 15.42 5.36642 15.3365 5.24528 15.2766C5.12413 15.2168 4.99222 15.1818 4.85733 15.1738C4.72245 15.1658 4.58732 15.1848 4.45993 15.2299C4.33254 15.275 4.21547 15.3451 4.11563 15.4361ZM11.946 21.487C12.5121 21.487 12.9716 21.0176 12.9716 20.438C12.9716 19.8592 12.5128 19.3891 11.946 19.3891C11.3792 19.3891 10.9203 19.8592 10.9203 20.438C10.9203 21.0176 11.3792 21.487 11.946 21.487ZM19.0945 17.2601C19.6613 17.2601 20.1201 16.7907 20.1201 16.2112C20.1201 15.6324 19.6613 15.1623 19.0945 15.1623C18.5283 15.1623 18.0688 15.6317 18.0688 16.2112C18.0688 16.79 18.5276 17.2601 19.0945 17.2601ZM17.0735 3.51521C17.1578 3.52035 17.2422 3.50847 17.3217 3.48028C17.4013 3.45208 17.4743 3.40814 17.5365 3.35108C17.5987 3.29403 17.6488 3.22503 17.6837 3.1482C17.7186 3.07137 17.7377 2.98829 17.7399 2.90391C17.7465 2.81974 17.7362 2.7351 17.7096 2.65498C17.683 2.57486 17.6406 2.50087 17.5849 2.43739C17.5293 2.3739 17.4615 2.3222 17.3855 2.28534C17.3096 2.24847 17.227 2.22719 17.1427 2.22274C17.0586 2.21769 16.9743 2.22962 16.8949 2.25782C16.8154 2.28602 16.7425 2.32991 16.6804 2.38688C16.6183 2.44385 16.5683 2.51273 16.5333 2.58943C16.4984 2.66613 16.4793 2.74907 16.477 2.83332C16.4704 2.91749 16.4807 3.00213 16.5073 3.08225C16.5339 3.16238 16.5763 3.23636 16.632 3.29985C16.6876 3.36333 16.7554 3.41503 16.8314 3.4519C16.9073 3.48876 16.9892 3.51075 17.0735 3.51521ZM6.44292 3.40509C6.51215 3.45127 6.58995 3.48309 6.6717 3.49865C6.75346 3.51422 6.8375 3.51322 6.91886 3.49571C7.00022 3.4782 7.07724 3.44454 7.14535 3.39672C7.21347 3.3489 7.27129 3.2879 7.31539 3.21732C7.40689 3.07395 7.43891 2.90056 7.40464 2.73397C7.37038 2.56738 7.27252 2.4207 7.13186 2.32509C7.06261 2.27879 6.98475 2.24688 6.90293 2.23126C6.8211 2.21563 6.73697 2.2166 6.65552 2.23411C6.57408 2.25163 6.49698 2.28532 6.42882 2.33321C6.36065 2.38109 6.30279 2.44218 6.25869 2.51285C6.16718 2.65622 6.13517 2.82961 6.16944 2.9962C6.2037 3.1628 6.30226 3.30947 6.44292 3.40509ZM1.3528 11.4211C1.03869 11.5771 0.916569 11.9689 1.06975 12.2893C1.10579 12.3647 1.15653 12.4322 1.21899 12.4877C1.28145 12.5432 1.35436 12.5857 1.43346 12.6126C1.51256 12.6396 1.59625 12.6505 1.67961 12.6447C1.76298 12.6388 1.84434 12.6164 1.91892 12.5787C2.23304 12.4227 2.35516 12.031 2.20198 11.7105C2.16593 11.6352 2.11522 11.5678 2.05282 11.5124C1.99041 11.4569 1.91757 11.4145 1.83855 11.3875C1.75954 11.3606 1.67594 11.3497 1.59265 11.3554C1.50936 11.3612 1.42736 11.3835 1.3528 11.4211ZM6.82551 20.4931C6.74132 20.4879 6.65697 20.4998 6.57746 20.528C6.49796 20.5561 6.42494 20.6 6.36275 20.657C6.30057 20.7139 6.25049 20.7829 6.21551 20.8596C6.18054 20.9364 6.16137 21.0194 6.15916 21.1037C6.15254 21.1878 6.16284 21.2725 6.18945 21.3526C6.21606 21.4327 6.25844 21.5067 6.3141 21.5702C6.36975 21.6337 6.43755 21.6854 6.51351 21.7222C6.58946 21.7591 6.67202 21.7804 6.75633 21.7849C6.84046 21.7899 6.92475 21.778 7.00417 21.7498C7.08359 21.7216 7.15652 21.6777 7.21863 21.6207C7.28074 21.5637 7.33075 21.4949 7.36568 21.4182C7.40062 21.3415 7.41976 21.2585 7.42198 21.1743C7.4286 21.0902 7.41832 21.0056 7.39176 20.9255C7.36519 20.8454 7.32287 20.7715 7.26729 20.708C7.21171 20.6445 7.14399 20.5928 7.06812 20.5559C6.99225 20.519 6.90976 20.4976 6.82551 20.4931ZM17.4568 20.6025C17.3875 20.5564 17.3097 20.5247 17.228 20.5092C17.1463 20.4937 17.0623 20.4947 16.9809 20.5122C16.8996 20.5297 16.8226 20.5633 16.7545 20.6111C16.6864 20.6588 16.6285 20.7198 16.5843 20.7903C16.4926 20.9337 16.4605 21.1072 16.4947 21.274C16.529 21.4408 16.627 21.5876 16.7679 21.6832C16.8371 21.7294 16.915 21.7611 16.9968 21.7766C17.0785 21.7922 17.1626 21.7911 17.244 21.7735C17.3253 21.7559 17.4023 21.7222 17.4704 21.6743C17.5385 21.6264 17.5963 21.5654 17.6403 21.4947C17.7318 21.3514 17.7639 21.178 17.7296 21.0114C17.6953 20.8448 17.5975 20.6981 17.4568 20.6025ZM22.6076 11.4599C22.5384 11.4138 22.4606 11.3821 22.3788 11.3666C22.2971 11.3511 22.2131 11.3521 22.1318 11.3696C22.0504 11.3871 21.9734 11.4207 21.9053 11.4685C21.8372 11.5162 21.7793 11.5772 21.7352 11.6477C21.6437 11.791 21.6116 11.9644 21.6459 12.131C21.6802 12.2976 21.778 12.4443 21.9187 12.5399C21.9879 12.5862 22.0658 12.6181 22.1476 12.6337C22.2295 12.6494 22.3136 12.6484 22.395 12.6309C22.4765 12.6134 22.5536 12.5797 22.6217 12.5318C22.6899 12.4839 22.7478 12.4228 22.7919 12.3521C22.8834 12.2088 22.9154 12.0354 22.8811 11.8688C22.8468 11.7022 22.7483 11.5555 22.6076 11.4599ZM22.057 6.30909C22.1043 6.26393 22.1329 6.20263 22.1371 6.13738C22.1413 6.07212 22.1208 6.00768 22.0796 5.95685C22.0366 5.90876 21.9765 5.8794 21.9121 5.87505C21.8478 5.8707 21.7842 5.8917 21.7352 5.93356C21.6879 5.97872 21.6593 6.04001 21.6551 6.10527C21.6509 6.17052 21.6714 6.23496 21.7126 6.28579C21.7556 6.33388 21.8157 6.36325 21.8801 6.3676C21.9444 6.37195 22.0079 6.35095 22.057 6.30909ZM11.9912 0.501088C12.0556 0.486056 12.1116 0.446576 12.1474 0.39099C12.1832 0.335404 12.1961 0.268066 12.1832 0.203206C12.1528 0.0705002 12.0222 -0.0233822 11.8923 0.00767661C11.8282 0.0228647 11.7725 0.0623031 11.7368 0.117713C11.7011 0.173123 11.6883 0.240196 11.701 0.304853C11.7314 0.438265 11.8613 0.532147 11.9912 0.501088ZM1.92669 6.36415C2.05657 6.41073 2.19492 6.33238 2.2408 6.20744C2.2613 6.14447 2.25683 6.07605 2.22832 6.01628C2.19982 5.95651 2.14945 5.90997 2.08763 5.88626C1.95704 5.83968 1.81939 5.91803 1.77351 6.04297C1.75302 6.10594 1.75749 6.17437 1.78599 6.23413C1.8145 6.2939 1.86486 6.34044 1.92669 6.36415ZM1.83492 17.6823C1.78733 17.7274 1.7585 17.7887 1.75418 17.8542C1.74986 17.9196 1.77038 17.9842 1.81163 18.0352C1.85464 18.0833 1.91475 18.1127 1.97912 18.117C2.04349 18.1214 2.10701 18.1004 2.1561 18.0585C2.20349 18.0134 2.2322 17.9522 2.23651 17.8869C2.24083 17.8217 2.22044 17.7572 2.17939 17.7063C2.13638 17.6582 2.07627 17.6288 2.0119 17.6245C1.94753 17.6201 1.88401 17.6404 1.83492 17.6823ZM21.9723 17.6279C21.8425 17.5813 21.7048 17.6597 21.6589 17.7846C21.6384 17.8476 21.6429 17.916 21.6714 17.9758C21.6999 18.0355 21.7503 18.0821 21.8121 18.1058C21.942 18.1524 22.0803 18.074 22.1255 17.9491C22.146 17.8862 22.1417 17.8179 22.1133 17.7581C22.0849 17.6983 22.034 17.6518 21.9723 17.6279Z",fill:"#3859FF"}),a.createElement("path",{d:"M15.2901 15.4128C14.9386 15.2962 14.5579 15.3024 14.2104 15.4304C13.8628 15.5583 13.5691 15.8005 13.3772 16.1173L13.3616 16.1483C12.979 16.814 12.2209 17.1662 11.4713 16.9234C11.0652 16.7913 10.7253 16.5083 10.5219 16.1328C10.4896 16.023 10.469 15.9102 10.4604 15.7961C10.4301 15.069 10.9736 14.4577 11.6852 14.4189H11.8539C13.1626 14.4733 14.2722 13.4321 14.3259 12.086C14.3795 10.7399 13.3616 9.61256 12.0452 9.5575H11.6852C10.9736 9.52644 10.476 8.96244 10.5063 8.23468C10.5063 8.06244 10.5374 7.89021 10.6059 7.74126L10.6214 7.69468C10.6539 7.62345 10.6821 7.55038 10.7061 7.47585C10.9814 6.57515 10.4915 5.62009 9.61904 5.33844C8.75362 5.06456 7.81974 5.54174 7.53668 6.45021C7.26139 7.32691 7.72021 8.26574 8.57009 8.57138C8.70774 8.61797 8.79174 8.63421 8.92233 8.6575H8.9908C9.66492 8.73515 10.1929 9.29138 10.1696 9.99585C10.1626 10.2542 10.0779 10.4893 9.94798 10.6848C9.72118 11.0472 9.59453 11.4632 9.58092 11.8904C9.55808 12.3864 9.68605 12.8776 9.94798 13.2994C10.0779 13.4949 10.1619 13.73 10.1696 13.9883C10.2007 14.6928 9.74115 15.2483 9.06774 15.3189H9.05221C8.95339 15.3189 8.83833 15.3422 8.74586 15.3577C7.82821 15.5695 7.28468 16.485 7.4908 17.4013C7.69762 18.3246 8.60045 18.8646 9.45809 18.669C9.67681 18.6217 9.88344 18.5298 10.0651 18.3991C10.2468 18.2685 10.3996 18.1018 10.5141 17.9095C10.7022 17.5817 10.997 17.3283 11.3494 17.1916C11.7018 17.0549 12.0904 17.0432 12.4503 17.1584C12.8562 17.2911 13.147 17.5417 13.3539 17.894L13.3764 17.9335C13.5529 18.2229 13.8896 18.5208 14.287 18.638C15.1906 18.9119 16.0786 18.4107 16.3623 17.534C16.6524 16.6184 16.1322 15.6704 15.2901 15.3973V15.4128Z",fill:"#3859FF"}))));I.GPT_3_5;I.GPT_4,I.MISTRAL,I.GLM_4,I.CLAUDE,I.MOONSHOT;r`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background: ${h("white","01")};
  cursor: pointer;

  ${R(r`
    gap: 12px;
    width: 100%;
  `)}
`;r`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  z-index: 0;
  ${R(r`
    border-radius: 8px;
    height: 161px;
  `)}
`;r`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;r`
  display: flex;
  width: 100%;
  height: 64px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  ${R(r`
    padding: 12px;
  `)}
`;r`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;r`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background-color: transparent;
`;r`
  color: ${h("white","01")};
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;r`
  display: flex;
  width: 100%;
  height: 64px;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  ${R(r`
    height: 48px;
    padding: 4px 12px;
  `)}
`;r`
  display: flex;
  align-items: center;
  gap: 16px;
  ${R(r`
    gap: 12px;
  `)}
`;r`
  display: flex;
  align-items: center;
  color: ${h("white","01")};
  font-size: 12px;
  padding: 1px 0;
  font-weight: 400;
  line-height: 20px;
  ${R(r`
    line-height: 22px;
  `)}
`;r`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;r`
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`;r`
  color: ${h("grayBlue","02")};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;r`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  & svg {
    height: 100%;
    width: 100%;
  }
`;const A1=r`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;r`
  width: 100%;
  color: ${h("grayBlue","02")};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  ${A1};
  ${R(r`
    font-size: 12px;
    line-height: 20px;
  `)}
`;r`
  color: ${h("grayBlue","03")};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;r`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  color: ${C(`--${y}-grayBlue-02`)};
`;r`
  width: 160px;
  padding: 8px 0;
  font-size: 14px;
  line-height: 22px;
  color: ${C(`--${y}-grayBlue-02`)};
`;r`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${C(`--${y}-grayBlue-09`)};
  }

  & > svg {
    width: 16px;
    height: 16px;
  }
`;r`
  display: flex;
  gap: 4px;
  align-items: center;
`;r`
  cursor: pointer;
`;function z1(t){var e=t.lastRenderedStartIndex,i=t.lastRenderedStopIndex,l=t.startIndex,n=t.stopIndex;return!(l>i||n<e)}function O1(t){for(var e=t.isItemLoaded,i=t.itemCount,l=t.minimumBatchSize,n=t.startIndex,c=t.stopIndex,d=[],s=null,p=null,u=n;u<=c;u++){var x=e(u);x?p!==null&&(d.push(s,p),s=p=null):(p=u,s===null&&(s=u))}if(p!==null){for(var b=Math.min(Math.max(p,s+l-1),i-1),m=p+1;m<=b&&!e(m);m++)p=m;d.push(s,p)}if(d.length)for(;d[1]-d[0]+1<l&&d[0]>0;){var S=d[0]-1;if(!e(S))d[0]=S;else break}return d}var j1=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},F1=function(){function t(e,i){for(var l=0;l<i.length;l++){var n=i[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,l){return i&&t(e.prototype,i),l&&t(e,l),e}}(),N1=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},O=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t};(function(t){N1(e,t);function e(){var i,l,n,c;j1(this,e);for(var d=arguments.length,s=Array(d),p=0;p<d;p++)s[p]=arguments[p];return c=(l=(n=O(this,(i=e.__proto__||Object.getPrototypeOf(e)).call.apply(i,[this].concat(s))),n),n._lastRenderedStartIndex=-1,n._lastRenderedStopIndex=-1,n._memoizedUnloadedRanges=[],n._onItemsRendered=function(u){var x=u.visibleStartIndex,b=u.visibleStopIndex;n._lastRenderedStartIndex=x,n._lastRenderedStopIndex=b,n._ensureRowsLoaded(x,b)},n._setRef=function(u){n._listRef=u},l),O(n,c)}return F1(e,[{key:"resetloadMoreItemsCache",value:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this._memoizedUnloadedRanges=[],l&&this._ensureRowsLoaded(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var l=this.props.children;return l({onItemsRendered:this._onItemsRendered,ref:this._setRef})}},{key:"_ensureRowsLoaded",value:function(l,n){var c=this.props,d=c.isItemLoaded,s=c.itemCount,p=c.minimumBatchSize,u=p===void 0?10:p,x=c.threshold,b=x===void 0?15:x,m=O1({isItemLoaded:d,itemCount:s,minimumBatchSize:u,startIndex:Math.max(0,l-b),stopIndex:Math.min(s-1,n+b)});(this._memoizedUnloadedRanges.length!==m.length||this._memoizedUnloadedRanges.some(function(S,V){return m[V]!==S}))&&(this._memoizedUnloadedRanges=m,this._loadUnloadedRanges(m))}},{key:"_loadUnloadedRanges",value:function(l){for(var n=this,c=this.props.loadMoreItems||this.props.loadMoreRows,d=function(u){var x=l[u],b=l[u+1],m=c(x,b);m!=null&&m.then(function(){if(z1({lastRenderedStartIndex:n._lastRenderedStartIndex,lastRenderedStopIndex:n._lastRenderedStopIndex,startIndex:x,stopIndex:b})){if(n._listRef==null)return;typeof n._listRef.resetAfterIndex=="function"?n._listRef.resetAfterIndex(x,!0):(typeof n._listRef._getItemStyleCache=="function"&&n._listRef._getItemStyleCache(-1),n._listRef.forceUpdate())}})},s=0;s<l.length;s+=2)d(s)}}]),e})(a.PureComponent);const U1=490;r`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: ${U1}px;
`;r`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${h("grayBlue","04")};
`;r`
  display: flex;
  width: 100%;
  padding: 8px 24px;
  align-items: center;
  justify-content: space-between;
`;r`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 441px;
  justify-content: space-between;
`;r`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 3px 0px;
`;r`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 0;
`;r`
  display: flex;
  gap: 16px;
  max-width: 448px;
`;r`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  flex: none;
`;r`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;r`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: ${h("grayBlue","02")};
`;r`
  color: ${h("grayBlue","03")};
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 400px;
  font-size: 12px;
  line-height: 18px;
  min-width: 0;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;r`
  display: flex;
  align-items: center;
  width: 240px;
`;r`
  width: 16px;
  height: 16px;
  flex: none;
  overflow: hidden;
`;r`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  line-height: 20px;
  color: ${h("grayBlue","03")};
`;r`
  display: flex;
  width: 100%;
  padding: 8px 24px;
  align-items: center;
  justify-content: space-between;
`;r`
  display: flex;
  gap: 16px;
  max-width: 448px;
`;r`
  width: 32px;
  height: 32px;
  border-radius: 5px;
`;r`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;r`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: ${h("grayBlue","02")};
`;r`
  color: ${h("grayBlue","03")};
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 400px;
  font-size: 12px;
  line-height: 18px;
  max-height: 36px;
  min-width: 0;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;r`
  display: flex;
  flex-direction: column;
`;r`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;
`;r`
  background: ${C(`--${y}-techPurple-08`)};
`;r`
  margin-left: 8px;
  flex: 1;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${C(`--${y}-grayBlue-02`)};
`;r`
  flex: 1;
  color: ${C(`--${y}-grayBlue-04`)};
`;r`
  padding: 0 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;r`
  display: flex;
  flex-direction: column;
`;r`
  height: 80px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;r`
  background: ${C(`--${y}-techPurple-08`)};
`;r`
  margin-left: 8px;
  flex: 1;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${C(`--${y}-grayBlue-02`)};
`;r`
  flex: 1;
  color: ${C(`--${y}-grayBlue-04`)};
`;const q1=(t=16,e,i,l)=>r`
  padding: 4px;
  border-radius: 4px;
  font-size: ${t}px;
  color: ${i};
  width: ${t+4*2}px;
  height: ${t+4*2}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
  :hover {
    color: ${e};
    background-color: ${l};
  }
`,G1=(t,e)=>{const{children:i,iconSize:l=16,inactiveColor:n=h("grayBlue","04"),activeColor:c=h("grayBlue","02"),activeBgColor:d=h("grayBlue","09"),type:s="button",...p}=t;return o("button",{...p,type:s,css:q1(l,c,n,d),ref:e,children:i})};a.forwardRef(G1);r`
  width: 100%;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;r`
  text-align: center;
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: ${h("grayBlue","02")};
`;r`
  position: absolute;
  right: 16px;
  top: 16px;
`;r`
  width: 100%;
  height: 100%;
  overflow: auto;
`;const W1=T`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,Q1=T`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 24px 24px;
  overflow: auto;
  padding: 0 32px;
  padding-bottom: 32px;
`,pe=()=>{const{t}=E(),e=k(B),i=K((e==null?void 0:e.myRole)??N.VIEWER,J.RESOURCE,F(e),Y.VIEW),{data:l=[],isLoading:n}=te(i),{teamIdentifier:c}=Ne(),d=k(ye),[s,p]=q(l??[],["resourceName"]),[u,x]=U(),[b,m]=a.useState(!1),S=w=>{window.open(`${P()}/${c}/resource/new/${w}?token=${Z()}`)},V=w=>{const ue={optimisticData:l.filter(_=>_.resourceID!==w),rollbackOnError(_){return _ instanceof Error?_.name!=="AbortError":!0}};return $e(["/resources",d,i],async _=>{const he=await _1(w,d);return Array.isArray(_)?_.filter(ge=>ge.resourceID!==he.data.resourceID):[]},ue)};return M("div",{css:W1,children:[g(Ve,{titleName:t("page.workspace.menu.resources"),actionGroupComponent:M(H,{children:[g(W,{w:"200px",size:"large",colorScheme:"techPurple",onChange:p,placeholder:t("dashboard.search"),allowClear:!0}),g(D,{size:"large",colorScheme:"techPurple",leftIcon:g(je,{}),w:"200px",onClick:()=>m(!0),children:t("new_dashboard.button.blank")})]})}),n?g(X,{}):s.length>0?M(H,{children:[u&&g(Q,{direction:"horizontal"}),g("div",{css:Q1,onScroll:x,children:s==null?void 0:s.map(w=>g(ee,{resourceType:w.resourceType,resourceName:w.resourceName,resourceID:w.resourceID,onDeleteResource:V,onEditResource:()=>{window.open(`${P()}/${c}/resource/edit/${w.resourceID}?token=${Z()}`)},dbName:re(w)},w.resourceID))})]}):g(G,{loading:!1,onClickButton:()=>m(!0),showCreate:!0}),b&&g(Fe,{visible:b,w:"1080px",footer:!1,closable:!0,maskClosable:!0,withoutLine:!0,withoutPadding:!0,title:t("editor.action.form.title.select"),onCancel:()=>m(!1),children:g(ce,{onSelect:S})})]})},K1=()=>g(we,{desktopPage:g(pe,{}),mobilePage:g(S1,{})}),h2=Object.freeze(Object.defineProperty({__proto__:null,PCResourcesWorkspace:pe,default:K1},Symbol.toStringTag,{value:"Module"}));export{c2 as R,h2 as a,p2 as i,u2 as u,d2 as v};
//# sourceMappingURL=index-8b511b24.js.map

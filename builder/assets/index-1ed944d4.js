import{o as A,k as a,F as T,n as U}from"./@illa-design-1f43bb6c.js";import{u as m,e as g,b as C,bA as b,be as y,eH as p,fv as L}from"./index-4dce6ee8.js";import{r as s}from"./react-9b7e00e3.js";import{a as l,b as j}from"./index-03ca7e7b.js";import{I as r}from"./index-2c4267bb.js";import{a as x}from"./@emotion-08a6282b.js";import{S as w}from"./index-01ad6233.js";import{p as S,q as E,r as B,s as W,t as z,u as Y,v as H,w as Q,x as X,y as K,z as Z,B as ee,E as te,F as ne,G as oe,T as ae}from"./index-cd7c17cc.js";import"./codeMirror-vendor-320207e2.js";import"./lodash-lib-6e94956b.js";import"./react-icons-vendor-2430ea65.js";import"./index-6f32d056.js";import"./index-5be17f9b.js";import"./clsx.m-925abe8b.js";import"./clsx.m-266f4de0.js";import"./index-b9f5fd51.js";import"./hook-302a78fc.js";import"./renderComponentCanvasContainer-2e4cd54a.js";import"./style-49f23046.js";import"./index-d48f7e94.js";import"./index-cf2bb556.js";import"./index-2fdfc937.js";import"./layoutInfoListener-bd63c738.js";import"./drive-584d85d3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./popper-a04e2b11.js";import"./objectWithoutPropertiesLoose-e3246981.js";import"./clsx-06f54762.js";import"./index-934389e2.js";import"./style-51b259bb.js";import"./style-af69883e.js";const P=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>u=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,[d]:u}}}))},[t,o,e]);return A(T,{children:[a(r,{title:n("editor.action.panel.mongodb.aggregation"),value:e.aggregation,onChange:c("aggregation"),style:{height:"188px"},expectedType:p.STRING,mode:l.JAVASCRIPT,codeType:j.EXPRESSION,placeholder:`[
   {
      "$match": { "size": "medium" }
   },
   {
      "$group": { "_id": "$type", "totalQuantity": { "$sum": "$price" } }
   }
] `,canShowCompleteInfo:!0,lineNumbers:!0}),a(r,{title:n("editor.action.panel.mongodb.options"),lineNumbers:!0,mode:l.JAVASCRIPT,value:e.options,style:{height:"188px"},onChange:c("options"),expectedType:p.STRING,placeholder:`{
"collation":{
    "locale": "simple",
    "caseLevel": true,
    "caseFirst": "upper",
...
}}`})]})};P.displayName="AggregatePart";const R=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>u=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,[d]:u}}}))},[t,o,e]);return A(T,{children:[a(r,{title:n("editor.action.panel.mongodb.operations"),lineNumbers:!0,style:{height:"188px"},mode:l.JAVASCRIPT,value:e.operations,onChange:c("operations"),expectedType:p.STRING,placeholder:`[
      { "insertOne": { "document": { "_id": 3, "type": "beef", "size": "medium", "price": 6 } } },
      { "insertOne": { "document": { "_id": 4, "type": "sausage", "size": "large", "price": 10 } } },
      { "updateOne": {
         "filter": { "type": "cheese" },
         "update": { "$set": { "price": 8 } }
      } }
]`}),a(r,{title:n("editor.action.panel.mongodb.options"),lineNumbers:!0,mode:l.JAVASCRIPT,value:e.options,onChange:c("options"),expectedType:p.STRING})]})};R.displayName="BulkWritePart";const f=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,document:d}}}))},[t,o,e]);return a(r,{title:n("editor.action.panel.mongodb.document"),lineNumbers:!0,style:{height:"120px"},mode:l.JAVASCRIPT,value:e.document,onChange:c,expectedType:p.STRING,placeholder:`{
      "find": "fruit",
      "filter": {"price":10000}
}`})};f.displayName="CommandPart";const V=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,query:d}}}))},[t,o,e]);return a(r,{title:n("editor.action.panel.mongodb.query"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,placeholder:`{
  "type":"cheese",
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`,value:e.query,onChange:c,expectedType:p.STRING})};V.displayName="CountPart";const k=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,filter:d}}}))},[t,o,e]);return a(r,{title:n("editor.action.panel.mongodb.filter"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,placeholder:`{
  "type":"cheese",
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`,value:e.filter,onChange:c,expectedType:p.STRING})};k.displayName="DeleteManyPart";const v=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,filter:d}}}))},[t,o,e]);return a(r,{lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,placeholder:`{
  "type":"cheese",
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`,value:e.filter,expectedType:p.STRING,title:n("editor.action.panel.mongodb.filter"),onChange:c})};v.displayName="DeleteOnePart";const M=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>u=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,[d]:u}}}))},[t,o,e]);return A(T,{children:[a(r,{title:n("editor.action.panel.mongodb.query"),lineNumbers:!0,mode:l.JAVASCRIPT,value:e.query,onChange:c("query"),style:{height:"188px"},expectedType:p.STRING,placeholder:`{
  "type":"cheese",
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`}),a(r,{title:n("editor.action.panel.mongodb.field"),lineNumbers:!0,mode:l.JAVASCRIPT,value:e.field,onChange:c("field"),expectedType:p.STRING,placeholder:"_id"}),a(r,{title:n("editor.action.panel.mongodb.options"),lineNumbers:!0,mode:l.JAVASCRIPT,value:e.options,style:{height:"188px"},placeholder:`{
"collation":{
   "locale": "simple",
   "caseLevel": true,
   "caseFirst": "upper",
...
}}`,onChange:c("options"),expectedType:p.STRING})]})};M.displayName="DistinctPart";const O=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>u=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,[d]:u}}}))},[t,o,e]);return A(T,{children:[a(r,{title:n("editor.action.panel.mongodb.filter"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.filter,onChange:c("filter"),expectedType:p.STRING,placeholder:`{
  "type":"cheese",
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`}),a(r,{title:n("editor.action.panel.mongodb.update"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.update,onChange:c("update"),expectedType:p.STRING,placeholder:'{"$set":{"type":"chicken", "price":100}}'}),a(r,{title:n("editor.action.panel.mongodb.options"),lineNumbers:!0,style:{height:"188px"},mode:l.JAVASCRIPT,value:e.options,onChange:c("options"),expectedType:p.STRING,placeholder:`{
"collation":{
   "locale": "simple",
   "caseLevel": true,
   "caseFirst": "upper",
...
}}`})]})};O.displayName="FindOneAndUpdatePart";const G=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>u=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,[d]:u}}}))},[t,o,e]);return A(T,{children:[a(r,{title:n("editor.action.panel.mongodb.query"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.query,onChange:c("query"),expectedType:p.STRING,placeholder:`{
  "type":"cheese",
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`}),a(r,{title:n("editor.action.panel.mongodb.projection"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.projection,onChange:c("projection"),expectedType:p.STRING,placeholder:`{ 
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`}),a(r,{title:n("editor.action.panel.mongodb.skip"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.skip,onChange:c("skip"),expectedType:p.STRING,placeholder:"10"})]})};G.displayName="FindOnePart";const D=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>u=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,[d]:u}}}))},[t,o,e]);return A(T,{children:[a(r,{title:n("editor.action.panel.mongodb.query"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.query,onChange:c("query"),expectedType:p.STRING,placeholder:`{
  "type":"cheese",
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`}),a(r,{title:n("editor.action.panel.mongodb.projection"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.projection,onChange:c("projection"),expectedType:p.STRING,placeholder:`{ 
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`}),a(r,{title:n("editor.action.panel.mongodb.sort_by"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.sortBy,onChange:c("sortBy"),expectedType:p.STRING,placeholder:`{ 
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`}),a(r,{title:n("editor.action.panel.mongodb.limit"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.limit,onChange:c("limit"),expectedType:p.STRING,placeholder:"100"}),a(r,{title:n("editor.action.panel.mongodb.skip"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.skip,onChange:c("skip"),expectedType:p.STRING,placeholder:"10"})]})};D.displayName="FindPart";const J=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,document:d}}}))},[t,o,e]);return a(r,{title:n("editor.action.panel.mongodb.document"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,onChange:c,value:e.document,expectedType:p.STRING,placeholder:'[{"item":"apple", "price":1.49},{"item":"banana", "price":2.50}]'})};J.displayName="InsertManyPart";const $=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,document:d}}}))},[t,o,e]);return a(r,{title:n("editor.action.panel.mongodb.document"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.document,onChange:c,expectedType:p.STRING,placeholder:'{"item":"apple", "price":1.49}'})};$.displayName="InsertOnePart";const _=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>u=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,[d]:u}}}))},[t,o,e]);return A(T,{children:[a(r,{title:n("editor.action.panel.mongodb.filter"),lineNumbers:!0,style:{height:"88px"},value:e.filter,onChange:c("filter"),mode:l.JAVASCRIPT,expectedType:p.STRING,placeholder:`{
  "type":"cheese",
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`}),a(r,{title:n("editor.action.panel.mongodb.update"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.update,onChange:c("update"),expectedType:p.STRING,placeholder:'{"$set":{"type":"chicken", "price":100}}'}),a(r,{title:n("editor.action.panel.mongodb.options"),lineNumbers:!0,style:{height:"188px"},mode:l.JAVASCRIPT,value:e.options,onChange:c("options"),expectedType:p.STRING,placeholder:`{
"collation":{
   "locale": "simple",
   "caseLevel": true,
   "caseFirst": "upper",
...
}}`})]})};_.displayName="UpdateManyPart";const F=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>u=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,[d]:u}}}))},[t,o,e]);return A(T,{children:[a(r,{value:e.filter,onChange:c("filter"),title:n("editor.action.panel.mongodb.filter"),lineNumbers:!0,style:{height:"88px"},expectedType:p.STRING,mode:l.JAVASCRIPT,placeholder:`{
  "type":"cheese",
  "_id": {
    "$oid":"646385ae462e929b7a3d86bc"
  }
}`}),a(r,{lineNumbers:!0,style:{height:"88px"},value:e.update,onChange:c("update"),mode:l.JAVASCRIPT,expectedType:p.STRING,title:n("editor.action.panel.mongodb.update"),placeholder:'{"$set":{"type":"chicken", "price":100}}'}),a(r,{title:n("editor.action.panel.mongodb.options"),lineNumbers:!0,style:{height:"188px"},mode:l.JAVASCRIPT,value:e.options,onChange:c("options"),expectedType:p.STRING,placeholder:`{
"collation":{
   "locale": "simple",
   "caseLevel": true,
   "caseFirst": "upper",
...
}}`})]})};F.displayName="UpdateOnePart";const q=i=>{const{t:n}=m(),o=g(),t=C(b),e=i.typeContent,c=s.useCallback(d=>{o(y.updateCachedAction({...t,content:{...t.content,typeContent:{...e,query:d}}}))},[t,o,e]);return a(r,{title:n("editor.action.panel.mongodb.query"),lineNumbers:!0,style:{height:"88px"},mode:l.JAVASCRIPT,value:e.query,onChange:c,expectedType:p.STRING,placeholder:'{"name":"fruit"}'})};q.displayName="ListCollectionsPart";x`
  min-width: 160px;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  color: ${U("grayBlue","02")};
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  align-self: start;
`;const ce=x`
  padding: 8px 0;
`,ie=["aggregate","bulkWrite","count","deleteMany","deleteOne","distinct","find","findOne","findOneAndUpdate","insertOne","insertMany","listCollections","updateMany","updateOne","command"],pe=()=>{const{t:i}=m(),n=C(b),o=C(L),t=g();let e=n.content;const c=s.useMemo(()=>{switch(e.actionType){case"aggregate":return a(P,{typeContent:e.typeContent});case"bulkWrite":return a(R,{typeContent:e.typeContent});case"count":return a(V,{typeContent:e.typeContent});case"deleteMany":return a(k,{typeContent:e.typeContent});case"deleteOne":return a(v,{typeContent:e.typeContent});case"distinct":return a(M,{typeContent:e.typeContent});case"find":return a(D,{typeContent:e.typeContent});case"findOne":return a(G,{typeContent:e.typeContent});case"findOneAndUpdate":return a(O,{typeContent:e.typeContent});case"insertOne":return a($,{typeContent:e.typeContent});case"insertMany":return a(J,{typeContent:e.typeContent});case"listCollections":return a(q,{typeContent:e.typeContent});case"updateMany":return a(_,{typeContent:e.typeContent});case"updateOne":return a(F,{typeContent:e.typeContent});case"command":return a(f,{typeContent:e.typeContent});default:return a(T,{})}},[e.actionType,e.typeContent]),d=s.useCallback(I=>{var N;let h=S;if(o&&n.resourceID===o.resourceID&&o.content.actionType===I)h=(N=o.content)==null?void 0:N.typeContent;else switch(I){case"aggregate":h=S;break;case"bulkWrite":h=oe;break;case"count":h=ne;break;case"deleteMany":h=te;break;case"deleteOne":h=ee;break;case"distinct":h=Z;break;case"find":h=K;break;case"findOne":h=X;break;case"findOneAndUpdate":h=Q;break;case"insertOne":h=H;break;case"insertMany":h=Y;break;case"listCollections":h=z;break;case"updateMany":h=W;break;case"updateOne":h=B;break;case"command":h=E;break}t(y.updateCachedAction({...n,content:{...n.content,actionType:I,typeContent:h}}))},[n,t,o]),u=s.useCallback(I=>{t(y.updateCachedAction({...n,content:{...n.content,collection:I}}))},[n,t]);return A("div",{css:ce,children:[a(w,{componentType:"select",showSearch:!0,value:e.actionType,onSelectedValueChange:d,options:ie,title:i("editor.action.panel.mongodb.action_type")}),n.content.actionType!=="command"&&n.content.actionType!=="listCollections"&&a(r,{value:e.collection,title:i("editor.action.panel.mongodb.collection"),onChange:u,mode:l.JAVASCRIPT,expectedType:p.STRING}),c,a(ae,{})]})};pe.displayName="MongoDbPanel";export{pe as default};
//# sourceMappingURL=index-1ed944d4.js.map

"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[2812],{50935:(U,E,t)=>{t.d(E,{R:()=>p});var e=t(88767),n=t(5458),c=t(80129);function p(L={},M={}){const{id:f="",...v}=L,h=(0,c.stringify)(v,{encode:!1}),{get:O}=(0,n.kY)(),{data:d,isError:s,isLoading:A,refetch:x}=(0,e.useQuery)(["users",f,v],async()=>{const{data:{data:T}}=await O(`/admin/users/${f}${h?`?${h}`:""}`);return T},M);let D=[];return f&&d?D=[d]:Array.isArray(d?.results)&&(D=d.results),{users:D,pagination:d?.pagination??null,isLoading:A,isError:s,refetch:x}}},94699:(U,E,t)=>{t.d(E,{Z:()=>O});var e=t(67294),n=t(45697),c=t.n(n),p=t(86896),L=t(41580),M=t(29728),f=t(89597),v=t(5458);const h=({displayedFilters:d})=>{const[s,A]=(0,e.useState)(!1),{formatMessage:x}=(0,p.Z)(),D=(0,e.useRef)(),T=()=>{A(S=>!S)};return e.createElement(e.Fragment,null,e.createElement(L.x,{paddingTop:1,paddingBottom:1},e.createElement(M.z,{variant:"tertiary",ref:D,startIcon:e.createElement(f.Z,null),onClick:T,size:"S"},x({id:"app.utils.filters",defaultMessage:"Filters"})),s&&e.createElement(v.J5,{displayedFilters:d,isVisible:s,onToggle:T,source:D})),e.createElement(v.W$,{filtersSchema:d}))};h.propTypes={displayedFilters:c().arrayOf(c().shape({name:c().string.isRequired,metadatas:c().shape({label:c().string}),fieldSchema:c().shape({type:c().string})})).isRequired};const O=h},35915:(U,E,t)=>{t.r(E),t.d(E,{default:()=>fe});var e=t(67294),n=t(5458),c=t(87751),p=t(86896),L=t(17034),M=t(49066),f=t(41580),v=t(185),h=t(53979),O=t(36989),d=t(45697),s=t.n(d),A=t(15234),x=t(79031),D=t(37909),T=t(75515),S=t(11047),J=t(12028),X=t(8934),G=t(23855);const W=()=>{const{formatDate:a}=(0,p.Z)();return g=>{const r=(0,G.Z)(g),u=a(r,{dateStyle:"long"}),o=a(r,{timeStyle:"medium",hourCycle:"h24"});return`${u}, ${o}`}},K={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},b=a=>K[a]||a,F=({headers:a,rows:m,onOpenModal:g})=>{const{formatMessage:r}=(0,p.Z)(),u=W(),o=({type:l,value:i,model:y})=>l==="date"?u(i):l==="action"?r({id:`Settings.permissions.auditLogs.${i}`,defaultMessage:b(i)},{model:y}):i||"-";return e.createElement(A.p,null,m.map(l=>e.createElement(x.Tr,{key:l.id,...(0,n.X7)({fn:()=>g(l.id)})},a.map(({key:i,name:y,cellFormatter:C})=>e.createElement(D.Td,{key:i},e.createElement(T.Z,{textColor:"neutral800"},o({type:i,value:C?C(l[y]):l[y],model:l.payload?.model})))),e.createElement(D.Td,{...n.UW},e.createElement(S.k,{justifyContent:"end"},e.createElement(J.h,{onClick:()=>g(l.id),"aria-label":r({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${l.action} action`}),noBorder:!0,icon:e.createElement(X.Z,null)}))))))};F.defaultProps={rows:[]},F.propTypes={headers:s().array.isRequired,rows:s().array,onOpenModal:s().func.isRequired};const w=F,k=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.displayName:""}],j=({pagination:a})=>e.createElement(f.x,{paddingTop:4},e.createElement(S.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.v4,null),e.createElement(n.tU,{pagination:a})));j.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},j.propTypes={pagination:s().shape({page:s().number,pageCount:s().number,pageSize:s().number,total:s().number})};const q=j;var V=t(88767),_=t(42866),ee=t(24969),N=t(2407),te=t(59946),ae=t(77197),se=t(11276),ne=t(39990);const H=({actionLabel:a,actionName:m})=>e.createElement(S.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(T.Z,{textColor:"neutral600",variant:"sigma"},a),e.createElement(T.Z,{textColor:"neutral600"},m));H.propTypes={actionLabel:s().string.isRequired,actionName:s().string.isRequired};const I=H,$=({status:a,data:m,formattedDate:g})=>{const{formatMessage:r}=(0,p.Z)();if(a==="loading")return e.createElement(S.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(ae.a,null,"Loading content..."));const{action:u,user:o,payload:l}=m;return e.createElement(e.Fragment,null,e.createElement(f.x,{marginBottom:3},e.createElement(T.Z,{variant:"delta",id:"title"},r({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(se.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(I,{actionLabel:r({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:r({id:`Settings.permissions.auditLogs.${u}`,defaultMessage:b(u)},{model:l?.model})}),e.createElement(I,{actionLabel:r({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:g}),e.createElement(I,{actionLabel:r({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:o?.displayName||"-"}),e.createElement(I,{actionLabel:r({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:o?.id.toString()||"-"})),e.createElement(ne.V,{value:JSON.stringify(l,null,2),disabled:!0,label:r({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};$.defaultProps={data:{}},$.propTypes={status:s().oneOf(["idle","loading","error","success"]).isRequired,data:s().shape({action:s().string,date:s().string,payload:s().object,user:s().object}),formattedDate:s().string.isRequired};const oe=$,Q=({handleClose:a,logId:m})=>{const{get:g}=(0,n.kY)(),r=(0,n.lm)(),u=async C=>{const{data:R}=await g(`/admin/audit-logs/${C}`);if(!R)throw new Error("Audit log not found");return R},{data:o,status:l}=(0,V.useQuery)(["audit-log",m],()=>u(m),{onError(){r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),i=W(),y=o?i(o.date):"";return e.createElement(_.P,{onClose:a,labelledBy:"title"},e.createElement(ee.x,null,e.createElement(N.O,{label:y,id:"title"},e.createElement(N.$,null,y))),e.createElement(te.f,null,e.createElement(oe,{status:l,data:o,formattedDate:y})))};Q.propTypes={handleClose:s().func.isRequired,logId:s().string.isRequired};const ie=Q;var re=t(94699),le=t(29178),de=t(90608);const Z=({value:a,options:m,onChange:g})=>{const{formatMessage:r}=(0,p.Z)(),u=r({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(le.hQ,{"aria-label":u,value:a,onChange:g},m.map(({label:o,customValue:l})=>e.createElement(de.O,{key:l,value:l},o)))};Z.defaultProps={value:null},Z.propTypes={value:s().string,options:s().arrayOf(s().shape({label:s().string.isRequired,customValue:s().string.isRequired}).isRequired).isRequired,onChange:s().func.isRequired};const Y=Z,z=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],me=({formatMessage:a,users:m,canReadUsers:g})=>{const r=Object.keys(K).map(o=>({label:a({id:`Settings.permissions.auditLogs.${o}`,defaultMessage:b(o)},{model:void 0}),customValue:o})),u=[{name:"action",metadatas:{customOperators:z,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:r,customInput:Y},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(g&&m){const o=i=>i.username?i.username:i.firstname&&i.lastname?a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:i.firstname,lastname:i.lastname}):i.email,l=m.map(i=>({label:o(i),customValue:i.id.toString()}));return[...u,{name:"user",metadatas:{customOperators:z,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:l,customInput:Y},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return u};var ue=t(16550),ce=t(50935);const ge=({canReadAuditLogs:a,canReadUsers:m})=>{const{get:g}=(0,n.kY)(),{search:r}=(0,ue.TH)(),u=(0,n.lm)(),o={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:P=>u({type:"warning",message:P.message})},{users:l,isError:i,isLoading:y}=(0,ce.R)({},{...o,enabled:m,staleTime:2*(1e3*60)}),{data:C,isLoading:R,isError:B}=(0,V.useQuery)(["auditLogs",r],async({queryKey:P})=>{const ye=P[1],{data:Le}=await g(`/admin/audit-logs${ye}`);return Le},{...o,enabled:a});return{auditLogs:C,users:l,isLoading:y||R,hasError:B||i}},pe={...c.Z.settings.auditLogs,readUsers:c.Z.settings.users.read},Ee=()=>{const{formatMessage:a}=(0,p.Z)(),{allowedActions:{canRead:m,canReadUsers:g}}=(0,n.ss)(pe),[{query:r},u]=(0,n.Kx)(),{auditLogs:o,users:l,isLoading:i,hasError:y}=ge({canReadAuditLogs:m,canReadUsers:g});(0,n.go)();const C=me({formatMessage:a,users:l,canReadUsers:g}),R=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),B=k.map(P=>({...P,metadatas:{...P.metadatas,label:a(P.metadatas.label)}}));return y?e.createElement(L.A,null,e.createElement(M.D,null,e.createElement(f.x,{paddingTop:8},e.createElement(n.Hn,null)))):e.createElement(v.o,{"aria-busy":i},e.createElement(n.SL,{name:R}),e.createElement(h.T,{title:R,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(O.Z,{startActions:e.createElement(re.Z,{displayedFilters:C})}),e.createElement(M.D,{canRead:m},e.createElement(n.tM,{contentType:"Audit logs",headers:B,rows:o?.results||[],withBulkActions:!0,isLoading:i},e.createElement(w,{headers:B,rows:o?.results||[],onOpenModal:P=>u({id:P})})),e.createElement(q,{pagination:o?.pagination})),r?.id&&e.createElement(ie,{handleClose:()=>u({id:null},"remove"),logId:r.id}))},fe=()=>e.createElement(n.O4,{permissions:c.Z.settings.auditLogs.main},e.createElement(Ee,null))},2407:(U,E,t)=>{t.d(E,{$:()=>h,O:()=>O});var e=t(85893),n=t(16405),c=t(71997),p=t(63237),L=t(11047),M=t(41580),f=t(75515);const v=(0,c.ZP)(L.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:d})=>d.colors.neutral500};
    }
  }
  :last-of-type ${M.x} {
    display: none;
  }
  :last-of-type ${f.Z} {
    color: ${({theme:d})=>d.colors.neutral800};
    font-weight: ${({theme:d})=>d.fontWeights.bold};
  }
`,h=({children:d})=>(0,e.jsxs)(v,{inline:!0,as:"li",children:[(0,e.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:d}),(0,e.jsx)(M.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(n.Z,{})})]});h.displayName="Crumb";const O=({children:d,label:s,...A})=>(0,e.jsxs)(L.k,{...A,children:[(0,e.jsx)(p.T,{children:s}),(0,e.jsx)("ol",{"aria-hidden":!0,children:d})]});O.displayName="Breadcrumbs"},90608:(U,E,t)=>{t.d(E,{O:()=>n});var e=t(29178);const n=e.Wx},36989:(U,E,t)=>{t.d(E,{Z:()=>c});var e=t(85893),n=t(11047);const c=({startActions:p,endActions:L})=>!p&&!L?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:p}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:L})]})}}]);

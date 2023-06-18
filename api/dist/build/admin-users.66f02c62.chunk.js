"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[5199],{50935:(D,n,e)=>{e.d(n,{R:()=>l});var t=e(88767),a=e(87631),s=e(80129);function l(d={},c={}){const{id:i="",...r}=d,m=(0,s.stringify)(r,{encode:!1}),{get:u}=(0,a.kY)(),{data:o,isError:y,isLoading:L,refetch:S}=(0,t.useQuery)(["users",i,r],async()=>{const{data:{data:T}}=await u(`/admin/users/${i}${m?`?${m}`:""}`);return T},c);let O=[];return i&&o?O=[o]:Array.isArray(o?.results)&&(O=o.results),{users:O,pagination:o?.pagination??null,isLoading:L,isError:y,refetch:S}}},67875:(D,n,e)=>{e.d(n,{Z:()=>a});const a=()=>null},94699:(D,n,e)=>{e.d(n,{Z:()=>u});var t=e(67294),a=e(45697),s=e.n(a),l=e(86896),d=e(41580),c=e(29728),i=e(89597),r=e(87631);const m=({displayedFilters:o})=>{const[y,L]=(0,t.useState)(!1),{formatMessage:S}=(0,l.Z)(),O=(0,t.useRef)(),T=()=>{L(R=>!R)};return t.createElement(t.Fragment,null,t.createElement(d.x,{paddingTop:1,paddingBottom:1},t.createElement(c.z,{variant:"tertiary",ref:O,startIcon:t.createElement(i.Z,null),onClick:T,size:"S"},S({id:"app.utils.filters",defaultMessage:"Filters"})),y&&t.createElement(r.J5,{displayedFilters:o,isVisible:y,onToggle:T,source:O})),t.createElement(r.W$,{filtersSchema:o}))};m.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const u=m},4214:(D,n,e)=>{e.d(n,{Z:()=>r});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),d=e(29728),c=e(23293);const i=({onClick:m})=>{const{formatMessage:u}=(0,a.Z)();return t.createElement(d.z,{onClick:m,startIcon:t.createElement(c.Z,null),size:"S"},u({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};i.propTypes={onClick:l().func.isRequired};const r=i},57338:(D,n,e)=>{e.d(n,{Z:()=>a});const a={firstname:"",lastname:"",email:"",roles:[]}},55867:(D,n,e)=>{e.d(n,{Z:()=>a});const a=[]},88587:(D,n,e)=>{e.r(n),e.d(n,{default:()=>tt});var t=e(67294),a=e(87631),s=e(87751),l=e(15861),d=e(4942),c=e(70885),i=e(64687),r=e.n(i),m=e(80129),u=e.n(m),o=e(185),y=e(53979),L=e(36989),S=e(49066),O=e(16550),T=e(86896),R=e(88767),x=e(50935),te=e(45697),g=e.n(te),fe=e(15234),Me=e(79031),F=e(37909),ve=e(92155),X=e(75515),H=e(11047),ie=e(12028),b=e(41580),Z=e(4585),Se=e(20022),Pe=e(19631);const he=({canDelete:E,headers:M,entriesToDelete:v,onClickDelete:P,onSelectRow:V,withMainAction:J,withBulkActions:$,rows:se})=>{const{push:k,location:{pathname:w}}=(0,O.k6)(),{formatMessage:I}=(0,T.Z)();return t.createElement(fe.p,null,se.map(p=>{const z=v.findIndex(U=>U===p.id)!==-1;return t.createElement(Me.Tr,{key:p.id,...(0,a.X7)({fn:()=>k(`${w}/${p.id}`),condition:$})},J&&t.createElement(F.Td,{...a.UW},t.createElement(ve.C,{"aria-label":I({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,Pe.Pp)(p.firstname,p.lastname)}),checked:z,onChange:()=>{V({name:p.id,value:!z})}})),M.map(({key:U,cellFormatter:Q,name:q,...ne})=>t.createElement(F.Td,{key:U},typeof Q=="function"?Q(p,{key:U,name:q,formatMessage:I,...ne}):t.createElement(X.Z,{textColor:"neutral800"},p[q]||"-"))),$&&t.createElement(F.Td,null,t.createElement(H.k,{justifyContent:"end"},t.createElement(ie.h,{onClick:()=>k(`${w}/${p.id}`),label:I({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,Pe.Pp)(p.firstname,p.lastname)}),noBorder:!0,icon:t.createElement(Z.Z,null)}),E&&t.createElement(b.x,{paddingLeft:1,...a.UW},t.createElement(ie.h,{onClick:()=>P(p.id),label:I({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,Pe.Pp)(p.firstname,p.lastname)}),noBorder:!0,icon:t.createElement(Se.Z,null)})))))}))};he.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},he.propTypes={canDelete:g().bool,entriesToDelete:g().array,headers:g().array.isRequired,onClickDelete:g().func,onSelectRow:g().func,rows:g().array,withBulkActions:g().bool,withMainAction:g().bool};const Ie=he;var We=e(94699),de=e(87462),Oe=e(29728),Ze=e(42866),Ke=e(24969),Ce=e(2407),xe=e(59946),Le=e(11276),De=e(74571),Fe=e(36856),$e=e(14916),je=e(81288);const be=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var ae=e(87561);const ze=ae.Ry().shape({firstname:ae.Z_().trim().required(a.I0.required),lastname:ae.Z_(),email:ae.Z_().email(a.I0.email).required(a.I0.required),roles:ae.IX().min(1,a.I0.required).required(a.I0.required)}),Ne={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var Xe=function(){return window&&window.strapi&&window.strapi.isEE?e(97083).Z:e(57338).Z}(),He=function(){return window&&window.strapi&&window.strapi.isEE?e(810).Z:e(55867).Z}(),Ve=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),Re=function(M){var v=M.onSuccess,P=M.onToggle,V=(0,t.useState)("create"),J=(0,c.Z)(V,2),$=J[0],se=J[1],k=(0,t.useState)(!1),w=(0,c.Z)(k,2),I=w[0],p=w[1],z=(0,t.useState)(null),U=(0,c.Z)(z,2),Q=U[0],q=U[1],ne=(0,T.Z)(),W=ne.formatMessage,ye=(0,a.lm)(),me=(0,a.o1)(),Y=me.lockApp,re=me.unlockApp,ue=(0,a.kY)(),Te=ue.post,Ee=(0,R.useMutation)(function(h){return Te("/admin/users",h)},{onSuccess:function(C){return(0,l.Z)(r().mark(function N(){var j;return r().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return j=C.data,q(j.data.registrationToken),f.next=4,v();case 4:pe(),p(!1);case 6:case"end":return f.stop()}},N)}))()},onError:function(C){throw p(!1),ye({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),C},onSettled:function(){re()}}),le=W({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ge=function(){var h=(0,l.Z)(r().mark(function C(N,j){var G,f,Ae;return r().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return G=j.setErrors,Y(),p(!0),B.prev=3,B.next=6,Ee.mutateAsync(N);case 6:B.next=12;break;case 8:B.prev=8,B.t0=B.catch(3),re(),(B.t0===null||B.t0===void 0||(f=B.t0.response)===null||f===void 0||(Ae=f.data)===null||Ae===void 0?void 0:Ae.error.message)==="Email already taken"&&G({email:B.t0.response.data.error.message});case 12:case"end":return B.stop()}},C,null,[[3,8]])}));return function(N,j){return h.apply(this,arguments)}}(),pe=function(){A?se(A):P()},ee=Ne[$],oe=ee.buttonSubmitLabel,_=ee.isDisabled,A=ee.next,K=$==="create"?t.createElement(Oe.z,{type:"submit",loading:I},W(oe)):t.createElement(Oe.z,{type:"button",loading:I,onClick:P},W(oe));return t.createElement(Ze.P,{onClose:P,labelledBy:"title"},t.createElement(Ke.x,null,t.createElement(Ce.O,{label:le},t.createElement(Ce.$,null,le))),t.createElement($e.J9,{initialValues:Xe,onSubmit:ge,validationSchema:ze,validateOnChange:!1},function(h){var C=h.errors,N=h.handleChange,j=h.values;return t.createElement(a.l0,null,t.createElement(xe.f,null,t.createElement(H.k,{direction:"column",alignItems:"stretch",gap:6},$!=="create"&&t.createElement(Ve,{registrationToken:Q}),t.createElement(b.x,null,t.createElement(X.Z,{variant:"beta",as:"h2"},W({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(b.x,{paddingTop:4},t.createElement(H.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(Le.r,{gap:5},be.map(function(G){return G.map(function(f){return t.createElement(De.P,(0,de.Z)({key:f.name},f.size),t.createElement(a.jm,(0,de.Z)({},f,{disabled:_,error:C[f.name],onChange:N,value:j[f.name]})))})}))))),t.createElement(b.x,null,t.createElement(X.Z,{variant:"beta",as:"h2"},W({id:"global.roles",defaultMessage:"User's role"})),t.createElement(b.x,{paddingTop:4},t.createElement(Le.r,{gap:5},t.createElement(De.P,{col:6,xs:12},t.createElement(je.Z,{disabled:_,error:C.roles,onChange:N,value:j.roles})),He.map(function(G){return G.map(function(f){return t.createElement(De.P,(0,de.Z)({key:f.name},f.size),t.createElement(a.jm,(0,de.Z)({},f,{disabled:_,onChange:N,value:j[f.name]})))})})))))),t.createElement(Fe.m,{startActions:t.createElement(Oe.z,{variant:"tertiary",onClick:P,type:"button"},W({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:K}))}))};Re.propTypes={onToggle:g().func.isRequired,onSuccess:g().func.isRequired};const we=Re,_e=({pagination:E})=>t.createElement(b.x,{paddingTop:4},t.createElement(H.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:E})));_e.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},_e.propTypes={pagination:g().shape({page:g().number,pageCount:g().number,pageSize:g().number,total:g().number})};const Qe=_e,Ye=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Ge=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:E},{formatMessage:M}){return t.createElement(X.Z,{textColor:"neutral800"},E.map(v=>M({id:`Settings.permissions.users.${v.code}`,defaultMessage:v.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:E},{formatMessage:M}){return t.createElement(H.k,null,t.createElement(a.qb,{isActive:E,variant:E?"success":"danger"}),t.createElement(X.Z,{textColor:"neutral800"},M({id:E?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:E?"Active":"Inactive"})))}}];function Ue(E,M){var v=Object.keys(E);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(E);M&&(P=P.filter(function(V){return Object.getOwnPropertyDescriptor(E,V).enumerable})),v.push.apply(v,P)}return v}function ce(E){for(var M=1;M<arguments.length;M++){var v=arguments[M]!=null?arguments[M]:{};M%2?Ue(Object(v),!0).forEach(function(P){(0,d.Z)(E,P,v[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(v)):Ue(Object(v)).forEach(function(P){Object.defineProperty(E,P,Object.getOwnPropertyDescriptor(v,P))})}return E}var Je=function(){return window&&window.strapi&&window.strapi.isEE?e(49823).Z:e(4214).Z}(),ke=function(){return window&&window.strapi&&window.strapi.isEE?e(94018).Z:e(67875).Z}(),Be=["ee","license-limit-info"],qe=function(){var M=(0,a.kY)(),v=M.post,P=(0,a.So)(),V=P.formatAPIError,J=(0,t.useState)(!1),$=(0,c.Z)(J,2),se=$[0],k=$[1],w=(0,a.ss)(s.Z.settings.users),I=w.allowedActions,p=I.canCreate,z=I.canDelete,U=I.canRead,Q=(0,R.useQueryClient)(),q=(0,a.lm)(),ne=(0,T.Z)(),W=ne.formatMessage,ye=(0,O.TH)(),me=ye.search;(0,a.go)(),ke();var Y=(0,x.R)(u().parse(me,{ignoreQueryPrefix:!0}),{enabled:U}),re=Y.users,ue=Y.pagination,Te=Y.isError,Ee=Y.isLoading,le=Y.refetch,ge=Ge.map(function(_){return ce(ce({},_),{},{metadatas:ce(ce({},_.metadatas),{},{label:W(_.metadatas.label)})})}),pe=W({id:"global.users",defaultMessage:"Users"}),ee=function(){k(function(A){return!A})},oe=(0,R.useMutation)(function(){var _=(0,l.Z)(r().mark(function A(K){return r().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,v("/admin/users/batch-delete",{ids:K});case 2:case"end":return C.stop()}},A)}));return function(A){return _.apply(this,arguments)}}(),{onSuccess:function(){return(0,l.Z)(r().mark(function A(){return r().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,le();case 2:return h.next=4,Q.refetchQueries(Be);case 4:case"end":return h.stop()}},A)}))()},onError:function(A){q({type:"warning",message:{id:"notification.error",message:V(A),defaultMessage:"An error occured"}})}});return t.createElement(o.o,{"aria-busy":Ee},t.createElement(a.SL,{name:"Users"}),t.createElement(y.T,{primaryAction:p&&t.createElement(Je,{onClick:ee}),title:pe,subtitle:W({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),U&&t.createElement(L.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:W({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:pe})}),t.createElement(We.Z,{displayedFilters:Ye}))}),t.createElement(S.D,{canRead:U},!U&&t.createElement(a.ZF,null),Te&&t.createElement("div",null,"TODO: An error occurred"),U&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:Ee,onConfirmDeleteAll:oe.mutateAsync,onConfirmDelete:function(A){return oe.mutateAsync([A])},headers:ge,rows:re,withBulkActions:!0,withMainAction:z},t.createElement(Ie,{canDelete:z,headers:ge,rows:re,withBulkActions:!0,withMainAction:z})),ue&&t.createElement(Qe,{pagination:ue}))),se&&t.createElement(we,{onSuccess:(0,l.Z)(r().mark(function _(){return r().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,le();case 2:return K.next=4,Q.refetchQueries(Be);case 4:case"end":return K.stop()}},_)})),onToggle:ee}))};const et=qe,tt=()=>t.createElement(a.O4,{permissions:s.Z.settings.users.main},t.createElement(et,null))},82464:(D,n,e)=>{e.d(n,{Z:()=>m});var t=e(67294),a=e(45697),s=e.n(a),l=e(12028),d=e(87631),c=e(65186),i=e(86896);const r=({children:u,target:o})=>{const y=(0,d.lm)(),{formatMessage:L}=(0,i.Z)(),{copy:S}=(0,d.VP)(),O=L({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),T=async()=>{await S(o)&&y({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(d.Y_,{endAction:t.createElement(l.h,{label:O,noBorder:!0,icon:t.createElement(c.Z,null),onClick:T}),title:o,titleEllipsis:!0,subtitle:u,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};r.propTypes={children:s().oneOfType([s().element,s().string]).isRequired,target:s().string.isRequired};const m=r},31605:(D,n,e)=>{e.d(n,{Z:()=>r});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),d=e(63871),c=e(82464);const i=({registrationToken:m})=>{const{formatMessage:u}=(0,a.Z)(),o=`${window.location.origin}${d.Z}auth/register?registrationToken=${m}`;return t.createElement(c.Z,{target:o},u({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};i.defaultProps={registrationToken:""},i.propTypes={registrationToken:l().string};const r=i},81288:(D,n,e)=>{e.d(n,{Z:()=>T});var t=e(67294),a=e(45697),s=e.n(a),l=e(86896),d=e(40619),c=e(82562),i=e(88767),r=e(71997),m=e(86647),u=e(87631);const o=r.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,y=r.ZP.div`
  animation: ${o} 2s infinite linear;
`,L=()=>t.createElement(y,null,t.createElement(m.Z,null)),S=async()=>{const{get:R}=(0,u.tg)(),{data:x}=await R("/admin/roles");return x.data},O=({disabled:R,error:x,onChange:te,value:g})=>{const{status:fe,data:Me}=(0,i.useQuery)(["roles"],S,{staleTime:5e4}),{formatMessage:F}=(0,l.Z)(),ve=x?F({id:x,defaultMessage:x}):"",X=F({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),H=F({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),ie=F({id:"app.components.Select.placeholder",defaultMessage:"Select"}),b=fe==="loading"?t.createElement(L,null):void 0;return t.createElement(d.P,{id:"roles",disabled:R,error:ve,hint:H,label:X,name:"roles",onChange:Z=>{te({target:{name:"roles",value:Z}})},placeholder:ie,multi:!0,startIcon:b,value:g.map(Z=>Z.toString()),withTags:!0,required:!0},(Me||[]).map(Z=>t.createElement(c.W,{key:Z.id,value:Z.id.toString()},F({id:`global.${Z.code}`,defaultMessage:Z.name}))))};O.defaultProps={disabled:!1,error:void 0},O.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const T=O},49823:(D,n,e)=>{e.d(n,{Z:()=>O});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),d=e(11047),c=e(84495),i=e(52624),r=e(29728),m=e(51277),u=e(23293),o=e(14293),y=e.n(o),L=e(69483);const S=({onClick:T})=>{const{formatMessage:R}=(0,a.Z)(),{license:x}=(0,L.q5)(),{permittedSeats:te,shouldStopCreate:g}=x?.data??{};return t.createElement(d.k,{gap:2},!y()(te)&&g&&t.createElement(c.u,{description:R({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},t.createElement(i.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:m.Z})),t.createElement(r.z,{"data-testid":"create-user-button",onClick:T,startIcon:t.createElement(u.Z,null),size:"S",disabled:g},R({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};S.propTypes={onClick:l().func.isRequired};const O=S},97083:(D,n,e)=>{e.d(n,{Z:()=>l});var t=e(57338);const a=window.strapi.features.isEnabled(window.strapi.features.SSO)?{useSSORegistration:!0}:{},l={...t.Z,...a}},810:(D,n,e)=>{e.d(n,{Z:()=>a});const a=window.strapi.features.isEnabled(window.strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},12201:(D,n,e)=>{e.d(n,{Z:()=>r});var t=e(67294),a=e(86896),s=e(45697),l=e.n(s),d=e(63871),c=e(82464);const i=({registrationToken:m})=>{const{formatMessage:u}=(0,a.Z)();return m?t.createElement(c.Z,{target:`${window.location.origin}${d.Z}auth/register?registrationToken=${m}`},u({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(c.Z,{target:`${window.location.origin}${d.Z}auth/login`},u({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};i.defaultProps={registrationToken:""},i.propTypes={registrationToken:l().string};const r=i},2407:(D,n,e)=>{e.d(n,{$:()=>m,O:()=>u});var t=e(85893),a=e(16405),s=e(71997),l=e(63237),d=e(11047),c=e(41580),i=e(75515);const r=(0,s.ZP)(d.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }
  :last-of-type ${c.x} {
    display: none;
  }
  :last-of-type ${i.Z} {
    color: ${({theme:o})=>o.colors.neutral800};
    font-weight: ${({theme:o})=>o.fontWeights.bold};
  }
`,m=({children:o})=>(0,t.jsxs)(r,{inline:!0,as:"li",children:[(0,t.jsx)(i.Z,{variant:"pi",textColor:"neutral600",children:o}),(0,t.jsx)(c.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,t.jsx)(a.Z,{})})]});m.displayName="Crumb";const u=({children:o,label:y,...L})=>(0,t.jsxs)(d.k,{...L,children:[(0,t.jsx)(l.T,{children:y}),(0,t.jsx)("ol",{"aria-hidden":!0,children:o})]});u.displayName="Breadcrumbs"},36989:(D,n,e)=>{e.d(n,{Z:()=>s});var t=e(85893),a=e(11047);const s=({startActions:l,endActions:d})=>!l&&!d?null:(0,t.jsxs)(a.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(a.k,{gap:2,wrap:"wrap",children:l}),(0,t.jsx)(a.k,{gap:2,shrink:0,wrap:"wrap",children:d})]})},23293:(D,n,e)=>{e.d(n,{Z:()=>s});var t=e(85893);const a=l=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),s=a}}]);

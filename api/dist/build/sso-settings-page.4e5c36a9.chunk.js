"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[302],{40316:(j,m,e)=>{e.r(m),e.d(m,{SingleSignOn:()=>v,default:()=>H});var t=e(67294),o=e(87631),p=e(85018),M=e(17034),y=e(185),C=e(53979),I=e(29728),O=e(49066),b=e(11047),A=e(75515),P=e(11276),u=e(74571),D=e(20707),T=e(40619),Z=e(82562),f=e(67730),x=e(86896),F=e(18446),k=e.n(F),B=e(19631),h=e(95428),S=e(87751),i=e(87561);const G=i.Ry().shape({autoRegister:i.Xg().required(o.I0.required),defaultRole:i.nK().when("autoRegister",(a,n)=>a?n.required(o.I0.required):n.nullable()),ssoLockedRoles:i.IX().of(i.nK().when("ssoLockedRoles",(a,n)=>a?n.required(o.I0.required):n.nullable()))}),R={...S.Z.settings.sso,readRoles:S.Z.settings.roles.read},v=()=>{const{formatMessage:a}=(0,x.Z)(),{isLoading:n,allowedActions:{canUpdate:c,canReadRoles:z}}=(0,o.ss)(R),[{formErrors:l,initialData:K,isLoading:U,modifiedData:d,showHeaderButtonLoader:X},V,{handleChange:r,handleSubmit:N}]=(0,h.G4)((0,B.IF)("providers/options"),G,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:E}=(0,h.bF)(z);(0,o.go)();const W=n||U;(0,t.useEffect)(()=>{if(l.defaultRole){const s='[name="defaultRole"]';document.querySelector(s).focus()}},[l]);const L=k()(K,d);return t.createElement(M.A,null,t.createElement(o.SL,{name:"SSO"}),t.createElement(y.o,{tabIndex:-1},t.createElement("form",{onSubmit:s=>{if(L){s.preventDefault();return}N(s)}},t.createElement(C.T,{primaryAction:t.createElement(I.z,{"data-testid":"save-button",disabled:L,loading:X,startIcon:t.createElement(p.Z,null),type:"submit",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(O.D,null,W?t.createElement(o.dO,null):t.createElement(b.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(A.Z,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(P.r,{gap:4},t.createElement(u.P,{col:6,m:6,s:12},t.createElement(D.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!c,checked:d.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{r({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(u.P,{col:6,m:6,s:12},t.createElement(T.P,{disabled:!c,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:l.defaultRole?a({id:l.defaultRole.id,defaultMessage:l.defaultRole.id}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{r({target:{name:"defaultRole",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:d.defaultRole},E.map(({id:s,name:g})=>t.createElement(Z.W,{key:s,value:s.toString()},g)))),t.createElement(u.P,{col:6,m:6,s:12},t.createElement(f.NU,{disabled:!c,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:l.ssoLockedRoles?a({id:l.ssoLockedRoles.id,defaultMessage:l.ssoLockedRoles.id}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:s=>{r({target:{name:"ssoLockedRoles",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{r({target:{name:"ssoLockedRoles",emptyArray:[]}})},value:d.ssoLockedRoles||[],withTags:!0},E.map(({id:s,name:g})=>t.createElement(f.ML,{key:s,value:s.toString()},g))))))))))},H=()=>t.createElement(o.O4,{permissions:R.main},t.createElement(v,null))}}]);

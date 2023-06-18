"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[1495],{30077:(R,p,t)=>{t.r(p),t.d(p,{default:()=>k});var e=t(67294),r=t(86896),o=t(87631),h=t(14087),S=t(185),M=t(49066),c=t(11047),f=t(41580),v=t(75515),T=t(11276),E=t(74571),Z=t(16364),a=t(29728),d=t(23293),u=t(45697),l=t.n(u),g=t(71997),m=t(40619),j=t(82562),n=t(47560);const A=g.ZP.a`
  color: ${({theme:i})=>i.colors.primary600};
`,C=({config:i})=>{const{formatMessage:s}=(0,r.Z)();return e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(v.Z,{variant:"delta",as:"h2"},s({id:(0,n.Z)("Settings.email.plugin.title.config"),defaultMessage:"Configuration"})),e.createElement(v.Z,null,s({id:(0,n.Z)("Settings.email.plugin.text.configuration"),defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.createElement(A,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},s({id:(0,n.Z)("link"),defaultMessage:"Link"}))}))),e.createElement(T.r,{gap:5},e.createElement(E.P,{col:6,s:12},e.createElement(Z.o,{name:"shipper-email",label:s({id:(0,n.Z)("Settings.email.plugin.label.defaultFrom"),defaultMessage:"Default sender email"}),placeholder:s({id:(0,n.Z)("Settings.email.plugin.placeholder.defaultFrom"),defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:i.settings.defaultFrom})),e.createElement(E.P,{col:6,s:12},e.createElement(Z.o,{name:"response-email",label:s({id:(0,n.Z)("Settings.email.plugin.label.defaultReplyTo"),defaultMessage:"Default response email"}),placeholder:s({id:(0,n.Z)("Settings.email.plugin.placeholder.defaultReplyTo"),defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:i.settings.defaultReplyTo})),e.createElement(E.P,{col:6,s:12},e.createElement(m.P,{name:"email-provider",label:s({id:(0,n.Z)("Settings.email.plugin.label.provider"),defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:i.provider},e.createElement(j.W,{value:i.provider},i.provider)))))};C.propTypes={config:l().shape({provider:l().string,settings:l().shape({defaultFrom:l().string,defaultReplyTo:l().string})}).isRequired};const U=C;var B=t(87561);const I=B.Ry().shape({email:B.Z_().email(o.I0.email).required(o.I0.required)});var $=t(61321);const w=async()=>{const{get:i}=(0,o.tg)(),{data:s}=await i("/email/settings");return s.config},z=async i=>{const{post:s}=(0,o.tg)();await s("/email/test",i)};var N=t(53979);const P=()=>{const{formatMessage:i}=(0,r.Z)();return e.createElement(e.Fragment,null,e.createElement(o.SL,{name:i({id:(0,n.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"})}),e.createElement(N.T,{id:"title",title:i({id:(0,n.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"}),subtitle:i({id:(0,n.Z)("Settings.email.plugin.subTitle"),defaultMessage:"Test the settings for the Email plugin"})}))},V=()=>e.createElement(o.O4,{permissions:$.Z.settings},e.createElement(G,null)),G=()=>{const i=(0,o.lm)(),{formatMessage:s}=(0,r.Z)(),{lockApp:J,unlockApp:Q}=(0,o.o1)(),{notifyStatus:D}=(0,h.G)();(0,o.go)();const[b,X]=(0,e.useState)({}),[Y,O]=(0,e.useState)(!1),[F,W]=(0,e.useState)(!1),[x,H]=(0,e.useState)(""),[q,K]=(0,e.useState)(!1),[_,ee]=(0,e.useState)({provider:"",settings:{defaultFrom:"",defaultReplyTo:"",testAddress:""}});(0,e.useEffect)(()=>{O(!0),w().then(y=>{D(s({id:(0,n.Z)("Settings.email.plugin.notification.data.loaded"),defaultMessage:"Email settings data has been loaded"})),ee(y);const L=y?.settings?.testAddress;L&&H(L)}).catch(()=>i({type:"warning",message:s({id:(0,n.Z)("Settings.email.plugin.notification.config.error"),defaultMessage:"Failed to retrieve the email config"})})).finally(()=>O(!1))},[s,i,D]),(0,e.useEffect)(()=>{b.email&&document.querySelector("#test-address-input").focus()},[b]),(0,e.useEffect)(()=>{I.validate({email:x},{abortEarly:!1}).then(()=>K(!0)).catch(()=>K(!1))},[x]);const te=y=>{H(()=>y.target.value)},ae=async y=>{y.preventDefault();try{await I.validate({email:x},{abortEarly:!1}),W(!0),J(),z({to:x}).then(()=>{i({type:"success",message:s({id:(0,n.Z)("Settings.email.plugin.notification.test.success"),defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:x})})}).catch(()=>{i({type:"warning",message:s({id:(0,n.Z)("Settings.email.plugin.notification.test.error"),defaultMessage:"Failed to send a test mail to {to}"},{to:x})})}).finally(()=>{W(!1),Q()})}catch(L){X((0,o.CJ)(L))}};return Y?e.createElement(S.o,{labelledBy:"title","aria-busy":"true"},e.createElement(P,null),e.createElement(M.D,null,e.createElement(o.dO,null))):e.createElement(S.o,{labelledBy:"title","aria-busy":F},e.createElement(P,null),e.createElement(M.D,null,e.createElement("form",{onSubmit:ae},e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(f.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(U,{config:_})),e.createElement(f.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(v.Z,{variant:"delta",as:"h2"},s({id:(0,n.Z)("Settings.email.plugin.title.test"),defaultMessage:"Test email delivery"})),e.createElement(T.r,{gap:5,alignItems:"end"},e.createElement(E.P,{col:6,s:12},e.createElement(Z.o,{id:"test-address-input",name:"test-address",onChange:te,label:s({id:(0,n.Z)("Settings.email.plugin.label.testAddress"),defaultMessage:"Recipient email"}),value:x,error:b.email?.id&&s({id:(0,n.Z)(`${b.email?.id}`),defaultMessage:"This is an invalid email"}),placeholder:s({id:(0,n.Z)("Settings.email.plugin.placeholder.testAddress"),defaultMessage:"ex: developer@example.com"})})),e.createElement(E.P,{col:7,s:12},e.createElement(a.z,{loading:F,disabled:!q,type:"submit",startIcon:e.createElement(d.Z,null)},s({id:(0,n.Z)("Settings.email.plugin.button.test-email"),defaultMessage:"Send test email"}))))))))))},k=V},49066:(R,p,t)=>{t.d(p,{D:()=>o});var e=t(85893),r=t(41580);const o=({children:h})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:h})},53979:(R,p,t)=>{t.d(p,{T:()=>T});var e=t(85893),r=t(67294),o=t(71997);const h=a=>{const d=(0,r.useRef)(null),[u,l]=(0,r.useState)(!0),g=([m])=>{l(m.isIntersecting)};return(0,r.useEffect)(()=>{const m=d.current,j=new IntersectionObserver(g,a);return m&&j.observe(d.current),()=>{m&&j.disconnect()}},[d,a]),[d,u]};var S=t(79698);const M=(a,d)=>{const u=(0,S.W)(d);(0,r.useLayoutEffect)(()=>{const l=new ResizeObserver(u);return Array.isArray(a)?a.forEach(g=>{g.current&&l.observe(g.current)}):a.current&&l.observe(a.current),()=>{l.disconnect()}},[a,u])};var c=t(41580),f=t(11047),v=t(75515);const T=a=>{const d=(0,r.useRef)(null),[u,l]=(0,r.useState)(null),[g,m]=h({root:null,rootMargin:"0px",threshold:0});return M(g,()=>{g.current&&l(g.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{d.current&&l(d.current.getBoundingClientRect())},[d]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:u?.height},ref:g,children:m&&(0,e.jsx)(Z,{ref:d,...a})}),!m&&(0,e.jsx)(Z,{...a,sticky:!0,width:u?.width})]})};T.displayName="HeaderLayout";const E=(0,o.ZP)(c.x)`
  width: ${({width:a})=>a?`${a/16}rem`:void 0};
  z-index: ${({theme:a})=>a.zIndices[1]};
`,Z=r.forwardRef(({navigationAction:a,primaryAction:d,secondaryAction:u,subtitle:l,title:g,sticky:m,width:j,...n},A)=>{const C=typeof l=="string";return m?(0,e.jsx)(E,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:j,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(f.k,{justifyContent:"space-between",children:[(0,e.jsxs)(f.k,{children:[a&&(0,e.jsx)(c.x,{paddingRight:3,children:a}),(0,e.jsxs)(c.x,{children:[(0,e.jsx)(v.Z,{variant:"beta",as:"h1",...n,children:g}),C?(0,e.jsx)(v.Z,{variant:"pi",textColor:"neutral600",children:l}):l]}),u?(0,e.jsx)(c.x,{paddingLeft:4,children:u}):null]}),(0,e.jsx)(f.k,{children:d?(0,e.jsx)(c.x,{paddingLeft:2,children:d}):void 0})]})}):(0,e.jsxs)(c.x,{ref:A,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:a?6:8,background:"neutral100","data-strapi-header":!0,children:[a?(0,e.jsx)(c.x,{paddingBottom:2,children:a}):null,(0,e.jsxs)(f.k,{justifyContent:"space-between",children:[(0,e.jsxs)(f.k,{minWidth:0,children:[(0,e.jsx)(v.Z,{as:"h1",variant:"alpha",...n,children:g}),u?(0,e.jsx)(c.x,{paddingLeft:4,children:u}):null]}),d]}),C?(0,e.jsx)(v.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:l}):l]})})},185:(R,p,t)=>{t.d(p,{o:()=>S});var e=t(85893),r=t(71997),o=t(41580);const h=(0,r.ZP)(o.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,S=({labelledBy:M="main-content-title",...c})=>(0,e.jsx)(h,{"aria-labelledby":M,as:"main",id:"main-content",tabIndex:-1,...c})},23293:(R,p,t)=>{t.d(p,{Z:()=>o});var e=t(85893);const r=h=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...h,children:[(0,e.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),o=r}}]);

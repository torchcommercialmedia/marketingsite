"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[533],{37368:(k,I,t)=>{t.r(I),t.d(I,{default:()=>U});var e=t(67294),A=t(16364),S=t(25752),x=t(42866),B=t(24969),E=t(75515),W=t(59946),v=t(11047),p=t(8509),P=t(49123),R=t(30190),b=t(36856),V=t(40619),C=t(82562),j=t(29728),f=t(871),y=t(37106),z=t(86896),H=t(5458),s=t(48487),O=t(41580),$=t(44405);const D=window.localStorage.STRAPI_THEME,M=({icon:o,size:c})=>{const a=f[o];return a===void 0?e.createElement(e.Fragment,null):e.createElement($.Pd.Provider,{value:{color:D==="light"?"#212134":"#a5a5ba"}},e.createElement(a,{size:c}))},G=({icons:o,onSelectIcon:c})=>e.createElement(e.Fragment,null,o.map(a=>e.createElement(O.x,{key:a,variant:"secondary",onClick:()=>{c(a)}},e.createElement(M,{size:30,icon:a})))),U=({description:o,error:c,intlLabel:a,placeholder:T,name:g,required:Y,onChange:F,value:i})=>{const{formatMessage:l}=(0,z.Z)(),[h,J]=(0,e.useState)([]),[u,K]=(0,e.useState)(null),N=Object.keys(f),[Q,X]=(0,e.useState)(!1),[r,L]=(0,e.useState)(""),m=()=>X(n=>!n),Z=n=>F({target:{name:g,type:"string",value:n}}),w=n=>{m(),Z(n)};return(0,e.useEffect)(()=>{(async()=>{J((await(0,H.WY)("/react-icons/iconlibrary/find",{method:"GET"})).filter(d=>d.isEnabled))})()},[]),e.createElement(e.Fragment,null,e.createElement(A.o,{type:"text",label:a&&l(a),placeholder:T&&l(T),hint:o&&l(o),disabled:!0,onChange:F,id:g,name:g,value:i||"",required:Y,error:c,startAction:e.createElement(S.E,{onClick:m},i?e.createElement(M,{icon:i}):e.createElement(y.adB,null)),endAction:!!i&&e.createElement(S.E,{onClick:()=>Z("")},e.createElement(y.lhV,null))}),Q&&e.createElement(x.P,{onClose:m,labelledBy:"title"},e.createElement(B.x,null,e.createElement(E.Z,{fontWeight:"bold",id:"title"},"Select icon")),e.createElement(W.f,null,e.createElement(v.k,{direction:"column",justifyContent:"stretch",alignItems:"stretch",gap:5},e.createElement(p.U,null,e.createElement(P.w,{onClear:()=>L(""),value:r,onChange:n=>L(n.target.value),placeholder:l({id:(0,s.Z)("react-icons.iconSelector.search")})},l({id:(0,s.Z)("react-icons.iconSelector.search")}))),e.createElement(v.k,{direction:r.length<=0?"column":"row",wrap:"wrap",alignItems:"start",gap:r.length<=0?5:0},h.length>0?h.filter(n=>!u||n.abbreviation===u).map(n=>e.createElement(e.Fragment,null,r.length<=0&&e.createElement(R.C,null,e.createElement(E.Z,null,`${n.name} (${n.abbreviation})`)),e.createElement(v.k,{direction:"row",wrap:"wrap",gap:2},e.createElement(G,{icons:N.filter(d=>d.toLowerCase().startsWith(n.abbreviation)&&d.toLowerCase().includes(r.toLowerCase())),onSelectIcon:w})))):e.createElement(E.Z,{variant:"pi"},l({id:(0,s.Z)("react-icons.iconSelector.noIconLibrariesAvailable")}))))),e.createElement(b.m,{startActions:e.createElement(V.P,{minWidth:500,required:0,error:c,value:u,onChange:K},e.createElement(C.W,{value:""},l({id:(0,s.Z)("react-icons.iconSelector.allIconLibraries")})),h.map(n=>e.createElement(C.W,{key:n.id,value:n.abbreviation},n.name))),endActions:e.createElement(j.z,{variant:"tertiary",onClick:m},"Close")})))}}}]);
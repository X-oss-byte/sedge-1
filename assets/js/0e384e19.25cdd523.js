"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,m=l["".concat(c,".").concat(f)]||l[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Sedge is a one click setup tool for PoS network/chain validators and nodes written entirely in the Go programming language. Currently, Sedge is designed primarily for solo stakers and testnet devs of the Beacon Chain and the Merge (Ethereum), so these guides are focused only on Ethereum. Sedge takes care of the entire on-premise validator setup based on the chosen client; using generated docker-compose scripts based on the desired configuration.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/docs/quickstart/"}},c={},u=[],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sedge")," is a one click setup tool for PoS network/chain validators and nodes written entirely in the ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go programming language"),". Currently, ",(0,o.kt)("strong",{parentName:"p"},"Sedge")," is designed primarily for solo stakers and testnet devs of the Beacon Chain and the Merge (Ethereum), so these guides are focused only on Ethereum. ",(0,o.kt)("strong",{parentName:"p"},"Sedge")," takes care of the entire on-premise validator setup based on the chosen client; using generated docker-compose scripts based on the desired configuration."))}p.isMDXComponent=!0}}]);
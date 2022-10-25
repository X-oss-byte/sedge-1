"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(o),g=r,h=p["".concat(l,".").concat(g)]||p[g]||c[g]||a;return o?n.createElement(h,i(i({ref:t},d),{},{components:o})):n.createElement(h,i({ref:t},d))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9881:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Sedge is a one click setup tool for PoS network/chain validators and nodes written entirely in the Go programming language. Sedge takes care of the entire on-premise full node setup based on the chosen client; using generated docker-compose scripts based on the desired configuration. The following list shows some of the use cases for Sedge:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/docs/quickstart/"}},l={},u=[{value:"Why would you use Sedge",id:"why-would-you-use-sedge",level:2}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sedge")," is a one click setup tool for PoS network/chain validators and nodes written entirely in the ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go programming language"),". ",(0,r.kt)("strong",{parentName:"p"},"Sedge")," takes care of the entire on-premise full node setup based on the chosen client; using generated docker-compose scripts based on the desired configuration. The following list shows some of the use cases for Sedge:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Staking"),". You can use use Sedge to set up and deploy an Ethereum and Gnosis full node, including a validator node and with mev-boost. The on-premise setup design Sedge uses favors solo stakers but it can also be integrated in other staking solutions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automated testing"),". If you need to set up nodes very often to test your application or node, you can integrate Sedge to an automated solution, taking advantage that Sedge can set up a full node very quickly in just one step. This can be the case for protocol and dapps developers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"API and Checkpoint Sync endpoints"),". Sedge allows you to set up a full node without a validator so that you can use this node either to expose the execution JSON-RPC API or the Beacon Chain HTTP API, or to expose a ",(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/checkpoint-sync"},"Checkpoint Sync")," endpoint.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you set up a node with or without a validator, exposing or not the API, you would be contributing to the network anyway, which is amazing.")),(0,r.kt)("admonition",{title:"Disclaimer",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"While Sedge assists in installing the validator, it is not designed to register or maintain it. Users are solely responsible for ensuring that they monitor and maintain the validator as required, so that they do not incur penalties and/or financial losses. This includes promptly updating the tool to ensure the latest stable releases of clients are used.")),(0,r.kt)("admonition",{title:"Disclaimer",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Users acknowledge that no warranty is being made of a successful installation. Sedge is a tool and ultimately depends on you to use it correctly and following all the best practice guidance, as found in the project's README and this documentation.")),(0,r.kt)("h2",{id:"why-would-you-use-sedge"},"Why would you use Sedge"),(0,r.kt)("p",null,"Sedge focus on ease of use and little to none background to run a node or validator. You don't need to be a highly technical person to run a node using Sedge. This creates a lower barrier for people to get involved in the ecosystem. However, if you are have enough technical knowledge you can take advantage of sedge capabilities, as you can generate the setup files and modify them according to your needs and also integrate Sedge on other solutions. Today you can setup a full node or a validator in Ethereum in just one step using Sedge and in less than 5 minutes! Don't know which client to choose? No problem! Let Sedge choose it for you. "),(0,r.kt)("p",null,"Sedge codebase design allow us to create many features in a way Sedge will be able to satisfy most of your needs: automated updates, cross platform support, alerting mechanisms, off-premise setup, setup a single node or a full node, improved UI/UX, other networks and much more. Stay tuned to get the most of these features as soon as we ship them."))}c.isMDXComponent=!0}}]);
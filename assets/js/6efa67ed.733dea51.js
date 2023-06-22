"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7,id:"by-yourself"},i="Control Your Setup Stack",l={unversionedId:"quickstart/by-yourself",id:"quickstart/by-yourself",title:"Control Your Setup Stack",description:"Once you use sedge cli or sedge generate to generate the docker-compose.yml file, you can handle it by yourself. This guide will show you how.",source:"@site/docs/quickstart/by-yourself.mdx",sourceDirName:"quickstart",slug:"/quickstart/by-yourself",permalink:"/docs/quickstart/by-yourself",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/quickstart/by-yourself.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"by-yourself"},sidebar:"tutorialSidebar",previous:{title:"Complete quickstart guide",permalink:"/docs/quickstart/complete-guide"},next:{title:"Restarting the Validator",permalink:"/docs/quickstart/setup-validator"}},p={},c=[{value:"Execute the setup",id:"execute-the-setup",level:2},{value:"Stop the setup",id:"stop-the-setup",level:2},{value:"Check the container logs",id:"check-the-container-logs",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"control-your-setup-stack"},"Control Your Setup Stack"),(0,r.kt)("p",null,"Once you use ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge cli")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge generate")," to generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, you can handle it by yourself. This guide will show you how."),(0,r.kt)("p",null,"There are several reasons why you would need to manage the setup after using Sedge for generating the setup files. You\nmight want to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to change the setup configuration, or simply copy these\nfiles to another machine. Currently, Sedge runs the docker compose stack that was generated using ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge run"),". You\ncan use ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge logs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge down")," on any ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Each time you execute ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge cli")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge generate")," to generate the docker-compose file, that file and all modified\nfiles under the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge-data")," directory will be overwritten except the keystore folder.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can point to a different generation path by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--path")," option. This is useful if you want to generate the\nfiles in a different directory, or if you want to generate multiple setups.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge logs")," if you check ",(0,r.kt)("a",{parentName:"p",href:"/docs/commands/logs"},"here in our documentation"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge down")," if you check ",(0,r.kt)("a",{parentName:"p",href:"/docs/commands/down"},"here in our documentation"),".")),(0,r.kt)("h2",{id:"execute-the-setup"},"Execute the setup"),(0,r.kt)("p",null,"Once generated the docker-compose file, you can modify either the environment variables in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file or the\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge-data")," directory."),(0,r.kt)("p",null,"After that, you can run the following command to start the setup from the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge-data")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,r.kt)("p",null,"or the following command from any directory assuming that you have the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge-data")," folder (let's call it ",(0,r.kt)("inlineCode",{parentName:"p"},"<path>"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f <path> up -d\n")),(0,r.kt)("h2",{id:"stop-the-setup"},"Stop the setup"),(0,r.kt)("p",null,"To stop the setup, you can run the following command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge-data")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down\n")),(0,r.kt)("p",null,"or the following command from any directory assuming that you have the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge-data")," folder (let's call it ",(0,r.kt)("inlineCode",{parentName:"p"},"<path>"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f <path> down\n")),(0,r.kt)("h2",{id:"check-the-container-logs"},"Check the container logs"),(0,r.kt)("p",null,"The compose stack is made of several running docker containers. The setup for an Ethereum full node that Sedge applies consists of a container for each node (execution, consensus and validator node). You can run the following command to check the logs of a given container/node from the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge-data")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose logs <node>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<node>")," with the node type, e.g: execution, consensus, validator")),(0,r.kt)("p",null,"or the following command from any directory assuming that you have the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge-data")," folder (let's call it ",(0,r.kt)("inlineCode",{parentName:"p"},"<path>"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f <path> logs <node>\n")),(0,r.kt)("p",null,"Press ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+c")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"control+c")," to exit from the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose logs")," command."))}d.isMDXComponent=!0}}]);
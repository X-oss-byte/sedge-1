"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6879],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(t),m=l,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(7462),l=(t(7294),t(3905));const o={sidebar_position:3,id:"deps"},i="Deps",a={unversionedId:"commands/deps",id:"commands/deps",title:"Deps",description:"Running sedge deps will allows you to check and install dependencies for needed to run Sedge.",source:"@site/docs/commands/deps.mdx",sourceDirName:"commands",slug:"/commands/deps",permalink:"/docs/commands/deps",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/commands/deps.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"deps"},sidebar:"tutorialSidebar",previous:{title:"Clients",permalink:"/docs/commands/clients"},next:{title:"Down",permalink:"/docs/commands/down"}},s={},d=[{value:"Help",id:"help",level:2},{value:"Check",id:"check",level:2},{value:"Install",id:"install",level:2},{value:"Execution Example",id:"execution-example",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deps"},"Deps"),(0,l.kt)("p",null,"Running ",(0,l.kt)("inlineCode",{parentName:"p"},"sedge deps")," will allows you to check and install dependencies for needed to run Sedge."),(0,l.kt)("h2",{id:"help"},"Help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ sedge deps --help\nChecks and install dependencies needed to run Sedge.\n\nUsage:\n  sedge deps [command]\n\nAvailable Commands:\n  check       Check dependencies\n  install     Install dependencies\n\nFlags:\n  -h, --help   help for deps\n\nGlobal Flags:\n      --log-level string   Set Log Level, e.g panic, fatal, error, warn, warning, info, debug, trace (default "info")\n\nUse "sedge deps [command] --help" for more information about a command.\n')),(0,l.kt)("h2",{id:"check"},"Check"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sedge deps check")," will check if all dependencies are installed and if not, it will print a list of missing dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ sedge deps check\nChecks if the following dependencies are installed on the host machine:\n    - docker\n    - docker compose\n\nAlso checks if the docker engine is running\n\nUsage:\n  sedge deps check [flags]\n\nFlags:\n  -h, --help   help for check\n\nGlobal Flags:\n      --log-level string   Set Log Level, e.g panic, fatal, error, warn, warning, info, debug, trace (default "info")\n')),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sedge deps install")," will install all missing dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ sedge deps install\nChecks if docker is installed in the host machine. If not, it will try to install it.\nInstallation is only supported on Linux.\n\nUsage:\n  sedge deps install [flags]\n\nFlags:\n  -h, --help   help for install\n\nGlobal Flags:\n      --log-level string   Set Log Level, e.g panic, fatal, error, warn, warning, info, debug, trace (default "info")\n')),(0,l.kt)("h2",{id:"execution-example"},"Execution Example"),(0,l.kt)("p",null,"The execution of ",(0,l.kt)("inlineCode",{parentName:"p"},"sedge deps check")," will result in an output like this if everything looks good:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sedge deps check\n2023-03-21 02:56:04 -- [INFO] [Logger Init] Log level: info\n2023-03-21 02:56:05 -- [INFO] You are running the latest version of sedge. Version:  v0.6.0\n2023-03-21 02:56:05 -- [INFO] docker is installed\n2023-03-21 02:56:06 -- [INFO] All dependencies are installed and running\n")))}p.isMDXComponent=!0}}]);
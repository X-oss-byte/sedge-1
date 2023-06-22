"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4,id:"using-relays"},s="Using custom MEV Relays",i={unversionedId:"quickstart/samples/using-relays",id:"quickstart/samples/using-relays",title:"Using custom MEV Relays",description:"What is a MEV Relay?",source:"@site/docs/quickstart/samples/using-relays.mdx",sourceDirName:"quickstart/samples",slug:"/quickstart/samples/using-relays",permalink:"/docs/quickstart/samples/using-relays",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/quickstart/samples/using-relays.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"using-relays"},sidebar:"tutorialSidebar",previous:{title:"Using custom Bootnodes",permalink:"/docs/quickstart/samples/custom-bootnodes"},next:{title:"Setting Checkpoint Sync",permalink:"/docs/quickstart/samples/setting-checkpoint-sync"}},l={},c=[{value:"What is a MEV Relay?",id:"what-is-a-mev-relay",level:2},{value:"How MEV Relays Work",id:"how-mev-relays-work",level:2},{value:"How to connect a MEV Relay with Sedge",id:"how-to-connect-a-mev-relay-with-sedge",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-custom-mev-relays"},"Using custom MEV Relays"),(0,r.kt)("h2",{id:"what-is-a-mev-relay"},"What is a MEV Relay?"),(0,r.kt)("p",null,"MEV (Maximal Extractable Value) relays on Ethereum are tools or services designed to help miners and other network\nparticipants capture the value generated from ordering and selecting transactions within a block. MEV is the measure\nof the total value that miners can extract by reordering, censoring, or including specific transactions in the blocks\nthey propose."),(0,r.kt)("p",null,"MEV relays are important because they help create a more efficient and fair environment for transaction ordering in\nEthereum. They consist of two main components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"MEV Relay: This is the infrastructure that aggregates and organizes the transaction bundles submitted by users and\nother network participants. It collects, sorts, and communicates the information required to optimize the transaction\nordering and selection process.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"MEV Strategies: These are algorithms or strategies created by developers, traders, and other ecosystem participants.\nThey are designed to identify and capture MEV opportunities by optimizing transaction ordering and inclusion in a block.\nThe strategies can involve arbitrage, liquidations, or other DeFi-related opportunities that have value."))),(0,r.kt)("p",null,"MEV relays help in reducing the negative effects of MEV on Ethereum, such as network congestion and gas price manipulation.\nThey also promote a more competitive and transparent ecosystem for capturing MEV, benefiting both miners and users.\nSome popular MEV relays include Flashbots and KeeperDAO, which offer tools and services for miners and other network\nparticipants to capture MEV efficiently."),(0,r.kt)("h2",{id:"how-mev-relays-work"},"How MEV Relays Work"),(0,r.kt)("p",null,"MEV relays are blockchain services that help users transfer their transactions faster by paying a small fee to miners. They work by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Users send their transactions to the MEV relay instead of directly to the network.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The MEV relay then bundles multiple transactions together into a single block proposal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This block proposal is sent to miners, who can choose to include it in a block in exchange for the fees from the\nbundled transactions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Miners who include the MEV relay's block proposal earn the fees from all the bundled transactions. Users get\ntheir transactions processed faster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The MEV relay takes a small cut of the fees for providing this bundling service."))),(0,r.kt)("p",null,"This allows users to circumvent the normal transaction queue and have their transactions processed faster by leveraging\nthe fees they pay. Miners are incentivized to include these block proposals because they earn higher fees. MEV relays\nprovide a market-based solution to prioritize certain transactions."),(0,r.kt)("p",null,"The downside is that MEV relays centralize transaction ordering and bundling to some extent. They also raise the barrier\nto direct transaction inclusion for regular users. But they do help improve overall block space utilization and\ntransaction speeds."),(0,r.kt)("h2",{id:"how-to-connect-a-mev-relay-with-sedge"},"How to connect a MEV Relay with Sedge"),(0,r.kt)("p",null,"By default, if MEV is supported by the network, Sedge will connect to mev relay by default. If you want to connect to a\nspecific MEV relay, you can do so by specifying the flag that might depend on the command you are using, but will look\nlike:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generating a full node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sedge generate full-node --relay-urls=https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net,https://0xa1559ace749633b997cb3fdacffb890aeebdb0f5a3b6aaa7eeeaf1a38af0a8fe88b9e4b1f61f236d2e64d95733327a62@relay.ultrasound.money\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Generating a mev-boost node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sedge generate mevboost --relay-urls=https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net,https://0xa1559ace749633b997cb3fdacffb890aeebdb0f5a3b6aaa7eeeaf1a38af0a8fe88b9e4b1f61f236d2e64d95733327a62@relay.ultrasound.money\n")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,id:"cli"},i="Cli",s={unversionedId:"commands/cli",id:"commands/cli",title:"Cli",description:"sedge cli run the setup tool on an interactive mode.",source:"@site/docs/commands/cli.mdx",sourceDirName:"commands",slug:"/commands/cli",permalink:"/docs/commands/cli",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/commands/cli.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"cli"},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/commands"},next:{title:"Clients",permalink:"/docs/commands/clients"}},l={},c=[{value:"Help",id:"help",level:2},{value:"Execution Example",id:"execution-example",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli"},"Cli"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sedge cli")," run the setup tool on an interactive mode."),(0,r.kt)("h2",{id:"help"},"Help"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ sedge cli -h\nThis command will guide you through the process of setting up one of these node types:\n\n- Full Node (execution + consensus + validator)\n- Full Node without Validator (execution + consensus)\n- Execution Node\n- Consensus Node\n- Validator Node\n\nFollow the prompts to select the options you want for your node. At the end of the process, you will\nbe asked to run the generated setup or not. If you chose to run the setup, it will be executed for you\nusing docker compose command behind the scenes.\n\nUsage:\n  sedge cli [flags]\n\nFlags:\n  -h, --help   help for cli\n\nGlobal Flags:\n      --log-level string   Set Log Level, e.g panic, fatal, error, warn, warning, info, debug, trace (default "info")\n')),(0,r.kt)("h2",{id:"execution-example"},"Execution Example"),(0,r.kt)("p",null,"As this is an interactive command, it will ask you a series of questions to set up your node. According to the answers, it will create a flow of questions and generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file with the configuration you selected."),(0,r.kt)("p",null,"This is an example of what you can expect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sedge cli\n2023-03-20 21:54:08 -- [INFO] [Logger Init] Log level: info\n2023-03-20 21:54:08 -- [INFO] You are running the latest version of sedge. Version:  v0.6.0\n? Select network goerli\n? Select node type full-node\n? Generation path /root/sedge-data\n? Container tag, sedge will add to each container and the network, a suffix with the tag\n? Do you want to set up a validator? Yes\n? Enable MEV Boost? Yes\n? Mev-Boost image flashbots/mev-boost:latest\n? Insert relay URLs if you don't want to use the default values listed below Default values are listed below. (\nhttps://0xafa4c6985aa049fb79dd37010438cfebeb0f2bd42b115b89dd678dab0670c1de38da0c4e9138c9290a398ecd9a0b3110@builder-relay-goerli.flashbots.net\nhttps://0x821f2a65afb70e7f2e820a925a9b4c80a159620582c1766b1b09729fec178b11ea22abb3a51f07b288be815a1a2ff516@bloxroute.max-profit.builder.goerli.blxrbdn.com\n? Insert relay URLs if you don't want to use the default values listed below Default values are listed below.\n\nhttps://0xafa4c6985aa049fb79dd37010438cfebeb0f2bd42b115b89dd678dab0670c1de38da0c4e9138c9290a398ecd9a0b3110@builder-relay-goerli.flashbots.net\nhttps://0x821f2a65afb70e7f2e820a925a9b4c80a159620582c1766b1b09729fec178b11ea22abb3a51f07b288be815a1a2ff516@bloxroute.max-profit.builder.goerli.blxrbdn.com\nhttps://0x8f7b17a74569b7a57e9bdafd2e159380759f5dc3ccbd4bf600414147e8c4e1dc6ebada83c0139ac15850eb6c975e82d0@builder-relay-goerli.blocknative.com\nhttps://0xb1d229d9c21298a87846c7022ebeef277dfc321fe674fa45312e20b5b6c400bfde9383f801848d7837ed5fc449083a12@relay-goerli.edennetwork.io\nhttps://0xb1559beef7b5ba3127485bbbb090362d9f497ba64e177ee2c8e7db74746306efad687f2cf8574e38d70067d40ef136dc@relay-stag.ultrasound.money\n\n? Select execution client nethermind\n? Select consensus client prysm\n? Select validator client prysm\n? Validator grace period. This is the number of epochs the validator will wait for security reasons before starting 2\n? Graffiti to be used by the validator (press enter to skip it) neth-prysm\n? Checkpoint sync URL https://goerli.checkpoint-sync.ethpandaops.io\n? Please enter the Fee Recipient address 0xEf8801eaf234ff82801821FFe2d78D60a0237F97\n? Do you want to expose all ports? No\n? Select JWT source create\n2023-03-20 21:54:51 -- [INFO] Generating JWT secret for client authentication\n2023-03-20 21:54:51 -- [INFO] JWT secret generated\n2023-03-20 21:54:51 -- [INFO] Generating docker-compose script for current selection of clients\n2023-03-20 21:54:51 -- [INFO] Generated docker-compose script for current selection of clients\n2023-03-20 21:54:51 -- [INFO] Generating environment file for current selection of clients\n2023-03-20 21:54:51 -- [INFO] Generated environment file for current selection of clients\n2023-03-20 21:54:51 -- [INFO] Cleaning generated docker-compose and environment files\n2023-03-20 21:54:51 -- [INFO] Cleaned generated files\n? Select keystore source create\n? Select mnemonic source create\n? Select passphrase source random\n? Withdrawal address 0xB26FCB9D0bf72F881dCfa9E4Eb3B23fB75Ae9A15\n? Number of validators 20\n? Existing validators. This number will be used as the initial index for the generated keystores. 3\n2023-03-20 21:55:12 -- [INFO] Generating keystores...\n2023-03-20 21:55:12 -- [INFO] Keystores generated successfully\n2023-03-20 21:55:13 -- [INFO] Importing validator keys into the validator client...\n2023-03-20 21:55:13 -- [INFO] Setting up containers\n2023-03-20 21:55:13 -- [INFO] Running command: docker compose -f /root/sedge-data/docker-compose.yml build validator\n2023-03-20 21:55:13 -- [INFO] Running command: docker compose -f /root/sedge-data/docker-compose.yml pull validator\n[+] Running 1/1\n \u283f validator Pulled                                                                                                                                                                                                                                                                                                                                                                                                                    0.5s\n2023-03-20 21:55:13 -- [INFO] Running command: docker compose -f /root/sedge-data/docker-compose.yml create validator\n[+] Running 2/0\n \u283f Container sedge-validator-blocker  Created                                                                                                                                                                                                                                                                                                                                                                                          0.0s\n \u283f Container sedge-validator-client   Created                                                                                                                                                                                                                                                                                                                                                                                          0.0s\n2023-03-20 21:55:13 -- [INFO] Importing validator keys\n2023-03-20 21:55:13 -- [INFO] The keys import container is starting\n2023-03-20 21:55:17 -- [INFO] Validator keys imported successfully\n? Interchange slashing protection file path slashing_protection.json\n2023-03-20 21:55:43 -- [INFO] Importing slashing data to client prysm from /root/slashing_protection.json\n2023-03-20 21:55:43 -- [INFO] The slashing protection container is starting...\n2023-03-20 21:55:43 -- [INFO] The slashing container ends successfully.\n? Run services now? No\n2023-03-20 21:55:48 -- [INFO]\nYour setup is ready. You can run it anytime using the 'sedge run --path /root/sedge-data' command. Feel free to explore the files and make changes, although Sedge is not accountable for any misbehavior or issue caused by any modification done to the setup. Stay tuned for more updates and features!\n\nHappy Sedging!\n")))}u.isMDXComponent=!0}}]);
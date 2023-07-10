"use strict";(self.webpackChunkz_3_r_0_docs=self.webpackChunkz_3_r_0_docs||[]).push([[1460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),k=a,g=p["".concat(i,".").concat(k)]||p[k]||u[k]||o;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="Meta Blocks",s={unversionedId:"tagblocks/blocks/meta",id:"tagblocks/blocks/meta",title:"Meta Blocks",description:"Blocks that interact with the bot or the bot's command-related stuff. (e.g. Getting user's argument(s) when they execute !!somecommand argument goes here)",source:"@site/docs/tagblocks/blocks/meta.md",sourceDirName:"tagblocks/blocks",slug:"/tagblocks/blocks/meta",permalink:"/tagblocks/blocks/meta",draft:!1,editUrl:"https://github.com/ZiRO-Bot/docs/tree/master/docs/tagblocks/blocks/meta.md",tags:[],version:"current",frontMatter:{},sidebar:"tagblocks",previous:{title:"Discord Action Blocks",permalink:"/tagblocks/blocks/discord-action"},next:{title:"Test",permalink:"/tagblocks/blocks/test"}},i={},c=[{value:"Argument Block",id:"argument-block",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"meta-blocks"},"Meta Blocks"),(0,a.kt)("p",null,"Blocks that interact with the bot or the bot's command-related stuff. (e.g. Getting user's argument(s) when they execute ",(0,a.kt)("inlineCode",{parentName:"p"},"!!somecommand argument goes here"),")"),(0,a.kt)("h2",{id:"argument-block"},"Argument Block"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This block is only supported in ",(0,a.kt)("strong",{parentName:"p"},"Custom Commands"),".")),(0,a.kt)("p",null,"Block that lets you to access executed command's arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Block"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"{args}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Aliases"),": None"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters"),": Index (starts from 0)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Examples"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Command"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Hello, {args}!"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"Input"),': "World"',(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"Output"),': "Hello, ',(0,a.kt)("strong",{parentName:"li"},"World"),'!"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Command"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"{args(0)} is the best!"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"Input"),': "Z3R0 and ..."',(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"Output"),': "',(0,a.kt)("strong",{parentName:"li"},"Z3R0"),' is the best!"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Command"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Spaced example: '{args(1)}'"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"Input"),': "nospace " with spaces ""',(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("strong",{parentName:"li"},"Output"),": \"Spaced example: '",(0,a.kt)("strong",{parentName:"li"}," with spaces "),"'\"")))))}u.isMDXComponent=!0}}]);
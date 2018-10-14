"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),l=r(6010),i=r(2389),o=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,i=e.lazy,d=e.block,m=e.defaultValue,f=e.values,w=e.groupId,h=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:y[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.U)(),x=g.tabGroupChoices,C=g.setTabGroupChoices,T=(0,a.useState)(k),q=T[0],j=T[1],O=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=w){var E=x[w];null!=E&&E!==q&&v.some((function(e){return e.value===E}))&&j(E)}var P=function(e){var t=e.currentTarget,r=O.indexOf(t),n=v[r].value;n!==q&&(N(t),j(n),null!=w&&C(w,String(n)))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=O.indexOf(e.currentTarget)+1;r=null!=(n=O[a])?n:O[0];break;case"ArrowLeft":var l,i=O.indexOf(e.currentTarget)-1;r=null!=(l=O[i])?l:O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},v.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":q===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(y.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},4959:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),a=r(9960),l=r(4477),i=r(2263),o=r(643).version.split("."),s=[o[0],o[1]].join(".");const u=function(e){var t=e.to,r=e.children,o=(0,l.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===s?n.createElement(a.default,{to:"/api/"+t},r):n.createElement(a.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t},r)}},7317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>w});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=r(5488),o=r(5162),s=r(1435),u=r(4959);var c=["components"],p={id:"crawl-all-links",title:"Crawl all links on a website"},d=void 0,m={unversionedId:"examples/crawl-all-links",id:"version-3.1/examples/crawl-all-links",title:"Crawl all links on a website",description:"This example uses the enqueueLinks() method to add new links to the RequestQueue",source:"@site/versioned_docs/version-3.1/examples/crawl_all_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-all-links",permalink:"/docs/examples/crawl-all-links",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1665806797,formattedLastUpdatedAt:"Oct 15, 2022",frontMatter:{id:"crawl-all-links",title:"Crawl all links on a website"},sidebar:"docs",previous:{title:"Cheerio crawler",permalink:"/docs/examples/cheerio-crawler"},next:{title:"Crawl multiple URLs",permalink:"/docs/examples/crawl-multiple-urls"}},f={},w=[],h={toc:w};function y(e){var t=e.components,r=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," method to add new links to the ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestQueue"),"\nas the crawler navigates from page to page."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If no options are given, by default the method will only add links that are under the same subdomain. This behavior can be controlled with the ",(0,l.kt)(u.Z,{to:"core/interface/EnqueueLinksOptions#strategy",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"strategy")),"\noption. You can find more info about this option in the ",(0,l.kt)("a",{parentName:"p",href:"./crawl-relative-links",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Crawl relative links"))," examples.")),(0,l.kt)(i.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n")),(0,l.kt)(o.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n")),(0,l.kt)(o.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n"))))}y.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.1.0","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.1.0","@crawlee/browser":"^3.1.0","@crawlee/cheerio":"^3.1.0","@crawlee/cli":"^3.1.0","@crawlee/core":"^3.1.0","@crawlee/http":"^3.1.0","@crawlee/jsdom":"^3.1.0","@crawlee/playwright":"^3.1.0","@crawlee/puppeteer":"^3.1.0","@crawlee/utils":"^3.1.0","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":"<= 18.0"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);
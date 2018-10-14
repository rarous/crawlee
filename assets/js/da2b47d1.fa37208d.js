"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4959:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(7294),n=r(9960),i=r(4477),o=r(2263),s=r(643).version.split("."),l=[s[0],s[1]].join(".");const u=function(e){var t=e.to,r=e.children,s=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===l?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},r)}},2895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=r(4959),s=["components"],l={id:"first-crawler",title:"First crawler",description:"Your first steps into the world of scraping with Crawlee"},u=void 0,p={unversionedId:"introduction/first-crawler",id:"version-3.0/introduction/first-crawler",title:"First crawler",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.0/introduction/02-first-crawler.mdx",sourceDirName:"introduction",slug:"/introduction/first-crawler",permalink:"/docs/3.0/introduction/first-crawler",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1665806797,formattedLastUpdatedAt:"Oct 15, 2022",sidebarPosition:2,frontMatter:{id:"first-crawler",title:"First crawler",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Setting up",permalink:"/docs/3.0/introduction/setting-up"},next:{title:"Adding more URLs",permalink:"/docs/3.0/introduction/adding-urls"}},d={},c=[{value:"How Crawlee works",id:"how-crawlee-works",level:2},{value:"The Where - <code>Request</code> and <code>RequestQueue</code>",id:"the-where---request-and-requestqueue",level:3},{value:"The What - <code>requestHandler</code>",id:"the-what---requesthandler",level:3},{value:"Building a crawler",id:"building-a-crawler",level:2},{value:"Adding requests to the crawling queue",id:"adding-requests-to-the-crawling-queue",level:3},{value:"Building a CheerioCrawler",id:"building-a-cheeriocrawler",level:3},{value:"Add requests faster",id:"add-requests-faster",level:3},{value:"Next lesson",id:"next-lesson",level:2}],h={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, you will build your first crawler. But before you do, let's briefly introduce the Crawlee classes involved in the process."),(0,i.kt)("h2",{id:"how-crawlee-works"},"How Crawlee works"),(0,i.kt)("p",null,"There are 3 main crawler classes available for use in Crawlee. ",(0,i.kt)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", ",(0,i.kt)(o.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," and ",(0,i.kt)(o.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),". We'll talk about their differences later. Now, let's talk about what they have in common."),(0,i.kt)("p",null,"The general idea of each crawler is to go to a web page, open it, do some stuff there, save some results, continue to the next page, and repeat this process until the crawler's done its job. So the crawler always needs to find answers to two questions: ",(0,i.kt)("strong",{parentName:"p"},"Where should I go?")," and ",(0,i.kt)("strong",{parentName:"p"},"What should I do there?")," Answering those two questions is the only required setup. The crawlers have reasonable defaults for everything else."),(0,i.kt)("h3",{id:"the-where---request-and-requestqueue"},"The Where - ",(0,i.kt)("inlineCode",{parentName:"h3"},"Request")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"RequestQueue")),(0,i.kt)("p",null,"All crawlers use instances of the ",(0,i.kt)(o.Z,{to:"core/class/Request",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"Request"))," class to determine where they need to go. Each request may hold a lot of information, but at the very least, it must hold a URL - a web page to open. But having only one URL would not make sense for crawling. Sometimes you have a pre-existing list of your own URLs that you wish to visit, perhaps a thousand. Other times you need to build this list dynamically as you crawl, adding more and more URLs to the list as you progress. Most of the time, you will use both options."),(0,i.kt)("p",null,"The requests are stored in a ",(0,i.kt)(o.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue")),", a dynamic queue of ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," instances. You can seed it with start URLs and also add more requests while the crawler is running. This allows the crawler to open one page, extract interesting URLs, such as links to other pages on the same domain, add them to the queue (called ",(0,i.kt)("em",{parentName:"p"},"enqueuing"),") and repeat this process to build a queue of virtually unlimited number of URLs."),(0,i.kt)("h3",{id:"the-what---requesthandler"},"The What - ",(0,i.kt)("inlineCode",{parentName:"h3"},"requestHandler")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"requestHandler")," you tell the crawler what to do at each and every page it visits. You can use it to handle extraction of data from the page, processing the data, saving it, calling APIs, doing calculations and so on."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"requestHandler")," is a user-defined function, invoked automatically by the crawler for each ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue"),". It always receives a single argument - a ",(0,i.kt)(o.Z,{to:"core/interface/CrawlingContext",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CrawlingContext")),". Its properties change depending on the crawler class used, but it always includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," property, which represents the currently crawled URL and related metadata."),(0,i.kt)("h2",{id:"building-a-crawler"},"Building a crawler"),(0,i.kt)("p",null,"Let's put the theory into practice and start with something easy. Visit a page and get its HTML title. In this tutorial, you'll scrape the Crawlee website ",(0,i.kt)("a",{parentName:"p",href:"https://crawlee.dev",target:null,rel:null},"https://crawlee.dev"),", but the same code will work for any website."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We are using a JavaScript feature called ",(0,i.kt)("a",{parentName:"p",href:"https://blog.saeloun.com/2021/11/25/ecmascript-top-level-await.html",target:"_blank",rel:"noopener"},"Top level await")," in our examples. To be able to use that, you might need some extra setup. Namely, it requires the use of ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html",target:"_blank",rel:"noopener"},"ECMAScript Modules")," - this means you either need to add ",(0,i.kt)("inlineCode",{parentName:"p"},'"type": "module"')," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file, or use ",(0,i.kt)("inlineCode",{parentName:"p"},"*.mjs")," extension for your files. Additionally, if you are in a TypeScript project, you need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"module")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," compiler options to ",(0,i.kt)("inlineCode",{parentName:"p"},"ES2022")," or above.")),(0,i.kt)("h3",{id:"adding-requests-to-the-crawling-queue"},"Adding requests to the crawling queue"),(0,i.kt)("p",null,"Earlier you learned that the crawler uses a queue of requests as its source of URLs to crawl. Let's create it and add the first request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/main.mjs"',title:'"src/main.mjs"'},"import { RequestQueue } from 'crawlee';\n\n// First you create the request queue instance.\nconst requestQueue = await RequestQueue.open();\n// And then you add one or more requests to it.\nawait requestQueue.addRequest({ url: 'https://crawlee.dev' });\n")),(0,i.kt)("p",null,"The ",(0,i.kt)(o.Z,{to:"core/class/RequestQueue#addRequest",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"requestQueue.addRequest()"))," function automatically converts the object with URL string to a ",(0,i.kt)(o.Z,{to:"core/class/Request",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"Request"))," instance. So now you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"requestQueue")," that holds one request which points to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://crawlee.dev"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The code above is for illustration of the request queue concept. Soon you'll learn about the ",(0,i.kt)("inlineCode",{parentName:"p"},"crawler.addRequests()")," method which allows you to skip this initialization code, and it also supports adding a large number of requests without blocking.")),(0,i.kt)("h3",{id:"building-a-cheeriocrawler"},"Building a CheerioCrawler"),(0,i.kt)("p",null,"Crawlee comes with three main crawler classes: ",(0,i.kt)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", ",(0,i.kt)(o.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," and ",(0,i.kt)(o.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),". You can read their short descriptions in the ",(0,i.kt)("a",{parentName:"p",href:"../quick-start",target:null,rel:null},"Quick start")," lesson."),(0,i.kt)("p",null,"Unless you have a good reason to start with a different one, you should try building a ",(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," first. It is an HTTP crawler with HTTP2 support, anti-blocking features and integrated HTML parser - ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio"),". It's fast, simple, cheap to run and does not require complicated dependencies. The only downside is that it won't work out of the box for websites which require JavaScript rendering. But you might not need JavaScript rendering at all, because many modern websites use server-side rendering."),(0,i.kt)("p",null,"Let's continue with the earlier ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue")," example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/main.mjs"',title:'"src/main.mjs"'},"// Add import of CheerioCrawler\nimport { RequestQueue, CheerioCrawler } from 'crawlee';\n\nconst requestQueue = await RequestQueue.open();\nawait requestQueue.addRequest({ url: 'https://crawlee.dev' });\n\n// Create the crawler and add the queue with our URL\n// and a request handler to process the page.\nconst crawler = new CheerioCrawler({\n    requestQueue,\n    // The `$` argument is the Cheerio object\n    // which contains parsed HTML of the website.\n    async requestHandler({ $, request }) {\n        // Extract <title> text with Cheerio.\n        // See Cheerio documentation for API docs.\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n    }\n})\n\n// Start the crawler and wait for it to finish\nawait crawler.run();\n")),(0,i.kt)("p",null,"When you run the example, you will see the title of ",(0,i.kt)("a",{parentName:"p",href:"https://crawlee.dev",target:null,rel:null},"https://crawlee.dev")," printed to the log. What really happens is that CheerioCrawler first makes an HTTP request to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://crawlee.dev"),", then parses the received HTML with Cheerio and makes it available as the ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," argument of the ",(0,i.kt)("inlineCode",{parentName:"p"},"requestHandler"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},'The title of "https://crawlee.dev" is: Crawlee \xb7 The scalable web crawling, scraping and automation library for JavaScript/Node.js | Crawlee.\n')),(0,i.kt)("h3",{id:"add-requests-faster"},"Add requests faster"),(0,i.kt)("p",null,"Earlier we mentioned that you'll learn how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"crawler.addRequests()")," method to skip the request queue initialization. It's simple. Every crawler has an implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue")," instance, and you can add requests to it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"crawler.addRequests()")," method. In fact, you can go even further and just use the first parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"crawler.run()"),"!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/main.mjs"',title:'"src/main.mjs"'},"// You don't need to import RequestQueue anymore\nimport { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ $, request }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n    }\n})\n\n// Start the crawler with the provided URLs\nawait crawler.run(['https://crawlee.dev']);\n")),(0,i.kt)("p",null,"When you run this code, you'll see exactly the same output as with the earlier, longer example. The ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue")," is still there, it's just managed by the crawler automatically."),(0,i.kt)("h2",{id:"next-lesson"},"Next lesson"),(0,i.kt)("p",null,"In the next lesson you'll learn about crawling links. That means finding new URLs on the pages you crawl and adding them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue")," for the crawler to visit."))}m.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.1.0","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"^3.1.0","@crawlee/browser":"^3.1.0","@crawlee/cheerio":"^3.1.0","@crawlee/cli":"^3.1.0","@crawlee/core":"^3.1.0","@crawlee/http":"^3.1.0","@crawlee/jsdom":"^3.1.0","@crawlee/playwright":"^3.1.0","@crawlee/puppeteer":"^3.1.0","@crawlee/utils":"^3.1.0","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":"<= 18.0"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);
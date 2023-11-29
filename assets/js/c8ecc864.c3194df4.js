/*! For license information please see c8ecc864.c3194df4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[620690],{476568:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(785893),i=s(511151);const o={title:"How to design for Backstage (even if you\u2019re not a designer)",author:"Kat Zhou, Spotify",authorURL:"http://twitter.com/katherinemzhou"},a=void 0,r={permalink:"/blog/2020/09/30/backstage-design-system",source:"@site/blog/2020-09-30-backstage-design-system.mdx",title:"How to design for Backstage (even if you\u2019re not a designer)",description:"img",date:"2020-09-30T00:00:00.000Z",formattedDate:"September 30, 2020",tags:[],readingTime:5.84,hasTruncateMarker:!0,authors:[{name:"Kat Zhou, Spotify",url:"http://twitter.com/katherinemzhou"}],frontMatter:{title:"How to design for Backstage (even if you\u2019re not a designer)",author:"Kat Zhou, Spotify",authorURL:"http://twitter.com/katherinemzhou"},unlisted:!1,prevItem:{title:"New Cost Insights plugin: The engineer\u2019s solution to taming cloud costs",permalink:"/blog/2020/10/22/cost-insights-plugin"},nextItem:{title:"The Plugin Marketplace is open",permalink:"/blog/2020/09/30/plugin-marketplace"}},l={authorsImageUrls:[void 0]},d=[{value:"Not just the way it looks",id:"not-just-the-way-it-looks",level:2},{value:"Anatomy of a plugin",id:"anatomy-of-a-plugin",level:2},{value:"Tools and resources",id:"tools-and-resources",level:2},{value:"Figma Community",id:"figma-community",level:3},{value:"Storybook",id:"storybook",level:3},{value:"Guidelines",id:"guidelines",level:3},{value:"GitHub",id:"github",level:3},{value:"Discord",id:"discord",level:3},{value:"What&#39;s next for Backstage design",id:"whats-next-for-backstage-design",level:2},{value:"Get involved",id:"get-involved",level:2}];function c(e){const t=Object.assign({p:"p",img:"img",a:"a",h2:"h2",em:"em",ol:"ol",li:"li",strong:"strong",h3:"h3",ul:"ul"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:s(14651).Z+"",width:"2988",height:"1264"})}),"\n",(0,n.jsxs)(t.p,{children:["We are excited to launch the Backstage Design System, which includes a ",(0,n.jsx)(t.a,{href:"https://www.figma.com/community/file/850673348101741100",children:"Figma UI kit"}),", a rich set of ",(0,n.jsx)(t.a,{href:"http://backstage.io/storybook",children:"reusable code components"})," on Storybook, and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/dls/design",children:"Guidelines"})," for designers and developers as they build plugins for Backstage."]}),"\n",(0,n.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,n.jsx)(t.h2,{id:"not-just-the-way-it-looks",children:"Not just the way it looks"}),"\n",(0,n.jsx)(t.p,{children:"We see great design as one of the secret weapons of Backstage. Design should never be an afterthought \u2014 we believe an elegant, cohesive UX is vital to what makes Backstage such a productive, end-to-end development environment."}),"\n",(0,n.jsxs)(t.p,{children:["Backstage keeps engineers from getting lost inside the complexity of your infrastructure by bringing order to your software ecosystem (through the ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog/2020/06/22/backstage-service-catalog-alpha",children:"service catalog"}),") and providing an abstraction layer on top of it. How that abstraction layer works is essential to how Backstage works. So we\u2019ve spent time figuring out how to make great design in Backstage easier to achieve for both designers and non-designers alike."]}),"\n",(0,n.jsx)(t.p,{children:"Since making Backstage open source, we\u2019ve been able to host design studios and user interviews with teams outside Spotify to get feedback and collaborate on a design system, together. (And we\u2019re always keen on collaborating with more organizations.)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"img",src:s(562677).Z+"",width:"2798",height:"1680"}),"\n",(0,n.jsx)(t.em,{children:"Screenshot of our design studio for Backstage Search, which included stakeholders inside and outside of Spotify."})]}),"\n",(0,n.jsx)(t.p,{children:"As Backstage has gained traction, we\u2019ve seen the importance of creating a scalable and coherent design system. It\u2019s through the shared guidelines of our design system that we are able to maintain a unified ecosystem of plugins for our users, globally. Let\u2019s get started by taking a closer look at the different design components of a plugin."}),"\n",(0,n.jsx)(t.h2,{id:"anatomy-of-a-plugin",children:"Anatomy of a plugin"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://backstage.io/img/cards-plugins.png",alt:""})}),"\n",(0,n.jsx)(t.p,{children:"Plugins are what provide the feature functionality in Backstage, allowing you to customize it to fit your infrastructure. They are integrated into Backstage's frontend, so that no matter what tool or service is being accessed, users are guaranteed a seamless experience."}),"\n",(0,n.jsxs)(t.p,{children:["As you begin to ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/plugins/",children:"build your own plugins"}),", we encourage you to explore the ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"open source plugins"})," we have available in Backstage, as reference. The anatomy of a plugin is simple. In the example below, we\u2019ve highlighted a few of the standard components you should consider when designing your plugin."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:s(617890).Z+"",width:"1969",height:"1400"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Tabs."})," Want to include multiple pages in your plugin? Use our tab component so users can easily navigate through your plugin."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Title."})," Plugin pages should always have a title. Subheads are optional. Typically, the \u2018star\u2019 icon is included in the overview tab, which allows the user to favorite the plugin, adding it to the side navigation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Cards."})," Use the card components to display different kinds of content and functionality. You can follow our 12-column, responsive grid system to arrange the cards."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Support."})," There should always be a support button (tertiary style, with icon). There can also be a primary action button as well as a secondary one."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Header."})," Use the Backstage header to allow for users to easily understand what they\u2019re looking at. You can include an optional subhead as well as other information. The color varies depending on the type of plugin you\u2019ve built (stand-alone tool, service, app, website, etc.)."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Now that we\u2019ve familiarized ourselves with the basic parts of a plugin, let\u2019s take a look at some of the tools and resources that make designing plugins even easier."}),"\n",(0,n.jsx)(t.h2,{id:"tools-and-resources",children:"Tools and resources"}),"\n",(0,n.jsxs)(t.p,{children:["The quickest way to start is by duplicating our ",(0,n.jsx)(t.a,{href:"https://www.figma.com/community/file/850673348101741100",children:"Figma UI kit"}),", then clicking on the Create a Plugin page on the left-hand side to grab some templates. Feel free to experiment and play around! Figma is a fantastic, multiplayer tool that allows for designers and developers to co-create components and share specs with ease. We\u2019re excited to see what you design and develop."]}),"\n",(0,n.jsx)(t.p,{children:"As you\u2019re designing and building your plugins, make sure to take advantage of these helpful resources."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"img",src:s(153325).Z+"",width:"1600",height:"971"}),"\n",(0,n.jsx)(t.img,{alt:"img",src:s(493882).Z+"",width:"1600",height:"1039"})]}),"\n",(0,n.jsx)(t.h3,{id:"figma-community",children:(0,n.jsx)(t.a,{href:"https://www.figma.com/@backstage",children:"Figma Community"})}),"\n",(0,n.jsxs)(t.p,{children:["We are thrilled to be using ",(0,n.jsx)(t.a,{href:"https://www.figma.com/@backstage",children:"Figma Community"})," to share our design assets. You can duplicate our UI kit and design your own plugin for Backstage. Figma Community is currently in beta, so this is a neat opportunity to be testing out a new way of working. At the moment, it doesn\u2019t support auto-updating of duplicated files, so we\u2019ll be announcing new versions of our UI kit on Discord in the #design channel."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:s(639810).Z+"",width:"1600",height:"968"})}),"\n",(0,n.jsx)(t.h3,{id:"storybook",children:(0,n.jsx)(t.a,{href:"https://backstage.io/storybook/",children:"Storybook"})}),"\n",(0,n.jsxs)(t.p,{children:["You can view (and grab) our ",(0,n.jsx)(t.a,{href:"https://backstage.io/storybook/",children:"reusable components on Storybook"}),". If you\u2019d like to help build up our design system, you can also help us add components that we\u2019ve designed to Storybook as well. We post newly designed components and patterns to GitHub as issues, where contributors can pick them up and add them to our Storybook so they\u2019re available for the rest of the Backstage community."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:s(29750).Z+"",width:"512",height:"310"})}),"\n",(0,n.jsx)(t.h3,{id:"guidelines",children:(0,n.jsx)(t.a,{href:"https://backstage.io/docs/dls/design",children:"Guidelines"})}),"\n",(0,n.jsxs)(t.p,{children:["To keep up with our latest design guidelines, go to ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/dls/design",children:"Designing for Backstage"}),". You\u2019ll find more how-to\u2019s and you can also learn more about our design philosophy and practices there. Down the line, we plan on including more in-depth component rules in this section (i.e., dos/don\u2019ts, use cases, etc.)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:s(764581).Z+"",width:"1541",height:"1600"})}),"\n",(0,n.jsx)(t.h3,{id:"github",children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub"})}),"\n",(0,n.jsxs)(t.p,{children:["Join in on the action ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"at backstage/backstage on GitHub"})," by submitting issues and opening pull requests for all things related to components and patterns in Backstage."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:s(465664).Z+"",width:"1600",height:"1204"})}),"\n",(0,n.jsx)(t.h3,{id:"discord",children:(0,n.jsx)(t.a,{href:"https://discord.com/invite/MUpMjP2",children:"Discord"})}),"\n",(0,n.jsxs)(t.p,{children:["All design questions should be directed to the ",(0,n.jsx)(t.a,{href:"https://discord.com/channels/687207715902193673/696709358544879716",children:"#design"})," channel in ",(0,n.jsx)(t.a,{href:"https://discord.com/invite/MUpMjP2",children:"Discord"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"whats-next-for-backstage-design",children:"What's next for Backstage design"}),"\n",(0,n.jsx)(t.p,{children:"There are a lot of exciting things that we\u2019re envisioning for Backstage and open source design at Spotify. These include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Expanding our Backstage Design System by building on the UI kit and component library in Figma and Storybook"}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Collaborating with more of our amazing contributors to ensure our Backstage Design System works for everyone"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Featuring rad plugins that folks have created, using our design system, in our Figma Community space"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Building up our Guidelines by continuing to creating robust design documentation"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Ensuring that we maintain accessible practices throughout our experience"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img",src:s(293355).Z+"",width:"2250",height:"1406"})}),"\n",(0,n.jsx)(t.h2,{id:"get-involved",children:"Get involved"}),"\n",(0,n.jsx)(t.p,{children:"Designing in the open needs to be democratic and participatory, which is why we invite you to join in on the fun! There are a couple things you can do to get involved, such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Build with us!"})," Are there components/plugins that you\u2019d like to see in Backstage? Feel free to create an example/prototype of what you\u2019re envisioning and create a UX component issue in our GitHub repo."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Chat with us!"})," If you have questions, ideas, or puppy GIFs, feel free to reach out to us on Discord in the #design channel."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Share with us!"})," One of our priorities is making Backstage more accessible, and we need your help. If you\u2019ve got A11Y insights and ideas on how we can improve our product, please let us know!"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Work with us!"})," We are hiring for product designers to work on Backstage. We strongly stand for breaking traditional pipelines and elevating our caliber by hiring the best folks who are underrepresented minorities in tech today. Keen on joining? Know someone who has a knack for open source design and design systems? Send a direct message to @katz on Discord!"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},675251:(e,t,s)=>{var n=s(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,o={},d=null,c=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:c,props:o,_owner:r.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},785893:(e,t,s)=>{e.exports=s(675251)},562677:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Backstage-mural-DS-f05dd5944c530a7327c626eea17dea01.png"},14651:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/backstage-DS-header-0a380a7bfd37e867b75d7845588f5977.png"},465664:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/backstage-discord-DS-cc541f0b9bb8342ae41625738b99717d.png"},153325:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/backstage-figma1-DS-f7d3733c0be5693c9db17275ee589f68.png"},493882:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/backstage-figma2-ds-c9f2d26f1adf9e1d7dbb13988376da8d.png"},764581:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/backstage-github-ds-859e23eb3cdaf25b5d0db22f77fc2935.png"},617890:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/backstage-guide-DS-11187a2f0a424754cd14a4083d63bb26.png"},29750:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/backstage-guidelines-ds-1629be8867103bf6b17b5ef60ef26c21.png"},639810:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/backstage-storybook-ds-7ba63281f598a9560eb9c24e59d9f81e.png"},293355:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/backstage-world-DS-c2c93201cb3f2ad9322108b5e882a6d9.png"},511151:(e,t,s)=>{s.d(t,{Zo:()=>r,ah:()=>o});var n=s(667294);const i=n.createContext({});function o(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||a:o(e),n.createElement(i.Provider,{value:r},t)}}}]);
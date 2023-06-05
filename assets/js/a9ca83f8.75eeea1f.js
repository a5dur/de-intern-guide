/*! For license information please see a9ca83f8.75eeea1f.js.LICENSE.txt */
"use strict";(self.webpackChunkde_intern_tutorial=self.webpackChunkde_intern_tutorial||[]).push([[329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),o=n(640);const i={sidebar_position:2},l="\ud83d\udcbb Ubuntu VM Setup",u={unversionedId:"onboarding/ubuntu-vm-setup",id:"onboarding/ubuntu-vm-setup",title:"\ud83d\udcbb Ubuntu VM Setup",description:"In this section we'll go over how to install VirtualBox and run Ubuntu 22.04.2 LTS on a virtual machine.",source:"@site/docs/onboarding/ubuntu-vm-setup.mdx",sourceDirName:"onboarding",slug:"/onboarding/ubuntu-vm-setup",permalink:"/de-intern-guide/onboarding/ubuntu-vm-setup",draft:!1,editUrl:"https://github.com/dathere/de-intern-guide/tree/main/packages/create-docusaurus/templates/shared/docs/onboarding/ubuntu-vm-setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guideSidebar",previous:{title:"\ud83d\uddfa Setup Overview",permalink:"/de-intern-guide/onboarding/setup-overview"},next:{title:"\u26a1 qsv Setup",permalink:"/de-intern-guide/onboarding/qsv-setup"}},c={},s=[{value:"\ud83d\udcfa Video Tutorial",id:"-video-tutorial",level:2},{value:"Video Resources",id:"video-resources",level:3},{value:"\ud83d\udcdd Written Tutorial",id:"-written-tutorial",level:2},{value:"\ud83d\udce5 Download VirtualBox",id:"-download-virtualbox",level:3},{value:"\ud83d\udee0 Install VirtualBox",id:"-install-virtualbox",level:3},{value:"\ud83d\udce5 Download Ubuntu 22.04.2 LTS",id:"-download-ubuntu-22042-lts",level:3},{value:"\ud83d\udda5 Setup a Virtual Machine (VM)",id:"-setup-a-virtual-machine-vm",level:3},{value:"\u2728 Bonus Tips",id:"-bonus-tips",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-ubuntu-vm-setup"},"\ud83d\udcbb Ubuntu VM Setup"),(0,a.kt)("p",null,"In this section we'll go over how to install ",(0,a.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"VirtualBox")," and run ",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/"},"Ubuntu")," 22.04.2 LTS on a virtual machine."),(0,a.kt)("h2",{id:"-video-tutorial"},"\ud83d\udcfa Video Tutorial"),(0,a.kt)(o.Z,{id:"",mdxType:"LiteYouTubeEmbed"}),(0,a.kt)("h3",{id:"video-resources"},"Video Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox Downloads Page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/desktop"},"Ubuntu Desktop Download Page"))),(0,a.kt)("h2",{id:"-written-tutorial"},"\ud83d\udcdd Written Tutorial"),(0,a.kt)("h3",{id:"-download-virtualbox"},"\ud83d\udce5 Download VirtualBox"),(0,a.kt)("h3",{id:"-install-virtualbox"},"\ud83d\udee0 Install VirtualBox"),(0,a.kt)("h3",{id:"-download-ubuntu-22042-lts"},"\ud83d\udce5 Download Ubuntu 22.04.2 LTS"),(0,a.kt)("h3",{id:"-setup-a-virtual-machine-vm"},"\ud83d\udda5 Setup a Virtual Machine (VM)"),(0,a.kt)("h3",{id:"-bonus-tips"},"\u2728 Bonus Tips"))}m.isMDXComponent=!0},640:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function o(e){var t=r.useState(!1),n=t[0],o=t[1],i=r.useState(!1),l=i[0],u=i[1],c=encodeURIComponent(e.id),s="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,d=e.poster||"hqdefault",m="&"+e.params||0,b=e.muted?"&mute=1":"",v=e.announce||"Watch",f=e.webp?"webp":"jpg",h=e.webp?"vi_webp":"vi",g=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+h+"/"+s+"/"+d+"."+f:"https://i.ytimg.com/"+h+"/"+c+"/"+d+"."+f),w=e.noCookie;w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var y=e.playlist?w+"/embed/videoseries?autoplay=1"+b+"&list="+c+m:w+"/embed/"+c+"?autoplay=1&state=1"+b+m,k=e.activatedClass||"lyt-activated",O=e.adNetwork||!1,x=e.aspectHeight||9,E=e.aspectWidth||16,T=e.iframeClass||"",j=e.playerClass||"lty-playbtn",S=e.wrapperClass||"yt-lite",P=e.onIframeAdded||function(){},V=e.rel?"prefetch":"preload";return r.useEffect((function(){l&&P()}),[l]),r.createElement(r.Fragment,null,r.createElement("link",{rel:V,href:g,as:"image"}),r.createElement(r.Fragment,null,n&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:w}),r.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),O&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),r.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),r.createElement("article",{onPointerOver:function(){n||o(!0)},onClick:function(){l||u(!0)},className:S+" "+(l?k:""),"data-title":p,style:a({backgroundImage:"url("+g+")"},{"--aspect-ratio":x/E*100+"%"})},r.createElement("button",{type:"button",className:j,"aria-label":v+" "+p}),l&&r.createElement("iframe",{className:T,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:y})))}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9593)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,o=r(2648).Z,l=r(1598).Z,i=r(7273).Z,a=l(r(7294)),s=o(r(3121)),u=r(2675),c=r(139),d=r(8730);r(7238);var f=o(r(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/PUBLIC-SAVETHEDODO-FAKE-ORG/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&i(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,l=!1;o.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:l,qualityInt:s,className:u,imgStyle:c,blurStyle:d,isLazy:f,fill:p,placeholder:h,loading:g,srcString:v,config:b,unoptimized:y,loader:x,onLoadRef:w,onLoadingCompleteRef:j,setBlurComplete:_,setShowAltText:E,onLoad:C,onError:S}=e,k=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},k,r,{width:l,height:o,decoding:"async","data-nimg":p?"fill":"1",className:u,loading:g,style:n({},c,d),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,v,h,w,j,_,y))},[v,h,w,j,_,S,y,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,w,j,_,y)},onError:e=>{E(!0),"blur"===h&&_(!0),S&&S(e)}})))}),b=a.forwardRef((e,t)=>{let r,o;var l,{src:m,sizes:b,unoptimized:y=!1,priority:x=!1,loading:w,className:j,quality:_,width:E,height:C,fill:S,style:k,onLoad:O,onLoadingComplete:P,placeholder:M="empty",blurDataURL:N,layout:R,objectFit:I,objectPosition:z,lazyBoundary:L,lazyRoot:D}=e,T=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=a.useContext(d.ImageConfigContext),B=a.useMemo(()=>{let e=p||A||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[A]),U=T,F=U.loader||f.default;delete U.loader;let W="__next_img_default"in F;if(W){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:r}=t,n=i(t,["config"]);return e(n)}}if(R){"fill"===R&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(k=n({},k,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!b&&(b=t)}let G="",Z=g(E),q=g(C);if("object"==typeof(l=m)&&(h(l)||void 0!==l.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,N=N||e.blurDataURL,G=e.src,!S){if(Z||q){if(Z&&!q){let t=Z/e.width;q=Math.round(e.height*t)}else if(!Z&&q){let t=q/e.height;Z=Math.round(e.width*t)}}else Z=e.width,q=e.height}}let H=!x&&("lazy"===w||void 0===w);((m="string"==typeof m?m:G).startsWith("data:")||m.startsWith("blob:"))&&(y=!0,H=!1),B.unoptimized&&(y=!0),W&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(y=!0);let[K,J]=a.useState(!1),[V,X]=a.useState(!1),$=g(_),Q=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:z}:{},V?{}:{color:"transparent"},k),Y="blur"===M&&N&&!K?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:Z,heightInt:q,blurWidth:r,blurHeight:o,blurDataURL:N}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:l,sizes:i,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,i),c=s.length-1;return{sizes:i||"w"!==u?i:"100vw",srcSet:s.map((e,n)=>"".concat(a({config:t,src:r,quality:l,width:e})," ").concat("w"===u?e:n+1).concat(u)).join(", "),src:a({config:t,src:r,quality:l,width:s[c]})}}({config:B,src:m,unoptimized:y,width:Z,quality:$,sizes:b,loader:F}),et=m,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:U.crossOrigin},en=a.useRef(O);a.useEffect(()=>{en.current=O},[O]);let eo=a.useRef(P);a.useEffect(()=>{eo.current=P},[P]);let el=n({isLazy:H,imgAttributes:ee,heightInt:q,widthInt:Z,qualityInt:$,className:j,imgStyle:Q,blurStyle:Y,loading:w,config:B,fill:S,unoptimized:y,placeholder:M,loader:F,srcString:et,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:J,setShowAltText:X},U);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},el,{ref:t})),x?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,l=n(r(7294)),i=r(1003),a=r(7795),s=r(4465),u=r(2692),c=r(8245),d=r(9246),f=r(227),p=r(3468);let h=new Set;function g(e,t,r,n){if(i.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:v,prefetch:b,passHref:y,replace:x,shallow:w,scroll:j,locale:_,onClick:E,onMouseEnter:C,onTouchStart:S,legacyBehavior:k=!1}=e,O=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,k&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let P=!1!==b,M=l.default.useContext(u.RouterContext),N=l.default.useContext(c.AppRouterContext),R=null!=M?M:N,I=!M,{href:z,as:L}=l.default.useMemo(()=>{if(!M){let e=m(a);return{href:e,as:h?m(h):e}}let[e,t]=i.resolveHref(M,a,!0);return{href:e,as:h?i.resolveHref(M,h):t||e}},[M,a,h]),D=l.default.useRef(z),T=l.default.useRef(L);k&&(n=l.default.Children.only(r));let A=k?n&&"object"==typeof n&&n.ref:t,[B,U,F]=d.useIntersection({rootMargin:"200px"}),W=l.default.useCallback(e=>{(T.current!==L||D.current!==z)&&(F(),T.current=L,D.current=z),B(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[L,A,z,F,B]);l.default.useEffect(()=>{R&&U&&P&&g(R,z,L,{locale:_})},[L,z,U,_,P,null==M?void 0:M.locale,R]);let G={ref:W,onClick(e){k||"function"!=typeof E||E(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,n,o,a,s,u,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:s}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!d})};c?l.default.startTransition(h):h()}(e,R,z,L,x,w,j,_,I,P)},onMouseEnter(e){k||"function"!=typeof C||C(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(P||!I)&&g(R,z,L,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof S||S(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(P||!I)&&g(R,z,L,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==_?_:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&f.getDomainLocale(L,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);G.href=t||p.addBasePath(s.addLocale(L,e,null==M?void 0:M.defaultLocale))}return k?l.default.cloneElement(n,G):l.default.createElement("a",Object.assign({},O,G),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!l,[c,d]=n.useState(!1),[f,p]=n.useState(null);n.useEffect(()=>{if(l){if(!u&&!c&&f&&f.tagName){let e=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),i.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!c){let e=o.requestIdleCallback(()=>d(!0));return()=>o.cancelIdleCallback(e)}},[f,u,r,t,c]);let h=n.useCallback(()=>{d(!1)},[]);return[p,c,h]};var n=r(7294),o=r(4686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:l}=e,i=n||t,a=o||r,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9593:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),o=r(7294),l=r(5675),i=r.n(l),a=r(1664),s=r.n(a);function u(){return(0,n.jsxs)(s(),{href:"./",children:[" ",(0,n.jsxs)("div",{className:"flex flex-row items-center",children:[(0,n.jsx)(i(),{className:"pt-0",src:"./img/Dossier_Dodo_Character.png",width:"40",height:"40",alt:"Picture of the author"}),(0,n.jsx)("h1",{className:"text-light font-bold",children:"Save The Dodo"})]})]})}let c=[{title:"Discover",url:"/some"},{title:"Get Involve",url:"/some"},{title:"About Us",url:"/about"}];function d(){let[e,t]=(0,o.useState)(!1),r=c.map(e=>(0,n.jsx)("li",{className:"text-light",children:(0,n.jsx)(s(),{href:"."+e.url,children:e.title})},e.title+e.url));return(0,n.jsxs)("nav",{className:"p-3 bg-dark justify-between items-center ",children:[(0,n.jsxs)("div",{className:"flex flex-row justify-between items-center ",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)(u,{})}),(0,n.jsx)("ul",{className:"hidden md:flex flex-row space-x-8",children:r}),(0,n.jsx)("a",{className:"hidden p-3 px-6 pt-2 text-light rounded-full baseline md:block bg-primary hover:bg-light hover:text-primary",href:"",children:"Join!"}),(0,n.jsx)("button",{id:"menu-btn",onClick:()=>t(!e),className:" p-3 px-6 pt-2 rounded-full baseline bg-transparent text-light focus:outline-none md:hidden",children:e?"x":(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"})})})]}),(0,n.jsxs)("ul",{className:"".concat(e?"block":"hidden"," md:hidden flex flex-col items-center space-y-1 w-auto text-primary bg-light rounded-lg m-1 p-2"),children:[r,(0,n.jsx)("li",{className:"p-2",children:(0,n.jsx)(s(),{className:" my-2 p-3 px-6 pt-2 text-light rounded-lg baseline w-full bg-primary hover:bg-light hover:text-primary text-center",href:"/join",children:"Join!"})})]})]})}function f(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{}),(0,n.jsx)("main",{children:t})]})}function p(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(f,{children:(0,n.jsx)(t,{...r})})}r(7599)},7599:function(){},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);
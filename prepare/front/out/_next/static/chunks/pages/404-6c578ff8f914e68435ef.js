_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"97Is":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("uNx/")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),i=t("elyg"),a=t("nOHt"),l=t("vNVm"),s={};function u(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.asPath||"/",f=c.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var j=c.Children.only(v),x=j&&"object"===typeof j&&j.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),O=r(w,2),_=O[0],m=O[1],E=c.default.useCallback((function(e){_(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,_]);(0,c.useEffect)((function(){var e=m&&n&&(0,i.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,m,g,n,t]);var I={ref:E,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,a,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:l,scroll:a}))}(e,t,d,p,h,b,y,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var L="undefined"!==typeof g?g:t&&t.locale,k=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);I.href=k||(0,i.addBasePath)((0,i.addLocale)(p,L,t&&t.defaultLocale))}return c.default.cloneElement(j,I)};n.default=f},"uNx/":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var r=t("nKUr"),o=(t("q1tI"),t("YFqc")),c=t.n(o);function i(){return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:Object(r.jsxs)("div",{style:{textAlign:"center"},children:[Object(r.jsx)("div",{children:Object(r.jsxs)("h1",{children:["404 Error ",Object(r.jsx)("span",{style:{fontWeight:"400"},children:"Page Not Found"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Sorry we couldn't find this page."}),Object(r.jsx)("p",{children:"But don't worry, you can find plenty of other things on my blog \ud83d\udc40"}),Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("div",{style:{display:"inline-block",marginTop:"16px",padding:"8px 16px",backgroundColor:"#e96900",borderRadius:"8px",cursor:"pointer",boxSizing:"border-box"},children:Object(r.jsx)("a",{style:{color:"#fff"},children:"Back to blog"})})})]})]})})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=(0,o.useRef)(),s=(0,o.useState)(!1),u=r(s,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,i=r.elements;return i.set(e,n),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),c=t("0G5g"),i="undefined"!==typeof IntersectionObserver;var a=new Map}},[["97Is",0,2,1]]]);
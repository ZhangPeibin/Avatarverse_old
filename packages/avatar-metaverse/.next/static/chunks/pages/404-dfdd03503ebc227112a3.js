(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6127:function(e,t,n){"use strict";var a=n(8066);t.default=void 0;var r,l=(r=n(2784))&&r.__esModule?r:{default:r},o=n(5457),s=n(8794),c=n(9727);var f={};function i(e,t,n,a){if(e&&o.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;f[t+"%"+n+(r?"%"+r:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),u=l.default.useMemo((function(){var t=o.resolveHref(r,e.href,!0),n=a(t,2),l=n[0],s=n[1];return{href:l,as:e.as?o.resolveHref(r,e.as):s||l}}),[r,e.href,e.as]),d=u.href,p=u.as,h=e.children,v=e.replace,m=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var _=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,N=c.useIntersection({rootMargin:"200px"}),j=a(N,2),L=j[0],w=j[1],E=l.default.useCallback((function(e){L(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,L]);l.default.useEffect((function(){var e=w&&n&&o.isLocalURL(d),t="undefined"!==typeof y?y:r&&r.locale,a=f[d+"%"+p+(t?"%"+t:"")];e&&!a&&i(r,d,p,{locale:t})}),[p,d,w,y,n,r]);var g={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,l,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&a.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](n,a,{shallow:l,locale:c,scroll:s}))}(e,r,d,p,v,m,x,y)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i(r,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof y?y:r&&r.locale,b=r&&r.isLocaleDomain&&o.getDomainLocale(p,k,r&&r.locales,r&&r.domainLocales);g.href=b||o.addBasePath(o.addLocale(p,k,r&&r.defaultLocale))}return l.default.cloneElement(t,g)};t.default=u},9174:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return f}});var a=n(2592),r=n(5456),l=n(6577),o=n(980),s=n(2322),c=!0;function f(){var e=(0,a.$G)("common").t;return(0,s.jsxs)("div",{className:"h-screen",children:[(0,s.jsxs)("header",{className:"relative",children:[(0,s.jsxs)("div",{className:"flex py-5 px-5 sm:px-16 md:px-32",children:[(0,s.jsx)(l.default,{src:"/logo.gif",alt:"Notion Avatar Logo",width:50,height:50}),(0,s.jsxs)("span",{className:"text-lg",children:["NFT",(0,s.jsx)("br",{}),"Avatar Metaverse"]})]}),(0,s.jsx)(o.default,{className:"absolute top-0 right-0 w-24 sm:w-28 md:w-36"})]}),(0,s.jsxs)("main",{className:"flex flex-col justify-center h-2/3 items-center",children:[(0,s.jsx)("h1",{className:"text-2xl sm:text-3xl md:text-4xl",children:e("404Title")}),(0,s.jsx)(r.default,{href:"/",children:(0,s.jsxs)("a",{className:"mt-4 underline",children:["\u2190 ",e("404Redirect")]})})]})]})}},5953:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(9174)}])},5456:function(e,t,n){e.exports=n(6127)}},function(e){e.O(0,[577,980,774,888,179],(function(){return t=5953,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
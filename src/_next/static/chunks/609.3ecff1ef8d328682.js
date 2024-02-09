(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{43609:function(e,t,r){"use strict";var n=r(23322),o=r(16089),a=r(55667),u=r(81961),i=r(67731);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});var l=r(38754),c=l._(r(67294)),d=l._(r(2414)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var p={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},y=function(e){a(l,e);var t,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=i(l);if(t){var n=i(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return u(this,e)});function l(){return n(this,l),r.apply(this,arguments)}return o(l,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||f[t]||"An unexpected error has occurred";return c.default.createElement("div",{style:p.error},c.default.createElement(d.default,null,c.default.createElement("title",null,t?t+": "+n:"Application error: a client-side exception has occurred")),c.default.createElement("div",{style:p.desc},c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?c.default.createElement("h1",{className:"next-error-h1",style:p.h1},t):null,c.default.createElement("div",{style:p.wrap},c.default.createElement("h2",{style:p.h2},this.props.title||t?n:c.default.createElement(c.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),l}(c.default.Component);y.displayName="ErrorPage",y.getInitialProps=s,y.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},42007:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(38754)._(r(67294)).default.createContext({})},38134:function(e,t){"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2414:function(e,t,r){"use strict";var n=r(20968);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return f},default:function(){return h}});var a=r(38754),u=r(61757)._(r(67294)),i=a._(r(83978)),l=r(42007),c=r(55176),d=r(38134);function f(e){void 0===e&&(e=!1);var t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(52474);var p=["name","httpEquiv","charSet","itemProp"];function y(e,t){var r,a,i,l,c=t.inAmpMode;return e.reduce(s,[]).reverse().concat(f(c).reverse()).filter((r=new Set,a=new Set,i=new Set,l={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var d=p[u];if(e.props.hasOwnProperty(d)){if("charSet"===d)i.has(d)?t=!1:i.add(d);else{var f=e.props[d],s=l[d]||new Set;("name"!==d||!n)&&s.has(f)?t=!1:(s.add(f),l[d]=s)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,u.default.cloneElement(e,a)}return u.default.cloneElement(e,{key:r})})}var h=function(e){var t=e.children,r=(0,u.useContext)(l.AmpStateContext),n=(0,u.useContext)(c.HeadManagerContext);return u.default.createElement(i.default,{reduceComponentsToState:y,headManager:n,inAmpMode:(0,d.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},83978:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});var n=r(67294),o=n.useLayoutEffect,a=n.useEffect;function u(e){var t=e.headManager,r=e.reduceComponentsToState;function u(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=u),function(){t&&(t._pendingUpdate=u)}}),a(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},52474:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}}}]);
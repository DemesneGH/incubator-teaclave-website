(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{331:function(t,e,n){},332:function(t,e,n){},340:function(t,e,n){"use strict";n(331)},341:function(t,e,n){"use strict";n(332)},342:function(t,e,n){var i=n(185),r=n(178),o=n(343),a=n(347);t.exports=function(t,e){if(null==t)return{};var n=i(a(t),(function(t){return[t]}));return e=r(e),o(t,n,(function(t,n){return e(t,n[0])}))}},343:function(t,e,n){var i=n(107),r=n(344),o=n(101);t.exports=function(t,e,n){for(var a=-1,s=e.length,c={};++a<s;){var u=e[a],p=i(t,u);n(p,u)&&r(c,o(u,t),p)}return c}},344:function(t,e,n){var i=n(345),r=n(101),o=n(105),a=n(73),s=n(51);t.exports=function(t,e,n,c){if(!a(t))return t;for(var u=-1,p=(e=r(e,t)).length,l=p-1,h=t;null!=h&&++u<p;){var f=s(e[u]),d=n;if("__proto__"===f||"constructor"===f||"prototype"===f)return t;if(u!=l){var g=h[f];void 0===(d=c?c(g,f,h):void 0)&&(d=a(g)?g:o(e[u+1])?[]:{})}i(h,f,d),h=h[f]}return t}},345:function(t,e,n){var i=n(346),r=n(104),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];o.call(t,e)&&r(a,n)&&(void 0!==n||e in t)||i(t,e,n)}},346:function(t,e,n){var i=n(186);t.exports=function(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},347:function(t,e,n){var i=n(179),r=n(348),o=n(350);t.exports=function(t){return i(t,o,r)}},348:function(t,e,n){var i=n(103),r=n(349),o=n(180),a=n(181),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)i(e,o(t)),t=r(t);return e}:a;t.exports=s},349:function(t,e,n){var i=n(184)(Object.getPrototypeOf,Object);t.exports=i},350:function(t,e,n){var i=n(182),r=n(351),o=n(106);t.exports=function(t){return o(t)?i(t,!0):r(t)}},351:function(t,e,n){var i=n(73),r=n(183),o=n(352),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!i(t))return o(t);var e=r(t),n=[];for(var s in t)("constructor"!=s||!e&&a.call(t,s))&&n.push(s);return n}},352:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},363:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(11),n(14),n(16);var i={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(4).then(n.t.bind(null,444,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},r=(n(340),n(29)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(n(341),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,n(187),n(78)),s=n.n(a),c=n(342),u=n.n(c),p={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return u()(this.$props,s.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}};Object(r.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},386:function(t,e,n){},413:function(t,e,n){"use strict";n(386)},445:function(t,e,n){"use strict";n.r(e);n(100);var i=n(367),r=n(364),o=n(362),a=n(366),s=n(190),c=n.n(s),u=n(363),p={name:"Layout",components:{Home:i.a,Page:o.a,Sidebar:a.a,Navbar:r.a},data:function(){return{isSidebarOpen:!1,paginationComponent:null}},computed:{sidebarItems:function(){return[]},pages:function(){return this.$pagination.pages},shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!0},t]}},created:function(){this.paginationComponent=this.getPaginationComponent()},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},getPaginationComponent:function(){return u.a},resolvePostDate:function(t){return c()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},l=(n(413),n(29)),h=Object(l.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("div",{staticClass:"theme-default-content",attrs:{id:"base-list-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("header",[n("h1",{staticClass:"post-title",attrs:{itemprop:"name headline"}},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"publish-date-author"},[t._v(t._s(t.resolvePostDate(t.$frontmatter.date))+" · "+t._s(t.$frontmatter.author))])]),t._v(" "),n("Content",{attrs:{itemprop:"articleBody"}})],1)]),t._v(" "),t._t("bottom"),t._v(" "),n("div",{staticClass:"footer"},[t._v("\n    Apache Teaclave (incubating) is an effort undergoing incubation at The Apache\n    Software Foundation (ASF), sponsored by the Apache Incubator.\n    Incubation is required of all newly accepted projects until a further review\n    indicates that the infrastructure, communications, and decision making process\n    have stabilized in a manner consistent with other successful ASF projects. While\n    incubation status is not necessarily a reflection of the completeness or\n    stability of the code, it does indicate that the project has yet to be fully\n    endorsed by the ASF.\n    Copyright © 2020 The Apache Software Foundation.\n    Licensed under the Apache License, Version 2.0.\n    Apache Teaclave, Apache, the Apache feather, and the Apache Teaclave project logo are either\n    trademarks or registered trademarks of the Apache Software Foundation.\n  ")])],2)],1)}),[],!1,null,null,null);e.default=h.exports}}]);
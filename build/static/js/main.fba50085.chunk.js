(this["webpackJsonpgithub-jobs-api"]=this["webpackJsonpgithub-jobs-api"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.66810c3d.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-sun.20ea2dcb.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-moon.a0697094.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-check.6354efb6.svg"},function(e,t,a){e.exports=a.p+"static/media/close.d9318389.svg"},,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(68)},,,,,,function(e,t,a){var n={"./bg-pattern-detail-footer.svg":42,"./bg-pattern-header.svg":43,"./icon-check.svg":18,"./icon-location.svg":44,"./icon-moon.svg":17,"./icon-search-white.svg":45,"./icon-search.svg":46,"./icon-sun.svg":16,"./logo.svg":15};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=41},function(e,t,a){e.exports=a.p+"static/media/bg-pattern-detail-footer.f5101f61.svg"},function(e,t,a){e.exports=a.p+"static/media/bg-pattern-header.549c5470.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-location.7c42293b.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-search-white.2304decb.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-search.b89fe227.svg"},function(e,t,a){var n={"./bg-pattern-detail-footer.svg":48,"./bg-pattern-header.svg":49,"./close.svg":19,"./icon-filter.svg":50};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=47},function(e,t,a){e.exports=a.p+"static/media/bg-pattern-detail-footer.86300130.svg"},function(e,t,a){e.exports=a.p+"static/media/bg-pattern-header.1360e861.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-filter.3c89a70b.svg"},,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(30),r=a.n(o),l=a(20),s=a.n(l),i=a(13),m=a(23),u=a(31),_=a(3),b=a(8),p=a(1),d=a(15),h=a.n(d),g=a(16),f=a.n(g),E=a(17),v=a.n(E),j=function(){var e=Object(n.useContext)(M),t=e.BASE_URL,o=e.fetchGithubAPI,r=e.lightTheme,l=e.setLightTheme,s=e.setSearchInput,i=e.setLocationInput,m=e.setFullTime,u=e.setSearchURL,_=e.mobileFilter,p=document.body.parentElement;Object(n.useEffect)((function(){localStorage.getItem("theme")?p.setAttribute("data-theme",localStorage.getItem("theme")):(l(!0),localStorage.setItem("theme","light"),p.setAttribute("data-theme","light"))}),[]);return c.a.createElement("div",{className:"header ".concat(_?"blur":"")},c.a.createElement("div",{className:"header__backgrounds"},c.a.createElement("img",{className:"background__desktop",src:a(41)("./bg-pattern-header.svg"),alt:""}),c.a.createElement("img",{className:"background__mobile",src:a(47)("./bg-pattern-header.svg"),alt:""})),c.a.createElement("div",{className:"header__inner"},c.a.createElement(b.b,{to:"/",onClick:function(){return o("".concat(t,".json")),u(""),s(""),i(""),m(!1),void sessionStorage.setItem("search URL","")}},c.a.createElement("img",{className:"header__logo",src:h.a,alt:"DevJobs company logo"})),c.a.createElement("div",{className:"header__toggle"},c.a.createElement("span",null,c.a.createElement("img",{src:f.a,alt:"Sun illustration"})),c.a.createElement("button",{className:"header__toggle__btn ".concat(r?"":"active"),"aria-label":"Set page theme to either light or dark",onClick:function(){r?(localStorage.setItem("theme","dark"),p.setAttribute("data-theme",localStorage.getItem("theme")),l(!1)):(localStorage.setItem("theme","light"),p.setAttribute("data-theme",localStorage.getItem("theme")),l(!0))}},c.a.createElement("span",{className:"slider"})),c.a.createElement("span",null,c.a.createElement("img",{src:v.a,alt:"Moon illustration"})))))},N=a(18),y=a.n(N),w=a(19),O=a.n(w),x=function(){var e=Object(n.useContext)(M),t=e.BASE_URL,a=e.fetchGithubAPI,o=e.searchInput,r=e.setSearchInput,l=e.locationInput,s=e.setLocationInput,i=e.fullTime,m=e.setFullTime,u=e.setSearchURL,_=e.mobileFilter,b=e.setMobileFilter;return c.a.createElement("form",{className:"search__bar ".concat(_?"blur":""),onSubmit:function(e){e.preventDefault();var n=""!==o.trim()?"description=".concat(o).replace(/ /g,"+"):"",c=""!==l.trim()?"location=".concat(l).replace(/ /g,"+"):"",r=i?"full_time=on":"",s="".concat(t,".json?").concat([n,c,r].filter(Boolean).join("&"));n||c||r?(u(s),a(s),localStorage.setItem("search",o.trim()),localStorage.setItem("location",l.trim()),localStorage.setItem("full time",i),sessionStorage.setItem("search URL",s)):(a("".concat(t,".json")),u(""),sessionStorage.setItem("search URL",""))}},c.a.createElement("div",{className:"search__bar__description form__control"},c.a.createElement("input",{placeholder:"Filter by title, expertise...","aria-label":"Enter company, title, or expertise here",onChange:function(e){return r(e.target.value)},value:o}),c.a.createElement("button",{className:"mobile-search-bar-deploy","aria-label":"Button to deploy location & full time options",onClick:function(){return b(!_)},type:"button"},c.a.createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z",fill:"#6E8098",fillRule:"nonzero"})))),c.a.createElement("div",{className:"search__bar--inner ".concat(_?"visible":"")},c.a.createElement("div",{className:"search__bar__location form__control"},c.a.createElement("input",{placeholder:"Filter by location...","aria-label":"Enter desired job location",onChange:function(e){return s(e.target.value)},value:l}),c.a.createElement("img",{src:O.a,onClick:function(){return b(!1)},alt:""})),c.a.createElement("div",{className:"search__bar__full-time form__control"},c.a.createElement("span",{className:"checkbox ".concat(i?"checked":""),onClick:function(){return m(!i)}},c.a.createElement("img",{src:y.a,alt:"Checkmark"})),c.a.createElement("small",{onClick:function(){return m(!i)}},"Full Time")),c.a.createElement("button",{className:"search__inner__btn btn",type:"submit",onClick:function(){return b(!1)}},c.a.createElement("span",null,"Search"))),c.a.createElement("button",{className:"search__bar__btn btn",type:"submit"},c.a.createElement("span",null,"Search")))},S=function(e){var t=e.children,a=Object(n.useContext)(M).mobileFilter;return c.a.createElement("section",{className:"job__board ".concat(a?"blur":"")},t)},I=a(33),k=a.n(I),L=a(34),A=a.n(L)()()(k.a),C=function(e){var t=e.logo,a=e.date,o=e.lengthTerm,r=e.company,l=e.jobTitle,s=e.location,i=e.id,m=["#8d47ff","#235cdf","#daa278","#68ab97","#bb4643","#e7de63"],u=Object(n.useState)(m[Math.floor(Math.random()*m.length)]),p=Object(_.a)(u,1)[0];return c.a.createElement(b.b,{to:"/".concat(i)},c.a.createElement("div",{className:"job__board__thumbnail"},c.a.createElement("div",{className:"thumbnail__image__container"},t&&c.a.createElement("img",{src:t,alt:"".concat(r," company logo")}),!t&&c.a.createElement("div",{className:"no-logo",style:{backgroundColor:p}},"n / a")),c.a.createElement("p",{className:"thumbnail__time-type"},c.a.createElement("span",{className:"thumbnail__time"},a),c.a.createElement("span",{style:{margin:"0 10px"}},"\u2022"),c.a.createElement("span",{className:"thumbnail__type"},o)),c.a.createElement(A,{className:"thumbnail__title",text:l,component:"h3",maxLine:2}),c.a.createElement("p",{className:"thumbnail__company"},r),c.a.createElement(A,{className:"thumbnail__location",text:s,component:"small"})))},U=a(12),R=a.n(U),T=function(){var e=Object(n.useContext)(M),t=e.data.jobs,a=e.BASE_URL,o=e.loading,r=e.resultLength,l=e.searchURL,s=e.fetchGithubAPI,i=e.mobileFilter,m=Object(n.useState)(2),u=Object(_.a)(m,2),b=u[0],p=u[1],d=Object(n.useState)(window.innerHeight),h=Object(_.a)(d,2),g=h[0],f=h[1],E=Object(n.useState)(window.pageYOffset),v=Object(_.a)(E,2),j=v[0],N=v[1];Object(n.useEffect)((function(){p(2)}),[r<50]);return Object(n.useEffect)((function(){function e(){f(window.innerHeight),N(window.pageYOffset)}return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[g,j]),c.a.createElement("div",{className:"home__page"},c.a.createElement(x,null),o&&!l&&!i,o&&l&&!i,t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null,t.map((function(e){return c.a.createElement(C,{key:e.id,id:e.id,logo:e.company_logo,date:R()(new Date(e.created_at)).fromNow(),lengthTerm:e.type,company:e.company,jobTitle:e.title,location:e.location})})),b>2&&!l&&o,b>2&&l&&o),r>=50&&!i&&c.a.createElement("button",{className:"load__more__btn btn",onClick:function(){p(b+1);var e=l?"".concat(l,"&page=").concat(b):"".concat(a,".json?page=").concat(b);s(e),sessionStorage.setItem("search URL",e)}},"Load More")))},F=function(e){var t=e.match,a=Object(n.useContext)(M),o=a.data.jobs,r=a.loading,l=Object(n.useState)(),s=Object(_.a)(l,2),i=s[0],m=s[1];Object(n.useEffect)((function(){o&&m(o.find((function(e){return e.id===t.params.jobID})))}),[o,i]);var u,b=function(e){return e.match(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"/)[1]};return c.a.createElement(c.a.Fragment,null,r,i&&c.a.createElement("div",{className:"job__listing"},c.a.createElement("div",{className:"job__listing__header"},c.a.createElement("div",{className:"header__image__container"},i.company_logo&&c.a.createElement("img",{src:i.company_logo,alt:"".concat(i.company," company logo")})),c.a.createElement("div",{className:"header__textbox"},c.a.createElement("div",{className:"textbox__inner"},c.a.createElement("h1",{className:"header__textbox__heading"},i.company),c.a.createElement("p",{className:"header__textbox__site"},i.company_url)),c.a.createElement("div",{className:"header__textbox__company-redirect ".concat((u=i.company_url,new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi).test(u)?"":"invalid"))},c.a.createElement("a",{className:"btn",target:"_blank",rel:"noopener noreferrer",href:i.company_url},"Company site"),c.a.createElement("small",null,"No company site")))),c.a.createElement("div",{className:"job__listing__body"},c.a.createElement("div",{className:"body__heading"},c.a.createElement("div",{className:"body__heading__inner"},c.a.createElement("p",{className:"body__heading__time-type"},c.a.createElement("span",{className:"body__heading__time"}," ",R()(new Date(i.created_at)).fromNow()),c.a.createElement("span",{style:{margin:"0 10px"}},"\u2022"),c.a.createElement("span",{className:"body__heading__type"},i.type)),c.a.createElement("h2",{className:"body__heading__title"},i.title),c.a.createElement("p",{className:"body__heading__location"},i.location)),c.a.createElement("a",{className:"body__heading__redirect btn",href:b(i.how_to_apply),target:"_blank",rel:"noopener noreferrer"},"Apply Now")),c.a.createElement("div",{className:"body__main",dangerouslySetInnerHTML:{__html:i.description}})),c.a.createElement("div",{className:"job__listing__cta"},c.a.createElement("h3",{className:"cta__heading"},"How to Apply"),c.a.createElement("br",null),c.a.createElement("p",{className:"cta__body",dangerouslySetInnerHTML:{__html:i.how_to_apply}})),c.a.createElement("footer",{className:"job__listing__footer"},c.a.createElement("div",{className:"footer__textbox"},c.a.createElement("h4",{className:"footer__textbox__position"},i.title),c.a.createElement("small",{className:"footer__textbox__company"},i.company)),c.a.createElement("a",{className:"footer__btn btn",href:b(i.how_to_apply),rel:"noopener noreferrer",target:"_blank"},"Apply Now"))))},M=(a(67),Object(n.createContext)()),z=function(){var e=Object(n.useState)({jobs:[]}),t=Object(_.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(),l=Object(_.a)(r,2),d=l[0],h=l[1],g=Object(n.useState)(),f=Object(_.a)(g,2),E=f[0],v=f[1],N=Object(n.useState)(""),y=Object(_.a)(N,2),w=y[0],O=y[1],x=Object(n.useState)(""),S=Object(_.a)(x,2),I=S[0],k=S[1],L=Object(n.useState)(!1),A=Object(_.a)(L,2),C=A[0],U=A[1],R=Object(n.useState)(""),z=Object(_.a)(R,2),D=z[0],Z=z[1],B=Object(n.useState)("light"===localStorage.getItem("theme")),H=Object(_.a)(B,2),P=H[0],G=H[1],J=Object(n.useState)(!1),Y=Object(_.a)(J,2),q=Y[0],K=Y[1],Q="https://cors.bridged.cc/https://jobs.github.com/positions",V=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),a=t.search("page"),e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:c=e.sent,o((function(e){return Object(m.a)(Object(m.a)({},e),{},{jobs:-1!==a?[].concat(Object(i.a)(e.jobs),Object(i.a)(c)):Object(i.a)(c)})})),v(c.length);case 11:h(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){sessionStorage.getItem("search URL")?(V(sessionStorage.getItem("search URL")),Z(sessionStorage.getItem("search URL"))):V("".concat(Q,".json"))}),[]),c.a.createElement(b.a,null,c.a.createElement(M.Provider,{value:{BASE_URL:Q,fetchGithubAPI:V,data:a,loading:d,resultLength:E,lightTheme:P,setLightTheme:G,searchInput:w,setSearchInput:O,locationInput:I,setLocationInput:k,fullTime:C,setFullTime:U,searchURL:D,setSearchURL:Z,mobileFilter:q,setMobileFilter:K}},c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:T}),c.a.createElement(p.a,{exact:!0,path:"/:jobID",component:F})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z,null)),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.fba50085.chunk.js.map
"use strict";(self.webpackChunkportfolio_of_checkiamsiam=self.webpackChunkportfolio_of_checkiamsiam||[]).push([[19],{6019:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var s=r(9439),n=r(2791),a=r(3504),i=r(9508),c=r(6907),l=(r(7007),r(184)),o=function(){var e=(0,n.useContext)(i.E),t=e.activeCategory,r=e.setActiveCategory,o=e.projects,d=e.showing,x=e.setShowing,u=e.featured,h=(0,n.useState)(!1),m=(0,s.Z)(h,2),b=m[0],p=m[1],j=o.filter((function(e){return"org"===e.category})),g=o.filter((function(e){return"personal"===e.category})),f=o.filter((function(e){return"social"===e.category}));return(0,l.jsxs)("div",{className:"pt-24 pb-5 min-h-screen",children:[(0,l.jsx)(c.ql,{children:(0,l.jsx)("title",{children:"Projects - Sheikh Shahariar Siam"})}),(0,l.jsxs)("div",{className:"container  mx-auto text-base-100 px-5 ",children:[(0,l.jsx)("h1",{className:" text-center sm:mb-10 mb-5 ",children:(0,l.jsx)("span",{className:"text-accent text-4xl title-font project-title relative z-30",children:"My Projects"})}),(0,l.jsx)("p",{className:"text-center italic text-primary",children:"All Of My Projects Showcased here"}),(0,l.jsx)("div",{className:"flex justify-center sm:mt-10 mt-5",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{onClick:function(){r("all"),x(o),p(!1)},class:"p-2 hover:text-primary transition duration-400 md:text-xl text-xs uppercase text-base-100 border-b-2  ".concat("all"===t?"border-primary ":"border-neutral"),children:"All"}),(0,l.jsx)("button",{onClick:function(){r("feature"),x(u),p(!1)},class:"p-2 hover:text-primary transition duration-400  md:text-xl text-xs uppercase text-base-100 border-b-2 ".concat("feature"===t?"border-primary":"border-neutral"),children:"Featured"}),(0,l.jsx)("button",{onClick:function(){r("Org"),x(j),p(!1)},class:"p-2 hover:text-primary transition duration-400  md:text-xl text-xs uppercase text-base-100 border-b-2 ".concat("Org"===t?"border-primary":"border-neutral"),children:"Org."}),(0,l.jsx)("button",{onClick:function(){r("personal"),x(g),p(!1)},class:"p-2 hover:text-primary transition duration-400  md:text-xl text-xs uppercase text-base-100 border-b-2 ".concat("personal"===t?"border-primary":"border-neutral"),children:"Personal"}),(0,l.jsx)("button",{onClick:function(){r("social"),x(f),p(!1)},class:"p-2 hover:text-primary transition duration-400  md:text-xl text-xs uppercase text-base-100 border-b-2 ".concat("social"===t?"border-primary":"border-neutral"),children:"Social"})]})}),0!==d.length?(0,l.jsx)("div",{children:b?(0,l.jsx)("div",{className:"grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10",children:d.map((function(e,t){return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{class:"p-2 rounded-xl  bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300",children:[(0,l.jsx)("figure",{class:"mx-3 mt-3 cursor-pointer bg-secondary rounded-xl",children:(0,l.jsx)(a.rU,{to:"".concat(e.detailsRoute),children:(0,l.jsx)("img",{src:e.img[0],alt:"Website-overview",class:"rounded-xl md:h-52 hover:translate-x-2 hover:-translate-y-2 transition duration-500 cursor-pointer"})})}),(0,l.jsxs)("div",{class:"card-body text-base-100",children:[(0,l.jsx)("h2",{class:"card-title text-primary",children:e.name}),(0,l.jsx)("div",{className:"flex gap-3 pb-3",children:e.technologyUsed.slice(0,3).map((function(e,t){return(0,l.jsx)("div",{class:"badge badge-lg text-accent",children:e.split(" ")[0]},t)}))}),(0,l.jsx)("div",{className:"flex justify-end ",children:(0,l.jsx)(a.rU,{to:"".concat(e.detailsRoute),className:"link link-hover custom-btn btn btn-ghost text-center",children:"Details"})})]})]})},t)}))}):(0,l.jsx)("div",{className:"grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10",children:d.slice(0,6).map((function(e,t){return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{class:"p-2 rounded-2xl bg-[rgba(247,244,244,0.15)] shadow-md hover:shadow-primary transition duration-300",children:[(0,l.jsx)("figure",{class:"mx-3 mt-3 cursor-pointer bg-secondary rounded-xl",children:(0,l.jsx)(a.rU,{to:"".concat(e.detailsRoute),children:(0,l.jsx)("img",{src:e.img[0],alt:"Website-overview",class:"rounded-xl md:h-52 hover:translate-x-2 hover:-translate-y-2 transition duration-500 cursor-pointer"})})}),(0,l.jsxs)("div",{class:"card-body text-base-100",children:[(0,l.jsx)("h2",{class:"card-title text-primary",children:e.name}),(0,l.jsx)("div",{className:"flex  gap-3 pb-3",children:e.technologyUsed.slice(0,3).map((function(e,t){return(0,l.jsx)("div",{class:"badge badge-lg text-accent",children:e.split(" ")[0]},t)}))}),(0,l.jsx)("div",{className:"flex justify-end ",children:(0,l.jsx)(a.rU,{to:"".concat(e.detailsRoute),className:"link link-hover custom-btn btn btn-ghost text-center",children:"Details"})})]})]})},t)}))})}):(0,l.jsx)("h1",{className:"text-error text-6xl text-center py-10",children:"Empty"})]}),b||0===d.length?(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("button",{onClick:function(){p(!b),window.scrollTo(0,0),"all"===t&&(r("feature"),x(u)),"feature"===t&&(r("Org"),x(j)),"org"===t&&(r("personal"),x(g)),"personal"===t&&(r("social"),x(f)),"social"===t&&(r("all"),x(o))},className:"custom-btn m-5 btn btn-ghost",children:"Next"})}):(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("button",{onClick:function(){p(!b)},className:"custom-btn m-5 btn btn-ghost",children:"Show All"})})]})},d=(0,n.memo)(o)},7007:function(){}}]);
//# sourceMappingURL=19.8adf9ce9.chunk.js.map
"use strict";(self.webpackChunkportfolio_of_checkiamsiam=self.webpackChunkportfolio_of_checkiamsiam||[]).push([[904],{7904:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(9439),n=a(2791),o=a(3504);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var l=function(e){var t=e.color,a=void 0===t?"currentColor":t,o=e.direction,s=void 0===o?"left":o,i=e.distance,c=void 0===i?"md":i,l=e.duration,d=void 0===l?.4:l,x=e.easing,u=void 0===x?"cubic-bezier(0, 0, 0, 1)":x,h=e.hideOutline,m=void 0===h||h,p=e.label,b=e.lines,g=void 0===b?3:b,f=e.onToggle,j=e.render,v=e.rounded,y=void 0!==v&&v,O=e.size,N=void 0===O?32:O,w=e.toggle,S=e.toggled,k=(0,n.useState)(!1),L=(0,r.Z)(k,2),R=L[0],E=L[1],T=Math.max(12,Math.min(48,N)),P=Math.round((48-T)/2),C=T/12,M=Math.round(C),I=T/(g*(("lg"===c?.25:"sm"===c?.75:.5)+(3===g?1:1.25))),z=Math.round(I),H=M*g+z*(g-1),A=Math.round((48-H)/2),D=parseFloat((T/(3===g?"lg"===c?4.0425:"sm"===c?5.1625:4.6325:"lg"===c?6.7875:"sm"===c?8.4875:7.6675)-(C-M+(I-z))/(3===g?1:2)/(4/3)).toFixed(2)),Z=Math.max(0,d),F={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(Z,"s ").concat(u),userSelect:"none",width:"".concat(48,"px")},K={background:a,height:"".concat(M,"px"),left:"".concat(P,"px"),position:"absolute"};m&&(F.outline="none"),y&&(K.borderRadius="9em");var _=w||E,V=void 0!==S?S:R;return j({barHeight:M,barStyles:K,burgerStyles:F,easing:u,handler:function(){_(!V),"function"===typeof f&&f(!V)},isLeft:"left"===s,isToggled:V,label:p,margin:z,move:D,time:Z,topOffset:A,width:T})};function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}var x=function(e){return n.createElement(l,d({},e,{render:function(e){return n.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:e.burgerStyles,tabIndex:0},n.createElement("div",{style:c(c({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"".concat(e.barStyles.borderRadius," 0 0 ").concat(e.barStyles.borderRadius),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(".concat(.48*e.move,"px, ").concat(.73*e.move,"px) rotate(45deg)"):"none")})}),n.createElement("div",{style:c(c({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"0 ".concat(e.barStyles.borderRadius," ").concat(e.barStyles.borderRadius," 0"),left:"50%",top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(-".concat(.48*e.move,"px, ").concat(.73*e.move,"px) rotate(-45deg)"):"none")})}),n.createElement("div",{style:c(c({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"".concat(e.barStyles.borderRadius," 0 0 ").concat(e.barStyles.borderRadius),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),opacity:e.isToggled?0:1,transform:"".concat(e.isToggled?"translate(".concat(1.25*-e.move,"px, 0)"):"none")})}),n.createElement("div",{style:c(c({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"0 ".concat(e.barStyles.borderRadius," ").concat(e.barStyles.borderRadius," 0"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),left:"50%",transition:"".concat(e.time,"s ").concat(e.easing),opacity:e.isToggled?0:1,transform:"".concat(e.isToggled?"translate(".concat(1.25*e.move,"px, 0)"):"none")})}),n.createElement("div",{style:c(c({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"".concat(e.barStyles.borderRadius," 0 0 ").concat(e.barStyles.borderRadius),top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(".concat(.48*e.move,"px, -").concat(.73*e.move,"px) rotate(-45deg)"):"none")})}),n.createElement("div",{style:c(c({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"0 ".concat(e.barStyles.borderRadius," ").concat(e.barStyles.borderRadius," 0"),left:"50%",top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(-".concat(.48*e.move,"px, -").concat(.73*e.move,"px) rotate(45deg)"):"none")})}))}}))},u=a(8820),h=a(978),m=a(6856),p=a(7692),b=a(184),g=function(){var e=(0,n.useState)(!1),t=(0,r.Z)(e,2),a=t[0],s=t[1],i=(0,n.useState)(!1),c=(0,r.Z)(i,2),l=c[0],d=c[1];return window.addEventListener("scroll",(function(){window.scrollY>10?d(!0):d(!1)})),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"fixed bg-transparent w-full top-0 left-0  z-[99999]  showTopNav ".concat(l&&!a&&"hideTopNav"),children:(0,b.jsxs)("div",{class:"navbar  flex sm:px-0 px-5 container mx-auto",children:[(0,b.jsx)("div",{class:"flex-1 text-primary",children:(0,b.jsxs)(o.rU,{to:"/",class:" title-font text-2xl sm:text-3xl",children:[" ","< SIAM />"," "]})}),(0,b.jsxs)("div",{class:"flex-none",children:[(0,b.jsx)("div",{className:"sm:block hidden",children:(0,b.jsxs)("ul",{class:"flex gap-7 text-lg italic ",children:[(0,b.jsx)("li",{className:"  header-options text-base-100",children:(0,b.jsx)(o.OL,{className:"hover:text-primary transition duration-300",to:"/",children:"Home"})}),(0,b.jsx)("li",{className:"header-options text-base-100",children:(0,b.jsx)(o.OL,{className:"hover:text-primary transition duration-300",to:"/about",children:"About"})}),(0,b.jsx)("li",{className:"header-options text-base-100",children:(0,b.jsx)(o.OL,{className:"hover:text-primary transition duration-300",to:"/projects",children:"Projects"})}),(0,b.jsx)("li",{className:"header-options text-base-100",children:(0,b.jsx)(o.OL,{className:" hover:text-primary transition duration-300",to:"/blogs",children:"Blogs"})}),(0,b.jsx)("li",{className:" header-options text-base-100",children:(0,b.jsx)(o.OL,{className:"hover:text-primary transition duration-300",to:"/contact",children:"Contact Me"})})]})}),(0,b.jsxs)("div",{className:"sm:hidden block",children:[(0,b.jsx)(x,{toggled:a,toggle:s,color:"#F27F1E ",size:28}),(0,b.jsx)("div",{className:"h-screen bg-[#212121] fixed top-0 left-0 w-screen  transition duration-1000 ".concat(a?" showNav ":" hideNav "," -z-10 flex items-center p-5"),children:(0,b.jsxs)("ul",{class:" w-full  text-2xl italic text-base-100",children:[(0,b.jsx)("li",{className:"hover:text-slate-100 header-options my-6 ",children:(0,b.jsxs)(o.OL,{onClick:function(){return s(!a)},className:"flex items-center gap-3",to:"/",children:[(0,b.jsx)(u.V9Z,{}),"Home"]})}),(0,b.jsx)("hr",{}),(0,b.jsx)("li",{className:"hover:text-slate-100 header-options my-6",children:(0,b.jsxs)(o.OL,{onClick:function(){return s(!a)},className:"flex items-center gap-3",to:"/about",children:[(0,b.jsx)(h.l8A,{}),"About Me"]})}),(0,b.jsx)("hr",{}),(0,b.jsx)("li",{className:"hover:text-slate-100 header-options my-6",children:(0,b.jsxs)(o.OL,{onClick:function(){return s(!a)},className:"flex items-center gap-3",to:"/projects",children:[(0,b.jsx)(u.SgI,{}),"Projects"]})}),(0,b.jsx)("hr",{}),(0,b.jsx)("li",{className:"hover:text-slate-100 header-options my-6",children:(0,b.jsxs)(o.OL,{onClick:function(){return s(!a)},className:"flex items-center gap-3",to:"/blogs",children:[(0,b.jsx)(p.kK8,{}),"Blogs"]})}),(0,b.jsx)("hr",{}),(0,b.jsx)("li",{className:"hover:text-slate-100 header-options my-6",children:(0,b.jsxs)(o.OL,{onClick:function(){return s(!a)},className:"flex items-center gap-3",to:"/contact",children:[(0,b.jsx)(m.nsO,{}),"Contact Me"]})})]})})]})]})]})}),(0,b.jsx)("div",{className:"fixed bottom-5 right-2 z-50 sm:block hidden hideIconsDesk ".concat(l&&!a&&"showIconsDesk","  "),children:(0,b.jsxs)("div",{className:"flex  flex-col gap-3 z-50 text-base-100",children:[(0,b.jsx)(o.OL,{className:"text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 ",to:"/",children:(0,b.jsx)(u.V9Z,{})}),(0,b.jsx)(o.OL,{className:"text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent  transition duration-500",to:"/about",children:(0,b.jsx)(h.l8A,{})}),(0,b.jsx)(o.OL,{className:"text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500",to:"/projects",children:(0,b.jsx)(u.SgI,{})}),(0,b.jsx)(o.OL,{className:"text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent  transition duration-500",to:"/blogs",children:(0,b.jsx)(p.kK8,{})}),(0,b.jsx)(o.OL,{className:"text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500",to:"/contact",children:(0,b.jsx)(m.nsO,{})})]})}),(0,b.jsx)("div",{className:"flex justify-center ",children:(0,b.jsx)("div",{className:"fixed bottom-5   sm:hidden  hideIconsSm ".concat(l&&!a&&"showIconsSm","  z-50"),children:(0,b.jsxs)("div",{className:"flex flex-wrap text-base-100 gap-3 ",children:[(0,b.jsx)(o.OL,{className:" text-3xl p-2 bg-neutral rounded-full  transition duration-500 ",to:"/",children:(0,b.jsx)(u.V9Z,{})}),(0,b.jsx)(o.OL,{className:"text-3xl p-2 bg-neutral rounded-full  transition duration-500",to:"/about",children:(0,b.jsx)(h.l8A,{})}),(0,b.jsx)(o.OL,{className:"text-3xl p-2 bg-neutral rounded-full transition duration-500",to:"/projects",children:(0,b.jsx)(u.SgI,{})}),(0,b.jsx)(o.OL,{className:"text-3xl p-2 bg-neutral rounded-full transition duration-500",to:"/blogs",children:(0,b.jsx)(p.kK8,{})}),(0,b.jsx)(o.OL,{className:"text-3xl p-2 bg-neutral rounded-full transition duration-500",to:"/contact",children:(0,b.jsx)(m.nsO,{})})]})})})]})}}}]);
//# sourceMappingURL=904.d0238bbb.chunk.js.map
"use strict";(self.webpackChunkportfolio_of_checkiamsiam=self.webpackChunkportfolio_of_checkiamsiam||[]).push([[696],{5544:function(t,e,n){n.d(e,{$Q:function(){return l},Ad:function(){return a},CK:function(){return Z},CP:function(){return E},Co:function(){return O},GO:function(){return v},HC:function(){return m},Hw:function(){return R},I:function(){return p},JH:function(){return S},KT:function(){return D},Kx:function(){return h},L8:function(){return b},LB:function(){return s},NH:function(){return c},Q9:function(){return I},TW:function(){return d},Tf:function(){return j},Zi:function(){return r},_:function(){return u},a4:function(){return g},aQ:function(){return C},ad:function(){return L},c3:function(){return o},c7:function(){return N},dR:function(){return w},hh:function(){return k},nf:function(){return y},pB:function(){return x},rP:function(){return P},vR:function(){return f},vl:function(){return i},zm:function(){return T}});var r={opacity:0,x:"-100%"},o={opacity:1,x:"0%"},s={type:"spring",stiffness:180,duration:1.5},a={type:"spring",stiffness:180,delay:1,duration:1},c={opacity:0,y:-100},i={opacity:1,y:0},l={type:"spring",stiffness:500,delay:.5,duration:1.5},d={opacity:0,y:"50%"},u={opacity:1,y:0},x={delay:.5,duration:1},p={opacity:0,y:"50%"},f={opacity:1,y:0},h={delay:.5,duration:2},m={opacity:0,y:"50%"},b={opacity:1,y:0},g={delay:.5,duration:3},y={opacity:0,x:"-100%"},j={opacity:1,x:0},v={delay:1,type:"spring",stiffness:180,duration:1},N={opacity:0},O={opacity:1},w={delay:1,duration:1},S={opacity:0,y:-100},k={opacity:1,y:0},L={duration:.5},R={scale:0},Z={scale:1},T={scale:2},C={scale:1},I={y:6},E={y:-6},D={duration:4,yoyo:1/0},P={duration:.5,yoyo:1/0}},3696:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(9439),o=n(2791),s=n(3504),a=n(1413),c=function(t){var e=t.color,n=void 0===e?"currentColor":e,s=t.direction,a=void 0===s?"left":s,c=t.distance,i=void 0===c?"md":c,l=t.duration,d=void 0===l?.4:l,u=t.easing,x=void 0===u?"cubic-bezier(0, 0, 0, 1)":u,p=t.hideOutline,f=void 0===p||p,h=t.label,m=t.lines,b=void 0===m?3:m,g=t.onToggle,y=t.render,j=t.rounded,v=void 0!==j&&j,N=t.size,O=void 0===N?32:N,w=t.toggle,S=t.toggled,k=(0,o.useState)(!1),L=(0,r.Z)(k,2),R=L[0],Z=L[1],T=Math.max(12,Math.min(48,O)),C=Math.round((48-T)/2),I=T/12,E=Math.round(I),D=T/(b*(("lg"===i?.25:"sm"===i?.75:.5)+(3===b?1:1.25))),P=Math.round(D),H=E*b+P*(b-1),M=Math.round((48-H)/2),z=parseFloat((T/(3===b?"lg"===i?4.0425:"sm"===i?5.1625:4.6325:"lg"===i?6.7875:"sm"===i?8.4875:7.6675)-(I-E+(D-P))/(3===b?1:2)/(4/3)).toFixed(2)),A=Math.max(0,d),K={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(A,"s ").concat(x),userSelect:"none",width:"".concat(48,"px")},B={background:n,height:"".concat(E,"px"),left:"".concat(C,"px"),position:"absolute"};f&&(K.outline="none"),v&&(B.borderRadius="9em");var F=w||Z,_=void 0!==S?S:R;return y({barHeight:E,barStyles:B,burgerStyles:K,easing:x,handler:function(){F(!_),"function"===typeof g&&g(!_)},isLeft:"left"===a,isToggled:_,label:h,margin:P,move:z,time:A,topOffset:M,width:T})};function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}var l=function(t){return o.createElement(c,i({},t,{render:function(t){return o.createElement("div",{className:"hamburger-react","aria-label":t.label,"aria-expanded":t.isToggled,onClick:t.handler,onKeyUp:function(e){return"Enter"===e.key&&t.handler()},role:"button",style:t.burgerStyles,tabIndex:0},o.createElement("div",{style:(0,a.Z)((0,a.Z)({},t.barStyles),{},{width:"".concat(t.width/2,"px"),borderRadius:"".concat(t.barStyles.borderRadius," 0 0 ").concat(t.barStyles.borderRadius),top:"".concat(t.topOffset,"px"),transition:"".concat(t.time,"s ").concat(t.easing),transform:"".concat(t.isToggled?"translate(".concat(.48*t.move,"px, ").concat(.73*t.move,"px) rotate(45deg)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},t.barStyles),{},{width:"".concat(t.width/2,"px"),borderRadius:"0 ".concat(t.barStyles.borderRadius," ").concat(t.barStyles.borderRadius," 0"),left:"50%",top:"".concat(t.topOffset,"px"),transition:"".concat(t.time,"s ").concat(t.easing),transform:"".concat(t.isToggled?"translate(-".concat(.48*t.move,"px, ").concat(.73*t.move,"px) rotate(-45deg)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},t.barStyles),{},{width:"".concat(t.width/2,"px"),borderRadius:"".concat(t.barStyles.borderRadius," 0 0 ").concat(t.barStyles.borderRadius),top:"".concat(t.topOffset+t.barHeight+t.margin,"px"),transition:"".concat(t.time,"s ").concat(t.easing),opacity:t.isToggled?0:1,transform:"".concat(t.isToggled?"translate(".concat(1.25*-t.move,"px, 0)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},t.barStyles),{},{width:"".concat(t.width/2,"px"),borderRadius:"0 ".concat(t.barStyles.borderRadius," ").concat(t.barStyles.borderRadius," 0"),top:"".concat(t.topOffset+t.barHeight+t.margin,"px"),left:"50%",transition:"".concat(t.time,"s ").concat(t.easing),opacity:t.isToggled?0:1,transform:"".concat(t.isToggled?"translate(".concat(1.25*t.move,"px, 0)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},t.barStyles),{},{width:"".concat(t.width/2,"px"),borderRadius:"".concat(t.barStyles.borderRadius," 0 0 ").concat(t.barStyles.borderRadius),top:"".concat(t.topOffset+2*t.barHeight+2*t.margin,"px"),transition:"".concat(t.time,"s ").concat(t.easing),transform:"".concat(t.isToggled?"translate(".concat(.48*t.move,"px, -").concat(.73*t.move,"px) rotate(-45deg)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},t.barStyles),{},{width:"".concat(t.width/2,"px"),borderRadius:"0 ".concat(t.barStyles.borderRadius," ").concat(t.barStyles.borderRadius," 0"),left:"50%",top:"".concat(t.topOffset+2*t.barHeight+2*t.margin,"px"),transition:"".concat(t.time,"s ").concat(t.easing),transform:"".concat(t.isToggled?"translate(-".concat(.48*t.move,"px, -").concat(.73*t.move,"px) rotate(45deg)"):"none")})}))}}))},d=n(8820),u=n(978),x=n(6856),p=n(7692),f=(n(5544),n(184)),h=function(){var t=(0,o.useState)(!1),e=(0,r.Z)(t,2),n=e[0],a=e[1],c=(0,o.useState)(!1),i=(0,r.Z)(c,2),h=i[0],m=i[1];return window.addEventListener("scroll",(function(){window.scrollY>10?m(!0):m(!1)})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"fixed bg-transparent w-full top-0 left-0  z-[99999]  showTopNav ".concat(h&&!n&&"hideTopNav"),children:(0,f.jsxs)("div",{class:"navbar  flex sm:px-0 px-5 container mx-auto",children:[(0,f.jsx)("div",{class:"flex-1 text-primary ",children:(0,f.jsxs)(s.rU,{to:"/",class:" title-font text-2xl sm:text-3xl cursor-pointer",children:[" ","< SIAM />"," "]})}),(0,f.jsxs)("div",{class:"flex-none",children:[(0,f.jsx)("div",{className:"sm:block hidden",children:(0,f.jsxs)("ul",{class:"flex gap-7 text-lg italic ",children:[(0,f.jsx)("li",{className:"  header-options text-base-100",children:(0,f.jsx)(s.OL,{className:"hover:text-primary transition duration-300 cursor-pointer",to:"/",children:"Home"})}),(0,f.jsx)("li",{className:"header-options text-base-100",children:(0,f.jsx)(s.OL,{className:"hover:text-primary transition duration-300 cursor-pointer",to:"/about",children:"About"})}),(0,f.jsx)("li",{className:"header-options text-base-100",children:(0,f.jsx)(s.OL,{className:"hover:text-primary transition duration-300 cursor-pointer",to:"/projects",children:"Projects"})}),(0,f.jsx)("li",{className:"header-options text-base-100",children:(0,f.jsx)(s.OL,{className:" hover:text-primary transition duration-300 cursor-pointer",to:"/blogs",children:"Blogs"})}),(0,f.jsx)("li",{className:" header-options text-base-100",children:(0,f.jsx)(s.OL,{className:"hover:text-primary transition duration-300 cursor-pointer",to:"/contact",children:"Contact Me"})})]})}),(0,f.jsxs)("div",{className:"sm:hidden block",children:[(0,f.jsx)(l,{toggled:n,toggle:a,color:"#F27F1E ",size:28}),(0,f.jsx)("div",{className:"h-screen bg-[#212121] fixed top-0 left-0 w-screen  transition duration-1000 } -z-10 flex items-center p-5 showNav ".concat(!n&&"hideNav"),children:(0,f.jsxs)("ul",{class:" w-full  text-2xl italic text-base-100",children:[(0,f.jsx)("li",{className:"hover:text-slate-100 header-options my-6 ",children:(0,f.jsxs)(s.OL,{onClick:function(){return a(!n)},className:"flex items-center gap-3 cursor-pointer",to:"/",children:[(0,f.jsx)(d.V9Z,{}),"Home"]})}),(0,f.jsx)("hr",{}),(0,f.jsx)("li",{className:"hover:text-slate-100 header-options my-6",children:(0,f.jsxs)(s.OL,{onClick:function(){return a(!n)},className:"flex items-center gap-3 cursor-pointer",to:"/about",children:[(0,f.jsx)(u.l8A,{}),"About Me"]})}),(0,f.jsx)("hr",{}),(0,f.jsx)("li",{className:"hover:text-slate-100 header-options my-6",children:(0,f.jsxs)(s.OL,{onClick:function(){return a(!n)},className:"flex items-center gap-3 cursor-pointer",to:"/projects",children:[(0,f.jsx)(d.SgI,{}),"Projects"]})}),(0,f.jsx)("hr",{}),(0,f.jsx)("li",{className:"hover:text-slate-100 header-options my-6",children:(0,f.jsxs)(s.OL,{onClick:function(){return a(!n)},className:"flex items-center gap-3 cursor-pointer",to:"/blogs",children:[(0,f.jsx)(p.kK8,{}),"Blogs"]})}),(0,f.jsx)("hr",{}),(0,f.jsx)("li",{className:"hover:text-slate-100 header-options my-6",children:(0,f.jsxs)(s.OL,{onClick:function(){return a(!n)},className:"flex items-center gap-3 cursor-pointer",to:"/contact",children:[(0,f.jsx)(x.nsO,{}),"Contact Me"]})})]})})]})]})]})}),(0,f.jsx)("div",{className:"z-50 sm:block hidden relative",children:(0,f.jsxs)("div",{className:"z-50 text-base-100 ",children:[(0,f.jsxs)(s.OL,{to:"/",className:"fixed  bottom-[280px]  right-2 icon-nav1 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ".concat(h&&!n&&"showIconsDesk"," "),children:[(0,f.jsx)("span",{className:"font-bold text-xl text-nav1 cursor-pointer z-50",children:"HOME"}),(0,f.jsx)("span",{className:"text-3xl ",children:(0,f.jsx)(d.V9Z,{className:"cursor-pointer"})})]}),(0,f.jsxs)(s.OL,{to:"/about",className:"fixed  bottom-[215px] right-2 icon-nav2 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ".concat(h&&!n&&"showIconsDesk"," "),children:[(0,f.jsx)("span",{className:"font-bold text-xl text-nav2 cursor-pointer",children:"ABOUT"}),(0,f.jsx)("span",{className:"text-3xl  ",children:(0,f.jsx)(u.l8A,{className:"cursor-pointer"})})]}),(0,f.jsxs)(s.OL,{to:"/projects",className:"fixed  bottom-[150px] right-2 icon-nav3 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ".concat(h&&!n&&"showIconsDesk"," "),children:[(0,f.jsx)("span",{className:"font-bold text-xl text-nav3 cursor-pointer",children:"PROJECTS"}),(0,f.jsx)("span",{className:"text-3xl ",children:(0,f.jsx)(d.SgI,{className:"cursor-pointer"})})]}),(0,f.jsxs)(s.OL,{to:"/blogs",className:"fixed  bottom-[85px] right-2 icon-nav4 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ".concat(h&&!n&&"showIconsDesk"," "),children:[(0,f.jsx)("span",{className:"font-bold text-xl text-nav4 cursor-pointer",children:"BLOGS"}),(0,f.jsx)("span",{className:"text-3xl",children:(0,f.jsx)(p.kK8,{className:"cursor-pointer"})})]}),(0,f.jsxs)(s.OL,{to:"/contact",className:"fixed  bottom-5 right-2 icon-nav5 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ".concat(h&&!n&&"showIconsDesk"," "),children:[(0,f.jsx)("span",{className:"font-bold text-xl text-nav5 cursor-pointer",children:"CONTACT"}),(0,f.jsx)("span",{className:"text-3xl ",children:(0,f.jsx)(x.nsO,{className:"cursor-pointer"})})]})]})}),(0,f.jsx)("div",{className:"flex justify-center ",children:(0,f.jsx)("div",{className:"fixed bottom-5   sm:hidden  hideIconsSm ".concat(h&&!n&&"showIconsSm","  z-50"),children:(0,f.jsxs)("div",{className:"flex flex-wrap text-base-100 gap-3 cursor-pointer",children:[(0,f.jsx)(s.OL,{className:" text-3xl p-2 bg-neutral rounded-full  transition duration-500 cursor-pointer",to:"/",children:(0,f.jsx)(d.V9Z,{className:"cursor-pointer"})}),(0,f.jsx)(s.OL,{className:"text-3xl p-2 bg-neutral rounded-full  transition duration-500 cursor-pointer",to:"/about",children:(0,f.jsx)(u.l8A,{})}),(0,f.jsx)(s.OL,{className:"text-3xl p-2 bg-neutral rounded-full transition duration-500 cursor-pointer",to:"/projects",children:(0,f.jsx)(d.SgI,{})}),(0,f.jsx)(s.OL,{className:"text-3xl p-2 bg-neutral rounded-full transition duration-500 cursor-pointer",to:"/blogs",children:(0,f.jsx)(p.kK8,{})}),(0,f.jsx)(s.OL,{className:"text-3xl p-2 bg-neutral rounded-full transition duration-500 cursor-pointer",to:"/contact",children:(0,f.jsx)(x.nsO,{})})]})})})]})},m=(0,o.memo)(h)},1413:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(4942);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}}}]);
//# sourceMappingURL=696.edc30a3c.chunk.js.map
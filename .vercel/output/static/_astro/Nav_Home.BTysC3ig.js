import{j as e}from"./jsx-runtime.6JYdPw_6.js";import{r as n}from"./index.CWrl8SxZ.js";import{c as P}from"./utils.BR_JCrAi.js";import{_ as y,$ as A,b as Ce}from"./index.CpuhZQx1.js";import{$ as ye}from"./index.CIiGpplO.js";import{c as R,a as Me,d as Ee,e as O,b as M,$ as B,f as ee}from"./index.BPFxgx7V.js";import{$ as Re}from"./index.B4OQokJL.js";import{a as se,$ as G}from"./index.DRjJerNm.js";import{$ as re}from"./index.Bu85eg9g.js";import{$ as Ie}from"./index.BC0vyog3.js";import{$ as ke}from"./index.B7hxDTwq.js";import{c as Te}from"./index.CxOCE76-.js";import"./index.83dd380a.BcXRlb3w.js";function Pe(){return e.jsx(e.Fragment,{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17px",height:"17px",viewBox:"0 0 48 48",children:e.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4",d:"M7.95 11.95h32m-32 12h32m-32 12h32"})})})}function Le(){return e.jsxs("div",{className:"bg-white flex items-center gap-2 pr-4 justify-center rounded-3xl h-[35px] w-[100px]",children:[e.jsx("div",{className:"flex items-center justify-center bg-black rounded-full w-[33px] h-[33px]  ",children:e.jsx(Pe,{})}),e.jsx("p",{className:"text-sm font-bold text-black text-font_Poppins",children:"MENU"})]})}const Oe=n.forwardRef((t,a)=>n.createElement(R.span,y({},t,{ref:a,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}))),Se=Oe,V="NavigationMenu",[Y,ie,De]=re(V),[W,Fe,Ae]=re(V),[q,Rt]=Me(V,[De,Ae]),[Ve,I]=q(V),[Ke,ze]=q(V),He=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,value:i,onValueChange:r,defaultValue:o,delayDuration:c=200,skipDelayDuration:u=300,orientation:l="horizontal",dir:$,...d}=t,[g,w]=n.useState(null),N=A(a,v=>w(v)),_=Re($),h=n.useRef(0),b=n.useRef(0),C=n.useRef(0),[k,f]=n.useState(!0),[x="",m]=Ee({prop:i,onChange:v=>{const L=v!=="",U=u>0;L?(window.clearTimeout(C.current),U&&f(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>f(!0),u)),r?.(v)},defaultProp:o}),j=n.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>m(""),150)},[m]),E=n.useCallback(v=>{window.clearTimeout(b.current),m(v)},[m]),T=n.useCallback(v=>{x===v?window.clearTimeout(b.current):h.current=window.setTimeout(()=>{window.clearTimeout(b.current),m(v)},c)},[x,m,c]);return n.useEffect(()=>()=>{window.clearTimeout(h.current),window.clearTimeout(b.current),window.clearTimeout(C.current)},[]),n.createElement(Ge,{scope:s,isRootMenu:!0,value:x,dir:_,orientation:l,rootNavigationMenu:g,onTriggerEnter:v=>{window.clearTimeout(h.current),k?T(v):E(v)},onTriggerLeave:()=>{window.clearTimeout(h.current),j()},onContentEnter:()=>window.clearTimeout(b.current),onContentLeave:j,onItemSelect:v=>{m(L=>L===v?"":v)},onItemDismiss:()=>m("")},n.createElement(R.nav,y({"aria-label":"Main","data-orientation":l,dir:_},d,{ref:N})))}),Ge=t=>{const{scope:a,isRootMenu:s,rootNavigationMenu:i,dir:r,orientation:o,children:c,value:u,onItemSelect:l,onItemDismiss:$,onTriggerEnter:d,onTriggerLeave:g,onContentEnter:w,onContentLeave:N}=t,[_,h]=n.useState(null),[b,C]=n.useState(new Map),[k,f]=n.useState(null);return n.createElement(Ve,{scope:a,isRootMenu:s,rootNavigationMenu:i,value:u,previousValue:ke(u),baseId:se(),dir:r,orientation:o,viewport:_,onViewportChange:h,indicatorTrack:k,onIndicatorTrackChange:f,onTriggerEnter:O(d),onTriggerLeave:O(g),onContentEnter:O(w),onContentLeave:O(N),onItemSelect:O(l),onItemDismiss:O($),onViewportContentChange:n.useCallback((x,m)=>{C(j=>(j.set(x,m),new Map(j)))},[]),onViewportContentRemove:n.useCallback(x=>{C(m=>m.has(x)?(m.delete(x),new Map(m)):m)},[])},n.createElement(Y.Provider,{scope:a},n.createElement(Ke,{scope:a,items:b},c)))},Ue="NavigationMenuList",Be=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,...i}=t,r=I(Ue,s),o=n.createElement(R.ul,y({"data-orientation":r.orientation},i,{ref:a}));return n.createElement(R.div,{style:{position:"relative"},ref:r.onIndicatorTrackChange},n.createElement(Y.Slot,{scope:s},r.isRootMenu?n.createElement(me,{asChild:!0},o):o))}),We="NavigationMenuItem",[Ze,oe]=q(We),Xe=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,value:i,...r}=t,o=se(),c=i||o||"LEGACY_REACT_AUTO_VALUE",u=n.useRef(null),l=n.useRef(null),$=n.useRef(null),d=n.useRef(()=>{}),g=n.useRef(!1),w=n.useCallback((_="start")=>{if(u.current){d.current();const h=Z(u.current);h.length&&J(_==="start"?h:h.reverse())}},[]),N=n.useCallback(()=>{if(u.current){const _=Z(u.current);_.length&&(d.current=it(_))}},[]);return n.createElement(Ze,{scope:s,value:c,triggerRef:l,contentRef:u,focusProxyRef:$,wasEscapeCloseRef:g,onEntryKeyDown:w,onFocusProxyEnter:w,onRootContentClose:N,onContentFocusOutside:N},n.createElement(R.li,y({},r,{ref:a})))}),te="NavigationMenuTrigger",Ye=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,disabled:i,...r}=t,o=I(te,t.__scopeNavigationMenu),c=oe(te,t.__scopeNavigationMenu),u=n.useRef(null),l=A(u,c.triggerRef,a),$=ue(o.baseId,c.value),d=xe(o.baseId,c.value),g=n.useRef(!1),w=n.useRef(!1),N=c.value===o.value;return n.createElement(n.Fragment,null,n.createElement(Y.ItemSlot,{scope:s,value:c.value},n.createElement(fe,{asChild:!0},n.createElement(R.button,y({id:$,disabled:i,"data-disabled":i?"":void 0,"data-state":Q(N),"aria-expanded":N,"aria-controls":d},r,{ref:l,onPointerEnter:M(t.onPointerEnter,()=>{w.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:M(t.onPointerMove,H(()=>{i||w.current||c.wasEscapeCloseRef.current||g.current||(o.onTriggerEnter(c.value),g.current=!0)})),onPointerLeave:M(t.onPointerLeave,H(()=>{i||(o.onTriggerLeave(),g.current=!1)})),onClick:M(t.onClick,()=>{o.onItemSelect(c.value),w.current=N}),onKeyDown:M(t.onKeyDown,_=>{const b={horizontal:"ArrowDown",vertical:o.dir==="rtl"?"ArrowLeft":"ArrowRight"}[o.orientation];N&&_.key===b&&(c.onEntryKeyDown(),_.preventDefault())})})))),N&&n.createElement(n.Fragment,null,n.createElement(Se,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:_=>{const h=c.contentRef.current,b=_.relatedTarget,C=b===u.current,k=h?.contains(b);(C||!k)&&c.onFocusProxyEnter(C?"start":"end")}}),o.viewport&&n.createElement("span",{"aria-owns":d})))}),ne="navigationMenu.linkSelect",qe=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,active:i,onSelect:r,...o}=t;return n.createElement(fe,{asChild:!0},n.createElement(R.a,y({"data-active":i?"":void 0,"aria-current":i?"page":void 0},o,{ref:a,onClick:M(t.onClick,c=>{const u=c.target,l=new CustomEvent(ne,{bubbles:!0,cancelable:!0});if(u.addEventListener(ne,$=>r?.($),{once:!0}),ee(u,l),!l.defaultPrevented&&!c.metaKey){const $=new CustomEvent(z,{bubbles:!0,cancelable:!0});ee(u,$)}},{checkForDefaultPrevented:!1})})))}),ce="NavigationMenuIndicator",Je=n.forwardRef((t,a)=>{const{forceMount:s,...i}=t,r=I(ce,t.__scopeNavigationMenu),o=!!r.value;return r.indicatorTrack?ye.createPortal(n.createElement(G,{present:s||o},n.createElement(Qe,y({},i,{ref:a}))),r.indicatorTrack):null}),Qe=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,...i}=t,r=I(ce,s),o=ie(s),[c,u]=n.useState(null),[l,$]=n.useState(null),d=r.orientation==="horizontal",g=!!r.value;n.useEffect(()=>{var N;const h=(N=o().find(b=>b.value===r.value))===null||N===void 0?void 0:N.ref.current;h&&u(h)},[o,r.value]);const w=()=>{c&&$({size:d?c.offsetWidth:c.offsetHeight,offset:d?c.offsetLeft:c.offsetTop})};return X(c,w),X(r.indicatorTrack,w),l?n.createElement(R.div,y({"aria-hidden":!0,"data-state":g?"visible":"hidden","data-orientation":r.orientation},i,{ref:a,style:{position:"absolute",...d?{left:0,width:l.size+"px",transform:`translateX(${l.offset}px)`}:{top:0,height:l.size+"px",transform:`translateY(${l.offset}px)`},...i.style}})):null}),F="NavigationMenuContent",et=n.forwardRef((t,a)=>{const{forceMount:s,...i}=t,r=I(F,t.__scopeNavigationMenu),o=oe(F,t.__scopeNavigationMenu),c=A(o.contentRef,a),u=o.value===r.value,l={value:o.value,triggerRef:o.triggerRef,focusProxyRef:o.focusProxyRef,wasEscapeCloseRef:o.wasEscapeCloseRef,onContentFocusOutside:o.onContentFocusOutside,onRootContentClose:o.onRootContentClose,...i};return r.viewport?n.createElement(tt,y({forceMount:s},l,{ref:c})):n.createElement(G,{present:s||u},n.createElement(le,y({"data-state":Q(u)},l,{ref:c,onPointerEnter:M(t.onPointerEnter,r.onContentEnter),onPointerLeave:M(t.onPointerLeave,H(r.onContentLeave)),style:{pointerEvents:!u&&r.isRootMenu?"none":void 0,...l.style}})))}),tt=n.forwardRef((t,a)=>{const s=I(F,t.__scopeNavigationMenu),{onViewportContentChange:i,onViewportContentRemove:r}=s;return B(()=>{i(t.value,{ref:a,...t})},[t,a,i]),B(()=>()=>r(t.value),[t.value,r]),null}),z="navigationMenu.rootContentDismiss",le=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,value:i,triggerRef:r,focusProxyRef:o,wasEscapeCloseRef:c,onRootContentClose:u,onContentFocusOutside:l,...$}=t,d=I(F,s),g=n.useRef(null),w=A(g,a),N=ue(d.baseId,i),_=xe(d.baseId,i),h=ie(s),b=n.useRef(null),{onItemDismiss:C}=d;n.useEffect(()=>{const f=g.current;if(d.isRootMenu&&f){const x=()=>{var m;C(),u(),f.contains(document.activeElement)&&((m=r.current)===null||m===void 0||m.focus())};return f.addEventListener(z,x),()=>f.removeEventListener(z,x)}},[d.isRootMenu,t.value,r,C,u]);const k=n.useMemo(()=>{const x=h().map(L=>L.value);d.dir==="rtl"&&x.reverse();const m=x.indexOf(d.value),j=x.indexOf(d.previousValue),E=i===d.value,T=j===x.indexOf(i);if(!E&&!T)return b.current;const v=(()=>{if(m!==j){if(E&&j!==-1)return m>j?"from-end":"from-start";if(T&&m!==-1)return m>j?"to-start":"to-end"}return null})();return b.current=v,v},[d.previousValue,d.value,d.dir,h,i]);return n.createElement(me,{asChild:!0},n.createElement(Ie,y({id:_,"aria-labelledby":N,"data-motion":k,"data-orientation":d.orientation},$,{ref:w,onDismiss:()=>{var f;const x=new Event(z,{bubbles:!0,cancelable:!0});(f=g.current)===null||f===void 0||f.dispatchEvent(x)},onFocusOutside:M(t.onFocusOutside,f=>{var x;l();const m=f.target;(x=d.rootNavigationMenu)!==null&&x!==void 0&&x.contains(m)&&f.preventDefault()}),onPointerDownOutside:M(t.onPointerDownOutside,f=>{var x;const m=f.target,j=h().some(T=>{var v;return(v=T.ref.current)===null||v===void 0?void 0:v.contains(m)}),E=d.isRootMenu&&((x=d.viewport)===null||x===void 0?void 0:x.contains(m));(j||E||!d.isRootMenu)&&f.preventDefault()}),onKeyDown:M(t.onKeyDown,f=>{const x=f.altKey||f.ctrlKey||f.metaKey;if(f.key==="Tab"&&!x){const E=Z(f.currentTarget),T=document.activeElement,v=E.findIndex(we=>we===T),U=f.shiftKey?E.slice(0,v).reverse():E.slice(v+1,E.length);if(J(U))f.preventDefault();else{var j;(j=o.current)===null||j===void 0||j.focus()}}}),onEscapeKeyDown:M(t.onEscapeKeyDown,f=>{c.current=!0})})))}),de="NavigationMenuViewport",nt=n.forwardRef((t,a)=>{const{forceMount:s,...i}=t,o=!!I(de,t.__scopeNavigationMenu).value;return n.createElement(G,{present:s||o},n.createElement(at,y({},i,{ref:a})))}),at=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,children:i,...r}=t,o=I(de,s),c=A(a,o.onViewportChange),u=ze(F,t.__scopeNavigationMenu),[l,$]=n.useState(null),[d,g]=n.useState(null),w=l?l?.width+"px":void 0,N=l?l?.height+"px":void 0,_=!!o.value,h=_?o.value:o.previousValue;return X(d,()=>{d&&$({width:d.offsetWidth,height:d.offsetHeight})}),n.createElement(R.div,y({"data-state":Q(_),"data-orientation":o.orientation},r,{ref:c,style:{pointerEvents:!_&&o.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":w,"--radix-navigation-menu-viewport-height":N,...r.style},onPointerEnter:M(t.onPointerEnter,o.onContentEnter),onPointerLeave:M(t.onPointerLeave,H(o.onContentLeave))}),Array.from(u.items).map(([C,{ref:k,forceMount:f,...x}])=>{const m=h===C;return n.createElement(G,{key:C,present:f||m},n.createElement(le,y({},x,{ref:Ce(k,j=>{m&&j&&g(j)})})))}))}),st="FocusGroup",me=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,...i}=t,r=I(st,s);return n.createElement(W.Provider,{scope:s},n.createElement(W.Slot,{scope:s},n.createElement(R.div,y({dir:r.dir},i,{ref:a}))))}),ae=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],rt="FocusGroupItem",fe=n.forwardRef((t,a)=>{const{__scopeNavigationMenu:s,...i}=t,r=Fe(s),o=I(rt,s);return n.createElement(W.ItemSlot,{scope:s},n.createElement(R.button,y({},i,{ref:a,onKeyDown:M(t.onKeyDown,c=>{if(["Home","End",...ae].includes(c.key)){let l=r().map(g=>g.ref.current);if([o.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(c.key)&&l.reverse(),ae.includes(c.key)){const g=l.indexOf(c.currentTarget);l=l.slice(g+1)}setTimeout(()=>J(l)),c.preventDefault()}})})))});function Z(t){const a=[],s=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)a.push(s.currentNode);return a}function J(t){const a=document.activeElement;return t.some(s=>s===a?!0:(s.focus(),document.activeElement!==a))}function it(t){return t.forEach(a=>{a.dataset.tabindex=a.getAttribute("tabindex")||"",a.setAttribute("tabindex","-1")}),()=>{t.forEach(a=>{const s=a.dataset.tabindex;a.setAttribute("tabindex",s)})}}function X(t,a){const s=O(a);B(()=>{let i=0;if(t){const r=new ResizeObserver(()=>{cancelAnimationFrame(i),i=window.requestAnimationFrame(s)});return r.observe(t),()=>{window.cancelAnimationFrame(i),r.unobserve(t)}}},[t,s])}function Q(t){return t?"open":"closed"}function ue(t,a){return`${t}-trigger-${a}`}function xe(t,a){return`${t}-content-${a}`}function H(t){return a=>a.pointerType==="mouse"?t(a):void 0}const ve=He,he=Be,ot=Xe,pe=Ye,ct=qe,ge=Je,_e=et,Ne=nt,be=n.forwardRef(({className:t,children:a,...s},i)=>e.jsxs(ve,{ref:i,className:P("relative z-10 flex w-full flex-1 items-center justify-center",t),...s,children:[a,e.jsx($e,{})]}));be.displayName=ve.displayName;const je=n.forwardRef(({className:t,...a},s)=>e.jsx(he,{ref:s,className:P("flex gap-12 list-none items-center justify-center",t),...a}));je.displayName=he.displayName;const K=ot,lt=Te("group inline-flex h-9 w-max items-center  justify-center  bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),S=n.forwardRef(({className:t,children:a,...s},i)=>e.jsxs(pe,{ref:i,className:P(lt(),"group",t),...s,children:[a," "]}));S.displayName=pe.displayName;const D=n.forwardRef(({className:t,...a},s)=>e.jsx(_e,{ref:s,className:P("left-0 top-0  text-black  data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",t),...a}));D.displayName=_e.displayName;const dt=ct,$e=n.forwardRef(({className:t,...a},s)=>e.jsx("div",{className:P("absolute  bg-white w-[1320px]  -left-[50%] -z-50 -top-[40%] flex justify-center"),children:e.jsx(Ne,{className:P("origin-top-cente  relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden  bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",t),ref:s,...a})}));$e.displayName=Ne.displayName;const mt=n.forwardRef(({className:t,...a},s)=>e.jsx(ge,{ref:s,className:P("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",t),...a,children:e.jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 "})}));mt.displayName=ge.displayName;function ft(){return e.jsx(be,{children:e.jsxs(je,{children:[e.jsxs(K,{children:[e.jsx(S,{className:"text-font_Poppins",children:"Productos"}),e.jsx(D,{children:e.jsxs("ul",{className:" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap",children:[e.jsx(p,{className:"-ml-10 bg-transparent",href:"#",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo S"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:"link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md ",children:"Modelo X"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs/installation",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo L"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs/primitives/typography",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo M"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs/primitives/typography",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo SM"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs/primitives/typography",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo XL"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{href:"/docs/primitives/typography",children:e.jsxs("ul",{className:" border-l pl-10 h-[280px] justify-center  flex flex-col gap-5 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ",children:[e.jsx("li",{className:"relative text_link_lateral_inline",children:"Mas Vendidos"}),e.jsxs("li",{className:"relative text_link_lateral_inline",children:["Populares"," "]}),e.jsxs("li",{className:"relative text_link_lateral_inline",children:["Descuentos"," "]}),e.jsx("li",{className:"relative text_link_lateral_inline",children:"Productos nuevos"}),e.jsx("li",{className:"relative text_link_lateral_inline",children:"Recientes"}),e.jsx("li",{className:"relative text_link_lateral_inline",children:"Favoritos"})]})})]})})]}),e.jsxs(K,{children:[e.jsx(S,{className:"text-font_Poppins",children:"Accesorios"}),e.jsx(D,{children:e.jsxs("ul",{className:" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap",children:[e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs/primitives/typography",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo S"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md ",children:"Modelo X"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs/installation",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo L"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs/primitives/typography",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo M"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{href:"/docs/primitives/typography",children:e.jsxs("ul",{className:" border-l pl-10 h-[280px] justify-center  flex flex-col gap-8 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ",children:[e.jsx("li",{className:"relative text_link_lateral_inline",children:"Bolsos"}),e.jsxs("li",{className:"relative text_link_lateral_inline",children:["Carteras"," "]}),e.jsxs("li",{className:"relative text_link_lateral_inline",children:["Relojes"," "]}),e.jsx("li",{className:"relative text_link_lateral_inline",children:"Anillos"}),e.jsx("li",{className:"relative text_link_lateral_inline",children:"Tobilleras"})]})})]})})]}),e.jsxs(K,{children:[e.jsx(S,{className:"text-font_lemon",children:"sabata"}),e.jsx(D,{children:e.jsxs("ul",{className:" flex cursor-auto items-center relative justify-center pb-8 pt-20 w-[1100px]",children:[e.jsx(p,{className:"bg-transparent",href:"/es/shop/",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Tacones"})]})}),e.jsx(p,{className:"-ml-16 bg-transparent",href:"/es/shop/",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md ",children:"Faldas"})]})}),e.jsx(p,{className:"-ml-16 bg-transparent",href:"/es/shop/",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Pantalones"})]})}),e.jsx(p,{className:"-ml-16 bg-transparent",href:"/es/shop/",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Blusas"})]})}),e.jsx(p,{className:"-ml-16 bg-transparent",href:"/es/shop/",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Lencerias"})]})})]})})]}),e.jsxs(K,{children:[e.jsx(S,{className:"text-font_Poppins",children:"Ofertas"}),e.jsx(D,{children:e.jsxs("ul",{className:" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap",children:[e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs/primitives/typography",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo S"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md ",children:"Modelo X"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{className:"-ml-10 bg-transparent",href:"/docs/installation",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" w-[220px] h-[123px] ",children:e.jsx("img",{className:"w-full box_img_menu_items_navegation",src:"/img/Intro/tacones_nav_intro.png",alt:""})}),e.jsx("h2",{className:"font-medium text-md",children:"Modelo L"}),e.jsxs("div",{className:"flex gap-4 mt-2",children:[e.jsx("a",{href:"#",className:" link_visit_and_order_line text-sm  text-[#696969] hover:textbl ",children:"Visitar"}),e.jsx("a",{href:"#",className:"text-sm link_visit_and_order_line  text-[#696969] hover:textbl ",children:"Ordenar"})]})]})}),e.jsx(p,{href:"/docs/primitives/typography",children:e.jsxs("ul",{className:" border-l pl-10 h-[180px] justify-center  flex flex-col gap-4 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ",children:[e.jsx("li",{className:"relative text_link_lateral_inline",children:"Tacones"}),e.jsx("li",{className:"relative text_link_lateral_inline",children:"Faldas "}),e.jsxs("li",{className:"relative text_link_lateral_inline",children:["Pantalones"," "]}),e.jsx("li",{className:"relative text_link_lateral_inline",children:"Blusas"}),e.jsx("li",{className:"relative text_link_lateral_inline",children:"Lencerias"})]})})]})})]})]})})}const p=n.forwardRef(({className:t,title:a,children:s,...i},r)=>e.jsx("li",{children:e.jsx(dt,{asChild:!0,children:e.jsxs("a",{ref:r,className:P("block select-none bg-white space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",t),...i,children:[e.jsx("div",{className:"text-sm font-medium leading-none",children:a}),e.jsx("p",{className:"text-sm leading-snug line-clamp-2 text-muted-foreground",children:s})]})})}));p.displayName="ListItem";function ut({hover:t}){return e.jsx("a",{className:"cursor-pointer",href:"/es/shop/",children:e.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 3C0 2.58579 0.335787 2.25 0.75 2.25H3.408C3.71468 2.25 3.99046 2.43671 4.10436 2.72146L4.61578 4H21.523C22.2304 4 22.7142 4.71453 22.4514 5.37139L19.5029 12.7428C19.1992 13.5021 18.4637 14 17.6459 14H7.68142L6.32692 16.25H19.25C19.6642 16.25 20 16.5858 20 17C20 17.4142 19.6642 17.75 19.25 17.75H5C4.7296 17.75 4.48013 17.6044 4.34708 17.369C4.21403 17.1336 4.21799 16.8448 4.35745 16.6132L6.57309 12.9327L3 4H3.00023L2.90023 3.75H0.75C0.335786 3.75 0 3.41421 0 3ZM8.01578 12.5H17.6459C17.8504 12.5 18.0342 12.3755 18.1102 12.1857L20.7845 5.5H5.21578L8.01578 12.5Z",fill:t?"#000":"#fff"}),e.jsx("path",{d:"M7 20.75C7 21.5784 6.32843 22.25 5.5 22.25C4.67157 22.25 4 21.5784 4 20.75C4 19.9216 4.67157 19.25 5.5 19.25C6.32843 19.25 7 19.9216 7 20.75Z",fill:t?"#000":"#fff"}),e.jsx("path",{d:"M18.5 22.25C19.3284 22.25 20 21.5784 20 20.75C20 19.9216 19.3284 19.25 18.5 19.25C17.6716 19.25 17 19.9216 17 20.75C17 21.5784 17.6716 22.25 18.5 22.25Z",fill:t?"#000":"#fff"})]})})}function xt({hover:t}){return e.jsx("a",{href:"/es/auth/login","data-astro-prefetch":"tap",className:"cursor-pointer",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.06701 13.933 6.5 12 6.5C10.067 6.5 8.5 8.06701 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z",fill:t?"#fff":"#000"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.9776 21.9484C11.3137 21.9825 11.6548 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.4815 2.90389 16.752 4.4004 18.5C5.77451 20.105 7.64823 21.2696 9.78062 21.7528C10.1714 21.8414 10.5709 21.9071 10.9776 21.9484ZM17.4776 18.4999C16.0365 19.7156 14.1856 20.4608 12.1616 20.4985C12.1079 20.4995 12.054 20.5 12 20.5C11.9569 20.5 11.914 20.4997 11.8711 20.499C9.83437 20.4688 7.97122 19.7221 6.52238 18.4999C8.00263 17.2509 9.9131 16.5 12 16.5C14.0869 16.5 15.9973 17.2509 17.4776 18.4999ZM18.5375 17.4327C16.7845 15.9169 14.4993 15 12 15C9.50064 15 7.21545 15.9169 5.46245 17.4327C4.23701 15.9597 3.5 14.0659 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 14.0659 19.763 15.9597 18.5375 17.4327Z",fill:t?"#fff":"#000"})]})})}function vt({hover:t}){return e.jsx("div",{className:"flex items-center justify-center gap-2",children:e.jsxs("div",{className:"bg-white flex items-center gap-1 justify-center rounded-3xl h-[35px] w-[75px]",children:[e.jsx("div",{className:"flex items-center ml-1.5 justify-center",children:e.jsx(xt,{hover:t})}),e.jsx("div",{className:"flex items-center justify-center bg-black rounded-full w-[33px] h-[33px]",children:e.jsx(ut,{hover:t})})]})})}function It(){const[t,a]=n.useState(!1),s=n.useRef(null),i=()=>{s.current&&clearTimeout(s.current),s.current=window.setTimeout(()=>{a(!0)},210)},r=()=>{s.current&&clearTimeout(s.current),s.current=window.setTimeout(()=>a(!1),150)},o=()=>{s.current&&clearTimeout(s.current),a(!t)};return e.jsxs("nav",{style:{backgroundColor:t?"#fff":"transparent",color:t?"#000":"#fff"},className:"z-50 flex items-center justify-between px-10 py-2",children:[e.jsx(Le,{}),e.jsxs("ul",{className:"flex items-center justify-between gap-10 p-1",children:[e.jsx("div",{onMouseEnter:i,onMouseLeave:r,onClick:o,children:e.jsx(ft,{})}),e.jsx("a",{className:"z-50 text-sm text-font_Poppins",href:"/es/contact",children:"CONTACTO"})]}),e.jsx(vt,{hover:t})]})}export{It as default};
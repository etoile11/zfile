!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function t(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?e(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.80d3f8d7.js","./base-legacy.79a28316.js"],(function(e){"use strict";var n,o,r,c,s,a,l,i,u,f,p,b,g,y,d,m,k,v,O,j,h,w,P;return{setters:[function(e){n=e.d,o=e.c,r=e.a,c=e.f,s=e.m,a=e.i,l=e.g,i=e.u,u=e.b,f=e.e,p=e.j,b=e.h,g=e.k,y=e.n,d=e.T},function(e){m=e.b,k=e.aB,v=e.ac,O=e.a,j=e.i,h=e.E,w=e._,P=e.w}],execute:function(){var C=e("t",m({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:k,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean})),E={close:function(e){return e instanceof MouseEvent},click:function(e){return e instanceof MouseEvent}},S=n({name:"ElTag"}),_=n(t(t({},S),{},{props:C,emits:E,setup:function(e,t){var n=t.emit,m=e,k=v(),w=O("tag"),P=o((function(){var e=m.type,t=m.hit,n=m.effect,o=m.closable,r=m.round;return[w.b(),w.is("closable",o),w.m(e),w.m(k.value),w.m(n),w.is("hit",t),w.is("round",r)]})),C=function(e){n("close",e)},E=function(e){n("click",e)};return function(e,t){return e.disableTransitions?(r(),c("span",{key:0,class:l(i(P)),style:y({backgroundColor:e.color}),onClick:E},[s("span",{class:l(i(w).e("content"))},[a(e.$slots,"default")],2),e.closable?(r(),u(i(h),{key:0,class:l(i(w).e("close")),onClick:b(C,["stop"])},{default:f((function(){return[p(i(j))]})),_:1},8,["class","onClick"])):g("v-if",!0)],6)):(r(),u(d,{key:1,name:"".concat(i(w).namespace.value,"-zoom-in-center"),appear:""},{default:f((function(){return[s("span",{class:l(i(P)),style:y({backgroundColor:e.color}),onClick:E},[s("span",{class:l(i(w).e("content"))},[a(e.$slots,"default")],2),e.closable?(r(),u(i(h),{key:0,class:l(i(w).e("close")),onClick:b(C,["stop"])},{default:f((function(){return[p(i(j))]})),_:1},8,["class","onClick"])):g("v-if",!0)],6)]})),_:3},8,["name"]))}}}));e("E",P(w(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]])))}}}))}();
var A=Object.defineProperty,D=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var b=(l,t,a)=>t in l?A(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,g=(l,t)=>{for(var a in t||(t={}))M.call(t,a)&&b(l,a,t[a]);if(C)for(var a of C(t))O.call(t,a)&&b(l,a,t[a]);return l},h=(l,t)=>D(l,F(t));import{d as B,C as P,r as j,c as u,a as n,b as i,e as d,K as z,m as w,g as r,u as e,l as K,k as c,f as p,i as E,O as S,t as f,F as L,j as _,L as q,T as G}from"./index.965ac11d.js";import{b as H,aw as J,ax as N,ay as Q,a as R,E as T,_ as U,w as W}from"./base.b65bdcd1.js";const X=["light","dark"],Y=H({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:J(N),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:X,default:"light"}}),Z={close:l=>l instanceof MouseEvent},x=B({name:"ElAlert"}),ee=B(h(g({},x),{props:Y,emits:Z,setup(l,{emit:t}){const a=l,{Close:I}=Q,m=P(),o=R("alert"),y=j(!0),v=u(()=>N[a.type]),V=u(()=>[o.e("icon"),{[o.is("big")]:!!a.description||!!m.default}]),$=u(()=>({[o.is("bold")]:a.description||m.default})),k=s=>{y.value=!1,t("close",s)};return(s,te)=>(n(),i(G,{name:e(o).b("fade"),persisted:""},{default:d(()=>[z(w("div",{class:r([e(o).b(),e(o).m(s.type),e(o).is("center",s.center),e(o).is(s.effect)]),role:"alert"},[s.showIcon&&e(v)?(n(),i(e(T),{key:0,class:r(e(V))},{default:d(()=>[(n(),i(K(e(v))))]),_:1},8,["class"])):c("v-if",!0),w("div",{class:r(e(o).e("content"))},[s.title||s.$slots.title?(n(),p("span",{key:0,class:r([e(o).e("title"),e($)])},[E(s.$slots,"title",{},()=>[S(f(s.title),1)])],2)):c("v-if",!0),s.$slots.default||s.description?(n(),p("p",{key:1,class:r(e(o).e("description"))},[E(s.$slots,"default",{},()=>[S(f(s.description),1)])],2)):c("v-if",!0),s.closable?(n(),p(L,{key:2},[s.closeText?(n(),p("div",{key:0,class:r([e(o).e("close-btn"),e(o).is("customed")]),onClick:k},f(s.closeText),3)):(n(),i(e(T),{key:1,class:r(e(o).e("close-btn")),onClick:k},{default:d(()=>[_(e(I))]),_:1},8,["class"]))],64)):c("v-if",!0)],2)],2),[[q,y.value]])]),_:3},8,["name"]))}}));var se=U(ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const ne=W(se);export{ne as E};
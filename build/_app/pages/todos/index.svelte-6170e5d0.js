import{S as t,i as e,s as a,e as o,k as n,c as s,a as l,n as r,d as c,b as d,L as i,f as u,E as f,a0 as h,a1 as p,a2 as v,a3 as m,a4 as g,a5 as y,a6 as b,O as w,t as E,I as j,g as x,a7 as T,w as q,x as O,u as _,a8 as k,a9 as M,r as I,aa as N,G as U}from"../../chunks/vendor-f15099ed.js";function D(t,{pending:e,error:a,result:o}){let n;async function s(s){const l=n={};s.preventDefault();const r=new FormData(t);e&&e(r,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:r});if(l!==n)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(c){if(!a)throw c;a(null,c,t)}}return t.addEventListener("submit",s),{destroy(){t.removeEventListener("submit",s)}}}function F(t,e,a){const o=t.slice();return o[6]=e[a],o[7]=e,o[8]=a,o}function P(t,e){let a,E,j,x,T,q,O,_,I,N,F,P,R,B,L,S,V,$,A,C,G,H,z,J,K,Q,W,X=U;function Y(...t){return e[3](e[6],e[7],e[8],...t)}function Z(){return e[4](e[6])}return{key:t,first:null,c(){a=o("div"),E=o("form"),j=o("input"),T=n(),q=o("button"),N=n(),F=o("form"),P=o("input"),B=n(),L=o("button"),V=n(),$=o("form"),A=o("button"),H=n(),this.h()},l(t){a=s(t,"DIV",{class:!0});var e=l(a);E=s(e,"FORM",{action:!0,method:!0});var o=l(E);j=s(o,"INPUT",{type:!0,name:!0,class:!0}),T=r(o),q=s(o,"BUTTON",{class:!0,"aria-label":!0}),l(q).forEach(c),o.forEach(c),N=r(e),F=s(e,"FORM",{class:!0,action:!0,method:!0});var n=l(F);P=s(n,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),B=r(n),L=s(n,"BUTTON",{class:!0,"aria-label":!0}),l(L).forEach(c),n.forEach(c),V=r(e),$=s(e,"FORM",{action:!0,method:!0});var d=l($);A=s(d,"BUTTON",{class:!0,"aria-label":!0}),l(A).forEach(c),d.forEach(c),H=r(e),e.forEach(c),this.h()},h(){d(j,"type","hidden"),d(j,"name","done"),j.value=x=e[6].done?"":"true",d(j,"class","svelte-6t0qfp"),d(q,"class","toggle svelte-6t0qfp"),d(q,"aria-label",O="Mark todo as "+(e[6].done?"not done":"done")),d(E,"action",_="/todos/"+e[6].uid+".json?_method=patch"),d(E,"method","post"),d(P,"aria-label","Edit todo"),d(P,"type","text"),d(P,"name","text"),P.value=R=e[6].text,d(P,"class","svelte-6t0qfp"),d(L,"class","save svelte-6t0qfp"),d(L,"aria-label","Save todo"),d(F,"class","text svelte-6t0qfp"),d(F,"action",S="/todos/"+e[6].uid+".json?_method=patch"),d(F,"method","post"),d(A,"class","delete svelte-6t0qfp"),d(A,"aria-label","Delete todo"),d($,"action",C="/todos/"+e[6].uid+".json?_method=delete"),d($,"method","post"),d(a,"class","todo svelte-6t0qfp"),i(a,"done",e[6].done),this.first=a},m(t,o){u(t,a,o),f(a,E),f(E,j),f(E,T),f(E,q),f(a,N),f(a,F),f(F,P),f(F,B),f(F,L),f(a,V),f(a,$),f($,A),f(a,H),K=!0,Q||(W=[h(I=D.call(null,E,{pending:Y,result:e[1]})),h(D.call(null,F,{result:e[1]})),h(G=D.call(null,$,{result:Z}))],Q=!0)},p(t,o){e=t,(!K||1&o&&x!==(x=e[6].done?"":"true"))&&(j.value=x),(!K||1&o&&O!==(O="Mark todo as "+(e[6].done?"not done":"done")))&&d(q,"aria-label",O),(!K||1&o&&_!==(_="/todos/"+e[6].uid+".json?_method=patch"))&&d(E,"action",_),I&&p(I.update)&&1&o&&I.update.call(null,{pending:Y,result:e[1]}),(!K||1&o&&R!==(R=e[6].text)&&P.value!==R)&&(P.value=R),(!K||1&o&&S!==(S="/todos/"+e[6].uid+".json?_method=patch"))&&d(F,"action",S),(!K||1&o&&C!==(C="/todos/"+e[6].uid+".json?_method=delete"))&&d($,"action",C),G&&p(G.update)&&1&o&&G.update.call(null,{result:Z}),1&o&&i(a,"done",e[6].done)},r(){J=a.getBoundingClientRect()},f(){v(a),X(),m(a,J)},a(){X(),X=g(a,J,k,{duration:200})},i(t){K||(t&&y((()=>{z||(z=b(a,M,{start:.7},!0)),z.run(1)})),K=!0)},o(t){t&&(z||(z=b(a,M,{start:.7},!1)),z.run(0)),K=!1},d(t){t&&c(a),t&&z&&z.end(),Q=!1,w(W)}}}function R(t){let e,a,i,v,m,g,y,b,w,k,M,U,R=[],B=new Map,L=t[0];const S=t=>t[6].uid;for(let o=0;o<L.length;o+=1){let e=F(t,L,o),a=S(e);B.set(a,R[o]=P(a,e))}return{c(){e=n(),a=o("div"),i=o("h1"),v=E("Todos"),m=n(),g=o("form"),y=o("input"),w=n();for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){j('[data-svelte="svelte-181o7gf"]',document.head).forEach(c),e=r(t),a=s(t,"DIV",{class:!0});var o=l(a);i=s(o,"H1",{});var n=l(i);v=x(n,"Todos"),n.forEach(c),m=r(o),g=s(o,"FORM",{class:!0,action:!0,method:!0});var d=l(g);y=s(d,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),d.forEach(c),w=r(o);for(let e=0;e<R.length;e+=1)R[e].l(o);o.forEach(c),this.h()},h(){document.title="Todos",d(y,"name","text"),d(y,"aria-label","Add todo"),d(y,"placeholder","+ tap to add a todo"),d(y,"class","svelte-6t0qfp"),d(g,"class","new svelte-6t0qfp"),d(g,"action","/todos.json"),d(g,"method","post"),d(a,"class","todos svelte-6t0qfp")},m(o,n){u(o,e,n),u(o,a,n),f(a,i),f(i,v),f(a,m),f(a,g),f(g,y),f(a,w);for(let t=0;t<R.length;t+=1)R[t].m(a,null);k=!0,M||(U=h(b=D.call(null,g,{result:t[2]})),M=!0)},p(t,[e]){if(b&&p(b.update)&&1&e&&b.update.call(null,{result:t[2]}),3&e){L=t[0],I();for(let t=0;t<R.length;t+=1)R[t].r();R=T(R,e,S,1,t,L,B,a,N,P,null,F);for(let t=0;t<R.length;t+=1)R[t].a();q()}},i(t){if(!k){for(let t=0;t<L.length;t+=1)O(R[t]);k=!0}},o(t){for(let e=0;e<R.length;e+=1)_(R[e]);k=!1},d(t){t&&c(e),t&&c(a);for(let e=0;e<R.length;e+=1)R[e].d();M=!1,U()}}}var B=function(t,e,a,o){return new(a||(a=Promise))((function(n,s){function l(t){try{c(o.next(t))}catch(e){s(e)}}function r(t){try{c(o.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(l,r)}c((o=o.apply(t,e||[])).next())}))};const L=({fetch:t})=>B(void 0,void 0,void 0,(function*(){const e=yield t("/todos.json");if(e.ok){return{props:{todos:yield e.json()}}}const{message:a}=yield e.json();return{error:new Error(a)}}));function S(t,e,a){var o=this&&this.__awaiter||function(t,e,a,o){return new(a||(a=Promise))((function(n,s){function l(t){try{c(o.next(t))}catch(e){s(e)}}function r(t){try{c(o.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(l,r)}c((o=o.apply(t,e||[])).next())}))};let{todos:n}=e;return t.$$set=t=>{"todos"in t&&a(0,n=t.todos)},[n,function(t){return o(this,void 0,void 0,(function*(){const e=yield t.json();a(0,n=n.map((t=>t.uid===e.uid?e:t)))}))},async(t,e)=>{const o=await t.json();a(0,n=[...n,o]),e.reset()},(t,e,o,s)=>{a(0,e[o].done=!!s.get("done"),n)},t=>{a(0,n=n.filter((e=>e.uid!==t.uid)))}]}class V extends t{constructor(t){super(),e(this,t,S,R,a,{todos:0})}}export{V as default,L as load};
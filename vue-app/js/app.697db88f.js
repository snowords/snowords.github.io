(function(t){function e(e){for(var o,r,i=e[0],u=e[1],s=e[2],d=0,l=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);f&&f(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},c={app:0},a=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-14b9d315":"64d86bd8"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-14b9d315":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-14b9d315":"bce85c18"}[t]+".css",c=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===c))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===o||d===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],f.parentNode.removeChild(f),n(a)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}c[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0344":function(t,e,n){"use strict";var o=n("0f52"),r=n.n(o);r.a},"0f52":function(t,e,n){},"2f74":function(t,e,n){"use strict";var o=n("5bb8"),r=n.n(o);r.a},"4d55":function(t,e,n){"use strict";var o=n("c3c9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},c=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",[t._v("待办事项")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("主页")]),n("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1)])},i=[],u={name:"Header",props:{msg:String},data:function(){return{}}},s=u,d=(n("2f74"),n("2877")),l=Object(d["a"])(s,a,i,!1,null,"72293ca0",null),f=l.exports,m={name:"app",components:{Header:f}},p=m,h=Object(d["a"])(p,r,c,!1,null,null,null),v=h.exports,b=n("2f62"),g={count:0},y={count:function(t){return t.count}},_={incrementcount:function(t){t.count++},decrementcount:function(t,e){t.count-=e.amount}},j={incrementcountasync:function(t){var e=t.commit;setTimeout((function(){e("incrementcount")}),2e3)},decrementcountasync:function(t,e){var n=t.commit;setTimeout((function(){n("decrementcount",e)}),500)}},w={state:g,getters:y,mutations:_,actions:j},O=(n("4de4"),n("7db0"),n("96cf"),n("89ba")),k=n("bc3a"),T=n.n(k),x={todos:[{id:1,title:"todo item 1",done:!0},{id:2,title:"todo item 2",done:!1},{id:3,title:"todo item 3",done:!0}]},E={donetodos:function(t){return t.todos.filter((function(t){return t.done}))},donetodoscount:function(t,e){return e.donetodos.length},gettodobyid:function(t){return function(e){return t.todos.find((function(t){return t.id===e}))}}},A={setTodos:function(t,e){return t.todos=e}},C={fetchTodos:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(e){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,T.a.get("http://jsonplaceholder.typicode.com/todos");case 3:o=t.sent,console.log(o),n("donetodos",o.data);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},S={state:x,getters:E,mutations:A,actions:C};o["a"].use(b["a"]);var $=new b["a"].Store({modules:{count:w,todos:S}}),P=(n("d3b7"),n("8c4f")),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("AddTodo",{on:{handleAdd:t.handleAdd}}),n("hello-todos",{attrs:{todos123:t.todos},on:{handleDelete:t.handleDelete}})],1)},H=[],N=(n("99af"),n("284c")),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("p",[t._v(t._s(t.msg)+t._s(t.commit))])])},L=[],M={name:"HelloWorld",props:{msg:String},data:function(){return{commit:"(来自子组件)"}}},B=M,q=Object(d["a"])(B,I,L,!1,null,"934ced32",null),J=q.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.todos123,(function(e,o){return n("div",{key:o},[n("TodoItem",{attrs:{todo234:e},on:{deleteItem345:function(n){return t.$emit("handleDelete",e.id)}}})],1)})),n("p",[t._v(t._s(t.todomsg))])],2)},W=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item",class:{"is-complete":t.todo234.completed}},[n("p",[n("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo234.title)+" "),n("button",{staticClass:"del",on:{click:function(e){return t.$emit("deleteItem345",t.todo234.id)}}},[t._v("X")])])])},K=[],U={name:"Todo",props:["todo234"],methods:{markComplete:function(){this.todo234.completed=!this.todo234.completed}}},X=U,z=(n("0344"),Object(d["a"])(X,F,K,!1,null,"656cc011",null)),G=z.exports,Q={name:"todos",props:{todos123:{type:Array}},data:function(){return{todomsg:"from---自定义组件 hello todos"}},components:{TodoItem:G},methods:{}},V=Q,Y=(n("c0ee"),Object(d["a"])(V,R,W,!1,null,"db9d4db8",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请添加代办事项..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("input",{staticClass:"btn",attrs:{type:"submit",value:"添加"}})])])},et=[],nt={name:"AddTodo",methods:{addTodo:function(){if(console.log(this.title),this.title){var t={title:this.title,campleted:!1};this.$emit("handleAdd",t)}this.title=""}},data:function(){return{title:""}}},ot=nt,rt=(n("4d55"),Object(d["a"])(ot,tt,et,!1,null,"e0634032",null)),ct=rt.exports,at={name:"home",methods:{handleDelete:function(t){var e=this;console.log(t),T.a.delete("https://jsonplaceholder.typicode.com/todos/${id}").then((function(n){return e.todos=e.todos.filter((function(e){return e.id!==t}))})).catch((function(t){return console.log(t)}))},handleAdd:function(t){var e=this,n=t.title,o=t.completed;T.a.post("https://jsonplaceholder.typicode.com/todos",{title:n,completed:o}).then((function(t){return e.todos=[t.data].concat(Object(N["a"])(e.todos))})).catch((function(t){return console.log(t)}))}},created:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=100").then((function(e){return t.todos=e.data})).catch((function(t){return console.log(t)}))},data:function(){return{msg:"Hello world .",commit0:"(来自根组件)",todos:[]}},components:{HelloWorld:J,"hello-todos":Z,AddTodo:ct}},it=at,ut=(n("cccb"),Object(d["a"])(it,D,H,!1,null,null,null)),st=ut.exports;o["a"].use(P["a"]);var dt=new P["a"]({mode:"history",base:"/",routes:[{path:"",name:"home",component:st},{path:"/about",name:"about",component:function(){return n.e("chunk-14b9d315").then(n.bind(null,"f820"))}}]});o["a"].config.productionTip=!1,new o["a"]({store:$,router:dt,render:function(t){return t(v)}}).$mount("#app")},"5bb8":function(t,e,n){},"5ced":function(t,e,n){},c0ee:function(t,e,n){"use strict";var o=n("e6f2"),r=n.n(o);r.a},c3c9:function(t,e,n){},cccb:function(t,e,n){"use strict";var o=n("5ced"),r=n.n(o);r.a},e6f2:function(t,e,n){}});
//# sourceMappingURL=app.697db88f.js.map
(function(t){function e(e){for(var r,a,s=e[0],i=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},c={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/TodoAppVue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4eab":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"app"};function o(t,e,n,o,a,s){var i=Object(r["j"])("noteapp");return Object(r["f"])(),Object(r["c"])("div",c,[Object(r["e"])(i)])}n("a4d3"),n("e01a");var a=function(t){return Object(r["h"])("data-v-7b739ab2"),t=t(),Object(r["g"])(),t},s={class:"todoApp"},i=a((function(){return Object(r["d"])("h1",null,"To-Do-List Application",-1)})),u={class:"formCont"},d={class:"taskForm"},l=a((function(){return Object(r["d"])("h3",null,"New Task",-1)})),f=a((function(){return Object(r["d"])("input",{class:"taskInput",type:"text",placeholder:"Name of Task",name:"task"},null,-1)})),p=a((function(){return Object(r["d"])("h3",null,"Task Description",-1)})),b=a((function(){return Object(r["d"])("textarea",{class:"descInput",type:"text",placeholder:"Description",name:"description"},null,-1)})),O=a((function(){return Object(r["d"])("h1",null,"Things to Get Done",-1)})),h=a((function(){return Object(r["d"])("hr",{size:"5"},null,-1)})),j={class:"outerCont"},k={class:"container"},v={class:"taskContainer"},m={class:"taskTitle"},y={class:"taskDesc"},g=["onClick"];function T(t,e,n,c,o,a){return Object(r["f"])(),Object(r["c"])("div",s,[i,Object(r["d"])("div",u,[Object(r["d"])("div",d,[l,f,p,b,Object(r["d"])("button",{onClick:e[0]||(e[0]=function(){return a.addTask&&a.addTask.apply(a,arguments)})},"Add Task")])]),O,h,Object(r["d"])("div",j,[Object(r["d"])("div",k,[Object(r["d"])("div",v,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(o.chores,(function(t,e){return Object(r["f"])(),Object(r["c"])("div",{key:e,class:"taskList"},[Object(r["d"])("div",m,[Object(r["d"])("h3",null,Object(r["k"])(t.task),1)]),Object(r["d"])("div",y,[Object(r["d"])("p",null,Object(r["k"])(t.description),1)]),Object(r["d"])("button",{onClick:function(t){return a.removeTask(e,1)},class:"delete"},"×",8,g)])})),128))])])])])}n("a434");var w={data:function(){return{chores:[{task:"Pick up groceries",description:"need to buy ingredients for dinner, and food for kids lunches"},{task:"Work Out With friend",description:"Meet James at the gym at 1:00 PM to workout. Work on Strength training"},{task:"Car needs fixing",description:"Wheels need to be adjusted"},{task:"Go to Laura's dance recital",description:"Don't forget Laura's dance recital at 6 PM. I'm so excited."}],colors:["#ff7eb9","#ff65a3","#7afcff\t","#feff9c\t","#fff740"]}},methods:{addTask:function(){this.chores.push({task:document.querySelector("input[name=task]").value,description:document.querySelector("textarea[name=description]").value}),this.chores.task=" ",this.chores.description=" "},removeTask:function(t){this.chores.splice(t,1)}}},x=(n("c7b8"),n("6b0d")),P=n.n(x);const S=P()(w,[["render",T],["__scopeId","data-v-7b739ab2"]]);var _=S,C={name:"App",components:{noteapp:_},data:function(){return{chores:[]}},methods:{}};n("e038");const M=P()(C,[["render",o]]);var D=M;Object(r["b"])(D).mount("#app")},a3bb:function(t,e,n){},c7b8:function(t,e,n){"use strict";n("4eab")},e038:function(t,e,n){"use strict";n("a3bb")}});
//# sourceMappingURL=app.9a2e964c.js.map
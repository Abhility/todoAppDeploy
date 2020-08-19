(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),s=a(2),o=a(4),i=a(3),m=a(8),u=a.n(m);function d(e){var t=e.data,a=e.deleteItem,n=e.alterItem;return c.a.createElement("li",{className:"collection-item hoverable todo-item"},c.a.createElement("div",{className:"todo"},c.a.createElement("section",null,c.a.createElement("h5",{style:{textDecoration:t.done?"line-through":"none"}},t.name,c.a.createElement(u.a,{textAsButton:!0,displayText:c.a.createElement("i",{className:"material-icons teal-text"},"volume_up"),className:"chip",style:{background:"transparent"},rate:"1.3",text:t.name,lang:"EN-US"})),c.a.createElement("p",{className:"grey-text chip todo-date"},c.a.createElement("span",{className:"teal-text"},"Added On : "),t.date.toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}))),c.a.createElement("section",{className:"todo-actions"},t.loading?c.a.createElement("img",{src:"../loader.gif",alt:"loading...",height:"50px",width:"50px"}):c.a.createElement(c.a.Fragment,null,t.done?c.a.createElement("a",{className:"secondary-content waves-effect",style:{margin:"0px 20px"},onClick:n.bind(null,t.id)},c.a.createElement("i",{className:"material-icons red-text"},"clear")):c.a.createElement("a",{className:"secondary-content waves-effect",style:{margin:"0px 20px"},onClick:n.bind(null,t.id)},c.a.createElement("i",{className:"material-icons teal-text"},"done")),c.a.createElement("a",{className:"secondary-content waves-effect",onClick:a.bind(null,t.id)},c.a.createElement("i",{className:"material-icons red-text"},"delete"))))))}function f(e){var t=e.todos,a=e.deleteItem,n=e.alterItem,l=e.loading,r=t.map((function(e){return c.a.createElement(d,{key:e.id,data:e,deleteItem:a,alterItem:n})}));return c.a.createElement("ul",{className:"collection"},l&&c.a.createElement("li",{className:"collection-item loader"},c.a.createElement("img",{src:"../spin.gif",alt:"loading...",height:"100px",width:"100px"})),r)}function h(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),m=Object(i.a)(r,2),u=m[0],d=m[1],h=Object(n.useState)(!1),p=Object(i.a)(h,2),E=p[0],v=p[1],b=Object(n.useState)(""),g=Object(i.a)(b,2),N=g[0],x=g[1],w="https://abhility-fakedb.glitch.me/todos",L=Object(n.useRef)(null),y=Object(n.useRef)(null),j=Object(n.useRef)(null),O=Object(n.useRef)(null),k=Object(n.useRef)(null),S=function(e){v(e),fetch(w).then((function(e){return e.json()})).then((function(e){v(!1),e=(e=e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{loading:!1,name:e.name.toLowerCase(),date:new Date(e.date)})}))).reverse(),Array.isArray(e)?l((function(t){return d(e),e})):l([])})).catch((function(e){v(!1),console.log(e)}))};Object(n.useEffect)((function(){S(!0),C()}),[]);var C=function(){L.current.classList.add("white-text"),L.current.classList.add("teal"),y.current.classList.remove("white-text"),y.current.classList.remove("teal");var e=a.sort((function(e,t){return e.date>t.date?-1:e.date<t.date?1:0}));l((function(t){return Object(s.a)(e)}))};return c.a.createElement("div",{style:{margin:"25px auto"}},c.a.createElement("form",{className:"container row",onSubmit:function(e){e.preventDefault(),v(!0);var t={name:N,date:Date.now(),done:!1};x(""),fetch(w,{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){S(!0),C()})).catch((function(e){v(!1),console.log(e)}))}},c.a.createElement("div",{className:"input-field col s8 l8 m8"},c.a.createElement("input",{id:"input",type:"text",name:"item",value:N,onChange:function(e){var t=e.target.value;x(t)},className:"validate",required:!0}),c.a.createElement("label",{htmlFor:"input"},"Type here")),c.a.createElement("div",{className:"input-field col s4 l4 m4"},c.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light hoverable pulse"},c.a.createElement("i",{className:"material-icons"},"edit")))),c.a.createElement("div",{className:"actions container row"},c.a.createElement("span",{className:"chip col s8 l2 orange white-text action-label"},c.a.createElement("i",{className:"material-icons"},"sort"),"Sort By"),c.a.createElement("span",{className:"col s0 l4"}),c.a.createElement("span",{className:"chip col s8 l2 action-button",ref:y,onClick:function(){y.current.classList.add("white-text"),y.current.classList.add("teal"),L.current.classList.remove("white-text"),L.current.classList.remove("teal");var e=a.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));l((function(t){return Object(s.a)(e)}))}},"Alphabetically"),c.a.createElement("span",{className:"col s0 l2"}),c.a.createElement("span",{className:"chip col s8 l2 action-button",ref:L,onClick:C},"Added Date")),c.a.createElement("div",{className:"actions container row"},c.a.createElement("span",{className:"chip col s8 l2 green white-text action-label"},c.a.createElement("i",{className:"material-icons"},"photo_filter"),"Filter By"),c.a.createElement("span",{className:"col s0 l2"}),c.a.createElement("span",{className:"chip col s8 l2 action-button",ref:j,onClick:function(){d(a),j.current.classList.add("white-text"),j.current.classList.add("teal"),O.current.classList.remove("white-text"),O.current.classList.remove("teal"),k.current.classList.remove("white-text"),k.current.classList.remove("teal");var e=u.filter((function(e){return e.done}));l((function(t){return Object(s.a)(e)}))}},"Completed"),c.a.createElement("span",{className:"chip col s8 l2 action-button",ref:O,onClick:function(){d(a),O.current.classList.add("white-text"),O.current.classList.add("teal"),j.current.classList.remove("white-text"),j.current.classList.remove("teal"),k.current.classList.remove("white-text"),k.current.classList.remove("teal");var e=u.filter((function(e){return!e.done}));l((function(t){return Object(s.a)(e)}))}},"Inprogress"),c.a.createElement("span",{className:"chip col s8 l2 action-button",ref:k,onClick:function(){O.current.classList.remove("white-text"),O.current.classList.remove("teal"),j.current.classList.remove("white-text"),j.current.classList.remove("teal"),k.current.classList.add("white-text"),k.current.classList.add("teal"),S()}},"All")),c.a.createElement("div",{className:"container row"},c.a.createElement(f,{todos:a,deleteItem:function(e){var t=a.map((function(t){return t.id===e&&(t.loading=!0),t}));l(t),fetch("".concat(w,"/").concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){S(!1)})).catch((function(e){console.log(e)}))},alterItem:function(e){var t=a.map((function(t){return t.id===e&&(t.loading=!0),t}));l(t);var n=a.find((function(t){return t.id===e}));n=Object(o.a)(Object(o.a)({},n),{},{done:!n.done}),fetch("".concat(w,"/").concat(e),{method:"PUT",body:JSON.stringify(n),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){S(!1)})).catch((function(e){console.log(e)}))},loading:E})))}var p=function(){return c.a.createElement("div",{className:" container header"},c.a.createElement("h2",{className:"container teal-text"},"TodoList App"),c.a.createElement(h,null))};r.a.render(c.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.08eb2d12.chunk.js.map
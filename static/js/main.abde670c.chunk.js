(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(5),o=n.n(i),c=(n(19),n(11)),s=n(6),l=n(7),u=n(12),m=n(8),d=n(13),p=(n(20),n(21),n(9));var f=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(p.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,t)},h=n(2),v=n(10);h.b.add(v.a);var k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){n.setState({currentItem:{text:e.target.value,key:Date.now()}})},n.addItem=function(e){e.preventDefault();var t=n.state.currentItem;if(console.log(t),""!==t.text){var a=[].concat(Object(c.a)(n.state.items),[t]);n.setState({items:a,currentItem:{text:"",key:""}})}},n.deleteItem=function(e){var t=n.state.items.filter((function(t){return t.key!==e}));n.setState({items:t})},n.setUpdate=function(e,t){var a=n.state.items;a.map((function(n){n.key===t&&(n.text=e)})),n.setState({items:a})},n.state={items:[],currentItem:{text:"",key:""}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter TODO",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.abde670c.chunk.js.map
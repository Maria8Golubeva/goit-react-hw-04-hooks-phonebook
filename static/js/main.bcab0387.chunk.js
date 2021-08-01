(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={filterLabel:"styles_filterLabel__h8G3F",filterInput:"styles_filterInput__1g5j1"}},12:function(e,t,n){e.exports={contactsList:"styles_contactsList__3G5lL"}},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(11),c=n.n(s),o=(n(18),n(13)),l=n(3),i=n(2),u=n.n(i),m=n(12),b=n.n(m),f=n(0);var j=function(e){var t=e.children;return Object(f.jsx)("ul",{className:b.a.contactsList,children:t})},d=n(4),p=n.n(d);var h=function(e){var t=e.sendData,n=Object(a.useState)(""),r=Object(l.a)(n,2),s=r[0],c=r[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],b=i[1],j=function(e){switch(e.target.name){case"name":c(e.target.value);break;case"number":b(e.target.value);break;default:return}},d=function(){c(""),b("")},h=u.a.generate(),O=u.a.generate();return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:s,number:m}),d()},children:[Object(f.jsxs)("label",{className:p.a.formLabel,htmlFor:h,children:["Name",Object(f.jsx)("input",{id:h,className:p.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:j,value:s,required:!0})]}),Object(f.jsxs)("label",{className:p.a.formLabel,htmlFor:O,children:["Number",Object(f.jsx)("input",{id:O,className:p.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:j,value:m,required:!0})]}),Object(f.jsx)("button",{className:p.a.submitBtn,type:"submit",children:"Add Contact"})]})},O=n(10),v=n.n(O);function x(e){var t=e.onChange,n=e.value;var a=u.a.generate();return Object(f.jsxs)("label",{className:v.a.filterLabel,htmlFor:a,children:["Search",Object(f.jsx)("input",{id:a,className:v.a.filterInput,type:"text",name:"filter",value:n,onChange:function(e){t(e.target.value)}})]})}x.defaultProps={value:""};var _=x,g=n(8),C=n.n(g);var N=function(e){var t=e.contacts,n=e.onClick;return t.map((function(e){return Object(f.jsxs)("li",{className:C.a.listItem,children:[Object(f.jsxs)("p",{className:C.a.itemText,children:[e.name,": ",e.number]}),Object(f.jsx)("button",{className:C.a.deleteBtn,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))};var y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),c=Object(l.a)(s,2),i=c[0],m=c[1];Object(a.useEffect)((function(){if(localStorage.contacts){var e=JSON.parse(localStorage.getItem("contacts"));r(e)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var b=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(h,{sendData:function(e){if(n.map((function(e){return e.name.toLowerCase()})).find((function(t){return t===e.name.toLowerCase()})))return alert("please change name");var t={id:u.a.generate(),name:e.name,number:e.number};r((function(e){return[].concat(Object(o.a)(e),[t])}))}}),Object(f.jsx)(_,{onChange:function(e){m(e)},value:i}),Object(f.jsx)(j,{children:Object(f.jsx)(N,{contacts:b,onClick:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}})})]})};n(28);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={submitBtn:"styles_submitBtn__14ji9",formLabel:"styles_formLabel__1peuN",formInput:"styles_formInput__2UuCC"}},8:function(e,t,n){e.exports={listItem:"styles_listItem__dsv5a",itemText:"styles_itemText__1DKSl",deleteBtn:"styles_deleteBtn__1TEkP"}}},[[29,1,2]]]);
//# sourceMappingURL=main.bcab0387.chunk.js.map
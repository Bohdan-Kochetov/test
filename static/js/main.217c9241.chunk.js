(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(7),a=c.n(r),u=c(3),o=c(5),s=c(14),i=c(13),d=c(11),l=c(2),j=c(4),b={product:[],productToRender:[],select:"select",productId:0,add:!1};function p(){return function(e){return(t="product",fetch("".concat("http://localhost:3000/").concat(t)).then((function(e){if(!e.ok)throw new Error;return e.json()}))).then((function(t){return e({type:"productSuccess",product:t})}));var t}}function h(e,t){var c=Object(j.a)(t,6),n=c[0],r=c[1],a=c[2],u=c[3];return{id:e+1,name:n,imageUrl:r,count:a,size:{width:c[4],height:c[5]},weight:"".concat(u,"g"),comments:[]}}var O=Object(o.combineReducers)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"productSuccess":return Object(l.a)(Object(l.a)({},e),{},{product:t.product,productToRender:t.product});case"filterByCount":return Object(l.a)(Object(l.a)({},e),{},{productToRender:e.product.sort((function(e,t){return e.count-t.count}))});case"filterByAlphabet":return Object(l.a)(Object(l.a)({},e),{},{productToRender:e.product.sort((function(e,t){return e.name.localeCompare(t.name)}))});case"alphabetically":return Object(l.a)(Object(l.a)({},e),{},{select:"alphabetically"});case"count":return Object(l.a)(Object(l.a)({},e),{},{select:"count"});case"select":return Object(l.a)(Object(l.a)({},e),{},{select:"select"});case"choosenProduct":return Object(l.a)(Object(l.a)({},e),{},{productId:t.productId});case"add":return Object(l.a)(Object(l.a)({},e),{},{add:!e.add});case"delete":return Object(l.a)(Object(l.a)({},e),{},{product:e.product.filter((function(e){return e.id!==t.id})),productToRender:e.product.filter((function(e){return e.id!==t.id}))});case"addProduct":return Object(l.a)(Object(l.a)({},e),{},{product:[].concat(Object(d.a)(e.product),[h(e.product.length,t.details)]),productToRender:[].concat(Object(d.a)(e.product),[h(e.product.length,t.details)])});default:return e}}}),m=Object(o.createStore)(O,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(s.a))),x=c(0),g=function(){var e=Object(u.c)((function(e){return e.reducer})),t=e.productToRender,c=e.productId,n=t[c-1].size,r=n.width,a=n.height,o=t[c-1],s=o.name,i=o.id,d=o.count,l=o.weight;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Details of Product"}),Object(x.jsx)("div",{className:"list-group-item",children:"Name: ".concat(s)}),Object(x.jsx)("div",{className:"list-group-item",children:"ID: ".concat(i)}),Object(x.jsx)("div",{className:"list-group-item",children:"Count: ".concat(d)}),Object(x.jsx)("div",{className:"list-group-item",children:"Size: width-".concat(r,", height-").concat(a)}),Object(x.jsx)("div",{className:"list-group-item",children:"Weight: ".concat(l)})]})},f=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),o=Object(j.a)(a,2),s=o[0],i=o[1],d=Object(n.useState)(0),l=Object(j.a)(d,2),b=l[0],p=l[1],h=Object(n.useState)(0),O=Object(j.a)(h,2),m=O[0],g=O[1],f=Object(n.useState)(0),v=Object(j.a)(f,2),y=v[0],N=v[1],C=Object(n.useState)(0),w=Object(j.a)(C,2),S=w[0],I=w[1],R=Object(u.b)();return Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:"input",children:[Object(x.jsxs)("div",{className:"input-group mb-3",children:[Object(x.jsx)("span",{className:"input-group-text",children:"Name"})," ",Object(x.jsx)("input",{required:!0,type:"text",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(x.jsxs)("div",{className:"input-group mb-3",children:[Object(x.jsx)("span",{className:"input-group-text",children:"Url"}),Object(x.jsx)("input",{required:!0,type:"text",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(x.jsxs)("div",{className:"input-group mb-3",children:[Object(x.jsx)("span",{className:"input-group-text",children:"Count"})," ",Object(x.jsx)("input",{required:!0,type:"number",placeholder:"Count",value:b,onChange:function(e){return p(+e.target.value)}})]}),Object(x.jsxs)("div",{className:"input-group mb-3",children:[Object(x.jsx)("span",{className:"input-group-text",children:"Weight"}),Object(x.jsx)("input",{required:!0,type:"number",value:m,onChange:function(e){return g(+e.target.value)}})]}),Object(x.jsxs)("div",{className:"input-group mb-3",children:[Object(x.jsx)("span",{className:"input-group-text",children:"Width"}),Object(x.jsx)("input",{required:!0,type:"number",value:y,onChange:function(e){return N(+e.target.value)}})]}),Object(x.jsxs)("div",{className:"input-group mb-3",children:[Object(x.jsx)("span",{className:"input-group-text",children:"Height"}),Object(x.jsx)("input",{required:!0,type:"number",value:S,onChange:function(e){return I(+e.target.value)}})]})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-warning",onClick:function(){R({type:"addProduct",details:[c,s,b,m,y,S]}),r(""),i(""),p(0),g(0),N(0),I(0)},children:"Confitm"}),Object(x.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){R({type:"add",add:!0})},children:"Cancel"})]})},v=(c(26),function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.reducer})),c=t.productToRender,r=t.select,a=t.productId,o=t.add;return Object(n.useEffect)((function(){e(p())}),[r]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"List of products"}),"Sort by:"," ",Object(x.jsxs)("select",{value:r,onChange:function(t){e("count"===t.target.value?{type:"filterByCount"}:{type:"filterByAlphabet"}),e({type:t.target.value})},children:[Object(x.jsx)("option",{value:"select",children:"Choose"}),Object(x.jsx)("option",{value:"alphabetically",children:"Alphabetically"}),Object(x.jsx)("option",{value:"count",children:"Count"})]}),Object(x.jsx)("ul",{className:"list-group",children:c.map((function(t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("h2",{className:"h2",children:t.name}),Object(x.jsx)("button",{className:"btn btn-info",type:"button",onClick:function(){return e({type:"choosenProduct",productId:t.id})},children:"Show details"}),Object(x.jsx)("button",{className:"btn btn-danger",type:"button",onClick:function(){return e({type:"delete",id:t.id})},children:"Delete"})]},t.id)})}))}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"btn btn-success",type:"button",onClick:function(){return e({type:"add",add:!0})},children:"Add Product"})}),o&&Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Give me some informarion, and then I can add a product  :)"}),Object(x.jsx)(f,{})]}),a&&Object(x.jsx)(g,{})]})}),y=function(){return Object(x.jsx)(u.a,{store:m,children:Object(x.jsx)(v,{})})};a.a.render(Object(x.jsx)(y,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.217c9241.chunk.js.map
(this.webpackJsonpcardproject=this.webpackJsonpcardproject||[]).push([[0],{15:function(e,t,c){e.exports={head:"Header_head__2MgHu",navList:"Header_navList__2i-fn",list:"Header_list__11sNo",link:"Header_link__wrNJ6",headLogo:"Header_headLogo__8gKxX"}},17:function(e,t,c){e.exports={image:"GoodsList_image__6nync",normalPrice:"GoodsList_normalPrice__1cBOn",dicountPrice:"GoodsList_dicountPrice__36lUG",cardBody:"GoodsList_cardBody__apfKn"}},21:function(e,t,c){e.exports={container:"Cart_container__3RaXV",row:"Cart_row__2Wmb1",wrapper:"Cart_wrapper__261ot",icon:"Cart_icon__2qxrX",cartInfo:"Cart_cartInfo__37rJG"}},31:function(e,t,c){e.exports={container:"NotFound_container__3ObQk"}},32:function(e,t,c){e.exports={container:"Goods_container__36y-s"}},34:function(e){e.exports=JSON.parse('[{"id":1,"title":"\u0411\u0430\u043d\u0430\u043d","cost":10,"image":"https://i.pinimg.com/originals/90/6c/ec/906cec1416bcda5505fde34bc96660db.jpg"},{"id":2,"title":"\u042f\u0431\u043b\u043e\u043a\u043e","cost":8,"image":"https://pics.botanichka.ru/wp-content/uploads/2020/09/5-sekretov-dlitelnogo-hraneniya-yablok-01.jpg"},{"id":3,"discount":25,"discontForEveryKg":3,"title":"\u041f\u0430\u043f\u0430\u0439\u044f","cost":10,"image":"https://vegan.rocks/blog/health-benefits-of-papaya/feature_hu6888502c85fcfed3962bf691efee9f5c_543256_1600x1200_fill_q75_box_smart1.jpg"}]')},45:function(e,t,c){},46:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var a={};c.r(a),c.d(a,"addToCart",(function(){return h})),c.d(a,"removeToCart",(function(){return m})),c.d(a,"increment",(function(){return x}));var n=c(0),r=c.n(n),i=c(23),s=c.n(i),o=c(13),d=(c(45),c(46),c(20)),l=c(3),j=function(e){return new Intl.NumberFormat("usa",{currency:"USD",style:"currency"}).format(e)},u=c(14),b="ADD_TO_CART",O="REMOVE_FROM_CART",v="INCREMENT",h=function(e){return{type:b,payload:e}},m=function(e){return{type:O,id:e}},x=function(e){var t=e.value,c=e.id;return{type:v,value:t,id:c}},_=c(21),f=c.n(_),p=c(30),g=c.n(p),y=c(1);function N(){var e=0,t=Object(o.c)((function(e){return{cart:e.cart}})).cart.values,c=Object(o.b)(),n=Object(u.a)(a,c),r=n.removeToCart,i=n.increment;function s(t,c,a,n){var r=0,i=0;if(a)for(var s=1;s<=t;s++)s%n===0?i=a*++r:i+=c;else i+=t*c;return e+=i,i}return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{className:f.a.cartInfo,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(y.jsx)("div",{className:"row",children:Object.values(t).map((function(e){var t=e.title,c=e.cost,a=e.counter,n=e.id,o=e.discount,d=e.discontForEveryKg,l=e.img;return Object(y.jsxs)("div",{className:f.a.row,children:[Object(y.jsx)("img",{src:l,alt:""}),Object(y.jsx)("span",{children:t}),Object(y.jsx)("span",{children:j(s(a,c,o,d))}),Object(y.jsx)("input",{type:"number",min:1,max:"100",defaultValue:a,onChange:function(e){var t=e.target.value;t>100&&(t=1,e.target.valueAsNumber=1),i({value:t,id:n})}}),Object(y.jsx)(g.a,{className:f.a.icon,onClick:function(){return r(n)}})]},n)}))}),Object(y.jsxs)("h3",{className:f.a.cartInfo,children:[" \u0421\u0443\u043c\u043c\u0430 \u043a \u043e\u043f\u043b\u0430\u0442\u0435 : ",j(e)]})]})}var k=c(31),C=c.n(k);function T(){return Object(y.jsx)("div",{className:C.a.container})}var w=c(8),E=c(17),F=c.n(E),L=c(61),I=c(62),K=c(9),G=c.n(K);var B=function(e){var t=e.img,c=e.title,n=e.cost,r=e.id,i=e.discount,s=e.discontForEveryKg,d=Object(o.b)(),l=Object(o.c)((function(e){return{cart:e.cart}})).cart.values,b=Object(u.a)(a,d).addToCart;return Object(y.jsxs)(L.a,{style:{width:"18rem"},children:[Object(y.jsx)(L.a.Img,{variant:"top",src:t,className:F.a.image}),Object(y.jsxs)(L.a.Body,{className:F.a.cardBody,children:[Object(y.jsx)(L.a.Title,{children:c}),Object(y.jsx)(L.a.Text,{className:G()(F.a.normalPrice,Object(w.a)({},F.a.dicountPrice,!i)),children:j(n)}),i&&Object(y.jsx)(L.a.Text,{children:"\u0410\u043a\u0446\u0438\u044f : ".concat(j(i),"\u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0435 ").concat(s,"\u043a\u0433")}),Object(y.jsx)("div",{className:F.a.btnContainer,children:l[r]?Object(y.jsx)(I.a,{variant:"primary",size:"lg",disabled:!0,children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}):Object(y.jsx)(I.a,{onClick:function(){return b({title:c,cost:n,id:r,discount:i,discontForEveryKg:s,img:t})},variant:"primary",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})})]})]})},H=c(32),P=c.n(H);var R=function(){var e=Object(o.c)((function(e){return{goods:e.goods}})).goods.goods;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("section",{className:P.a.container,children:[e.map((function(e){var t=e.title,c=e.image,a=e.cost,n=e.id,r=e.discount,i=e.discontForEveryKg;return Object(y.jsx)(B,{id:n,title:t,img:c,cost:a,discount:r,discontForEveryKg:i},n)})),Object(y.jsx)("div",{})]})})},J=c(15),M=c.n(J);function A(){return Object(y.jsx)("header",{children:Object(y.jsx)("div",{className:M.a.head,children:Object(y.jsx)("div",{className:M.a.headContainer,children:Object(y.jsxs)("nav",{className:M.a.navList,children:[Object(y.jsx)("div",{className:M.a.headLogo,children:"\u041c\u043e\u0439 \u0421\u0430\u0434"}),Object(y.jsxs)("ul",{className:M.a.list,children:[Object(y.jsx)("li",{children:Object(y.jsx)(d.b,{className:M.a.link,to:"/testTask/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(y.jsx)("li",{children:Object(y.jsx)(d.b,{className:M.a.link,to:"/testTask/cart",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})})]})]})})})})}c(51);var D=function(){return Object(y.jsxs)(d.a,{children:[Object(y.jsx)(A,{}),Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{exact:!0,path:"/testTask/",element:Object(y.jsx)(R,{})}),Object(y.jsx)(l.a,{path:"/testTask/cart",element:Object(y.jsx)(N,{})}),Object(y.jsx)(l.a,{path:"/*",element:Object(y.jsx)(T,{})})]})]})},S={goods:c(34)};var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type,e},X=c(4),q={},U={values:{}};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var c=t.payload.id;return e.values[c]=Object(X.a)(Object(X.a)({},t.payload),{},{counter:q[c]=1,boo:!0}),Object(X.a)({},e);case v:var a=t.value,n=t.id;return e.values[n].counter=+a,a>100&&(e.values[n].counter=1),Object(X.a)({},e);case O:var r=t.id;return delete e.values[r],Object(X.a)(Object(X.a)({},e),{},{boo:!1});default:return e}},Q=Object(u.b)({goods:V,cart:z}),W=Object(u.c)(Q);s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(o.a,{store:W,children:Object(y.jsx)(D,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.29465a28.chunk.js.map
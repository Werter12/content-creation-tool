(this["webpackJsonpcontent-creation-tool"]=this["webpackJsonpcontent-creation-tool"]||[]).push([[0],{244:function(e,t,n){},245:function(e,t,n){},387:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),i=n.n(c),u=(n(244),n(245),n(87)),o=n(32),s=n(22),l=n(391),b=n(394),j=n(389),d=n(390),O=n(393),h=n(392),f=n(62),g="LIST_IMAGES",m="LIST_IMAGES_RESULT",v="LIST_IMAGES_FAIL",p="GET_IMAGE",x="GET_IMAGE_RESULT",w="GET_IMAGE_FAIL",I="UPDATE_DRAFT_IMAGE",y="SET_DRAFT_IMAGE";function S(){return{type:"EMPTY_EVENT"}}var E=n(111),_=n(29),k=n.n(_),T=n(28),A=n(58),C=n(215),L=n.n(C),N="https://picsum.photos";function G(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console.log("Saga Error: ",n,e)}var M=function(e){return e.substring(0,e.lastIndexOf("/"))},R=function(e){var t=new URL(e);return"".concat(t.origin).concat(M(M(t.pathname)),"/200").concat(t.search)},F=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return k.a.mark((function t(r){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.apply(void 0,[e,r].concat(n));case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),t.next=9,T.a.apply(void 0,[G,t.t0].concat(n));case 9:case"end":return t.stop()}}),t,null,[[0,5]])}))};function P(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return k.a.mark((function u(){var o,s,l,b=arguments;return k.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(o=b.length>0&&void 0!==b[0]?b[0]:null,u.prev=1,!a||!c){u.next=5;break}return u.next=5,Object(T.a)(a,c);case 5:return u.next=7,Object(T.a)(e,o);case 7:if(s=u.sent,!(l=s.data)){u.next=12;break}return u.next=12,Object(T.b)(t(l));case 12:if(!r){u.next=15;break}return u.next=15,Object(T.a)(r,l);case 15:return u.abrupt("return",l);case 18:return u.prev=18,u.t0=u.catch(1),u.next=22,Object(T.b)(n(u.t0));case 22:if(!i){u.next=25;break}return u.next=25,Object(T.a)(i);case 25:case"end":return u.stop()}}),u,null,[[1,18]])}))}var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get";return function(n){var r=n.queryParams,a=n.urlPath;return L.a[t]("".concat(N).concat(e).concat(a?"/".concat(a):""),r?{params:r}:void 0)}},V=function(e){var t=e.width,n=e.height,r=e.url,a=Object(E.a)(e,["width","height","url"]);return Object(s.a)({url:"".concat(r).concat(t?"/".concat(t):"").concat(n?"/".concat(n):"")},a)},D=function(e,t){var n=t.id,r=(t.url,Object(E.a)(t,["id","url"]));return Object(s.a)({url:"".concat(e).concat(n?"/id/".concat(n):"")},r)},z=function(e){var t=e.grayscale,n=e.url,r=Object(E.a)(e,["grayscale","url"]);return Object(s.a)({url:"".concat(n).concat(t?"?grayscale":""),grayscale:t},r)},B=function(e){var t=e.blur,n=e.url,r=e.grayscale,a=Object(E.a)(e,["blur","url","grayscale"]);return t>10&&t<1?Object(s.a)({url:n},a):Object(s.a)({url:"".concat(n).concat(t?"".concat(r?"&":"?","blur=").concat(t):"")},a)},J=function(e){return e.url},K="START_SAVE_TO_STORAGE",$="SAVE_TO_STORAGE",q="GET_FROM_STORAGE";function X(e){return{type:$,savedImages:e}}var H=n(399),W=n(397),Y=n(8);var Q=function(){return Object(Y.jsx)(j.a,{children:Object(Y.jsxs)(d.a,{children:[Object(Y.jsx)(H.a.Image,{}),Object(Y.jsx)("br",{}),Object(Y.jsx)(W.a.Text,{children:" No such image"})]})})},Z=n(396),ee=n(398),te=n(401),ne=n(402),re=n(94),ae=n(174),ce=W.a.Link;function ie(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(ae.a)(k.a.mark((function e(t){var n,r,a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:r=e.sent,a=URL.createObjectURL(r),(c=document.createElement("a")).href=a,c.download="".concat(t,".jpg"),document.body.appendChild(c),c.click(),document.body.removeChild(c);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=function(e){var t=e.imageUrl;return Object(Y.jsx)(ce,{href:"#",onClick:function(){var e=Object(ae.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,ie(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Download"})},se=W.a.Paragraph,le=W.a.Title,be={blur:{range:"${label} must be between ${min} and ${max}"}};var je=function(e){var t,n,r=e.draftImage,a=e.onFinish,c=e.onValuesChange,i=e.donwloadImageUrl;return Object(Y.jsxs)(d.a,{xs:24,md:12,children:[Object(Y.jsx)(le,{level:2,children:"Edit"}),Object(Y.jsxs)(se,{children:["Author: ",r.author]}),Object(Y.jsxs)(Z.a,{name:"edit-image",onFinish:a,validateMessages:be,onValuesChange:c,initialValues:{width:r.width,height:r.height,blur:null!==(t=r.blur)&&void 0!==t?t:0,grayscale:null!==(n=r.grayscale)&&void 0!==n&&n},children:[Object(Y.jsx)(Z.a.Item,{name:"width",label:"Width",children:Object(Y.jsx)(ee.a,{})}),Object(Y.jsx)(Z.a.Item,{name:"height",label:"Height",children:Object(Y.jsx)(ee.a,{})}),Object(Y.jsx)(Z.a.Item,{label:"Switch",name:"grayscale",valuePropName:"checked",children:Object(Y.jsx)(te.a,{})}),Object(Y.jsx)(Z.a.Item,{name:"blur",label:"Blur",rules:[{type:"number",min:0,max:10}],children:Object(Y.jsx)(ee.a,{})}),Object(Y.jsxs)(ne.b,{direction:"vertical",size:"large",children:[Object(Y.jsx)(oe,{imageUrl:i}),Object(Y.jsx)(Z.a.Item,{children:Object(Y.jsx)(re.a,{type:"primary",htmlType:"submit",children:"Save"})})]})]})]})},de=l.a.Content,Oe=function(){var e=Object(f.b)(),t=Object(o.e)(),n=Object(o.g)().imageId,a=Object(f.c)((function(e){var t;return(null===(t=e.image.item)||void 0===t?void 0:t.id)===n?e.image.item:null})),c=Object(f.c)((function(e){return e.storage.savedImages})),i=Object(f.c)((function(e){return e.image.loading}));Object(r.useEffect)((function(){var t;a||e((t="/".concat(n,"/info"),{type:p,loading:!0,urlPath:t}))}),[a,n,e]);var u,g=(u=null!==a&&void 0!==a?a:{},Object(A.c)(J,B,z,V,D)(N,u));return Object(Y.jsxs)(l.a,{className:"page",children:[Object(Y.jsx)(b.a,{title:"Image with ".concat(n," id"),onBack:function(){return t.goBack()}}),Object(Y.jsx)(de,{className:"content",children:a?Object(Y.jsxs)(j.a,{gutter:[34,16],children:[Object(Y.jsx)(d.a,{xs:24,md:12,className:"page-image-wrapper",children:Object(Y.jsx)(O.a,{className:"page-image",src:g,placeholder:!0})}),Object(Y.jsx)(je,{draftImage:a,onFinish:function(t){e(function(e,t){return{type:K,savedImages:e,image:t}}(c,Object(s.a)(Object(s.a)(Object(s.a)({},a),t),{},{download_url:g})))},onValuesChange:function(t){t.blur<0||t.blur>10||e({type:I,attributes:t})},donwloadImageUrl:g})]}):i?Object(Y.jsx)(h.a,{size:"large"}):Object(Y.jsx)(Q,{})})]})},he=n(178),fe=n(400),ge=n(395),me=n(78),ve=n(228);var pe=function(e){var t=e.image,n=e.onImageLinkClick;return Object(Y.jsxs)(d.a,{children:[Object(Y.jsx)("p",{children:t.author}),Object(Y.jsx)(u.b,{to:"/".concat(t.id),onClick:n,children:Object(Y.jsx)(O.a,{width:200,src:t.preview_url,preview:!1})})]})},xe=l.a.Footer,we=l.a.Content,Ie=Object(me.b)({resourceName:"items",resourceSelector:function(e,t){return t.image[e].reduce((function(e,t){return e[t.id]=t,e}),{})}}),ye=Ie.text,Se=Ie.result,Ee=Object(ve.a)([Se,function(e){return e.image.items},ye],(function(e,t,n){return{itemIds:e,items:t.filter((function(t){return e.includes(t.id)})),searchText:n}})),_e=Object(me.a)("items"),ke=function(){var e=Object(o.f)(),t=Object(o.e)(),n=Object(f.b)(),a=Object(f.c)((function(e){return Ee(e)})),c=a.items,i=a.searchText,u=new URLSearchParams(e.search),s=Number(u.get("page"))||1,d=Number(u.get("pageLimit"))||10,O=Object(r.useState)(s),h=Object(he.a)(O,2),m=h[0],v=h[1],p=Object(r.useState)(d),x=Object(he.a)(p,2),w=x[0],I=x[1],S=function(n,r,a){n(a),u.set(r,a),t.push({pathname:e.pathname,search:u.toString()})};return Object(r.useEffect)((function(){n(function(e){var t=e.page,n=e.limit;return{type:g,loading:!0,queryParams:{page:t,limit:n}}}({limit:w,page:m}))}),[m,w,n]),Object(Y.jsxs)(l.a,{className:"page",children:[Object(Y.jsx)(b.a,{title:"Content Creation Tool",subTitle:"based on picsum.photos",extra:Object(Y.jsx)(fe.a,{defaultValue:i,placeholder:"Search by author",onChange:function(e){return n(_e(e.target.value))}})}),Object(Y.jsx)(we,{className:"content",children:Object(Y.jsx)(j.a,{children:c&&c.map((function(e){return Object(Y.jsx)(pe,{image:e,onImageLinkClick:function(){return n({type:y,item:e})}},e.id)}))})}),Object(Y.jsx)(xe,{className:"footer",children:Object(Y.jsx)(ge.a,{current:m,total:c&&c.length*m+w,pageSize:w,onShowSizeChange:function(e,t){t!==w&&S(I,"pageLimit",t)},onChange:function(e){S(v,"page",e)},showSizeChanger:!0})})]})},Te=n(236),Ae={loading:!1,error:"",items:[],item:null};var Ce,Le=n(230),Ne=n(231),Ge=function(){function e(){Object(Le.a)(this,e)}return Object(Ne.a)(e,null,[{key:"clearItem",value:function(e){window.localStorage.removeItem(e)}},{key:"setItem",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];window.localStorage.setItem(e,n?JSON.stringify(t):t)}},{key:"getItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var n=window.localStorage.getItem(e);return t?JSON.parse(n):n}catch(r){return""}}}]),e}();Ge.defaultKey="SAVED_IMAGES";var Me={savedImages:null!==(Ce=Ge.getItem(Ge.defaultKey,!0))&&void 0!==Ce?Ce:[]};var Re=Object(A.b)({image:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.loading,a=t.items,c=t.item,i=t.attributes,u=t.error;switch(n){case g:return Object(s.a)(Object(s.a)({},e),{},{loading:r});case m:return Object(s.a)(Object(s.a)({},e),{},{items:a,loading:r});case v:return Object(s.a)(Object(s.a)({},e),{},{loading:r,error:u});case p:return Object(s.a)(Object(s.a)({},e),{},{loading:r});case x:return Object(s.a)(Object(s.a)({},e),{},{item:c,loading:r});case w:return Object(s.a)(Object(s.a)({},e),{},{loading:r,error:u});case I:return Object(s.a)(Object(s.a)({},e),{},{item:Object(s.a)(Object(s.a)({},e.item),i)});case y:return Object(s.a)(Object(s.a)({},e),{},{item:c});default:return e}},storage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.savedImages;switch(n){case K:return Object(s.a)({},e);case $:return Object(s.a)(Object(s.a)({},e),{},{savedImages:r});case q:return Object(s.a)({},e);default:return e}},search:me.c}),Fe=k.a.mark(Ve),Pe=k.a.mark(ze);function Ue(e,t){return t.reduce((function(t,n){var r,a,c=null!==(r=e.find((function(e){return e.id===n.id})))&&void 0!==r?r:{preview_url:(a=n.download_url,"".concat(M(M(a)),"/200"))};return t.push(Object(s.a)(Object(s.a)({},n),c)),t}),[])}function Ve(e){var t,n;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e,r.next=3,Object(T.c)((function(e){return e.storage.savedImages}));case 3:return n=r.sent,r.next=6,Object(T.a)(Ue,n,e);case 6:return t=r.sent,r.next=9,Object(T.b)({type:m,loading:!1,items:t});case 9:case"end":return r.stop()}}),Fe)}var De=P(U("/v2/list"),S,(function(e){return{type:v,error:e,loading:!1}}),Ve);function ze(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.e)(g,F(De));case 2:case"end":return e.stop()}}),Pe)}var Be=k.a.mark($e),Je=k.a.mark(Xe);function Ke(e,t){return e.find((function(e){return(null===e||void 0===e?void 0:e.id)===(null===t||void 0===t?void 0:t.id)}))}function $e(e){var t,n;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(T.c)((function(e){return e.storage.savedImages}));case 2:if(t=r.sent,n={},!t.length){r.next=8;break}return r.next=7,Object(T.a)(Ke,t,e);case 7:n=r.sent;case 8:return r.next=10,Object(T.b)((a=Object(s.a)(Object(s.a)({},e),n),{type:x,loading:!1,item:a}));case 10:case"end":return r.stop()}var a}),Be)}var qe=P(U("/id"),S,(function(e){return{type:w,error:e,loading:!1}}),$e);function Xe(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.e)(p,F(qe));case 2:case"end":return e.stop()}}),Je)}var He=k.a.mark(Qe),We=k.a.mark(Ze);function Ye(e,t){var n=Object(s.a)(Object(s.a)({},t),{},{preview_url:R(t.download_url)}),r=e.filter((function(e){return(null===e||void 0===e?void 0:e.id)!==(null===t||void 0===t?void 0:t.id)}));return r.push(n),r}function Qe(e){var t,n,r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.image,a.next=3,Object(T.c)((function(e){return e.storage.savedImages}));case 3:return n=a.sent,a.next=6,Object(T.a)(Ye,n,t);case 6:return r=a.sent,a.next=9,Object(T.b)(X(r));case 9:return a.next=11,Object(T.a)(Ge.setItem,Ge.defaultKey,r,!0);case 11:case"end":return a.stop()}}),He)}function Ze(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.e)(K,F(Qe));case 2:case"end":return e.stop()}}),We)}var et=k.a.mark(tt);function tt(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(ze);case 2:return e.next=4,Object(T.d)(Xe);case 4:return e.next=6,Object(T.d)(Ze);case 6:case"end":return e.stop()}}),et)}var nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.c,rt=Object(Te.a)(),at=Object(A.d)(Re,nt(Object(A.a)(rt),Object(me.d)({resourceIndexes:{items:["author"]},resourceSelector:function(e,t){return t.image[e]}})));rt.run(tt);var ct=at;var it=function(){return Object(Y.jsx)(f.a,{store:ct,children:Object(Y.jsxs)(u.a,{children:[Object(Y.jsx)(o.a,{path:"/",exact:!0,children:Object(Y.jsx)(ke,{})}),Object(Y.jsx)(o.a,{path:"/:imageId",exact:!0,children:Object(Y.jsx)(Oe,{})})]})})},ut=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,403)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(Y.jsx)(a.a.StrictMode,{children:Object(Y.jsx)(it,{})}),document.getElementById("root")),ut()}},[[387,1,2]]]);
//# sourceMappingURL=main.ab2f2553.chunk.js.map
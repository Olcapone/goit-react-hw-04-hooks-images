(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,,,function(e,t,r){e.exports={SearchForm:"Searchbar_SearchForm__3O46_",SearchFormButton:"Searchbar_SearchFormButton__3wqBu",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__o8Jdk",SearchFormInput:"Searchbar_SearchFormInput__2FWwu"}},,,,,function(e,t,r){e.exports={Overlay:"Modal_Overlay__-satw",Modal:"Modal_Modal__3kdGr"}},function(e,t,r){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3WbTG",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__29I23"}},,,function(e,t,r){e.exports={ImageGallery:"ImageGallery_ImageGallery__EtuQe"}},function(e,t,r){e.exports={wrap:"ImageNotFound_wrap__12Te_"}},,function(e,t,r){e.exports={Button:"Button_Button__3LV0C"}},,,,,,function(e,t,r){},function(e,t,r){},,,,,function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),n=r(3),o=r.n(n),i=(r(23),r(2)),s=r(4),u=(r(24),function(e,t){var r=Object(c.useState)((function(){var r;return null!==(r=JSON.parse(window.localStorage.getItem(e)))&&void 0!==r?r:t})),a=Object(i.a)(r,2),n=a[0],o=a[1];return Object(c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,o]}),l=r(5),j=r.n(l),m=r(1);function h(e){var t=e.onSubmit,r=u("pictureName",""),c=Object(i.a)(r,2),a=c[0],n=c[1];return Object(m.jsx)("header",{className:j.a.Searchbar,children:Object(m.jsxs)("form",{className:j.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(m.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(m.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:j.a.SearchFormInput,type:"text",name:"imageName",value:a,onChange:function(e){n(e.currentTarget.value.toLowerCase())},placeholder:"Search images and photos"})]})})}var b=r(12),d=(r(26),r(14)),g=r.n(d),x=r(9),O=r.n(x);function f(e,t){var r="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e.pictureName||e,"&page=").concat(t,"&per_page=12&key=").concat("22421278-3374a5bf35dcd0f85e00cdc81");return fetch(r).then((function(t){return t.ok?t.json():Promise.reject(new Error("Image not found ".concat(e)))}))}f.propTypes={searchQuery:O.a.string,page:O.a.number};var p=r(18),y=r(10),w=r.n(y),I=["onClose"],v=document.querySelector("#modal-root");function _(e){var t=e.onClose,r=Object(p.a)(e,I);Object(c.useEffect)((function(){return window.addEventListener("keydown",a),window.removeEventListener("keydown",a)}),[]);var a=function(e){"Escape"===e.code&&t()};return Object(n.createPortal)(Object(m.jsx)("div",{className:w.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(m.jsx)("div",{className:w.a.Modal,children:r.children})}),v)}var S=r(11),F=r.n(S);function N(e){var t=e.imageURL,r=e.tags,c=e.largeImg,a=u("showModal",!1),n=Object(i.a)(a,2),o=n[0],s=n[1],l=function(){s(!o)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{className:F.a.ImageGalleryItem,onClick:l,children:Object(m.jsx)("img",{src:t,alt:r,className:F.a.ImageGalleryItemImage})}),o&&Object(m.jsx)(_,{onClose:l,children:Object(m.jsx)("img",{src:c,alt:r})})]})}var L=r.p+"static/media/sadCat.c32810d8.jpg",G=r(15),C=r.n(G);function k(){return Object(m.jsx)("div",{className:C.a.wrap,children:Object(m.jsx)("img",{src:L,alt:"sad cat",width:"450"})})}var B=r(13),E=r(16),M=function(e){return Object(m.jsxs)(E.a,Object(B.a)(Object(B.a)({width:800,height:575,viewBox:"0 0 800 575",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),{},{children:[Object(m.jsx)("rect",{x:"537",y:"9",rx:"2",ry:"2",width:"140",height:"10"}),Object(m.jsx)("rect",{x:"14",y:"30",rx:"2",ry:"2",width:"667",height:"11"}),Object(m.jsx)("rect",{x:"12",y:"58",rx:"2",ry:"2",width:"211",height:"211"}),Object(m.jsx)("rect",{x:"240",y:"57",rx:"2",ry:"2",width:"211",height:"211"}),Object(m.jsx)("rect",{x:"467",y:"56",rx:"2",ry:"2",width:"211",height:"211"}),Object(m.jsx)("rect",{x:"12",y:"283",rx:"2",ry:"2",width:"211",height:"211"}),Object(m.jsx)("rect",{x:"240",y:"281",rx:"2",ry:"2",width:"211",height:"211"}),Object(m.jsx)("rect",{x:"468",y:"279",rx:"2",ry:"2",width:"211",height:"211"}),Object(m.jsx)("circle",{cx:"286",cy:"536",r:"12"}),Object(m.jsx)("circle",{cx:"319",cy:"535",r:"12"}),Object(m.jsx)("circle",{cx:"353",cy:"535",r:"12"}),Object(m.jsx)("rect",{x:"378",y:"524",rx:"0",ry:"0",width:"52",height:"24"}),Object(m.jsx)("rect",{x:"210",y:"523",rx:"0",ry:"0",width:"52",height:"24"}),Object(m.jsx)("circle",{cx:"210",cy:"535",r:"12"}),Object(m.jsx)("circle",{cx:"428",cy:"536",r:"12"})]}))};M.metadata={name:"Hassan Tijani.A",github:"surepeps",description:"Image Grid with Pagination",filename:"ImageGrid"};var T=M,R=r(17),J=r.n(R);function P(e){var t=e.name,r=e.onLoadMore;return Object(m.jsx)("button",{className:J.a.Button,type:"button",onClick:r,children:t})}function U(e){var t=e.pictureName,r=Object(c.useState)([]),a=Object(i.a)(r,2),n=a[0],o=a[1],l=u("page",1),j=Object(i.a)(l,2),h=j[0],d=j[1],x=u("status","idle"),O=Object(i.a)(x,2),p=O[0],y=O[1],w=Object(c.useState)("error",null),I=Object(i.a)(w,2),v=(I[0],I[1]),_=Object(c.useRef)();Object(c.useEffect)((function(){d(1),o([])}),[t]),Object(c.useEffect)((function(){""!==t&&(s.b.info(" Waiting... "),y("pending"),f(t,h).then((function(e){0===e.total?(y("reject"),s.b.error("Image ".concat(t," not found"))):(_.current=e.hits,0===n.length?o(_.current):o((function(e){return[].concat(Object(b.a)(e),Object(b.a)(_.current))})),y("resolved"))})).catch((function(e){return y("reject"),v("Image not found ".concat(t)),e})))}),[t,h]);return"idle"===p?Object(m.jsx)(m.Fragment,{}):"pending"===p?Object(m.jsx)(T,{}):"reject"===p?Object(m.jsx)(k,{}):"resolved"===p?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{className:g.a.ImageGallery,children:n.map((function(e){return Object(m.jsx)(N,{largeImg:e.largeImageURL,imageURL:e.previewURL||e.webformatURL,tags:e.tags},e.id)}))}),Object(m.jsx)(P,{name:"Load more",onLoadMore:function(){d((function(e){return e+1})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}})]}):void 0}function q(){var e=u("pictureName",""),t=Object(i.a)(e,2),r=t[0],c=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{onSubmit:function(e){""===e.trim()?s.b.info(" Enter anything word! "):c(e)}}),Object(m.jsx)(U,{pictureName:r}),Object(m.jsx)(s.a,{})]})}var W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,30)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;r(e),c(e),a(e),n(e),o(e)}))};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root")),W()}],[[29,1,2]]]);
//# sourceMappingURL=main.17a4e08b.chunk.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27bdddaa"],{"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return V}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("9b76"),b=r("8690"),s=r("365c"),l=r("d82f"),u=r("cf75"),d=r("d580"),f=r("6197"),O=r("b885");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=Object(u["d"])(Object(l["m"])(j(j({},Object(u["a"])(d["a"],u["f"].bind(null,"footer"))),{},{footer:Object(u["c"])(o["u"]),footerClass:Object(u["c"])(o["e"]),footerHtml:Object(u["c"])(o["u"])})),a["k"]),h=c["default"].extend({name:a["k"],functional:!0,props:m,render:function(t,e){var r,c=e.props,a=e.data,o=e.children,i=c.footerBgVariant,s=c.footerBorderVariant,l=c.footerTextVariant;return t(c.footerTag,Object(n["a"])(a,{staticClass:"card-footer",class:[c.footerClass,(r={},g(r,"bg-".concat(i),i),g(r,"border-".concat(s),s),g(r,"text-".concat(l),l),r)],domProps:o?{}:Object(b["a"])(c.footerHtml,c.footer)}),o)}}),v=r("4918");function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var C=Object(u["d"])(Object(l["m"])(w(w({},Object(l["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(u["c"])(o["g"],!1),end:Object(u["c"])(o["g"],!1),start:Object(u["c"])(o["g"],!1),top:Object(u["c"])(o["g"],!1)})),a["m"]),x=c["default"].extend({name:a["m"],functional:!0,props:C,render:function(t,e){var r=e.props,c=e.data,a=r.src,o=r.alt,i=r.width,b=r.height,s="card-img";return r.top?s+="-top":r.right||r.end?s+="-right":r.bottom?s+="-bottom":(r.left||r.start)&&(s+="-left"),t("img",Object(n["a"])(c,{class:s,attrs:{src:a,alt:o,width:i,height:b}}))}});function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(Object(r),!0).forEach((function(e){D(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function D(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var k=Object(u["a"])(C,u["f"].bind(null,"img"));k.imgSrc.required=!1;var S=Object(u["d"])(Object(l["m"])(T(T(T(T(T(T({},f["b"]),O["b"]),m),k),d["a"]),{},{align:Object(u["c"])(o["u"]),noBody:Object(u["c"])(o["g"],!1)})),a["i"]),V=c["default"].extend({name:a["i"],functional:!0,props:S,render:function(t,e){var r,c=e.props,a=e.data,o=e.slots,l=e.scopedSlots,d=c.imgSrc,p=c.imgLeft,j=c.imgRight,g=c.imgStart,v=c.imgEnd,y=c.imgBottom,w=c.header,P=c.headerHtml,C=c.footer,B=c.footerHtml,T=c.align,S=c.textVariant,V=c.bgVariant,_=c.borderVariant,E=l||{},A=o(),H={},I=t(),J=t();if(d){var z=t(x,{props:Object(u["e"])(k,c,u["h"].bind(null,"img"))});y?J=z:I=z}var G=t(),U=Object(s["a"])(i["r"],E,A);(U||w||P)&&(G=t(O["a"],{props:Object(u["e"])(O["b"],c),domProps:U?{}:Object(b["a"])(P,w)},Object(s["b"])(i["r"],H,E,A)));var M=Object(s["b"])(i["h"],H,E,A);c.noBody||(M=t(f["a"],{props:Object(u["e"])(f["b"],c)},M),c.overlay&&d&&(M=t("div",{staticClass:"position-relative"},[I,M,J]),I=t(),J=t()));var R=t(),q=Object(s["a"])(i["q"],E,A);return(q||C||B)&&(R=t(h,{props:Object(u["e"])(m,c),domProps:U?{}:Object(b["a"])(B,C)},Object(s["b"])(i["q"],H,E,A))),t(c.tag,Object(n["a"])(a,{staticClass:"card",class:(r={"flex-row":p||g,"flex-row-reverse":(j||v)&&!(p||g)},D(r,"text-".concat(T),T),D(r,"bg-".concat(V),V),D(r,"border-".concat(_),_),D(r,"text-".concat(S),S),r)}),[I,G,M,R,J])}})},"34b6":function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("9b76"),b=r("365c"),s=r("cf75"),l=r("7c32"),u=r("7fa6"),d=Object(s["d"])({noBody:Object(s["c"])(o["g"],!1),rightAlign:Object(s["c"])(o["g"],!1),tag:Object(s["c"])(o["u"],"div"),verticalAlign:Object(s["c"])(o["u"],"top")},a["X"]),f=c["default"].extend({name:a["X"],functional:!0,props:d,render:function(t,e){var r=e.props,c=e.data,a=e.slots,o=e.scopedSlots,s=e.children,d=r.noBody,f=r.rightAlign,O=r.verticalAlign,p=d?s:[];if(!d){var j={},g=a(),m=o||{};p.push(t(u["a"],Object(b["b"])(i["h"],j,m,g)));var h=Object(b["b"])(i["b"],j,m,g);h&&p[f?"push":"unshift"](t(l["a"],{props:{right:f,verticalAlign:O}},h))}return t(r.tag,Object(n["a"])(c,{staticClass:"media"}),p)}})},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return j})),r.d(e,"a",(function(){return g}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("2326"),b=r("6c06"),s=r("7b1e"),l=r("3a58"),u=r("cf75"),d=r("fa73");function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',p=function(t,e,r){var c=encodeURIComponent(O.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(c)},j=Object(u["d"])({alt:Object(u["c"])(o["u"]),blank:Object(u["c"])(o["g"],!1),blankColor:Object(u["c"])(o["u"],"transparent"),block:Object(u["c"])(o["g"],!1),center:Object(u["c"])(o["g"],!1),fluid:Object(u["c"])(o["g"],!1),fluidGrow:Object(u["c"])(o["g"],!1),height:Object(u["c"])(o["p"]),left:Object(u["c"])(o["g"],!1),right:Object(u["c"])(o["g"],!1),rounded:Object(u["c"])(o["j"],!1),sizes:Object(u["c"])(o["f"]),src:Object(u["c"])(o["u"]),srcset:Object(u["c"])(o["f"]),thumbnail:Object(u["c"])(o["g"],!1),width:Object(u["c"])(o["p"])},a["Q"]),g=c["default"].extend({name:a["Q"],functional:!0,props:j,render:function(t,e){var r,c=e.props,a=e.data,o=c.alt,u=c.src,O=c.block,j=c.fluidGrow,g=c.rounded,m=Object(l["b"])(c.width)||null,h=Object(l["b"])(c.height)||null,v=null,y=Object(i["b"])(c.srcset).filter(b["a"]).join(","),w=Object(i["b"])(c.sizes).filter(b["a"]).join(",");return c.blank&&(!h&&m?h=m:!m&&h&&(m=h),m||h||(m=1,h=1),u=p(m,h,c.blankColor||"transparent"),y=null,w=null),c.left?v="float-left":c.right?v="float-right":c.center&&(v="mx-auto",O=!0),t("img",Object(n["a"])(a,{attrs:{src:u,alt:o,width:m?Object(d["g"])(m):null,height:h?Object(d["g"])(h):null,srcset:y||null,sizes:w||null},class:(r={"img-thumbnail":c.thumbnail,"img-fluid":c.fluid||j,"w-100":j,rounded:""===g||!0===g},f(r,"rounded-".concat(g),Object(s["n"])(g)&&""!==g),f(r,v,v),f(r,"d-block",O),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return l}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("cf75"),b=r("fa73"),s=Object(i["d"])({title:Object(i["c"])(o["u"]),titleTag:Object(i["c"])(o["u"],"h4")},a["p"]),l=c["default"].extend({name:a["p"],functional:!0,props:s,render:function(t,e){var r=e.props,c=e.data,a=e.children;return t(r.titleTag,Object(n["a"])(c,{staticClass:"card-title"}),a||Object(b["g"])(r.title))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return j}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("d82f"),b=r("cf75"),s=r("d580"),l=r("4968"),u=r("ba06");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(b["d"])(Object(i["m"])(f(f(f(f({},l["b"]),u["b"]),Object(b["a"])(s["a"],b["f"].bind(null,"body"))),{},{bodyClass:Object(b["c"])(o["e"]),overlay:Object(b["c"])(o["g"],!1)})),a["j"]),j=c["default"].extend({name:a["j"],functional:!0,props:p,render:function(t,e){var r,c=e.props,a=e.data,o=e.children,i=c.bodyBgVariant,s=c.bodyBorderVariant,d=c.bodyTextVariant,f=t();c.title&&(f=t(l["a"],{props:Object(b["e"])(l["b"],c)}));var p=t();return c.subTitle&&(p=t(u["a"],{props:Object(b["e"])(u["b"],c),class:["mb-2"]})),t(c.bodyTag,Object(n["a"])(a,{staticClass:"card-body",class:[(r={"card-img-overlay":c.overlay},O(r,"bg-".concat(i),i),O(r,"border-".concat(s),s),O(r,"text-".concat(d),d),r),c.bodyClass]}),[f,p,o])}})},"7c32":function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("cf75");function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=Object(i["d"])({right:Object(i["c"])(o["g"],!1),tag:Object(i["c"])(o["u"],"div"),verticalAlign:Object(i["c"])(o["u"],"top")},a["Y"]),l=c["default"].extend({name:a["Y"],functional:!0,props:s,render:function(t,e){var r=e.props,c=e.data,a=e.children,o=r.verticalAlign,i="top"===o?"start":"bottom"===o?"end":o;return t(r.tag,Object(n["a"])(c,{staticClass:"media-aside",class:b({"media-aside-right":r.right},"align-self-".concat(i),i)}),a)}})},"7fa6":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("cf75"),b=Object(i["d"])({tag:Object(i["c"])(o["u"],"div")},a["Z"]),s=c["default"].extend({name:a["Z"],functional:!0,props:b,render:function(t,e){var r=e.props,c=e.data,a=e.children;return t(r.tag,Object(n["a"])(c,{staticClass:"media-body"}),a)}})},a15b:function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));var c=r("b42e"),n=r("c637"),a=r("a723"),o=r("2326"),i=r("228e"),b=r("6c06"),s=r("b508"),l=r("d82f"),u=r("cf75"),d=r("fa73");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=["start","end","center"],g=Object(s["a"])((function(t,e){return e=Object(d["h"])(Object(d["g"])(e)),e?Object(d["c"])(["row-cols",t,e].filter(b["a"]).join("-")):null})),m=Object(s["a"])((function(t){return Object(d["c"])(t.replace("cols",""))})),h=[],v=function(){var t=Object(i["b"])().reduce((function(t,e){return t[Object(u["g"])(e,"cols")]=Object(u["c"])(a["p"]),t}),Object(l["c"])(null));return h=Object(l["h"])(t),Object(u["d"])(Object(l["m"])(O(O({},t),{},{alignContent:Object(u["c"])(a["u"],null,(function(t){return Object(o["a"])(Object(o["b"])(j,"between","around","stretch"),t)})),alignH:Object(u["c"])(a["u"],null,(function(t){return Object(o["a"])(Object(o["b"])(j,"between","around"),t)})),alignV:Object(u["c"])(a["u"],null,(function(t){return Object(o["a"])(Object(o["b"])(j,"baseline","stretch"),t)})),noGutters:Object(u["c"])(a["g"],!1),tag:Object(u["c"])(a["u"],"div")})),n["jb"])},y={name:n["jb"],functional:!0,get props(){return delete this.props,this.props=v(),this.props},render:function(t,e){var r,n=e.props,a=e.data,o=e.children,i=n.alignV,b=n.alignH,s=n.alignContent,l=[];return h.forEach((function(t){var e=g(m(t),n[t]);e&&l.push(e)})),l.push((r={"no-gutters":n.noGutters},p(r,"align-items-".concat(i),i),p(r,"justify-content-".concat(b),b),p(r,"align-content-".concat(s),s),r)),t(n.tag,Object(c["a"])(a,{staticClass:"row",class:l}),o)}}},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return p}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("8690"),b=r("d82f"),s=r("cf75"),l=r("d580");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(s["d"])(Object(b["m"])(d(d({},Object(s["a"])(l["a"],s["f"].bind(null,"header"))),{},{header:Object(s["c"])(o["u"]),headerClass:Object(s["c"])(o["e"]),headerHtml:Object(s["c"])(o["u"])})),a["l"]),p=c["default"].extend({name:a["l"],functional:!0,props:O,render:function(t,e){var r,c=e.props,a=e.data,o=e.children,b=c.headerBgVariant,s=c.headerBorderVariant,l=c.headerTextVariant;return t(c.headerTag,Object(n["a"])(a,{staticClass:"card-header",class:[c.headerClass,(r={},f(r,"bg-".concat(b),b),f(r,"border-".concat(s),s),f(r,"text-".concat(l),l),r)],domProps:o?{}:Object(i["a"])(c.headerHtml,c.header)}),o)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return l}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("cf75"),b=r("fa73"),s=Object(i["d"])({subTitle:Object(i["c"])(o["u"]),subTitleTag:Object(i["c"])(o["u"],"h6"),subTitleTextVariant:Object(i["c"])(o["u"],"muted")},a["n"]),l=c["default"].extend({name:a["n"],functional:!0,props:s,render:function(t,e){var r=e.props,c=e.data,a=e.children;return t(r.subTitleTag,Object(n["a"])(c,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),a||Object(b["g"])(r.subTitle))}})},bb5e:function(t,e,r){"use strict";r.r(e);var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"card-statistics",attrs:{"no-body":""}},[r("b-card-header",[r("b-card-title",[t._v("Error Code")]),r("b-card-text",{staticClass:"mr-25 mb-0"},[t._v(" Updated 1 month ago ")])],1),r("b-card-body",{staticClass:"statistics-body"},[r("b-row",t._l(t.statisticsItems,(function(e){return r("b-col",{key:e.icon,staticClass:"mb-2 mb-md-0",class:e.customClass,attrs:{md:"3",sm:"6"}},[r("b-media",{attrs:{"no-body":""}},[r("b-media-aside",{staticClass:"mr-2"},[r("b-avatar",{attrs:{size:"48",variant:e.color}},[r("feather-icon",{attrs:{size:"24",icon:e.icon}})],1)],1),r("b-media-body",{staticClass:"my-auto"},[r("h4",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(e.title)+" ")]),r("b-card-text",{staticClass:"font-small-3 mb-0"},[t._v(" "+t._s(e.subtitle)+" ")])],1)],1)],1)})),1)],1)],1),r("b-table",{attrs:{responsive:"sm",items:t.items}})],1)},n=[],a=r("a15b"),o=r("b28b"),i=r("205f"),b=r("b885"),s=r("4968"),l=r("d6e4"),u=r("6197"),d=r("34b6"),f=r("e8a3"),O=r("7c32"),p=r("7fa6"),j=r("29a1"),g={components:{BRow:a["a"],BCol:o["a"],BCard:i["a"],BCardHeader:b["a"],BCardTitle:s["a"],BCardText:l["a"],BCardBody:u["a"],BMedia:d["a"],BAvatar:f["a"],BMediaAside:O["a"],BMediaBody:p["a"],BTable:j["a"]},data:function(){return{statisticsItems:[{icon:"TrendingUpIcon",color:"light-primary",title:"230k",subtitle:"DS แต่ไม่มีรหัส",customClass:"mb-2 mb-xl-0"},{icon:"UserIcon",color:"light-info",title:"8.549k",subtitle:"DENY Code",customClass:"mb-2 mb-xl-0"},{icon:"BoxIcon",color:"light-danger",title:"1.423k",subtitle:"สิทธิผิด",customClass:"mb-2 mb-sm-0"},{icon:"DollarSignIcon",color:"light-success",title:"$9745",subtitle:"กองทุนเทียบ Hosxp",customClass:""}],items:[{age:40,first_name:"Dickerson",last_name:"Macdonald",Occupation:"Job"},{age:21,first_name:"Larsen",last_name:"Shaw",Occupation:"Job"},{age:89,first_name:"Geneva",last_name:"Wilson",Occupation:"Bussiness"},{age:38,first_name:"Jami",last_name:"Carney",Occupation:"Bussiness"},{age:40,first_name:"James",last_name:"Thomson",Occupation:"Job"}]}}},m=g,h=r("2877"),v=Object(h["a"])(m,c,n,!1,null,null,null);e["default"]=v.exports},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var c=r("2b0e"),n=r("c637"),a=r("a723"),o=r("cf75"),i=Object(o["d"])({bgVariant:Object(o["c"])(a["u"]),borderVariant:Object(o["c"])(a["u"]),tag:Object(o["c"])(a["u"],"div"),textVariant:Object(o["c"])(a["u"])},n["i"]);c["default"].extend({props:i})},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var c=r("2b0e"),n=r("b42e"),a=r("c637"),o=r("a723"),i=r("cf75"),b=Object(i["d"])({textTag:Object(i["c"])(o["u"],"p")},a["o"]),s=c["default"].extend({name:a["o"],functional:!0,props:b,render:function(t,e){var r=e.props,c=e.data,a=e.children;return t(r.textTag,Object(n["a"])(c,{staticClass:"card-text"}),a)}})}}]);
//# sourceMappingURL=chunk-27bdddaa.b6b98dfa.js.map
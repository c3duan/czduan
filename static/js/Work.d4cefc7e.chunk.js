(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(85),c=a(146),l=a(86),o=a(147),i=a(6),s=a(0),m=a.n(s),d=a(11),u=a(87),w=a(88),_=a(89),k=a.n(_),f=a(19),h=a(2),E=(a(143),h.d.length-1),p=function(e,t){var a=e.header,n=e.date,r=e.href,c=e.sideheader,l=e.subheader,o=e.body;return m.a.createElement("div",{key:t,className:"work__item",style:n?{marginLeft:"10% auto"}:null},m.a.createElement("h3",{className:"work__item-header"},a,c?m.a.createElement("span",{className:"work__item-sideheader"}," / ",c):null),l?m.a.createElement("h4",{className:"work__item-subheader"},l):null,o?function(e){return"string"===typeof e?m.a.createElement("p",{className:"work__item-text"},e):Array.isArray(e)?m.a.createElement("ul",{className:"work__item-list"},e.map(function(e,t){return m.a.createElement("li",{className:"work__item-list-item",key:t},e)})):e}(o):null,r?m.a.createElement("div",{className:"work__wrapper--item-link"},m.a.createElement("span",{className:"work__item-link-header"},"Link:"),m.a.createElement("a",{className:"work__item-link",href:r},r)):null)},v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={index:Math.max(0,a.props.data.length-1)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",{style:{width:"80%",height:"100px",margin:"5 auto"}},m.a.createElement(k.a,{index:this.state.index,indexClick:function(t){e.setState({index:t})},values:this.props.data.map(function(e){return e.date}),styles:{background:"#212121",foreground:"#7b9d6f",outline:"#dfdfdf"}})),m.a.createElement("section",{className:"work__content"},m.a.createElement("div",null),p(this.props.data[this.state.index],this.state.index),m.a.createElement("div",null),m.a.createElement("div",null)))}}]),t}(m.a.Component);t.default=function(){var e=Object(s.useState)(0),t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],r=a[1],c=Object(i.a)(e,1)[0],l=function(t){return function(e,t,a){var n=Object(i.a)(t,2),r=n[0],c=n[1];e!==r&&(a(!0),window.scrollTo({top:0,behavior:"smooth"}),window.setTimeout(function(){a(!1),c(e)},h.c))}(t,e,r)},o=function(){return l(Math.max(c-1,0))},_=function(){return l(Math.min(c+1,E))};Object(s.useEffect)(function(){return function(e,t){return window.addEventListener("onSwipeLeft",e),window.addEventListener("onSwipeRight",t),function(){window.removeEventListener("onSwipeLeft",e),window.removeEventListener("onSwipeRight",t)}}(_,o)});var k=h.d[c],N=k.title,b=k.data;return m.a.createElement(f.e,{block:"work",className:n?"work--shift":null},m.a.createElement("div",{className:"work__head"},m.a.createElement("div",{className:"work__wrapper--head"},m.a.createElement("h1",{className:"work__topic"},"Resume"),m.a.createElement("h2",{className:"work__header"},N)),m.a.createElement("ul",{className:"work__controls"},m.a.createElement("li",{onClick:o,className:"work__control ".concat(0===c?"work__control--disabled":"")},m.a.createElement(d.a,{className:"work__icon",icon:u.faAngleLeft}),m.a.createElement("span",{className:"work__control-text"},"Prev")),m.a.createElement("li",{onClick:_,className:"work__control ".concat(c===E?"work__control--disabled":"")},m.a.createElement("span",{className:"work__control-text"},"Next"),m.a.createElement(d.a,{className:"work__icon",icon:w.faAngleRight})))),c>=2?m.a.createElement(v,{data:b}):m.a.createElement("section",{className:"work__content"},b.map(function(e,t){return p(e,t)})),m.a.createElement("div",{className:"work__wrapper--pdf"},m.a.createElement("a",{className:"work__pdf",href:"".concat("/czduan","/resume.pdf"),"aria-label":"To PDF of Resume"},"Want a PDF? Click Here")))}}}]);
(self.webpackChunkdsa_java=self.webpackChunkdsa_java||[]).push([[841],{9812:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),n=a(8902),l=a(1843),c=a(1979),i=a.n(c),s=l.j;function m(e){var t=e.data,a=t.markdownRemark,l=t.allMarkdownRemark.edges.map((function(e){return e.node.frontmatter})).sort(s),c=a.frontmatter,m=a.html,o=l.findIndex((function(e){return e.path===c.path})),h=o>0?r.createElement(n.ZP,{className:"prev",to:l[o-1].path},r.createElement("span",{className:"arrow"},"←")," "+l[o-1].title):null,u=o<l.length-1?r.createElement(n.ZP,{className:"next",to:l[o+1].path},l[o+1].title+" ",r.createElement("span",{className:"arrow"},"→")):null;return r.createElement("div",{className:"lesson-container"},r.createElement("div",{className:"lesson"},r.createElement("h1",null,c.title),r.createElement("h2",null,c.date),r.createElement("div",{className:"lesson-content",dangerouslySetInnerHTML:{__html:m}}),r.createElement("div",{className:"lesson-links"},h,u)),r.createElement("div",{className:"details-bg"},r.createElement(i(),null)))}},1843:function(e){function t(e){if(!/^\d+[A-Z]+$/.test(e))throw new Error(e+" does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)");return[/^\d+/.exec(e)[0],/[A-Z]+$/.exec(e)[0]]}var a=function(e){return e.split("").map((function(e,t){return e.charCodeAt(0)*Math.pow(10,t)})).reduce((function(e,t){return e+t}))};e.exports.j=function(e,r){var n,l;e.attributes&&e.attributes.order?(n=e.attributes.order,l=r.attributes.order):(n=e.order,l=r.order);var c=t(n),i=c[0],s=c[1],m=t(l),o=m[0],h=m[1];return i!==o?i-o:a(s)-a(h)}},1979:function(e,t,a){var r=a(7294);function n(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},[r.createElement("clipPath",{id:"clip-path",key:0},r.createElement("rect",{id:"Rectangle_2238","data-name":"Rectangle 2238",width:"154",height:"154",transform:"translate(9467 350)",fill:"#fff",stroke:"#707070",strokeWidth:"1"})),r.createElement("clipPath",{id:"clip-corner-image-active",key:1},r.createElement("rect",{width:"154",height:"154"}))]),r.createElement("g",{id:"corner-image-active",clipPath:"url(#clip-corner-image-active)",key:1},r.createElement("g",{id:"Corner-image-active-2","data-name":"Corner-image-active",transform:"translate(-9467 -350)",clipPath:"url(#clip-path)"},r.createElement("path",{id:"Subtraction_34","data-name":"Subtraction 34",d:"M-3857.365,1740.766h0l-7.07-7.07,12.89-12.89v14.142l-5.818,5.818Zm-14.142-14.142h0l-7.071-7.07,27.033-27.033v14.143l-19.96,19.96Zm-14.143-14.143h0l-7.07-7.069,41.175-41.175v14.142Zm-14.142-14.142h0l-7.07-7.069,55.317-55.317v14.142Zm-14.142-14.142h0l-7.07-7.069,69.459-69.459v14.142Zm-14.142-14.142h0l-7.07-7.069,76.739-76.739h6.862v7.28Zm-14.143-14.143h0l-7.07-7.069,62.6-62.6h14.142Zm-14.142-14.142h0l-7.07-7.069,48.454-48.454h14.142Zm-14.142-14.142h0l-7.07-7.069,34.312-34.312h14.142Zm-14.142-14.142h0l-7.07-7.069,20.17-20.17h14.142Zm-14.142-14.142h0l-7.071-7.071,6.027-6.027h14.144l-13.1,13.1Zm367.24-56.114v-.909l.455.455-.453.453Z",transform:"translate(13472.546 -1236.766)",fill:"var(--corner-fill)"})))])}n.defaultProps={width:"154",height:"154",viewBox:"0 0 154 154"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-templates-lesson-template-js-cdd0204d09c562c46426.js.map
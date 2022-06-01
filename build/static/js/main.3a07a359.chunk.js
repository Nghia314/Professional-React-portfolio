(this["webpackJsonpreact-portfolio-starter-code-files"]=this["webpackJsonpreact-portfolio-starter-code-files"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(7),i=c.n(n),r=(c(12),c(2)),l=c(0);var o=function(e){return Object(l.jsx)("div",{className:"navtabs is-centered",children:Object(l.jsx)("ul",{className:"nav nav-tabs",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(l.jsx)("li",{className:e.currentPage===t?"nav-item is-active":"nav-item",children:Object(l.jsx)("a",{href:"#"+t.toLowerCase(),onclick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link is-active":"nav-link",children:t})},t)}))})})};var j=function(){return Object(l.jsxs)("section",{className:"container",children:[Object(l.jsx)("h2",{className:"nav-title-font",children:"Nghia Le"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"mb-5",id:"avatar",src:"/images/portfolio.webp",alt:"Nghia Le"}),Object(l.jsx)("p",{children:"My name is Nghia Le and I have 3+ years of manager constrctions and I'm a student at Berkeley University bootcamp pursuing Full stack web development."})]})]})},h=c(3),m=c(5);var b=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(r.a)(n,2),o=i[0],j=i[1],b=c.name,d=c.email,u=c.message;function g(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"please enter a valid email")}else e.target.value.length?j(""):j("".concat(e.target.name," is required"));o||s(Object(m.a)(Object(m.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{className:"container",children:[Object(l.jsx)("h2",{"data-testid":"h1tag",className:"top-title",children:"Contact Form"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{class:"justify-content-center",id:"contact-form",children:[Object(l.jsxs)("div",{class:"mt-5",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{class:"form-control",type:"text",name:"name",defaultValue:b,onBlur:g})]}),Object(l.jsxs)("div",{class:"mt-5",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(l.jsx)("input",{type:"text",name:"email",class:"form-control",defaultValue:d,onBlur:g})]}),Object(l.jsxs)("div",{class:"mt-5",children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",class:"form-control",defaultValue:u,onBlur:g})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error",children:o})}),Object(l.jsx)("div",{class:"mt-5 mb-5",children:Object(l.jsx)("button",{"data-testid":"button",class:"btn btn-outline-dark",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})};c(6);var d=function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"img-container",children:Object(l.jsx)("img",{alt:e.name,src:""+e.images})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("p",{className:"card-title",children:e.name}),Object(l.jsxs)("p",{class:"project-icons-container",children:[Object(l.jsx)("a",{href:e.github,children:Object(l.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"github Repo"})}),Object(l.jsx)("a",{href:e.deploy,children:Object(l.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/color/48/000000/domain.png",alt:"Live action"})}),Object(l.jsx)("a",{href:e.video,children:Object(l.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/color/48/000000/youtube.png",alt:"demonstrate video"})})]})]})]})},u=[{id:1,name:"ARTKetplace",image:"/images/artketplace.png",github:"https://github.com/Nghia314/artketplace",deploy:"https://artketplace.herokuapp.com"},{id:2,name:"The Travel Center",image:"/images/the-travel-center.png",github:"https://github.com/Nghia314/the-travel-center",deploy:"https://nghia314.github.io/the-travel-center/"},{id:3,name:"Note Taker",image:"/images/note-taker.png",github:"https://github.com/Nghia314/Note-Taker",deploy:"https://note-taker-aop.herokuapp.com/"},{id:4,name:"E-Commerce-Backend",image:"/images/e-commerce-backend.png",github:"https://github.com/Nghia314/E-commerce-backend",video:"https://www.youtube.com/watch?v=ts8AyJVCEOQ"}];function g(e){return Object(l.jsx)("div",{className:"wrapper",children:e.children})}var O=function(){return Object(l.jsxs)("section",{className:"container",children:[Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("h2",{className:"top-title",children:"Portfolio"}),Object(l.jsx)("hr",{})]}),Object(l.jsx)(g,{id:"card-data",children:u.map((function(e){return Object(l.jsx)(d,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,video:e.video},e.id)}))})]})};var x=function(){return Object(l.jsxs)("section",{class:"container",children:[Object(l.jsx)("h2",{className:"top-title",children:"Resume"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{class:"mt-5",children:[Object(l.jsx)("h2",{className:"top-title",children:"Nghia Le"}),Object(l.jsx)("ul",{children:Object(l.jsx)("li",{children:"Manager Construction , full-stack web developer"})}),Object(l.jsx)("p",{class:"mt-5",children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/nghia-le-4a2b9b232/",children:Object(l.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"inkedIn"})})}),Object(l.jsx)("a",{href:"https://docs.google.com/document/d/1i1ZPNqccVKauzvgAOQi6r9cdVlGoepyu/edit?usp=sharing",class:"link",children:"Download Resume"})]})}),Object(l.jsx)("div",{class:"justify-content-center mt-5",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"top-title",children:"Proficiencies"}),Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{children:["HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js,",Object(l.jsx)("br",{}),"Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, APIs, Templating."]})})]})})]})};var p=function(){var e=Object(a.useState)("About"),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"head",children:[Object(l.jsx)("nav",{className:"nav-link ",children:Object(l.jsx)("div",{className:"text-light",children:Object(l.jsx)("a",{className:"navbar-item",rel:"noreferrer",target:"_blank",href:"https://github.com/Nghia314",children:Object(l.jsx)("span",{className:"nav-title-font",children:"Nghia Le"})})})}),Object(l.jsx)(o,{currentPage:c,handlePageChange:s})]}),Object(l.jsx)("main",{children:Object(l.jsx)("div",{children:function(){switch(c){case"About":return Object(l.jsx)(j,{});case"Portfolio":return Object(l.jsx)(O,{});case"Contact":return Object(l.jsx)(b,{});case"Resume":return Object(l.jsx)(x,{});default:return Object(l.jsx)(j,{})}}()})})]})};var v=function(){return Object(l.jsxs)("footer",{className:"footer fixed-bottom",children:[Object(l.jsx)("a",{href:"https://github.com/Nghia314",children:Object(l.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Github",className:"icon"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/nghia-le-4a2b9b232/",children:Object(l.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"Github",className:"icon"})}),Object(l.jsx)("a",{href:"Mailto:Davidle314@hotmail.com",children:Object(l.jsx)("img",{src:"https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-email-notifications-justicon-flat-justicon.png",alt:"Github",className:"icon"})}),Object(l.jsx)("a",{href:"tel:9168907740",children:Object(l.jsx)("img",{src:"https://img.icons8.com/external-flat-juicy-fish/60/000000/external-phone-contact-us-flat-flat-juicy-fish-2.png",alt:"Github",className:"icon"})})]})};var f=function(){return Object(l.jsxs)("div",{className:"ray",children:[Object(l.jsx)(p,{}),Object(l.jsx)(v,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),N()}},[[14,1,2]]]);
//# sourceMappingURL=main.3a07a359.chunk.js.map
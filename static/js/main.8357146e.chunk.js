(this["webpackJsonpcode-wanderer-frontend"]=this["webpackJsonpcode-wanderer-frontend"]||[]).push([[0],{32:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),c=(n(32),n(1)),a=n.n(c),s=n(19),o=n.n(s),i=n(17),l=n(27),d=n(5),u=n(25),h=n(4);var j=n(14),p=n(9),b=n(10),m=n(12),g=n(11),O=Object(d.b)((function(e){return{categories:e.categories}}))((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(j.b,{class:"header2",to:"/categories/".concat(e.category.id,"/resources"),children:Object(r.jsxs)("div",{class:"box-1",children:[" ",Object(r.jsx)("button",{class:"btn btn-one",children:e.category.name})," "]})})})})),f=Object(d.b)((function(e){return{categories:e.categories}}))((function(e){return Object(r.jsx)("div",{children:e.categories.map((function(e){return Object(r.jsx)(O,{category:e},e.id)}))})})),x=n(16),w=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(t){t.preventDefault();var n=t.target.dataset.categoryid,r=t.target.dataset.resourceid;e.props.deleteResource(n,r)},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("li",{children:[Object(r.jsxs)("a",{class:"Thx",href:this.props.resource.img_url,children:[Object(r.jsx)("img",{src:this.props.resource.img_url,alt:this.props.resource.name,width:"150",height:"150"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),this.props.resource.name]}),Object(r.jsx)("button",{class:"glow-on-hover",type:"button",onClick:this.handleClick,"data-resourceid":this.props.resource.id,"data-categoryid":this.props.resource.category_id,children:"-Delete-"})]},this.props.resource.id)})}}]),n}(c.Component),y=Object(d.b)(null,{deleteResource:function(e,t){return function(n){fetch("https://code-wanderer-backend.herokuapp.com/categories/".concat(e,"/resources/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return n({type:"DELETE_RESOURCE",payload:e})}))}}})(w),v=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={name:""},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value)),e.filterResourcesFromInput()},e.filterResourcesFromInput=function(){return e.props.category.resources.filter((function(t){return t.name.toUpperCase().includes(e.state.name.toUpperCase())}))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{class:"newnewnew",placeholder:"SEARCH",type:"text",name:"name",onChange:this.handleChange,value:this.state.name}),Object(r.jsx)("ul",{children:this.filterResourcesFromInput().map((function(e){return Object(r.jsx)(y,{resource:e},e.id)}))})]})}}]),n}(a.a.Component),k=function(){return Object(r.jsxs)("div",{id:"Thx",children:[Object(r.jsx)("div",{class:"one",children:Object(r.jsx)("h1",{class:"one",children:"CODE WANDERER"})}),Object(r.jsx)("p",{children:"FOR CODE NEWBIES"}),Object(r.jsxs)("div",{class:"links",children:[Object(r.jsx)(j.b,{class:"header",to:"/",children:Object(r.jsx)("button",{class:"glow-on-hover",children:"Home"})}),Object(r.jsx)(j.b,{class:"header",to:"/categories/:id/resources/new",children:Object(r.jsx)("button",{class:"glow-on-hover",children:"Create"})}),Object(r.jsx)(j.b,{class:"header",to:"/categories",children:Object(r.jsx)("button",{class:"glow-on-hover",children:"View"})})]})]})},E=n(3);var C=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{class:"sidebar",children:[Object(r.jsx)("div",{class:"Thx",children:"DANK MEMES"}),Object(r.jsx)("div",{class:"content",children:Object(r.jsx)("a",{href:"https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20200330_011818_dvukiy.jpg",children:Object(r.jsx)("img",{className:"Thx",src:"https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20200330_011818_dvukiy.jpg",alt:"meme",class:"content"})})}),Object(r.jsx)("div",{class:"content",children:Object(r.jsx)("a",{href:"https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/download_nfnwb2.jpg",children:Object(r.jsx)("img",{className:"d-block",src:"https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/download_nfnwb2.jpg",alt:"meme",class:"content"})})}),Object(r.jsx)("div",{class:"content",children:Object(r.jsx)("a",{href:"https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20_rvhzar.png",children:Object(r.jsx)("img",{className:"content",src:"https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20_rvhzar.png",alt:"meme",class:"content"})})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{class:"neon",children:" PROGRAMMER PLAYLIST "}),Object(r.jsxs)("ul",{class:"home",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{children:Object(r.jsx)("a",{class:"likeP",href:"https://www.youtube.com/watch?list=PLLAZ4kZ9dFpO90iMas70Tt4_wYjhLGkya&v=CIe1DxrSrhs&feature=emb_title",target:"_blank",children:"RUBY"})}),Object(r.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/videoseries?list=PLLAZ4kZ9dFpO90iMas70Tt4_wYjhLGkya",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{children:Object(r.jsx)("a",{class:"likeP",href:"https://www.youtube.com/watch?v=-MlNBTSg_Ww&feature=emb_title",target:"_blank",children:"REACT"})}),Object(r.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/-MlNBTSg_Ww",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{children:Object(r.jsx)("a",{class:"likeP",href:"https://www.youtube.com/watch?v=OILrg4658JA&feature=emb_title",target:"_blank",children:"MUSIC"})}),Object(r.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/OILrg4658JA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("p",{children:Object(r.jsx)("a",{class:"likeP",href:"https://www.youtube.com/watch?v=ObZwFExwzOo&feature=emb_title",target:"_blank",children:"TECH"})}),Object(r.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/ObZwFExwzOo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})]})]})]})},_=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={categoryId:"",name:"",img_url:""},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log("a"),e.props.addResource(e.state),console.log("g"),console.log(e.state);var n=e.state.categoryId;e.props.history.push("/categories/".concat(n,"/resources")),e.setState({categoryId:"",name:"",img_url:""})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{class:"form",children:[Object(r.jsx)("p",{children:" ADD A RESOURCE!"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsxs)("select",{name:"categoryId",onChange:this.handleChange,value:this.state.categoryId,id:"category",children:[Object(r.jsx)("option",{children:"Category"}),this.props.categories.map((function(e){return Object(r.jsxs)("option",{value:e.id,children:[" ",e.name," "]},e.id)}))]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{children:"Resource Name:"}),Object(r.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{children:"Resource URL: "}),Object(r.jsx)("input",{type:"text",name:"img_url",value:this.state.img_url,onChange:this.handleChange}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"submit"})]})]})}}]),n}(a.a.Component),S=Object(d.b)((function(e){return{categories:e.categories}}),{addResource:function(e){var t=Object(h.a)({},e),n=t.categoryId;return delete t.categoryId,t.category_id=n,console.log("b"),function(t){console.log("c"),fetch("https://code-wanderer-backend.herokuapp.com/categories/".concat(n,"/resources"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("d"),e.error?alert(e.error):t({type:"ADD_RESOURCE",payload:e})})),console.log("e")}}})(_),R=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[window.open("".concat(this.props.wanders.link)),window.location.assign("https://johnjamesmarshalljr.github.io/code-wanderer-frontend/")]})}}]),n}(c.Component),A=Object(d.b)((function(e){return{wanders:e.wanders}}))(R);var D=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isClicked:!1},e.handleClick=function(){e.props.shuffleWanders(e.props.wanders),e.setState({isClicked:!0})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=!0===this.state.isClicked;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{class:"btn btn-two",onClick:this.handleClick,children:"WANDER"}),e?Object(r.jsx)(A,{}):null]})}}]),n}(c.Component),T=Object(d.b)(null,{shuffleWanders:function(e){return{type:"SHUFFLE_WANDERS",payload:e}}})(D),I=function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsx)(r.Fragment,{children:"Created by JJ Marshall"})})},L=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.fetchCategories()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(k,{}),Object(r.jsx)(T,{wanders:[{id:1,name:"jsHolyGrail",link:"https://docs.google.com/document/d/13zS64bha7k0RT_zM2KgRLhDGMav01BIuJjdLMyHDfGA/edit"},{id:2,name:"htmlDomEvents",link:"https://www.w3schools.com/jsref/dom_obj_event.asp"},{id:3,name:"scrimba",link:"https://scrimba.com/allcourses"},{id:4,name:"serializers",link:"https://itnext.io/a-quickstart-guide-to-using-serializer-with-your-ruby-on-rails-api-d5052dea52c5"},{id:5,name:"expressionsVsStatements",link:"https://2ality.com/2012/09/expressions-vs-statements.html"},{id:6,name:"functionExpression",link:"https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function"},{id:7,name:"destructuring",link:"https://scrimba.com/scrim/cnVZVHE?pl=p7v3gCd"},{id:8,name:"jsProject",link:"https://medium.com/swlh/javascript-project-flatiron-school-bd7c1f3aebd7"},{id:9,name:"deployingHeroku",link:"https://medium.com/@siobhanpmahoney/deploying-a-react-frontend-rails-backend-project-to-heroku-4b2c4f6f630c"},{id:10,name:"components",link:"https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb"},{id:11,name:"justJava",link:"https://justjavascript.com/"},{id:12,name:"overreacted",link:"https://overreacted.io/"},{id:13,name:"sharkle",link:"https://sharkle.com/"},{id:14,name:"vizualizer",link:"http://iacopoapps.appspot.com/hopalongwebgl/"},{id:15,name:"electricLines",link:"https://codepen.io/hexapode/full/XJPKWY/"},{id:16,name:"dancingInstances",link:"https://guillaumegouessan.com/sketches/dancing-instances/"},{id:17,name:"insideFiber",link:"https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e"},{id:18,name:"understandingGit",link:"https://hackernoon.com/understanding-git-fcffd87c15a3"},{id:19,name:"framerMotion",link:"https://www.framer.com/motion/"},{id:20,name:"cSharpUnity",link:"https://unity3d.com/learning-c-sharp-in-unity-for-beginners"},{id:21,name:"sass",link:"https://sass-lang.com/"},{id:22,name:"flutter",link:"https://flutter.dev/"},{id:23,name:"flexBox",link:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},{id:24,name:"greenSock",link:"https://greensock.com/"},{id:25,name:"figma",link:"https://www.figma.com/"},{id:26,name:"express",link:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"},{id:27,name:"githubPages",link:"https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48"},{id:28,name:"buttonGenerator",link:"https://www.bestcssbuttongenerator.com/#/0"},{id:29,name:"coolPortfolio",link:"https://khang-nd.github.io/"},{id:30,name:"reactProjectBlog",link:"https://medium.com/@julianafogg/react-redux-portfolio-project-804ba6268ea0"},{id:31,name:"combineReducers",link:"https://egghead.io/lessons/react-redux-implementing-combinereducers-from-scratch"},{id:32,name:"carousel",link:"https://getbootstrap.com/docs/4.0/components/carousel/"},{id:33,name:"reactAndRails",link:"https://www.newline.co/fullstack-react/articles/how-to-get-create-react-app-to-work-with-your-rails-api/"}]}),Object(r.jsx)(E.a,{exact:!0,path:"/",render:function(e){return Object(r.jsx)(C,Object(h.a)({},e))}}),Object(r.jsx)(E.a,{exact:!0,path:"/categories/:id/resources",render:function(t){var n=parseInt(t.match.params.id),c=e.props.categories.find((function(e){return e.id===n}));return c?Object(r.jsx)(v,{category:c}):Object(r.jsx)("div",{children:" Loading... "})}}),Object(r.jsx)(E.a,{exact:!0,path:"/categories",component:f}),Object(r.jsx)(E.a,{exact:!0,path:"/categories/:id/resources/new",render:function(e){return Object(r.jsx)(S,Object(h.a)({},e))}}),Object(r.jsx)(I,{})]})}}]),n}(a.a.Component),F=Object(d.b)((function(e){return{categories:e.categories}}),{fetchCategories:function(){return function(e){fetch("https://code-wanderer-backend.herokuapp.com/categories/").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_CATEGORIES",payload:t})}))}}})(L),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,N=Object(i.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{categories:[],resources:[],wanders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES":return Object(h.a)(Object(h.a)({},e),{},{categories:t.payload});case"GET_RESOURCES":var n=t.payload;return Object(h.a)(Object(h.a)({},e),{},{resources:n.resources});case"ADD_RESOURCE":var r=e.categories.map((function(e){return e.id===t.payload.category_id?Object(h.a)(Object(h.a)({},e),{},{resources:[].concat(Object(u.a)(e.resources),[t.payload])}):e}));return Object(h.a)(Object(h.a)({},e),{},{categories:r,resources:[].concat(Object(u.a)(e.resources),[t.payload])});case"DELETE_RESOURCE":var c=e.categories.find((function(e){return e.id===t.payload.category_id})),a=c.resources.filter((function(e){return e.id!==t.payload.id}));c.resources=a;var s=e.categories.map((function(e){return e.id===c.id?c:e}));return Object(h.a)(Object(h.a)({},e),{},{categories:s});case"SHUFFLE_WANDERS":var o=t.payload,i=Math.floor(Math.random()*o.length),l=o[i];return Object(h.a)(Object(h.a)({},e),{},{wanders:l});default:return e}}),M(Object(i.a)(l.a)));o.a.render(Object(r.jsx)(d.a,{store:N,children:Object(r.jsx)(j.a,{children:Object(r.jsx)(F,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8357146e.chunk.js.map
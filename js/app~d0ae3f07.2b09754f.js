(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={"app~d0ae3f07":0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vuejs-portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;a.push([0,"chunk-vendors~0f485567","chunk-vendors~ac0f77ce","chunk-vendors~82b88a00","chunk-vendors~4df2fc4f","chunk-vendors~f9862c3f","chunk-vendors~6f27f355","chunk-vendors~5ce4fade","chunk-vendors~eb7344d5","chunk-vendors~ab9cc731","chunk-vendors~4bc2da00","chunk-vendors~f414210c","chunk-vendors~6bcf42e1","chunk-vendors~1187b811","chunk-vendors~7a8621bb","chunk-vendors~3567b4a7","chunk-vendors~7e2e2373","chunk-vendors~f8ef863f","chunk-vendors~52f44a73","chunk-vendors~6937032c","chunk-vendors~36c5d7d2","chunk-vendors~d4c9f4a7","chunk-vendors~d939e436","chunk-vendors~b58f7129","chunk-vendors~fdc6512a"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0db0":function(t,e,n){},1439:function(t,e,n){"use strict";n("75a0")},"169e":function(t,e,n){"use strict";n("42d7")},"170a":function(t,e,n){t.exports=n.p+"img/Octocat.1cfa76e9.png"},"1e22":function(t,e,n){t.exports=n.p+"img/photo.e6048d54.jpg"},"24f1":function(t,e,n){"use strict";n("b1c4")},"279c":function(t,e,n){t.exports=n.p+"img/postgres.21eea274.png"},"2f60":function(t,e,n){},3437:function(t,e,n){},"35ef":function(t,e,n){var i={"./pms.png":"ad00","./rms.png":"8fb2"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="35ef"},"3e92":function(t,e,n){},"3f3d":function(t,e,n){"use strict";n("da22")},4278:function(t,e,n){"use strict";n("ec51")},"42d7":function(t,e,n){},4623:function(t,e,n){t.exports=n.p+"img/drf.37921ea7.png"},"4d42":function(t,e,n){t.exports=n.p+"img/js.a00831a7.png"},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},"50c46":function(t,e,n){"use strict";n("0db0")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=n("5f5b"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{staticClass:"wrapper",attrs:{name:"fade",tag:"div",mode:"out-in"}},[t.isLoaded?n("div",{staticClass:"wrapper",attrs:{id:"app"}},[n("LandingPage",{attrs:{user:t.user}}),n("Description",{attrs:{user:t.user,content:t.findSlug("description"),links:t.findSlug("links")}}),n("Experience",{attrs:{content:t.findSlug("experiences")}}),n("Skills",{attrs:{skills:t.skills}}),n("Projects",{attrs:{projects:t.projects}}),n("Footer",{attrs:{user:t.user,links:t.findSlug("links")}})],1):t._e()])},r=[],o=n("3835"),c=(n("4de4"),n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header parallax"},[n("div",{staticClass:"name"},[n("div",{staticClass:"wrapper-name"},[n("AnimateOnVisible",{attrs:{name:"fadeDown",":duration":1}},[n("h1",[t._v(t._s(t.user.name))])]),n("hr"),n("AnimateOnVisible",{attrs:{name:"fadeUp",":duration":1}},[n("p",[t._v(t._s(t.user.status))])])],1)])])}),l=[],d={name:"LandingPage",props:["user"]},u=d,p=(n("ad66"),n("2877")),f=Object(p["a"])(u,c,l,!1,null,"31f7b0b1",null),h=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{attrs:{id:"about"}},[n("canvas",{attrs:{id:"myCanvas"}}),n("AnimateOnVisible",{attrs:{name:"fadeRight",duration:1}},[n("div",{staticClass:"section-content"},[n("Title",{attrs:{title:t.content.metadata.title,description:t.content.metadata.description}}),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-center"},[n("Photo",{attrs:{user:t.user}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7 mr-auto card-mobile"},[n("Presentation",{attrs:{content:t.content}})],1),n("div",{staticClass:"col-md-4 card-mobile"},[n("PersonnalCard",{attrs:{user:t.user,links:t.links}})],1)])])],1)])],1)])},g=[],v=(n("cb29"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.title))]),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"text-wrapper"},[t._v(t._s(t.description))])])])}),b=[],y={name:"Title",props:["title","description"]},k=y,x=(n("753e"),Object(p["a"])(k,v,b,!1,null,"5b3b447a",null)),w=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(t._s(t.user.name))]),n("div",{staticClass:"data"},[n("strong",[t._v("E-mail:")]),t._v(" "+t._s(t.user.email))]),n("div",{staticClass:"data"},[n("strong",[t._v("Phone:")]),t._v(" "+t._s(t.user.phone))]),n("div",{staticClass:"data"},[n("strong",[t._v("City:")]),t._v(" "+t._s(t.user.city))]),n("div",{staticClass:"data"},[n("strong",[t._v("Languages:")]),t._v(" "+t._s(t.user.lang))]),n("SocialBar",{attrs:{links:t.links}})],1)},A=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-wrap"},[n("ul",{staticClass:"social-bar"},[n("li",[n("a",{attrs:{href:t.links.metadata.linkedin,target:"_blank"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","linkedin"]}})],1)]),n("li",[n("a",{attrs:{href:t.links.metadata.github,target:"_blank"}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github-square"]}})],1)])])])},O=[],S={name:"SocialBar",props:["links"]},P=S,L=(n("8157"),Object(p["a"])(P,j,O,!1,null,"0d76bf2f",null)),T=L.exports,U={name:"PersonnalCard",props:["user","links"],components:{SocialBar:T}},M=U,E=(n("cd9b"),Object(p["a"])(M,C,A,!1,null,"1a1ad366",null)),B=E.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paragraph"},[n("h3",[t._v(t._s(t.content.metadata.pres_title))]),n("div",{staticClass:"begin"},[t._v(t._s(t.content.metadata.pres_first))]),n("p",{staticClass:"begin"},[t._v(t._s(t.content.metadata.pres_second))])])},I=[],R={name:"Description",props:["content"]},_=R,q=(n("57a9"),Object(p["a"])(_,V,I,!1,null,"0382746b",null)),F=q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"photo"},[n("a",[n("img",{attrs:{src:t.getImgUrl("photo.jpg"),alt:"photo"}})])])])},N=[],J={name:"Photo",props:["user"],methods:{getImgUrl:function(t){return n("bb6e")("./"+t)}}},Y=J,W=(n("1439"),Object(p["a"])(Y,K,N,!1,null,"0f85b259",null)),D=W.exports,H={name:"AboutMe",props:["user","content","links"],components:{Title:w,PersonnalCard:B,Presentation:F,Photo:D},mounted:function(){var t,e,n,i,s,a,r,o,c,l,d;function u(t,e){this.anchorX=t,this.anchorY=e,this.x=Math.random()*(t-(t-l))+(t-l),this.y=Math.random()*(e-(e-l))+(e-l),this.vx=2*Math.random()-1,this.vy=2*Math.random()-1,this.energy=100*Math.random(),this.radius=Math.random(),this.siblings=[],this.brightness=0}function p(){e.clearRect(0,0,t.width,t.height),i=[];for(var n=o;n<t.width;n+=o)for(var s=o;s<t.height;s+=o)i.push(new u(n,s)),c++}function f(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function h(){for(var t,e,n,s=0;s<c;s++){t=i[s],t.siblings=[];for(var o=0;o<c;o++)if(e=i[o],t!==e&&(n=f(t,e),n<a))if(t.siblings.length<r)t.siblings.push(e);else{for(var l,d=0,u=0,p=0;p<r;p++)d=f(t,t.siblings[p]),d>u&&(u=d,l=p);n<u&&(t.siblings.splice(l,1),t.siblings.push(e))}}}function m(){var n,a,r;for(v(),e.clearRect(0,0,t.width,t.height),h(),n=0;n<c;n++)a=i[n],r=f({x:s.x,y:s.y},a),a.brightness=r<d?1-r/d:0;for(n=0;n<c;n++)a=i[n],a.brightness&&(a.drawNode(),a.drawConnections()),a.moveNode();requestAnimationFrame(m)}function g(){document.addEventListener("resize",v,!1),t.addEventListener("mousemove",b,!1)}function v(){t.width=window.innerWidth,t.height=window.innerHeight}function b(t){s.x=t.clientX,s.y=t.clientY}a=100,r=10,o=50,c=0,l=20,d=200,n=2*Math.PI,i=[],t=document.getElementById("myCanvas"),v(),s={x:t.width/2,y:t.height/2},e=t.getContext("2d"),e||alert("Ooops! Your browser does not support canvas :'("),u.prototype.drawNode=function(){var t="rgba(244, 1, 1, "+this.brightness+")";e.beginPath(),e.arc(this.x,this.y,2*this.radius+2*this.siblings.length/r,0,n),e.fillStyle=t,e.fill()},u.prototype.drawConnections=function(){for(var t=0;t<this.siblings.length;t++){var n="rgba(222, 222, 222, "+this.brightness+")";e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(this.siblings[t].x,this.siblings[t].y),e.lineWidth=1-f(this,this.siblings[t])/a,e.strokeStyle=n,e.stroke()}},u.prototype.moveNode=function(){this.energy-=2,this.energy<1&&(this.energy=100*Math.random(),this.x-this.anchorX<-l?this.vx=2*Math.random():this.x-this.anchorX>l?this.vx=-2*Math.random():this.vx=4*Math.random()-2,this.y-this.anchorY<-l?this.vy=2*Math.random():this.y-this.anchorY>l?this.vy=-2*Math.random():this.vy=4*Math.random()-2),this.x+=this.vx*this.energy/100,this.y+=this.vy*this.energy/100},g(),p(),m()}},X=H,Z=(n("4278"),Object(p["a"])(X,m,g,!1,null,"1a6c4feb",null)),G=Z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"experience"}},[n("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[n("Title",{staticClass:"title",attrs:{title:t.content.metadata.title,description:t.content.metadata.description}})],1),n("AnimateOnVisible",{attrs:{name:"fadeUp",duration:1}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("ExperienceColumn",{staticClass:"col-12 col-md left",attrs:{posts:t.content.metadata.academic,title:"Education"}}),n("ExperienceColumn",{staticClass:"col-12 col-md right",attrs:{posts:t.content.metadata.professional,title:"Professional"}})],1)])])],1)},z=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"color-light"},[t._v(t._s(t.title))]),t._l(t.posts,(function(e,i){return n("div",{key:i,staticClass:"resume-item"},[n("div",{staticClass:"year color-darker"},[t._v(t._s(e.year))]),n("div",{staticClass:"resume-description"},[n("strong",{staticClass:"color-light",domProps:{innerHTML:t._s(e.title)}})]),n("div",{staticClass:"color-darker",domProps:{innerHTML:t._s(e.content)}})])}))],2)},tt=[],et={name:"ExperienceColumn",props:["posts","title"]},nt=et,it=(n("169e"),Object(p["a"])(nt,$,tt,!1,null,"1119443e",null)),st=it.exports,at={name:"Experience",props:["content"],components:{Title:w,ExperienceColumn:st}},rt=at,ot=(n("6b8d"),Object(p["a"])(rt,Q,z,!1,null,"364bfec4",null)),ct=ot.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"skills"}},[n("canvas",{attrs:{id:"myCanvas"}}),n("div",{staticClass:"section-content"},[n("Title",{attrs:{title:"SKILLS",description:"WHAT IM GOOD AT"}}),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row d-flex flex-wrap align-items-center"},t._l(t.skills.metadata.items,(function(e,i){return n("div",{key:i,staticClass:"col-md-2 m-auto pb-4"},[n("AnimateOnVisible",{attrs:{name:"bounce"}},[n("img",{staticClass:"img-responsive mx-auto d-block",attrs:{id:"imgLogo",src:t.getImgUrl(e.img),alt:e.title}}),n("div",{staticClass:"altCaption text-center",attrs:{id:"divAlt"}},[t._v(t._s(e.title))])])],1)})),0)])],1)])},dt=[],ut={name:"Skills",components:{Title:w},props:["skills"],methods:{getImgUrl:function(t){return n("7e92")("./"+t)}},mounted:function(){var t,e,n,i,s,a,r,o,c,l,d;function u(t,e){this.anchorX=t,this.anchorY=e,this.x=Math.random()*(t-(t-l))+(t-l),this.y=Math.random()*(e-(e-l))+(e-l),this.vx=2*Math.random()-1,this.vy=2*Math.random()-1,this.energy=100*Math.random(),this.radius=Math.random(),this.siblings=[],this.brightness=0}function p(){e.clearRect(0,0,t.width,t.height),i=[];for(var n=o;n<t.width;n+=o)for(var s=o;s<t.height;s+=o)i.push(new u(n,s)),c++}function f(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function h(){for(var t,e,n,s=0;s<c;s++){t=i[s],t.siblings=[];for(var o=0;o<c;o++)if(e=i[o],t!==e&&(n=f(t,e),n<a))if(t.siblings.length<r)t.siblings.push(e);else{for(var l,d=0,u=0,p=0;p<r;p++)d=f(t,t.siblings[p]),d>u&&(u=d,l=p);n<u&&(t.siblings.splice(l,1),t.siblings.push(e))}}}function m(){var n,a,r;for(v(),e.clearRect(0,0,t.width,t.height),h(),n=0;n<c;n++)a=i[n],r=f({x:s.x,y:s.y},a),a.brightness=r<d?1-r/d:0;for(n=0;n<c;n++)a=i[n],a.brightness&&(a.drawNode(),a.drawConnections()),a.moveNode();requestAnimationFrame(m)}function g(){document.addEventListener("resize",v,!1),t.addEventListener("mousemove",b,!1)}function v(){t.width=window.innerWidth,t.height=window.innerHeight}function b(t){s.x=t.clientX,s.y=t.clientY}a=100,r=10,o=50,c=0,l=20,d=200,n=2*Math.PI,i=[],t=document.getElementById("myCanvas"),v(),s={x:t.width/2,y:t.height/2},e=t.getContext("2d"),e||alert("Ooops! Your browser does not support canvas :'("),u.prototype.drawNode=function(){var t="rgba(244, 1, 1, "+this.brightness+")";e.beginPath(),e.arc(this.x,this.y,2*this.radius+2*this.siblings.length/r,0,n),e.fillStyle=t,e.fill()},u.prototype.drawConnections=function(){for(var t=0;t<this.siblings.length;t++){var n="rgba(222, 222, 222, "+this.brightness+")";e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(this.siblings[t].x,this.siblings[t].y),e.lineWidth=1-f(this,this.siblings[t])/a,e.strokeStyle=n,e.stroke()}},u.prototype.moveNode=function(){this.energy-=2,this.energy<1&&(this.energy=100*Math.random(),this.x-this.anchorX<-l?this.vx=2*Math.random():this.x-this.anchorX>l?this.vx=-2*Math.random():this.vx=4*Math.random()-2,this.y-this.anchorY<-l?this.vy=2*Math.random():this.y-this.anchorY>l?this.vy=-2*Math.random():this.vy=4*Math.random()-2),this.x+=this.vx*this.energy/100,this.y+=this.vy*this.energy/100},g(),p(),m()}},pt=ut,ft=(n("3f3d"),Object(p["a"])(pt,lt,dt,!1,null,"3e46f2ec",null)),ht=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"projects"}},[n("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[n("Title",{staticClass:"title",attrs:{title:"MY PROJECTS",description:"WHAT I HAVE MADE"}})],1),n("div",{staticClass:"container-fluid center-block"},[n("article",{staticClass:"content text-center"},t._l(t.projects.metadata.items,(function(e,i){return n("AnimateOnVisible",{key:i,staticClass:"timeline mx-auto",attrs:{name:"fadeLeft",duration:.5}},[n("vue-timeline-update",{attrs:{date:e.date,title:e.title,description:e.content,thumbnail:t.getImgUrl(e.image),color:e.color,category:e.tag,icon:"code"}})],1)})),1)])],1)},gt=[],vt=(n("ac1f"),{name:"Projects",props:["projects"],components:{Title:w},methods:{getImgUrl:function(t){return void 0===t||""===t?"":null!==/.*:\/\/.*/.exec(t)?t:n("35ef")("./"+t)}}}),bt=vt,yt=(n("50c46"),Object(p["a"])(bt,mt,gt,!1,null,"053c1d60",null)),kt=yt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",[n("font-awesome-icon",{staticClass:"copyright-icon",attrs:{icon:"copyright"}}),t._v(" "+t._s((new Date).getFullYear())+" "+t._s(t.user.name)+" | Credits to @viryl15 for the template. Get this template at "),n("a",{attrs:{href:"https://github.com/viryl15/vuejs-portfolio",target:"_blank"}},[t._v("here")]),t._v(" ! ")],1),n("SocialBar",{attrs:{links:t.links}})],1)},wt=[],Ct={name:"Footer",props:["user","links"],components:{SocialBar:T}},At=Ct,jt=(n("24f1"),Object(p["a"])(At,xt,wt,!1,null,"4f0794ee",null)),Ot=jt.exports,St=[{_id:"5f011c5b90e9e00007825ea8",order:5,slug:"experiences",title:"experiences",content:"",metadata:{description:"Professional and academic",title:"Experience",professional:[{year:"03.2022 - 05.2023",title:"Jr. Backend Developer",content:"Starter Nepal Pvt Ltd"}],academic:[{year:"2017 - 2022",title:"Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)",content:"National College of Computer Studies (NCCS)"},{year:"2017",title:"Plus Two(+2)",content:"Prime College"},{year:"2015",title:"School Leaving Certificate(S.L.C)",content:"BernHardt Higher Secondary School"}]}},{_id:"5f01fd8350006f00083229f5",order:4,slug:"description",title:"description",content:"",metadata:{pres_second:" My journey so far has been in crafting robust APIs and manipulating data. When I'm not immersed in building application, writing lines of code, I tend to explore new technologies and try integrating them along my works.",pres_first:"I'm a Python Developer with a strong focus on backend API creation and data ETL (Extract, Transform, Load) processes. Graduated in Bachelor of Science in Computer Science and Information Technology (BSc.CSIT).",pres_title:"Who am I ?",description:"Hope to know you after",title:"About Me"}},{_id:"5f01fee250006f00083229f7",order:3,slug:"user-data",title:"user-data",content:"",metadata:{name:"Yubraj Maharjan",status:"Backend Developer",email:"yubmaharjan322@gmail.com",phone:"+977 9849784723",city:"Kathamdu, Nepal",lang:"Nepali, English",photo:"photo.jpg"}},{_id:"5f0204d6ea1bf90007ad680f",order:2,slug:"links",title:"links",content:"",metadata:{linkedin:"https://www.linkedin.com/in/yub-maharjan-7b4b9021b/",github:"https://github.com/Yub-0"}},{_id:"5f02127c1b1b930007b5896c",order:1,slug:"skills",title:"skills",content:"",metadata:{items:[{title:"Python",img:"python.png"},{title:"Django",img:"django.png"},{title:"Django Rest Framework",img:"drf.png"},{title:"PostgreSQL",img:"postgres.png"},{title:"JavaScript",img:"js.png"},{title:"VueJS",img:"vuejs.png"},{title:"Linux",img:"linux.png"},{title:"Git/Github",img:"Octocat.png"},{title:"Nginx",img:"nginx.png"}],title:"Skills",description:"Here is my armament"}},{_id:"5f023635b7e93b000741a246",order:0,slug:"projects",title:"projects",content:"",metadata:{items:[{company:"t",title:"Pharmacy Management System (At Starter Nepal)",content:"Web App for pharmacy to keep track of their medicine sales and stock. Features include sales report generation, patient management and laboratory.<br><br>Link : <a href='https://hmsdemo.starternepal.com/#/'>https://hmsdemo.starternepal.com/#/</a>",link:"https://hmsdemo.starternepal.com/#/",image:"pms.png",tag:"Software",color:"blue",date:"2022-08-10"},{company:"t",title:"Restaurant Management System (At Starter Nepal)",content:"Web App for restaurants to manage their day to day work. Has an inventory management features along with report generation.<br><br>Link : <a href='https://rmsdemo.starternepal.com/#/'>https://rmsdemo.starternepal.com/#/</a>",link:"https://rmsdemo.starternepal.com/#/",image:"rms.png",tag:"Software",color:"orange",date:"2022-12-10"}],title:"My projects",description:"This is my story"}}],Pt={name:"App",components:{LandingPage:h,Description:G,Experience:ct,Skills:ht,Projects:kt,Footer:Ot},data:function(){return{isLoaded:!1,user:{},posts:[],skills:[],projects:[]}},methods:{fetchProjects:function(){var t=St.filter((function(t){return 0===t.order}));return t[0]},fetchPosts:function(){var t=St.filter((function(t){return 0===t.order}));return t[0]},fetchSkills:function(){var t=St.filter((function(t){return 1===t.order}));return t[0]},fetchUser:function(){var t=St.filter((function(t){return 3===t.order}));return t[0]},findSlug:function(t){var e=St.filter((function(e){return e.slug===t}));return e[0]}},created:function(){var t=this;document.body.classList.add("loading"),Promise.all([this.fetchPosts(),this.fetchSkills(),this.fetchProjects(),this.fetchUser()]).then((function(e){var n=Object(o["a"])(e,4),i=n[0],s=n[1],a=n[2],r=n[3];t.posts=i.objects,t.skills=s,t.projects=a,t.user={name:r.metadata.name,status:r.metadata.status,email:r.metadata.email,phone:r.metadata.phone,city:r.metadata.city,lang:r.metadata.lang,photo:r.metadata.photo},t.isLoaded=!0,t.$nextTick((function(){return document.body.classList.remove("loading")}))}))}},Lt=Pt,Tt=(n("f5ea"),Object(p["a"])(Lt,a,r,!1,null,"115fd83b",null)),Ut=Tt.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:t.name,appear:t.appear}},[t.isVisible?n("div",{style:{animationDuration:t.duration+"s",transitionDuration:t.duration+"s"}},[t._t("default")],2):t._e()])],1)},Et=[],Bt=(n("a9e3"),!1);try{var Vt=Object.defineProperty({},"passive",{get:function(){return Bt=!0}});window.addEventListener("test",null,Vt)}catch(Wt){console.log("Passive not supported")}var It={props:{name:String,appear:{type:Boolean,default:!1},offsetTop:{type:Number,default:0},duration:{type:Number,default:1}},data:function(){return{isVisible:!1}},methods:{inViewport:function(){var t=this.$el.getBoundingClientRect();return t.top<=window.innerHeight-this.offsetTop&&t.left<=window.innerWidth},detectVisibility:function(){this.isVisible=this.inViewport()}},mounted:function(){this.$nextTick(this.detectVisibility),window.addEventListener("scroll",this.detectVisibility,!!Bt&&{passive:!0}),window.addEventListener("resize",this.detectVisibility,!!Bt&&{passive:!0}),window.addEventListener("orientationchange",this.detectVisibility,!!Bt&&{passive:!0})},destroyed:function(){window.removeEventListener("scroll",this.detectVisibility),window.removeEventListener("resize",this.detectVisibility),window.removeEventListener("orientationchange",this.detectVisibility)}},Rt=It,_t=Object(p["a"])(Rt,Mt,Et,!1,null,null,null),qt=_t.exports,Ft=n("7cf2"),Kt=n("ecee"),Nt=n("c074"),Jt=n("f2d1"),Yt=n("ad3d");n("f9e3"),n("2dd8"),n("b7e3"),n("3e92");i["default"].use(s["a"]),i["default"].use(Ft["a"]),Kt["c"].add(Nt["a"],Jt["a"],Jt["c"],Jt["d"],Jt["b"],Nt["b"]),i["default"].component("font-awesome-icon",Yt["a"]),i["default"].component("AnimateOnVisible",qt),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(Ut)}}).$mount("#app")},"57a9":function(t,e,n){"use strict";n("2f60")},"644b":function(t,e){t.exports="data:image/png;base64,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"},"6b8d":function(t,e,n){"use strict";n("faaf")},"753e":function(t,e,n){"use strict";n("d7e9")},"75a0":function(t,e,n){},"7b0b0":function(t,e,n){t.exports=n.p+"img/vuejs.afab989b.png"},"7e92":function(t,e,n){var i={"./Octocat.png":"170a","./django.png":"b850","./drf.png":"4623","./js.png":"4d42","./js.png:Zone.Identifier":"ad16","./linux.png":"644b","./nginx.png":"d614","./postgres.png":"279c","./python.png":"90f2","./vuejs.png":"7b0b0"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="7e92"},8157:function(t,e,n){"use strict";n("dd6f")},"8fb2":function(t,e,n){t.exports=n.p+"img/rms.09aa07b8.png"},"90f2":function(t,e,n){t.exports=n.p+"img/python.2dce35e2.png"},"9bef":function(t,e,n){},ad00:function(t,e,n){t.exports=n.p+"img/pms.94650e86.png"},ad16:function(t,e){throw new Error("Module parse failed: Unexpected token (3:17)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| [ZoneTransfer]\n| ZoneId=3\n> ReferrerUrl=https://www.cleanpng.com/\n| HostUrl=https://png2.cleanpng.com/dy/ec8eaac424f967a4bf2dbeedabc79c85/L0KzQYm3V8IxN5xojJH0aYP2gLBuTfpifpJ4eARycISwfLFuj71pfJ5xRdV1aYCwccP7TfpifpJ4eARycISwfLFuj702amY2UKprMXG1cYLtWb4zPGM9TqsDOUG4Q4O3V8AxPmY7Tqg7LoDxd1==/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a2a1f9.2428698915320700656662.png\n| ")},ad66:function(t,e,n){"use strict";n("9bef")},b1c4:function(t,e,n){},b7e3:function(t,e,n){},b850:function(t,e,n){t.exports=n.p+"img/django.eac2f078.png"},bb6e:function(t,e,n){var i={"./bg.jpg":"d1b4","./logo.png":"4ffd","./logo/Octocat.png":"170a","./logo/django.png":"b850","./logo/drf.png":"4623","./logo/js.png":"4d42","./logo/js.png:Zone.Identifier":"ad16","./logo/linux.png":"644b","./logo/nginx.png":"d614","./logo/postgres.png":"279c","./logo/python.png":"90f2","./logo/vuejs.png":"7b0b0","./photo.jpg":"1e22","./projects/pms.png":"ad00","./projects/rms.png":"8fb2"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="bb6e"},cd9b:function(t,e,n){"use strict";n("3437")},d1b4:function(t,e,n){t.exports=n.p+"img/bg.c569c5d2.jpg"},d614:function(t,e,n){t.exports=n.p+"img/nginx.41613c86.png"},d7e9:function(t,e,n){},da22:function(t,e,n){},dd6f:function(t,e,n){},ec51:function(t,e,n){},ef69:function(t,e,n){},f5ea:function(t,e,n){"use strict";n("ef69")},faaf:function(t,e,n){}});
//# sourceMappingURL=app~d0ae3f07.2b09754f.js.map
(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],c=0,p=[];c<i.length;c++)o=i[c],a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"917faa19"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var s,l=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e),s=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");o.type=r,o.request=s,n[1](o)}a[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:u})},12e4);u.onerror=u.onload=s,l.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05fd":function(e,t,n){e.exports=n.p+"img/13.b359b1fe.png"},1001:function(e,t,n){e.exports=n.p+"img/6.6432b3ea.png"},"17d3":function(e,t,n){e.exports=n.p+"img/4.0ff67812.png"},2856:function(e,t,n){},3:function(e,t){},"32df":function(e,t,n){e.exports=n.p+"img/11.86c9b57c.png"},"34ff":function(e,t,n){e.exports=n.p+"img/18.db9998cc.png"},4:function(e,t){},"404e":function(e,t,n){var r={"./1.png":"ed01","./10.png":"7426","./11.png":"32df","./12.png":"60c8","./13.png":"05fd","./14.png":"fc8b","./15.png":"f469","./16.png":"e041","./17.png":"a4db","./18.png":"34ff","./19.png":"9340","./2.png":"5c53","./20.png":"f225","./3.png":"45d0","./4.png":"17d3","./5.png":"6f23","./6.png":"1001","./7.png":"f705","./8.png":"768f","./9.png":"ece3"};function a(e){var t=s(e);return n(t)}function s(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="404e"},"45d0":function(e,t,n){e.exports=n.p+"img/3.408e2c96.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("0284"),s=n.n(a),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative min-h-screen overflow-hidden",attrs:{id:"app"}},[n("div",{staticClass:"h-screen absolute pin-t pin-l py-8 text-purple-lightest text-left",staticStyle:{"max-width":"280px","padding-left":"10px"}},[e._m(0),e._m(1),e._m(2),n("div",{staticClass:"mt-12"},[n("div",{staticClass:"flex w-full items-center"},[e._m(3),n("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"num"}],staticClass:"appearance-none border-2 border-purple-dark w-24 ml-4 bg-grey-lightest text-grey-darker py-2 px-2 rounded leading-tight h-10",attrs:{type:"number",min:"0",name:"iterations"},domProps:{value:e.num},on:{change:function(t){e.updateIterationValue(e.num)},input:function(t){t.target.composing||(e.num=t.target.value)}}})])]),e._m(4)]),n("router-view",{staticClass:"background-light"})],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n      Powered by BrainJS, "),n("strong",[e._v("Premier League Predictor")]),e._v(" uses match history from this year's Premier League, along with machine learning to try to predict the outcome of a soccer match.\n      ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"https://github.com/BrainJS",target:"blank"}},[r("img",{staticClass:"m-1 mt-3 mr-2",attrs:{src:n("82ed"),width:"36px",alt:"Brain.js logo"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"https://www.skysports.com/premier-league-results",target:"blank"}},[r("img",{staticClass:"m-1 mt-3",attrs:{src:n("d24d"),width:"36px",alt:"premier league logo"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block tracking-wide text-white text-sm mb-2 font-bold flex-1",attrs:{for:"iterations"}},[e._v("\n                  ITERATIONS\n                  "),n("br"),n("small",{staticClass:"block text-purple-lightest font-semibold mt-1"},[e._v("Increases the accuracy and time it takes to run")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-4 absolute pin-b pin-l"},[n("a",{staticClass:"twitter-follow-button",attrs:{href:"https://twitter.com/scottyzen?ref_src=twsrc%5Etfw","data-size":"large","data-show-count":"false"}},[e._v("Follow @scottyzen")])])}],l={data:function(){return{num:this.$store.state.iterations}},methods:{track:function(){this.$ga.page("/")},updateIterationValue:function(e){this.$store.state.iterations=e}},computed:{iterations:function(){return this.$store.state.iterations}}},u=l,c=(n("5c0b"),n("2877")),m=Object(c["a"])(u,o,i,!1,null,null,null);m.options.__file="App.vue";var p=m.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper px-4 pt-4 md:pt-16 h-screen shadow-lg",class:{"move-right":e.menuIsOpen}},[r("button",{staticClass:"hamburger hamburger--spin absolute pin-l pin-t",class:{"is-active":e.menuIsOpen},attrs:{type:"button"},on:{click:function(t){e.menuIsOpen=!e.menuIsOpen}}},[e._m(0)]),r("transition",{attrs:{name:"slide"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showAlertMessage,expression:"showAlertMessage"}],staticClass:"alert fade absolute pin-t bg-purple-lightest border-l-4 border-purple rounded-b text-left text-purple-darkest px-6 pt-5 pb-3 my-4 shadow-md",attrs:{role:"alert"}},[r("div",{staticClass:"flex"},[r("div",{staticClass:"py-1"},[r("img",{staticClass:"mr-5",attrs:{width:"32px",src:n("cf1c")}})]),r("div",[r("p",{staticClass:"font-bold"},[e._v("Hold on tight")]),r("p",{staticClass:"text-sm"},[e._v("We're crunching the numbers")])])])])]),r("div",{staticClass:"max-w-lg m-auto"},[r("div",{staticClass:"logo-box flex m-auto p-4  content-center items-center justify-center"},[r("img",{staticClass:"m-auto",class:{spinning:e.thinking},attrs:{src:e.winningTeamLogo,alt:"Premier League Logo"}})]),r("h1",{staticClass:"mb-6 md:px-4 text-2xl sm:text-4xl fat-frank uppercase"},[e._v("Premier League Predictor.")]),e._m(1),r("div",{staticClass:"flex flex-wrap items-end pt-10"},[r("div",{staticClass:"w-full md:w-4/5 flex"},[r("div",{staticClass:"w-full sm:w-1/2 mr-4 lg:mr-6"},[r("label",{staticClass:"text-left block uppercase tracking-wide text-purple text-xs font-semibold px-4 border-l-2 border-grey-lightest mt-4 md:mt-8 mb-2",attrs:{for:"home-team"}},[e._v("Home Team")]),r("div",{staticClass:"relative"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.homeSelected,expression:"homeSelected"}],staticClass:"fade-border block font-semibold appearance-none w-full bg-white border border-grey-light hover:border-grey text-grey-darker py-3 px-4 pr-8 rounded leading-tight",class:{"border-yellow-light text-yellow bg-yellow-lightest":e.homeTeamWin},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.homeSelected=t.target.multiple?n:n[0]},function(t){e.onChange()}]}},e._l(e.teams,function(t){return r("option",{key:t.number,domProps:{value:t.number}},[e._v("\n                            "+e._s(t.name)+"\n                        ")])})),r("div",{staticClass:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),r("div",{staticClass:"w-full sm:w-1/2 mr-0 md:mr-4 lg:mr-6"},[r("label",{staticClass:"text-left block uppercase tracking-wide text-purple text-xs font-semibold px-4 border-l-2 border-grey-lightest mt-4 md:mt-8 mb-2",attrs:{for:"away-team"}},[e._v("Away Team")]),r("div",{staticClass:"relative"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.awaySelected,expression:"awaySelected"}],staticClass:"fade-border block font-semibold appearance-none w-full bg-white border border-grey-light hover:border-grey text-grey-darker py-3 px-4 pr-8 rounded leading-tight",class:{"border-yellow-light text-yellow bg-yellow-lightest":e.awayTeamWin},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.awaySelected=t.target.multiple?n:n[0]},function(t){e.onChange()}]}},e._l(e.teams,function(t){return r("option",{key:t.number,domProps:{value:t.number}},[e._v("\n                            "+e._s(t.name)+"\n                        ")])})),r("div",{staticClass:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])]),r("div",{staticClass:"w-full sm:flex-1"},[r("button",{staticClass:"fade w-full shadow focus:shadow-outline focus:outline-none text-white font-bold p-4 md:pb-3 border-t border-b mt-4 text-md rounded",class:{"bg-purple hover:bg-purple-dark":e.allowRunTest,"cursor-pointer bg-grey cursor-not-allowed":!e.allowRunTest},attrs:{disabled:!e.allowRunTest,type:"button"},on:{click:function(t){e.showMessage(e.runTest,e.clearBorderStyle)}}},[e._v("Predict Match")])])]),r("div",{staticClass:"w-full m-auto text-center max-w-lg mt-8 md:mt-12"},[r("div",{staticClass:"w-full mt-8 text-lg md:text-3xl"},[e.homeTeamWin?r("p",[e._v("We are going for the home team")]):e._e(),e.draw?r("p",[e._v("We are going for a Draw on this one.")]):e._e(),e.awayTeamWin?r("p",[e._v("We are going for the away team")]):e._e()])])])],1)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"hamburger-box"},[n("span",{staticClass:"hamburger-inner"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"hidden md:block font-normal text-sm md:text-base max-w-xs md:max-w-sm leading-normal m-auto"},[e._v("Using "),n("strong",[e._v("match history")]),e._v(" along with "),n("strong",[e._v("machine learning")]),e._v(" to try to predict a matches outcome.")])}],h=(n("927c"),n("7352")),b=n.n(h),w=new b.a.recurrent.RNN;function v(e,t){this.name=e,this.num=t}var x=new v("Manchester United",1),y=new v("Leicester City",2),_=new v("Wolverhampton",3),C=new v("Everton",4),k=new v("Watford",5),T=new v("Brighton",6),S=new v("Huddersfield",7),P=new v("Chelsea",8),W=new v("Fulham",9),M=new v("Crystal Palace",10),O=new v("Bournemouth",11),L=new v("Cardiff",12),E=new v("Newcastle United",13),j=new v("Tottenham Hotspurs",14),B=new v("Arsenal",15),$=new v("Manchester City",16),A=new v("Southampton",17),N=new v("Burnley",18),I=new v("Liverpool",19),U=new v("West Ham United",20);function H(e,t,n){return{input:[e.num,t.num],output:[n]}}function R(e,t){return e>t?0:e<t?1:.5}var z=[H(x,y,R(2,1)),H(_,C,R(2,2)),H(k,T,R(2,0)),H(S,P,R(0,3)),H(W,M,R(0,2)),H(O,L,R(2,0)),H(E,j,R(1,2)),H(B,$,R(0,2)),H(A,N,R(0,0)),H(I,U,R(4,0)),H(P,B,R(3,2)),H(U,O,R(1,2)),H(j,W,R(3,1)),H(y,_,R(2,0)),H(C,A,R(2,1)),H(L,E,R(0,0)),H(T,x,R(3,2)),H($,S,R(6,1)),H(N,k,R(1,3)),H(M,I,R(0,2)),H(I,T,R(1,0)),H(A,y,R(1,2)),H(S,L,R(0,0)),H(O,C,R(2,2)),H(B,U,R(3,1)),H(_,$,R(1,1)),H(E,P,R(1,2)),H(W,N,R(4,2)),H(k,M,R(2,1)),H(x,j,R(0,3)),H($,E,R(2,1)),H(U,_,R(0,1)),H(C,S,R(1,1)),H(M,A,R(0,2)),H(P,O,R(2,0)),H(T,W,R(2,2)),H(y,I,R(1,2)),H(k,j,R(2,1)),H(N,x,R(0,2)),H(L,B,R(2,3)),H(k,x,R(1,2)),H(E,B,R(1,2)),H($,W,R(3,0)),H(S,M,R(0,1)),H(P,L,R(4,1)),H(O,y,R(4,2)),H(j,I,R(1,2)),H(C,U,R(1,3)),H(_,N,R(1,0)),H(A,T,R(2,2)),H(T,j,R(1,2)),H(x,_,R(1,1)),H(I,A,R(3,0)),H(y,S,R(3,1)),H(M,E,R(0,0)),H(L,$,R(0,5)),H(N,O,R(4,0)),H(W,k,R(1,1)),H(B,C,R(2,0)),H(U,P,R(0,0)),H(P,I,R(1,1)),H(_,A,R(2,0)),H(E,y,R(0,2)),H(x,T,R(2,0)),H(S,j,R(0,2)),H(C,W,R(3,0)),H(B,k,R(2,0)),H(U,x,R(3,1)),H(L,N,R(1,2)),H(O,M,R(2,1)),H(T,U,R(1,0)),H(x,E,R(3,2)),H(k,O,R(0,4)),H(j,L,R(1,0)),H(y,C,R(1,2)),H(M,_,R(0,1)),H(N,S,R(1,1)),H(I,$,R(0,0)),H(A,P,R(0,3)),H(W,B,R(1,5)),H(S,I,R(0,1)),H(_,k,R(0,2)),H(U,j,R(0,1)),H(E,T,R(0,1)),H($,N,R(5,0)),H(L,W,R(4,2)),H(O,A,R(0,0)),H(P,x,R(2,2)),H(C,M,R(2,0)),H(B,y,R(3,1)),H(y,U,R(1,1)),H(k,S,R(3,0)),H(A,E,R(0,0)),H(I,L,R(4,1)),H(W,O,R(0,3)),H(T,_,R(1,0)),H(x,C,R(2,1)),H(M,B,R(2,2)),H(N,P,R(0,4)),H(j,$,R(0,1))];function F(e){w.train(z,{iterations:e})}var J={name:"home",data:function(){return{homeSelected:11,awaySelected:1,allowRunTest:!0,homeTeamWin:!1,draw:!1,awayTeamWin:!1,showAlertMessage:!1,result:null,menuIsOpen:!1,showSettings:!1,thinking:!1,teams:[{name:"Arsenal",number:15},{name:"Bournemouth",number:11},{name:"Brighton",number:6},{name:"Burnley",number:18},{name:"Cardiff",number:12},{name:"Chelsea",number:8},{name:"Crystal Palace",number:10},{name:"Everton",number:4},{name:"Fulham",number:9},{name:"Huddersfield",number:7},{name:"Leicester City",number:2},{name:"Liverpool",number:19},{name:"Manchester City",number:16},{name:"Manchester United",number:1},{name:"Newcastle United",number:13},{name:"Southampton",number:17},{name:"Tottenham Hotspurs",number:14},{name:"Watford",number:5},{name:"West Ham United",number:20},{name:"Wolverhampton",number:3}]}},methods:{runTest:function(){var e=this;this.thinking=!0,this.clearBorderStyle(),F(this.$store.state.iterations),this.result=w.run([this.homeSelected,this.awaySelected]),console.log(this.result),.5==this.result?this.draw=!0:this.result<.5?this.homeTeamWin=!0:this.awayTeamWin=!0,this.hideMessage(),setTimeout(function(){e.thinking=!1},300)},showMessage:function(e,t){this.showAlertMessage=!0,this.allowRunTest=!1,t(),setTimeout(function(){e()},500)},hideMessage:function(){this.showAlertMessage=!1,this.allowRunTest=!0},clearBorderStyle:function(){this.homeTeamWin=!1,this.draw=!1,this.awayTeamWin=!1},onChange:function(){this.allowRunTest=this.homeSelected!=this.awaySelected,this.clearBorderStyle()}},computed:{winningTeamLogo:function(){return this.homeTeamWin?n("404e")("./"+this.homeSelected+".png"):this.awayTeamWin?n("404e")("./"+this.awaySelected+".png"):n("b2f8")}}},D=J,V=(n("cccb"),Object(c["a"])(D,f,g,!1,null,null,null));V.options.__file="Home.vue";var q=V.exports;r["a"].use(d["a"]);var G=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),K=n("2f62");r["a"].use(K["a"]);var Q=new K["a"].Store({state:{iterations:150},mutations:{setIterations:function(e,t){e.iterations=t}},actions:{}});r["a"].config.productionTip=!1,r["a"].use(s.a,{id:"UA-127390099-1",router:G}),new r["a"]({router:G,store:Q,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),a=n.n(r);a.a},"5c53":function(e,t,n){e.exports=n.p+"img/2.42fe5d43.png"},"60c8":function(e,t,n){e.exports=n.p+"img/12.f3de2bb7.png"},"6f23":function(e,t,n){e.exports=n.p+"img/5.a957a661.png"},7426:function(e,t,n){e.exports=n.p+"img/10.af2f6da9.png"},"768f":function(e,t,n){e.exports=n.p+"img/8.66366cc3.png"},"82ed":function(e,t,n){e.exports=n.p+"img/brainjs.3e09fcda.svg"},"8f59":function(e,t,n){},"927c":function(e,t,n){},9340:function(e,t,n){e.exports=n.p+"img/19.d56e9e76.png"},a4db:function(e,t,n){e.exports=n.p+"img/17.b1b4a7c3.png"},b2f8:function(e,t,n){e.exports=n.p+"img/Premier-League-logo.d8343c0d.png"},cccb:function(e,t,n){"use strict";var r=n("8f59"),a=n.n(r);a.a},cf1c:function(e,t,n){e.exports=n.p+"img/loading.879b238b.gif"},d24d:function(e,t,n){e.exports=n.p+"img/Premier-League-logo-sm.3432ec5f.png"},e041:function(e,t,n){e.exports=n.p+"img/16.9046f405.png"},ece3:function(e,t,n){e.exports=n.p+"img/9.15bb2f67.png"},ed01:function(e,t,n){e.exports=n.p+"img/1.5f95f165.png"},f225:function(e,t,n){e.exports=n.p+"img/20.d9145478.png"},f469:function(e,t,n){e.exports=n.p+"img/15.65459645.png"},f705:function(e,t,n){e.exports=n.p+"img/7.3c01d974.png"},fc8b:function(e,t,n){e.exports=n.p+"img/14.a1688c3c.png"}});
//# sourceMappingURL=app.d3c821d2.js.map
(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],u=0,m=[];u<o.length;u++)i=o[u],s[i]&&m.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"917faa19"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=n);var r,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e),r=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}s[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,c.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"03c0":function(e,t,a){e.exports=a.p+"img/67.b359b1fe.png"},"0e78":function(e,t,a){e.exports=a.p+"img/66.5f95f165.png"},"0f48":function(e,t,a){e.exports=a.p+"img/340.b1b4a7c3.png"},2856:function(e,t,a){},"293c":function(e,t,a){e.exports=a.p+"img/63.15bb2f67.png"},3:function(e,t){},"385e":function(e,t,a){e.exports=a.p+"img/354.af2f6da9.png"},"3a84":function(e,t,a){e.exports=a.p+"img/57.65459645.png"},"3f72":function(e,t,a){e.exports=a.p+"img/1044.86c9b57c.png"},4:function(e,t){},"404e":function(e,t,a){var n={"./1044.png":"3f72","./328.png":"806c","./338.png":"b8e8","./340.png":"0f48","./346.png":"7b5a","./354.png":"385e","./394.png":"4a61","./397.png":"b3d6","./563.png":"ea00","./57.png":"3a84","./61.png":"cebf","./62.png":"877c","./63.png":"293c","./64.png":"5140","./65.png":"6ca2","./66.png":"0e78","./67.png":"03c0","./715.png":"4dcd","./73.png":"4829","./76.png":"cdc2"};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="404e"},4829:function(e,t,a){e.exports=a.p+"img/73.a1688c3c.png"},"4a61":function(e,t,a){e.exports=a.p+"img/394.1dae1fe1.png"},"4dcd":function(e,t,a){e.exports=a.p+"img/715.f3de2bb7.png"},5140:function(e,t,a){e.exports=a.p+"img/64.d56e9e76.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=a("0284"),r=a.n(s),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"relative min-h-screen overflow-hidden bg-purple",attrs:{id:"app"}},[a("div",{staticClass:"h-screen absolute pin-t pin-l py-8 text-purple-lightest text-left",staticStyle:{"max-width":"280px","padding-left":"20px"}},[a("span",{staticClass:"block uppercase text-purple-darker mb-2 font-bold"},[e._v("About")]),a("p",{staticClass:" text-sm"},[e._v("\n      Powered by BrainJS, Premier League Predictor uses match history from this year's Premier League, along with machine learning to try to predict the outcome of a soccer match.\n      ")]),a("div",{staticClass:"mt-12"},[a("span",{staticClass:"block uppercase text-purple-darker mb-2 font-bold"},[e._v("Settings")]),a("div",{staticClass:"flex w-full items-center mb-2"},[e._m(0),a("div",{staticClass:"relative"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLeague,expression:"selectedLeague"}],staticClass:"block appearance-none bg-grey-lightest border-2 border-purple-dark text-grey-darker font-bold py-1 px-2 ml-2 pr-8 rounded leading-tight",attrs:{name:"league",id:"league"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedLeague=t.target.multiple?a:a[0]}}},e._l(e.availableLeagues,function(t){return a("option",{key:t.length,domProps:{value:t}},[e._v("\n                          "+e._s(t.name)+"\n                      ")])})),a("div",{staticClass:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),a("div",{staticClass:"flex w-full items-center mb-2"},[e._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.num,expression:"num"}],staticClass:"appearance-none border-2 border-purple-dark w-20 ml-2 mt-2 font-bold bg-grey-lightest text-grey-darker px-2 rounded leading-tight py-1",attrs:{type:"number",min:"1",max:"100",step:"1",name:"accuracy"},domProps:{value:e.num},on:{change:function(t){e.updateAccuracyValue(e.num)},input:function(t){t.target.composing||(e.num=t.target.value)}}})])])]),a("router-view",{staticClass:"background-light"})],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"flex-1",attrs:{for:"league"}},[a("span",{staticClass:"text-sm font-bold tracking-wide"},[e._v("League")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"flex-1",attrs:{for:"accuracy"}},[a("span",{staticClass:"text-sm font-bold tracking-wide"},[e._v("Accuracy")])])}],c={data:function(){return{num:this.$store.state.accuracy}},methods:{track:function(){this.$ga.page("/")},updateAccuracyValue:function(e){this.$store.state.accuracy=e}},computed:{accuracy:function(){return this.$store.state.accuracy},selectedLeague:{get:function(){return this.$store.state.selectedLeague},set:function(e){this.$store.commit("updateLeague",e),this.$store.dispatch("loadData")}},availableLeagues:function(){return this.$store.state.availableLeagues}}},l=c,u=(a("5c0b"),a("2877")),p=Object(u["a"])(l,i,o,!1,null,null,null);p.options.__file="App.vue";var m=p.exports,d=a("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper px-4 pt-4 md:pt-16 h-screen shadow-lg",class:{"move-right":e.menuIsOpen}},[n("button",{staticClass:"hamburger hamburger--spin absolute pin-l pin-t mt-2",class:{"is-active":e.menuIsOpen},attrs:{type:"button"},on:{click:function(t){e.menuIsOpen=!e.menuIsOpen}}},[e._m(0)]),n("transition",{attrs:{name:"slide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showAlertMessage,expression:"showAlertMessage"}],staticClass:"alert fade absolute pin-t bg-purple-lightest border-l-4 border-purple rounded-b text-left text-purple-darkest px-6 pt-5 pb-3 my-4 shadow-md",attrs:{role:"alert"}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"py-1"},[n("img",{staticClass:"mr-5",attrs:{width:"32px",src:a("cf1c")}})]),n("div",[n("p",{staticClass:"font-bold"},[e._v("Hold on tight")]),n("p",{staticClass:"text-sm"},[e._v("We're crunching the numbers")])])])])]),n("div",{staticClass:"max-w-lg m-auto mt-20"},[n("h1",{staticClass:"mb-6 md:px-6 text-3xl sm:text-4xl fat-frank uppercase"},[e._v(e._s(e.selectedLeague.name)+" Predictor.")]),e._m(1),n("div",{staticClass:"flex flex-wrap items-end pt-10"},[n("div",{staticClass:"w-full md:w-4/5 flex"},[n("div",{staticClass:"w-full sm:w-1/2 mr-4 lg:mr-6"},[n("label",{staticClass:"select__label md:mt-8",attrs:{for:"home-team"}},[e._v("Home Team")]),n("div",{staticClass:"relative"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.homeSelected,expression:"homeSelected"}],staticClass:"fade-border select",class:{"select--yellow":e.homeTeamWin},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.homeSelected=t.target.multiple?a:a[0]},function(t){e.onChange()}]}},e._l(e.teams,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n                            "+e._s(t.shortName)+"\n                        ")])})),n("div",{staticClass:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),n("div",{staticClass:"w-full sm:w-1/2 mr-0 md:mr-4 lg:mr-6"},[n("label",{staticClass:"select__label md:mt-8",attrs:{for:"away-team"}},[e._v("Away Team")]),n("div",{staticClass:"relative"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.awaySelected,expression:"awaySelected"}],staticClass:"fade-border select",class:{"select--yellow":e.awayTeamWin},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.awaySelected=t.target.multiple?a:a[0]},function(t){e.onChange()}]}},e._l(e.teams,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n                            "+e._s(t.shortName)+"\n                        ")])})),n("div",{staticClass:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])]),n("div",{staticClass:"w-full sm:flex-1"},[n("button",{staticClass:"fade btn md:pb-3 ",class:{"bg-purple hover:bg-purple-dark":e.allowRunTest,"cursor-pointer bg-grey cursor-not-allowed":!e.allowRunTest},attrs:{disabled:!e.allowRunTest,type:"button"},on:{click:function(t){e.showMessage(e.runTest,e.clearBorderStyle)}}},[e._v("Predict Match")])])]),n("div",{staticClass:"w-full m-auto text-center max-w-lg mt-8 md:mt-12"},[n("div",{staticClass:"w-full mt-8 text-lg md:text-3xl"},[e.homeTeamWin?n("p",[e._v("We are going for the home team")]):e._e(),e.draw?n("p",[e._v("We are going for a Draw on this one.")]):e._e(),e.awayTeamWin?n("p",[e._v("We are going for the away team")]):e._e()])])])],1)},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"hamburger-box"},[a("span",{staticClass:"hamburger-inner"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"hidden md:block font-normal text-sm md:text-base max-w-xs md:max-w-sm leading-normal m-auto"},[e._v("Using "),a("strong",[e._v("match history")]),e._v(" along with "),a("strong",[e._v("machine learning")]),e._v(" to try to predict a matches outcome.")])}],h=(a("ac6a"),a("8afe")),v=(a("927c"),a("7352")),b=a.n(v),w={name:"home",data:function(){return{allowRunTest:!0,homeTeamWin:!1,draw:!1,awayTeamWin:!1,showAlertMessage:!1,result:null,menuIsOpen:!1,thinking:!1}},methods:{runTest:function(){var e=this,t=new b.a.recurrent.RNN;this.thinking=!0,this.clearBorderStyle();var a=[],n=function(n){for(var s=0;s<n;s++){t.train(e.trainingData,{iterations:50});var r=t.run([e.homeSelected,e.awaySelected]);r<=0&&(r=0),r>=1&&(r=1),isNaN(r)||(a=Object(h["a"])(a).concat([parseFloat(r)]))}};n(this.$store.state.accuracy);var s=function(e){return e.reduce(function(e,t){return e+t},0)/e.length};this.result=s(a),console.log(a),console.log(this.result),this.homeTeamWin=this.result<.5,this.draw=.5==this.result,this.awayTeamWin=this.result>.5,this.hideMessage(),setTimeout(function(){e.thinking=!1},300)},convertToTrainingData:function(e,t,a){return{input:[e.id,t.id],output:[a]}},showMessage:function(e,t){this.menuIsOpen=!1,this.showAlertMessage=!0,this.allowRunTest=!1,t(),setTimeout(function(){e()},500)},hideMessage:function(){this.showAlertMessage=!1,this.allowRunTest=!0},clearBorderStyle:function(){this.homeTeamWin=!1,this.draw=!1,this.awayTeamWin=!1},onChange:function(){this.allowRunTest=this.homeSelected!=this.awaySelected,this.clearBorderStyle()},score:function(e,t){return e>t?0:e<t?1:parseFloat(.5)}},computed:{winningTeamLogo:function(){return this.homeTeamWin?a("404e")("./"+this.homeSelected+".png"):this.awayTeamWin?a("404e")("./"+this.awaySelected+".png"):a("b2f8")},matchHistory:function(){return this.$store.state.matchHistory},teams:function(){return this.$store.state.teams},trainingData:function(){var e=this,t=[];return this.$store.state.matchHistory.forEach(function(a){var n=e.convertToTrainingData(a.homeTeam,a.awayTeam,e.score(a.score.fullTime.homeTeam,a.score.fullTime.awayTeam));t.push(n)}),t},homeSelected:{get:function(){return this.$store.state.homeSelected},set:function(e){this.$store.commit("updateHomeSelected",e)}},awaySelected:{get:function(){return this.$store.state.awaySelected},set:function(e){this.$store.commit("updateAwaySelected",e)}},selectedLeague:function(){return this.$store.state.selectedLeague}},created:function(){this.$store.dispatch("loadData")}},y=w,x=(a("cccb"),Object(u["a"])(y,f,g,!1,null,null,null));x.options.__file="Home.vue";var _=x.exports;n["a"].use(d["a"]);var C=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),T=a("bc3a"),L=a.n(T),S=a("2f62");n["a"].use(S["a"]);var k={headers:{"X-Auth-Token":"20e725054df046f58355a43107606116"}},P=new S["a"].Store({state:{accuracy:5,selectedLeague:{id:"PL",name:"Premier League"},matchHistory:[],teams:[],homeSelected:"",awaySelected:"",availableLeagues:[{id:"PL",name:"Premier League"},{id:"BL1",name:"Bundesliga"},{id:"CL",name:"Champions League"},{id:"EL",name:"Europa League"},{id:"SA",name:"Serie A"},{id:"PD",name:"Primera Division"}]},mutations:{updateMatchHistory:function(e,t){e.matchHistory=t},updateHomeSelected:function(e,t){e.homeSelected=t},updateAwaySelected:function(e,t){e.awaySelected=t},getTeamsList:function(e,t){e.teams=t},updateLeague:function(e,t){e.selectedLeague=t}},actions:{loadData:function(e){var t=e.commit;L.a.get("http://api.football-data.org/v2/competitions/".concat(this.state.selectedLeague.id,"/matches?status=SCHEDULED&season=2018"),k).then(function(e){t("updateHomeSelected",e.data.matches[0].homeTeam.id),t("updateAwaySelected",e.data.matches[0].awayTeam.id)}),L.a.get("http://api.football-data.org/v2/competitions/".concat(this.state.selectedLeague.id,"/matches?status=FINISHED&season=2018"),k).then(function(e){t("updateMatchHistory",e.data.matches)}),L.a.get("http://api.football-data.org/v2/competitions/".concat(this.state.selectedLeague.id,"/teams"),k).then(function(e){t("getTeamsList",e.data.teams)})}}});n["a"].config.productionTip=!1,n["a"].use(r.a,{id:"UA-127390099-1",router:C}),new n["a"]({router:C,store:P,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("2856"),s=a.n(n);s.a},"6ca2":function(e,t,a){e.exports=a.p+"img/65.9046f405.png"},"7b5a":function(e,t,a){e.exports=a.p+"img/346.a957a661.png"},"806c":function(e,t,a){e.exports=a.p+"img/328.db9998cc.png"},"877c":function(e,t,a){e.exports=a.p+"img/62.0ff67812.png"},"8f59":function(e,t,a){},"927c":function(e,t,a){},b2f8:function(e,t,a){e.exports=a.p+"img/Premier-League-logo.4efd018d.png"},b3d6:function(e,t,a){e.exports=a.p+"img/397.6432b3ea.png"},b8e8:function(e,t,a){e.exports=a.p+"img/338.42fe5d43.png"},cccb:function(e,t,a){"use strict";var n=a("8f59"),s=a.n(n);s.a},cdc2:function(e,t,a){e.exports=a.p+"img/76.408e2c96.png"},cebf:function(e,t,a){e.exports=a.p+"img/61.66366cc3.png"},cf1c:function(e,t,a){e.exports=a.p+"img/loading.879b238b.gif"},ea00:function(e,t,a){e.exports=a.p+"img/563.d9145478.png"}});
//# sourceMappingURL=app.8339c82c.js.map
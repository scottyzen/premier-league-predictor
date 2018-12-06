/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import ChampionsLeague from "./views/ChampionsLeague.vue";
import Home from "./views/Home.vue";
import PremierLeague from "./views/PremierLeague.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
    routes: [{
        path: "/",
        name: "home",
        component: Home
    }, {
        path: "/premierleague",
        name: "premierleague",
        component: PremierLeague
    }, {
        path: "/championsleague",
        name: "championsleague",
        component: ChampionsLeague
    }
  ]
});

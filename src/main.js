import Vue from "vue";
import VueAnalytics from "vue-analytics";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-127390099-1",
  router,
  debug: {
    enabled: true
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

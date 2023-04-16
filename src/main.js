import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import { routes } from "./routes.js";
import { store } from "./store";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(createStore(store));

app.mount("#app");

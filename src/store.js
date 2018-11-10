/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    iterations: 50
  },
  mutations: {
    setIterations(state, payload) {
      state.iterations = payload;
    }
  },
  actions: {}
});

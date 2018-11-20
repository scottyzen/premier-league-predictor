/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accuracy: 6
  },
  mutations: {
    setIterations(state, payload) {
      state.accuracy = payload;
    }
  },
  actions: {}
});

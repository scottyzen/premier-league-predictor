import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const thisYear = new Date().getFullYear();
const lastYear = thisYear - 1;
const baseUrl = 'https://api.football-data.org/v2';

// let URL = 'https://api.football-data.org/v2/competitions/BL1/matches?status=FINISHED';
// let teamURL = 'https://api.football-data.org/v2/competitions/BL1/teams'
let headers = { 
  "X-Auth-Token": "20e725054df046f58355a43107606116",
  // "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Credentials": "true",
  // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
};



export default new Vuex.Store({
  state: {
    accuracy: 8,
    selectedLeague: { id: "PL", name: "Premier League" },
    matchHistory: [],
    teams: [],
    homeSelected: "",
    awaySelected: "",
    availableLeagues: [
      { id: "PL", name: "Premier League" },
      { id: "BL1", name: "Bundesliga" },
      { id: "CL", name: "Champions League" },
      { id: "EL", name: "Europa League" },
      { id: "SA", name: "Serie A" },
      { id: "PD", name: "Primera Division" }
    ]
  },
  mutations: {
    updateMatchHistory(state, matchHistory) {
      state.matchHistory = matchHistory;
    },
    updateHomeSelected(state, homeSelected) {
      state.homeSelected = homeSelected;
    },
    updateAwaySelected(state, awaySelected) {
      state.awaySelected = awaySelected;
    },
    getTeamsList(state, teams) {
      state.teams = teams;
    },
    updateLeague(state, selectedLeague) {
      state.selectedLeague = selectedLeague;
    }
  },
  actions: {
    loadData({ commit }) {

      axios.get( `${baseUrl}/competitions/${ this.state.selectedLeague.id }/matches?status=SCHEDULED&season=${thisYear}`, {headers} ).then(res => {
        commit("updateHomeSelected", res.data.matches[0].homeTeam.id);
        commit("updateAwaySelected", res.data.matches[0].awayTeam.id);
      });

      axios.get( `${baseUrl}/competitions/${ this.state.selectedLeague.id }/matches?status=FINISHED&season=${lastYear}`, {headers} ).then(res => {
        commit("updateMatchHistory", res.data.matches);
      });

      axios.get( `${baseUrl}/competitions/${ this.state.selectedLeague.id }/teams`, {headers} ).then(res => {
        commit("getTeamsList", res.data.teams);
      });

    }
  }
});

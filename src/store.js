import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const thisYear = new Date().getFullYear();
const lastYear = thisYear - 1;

// let URL = 'https://api.football-data.org/v2/competitions/BL1/matches?status=FINISHED&season=2018';
// let teamURL = 'https://api.football-data.org/v2/competitions/BL1/teams'
let config = {
  headers: {
    "X-Auth-Token": process.env.TOKEN
  }
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
      axios
        .get(
          `https://api.football-data.org/v2/competitions/${
            this.state.selectedLeague.id
          }/matches?status=SCHEDULED&season=${year}`,
          config
        )
        .then(res => {
          // console.log(res.data.matches[0].awayTeam.id);
          commit("updateHomeSelected", res.data.matches[0].homeTeam.id);
          commit("updateAwaySelected", res.data.matches[0].awayTeam.id);
        });

      axios
        .get(
          `https://api.football-data.org/v2/competitions/${
            this.state.selectedLeague.id
          }/matches?status=FINISHED&season=${lastYear}`,
          config
        )
        .then(res => {
          // console.log(res.data)
          commit("updateMatchHistory", res.data.matches);
        });

      axios
        .get(
          `https://api.football-data.org/v2/competitions/${
            this.state.selectedLeague.id
          }/teams`,
          config
        )
        .then(res => {
          // console.log(res.data.teams)
          commit("getTeamsList", res.data.teams);
        });
    }
  }
});

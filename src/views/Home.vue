<template>
  <div
    class="h-screen px-4 pt-4 shadow-lg wrapper md:pt-10"
    :class="{ 'move-right': menuIsOpen }"
  >
    <!-- <button
      class="absolute mt-2 hamburger hamburger--spin pin-l pin-t"
      :class="{'is-active': menuIsOpen}"
      type="button"
      @click="menuIsOpen = !menuIsOpen"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>-->

    <!-- ALERT Message -->
    <transition name="slide">
      <div
        class="absolute px-6 pt-5 pb-3 my-4 text-left text-indigo-900 bg-indigo-100 border-l-4 border-indigo-500 rounded-b shadow-md alert fade pin-t"
        v-show="showAlertMessage"
        role="alert"
      >
        <div class="flex">
          <div class="py-1">
            <img width="32px" class="mr-5" src="../assets/loading.gif" />
          </div>
          <div>
            <p class="font-bold">Hold on tight</p>
            <p class="text-sm">We're crunching the numbers</p>
          </div>
        </div>
      </div>
    </transition>

    <div class="max-w-2xl m-auto mt-6">
      <!-- Premier League logo -->
      <div
        class="flex items-center content-center justify-center p-4 m-auto logo-box"
      >
        <img
          class="m-auto"
          v-if="winningTeamLogo"
          :class="{ spinning: thinking }"
          :src="`../assets/crests/${winningTeamLogo}.png`"
          alt="Premier League Logo"
        />
        <img
          class="m-auto"
          v-else
          :class="{ spinning: thinking }"
          src="../assets/Premier-League-logo.png"
          alt="Premier League Logo"
        />
      </div>

      <h1 class="mb-4 text-3xl uppercase md:px-6 sm:text-4xl fat-frank">
        {{ selectedLeague.name }} Predictor.
      </h1>

      <h2
        class="hidden m-auto text-sm font-normal leading-normal md:block md:text-base md:max-w-sm"
      >
        Using
        <strong>match history</strong> along with
        <strong>machine learning</strong> to try to predict a matches outcome.
      </h2>

      <div class="flex flex-wrap items-end pt-12">
        <!-- Select's -->
        <div class="flex w-full md:w-4/5">
          <!-- Home select -->
          <div class="w-full mr-4 sm:w-1/2 lg:mr-6">
            <label class="select__label md:mt-8" for="home-team"
              >Home Team</label
            >
            <div class="relative">
              <select
                @change="onChange()"
                class="fade-border select"
                :class="{ 'select--yellow': homeTeamWin }"
                v-model="homeSelected"
              >
                <option
                  v-for="team in teams"
                  v-bind:value="team.id"
                  :key="team.id"
                >
                  {{ team.shortName }}
                </option>
              </select>
            </div>
          </div>
          <!-- Away select -->
          <div class="w-full mr-0 sm:w-1/2 md:mr-4 lg:mr-6">
            <label class="select__label md:mt-8" for="away-team"
              >Away Team</label
            >
            <div class="relative">
              <select
                @change="onChange()"
                class="fade-border select"
                :class="{ 'select--yellow': awayTeamWin }"
                v-model="awaySelected"
              >
                <option
                  v-for="team in teams"
                  v-bind:value="team.id"
                  :key="team.id"
                >
                  {{ team.shortName }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div class="w-full sm:flex-1">
          <button
            @click="showMessage(runTest, clearBorderStyle)"
            :disabled="!allowRunTest"
            class="fade btn whitespace-nowrap"
            :class="{
              'bg-indigo-500 hover:bg-indigo-700 cursor-pointer': allowRunTest,
              ' bg-grey-400 cursor-not-allowed': !allowRunTest,
            }"
            type="button"
          >
            Predict Match
          </button>
        </div>
      </div>

      <div class="w-full max-w-lg m-auto mt-8 text-center md:mt-12">
        <div class="w-full mt-8 text-lg md:text-3xl">
          <p v-if="homeTeamWin">We are going for the home team</p>
          <p v-if="draw">We are going for a Draw on this one.</p>
          <p v-if="awayTeamWin">We are going for the away team</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "@/assets/styles/main.css";
// import brain from "brain.js";

export default {
  name: "home",
  data() {
    return {
      // homeSelected: this.$store.state.homeSelected,
      // awaySelected: this.$store.state.awaySelected,
      allowRunTest: true,
      homeTeamWin: false,
      draw: false,
      awayTeamWin: false,
      showAlertMessage: false,
      result: null,
      menuIsOpen: false,
      thinking: false,
    };
  },
  methods: {
    runTest() {
      // this.trainingData = null;
      let net = new brain.recurrent.RNN();

      // Get the match data
      this.thinking = true;
      this.clearBorderStyle();

      var avgArray = []; // Array of results

      var populateAvgArray = (times) => {
        for (let i = 0; i < times; i++) {
          // Train data with options
          net.train(this.trainingData, {
            iterations: 20,
          });

          // Run the two teams agains each other
          var res = net.run([this.homeSelected, this.awaySelected]);

          // Make sure result is between 0 - 1
          if (res <= 0) {
            res = 0;
          }
          if (res >= 1) {
            res = 1;
          }

          // Check result is number before pushing to array
          if (!isNaN(res)) {
            avgArray = [...avgArray, parseFloat(res)];
          }
        }
      };

      populateAvgArray(this.$store.state.accuracy);

      // Get average of an Array of numbers
      const getAverageOf = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
      this.result = getAverageOf(avgArray);
      console.log(avgArray);
      console.log(this.result);

      // Set the winning team to true
      this.homeTeamWin = this.result < 0.5 ? true : false;
      this.draw = this.result == 0.5 ? true : false;
      this.awayTeamWin = this.result > 0.5 ? true : false;

      // Hide the working message and make the predit button clickable
      this.hideMessage();
      setTimeout(() => {
        this.thinking = false;
      }, 300);
    },
    convertToTrainingData(homeTeam, awayTeam, result) {
      return {
        input: [homeTeam.id, awayTeam.id],
        output: [result],
      };
    },
    showMessage(callback, callback2) {
      this.menuIsOpen = false;
      this.showAlertMessage = true;
      this.allowRunTest = false;

      callback2();
      // After 1 second disable the predict button
      setTimeout(() => {
        callback();
      }, 500);
    },
    hideMessage() {
      this.showAlertMessage = false;
      this.allowRunTest = true;
    },
    clearBorderStyle() {
      this.homeTeamWin = false;
      this.draw = false;
      this.awayTeamWin = false;
    },
    onChange() {
      // Check if selected teams are the same
      this.allowRunTest = this.homeSelected == this.awaySelected ? false : true;
      this.clearBorderStyle();
    },
    score(homeScore, awayScore) {
      if (homeScore > awayScore) {
        return 0;
      } else if (homeScore < awayScore) {
        return 1;
      }
      return parseFloat(0.5);
    },
  },
  computed: {
    winningTeamLogo() {
      if (this.homeTeamWin) {
        return this.homeSelected;
      }
      if (this.awayTeamWin) {
        return this.awaySelected;
      }
      return null;
    },
    matchHistory() {
      return this.$store.state.matchHistory;
    },
    teams() {
      return this.$store.state.teams;
    },
    trainingData() {
      var myArray = [];
      this.$store.state.matchHistory.forEach((match) => {
        let newArrayItem = this.convertToTrainingData(
          match.homeTeam,
          match.awayTeam,
          this.score(
            match.score.fullTime.homeTeam,
            match.score.fullTime.awayTeam
          )
        );
        myArray.push(newArrayItem);
      });
      return myArray;
    },
    homeSelected: {
      get() {
        return this.$store.state.homeSelected;
      },
      set(value) {
        this.$store.commit("updateHomeSelected", value);
      },
    },
    awaySelected: {
      get() {
        return this.$store.state.awaySelected;
      },
      set(value) {
        this.$store.commit("updateAwaySelected", value);
      },
    },
    selectedLeague() {
      return this.$store.state.selectedLeague;
    },
  },
  mounted() {
    this.$store.dispatch("loadData");
  },
};
</script>

<style>
.wrapper {
  transform: none;
  transition: all 300ms ease-in-out;
  will-change: transform;
}

.move-right {
  transform: translateX(300px);
}

html,
body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  border-top: 2px solid #6675c7;
}
.fade {
  transition: all 300ms ease-in-out;
}
.fade-border {
  transition: border 300ms ease-in-out;
  border-width: 2px;
}
.alert {
  padding-right: 100px;
  right: -20px;
  transition: all 300ms cubic-bezier(0.44, -0.03, 0.04, 1.25);
}
.hide_alert {
  transform: translateX(100%);
}
.slide-leave-active,
.slide-enter-active {
  transition: transform 300ms cubic-bezier(0.44, -0.03, 0.04, 1.25);
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}

.settings {
  box-shadow: 0 25px 0 #6675c7;
  transition: all 250ms cubic-bezier(0.44, -0.03, 0.04, 1.25);
}
.settings-toggel-button {
  top: -40px;
  right: 10px;
  height: 40px;
  padding: 6px 12px;
}

.settings-closed {
  transform: translateY(100%);
}

*,
button,
select {
  outline: none !important;
}

/* LOGO */

.logo-box {
  width: 200px;
  height: 240px;
}
@media only screen and (max-width: 576px) {
  .logo-box {
    width: 160px;
    height: 180px;
  }
}
@keyframes spinning {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
.spinning {
  animation: spinning 300ms linear infinite;
}
</style>

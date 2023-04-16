<template>
  <div id="app" class="relative min-h-screen overflow-hidden bg-indigo-500">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/premierleague">Premier League</router-link> |
      <router-link to="/championsleague">Champions League</router-link>
    </div>-->
    <div
      class="absolute h-screen py-8 text-left text-indigo-100 pin-t pin-l"
      style="max-width: 280px; padding-left: 20px"
    >
      <span class="block mb-2 font-bold text-indigo-800 uppercase">About</span>
      <p class="text-sm">
        Powered by BrainJS, Premier League Predictor uses match history from
        this year's Premier League, along with machine learning to try to
        predict the outcome of a soccer match.
      </p>

      <div class="mt-12">
        <span class="block mb-2 font-bold text-indigo-800 uppercase"
          >Settings</span
        >

        <div class="flex items-center w-full mb-2">
          <label class="flex-1" for="league">
            <span class="text-sm font-bold tracking-wide">League</span>
          </label>
          <div class="relative">
            <select
              class="block px-2 py-1 pr-8 ml-2 font-bold leading-tight text-gray-900 border-2 border-indigo-800 rounded appearance-none bg-gray-lightest"
              name="league"
              id="league"
              v-model="selectedLeague"
            >
              <option
                v-for="leagues in availableLeagues"
                :key="leagues.length"
                :value="leagues"
              >
                {{ leagues.name }}
              </option>
            </select>
            <div
              class="absolute flex items-center px-2 text-gray-900 pointer-events-none pin-y pin-r"
            >
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex items-center w-full mb-2">
          <label class="flex-1" for="accuracy">
            <span class="text-sm font-bold tracking-wide">Accuracy</span>
          </label>
          <input
            type="number"
            min="1"
            max="100"
            step="1"
            @change="updateAccuracyValue(num)"
            class="w-20 px-2 py-1 mt-2 ml-2 font-bold leading-tight text-gray-900 bg-gray-100 border-2 border-indigo-800 rounded appearance-none"
            name="accuracy"
            v-model="num"
          />
        </div>
      </div>
    </div>
    <router-view class="background-light"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: this.$store.state.accuracy,
    };
  },
  methods: {
    track() {
      this.$ga.page("/");
    },
    updateAccuracyValue(accuracy) {
      this.$store.state.accuracy = accuracy;
    },
  },
  computed: {
    accuracy() {
      return this.$store.state.accuracy;
    },
    selectedLeague: {
      get() {
        return this.$store.state.selectedLeague;
      },
      set(value) {
        this.$store.commit("updateLeague", value);
        this.$store.dispatch("loadData");
      },
    },
    availableLeagues() {
      return this.$store.state.availableLeagues;
    },
  },
};
</script>

<style lang="postcss">
/* @import "./../node_modules/hamburgers/dist/hamburgers.min.css"; */

/* Button */
.btn {
  @apply w-full p-4 mt-4 font-bold text-white border-t border-b rounded shadow;
}

/* Select */
.select {
  @apply block w-full px-4 py-3 pt-4 pr-8 text-lg font-semibold leading-tight bg-white border-2 rounded appearance-none border-gray-200 text-gray-800;
}

.select--yellow {
  @apply border-yellow-200 text-yellow-500 bg-yellow-100;
}

/* Select lable */
.select__label {
  @apply block px-4 mt-4 mb-2 text-xs font-extrabold tracking-wide text-left uppercase border-l-2 text-indigo-500 border-gray-100;
}

@font-face {
  font-family: "sofia-pro-soft";
  src: url("./assets/fonts/SofiaProSoftRegular.ttf");
}
@font-face {
  font-family: "fat-frank";
  src: url("./assets/fonts/fatfrank-webfont.ttf");
}
.fat-frank {
  font-family: fat-frank;
  letter-spacing: 1px;
}
body {
  color: #3c4858;
  font-family: sofia-pro-soft, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.background-light {
  background: #f8fafc;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}
</style>

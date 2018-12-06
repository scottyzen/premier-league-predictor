<template>
  <div id="app" class="relative min-h-screen overflow-hidden bg-purple">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/premierleague">Premier League</router-link> |
      <router-link to="/championsleague">Champions League</router-link>
    </div> -->
    <div class="h-screen absolute pin-t pin-l py-8 text-purple-lightest text-left" style="max-width: 280px; padding-left: 20px">

        <span class="block uppercase text-purple-darker mb-2 font-bold">About</span>
        <p class=" text-sm">
        Powered by BrainJS, Premier League Predictor uses match history from this year's Premier League, along with machine learning to try to predict the outcome of a soccer match.
        </p>

        <div class="mt-12">
            <span class="block uppercase text-purple-darker mb-2 font-bold">Settings</span>


            <div class="flex w-full items-center mb-2">
                <label class="flex-1" for="league">
                    <span class="text-sm font-bold tracking-wide">League</span>
                </label>
                <div class="relative">
                    <select class="block appearance-none bg-grey-lightest border-2 border-purple-dark text-grey-darker font-bold py-1 px-2 ml-2 pr-8 rounded leading-tight" name="league" id="league" v-model="selectedLeague">
                        <option v-for="leagues in availableLeagues" :key="leagues.length" :value="leagues">
                            {{leagues.name}}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>

            <div class="flex w-full items-center mb-2">
                <label class="flex-1" for="accuracy">
                    <span class="text-sm font-bold tracking-wide">Accuracy</span>
                </label>
                <input 
                type="number" 
                min="1"
                max="100"
                step="1"
                @change="updateAccuracyValue(num)" 
                class="appearance-none border-2 border-purple-dark w-20 ml-2 mt-2 font-bold bg-grey-lightest text-grey-darker px-2 rounded leading-tight py-1" 
                name="accuracy" 
                v-model="num">
            </div>
        </div>
    </div>
    <router-view class="background-light"></router-view>
    
  </div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return {
            num: this.$store.state.accuracy
        }
    },
    methods:{
        track () {
            this.$ga.page('/')
        },
        updateAccuracyValue(accuracy){
            this.$store.state.accuracy = accuracy
        }
    },
    computed: {
        accuracy() {
            return this.$store.state.accuracy
        },
        selectedLeague: {
            get () {
                return this.$store.state.selectedLeague
            },
            set (value) {
                this.$store.commit('updateLeague', value)
                this.$store.dispatch('loadData')
            }
        },
        availableLeagues(){
            return this.$store.state.availableLeagues
        }
    }
}
</script>

<style lang="scss">
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

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {

opacity: 1;

}
</style>

<template>
  <div id="app" class="relative min-h-screen overflow-hidden">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="h-screen absolute pin-t pin-l py-8 text-purple-lightest text-left" style="max-width: 280px; padding-left: 10px">

        <p>
        Powered by BrainJS, <strong>Premier League Predictor</strong> uses match history from this year's Premier League, along with machine learning to try to predict the outcome of a soccer match.
        </p>
        <a href="https://github.com/BrainJS" target="blank">
            <img src="./assets/brainjs.svg" width="36px" class="m-1 mt-3 mr-2" alt="Brain.js logo">
        </a>
        <a href="https://www.skysports.com/premier-league-results" target="blank">
            <img src="./assets/Premier-League-logo-sm.png" width="36px" class="m-1 mt-3" alt="premier league logo">
        </a>
        
        <div class="mt-12">
            <div class="flex w-full items-center">
                <!-- <small class="block text-purple-lightest font-semibold">As the number of iterations goes up, the accuracy and time it takes to complete will also go up.</small> -->
                <label class="block tracking-wide text-white text-sm mb-2 font-bold flex-1" for="iterations">
                    ITERATIONS
                    <br>
                    <small class="block text-purple-lightest font-semibold mt-1">Increases the accuracy and time it takes to run</small>
                </label>
                <input 
                type="number" 
                min="0"
                @change="updateIterationValue(num)" 
                class="appearance-none border-2 border-purple-dark w-24 ml-4 bg-grey-lightest text-grey-darker py-2 px-2 rounded leading-tight h-10" 
                name="iterations" 
                v-model="num">
            </div>
        </div>
        <div class="p-4 absolute pin-b pin-l">
            <a href="https://twitter.com/scottyzen?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @scottyzen</a>
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
            num: this.$store.state.iterations
        }
    },
    methods:{
        track () {
            this.$ga.page('/')
        },
        updateIterationValue(iterations){
            this.$store.state.iterations = iterations
        }
    },
    computed: {
        iterations() {
            return this.$store.state.iterations
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
	font-size: 18px;
}
#app {
	background: #9462dd;
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
</style>

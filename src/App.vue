<template>
  <div id="app" class="relative min-h-screen overflow-hidden bg-purple">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="h-screen absolute pin-t pin-l py-8 text-purple-lightest text-left" style="max-width: 280px; padding-left: 20px">

        <span class="block uppercase text-purple-darker mb-2 font-bold">About</span>
        <p class=" text-sm">
        Powered by BrainJS, Premier League Predictor uses match history from this year's Premier League, along with machine learning to try to predict the outcome of a soccer match.
        </p>

        <div class="mt-12">
            <span class="block uppercase text-purple-darker mb-2 font-bold">Settings</span>
            <div class="flex w-full items-center">
                <label class="flex-1" for="accuracy">
                    <span class="text-sm font-bold tracking-wide">Accuracy</span>
                    <!-- <p class="block mt-1 text-sm">Increases the value and time it takes to run</p> -->
                </label>
                <input 
                type="number" 
                min="1"
                max="100"
                step="1"
                @change="updateAccuracyValue(num)" 
                class="appearance-none border-2 border-purple-dark w-20 ml-2 mt-2 font-bold bg-grey-lightest text-grey-darker px-2 rounded leading-tight py-2" 
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

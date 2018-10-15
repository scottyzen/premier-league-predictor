<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    methods:{
        track () {
            this.$ga.page('/')
        }
    },
    metaInfo: {
        title: 'Premier League Predictor',
        // The value of title will be injected into the %s placeholder in titleTemplate before being rendered
        titleTemplate: '%s - Premier League Predictor',
        meta: [
            { charset: 'utf-8' },
            { name: 'description', content: 'An app that uses history from the Premier League along with machine learning to try to predict the outcome of a soccor match.' }
        ]
    }
}
</script>


<style>
body {
	background: #f8fafc;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
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

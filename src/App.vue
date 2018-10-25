<template>
  <div id="app" class="relative min-h-screen overflow-hidden">
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
    }
}
</script>


<style>
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
	background: #f8fafc;
	color: #3c4858;
	font-family: sofia-pro-soft, sans-serif;
	font-size: 18px;
}
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
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

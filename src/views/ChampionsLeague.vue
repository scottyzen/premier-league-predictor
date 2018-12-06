<template>
    <div class="wrapper px-4 pt-4 md:pt-16 h-screen shadow-lg" :class="{'move-right': menuIsOpen}">
        <button class="hamburger hamburger--spin absolute pin-l pin-t mt-2" :class="{'is-active': menuIsOpen}" type="button" @click="menuIsOpen = !menuIsOpen">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>

        <!-- ALERT Message -->
        <transition name="slide">
            <div  class="alert fade absolute pin-t bg-purple-lightest border-l-4 border-purple rounded-b text-left text-purple-darkest px-6 pt-5 pb-3 my-4 shadow-md" v-show="showAlertMessage" role="alert">
                <div class="flex">
                    <div class="py-1">
                        <img width="32px" class="mr-5" src="../assets/loading.gif">
                    </div>
                    <div>
                    <p class="font-bold">Hold on tight</p>
                    <p class="text-sm">We're crunching the numbers</p>
                    </div>
                </div>
            </div>
        </transition>

        <div class="max-w-lg m-auto mt-20">

            <h1 class="mb-6 md:px-6 text-3xl sm:text-4xl fat-frank uppercase">{{selectedLeague.name}} Predictor.</h1>

            <h2 class="hidden md:block font-normal text-sm md:text-base max-w-xs md:max-w-sm leading-normal m-auto">Using <strong>match history</strong> along with <strong>machine learning</strong> to try to predict a matches outcome.</h2>

        <div class="flex flex-wrap items-end pt-10">
            <!-- Select's -->
            <div class="w-full md:w-4/5 flex">
                <!-- Home select -->
                <div class="w-full sm:w-1/2 mr-4 lg:mr-6">
                    <label class="select__label md:mt-8" for="home-team">Home Team</label>
                    <div class="relative">
                        <select @change="onChange()" class="fade-border select" :class="{'select--yellow' : homeTeamWin}" v-model="homeSelected">
                            <option v-for="team in teams" v-bind:value="team.id" :key="team.id">
                                {{ team.shortName }}
                            </option>
                        </select>
                        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <!-- Away select -->
                <div class="w-full sm:w-1/2 mr-0 md:mr-4 lg:mr-6">
                    <label class="select__label md:mt-8" for="away-team">Away Team</label>
                    <div class="relative">
                        <select @change="onChange()" class="fade-border select" :class="{'select--yellow' : awayTeamWin}" v-model="awaySelected">
                            <option v-for="team in teams" v-bind:value="team.id" :key="team.id">
                                {{ team.shortName }}
                            </option>
                        </select>
                        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button -->
            <div class="w-full sm:flex-1">
                <button 
                    @click="showMessage(runTest, clearBorderStyle)"  
                    :disabled="!allowRunTest" 
                    class="fade btn md:pb-3 " 
                    :class="{'bg-purple hover:bg-purple-dark': allowRunTest , 'cursor-pointer bg-grey cursor-not-allowed': !allowRunTest}" 
                    type="button">Predict Match</button>
            </div>
        </div>

        <div class="w-full m-auto text-center max-w-lg mt-8 md:mt-12">
            <div class="w-full mt-8 text-lg md:text-3xl" >
                <p v-if="homeTeamWin">We are going for the home team</p>
                <p v-if="draw">We are going for a Draw on this one.</p>
                <p v-if="awayTeamWin">We are going for the away team</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import '@/assets/styles/main.css';
import brain from 'brain.js';

export default {
    name: 'home',
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
            menuIsOpen : false,
            thinking: false,
        }
    },
    methods:{
        runTest(){
            // this.trainingData = null;
            let net = new brain.recurrent.RNN();

            // Get the match data
            this.thinking = true;
            this.clearBorderStyle()
            
            var avgArray = []; // Array of results

            var populateAvgArray = (times) => {

                for (let i = 0; i < times; i++) {

                    // Train data with options
                    net.train(this.trainingData, {
                         iterations: 50 
                    } );

                    // Run the two teams agains each other
                    var res = net.run([this.homeSelected, this.awaySelected]);
                    
                    // Make sure result is between 0 - 1
                    if (res <= 0) { res = 0 }
                    if (res >= 1) { res = 1 }

                    // Check result is number before pushing to array
                    if (!isNaN(res)) {
                        avgArray = [...avgArray, parseFloat(res)]
                    }
                }

            }

            populateAvgArray(this.$store.state.accuracy);

            // Get average of an Array of numbers
            const getAverageOf = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length       
            this.result = getAverageOf( avgArray )
            console.log(avgArray);
            console.log(this.result);
            

            // Set the winning team to true
            this.homeTeamWin = (this.result < 0.5 ) ? true : false;
            this.draw = (this.result == 0.5 ) ? true : false;         
            this.awayTeamWin = (this.result > 0.5 ) ? true : false;

            // Hide the working message and make the predit button clickable
            this.hideMessage();
            setTimeout(() => {
                this.thinking = false;
            }, 300);
            
        },
        convertToTrainingData(homeTeam, awayTeam, result) {
            return {
                input: [homeTeam.id, awayTeam.id],
                output: [result]
            }
        },
        showMessage(callback, callback2){
            this.menuIsOpen= false;
            this.showAlertMessage = true;
            this.allowRunTest = false;
            
            callback2();
            // After 1 second disable the predict button
            setTimeout(() => {
                callback()
            }, 500);
        },
        hideMessage(){
            this.showAlertMessage = false;
            this.allowRunTest = true;
        },
        clearBorderStyle(){
            this.homeTeamWin = false;
            this.draw = false;
            this.awayTeamWin = false;
        },
        onChange() {
            // Check if selected teams are the same
            this.allowRunTest = (this.homeSelected == this.awaySelected) ? false: true;
            this.clearBorderStyle();            
        },
        score(homeScore, awayScore) {
            if (homeScore > awayScore) {
                return 0
            } else if (homeScore < awayScore) {
                return 1
            }
            return parseFloat(0.5)
        }
    },
    beforeCreate: function () {
      this.$store.commit('updateLeague', { id: 'CL',     name: 'Champions League'})
    },
    computed: {
        winningTeamLogo () {
            
            if (this.homeTeamWin) {return require('@/assets/crests/'+this.homeSelected+'.png')}
            if (this.awayTeamWin) {return require('@/assets/crests/'+this.awaySelected+'.png')}
            return require('../assets/Premier-League-logo.png');
        },
        matchHistory(){
            return this.$store.state.matchHistory;
        },
        teams(){
            return this.$store.state.teams;
        },
        trainingData(){
            var myArray = [];
            this.$store.state.matchHistory.forEach(match => {
                let newArrayItem = this.convertToTrainingData(match.homeTeam, match.awayTeam, this.score(match.score.fullTime.homeTeam ,match.score.fullTime.awayTeam ))
                myArray.push(newArrayItem)
            });
            return myArray;
        },
        homeSelected: {
            get () {
                return this.$store.state.homeSelected
            },
            set (value) {
                this.$store.commit('updateHomeSelected', value)
            }
        },
        awaySelected: {
            get () {
                return this.$store.state.awaySelected
            },
            set (value) {
                this.$store.commit('updateAwaySelected', value)
            }
        },
        selectedLeague() {
            return this.$store.state.selectedLeague
        }
    },
    created: function () {
        this.$store.dispatch('loadData')
    }
};
</script>

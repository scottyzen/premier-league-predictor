<template>
    <div class="wrapper px-4 pt-4 md:pt-20 max-w-lg m-auto">
        
        <!-- Premier League logo -->
        <img class="w-1/2 md:w-1/3" src="../assets/Premier-League-logo.png" alt="Premier League Logo">

        <h1 class="mb-6 px-16 md:px-4 text-xl md:text-4xl">Premier League Predictor</h1>

        <h2 class="font-normal text-sm md:text-base max-w-xs md:max-w-sm leading-normal m-auto">Using <strong class=" text-purple-darker">match history</strong> along with <strong class=" text-purple-darker">machine learning</strong> to try to predict a matches outcome.</h2>

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

    <div class="flex flex-wrap items-end">
        <!-- Select's -->
        <div class="w-full md:w-4/5 flex">
            <!-- Home select -->
            <div class="w-full sm:w-1/2 mr-4 lg:mr-6">
                <label class="text-left block uppercase tracking-wide text-grey-dark text-xs font-semibold px-4 border-l-2 border-grey-lightest mt-8 mb-2" for="home-team">Home Team</label>
                <div class="relative">
                    <select @change="onChange()" class="fade-border block font-semibold appearance-none w-full bg-white border border-grey-light hover:border-grey text-grey-darker py-3 px-4 pr-8 rounded leading-tight" :class="{'border-yellow-light text-yellow bg-yellow-lightest' : homeTeamWin}" v-model="homeSelected">
                        <option v-for="team in teams" v-bind:value="team.number" :key="team.number">
                            {{ team.name }}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
            <!-- Away select -->
            <div class="w-full sm:w-1/2 mr-0 md:mr-4 lg:mr-6">
                <label class="text-left block uppercase tracking-wide text-grey-dark text-xs font-semibold px-4 border-l-2 border-grey-lightest mt-8 mb-2" for="away-team">Away Team</label>
                <div class="relative">
                    <select @change="onChange()" class="fade-border block font-semibold appearance-none w-full bg-white border border-grey-light hover:border-grey text-grey-darker py-3 px-4 pr-8 rounded leading-tight" :class="{'border-yellow-light text-yellow bg-yellow-lightest' : awayTeamWin}" v-model="awaySelected">
                        <option v-for="team in teams" v-bind:value="team.number" :key="team.number">
                            {{ team.name }}
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
                class="fade w-full shadow focus:shadow-outline focus:outline-none text-white font-bold p-4 md:pb-3 border-t border-b mt-8 text-md rounded" 
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

    <!-- Settings -->
    <div class="settings z-10 bg-purple w-full text-left px-4 py-8 pb-10 shadow absolute pin-b pin-l" :class="{'settings-closed' : !showSettings}">

        <!-- Setting toggle button -->
        <div class="settings-toggel-button absolute pin-r pin-t bg-purple cursor-pointer rounded-t">
            <div @click="showSettings = !showSettings" class="flex flex-row items-center">
                <span class="font-bold text-white mr-1 hidden md:block">Settings</span>
                <!-- UP -->
                <svg v-if="!showSettings" class="fill-current text-white" width="28px" viewBox="0 0 20 20"><path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"/></svg>

                <!-- DOWN -->
                <svg v-if="showSettings" class="fill-current text-white" width="28px" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>

            </div>
        </div>    

        <!-- Setings Options -->
        <div class="max-w-lg m-auto">
            <div class="float-left max-w-sm">
                <label class="block uppercase tracking-wide text-white text-sm mb-2 font-bold" for="grid-zip">Iterations</label>
                <div class="flex w-full">
                    <small class="block text-purple-lightest font-semibold">As the number of iterations goes up, the accuracy and time it takes to complete will go up.</small>
                    <input type="number" class="appearance-none border-2 border-purple-darker w-24 ml-6 bg-grey-lightest text-grey-darker py-2 px-2 mb-2 rounded leading-tight" name="" id="" v-model="iterations" value="iterations">
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import '@/assets/styles/main.css';
import brain from 'brain.js';

let net = new brain.recurrent.RNN();

function Team(name, num) {
  this.name = name;
  this.num = num;
}

const manchesterUnited = new Team('Manchester United', 1),
  leicesterCity = new Team('Leicester City', 2),
  wolverhampton = new Team('Wolverhampton', 3),
  everton = new Team('Everton', 4),
  watford = new Team('Watford', 5),
  brighton = new Team('Brighton', 6),
  huddersfield = new Team('Huddersfield', 7),
  chelsea = new Team('Chelsea', 8),
  fulham = new Team('Fulham', 9),
  crystalPalace = new Team('Crystal Palace', 10),
  bournemouth = new Team('Bournemouth', 11),
  cardiff = new Team('Cardiff', 12),
  newcastleUnited = new Team('Newcastle United', 13),
  tottenhamHotspurs = new Team('Tottenham Hotspurs', 14),
  arsenal = new Team('Arsenal', 15),
  manchesterCity = new Team('Manchester City', 16),
  southamptom = new Team('Southampton', 17),
  burnley = new Team('Burnley', 18),
  liverpool = new Team('Liverpool', 19),
  westHamUnited = new Team('West Ham United', 20);

function Match(homeTeam, awayTeam, result) {
  return {
    input: [homeTeam.num, awayTeam.num],
    output: [result]
  }
}
function score(homeScore, awayScore) {
    let fract = (homeScore - awayScore) * 0.3;
    let num = 0.5;
    if (homeScore > awayScore) {
        // num = num - fract
        // if (num < 0) {
        // num = 0
        // }
        num = 0;
    } else if (homeScore < awayScore) {
        // num = num - fract;
        // if (num > 1) {
        // num = 1
        // }
        num = 1;
    }
    return num
}

const data = [
    new Match(manchesterUnited, leicesterCity, score(2, 1)),
    new Match(wolverhampton, everton, score(2, 2)),
    new Match(watford, brighton, score(2, 0)),
    new Match(huddersfield, chelsea, score(0, 3)),
    new Match(fulham, crystalPalace, score(0, 2)),
    new Match(bournemouth, cardiff, score(2, 0)),
    new Match(newcastleUnited, tottenhamHotspurs, score(1, 2)),
    new Match(arsenal, manchesterCity, score(0, 2)),
    new Match(southamptom, burnley, score(0, 0)),
    new Match(liverpool, westHamUnited, score(4, 0)),
    new Match(chelsea, arsenal, score(3, 2)),
    new Match(westHamUnited, bournemouth, score(1, 2)),
    new Match(tottenhamHotspurs, fulham, score(3, 1)),
    new Match(leicesterCity, wolverhampton, score(2, 0)),
    new Match(everton, southamptom, score(2, 1)),
    new Match(cardiff, newcastleUnited, score(0, 0)),
    new Match(brighton, manchesterUnited, score(3, 2)),
    new Match(manchesterCity, huddersfield, score(6, 1)),
    new Match(burnley, watford, score(1, 3)),
    new Match(crystalPalace, liverpool, score(0, 2)),
    new Match(liverpool, brighton, score(1, 0)),
    new Match(southamptom, leicesterCity, score(1, 2)),
    new Match(huddersfield, cardiff, score(0, 0)),
    new Match(bournemouth, everton, score(2, 2)),
    new Match(arsenal, westHamUnited, score(3, 1)),
    new Match(wolverhampton, manchesterCity, score(1, 1)),
    new Match(newcastleUnited, chelsea, score(1, 2)),
    new Match(fulham, burnley, score(4, 2)),
    new Match(watford, crystalPalace, score(2, 1)),
    new Match(manchesterUnited, tottenhamHotspurs, score(0, 3)),
    new Match(manchesterCity, newcastleUnited, score(2, 1)),
    new Match(westHamUnited, wolverhampton, score(0, 1)),
    new Match(everton, huddersfield, score(1, 1)),
    new Match(crystalPalace, southamptom, score(0, 2)),
    new Match(chelsea, bournemouth, score(2, 0)),
    new Match(brighton, fulham, score(2, 2)),
    new Match(leicesterCity, liverpool, score(1, 2)),
    new Match(watford, tottenhamHotspurs, score(2, 1)),
    new Match(burnley, manchesterUnited, score(0, 2)),
    new Match(cardiff, arsenal, score(2, 3)),
    new Match(watford, manchesterUnited, score(1, 2)),
    new Match(newcastleUnited, arsenal, score(1, 2)),
    new Match(manchesterCity, fulham, score(3, 0)),
    new Match(huddersfield, crystalPalace, score(0, 1)),
    new Match(chelsea, cardiff, score(4, 1)),
    new Match(bournemouth, leicesterCity, score(4, 2)),
    new Match(tottenhamHotspurs, liverpool, score(1, 2)),
    new Match(everton, westHamUnited, score(1, 3)),
    new Match(wolverhampton, burnley, score(1, 0)),
    new Match(southamptom, brighton, score(2, 2)),
    new Match(brighton, tottenhamHotspurs, score(1, 2)),
    new Match(manchesterUnited, wolverhampton, score(1, 1)),
    new Match(liverpool, southamptom, score(3, 0)),
    new Match(leicesterCity, huddersfield, score(3, 1)),
    new Match(crystalPalace, newcastleUnited, score(0, 0)),
    new Match(cardiff, manchesterCity, score(0, 5)),
    new Match(burnley, bournemouth, score(4, 0)),
    new Match(fulham, watford, score(1, 1)),
    new Match(arsenal, everton, score(2, 0)),
    new Match(westHamUnited, chelsea, score(0, 0)),
    new Match(chelsea, liverpool, score(1, 1)),
    new Match(wolverhampton, southamptom, score(2, 0)),
    new Match(newcastleUnited, leicesterCity, score(0, 2)),
    new Match(manchesterUnited, brighton, score(2, 0)),
    new Match(huddersfield, tottenhamHotspurs, score(0, 2)),
    new Match(everton, fulham, score(3, 0)),
    new Match(arsenal, watford, score(2, 0)),
    new Match(westHamUnited, manchesterUnited, score(3, 1)),
    new Match(cardiff, burnley, score(1, 2)),
    new Match(bournemouth, crystalPalace, score(2, 1)),
    new Match(brighton, westHamUnited, score(1, 0)),
    new Match(manchesterUnited, newcastleUnited, score(3, 2)),
    new Match(watford, bournemouth, score(0, 4)),
    new Match(tottenhamHotspurs, cardiff, score(1, 0)),
    new Match(leicesterCity, everton, score(1, 2)),
    new Match(crystalPalace, wolverhampton, score(0, 1)),
    new Match(burnley, huddersfield, score(1, 1)),
    new Match(liverpool, manchesterCity, score(0, 0)),
    new Match(southamptom, chelsea, score(0, 3)),
    new Match(fulham, arsenal, score(1, 5))
];

function trainMyData(iterations) {
    net.train(data, {iterations: iterations})
}

export default {
    name: 'home',
    data() {
        return {
            homeSelected: 8,
            awaySelected: 1,
            allowRunTest: true,
            homeTeamWin: false,
            draw: false,
            awayTeamWin: false,
            showAlertMessage: false,
            result: null,
            iterations: 150,
            showSettings: false,
            teams: [
                { name: 'Arsenal', number: 15 },
                { name: 'Bournemouth', number: 11 },
                { name: 'Brighton', number: 6 },
                { name: 'Burnley', number: 18 },
                { name: 'Cardif', number: 12 },
                { name: 'Chelsea', number: 8 },
                { name: 'Crystal Palace', number: 10 },
                { name: 'Everton', number: 4 },
                { name: 'Fulham', number: 9 },
                { name: 'Huddersfield', number: 7 },
                { name: 'Leicester City', number: 2 },
                { name: 'Liverpool', number: 19 },
                { name: 'Manchester City', number: 16 },
                { name: 'Manchester United', number: 1 },
                { name: 'Newcastle United', number: 13 },
                { name: 'Southampton', number: 17 },
                { name: 'Tottenham Hotspurs', number: 14 },
                { name: 'Watford', number: 5 },
                { name: 'West Ham United', number: 20 },
                { name: 'Wolverhampton', number: 3 }
            ]
        }
    },
    methods:{
        runTest(){
            // Get the match data
            this.clearBorderStyle()
            trainMyData(this.iterations)

            // Run the two teams agains each other
            this.result = net.run([this.homeSelected, this.awaySelected])
            console.log(this.result);

            // Set the winning team to true
            if(this.result == 0.5 ){
                this.draw = true;
            }else if (this.result < 0.5) {
                this.homeTeamWin = true;
            }else {
                this.awayTeamWin = true;
            }

            // Hide the working message and make the predit button clickable
            this.hideMessage();
            
        },
        showMessage(callback, callback2){

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
        }
    }
};
</script>

<style>
html,
body {
	margin: 0;
	height: calc(100% - 0);
	overflow: hidden;
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
	box-shadow: 0 25px 0 #9462dd;
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
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	opacity: 1;
}
</style>


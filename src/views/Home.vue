<template>
    <div class="wrapper">
        <transition name="slide">
            <div  class="alert fade absolute pin-t bg-purple-lightest border-l-4 border-purple rounded-b text-left text-purple-darkest px-6 py-4 my-4 shadow-md" v-if="showAlertMessage" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-purple mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                    <p class="font-bold">Working</p>
                    <p class="text-sm">Crunching the numbers</p>
                    </div>
                </div>
            </div>
        </transition>
        <div class="max-w-lg m-auto pt-32 mt-20 flex justify-between items-end">
        <div class="w-full md:w-2/5 px-3">
            <label class="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="home-team">
                Home team
            </label>
            <div class="relative">
                <select @change="onChange()" class="fade-border block appearance-none w-full bg-grey-lightest border border-grey-light text-grey-darker py-3 px-4 pr-8 rounded leading-tight" :class="{'border-green' : homeTeamWin}" v-model="homeSelected">
                    <option v-for="team in teams" v-bind:value="team.number" :key="team.number">
                        {{ team.name }}
                    </option>
                </select>
                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div>

        <div class="w-full md:w-2/5 px-3">
            <label class="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="away-team">
                Away team
            </label>
            <div class="relative">
                <select @change="onChange()" class="fade-border border-grey-darker block appearance-none w-full bg-grey-lightest border border-grey-light text-grey-darker py-3 px-4 pr-8 rounded leading-tight" :class="{'border-green' : awayTeamWin}" v-model="awaySelected">
                    <option v-for="team in teams" v-bind:value="team.number" :key="team.number">
                        {{ team.name }}
                    </option>
                </select>
                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div>

        <div class="w-auto px-3">
            <button @mousedown.prevent="showMessage()" @mouseup.prevent="runTest()" :disabled="!allowRunTest" class=" fade bg-grey shadow focus:shadow-outline focus:outline-none text-white font-bold py-3 mt-4 px-4 pt-4 text-md rounded" :class="{ 'opacity-100 bg-purple hover:bg-purple-light': allowRunTest }" type="button">
                Predict match
            </button>
        </div>
    </div>
    <div class="w-full m-auto text-center max-w-lg mt-10">
        <div class="w-full mt-8">
            <p class="text-3xl" v-if="homeTeamWin">We are going for the home team</p>
            <p class="text-3xl" v-if="awayTeamWin">We are going for the away team</p>
            <!-- <p class="inline-block mt-6 bg-grey-light text-white font-bold py-2 px-4 rounded-full">{{homeStats}}</p> -->
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import '@/assets/styles/main.css';
import brain from 'brain.js';

const network = new brain.recurrent.RNN();

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
    let fract = (homeScore - awayScore) * 0.225;
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

function trainMyData() {
    network.train([
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

        ], {
        iterations: 150, // the maximum times to iterate the training data --> number greater thn 0
        })
}

export default {
    name: 'home',
    data() {
        return {
            homeSelected: 1,
            awaySelected: 12,
            allowRunTest: true,
            homeTeamWin: false,
            awayTeamWin: false,
            showAlertMessage: false,
            result: null,
            teams: [
                { name: 'Arsenal', number: 15 },
                { name: 'Bournemouth', number: 11 },
                { name: 'Brighton', number: 6 },
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
            trainMyData()

            // Run the two teams agains each other
            this.result = network.run([this.homeSelected, this.awaySelected])

            // Set the winning team to true
            if (this.result < 0.5) {
                this.homeTeamWin = true;
            }else {
                this.awayTeamWin = true;
            }

            // Hide the working message and make the predit button clickable
            this.hideMessage();
            
        },
        showMessage(){

            this.showAlertMessage = true;
            
            // After 1 second disable the predict button
            setTimeout(() => {
                this.allowRunTest = false;
            }, 1000);
        },
        hideMessage(){

            this.showAlertMessage = false;
            setTimeout(() => {
                this.allowRunTest = true;
            }, 100);
        },
        clearBorderStyle(){
            this.homeTeamWin = false;
            this.awayTeamWin = false;
            this.allowRunTest = true;
        },
        onChange() {
           this.clearBorderStyle();

            // TODO
            // Check if selected teams are the same
        }
    }
};
</script>

<style>
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
	transition: 100ms;
}
.slide-enter {
	transform: translate(100%, 0);
}
.slide-leave-to {
	transform: translate(100%, 0);
}
input,
button,
select {
	outline: none !important;
}
</style>


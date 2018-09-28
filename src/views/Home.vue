<template>
    <div class="wrapper">
        <div class="max-w-lg m-auto pt-32 mt-20 flex justify-between items-end">
        <div class="w-full md:w-2/5 px-3">
        <label class="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="home-team">
            Home team
        </label>
        <div class="relative">
            <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" v-model="homeSelected">
                <option v-for="team in teams" v-bind:value="team.number" :key="team.number">
                    {{ team.name }}
                </option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
        </div>

        <div class="w-full md:w-2/5 px-3">
        <label class="text-left block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="away-team">
            Away team
        </label>
        <div class="relative">
            <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-t4ght focus:outline-none focus:bg-white focus:border-grey" v-model="awaySelected">
                <option v-for="team in teams" v-bind:value="team.number" :key="team.number">
                    {{ team.name }}
                </option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>

        </div>

        <div class="w-auto px-3">
            <button v-on:click="runTest()" class="shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-3 mt-4 px-4 pt-4 text-md rounded" type="button">
                Predict match
            </button>
        </div>
    </div>
    <div class="w-full m-auto text-center max-w-lg mt-10">
        <div class="w-full mt-8" v-if="homeStats">
            <p class="text-3xl" v-if="homeStats < 0.5">We are going for the home team</p>
            <p class="text-3xl" v-else>We are going for the away team</p>
            <p class="inline-block mt-6 bg-grey-light text-white font-bold py-2 px-4 rounded-full">{{homeStats}}</p>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/assets/styles/main.css';
import brain from 'brain.js';

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
  westHamUnited = new Team('West Ham United', 20),
  home = {
    home: 1
  },
  draw = {
    draw: 1
  },
  away = {
    away: 1
  };

function Match(homeTeam, awayTeam, result) {
  return {
    input: [homeTeam.num, awayTeam.num],
    output: [result]
  }
}

export default {
    name: 'home',
    data() {
        return {
            matchResult: '',
            homeSelected: 19,
            awaySelected: 11,
            homeStats: 0,
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
        newNetwork(){
            const network = new brain.NeuralNetwork();

            function score(homeScore, awayScore) {
                let fract = (homeScore - awayScore) * 0.225;
                let num = 0.5;
                if (homeScore > awayScore) {
                    num = num - fract
                    if (num < 0) {
                    num = 0
                    }
                } else if (homeScore < awayScore) {
                    num = num - fract;
                    if (num > 1) {
                    num = 1
                    }
                }
                return num
            }
 
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

                ], {
                iterations: 20000, // the maximum times to iterate the training data --> number greater thn 0
                learningRate: 0.99, // scales with delta to effect training rate --> number between 0 and 1
                momentum: 0.25, // scales with next layer's change value --> number between 0 and 1
            })

            return network.run([this.homeSelected, this.awaySelected]);
        },
        runTest(){
            let result = this.newNetwork()
            this.homeStats = `${result}`
        }
    }
};
</script>

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
    output: result
  }
}

network.train([
  new Match(manchesterUnited, leicesterCity, home),
  new Match(wolverhampton, everton, draw),
  new Match(watford, brighton, home),
  new Match(huddersfield, chelsea, away),
  new Match(fulham, crystalPalace, away),
  new Match(bournemouth, cardiff, home),
  new Match(newcastleUnited, tottenhamHotspurs, away),
  new Match(arsenal, manchesterCity, away),
  new Match(southamptom, burnley, draw),
  new Match(liverpool, westHamUnited, home),
  new Match(chelsea, arsenal, home),
  new Match(westHamUnited, bournemouth, away),
  new Match(tottenhamHotspurs, fulham, home),
  new Match(leicesterCity, wolverhampton, home),
  new Match(everton, southamptom, home),
  new Match(cardiff, newcastleUnited, draw),
  new Match(brighton, manchesterUnited, home),
  new Match(manchesterCity, huddersfield, home),
  new Match(burnley, watford, away),
  new Match(crystalPalace, liverpool, away),
  new Match(liverpool, brighton, home),
  new Match(southamptom, leicesterCity, away),
  new Match(huddersfield, cardiff, draw),
  new Match(bournemouth, everton, draw),
  new Match(arsenal, westHamUnited, home),
  new Match(wolverhampton, manchesterCity, draw),
  new Match(newcastleUnited, chelsea, away),
  new Match(fulham, burnley, home),
  new Match(watford, crystalPalace, home),
  new Match(manchesterUnited, tottenhamHotspurs, away),
  new Match(manchesterCity, newcastleUnited, home),
  new Match(westHamUnited, wolverhampton, away),
  new Match(everton, huddersfield, draw),
  new Match(crystalPalace, southamptom, away),
  new Match(chelsea, bournemouth, home),
  new Match(brighton, fulham, draw),
  new Match(leicesterCity, liverpool, away),
  new Match(watford, tottenhamHotspurs, home),
  new Match(burnley, manchesterUnited, away),
  new Match(cardiff, arsenal, away),
  new Match(watford, manchesterUnited, away),
  new Match(newcastleUnited, arsenal, away),
  new Match(manchesterCity, fulham, home),
  new Match(huddersfield, crystalPalace, away),
  new Match(chelsea, cardiff, home),
  new Match(bournemouth, leicesterCity, home),
  new Match(tottenhamHotspurs, liverpool, away),
  new Match(everton, westHamUnited, away),
  new Match(wolverhampton, burnley, home),
  new Match(southamptom, brighton, draw)
], {
  iterations: 20000, // the maximum times to iterate the training data --> number greater than 0
  learningRate: 0.99, // scales with delta to effect training rate --> number between 0 and 1
  momentum: 0.25 // scales with next layer's change value --> number between 0 and 1
});

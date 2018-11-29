/* eslint-disable */

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
    
    // let fract = (homeScore - awayScore) * 0.15;
    // let num = 0.5;
    if (homeScore > awayScore) {
        // num = num - fract
        // if (num < 0) {
        //     return 0
        // }
        // return parseFloat(num)

        return 0
    } else if (homeScore < awayScore) {
        // num = num - fract;
        // if (num > 1) {
        //     return 1
        // }
        // return parseFloat(num)

        return 1
    }
    
    return parseFloat(0.5)
}

export const data = [
    Match(manchesterUnited, leicesterCity, score(2, 1)),
    Match(wolverhampton, everton, score(2, 2)),
    Match(watford, brighton, score(2, 0)),
    Match(huddersfield, chelsea, score(0, 3)),
    Match(fulham, crystalPalace, score(0, 2)),
    Match(bournemouth, cardiff, score(2, 0)),
    Match(newcastleUnited, tottenhamHotspurs, score(1, 2)),
    Match(arsenal, manchesterCity, score(0, 2)),
    Match(southamptom, burnley, score(0, 0)),
    Match(liverpool, westHamUnited, score(4, 0)),
    Match(chelsea, arsenal, score(3, 2)),
    Match(westHamUnited, bournemouth, score(1, 2)),
    Match(tottenhamHotspurs, fulham, score(3, 1)),
    Match(leicesterCity, wolverhampton, score(2, 0)),
    Match(everton, southamptom, score(2, 1)),
    Match(cardiff, newcastleUnited, score(0, 0)),
    Match(brighton, manchesterUnited, score(3, 2)),
    Match(manchesterCity, huddersfield, score(6, 1)),
    Match(burnley, watford, score(1, 3)),
    Match(crystalPalace, liverpool, score(0, 2)),
    Match(liverpool, brighton, score(1, 0)),
    Match(southamptom, leicesterCity, score(1, 2)),
    Match(huddersfield, cardiff, score(0, 0)),
    Match(bournemouth, everton, score(2, 2)),
    Match(arsenal, westHamUnited, score(3, 1)),
    Match(wolverhampton, manchesterCity, score(1, 1)),
    Match(newcastleUnited, chelsea, score(1, 2)),
    Match(fulham, burnley, score(4, 2)),
    Match(watford, crystalPalace, score(2, 1)),
    Match(manchesterUnited, tottenhamHotspurs, score(0, 3)),
    Match(manchesterCity, newcastleUnited, score(2, 1)),
    Match(westHamUnited, wolverhampton, score(0, 1)),
    Match(everton, huddersfield, score(1, 1)),
    Match(crystalPalace, southamptom, score(0, 2)),
    Match(chelsea, bournemouth, score(2, 0)),
    Match(brighton, fulham, score(2, 2)),
    Match(leicesterCity, liverpool, score(1, 2)),
    Match(watford, tottenhamHotspurs, score(2, 1)),
    Match(burnley, manchesterUnited, score(0, 2)),
    Match(cardiff, arsenal, score(2, 3)),
    Match(watford, manchesterUnited, score(1, 2)),
    Match(newcastleUnited, arsenal, score(1, 2)),
    Match(manchesterCity, fulham, score(3, 0)),
    Match(huddersfield, crystalPalace, score(0, 1)),
    Match(chelsea, cardiff, score(4, 1)),
    Match(bournemouth, leicesterCity, score(4, 2)),
    Match(tottenhamHotspurs, liverpool, score(1, 2)),
    Match(everton, westHamUnited, score(1, 3)),
    Match(wolverhampton, burnley, score(1, 0)),
    Match(southamptom, brighton, score(2, 2)),
    Match(brighton, tottenhamHotspurs, score(1, 2)),
    Match(manchesterUnited, wolverhampton, score(1, 1)),
    Match(liverpool, southamptom, score(3, 0)),
    Match(leicesterCity, huddersfield, score(3, 1)),
    Match(crystalPalace, newcastleUnited, score(0, 0)),
    Match(cardiff, manchesterCity, score(0, 5)),
    Match(burnley, bournemouth, score(4, 0)),
    Match(fulham, watford, score(1, 1)),
    Match(arsenal, everton, score(2, 0)),
    Match(westHamUnited, chelsea, score(0, 0)),
    Match(chelsea, liverpool, score(1, 1)),
    Match(wolverhampton, southamptom, score(2, 0)),
    Match(newcastleUnited, leicesterCity, score(0, 2)),
    Match(manchesterUnited, brighton, score(2, 0)),
    Match(huddersfield, tottenhamHotspurs, score(0, 2)),
    Match(everton, fulham, score(3, 0)),
    Match(arsenal, watford, score(2, 0)),
    Match(westHamUnited, manchesterUnited, score(3, 1)),
    Match(cardiff, burnley, score(1, 2)),
    Match(bournemouth, crystalPalace, score(2, 1)),
    Match(brighton, westHamUnited, score(1, 0)),
    Match(manchesterUnited, newcastleUnited, score(3, 2)),
    Match(watford, bournemouth, score(0, 4)),
    Match(tottenhamHotspurs, cardiff, score(1, 0)),
    Match(leicesterCity, everton, score(1, 2)),
    Match(crystalPalace, wolverhampton, score(0, 1)),
    Match(burnley, huddersfield, score(1, 1)),
    Match(liverpool, manchesterCity, score(0, 0)),
    Match(southamptom, chelsea, score(0, 3)),
    Match(fulham, arsenal, score(1, 5)),
    Match(huddersfield, liverpool, score(0, 1)),
    Match(wolverhampton, watford, score(0, 2)),
    Match(westHamUnited, tottenhamHotspurs, score(0, 1)),
    Match(newcastleUnited, brighton, score(0, 1)),
    Match(manchesterCity, burnley, score(5, 0)),
    Match(cardiff, fulham, score(4, 2)),
    Match(bournemouth, southamptom, score(0, 0)),
    Match(chelsea, manchesterUnited, score(2, 2)),
    Match(everton, crystalPalace, score(2, 0)),
    Match(arsenal, leicesterCity, score(3, 1)),
    Match(leicesterCity, westHamUnited, score(1, 1)),
    Match(watford, huddersfield, score(3, 0)),
    Match(southamptom, newcastleUnited, score(0, 0)),
    Match(liverpool, cardiff, score(4, 1)),
    Match(fulham, bournemouth, score(0, 3)),
    Match(brighton, wolverhampton, score(1, 0)),
    Match(manchesterUnited, everton, score(2, 1)),
    Match(crystalPalace, arsenal, score(2, 2)),
    Match(burnley, chelsea, score(0, 4)),
    Match(tottenhamHotspurs, manchesterCity, score(0, 1)),
    Match(bournemouth, manchesterUnited, score(1, 2)),
    Match(cardiff, leicesterCity, score(0, 1)),
    Match(everton, brighton, score(3, 1)),
    Match(newcastleUnited, watford, score(1, 0)),
    Match(westHamUnited, burnley, score(4, 2)),
    Match(arsenal, liverpool, score(1, 1)),
    Match(wolverhampton, tottenhamHotspurs, score(2, 3)),
    Match(chelsea, crystalPalace, score(3, 1)),
    Match(manchesterCity, southamptom, score(6, 1)),
    Match(huddersfield, fulham, score(1, 0)),
    Match(crystalPalace, tottenhamHotspurs, score(0, 1)),
    Match(southamptom, watford, score(1, 1)),
    Match(newcastleUnited, bournemouth, score(2, 1)),
    Match(leicesterCity, burnley, score(0, 0)),
    Match(huddersfield, westHamUnited, score(1, 1)),
    Match(cardiff, brighton, score(2, 1)),
    Match(manchesterCity, manchesterUnited, score(3, 1)),
    Match(arsenal, wolverhampton, score(1, 1)),
    Match(chelsea, everton, score(0, 0)),
    Match(liverpool, fulham, score(2, 0))

];
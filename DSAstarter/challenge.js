'use-strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 10.33,
    x: 3.25,
    team2: 2.5,
  },
};
/*
const [player1, player2] = game.players;
// console.log(player1, player2);

const [gk1, ...fieldPlayers1] = player1;
const [gk2, ...fieldPlayers2] = player2;
// console.log(gk1);
// console.log(gk2);

const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

const players1Final = [...player1, 'Thiago', 'Coutinco', 'Peristi'];
// console.log(players1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

const printGoals = (...players) => `${players.length} goals were scored`;

console.log(printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'));
// console.log(printGoals(...game.scored));

let win;
// win ||= (team1 && team2) || (team2 && team1);
//The team with the lower odd is more likely to win
// team1 < team2 && console.log('team 1 is likely to win');
// team1 > team2 && console.log('team 2 is likely to win');
// console.log(win);

let keys = Object.keys(game.scored);
for (let i = 0; i < keys.length; i++) {
  const element = Number(keys[i]);
  console.log(element + 1);
}

for (const [i, el] of game.scored.entries()) {
  // Example: "Goal 1: Lewandowski")
  console.log(`Goal ${i + 1}:${el}`);
}

const oddValues = Object.values(game.odds);
let avgOdds = 0;

oddValues.forEach(value => {
  avgOdds += value;
});
console.log(`Average odds is: ${avgOdds / oddValues.length}`);

const {
  odds: { team1, x: draw, team2 },
} = game;

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : ` Victory ${game[team]}`; //kye name in odds object have same name as of the team property names.
  console.log(`Odd of ${teamStr} : ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
//challenge 3.
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
// const events = ['⚽ GOAL', 'Substitution', 'Yellow card', ' Red card'];
console.log(events);
gameEvents.delete(64);
// console.log(gameEvents);

const time = [...gameEvents.keys()].pop() / gameEvents.size;
//"An event happened, on average, every 9 minutes"

console.log(`An event happened, on average, every ${time} minutes`);
for (const [time, event] of gameEvents) {
  let half = time <= 45 ? `First Half` : `Second Half`;
  console.log(`${half} ${time}:${event}`);
}
*/

let textarea = document.createElement('textarea');
textarea.id = 'userTxt';
document.body.append(textarea);

const btn = document.createElement('BUTTON');
btn.className = 'btnsize';
btn.id = 'btnid';
const txt = document.createTextNode('Convert');
btn.appendChild(txt);
document.body.append(btn);

let text = document.getElementById('userTxt');
let btns = document.getElementById('btnid');
// const str = `underscore_case
//   first_name
//   Some_Variable
//   calculate_AGE
//   delayed_departure`;
btns.addEventListener('click', () => {
  // alert('see the console');

  let str = text.value;

  // const trimmedMessage = str.replace(/\s+/g, ' ').toLowerCase(); // Replace multiple whitespaces with an empty string
  // console.log(trimmedMessage);

  // const strArr = trimmedMessage.split(' ');
  str = str.toLowerCase();
  const strArr = str.split('\n');

  // console.log(strArr);
  let result = [];
  for (let [count, word] of strArr.entries()) {
    let i = word.indexOf('_');
    //Or we can do it also using destructuring. the strArr array. by using split on underscore and make two different variables out of it (fist and second). and do second[0].toUpperCase(); and whole is same.
    const firstPart = word.slice(0, i); // Extract the part before the underscore
    const capitalizedChar = word[i + 1].toUpperCase(); // Capitalize the character after the underscore
    const lastPart = word.slice(i + 2); // Extract the part after the underscore (excluding the underscore)
    result.push(
      firstPart + capitalizedChar + lastPart + ' ' + '✅'.repeat(count + 1)
    ); // Combine and push to the result array
  }

  console.log(result);
});

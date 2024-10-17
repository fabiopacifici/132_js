/* 
Snack2

Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 

*/




function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const teams = [
  {
    name: 'Team 1',
    points: Math.ceil(Math.random() * 10),
    fouls: Math.ceil(Math.random() * 10)
  },
  {
    name: 'Team 2',
    points: getRandomNumbers(1, 10),
    fouls: getRandomNumbers(1, 10)
  },
  {
    name: 'Team 3',
    points: getRandomNumbers(1, 10),
    fouls: getRandomNumbers(1, 10)
  },
  {
    name: 'Team 4',
    points: getRandomNumbers(1, 10),
    fouls: getRandomNumbers(1, 10)
  },
  {
    name: 'Team 5',
    points: getRandomNumbers(1, 10),
    fouls: getRandomNumbers(1, 10)
  },
  {
    name: 'Team 6',
    points: getRandomNumbers(1, 10),
    fouls: getRandomNumbers(1, 10)
  }
]

console.log(teams);


const newTeams = [];
for (let i = 0; i < teams.length; i++) {
  const team = teams[i];

  //team.points = getRandomNumbers(1,10)
  //team.fouls = getRandomNumbers(1, 10)
  newTeams.push({
    name: team.name,
    fouls: team.fouls
  })

}

console.log(newTeams, teams);






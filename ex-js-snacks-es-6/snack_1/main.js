/* 

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

const bicycles = [

  {
    name: 'Bike 1',
    weight: 10
  },
  {
    name: 'Bike 2',
    weight: 13
  },
  {
    name: 'Bike 3',
    weight: 11
  },
  {
    name: 'Bike 4',
    weight: 9
  },
  {
    name: 'Bike 5',
    weight: 20
  },
  {
    name: 'Bike 6',
    weight: 17
  }
]
let lightBike = bicycles[0]

//console.log(lightBike.weight);


for (let i = 0; i < bicycles.length; i++) {
  const bike = bicycles[i];


  //console.log(bicycles[0]);


  // bike.weight < lightBike.weight
  if (bike['weight'] < lightBike['weight']) {
    lightBike = bike
  }

}

document.writeln(lightBike.name)
document.writeln(lightBike.weight)

console.log(lightBike);


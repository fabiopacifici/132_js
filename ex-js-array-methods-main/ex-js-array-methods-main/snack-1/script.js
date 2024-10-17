const names = ['Edoardo', 'Simone', 'Francesco'];
console.log(names);

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'
names.forEach(name => console.log(name));

names.forEach(name => {
  console.log(name);

})

names.forEach(function (name) {
  console.log(name);

})

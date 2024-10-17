const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
const evenNumbers = nums.filter(num => num % 2 === 0)
console.log(evenNumbers);



const even = nums.filter(num => {
  return num % 2 === 0
})

const even_2 = nums.filter(num => {
  if (num % 2 === 0) {
    return true
  }
  return false
})



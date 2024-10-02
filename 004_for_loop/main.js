console.log('it works');

// code that is repeated with small changes
const result = 11 * 1;
console.log(result);
const result_2 = 11 * 2;
console.log(result_2);
const result_3 = 11 * 3;
console.log(result_3);
const result_4 = 11 * 4;
console.log(result_4);
const result_5 = 11 * 5;
console.log(result_5);
const result_6 = 11 * 6;
console.log(result_6);
const result_7 = 11 * 7;
console.log(result_7);
const result_8 = 11 * 8;
console.log(result_8);
const result_9 = 11 * 9;
console.log(result_9);
const result_10 = 11 * 10;
console.log(result_10);


// Base logic


// incapsulare la logica in un ciclo per evitare le ripetizioni
const multiplication_result = 11 * 1;
console.log(multiplication_result);



/* 
Syntax for loop
- for keyword (reserved to js don't use for variables)
- ()
- nelle tonde tre elementi:
  - contatore let i = 0;
  - condizione i < 10;
  - incremento/decremento i++/i--
- {//your code to repeat here}

*/

for (let i = 1; i < 11; i++) {
  // your code here

  const result = 10 * i
  console.log(result);


}
console.log('outside of the loop');


/* 
- 1. i = 0 |  0 < 10 ? true | Run your code | i++ = 1
- 2. i = 1 |  1 < 10 ? true | Run your code | i++ = (1 + 1) = 2
- 3. i = 2 |  2 < 10 ? true | Run your code | i++ = (2 + 1) 3
- 4. i = 3 |  3 < 10 ? true | Run your code | i++ = (3 + 1) 4
- 5. i = 4 |  4 < 10 ? true | Run your code | i++ = (4 + 1) 5

- 6. i = 5 |  5 < 10 ? true | Run your code | i++ = (5 + 1) 6
- 7. i = 6 |  6 < 10 ? true | Run your code | i++ = (6 + 1) 7
- 8. i = 7 |  7 < 10 ? true | Run your code | i++ = (7 + 1) 8

- 9. i = 8 |  8 < 10 ? true | Run your code | i++ = (8 + 1) 9
- 10. i = 9 |  9 < 10 ? true | Run your code | i++ = (9 + 1) 10
- 11. i = 10 | 10 < 10? false | Stop the loop

*/



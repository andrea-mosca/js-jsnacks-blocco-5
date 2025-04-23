const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// *con forEach e push
// const evenNums = [];
// nums.forEach((number) => {
//   if (number % 2 === 0) evenNums.push(number);
// });
// console.log(nums);
// console.log(evenNums);

// con filter
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums)
// current DT
const now = new Date();
console.log(now); 

//year and month
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; 
console.log(`Year: ${year}, Month: ${month}`);

//random number
const random = Math.floor(Math.random() * 100) + 1;
console.log(random); 

//max and min
const numbers = [23, 89, 4, 56, 12];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(`Max: ${max}, Min: ${min}`); 


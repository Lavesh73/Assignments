//functions
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); 

//array
const fruits = ["apple", "banana"];
const berries = ["blueberry", "strawberry"];
const combined = [...fruits, ...berries];
console.log(combined); 

//object
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); 

//rest and destructuring
function UserAndHobbies({ name }, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log(`Hobbies: ${hobbies.join(", ")}`);
}

UserAndHobbies({ name: "Lakshay" }, "Reading", "Gaming", "Cycling");



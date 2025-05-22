//object desturcting
const user = { name: "Alice", age: 25, city: "New York" };
const { name, age } = user;
console.log(name);
console.log(age);  

//array destructing
const colors = ["red", "green", "blue"];
const [Color1, Color2] = colors;
console.log(Color1); 
console.log(Color2); 

//default values
const person = { name: "Bob", age: 30 };
const { name1, age1, country = "USA" } = person;
console.log(country); 

//nested destructuring
const employee = {
  name: "Eve",
  address: {
    city: "Chicago",
    zip: "60601"
  }
};

const { address: { city } } = employee;
console.log(city); 

//swap var
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);



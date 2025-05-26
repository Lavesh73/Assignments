//q15.object keys
function Objectkeys(obj){
    return Object.keys(obj );
}

let student = {
    name: "Prerak Charan",
    age : 21,
    city: "Jodhpur"
}
console.log("keys:",Objectkeys(student));

// q17. merge objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
let student1 = { name: "lavesh", age: 25 };
let student2 = { age: 22, city: "Delhi" };
console.log("Q17 - Merged object:", mergeObjects(student1, student2));

// q18. properties
function Properties(obj){
    return Object.keys(obj).length;
}
const example={name:'weqe',age:21,city:'sdfsdf',college:"sdfs"};
console.log('q18:',Properties(example));


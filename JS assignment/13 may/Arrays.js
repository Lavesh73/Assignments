const myArray = [1,2,3,4,5,6,7];
function EvenNoSum(arr){
   let sum = 0;
  arr.forEach((v) => {
    if (v % 2 === 0) sum += v;
  });
  return sum;
}
console.log('sum of even numbers: ',EvenNoSum(myArray));

//q2. double each number
function doubleArray(arr) {
  return arr.map(v => v * 2);
}
console.log('Double each number: ',doubleArray(myArray));

//q3.

function removeDuplicates(arr) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  
  return result;
}
const array = [1, 2, 2, 3, 5, 4, 5];
console.log('duplicate array: ',removeDuplicates(array));

//q5.
//q6.reverse array in-place
// console.log('original array:',myArray);
// console.log('reverse araay: ',myArray.reverse());

function reverseInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}
let sampleArray = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseInPlace(sampleArray)); 


//q7. return array of string length
function stringLengths(arr) {
  return arr.map(str => str.length);
}

let array2 = ["apple", "banana", "kiwi"];
console.log("Q7 - Lengths of strings:", stringLengths(array2));
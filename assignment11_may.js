const prompt = require('prompt-sync')();

// 1. Even or Odd Checker
let num1 = parseInt(prompt("1. Enter a number to check Even or Odd: "));
if (num1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 2. Positive, Negative, or Zero
let num2 = parseFloat(prompt("2. Enter a number to check Positive/Negative/Zero: "));
if (num2 > 0) {
    console.log("Positive");
} else if (num2 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 3. Age-based Eligibility
let age = parseInt(prompt("3. Enter your age: "));
if (age >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}

// 4. Number Range Validator
let num3 = parseInt(prompt("4. Enter a number to check if in range 10-20: "));
if (num3 >= 10 && num3 <= 20) {
    console.log("In range");
} else {
    console.log("Out of range");
}

// 5. Check Number Equality
let n1 = parseFloat(prompt("5. Enter first number: "));
let n2 = parseFloat(prompt("Enter second number: "));
if (n1 === n2) {
    console.log("Both numbers are equal");
} else if (n1 > n2) {
    console.log(n1 + " is larger");
} else {
    console.log(n2 + " is larger");
}

// 6. Simple Grading System
let score = parseFloat(prompt("6. Enter score (0–100): "));
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// 7. Divisibility Checker (5 and 11)
let num4 = parseInt(prompt("7. Enter a number to check divisibility by 5 and 11: "));
if (num4 % 5 === 0 && num4 % 11 === 0) {
    console.log("Divisible by both 5 and 11");
} else {
    console.log("Not divisible by both 5 and 11");
}

// 8. Find the Largest of Three Numbers
let a = parseFloat(prompt("8. Enter first number: "));
let b = parseFloat(prompt("Enter second number: "));
let c = parseFloat(prompt("Enter third number: "));
if (a >= b && a >= c) {
    console.log("Largest is: " + a);
} else if (b >= a && b >= c) {
    console.log("Largest is: " + b);
} else {
    console.log("Largest is: " + c);
}

// 9. Leap Year Validator
let year = parseInt(prompt("9. Enter a year: "));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// 10. Vowel or Consonant
var ch=prompt('Enter Vowel or consonent: ');
if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    console.log(ch, "is a Vowel.");
} 
else if((ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U')){
    console.log(ch, "is a vowel")
}
else {
    console.log(ch, "is a Consonant.");
}

var prompt = require('prompt-sync')();
var n = Number(prompt('Enter any Number(Odd or Even): '));
if (n % 2 !== 0) {
    console.log("Odd");
} else {
    console.log("Even");
}

var a = Number(prompt('Enter any Number(+,-,0): '));
if (a>0){
    console.log('Positive')
}
else if(a<0){
    console.log('Negative')
}
else{
    console.log('Zero')
}

var b= Number(prompt('Enter Age: '));
if(b>18){
    console.log('You are elegible to vote')
}
else{
    console.log('You cannot vote')
}

var c=Number(prompt('Enter range number: '));
if(c<20 && c>10){
    console.log('In range')
}
else{
    console.log('Not in range')
}

var d=Number(prompt('Enter equality Number a: '));
var e=Number(prompt('Enter equality number b: '));
if(d===e){
    console.log('Both are equal')
}
else{
    console.log('NOt equal')
}

var f=Number(prompt('Enter score out of 100: '));
if(f>89){
    console.log('Grade A')
}
else if(f>74 && f<90){
    console.log('Grade B')
}
else if(f>49 && f<75){
    console.log('Grade C')
}
else{
    console.log('Fail')
}

var g=Number(prompt('Enter Divisibility Number to be checked: '));
if (g % 5 === 0 && g % 11 === 0) {
    console.log("The number is divisible by both 5 and 11.");
} else {
    console.log("The number is NOT divisible by both 5 and 11.");
}

var h=Number(prompt('Enter first number(Out of 3): '));
var i=Number(prompt('Enter second number(out of 3): '));
var j=Number(prompt('Enter thired number(out of 3): '));
if(h>i && h>j){
    console.log(h,'is greatest')
}
else if(i>h && i>j){
    console.log(i,'is the greatest')
}
else{
    console.log(j,'is the greatest')
}

var k=Number(prompt('Enter Year(To Check Leap year): '));
if ((k % 4 === 0 && k % 100 !== 0) || (k % 400 === 0)) {
    console.log(k, " is a Leap Year.");
} else {
    console.log(k, " is NOT a Leap Year.");
}

var ch=prompt('Enter Vowel or consonent: ');
if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    console.log(ch, "is a Vowel.");
} 
else if((ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U')){
    console.log(ch, "is a vowel")
}
else {
    console.log(ch, "is a Consonant.");
}




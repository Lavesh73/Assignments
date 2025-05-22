for(i=1;i<=10;i++)console.log(i)

//all even number from 1 to 20
console.log('\n all even numbers from 1 to 20 :')
for(num = 1;num <= 20;num++){
    if(num % 2===0)console.log(num)
}    

//square from 1 to 5
console.log('\n square from 1 to 5:')
let num2=1
while(num2<=5){
    console.log(num2*num2)
    num2++;
}

// sum from 1 to 100
console.log('\n Sum of all number from 1 to 100: ')
let sum=0
for(num3=1;num3<=100;num3++) sum+=num3
console.log(sum)

// table of 7
console.log('\n Multiplication table of 7:')
let num4 = 7;
for(i=1;i<=10;i++) console.log(`${num4} x ${i} = ${num4 * i}`);

//Print numbers from 10 to 1 in reverse using a loop.
console.log('\n Numbers from  10 to 1 :');
for(i=10;i>=1;i--) console.log(i);

//Print only the odd numbers between 15 and 30.
console.log('\n numbers from 15 to 30:')
for(i=15;i<30;i++){
    if(i%2 != 0) console.log(i)
}

//Print the factorial of a number (e.g., 5! = 120) using a loop.
console.log('\n Factorial of number 6:');
let factorial = 1;
let num5=6;
for(i=1;i<=num5;i++) factorial*=i;
    console.log(factorial);

// Print numbers between 1 and 50 divisible by both 3 and 5
console.log('\n numbers which are divisible by 3 and 5 from 1 to 50:')
for (i=1;i<=50;i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}   

//Count how many numbers between 1 and 100 are divisible by 9
console.log('\n numbers from 1 to 100 which are divisibl by 9:');
let count = 0;
for(i=1;i<100;i++){
    if(i%9 === 0) count++
}
console.log(count);

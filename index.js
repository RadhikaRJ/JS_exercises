
//easy
//exercise1

let num1=5,num2=13,num3=7,num4=21,num5=48;
let sum=num1+num2+num3+num4+num5;
console.log("sum of 5 numbers is: ",sum);

//exercise2
var readlineSync = require('readline-sync');
var userInputNumber=readlineSync.question("Enter a number ");

if(userInputNumber%2==0){
  console.log("the number " + userInputNumber+" is even");
}
else console.log("the number is odd");

//exercise3
let number1=123, number2=251;
if(number1>number2){
  console.log("the min number is "+ number2+ " and the max number is "+ number1);
}
else  console.log("the min number is "+ number1+ " and the max number is "+ number2);

//exercise4
let numb1=8,numb2=23,numb3=17;
let max=0;
if(numb1>max){
  max=numb1;
}
if(numb2>max){
  max=numb2;
}
if(numb3>max){
  max=numb3;
}
console.log("max of three numbers is "+max);

//exercise5
let numbe1=35,numbe2=29,numbe3=46;
let min=numbe1;
if(numbe2<min){
  min=numbe2;
}
if(numbe3<min){
  min=numbe3;
}
console.log("The min number is "+min);

//exercise6

let userInputMonth=readlineSync.question("enter the month ");
if(userInputMonth=="January"||
userInputMonth=="March"||
userInputMonth=="May"||
userInputMonth=="July"||
userInputMonth=="August"||
userInputMonth=="October"||
userInputMonth=="December"
){
  console.log("The month has 31 days")
}
else console.log("the month does not have 31 days!");

//Intermediate
//exercise 1
let arr=[];
for(i=0;i<100;i++){
  arr.push(i+1);
}
console.log("The array is: \n",arr);

for(i=0;i<arr.length;i++){
 
  if(arr[i]%3==0 && arr[i]%5!=0){
    arr[i]="Fizz";
  }
  else if(arr[i]%3!=0 && arr[i]%5==0){
    arr[i]="Buzz";
  }
  else if( arr[i]%3==0 && arr[i]%5==0){
    arr[i]="FizzBuzz";
  }
  
}

console.log("New Array is: \n"+arr);

//exercise1 pattern
console.log("Star pattern: \n")
for(let i=0;i<5;i++){
  let pattern="";
  for(let j=0;j<=i;j++){
    pattern=pattern+"*";
  }
  console.log(pattern);
}

//exercise2 
let userInputNum=readlineSync.question("Enter the number to get the table ");
for(let i=1;i<=12;i++){
console.log(userInputNum+"x"+i+"="+i*userInputNum);

}


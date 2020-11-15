console.log('hello');

var b = 'kumar';
console.log(b);

var someNumber = 45;
console.log(someNumber);

document.getElementById("someText").innerHTML = "Hey There";

let yourAge = 18;
let yourName = 'Bob';
let name = {first: 'Jane', last:'Doe'};
let truth = false;
let groceries = ['apple','banana', 'oranges'];
let nothing = null;
let fruits = 'banana,apple,orange';

let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(fruit.length)
console.log(groceries.indexOf('bananas'));
console.log(fruits.split(','));
console.log(fruits.split(''));

for(let i = 0; i < groceries.length; i++){
    console.log(groceries[i]);
}

let reverseList = groceries.reverse();
console.log(reverseList);

let someNumbers = [5,10,2,25,3,255,1,2,5,324,321,2];
console.log(someNumbers.sort(function(a,b){return a - b}));
console.log(someNumbers.sort(function(a,b){return b - a}));

let emptyArray = new Array();
for(let num =0 ; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

let student = {first: "Kumar", last: "Krittika"};
console.log(student.first);

let students =  `[
  {
      "name": "kumar",
      "age": 34,
      "height": 176
  },
  {
      "name": "KUMAR",
      "age": 28,
      "height" : 180
  }

]`

console.log(JSON.parse(students)[1].age);
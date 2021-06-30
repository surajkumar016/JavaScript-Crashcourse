console.log('hello world');
// alert('yooo');

// variables
var b = 'smoothie';
console.log(b);

var num = 45;
// console.log(num);

// var age = prompt('what is your age?');
// document.getElementById('sometext').innerHTML = age;

// Numbers in javascript
var num1 =10;

// increment num 
num1++;
// decrement num
num1--;
console.log(num1);

// divide,multiply *,remainder %
console.log(num1 %6 );

// Increment/decrement by any number
num1 += 20;
console.log(num1);

/* Functions
1.Create a function
2.call the functions
*/
function fun(){
    console.log("This is a function");
}
fun();

function greetings(){
    var name = prompt("What is your name?");
    var result = 'Hello'+' '+ name;
    console.log(result);
}
// greetings();

// How do arguments work in functions?
function sum(num1, num2){
    var result = num1+num2;
    console.log(result);
}
// sum(10,68);

// Loops
// for(let i = 0;i<=100; i++){
//     console.log(i);
// }

// Data types
let yourAge = 18; //number
let yourName = "Bob";   //string
let name = {first:'john', last:'doe'}; //object
let truth = false; // boolean
let groceries = ['apple','tomato','banana'];// array
let random;// undefined
let nothing = null; // value null

// Strings in javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';  
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit.split(''));

// Arrays
let fruits = ['banana','apple','oranges'];
fruits = new Array('banana','apple','oranges');
console.log(fruits[2]);

fruits[0] = 'pear';
console.log(fruits);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// array common Methods
console.log('to string', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(), fruits);
console.log(fruits.push('mangoes'), fruits);
fruits[fruits.length] = 'new fruit';
console.log(fruits) 

let vegetables = ['asparagus', 'tomato','broccoli'];
let allgrocery = fruits.concat(vegetables);
console.log(allgrocery);
console.log(allgrocery.slice(1,4));
console.log(allgrocery.reverse());
console.log(allgrocery.sort());

let number = [1,2,3,4,5,6];
console.log(number.sort(function(a,b) {return b-a}));

let emptyArray = new Array();
for(let i = 0; i<=10; i++){
    emptyArray.push(i);
}
console.log(emptyArray);

// Objects in javascript

let student = {
    first:"Suraj",
    last:"david",
    age:25,
    height:170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age + '\n';
    }
};

// console.log(student.first);
// console.log(student.last);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditional in javascript
var age = 45;
if((age >= 18) && (age <= 35)){
    status = 'target audience';
    console.log(status);
} else {
    status = 'Not my target audience'
    console.log(status);
}

// Switch statements
switch(5){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';    
}
console.log(text);
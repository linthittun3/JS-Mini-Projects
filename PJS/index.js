// String

// let greet = "Hello World.";
// console.log(greet);

// let myName = "Lin Thit Tun";
// console.log(myName);

// let myAge = 'My age is 18';
// console.log(myAge);

// let sayHi = `Hi there ${myName}`;
// // let sayHi = "Hi there "+myName;
// console.log(sayHi);

// let time = '3 o\' clock';
// console.log(time);

// let myHeight = "5\"8'"
// console.log(myHeight)

                // Number

// let myNum = 10;
// let myAnotherNum = 20;
// let myFloat = 20.1;
// console.log(myNum + myAnotherNum + myFloat)

                // Boolean

// let myVar = true;
// console.log(myVar);

// let myName = "Lin Thit Tun";
// console.log(Boolean(myName));

// falsy value
// 1 0
// 2 ""
// 3 null
// 4 undefined
// 5 NaN
// 6 false

// let myString = "asdfg"
// let myVar = Boolean(myString)
// console.log(myVar);

// let myAge = -1;
// console.log(Boolean(myAge));

                // undefined

// let x;
// console.log(Boolean(x));

//                 // null

// let y = null;
// console.log(Boolean(y));

//                 // Not A Number

// let num1;
// let num2 = 1;
// console.log(Boolean(num1+num2));

// expression

// 1+2
// "a" + "b"
// 5-1

// Statement
// let sum = 1+2 // statement => undefined

// Operator

// 1 Arithmetic
// 2 Assignment
// 3 Comparison
// 4 Logical 

// let z = 3 + "b"; // String + number = String
// console.log(z);
// let y = "5" + 2;

// let z = "5"-"2"; // string - string = number / NaN
// console.log;

// let z = "5" - 2; //string - number = number / NaN
// console.log(z)

// let x = 2 * "3";
// console.log(x)

// let z = 4 / 2;
// console.log(z)

// let x = 4 % 2;
// console.log(x);

// let a,b,c = 0;
// console.log(a)
// console.log(b)
// console.log(c)

// power
// console.log(2**4) // 2*2*2*2

// let a = 3;

// // a = a+2; //5
// // a += 4;

// a -= 1
// console.log(a);

// let a = 4;

// // a *= 2;
// // a /= 2;
// a %= 2;
// console.log(a)

// Operator precedence

// let b = (10+6-2*4)/5;
// console.log(b);

// comparison operator (>, <, >=, <=, ==, ===, !=, !== )

// Logical Operator

// 1 Not (!)
// 2 AND (&&) 
// 3 Or (||)


// 1 Not (!)
// console.log(!true);

// 2 AND (&&) 
// let num = 1;
// console.log(num>4 && num==1)

// 3 Or (||)
// let num = 1;
// console.log(num>4 || num==1)


// Functions

// function shopping(){
//     console.log("go to shop");
//     console.log("buy a product");
//     console.log("go back home");
// }

// shopping();


// function sum(a, b){
//     let z = a +b;
//     return z;
// }
// let result = sum(1 , 2);
// console.log(sum(1 , 2));
// console.log(result);

// function sayName(name, age){ // name = "Lin THit TUn"
//     // console.log(name, age)
//     return name;
// }

// let test = sayName("Lin THit Tun", 18)
// console.log(test)

// function sayName(name){
//     return "hi";
// }

// let test = sayName("ltt");
// console.log(test)

// function calculateAge(year){
//     let cal = 2024 - year;
//     return "Your age is "+ cal;
// }

// let show = calculateAge(2005)
// console.log(show);

// default parameter
//  function add(a,b=0){ // a=2,b
//     console.log(b)// 2+undefine=NaN
//  }
//  add(1)

// Rest Parameter
// function test(a,b,...c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// test(1,2,3,4,5)

// Function Statement

// function myName(){
//     console.log("Mika")
// }
// myName()

// FUnction Expression

// let sayHello = function(){
//     console.log("Hello Nigga");
// }

// sayHello()

// Callback Function P-1
// function myName(name,fun){
//     let cB = fun(name)
//     console.log(cB);
// }
// myName("Lin Thit", function(name){return name})

// Callback Function P-2
// function twice(num,fun){
//     let result = fun(num) * 2
//     console.log(result)
// }
// twice(5, function(num){return num+6})

// Arrow Function
// let sayYo=word=> word
// console.log(sayYo('Yahello'))

// let twice=num=>num*2
// console.log(twice(5)) 

// Array
// let mixture = new Array('dog',20,3.4,true,)

// let mixture = ['dog',20,3.4,true]
// mixture[4] = 'Mika' // insert
// mixture[3] = 'false' // overwrite
// console.log(mixture)

// let fruits = ['apple','orange']
// fruits[2] = 'mango'
// console.log(fruits[fruits.length-1]);

// Nested Array
// let arr = [
//     ['a','b','c'],[1,2,3]
// ];
// arr[0][2] = 'd'
// console.log(arr)

// spread operator(...)

// let data1 = [1,2,3]
// let data2 = [4,5,6]
// let result =[...data1,...data2]
// console.log(result)

// function add(a,b){
//     console.log(a+b)
// }
// let nums = [1,2];
// add(...nums);

// destructuring

// let datas = ["Mgmg",20,"TTU"];

// let [name,age,school] = datas
// console.log()

// function add([a,b]){\
//     // [a,b] = [1,2]
//     console.log(a+b)
// }

// add([1,2])

// Array Methods

// let animals=['cat','dog','lion']
// animals.push('bird')
// animals.pop()
// animals.shift()
// animals.unshift("bird")
// let index = animals.indexOf('dog');
// let string = animals.join(":")
// animals.splice(0,2)

// console.log(animals)

// let nums = [1,2,3,4,5,6,7,8]
// nums=nums.map((num)=>{
//     return num+100
// });
// console.log(nums)
// // console.log(nums)

// let names= ['Levi','Mika','Eren'];
// names=names.map(name=>{
//     return "Mr. "+name
// })

// console.log(names)

// Array Filter Method

// let nums = [1,2,3,4,5,6];
// let filteredNumbers = nums.filter((num)=>{
//     return num%2==0;
// });

// console.log(filteredNumbers)

// Array Reduce Method

// let nums = [1,2,3,4,5,6];

// // map
// let newArr=nums.map(num=> num+100);
// console.log(newArr)

// // filter
// let filteredNumbers = nums.filter(num=> num%2==0);
// console.log(filteredNumbers)

// // reduce
// let reducedNumbers =nums.reduce((prev,curr)=> prev*curr)
// console.log(reducedNumbers)

// Everything is a object

// let str = new String(" HELLO ")
// let str = "min,may sat pat lar"

// str = str.toUpperCase()
// str = str.toLowerCase()
// str = str.trim()
// let newArr= str.split(",")

// console.log(newArr);

// let num = new Number(12.6);
// // let num = 12;

// num=num.toFixed()

// console.log(num)
//  let bool = new Boolean(true)
// // let bool = true;
// bool = bool.toString(); // "true"
// console.log(typeof bool) 

// Object

// let person = {
//     name: "Lin",
//     age: 18,
//     eat(){
//         console.log("I am Eating")
//     }
// }

// // console.log(person)
// person.eat()

// person.hairColor="black"
// person.name = "Lin Thit"
// console.log(person)



//dot notation
// console.log(person.name);

// bracket notation
// let propName = "age";
// console.log(person[propName])

// this

// method => method's object
// regular fun => window
// arrow fun => parent's this (lexical scoping)

// let person = {
//     name: "Lin",
//     age: 18,
//     eat(){
//         console.log(this)
//         setTimeout(()=> {
//             console.log(this)//window
//         }, 3000);
//     }
// }
// person.eat();

// function test(){
//     console.log(this);
// }

// test()

// Object Spread

// let obj1 = {
//     myName: 'lin thit tun',
//     myAge: 20
// }

// let obj2 = {
//     myHairColor: 'black'
// }

// let obj3 = {...obj1,...obj2}
// console.log(obj3);

// Object Destructring

// let {name,age}={
//     name:'lin thit tun',
//     age: 18
// }
// console.log(name)
// console.log(age)

// property shorthand

// let name = "lin thit tun"
// let age = 20

// let person={
//     name,
//     age,
// }

// console.log(person)

// JavaScript data structure

// let people=[
//     {name:'lin thit tun',age:20,gender:'male'},
//     {name:'Mg Mg',age:18,gender:'male'},
//     {name:'May',age:21,gender:'female'}
// ]

// // console.log(people)
// // let names = people.map(person=>{
// //     return person.name
// // })
// // console.log(names)

// let searchedName = prompt("Search Name: ");
// let filteredArray=people.filter(person=>{
//     return person.name.includes(searchedName)
// })

// console.log(filteredArray)

// let filteredArray=people.filter(person=>{
//     return person.age <20
// })
// console.log(filteredArray)

// JSON ''
// String,number,Boolean,Array,Object,null
// let person ='{"name" : "lin thit tunn","age" : 20}'
// let obj = JSON.parse(person)
// console.log(obj.name)

// let person={
//     name:'lin thit tun',
//     age:20
// }

// console.log(JSON.stringify(person))

// condition (if else)

// let tired = prompt("are u tirted? yes/no: ")
// if (tired.toLowerCase() == "yes") {
//     console.log('rest well')
// }
// else if(tired.toLowerCase() == "no"){
//     console.log('go back to work')
// }
// else{
//     console.log('pls enter yes or no')
// }

// If Else Examples

// let productPrices = [100,500,100,300,700,200,100]

// productPrices = productPrices.map(price=>{
//     if(price==100){
//         price-=30;
//     }
//     return price;
// })

// console.log(productPrices)

// let people = [
//     {name: 'Lin', age:25},
//     {name: 'Thit', age:20, gender:'f'},
//     {name: 'Tun', age:45, gender:'m'},
// ]

// people = people.map(person=>{
//     if(person.gender == 'm'){
//         person.gender='male'
//         }
//     else if(person.gender == 'f'){
//          person.gender = 'female'
//         }
//     else{
//         person.gender="unknown"
//     }
//     return person
// })

// console.log(people)

// If Else Expression (Tenary Operator)

// let age = 20;
// let permission=age>18? "authorized": "unauthorized";

// // if(age > 18){
// //     permission = "authorized"
// // }else{
// //     permission = "unauthorized"
// // }

// console.log(permission)

// Switch Statement

// switch(1){
//     case 1:
//         console.log('one')
//         break;
//     case 2:
//         console.log('two')
//         break;
//     case 3:
//         console.log('three')
//         break;
//     default:
//         console.log('This is default')
// }

// let people = [
//     {name:'lin thit tun', age:18, gender:'m'},
//     {name:'mg mg', age:23,},
//     {name:'may', age:23, gender:'f'},
// ]

// people = people.map((person)=>{
//     switch(person.gender){
//         case "m":
//             person.gender="male"
//             break;
//         case "f":
//             person.gender="female"
//             break;
//         default:
//             person.gender="unknown"
//     }
//     return person;
// })

// console.log(people)

// While Loop

// let people = ['mgmg', 'agag', 'koko', 'susu', 'lin']


// let x = 0
// while(x<people.length){
//     console.log(people[x])
//     x++
// }

// Do While Loop
// let x = 0
// do{
//     console.log('work '+x)
//     x++
// }while(x<5)

// // For Loop
// let people = ['mgmg', 'agag', 'koko', 'susu', 'lin']
// for(let x=0; x<people.length; x++){
//     console.log(people[x])
// }

// For Of Loop
// let people = ['mgmg', 'agag', 'koko', 'susu', 'lin', 'thit']
// for(person of people){
//     console.log(person)
// }

// For In Loop

// let person = {
//     name: 'lin thit tun',
//     age: 18
// }

// for(key in person){
//     console.log(`${key} is ${person[key]}`)
// }

//Scoping

// let x = 0; // global variable
// console.log(x)
// {
//     let y = 10 // local variable
//     console.log(y)
// }

// function test(){
//     let y=10;
//     console.log(y)
// }

// test()

// Object Oriented Programming

// class Car{
//     wheels=4
//     color='black'

//     drive(){
//         console.log('car is driving')
//     }
// }
// let car = new Car;
// console.log(car.color)

// let car2 = new Car;
// car2.color='blue';
// console.log(car2.color)

// OOP Example

// class Calculator{
//     PI = 3.14
//     Name = 'casio'
//     area(r){
//         return this.PI*r**2
//     }
//     volume(r,h){
//         return this.area(r)*h
//     }

//     static info(){
//         let calculator = new Calculator;
//         console.log('i am '+calculator.Name +' calculator')
//     }
//     // add(n1,n2){
//     //     return n1+n2;
//     // }
//     // subtract(n1,n2){
//     //     return n1-n2;
//     // }
//     // multiply(n1,n2){
//     //     return n1*n2;
//     // }
//     // division(n1,n2){
//     //     return n1/n2;
//     // }
//     // remainder(n1,n2){
//     //     return n1%n2;
//     // }
// }

// Calculator.info()
// // let calculator = new Calculator;
// // console.log(calculator.volume(2,4))

// OOP (constructor & access modifier)

// class Car{
//     Name = ''
//     wheels=4;
//     constructor(name,wheels){
//         this.Name=name
//         this.wheels=wheels
//         this.drive()
//     }
//     drive(){
//         console.log(this.Name+' is driving')
//     }
//     getWheel(){
//         console.log(this.Name+' has '+this.wheels+" wheels")
//     }
// }

// new Car('marcedes',4)
// let toyota = new Car('toyota',10)
// toyota.getWheel();

// OOP (access modifier) (static public private)
// class Car{
//     Name = 'mercedes'
//     #hp = 300; 
//     getHorsePower(){
//         console.log('Horse Power is '+this.#hp)
//     }
// }

// let car = new Car;
// car.#hp = (600);
// car.getHorsePower()

// OOP (inheritance)

// class Animal{
//     age = 1;
//     constructor(name){
//         this.Name = name;

//     }
//     run(){
//         console.log(`${this.Name} is running`)
//     }
// }
// let animal = new Animal;
// animal.age = 5;
// console.log(animal.age)


// class Dog extends Animal{
//     bark(){
//         console.log(this.Name+' woof woof')
//     }
// }

// let dog = new Dog('lucky')
// dog.bark()

//public => access anywhere
//Private => access only in own class
//Protected => access only in own class and child class

// Asynchronous JavaScript

//sync way
// console.log(1)
// console.log(2)

//async way

// console.log(1)
// console.log(2)
// setTimeout(()=>{
//     console.log(3)
// }, 3000)
// console.log(4)

//promise

// function asynchronous() {
//     return new Promise((resolve, reject)=>{
//         let result = 0
//         for(let i =0;i<10000000;i++){
//             result+=i+undefined;
//         }
//         if(result){
//             resolve(result)
//         }else{
//             reject("i have got some errors")
//         }
//     })
// }

// console.log('work')
// asynchronous()
// .then((result)=>{
//     console.log(result)
//     console.log('after async task')
// })
// .catch((error)=>{
//     console.log(error)
// })
// console.log('more important work')

// Fetch API
// let userInput = prompt('Tell me user Id? ')
// fetch('https://jsonplaceholder.typicode.com/todos/'+userInput)
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

// async function fetchTodo() {
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos/')
//         console.log('hi')
//         let data = await response.json()
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// fetchTodo()
// Coding Styles

// Nodejs Intro
const {minus,PI,add} = require("./math")
console.log(add(5,2));


// console.log("Hello");
// let yh = 5;
// yh=6;
// console.log(yh);
// const f = 5;
// const m =6;
// console.log(f)

// console.log(5==" 5");
// let id ="n"
// console.log(status)


// conditional statements
// let marks =98;
// if (marks>=90){
//     console.log("A");
// }
// else if (marks>=80){
//     console.log("B");
// }
// else if (marks>=70){
//     console.log("C");
// }
// else if (marks>=60){
//     console.log("D");
// }
// else{
//     console.log("E");
// }

// // Switch case
// let num =2;
// switch(num){
//     case 1:console.log("A");
//     break;
//     case 2:console.log("B");
//     break;
//     case 3:console.log("C");
//     break;
//     case 4:console.log("D");
//     break;
//     default:console.log("E");
//     break;
// }

//objects in js
// let rectangle1 = {
// length:1,
// breadth :1 ,
// draw:function(){
//     console.log("drawing");
// }
// };

// console.log(rectangle1);

// let rectangle2 = {
// length:2,
// breadth :2 ,
// draw:function(){
//     console.log("drawing");
// }
// };

// console.log(rectangle2);

// let rectangle3 = {
// length:3,
// breadth :3 ,
// draw:function(){
//     console.log("drawing");
// }
// };

// console.log(rectangle3);

// INSTAED   FOR  repeatation of code ,      easy code use Factory function
//  0
// console.log(rectangle1.breadth)
// let rectangle2 = create(2,2);
// console.log(rectangle2);
// let rectangle3 = create(1,1);
// console.log(rectangle3);
// above we have used camelcase notation in function name ex: rectangleCircle
//constructor function
// In this we should use pascal notation in function name ex : ReactangleCircle
// function Create(L,B){
//     this.lenght= L;
//     this.breadth=B;
//     this.draw = function(){
//         console.log("drawing");
//     }
// }
// let nah = new Create(1,5);
// console.log(nah);

//dynamic nature of objects
// nah.color = "Yellow"
// console.log(nah);

// delete nah.color;
// console.log(nah);

// constructure property
// refer notes


// primitive data type :- it make copy but it not change address of the variable
// let a=10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);


// Reference data type :- it change the address of the variable
// let a={value:10};
// let b = a;
// a.value++;
// console.log(a);
// console.log(b);

// Object cloning
//1. Iteration
// let src = {
// a:1,
// b:2,
// c:3
// };
// let dest = {};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// now cloning is completed 

// it want to check then use this below code
// src.a++;
// console.log(dest);
// console.log(src);
 
//2. Assign
// let src = {
//     a:1,
//     b:2,
//     c:3
//     };
//     let dest = Object.assign({},src);
// console.log(dest);
// now cloning is completed 

// it want to check then use this below code
// src.a++;
// console.log(dest);
// console.log(src);
 
//2. Spread
// let src = {
//     a:1,
//     b:2,
//     c:3
//     };
//     let dest ={...src};
// console.log(dest);
// now cloning is completed 

// it want to check then use this below code
// src.a++;
// console.log(dest);
// console.log(src);
 

// Arrays
// let numbers = [1,2,3,4,5];
// console.log(numbers);

//callback function
// courses = [
//      {sn:1,name:"Nayan"},
//      {sn:2,name:"Shetty"}
// ]
// let course = courses.find(function(course){  //(we can use arrow function also: ((course)=>{return course.name==="Shetty"})
//     return course.name ==="Shetty"
// })
// console.log(course);

//function

//function call
// run();

//function declaration
// function run(){
//     console.log("running");
// }

//Named function assignment
// let stand = function walk(){
//     console.log("Walking");
// }
// stand();
// let Nan = stand;
// Nan();

//Anonymous Function Assignment
// let stand2 = function (){
//     console.log("Anonymus")
// }
// stand2();

//for two argument function we can not pass one or no or many parameters( value) in calling function so we use below method
// function sum(a,b){
    //     return a+b;
    // } 
    // sum(1,2);
    // console.log(sum(1,2));
    // console.log(sum(1))  // it will not work so
    
//for two argument function we can not pass one or no or many parameters( value) in calling function so we use below method
// function sum(){
//     total =0;
//     for(let value of arguments)
//     total =total + value;
//     return total;

// }
// console.log(sum(1,2,3,4))
// console.log(sum(1))
// console.log(sum())
//this method works
//these all store in object


//rest operator
// function sum(nam,...sas){
//     console.log(sas);
// }
// sum(1,5,8,9,5)
//these all store in array

//Default parameter
// function interest(p,r=6,y=4){
//     return p*r*y/100;
// }
// console.log(interest(1000,undefined,5))

//Getter and setter
//Getter:Access properties
//setter:change or mutate propertaies

//use case
// let person={
//     fName : "Nayankumar",
//     lName : "Shetty"
// }
// console.log(`${person.fName} ${person.lName}`);
// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());

//Now adding getter and setter to this examples
// let person = {
//     fName : "Nayankumar",
//     lName : "Shetty",
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//          let parts= value.split(" ");
//          this.fName = parts[0];
//          this.lName = parts[1];

//     }
// }
// person.fullName = "Nayan kumar"
// console.log(person.fullName)

//error handling
// let person = {
//     fName : "Nayankumar",
//     lName : "Shetty",
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
         
//         if(typeof value!==String){
//           throw new Error("Not a string");
//         }
//          let parts= value.split(" ");
//          this.fName = parts[0];
//          this.lName = parts[1];

//     }
// }
// try{
//     person.fullName = true;
// }
// catch(e){
//   alert(e);
// }
// console.log(person.fullName);

// Browser Event
//ADDEventListerner
// function create(){
//     console.log("Hello");
// }
// document.addEventListener('click',create);
// document.removeEventListener("click",create);

// default actions
// let wra = document.querySelectorAll("a");
// let third = wra[2];
// third.addEventListener("click",function(event){
//     console.log("chala");
//     event.preventDefault();
// })


//Avoid too many events
// let myDiv = document .createElement("Div");
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is para " + i;
//     newElement.addEventListener("click",function(){
//         console.log("chal raha he");
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
//it uses more memory beacuse of every time the event runs it takes memory so event add out side the loop

// let myDiv = document .createElement("Div");
// function newe(){
//     console.log("chal raha he ");
// }
// myDiv.addEventListener("click",newe);
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is para " + i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
//but in above code event runs when we click any where inside the div but we want to run event which should show particular para in console but it not possible here so

// let myDiv = document .createElement("Div");
// function newe(event){
//     console.log("chal raha he" + event.target.textContent);
// }
// myDiv.addEventListener("click",newe);
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is para " + i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// let dda = document.querySelector(".wrapper");
// dda.addEventListener("click",function(event){
//     // if(event.target.nodeName ==="SPAN")
//     console.log("Hello"+ event.target.textContent);

// },true);//capturing phase used at the end (true)


//Performance
// let t1 = performance.now();
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is para " + i;
    
//     document.body.appendChild(newElement);
    
// }
// let t2 = performance.now();
// console.log("this took " + (t2-t1) + "ms")

// //optimising a bit
// let t3 = performance.now();
// let mydiv = document.createElement("div");
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is para " + i;
    
//     mydiv.appendChild(newElement);
    
// }
// document.body.appendChild(mydiv)
// let t4 = performance.now();
// console.log("this took " + (t4-t3) + "ms")

// //Document fragment : it is used to reduce the time of run and improve the performance that is it reduce number of reflow and repaint of lines
// let t5 = performance.now();
// let fragment = document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is para " + i;
    
//     fragment.appendChild(newElement);
    
// }
// document.body.appendChild(fragment)
// let t6 = performance.now();
// console.log("this took " + (t6-t5) + "ms")

//js is a single treaded language
// function n(){
//     let para = document.createElement("p");
//     para.textContent = "js is single"
//     document.body.appendChild(para);
// }
// function b(){
//     let para = document.createElement("p");
//     para.textContent = "I am good"
//     document.body.appendChild(para);
// }
// n();
// b();

//how do we now when n() function is invoked first function runs or Called and for b() same second function call 
//that is by call stack
//call stack is used to store the function, which should come after which function like that



//Promise : it is sync code
// let meraPromise = new Promise(function(resolve, reject){
//     console.log("I am inside promise");
//     // resolve(4512)
//     // reject()
//     reject(new Error("error no"))
// });
// console.log("Pehla");

//make promise async
// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("I am inside promise1");

//     },5000)
//     resolve(4512)
// });
// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("I am inside promise2");

//     },3000)
//     resolve(4512)
// });
// console.log("Pehla");
//WE CAN USE WITHOUT A PROMISE BUT IT DO THE SAME JOB BUT PROMISE USING IS A BEST PRACTICE


//AFTER THE COMPLETION OF PROMISE IF U WANT TO DO SOME ACTION THAN USE THEN() METHOD AND FOR HANDLING THE ERROR IF THE PROMISE IS REJECTED THEN USE CATCH() METHOD
// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("I am inside promise1");

//     },5000)
//     resolve(4512)
//     reject()
// });
// meraPromise1.then((value) => {
//     console.log(value);
// });
// meraPromise1.catch((error) => {
//     console.log("Received an error");
// });


// //THAN USING IN PROMISE(promise chain)
// let p1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("first");
//     },5000)
//     resolve();
// })
// let p3 = p1.then(()=>{
//     let p2 = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log("second");
//         },3000)
//         resolve("Resolved")
//     });
// });
// p3.then(()=>{
//     console.log("third");
// });


//if we want 50 promise it is not correct to use then 50 times so in this condition we use Async-Await(special syntax use to work with promises),which will be the best practice
// async function utility() {


//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Delhi me bhot garmi hai");
//         },2000);
        
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Hyderabad is Cool");
//         },2000);
//     });

//     let dM = await delhiMausam;
//     console.log(dM)
//     let hM = await hydMausam;
//     console.log(hM)

// }
// utility();



// Fetch API
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();

// async function helper() {

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Babbar',
//           body: 'Tagdi Body ',
//           userId: 1998,
//           weight: 90,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }



//closure
function init() {
    let name = "Mozilla"; 
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
let a = init();
a();
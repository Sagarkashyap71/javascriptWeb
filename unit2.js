// Asyncronous programming

// console.log("First line")
// setTimeout(() => {                  // behaves as asyncronous 
//     console.log("After 2 sec")      // syntax : setTimeout(function,delay)
// }, 2000);
// console.log("Second line")


// setTimeout(() => {
//     alert("After 5 seconds")        // 1000 delay = 1second
// }, 5000);


// handling asyncronous : 
// 3 methods : a) callback hell 
//             b) promises
//             c) async awaits


// const timerId= setInterval(()=>{
//     console.log("Hello Students!")
// },1000)

// setInterval(()=>{
//     clearInterval(timerId)  
// },10000)

// question : print numbers from 1 to 10 with 1 sec interval

// let count= 1;

// const intervalId= setInterval(()=>{
//     console.log(count)
//     count++;        
//     if(count>10){
//         clearInterval(intervalId)
//     }
// }, 1000)

// end of program
// console.log("First line")
// setTimeout(() => {                  // behaves as asyncronous 
//     console.log("After 2 sec")      // syntax : setTimeout(function,delay)
// }, 0);
// console.log("Second line")

// console.log("First line")
// setTimeout(() => {                  // behaves as asyncronous 
//     console.log("After 2 sec")      // syntax : setTimeout(function,delay)
// }, 2000);
// console.log("i didn't wait")


//                        class 2 (2-2-2026)

// callback function->

// function print(name){                           // callback function = print
//     console.log("hello students !",name)
// }
// function greet(num){                        // higher order function = greet
//     console.log("welcome to my class !")
//     setTimeout(() => {                      // here, settimieout is higher order function
//         console.log("inside timeout")       // here, num function will wait for executing settimeout function
//         let firstname= "Janish Jaat"
//         num(firstname)

//     }, 2000); 
// }
// greet(print)

// callback hell

// console.log("starting homework...")
// setTimeout(() => {
//     console.log("homework done")
//     console.log("starting dinner...")
//     setTimeout(() => {
//         console.log("dinner done")
//         console.log("getting ready to go out...")
//         setTimeout(() => {
//             console.log("going to playground!")
//         }, 1000);    
//     }, 1500);
// }, 2000);
 

// handling callback hell ->

// function finishHomework(callback){
//     console.log("Starting homework...")
//     setTimeout(() => {
//     console.log("homework done!")
//     callback()
//     }, 2000);
// }
// function eatDinner(callback){
//     console.log("Starting dinner...")
//     setTimeout(() => {
//         console.log("dinner done!")
//         callback()
//     }, 1500);
// }
// function goToPlayground(){
//     console.log("Going to the playground!")
// }
// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground()
//     })
// })


// function print(name){                           // callback function = print
//     console.log("hello students !",name)
// }
// function greet(num){                        // higher order function = greet
//     console.log("welcome to my class !")
//     setTimeout(() => {                      // here, settimieout is higher order function
//         console.log("inside timeout")       // here, num function will wait for executing settimeout function
//         let firstname= "Janish Jaat"
//         num(firstname)

//     }, 2000); 
// }
// greet(print())
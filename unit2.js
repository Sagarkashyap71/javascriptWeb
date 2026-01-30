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

console.log("First line")
setTimeout(() => {                  // behaves as asyncronous 
    console.log("After 2 sec")      // syntax : setTimeout(function,delay)
}, 2000);
console.log("Second line")

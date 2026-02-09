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
// function greet(num){                            // higher order function = greet
//     console.log("welcome to my class !")
//     setTimeout(() => {                          // here, settimeout is higher order function
//         console.log("inside timeout")           // here, num function will wait for executing settimeout function
//         let firstname= "Janish Jaat"
//         num(firstname)

//     }, 2000); 
// }
// greet(print())



// const task= document.querySelector("#task")
// const btn= document.querySelector(".btn")
// const lists= document.querySelector(".list")

// btn.addEventListener("click",(event)=>{
//     event.preventDefault()
//         if(task.value===""){
//         alert("Enter Task")
//         return
//     }
//     const li= document.createElement("li")                     // this will create new element
//     const deletebutton= document.createElement("button")
//     deletebutton.innerText="Delete"                            // button for deletion of completed task 
//     li.innerText= task.value
//     li.appendChild(deletebutton)                               // appendChild for adding task in list
//     lists.appendChild(li)
//     deletebutton.addEventListener("click",()=>{
//         lists.removeChild(li)
//     })
//     task.value=""
// })


// syncronous : line by line execution 
// asyncronous : code run in background

//                                     class 3 (06-02-2026)

// promise is an object of asyncronous programming that tells us that asyncronous programming code will be rejected/ resolve or default for pending 
// const p= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let done= false;
//         if(done){
//             resolve({name:"Vasudev", age:12})
//         }else{
//             reject({message:"network issue"})
//         }
//     }, 5000);
// })

// console.log(p)

// then works when resolves and catch works when rejects and finally will works for both reject and resolve
// p.then((data)=>{
//     console.log("resolved",data)
// }).catch((err)=>{
//     console.log("rejected",err)
// }).finally(()=>{
//     console.log("finally block")
// })

function dohomework(){
    const p=new Promise(function(resolve,reject){
        setTimeout(()=>{
            let done=true
            if(done){
                console.log("homework is done")
                resolve("homework complete")
            }else{
                reject("homework is not done")
            }
        },5000)
    })
    return p
}





function eatDinner(){
    const p=new Promise(function(resolve,reject){
        setTimeout(()=>{
            let done=true
            if(done){
                console.log("dinner is done")
                resolve("dinner complete")
            }else{
                reject("dinner is not done")
            }
        },5000)
    })
    return p
}


function goToPlayground(){
    const p=new Promise(function(resolve,reject){
        setTimeout(()=>{
            let done=true
            if(done){
                console.log("went to playground")
                resolve("playground time")
            }else{
                reject("not allowed to play")
            }
        },2000)
    })
    return p
}



dohomework().then((data)=>{
    console.log(data)
    return eatDinner()
}).then((data)=>{
    console.log(data)
    return goToPlayground()
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("go to sleep")
})

// callback - promise - 
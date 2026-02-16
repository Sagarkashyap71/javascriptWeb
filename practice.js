// let obj= {
//     name: 'Vasudev',
//     adress: 'Yamunanagar',
//     phoneNo: "I don't know"
// }
// console.log(obj)


// console.log(document)

// const para= document.getElementById("para1")
// console.log(para)
// para.style.color='red'
// para.textContent="updated text"

// const para2= document.getElementsByClassName("pclass")
// console.log(para2)
// para2[0].style.color="blue"
// para2[1].textContent="paragraph 1 of class updated"

// const para3= document.querySelectorAll(".pclass")
// console.log(para3)

// const para4= document.querySelector(".pclass")
// console.log(para4)

// let array= [1,2,3,4,5]
// array.forEach((element)=>(console.log(element)))

// const para5= document.querySelectorAll(".pclass")
// para5[0].textContent="Vasudev"

// const para6= document.getElementsByClassName("pclass")
// para6[0].innerHTML= "hello world"
// para6[0].style.color="red"

// const button= document.querySelectorAll(".bclass")
// but1[0].classList.add("bclass")
// but1[0].classList.remove("bclass")
// but1[0].classList.toggle("bclass")
// function message(){
//     alert("Submitted")
// }

// button[0].addEventListener("click", message)
// function message2(){
//     button[0].removeEventListener("click",message)
// }
// button[1].addEventListener("click",message2)
// const but1= document.querySelectorAll(".bclass")
// but1[0].addEventListener("keydown",function(event){
//     console.log(event.key)
// })

// const b= document.querySelectorAll(".bclass")
// function message(){
//     alert("Radhe Radhe")
// }
// b[0].addEventListener("click",message)
// b[1].addEventListener("click",function message2(){
//     b[0].removeEventListener("click",message)
// })

// const b= document.querySelectorAll(".bclass")
// function message(){
//     alert("Radhe Radhe")
// }
// b[0].addEventListener("mouseover",message)

// const b= document.querySelectorAll(".bclass")
// b[0].addEventListener("keydown",function message(event){
//     console.log(event.key)
// })

// const b= document.querySelectorAll(".bclass")
// b[0].addEventListener("keyup",function message(event){
//     console.log(event.key)
// })

// const f= document.querySelector("form")
// f.addEventListener("submit",function message(event){
//     event.preventDefault()
//     console.log("Submitted")
// })


// addEventListener : click, mouseover, keydown, keyup, submit

// const b= document.querySelector(".child")
// const d= document.querySelector(".parent")
// d.addEventListener("click",()=>{
//     console.log("parent")
// },true)
// b.addEventListener("click",()=>{
//     console.log("child")
// },true)

// false= default= bubbling phase= in to out
// true= non-default= capturiing phase= out to in

// debugger
// console.log(a)
// let a= 10
// var b= 20

// function print(){
//     let c= 45
//     console.log(c)
//     console.log("Inside function")
// }

// print()

// debugger
// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     forth()
// }
// function forth(){
//     console.trace()
// }
// first()

// function infinite(){              // stack will gets full
//     infinite()
// }
// infinite()


//                                  UNIT : 2 STARTS ->


// console.log("First line")
// setTimeout(()=>{
//     console.log("after 2 seconds")
// },2000)
// console.log("second line")

// setTimeout(()=>{
//     console.log("after 5 seconds")
// },5000)

// const a= setInterval(()=>{
//     console.log("after each 1 second")
// },1000)

// setInterval(()=>{
//     clearInterval(a)
// },10000)

// question : print numbers from 1 to 10 with 1 second interval
// let a= 1
// const b= setInterval(()=>{
//     console.log(a)
//     a++
//     if(a>10){
//         clearInterval(b)
//     }
// })



//                                         unit - 2

// syncronous programmming (line by line execution of code)

// console.log("Hello")
// setTimeout(() => {
//     console.log("inside timeout")
// }, 2000);
// console.log("World")


// asyncronous programming (execution of our code that we need)

// setTimeout(() => {
//     alert("Hello")
// }, 2000);

// const timer= setInterval(() => {
//     console.log("Interval")
// }, 1000);

// setInterval(() => {
//     clearInterval(timer)
// }, 5000);

// question : print numbers from 1 to 10 with 1 second interval

// let i=1
// const question= setInterval(() => {
//     console.log(i)
//     i++
//     if(i>10){
//         clearInterval(question)
//     }
// }, 1000);

//  OR

// let i= 1
// const question= setInterval(() => {
//     console.log(i)
//     i++
// }, 1000);
// setInterval(() => {
//     clearInterval(question)
// }, 10000);


// function print(name){
//     console.log("Hello",name)
// }

// function greet(num){
//     console.log("class")
//     setTimeout(() => {
//         console.log("inside timeout")
//         let myname= "Sagar"
//         num(myname)
//     }, 2000);
// }

// greet(print)


// function fname(name1){
//     console.log(name1)
// }
// function lname(name2){
//     let name3= "Sagar"
//     name2(name3)
//     console.log("Kashyap")
// }
// lname(fname)


// console.log("starting homework")
// setTimeout(() => {
//     console.log("homework done")
//     console.log("starting lunch")
//     setTimeout(() => {
//         console.log("lunch done")
//         console.log("going to playground")
//         setTimeout(() => {
//             console.log("practiced Javelin throw with Janish Bhattal")
//             console.log("reached home and went to khet")
//         }, 1000);
//     }, 1500);
// }, 2000);


// function homework(callback){
//     console.log("starting homework")
//     setTimeout(()=>{
//         console.log("homework done")
//         callback()
//     },2000)
// }

// function dinner(callback){
//     console.log("starting dinner")
//     setTimeout(()=>{
//         console.log("dinner done")
//         callback()
//     },2000)
// }

// function stadium(callback){
//     console.log("going to karan stadium, Karnal")
//     setTimeout(()=>{
//         console.log("practiced Javelin Throw with my friend Janish Bhattal")
//     },2000)
// }

// homework(()=>{
//     dinner(()=>{
//         stadium()
//     })
// })



// const task= document.querySelector("#task")
// const btn= document.querySelector("#btn")
// const lists= document.querySelector(".list")

// btn.addEventListener("click",(event)=>{
//     event.preventDefault()
//     if(task.value===""){
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

const task= document.querySelector("#task")
const button= document.querySelector("#btn")
const list= document.querySelector(".list")

button.addEventListener("click",(event)=>{
    event.preventDefault()
    if (task.value === ""){
        alert("Enter Task")
        return
    }
    const li= document.createElement("listElement")
    const del= document.createElement("deleteElement")
    del.innerText="Delete"
    li.appendChild(task.value)
    li.appendChild(li)
    del.addEventListener("click",()=>{
        list.removeChild("li")
    })
    task.value=""
})
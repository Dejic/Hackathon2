// fetch("http://localhost:3000/getinfo").then((res)=>res.json())
// .then((res)=>console.log(res[0].name)).catch((e)=>console.log(e));
let questions;
const startBtn = document.getElementById("start")
const restartBtn = document.getElementById("restart");
const submitBtn = document.getElementById("submit");
const numberOfQuestionsAnswered = document.getElementById("questionsAnswered");
const numberOfQuestionTotal = document.getElementById("numberOfQuestions");
const questionText = document.getElementById("container2")
const btn1 = document.getElementById("btnA")
const btn2 = document.getElementById("btnB")
const btn3 = document.getElementById("btnC")
const btn4 = document.getElementById("btnD")
// (async()=>{
//    let data=await fetch("http://localhost:3000/getinfo");
//    let jsonedData= await data.json();
//    console.log(jsonedData)
// })()

const getInfoAsyncAwait=async()=>{
    let data=await fetch("http://localhost:3000/getinfo");
    let jsonedData= await data.json();
    console.log(jsonedData)
 }

 const getInfoDotThen=()=>{
    fetch("http://localhost:3000/getinfo").then((res)=>res.json())
    .then((res)=>console.log(res)).catch((e)=>console.log(e));
 }

 async function fetcher(){

   let data=await fetch("http://localhost:3000/getinfo");
   let jsonedData= await data.json();
   const randomNumber= Math.floor(Math.random() * jsonedData.length)
let firstQuestion=jsonedData[randomNumber]
console.log(firstQuestion)
jsonedData.splice(randomNumber,1)
questionText.innerHTML=firstQuestion.question
questions=jsonedData
console.log(questions)
randomizeAnswers(firstQuestion)

}
 startBtn.addEventListener("click",fetcher)

 function randomizeAnswers(arr){
   const answerArr = [arr.correct, arr.wrong_1, arr.wrong_2, arr.wrong_3]
   console.log(answerArr)
 }

 const shuffleArray = array => {
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     const temp = array[i];
     array[i] = array[j];
     array[j] = temp;
   }
 }
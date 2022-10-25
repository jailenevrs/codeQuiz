//begin quiz button
let start = document.querySelector("#btn");
console.log("hello")

//quiz

let quiz= document.querySelector("#quiz");
let time= document.querySelector ("#timer");

//questions
var questionText = document.querySelector ("#questionText");


//choice
let choiceA = document.querySelector("#choiceA");
let choiceB= document.querySelector("#choiceB");
let choiceC= document.querySelector("#choiceC");
let choiceD= document.querySelector("#choiceD");

let next=document.querySelector("#nextQuestion");
let choiceOption=document.querySelector(".choiceOption");
let index=0;
let timer=0;
let interval=0;
//click begin button
start.addEventListener("click", ()=>{
    document.querySelector(".container").style.display="none"
    quiz.style.display= "block";
});




//begin quiz button
let start = document.querySelector("#btn");

//quiz

let quiz= docmument.querySelector("#quiz");
let time= document.querySelector ("#timer");

//questions
var questionText = documeny.querySelector ("#questionText");


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
    start.style.display ="none";
    quiz.style.display= "block";
});


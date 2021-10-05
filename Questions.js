import {Question} from "./Question.js";
function Questions()
{
    this.collection=[];
}
let questions= new Questions();
function SubmitQuestion()
{
    let question= new Question(document.getElementById("question").value,document.getElementById("answer").value);
    questions.collection.push(question);
    questions.collection[0].OutputAnswer();
    questions.collection[0].OutputQuestion();

}
document.querySelector('button').addEventListener('click', SubmitQuestion);
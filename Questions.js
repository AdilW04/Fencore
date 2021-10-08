import {Question} from "./Question.js";
class Questions{
    constructor()
    {
        this.collection=[];
    }

}

let questions= new Questions();
function SubmitQuestion()
{
    let question= new Question(document.getElementById("question").value,document.getElementById("answer").value);
    questions.collection.push(question);
    questions.collection[0].OutputAnswer();
    questions.collection[0].OutputQuestion();
}
document.getElementById("confirm").addEventListener('click', SubmitQuestion);
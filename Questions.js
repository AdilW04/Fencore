//answer=list of possible answers
function Question(question, answer)
{
    this.question=question;
    this.answer=answer;
}
Question.prototype.OutputQuestion=function()
{
    console.log(this.question);
}
Question.prototype.OutputAnswer=function()
{
    console.log(this.answer);
}
function SubmitQuestion()
{
    let question= new Question(document.getElementById("question").value,document.getElementById("answer").value);
    question.OutputQuestion();
    question.OutputAnswer();
}

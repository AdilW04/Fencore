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
function submit()
{
    let question= document.getElementById("question");
    console.log(question)
}

//answer=list of possible answers
export function Question(question, answer)
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
//bruh

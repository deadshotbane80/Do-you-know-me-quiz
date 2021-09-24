var readlineSync=require('readline-sync');
var userName=readlineSync.question("What is your name? ");
console.log("Welocome "+userName+" to DO YOU KNOW VEDANT");
var ques1={question:"Where does Vedant live? ",answer:"Mumbai"};
var ques2={question:"Which genre of song does Vedant likes? ",answer:"Rock"};
var ques3={question:"Which movie is Vedant's favourite? ",answer:"Iron Man"};
var ques4={question:"Which tv show is Vedant's favourite? ",answer:"Castle"};
var arr=[ques1,ques2,ques3,ques4];
var score=0;
function play(ques,ans)
{
var quesAns=readlineSync.question(ques);
if(quesAns==ans){
  console.log("right")
  score=score+1;
}
else{
  console.log("wrong");
}
console.log("Your score is = "+score);
console.log("------------");
}
for(var i=0;i<arr.length;i++){
  var data=arr[i];
  play(data.question,data.answer);
}
console.log("Your final score is: "+score);
console.log("Thank You "+userName+" for playing this game!!");
console.log("Have a nice day!");
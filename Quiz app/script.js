let quizQues=[
  {
    ques: "HTML stands for-",
    options:["HighText Machine Language","HyperText and links Markup Language","HyperText Markup Language","None of these"],
    correct:"HyperText Markup Language"
  },
  {
    ques:" Which of the following element is responsible for making the text bold in HTML?",
    options:["pre","i","b","br"],
    correct:"b"
  },
  {
    ques:" How to create an ordered list (a list with the list items in numbers) in HTML?",
    options:["ul","ol","li","None of this"],
    correct:"ol"
  },
  {
    ques:"The hr tag in HTML is used for -",
    options:["New line","Vertical line","Horizontal line","new paragraph"],
    correct:"Horizontal line"
  }
];

//Selection
let question=document.querySelector('.ques-field');
let optField=document.querySelectorAll('.opt-field');
let radioInput=document.querySelectorAll('.liOpt');
let option1=document.querySelector('#option-1');
let option2=document.querySelector('#option-2');
let option3=document.querySelector('#option-3');
let option4=document.querySelector('#option-4');
let nextBtn=document.querySelector('.next');
let scorecontainer=document.querySelector('.score');

let score=0;
let arr=0;

function displayQuiz(){
  radioInput.forEach(radioIn =>{
  radioIn.checked=false;
});

  question.innerHTML=quizQues[arr].ques;
  option1.lastChild.textContent=quizQues[arr].options[0];
  option2.lastChild.textContent=quizQues[arr].options[1];
  option3.lastChild.textContent=quizQues[arr].options[2];
  option4.lastChild.textContent=quizQues[arr].options[3];
}
displayQuiz();

nextBtn.addEventListener('click',()=>{

  let answer=selectAns();
  if (answer) {
    if (answer === quizQues[arr].correct) score++;
    arr++;
    if (arr < quizQues.length) displayQuiz();
    else {
      scorecontainer.innerHTML = `
            <h4>You answered ${score}/${quizQues.length} questions correctly</h4>
        ` // location.reload() won't work in CodePen for security reasons;
    }
  }
});


const selectAns=function(){
  let answer;
 radioInput.forEach(ans=>{
  if(ans.checked){
    answer=ans.parentElement.innerText;
  }
 });
 return answer;

}
selectAns();
/*
drawQuiz();
*/

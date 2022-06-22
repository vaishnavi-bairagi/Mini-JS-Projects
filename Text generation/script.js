let text=document.querySelector('.afterText')
let inputvalue1=document.querySelector(".input1");
let inputvalue2=document.querySelector(".input2");
function display(Fname, Lname){
    Fname=inputvalue1.value;
    Lname=inputvalue2.value;
    text.innerHTML="Hello!!" + Fname + " " +Lname;
}
function show(event){
    if(event.code==="Enter"){
        display();
    }
}
document.addEventListener("keydown", show);

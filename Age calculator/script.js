let clickBtn=document.querySelector('.click');
let resetBtn=document.querySelector('.reset');
let result=document.querySelector('.para');
let link=document.querySelector('.opt-btn');
let birthinput=document.querySelector('#birthyear');
let currentinput=document.querySelector('#currentyear');
let birthyear;
let currentyear;
let mainPage=document.querySelector('.wrapper');
let container=document.querySelector('.container');
//heading for age in days page
let heading=document.createElement('h2');
heading.classList.add('title');
heading.innerHTML="Age in days";
container.appendChild(heading);
//function to show age in html body
function showAgeInDays(){
    birthyear=birthinput.value;
    currentyear=currentinput.value;
    let ageInDays=(currentyear-birthyear)*365;
    result.textContent=`Hey! you're ${ageInDays} days old!!`;
        if(isNaN(birthyear) || isNaN(currentyear)){
        alert("please enter a numeric value");
        result.textContent="";
        }
        else if(birthyear.length===0 || currentyear.length===0){
            alert("Insert some value");
            result.textContent="";
        }
        else{
                return ageInDays;
        }
}
clickBtn.addEventListener('click', showAgeInDays);
resetBtn.addEventListener('click', resetting);

//function to reset everything
function resetting(){
    result.textContent="";
    birthinput.value="";
    currentinput.value="";
}
//keyboard event
function keyEvent(evt){
    if(evt.code==="Enter" && birthinput.value!=="" && currentinput.value!==""){
        showAgeInDays();
    }
}
document.addEventListener("keypress", keyEvent);

//Cloning page
link.addEventListener('click', clonePage);
function clonePage(){
    //variables
    clickBtn.remove();
    resetBtn.remove();
    birthinput.remove();
    currentinput.remove();
    link.style.display="none";
    //New element creation
    var clone=mainPage.cloneNode(true);
    clone.classList.add("copy");
    heading.innerHTML="Age in years";
    let newContainer=document.createElement('div');
    newContainer.classList.add('newBox');
    clone.append(newContainer);
    let newBirthinput=document.createElement('input');
    newBirthinput.setAttribute('type', 'tel');
    newBirthinput.setAttribute('maxlength', '4');
    newBirthinput.classList.add('newBirthinput');
    newContainer.append(newBirthinput);
    let newCurrentinput=document.createElement('input');
    newCurrentinput.setAttribute('type', 'tel');
    newCurrentinput.setAttribute('maxlength', '4');
    newCurrentinput.classList.add('newCurrentinput');
    newContainer.append(newCurrentinput);
    let btncontainer=document.createElement('div');
    btncontainer.classList.add('btncontainer');
    newContainer.append(btncontainer);
    let yearClick=document.createElement('button');
    yearClick.classList.add('yearClickBtn');
    yearClick.innerHTML="Click";
    let yearReset=document.createElement('button');
    yearReset.classList.add('yearResetBtn');
    yearReset.innerHTML="Reset";
    btncontainer.append(yearClick);
    btncontainer.append(yearReset);
    let resultText=document.createElement('div');
    resultText.classList.add('resultText');
    container.append(resultText);
    let backBtn=document.createElement('button');
    backBtn.innerHTML="<";
    backBtn.classList.add('backBtn');
    container.append(backBtn);
    container.append(clone);
    // Button events
    yearClick.addEventListener('click', ()=>{
        let newBirthValue=newBirthinput.value;
        let newCurrentvalue=newCurrentinput.value;
        let ageInYear=newCurrentvalue-newBirthValue;
        resultText.textContent=`Hey! You're ${ageInYear} years old!`;
        if(isNaN(newBirthValue) || isNaN(newCurrentvalue)){
            alert("please insert a numeric value");
            resultText.textContent=" ";
        }
        else if(newBirthValue.length===0 || newBirthValue.length===0){
            alert("please insert some value");
            resultText.textContent=" ";
        }
        else{
            return ageInYear;
        }
    });
    yearReset.addEventListener('click', () =>{
        resultText.textContent=" ";
        newBirthinput.value="";
        newCurrentinput.value="";
    });
}

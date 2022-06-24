/*let Email=document.querySelector("#email");
let Password=document.querySelector("#password");*/
let loginBtn=document.querySelector('.login-btn');
let container=document.querySelector('.container');

let userDetail={
    email:document.querySelector('#email'),
    password:document.querySelector('#password')
};
function login(){
    let newContainer=document.createElement('div');
    newContainer.style.width="800px";
    newContainer.style.height="200px";
    newContainer.className="newBox";
    document.body.appendChild(newContainer);
    container.style.display="none";
}
function authLogin(){
        if((userDetail.email).value.length===0 && (userDetail.password).value.length===0){
            alert("please fill the details");
        }
        else{
            login();
        }
}
loginBtn.addEventListener('click', authLogin);


let circles=document.querySelector('.circles');
let circlesDiv=document.querySelector('.circles div');
let container=document.querySelector('.container')
circlesDiv.addEventListener("animationend",()=>{
  let ball=document.createElement('div');
  ball.setAttribute("class","ball");
  setTimeout(()=>{
    container.appendChild(ball);
    ball.style.animation="bounce 3s linear";
  },800);
  setTimeout(()=>{
    let text=document.createElement('h2');
  text.textContent="We all are together"
  text.style.fontFamily="Georgia, 'Times New Roman', Times, serif";
  text.style.marginTop="30px";
  container.append(text);
  },2000);
  
});

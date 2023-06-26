const moon = document.querySelector(".fa-moon");
const moon2 = document.querySelector("#moon2");
const txt = document.querySelectorAll("#txt");
const hiddenContainer = document.querySelector("#hiddenContainer");
const moreOffer = document.querySelector(".more-offer");
const lessOffer = document.querySelector(".less-offer");


const sideBar = document.querySelector(".side-bar");
const faBar = document.querySelector(".fa-bars");
const faTimes = document.querySelector(".fa-times");


faBar.addEventListener("click",openBar);


function openBar(){
    sideBar.style.transform = "translateX(0)";
    sideBar.style.transition = ".5s";
    faTimes.style.display = "block";
    faBar.style.display = "none";
}


faTimes.addEventListener("click",closeBar);


function closeBar(){
    sideBar.style.transform = "translateX(-100%)";
    sideBar.style.transition = ".5s";
    faTimes.style.display = "none";
    faBar.style.display = "block";
}





moreOffer.addEventListener("click",offerFunc);
function offerFunc(){
    hiddenContainer.style.display = "flex";
    moreOffer.style.display = "none";
    lessOffer.style.display = "block";
}
lessOffer.addEventListener("click",offerFunc2);
function offerFunc2(){
    hiddenContainer.style.display = "none";
    moreOffer.style.display = "block";
    lessOffer.style.display = "none";
}
const opts = document.querySelectorAll(".opt");
moon.addEventListener("click",changeBgColor);
function changeBgColor(){
    document.body.style.backgroundColor = "#fff";
    moon2.style.color = "#000";
    moon.style.display = "none";
    moon2.style.display = "block";

    txt.forEach(user =>{
    user.style.color = "black"
})
}
moon2.addEventListener("click",changeBgColor2);
function changeBgColor2(){
    document.body.style.backgroundColor = "#000";
    moon.style.color = "#fff";
    moon.style.display = "block";
    moon2.style.display = "none";
    txt.forEach(user =>{
    user.style.color = "#fff"
    user.style.transition = ".5s";
})
opts.forEach(user =>{
    user.style.color = "#000";
    user.style.transition = ".5s";
})
}




const money = document.querySelector(".money");
const money1 = document.querySelector(".money1");
const euroDollar = document.querySelectorAll(".euro-dollar");







money.addEventListener("change",()=>{
    euroDollar.forEach(user =>{
      user.innerHTML = money.value;
    })  
  })
  
money1.addEventListener("change",()=>{
    euroDollar.forEach(user =>{
      user.innerHTML = money1.value;
    })  
  })
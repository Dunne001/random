const myBtn= document.getElementById("myBtn");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
let randomNum1;
let randomNum2;
let randomNum3;
myBtn.onclick= function(){
    randomNum1 = Math.floor(Math.random() * 50)+50;
    randomNum2 = Math.floor(Math.random() * 50)+50;
    randomNum3 = Math.floor(Math.random() * 50)+50;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}

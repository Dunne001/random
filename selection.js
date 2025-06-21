const old = document.getElementById("myText");
const response = document.getElementById("response");
const myBtn = document.getElementById("myBtn");
let age;
myBtn.onclick = function () {
    age = old.value;
    age = Number(age);
    if(age >= 100) {
        response.textContent = "Too old to play this game";
    }
    else if(age >= 50){
        response.textContent = "Should be busy monitoring your investments";
     }
    else if(age >= 18){
         response.textContent = "Your are elligible to play this game";
    }

    else if(age <= 0){
         response.textContent = "you are not yet born";
    }
    else{
        response.textContent = "Too young to play this  game";
    }
}

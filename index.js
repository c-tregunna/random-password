const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswordBtn = document.getElementById("generate-btn");
let passwordContainerOne = document.getElementById("password-container-one");
let passwordContainerTwo = document.getElementById("password-container-two");

generatePasswordBtn.addEventListener('click', function() {
    passwordContainerOne.textContent = "";
    passwordContainerTwo.textContent = "";
    for (i = 0; i < 15; i++) {
        passwordOne = Math.floor(Math.random() * characters.length) ;
        passwordContainerOne.textContent += characters[passwordOne];
        // console.log(characters[passwordOne]);
    }
    for (i = 0; i < 15; i++) {
        passwordTwo = Math.floor(Math.random() * characters.length);
        passwordContainerTwo.textContent += characters[passwordTwo];
        // console.log(characters[passwordTwo]);
    }
})
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//////*** Variables ***//////
let generatePasswordBtn = document.getElementById("generate-btn");
let passwordContainerOne = document.getElementById("password-container-one");
let passwordContainerTwo = document.getElementById("password-container-two");


//////*** Event Listener ***//////
generatePasswordBtn.addEventListener('click', function() {
    passwordContainerOne.textContent = ""; //sets textContent to empty before adding password
    passwordContainerTwo.textContent = "";
    for (i = 0; i < 15; i++) { // Loops through array to get 15 characters
        passwordOne = Math.floor(Math.random() * characters.length)  // returns 15 characters for password 1
        passwordContainerOne.textContent += characters[passwordOne]; //Add's content to empty div
        passwordTwo = Math.floor(Math.random() * characters.length); // returns 15 characters for password 2
        passwordContainerTwo.textContent += characters[passwordTwo]; //Add's content to empty div
    }
})
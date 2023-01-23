const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let data = characters; //array where we will add extra data depending on checkboxes selected

//////*** Variables ***//////
let generatePasswordBtn = document.getElementById("generate-btn");
let passwordContainerOne = document.getElementById("password-container-one");
let passwordContainerTwo = document.getElementById("password-container-two");

let slider = document.getElementById("length-slider");
let sliderValue = document.getElementById("slider-value");
sliderValue.textContent = slider.value //sets value on page to 15, as written in input tag on html
let incNumber = document.getElementById("num-check");
let incSymbol = document.getElementById("sym-check");

let copyPasswordOne = document.getElementById("copy-one");
let copyPasswordTwo = document.getElementById("copy-two");

//////*** Event Listener - show value of slider ***//////
slider.addEventListener("input", function() {
    sliderValue.textContent = slider.value; // display value of slider in p tag
})


//////*** Function - check if checkbox checked ***//////
function addToData() {
    if(incNumber.checked && incSymbol.checked){
            // console.log("checked");
            // passwordContainerOne.textContent = "checked"
            data = characters.concat(numbers, symbols); //if both checkboxes selected, add characters, numbers and symbols to data array
        } else if (incNumber.checked) {
            data = characters.concat(numbers); //if only numbers checkbox selected, add characters, numbers to data array
        } else if (incSymbol.checked) {
            data = characters.concat(symbols); //if only symbols checkbox selected, add characters, symbols to data array
        } else {
            data = characters;
        }
        //console.log(data);
        return data;
}

////*** Event Listener - create password ***//////
generatePasswordBtn.addEventListener('click', function() {
    addToData(); //call the add data function when clicking generate passwords
    passwordContainerOne.textContent = ""; //sets textContent to empty before adding password
    passwordContainerTwo.textContent = "";
    copyPasswordOne.textContent = "Copy to clipboard";
    copyPasswordTwo.textContent = "Copy to clipboard";
    for (i = 0; i < slider.value; i++) { // Loops through array to get characters to value of slider
        passwordOne = Math.floor(Math.random() * data.length)  // returns 15 characters for password 1
        passwordContainerOne.textContent += data[passwordOne]; //Add's content to empty div
        passwordTwo = Math.floor(Math.random() * data.length); // returns 15 characters for password 2
        passwordContainerTwo.textContent += data[passwordTwo]; //Add's content to empty div
    }
    // console.log(slider.value);
})

////*** Event Listener & functions - copy password ***//////
let copyFirstPassword = async () => {
    try {
        await navigator.clipboard.writeText(passwordContainerOne.innerHTML); //grab the inner html - text of the password
        //console.log("copied password 1");
    } catch (err) {
        console.error('Failed to copy: ', err);
    } copyPasswordOne.textContent = "Copied"; //change text of copy button to show copied
}

let copySecondPassword = async () => {
    try {
        await navigator.clipboard.writeText(passwordContainerTwo.innerHTML); //grab the inner html - text of the password
        //console.log("copied password 2");
    } catch (err) {
        console.error('Failed to copy: ', err);
    } copyPasswordTwo.textContent = "Copied"; //change text of copy button to show copied
}

copyPasswordOne.addEventListener('click', function() {
    copyFirstPassword();
})

copyPasswordTwo.addEventListener('click', function() {
    copySecondPassword();
})
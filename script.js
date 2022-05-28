// All numbers and letters that resemble a hex code in an array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Referencing the btn from the HTML file and the .color style in the css file
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = '#';
    // Loops through the array and selects 6 elements at random
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    color.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;
    document.body.style.text = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
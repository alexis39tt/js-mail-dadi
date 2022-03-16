function ArrayToggle(){

let container = document.querySelector(".container");
let arraylenght = document.querySelector("#arraylenght").value;
let arraynumberofel = document.querySelector("#arraynumberofel").value;
let array = [];

for (i=0; i<arraylenght; i++){
    array.push(Math.round(Math.random()*10));
}
container.innerHTML = `<div><p>Array completo: ${array}</p></div>`; 
container.innerHTML += `<p>Ultimi ${arraynumberofel} valori dell'array:`;
for (i=0; i<arraynumberofel; i++){
    container.innerHTML += `<p style="display: inline;">${array[arraylenght-i-1]},</p>`;
}
}
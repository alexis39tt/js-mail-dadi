let container = document.querySelector(".container");
let array = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

for (i=5; i>0; i--){
    container.innerHTML += `<div>${array[array.length-i]}</div>`;
}
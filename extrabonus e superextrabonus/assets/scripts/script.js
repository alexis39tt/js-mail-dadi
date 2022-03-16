function ArrayToggle() {

    let container = document.querySelector(".container");
    let arraylenght = document.querySelector("#arraylenght").value;
    let arraynumberofel = document.querySelector("#arraynumberofel").value;
    let array = [];

    if (arraylenght < arraynumberofel) {
        container.innerHTML = `<p style="color:red">Errore, la lunghezza dell'array deve essere più grande del numero di elementi estratti</p>`;
    }
    else {
        for (i = 0; i < arraylenght; i++) {
            array.push(Math.round(Math.random() * 10));
        }
        container.innerHTML = `<div><p>Array completo: ${array}</p></div>`;
        container.innerHTML += `<p style="display: inline">Ultimi ${arraynumberofel} valori dell'array:`;
        for (i = 0; i < arraynumberofel; i++) {
            container.innerHTML += `<p style="display: inline"> ${array[arraylenght - i - 1]}</p>`;
        }
    }
}
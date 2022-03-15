function ThrowDices(){
    let user = document.querySelector(".user");
    let cpu = document.querySelector(".cpu");
    let result = document.querySelector(".result");
    let dice = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];

    user.innerHTML= `<p>Numero dell'utente</p><p>${dice[0]}</p>`;
    cpu.innerHTML= `<p>Numero del CPU</p><p>${dice[1]}</p>`;

    if (dice[0] > dice[1]){
        result.innerHTML = `<p>Il vincitore è: <span>Utente</span></p>`;
    }
    else if (dice[0] < dice[1]){
        result.innerHTML = `<p>Il vincitore è: <span>CPU</span></p>`;
    }
    else if (dice[0] = dice[1]){
        result.innerHTML = `<p>Parità!</p>`;
    }
}
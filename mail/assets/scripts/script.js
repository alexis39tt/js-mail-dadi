function EmailCheck() {
    debugger;
    let emailList = [
        "alessandro@boolean.careers",
        "francesco@libero.it",
        "frank@gmail.com",
        "luisa@amazon.co.uk",
        "sebastiana@pincopallosrl.it"
    ];
    let access = false;
    let email = document.querySelector("#email").value;
    let container = document.querySelector(".textcontainer");
    for (i=0; i<emailList.length; i++){
        if (emailList[i] == email){
            access = true;
        }
    }
    if (access == true){
        container.style.color = "green";
        container.innerHTML = "<h1>Accesso consentito</h1>";
    }
    else{
        container.style.color = "red";
        container.innerHTML = "<h1>Accesso negato</h1>";
    }
}
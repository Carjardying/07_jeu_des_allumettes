let allumettes = 50;

function nbAllumettesRestantes(nbReste) {
    return
}

function askUser(){
    return Number(prompt("combien d'allumettes enlever?"))
}

function decompteAllumettes(){
    let ask = askUser()
    while (ask < 1 || ask > 6) {
        alert("choisis un CHIFFRE entre 1 et 6");
        ask = askUser();
      }
    while (allumettes > 0) {
        allumettes = allumettes - ask;
        console.log(allumettes);
        decompteAllumettes();
        
    }
}

decompteAllumettes();
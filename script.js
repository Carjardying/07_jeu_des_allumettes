let allumettes = 50;

function nbAllumettesRestantes(nbReste) {
    return
};

function demandeJoueur(){
    return Number(prompt("combien d'allumettes enlever?"))
};

function verifNombreChoisi(){ //code ne fonctionne pas si cette boucle est ici.
    let nombreChoisi = demandeJoueur() ; //sûrement à cause de cette déclaration là. car si hors des fonctions, le lance et c'est tout
    while (nombreChoisi < 1 || nombreChoisi > 6) {
        alert("choisis un CHIFFRE entre 1 et 6");
        nombreChoisi = demandeJoueur();
      }
      return  nombreChoisi;
}; 

function decompteAllumettes(allumettesRestantes){
    while (allumettesRestantes > 0) {
        let allumettesEnlevees = verifNombreChoisi()
        allumettesRestantes = allumettesRestantes - allumettesEnlevees;
        alert(allumettesRestantes);  
    }
    if (allumettesRestantes <= 0) {
     alert("Victoire")   
    }
}

decompteAllumettes(allumettes);

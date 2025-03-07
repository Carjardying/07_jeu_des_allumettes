let allumettes = 50;


function demandeJoueur(){
    return Number(prompt("combien d'allumettes enlever?"))
};

function demandeVerifieNbChoisi(){
    let nombreChoisi = demandeJoueur() ;
    while (nombreChoisi < 1 || nombreChoisi > 6) {
        alert("choisis un CHIFFRE entre 1 et 6");
        nombreChoisi = demandeJoueur();
      }
      return  nombreChoisi;
}; 

function decompteAllumettes(allumettesRestantes){
    while (allumettesRestantes > 0) {
        let allumettesEnlevees = demandeVerifieNbChoisi()
        allumettesRestantes = allumettesRestantes - allumettesEnlevees;
        alert(allumettesRestantes);  
    }
    if (allumettesRestantes <= 0) {
     alert("Victoire")   
    }
}

decompteAllumettes(allumettes);
 
// ETAPE 4 : Rajouter un 2eme joueur à votre jeu. //
// faire page html avec des balises correspondantes et les remplir pour remplacer le prompt

let allumettes = 50;

const nbAllumettes = document.getElementById("nbAllumettes");



function demandeJoueur(){ //fonction pour enregistrer le nombre choisi par le joueur.
    //selecteur de 1 à 6 (voir mdn pour syntaxe car possible bouton select)
    return nombreChoisi
};

// fonction qui lie le <h3> () {
//      chope le <h3> avec getElementById et remplace son innerHTML avec la valeur de let allumettes.
//}
function decompteAllumettes(allumettesRestantes){
    while (allumettesRestantes > 0) {
        let allumettesEnlevees = nombreChoisi //nouveau nom pour appeler la valeur retournée par demandeJoueur()
        allumettesRestantes = allumettesRestantes - allumettesEnlevees;
        //alert(allumettesRestantes) à la place : fonction qui lie le <h3>(allumettesRestantes)
        
    }
    if (allumettesRestantes <= 0) {
     alert("Victoire")   
    }
}

decompteAllumettes(allumettes);
 
// ETAPE 4 : Rajouter un 2eme joueur à votre jeu. //
// faire page html avec des balises correspondantes et les remplir pour remplacer le prompt

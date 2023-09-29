let entete = document.getElementById("entete");
let op = "", valeur1= "";

entete.innerText = "0";

// fonction pour ajouter 
const ajouter = (valeur)=>{

    if (valeur1 == "") {
        if (valeur != "0") {
            valeur1 = valeur;
            entete.innerText = valeur1;
        }
       
    }else if(valeur1 == "-"){
        if (valeur != "0") {

            valeur1 += valeur;
            entete.innerText = valeur1;
        }
    }else{
        valeur1 +=valeur;       
        entete.innerText = valeur1;
    }
}

// fonction qui permet d'effacer
const effacer = ()=>{
    if (op) {
        op = "";
        entete.innerText = valeur1;
    }else{
        if (valeur1.length > 1) {
            valeur1 = valeur1.substring(0, valeur1.length -1 );
            entete.innerText = valeur1;
        }else{
            valeur1 = "";
            entete.innerText = "0";
        }
    }
    
}


// fonction qui permet d'ajouter un opérateur 
const operateur = (opt)=>{
    if (valeur1) {
        op = opt;        
        entete.innerText = valeur1 + op;
    }else{
        if (opt == "-") {
            valeur1 = opt;
            entete.innerText = valeur1;
        }
    }
}
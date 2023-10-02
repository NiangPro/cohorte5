let entete = document.getElementById("entete");
let op = "", valeur1= "", valeur2 = "", resultat= "", newOp = "";

entete.innerText = "0";

const calculer = ()=>{
    if (valeur2) {
        if (op == "+") {
            resultat = parseInt(valeur1) + parseInt(valeur2)
        }else if (op == "-") {
            resultat = parseInt(valeur1) - parseInt(valeur2)
        } if (op == "/") {
            resultat = parseInt(valeur1) / parseInt(valeur2)
        }else if(op == "x"){
            resultat = parseInt(valeur1) * parseInt(valeur2)
        }

        entete.innerText = valeur1 +op + valeur2+ " = "+ resultat;
    }
}
// fonction pour ajouter 
const ajouter = (valeur)=>{
    if (resultat) {
        if (newOp) {
            valeur2 += valeur;
        entete.innerText = valeur1 + op +valeur2;
        }
        
    }else{
        if (op) {
            valeur2 += valeur;
            entete.innerText = valeur1 + op +valeur2;
        }else if (valeur1 == "") {
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

    
}

// fonction qui permet d'effacer
const effacer = ()=>{
    if (resultat) {
        op = ""; 
        valeur1= ""; 
        valeur2 = ""; 
        resultat= ""; 
        newOp = "";
        entete.innerText = "0";
    }else if (valeur2) {
        if (valeur2.length > 1) {
            valeur2 = valeur2.substring(0, valeur2.length -1 );
            entete.innerText = valeur1+op+valeur2;
        }else{
            valeur2 = "";
            entete.innerText = valeur1 + op;
        }
    }else if (op) {
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
    if (resultat) {
        newOp = opt;
        valeur1 = resultat;
        op = newOp;
        valeur2 = "";
        resultat = "";
        entete.innerText = valeur1 + op;
    }else if (valeur1) {
        op = opt;        
        entete.innerText = valeur1 + op;
    }else{
        if (opt == "-") {
            valeur1 = opt;
            entete.innerText = valeur1;
        }
    }
}
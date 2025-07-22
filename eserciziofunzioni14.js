console.log("------------TENTACOLATTE FUNZIONE 14------------");

function creaIniziali(nome){
    let stringa = "";
    let iniziale = "";
    if (nome === ""){
        stringa = "nome non valido";
    }else {
        iniziale = nome[0] + ".";

        for(let i = 0; i < nome.length; i++){ 
            if (nome[i] === " "){
            iniziale += nome[i + 1]+ ".";
            
            }
        }
    }
    
    return stringa === "" ? iniziale.toUpperCase() : stringa;
}

console.log(creaIniziali("Mario Rossi")); // "M.R."
console.log(creaIniziali("anna maria verdi")); // "A.M.V."
console.log(creaIniziali("Giuseppe")); // "G."
console.log(creaIniziali("")); // "nome non valido"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
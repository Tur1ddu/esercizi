console.log("------------TENTACOLATTE FUNZIONE 9------------");

function confrontaNumeri(numero1, numero2){
    let stringa = "";
    if("number" !== typeof numero1 || "number" !== typeof numero2){
        stringa = "errore" ;
    }else if (numero1 < numero2){
        stringa = "secondo maggiore";
    }else if (numero1 === numero2){
        stringa = "uguali";
    }else if(numero1 > numero2){
        stringa = "primo maggiore";
    }
    return stringa;
}

console.log(confrontaNumeri(10, 5));        // "primo maggiore"
console.log(confrontaNumeri(3, 8));        // "secondo maggiore"
console.log(confrontaNumeri(7, 7));        // "uguali"
console.log(confrontaNumeri("a", 5));        // "errore"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
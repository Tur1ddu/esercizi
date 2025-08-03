console.log("------------TENTACOLATTE FUNZIONE 13------------");

function applicaSconto(prezzo,sconto){
    let errore = "";
    let risultato = 0;
    if ("string" === typeof prezzo){
         errore = "dati non validi";
    }else if (sconto > 100){
        errore = "sconto troppo alto";
    }else{
        risultato = (prezzo - (sconto * prezzo) / 100) ;
    }
     return risultato > 0 ? risultato : errore;
}

console.log(applicaSconto(100, 20)); // 80
console.log(applicaSconto(50, 10)); // 45
console.log(applicaSconto(100, 150)); // "sconto troppo alto"
console.log(applicaSconto("abc", 20)); // "dati non validi"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
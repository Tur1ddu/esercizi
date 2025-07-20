console.log("------------TENTACOLATTE FUNZIONE 13------------");

function applicaSconto(prezo1,sconto){
    let risultato = (prezo1 - (sconto * prezo1) / 100) ;
    let stringa = "";
    let numero = 0;
    if (typeof stringa === typeof prezo1){
         stringa = "dati non validi";
    }else if (sconto > 100){
        stringa = "sconto troppo alto";
    }else{
        numero = risultato ;
    }
     return numero > 0 ? risultato : stringa;
}
console.log(applicaSconto(100, 20)); // 80
console.log(applicaSconto(50, 10)); // 45
console.log(applicaSconto(100, 150)); // "sconto troppo alto"
console.log(applicaSconto("abc", 20)); // "dati non validi"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
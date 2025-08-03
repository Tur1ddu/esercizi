console.log("------------TENTACOLATTE FUNZIONE 10------------");

function convertiMinuti(minuti){
    let risultato = "";
    let numero = 60;
    let resto = 0 ;
    if (minuti >= 60 ){
        resto = minuti % numero;
        let ore = (minuti - resto) / numero;
        risultato = ore + " ore e " + resto + " minuti ";
    } else if (minuti >= 0) {
        risultato = minuti + " minuti";
    }else if (minuti < 0){
        risultato = "minuti non validi";
    }
    return risultato;
}

console.log(convertiMinuti(120));        // "2 ore e 0 minuti"
console.log(convertiMinuti(45));        // "45 minuti"
console.log(convertiMinuti(90));        // "1 ora e 30 minuti"
console.log(convertiMinuti(-10));        // "minuti non validi"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
console.log("------------TENTACOLATTE FUNZIONE 19------------");

/*da sistemare tutto visto che i log sono tutti sbagliati */
function scontoProgressivo( prezzo, quantita){
    let totale = 0; 
    let stringa = "";
    let sconto = 0;
    if (prezzo < 0 || quantita < 0){
        stringa = "dati non validi";
    }else {
        totale = prezzo * quantita;
        let percentuale = 0;

        if (quantita > 5 && quantita <= 10){
            percentuale = 10;
        }else if (quantita > 10 && quantita <= 20 ){
            percentuale = 20;
        }else if (quantita > 20 ){
            percentuale = 30;
        }
        sconto = totale - (totale * percentuale ) / 100;
    }

    return totale > 0 ? sconto : stringa;
}



console.log(scontoProgressivo(10, 3)); // 30 (nessuno sconto)
console.log(scontoProgressivo(10, 8)); // 72 (10% sconto su 80)
console.log(scontoProgressivo(10, 15)); // 120 (20% sconto su 150)
console.log(scontoProgressivo(10, 25)); // 175 (30% sconto su 250)
console.log(scontoProgressivo(10, -3)); // "dati non validi"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
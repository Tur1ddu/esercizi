console.log("------------TENTACOLATTE FUNZIONE 15------------");

function numeriCasuali(n){
    let randomica = [];
    for(let i = 0; i < n; i++){
       const randomicaNumero = Math.floor(Math.random() * 100) + 1; 
       randomica.push(randomicaNumero)
    }
    return randomica;
}


console.log(numeriCasuali(5)) // → [43, 7, 89, 23, 60] (esempio)
console.log(numeriCasuali(3)) // → [5, 72, 87] (esempio)
console.log(numeriCasuali(8)) // → [36, 17, 43, 88, 12, 6, 94, 31] (esempio)
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
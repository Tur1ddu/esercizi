console.log("------------TENTACOLATTE FUNZIONE 15------------");

function numeriCasuali(n){
    let max = 100;
    let min = 1;
    let randomica = [];
    for(let i = 0; i < n; i++){
       const randomicaNumero = Math.floor(Math.random()* (max - min +1 )) + min; 
        randomica.push(randomicaNumero)
    }
    return randomica ;
}


console.log(numeriCasuali(5)) // → [43, 7, 89, 23, 60] (esempio)
console.log(numeriCasuali(3)) // → [5, 72, 87] (esempio)
console.log(numeriCasuali(8)) // → [36, 17, 43, 88, 12, 6, 94, 31] (esempio)
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
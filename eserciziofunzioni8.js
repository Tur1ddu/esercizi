console.log("------------TENTACOLATTE FUNZIONE 8------------");
function somma(numeri1, numeri2){
    let numeriSomma = 0;
    if ("number" === typeof numeri1 && "number" ===  typeof numeri2){
       numeriSomma = numeri1 + numeri2;
    }else{
        numeriSomma= "errore";
    }
    return numeriSomma;
}


console.log(somma(3, 7));       // 10
console.log(somma(-2, 5));      // 3
console.log(somma(3, "abc"));   // errore
console.log(somma());           // errore
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
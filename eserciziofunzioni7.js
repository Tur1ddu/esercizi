console.log("------------TENTACOLATTE FUNZIONE 7------------");

function raddoppia (numero) {
    if("number" === typeof numero ){
       numero += numero;
    }else{
        numero = 0;
    }
    return numero;
}

console.log(raddoppia(5));      // 10
console.log(raddoppia(-3));     // -6
console.log(raddoppia("abc"));  // 0
console.log(raddoppia());       // 0

console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
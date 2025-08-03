console.log("------------TENTACOLATTE FUNZIONE 7------------");

function raddoppia(numero) {
    return typeof numero === "number" ? numero*2 : 0;
}

console.log(raddoppia(5));      // 10
console.log(raddoppia(-3));     // -6
console.log(raddoppia("abc"));  // 0
console.log(raddoppia());       // 0

console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
console.log("------------TENTACOLATTE FUNZIONE 6------------");

function generaPassword(lunghezza) {
    const alfanumerici = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let mem= "";
    for(let i = 0; i < lunghezza; i++ ){
        let variabile = Math.floor(Math.random() * alfanumerici.length-1) +1;
        mem+=alfanumerici[variabile];
    }
    return mem;
}

console.log(generaPassword(8)); // Es: "aB3kL9mP"
console.log(generaPassword(12)); // Es: "xY7nR2qE8wT1"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
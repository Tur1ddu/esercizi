console.log("------------TENTACOLATTE FUNZIONE 20------------");

function fibonacci(n){
    let sequenza = 0;
    let stringa = "";
    let a = 0;
    let b = 1;
    if (n < 0){
    stringa = "imput non valido"; 
    }else if (n === 0){
       b = a;
    }else if(n === 1){
        b = 1;
    }else if(n >= 2){
        for (let i = 2; i <= n; i++){
            sequenza = a + b;
            a = b;
            b = sequenza;
        } 
    }
    return n >= 0? b : stringa;
}


console.log(fibonacci(0)); // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
console.log(fibonacci(-1)); // "input non valido"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------"); 
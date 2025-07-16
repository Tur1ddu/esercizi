console.log("------------TENTACOLATTE FUNZIONE 10------------");
function calcoloEta(annoNascita){
    let annoCorrente = 2024;
    let eta = 0;
    let stringa = "";
    if (annoNascita > annoCorrente){
        stringa = "anno futuro non valido";
    }else if (annoNascita < 1900){
        stringa = "anno troppo vecchio";
    }else if ("number" !== typeof annoNascita){
        stringa = "anno non valido";
    }else {
        eta = annoCorrente - annoNascita;
    }
    return eta > 0 ? eta : stringa;  
}








console.log(calcoloEta(2000));      //  24
console.log(calcoloEta(1995));      //  29
console.log(calcoloEta(2030));      // "anno futuro non valido"
console.log(calcoloEta(1850));      // "anno troppo vecchio"
console.log(calcoloEta("abc"));     // "anno non valido"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
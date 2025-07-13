console.log("------------TENTACOLATTE FUNZIONE 2------------");
function isPari(numero) {

    /*
    let bol = true;
    let bul = false;
    if(numero%2 === 0){
        numero = bol; //4 = true (?) | 7 = true
    }else{
       bol = bul; //(?)
    }
    return bol;

    */

    let result = false;

    if(numero%2 === 0) {
        result = true
    }

    return result;
}


console.log(isPari(4));
console.log(isPari(7));
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
console.log("------------TENTACOLATTE FUNZIONE 3------------");

function areaRettangolo(base, altezza) {
    let risultato = base*altezza;
    return risultato;
}

function areaTriangolo(base, altezza) {
    let risultato = base*altezza/2;
    return risultato;
}

function areaCerchio(raggio) {
    const pgreco = 3.14159;
    let risultato =pgreco*raggio*raggio;
    return  risultato;
}

function areaQuadrato(lato) {
    let risultato = lato*lato;
    return risultato;
}

console.log(areaRettangolo(5, 3)); // 15
console.log(areaTriangolo(4, 6)); // 12
console.log(areaCerchio(3)); // ~28.27
console.log(areaQuadrato(4)); //16
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");

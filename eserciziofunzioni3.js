console.log("------------TENTACOLATTE FUNZIONE 3------------");

function areaRettangolo(base, altezza) {
    return base*altezza;
}

function areaTriangolo(base, altezza) {
    return base*altezza/2;
}

function areaCerchio(raggio) {
    const pgreco = 3.14159;
    return  pgreco*raggio*raggio;
}

function areaQuadrato(lato) {
    return lato*lato;
}

console.log(areaRettangolo(5, 3)); // 15
console.log(areaTriangolo(4, 6)); // 12
console.log(areaCerchio(3)); // ~28.27
console.log(areaQuadrato(4)); //16
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");

console.log("------------TENTACOLATTE FUNZIONE 6------------");

function generaPassword(lunghezza) {
    let smem= "duaisduaisjdsijdaskljdlakKSSKKSLAKLL;LCKPLCOPAKOAJOJA**ç°§°:°ççç°°@@##@[@suriopjuskdjaskdjasiojdkasjdiopwukadjisaueiwjdiasdjskamhjobn";
    let mem= "";
    for(let i = 0; i < lunghezza; i++ ){
        mem+=smem[i];
    }
    return mem;
}

console.log(generaPassword(8)); // Es: "aB3kL9mP"
console.log(generaPassword(12)); // Es: "xY7nR2qE8wT1"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
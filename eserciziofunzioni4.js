console.log("------------TENTACOLATTE FUNZIONE 4------------");

function unisciStringhe(stringa1, stringa2, separatore) {
    unione = stringa1+separatore+stringa2;
    return unione;
}

// Versione avanzata con numero variabile di parametri
function unisciMultipleStringhe(...stringhe) {
return stringhe;
}

// Test
console.log(unisciStringhe("Ciao", "Mondo", " ")); // "Ciao Mondo"
console.log(unisciMultipleStringhe("A", "B", "C", "D")); // "A B C D"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
console.log("------------TENTACOLATTE FUNZIONE 4------------");

function unisciStringhe(stringa1, stringa2, separatore) {
    let unione = stringa1+separatore+stringa2;
    return unione;
}

// Versione avanzata con numero variabile di parametri (non considerare)
function unisciMultipleStringhe(...stringhe) {
    let unione = "";
    stringhe.forEach(stringa => {
        unione += stringa
    });
    return unione;
}

// Test
console.log(unisciStringhe("Ciao", "Mondo", " ")); // "Ciao Mondo"
console.log(unisciMultipleStringhe("A", "B", "C", "D")); // "ABCD"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
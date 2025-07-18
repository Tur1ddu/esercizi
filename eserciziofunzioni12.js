console.log("------------TENTACOLATTE FUNZIONE 12------------");
/*MI ERO RICORDATO DI MATH.MAX VISTO CHE ME NE HAI PARLATO E HO CERCATO COME DOVEVO UTILIZZARLO E POI HO RITROVATO I "..." E LI HO MESSI PURE*/
function trovaMassimo(numeri){
    let massimo = Math.max(...numeri);     
     return massimo;
}
/* NON SO COSA TI ASPETTAVI MA HO PROVATO A FARE QUESTO MA MI DAVA ERRORE VISTO CHE IL MATH NON VA MESSO INSIEME A [I]
function trovaMassimo(numeri){
    for (let i = 0; i < numeri.length; i++){
    }
    let massimo = Math.max(numeri[i]);     
     return massimo;
}
*/
/*QUESTO è UN ESEMPIO FATTO DA GEMINI MA NON SO SE VOLEVI QUESTO
 * function trovaMassimoManuale(numeri) {
    if (numeri.length === 0) {
        return undefined; 
    }

    let massimo = numeri[0];

    for (let i = 1; i < numeri.length; i++) {
        if (numeri[i] > massimo) {
            massimo = numeri[i]; 
        }
    }
    return massimo;
}
console.log(trovaMassimoManuale([10, 5, 20, 8, 30])); // Output: 30
console.log(trovaMassimoManuale([])); // Output: undefined*/



console.log(trovaMassimo([3, 1, 9, 2]));     // → 9
console.log(trovaMassimo([8, 1, 7, 2]));     // → 8
console.log(trovaMassimo([4, 11, 9, 3]));    // → 11
console.log(trovaMassimo([3, 1, 4, 2]));    // → 4
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
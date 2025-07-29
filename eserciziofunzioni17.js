console.log("------------TENTACOLATTE FUNZIONE 17------------");


function isPalindromo(palindrom){
    let buleana = false;
    palindrom = palindrom.toUpperCase();
    palindrom = palindrom.replace(/[^a-zA-Z0-9]/g, "");

    if (palindrom === palindrom.split('').reverse().join('')){
        buleana = true;
    }else {
        buleana = false;
    }
return buleana ;
}

console.log(isPalindromo("anna")); // true
console.log(isPalindromo("A man a plan a canal Panama")); // true
console.log(isPalindromo("race a car")); // false
console.log(isPalindromo("Was it a car or a cat I saw?")); // true
console.log(isPalindromo("Tentacolatte")); // false
console.log(isPalindromo("I topi non avevano nipoti")); // true
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
console.log("------------TENTACOLATTE FUNZIONE 5------------");

function contaCarattere(testo, carattere) {
  let count = 0;
  for (let i = 0; i < testo.length; i++) {
    if (testo[i] === carattere) {
      count++;
    }
  }
  return count;
}

// Test
console.log(contaCarattere("javascript", "a")); // 2
console.log(contaCarattere("hello world", "l")); // 3
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
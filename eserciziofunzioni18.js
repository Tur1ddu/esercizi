console.log("------------TENTACOLATTE FUNZIONE 18------------");


function numeroRomano(n){
    let stringa = "";
    let risultato = "";
    let romani = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let numeri = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    if (n < 1 || n > 3999){
        stringa = "numero non valido";
    }else{
        
        for (let i = 0; i < romani.length; i++ ){
            while (n >= numeri[i]) {
                risultato += romani[i];
                n -= numeri[i];
            }
        }
    }
    return stringa.length > 0 ? stringa : risultato;
}
console.log(numeroRomano(27)); // "XXVII"
console.log(numeroRomano(1994)); // "MCMXCIV"
console.log(numeroRomano(58)); // "LVIII"
console.log(numeroRomano(0)); // "numero non valido”
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
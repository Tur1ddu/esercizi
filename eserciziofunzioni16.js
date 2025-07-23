console.log("------------TENTACOLATTE FUNZIONE 16------------");


function validaPIN(pin){
    let stringa = "";
    let pinErrati = ["0000", "1234", "1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"];
    let buleana = false ;
    if (Number(pin) === NaN){ // questa condizione verifica che il pin non è un numero
        stringa = "PIN deve contenere solo numeri";
        buleana = false;
    } else {
        buleana = true;
    }
    if (buleana === true && (pin.length < 4 || pin.length > 4)){
        stringa = "pin deve essere di 4 cifre";
        buleana = false;
    }else{
      buleana = true;
    }
    if (buleana === true){
        for (let i = 0; i < pinErrati.length; i++){
            if(pin === pinErrati[i]){
                stringa = "pin troppo semplice";
                buleana = false; 
                break;
            }
        }
    }
    if (buleana === true){
       stringa = "PIN valido";
    }
    return stringa;
}
console.log(validaPIN("1357")); // "PIN valido"
console.log(validaPIN("123")); // "PIN deve essere di 4 cifre"
console.log(validaPIN("12ab")); // "PIN deve contenere solo numeri"
console.log(validaPIN("1234")); // "PIN troppo semplice"
console.log("-------------PENSAVI DI AVER VINTO EBBENE---------------");
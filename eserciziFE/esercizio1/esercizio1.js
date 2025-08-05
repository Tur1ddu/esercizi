// Dati dell'utente
let nome = "Marco Rossi";
let eta = 22;
let citta = "Milano";

// Array di messaggi casuali
let messaggi = [
    "Benvenuto nella programmazione web!",
    "Oggi è una giornata perfetta per imparare JavaScript!",
    "HTML, CSS e JavaScript: la combinazione vincente!",
    "Il coding è creatività e logica insieme!",
    "Ogni esperto è stato una volta un principiante!"
];

/* In questo esercizio dovrai:

- Calcolare l'anno di nascita e inserirlo nell'apposita sezione
- Scegli in maniera casuale il messaggio e inseriscilo nell'apposita sezione
- Aggiorna tutti i contenuti della pagina

*/

function calcoloAnno(eta){
    const anno = 2025;
    return anno - eta;
}

function messaggioCasuale(messaggi){
    let indice = Math.floor(Math.random() * messaggi.length-1) +1
    return messaggi[indice];
}

window.addEventListener("DOMContentLoaded", function () {
    let nomeUtente = document.getElementById("nome-utente");
    nomeUtente.innerText = nome;
    let etaUtente = document.getElementById("eta-utente");
    etaUtente.innerText= eta;
    let cittaUtente = document.getElementById("citta-utente");
    cittaUtente.innerText = citta;
    let annoUtente = document.getElementById("anno-nascita");
    annoUtente.innerText = calcoloAnno(eta);
    let messaggioUtente = document.getElementById("messaggio-giorno");
    messaggioUtente.innerText = messaggioCasuale(messaggi);
});










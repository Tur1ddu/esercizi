// Array di studenti
let studenti = [
    { nome: "Marco Rossi", eta: 20, corso: "Informatica" },
    { nome: "Giulia Bianchi", eta: 19, corso: "Design" },
    { nome: "Luca Verdi", eta: 21, corso: "Matematica" },
    { nome: "Sara Neri", eta: 18, corso: "Informatica" },
    { nome: "Andrea Gialli", eta: 22, corso: "Design" },
    { nome: "Elena Blu", eta: 20, corso: "Matematica" }
];

// Array di prodotti
let prodotti = [
    { nome: "Laptop", prezzo: 899.99 },
    { nome: "Mouse", prezzo: 25.50 },
    { nome: "Tastiera", prezzo: 75.00 },
    { nome: "Monitor", prezzo: 299.99 },
    { nome: "Webcam", prezzo: 89.99 },
    { nome: "Cuffie", prezzo: 149.99 }
];

//Array di colori
let colori = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#f0932b", "#eb4d4b", "#6c5ce7", "#a29bfe"];

/* In questo esercizio dovrai:

- Mostrare nell'apposita sezione la lista degli studenti
- Mostrare nell'apposita sezione la lista dei prodotti
- Mostrare nell'apposita sezione la lista dei colori
- Aggiornare le statistiche inserendo il numero corretto di: totale studenti, totale prodotti, totale colori,
mostrare il nome dello studente più giovane, mostrare il prodtto più costoso

*/
function elementi(lista,divhtml){
   let ul = document.createElement('ul');
    for (let i = 0; i < lista.length; i++){
        let li = document.createElement("li");
        li.innerText = lista[i].nome;
        if (typeof lista[i] === "string"){
            li.innerText = lista[i];
        }
        ul.appendChild(li);
    }
    divhtml.appendChild(ul);
}


window.addEventListener("DOMContentLoaded", function () {
    let listaUtenti = document.getElementById("lista-studenti");
    let listaProdotti = document.getElementById("lista-prodotti");
    let listaColori = document.getElementById("palette-colori");
    let totStudenti = document.getElementById("totale-studenti");
    let totProdotti = document.getElementById("totale-prodotti");
    let totColori = document.getElementById("totale-colori");
    let giovane = document.getElementById("studente-giovane");
    let costoso = document.getElementById("prodotto-costoso");
    totStudenti.innerText = studenti.length;
    totProdotti.innerText = prodotti.length;
    totColori.innerText = colori.length;
    giovane.innerText = Math.min(...studenti.map(s => s.eta));
    costoso.innerText = Math.max(...prodotti.map(s => s.prezzo));
    elementi(studenti, listaUtenti);
    elementi(prodotti, listaProdotti);
    elementi(colori, listaColori);
});

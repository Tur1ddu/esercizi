function aggiungi(){
    let ul = document.getElementById("item");
    let li = document.createElement("li");
    let inp = document.getElementById("add");
    li.innerText = inp.value;
    ul.appendChild(li);
    
}
function change(id){
    let p = document.getElementById("caffettino");
    let inp = document.getElementById(id);
    p.style.fontSize = inp.value;
    if(id === "cambiacolore"){
        p.style.color = inp.value;
    }else{
        p.style.fontSize = inp.value;
    }
}
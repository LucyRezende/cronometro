let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let segundos = document.getElementById("segundos");
let decimos = document.getElementById("decimos");

let intervalo;
let dec = 0;
let seg = 0;

start.onclick = function() {
    clearInterval(intervalo);
    intervalo = setInterval(timer, 10);
    
    
}

stop.onclick = function() {
    clearInterval(intervalo);
    
    
}


reset.onclick = function() {
    clearInterval(intervalo);
    dec = 0;
    seg = 0;
    decimos.innerHTML="00";
    segundos.innerHTML="00";
    
}

function timer() {
    dec++;
    if(dec==99) {
        dec=0;
        seg++;
        if(seg<=9){
        segundos.innerHTML="0" + seg;
        }
        else {
        segundos.innerHTML=seg;
        }
    }
    dec = (dec<10) ? decimos.innerHTML="0" + dec : decimos.innerHTML=dec;
}
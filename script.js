let minutos = document.getElementById("minutos"),
    segundos = document.getElementById("segundos"),
    iniciar = document.getElementById("start"),
    parar = document.getElementById("stop"),
    reiniciar = document.getElementById("reset"),
    minutosVar,
    segundosVar,
    intervalo;

iniciar.onclick = function() {
    clearInterval(intervalo);   
    intervalo = setInterval(diminuirUmaUnidade, 1000);
    minutosVar = 24;
    minutos.innerHTML = minutosVar;
    segundosVar = 59;
    segundos.innerHTML = segundosVar;
}

parar.onclick = function() {
    clearInterval(intervalo);
}

reiniciar.onclick = function() {
    clearInterval(intervalo);
    minutosVar = "25";
    minutos.innerHTML = minutosVar;
    segundosVar = "00";
    segundos.innerHTML = segundosVar;
    
}

function diminuirUmaUnidade() {
    if(segundosVar > 10){
        segundosVar--;
        segundos.innerHTML = segundosVar;
    }
    else if(segundosVar == 10){
        segundosVar--;
        segundos.innerHTML = "0" + segundosVar;
    }
    else if (segundosVar < 10 && segundosVar > 0) {
        segundosVar--;
        segundos.innerHTML = "0" + segundosVar;
    }
    else if (segundosVar == 0) {
        if (minutosVar == 0) {
            clearInterval(intervalo);
            alert("Lucy, acabou feia!!!!")
        }
        else{
            segundosVar = 59;
            segundos.innerHTML = segundosVar;
            minutosVar--;
            if (minutosVar < 10) {
                minutos.innerHTML = "0" + minutosVar;
            }
            else {
            minutos.innerHTML = minutosVar;
            }
        }
    }
} 


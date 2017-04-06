var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdGordura = paciente.querySelector(".info-gordura");
    var gordura = tdGordura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = invalidWeight(peso);
    var alturaEhValida = invalidHeight(altura);
    var gorduraEhValida = invalidFat(gordura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function invalidWeight(weight){
    if(weight < 0 || weight > 1000){
        return false;
    } else{
        return true;
    }
}

function invalidHeight(height){
    if(height < 0 || height > 3){
        return false;
    } else{
        return true;
    }
}

function invalidFat(fat){
    if(fat < 0 || fat > 100){
        return false;
    } else{
        return true;
    }
}
var btnAddPacient = document.querySelector("#adicionar-paciente");
var msgError = document.querySelector("#mensagem-erro");

btnAddPacient.addEventListener("click", function(event){

    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var pacient = getPacientForm(form);

    var errors = validatePacient(pacient);

    if(errors.length > 0){
        showMessagesErrors(errors);
        console.log(errors.length);
        return;
    }

    var pacientTr = createTrElement(pacient);

    addPacientOnTable(pacient);
    
    form.reset();

    var eraseErrorsMsg = document.querySelector("#mensagem-erro");
    eraseErrorsMsg.innerHTML = "";

});

function getPacientForm(form){

    var pacient = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
    return pacient;
}

function createTrElement(pacient){
    var pacientTr = document.createElement("tr");
    pacientTr.classList.add("paciente")

    pacientTr.appendChild(createTdElement(pacient.nome, "info-nome"));
    pacientTr.appendChild(createTdElement(pacient.peso, "info-peso"));
    pacientTr.appendChild(createTdElement(pacient.altura, "info-altura"));
    pacientTr.appendChild(createTdElement(pacient.gordura, "info-gordura"));
    pacientTr.appendChild(createTdElement(pacient.imc, "info-imc"));

    return pacientTr;
}

function createTdElement(data, aClass){
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(aClass);
    return td;
}

function validatePacient(pacient){
    
    var errors = [];
    
    if(!invalidWeight(pacient.peso)){
        errors.push("Peso invalido!");
    }

    if(!invalidHeight(pacient.altura)){
        errors.push("Altura inválida!");
    }

    if(!invalidFat(pacient.gordura)){
        errors.push("Valor gordura inválido!");
    } 

    if(pacient.nome.length == 0){
        errors.push("Favor preencher NOME!");
    }

    if(pacient.peso.length == 0){
        errors.push("Favor preencher valor de PESO!");
    }

    if(pacient.altura.length == 0){
        errors.push("Favor preencher valor de ALTURA!");
    }

    if(pacient.gordura.length == 0){
        errors.push("Favor preencher valor de GORDURA!")
    }
    return errors;
}

function showMessagesErrors(errors){

    var ulErrors = document.querySelector("#mensagem-erro");
    ulErrors.innerHTML = "";

    errors.forEach(function(positionError){
        var li = document.createElement("li");
        li.textContent = positionError;
        ulErrors.appendChild(li);
    });
}

function addPacientOnTable(pacient){
    var pacientTr = createTrElement(pacient);
    var table = document.querySelector("#tabela-pacientes");
    table.appendChild(pacientTr);
}
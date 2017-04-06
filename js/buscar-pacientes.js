//AJAX requests

var btnImportPacients = document.querySelector("#ajax");

btnImportPacients.addEventListener("click", function(){
    
    //Responsble for doing HTTP's requests
    var xhr = new XMLHttpRequest();
    
    /*Configurando o XML para fazer as requisições - Configurar o endereço de acesso
    ===========================================================================================
    open - método em que dizemos o tipo de requisição e onde buscamos as informações
    GET - tipo de requisição
    https://api-pacientes.herokuapp.com/pacientes - onde estamos buscando
    ===========================================================================================
    */
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    //Loading the data
    xhr.addEventListener("load", function(){
        var response = xhr.responseText;//Guardando o conteúdo (uma string) da requisição
        var pacients = JSON.parse(response);//Convertendo os objetos que retornaram em objetos em array
        
        pacients.forEach(function(pacient){
            addPacientOnTable(pacient);
            console.log(pacient);
        });
    });

    //Doing the request
    xhr.send();
});
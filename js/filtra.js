var filter = document.querySelector("#filtrar-tabela");

filter.addEventListener("input", function(){

    var pacients = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){
        for(var i = 0; i < pacients.length; i++){
            var tdName = pacients[i].querySelector(".info-nome");
            var tdContent = tdName.textContent;
            var expression = new RegExp(this.value, "i");

            if(expression.test(tdContent)){
                pacients[i].classList.remove("hidePacient");
            } else{
                pacients[i].classList.add("hidePacient");
            }
        }
    } else{
        for(var i = 0; i < pacients.length; i++){
            pacients[i].classList.remove("hidePacient");
        }
    }
});
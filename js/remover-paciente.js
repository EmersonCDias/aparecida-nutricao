var table = document.querySelector("#tabela-pacientes");

table.addEventListener("dblclick", function(event){
   event.target.parentNode.classList.add("fade-out");
   
   setTimeout(function(){
        event.target.parentNode.remove();
   }, 500);
});
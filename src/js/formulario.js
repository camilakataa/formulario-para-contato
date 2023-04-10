const campos = document.querySelectorAll(".input-text");
const botaoEnviar = document.querySelector(".enviar");
let textoErro = document.querySelectorAll(".texto-erro")


botaoEnviar.addEventListener('click', function(event){
    event.preventDefault();

    campos.forEach(function(element, index){

        if (campos[index].value === "") {
            campos[index].classList.add("vazio")
            textoErro[index].classList.add("vazio")
        } else {
            campos[index].classList.add("preenchido")
        }

    })

});
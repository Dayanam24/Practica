function validarFormulario(event){
    event.preventDefault()

    let usuario_1 = document.getElementById("usuario_1").value
    let usuario_2 = document.getElementById("usuario_2").value

    if(usuario_1 === usuario_2){

        alert("los campos son iguales")
    }else{
        alert("Los campos no son iguales")
    }

}


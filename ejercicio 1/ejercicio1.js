let inputTarea = document.getElementById("tareas");
let boton = document.getElementById("agregar");
let cantidad = document.getElementById("cantidad");
let lista = document.getElementById("listaDeTareas");

let total = 0;

boton.onclick = function() {

    if (inputTarea.value == "") {
        return;
    }

    let elemento = inputTarea.value;

    let li = document.createElement("li");
    li.textContent = elemento;

    lista.appendChild(li);

    total++;
    cantidad.innerHTML = total;

    let botonEliminar = document.createElement("span");
    botonEliminar.textContent = "\u00d7";
    li.appendChild(botonEliminar);

    botonEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    inputTarea.value = "";

}
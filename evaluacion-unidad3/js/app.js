
const formulario = document.getElementById('miFormulario');
const inputJuego = document.getElementById('juego');
const inputCorreo = document.getElementById('correo');
const inputClave = document.getElementById('clave');
const inputPuntos = document.getElementById('puntos');
const listaNotas = document.getElementById('listaNotas');


formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 

    if (validar() === true) {
        guardarEnProgreso();
    }
});

inputJuego.addEventListener('input', function() {
    if (inputJuego.value !== "") {
        inputJuego.className = "";
        document.getElementById('error-juego').innerText = "";
    }
});

function validar() {
    let todoOk = true;


    if (inputJuego.value.trim() === "") {
        inputJuego.className = "borde-rojo";
        document.getElementById('error-juego').innerText = "Debes escribir un juego";
        todoOk = false;
    } else {
        inputJuego.className = "borde-verde";
        document.getElementById('error-juego').innerText = "";
    }


    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(inputCorreo.value)) {
        inputCorreo.className = "borde-rojo";
        document.getElementById('error-correo').innerText = "Correo inválido";
        todoOk = false;
    } else {
        inputCorreo.className = "borde-verde";
        document.getElementById('error-correo').innerText = "";
    }

    if (inputClave.value.length < 5) {
        inputClave.className = "borde-rojo";
        document.getElementById('error-clave').innerText = "Mínimo 5 letras";
        todoOk = false;
    } else {
        inputClave.className = "borde-verde";
        document.getElementById('error-clave').innerText = "";
    }

    let numero = parseInt(inputPuntos.value);
    if (numero < 1 || numero > 10 || inputPuntos.value === "") {
        inputPuntos.className = "borde-rojo";
        document.getElementById('error-puntos').innerText = "Puntaje del 1 al 10";
        todoOk = false;
    } else {
        inputPuntos.className = "borde-verde";
        document.getElementById('error-puntos').innerText = "";
    }

    if (inputJuego.value.length > 20) {
        inputJuego.className = "borde-rojo";
        document.getElementById('error-juego').innerText = "Nombre muy largo (máx 20)";
        todoOk = false;
    }

    return todoOk;
}

function guardarEnProgreso() {

    const nuevaNota = {
        id: Date.now(),
        titulo: inputJuego.value,
        autor: inputCorreo.value,
        nota: inputPuntos.value
    };

    
    let notasExistentes = JSON.parse(localStorage.getItem('misNotasWeb')) || [];
    
    notasExistentes.push(nuevaNota);
    
    
    localStorage.setItem('misNotasWeb', JSON.stringify(notasExistentes));

    formulario.reset(); 
    
    inputJuego.className = "";
    inputCorreo.className = "";
    inputClave.className = "";
    inputPuntos.className = "";

    mostrarNotasEnPantalla(); 
}


function mostrarNotasEnPantalla() {
    listaNotas.innerHTML = ""; 
    
    let notasExistentes = JSON.parse(localStorage.getItem('misNotasWeb')) || [];

    notasExistentes.forEach(function(nota) {
        const divNota = document.createElement('div');
        divNota.className = "tarjeta-nota";
        divNota.innerHTML = `
            <p><strong>Juego:</strong> ${nota.titulo}</p>
            <p><strong>Por:</strong> ${nota.autor} (Nota: ${nota.nota}/10)</p>
        `;

        
        const botonEliminar = document.createElement('button');
        botonEliminar.innerText = "Eliminar Nota";
        botonEliminar.style.marginTop = "5px";

        
        botonEliminar.addEventListener('click', function() {
            eliminarNotaDeComputadora(nota.id, divNota);
        });

        divNota.append(botonEliminar); 
        listaNotas.append(divNota);    
    });
}

function eliminarNotaDeComputadora(id, elementoCajita) {
    let notasExistentes = JSON.parse(localStorage.getItem('misNotasWeb')) || [];
    
    notasExistentes = notasExistentes.filter(item => item.id !== id);
    localStorage.setItem('misNotasWeb', JSON.stringify(notasExistentes));

    elementoCajita.remove();
}

document.addEventListener('DOMContentLoaded', mostrarNotasEnPantalla);
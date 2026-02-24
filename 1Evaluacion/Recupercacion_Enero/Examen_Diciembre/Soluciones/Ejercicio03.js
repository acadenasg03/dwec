/*
Crea el siguiente formulario y botones:
• Al pulsar “Agregar participante”, 
se guarda el nombre en un array y se muestra un mensaje
emergente que se ha agregado ese nombre al sorteo. 
Se debe controlar que el nombre no esté
vacío.
• El botón “Mostrar participantes” muestra en 
una ventana nueva la lista completa de nombres.
• El botón “Sortear ganador” elige un nombre aleatorio 
y muestra el ganador en una ventana nueva.
• Evita que el mismo nombre gane dos veces,
 eliminándolo del array de participantes cuando gane.
• Al pulsar “Reiniciar sorteo” vacía todos
 los arrays y reinicia la lista de participantes.
*/

let participantes = [];

function agregar() {
    let nombre = document.forms["f3"].nombre.value.trim(); //trim elimina espacios en blanco al inicio y al final
    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }
    participantes.push(nombre);
    alert(nombre + " ha sido agregado a la lista de participantes.");
}

function mostrar() {
    if (participantes.length === 0) { //No es necesario comprobar
        alert("No hay participantes.");
        return;
    }

    let ventana = window.open("", "", "width=400,height=400");
    ventana.document.write("<h2>Lista de Participantes</h2>");
    for (let i = 0; i < participantes.length; i++) {
        ventana.document.write((i + 1) + ". " + participantes[i] + "<br>");
    }
}

function sortear() {
    if (participantes.length === 0) { //No es necesario comprobar
        alert("No hay participantes para el sorteo.");
        return; 
    }

    let indice = Math.floor(Math.random() * participantes.length);
    let ganador = participantes[indice]; // Obtener el nombre del ganador

    participantes.splice(indice, 1); // Eliminar al ganador de la lista

    let ventana = window.open("", "", "width=300,height=200");
    ventana.document.write("<h2>GANADOR</h2><p>" + ganador + "</p>");
}

function reiniciar() {
    participantes = [];
    alert("Sorteo reiniciado");
}

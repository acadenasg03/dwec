/*
Implementa una página para un registro de usuarios que permita introducir un
nombre y un email, que habrá que validar. Guarda esos datos en arrays paralelos y
muestra la lista de usuarios en una ventana nueva.
*/

let nombres = [];
let emails = [];

function registrarUsuario() {

    let nombre = document.forms["formRegistro"].nombre.value.trim();
    let email = document.forms["formRegistro"].email.value.trim();

    let patronNombre = /[A-Za-z\s]/;
    let patronEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

    if (!patronNombre.test(nombre)) {
        alert("El nombre no es válido. Usa solo letras y espacios.");
        return;
    }

    if (!patronEmail.test(email)) {
        alert("El email no es válido.");
        return;
    }

    // Guardamos en arrays paralelos
    nombres.push(nombre);
    emails.push(email);

    /*
    Nota: Cada vez que se llama a window.open() con el mismo nombre de ventana,
    el contenido anterior se reemplaza, por lo que sólo
    se muestra el último dato introducido en el array.
    */
    let ventana = window.open("", "usuario", "width=500,height=400");

    ventana.document.write("<h2>Usuarios Registrados</h2>");
    ventana.document.write("<h4>Nombre - Email</h4><br>");

    for (let i = 0; i < nombres.length; i++) {
        ventana.document.write(nombres[i] + " - " + emails[i] + "<br>");
    }
    ventana.document.close();

}

/*
Crea un objeto persona con las propiedades:
Nombre.
Apellido.
Teléfono.
Año de nacimiento.
Edad, con una función que devuelva cuántos años tiene actualmente.
Se creará una persona donde el nombre, apellido, teléfono y año de nacimiento se pasarán como parámetros al constructor.
Crea una función mostrarPersona(p) que imprima todos sus datos por consola.

*/
function persona (nombre, apellido, telefono, añoNacimiento) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.telefono = telefono,
    this.añoNacimiento = añoNacimiento,
    this.edad = function() {
        let anioActual = new Date().getFullYear();
        return anioActual - this.añoNacimiento;
    }
};

function mostrarPersona(p) {
    console.log("Nombre: " + p.nombre);
    console.log("Apellido: " + p.apellido);
    console.log("Teléfono: " + p.telefono);
    console.log("Año de nacimiento: " + p.añoNacimiento);
    console.log("Edad: " + p.edad() + " años");
}

let persona1 = new persona("Juan", "Pérez", "927112233", 2000);
mostrarPersona(persona1);
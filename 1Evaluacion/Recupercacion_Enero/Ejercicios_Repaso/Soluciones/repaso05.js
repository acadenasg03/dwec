/*
5. Crea dos arrays paralelos: nombres y notas. Pide un nombre al usuario y muestra
su nota.
*/

let nombres = ["Marta", "Juan", "Mario", "Carlos", "Ana"];
let notas = [8, 7, 9, 6, 4];
let nombreUsuario = prompt("Introduce el nombre del alumno:");
let indice = nombres.indexOf(nombreUsuario);
if (indice !== -1) {
    console.log("La nota de " + nombreUsuario + " es: " + notas[indice]);
} else {
    console.error(nombreUsuario + " no está en la lista.");
}   
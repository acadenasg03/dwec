/*
Dados los arrays:
nombres = ["Ana", "Carlos", "María", "Javier", "Pedro"];
edades = [62, 3, 19, 40, 11]
Muestra todos los nombres y sus edades. 
Pide al usuario un nombre y muestra su edad. Si el nombre no se encuentra, muestra un mensaje de error.
Muestra el promedio de edades, la persona de mayor y de menor edad.
Muestra también los nombres de los mayores de edad. 
*/

nombres = ["Ana", "Carlos", "María", "Javier", "Pedro"];
edades = [62, 3, 19, 40, 11];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i] + " tiene " + edades[i] + " años.");
}

let nombreUsuario = prompt("Introduce un nombre para buscar su edad:");
let indice = nombres.indexOf(nombreUsuario);
if (indice !== -1) {
    console.log(nombreUsuario + " tiene " + edades[indice] + " años.");
} else {
    console.log("Error: Nombre no encontrado.");
}

let sumaEdades = 0;
let edadMaxima = edades[0];
let edadMinima = edades[0];
let nombresMayores = [];
for (let i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
    if (edades[i] > edadMaxima) {
        edadMaxima = edades[i];
    }
    if (edades[i] < edadMinima) {
        edadMinima = edades[i];
    }
    if (edades[i] >= 18) {
        nombresMayores.push(nombres[i]);
    }
}
let promedioEdades = sumaEdades / edades.length;
console.log("Promedio de edades: " + promedioEdades);
console.log("Edad máxima: " + edadMaxima);
console.log("Edad mínima: " + edadMinima);
console.log("Nombres de mayores de edad: " );
 for (let i = 0; i < nombresMayores.length; i++) {
    console.log("- " + nombresMayores[i]);
 }



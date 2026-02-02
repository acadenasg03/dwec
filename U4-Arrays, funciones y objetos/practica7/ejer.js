//Ejercicio 1----------------------------------------------------------------------------------------------------
/*let nombres = ["Ana", "Luis", "Marta","Pedro"],
    edades = [20,25,22,19],
    indiceMenorEdad = 0,
    edad = 100;
for(let i = 0; i < nombres.length;i++){
    if(edad > edades[i]){
        edad = edades[i];
        indiceMenorEdad = i;
    }
    console.log("Nombre: " + nombres[i] + " Edad: " + edades[i]);
}
console.log("La persona con menor edad es: " + nombres[indiceMenorEdad]);*/

//Ejercicio 2----------------------------------------------------------------------------------------------------
/*let productos = ["Manzana", "Pan", "Leche", "Queso"],
    precios = [1.2,0.8,1.5,2.3],
    precioTotal = 0,
    indiceProdMasCaro = 0,
    pMasCaro = 0;
for(let i = 0; i < productos.length;i++){
    precioTotal+=precios[i];
    if(pMasCaro < precios[i]){
        pMasCaro = precios[i];
        indiceProdMasCaro = i;
    }
    console.log("Producto: " + productos[i] + " Precio: " + precios[i]);
}
console.log("Precio total: " + precioTotal);
console.log("Producto mas caro: " + productos[indiceProdMasCaro]);*/

//Ejercicio 3----------------------------------------------------------------------------------------------------
/*
let alumnos= ["Lucia", "Carlos", "Sofia", "Javier"],
    notas = [7,5,9,4];
    nombre = prompt("Introduce el nombre de un alumno"),
    promedio = 0;
for(let i = 0; i < alumnos.length;i++){
    promedio+=notas[i];
    if(alumnos[i] == nombre){
        console.log("La nota del alumno " + nombre + " es " + notas[i]);
    }
    if(notas[i] >= 5){
        console.log("Alumno aprobado: " + alumnos[i] + " con nota: " + notas[i]);
    }
}
console.log("Nota promedio de los alumnos es: " + (promedio/alumnos.length));*/

//Ejercicio 4----------------------------------------------------------------------------------------------------
/*
let paises = ["España", "Francia", "Italia", "Portugal"],
    capitales = ["Madrid", "Paris", "Roma", "Lisboa"],
    pais = prompt("Introduce el nombre de un pais"),
    enc = false;
for(let i = 0; i < paises.length;i++){
    if(paises[i] == pais){
        enc = true;
        console.log("Pais: " +paises[i] + " Captial: " + capitales[i]);
    }
}
console.log(enc);
if(!enc){
    console.log("El pais " + pais + " no existe en el array");
}
*/

//Ejercicio 5----------------------------------------------------------------------------------------------------
/*
let productos = ["Pan","Leche","Queso","Miel","Harina"],
    precios = [1.1, 0.9, 2.5 , 3, 1,2],
    prod = prompt("Introduce un producto"),
    enc = false,
    indice = 0;

while(prod.toLowerCase() != "salir"){
    for(let i = 0; i < productos.length;i++){
        if(prod == productos[i]){
            enc = true;
            indice = i;
        }
    }
    if(!enc){
        console.log("Error, no se encuentra el producto");
    }
    else{
        console.log("Producto: " + productos[indice] + " Precio: " + precios[indice]);
    }
    prod = prompt("Introduce un producto");
}
*/
//Ejercicio 6----------------------------------------------------------------------------------------------------
/*
let empleados = ["Ana", "Luis", "Carmen", "Raúl"],
    sueldos = [1200, 1500, 1100, 1300],
    promedio = 0,
    emplMayorSueldo= [];
    console.log("Empleados:");
for(let i = 0; i < empleados.length;i++){
    console.log(empleados[i] + ": " + sueldos[i]);
    promedio+= sueldos[i];
    if(sueldos[i] > 1200){
        emplMayorSueldo.push(empleados[i]);
    }
    sueldos[i] += (0.10 * sueldos[i]);
}
console.log("Sueldo promedio: " + promedio/empleados.length + "\nSueldos de mas de 1200:");

for(let j = 0; j < emplMayorSueldo.length;j++){
    console.log(emplMayorSueldo[j]);
}
console.log("Aumento de sueldos:");
for(let k = 0;k < empleados.length;k++){
    console.log(empleados[k] + ": " + sueldos[k]);
}
*/

//Ejercicio 7----------------------------------------------------------------------------------------------------
/*
let libros = ["Don Quijote", "El Hobbit", "1984", "It", "El Señor de los Anillos"],
    autores = ["Cervantes", "Tolkien", "Orwell", "Stephen King", "Tolkien"],
    nombre = prompt("Introduce el nombre de un autor");

*/
//Ejercicio 8----------------------------------------------------------------------------------------------------
/*
let ciudades = ["Madrid", "París", "Roma", "Lisboa"],
    temperaturas = [28, 22, 30, 25],
    ciudadMasFria = "",
    ciudadMasCaliente = "",
    tempFrio = 100,
    tempCaliente = -100;
for(let i = 0;i < ciudades.length;i++){
    if(tempCaliente < temperaturas[i]){
        tempCaliente = temperaturas[i];
        ciudadMasCaliente = ciudades[i];
    }
    if(tempFrio > temperaturas[i]){
        tempFrio = temperaturas[i];
        ciudadMasFria = ciudades[i];
    }
}
console.log("Ciudad mas Fria: " + ciudadMasFria + "\nCiudad mas Caliente: " + ciudadMasCaliente);
 */

//Ejercicio 9----------------------------------------------------------------------------------------------------
/*
let equipos = ["Sevilla", "Atlético", "Real Madrid", "Barcelona"],
    puntos = [22, 25, 30, 28],
    clasificacion = [],
    multi = [];
for(let i = 0; i < equipos.length;i++){
    multi[i] = new Array(puntos[i],equipos[i]);
}
puntos.sort();
puntos.reverse();
console.log(puntos);
for(let j = 0;j < equipos.length;j++){
    for(let k = 0 ; k < equipos.length;k++){
        if(puntos[j] === multi[k][0]){
            clasificacion.push(multi[k][1]);
            console.log(clasificacion);
        }
    }
    
}
console.log(clasificacion);

*/
//Ejercicio 10----------------------------------------------------------------------------------------------------
/*
let productos = [],
    cantidades = [],
    precios = [],
    salir = false,
    opcion = "",
    nombre = "",
    precio = 0,
    cantidad = 0,
    valorTotal = 0;

while(!salir){
    opcion = prompt("Introduce una opcion:\n1.Añadir\n2.Mostrar\n3.Calcular Valor Total\nEliminar\nSalir");
    switch (opcion) {
        case "1":
            nombre = prompt("Nombre del producto");
            productos.push(nombre);
            cantidad = prompt("Cantidad del producto");
            cantidades.push(cantidad);
            precio = prompt("Precio del producto");
            precios.push(precio);

            break;
        case "2":
            for(let i = 0; i < productos.length;i++){
                console.log("Producto: " + productos[i] + " Cantidad: " + cantidades[i] + " Precio: " + precios[i]);
            }
            break;
        case "3":
            for(let j = 0; j < productos.length;j++){
                valorTotal+=(cantidades[j]*precios[j]);
            }
            console.log("Valor total del inventario: " + valorTotal);
            break;
        case "4":
            if (productos.length > 0) {
                nombre = prompt("Introduce el nombre del producto a eliminar");
                for (let index = 0; index < productos.length; index++) {
                    if(productos[index] == nombre){
                        productos.splice(index,1);
                        cantidades.splice(index,1);
                        precios.splice(index,1);
                    }
                }
            }
            break;
        case "5":
            salir = true;
            break;
    
        default:
            alert("Introduce un valor valido");
            break;
    }
}
*/
//Ejercicio 11----------------------------------------------------------------------------------------------------
/*
let matriz = [
    [2,4,6],
    [1,3,5],
    [7,8,9]
],
    sumaF1 = 0,
    sumaF2 = 0,
    sumaF3 = 0,
    sumaCol1 = 0,
    sumaCol2 = 0,
    sumaCol3 = 0;
for(let i = 0; i < matriz.length;i++){
    for(let j = 0; j < matriz[i].length;j++){
        if(i == 0){
            sumaF1+=matriz[i][j];
        }
        if(i == 1){
            sumaF2+=matriz[i][j];
        }
        if(i == 2){
            sumaF3+=matriz[i][j];
        }
        if(j == 0){
            sumaCol1+=matriz[i][j];
        }
        if(j == 1){
            sumaCol2+=matriz[i][j];
        }
        if(j == 2){
            sumaCol3+=matriz[i][j];
        }
    }
}
console.log("Suma Fila 1: " + sumaF1 + "\nSuma Fila 2: " + sumaF2 + "\nSuma Fila 3: " + sumaF3);
console.log("Suma Columna 1: " + sumaCol1 + "\nSuma Columna 2: " + sumaCol2 + "\nSuma Columna 3: " + sumaCol3);
*/
//Ejercicio 12----------------------------------------------------------------------------------------------------
/*
let matriz = [
    [5,8,3],
    [9,2,6],
    [4,7,1]
],
    nMayor = 0,
    posFila = 0,
    posCol = 0;

for(let i = 0; i < matriz.length;i++){
    for(let j = 0; j < matriz[i].length;j++){
        if(nMayor < matriz[i][j]){
            nMayor = matriz[i][j];
            posFila = i;
            posCol = j;
        }
    }
}
console.log("Numero Mayor: " + nMayor + "\nPosicion Fila: " + posFila + "\nPosicion Columna: " + posCol);
*/

//Ejercicio 13----------------------------------------------------------------------------------------------------
/*
let matriz = [
    [8,7,9],
    [6,5,7],
    [9,8,10]
],
    notaMedia1 = 0,
    notaMedia2 = 0,
    notaMedia3 = 0;
for(let i = 0; i < matriz.length;i++){
    for(let j = 0; j < matriz[i].length;j++){
        if(i == 0){
            notaMedia1+=matriz[i][j];
        }
        if(i == 1){
            notaMedia2+=matriz[i][j];
        }
        if(i == 2){
            notaMedia3+=matriz[i][j];
        }
    }
}
notaMedia1 = notaMedia1/matriz.length;
notaMedia2 = notaMedia2/matriz.length;
notaMedia3 = notaMedia3/matriz.length;
console.log("Nota media Alumno1: " + notaMedia1 + "\nNota media Alumno2: " + notaMedia2 + "\nNota media Alumno 3: " + notaMedia3);
*/
//Ejercicio 14----------------------------------------------------------------------------------------------------
/*
let cubo = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
],
    sumaTotal = 0;
for(let i = 0; i < cubo.length;i++){
    for(let j = 0; j < cubo[i].length;j++){
        for(let k = 0; k < cubo[i][j].length;k++){
            sumaTotal+=cubo[i][j][k];
        }
    }
}
console.log("Suma Total: " + sumaTotal);
*/

//Ejercicio 15----------------------------------------------------------------------------------------------------
let cubo = [
    [
        [4,12,1],
        [9,5,2]
    ],
    [
        [8,10,6],
        [7,11,3]
    ]
],
    num = prompt("Introduce un numero entre 1 y 12"),
    pos1 = 0,
    pos2 = 0,
    pos3 = 0;
for(let i = 0; i < cubo.length;i++){
    for(let j = 0; j < cubo[i].length;j++){
        for(let k = 0; k < cubo[i][j].length;k++){
            pos1 = i;
            pos2 = j;
            pos3 = k;
        }
    }
}
console.log("Posicion: " + pos1 + ", " + pos2 + ", " + pos3);
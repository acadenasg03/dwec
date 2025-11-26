/*//Ejercicio1
let cadena = prompt("Indica una cadena de texto");
for(let i = 0; i < cadena.length;i++){
    console.log("Posicion " + i + ": " + cadena[i]);
}

//Ejercicio2
let cad = "Desarrollo de Aplicaciones Web",
    contA = 0;
for(let j = 0;j < cad.length;j++){
    if(cad[j] == 'a'){
        contA++;
    }
}
console.log("En la cadena " + cad + " hay " + contA + " a");*/

//Ejercicio3

/*let nombres = ["Ana","Pedro","Marta","Pedro","Lucia","Javier"];
let palabra = " ";
let indice;
while(nombres.length != 0 && palabra != "salir"){
    palabra = prompt("Introduzca  un nombre");
    if(nombres.includes(palabra)){
        indice = nombres.indexOf(palabra);
        nombres.splice(indice,1);
        console.log(nombres);
    }
    /*for(let l = 0; l < nombres.length;l++){
        if(nombres[l] === palabra){
            nombres.splice(l,1);
        }
    }
    console.log(nombres);*/
/*}*/

/*//Ejercicio4
let lista = prompt("Introduce un lista de numeros"),
    sumaPar = 0,
    sumaImpar = 0,
    n = 0,
    v = lista.split(",");
console.log(v);
for(let i = 0;i < v.length;i++){
    n = parseInt(v[i]);
    if(n % 2 == 0){
        sumaPar+=n;
    }
    else{
        sumaImpar+=n;
    }
}
console.log("Suma Pares : " + sumaPar);
console.log("Suma Impares : " + sumaImpar);*/

/*//Ejercicio5
let lista2 = prompt("Introduce un lista de numeros"),
    mayor = 0,
    n2 = 0,
    v2 = lista2.split(",");
console.log(v2);
for(let j = 0;j < v2.length;j++){
    n2 = parseInt(v2[j]);
    if(mayor < n2){
        mayor = n2;
    }
}
console.log("El mayor numero de la lista es " + mayor);*/

/*//Ejercicio6
let cadena = prompt("Itroduce una cadena de texto"),
    letra = prompt("Introduce una letra"),
    cont= 0;
for(let i = 0; i < cadena.length;i++){
    if(cadena[i] == letra){
        cont++;
    }
}
console.log("En la cadena: " + cadena + " aparece la letra " + letra + " " + cont + " veces");*/

//Ejercicio7
/*let letra = prompt("Introduce una letra");
letra = letra.toLowerCase();
if(letra.includes("a") || letra.includes("e") || letra.includes("i") || letra.includes("o") || letra.includes("u")){
    console.log("Vocal: " + true);
}
else{
    console.log("Vocal: " + false);
}*/

/*//Ejercicio8

let cadena = prompt("introduzca una cadena");
cadena = cadena.split("");
cadena = cadena.join("-");
console.log(cadena);*/

/*//Ejercicio 9

let productos = {
    "pera": 1.5,
    "manzana": 3,
    "platano": 2,
},
        

    suma = 0;
console.log(productos);
for(let clave in productos){
    suma+=productos[clave];
}
console.log("Suma total: " + suma);*/

/*//Ejercicio10

let p = [
    ["monitor",150],
    ["teclado",30],
    ["raton",20]
],
    prod = prompt("Introduce el nombre de un producto");
for(let i = 0; i < p.length; i++){
    if(p[i][0] == prod){
        console.log("El precio de " + p[i][0] + " es: " + p[i][1]);
    }
}
*/

/*//Ejercicio11
let productos = {
    "martillo":3.5,
    "alicate":1.5,
    "destornillador":2.5
},
    suma = 0,
    cant = 0;
for(let clave in  productos){
    cant = parseInt(prompt("Cuantos " + clave + " quieres comprar"));
    suma += (cant * productos[clave]);
}
console.log("suma total: " + suma);*/

/*//Ejercicio 12
let notas = [4,8,4,9,3,7],
    nuevaNota = parseInt(prompt("Añade una nota nueva")),
    notaMedia = 0,
    menorNota = 11;
notas.push(nuevaNota);
console.log(notas);
for(let i = 0; i < notas.length; i++){
    if(notas[i] < menorNota){
        menorNota = notas[i];
    }
    notaMedia+=notas[i];
}
notaMedia /= notas.length;
for(let l = 0; l < notas.length;l++){
    if(notas[l] === menorNota){
        notas.splice(l,1);
    }
}
notas.splice(notas.indexOf(menorNota),1);
console.log("Nota Media: " + notaMedia.toFixed(2));
console.log(notas);*/

/*//Ejercicio13
let fecha = prompt("Pasame un fecha en este formato mm/dd/yyyy:"),
    fechaAmericana = new Date(fecha),
    fechaEuropea = fechaAmericana.toLocaleDateString('es-ES');
console.log("Fecha Americana: " + fechaAmericana);
console.log("Fecha Europea: " + fechaEuropea);
*/
/*//Ejercicio14
let nacimiento = new Date(prompt("Pasame tu fecha de nacimiento en este formato yyyy-mm-dd"));
console.log(nacimiento);
let fechaActual = new Date();
let diferencia = ((((((fechaActual.getTime() - nacimiento.getTime())/1000)/60)/60)/24)/365);//Falta ver si ya ha cumplido los años
console.log(" Tienes " + Math.floor(diferencia) + " años:" + diferencia);*/


/*//Ejercicio 15
let fecha = new Date(prompt("Pasame tu fecha de nacimiento en este formato yyyy-mm-dd"));
let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
console.log("El " + fecha.getDate() + " de " + (fecha.getMonth()+1) + " del " + fecha.getFullYear() + " fue " + dias[fecha.getDay()] + " " + fecha.getDay());*/

/*//Ejercicio 16
let f = new Date(prompt("Pasame tu fecha de nacimiento en este formato yyyy-mm-dd"));
let fechaA = new Date();
f.setFullYear(2025);
if(f.getTime() - fechaA.getTime() < 0){
    f.setFullYear(2026);
    let diff = Math.ceil((((((f.getTime() - fechaA.getTime())/1000)/60)/60)/24),3);
    console.log(diff);
}
else{
    let diff = Math.ceil((((((f.getTime() - fechaA.getTime())/1000)/60)/60)/24),3);
    console.log(diff);
}*/
let b = prompt("Escribe").toLowerCase();
console.log(b);






//Ejercicio 1
let nombre = "Alvaro";
const edad = 25;
var programar = true;

console.log("nombre: ",nombre);
console.log("edad: ",edad);
console.log("programar: ",programar);
console.log("Tipo var programar: ",typeof programar);

//Ejercicio 2
let a = 5;
let b = 6;
console.log("Valor de a: ", a);
console.log("Valor de b: ", b);
console.log("Suma: ",a + b);

//Ejercicio 3
let nom = "Alvaro";
let ape = "Cadenas";
console.log("Nombre completo: ",nom,ape);
console.log("Longitud nombre completo: ",(nom + ape).length)

//Ejercicio 4
let v = "50";
console.log("Tipo variable v: ",typeof v);
//v = parseInt(v);
v = Number(v);
console.log("Tipo variable v: ",typeof v);

//Ejercicio 5
let x = 9;
let y = 4;
console.log("Suma: ",x+y);
console.log("Resta: ",x-y);
console.log("Multiplicacion: ",x*y);
console.log("Division: ",x/y);

//Ejercicio 6
let q = 3,
    w = 6,
    e = 9;
let media = (q+w+e)/3;
console.log("Media aritmetica: ",media);

//Ejercicio 7
let d = 2.7;
console.log("Numero: ", d);
d = parseInt(d);
console.log("Numero: ", d);

//Ejercicio 8 
let r = "25";
r = parseInt(r) * 4;
console.log("Numero: ", r);

//Ejercicio 9
let t = 9;
let t2 = Boolean(t);
console.log("Numero: ",t,"\nValor boleano: ",t2);

//Ejercicio 10
let u = "10.8";
let u2 = parseFloat(u);
u2 = u2 - 5.5;
console.log("Resultado de la resta a ", u , ": ", u2);

//Ejercicio 11
let bool = false;
console.log("Tipo: ",typeof bool);

//Ejercicio 12
let p = 10;
p += 15;
console.log("Numero + 15: ",p);

//Ejercicio 13
let count = 10;
console.log("Count: ",count);
count++;
console.log("Incremento: ",count);
count-= 2;
console.log("Decremento: ",count);

//Ejercicio 14
let v1 = 20;
let v2 ="20";
if(v1 == v2){
    console.log("Igualdad debil");
}
if(v1 === v2){
    console.log("Igualdad fuerte");
}
else{
    console.log("No es igualdad fuerte");
}

//Ejercicio 15
let esAdulto = true,
    tieneTicket = false;
if( esAdulto && tieneTicket){
    console.log("A entrado en el if");
}
else{
    console.log("A entrado en el else");
}

//Ejercicio 16
let num = 27;
let mod = num % 3;
if(mod == 0){
    console.log("Divisible: ",true);
}
else{
    console.log("Divisible: ",false);
}



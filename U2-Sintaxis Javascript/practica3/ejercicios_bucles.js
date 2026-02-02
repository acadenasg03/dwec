/*
//Ejercicio 1
let numero = prompt("Pasame un numero");
numero = parseInt(numero);
if(numero % 2 == 0){
    alert("El numero pasado es par");
}
else{
    alert("El numero pasado es impar");
}

//Ejercicio 2
for(let i = 1; i < 11; i++){
    console.log(i);
}

//Ejercicio 3
let factorial = prompt("Pasame un numero para calcular su factorial");
factorial = parseInt(factorial);
let total = 1;
let j = 1;
while(j <= factorial){
    total = total * j;
    j++;
}
console.log("el factorial de " + factorial + " es: " + total);


//Ejercicio 4
let num = prompt("Pasame un numero para calcular su suma desde 1 hasta el");
num = parseInt(num);
let suma_total = 0;
for(let k = 1; k <= num;k++){
    suma_total = suma_total + k;
}
console.log("la suma total de " + num + " es: " + suma_total);

//Ejercicio 5
let n = prompt("Pasame un numero para mostrar su tabla de multiplicar");
n = parseInt(n);
for(let l = 1; l <= 10;l++){
    console.log(n + " x " + l + " = " + (n*l));
}
//Ejercicio 6
let palabra = prompt("Pasa una palabra para contar sus vocales");
let cont = 0
palabra = palabra.toLowerCase();
for(let m = 0; m < palabra.length;m++){
    if(palabra.charAt(m) == "a"){
        cont++;
    }
    if(palabra.charAt(m) == "e"){
        cont++;
    }
    if(palabra.charAt(m) == "i"){
        cont++;
    }
    if(palabra.charAt(m) == "o"){
        cont++;
    }
    if(palabra.charAt(m) == "u"){
        cont++;
    }
}
console.log("numero de vocales: " + cont);

//Ejercicio 7
let nota = prompt("Indica una nota entr 1 y 10");
nota = parseInt(nota);
switch(nota){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Suspenso");
        break;
    case 5:
    case 6:
        console.log("Aprobado");
        break;
    case 7:
    case 8:
        console.log("Notable");
        break;
    case 9:
    case 10:
        console.log("Sobresaliente");
        break;
        
}

//Ejercicio 8
let t = 100,
    z = 1,
    contador = 0;
while(z <= 100){
    contador+=z;
    z++;
}
console.log("La suma de los " + t + " primeros numeros es: " + contador);

//Ejercicio 9
let primo = prompt("Indica un numero para comprobar que es primo"),
    p = 0,
    ind = 1;
while(ind <= primo && p < 3){
    if(primo % ind == 0){
        p++;
    }
    ind++;
}
console.log(p);
if(p < 3){
    console.log("El numero " + primo + " es primo");
}
else{

    console.log("El numero " + primo + " NO es primo");
}

//Ejercicio 10
let nrand= Math.floor((Math.random() * 10) + 1),
    x = prompt("En que numero estoy pensando");
while(x != nrand){
    if(x > nrand){
        alert("El numero a adivinar es mas pequeño");
    }
    else{
        alert("El numero a adivinar es mas grande");
    }
    x = prompt("Vuelve a intentarlo");
}
alert("Enhorabuena lo has acertado");



//Ejercicio 11
let n = prompt("Pasame un numero y te lo devuelvo invertido");
//let niv = [];
//niv = n.split('');
//niv.reverse();
//n = niv.join('');
//alert(n);
let v = new Array(n.length);
console.log(n.length,"tamaño vector:",v.length);
for(let i = 0; i < n.length;i++){
    v[n.length - i] = n.charAt(i);
}
n = v.join('');
alert(n);



//Ejercicio 12
let inicio = prompt("Dime el numero del inicio"),
    fin = prompt("Dime el numero del fin"),
    par = 0,
    impar = 0;
for(let i = inicio; i <= fin;i++){
    if(i%2==0){
        par++;
    }
    else{
        impar++;
    }
}
console.log("Pares entre " + inicio + " y " + fin + " = " + par);
console.log("Impares entre " + inicio + " y " + fin + " = " + impar);

//Ejercicio 13
let horas = prompt("Cuantas horas has trabajado este mes");
horas = parseInt(horas);
alert("Tu sueldo mensual es: " + (horas * 10));

//Ejercicio 14
let radio = prompt("Dime el radio deun circulo para calcualr su area"),
    area = 0;
radio = parseFloat(radio);
area = Math.PI * Math.pow(radio,2);
alert("El area del circulo con radio " + radio + " es igual a " + area);


*/
//Ejercicio 15
for(let j = 1;j <= 50;j++){
    if(j % 3 == 0){
        console.log(j + " es divisible entre 3");
    }
    if(j % 5 == 0){
        console.log(j + " es divisible entre 5");
    }
    
}

//Ejercicio 16
let n1 = prompt("Dame un numero"),
    n2 = prompt("Dime otro numero"),
    op = prompt("Indica una de estas operaciones: +,-,*,/"),
    res = 0;
n1 = parseFloat(n1);
n2 = parseFloat(n2);
switch(op){
    case '+':
        res = n1 + n2;
        break;
    case '-':
        res = n1 - n2;
        break;
    case '*':
        res = n1 * n2;
        break;
    case '/':
        res = n1 / n2;
        break;
    default:
        res = 'a';
        break;
}
if(res != 'a')
    console.log("El resultado de hacer " + n1 + " " + op + " " + n2 + " = " + res );
else
    console.log("Operacion no valida");



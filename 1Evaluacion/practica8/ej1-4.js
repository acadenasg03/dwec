//Ejercicio1
/*
function calcularSalario(horas,tarifa){
    if(horas > 40){
        return (40*tarifa + ((horas-40)*(2*tarifa)));
    }
    else{
        return horas * tarifa;
    }
}


let horas = prompt("Introduce las horas que has trabajado esta semana"),
    tarifa = prompt("Que tarifa tienes");

console.log("Salario es: " + calcularSalario(horas,tarifa));
*/
//Ejercicio 2
/*
function validarPassword(pass){
    let mayus = false,
        numero = false,
        long8 = false;
    for(let i = 0; i < pass.length;i++){
        let car = pass[i];
        if(car >= 'A' && car<= 'Z'){
            mayus = true;
        }
        if(car >= '0' && car<= '9'){
            numero = true;
        }
    }
    if(pass.length >= 8){
        long8 = true;
    }
    if(mayus && numero && long8){
        return true;
    }
    else{
        return false;
    }

}

let password = prompt("Introduce una contraseña para validar");
console.log("Contraseña valida?" + validarPassword(password));
*/
//Ejercicio 3
/*
function generarPassword(longitud){
    let password = "";
    let caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789";
    for(let i = 0;i < longitud;i++){
        password += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    return password;
}
let long = prompt("Introduce la longitud");
console.log("Contraseña: " + generarPassword(long));
*/

//Ejercicio 4
function abrirVentana(){
    let nuevaVentana = window.open("","","width=400,height=300");
    nuevaVentana.document.write("<h2>Hola buenos dias</h2>");
    nuevaVentana.document.write("<p>Hora:" + new Date().toLocaleTimeString()+ "</p>");
    
}

function operaciones(n1,n2){
    let nuevaVentana = window.open("","","width=400,height=300"),
        suma = parseFloat(n1)+ parseFloat(n2),
        resta = parseFloat(n1)- parseFloat(n2),
        mult = parseFloat(n1) * parseFloat(n2);
        div = "";
    if(n2 == 0){
        div = "No se puede dividir entre 0";
    }
    else{
        div = parseFloat(n1) / parseFloat(n2);
    }
    nuevaVentana.document.write("<h2>Suma: " + suma +"</h2> ");
    nuevaVentana.document.write("<h2>Resta: " + resta +"</h2> ");
    nuevaVentana.document.write("<h2>Multiplicacion: " + mult +"</h2> ");
    nuevaVentana.document.write("<h2>Division: " + div +"</h2> ");
}

let n1 = prompt("Indica un numero"),
    n2 = prompt("Indica otro numero");

document.write("<h2>" + n1+ "</h2>");
document.write("<h2>" + n2+ "</h2>");
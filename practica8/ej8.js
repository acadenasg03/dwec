function calcular(){
    let ventana = window.open("","","width=600,height=600"),
        totalP1 = 0,
        totalP2 = 0,
        totalP3 = 0,
        total = 0;
    for(let j = 0; j < 3;j++){
        if(j == 0){
            totalP1 = precio[j] * cantidad[j];
            total+=totalP1;
            ventana.document.write("Total de " + productos[j] + ":" + totalP1);
            if(cantidad[j] > 10){
                ventana.document.write("    Descuento aplicable" + "<br>");
            }
            else{
                ventana.document.write("<br>");
            }
        }
        if(j == 1){
            totalP2 = precio[j] * cantidad[j];
            total+=totalP2;
            ventana.document.write("Total de " + productos[j] + ":" + totalP2);
            if(cantidad[j] > 10){
                ventana.document.write("    Descuento aplicable" + "<br>");
            }
            else{
                ventana.document.write("<br>");
            }
        }
        if(j == 2){
            totalP3 = precio[j] * cantidad[j];
            total+=totalP3;
            ventana.document.write("Total de " + productos[j] + ":" + totalP3);
            if(cantidad[j] > 10){
                ventana.document.write("    Descuento aplicable" + "<br>");
            }
            else{
                ventana.document.write("<br>");
            }
        }
    }
    ventana.document.write("Total compra: " + total);

}

let productos = [],
    precio = [],
    cantidad = [];

document.write("Lista de productos:<br>");

for(let i = 0; i < 3;i++){
    let p = prompt("Introduce un producto");
    productos.push(p);
    document.write("Producto: " + p);
    let pr = prompt("Introduce su precio");
    precio.push(pr);
    document.write("    Precio: " + pr);
    let c = prompt("Introduce la cantidad");
    cantidad.push(c);
    document.write("    Cantidad:" + c + "<br>");
}




function mostrarLista(lista){
    let nuevaVentana = window.open("","","width=400,height=300");
    nuevaVentana.document.write("<ul>");
    for(let i = 0; i < 3;i++){
        nuevaVentana.document.write("<li>"+ lista[i] + "</li>")
    }
    nuevaVentana.document.write("</ul>");

}

let p = "",
    lista=[];
    document.write("<ul>");
for(let i = 0; i < 3;i++){
    p = prompt("introduce un producto");
    lista.push(p);
    document.write("<li>"+ p + "</li>");
}
document.write("</ul>");



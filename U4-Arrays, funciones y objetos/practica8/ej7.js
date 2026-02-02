function nuevoNombre(lista){
    let nom = prompt("Introduce un nombre");
    lista.push(nom);
    alert("Nombre añadido");

}

function eliminarNombre(lista){
    let nomb = prompt("Introduce el nombre a eliminar");
    for (let i = 0; i < lista.length;i++){
        if(lista[i] == nomb){
            lista.splice(i,1);
        }
    }
    alert("Nombre eliminado");
}

function mostrarLista(lista){
    let nuevaVentana = window.open("","","width=400,height=300");
    for(let j = 0; j < lista.length;j++){
        nuevaVentana.document.write("<p>" + lista[j] + "</p>");
    }
}

let lista = [];
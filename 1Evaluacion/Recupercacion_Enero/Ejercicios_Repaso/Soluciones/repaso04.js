/*
4. Crea un constructor Coche(marca, combustible) y un array de tres coches. Crea
una función para listar todos los coches en una nueva ventana
*/
function Coche(marca, combustible) {
    this.marca = marca;
    this.combustible = combustible;
}
let coches = [
    new Coche("Toyota", "Gasolina"),
    new Coche("Tesla", "Eléctrico"),
    new Coche("Renault", "Diésel")
];
function listarCoches() {
    let ventana = window.open("", "Listado de Coches", "width=400,height=300");
    ventana.document.write("<h2>Listado de Coches</h2>");
    ventana.document.write("<ul>");
    for (let i = 0; i < coches.length; i++) {
        ventana.document.write("<li>Marca: " + coches[i].marca + ", Combustible: " + coches[i].combustible + "</li>");
    }
    ventana.document.write("</ul>");
}  
listarCoches();
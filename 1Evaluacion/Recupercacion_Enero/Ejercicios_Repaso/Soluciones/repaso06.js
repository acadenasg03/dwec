/*
Pide al usuario cuántos números aleatorios quiere generar. Muestra el array de
números generados en una ventana nueva.

*/

let cantidad = parseInt(prompt("¿Cuántos números aleatorios quieres generar?"));
if (isNaN(cantidad) || cantidad <= 0) {
    console.error("Error, introduce un número válido mayor que 0.");
} else {
    let numerosAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * 100) + 1; // Números entre 1 y 100
        numerosAleatorios.push(numero);
    }
    window.open().document.write(numerosAleatorios.join(", "));
}

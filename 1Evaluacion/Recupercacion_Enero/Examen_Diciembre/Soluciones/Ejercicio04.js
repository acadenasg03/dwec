/*
Enunciado: crea un formulario para la solicitud de alquiler de vehículos. El formulario debe incluir los siguientes campos:
Nombre (solo letras y espacios).
DNI (8 números y una letra).
Tipo de vehículo (coche, moto, furgoneta) con sus respectivos precios por día (coche: 50€, moto: 30€, furgoneta: 80€).
Duración del alquiler (1 día, 2 días, 3 días, una semana).
Extras (GPS: 5€/día, silla infantil: 3€/día, seguro a todo riesgo: 10€/día).

Al enviar el formulario, se debe validar que todos los campos estén correctamente rellenados. 
Si hay algún error, se mostrará un mensaje de alerta indicando el problema. 
Si todo es correcto, se abrirá una nueva ventana que muestre un resumen de la solicitud, 
incluyendo el nombre, DNI, tipo de vehículo, duración, extras seleccionados 
y el precio total del alquiler calculado en función de los días y los extras.
*/

function validarFormulario() {

    let form = document.forms["formAlquiler"];

    let nombre = form.nombre.value.trim();
    let patronNombre = /[A-Za-z\s]/;

    if (!patronNombre.test(nombre) || nombre === "") {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    let dni = form.dni.value.trim();
    let patronDNI = /[0-9]{8}[A-Za-z]/;

    if (!patronDNI.test(dni)) {
        alert("El DNI debe tener 8 números y una letra.");
        return;
    }

    let vehiculos = form.vehiculo;
    let tipoVehiculo = "";
    let precioVehiculo = 0;

    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].checked) {
            tipoVehiculo = vehiculos[i].value; //Con value se obtiene el tipo de vehículo
            precioVehiculo = parseFloat(vehiculos[i].dataset.precio); //Forma de obtener el precio desde el atributo data-precio
            break;
        }
    }

    if (tipoVehiculo === "") {
        alert("Debe seleccionar un tipo de vehículo.");
        return;
    }

    let duracion = form.duracion.value;
    if (duracion === "") {
        alert("Debe seleccionar la duración del alquiler.");
        return;
    }

    let dias = parseInt(duracion);
    let extras = form.extra; // Obtener los checkboxes de los extras
    let extrasSeleccionados = []; // Array para almacenar los extras seleccionados
    let precioExtrasDia = 0;

    for (let i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
            extrasSeleccionados.push(extras[i].value);

            if (extras[i].value === "GPS") {
                precioExtrasDia += 5;
            }
            if (extras[i].value === "Silla infantil") {
                precioExtrasDia += 3;
            }
            if (extras[i].value === "Seguro a todo riesgo") {
                precioExtrasDia += 10;
            }
        }
    }

    if (extrasSeleccionados.length === 0){
        extrasSeleccionados.push("Ninguno");
    } 

    let precioVehiculoTotal = precioVehiculo * dias;
    let precioExtrasTotal = precioExtrasDia * dias;
    let precioFinal = precioVehiculoTotal + precioExtrasTotal;

    let ventana = window.open("", "Resumen", "width=400,height=500");

    ventana.document.write("<h2>Resumen de la solicitud</h2>");
    ventana.document.write("<p><strong>Nombre:</strong> " + nombre + "</p>");
    ventana.document.write("<p><strong>DNI:</strong> " + dni + "</p>");
    ventana.document.write("<p><strong>Vehículo:</strong> " + tipoVehiculo + "</p>");
    ventana.document.write("<p><strong>Precio vehículo/día:</strong> " + precioVehiculo + " €</p>");
    ventana.document.write("<p><strong>Días:</strong> " + dias + "</p>");
    ventana.document.write("<p><strong>Extras:</strong> " + extrasSeleccionados.join(", ") + "</p>");
    ventana.document.write("<p><strong>Precio extras/día:</strong> " + precioExtrasDia + " €</p>");
    ventana.document.write("<p><strong>Precio total del vehículo:</strong> " + precioVehiculoTotal + " €</p>");
    ventana.document.write("<p><strong>Total extras:</strong> " + precioExtrasTotal + " €</p>");
    ventana.document.write("<h3>Precio final: " + precioFinal + " €</h3>");
}

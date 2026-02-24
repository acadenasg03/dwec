function mostrarColor(color) {

  
  let nuevaVentana = window.open("", "", "width=300,height=200");
  nuevaVentana.document.write("<body style='background-color:" + color + ";'>");//inicio del body y cambio de color de fondo
 
  let colorEspañol; //Traducir el color al español
  if (color.toLowerCase() === "red") {
    colorEspañol = "rojo";
  }
  else if (color.toLowerCase() === "green") {
    colorEspañol = "verde";
  }
  else if (color.toLowerCase() === "blue") {
    colorEspañol = "azul";
  }
  nuevaVentana.document.write("<h2>Color seleccionado: " + colorEspañol + " </h2>");

  nuevaVentana.document.write("</body>");//cierre del body
}
function cambiarColor(color){
      let ventana = window.open("","", "width=400,height=500");
      ventana.document.write("<body style='background-color:" + color + ";'>");
      ventana.document.write("<h2>Color seleccionado: " + color + " </h2>");
      ventana.document.write("</body>");
}
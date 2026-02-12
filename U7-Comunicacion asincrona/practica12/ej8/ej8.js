function cargarTexto(archivo){
      fetch(archivo)
      .then(res => res.text())
      .then(datos => document.getElementById("texto").innerHTML = datos);
}
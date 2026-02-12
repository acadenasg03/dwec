
fetch("mensaje.txt")
.then(res => res.text())
.then(datos => document.getElementById("texto").innerHTML = datos);
      



fetch("usuario.json")
.then(res=> res.json())
.then(usuario => {
      document.getElementById("texto").innerHTML = "Nombre: " + usuario.nombre + "<br>Edad: " + usuario.edad;
})
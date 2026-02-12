function cargarArchivo(archivo){
      let ar;
      if (archivo == "txt") {
            fetch("mensaje.txt")
            .then(res =>res.text())
            .then(datos => document.getElementById("texto").innerHTML = datos);
      }
      if(archivo == "json"){
            fetch("usuario.json")
            .then(res =>res.json())
            .then(usuario => document.getElementById("texto").innerHTML = "Nombre: " + usuario.nombre + "<br>Edad: " + usuario.edad);
      }
      if(archivo == "html"){
            let xhr = new XMLHttpRequest();
            xhr.open('GET',"p_servicios.html",true);
            xhr.onreadystatechange = function(){
                  if(xhr.readyState == 4 && xhr.status == 200){
                        document.getElementById("texto").innerHTML = xhr.responseText;
                  }
            };
            xhr.send();
      }
}
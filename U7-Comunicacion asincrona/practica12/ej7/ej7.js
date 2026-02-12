fetch("archivo.txt")
.then(respuesta => {
      if (!respuesta.ok) { //respuesta.ok comprueba si todo ha ido bien
            throw new Error("Error al cargar los datos"); //throw lanza un error
      }
      return respuesta.json();
})
.catch(error => console.log(error)); //catch()
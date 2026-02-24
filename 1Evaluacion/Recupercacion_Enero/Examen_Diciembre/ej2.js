function Persona(nombre,apellido,telefono,anio_nac){
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.anio_nac = anio_nac;
      this.edad = new Date().getFullYear() - parseInt(anio_nac);
}

function mostrarPersona(p){
      console.log("Nombre: " + p.nombre);
      console.log("Apellido: " + p.apellido);
      console.log("Teléfono: " + p.telefono);
      console.log("Año de nacimiento: " + p.anio_nac);
      console.log("Edad: " + p.edad + " años");
}

let p = new Persona("alvaro","cadenas",345678456,2000);
mostrarPersona(p);
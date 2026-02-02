function Persona(nombre,edad,profesion){
    this.nombre = nombre;
    this.edad = edad;
    this.profesion= profesion;
}

let c1 = new Persona("Alvaro",25,"informatico"),
    c2 = new Persona("Juan",56,"juez");
console.log(c1);
console.log(c2);

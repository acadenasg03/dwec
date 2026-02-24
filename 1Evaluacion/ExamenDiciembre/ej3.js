let participantes= [];

function agregarParticipante(){
      let f = document.getElementById("form");
      participantes.push(f.nombre.value);
}

function mostrarParticipantes(){
      console.log(participantes);
}
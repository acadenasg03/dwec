
function crearCookie(){
      let fecha = new Date();
      fecha.setDate(fecha.getDate() + 30);
      document.cookie ="visitas=0;expires=" + fecha.toUTCString() + ";path=/;";
      console.log("creado");
}

let cookies = document.cookie.split(";");
let bandera = false;
let visitas = 0;
for (let i = 0; i < cookies.length; i++) {
      let v = cookies[i].split("=");
      if(v[0] == "visitas"){
            bandera = true;
            visitas = parseInt(v[1]);
      }      
}
if(!bandera){
      crearCookie();
      document.getElementById("texto").innerHTML = "Es la primera vex que visitas esta web";
}
else{
      visitas++;
      let fecha = new Date();
      fecha.setDate(fecha.getDate() + 30);
      document.cookie ="visitas=" + visitas +";expires=" + fecha.toUTCString() + ";path=/;";
      document.getElementById("texto").innerHTML = "Has visitado " + visitas + " veces esta web";
}

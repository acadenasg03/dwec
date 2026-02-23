function crearCookie(){
      let fecha = new Date();
      fecha.setDate(fecha.getDate() + 30);
      let fActual = new Date().toISOString();
      //fActual.setDate(fActual.getTime());
      document.cookie ="fecha="+fActual+";expires=" + fecha.toUTCString() + ";path=/;";
}

function resetear(){
      document.getElementById("texto").innerHTML = "Visita reseteada. Recarga la página";
      document.cookie ="fecha=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
}

let cookies = document.cookie.split(";");
let bandera = false;
let f;
for (let i = 0; i < cookies.length; i++) {
      let v = cookies[i].split("=");
      if(v[0].trim() == "fecha"){
            bandera = true;
            f = v[1];
      }      
}
if(bandera){
      let faux = new Date(f);
      document.getElementById("texto").innerHTML = "Tu última visita fue el: "+ faux.toLocaleString();
      crearCookie();
}
else{
      crearCookie();
}
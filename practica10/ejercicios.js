function contraseñaSegura(f){
      let patron1 = /[A-Za-z0-9]{8}$/,
            pMayus = /[A-Z]$/,
            pMinus = /[a-z]$/,
            pNum = /[0-9]$/;
      if(patron1.test(f.ps.value)){
            if(pMayus.test(f.ps.value) && pMinus.test(f.ps.value) && pNum.test(f.ps.value)){
                  document.write("Contraseña segura");
            }
            else{
                  document.write("ERROR:La contraseña debe contener una mayuscula, una minuscula y un numero");
            }
      }
      else{
            document.write("ERROR:contraseña menor de 8 caracteres");
      }
}

function contarCaracteres(f){
      document.write("Numero de caracteres:" + f.txt.value.length + "<br>");
      let contL = 0,
            contN = 0,
            pLetras = /[A-Za-z]$/,
            pNum = /[0-9]$/;
      for(let i = 0;i < f.txt.value.length;i++){
            if(pLetras.test(f.txt.value[i])){
                  contL++;
            }
            if(pNum.test(f.txt.value[i])){
                  contN++;
            }
      }
      document.write("Numero de letras:" + contL + "<br>");
      document.write("Numero de numeros:" + contN);
}

function darDeAlta(f){
      let resultado = true,
      pNombre = /[A-Za-z ]+$/,
      pEdad = /^[1-9][0-9]$/,
      pTelefono = /^[1-9][0-9]{8}$/,
      pCorreo = /^[A-Za-z]+@[a-z]+\.[a-z]{2,}$/;
      if(!pNombre.test(f.nombre.value)){
            resultado = false;
      }
      if(!pEdad.test(f.edad.value)){
            resultado = false;
      }
      if(!pTelefono.test(f.telefono.value)){
            resultado = false;
      }
      if(!pCorreo.test(f.correo.value)){
            resultado = false;
      }
      if(f.mensaje.value == ""){
            resultado = false;
      }
      if(resultado){
            let nuevaVentana = window.open("","","width=600,height=600");
            nuevaVentana.document.write("Nombre: " + f.nombre.value + "<br>"
            + "Edad: " + f.edad.value + "<br>" + "Telefono: " + f.telefono.value + "<br>"
            + "Correo: " + f.correo.value + "<br>" + "Asunto: " + f.asunto.value + "<br>"
            + "Mensaje: " + f.mensaje.value);
      }
      else{
            alert("Error");
      }

}

function validarCoche(f){
      let pMatricula = /^[0-9]{4}-[A-Z]{3}$/,
            pMarca = /^[A-Z][A-Za-z]+$/,
            pModelo = /^[A-Z][A-Za-z0-9]+$/,
            pAnoMat = /^[12][0-9]{3}$/,
            res = true;
      if(!pMatricula.test(f.matricula.value)){
            res = false;
      }
      if(!pMarca.test(f.marca.value)){
            res = false;
      }
      if(!pModelo.test(f.modelo.value)){
            res = false;
      }
      if(!pAnoMat.test(f.anoMat.value)){
            res = false;
      }
      if (res) {
            let nuevaVentana = window.open("","","width=600,height=600");
            nuevaVentana.document.write("Matricula: " + f.matricula.value + "<br>"
            + "Marca: " + f.marca.value + "<br>" + "Modelo: " + f.modelo.value + "<br>"
            + "Año Matriculacion: " + f.anoMat.value);
      }
      else{
            alert("Error");
      }
}

function calcularPrecio(f){
      let   nuevaVentana = window.open("","","width=600,height=600"),
            precioFinal = 0,
            descuento = 0,
            precioIVA = 0;
      descuento = parseFloat(f.precio.value) * parseFloat(f.descuento.value)/100;
      precioIVA = parseFloat(f.precio.value) + (parseFloat(f.precio.value) * parseFloat(f.iva.value)/100)
      precioFinal = precioIVA - descuento;
      nuevaVentana.document.write("Precio final: " + precioFinal);
}
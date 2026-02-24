function validarFormulario() {
  let nombre = document.forms["formrepaso"].nombre.value.trim();
  let email = document.forms["formrepaso"].email.value.trim();
  let edad = document.forms["formrepaso"].edad.value.trim();
  let sexo = document.forms["formrepaso"].sexo.value;
  let curso = document.forms["formrepaso"].curso.value;
  let intereses = document.forms["formrepaso"].interes;
  let comentarios = document.forms["formrepaso"].comentarios.value.trim();

  let patronNombre = /[A-Za-z\s]/;
  let patronEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

  if (!patronNombre.test(nombre)) {
    alert("Error. Introduce un nombre válido (solo letras y espacios).");
    return false; // Detiene el envío del formulario
  }

  if (!patronEmail.test(email)) {
    alert("Error.Introduce un correo electrónico válido.");
    return false; 
  }

  if (edad < 18 || edad > 99) {
    alert("Error. Introduce una edad válida entre 18 y 99 años.");
    return false;
  }

  if (sexo === "") {
    alert("Error. Selecciona un sexo.");
    return false; 
  }

  if (curso === "") {
    alert("Error. Selecciona un curso del listado.");
    return false; 
  }

  let marcado = false;
  for (let i = 0; i < intereses.length; i++) {
    if (intereses[i].checked) {
      marcado = true;
      break; // Sale del bucle si encuentra al menos uno marcado
    }
  }
  if (!marcado) {
    alert("Error. Selecciona al menos un área de interés.");
    return false;
  }

  if (comentarios === "") {
    alert("Error. Por favor, escribe un comentario o motivo de tu interés.");
    return false;
  }

    let ventana = window.open("", "Resumen", "width=400,height=500");
    ventana.document.write("<h2>Resumen de la solicitud</h2>");
    ventana.document.write("<p><strong>Nombre:</strong> " + nombre + "</p>");
    ventana.document.write("<p><strong>Email:</strong> " + email + "</p>");
    ventana.document.write("<p><strong>Edad:</strong> " + edad + "</p>");
    ventana.document.write("<p><strong>Sexo:</strong> " + sexo + "</p>");
    ventana.document.write("<p><strong>Curso:</strong> " + curso + "</p>");
    ventana.document.write("<p><strong>Intereses: </strong> " );
    for (let i = 0; i < intereses.length; i++) {
     if (intereses[i].checked) {
      ventana.document.write(intereses[i].value + " ");
     }
    }
    ventana.document.write("</p>");
    ventana.document.write("<p><strong>Comentarios:</strong> " + comentarios + "</p>");

}

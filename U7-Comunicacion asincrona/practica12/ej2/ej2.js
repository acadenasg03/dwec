function cargarPagina(pagina){
      let xhr = new XMLHttpRequest();
      xhr.open('GET',pagina,true);
      xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                  document.getElementById("caja").innerHTML = xhr.responseText;
            }
      };
      xhr.send();
}

function cargarLista(archivo){
      let lista,
            li;
      if(archivo != ""){
            
            fetch(archivo)
            .then(res => res.json())
            .then(elementos => {
                  lista = document.getElementById("lista");
                  lista.innerHTML = "";
                  elementos.forEach(el => {
                        li = document.createElement("li");
                        li.innerHTML = el;
                        lista.appendChild(li);
                  });
            })
      }
}
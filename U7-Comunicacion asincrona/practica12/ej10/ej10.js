let lista = document.getElementById("lista");
let li = 0;
fetch("productos.json")
.then(res => res.json())
.then(productos => {
      productos.forEach(p => {
            if(p.precio >= 20){
                  li = document.createElement("li");
                  li.innerHTML = "Producto: " + p.nombre + "      Precio: " + p.precio;
                  lista.appendChild(li);
            }
      });
})
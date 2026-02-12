let total = 0;
fetch("precios.json")
.then(res => res.json())
.then(precios => {
      precios.forEach(precio => {
            total+= parseInt(precio);
      });
      document.getElementById("total").innerHTML ="Total: " + total + "€";
})
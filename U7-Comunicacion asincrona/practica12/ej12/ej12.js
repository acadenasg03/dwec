//1. Mostrar Todos
//2. Mazda
//3. Azules
//4. Eléctricos
//5. Precio Ascendente
//6. Precio Descendente
//7. Precio 20.000 a 30.000
//8.Toyota Híbridos
//


function cargarDatos(n){
      let lista = document.getElementById("lista"),
            li,
            coches = [];
      lista.innerHTML = "";
      fetch("coches.json")
      .then(res => res.json())
      .then(datos => {
            coches = datos.slice(0,datos.length);
            if(n==5){
                  coches.sort((a,b) => a.precio - b.precio);
            }
            if(n==6){
                  coches.sort((a,b) => b.precio - a.precio);
            }
            if(n == 5 || n == 6){
                  for (let i = 0; i < coches.length; i++) {
                        pintarCoche(coches[i]);           
                  }
                  return;
            }
            datos.forEach(coche => {
                  if(n ==1){
                        pintarCoche(coche);
                  }
                  if(n==2 && coche.marca == "Mazda"){
                        pintarCoche(coche);
                  }
                  if(n==3 && coche.color == "Azul"){
                        pintarCoche(coche);
                  }
                  if(n==4 && coche.tipoMotor == "Eléctrico"){
                        pintarCoche(coche);
                  }
                  // if(n==5){
                  //       coches.push(coche);
                  //       coches.sort((a,b) => a.precio - b.precio);
                  // }
                  // if(n==6){
                  //       coches.push(coche);
                  //       coches.sort((a,b) => b.precio - a.precio);
                  // }
                  if(n==7 && (coche.precio >= 20000 && coche.precio <= 30000)){
                        pintarCoche(coche);
                  }
                  if(n==8 && (coche.tipoMotor == "Híbrido" && coche.marca == "Toyota")){
                        pintarCoche(coche);
                  }
            })
            // if(n == 5 || n == 6){
            //       for (let i = 0; i < coches.length; i++) {
            //             pintarCoche(coches[i]);
                        
            //       }
            // }
      })
}

function pintarCoche(coche){
      li = document.createElement("li");
      li.innerHTML = coche.marca + "/" + coche.modelo + "/"
      + coche.color + "/" + coche.tipoMotor
      + "/" + coche.precio + "€/" + coche.consumo + "l/"
      + coche.kms + "kms";
      lista.appendChild(li);
}
function cargarPokemon(){
      let nombre = document.getElementById("nombre").value;
      let div = document.getElementById("container");
      div.innerHTML = "";
      fetch("https://pokeapi.co/api/v2/pokemon/" + nombre.toLowerCase())
      .then(res => res.json())
      .then(datos => {
            let titulo = document.createElement("h2")
            titulo.innerHTML = nombre.toUpperCase() + "#" + datos.order;
            div.appendChild(titulo);
            let img = document.createElement("img");
            img.setAttribute("src",datos.sprites.front_default);
            img.setAttribute("alt","foto pokemon");
            div.appendChild(img);
            let altura = document.createElement("p");
            altura.innerHTML = "Altura: " + datos.height;
            div.appendChild(altura);
            let peso = document.createElement("p");
            peso.innerHTML = "Peso: " + datos.weight;
            div.appendChild(peso);
            let stats = document.createElement("h3")
            stats.innerHTML = "Estadicticas";
            div.appendChild(stats);
            let hp = document.createElement("p")
            hp.innerHTML = "HP:" + datos.stats[0].base_stat;
            div.appendChild(hp);
            let ataque = document.createElement("p")
            ataque.innerHTML = "Ataque:" + datos.stats[1].base_stat;
            div.appendChild(ataque);
            let defensa = document.createElement("p")
            defensa.innerHTML = "Defensa:" + datos.stats[2].base_stat;
            div.appendChild(defensa);

      })

}

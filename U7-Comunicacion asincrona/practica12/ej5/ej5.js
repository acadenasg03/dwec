
let lista,
      li;
fetch("nombres.json")
.then(res => res.json())
.then(users => {
      lista = document.getElementById("lista");
      users.forEach(usuario => {
            li = document.createElement("li");
            li.innerHTML = usuario;
            lista.appendChild(li);
      });
})
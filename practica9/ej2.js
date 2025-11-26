function repostar(litros){
    this.combustible(litros);
    console.log("Se ha repostado " + litros + " litros");
}

function conducir(distancia){
    let consume = (distancia*0.1);
    if(this.cantidad < consume){
        console.log("Error combustible insufieciente para esa distancia");
    }
    else{
        this.cantidad -= consume; 
    }
}

function Coche(marca,combustible,cantidad){
    this.marca = marca;
    this.combustible = combustible;
    this.cantidad = cantidad;
    this.repostar = repostar;
    this.conducir = conducir
}



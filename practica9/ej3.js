function reservar(){
    console.log(Viaje);
    this.plazas--;
    console.log(Viaje);
}

function cancelar(){
    console.log(Viaje);
    this.plazas++;
    console.log(Viaje);
}


function Viaje(destino,precio, plazas){
    this.destino = destino;
    this.precio = precio;    
    this.plazas = plazas;
    this.reservar = reservar;
    this.cancelar = cancelar;
}
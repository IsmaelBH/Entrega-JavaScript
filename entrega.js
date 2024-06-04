
function datosPrestamo(monto, cuotas, es_socio) {


    let montoFinal = monto + calcularInteres(monto, cuotas);
    let descuento = descuentosSocio(es_socio, monto);

    console.log("<----------Datos del Prestamo----------->");
    console.log("Monto: ", monto);
    console.log("Cuotas: ", cuotas);
    console.log("Socio: ", es_socio);
    console.log("Descuento Socio: ", descuento);
    console.log("Monto Final: ", montoFinal);
    console.log("Monto Final + Descuento: ", montoFinal - descuento);

}

function descuentosSocio(es_socio, monto) {

    let descuento = 0;

    if (es_socio == "SI") {
        descuento = monto * 0.10;
        return descuento
    }

    else {
        return descuento
    }

}


function calcularInteres(monto, cuotas) {

    let interes = 0;

    if (cuotas == 1) {
        return interes
    }

    else if (cuotas == 3) {
        interes = monto * 0.20
        return interes
    }

    else if (cuotas == 6) {
        interes = monto * 0.35
        return interes
    }

    else if (cuotas == 9) {
        interes = monto * 0.55
        return interes
    }

    else if (cuotas == 12) {
        interes = monto * 0.75
        return interes
    }
}



console.log("Bienvenido/a a su prestamo de confianza!")

let monto = "";

while (monto != "SALIR") {

    monto = prompt("Ingrese el monto que quiere solicitar o SALIR para finalizar");

    if (monto != "SALIR") {

        monto = parseFloat(monto);
        let cuotas = prompt("Ingrese la cantidad de cuotas: 1,3,6,9,12");
        let es_socio = prompt("Es socio? SI | NO");
        datosPrestamo(monto, cuotas, es_socio);
    }

}


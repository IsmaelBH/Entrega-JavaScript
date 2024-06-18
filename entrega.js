
class Prestamo {
    constructor(monto, cuotas, esSocio) {
        this.monto = monto;
        this.cuotas = cuotas;
        this.esSocio = esSocio;
        this.interes = calcularInteres(monto, cuotas);
        this.descuento = descuentosSocio(esSocio, monto);
        this.montoFinal = monto + this.interes;
    }

    calcularMontoFinalConDescuento() {
        return this.montoFinal - this.descuento;
    }
}

let prestamos = [];

function datosPrestamo(monto, cuotas, esSocio) {
    const prestamo = new Prestamo(monto, cuotas, esSocio);
    prestamos.push(prestamo);

    console.log("<----------Datos del Prestamo----------->");
    console.log("Monto: ", prestamo.monto);
    console.log("Cuotas: ", prestamo.cuotas);
    console.log("Socio: ", prestamo.esSocio);
    console.log("Descuento Socio: ", prestamo.descuento);
    console.log("Monto Final: ", prestamo.montoFinal);
    console.log("Monto Final + Descuento: ", prestamo.calcularMontoFinalConDescuento());
}

function descuentosSocio(esSocio, monto) {
    let descuento = 0;

    if (esSocio === "SI") {
        descuento = monto * 0.10;
    }

    return descuento;
}

function calcularInteres(monto, cuotas) {
    let interes = 0;

    if (cuotas === 1) {
        return interes;
    } else if (cuotas === 3) {
        interes = monto * 0.20;
    } else if (cuotas === 6) {
        interes = monto * 0.35;
    } else if (cuotas === 9) {
        interes = monto * 0.55;
    } else if (cuotas === 12) {
        interes = monto * 0.75;
    }

    return interes;
}

function buscarPrestamoPorMonto(monto) {
    return prestamos.find(prestamo => prestamo.monto === monto);
}

function filtrarPrestamosPorCuotas(cuotas) {
    return prestamos.filter(prestamo => prestamo.cuotas === cuotas);
}

function filtrarPrestamosPorSocio(esSocio) {
    return prestamos.filter(prestamo => prestamo.esSocio === esSocio);
}

console.log("Bienvenido/a a su prestamo de confianza!");

let monto = "";

while (monto !== "SALIR") {
    monto = prompt("Ingrese el monto que quiere solicitar o SALIR para finalizar");

    if (monto !== "SALIR") {
        monto = parseFloat(monto);
        let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 1,3,6,9,12"));
        let esSocio = prompt("Es socio? SI | NO");
        datosPrestamo(monto, cuotas, esSocio);
    }
}


console.log("Buscar préstamo con monto 10000:", buscarPrestamoPorMonto(10000));
console.log("Filtrar préstamos con 3 cuotas:", filtrarPrestamosPorCuotas(3));
console.log("Filtrar préstamos de socios:", filtrarPrestamosPorSocio("SI"));

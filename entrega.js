
class Prestamo {
    constructor(nombre, monto, cuota) {
        this.nombre = nombre;
        this.monto = monto;
        this.cuotas = cuota;
        this.montoFinal = 0;
    }

    calcularCuotas(monto, cuotas) {
        let interes = 0;

        if (cuotas == 1) {
            this.montoFinal = monto;
        }
        else if (cuotas == 3) {
            interes = monto * 0.20;
            this.montoFinal = monto + interes;
        }
        else if (cuotas == 6) {
            interes = monto * 0.35;
            this.montoFinal = monto + interes;
        }
        else if (cuotas == 9) {
            interes = monto * 0.50;
            this.montoFinal = monto + interes;
        }
        else if (cuotas == 12) {
            interes = monto * 0.75;
            this.montoFinal = monto + interes;
        }


    }

    getDatosPrestamo() {
        console.log("<----------Prestamo----------->");
        console.log("Titular: ", this.nombre);
        console.log("Monto: ", this.monto);
        console.log("Cuotas: ", this.cuotas);
        console.log("Pagas: ", this.montoFinal);
        console.log();
    }
}


function filtrarPrestamos(objPrestamo) {

    return objPrestamo.nombre == nombre
}


let nombreUsuario = "";
let listaPrestamos = [];


while (nombreUsuario != "SALIR") {

    console.log("<----------Datos del Prestamo----------->");
    console.log("");

    nombreUsuario = prompt("Igrese su nombre o SALIR para finalizar");

    if (nombreUsuario != "SALIR") {

        let monto = prompt("Ingrese el monto:");
        monto = parseInt(monto);
        console.log("1 cuota: % INTERES");
        console.log("3 cuota: 20% INTERES");
        console.log("6 cuota: 35% INTERES");
        console.log("9 cuota: 50% INTERES");
        console.log("12 cuota: 75% INTERES");
        let cuotas = prompt("Ingrese la cuota:");

        let objPrestamo = new Prestamo(nombreUsuario, monto, cuotas);
        objPrestamo.calcularCuotas(monto, cuotas);
        listaPrestamos.push(objPrestamo);
        console.log("Gracias por elegirnos");
    }

}

let opcion = prompt("1 - Ver todos los Prestamos 2) Ver tus Prestamos");

let nombre;

if (opcion == "1") {
    console.log("Historial de prestamos");
    for (let prestamo of listaPrestamos) {
        prestamo.getDatosPrestamo();
    }
}

else if (opcion == 2) {

    nombre = prompt("Ingrese el nombre que quiere buscar");
    let resultadoFilter = listaPrestamos.filter(filtrarPrestamos);

    if (resultadoFilter.length != 0) {
        for (let prestamo of resultadoFilter) {
            prestamo.getDatosPrestamo();
        }
    }
    else {
        console.log("EL usuario no tiene prestamos registrados");
    }
}


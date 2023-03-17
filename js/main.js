//cálculo para el plazo fijo
function simular(monto, porcentaje) {
    return monto + ((monto * porcentaje) / 100)
}

let rta = ""
alert("Bienvenido al simulador de plazo fijo!\nPresione Enter para continuar.")

do {
    let monto = Number(prompt("Ingrese el monto a colocar:"))
    //bucle hasta ingresar valor numerico
    while (monto == "" || isNaN(monto)) {
        monto = Number(prompt("Por favor, ingrese un valor numerico:"))
    }
    //Si el monto es menor a 100.000 tiene un interes normal
    if (monto < 100000) {
        let tiempo = Number(prompt("Seleccione el plazo deseado: \n1 - 30 días. \n2 - 60 días. \n3 - 90 días."))
        //bucle hasta ingresar el valor numerico de una de las opciones
        while (tiempo == "" || tiempo >= 4 || isNaN(tiempo)) {
            tiempo = Number(prompt("Error! Seleccione la opción correcta para el plazo deseado: \n1 - 30 días. \n2 - 60 días. \n3 - 90 días."))
        }
        switch (tiempo) {
            case 1:
                alert("Usted recibirá: $" + (simular(monto, 4)) + "\nLa tasa de interés es del 4%.");
                break;
            case 2:
                alert("Usted recibirá: $" + (simular(monto, 9)) + "\nLa tasa de interés es del 9%.");
                break;
            case 3:
                alert("Usted recibirá: $" + (simular(monto, 14)) + "\nLa tasa de interés es del 14%.");
                break;
        } rta = prompt("Desea realizar otra simulación? Caso contrario ingrese ESC.").toLocaleUpperCase()

        //si el monto es superior a 100.000 tiene un interés mayor
    } else if (monto > 100000) {
        alert("Usted ingresó un monto superior a $100.000! La tasa de interés será mayor.")
        let tiempo = Number(prompt("Seleccione el plazo deseado: \n1 - 30 días. \n2 - 60 días. \n3 - 90 días."))
        //bucle hasta ingresar el valor numerico de una de las opciones
        while (tiempo == "" || tiempo >= 4 || isNaN(tiempo)) {
            tiempo = Number(prompt("Error! Seleccione la opción correcta para el plazo deseado: \n1 - 30 días. \n2 - 60 días. \n3 - 90 días."))
        }
        switch (tiempo) {
            case 1:
                alert("Usted recibirá: $" + (simular(monto, 5)) + "\nLa tasa de interés es del 5%.");
                break;
            case 2:
                alert("Usted recibirá: $" + (simular(monto, 10)) + "\nLa tasa de interés es del 10%.");
                break;
            case 3:
                alert("Usted recibirá: $" + (simular(monto, 15)) + "\nLa tasa de interés es del 15%.");
                break;
        } rta = prompt("Desea realizar otra simulación? Caso contrario ingrese ESC.").toLocaleUpperCase()
    }

} while (rta != "ESC")

alert("Adios!")
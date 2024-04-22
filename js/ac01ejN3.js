/*
Desarrollador: Juan Luis Menacho Ramírez
Fecha: 2024-04-21
Cambios: Corrección para que no se repitan los números en el resultado final.
!numerosPrimos.includes(randomico)

Ejercicio 3:
Escribir un programa para imprimir N numeros primos generados de forma aleatorio y
cargado en un array que sean menores al 110.
*/

// Función para verificar si un número es primo
function esPrimo(numero) {
    // if para que no use números negativos o 0
    if (numero <= 1) {
        return false;
    }
    // Verificación de números primos, con un contador, va diviendo el número generado
    // por i, y va incrementando hasta la raíz cuadrada del número, en caso de que no sea
    // el residuo == 0 lo tomaremos como un número primo
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    return true;
}

// Función para generar números primos aleatorios menores que 110
function generarNumerosPrimos(cantidad) {
    var numerosPrimos = [];
    //Bucle para generar los 10 números primos en consola
    while (numerosPrimos.length < cantidad) {
        //numero random
        var randomico = Math.floor(Math.random() * 110) + 1;
        // Este if tiene 2 condiciones, debe validar que sea primo y
        // que no esté dentro del array 'numerosPrimos' para añadirlo sin repetir.
        if (esPrimo(randomico) && !numerosPrimos.includes(randomico)) {
            numerosPrimos.push(randomico);
        }
    }
    return numerosPrimos;
}


// Generar 10 números primos aleatorios menores o iguales que 110
var cantidad = 10;

// Imprimir los números primos generados
console.log("Números primos generados:");
console.log(generarNumerosPrimos(cantidad));

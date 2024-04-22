/*
Desarrollador: Juan Luis Menacho Ramírez
Fecha: 2024-04-21
Cambios: Conversión de la primera letra en mayúsculas

Ejercicio 5:
En base a 2 array de nombres y apellidos, genere un nuevo array combinando de forma
aleatoria ambos, formatee los nombres convirtiendo el primer elemento del nombre y apellido en
mayúscula y el resto en minúscula.
*/

const NOMBRES = ["juAN", "MARIa", "PEdro", "aNa", "lUIS", "lAUra", "carLos", "SoFiA", "diEGO", "ELEna"];
const APELLIDOS = ["GarCIA", "MARtinez", "loPEZ", "gonZAles", "RoDrIgEz", "FERNANDEZ", "PereZ", "gomeZ", "SANcheZ", "diAz"];

// Función para generar un nombre completo aleatorio sin repetir
function randomica(longitud, used) {
    let array;
    do {
        array = Math.floor(Math.random() * longitud);
    } while (used.includes(array));
    used.push(array);
    return array;
}

// Función para convertir la primera letra en mayúscula
function mayus(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
}

// Función para generar un nombre completo aleatorio
function configuracion(nombres, apellidos) {
    //Selección al azar del array de nombres y apellidos
    let nombreIndex = randomica(NOMBRES.length, nombres);
    let apellidoIndex = randomica(APELLIDOS.length, apellidos);
    //Colocando solo la primera letra en Mayúsculas
    let nombreAleatorio = mayus(NOMBRES[nombreIndex]);
    let apellidoAleatorio = mayus(APELLIDOS[apellidoIndex]);
    //Combinando nombre y apellido en el mismo texto
    return `${nombreAleatorio} ${apellidoAleatorio}`;
}

// Función para generar un array de nombres completos aleatorios
function arrayfinal(cantidad) {
    let nombres = [];
    let apellidos = [];
    let nombrecompleto = [];
    for (let i = 0; i < cantidad; i++) {
        nombrecompleto.push(configuracion(nombres, apellidos));
    }
    return nombrecompleto;
}

// Generar un array de 10 nombres completos aleatorios
var cantidad = 10;

// Mostrar el array de nombres completos en la consola
console.log(arrayfinal(cantidad));

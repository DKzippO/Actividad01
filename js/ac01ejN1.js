/*
Desarrollador: Juan Luis Menacho Ramírez
Fecha: 2024-04-21
Cambios: Adición de más navegadores.

Ejercicio 1:
Escribir un programa donde nos de la bienvenida y nos
indique en que navegador estamos ejecutando.
*/

// Función para dar la bienvenida
function bienvenida() {
    console.log("Hola mundo :)");
}

// Función para verificar el navegador
function navegador() {
    var nombre;
    // Verificamos si el navegador es alguno de la lista
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        nombre = 'Opera';
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        nombre = 'Edge';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        nombre = 'Chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        nombre = 'Safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        nombre = 'Firefox';
    }
    // Si no es ninguno de los anteriores, devolvemos un mensaje genérico
    else {
        nombre = 'Navegador desconocido';
    }
    return nombre
}

// Llamamos a las funciones
bienvenida();
console.log("Estás usando " + navegador() + ".");

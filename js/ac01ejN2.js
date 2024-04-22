/*
Desarrollador: Juan Luis Menacho Ramírez
Fecha: 2024-04-21
Cambios: El resultado del body cambia en caso de
que las credenciales verificadas sea "true" con uso del DOM (lo último avanzado).

Ejercicio 2:
Escribir un programa donde nos solicite un usuario y contraseña, validar la contraseña con
“D153n0W3b2” y el usuario debería ser cualquiera de los siguientes nombres: juan, pedro, maria, raul.
*/

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Función para validar el usuario y la contraseña
    function validarCredenciales(user, pass) {
        var userValidos = ['juan', 'pedro', 'maria', 'raul'];
        var passValida = 'D153n0W3b2';

        // Verificar si el usuario está en la lista de usuarios válidos y si la contraseña es correcta
        if (userValidos.includes(user.toLowerCase()) && pass === passValida) {
            return true; // Las credenciales son válidas
        } else {
            return false; // Las credenciales son inválidas
        }
    }

    // Función para solicitar el nombre de usuario y la contraseña
    function ingresarCredenciales() {
        // Solicitar al usuario su nombre de usuario y contraseña
        var user = prompt("Ingrese su nombre de usuario:");
        var pass = prompt("Ingrese su contraseña:");

        // Validar las credenciales ingresadas por el usuario
        var credenciales = validarCredenciales(user, pass);

        // Mostrar contenido según el resultado de la validación
        if (credenciales) {
            document.querySelector("#content_main").removeAttribute("hidden");
            console.log("Sesión iniciada correctamente.");
        } else {
            document.querySelector("#content_fake").removeAttribute("hidden");
            console.log("Datos de inicio de sesión incorrectos.");
        }
    }

    // Llamar a la función para solicitar las credenciales al usuario
    ingresarCredenciales();
});

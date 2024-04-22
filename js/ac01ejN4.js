/*
Desarrollador: Juan Luis Menacho Ramírez
Fecha: 2024-04-21
Cambios: 

Ejercicio 4:
Escribe un programa que pida una frase y escriba:
• Cuantas veces aparece la letra “o”. Ejemplo Hola → 1
• Las vocales que aparecen. Ejemplo Hola → 2
• Cuántas veces aparecen cada una de las vocales.Ejemplo Hola → o:1 , a:1

*/

// Función para contar la cantidad de veces que aparece la letra "o" en una frase
function contarLetraO(frase) {
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() == 'o') {
            contador++;
        }
    }
    return contador;
}

// Función para identificar y contar las vocales en una frase
function contarVocales(frase) {
    var vocales = 'aeiou';
    var vocalesEncontradas = '';
    var contadorVocales = {};
    
    for (var i = 0; i < frase.length; i++) {
        var caracter = frase[i].toLowerCase();
        if (vocales.includes(caracter) && !vocalesEncontradas.includes(caracter)) {
            vocalesEncontradas += caracter;
        }
        if (vocales.includes(caracter)) {
            if (contadorVocales[caracter]) {
                contadorVocales[caracter]++;
            } else {
                contadorVocales[caracter] = 1;
            }
        }
    }
    
    return {vocalesEncontradas: vocalesEncontradas, contadorVocales: contadorVocales};
}

// Pedir al usuario que ingrese una frase
var frase = prompt("Ingrese una frase:");
console.log("Frase: " + frase)

// Calcular la cantidad de veces que aparece la letra "o"
var cantidadLetraO = contarLetraO(frase);
console.log("La letra 'o' aparece " + cantidadLetraO + " veces en la frase.");

// Identificar y contar las vocales en la frase
var resultadoVocales = contarVocales(frase);
console.log("Las vocales que aparecen en la frase son: " + resultadoVocales.vocalesEncontradas);
console.log("Cantidad de veces que aparece cada vocal:");
for (var vocal in resultadoVocales.contadorVocales) {
    console.log(vocal + ": " + resultadoVocales.contadorVocales[vocal]);
}

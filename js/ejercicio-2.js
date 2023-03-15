/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

    - Mostrar la longitud del arreglo.
    - Mostrar en el documento web los ítems de las posiciónes primera, tercera y última.
    - Añade en última posición la ciudad de París.
    - Escribe por pantalla el elemento que ocupa la segunda posición.
    - Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let ciudades = [];

do {
    ciudades.push(prompt("Ingrese una ciudad"));
} while (confirm("¿Quiere agregar otra ciudad?"));

document.write("<h2>El array ingresado es el siguiente</h2>");
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");

document.write(`<p>La longitud del array es: ${ciudades.length}</p>`);

document.write(
    `<p>Las ciudades en la primera, tercera y ultima posición son: ${
        ciudades[0]
    } para la primera, ${ciudades[2]} para la tercera, ${
        ciudades[ciudades.length - 1]
    } para la ultima</p>`
);

document.write("<h2>El array ingresado agregando París al final</h2>");
ciudades.push("París");
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");

document.write("<h2>El elemento de la segunda posición del array</h2>");
document.write(`<p>${ciudades[1]}</p>`);

document.write(
    "<h2>El array ingresado sustituyendo la segunda posición por Barcelona</h2>"
);
ciudades[1] = "Barcelona";
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");

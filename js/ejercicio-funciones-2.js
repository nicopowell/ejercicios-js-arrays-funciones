//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const texto = prompt("Ingrese un texto: ");

function mayusculasOMinusculas(texto) {
    if (texto === texto.toUpperCase()) {
        return `El texto introducido esta formado solo por mayusculas`;
    } else if (texto === texto.toLowerCase()) {
        return `El texto introducido esta formado solo por minusculas`;
    } else {
        return `El texto introducido esta formado por mayusculas y minusculas`;
    }
}

document.write(`<p>${mayusculasOMinusculas(texto)}</p>`);

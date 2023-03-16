//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let numero = parseInt(prompt("Ingrese un número entero: "));
while (isNaN(numero)) {
    numero = parseInt(
        prompt("El valor ingresado no es valido, ingreselo nuevamente: ")
    );
}

function parOImpar(numero) {
    if (numero % 2 === 0) {
        return `El número ${numero} es par`;
    } else {
        return `El número ${numero} es impar`;
    }
}

document.write(`<p>${parOImpar(numero)}</p>`);

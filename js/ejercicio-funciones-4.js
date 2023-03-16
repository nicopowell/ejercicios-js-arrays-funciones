//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let numero = parseFloat(prompt("Ingrese un número: ")).toFixed(2);
while (isNaN(numero)) {
    numero = parseFloat(
        prompt("El valor ingresado no es valido, ingreselo nuevamente: ")
    ).toFixed(2);
}

function tablaDeMultiplicar(numero) {
    document.write(
        "<table><thead><tr><th>Producto</th><th>Resultado</th></tr></thead><tbody>"
    );
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        document.write(
            `<tr><td>${numero} x ${i}</td><td>${resultado.toFixed(2)}</td></tr>`
        );
    }
    document.write("</tbody></table>");
}

tablaDeMultiplicar(numero);

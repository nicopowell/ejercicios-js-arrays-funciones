//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//La fórmula del perímetro  es p = 2*(a +b)

let lado1 = parseInt(prompt("Ingrese un número entero: "));
let lado2 = parseInt(prompt("Ingrese un número entero: "));

while (isNaN(lado1) || isNaN(lado2)) {
    alert("Los valores ingresados no son validos, intentelo de nuevo");
    lado1 = parseInt(prompt("Ingrese un número entero: "));
    lado2 = parseInt(prompt("Ingrese un número entero: "));
}

function perimetroRectangulo(lado1, lado2) {
    const perimetro = 2 * (lado1 + lado2);
    document.write(
        `<p>El perimetro de un rectangulo de lados ${lado1} y ${lado2} es igual a ${perimetro}</p>`
    );
}

perimetroRectangulo(lado1, lado2);

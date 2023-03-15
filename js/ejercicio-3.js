// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let sumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
    let dado1 = parseInt(Math.random() * 6 + 1);
    let dado2 = parseInt(Math.random() * 6 + 1);

    let suma = dado1 + dado2;
    sumas[suma - 2]++;
}

document.write("<h1>Sumas de dados</h1>");
document.write("<ul>");
for (let i = 0; i < sumas.length; i++) {
    document.write(`<li>La suma ${i + 2} apareció ${sumas[i]} veces.</li>`);
}
document.write("</ul>");

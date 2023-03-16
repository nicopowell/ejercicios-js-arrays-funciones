// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let sumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
    let dado1 = parseInt(Math.random() * 6 + 1);
    let dado2 = parseInt(Math.random() * 6 + 1);

    let suma = dado1 + dado2;
    sumas[suma - 2]++;
}

document.write(
    "<table><thead><tr><th>Suma🎲🎲</th><th>Apariciones</th></tr></thead><tbody>"
);
for (let i = 0; i < sumas.length; i++) {
    document.write(`<tr><td>${i + 2}</td><td>${sumas[i]}</td></tr>`);
}
document.write("</tbody></table>");

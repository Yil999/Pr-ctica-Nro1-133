// 8. Realizar un código para ejecutar una función callback después 2 segundos.
function miCallback() {
    console.log("¡Este mensaje aparece después de 2 segundos!");
}

setTimeout(miCallback, 2000);

console.log("Este mensaje aparece inmediatamente");

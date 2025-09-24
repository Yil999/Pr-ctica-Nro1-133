// 9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.
function miFuncionPromesa() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            let mensaje = " Operación completada con éxito después de 3 segundos";
            resolve(mensaje);
        }, 3000);
    });
}

async function miFuncion() {
    let r = await miFuncionPromesa();
    console.log(r);
}

miFuncion();
// 14. Proporcione un ejemplo para convertir una promesa en un callback.

function promesaBasica(dato) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dato) {
                resolve(`Éxito: ${dato}`);
            } else {
                reject('Error: dato vacío');
            }
        }, 1000);
    });
}

function callbackBasica(dato, callback) {
    promesaBasica(dato)
        .then(resultado => callback(null, resultado))
        .catch(error => callback(error, null));
}

callbackBasica('Hola mundo', (error, resultado) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Resultado:', resultado);
    }
});
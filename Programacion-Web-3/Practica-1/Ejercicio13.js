// 13.Proporcione un ejemplo concretodonde el anidamiento de promesas se puede
//    reescribir mejor con async/await haciendo el código más limpio y mantenible.
/*
function subirArchivo(archivo) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(` Archivo "${archivo}" subido`);
      resolve(archivo);
    }, 1000);
  });
}

function verificarArchivo(archivo) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(` Archivo "${archivo}" verificado`);
      resolve(archivo);
    }, 1000);
  });
}

function generarEnlace(archivo) {
  return new Promise(resolve => {
    setTimeout(() => {
      const enlace = `https://github.com/usuario/Repo/${archivo}`;
      console.log(` Enlace generado: ${enlace}`);
      resolve(enlace);
    }, 1000);
  });
}

subirArchivo("Practica1.pdf")
  .then(archivo => {
    return verificarArchivo(archivo)
      .then(archivoVerificado => {
        return generarEnlace(archivoVerificado)
          .then(enlace => {
            console.log("Proceso completado con éxito:", enlace);
          });
      });
  })
  .catch(error => console.error(" Error:", error));
*/

function subirArchivo(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" Archivo subido:", nombre);
      resolve(nombre);
    }, 1000); 
  });
}

function verificarArchivo(archivo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" Archivo verificado:", archivo);
      resolve(archivo);
    }, 1000);
  });
}

function generarEnlace(archivo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const enlace = `https://servidor.com/descargas/${archivo}`;
      console.log(" Enlace generado:", enlace);
      resolve(enlace);
    }, 1000);
  });
}
async function procesoArchivo() {
  try {
    const archivo = await subirArchivo("Practica1.pdf");
    const archivoVerificado = await verificarArchivo(archivo);
    const enlace = await generarEnlace(archivoVerificado);
    console.log(" Proceso completado con éxito:", enlace);
  } catch (error) {
    console.error(" Error en el proceso:", error);
  }
}
procesoArchivo();

// 16. Proporcione un ejemplo para migrar una función con promesas a async/await.
/*
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id: id, nombre: "Juan Pérez" });
      } else {
        reject("ID inválido");
      }
    }, 1000);
  });
}

// Uso con .then() y .catch()
obtenerUsuario(1)
  .then(usuario => {
    console.log("Usuario encontrado:", usuario);
  })
  .catch(error => {
    console.error("Error:", error);
  });
*/
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id: id, nombre: "Juan Pérez" });
      } else {
        reject("ID inválido");
      }
    }, 1000);
  });
}

// Uso con async/await
async function mostrarUsuario() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log("Usuario encontrado:", usuario);
  } catch (error) {
    console.error("Error:", error);
  }
}

mostrarUsuario();

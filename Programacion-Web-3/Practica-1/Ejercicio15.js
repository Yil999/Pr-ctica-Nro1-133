// 15. Proporcione un ejemplo para convertir un callback en una promesa.

function verificarUsuario(email, callback) {
  setTimeout(() => {
    if (email === "usuario@email.com") {
      callback(null, { id: 1, nombre: "Yocelin", email });
    } else {
      callback("Usuario no encontrado", null);
    }
  }, 1000);
}

function verificarPassword(usuario, password, callback) {
  setTimeout(() => {
    if (password === "123456") {
      callback(null, true);
    } else {
      callback(null, false);
    }
  }, 800);
}

function generarToken(usuario, callback) {
  setTimeout(() => {
    const token = "TOKEN-" + usuario.id + "-" + Date.now();
    callback(null, token);
  }, 500);
}

function registrarLogin(usuario, callback) {
  setTimeout(() => {
    const registro = { usuarioId: usuario.id, fecha: new Date() };
    callback(null, registro);
  }, 700);
}

function loginCallback(email, password, callback) {
  verificarUsuario(email, (error, usuario) => {
    if (error) return callback(error, null);

    verificarPassword(usuario, password, (error, esValido) => {
      if (error) return callback(error, null);
      if (!esValido) return callback("Contraseña incorrecta", null);

      generarToken(usuario, (error, token) => {
        if (error) return callback(error, null);

        registrarLogin(usuario, (error, registro) => {
          if (error) return callback(error, null);

          callback(null, {
            token: token,
            usuario: usuario,
            ultimoLogin: registro.fecha
          });
        });
      });
    });
  });
}

loginCallback("usuario@email.com", "123456", (error, resultado) => {
  if (error) {
    console.error(" Error:", error);
    return;
  }
  console.log(" Login exitoso:", resultado);
});

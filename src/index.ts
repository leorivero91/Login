rotulo1.innerHTML = "Por favor ingrese el usuario";
rotulo2.innerHTML = "Por favor ingrese la contraseña";

enviar.addEventListener("click", () => {
  let usuario: string = "Juan";
  let contraseña: string = "claveJuan";
  let userIngresado: string = dato1.value;
  let userContraseña: string = dato2.value;

  if (userIngresado == usuario && contraseña == userContraseña) {
    console.log("Bienvenido");
  } else {
    console.log("El usuario o contraseña son incorrectos");
  }
});

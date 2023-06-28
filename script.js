const botonEncriptar = document.getElementById("btn-encriptar");
const botonDesencriptar = document.getElementById("btn-desencriptar");
const textoResultado = document.getElementById("textoResultado");
const botonCopiar = document.getElementById("btn-copiar");

botonEncriptar.addEventListener("click", function () {
  ocultar();
  let texto = getTexto();
  textoResultado.textContent = encriptar(texto);
  if (textoResultado.textContent != "") {
    botonCopiar.style.display = "block";
  }
  Swal.fire("¡Texto encriptado!", "Presiona para continuar...", "success");

  if (document.getElementById("textArea").value === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No hay algún texto a encriptar",
    });
    const imagenPersonaje = document.querySelector(".contenedor-personaje");
    const contenedorParrafo = document.querySelector(".contenedor-parrafo");
    imagenPersonaje.style.display = "";
    contenedorParrafo.style.display = "";
  }
});

botonDesencriptar.addEventListener("click", function () {
  ocultar();
  let texto = getTexto();
  textoResultado.textContent = desencriptar(texto);
  if (textoResultado.textContent != "") {
    botonCopiar.style.display = "block";
  }
  Swal.fire("¡Texto desencriptado!", "Presiona para continuar...", "success");

  if (document.getElementById("textArea").value === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No hay algún texto a desencriptar",
    });
    const imagenPersonaje = document.querySelector(".contenedor-personaje");
    const contenedorParrafo = document.querySelector(".contenedor-parrafo");
    imagenPersonaje.style.display = "";
    contenedorParrafo.style.display = "";
  }
});

botonCopiar.addEventListener("click", function () {
  let textoCopado = textoResultado.textContent;
  navigator.clipboard.writeText(textoCopado);
  Swal.fire("Texto copiado");
});

function getTexto() {
  return document.querySelector(".caja-texto").value;
}

function encriptar(texto) {
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "e") {
      textoEncriptado = textoEncriptado + "enter";
    } else if (texto[i] == "i") {
      textoEncriptado = textoEncriptado + "imes";
    } else if (texto[i] == "a") {
      textoEncriptado = textoEncriptado + "ai";
    } else if (texto[i] == "o") {
      textoEncriptado = textoEncriptado + "ober";
    } else if (texto[i] == "u") {
      textoEncriptado = textoEncriptado + "ufat";
    } else {
      textoEncriptado = textoEncriptado + texto[i];
    }
  }
  return textoEncriptado;
}

function desencriptar(texto) {
  let textoDesencriptado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "e") {
      textoDesencriptado = textoDesencriptado + "e";
      i += 4;
    } else if (texto[i] == "i") {
      textoDesencriptado = textoDesencriptado + "i";
      i += 3;
    } else if (texto[i] == "a") {
      textoDesencriptado = textoDesencriptado + "a";
      i += 1;
    } else if (texto[i] == "o") {
      textoDesencriptado = textoDesencriptado + "o";
      i += 3;
    } else if (texto[i] == "u") {
      textoDesencriptado = textoDesencriptado + "u";
      i += 3;
    } else {
      textoDesencriptado = textoDesencriptado + texto[i];
    }
  }
  return textoDesencriptado;
}

function ocultar() {
  const imagenPersonaje = document.querySelector(".contenedor-personaje");
  const contenedorParrafo = document.querySelector(".contenedor-parrafo");
  imagenPersonaje.style.display = "none";
  contenedorParrafo.style.display = "none";
}

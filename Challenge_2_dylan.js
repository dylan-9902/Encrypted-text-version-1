function encrypted() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("title_menssage");
    let parrafo = document.getElementById("parrafo");

    let muñeco = document.getElementById("imagen_1");
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "The text have been encrypted with success";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/images - encriptado.jpeg";
    } else {
        muñeco.src = "./imagenes/images - copiar texto.png";
        tituloMensaje.textContent = "There's not none text"
        parrafo.textContent = "Please, enter the text to encrypted or desencrypted"
        swal ("Oooohhh no","please enter a text");
    }
}

function desencrypted() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("title_menssage");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("imagen_1");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "The text have been desencrypted with success";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/images - copiar texto.png";
    } else {
        muñeco.src = "./imagenes/images - copiar texto.png";
        tituloMensaje.textContent = "There's not none text"
        parrafo.textContent = "Please, enter the text to encrypted or desencrypted"
        swal ("Ooohhh no","please enter a text");
    }
}


//Permite que no se introduzca caracteres especiales
document
  .getElementById("texto")
  .addEventListener("input", function (event) {
    const pattern = /^[a-z\s]+$/;
    const textarea = event.target;
    const value = textarea.value;

    const filteredValue = value
      .split("")
      .filter((char) => pattern.test(char))
      .join("");
    textarea.value = filteredValue;
});


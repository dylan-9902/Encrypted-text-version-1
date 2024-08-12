function encrypted() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("title_menssage");
    let parrafo = document.getElementById("parrafo");

    let muñeco = document.getElementById("imagen_1");
    // esta variable sirve para el cambio de imagen en los botones

    let textoCifrado = texto
        //para remplazar las letras que se necesitan, .replace propiedad propia de JavaScript
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        /*esta linea se deja a si ya que al ponerle texto se esta reutilizando una varibale ya 
        establecida y por ende no va a funcionar la parte logica    */
        tituloMensaje.textContent = "The text have been encrypted with success";
        parrafo.textContent = "";
        muñeco.src = "./imagenes/images - encriptado.jpeg";
    } else {
        muñeco.src = "./imagenes/images - copiar texto.png";
        tituloMensaje.textContent = "There's not none text"
        parrafo.textContent = "Please, enter the text to encrypted or desencrypted"
        /* alert("Can you enter some text");
        se cambia esta alert por un  --> swal("texto que se quiera") */
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
        // alert("Can you enter some text");
        swal ("Ooohhh no","please enter a text");
    }
}



const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");




/*
    a=ai
    e=enter
    i=imes
    o=ober
    u=ufat
 */

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    /*textArea.value ="";*/
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    /*textArea.value ="";*/
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return stringDesencriptado;
}


function copiarTexto() {
    const copiar = document.querySelector('.copiar');

    mensaje.select();
  
    try {
      navigator.clipboard.writeText(mensaje.value);  
      copiar.textContent = 'copiar';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 1500);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  }



/*console.table(matrizCodigo); */
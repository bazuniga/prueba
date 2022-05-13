function cambiarPosicion(){
    var elemento = document.getElementById('no');
    var posicion = elemento.getBoundingClientRect();
     
    console.log(posicion.top, posicion.right, posicion.bottom, posicion.left);
    console.log(posicion.top, posicion.right, posicion.bottom, posicion.left);

    let nueva = posicion.top;
    nueva = Math.random() * (300 - 1) + 1;
    nueva2 = Math.random() * (300 - 1) + 1;
    console.log(nueva)
    elemento.style.left = nueva+"px";
    elemento.style.top = nueva2+"px";
    elemento.style.right = nueva2+"px";
    elemento.style.bottom = nueva+"px";
  }

function miFuncion() {
    alert("Lo sabia 😍😘");
}
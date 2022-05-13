
var url = "perfil.html";

/* function login(){
    
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    console.log(document.location.href);    
    //console.log(window.location.href = "B:/Cursos/JavaScript/curso/perfil.html");
    //window.location.href = "perfil.html";
    //alert("hola"+ user + password);
    if (user!="") {
        alert("verdadero")
        location.href = url;    
    }else{
        alert("falso")
    }
    
} */

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
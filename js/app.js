function fnLimpiar(){

    const usuario = document.getElementById('usuario');
    usuario.value = '';

    const password = document.getElementById('password');
    password.value = '';
}

function fnValidar(){

    const usuario = document.getElementById('usuario');
    const password = document.getElementById('password');
  
    if(usuario.value == "dsingh" && password.value == "123456"){

        console.log("Datos correctos");

    }
    else
    {
        console.log("Datos incorrectos");
    }

}

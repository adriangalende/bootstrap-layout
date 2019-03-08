window.onload = function(){

    var nombreUsuario = document.getElementById('nombre-usuario');
    var email = document.getElementById('email-usuario');
    var password = document.getElementById('password-usuario');
    var password2 = document.getElementById('password2-usuario');
    var operacionRandom = document.getElementById('operacion-random');
    var condiciones = document.getElementById('condiciones');

    var check = {
        username: false,
        email: false,
        password: false,
        password2: false,
        operacion: false,
        condiciones: false
    }

    //generamos operacion random
    var sol = 0;
    function generarOperacion(){
        const operaciones = ["+","-","*","/"]
        let n1 = Math.floor((Math.random() * 20) + 1);
        let n2 = Math.floor((Math.random() * 20) + 1);
        let operacion = operaciones[Math.floor((Math.random() * 4))];
        sol = n1 + operacion + n2;
        return n1 + operacion + n2;
    }

    operacionRandom.placeholder = generarOperacion() + "= ?";



    function isFullfilled(input){
        return input.value != null && input.value != undefined && input.value != "";
    }

    function errorMsg(input, text){
        input.style ="border: 1px solid #610404; background-color: #ff000033; color: rgb(255, 255, 255) !important;";
        let msg = input.closest('div').getElementsByClassName('valid-feedback')[0] ||
            input.closest('div').getElementsByClassName('label')[0];
        msg.classList.remove('valid-feedback')
        msg.classList.add('label')
        msg.classList.add('label-danger');
        msg.style = "display:block !important";
        msg.innerText = text;
    }

    function okMsg(input, text){
        input.style =" border: 1px solid rgb(7, 103, 7) !important; background-color: rgba(0, 128, 0, 0.28);color: rgb(7, 103, 7) !important;";
        let msg = input.closest('div').getElementsByClassName('valid-feedback')[0] ||
            input.closest('div').getElementsByClassName('label')[0];
        msg.classList.add('valid-feedback')
        msg.classList.remove('label')
        msg.classList.remove('label-danger');
        msg.style = "display:block !important";
        msg.innerText = text;
    }

    nombreUsuario.addEventListener('blur', function(){
        if(!isFullfilled(this)){
            errorMsg(this, "El campo debe estar relleno");
            check.username = false;
        } else {
            okMsg(this, "");
            check.username = true;
        }
    });

    email.addEventListener('blur', function(){
        if(!isFullfilled(this)){
            errorMsg(this, "El campo debe estar relleno");
        } else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(String(this.value).toLowerCase())){
                okMsg(this, "");
                check.email = true;
            } else {
                errorMsg(this, "El formato del email no es correcto");
                check.email = false;
            }
        }
    });

    password.addEventListener('blur', function(){
        if(!isFullfilled(this)){
            errorMsg(this, "El campo debe estar relleno");
        } else {
            var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if(re.test(String(this.value))){
                okMsg(this, "");
                check.password = true;
            } else {
                errorMsg(this, "La password debe tener: al menos 8 caracteres, al menos 1 dígito y 1 letra mayúscula");
                check.password = false;
            }
        }
    });


    password2.addEventListener('blur', function(){
        if(!isFullfilled(this)){
            errorMsg(this, "El campo debe estar relleno");
        } else {
            if(this.value == password.value && check.password ){
                okMsg(this, "");
                check.password2 = true;
            } else if(this.value == password.value && !check.password ) {
                errorMsg(this, "Las contraseñas son iguales, pero no cumplen el formato");
                check.password2 = false;
            } else {
                errorMsg(this, "Las contraseñas son distintas");
                check.password2 = false;
            }
        }
    });

    operacionRandom.addEventListener('blur', function(){
        if(!isFullfilled(this)){
            errorMsg(this, "No seas vago y piensa un poco!");
        } else {
            if(this.value == eval(sol).toString() ){
                okMsg(this, "Te veo finito!");
                check.operacion = true;
            } else {
                errorMsg(this, "Uixx, vamos a probar otra");
                check.operacion = false;
                operacionRandom.value="";
                operacionRandom.placeholder = generarOperacion() + "= ?";
            }
        }
    });

    condiciones.addEventListener('change', function(){
        check.condiciones = this.checked;

        for(test in Object.keys(check)){
            if(check[Object.keys(check)[test]]){
                document.getElementById('crear-cuenta').disabled = false;
            } else {
                document.getElementById('crear-cuenta').disabled = true;
                break;
            }
        }

        console.log(check);

    });


    document.forms[0].addEventListener('submit',function(form){
        form.preventDefault();
        form.clear;
    });


}
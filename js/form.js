 function validarLogin() {

//LOGIN
 	//E-mail validação
	if(formLogin.email.value.length<5) {
		alert("O e-mail deve ter 5 caracteres no mínimo.");
		return;
	}

    if(formLogin.email.value.indexOf("@" && ".") == -1) {
        alert("E-mail inválido.");
        return;
    }

    //Senha validação
    if(formLogin.senha.value.length<7) {
    	alert("Senha inválida. Deve ter no minímo 7 caracteres.");
    	return;
    }
 }
//-------

//CADASTRO
function validarAluno() {
	if(formAluno.nome.value.length<4) {
		alert("O nome deve ter 4 caracteres no mínimo.");
		return;
	}
    if(formAluno.email.value.indexOf("@" && ".") == -1) {
        alert("E-mail inválido.");
        return;
    }
	if(formAluno.email.value.length<5) {
		alert("O e-mail deve ter 5 caracteres no mínimo.");
		return;
	}    
    if(formAluno.senha.value.length<7) {
    	alert("Senha inválida. Deve ter no minímo 7 caracteres.");
    	return;
    }	
	if(formAluno.numeroAluno.value.length<10 || formAluno.numeroAluno.value.length !=null){
		alert("O número de celular deve ter 9 caracteres no mínimo.");
		return;
	}    
} 	


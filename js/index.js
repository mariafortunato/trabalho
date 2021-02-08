function home() {
	document.getElementById("inicio").style.display = "block";
	document.getElementById("produto").style.display = "none";
	document.getElementById("cadastro").style.display = "none";
	document.getElementById("contato").style.display = "none";
}
function produtos() {
	document.getElementById("inicio").style.display = "none";
	document.getElementById("produto").style.display = "block";
	document.getElementById("cadastro").style.display = "none";
	document.getElementById("contato").style.display = "none";
}
function cadastro() {
	document.getElementById("inicio").style.display = "none";
	document.getElementById("produto").style.display = "none";
	document.getElementById("cadastro").style.display = "block";
	document.getElementById("contato").style.display = "none";
}
function contato() {
	document.getElementById("inicio").style.display = "none";
	document.getElementById("produto").style.display = "none";
	document.getElementById("cadastro").style.display = "none";
	document.getElementById("contato").style.display = "block";
}
function msg_enviar() {
	alert('E-mail enviado!')
}
function cadastrar(){
	alert('Cadastro concluído!')	
}




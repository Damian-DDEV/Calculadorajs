//no repetir signos
let limite;
let limitepunto = 1;
let negativos = 1;
//introducir numeros
function numero(x) {
	if(document.getElementById("resultado").value != "Infinity" && document.getElementById("resultado").value !="NaN" && document.getElementById("resultado").value != "undefined"){
		document.getElementById("resultado").value = document.getElementById("resultado").value + x;
	}
	limite = 1;
	negativos = 1;
}
//operaciones
function operacion(z) {
	if (limite==1 && document.getElementById("resultado").value != "Infinity" && document.getElementById("resultado").value != "NaN" && document.getElementById("resultado").value != "undefined"){
		document.getElementById("resultado").value = document.getElementById("resultado").value + z;
		limite = 0;
		limitepunto = 1;
		negativos = 1;
	}
}
//genera resultado
function resultado(){
	if(document.getElementById("resultado").value != ""){
	document.getElementById("resultado").value = eval(document.getElementById("resultado").value);
	}
}
//numeros decimales
function punto(y){
	if(limitepunto == 1){
		document.getElementById("resultado").value = document.getElementById("resultado").value + y;
	}
	limitepunto = 0;
}
//funcion para numeros negativos
function negativo(y){
	if(negativos == 1 && document.getElementById("resultado").value != "."){
		document.getElementById("resultado").value = document.getElementById("resultado").value + y;
	}
	negativos = 0;
}
//borrar todo
function del(){
	document.getElementById("resultado").value = "";
	limitepunto = 1;
	negativos = 1;
	limite = 0;
}
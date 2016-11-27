/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var numeroUno;
var Operador;
var numeroDos;
function comenzar()
{
numeroUno=Math.floor((Math.random()*10)+1);
numeroDos=Math.floor((Math.random()*10)+1);
Operador=Math.floor((Math.random()*4)+1);
numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);
document.getElementById('PrimerNumero').value=numeroUno;
document.getElementById('SegundoNumero').value=numeroDos;
	if (Operador==1)
	{
		Operador="+";
		respuesta=numeroUno+numeroDos;
	}else if (Operador == 2)
	{
		Operador="*";
		respuesta=numeroDos*numeroUno
	}else if (Operador==3)
	{
		Operador="/";
		respuesta=numeroUno/numeroDos;
	}else
	{
		Operador="-";
		respuesta=numeroUno-numeroDos
	}
	document.getElementById('Operador').value=Operador;
	window.setTimeout(Responder,4000)

console.log(respuesta);
}//FIN DE LA FUNCIÓN
function Responder()
{
	var respuestaUsr;
	respuestaUsr=document.getElementById('Respuesta').value;
	if (respuestaUsr==respuesta)
	{
		alert("El resultado es correcto.");
	}else
	{
		alert("El resultado es incorrecto.")
	}


}//FIN DE LA FUNCIÓN

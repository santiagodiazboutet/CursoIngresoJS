/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
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

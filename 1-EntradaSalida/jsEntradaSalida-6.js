/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno=document.getElementById('numeroUno').value;
	var numerodos=document.getElementById('numeroDos').value;
	

	var res=parseInt(numerouno)+parseInt(numerodos);
	alert("La suma es "+res);
}


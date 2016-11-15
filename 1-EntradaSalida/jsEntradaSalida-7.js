/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	var numeroUno=document.getElementById('numeroUno').value;
	var numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var suma=numeroUno+numeroDos;
	alert("La suma es "+suma);

}

function restar()
{
	var numeroUno=document.getElementById('numeroUno').value;
		var numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var resta=numeroUno-numeroDos;
	alert("La resta es "+resta);

}

function multiplicar()
{ 
	var numeroUno=document.getElementById('numeroUno').value;
		var numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var multiplicar=numeroUno*numeroDos;
	alert("La resta es "+multiplicar);
}

function dividir()
{
	var numeroUno=document.getElementById('numeroUno').value;	
	var numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var dividir=numeroUno/numeroDos;
	alert("La resta es "+dividir);
}


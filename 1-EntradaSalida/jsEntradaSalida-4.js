/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	//id="elNombre"
	var dat=prompt("Ingrese dato");
	document.getElementById('elNombre').value=dat;
}


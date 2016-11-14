/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
	/*Tambien sirve para hacer comment

	concepto de variable
	concatenacion
	prompt
	para mostrar elemento literal""
	sin nada busca variable llamada de esa manera (capslock sensitive)
*/

	var producto;
	producto= "samsung";
	producto=prompt("Ingrese marca","Sin marca");
	var precio=prompt("Ingrese precio","999");
	alert("Su producto es: " +producto +". Y su precio es: $"+precio);
}


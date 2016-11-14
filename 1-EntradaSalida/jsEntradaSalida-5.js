/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var dat=document.getElementById('elNombre').value;

	var dat2=document.getElementById('laEdad').value;
	alert("Usted se llama "+dat+" y tiene "+dat2+" años")
}


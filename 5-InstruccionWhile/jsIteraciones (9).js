function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numeroMax=0;
	var numeroMin=0;

	while(respuesta!='no')
	{
		var numeroNuevo=0;
	numeroNuevo=prompt("Ingrese un numero");
	if (numeroMax==0&&numeroMin==0)
	{
		numeroMax=numeroNuevo;
		numeroMin=numeroNuevo;
	}
	if(numeroNuevo>numeroMax)
	{	
		numeroMax=numeroNuevo;
	}
	if (numeroNuevo<numeroMin)
	{
		numeroMin=numeroNuevo;
		
	}
	contador++;
	respuesta=prompt("Desea continuar?");

	
	}


document.getElementById('maximo').value=numeroMax;
document.getElementById('minimo').value=numeroMin;


}//FIN DE LA FUNCIÓN
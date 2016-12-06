function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

do
{	
	var numeroNuevo=0;
	numeroNuevo=prompt("Ingrese un numero");
	
	if(numeroNuevo>0)
	{	numeroNuevo=parseInt(numeroNuevo);
		positivo=positivo +numeroNuevo;
	}else  if (numeroNuevo<0)
	{
		
		negativo=negativo*numeroNuevo;
		console.log(negativo);
	}
	contador++;
	respuesta=prompt("Desea continuar?");

	console.log(numeroNuevo);
	
}while(respuesta!="no");

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
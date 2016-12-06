function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
do
{	
	var numeroNuevo=0;
	numeroNuevo=prompt("Ingrese un numero");
	numeroNuevo=parseInt(numeroNuevo);
	acumulador=acumulador +numeroNuevo;
	contador++;
	respuesta=prompt("Desea continuar?");
	
}while(respuesta=="si");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
function Mostrar()
{

	var contador=0;
	var acumulador=0;
	
	acumulador=parseInt(acumulador);
	
do
{	
	var numeroNuevo=0;
	numeroNuevo=prompt("Ingrese un numero");
	numeroNuevo=parseInt(numeroNuevo);
	acumulador=acumulador +numeroNuevo;
	contador++;
	
}while(contador<=4);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe=document.getElementById('importe').value;
	importe=parseInt(importe);
	var descuento=importe/100*25;
	descuento=parseInt(descuento);
	document.getElementById('resultado').value=importe-descuento;
}

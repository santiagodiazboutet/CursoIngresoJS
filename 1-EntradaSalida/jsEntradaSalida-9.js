/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	var aumento=sueldo/100*10;
	aumento=parseInt(aumento);
	document.getElementById('resultado').value=sueldo+aumento;

}

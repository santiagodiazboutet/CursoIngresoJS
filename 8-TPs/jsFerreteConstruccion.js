/*
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var Largo=document.getElementById('Largo').value;
	var Ancho=document.getElementById('Ancho').value;
	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);
	var perimetro=Largo*2+Ancho*2;
	var alambre=perimetro*3;
	alert(alambre);
}
function Circulo () 
{
	var radio = document.getElementById('Radio').value;

	var diametro=radio*2;


	var circum= Math.PI * diametro;

	var alambre=circum*3;

	alert(alambre);
}
function Materiales () 
{
	var Largo=document.getElementById('Largo').value;
	var Ancho=document.getElementById('Ancho').value;
	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);
	var perimetro=Largo*2+Ancho*2;
	var alambre=perimetro*3;
	alert(alambre);
}
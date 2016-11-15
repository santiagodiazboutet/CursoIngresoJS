/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno=document.getElementById('PrecioUno').value;
	var PrecioDos=document.getElementById('PrecioDos').value;
	var PrecioTres=document.getElementById('PrecioTres').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	alert(PrecioUno+PrecioDos+PrecioTres);
}
function Promedio () 
{
	var PrecioUno=document.getElementById('PrecioUno').value;
	var PrecioDos=document.getElementById('PrecioDos').value;
	var PrecioTres=document.getElementById('PrecioTres').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	var suma=PrecioUno+PrecioDos+PrecioTres;
	alert(suma/3);
}
function PrecioFinal () 
{
	var PrecioUno=document.getElementById('PrecioUno').value;
	var PrecioDos=document.getElementById('PrecioDos').value;
	var PrecioTres=document.getElementById('PrecioTres').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	var suma=PrecioUno+PrecioDos+PrecioTres;
	var iva=suma/100*21;
	suma=parseInt(suma);
	iva=parseInt(iva);
	alert(suma+iva);
}

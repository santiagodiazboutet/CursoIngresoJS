function Mostrar()
{var numero=prompt("ingrese un numero");
numero=parseInt(numero);
var contador=1;
var contpar=0;
for (var pares=0;numero>=contador;contador++) 
{ 	
	if ((contador%2)==0&&contador<numero)
	{
		
		pares+=2;
		contpar++;
		 document.write("<br>"+pares);
	}


}document.write("<br>contador"+contpar);



}//FIN DE LA FUNCIÓN
function Mostrar()
{
var numero=prompt("ingrese un numero");
numero=parseInt(numero);
var contador=2;
var contdiv=0;
contdiv=parseInt(contdiv);
for (;numero>contador;contador+=1) 
{ 	
	if ((numero%contador)==0)
	{	contdiv++;
		 
		 break;
	}
}
if (contdiv!=0)
{
	alert("Su numero no es primo");
}else
{
	alert("Su numero es primo");
}



}//FIN DE LA FUNCIÓN
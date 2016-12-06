function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var contadorPos=0;
	var contadorNeg=0;
	var contadorPar=0;
	var contadorCero=0;
	var respuesta="si";
	var sumaPos=0;
	sumaPos=parseInt(sumaPos);

	var sumaNeg=0;
	sumaNeg=parseInt(sumaNeg);
	while(respuesta!='no')
	{
	var numeroNuevo=0;
	numeroNuevo=prompt("Ingrese un numero");
	numeroNuevo=parseInt(numeroNuevo);
	if (numeroNuevo>0)
	{
		sumaPos=sumaPos + numeroNuevo;
		contadorPos++;
		console.log("sumapos"+sumaPos);
	}
	else if (numeroNuevo<0)
	{
		sumaNeg= sumaNeg+numeroNuevo;
		contadorNeg++;
		console.log("sumaneg"+sumaNeg);
	}
	if ((numeroNuevo%2)==0)
	{
		contadorPar++;
	}
	if (numeroNuevo==0)
	{
		contadorCero++;
	}
	contador++;
	respuesta=prompt("Desea continuar?");

	
	}

document.write("Suma negativos = "+sumaNeg+". Suma positivos = "+sumaPos+". Cantidad de positivos = "+contadorPos
+". Cantidad de negativos = "+ contadorNeg+". Cantidad de ceros =  "+contadorCero
+". Cantidad de pares = "+contadorPar+". Promedio de positivos = "+(sumaPos/contadorPos)
+". Promedio de negativos = "+(sumaNeg/contadorNeg)+". Diferencia entre positivos y negativos= "
+(sumaPos+sumaNeg));


}//FIN DE LA FUNCIÓN
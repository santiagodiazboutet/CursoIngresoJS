/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );

	numeroSecreto=Math.floor((Math.random()*100)+1);
	contadorIntentos=0;
console.log(numeroSecreto);
}

function verificar()
{
	contadorIntentos+=1;
	document.getElementById('intentos').value=contadorIntentos;
	//o var=var+1; o var++;
	var numero;
	numero=document.getElementById('numero').value;
console.log(contadorIntentos);
	if (numero==numeroSecreto)
	{
		/*if (contadorIntentos==1)
		{
			alert("Usted es un Psíquico");
		}
		else if(contadorIntentos==2)
		{
			alert("Excelente percepción");
		}
		else if (contadorIntentos==3)
		{
			alert("Esto es suerte");
		}
		else if (contadorIntentos==4)
		{
			alert("Excelente tecnica")
		}
		else if(contadorIntentos==5)
		{
			alert("Usted está en la media");
		}
		else if(contadorIntentos<11)
		{
			alert("Falta técnica");
		}
		else
		{
			alert("Afortunado en el amor!!!");
		}*/

		switch(contadorIntentos)
		{
			case 1:
			alert("Usted es un Psíquico");
			break;
			case 2:
			alert("Excelente percepción");
			break;
			case 3:
			alert("Esto es suerte");
			break;
			case 4:
			alert("Excelente técnica");
			break;
			case 5:
			alert("Usted está en la media");
			break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			alert("Falta técnica");
			break;
			default:
			alert("Afortunado en el amor!!!");
			break;
		}
	}
	else if (numero>numeroSecreto)
	{
		alert("se paso... uso "+contadorIntentos+" intentos" )
	}
	else
	{
		alert("falta... uso "+contadorIntentos+" intentos")
	}

}
	


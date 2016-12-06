/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $precio pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*con IF


function CalcularPrecio () 
{
 var cantidad;
 var IIBB;
 var marca;
 var preciofinal;
 var precio=35;
 var bruto;
 cantidad=document.getElementById('Cantidad').value;
 marca=document.getElementById('Marca').value;
 bruto=precio*cantidad;

 	if (cantidad>5)
 	{
 		preciofinal=bruto/2;
 		
 	}
 	else if (cantidad==5)
 	{
 		
 		if (marca=="ArgentinaLuz")
 		{
 			preciofinal=bruto*0.6;
 			
 		}
 		else
 		{
 			preciofinal=bruto*0.7;
 			
 			
 		}
 	}
 	else if (cantidad==4)
 	{
 		if (marca=="ArgentinaLuz"||marca=="FelipeLamparas")
 		{
 			preciofinal=bruto*0.75;
 			
 			
 		}
 		else
 		{
 			preciofinal=bruto*0.8;
 			
 			
 		}
 	}
 	else if(cantidad==3)
 	{
 		if(marca=="ArgentinaLuz")
 		{
 			preciofinal=bruto*0.85;
 			
 		}
 		else if(marca=="FelipeLamparas")
 		{
 			preciofinal=bruto*0.9;
 			
 		}
 		else
 		{
 			preciofinal=bruto*0.95;
 			
 		}
 	}
 	else
 	{
 		preciofinal=bruto;
 		document.getElementById('precioDescuento').value="$"+preciofinal;
 	}

 	if (preciofinal>119)
 	{
 		preciofinal=parseInt(preciofinal);
 		IIBB=parseInt(IIBB);
 		IIBB=preciofinal*0.1;
 		preciofinal+=IIBB;
 		
 		alert("IIBB Usted pago $"+IIBB)
 	}

document.getElementById('precioDescuento').value="$"+preciofinal;
}
*/


function CalcularPrecio () 
{
 var cantidad;
 var IIBB;
 var marca;
 var preciofinal;
 var precio=35;
 var bruto;
 cantidad=document.getElementById('Cantidad').value;
 marca=document.getElementById('Marca').value;
 bruto=precio*cantidad;
 cantidad=parseInt(cantidad);

 	switch(cantidad)
 	{
 		case 1:
 		case 2:
 		preciofinal=bruto;
 		break;
 		case 3:
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			preciofinal=bruto*0.85;
 			break;
 			case "FelipeLamparas":
 			preciofinal=bruto*0.9;
 			break;
 			default:
 			preciofinal=bruto;
 			break;
 		};
 		break;
 		case 4:
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			case "FelipeLamparas":
 			preciofinal=bruto*0.75;
 			break;
  			default:
 			preciofinal=bruto*0.80;
 			break;
 		};
 		break;
 		case 5:
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			preciofinal=bruto*0.60;
 			break;
  			default:
 			preciofinal=bruto*0.70;
 			break;
 		};
 		break;
 		default:
 		preciofinal=bruto*0.50;
 		break;
 	}
 	if (preciofinal>120)
 	{
 		preciofinal=parseInt(preciofinal);
 		IIBB=parseInt(IIBB);
 		IIBB=preciofinal*0.1;
 		preciofinal+=IIBB;
 		
 		alert("IIBB Usted pago $"+IIBB)
 	}

document.getElementById('precioDescuento').value="$"+preciofinal;
}





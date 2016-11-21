function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
	
	case "Abril":
	case "Junio":
	case "Agosto":
	case "Noviembre":
	case "Septiembre":
	alert("Este mes tiene 30 días");
	break;
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	alert("Este mes tiene 31 días");
	break;	
	case "Febrero":
	alert("Este mes tiene 28 días");
	break;
}
	



}//FIN DE LA FUNCIÓN
function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
	if(edad>17){
		alert("Mayor de edad");
	} 
	else if (edad>=13){
		alert("Adolescente");
	}else {
		alert("Niño");
	}
	



}//FIN DE LA FUNCIÓN
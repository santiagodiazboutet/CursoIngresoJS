function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random=Math.floor((Math.random()*10)+1);
	if(random==9||random==10){
		alert("Excelente");
	}else if (random>=4){
		alert("Aprobó");
	}else if (random<4){
		alert("Vamos, la proxima se puede");
	}
console.log(random);
}//FIN DE LA FUNCIÓN
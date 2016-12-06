/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad=0;
 var sexo;
 var estCivili=0;
 var estadoCivil;
 var suelBruto=0;
 var legajo=0;
 var nacionalidad;

while (edad<18||edad>91)
{
	edad=prompt("Ingrese edad entre 18 y 90 años inclusive");
	edad=parseInt(edad);
}
while (sexo!="f"&&sexo!="m"&&sexo!="F"&&sexo!="M")
{
	sexo=prompt("Ingrese M o F en concorgancia a su sexo");

}switch(sexo)
{
	case "f":
	case "F":
		sexo="Femenino";
	break;
	case "m":
	case "M":
		sexo="Masculino";
	break;
}


while (estCivili<1||estCivili>4)
{
	estCivili=prompt("Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
	estCivili=parseInt(estCivili);
}

switch(estCivili)
{
	case 1:
		estadoCivil="Soltero/a";
	break;
	case 2:
		estadoCivil="Casado/a";
	break;
	case 3:
		estadoCivil="Divorciado/a";
	break;
	case 4:
		estadoCivil="Viudo/a";
	break;
}


while(suelBruto<7999)
{
	suelBruto=prompt("Ingrese Sueldo bruto");
	suelBruto=parseInt(suelBruto);
}
while(legajo<999||legajo>9999)
{
	legajo=prompt('Ingrese su numero de legajo');
	legajo=parseInt(legajo);
}
while(nacionalidad!="A"&&nacionalidad!="E"&&nacionalidad!="N"&&nacionalidad!="a"&&nacionalidad!="e"&&nacionalidad!="n")
{
	nacionalidad=prompt(" Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")
}switch(nacionalidad)
{
	case "a":
	case "A":
	nacionalidad="Argentino/a";
	break;
	case "e":
	case "E":
	nacionalidad="Extranjero/a";
	break;
	case "n":
	case "N":
	nacionalidad="Nacionalizado/a";
	break;
}
document.getElementById('Edad').value=edad;
document.getElementById('Sexo').value=sexo;
document.getElementById('EstadoCivil').value=estadoCivil;
document.getElementById('Sueldo').value="$"+suelBruto;
document.getElementById('Legajo').value=legajo;
document.getElementById('Nacionalidad').value=nacionalidad;
}


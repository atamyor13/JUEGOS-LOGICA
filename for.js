//Estos son ejemplos con for
//Este ejercicio muestra diferentes formas de usar el for
//creado por Alejandra Tamayao Rivera 01/04/20
for (var i = 0; i<= 10; i++) {
	//Intrucciones para el for o acciones
	document.write("Esto funciona "+"<br>");
}
//for con numeros
//si cambio el cero en vez de 0 a 1 imprime desde el 1 hasta el 100
for (i =0; i<= 100; i++) {
	document.write(i+"<br>");
}
//for con variables 
var numeroDeCliente=50;
for (i =1; i <= numeroDeCliente; i++){
	document.write(i+"<br>");
}
//for con semana
var semana=["Lunes","Martes","Miercoles","Jueves","Viernes", "Sabado", "Domingo"];
for (i = 0; i<= semana.length-1; i++) {
	document.write(semana[i]+"<br>")
}
//meses
var meses=["Enero","Febrero","Marzo","Abril","Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
for (i = 0; i<= meses.length-1; i++) {
	document.write(meses[i]+"<br>")
}

//1900 ANOS BISIESTOS HASTA HOY 
//bombero, variables, meses, y logica de archivos
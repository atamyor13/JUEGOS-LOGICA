//Se evaluan las dos fechas a estudiar
var a = 1900;
var b = 2020;
//estas se analizan en un cilo for para que itere los años correspondientes
for (a; a<=b; a++){
  if (((a % 4 == 0) && (a % 100 != 0 )) || (a % 400 == 0)){
    document.writeln("<br>" + a + ' Es bisiesto ' + "<br>");
  }else {
  	//aqui se analiza si no es bisiesto
    document.writeln("<br>" + a + ' No es bisiesto '+ "<br>");
  }
}
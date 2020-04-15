document.write("ESTA ES LA RESPUESTA: <br><br>" )
var i;
var matriz=new Array(3);
for (i = 0; i < matriz.length; i++) {
	matriz[i]=new Array(3);
}
matriz[0][0]=8;
matriz[0][1]=3;
matriz[0][2]=6;

matriz[1][0]=4;
matriz[1][1]=1;
matriz[1][2]=2;

matriz[2][0]=5;
matriz[2][1]=4;
matriz[2][2]=7;

for (i =0; i < matriz.length; i++) {
	for (var j=0; j <matriz[i].length; j++) {
		document.write(matriz[i][j]+"    ");
	}
	document.write("<br><br>");
}
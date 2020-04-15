document.write("Hii")
var syr=[8]
syr[0]=3;
syr[1]=5;
syr[2]=7;
syr[3]=8;
syr[4]=7;
syr[5]=8;
syr[6]=15;
syr[7]=37;

var syr2=[8]
syr2[0]=1;
syr2[1]=2;
syr2[2]=2;
syr2[3]=1;
syr2[4]=5;
syr2[5]=5;
syr2[6]=3;
syr2[7]=39;

for (var i=0; i <syr.length; i++) {
		var sumayresta=[2]
	sumayresta[0]=syr[i]+syr2[i];
	sumayresta[1]=syr[i]-syr2[i];
	document.write("<br> -Este es el resultado de la suma: " + sumayresta[0] + "<br>")
	document.write("-Este es el resultado de la resta: " + sumayresta[1] + "<br>")
	document.write("-Este es el resultado total: " + sumayresta[1]+sumayresta[0]+ "<br>")
}
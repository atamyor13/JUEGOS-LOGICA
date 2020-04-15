alert("Los bomberos son llamados de emergencia a rescatar un niño un perro y un gato en un edificio que está en llamas. Todos están en un piso alto. El bombero tiene que escoger como rescatar a los tres individuos. Solo puede llevar uno a la vez. Sin embargo puede mantener un individuo en la escalera siempre. El perro y el gato tienen collar y se pueden amarrar. Pero el perro no se puede quedar con el gato porque se lo come. Ni tampoco con el niño porque lo muerde. Debes poder bajar a los tres uno por uno sin que pase lo anterior. <br>");

alert("¿A quíen bajarias primero?");
var n="niño";
var g="gato";
var p="perro";
var r;

alert("1) " +n);
alert("2) " +g);
alert("3) " +p);

r=prompt('Ingresa respuesta:' , '');

if (r==1) {

	document.write("Bajaste al niño, entonces el pero y el gato se comeran, Fallaste");

}else {if (r==2) {

	document.write("Bajaste al gato, entonces el pero mordera al niño, Fallaste");

}else {if (r==3) {

	alert("Has elegido correctamente, al bajar al perro, continua salvando al resto");
	alert("Y ahora ¿A quien bajaras?");
	var n="niño";
	var g="gato";
	var r2;
	alert("1) "+n);
	alert("2) "+g);
	r2=prompt('Ingresa respuesta: ','');

	if (r2==1) {

		alert("Bajas el niño y debes subir por el gato, debes suber al perro o el niño, ya que no se pueden quedar los dos allí");
		alert("¿A quién subes?");
		alert("1) "+n);
		alert("2) "+p);
		r3=prompt('Ingresa respuesta; ','');

		if (r3==1) {

			document.write("Subes al niño, lo dejas y bajas con el gato, cuando dejas el gato vuelves por el niño dejas el gato con el perro y el perro se come al gato, FALLASTE. ");

		}else{ if (r3==2) {
				alert("Al subir con el perro, lo dejas y bajas con el gato, solo queda el perro por salvar");
				alert("FELICITACIONES, HAS SALVADO A TODOS");
				document.write("GANASTE");
			}
		}
	}else{ if (r2==2) {

			alert("Bajaste al gato y debes subir por el niño, pero tienes que subir al perro o al gato, ya que no se pueden quedar los dos");
			alert("¿A quién subes?");
			alert("1) "+g);
			alert("2) "+p);
			r3=prompt('Ingresa respuesta: ','');

			if (r3==1) {

				document.write('Ingresa respuesta: ','');

				if (r3==1) {

					document.write("Al subir el gato, lo dejas y bajas con el niño, sin embargo el perro lastima al niño, Fallaste");

				}else{ if (r3==2) {
						alert("Al subir con el perro, lo dejas y bajas con el niño, este queda con el gato y luego subes por el perro.");
						alert("Felicidades, salvaste a todos.");
						document.write("Ganaste");
					}
				}
			}
		}
	}
}
}
}
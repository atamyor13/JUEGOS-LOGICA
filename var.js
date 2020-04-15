var iva = 16+52;        // variable tipo entero
var total = 234.65*8;  // variable tipo decimal
document.write("Estas son las variables numericas tipo entero: " + iva + "<br>");
document.write("Estas son las variables numericas tipo decimal: " + total + "<br>");

//CARACTERES

var mensaje = "Bienvenido a nuestro sitio web";
document.write(" Esta es una variable de tipo caracter: " + mensaje + "<br>");

//ARREGLO
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var diaSeleccionado = dias[0];    // diaSeleccionado = "Lunes"
var otroDia = dias[5];            // otroDia = "Sábado"

document.write(" Esta es una variable de tipo Arreglo: " + diaSeleccionado + "<br>");
document.write(" Esta es una variable de tipo Arreglo: " + otroDia + "<br>");

//Booleanos

var Amigos = false;
var familia = true;

document.write(" Esta es una variable de tipo booleanos ejemplo de supuestos amigos: " + Amigos + "<br>");
document.write(" Esta es una variable de tipo booleanos ejemplo de familia: " + familia + "<br>");

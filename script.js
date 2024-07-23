/* 1- Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o let en la declaración. */
/* let nombre = "Homero";
let apellido = "Apellido";
let edad = 49;
console.log(nombre);
console.log(apellido);
console.log(edad); */

/* 2- Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const. */
/* const ciudad1 = "Buenos Aires";
const ciudad2 = "Roma";
const ciudad3 = "Nueva york";
const ciudad4 = "Paris";
const ciudad5 = "Londres";
console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5); */

/* 3- Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.
 */
/* let nombreCompleto = "Camila Mignone";
let fecha = "29-07-2001";
let ciudadano = "Argentina";
let nroDocumento = "12345678";
let Documento = "DNI "+ nroDocumento+ " "+ "Nombre "+ nombreCompleto+ " "+ "Fecha de nacimiento "+ fecha+ " "+ "Ciudadania "+ ciudadano;
console.log(Documento); */

/* 4- Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta. */
/* let Yo = prompt("Ingresa tu nombre"); 
let Mama = prompt("Ingresa el nombre de tu mama");                                           
let Papa = prompt("Ingresa el nombre de tu papa");
let Hermano = prompt("Ingresa el nombre de tu hermano/a");
let mascota = prompt("Ingresa el nombre de tu mascota");
let familia = "Mi nombre es "+ Yo+ " "+ "El nombre de mis padres es "+ Mama+ " y "+ Papa+ " "+ "El nombre de mi hermano/a es "+Hermano+ " "+ "Y mi mascota se llama "+mascota;
console.log(familia); */

/* 5- Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.
 */

/* let precio1 = prompt("Ingrese un precio");
let descuento20 = precio1 - (precio1 * 0.2);
let descuento30 = precio1 - (precio1 * 0.3);
console.log("El precio descontado hoy queda en "+ descuento20);
console.log("Pero si viene manana tiene mas decuento y queda en "+ descuento30); */

/* ------------------------------------------------------------------------------------------ */

/* 1- Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”. */
/* let nombre = "Juancho";
let nombreIngresado = prompt("Ingresa un nombre");
if nombreIngresado == nombre {
    alert = "Fui yo";
}else{
    alert = "Yo no fui";
} */

/* 2- Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”. */
/* let teclaIngresada = prompt("Ingrese una tecla")
if ((teclaIngresada == "y") || (teclaIngresada == "Y")) {
    console.log("Correcto")
}else{
    console.log("Error")
} */

/* 3- Solicitar al usuario un (1) número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.
 */
/* let numeroIngresado = prompt("Ingrese un numero del 1 al 4");
if (numeroIngresado == 1) {
    alert("Elegiste a Homero");
}else if (numeroIngresado == 2) {
    alert("Elegiste a Marge");
}else if (numeroIngresado == 3) {
    alert("Elegiste a Bart");
}else if (numeroIngresado == 4) {
    alert("Elegiste a Lisa");
}else {
    alert("Elegi un numero del 1 al 4, cornudo");
} */

/* 4- Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.
 */
/* let numeroIngresado2 = prompt("Ingrese un numero");
if ((numeroIngresado2 >= 0) && (numeroIngresado2 <= 1000)) {
    alert("Presupuesto bajo");
}else if ((numeroIngresado2 >= 1001) && (numeroIngresado2 <= 3000)) {
    alert("Presupuesto medio");
}else (numeroIngresado2 > 3000) {
    alert("Presupuesto alto");
}
 */
/* 5- Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. 
Caso contrario, la salida será “Error: Es necesario cargar todos los productos”. */
/* let producto1 = prompt("Ingrese un producto de almacen");
let producto2 = prompt("Ingrese un producto de almacen");
let producto3 = prompt("Ingrese un producto de almacen");
let producto4 = prompt("Ingrese un producto de almacen");
if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let compra = "Lista de supermercado "+ "1- "+producto1+ " "+ "2- "+producto2+ " "+ "3- "+producto3+ " "+ "4- "+producto4;
    console.log(compra);
}else {
    alert("Te estas olvidando un producto!");
} */

/* ------------------------------------------------------------------------------------------ */

/* 1- Solicitar al usuario un (1) un número y un (1) texto. 
Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario. */
let repeticiones = prompt("Elegi un numero que represente la cantidad de repeticiones");
let textoRepetido = prompt("Que texto queres que se repita?");
for (let index = 0; index < repeticiones; index++) {
    console.log(textoRepetido);
}

/* 2- Solicitar al usuario un (1) número. 
Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. 
Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo. */

/* 3- Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados. */

/* 4- Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados. */

/* 5- Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. 
Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.
 */
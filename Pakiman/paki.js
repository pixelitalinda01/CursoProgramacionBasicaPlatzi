
var imagenes = [];// esto es un array asociativo a momento de tener los [] para atraer las imagenes con el url
imagenes ["Cauchin"]= "vaca.png";
imagenes ["Pokacho"]= "pollo.png";
imagenes ["Tocinauro"]= "cerdo.png";
imagenes ["Lobpix"]= "lobo.png";

var coleccion =[]; // un array numerico para realizar nuestra coleccion
coleccion.push(new Pakiman ("Cauchin", 100, 30)); // crear una coleccion de pakimanes y en el parametro de push invoca el parametro
coleccion.push(new Pakiman ("Pokacho", 80, 50));
coleccion.push(new Pakiman ("Tocinauro", 120, 40));
coleccion.push(new Pakiman ("Lobpix", 130, 50));

console.log(coleccion);

for(var pakin of coleccion) // este for solo va a funcionar con la cantidad de objetos que esta en el array y en este caso lo metera en la variable pakin y el in o el of  nos sirve para recorrer objetos que estan adentro
{
  pakin.mostrar();
}
for(var x in coleccion[0])
{
  console.log(x);
}

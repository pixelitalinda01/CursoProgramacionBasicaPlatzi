var jf = require ("johnny-five"); // esta es la variable para traernos la libreria
var circuito = new js.Board();// esto es simplente la sintaxis basica de johnni five

circuito.on("ready", prender)// cuando el circuito este listo se de en la funcion prender

function prender()
{
  var bombillito = new jf.Led(9) // los parametros que se necesitan es el  puerto del ardino
  var rojito = new jf.Led(13);// aqui le decimos que puerto es en el arduino
  bombillito.blink(200); // esto nos sirve para que parpade
  rojito.blink(700);// este es de nuestro segundo led
  console.log("Hola mama se hacer hardware");// te manda un mesaje a la consola
}

var cinco = require("johnny-five");
var circuito = new cinco.Board();
var bombillo, motorcito, celda;// declaramos todas las variables
var turno = 0;

circuito.on("ready", prender);

function prender()
{
  var configuracion = {pin:"A0", freq: 50};// configuracion del objeto de jv mas el pin y el sensor de luz en este caso es 50
  celda = new cinco.Sensor(configuracion);//unimos con jonny, la configuracion para la celda

  bombillo = new cinco.Led(13);// es para prender nuestro led
  bombillo.on();

  motorcito = new cinco.Servo(9);
  motorcito.to(90);// esto es para mover el servo y el 90 es para que se mueva en 90 grados
  ondear();
}

function ondear()// esta funcion sirve para saber cada segundo el valor de algo
{
  console.log("Luz: " + celda.value);// esto es para ver el valor de la cantidad de luz que recibe la celda
  var luz = celda.value;//se ejecute varias veces
  if(luz > 800)// es para ver si va estar ondenado
  {
    if(turno == 1)
    {
      turno = 0;
      motorcito.to(70);
    }
    else
    {
      turno = 1;
      motorcito.to(110);
    }
  }
  else
  {
      motorcito.to(150);
  }
  setTimeout(ondear, 1000);
}

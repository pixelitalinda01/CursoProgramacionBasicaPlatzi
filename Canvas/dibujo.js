var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById ("dibujito");
var ancho = d.width;
var lienzo = d.getContext ("2d");

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick ()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var yf, xi;
  var colorcito = "blue";
  var espacio = (ancho / lineas) / 2;

  for (l = 0; l < lineas; l++)
  {
  yi = espacio * l;
  xf = espacio * (l + 1);
   dibujarlinea (colorcito, 200, yi, 200 + xf, 200);
   dibujarlinea (colorcito, 200, ancho-yi,200 - xf, 200);
   dibujarlinea (colorcito, 200, yi,200 - xf, 200);
   dibujarlinea (colorcito, 200, ancho-yi, 200 + xf, 200);


   console.log("lineas" + 1);
   }

   dibujarlinea(colorcito, 200,0,200,400);
   dibujarlinea(colorcito, 0,200,400,200);
   dibujarlinea(colorcito, 0,0,0,400);
   dibujarlinea(colorcito, 0,400,400,400);
   dibujarlinea(colorcito, 0,0,400,0);
   dibujarlinea(colorcito, 400,0,400,400);
   }

/**  for (l = 0; l < lineas; l++)
   {
   xi = espacio * (40 - l);
   yf = espacio * (21 + l);
    dibujarlinea (colorcito, xi, 200, 200, yf);
    console.log("lineas" + 1);
    }

    for (l = 0; l < lineas; l++)
    {
    yi= espacio * l;
    xf = espacio * (19 - l);
     dibujarlinea (colorcito, 200, yi, xf, 200);
     console.log("lineas" + 1);
     }

     for (l = 0; l < lineas; l++)
     {
     xi = espacio * l;
     yf = espacio * (21 + l);
      dibujarlinea (colorcito, xi, 200, 200, yf);
      console.log("lineas" + 1);
    }**/

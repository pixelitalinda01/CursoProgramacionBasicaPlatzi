var teclas ={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);
document.addEventListener("keyup", moverLobito);
var a = 0
var b = 0

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png"

var fondo ={
  url: "tile.png",
  cargaOK: false
};

 var vaca ={
  url: "vaca.png",
  cargaOK: false
};

var cerdo ={
 url: "cerdo.png",
 cargaOK: false
};

var pollo ={
 url: "pollo.png",
 cargaOK: false
};

var lobito ={
 url: "lobito.png",
 cargaOK: false
};

var cantidad = aleatorio (5,15);
var cantidadCerdos = aleatorio (1,10);
var cantidadpollo = aleatorio (4,15);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarfondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

lobito.imagen = new Image();
lobito.imagen.src = lobito.url;
lobito.imagen.addEventListener("load", cargarLobo);

function cargarLobo()
{
  lobito.cargarOK = true;
   dibujar();
}

function cargarfondo()
{
  fondo.cargarOK = true;
   dibujar();
}

function cargarVacas()
{
  vaca.cargarOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargarOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargarOK = true;
  dibujar();
}


function dibujar()
{
  if (fondo.cargarOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargarOK)
  {
    console.log(cantidad);
    for (var v= 0; v < cantidad; v++)
     {
       var x = aleatorio (0, 5)
       var y = aleatorio (0, 5)
       var x = x * 80;
       var y = y * 80;
       papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargarOK)
  {
    console.log(cantidadCerdos);
    for (var v= 0; v < cantidadCerdos; v++)
     {
       var x = aleatorio (0, 5)
       var y = aleatorio (0, 5)
       var x = x * 40;
       var y = y * 40;
       papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if (pollo.cargarOK)
  {
    console.log(cantidadpollo);
    for (var v= 0; v < cantidadpollo; v++)
     {
       var x = aleatorio (0, 5)
       var y = aleatorio (0, 5)
       var x = x * 60;
       var y = y * 60;
       papel.drawImage(pollo.imagen, x, y);
    }
  }
  if (lobito.cargarOK)
  {
    papel.drawImage(lobito.imagen, a, b);
  }
}

function moverLobito(evento)
{

      var movimiento =10
      switch (evento.keyCode)
     {
      case teclas.UP:
      if (b>0){
      b = b - movimiento
      dibujar ();
      }
      console.log ("arriba");
      break;
      case teclas.DOWN:
      if(b<450){
      b = b + movimiento
      dibujar ();
      console.log("abajo");
      }
      break
      case teclas.LEFT:
      if (a>0){
      a = a - movimiento
      dibujar ();
      console.log("izquierda");
      }
      break
      case teclas.RIGHT:
        if(a<450){
      a = a + movimiento
      dibujar ();
      console.log("derecha");
    }
      break;
      default:
      console.log("otra tecla");
      break;
    }
  }


function aleatorio(min, max)
{
var resultado;
resultado = Math.floor(Math.random() * (max - min + 1)) + min;
return resultado;
}

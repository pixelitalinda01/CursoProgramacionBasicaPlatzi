var imagenes = [];
imagenes ["billete_100"] = "billete100.png";
imagenes ["billete_50"] = "billete50.png";
imagenes ["billete_20"] = "billete20.png";
imagenes ["moneda_10"] = "moneda10.png";
imagenes ["moneda_5"] = "moneda5.png";

class Billete
 {
  constructor(valor, cantidad)
  {
    this.valor = valor;
    this.cantidad=cantidad;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
  mostrar()
  {
    for (var i = 1; i < this.cantidad; i++) {
      resultado.innerHTML += "<img src =" + this.image.src + ">";
    }
    resultado.innerHTML += "<hr />"

  }
}
function entregarDinero()
{
  entregado = [];
  var numero = document.getElementById("dinero");
  var dinero =parseInt (numero.value);
  for (var bi of caja )
  {
    if (dinero > 0)
     {
      div = Math.floor (dinero/bi.valor);
      if (div > bi.cantidad)
      {
        papeles= bi.cantidad;
      }
        else
        {
          papeles = div;
        }
        entregado.push(new Billete (bi.valor, papeles) );
        dinero = dinero - (bi.valor * papeles);
     }
   }
       if (dinero > 0)
     {
       resultado.innerHTML ="soy un cajero pobre y no tengo dinero:(";
     }
     else
     {
     for (var e of entregado)
     {
        if(e.cantidad > 0)
        {
          resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";

        }
     }
   }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );
var div =0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", entregarDinero);

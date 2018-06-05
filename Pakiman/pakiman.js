class Pakiman // con esto creamos la clase de un objeto
{
 constructor (nombre, vida, ataque)
  {
    this.imagen = new Image(); // esta va a ser la representacion visual del pakiman dentro de nuestra clase
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;

    this.imagen.src = imagenes[this.nombre]; //para unir el nombre del pakiman junto con su url
  }
  hablar ()// ponemos poner una funcion sin necesidad de ponert fontion ya que aqui ya se entiende cuando es un bloque de codigo
  {
    alert(this.nombre);
  }
  mostrar() //creamos una funcion para mostrar la imagen en nuestro documento
  {
     document.body.appendChild(this.imagen); // esto es como agregarle un hijo para mostrar la imagen hay que mostrarle que debe ser en el body
     document.write("<p>");// vamos a anotar todos los atributos que tienen los Pakimanes
     document.write("<strong>" + this.nombre + "</strong><br/>");
     document.write("Vida" + this.vida + "<br/>");
     document.write("Ataque" + this.ataque + "<hr/>"); // el hr nos funciona para trazar una linea y separar los objetos
     document.write("</p>");
  }
}

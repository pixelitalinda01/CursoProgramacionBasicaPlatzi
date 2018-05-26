for (var i = 1; i <=100; i++)
{
 if (esDivisible (i,3) && !esDivisible(i,5))
 {
  document.write("Fizz");
 }
 if (esDivisible(i,5) && !esDivisible(i,3))
 {
  document.write("Buzz");
 }
 if(!esDivisible(i,3) && !esDivisible(i,5))
 {
  document.write(i);
 }
 if (esDivisible(i,3) && esDivisible(i,5))
 {
   document.write("lo logre")
 }
  document.write("<br />");
}

function esDivisible(num,divisor)
{
  return num % divisor == 0
}

alert("Bienvenido a los Siete Reinos. Podras pasar si sabes la palabra secreta.")
alert("Vas a tener dos intentos, si no, tu entrada al Reino sera prohibida, salvaje.")

let palabraSecreta = "dracarys";
let ingresar = false

for (let i = 2; i >= 1; i = i - 1) {
    let ingreso = prompt("ingresa la palabra secreta");
    if (palabraSecreta === ingreso) {
        alert("La palabra secreta es correcta.");
         ingresar = true;
        break;
    } else {
        alert ("Esa no es la palabra secreta.");
    }
}
if (ingresar) {
    alert ("Bienvenido a los Siete Reinos. A continuacion elija su destino.");
    let opcion = prompt(

        "Elegí tu destino: \n1 - Winterfell. \n2 - The Riverlands. \n3 - The Vale. \n4 - The Stormlands. \n5 - The Westerlands. \n6 - Dorne. \n7 - The Reach. \n8 - King's Landing."
    
      );
      if (opcion == 1) {
        alert("Su eleccion es Winterfell, abriguese porque hace mucho frio.")
         }
         else if (opcion == 2) {
            alert ("Su eleccion es Riverlands, tenga cuidado de no ser traicionado.")
         }
         else if (opcion == 3) {
            alert("Su eleccion es The Vale, ojo donde pisa, no sea cosa que la puerta de la luna este abierta.")
         }
         else if (opcion == 4) {
            alert("su eleccion es Stormlands, cuidado con las sombras, escuche que son mortales.")
            }
        else if (opcion == 5) {
            alert("Su eleccion es Westerlands, si va por alguna deuda con algun Lannister, despreocupese que sera saldada.")
            }
        else if (opcion == 6) {
            alert("Su eleccion es Dorne, ¡tenga mucho cuidado con los venenos!")
        }
        else if (opcion == 7) {
            alert("Su eleccion es Reach, una recomendacion, visite High Garden, en esta epoca del año es hermoso.")
        }
        else if (opcion == 8) {
            alert("Su eleccion es King's Landing, que dios se apiade de su alma, usted es hombre muerto.")
            
        }
}  

else {
    alert("La palabra secreta no es correcta, tu entrada al Reino esta prohibida.");
}

// Operadores Lógicos

let lenguajes = 2;
let edadFede = 39;

let mayor = edadFede < 18;
console.log(mayor);

let sabeMasDeUnLenguaje = lenguajes > 1;
console.log(sabeMasDeUnLenguaje);

// And &&

let puedeTrabajar = (mayor && sabeMasDeUnLenguaje);
console.log(puedeTrabajar, "Puede trabajar");

let resultado = ( (1<6) && true && true && true)
console.log(resultado);

// Or ||

let recibido = false;
let programa = false;

let puedePostular = (recibido || programa)
console.log(puedePostular, "No puede postular")

let resultado2 = (true || true || false || false)
console.log(resultado2);

// Not !

let recibido2 = true;
console.log(!recibido2);

console.log( !true );


// If, else if, else

let sabeProgramar = false;

//palabra reservada + (condicion) + cuerpo del condicional
if(sabeProgramar === false){
     console.log("El alumno NO sabe programar");
}

let numero = 3;

if( numero < 10 ){
     console.log("El numero es menor a 10");
}

let numeroX = 3;

if( numeroX < 5 ){
     let resultado = numeroX * 2;
     console.log(resultado);
}

let numeroY = 5;

function buscarSiEsMayorMenorIgual( numero ){
     let resultado;
     if(numero < 5){
          resultado = numero + 10;
     }else if(numero > 5){
          resultado = numero + 100;
     }else{
          resultado = numero - 5;
     }
     return resultado
}
console.log(buscarSiEsMayorMenorIgual(numeroY)); 

// Prompt

let resultadoPrompt = prompt('Ingrese un dato')
console.log(resultadoPrompt);


// Switch

let respuestaUsuario = prompt('Ingrese un color rojo / verde / azul')

// switch(respuestaUsuario){
//      case "rojo":
//           console.log("El color de la sangre 🔴");
//           break;
//      case "verde":
//           console.log("El color de la naturaleza 🟢");
//           break;
//      case "azul":
//           console.log("El color del mar 🔵");
//           break
//      default:
//           console.log("El valor ingresado es incorrecto, volvé a intentarlo");
//           break;
// };


let respuestaUsuario2 = prompt('Ingrese una edad')
console.log(respuestaUsuario2);


// switch(respuestaUsuario2){
//      case (respuestaUsuario2 > 18):
//           console.log("Ud es mayor de edad");
//           break;
//      case (respuestaUsuario2 < 18):
//           console.log("Ud es menor de edad");
//           break;
//      case (respuestaUsuario2 == 18):
//           console.log("Ud tiene 18");
//           break;
//      default:
//           console.log("La edad ingresada no es correcta");
//           break
// }

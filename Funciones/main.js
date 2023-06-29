let nombre = "Nicolas"
console.log("después de la linea 2:" , nombre)
// funciones 

// declaracion
function crearMensaje(){
    console.log('inicio de la funcion')
    let nombre = prompt("Ingrese su nombre")
    const edad = prompt( "Ingrese su edad" )
    const mensaje = `Hola soy ${nombre} y tengo ${edad} años` 
    console.log( mensaje )
    console.log('fin de la funcion')
}

// expresion
const crearMensajeDos = function(){
    console.log('inicio de la funcion')
    let nombre = prompt("Ingrese su nombre")
    const edad = prompt( "Ingrese su edad" )
    const mensaje = `Hola soy ${nombre} y tengo ${edad} años` 
    console.log( mensaje )
    console.log('fin de la funcion')
}

function crearMensajeTres( parametro1, parametro2 ){
    const mensaje = `Hola soy ${parametro1} y tengo ${parametro2} años` 
    console.log( mensaje )
} 

// argumentos
/* crearMensajeTres( "lucre" , 27 )
crearMensajeTres( "fede" , 39 )  */

// return

function crearMensajeCuatro( parametro1, parametro2 ){
    const mensaje = `Hola soy ${parametro1} y tengo ${parametro2} años` 
    return mensaje
}

let mensajeUno = crearMensajeCuatro( "Nicolás", 29 )
let mensajeDos = crearMensajeCuatro( "Lucre", 27 )
let mensajeTres = crearMensajeCuatro( "Fede", 39, "Rouyere" )

/* console.log( mensajeUno )
console.log( mensajeDos )
console.log( mensajeTres ) */



// scope
// var -> local
// let, const -> bloque

/* let nombre = "Catriel"

{
    {
        let nombre = "nicolas"
        console.log( nombre )
    }
}
console.log(nombre)
 */


// hoisting
// 1- levantar todas las declaraciones ( let, const, var, function )
// -> function crearMensaje, crearMensajeTres, crearMensajeCuatro
//    const crearMensajeDos,
//    let mensajeUno
//    let mensajeDos
//    let mensajeTres
//    var -> crea e inicializa la variable con undefined

// 2- ejecución 

let numero = 10

let resultado = multiplicar( numero, 5, 5 )
console.log( resultado )

function multiplicar( num1, num2, num3 ){
    return num1 * num2 * num3
}

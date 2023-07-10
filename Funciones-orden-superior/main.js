// Funciones flecha
// Las funciones flecha siempre son anonimas
// Si la funcion tiene una sola linea de ejecución, 
//podemos no poner las llaves y el return se da por implicito

const sumar = (a, b, c) => a + b + c
const resultado = sumar(20, 20, 20)


// Si tiene un solo parametro, no es obligatorio poner los parentesis
const crearSaludo = nombre => `Hola ${nombre}`

/* console.log( crearSaludo( 'Gabi' ) ) */
// En las funciones flecha el this es el objeto global
const mentor = {
    nombre: 'Nicolas',
    apellido: 'Cirulli',
    edad: 29,

    // con function si
    saludar: function () {
        console.log(this)
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
    },
    // con flecha no
    saludarDos: () => {
        console.log(this)
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
    }

}
/* mentor.saludar() */

// funcion flecha no tiene arguments disponible
const sumarNumeros = function () {

    let resultado = 0
    for (const elemento of arguments) {
        resultado += elemento
    }
    return resultado
}
/* console.log( sumarNumeros(10,20,30,40,50) ) */


// Funciones de orden superior
// Tiene que recibir una funcion por parametro o retornar una funcion

const calculadora = (operacion, num1 = 0, num2 = 0) => {
    const resultado = operacion(num1, num2)
    return resultado
}

/* const restar = (a,b) => a - b */

function multiplicar(a, b) {
    return a * b
}

/* console.log( calculadora( (a,b) => a + b, 30 , 20 ) )
console.log( calculadora( restar, 30 , 20 ) )
console.log( calculadora( multiplicar, 30 , 20 ) )
console.log( calculadora( function(a,b){ return a / b }, 30 , 20 ) ) */

// Metodos de arrays

const copiaMentores = [].concat(mentores)
console.log(copiaMentores)
// forEach

/* const fnParaForEach= ( elementoActual, indice ) => {
    console.log( `El mentor/a ${elementoActual.nombre} esta en el indice: ${indice}` )
}
copiaMentores.forEach( fnParaForEach ) */
/* 
    { nico...} -> fnParaForEach( { nico...}, 0, copiaMentores )
    { Lucre...} -> fnParaForEach( {Lucre...}, 1, copiaMentores )
    { Fede...} -> fnParaForEach( {Fede...}, 2, copiaMentores )
*/

// map
function fnMap(elementoActual, indice, arrayOriginal) {
    return elementoActual.nombre
}
const resultadoMap = copiaMentores.map(fnMap)
console.log("map:", resultadoMap)

/* 
 map -> 
    const aux = [ ]
    fnMap( { Nico...}, 0, copiaMentores ) -> "Nico" -> aux.push ( "Nico" )
    fnMap( { Lucre...}, 1, copiaMentores ) -> "Lucre"
    fnMap( { Fede...}, 2, copiaMentores ) -> "Fede"
    fnMap( { Cami...}, 3, copiaMentores ) -> "Cami"
    fnMap( { Kev...}, 4, copiaMentores ) -> "Kev"
    fnMap( { Flor...}, 5, copiaMentores ) -> "Flor"
    fnMap( { Sil...}, 6, copiaMentores ) -> "Sil"

    return [ "Nico", "Lucre", "Fede", "Cami", "Kev", "Flor", "Sil" ]
*/

// filter


const numeros = [1, 2, 3, 4]
const fnFilter = (numero) => {
    return numero % 2 == 0
}
console.log("filter:", numeros.filter(fnFilter))

/* filter 
   si recibe un true guarda el elemento en el nuevo array
   const aux = []
   fnFilter( 1, 0, [1,2,3,4,5,6,7] ) -> false 
   fnFilter( 2, 1, [1,2,3,4,5,6,7] ) -> true -> aux.push( 2 )
   fnFilter( 3, 2, [1,2,3,4,5,6,7] ) -> false 
   fnFilter( 4, 3, [1,2,3,4,5,6,7] ) -> true -> aux.push( 4 )
   return aux -> [ 2, 4 ]
*/

const mentoresReact = copiaMentores.filter(mentor => mentor.tecnologias.includes("ReactJS"))
const nombresMentoresReact = mentoresReact.map(mentor => mentor.nombre)
console.log("map:", nombresMentoresReact)

const alumnos = [
    {
        nombre: 'Juli',
        edad: 22
    },
    {
        nombre: 'Alanis',
        edad: null
    },
    {
        nombre: 'Pri',
        edad: 24
    },
    {
        nombre: 'Mariano',
        edad: 22
    },

]

const alumnosConEdad = alumnos.filter(alumno => alumno.edad)
console.log("filter:", alumnosConEdad)

// find
console.log("find:", copiaMentores.find(mentor => mentor.nombre.includes("l")))

// findIndex
console.log("findIndex:", copiaMentores.findIndex(mentor => mentor.nombre.includes("l")))


// some
console.log("some:", alumnos.some(alumno => alumno.edad))

// every
console.log("every:", alumnos.every(alumno => alumno.edad))


// reduce
const $listaMentores = document.getElementById('listaMentores')

const fnReduce = (acumulador, elementoActual) => {
    return acumulador + elementoActual
}
console.log(numeros)
console.log("reduce:", numeros.reduce(fnReduce, 0))
/* reduce 
   let acumulador = 0
   acumulador = fnReduce( 0, 1, 0, [1,2,3,4] ) -> 1 
   acumulador = fnReduce( 1, 2, 1, [1,2,3,4] ) -> 3
   acumulador = fnReduce( 3, 3, 2, [1,2,3,4] ) -> 6
   acumulador = fnReduce( 6, 4, 3, [1,2,3,4] ) -> 10
   return acumulador
*/
const listaMentores = copiaMentores.reduce((acc, act) => {
    return acc + `<li>${act.nombre} ${act.edad}</li>`
}, "")
$listaMentores.innerHTML = listaMentores

const fnReduceDos = (acumulador, mentor) => {
    for (const tecnologia of mentor.tecnologias) {

        if ( acumulador[tecnologia] ) {
            acumulador[tecnologia].push(mentor.nombre)
        } else {
            acumulador[tecnologia] = [ mentor.nombre ]
        }
    }
    return acumulador
}
const result = copiaMentores.reduce( fnReduceDos , {} )
console.log( result )


// sort
copiaMentores.sort( ( a , b ) => {
    if( a["nombre"] > b["nombre"]  ){
        return 1
    }
    if( a["nombre"] < b["nombre"] ){
        return -1
    }
    return 0
}) 


// para numeros
numeros.sort( (a,b) =>  b - a )

// para string
resultadoMap.sort( (a,b) => b.localeCompare(a) )

const nombre1 = "Lucre"
const nombre2 = "Fede"


console.log( copiaMentores )

// tipos de datos
/* primitivos

    string, number, boolean, undefined, null

*/

/* object */
/* function */

console.log( typeof [] )
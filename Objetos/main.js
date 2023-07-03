// Objetos
const nicolas = { 
    nombre : 'Nicolás',
    apellido:'Cirulli',
    nombreCompleto : 'ajksdhjkasd',
    edad : 29,
    deporte : true,
    mascotas : [ "Kugi", "Nila" ], 

    presentarse : function(){
        console.log(`Hola soy ${nicolas.nombre} y tengo ${nicolas.edad} años`)
    }
}

const lucre = {
    nombre : 'Lucrecia',
    apellido:'Gillone',
}

const nicolasDos = nicolas

/* console.log( nicolas == nicolasDos )

console.log( 20 == 20 ) */

const obj1 = {nombre:'nicolas'}
const obj2 = {nombre:'nicolas'}

/* console.log( obj1 == obj2 ) */


// como no tiene la propiedad, la crea y asigna el "Catriel"
nicolas.segundoNombre = 'Catriel'

// como tiene la propiedad, la reasigna
nicolas.nombreCompleto = `${nicolas.nombre} ${nicolas.segundoNombre} ${nicolas.apellido}`


// eliminar una propiedad
/* delete nicolas.deporte */
/* console.log( nicolas ) */


const keysDeNicolas = Object.keys( nicolas )  
/* console.log( keysDeNicolas ) */

const valuesDeNicolas = Object.values( nicolas )
/* console.log( valuesDeNicolas ) */

const entriesDeNicolas = Object.entries( nicolas )
/* console.log( entriesDeNicolas ) */

// Object.assign() 
const nuevoObj = Object.assign( {} , nicolas, lucre )
/* console.log( nuevoObj ) */

Object.freeze( nuevoObj )
nuevoObj.nombre = 'Nicolas'
/* console.log( Object.hasOwn( nicolas, 'altura'  ) ) */

/* console.log( Object.isFrozen( nicolas ) ) */



// Array

const mentores = [ "Lucre", "Fede", "Cami", "Sil", "Flor", "Nico" ]
const mentoresDos = [nicolas, lucre]

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Agregar un elemento al final
mentores.push( "Martin" )
// Agregar un elemento al inicio del array
mentores.unshift( "Elias" )
// podemos eliminar el ultimo elemento del array
/* mentores.push( "Jose" ) */
const elementoEliminado = mentores.pop() 
/* console.log( "Elemento elminado:", elementoEliminado ) */

// Eliminar el primer elemento del array
/* mentores.unshift( "Lucas" ) */
const elementoEliminadoInicio = mentores.shift()
/* console.log( elementoEliminadoInicio ) */

// Encontrar el indice de un elemento en un array
/* console.log( "Indice de Nico: ", mentores.indexOf( "Nico" ) ) */

// Saber si un array incluye un elemento
/* console.log( mentores.includes( "Edu" ) ) */

// Pasar de array a string
/* console.log( numeros.join( "-" ) ) */

// Crear un nuevo array con una parte del array original
/* console.log( mentores.slice( 0, 3 ) ) */


// Modificar un array
/* array.splice( Desde donde, Cuantos voy a eliminar, elemento nuevo, elemento nuevo, elemento nuevo ) */
/* console.log( mentores.splice( 2, 0, "Martin", "Elias" )  )
console.log( mentores ) */

// Concatenar array
const numerosPares = [2, 4, 6, 8, 10]
const numerosImpares = [1, 3, 5, 7, 9]
const numerosParesImpares = numerosPares.concat(numerosImpares)
const copiaPares = [].concat( numerosPares )

const copiaNumeros = [].concat( numerosParesImpares )

copiaPares.push(12)


numerosParesImpares.sort() 
console.log( numerosParesImpares )

console.log( numerosPares, copiaPares )
console.log( copiaPares == numerosPares )



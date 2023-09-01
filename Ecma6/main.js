import funciones from './module/funciones.js'

console.log( funciones )

const $table = document.getElementById('body-table')
const mentor = {}
fetch( './data.json' )
    .then( response => response.json() )
    .then( mentores => {
        /*   
        const copiaMentores = mentores.map( mentor => {
            return { ...mentor }
        } )
        console.log( mentores )
        console.log( copiaMentores ) */
         
        /* 
            const modulos = [ ...new Set( mentores.map( mentor => mentor.modulo ) ) ]

            console.log( modulos )  
        */
       

        
        const template = mentores.reduce( funciones.fnReduce , "" )
        $table.innerHTML = template
    } )
    .catch( err => console.log(err) )



/* // Destructuring

let lucre =  {
    nombre: 'Lucre',
    edad: 27,
    imagen: 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg',
    tecnologias: ['HTML','CSS','JavaScript', 'NodeJS', 'ReactJS', 'React Native'],
    modulo: 'JS'
}

const { nombre, edad:edadLucre, modulo } = lucre


const nombresMentores = [ 'Lucre', 'Fede', 'Nico', 'Flor' ]

let [ primerElemento, segundoElemento ] = nombresMentores
 console.log( "primer elemento:", primerElemento )
console.log( "segundo elemento:", segundoElemento )

// Spread

const numeros = [ 1,2,3,4,5,1,2,3,4,56,6,7,87,1,1,1,1,1,1,1,1 ]

const copiaNumeros = [ "nico", "lucre", "fede", ...new Set( numeros ), "Flor" ]

const copiaLucre = { ...lucre }
copiaLucre.tecnologias.push( 'Java' )
copiaLucre.nombre = 'Lucrecia'
console.log( lucre ) */
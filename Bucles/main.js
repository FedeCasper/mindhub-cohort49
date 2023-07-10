

function contar( numeroInicial=1, numeroFinal=5 ){

    for( let contador = numeroInicial; contador <= numeroFinal ; contador = contador + 1  ){
        console.log( contador )
    }
    
}
/* contar( 140,150  ) */


const mentores = ["Lucre", "Fede", "Nico", "Flor", "Cami", "Sil", "Lucre", "Flor", "Martin", "Edu"]

const mentoresJS = ["Fede", "Nico","Lucre" ]

/* console.log(mentores) */

/* for (let i = mentores.length - 1; i >= 0; i--) {
    console.log(mentores[i])
} */


// encontrar el indice de un elemento del array de mentores

function encontrarIndices( listaMentores, mentorABuscar ){
    const indices = []

    for (let i = 0; i < listaMentores.length; i++) {
        if (listaMentores[i] == mentorABuscar) {
            indices.push(i)
        }
    }

   return indices
}

const indicesFlor = encontrarIndices( mentores, "Flor" )
const indicesLucre = encontrarIndices( mentoresJS,"Lucre" )
const indicesEdu = encontrarIndices( mentores,"Edu" )


/* console.log( indicesFlor )
console.log( indicesLucre )
console.log( indicesEdu ) */

const mentoresFrontend = [
    {
        nombre: 'Nico',
        edad: 29,
        imagen: 'https://i.postimg.cc/Y2vWzKJQ/34040eea-fbd9-4a60-8a61-6afba83464a8.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'NodeJS', 'ReactJS', 'React Native', 'VueJS'],
        modulo: 'JS'
    },
    {
        nombre: 'Lucre',
        edad: 27,
        imagen: 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'NodeJS', 'ReactJS', 'React Native'],
        modulo: 'JS'
    },
    {
        nombre: 'Fede',
        edad: 38,
        imagen: 'https://i.postimg.cc/HWvrrZnj/72c679cc-25d9-479b-b69d-e959118e3ae5.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'Java', 'VueJS'],
        modulo: 'JS'
    },
    {
        nombre: 'Cami',
        edad: 28,
        imagen: 'https://www.diarioveterinario.com/images/showid2/4315158?w=900',
        tecnologias: ['HTML','CSS','JavaScript', 'Bootstrap'],
        modulo: 'WEB'
    },
    {
        nombre: 'Kev',
        edad: 32,
        imagen: 'https://static.wixstatic.com/media/d1fede_4f753f4736604e4ebf85029b92c769c3~mv2.jpg/v1/fill/w_640,h_454,al_c,lg_1,q_80,enc_auto/d1fede_4f753f4736604e4ebf85029b92c769c3~mv2.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'React'],
        modulo: 'WEB'
    },
    {
        nombre: 'Flor',
        edad: 32,
        imagen: 'https://p4.wallpaperbetter.com/wallpaper/630/552/841/look-kitty-background-baby-wallpaper-preview.jpg',
        tecnologias: ['HTML','CSS','JavaScript', 'VueJS'],
        modulo: 'WEB'
    },
    {
        nombre: 'Sil',
        edad: 37,
        imagen: 'https://i.postimg.cc/s2MfSyNL/4eab67e8-8718-46ce-907c-f032b6c67388.jpg',
        tecnologias: ['HTML', 'CSS', 'Testing'],
        modulo: 'WEB'
    },
]

console.log( mentoresFrontend )

// valores falsy
// "", 0, -0, NaN, null, undefined, false

/* if( 23 ){
    console.log('TRUE')
}else{
    console.log('FALSE')
} */

// while

/* let nombre = prompt('Ingrese un nombre')
let nombres = []

while ( nombre ) {
    if( !Number(nombre) ){
        nombres.push( nombre )
    }
    nombre = prompt('Ingrese un nombre')
}
console.log( "Después del bucle:", nombres ) */



// do while

/* let nombre
let nombres = []
do {
    nombre = prompt('Ingrese un nombre')
    if( nombre != null && nombre != "" && !Number(nombre) ){
        nombres.push( nombre )
    }
} while ( nombre );

console.log( "Después del bucle:", nombres )  */


// de javascript
// for of

function crearArray ( listaOriginal, propiedad ){
    const nuevoArray = []

    for( const elemento of listaOriginal ){
        nuevoArray.push( elemento[propiedad] )
    }
    return nuevoArray
}
const nombresMentores = crearArray( mentoresFrontend, "nombre" )
const edadesMentores = crearArray( mentoresFrontend, "edad" )
/* console.log( nombresMentores )
console.log( edadesMentores ) */


function filtrarMentores( listaOriginal, modulo ){
    const mentoresFiltrados = []

    for (const mentor of listaOriginal) {
        if(mentor.modulo == modulo){
            mentoresFiltrados.push( mentor )
        }
    }
    return mentoresFiltrados
}

const mentoresSoloJS = filtrarMentores( mentoresFrontend, "JS" )
const nombresMentoresJS = crearArray( mentoresSoloJS, "nombre" )

const mentoresWEB = filtrarMentores( mentoresFrontend, "WEB" )  
const nombreMentoresWEB = crearArray( mentoresWEB, "nombre" )
/* console.log( nombresMentoresJS )
console.log( nombreMentoresWEB ) */

// for in
/* const lucre = mentoresFrontend[1]
console.log( lucre )
for (const llave in lucre) {
    console.log( llave, lucre[llave] )
}  */

/* 
    Dado un array de 10 números, realizar un programa que muestre por consola el doble
    de cada uno de los elementos.


const numeros = [ 12,5,1,3,17,4,7,22,33,105 ]

function mostrarDobles(listaNumeros){
    const dobles = []
    for( const numero of listaNumeros ){
        dobles.push(numero * 2)
    }
    console.log( dobles.join(' ') )
}

mostrarDobles( numeros ) */


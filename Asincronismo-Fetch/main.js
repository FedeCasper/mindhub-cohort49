// Hacer fecth a una de las siguiente APIs
// https://apisimpsons.fly.dev/api/personajes (API Simpsons)
// https://hp-api.onrender.com/api/characters (API Harry Potter)
// https://www.moogleapi.com/api/v1/characters (API Final Fantasy)

let personajes;

fetch("")
.then(res => res)
.then( data => {})
.catch(error => console.log(error))

function imprimirNombresPorConsola(array){
     for(let personaje of array){
          console.log();
     }
}

console.log([window]);
const parametros = location.search
console.log(parametros);

// Interfaz -> Constructor() que entre otras cosas recibe un string como arg -> retorna un objetos URLSearchParams
const objetoUrl = new URLSearchParams(parametros)
console.log(objetoUrl);

const nombreMentor = objetoUrl.get('nombre')
console.log(nombreMentor);

console.log(mentores)

const objetoMentor = mentores.find( objetoMentor => objetoMentor.nombre === nombreMentor )
console.log(objetoMentor);

const contenedorSection = document.getElementById('contenedor')
console.log(contenedorSection);


function crearEstructura (objeto){
     return `
     <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
               <div class="col-md-4">
                    <img src="${objeto.imagen}" class="img-fluid rounded-start h-100 object-fit-cover" alt="...">
               </div>
               <div class="col-md-8">
                    <div class="card-body">
                         <h5 class="card-title">${objeto.nombre}</h5>
                         <p class="card-text">This is a wider card with supporting text below as a natural
                              lead-in to additional content. This content is a little bit longer.</p>
                         <p class="card-text"><small class="text-body-secondary">${objeto.edad}</small></p>
                    </div>
               </div>
          </div>
     </div>
`
}

const estructuraString = crearEstructura(objetoMentor)
console.log(estructuraString);

function renderizaCard (elementoHTML, string){
     elementoHTML.innerHTML = string
}

renderizaCard(contenedorSection, estructuraString)



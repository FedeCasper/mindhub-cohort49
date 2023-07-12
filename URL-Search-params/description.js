console.log([window]);
console.log(location);
console.log(location.search);

let parametro = location.search
console.log(parametro);

let params = new URLSearchParams(parametro)
console.log(params);

let nombre = params.get('nombre')
console.log(nombre);

let mentor = mentores.find( objetoMentor =>  objetoMentor.nombre === nombre)
console.log(mentor);

let contenedorSection = document.getElementById('contenedor')
console.log(contenedorSection);

function crearMaquetaDetalles(elementoHTML, objetoMentor){
     elementoHTML.innerHTML +=  `
     <div class="card mb-3" style="max-width: 540px;">
     <div class="row g-0">
          <div class="col-md-4">
               <img src="${objetoMentor.imagen}" class="img-fluid rounded-start h-100 object-fit-cover" alt="...">
          </div>
          <div class="col-md-8">
               <div class="card-body">
                    <h5 class="card-title">${objetoMentor.nombre}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural
                         lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">${objetoMentor.edad}</small></p>
               </div>
          </div>
     </div>
</div>
     `
}
crearMaquetaDetalles(contenedorSection, mentor)
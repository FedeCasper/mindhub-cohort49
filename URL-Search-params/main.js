
let container = document.getElementById("contenedor")

function crearMaqueta(objeto){
    return `<article class=" card border p-2 col-3">
                <img src="${objeto.imagen}" alt="img" class="img mb-2 card-img-top imgCard">
                <h5>${objeto.nombre}</h5>
                <p>modulo: ${objeto.modulo}</p>
                <a class="btn btn-danger" href="./description.html?nombre=${objeto.nombre}">Mas info...</a>
            </article>`
}

function imprimirMaqueta(array, elementoHTML){
    let template = ""
    for (let mentor of array){ 
        template += crearMaqueta(mentor)
    }
    elementoHTML.innerHTML += template
}

imprimirMaqueta(mentores, container)

console.log(mentores)






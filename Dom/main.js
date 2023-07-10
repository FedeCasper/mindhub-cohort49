console.log([document])

let objeto = {
    propiedad1: "loquesea"
}

objeto.propiedad1 = "esto nuevo"

//get element

// console.log([document.getElementById("titulo").innerText = "Saraza"])
// console.log([document.getElementById("titulo").className = "text-danger"])
// console.log([document.getElementById("titulo").style.backgroundColor = "green"])

let titulo = document.getElementById("titulo")

titulo.innerText = "Manejo de Dom"

let yellow = document.getElementsByClassName("text-warning")

let anchors = document.getElementsByTagName("a")

// console.log(yellow, anchors)

//query selector

let queryAnchors = document.querySelectorAll("a[href='#']")
// console.log(queryAnchors)

let home = document.querySelector("a[href='#']")
// console.log(home)


let mentoresFrontend = ["Lucre", "Fede", "Nico", "Cami", "Flor", "Sil"]

let seccion = document.getElementById("section")

let lista = document.createElement("ul")

for (let mentor of mentoresFrontend) {
    
    lista.innerHTML += `<li>${mentor}</li>`

}

console.log(lista)

seccion.appendChild(lista)

//

let container = document.getElementById("contenedor")

function crearMaqueta(objeto){
    return `<article class=" card border p-2 col-3">
            <img src="${objeto.imagen}" alt="img" class="img mb-2 card-img-top imgCard">
            <h5>${objeto.nombre}</h5>
            <p>modulo: ${objeto.modulo}</p>
            </article>`
}

function imprimirMaqueta(array, elementoHTML){
    let template = ""
    for (let mentor of array){ 
        template += crearMaqueta(mentor)
    }
    console.log(template)
    elementoHTML.innerHTML += template
}

imprimirMaqueta(mentores, container)

console.log(mentores)
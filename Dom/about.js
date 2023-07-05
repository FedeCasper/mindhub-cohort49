let seccion = document.getElementById("contenedor")

function crearNodos(objeto){
    let article = document.createElement("article")
    article.className = "card border p-2 col-3"
    let img = document.createElement("img")
    img.className = "img mb-2 card-img-top imgCard"
    img.setAttribute("alt", "foto")
    img.src = objeto.imagen
    let h5 = document.createElement("h5")
    h5.textContent = objeto.nombre
    let p = document.createElement("p")
    p.textContent = objeto.modulo
    article.appendChild(img)
    article.append(h5, p)
    return article
}




{/* <article class=" card border p-2 col-3">
            <img src="${objeto.imagen}" alt="img" class="img mb-2 card-img-top imgCard">
            <h5>${objeto.nombre}</h5>
            <p>modulo: ${objeto.modulo}</p>
            </article> */}

function imprimirNodos(array, elementoHTML) {
    let fragment = document.createDocumentFragment()
    for (let elemento of array){
        fragment.appendChild(crearNodos(elemento))
    }
    console.log(fragment)
    elementoHTML.appendChild(fragment)
}

imprimirNodos(mentores, seccion)
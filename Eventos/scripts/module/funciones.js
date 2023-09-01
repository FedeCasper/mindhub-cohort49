export function mostrarFoto(){
    let img = document.createElement("img")
    img.src = "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg"
    divContenedor.appendChild(img)
}

export function crearAlert(){
    console.log("hiciste click")
}

export function crearLi(nombre, elementoHTML){
    let li = document.createElement("li")
    li.innerText = nombre
    elementoHTML.appendChild(li)
}


export function vaciarLi(elementoHTML){
    elementoHTML.innerHTML = ""
}


export function crearRadio(modulo){
    return ` <label for="${modulo}">${modulo}</label>
            <input type="radio" name="modulo" id="${modulo}" value="${modulo}">
            `
}

export function mostrarRadios(array, donde){
   
    for( let elemento of array){
        donde.innerHTML += crearRadio(elemento)
    }
   
}


export function filtrarPorModulo(lista, modulo){
    if( !modulo ) return lista
    const aux = lista.filter(mentor => mentor.modulo == modulo.value)
    return aux
}

export function crearTarjetaMentores(objeto){
    let article = document.createElement("article")
    article.className = "card border p-2 col-3"
    let h5 = document.createElement("h5")
    h5.textContent = objeto.nombre
    let p = document.createElement("p")
    p.textContent = objeto.modulo
    article.append(h5, p)
    return article
}

export function mostrarTarjetasMentores(array, elementoHTML){
    elementoHTML.innerHTML = ''
    let fragment = document.createDocumentFragment()
    for(let elemento of array){
        fragment.appendChild(crearTarjetaMentores(elemento))
    }
    elementoHTML.appendChild(fragment)
}
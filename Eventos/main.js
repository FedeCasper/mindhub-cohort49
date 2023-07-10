let boton = document.getElementById("boton")
let divContenedor = document.getElementById("contenedor")
let form = document.getElementById("form")
let lista = document.getElementById("lista")
let inputBusqueda = document.getElementById("search")
let contenedorInputs = document.getElementById("contenedorInputs")
let tarjetasMentores = document.getElementById("tarjetasMentores")

// console.log(boton)

boton.addEventListener("click", crearAlert)

function mostrarFoto(){
    let img = document.createElement("img")
    img.src = "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg"
    divContenedor.appendChild(img)
}

function crearAlert(){
    // alert("Hola!")
    console.log("hiciste click")
}

let nombresIngresados = []

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log([e])
    console.log([e.target[0].value])
    nombresIngresados.push(e.target[0].value)
    crearLi(e.target[0].value + " " + e.target[1].value, lista)

})

let nombresMentores = mentores.map(mentor => mentor.nombre)


nombresMentores.forEach(mentor => crearLi(mentor, lista))

function crearLi(nombre, elementoHTML){
    let li = document.createElement("li")
    li.innerText = nombre
    elementoHTML.appendChild(li)
}


function vaciarLi(elementoHTML){
    elementoHTML.innerHTML = ""
}

inputBusqueda.addEventListener("input", (e)=>{
    let inputValue = e.target.value
    inputValue.toLowerCase()
    let nombresFiltrados = nombresMentores.filter(mentor => mentor.toLowerCase().startsWith(inputValue))
    console.log(nombresFiltrados)
    vaciarLi(lista)
    nombresFiltrados.forEach(mentor => crearLi(mentor, lista))

})


let modulos = mentores.map(mentor => mentor.modulo)
let modulosSinRepetir = new Set(modulos)
let modulosUnicosArray = Array.from(modulosSinRepetir)
console.log(modulosSinRepetir)


function crearRadio(modulo){
    return ` <label for="${modulo}">${modulo}</label>
            <input type="radio" name="modulo" id="${modulo}" value="${modulo}">
            `
}

function mostrarRadios(array, donde){
   
    for( let elemento of array){
        donde.innerHTML += crearRadio(elemento)
    }
   
}

mostrarRadios(modulosUnicosArray, contenedorInputs)

let radios = document.querySelectorAll("input[type='radio']")

contenedorInputs.addEventListener("change", (e)=> {
    let mentoresFiltrados = filtrarPorModulo(mentores, e.target.value)
    vaciarLi(tarjetasMentores)
    mostrarTarjetasMentores(mentoresFiltrados, tarjetasMentores)
})

function filtrarPorModulo(lista, modulo){
    const aux = lista.filter(mentor => mentor.modulo == modulo)
    console.log(aux) 
    return aux
}

function crearTarjetaMentores(objeto){
    let article = document.createElement("article")
    article.className = "card border p-2 col-3"
    let h5 = document.createElement("h5")
    h5.textContent = objeto.nombre
    let p = document.createElement("p")
    p.textContent = objeto.modulo
    article.append(h5, p)
    return article
}

function mostrarTarjetasMentores(array, elementoHTML){
    let fragment = document.createDocumentFragment()
    for(let elemento of array){
        fragment.appendChild(crearTarjetaMentores(elemento))
    }
    elementoHTML.appendChild(fragment)
}


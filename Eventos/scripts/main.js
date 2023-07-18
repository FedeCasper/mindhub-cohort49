import { crearAlert, crearLi, mostrarRadios, vaciarLi,filtrarPorModulo, mostrarTarjetasMentores  } from './module/funciones.js'
let boton = document.getElementById("boton")
let divContenedor = document.getElementById("contenedor")
let form = document.getElementById("form")
let lista = document.getElementById("lista")
let inputBusqueda = document.getElementById("search")
let contenedorInputs = document.getElementById("contenedorInputs")
let tarjetasMentores = document.getElementById("tarjetasMentores")

boton.addEventListener("click", crearAlert)

let nombresIngresados = []

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log([e])
    console.log([e.target[0].value])
    nombresIngresados.push(e.target[0].value)
    crearLi(e.target[0].value + " " + e.target[1].value, lista)

})
let nombresMentores = mentores.map( mentor => mentor.nombre )

nombresMentores.forEach(mentor => crearLi(mentor, lista))



let modulos = mentores.map(mentor => mentor.modulo)
let modulosSinRepetir = new Set(modulos)
let modulosUnicosArray = Array.from(modulosSinRepetir)

mostrarRadios(modulosUnicosArray, contenedorInputs)


contenedorInputs.addEventListener("change", (e)=> {
    
    let inputValue = inputBusqueda.value.toLowerCase()
    const radioValue = document.querySelector( 'input[type="radio"]:checked' )
    let filtroBusqueda = mentores.filter( mentor => mentor.nombre.toLowerCase().startsWith(inputValue) )
    let filtroModulo = filtrarPorModulo(filtroBusqueda, radioValue)

    vaciarLi(tarjetasMentores)
    lista.innerHTML = ''
    filtroModulo.forEach(mentor => crearLi(mentor.nombre, lista))
    mostrarTarjetasMentores(filtroModulo, tarjetasMentores)
})


inputBusqueda.addEventListener("input", (e)=>{

    let inputValue = inputBusqueda.value.toLowerCase()
    const radioValue = document.querySelector( 'input[type="radio"]:checked' )
    let filtroBusqueda = mentores.filter( mentor => mentor.nombre.toLowerCase().startsWith(inputValue) )
    let filtroModulo = filtrarPorModulo(filtroBusqueda, radioValue)


    vaciarLi(lista)
    filtroModulo.forEach(mentor => crearLi(mentor.nombre, lista))
    mostrarTarjetasMentores( filtroModulo, tarjetasMentores )
})


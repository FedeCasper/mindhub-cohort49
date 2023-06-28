//Variables
//var, let, const

var nombre 
nombre = "Lucrecia"
nombre = "Maria Lucrecia"

// console.log(nombre)

let nombreCompleto 
nombreCompleto = "Lucrecia Gillone"
nombreCompleto = "Lucrecia Gillone Doherty"

let apellido = "Gillone"

let alumno 

// console.log(nombreCompleto)
// console.log(alumno)

const dni = 1234567

//Tipos de Datos

//String
let comillasDobles = "Hola este es un string con comillas dobles"
let comillasSimples = 'Este es un string con comilla simple'
let backTicks = `String con back ticks`

// console.log(comillasDobles)
// console.log(comillasSimples)
// console.log(backTicks)

let mensaje = `Él me dijo: No comas mi torta ${nombre} ${apellido}`

let nombreYApellido = "Nicolas" + " " + "Cirulli"
let mentor = "Fede " + "Rouyere"
let mentora = nombre + " " + apellido

// console.log(mensaje)
// console.log(nombreYApellido)
// console.log(mentora)

//Number

let numero1 = 20
let numero2 = 10

//Operadores Aritmeticos + - * / % **
let sumaNumeros = numero1 + numero2
// console.log(numero1 + numero2)
// console.log(numero1 - numero2)
// console.log(numero1 * numero2)
// console.log(numero1 / numero2)
// console.log(numero1 % numero2)
// console.log(numero1 ** 2)

let numeroNuevo = 40 * -25.5

// console.log("Resultado 1", numeroNuevo, numero1 + numero2)

//Boolean 

let opcion1 = true
let opcion2 = false 

let tieneMascota = false
let nicoTieneMascota = true

//undefined : Valor indefinido 
let alumno2 
// console.log(alumno2)

//null : valor nulo

let mentores = null

// console.log(typeof NaN)
// console.log( "22" + (5 + 2) )

let edad = 27
edad = edad + 1 
edad += 1

//Operadores de Comparación ==, ===, !=, !==, <, >, <=, >=

//Comparación no estricta == 

num1 = 50 
num2 = "50"
num3 = 25

// console.log( num1 == 50)

//comparación estricta ===

// console.log(num1 === num2)
// console.log(num1 === 50)

// console.log(num1 >= 50)
// console.log(num3 <= num1)

//Arrays
//                0      1        2      3       4        5
let nombres = ["Lucre", "Nico", "Fede", "Flor", "Cami", "Sil"]
let numeros = [1,2,3,4,5]
let combinado = ["fruta", 1, true, "Juan"]

// console.log(nombres)

// console.log(numeros[3])

//array[numeroIndice]

// console.log(nombres[5])
// console.log(nombres[nombres.length-1])

// console.log(nombres.length)

//Objetos 

let persona = {
    nombre: "Lucre", 
    edad: 27, 
    mascota: {
        nombre: "Sasha",
        tipo: "gato"
    }, 
    rol: "mentora", 
}

console.log(persona)

let mensajeUsuario = prompt("Ingrese su nombre")

console.log(mensajeUsuario)

alert("Gracias por venir al workshop")
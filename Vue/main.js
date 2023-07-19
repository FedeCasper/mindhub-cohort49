const { createApp } = Vue

const options = {
    data(){
        return {
            personajes: [],
            casas : [],
            valorBusqueda : "",
            casasChecked : [],
            filtrados : [],
            estadisticasCasas: {},
            primerTabla : {}
        }
    },
    created(){
        fetch( 'https://hp-api.onrender.com/api/characters/students' )
            .then( response => response.json() )
            .then( datos => {
                const personajesConCasa = datos.filter( personaje => personaje.house )
                this.personajes = personajesConCasa
                this.filtrados = personajesConCasa
                this.casas = [...new Set(personajesConCasa.map( personaje => personaje.house ))]
                this.estadisticasCasas = this.casas.reduce( ( acumulador, casaActual ) => {
                    let acumulado = {...acumulador}

                    let personajesDeCasaActual = personajesConCasa.filter( personaje => personaje.house == casaActual )

                    let edades = personajesDeCasaActual
                        .filter( personaje => personaje.yearOfBirth )
                        .map( personaje => 2023 - personaje.yearOfBirth )
                    let promedioDeEdad = edades.reduce( (acc, act) => acc + act, 0) / edades.length

                    let personajesGender = personajesDeCasaActual.filter( personaje => personaje.gender ).reduce( (acc, act) => {
                        if(act.gender == "female"){
                            acc.mujer += 1
                        }else{
                            acc.hombre += 1
                        }
                        acc.total += 1
                        return acc
                    }, { hombre: 0, mujer: 0, total: 0 } )

                    acumulado[ casaActual ] = { 
                        casa: casaActual,
                        promedioEdad : promedioDeEdad,
                        porcentajeHombres : Number((personajesGender.hombre / personajesGender.total * 100).toFixed(2)),
                        porcentajeMujeres : Number((personajesGender.mujer / personajesGender.total * 100).toFixed(2)),
                        cantidadAlumnos : personajesGender.total
                     }
                    return acumulado
                }, {} )
                
                let aux = {
                    porcentajeHombres : {
                        casa : '',
                        porcentaje : 0
                    },
                    porcentajeMujeres : {
                        casa : '',
                        porcentaje : 0
                    },
                    masAlumnos : {
                        casa : '',
                        total : 0
                    }
                }

                for (const casa in this.estadisticasCasas) {
    
                    if( aux.porcentajeHombres.porcentaje < this.estadisticasCasas[casa].porcentajeHombres ){
                        aux.porcentajeHombres.porcentaje = this.estadisticasCasas[casa].porcentajeHombres
                        aux.porcentajeHombres.casa = casa
                    }
                    if( aux.porcentajeMujeres.porcentaje < this.estadisticasCasas[casa].porcentajeMujeres ){
                        aux.porcentajeMujeres.porcentaje = this.estadisticasCasas[casa].porcentajeMujeres
                        aux.porcentajeMujeres.casa = casa
                    }
                    if( aux.masAlumnos.total < this.estadisticasCasas[casa].cantidadAlumnos ){
                        aux.masAlumnos.total = this.estadisticasCasas[casa].cantidadAlumnos
                        aux.masAlumnos.casa = casa
                    }
                }
                this.primerTabla = aux
            })
            .catch( err => console.log( err ) )
    },
    methods:{
       
    },
    computed:{
        filtrar(){
            this.filtrados = this.personajes.filter( personaje => {
               return personaje.name.toLowerCase().startsWith( this.valorBusqueda.toLowerCase() ) 
                && (this.casasChecked.includes( personaje.house ) || this.casasChecked.length == 0)
            })
        }
    }
}

const app = createApp( options )

app.mount( '#app' )


/*{
    casa1:{
        casa: "",
        promedioEdad: 0,
        porcentajeHombres: 0,
        porcentajeMujeres: 0
    }
}
*/

let mentor = {
    nombre : 'Nicolas'
}

console.log( mentor[ "nombre" ] )
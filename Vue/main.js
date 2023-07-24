const { createApp } = Vue

const options = {
    data(){
        return {
            personajes: [],
            casas : [],
            valorBusqueda : "",
            casasChecked : [],
            filtrados : [],
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


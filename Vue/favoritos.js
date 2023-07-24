const { createApp } = Vue

createApp( {
    data(){
        return {
            favoritos:[]
        }
    },

    created(){
        this.favoritos = JSON.parse( localStorage.getItem('favoritos') ) ?? []
    },

    methods:{
        borrarLocalStorage(){
            localStorage.clear()
            this.favoritos = []
        },
        borrarFavoritos(){
            localStorage.removeItem('favoritos')
            this.favoritos = []
        }
    }

} ).mount( '#app' )
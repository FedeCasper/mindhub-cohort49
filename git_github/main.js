
let nuevoObjeto = {
     propiedad1: "valor",
     propiedad2: 10,
     propiedad3: true
}

axios.post('endPoint', nuevoObjeto)
     .then(function (response) {
          console.log(response);
     })
     .catch(function (error) {
          console.log(error);
     });




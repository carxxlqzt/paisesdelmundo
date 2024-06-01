
var boton = document.getElementById("boton");
var card = document.getElementById("card_pais")
var loading = document.getElementById('loading');
var mensajeError= document.getElementById('error')
boton.addEventListener("click", () => {
let search = document.querySelector("#search");
console.log(search.value)
let pais=search.value
mensajeError.style.display='none'
loading.style.display='block'


// fetch(`https://restcountries.com/v3.1/name/${pais}`)
// .then(response =>  response.json())    // a fetch le llega una respuesta en string que tiene que ser parseada a JSON
// .then(data => {
//   console.log(data)

//   card.innerHTML=`<div class="card "style="width: 18rem;">
//   <img src="${data[0].flags.png}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${data[0].translations.spa.official}</h5>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Ciudad capital: ${data[0].capital[0]}</li>
//     <li class="list-group-item">Continente: ${data[0].continents[0]}</li>
//     <li class="list-group-item">Area: ${data[0].area}</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
//   `
//   loading.style.display='none'
// })
// .catch(error => 
//     loading.style.display='none',
//     console.log("Ha habido un error, vuelva a intentar")
    axios.get(`https://restcountries.com/v3.1/name/${pais}`)
    .then(function(res) {
   
      if(res.status==200) {
   let data= res.data 
   mensajeError.style.display='none'
   console.log(data)
  card.innerHTML=`<div class="card animate__animated animate__zoomIn animate__delay-0.5s"  id="pais"  style="width: 18rem;">
  <img src="${data[0].flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[0].translations.spa.official}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Ciudad capital: ${data[0].capital[0]}</li>
    <li class="list-group-item">Continente: ${data[0].continents[0]}</li>
    <li class="list-group-item">Area: ${data[0].area}</li>
    <li class="list-group-item">Habitantes: ${data[0].population}</li>

  </ul>
  <div class="card-body">
    <a href="${data[0].maps.googleMaps}" class="card-link">Google Maps</a>
    <a href="${data[0].maps.openStreetMaps}" class="card-link">Street View</a>
  </div>
</div>
  `
      }
     
    })
    .catch(function(err) {
     console.log("Ha ocurrido un error")
     mensajeError.style.display='block'
    })
    .then(function() {
      loading.style.display = 'none';
    }); }) 




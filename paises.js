let containerPaises= document.getElementById("allPaises")
axios.get(`https://restcountries.com/v3.1/all`)
.then(function(res) {

  if(res.status==200) {
let data= res.data
console.log(data)
let i 
for(i=0;i<data.length;i++){
    let cardPaises=document.createElement("div")
    cardPaises.classList.add("w-25")
    cardPaises.classList.add("phone")
    cardPaises.classList.add("m-3")

cardPaises.innerHTML=`
<div class="card">
  <img src="${data[i].flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
   <h5 class="card-title">${data[i].translations.spa.official}</h5>
 </div>


</div>
`
containerPaises.appendChild(cardPaises)

}
}})

.catch(function(err) {
 console.log("Ha ocurrido un error")

})

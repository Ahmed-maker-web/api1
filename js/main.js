


// function getApi(){
//     var xhttp = new XMLHttpRequest;
//     xhttp.onreadystatechange = function(){
//         if(this.readyState==4 && this.status==200){
//             document.querySelector("#demo").innerHTML = this.responseText;
//         }
//     }
//     xhttp.open("GET",'https://jsonplaceholder.typicode.com/photos',true);
//     xhttp.send();
// }



// ==================================================================================
// ==================================================================================
// ==================================================================================


// fetch("https://jsonplaceholder.typicode.com/photos")
// .then (function(ahmed){
//     return ahmed.json()
// })
// .then(function(element){
//     document.querySelector(".test img").src = element[0].url
//     document.querySelector(".test h4").innerHTML = element[0].title
//     document.querySelector(".test h6").innerHTML = element[0].id
// })


// ===================================================================================
// ===================================================================================
// ===================================================================================


(async function getApi() {
    var ahmed = await fetch("https://jsonplaceholder.typicode.com/photos");
    var element = await ahmed.json();
      var myText = "";
    for(var i=0; i<element.length; i++){
        var cartona = `<div class="col-md-4">
        <img src="${element[i].url}" class="img-fluid">
        <h4>${element[i].title}</h4>
        <h6>${element[i].id}</h6>
      </div>
      `;
      myText = myText + cartona
    }
 
    document.querySelector('.test').innerHTML = myText
})();
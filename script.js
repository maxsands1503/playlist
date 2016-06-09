var button = document.getElementById('buttoni1');
var button2 = document.getElementById('buttoni2');

var albums = document.getElementById('albumCovers');



var pictureBut1 = document.getElementById("mjt");
var pictureBut2 = document.getElementById("red");
var pictureBut3 = document.getElementById("gitm");
var pictureBut4 = document.getElementById("ade");
var pictureBut5 = document.getElementById("tdb");
var catcher = document.getElementById("catcher");

var request = new XMLHttpRequest();
window.onload = function() {
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            var responded = JSON.parse(request.responseText);
            for (var i = 0; i < responded.results.length; i++) {
                var image = document.createElement('img');
                image.src = "./images/" + responded.results[i].cover_art;
                image.id = responded.results[i].title;
                image.classList = "alexDidThis";
                image.onclick = function(click) {
                  catcher.innerHTML += "<p>" + click.srcElement.id + "</p>";
                }
                albums.appendChild(image);
            }
        }
    }
    request.open("GET", "https://lit-fortress-6467.herokuapp.com/object");
    request.send();
}
button.addEventListener("click",function(){
  catcher.innerHTML = "";
})

button2.addEventListener("click", function(){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {

                console.log(request.responseText);
              }
            }
            request.open("POST", "https://lit-fortress-6467.herokuapp.com/post");
            request.send();
          })

//Adds a random image from the API to the front page
var box1 = document.getElementById('image1Box');
var box2 = document.getElementById('image2Box');
var box3 = document.getElementById('image3Box');
var request = new XMLHttpRequest();

window.onload = function() {
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            var responded = JSON.parse(request.responseText);
            box1.innerHTML += "<img src='./images/" + responded.results[Math.floor(Math.random() * responded.results.length)].cover_art + "' id='image1'>"
            box2.innerHTML += "<img src='./images/" + responded.results[Math.floor(Math.random() * responded.results.length)].cover_art + "' id='image2'>"
            box3.innerHTML += "<img src='./images/" + responded.results[Math.floor(Math.random() * responded.results.length)].cover_art + "' id='image3'>"

        }
    }
    request.open("GET", "https://lit-fortress-6467.herokuapp.com/object");
    request.send();

}

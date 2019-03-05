
var mymap = L.map('myMap').setView([39.5688565, 2.6652431], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhbGVuZGUiLCJhIjoiY2pzZXp2aWtoMGE3NjQ0bzJ0cmZvdGhzYiJ9.C_2fZGDSvc1u95gmp2Bf2Q'
}).addTo(mymap);

var marker = L.marker([39.5688565, 2.6652431]).addTo(mymap);

document.getElementsByClassName('fa-shopping-cart')[0].addEventListener('click',function(){
    window.location = './carrito.html';
})

document.getElementsByClassName('fa-shopping-cart')[0].addEventListener('mouseover',function(){
    $('#modalCarrito').modal('show')
})
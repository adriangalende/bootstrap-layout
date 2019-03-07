window.onload = function() {


    var mymap = L.map('myMap').setView([39.5688565, 2.6652431], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYWdhbGVuZGUiLCJhIjoiY2pzZXp2aWtoMGE3NjQ0bzJ0cmZvdGhzYiJ9.C_2fZGDSvc1u95gmp2Bf2Q'
    }).addTo(mymap);

    var marker = L.marker([39.5688565, 2.6652431]).addTo(mymap);

    document.getElementsByClassName('fa-shopping-cart')[0].addEventListener('click', function () {
        window.location = './carrito.html';
    })

    document.getElementsByClassName('fa-shopping-cart')[0].addEventListener('mouseover', function () {
        $('#modalCarrito').modal('show')
    })

    var userIcon = document.getElementsByClassName('fa-user')[0];

    userIcon.addEventListener('click', function () {
        location.href = 'login.html'
    });

    var user = JSON.parse(sessionStorage.getItem('loginSession'))

    if (user != null && user != undefined){
        let p = $('#usernameinfo')[0]
        p.classList.add('Lato')
        p.classList.add('text-white')
        p.classList.add('mr-2')
        p.classList.add('font-weight-bold');
        p.classList.add('p-1')
        p.innerText = "Bienvenido, " + user.id ;
        userIcon.hidden = true;
    }

    $('#dropdown01').on('mouseenter', function(nav){
        $('#dropdown01')[0].closest('li').classList.add('show')

    })


    $('#dropdown01').on('click', function(nav){
        location.href = 'gaming.html'
    })

}
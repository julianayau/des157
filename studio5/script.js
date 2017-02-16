// take user input and oupt song with users' input
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/yaujuliana/ciz8phs5p00122ss2t90fjje0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWF1anVsaWFuYSIsImEiOiJjaXo4cGcxNjIwMHdnMzJvODJyM3Rwb3hlIn0.L9xpJuW2lfTWSKymqvkG-Q', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'Bright',
    accessToken: 'pk.eyJ1IjoieWF1anVsaWFuYSIsImEiOiJjaXo4cGcxNjIwMHdnMzJvODJyM3Rwb3hlIn0.L9xpJuW2lfTWSKymqvkG-Q'
}).addTo(mymap);

var marker = L.marker([-121.735,38.548], 13.7).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);



marker.bindPopup("Hi! My name is Latso but my owner calls me Fatso").openPopup();


});

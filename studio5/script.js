// take user input and oupt song with users' input
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

var mymap = L.map('mapid').setView([38.5449065, -121.7405167],38.547);

L.tileLayer('https://api.mapbox.com/styles/v1/yaujuliana/ciz8phs5p00122ss2t90fjje0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWF1anVsaWFuYSIsImEiOiJjaXo4cGcxNjIwMHdnMzJvODJyM3Rwb3hlIn0.L9xpJuW2lfTWSKymqvkG-Q', {
    // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    // maxZoom: 18,
    // id: 'Bright',
    accessToken: 'pk.eyJ1IjoieWF1anVsaWFuYSIsImEiOiJjaXo4cGcxNjIwMHdnMzJvODJyM3Rwb3hlIn0.L9xpJuW2lfTWSKymqvkG-Q'
}).addTo(mymap);

var teddy = L.icon({
    iconUrl: 'images/teddy.png',
});

var fatso = L.icon({
    iconUrl: 'images/fatso.png',
});


var marker1 = L.marker([38.544565, -121.743467], {icon: fatso}).addTo(mymap);
var marker2 = L.marker([38.52939, -121.7624], {icon: teddy}).addTo(mymap);



marker1.bindPopup("Hi! My name is Latso but my owner calls me Fatso. I like to go to Burgers and Brew every day to eat burgers and fries.").openPopup();

marker2.bindPopup("My name is Stavropolous but everyone just calls me Teddy. I like to be in trees and scare little kids. I love America too.").openPopup();





});

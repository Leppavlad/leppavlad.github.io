var mymap = L.map('mapid').setView([34.76, 113.65], 13);
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const title = document.getElementById('place-title');
const coordinates = document.getElementById('coordinates');
const description = document.getElementsByClassName('description-text');
// const marker;

// Инициализация карты
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibGVwcGF2bGFkIiwiYSI6ImNrZGhwMHBzYjFodnYycG5yNWFveDRsMmIifQ.h1hfsyJpO5jf4WGnAs04qg'
}).addTo(mymap);
// Делает карту кликабельной.
mymap.on('click', onMapClick);

// Сайдбар
  title.innerHTML = 'Место';
  coordinates.innerHTML = 'Координаты x, y';
  description[0].innerHTML = 'Выберите место на карте, чтобы узнать его описание';
  description[1].innerHTML = '<img src="https://picsum.photos/600/200">';

// Точка на карте
var circle = L.circle([34.765, 113.655], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100
}).addTo(mymap);

// Окно при нажатии точки на карте
circle.bindPopup("I am a circle.");
circle.on('click', function () { popSidebar(); })

// Клик на карте создаёт маркер
var markerGroup = L.layerGroup().addTo(mymap);
function onMapClick(e) {
  markerGroup.clearLayers();
  var marker = L.marker(e.latlng).addTo(markerGroup);
}
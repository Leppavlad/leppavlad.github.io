var mymap = L.map('mapid').setView([34.76, 113.65], 13);
const sidebar = document.getElementById('sidebar');
const title = document.getElementById('place-title');
const coordinates = document.getElementById('coordinates');
const description = document.getElementsByClassName('description');

// Инициализация карты
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibGVwcGF2bGFkIiwiYSI6ImNrZGhwMHBzYjFodnYycG5yNWFveDRsMmIifQ.h1hfsyJpO5jf4WGnAs04qg'
}).addTo(mymap);

// Вызов сайдбара
function popSidebar() {
  sidebar.style.width = '367px';
  sidebar.style.padding = '20px';
  title.innerHTML = 'Name of the place';
  coordinates.innerHTML = 'x, y';
  description[0].innerHTML = 'And its description';
}

// Сокрытие сайдбара
function hideSidebar() {
  sidebar.style.width = '0';
  sidebar.style.padding = '20px 0px';
}

// Точка на карте
var circle = L.circle([34.765, 113.705], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100
}).addTo(mymap);

// Окно при нажатии точки на карте
circle.bindPopup("I am a circle.");
circle.on('click', function () { popSidebar(); })

// Клик на карте создаёт точку
// function onMapClick(e) {
//   var circle = L.circle(e.latlng, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 100
//   }).addTo(mymap);
  // И вызывает сайдбар
//   popSidebar();
// }

// Делает карту кликабельной. 
// Строка должна быть в конце документа
mymap.on('click', onMapClick);
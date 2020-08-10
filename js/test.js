// Инициализация карты
var map = L.map('mapid').setView([34.76, 113.65], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibGVwcGF2bGFkIiwiYSI6ImNrZGhwMHBzYjFodnYycG5yNWFveDRsMmIifQ.h1hfsyJpO5jf4WGnAs04qg'
}).addTo(map);
// Делает карту кликабельной.
map.on('click', onMapClick);
/*========================================== */

// Сайдбар
// const sidebar = document.getElementById('sidebar');
// const sidebarClose = document.getElementById('sidebarClose');
// const title = document.getElementById('place-title');
// const coordinates = document.getElementById('coordinates');
// const description = document.getElementsByClassName('description-text');

// title.innerHTML = 'Место';
// coordinates.innerHTML = 'Координаты x, y';
// description[0].innerHTML = 'Выберите место на карте, чтобы узнать его описание';
// description[1].innerHTML = '<img src="https://picsum.photos/600/200">';

// Функции сайдбара
function toggleSidebar() {
  sidebar.classList.toggle('opened');
}
function openSidebar() {
  if (!sidebar.classList.contains('opened'))
    sidebar.classList.add('opened');
}
function closeSidebar() {
  if (sidebar.classList.contains('opened'))
    sidebar.classList.remove('opened');
}
/*========================================== */

// Слой  маркера
let marker = null;
let markerPos = null;

const markerGroup = L.layerGroup().addTo(map);

// Слой заведений
let places = [];
const placesGroup = L.layerGroup(places).addTo(map);
/*========================================== */

let circleOptions = {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 5,
  title: 'My Location',
  clickable: true
};

let markerOptions = {
  title: '',
  draggable: true,
  title: "Resource location",
  alt: "Resource Location",
  riseOnHover: true
};
/*========================================== */

// Клик на карте создаёт маркер
function onMapClick(e) {
  markerGroup.clearLayers();
  markerPos = e.latlng;
  marker = L.marker(markerPos, markerOptions).addTo(markerGroup);
  marker.bindTooltip(e.latlng.toString()).openPopup();

  marker.on("dragend", function (ev) {
    let changedPos = ev.target.getLatLng();
    this.bindPopup(chagedPos.toString()).openPopup();
  });
}

// Создаёт место на основе маркера
function newPlace() {
  var place = L.circleMarker(markerPos, circleOptions).addTo(placesGroup);
  place.bindPopup(title.innerHTML);
  places.push({'id': places.length, 'lat': markerPos.lat, 'lng': markerPos.lng});
  console.log(places);
  // Убираем маркер
  markerGroup.clearLayers();
}
/*========================================== */

// Существующая точка на карте
var circle = L.circleMarker([34.765, 113.655], circleOptions).addTo(placesGroup);
// console.log(places)
// Окно при нажатии точки на карте
circle.bindPopup("   <br><a href='http://гуляй-душа.рф'>Идите в п...</a>");
// circle.on('click', alert('Gosh'));
// Галерея
thumbs.onclick = function (event) {
  let thumbnail = event.target.closest('a');

  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
}

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
/*========================================== */

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
const sidebar = document.getElementById('sidebar');
const pageCreate = document.getElementById('page-create');
const pageDescribe = document.getElementById('page-describe');

// Функции сайдбара
function sidebarToggle() {
  sidebar.classList.toggle('opened');
}
function sidebarOpen() {
  if (!sidebar.classList.contains('opened'))
    sidebar.classList.add('opened');
}
function sidebarClose() {
  if (sidebar.classList.contains('opened'))
    sidebar.classList.remove('opened');
}
function changeWindow() {
  pageCreate.classList.toggle('disabled');
  pageDescribe.classList.toggle('disabled');
}
/*========================================== */

// Слой для маркера
let marker, markerPos;
const markerGroup = L.layerGroup().addTo(map);
/*========================================== */

// Настройки маркеров
let circleOptions = {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 5,
  // title: 'My Location',
  clickable: true
};

let markerOptions = {
  draggable: true,
  // title: "Resource location",
  // alt: "Resource Location",
  riseOnHover: true
};
/*========================================== */

// Клик на карте создаёт маркер
function onMapClick(e) {
  markerGroup.clearLayers();
  markerPos = e.latlng;
  marker = L.marker(markerPos, markerOptions).addTo(markerGroup);
  marker.bindTooltip(e.latlng.toString()).openPopup();

// Изменение координат при перетаскивании маркера
  marker.on("dragend", function (ev) {
    let changedPos = ev.target.getLatLng();
    this.bindPopup(chagedPos.toString()).openPopup();
  });
}
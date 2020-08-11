// Массив мест
const places = [];
// Слой заведений
const placesGroup = L.layerGroup(places).addTo(map);
/*========================================== */

// Создаёт место на основе маркера
function newPlace(pos = markerPos, layer = placesGroup) {
  // Создание элемента и запись его в массив
  var place = L.circleMarker(pos, circleOptions).addTo(layer);
  places.push(place);
  [place.id, place.lat, place.lng] = [places.length - 1, pos.lat, pos.lng]
  place.href = `..places/${place.id}.html`;
  console.log(places);
  // Убираем маркер
  markerGroup.clearLayers();
  // Создаем подпись
  place.bindPopup(`id: ${places.length - 1}`);
  // И обработчик нажатия
  place.on('click', function () {
    sidebarOpen();
    markerGroup.clearLayers();
    placeContainer.src = `../places/${place.id}.html`;
  })

  return place;
}
/*========================================== */

// Существующие точки на карте
var circle = newPlace([34.7460, 113.6759]);
var circle = newPlace([34.758256, 113.653258]);
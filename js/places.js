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

const obj = {
  title: 'Target Pub',
  category: 'Pub',
  description: 'Mr do raising article general norland my hastily. Its companions say uncommonly pianoforte favourable. Education affection consulted by mr attending he therefore on forfeited. High way more far feet kind evil play led. Sometimes furnished collected add for resources attention. Norland an by minuter enquire it general on towards forming. Adapted mrs totally company two yet conduct men.',
  address: '郑州市金水区纬三路9-9号',
  averagePrice: 72,
  policeRating: "1 - No cases yet",
  opening_hours: "11:00:00",
  closing_hours: "23:00:00",
  coordinates: {
    longitude: 113.6855620001044,
    latitude: 34.775219969499524
    },
};

let json = {
  "id": 1,
  "uploaded_by": 3,
  "title": "Target Pub",
  "category": "Pub",
  "address": "郑州市金水区纬三路9-9号",
  "pinyin_address": "zhèng zhōu shì jīn shǔi qū wěi sān lù 9 - 9 hào",
  "description": "Mr do raising article general norland my hastily. Its companions say uncommonly pianoforte favourable. Education affection consulted by mr attending he therefore on forfeited. High way more far feet kind evil play led. Sometimes furnished collected add for resources attention. Norland an by minuter enquire it general on towards forming. Adapted mrs totally company two yet conduct men.",
  "average_price": 72,
  "police_rating": "1 - No cases yet",
  "opening_hours": "11:00:00",
  "closing_hours": "23:00:00",
  "coordinates": {
    "longitude": 113.6855620001044,
    "latitude": 34.775219969499524
  },
  "events": [
    {
      "id": 1,
      "title": "event1",
      "description": "Party for everybody",
      "image": "http://localhost:8000/media/events/bp.png",
      "fee": "20.00",
      "datetime": "2021-12-12T11:11:00+04:00",
      "place": 1
    }
  ],
  "images": [
    "/media/images/Bbear.png",
    "/media/images/me.png",
    "/media/images/ccandy.png",
    "/media/images/BBee.png"
  ],



  "rating": 3.75,
  "reviews": [
    {
      "id": 1,
      "author": 5,
      "rating": 4,
      "text": "Good",
      "published_at": "2020-08-04T20:41:20.957529+04:00",
      "place": 1
    },
    {
      "id": 2,
      "author": 5,
      "rating": 1,
      "text": "Shithole",
      "published_at": "2020-08-04T20:59:03.974692+04:00",
      "place": 1
    },
    {
      "id": 3,
      "author": 5,
      "rating": 5,
      "text": "Super!!",
      "published_at": "2020-08-04T20:59:27.040204+04:00",
      "place": 1
    },
    {
      "id": 4,
      "author": 5,
      "rating": 5,
      "text": "Super!!2",
      "published_at": "2020-08-04T20:59:50.393741+04:00",
      "place": 1
    },
    {
      "id": 5,
      "author": 12,
      "rating": 3,
      "text": "ok",
      "published_at": "2020-08-06T19:41:00.718246+04:00",
      "place": 1
    },
    {
      "id": 6,
      "author": 12,
      "rating": 4,
      "text": "good",
      "published_at": "2020-08-06T19:41:27.095236+04:00",
      "place": 1
    },
    {
      "id": 7,
      "author": 12,
      "rating": 4,
      "text": "good",
      "published_at": "2020-08-06T19:41:43.555508+04:00",
      "place": 1
    },
    {
      "id": 8,
      "author": 12,
      "rating": 4,
      "text": "good",
      "published_at": "2020-08-06T19:42:01.199558+04:00",
      "place": 1
    },
    {
      "id": 11,
      "author": 22,
      "rating": 0,
      "text": "1",
      "published_at": "2020-08-07T14:50:30.183448+04:00",
      "place": 1
    }
  ]
}
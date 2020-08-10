var map = L.map('map');
map.setView([55.753989, 37.623191], 11);

L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);

var sidebar = L.control.sidebar('sidebar', {
  closeButton: true,
  position: 'right'
});
map.addControl(sidebar);

sidebar.show();



function loadJSON(elementId){
  let element = document.getElementById(elementId);

  if (!element){
    log.error(`Not found element with id '${elementId}'.`)
    return null;
  }

  return JSON.parse(element.textContent);
}

let places = loadJSON('places-geojson');
log.debug('Load GeoJSON for places', places);



L.geoJSON(places, {
    pointToLayer: function(geoJsonPoint, latlng) {
      if (geoJsonPoint.geometry.type != "Point"){
        return
      }

      let color = geoJsonPoint.properties.color || 'red';

      var pulsingIcon = L.icon.pulse({
        iconSize: [8, 8],
        color: color,
        fillColor: color,
        heartbeat: 2.5,
      });

      let marker = L.marker(latlng, {
        icon: pulsingIcon,
        riseOnHover: true,
      });

      marker.bindTooltip(geoJsonPoint.properties.title);
      marker.bindPopup(function (layer) {
        return geoJsonPoint.properties.title;
      })

      marker.on('click', function(event){
        log.debug('Feature selected', geoJsonPoint);
        sidebar.show();
        loadPlaceInfo(geoJsonPoint.properties.placeId, geoJsonPoint.properties.detailsUrl);
      });
      return marker;
    }
}).addTo(map);



map.on('click', function () {
  sidebarApp.selectedPlace = null;
  sidebarApp.loadingPlaceId = null;
})
var map;
var posLat;
var posLong;

var init = function() {
  map = new GMaps({
    el: '#map',
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long
  });

  map.addMarker({
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    title: state.selectedStation.name
  });

  GMaps.geolocate({
    success: function(position) {
      map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [state.selectedStation.lat, state.selectedStation.long],
        travelMode: 'driving',
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });

      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: 'tu ubicacion'
      });

    },
    error: function(error) {
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function() {
      alert("Your browser does not support geolocation");
    },
    always: function() {
      alert("Aleja el zoom");
    }
  });

}

var Gmap = () => {
  var wrapper = $('<div id="map"></div>');
  wrapper.init = init.bind(null,wrapper.get(0));
  return wrapper;
}

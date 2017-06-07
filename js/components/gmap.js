var map;

var init = function() {
  map = new GMaps({
    el: '#map',
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long
  });

  map.addMarker({
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    title: 'Lima'
  });



}

var Gmap = () => {
  var wrapper = $('<div id="map"></div>');
  wrapper.init = init.bind(null,wrapper.get(0));
  return wrapper;
}

GMaps.geolocate({
  success: function(position) {
    map.setCenter(position.coords.latitude, position.coords.longitude);
  },
  error: function(error) {
    alert('Geolocation failed: '+error.message);
  },
  not_supported: function() {
    alert("Your browser does not support geolocation");
  },
  always: function() {
    alert("Done!");
  }
});

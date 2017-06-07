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

var StationDetails = (update) => {
  var container = $('<div></div>');
  var map = $('<div id="map"></div>');
  var regresar = $('<a href=""><<a>');

  container.append(regresar);
  container.append(map);
  return container;
}

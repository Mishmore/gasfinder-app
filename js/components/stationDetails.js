var StationDetails = (update) => {
  var container = $('<div></div>');
  var map = $('<div id="map"></div>');
  var regresar = $('<a href=""><<a>');

  container.append(regresar);
  container.append(map);

  regresar.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  })

  return container;
}

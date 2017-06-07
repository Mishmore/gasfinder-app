var StationDetails = (update) => {
  var container = $('<div class="details"></div>');
  var map = $('<div id="map"></div>');
  var regresar = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
  var row = $('<div class="row"></div>')
  var divDatos = $('<div class="col s11 right"></div>');
  var stationName = $('<h5>' + state.selectedStation.name + '<h5>');
  var hr = $('<hr>');
  var stationAddress = $('<p>' + state.selectedStation.address + '</p>');
  var products = $('<ul></ul>');

  for (var i=0; i<state.selectedStation.products.length; i++) {
    var productItem = $('<li class="grey lighten-2">' + state.selectedStation.products[i] + '</li>');
    products.append(productItem);
  }

  container.append(regresar);
  container.append(map);
  container.append(row);
  row.append(divDatos);
  divDatos.append(stationName);
  divDatos.append(hr);
  divDatos.append(stationAddress);
  divDatos.append(products);

  regresar.on('click',(e) => {
    state.selectedStation = null;
    update();
  });

  return container;
}

var Search = (update) => {
  var search = $('<div class="search"></div>');
  var container = $('<div class="container"></div>');
  var row = $('<div class="row"></div>');
  var col = $('<div class="col s12 header-col"></div>');
  var formGroup = $('<div class="form-group z-depth-1 col s12"></div>');
  var icon = $('<i class="fa fa-search col s1" aria-hidden="true"></i>');
  var input = $('<input type="text" class="col s11 col m11" placeholder="Ingresa tu distrito a buscar">');

  search.append(container);
  container.append(row);
  row.append(col);
  col.append(formGroup);
  formGroup.append(icon);
  formGroup.append(input);

  input.on("keyup", (e) => {
    var x = filterByDistrict(state.stations,input.val());
    console.log(x);
  });

  return search;
}

var stationItem = (station, update) => {
  var divSearch = $('<div class="search-item collection-item grey-text text-darken-1"></div>');
  var searchText = $('<div class="search-text"></div>');
  var title = $('<h6 class="black-text">'+ station.name +'</h6>');
  var direccion = $('<p>' + station.address + '</p>');
  var distrito = $('<p>' + station.district + '</p>');
  var map = $('<i class="fa fa-map grey-text text-darken" aria-hidden="true"></i>');

  divSearch.append(searchText);
  searchText.append(title);
  searchText.append(direccion);
  searchText.append(distrito);
  divSearch.append(map);

  return divSearch;
}

var itemsContainer = (update) => {
  var container = $('<div class="collection"></div>');
  state.stations.forEach((station) => {
    container.append(stationItem(station,update));
  });

  return container;
}

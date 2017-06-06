var Search = (update) => {
  var div = $('<div></div>');
  var formGroup = $('<div class="form-group z-depth-1 col s12"></div>');
  var icon = $('<i class="fa fa-search col s1" aria-hidden="true"></i>');
  var input = $('<input type="text" class="col s11 col m11" placeholder="Ingresa tu distrito a buscar">');

  headerCol.append(formGroup);
  formGroup.append(icon);
  formGroup.append(input);

  var container = $('<div class="collection"></div>');
  var divSearch = $('<div class="search-item collection-item grey-text text-darken-1"></div>');
  var searchText = $('<div class="search-text"></div>');
  var title = $('<h6 class="black-text">Primax</h6>');
  var direccion = $('<p>Dirección</p>');
  var distrito = $('<p>Distrito</p>');
  var map = $('<i class="fa fa-map grey-text text-darken" aria-hidden="true"></i>');

  container.append(divSearch);
  divSearch.append(searchText);
  searchText.append(title);
  searchText.append(direccion);
  searchText.append(distrito);
  divSearch.append(map);


  input.on("keypress", (e) => {
    //ejecutar filter
  });

  return container;
}

// <i class="fa fa-map" aria-hidden="true"></i>
var Search = (update) => {
  var container = $('<div class="collection"></div>');
  var divSearch = $('<div class="search-item collection-item grey-text text-darken-1"></div>');
  var searchText = $('<div class="search-text"></div>');
  var title = $('<h6 class="black-text">Primax</h6>');
  var direccion = $('<p>Dirección</p>');
  var distrito = $('<p>Distrito</p>');
  var divider = $('<div class="divider grey lighten-7"></div>');
  var map = $('<i class="fa fa-map" aria-hidden="true"></i>');

  container.append(divSearch);
  divSearch.append(searchText);
  searchText.append(title);
  searchText.append(direccion);
  searchText.append(distrito);
  divSearch.append(map);

  return container;
}

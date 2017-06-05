var Header = (update) => {
  var header = $("<header></header>");
  var title = $("<span>Gas Finder</span>");
  var formGroup = 
  var icon = $('<i class="fa fa-search" aria-hidden="true"></i>');

  var input = $('<input type="text" placeholder="Ingresa tu distrito a buscar">')

  header.append(title);
  header.append(icon);
  header.append(input);

  return header;
}

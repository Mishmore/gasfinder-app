var Header = (update) => {
  var header = $("<header></header>");
  var container = $('<div class="container"></div>');
  var row = $('<div class="row"></div>');
  var col = $('<div class="col s12"></div>')
  var title = $('<span>Gas Finder</span>');
  var formGroup = $('<div class="form-group z-depth-1 col s12"></div>');
  var icon = $('<i class="fa fa-search col s1" aria-hidden="true"></i>');
  var input = $('<input type="text" class="col s11 col m11" placeholder="Ingresa tu distrito a buscar">');

  header.append(container);
  container.append(row);
  row.append(col);
  col.append(title);
  col.append(formGroup);
  formGroup.append(icon);
  formGroup.append(input);

  return header;
}

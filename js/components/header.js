var Header = (update) => {
  var header = $("<header></header>");
  var container = $('<div class="container"></div>');
  var row = $('<div class="row"></div>');
  var col = $('<div class="col s12"></div>')
  var title = $('<span>Gas Finder</span>');
  var nav = $('<nav></nav>');
  var navWrapper = $('<div class="nav-wrapper"></div>');
  var form = $('<form></form>');
  var formGroup = $('<div class="input-field"></div>');
  var label = $('<label class="label-icon" for="search"><i class="fa fa-search grey-text text-darken"></i></label>');
  var input = $('<input type="search" id="search" placeholder="Ingresa tu distrito a buscar">');

  header.append(container);
  container.append(row);
  row.append(col);
  col.append(title);
  col.append(nav);
  nav.append(navWrapper);
  navWrapper.append(form);
  form.append(formGroup);
  formGroup.append(label);
  formGroup.append(input);

  return header;
}

var Header = (update) => {
  var header = $("<header></header>");
  var container = $('<div class="container"></div>');
  var row = $('<div class="row"></div>');
  var col = $('<div class="col s12 header-col"></div>')
  var title = $('<span>Gas Finder</span>');

  header.append(container);
  container.append(row);
  row.append(col);
  col.append(title);

  return header;
}

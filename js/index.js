var render = (root) => {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));

  if (state.selectedStation == null) {
      wrapper.append(Search(_ => render(root)));
  } else {
    wrapper.append(StationDetails(_ => render(root)));
  }

  root.append(wrapper);

  var gmap = Gmap();
  gmap.init();

}

var state = {
  stations: null,
  selectedStation: null
};

$( _ => {

  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    var root = $('.root');
    render(root);
  });

});

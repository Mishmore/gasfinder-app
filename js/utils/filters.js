var filterByDistrict = (stations,query) => {
  var x = stations.filter((e) => {
    console.log(query);
      if (e.district.toLowerCase().indexOf(query.toLowerCase()) != -1) {
        return e;
      }
    });
  return x;
}

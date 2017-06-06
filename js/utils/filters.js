var filterByDistrict = (stations,query) => {
  return stations.filter((e) => {
    if (e.district.toLowerCase().indexOf(query.toLowerCase()) != -1) {
      return e;
    }
  });
}

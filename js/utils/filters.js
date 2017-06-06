var filterByDistrict = (stations,query) => {
stations.filter((e) => {
    if (e.district == query.val().toUpperCase()) {
      return console.log("sfds");
    }
  });
  
}

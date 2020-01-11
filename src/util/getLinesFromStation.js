const getLinesFromStation = station => {
  const result = [];
  station.connections.forEach(c => {
    if (result.findIndex(l => l._id === c.line._id) === -1) {
      result.push(c.line);
    }
  });
  return result;
};

export default getLinesFromStation;

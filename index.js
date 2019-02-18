
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(d => d.revenue >= amount);
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map(d => d.name);
}

function exactMatch(drivers, obj) {
  return drivers.filter(d => {
    return ('name' in obj && d.name === obj.name) || ('revenue' in obj && d.revenue === obj.revenue);
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(d => d.name);
}
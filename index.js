// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driverObjects = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
  return driverObjects.map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(object)[0]] === Object.values(object)[0];
  });
}

function exactMatchToList(drivers, object) {
  const driverObjects = drivers.filter(function(driver) {
    return driver[Object.keys(object)[0]] === Object.values(object)[0];
  });
  return driverObjects.map(function (driver) {
    return driver.name;
  });
}

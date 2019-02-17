// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
};

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(function (driver) {return driver.name;});
};

function exactMatch(drivers, obj) {
  return drivers.filter(function (driver) {return driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]];});
};

function exactMatchToList(drivers, obj) {
  let filteredDrivers = exactMatch(drivers, obj);
  return filteredDrivers.map(function (driver) {return driver.name;});
};

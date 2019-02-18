// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, driverAttribute) {
  return drivers.filter(function(driver) {
    let matches = false;

    for (const key in driverAttribute) {
      if (driver[key] === driverAttribute[key]) {
        matches = driver;
      }
    }
    return matches;
  });
}

function exactMatchToList(drivers, driverAttribute) {
  return exactMatch(drivers, driverAttribute).map(function(driver) {
    return driver['name'];
  });
}

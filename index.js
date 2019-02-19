// Code your solution here:

// function driversWithRevenueOver(driver, revenue){
//   return driver.filter(revenue => driver.revenue > revenue)
// }

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
   const result = drivers.filter(function(driver){
    return driver.revenue > revenue
  })
  return result.map(dr => dr.name)
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}

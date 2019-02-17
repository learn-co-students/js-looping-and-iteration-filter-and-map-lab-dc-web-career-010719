// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter(function (driver) {
    return driver.revenue > num
  })
}

function driverNamesWithRevenueOver(drivers, num) {
  const newDrivers = drivers.filter(function (driver) {
    return driver.revenue > num
  })
  return newDrivers.map(function (driver) {
    return driver["name"]
  })
}

function exactMatch(collection, obj) {
  return collection.filter(function (driver) {
    for (const attr in obj) {
      if (driver[attr] === obj[attr]) {
        return true
      }
    }
  })
}

function exactMatchToList(collection, obj) {
  return exactMatch(collection, obj).map(function(driver) {
    return driver["name"]
  })
}
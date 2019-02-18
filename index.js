
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, obj) {
  k = Object.keys(obj)[0]
  return drivers.filter(driver => driver[k] === obj[k])
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(driver => driver.name)
}

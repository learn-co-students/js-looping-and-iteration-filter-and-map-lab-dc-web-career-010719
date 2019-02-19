// Code your solution here:
function driversWithRevenueOver (list, threshold){
   return list.filter(function(driver){
     return driver.revenue > threshold
  })
}


function driverNamesWithRevenueOver (list, threshold){
  return driversWithRevenueOver(list, threshold)
  .map(function (driver){
    return driver.name
  })
}

function exactMatch(list, info){
  return list.filter(function(driver){
    for (const key in info){
      if (driver[key]===info[key]){
        return driver
      }
    }
  })
}

function exactMatchToList(list, info){
  return exactMatch(list, info)
  .map(function (driver){
      return driver.name
  })
}

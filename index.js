// Code your solution here:
function driversWithRevenueOver(driver, amount) {
  let obj = []
  for (var x in driver) {
    let hash = {}
    if (driver[x]["revenue"]>amount) {
      hash["name"] = driver[x]["name"]
      hash["revenue"] = driver[x]["revenue"]
      obj.push(hash)
    }

  }

return obj
}

function driverNamesWithRevenueOver(driver1, amount1) {

  let obj1 = []
  for (var x in driver1) {
    // console.log(amount1)
    if (driver1[x]["revenue"] > amount1) {
      obj1.push(driver1[x]["name"])
    }


  }

  return obj1
}

function exactMatch(drivers, hash) {
  let newdrivers=[]

  for (var driver in drivers) {
    // console.log(drivers[driver])
    // console.log(hash)
    if ((drivers[driver]["name"] === hash["name"])||(drivers[driver]["revenue"] === hash["revenue"])){
      newdrivers.push(drivers[driver])


    }
  }
  return newdrivers
}
function exactMatchToList(drivers, hash) {
  let newdrivers=[]

  for (var driver in drivers) {
    // console.log(drivers[driver])
    // console.log(hash)
    if ((drivers[driver]["name"] === hash["name"])||(drivers[driver]["revenue"] === hash["revenue"])){
      newdrivers.push(drivers[driver]["name"])


    }
  }
  return newdrivers
}

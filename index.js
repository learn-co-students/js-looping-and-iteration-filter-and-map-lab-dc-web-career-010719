function driversWithRevenueOver(driver, revenue) {
    return driver.filter(function(driverObj) {
        return driverObj.revenue > revenue
    })
}

function driverNamesWithRevenueOver(driver, revenue) {
    return driversWithRevenueOver(driver, revenue).map(function(driver) {return driver.name})
}

function exactMatch(driver, match) {
    return driver.filter(function(driverObj) {
        for (const key in match) {
            if (driverObj[key] === match[key]) {
                return true
            }
        }
    })
}

function exactMatchToList(driver, match) {
    return exactMatch(driver, match).map(function(driver) {return driver.name})
}





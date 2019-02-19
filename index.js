// Code your solution here:
function driversWithRevenueOver(array, num) {
    return array.filter(function (elem) {
        return elem.revenue > num 
    })
}

function driverNamesWithRevenueOver(array, num) {
    return driversWithRevenueOver(array, num).map(function (elem) {
        return elem.name
    })
}

function exactMatch(array, obj) {
    return array.filter(function (elem) {
        let val = false
        for (const key in obj) {
            val = elem[key] === obj[key]
        }
        return val
    })
}

function exactMatchToList(array, obj) {
    return exactMatch(array, obj).map(function (elem) {
            return elem.name
    })
}


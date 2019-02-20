// Code your solution here:
function driversWithRevenueOver(array, num) {
  return array.filter(element => element.revenue > num )

}

function driverNamesWithRevenueOver(array, num) {
  return driversWithRevenueOver(array, num).map(element => element.name)
}

function exactMatch(object, hash) {
  return object.filter(attribute => attribute[Object.keys(hash)[0]] === hash[Object.keys(hash)[0]])
}

function exactMatchToList(object, hash) {
   return exactMatch(object, hash).map(element => element.name)
}

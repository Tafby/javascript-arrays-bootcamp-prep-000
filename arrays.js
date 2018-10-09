var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
  ]


function addElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  
}
function addElementToEndOfArray(array,element) {
  array.push(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  [element, ...array]
  return array
}
function accessElementInArray(array, index) {
  array[index]
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(arry) {
  array.slice(0, array.length - 1)
  return array
}
function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}

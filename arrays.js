var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
  ]


function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
  
}
function addElementToEndOfArray(array,element) {
  var newArray = [...array, element]
  return newArray
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

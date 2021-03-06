var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, butterfinger){
  return [butterfinger, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, butterfinger){
  chocolateBars.unshift(butterfinger);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, butterfinger){
  return [...chocolateBars, butterfinger];
}

function destructivelyAddElementToEndOfArray(chocolateBars, butterfinger){
  chocolateBars.push(butterfinger);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}

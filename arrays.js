var chocolateBars = [snickers, hundred grand, kitkat, skittles];

addElementToBeginningOfArray(chocolateBars, butterfinger){
return [butterfinger, ...chocolateBars];
}
destructivelyAddElementToBeginningOfArray(chocolateBars, butterfinger){
chocolateBars.unshift('butterfinger');
return chocolateBars; 
}
addElementToEndOfArray(chocolateBars, butterfinger){
  return[...chocolateBars, butterfinger];
}
destructivelyAddElementToEndOfArray(chocolateBars, butterfinger){
  chocolateBars.push('butterfinger');
  return ChocolateBars;
}
accessElementInArray(array index){
  return array[index];
}
destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift();
}
removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1); 
}
destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return chocolateBars.pop();
}
removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}


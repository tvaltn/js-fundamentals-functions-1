// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function createNumberArray(lower, upper) {
  const array = []
  for (let i = lower; i <= upper; i++) {
    array.push(i)
  }
  return array
}

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function shout(string, exclamations) {
  let newString = string.toUpperCase()
  newString += '!'.repeat(exclamations)
  return newString
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function addMinutes(time, minutes) {
  const timeSplit = time.split(':')

  const minutesToAdd = minutes % 60
  let newMinutes = (minutesToAdd + Number(timeSplit[1])) % 60

  const hoursToAdd = Math.floor(minutes / 60)
  const extraHour = Math.floor((minutesToAdd + Number(timeSplit[1])) / 60)
  let newHours = (hoursToAdd + extraHour + Number(timeSplit[0])) % 24

  if (newMinutes < 10) newMinutes = '0' + newMinutes
  if (newHours === 0) newHours = '0' + newHours
  // a bit confusing that the test only wants double digit hour when its 00? :)

  let newTime = ''
  newTime += newHours + ':'
  newTime += newMinutes

  return newTime
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: createNumberArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: shout, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutes // etc
}

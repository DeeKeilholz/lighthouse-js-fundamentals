whichSchool.js

function whichSchool(age) {
  if (age < 13) {
    return ("Elementary School");
  } else if (age <= 18) {
    return ("Secondary School");
  } else {
    return ("Lighthouse Labs");
  } }

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
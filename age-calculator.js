function ageCalculator (name, yearOfBirth, currentYear) {
  var age;
  age = currentYear - yearOfBirth;
  var result;
  result = name + " is " +  age + " years old.";
  return result
}

console.log(ageCalculator("Dan", 1982, 2016));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));








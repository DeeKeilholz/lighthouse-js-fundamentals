// Program that prints numbers 100 to 200:
for (var counter = 100; counter <= 200; counter++) {
// Prints "Loopy Lighthouse" for numbers that are multiples of three and four:
  if (counter % 3 === 0 && counter % 4 === 0)
    console.log("LoopyLighthouse");
// Prints "Loopy" for numbers that are multiples of three:
  else if (counter % 3 === 0)
    console.log("Loopy");
// Prints "Lighthouse" for numbers that are multiples of four:
  else if (counter % 4 === 0)
    console.log("Lighthouse");
  else
    console.log(counter);
}








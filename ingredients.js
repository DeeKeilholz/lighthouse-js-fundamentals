var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// A while loop that prints out the contents of ingredients:

var i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// A for loop that prints out the contents of ingredients:

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

//A for loop that prints out each item of ingredients backwards:

ingredients.reverse ();

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

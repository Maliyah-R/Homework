//Week2 Homework
let pizzaPlace = "Pizza Planet";
let numberOfToppings = 88;
console.log(pizzaPlace, numberOfToppings);

console.log(
  `"Welcome to ${pizzaPlace}, where all ${numberOfToppings} of our toppings are out of this world!"`
);

if (numberOfToppings <= 10) {
  console.log("Quality, not Quantity");
} else {
  console.log("A whole lot of pizza");
}

//Bonus Question
let toppingsLimit = numberOfToppings > 10 ? 10 : numberOfToppings;

for (let i = 1; i <= toppingsLimit; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

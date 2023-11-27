const pizzaToppings = ["chicken", " bacon", " onion", " mushroom."];

function message() {
  let message = `Welcome to Pizza Palace our toppings are: `;
  for (let i = 0; i < pizzaToppings.length; i++) {
    message += pizzaToppings[i];
    if (i < pizzaToppings.length - 1) {
      message += ",";
    }
  }
  console.log(message);
}

function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let i = 0; i < toppings.length; i++) {
    order += toppings[i];
    if (i < toppings.length - 1) {
      order += " and ";
    }
  }
  order += " coming up!";
  console.log(order);
  return [size, crust, toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  return { size, crust, toppings };
}

function servePizza(pizza) {
  let order = `Order up! Here is your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let i = 0; i < pizza.toppings.length; i++) {
    order += pizza.toppings[i];
    if (i < pizza.toppings.length - 1) {
      order += ", ";
    }
  }
  order += ". Enjoy!";
  console.log(order);
  return pizza;
}

message();
let order = getPizzaOrder("large", "thin", "chicken", "mushroom");
let cookedPizza = preparePizza(order);
servePizza(cookedPizza);

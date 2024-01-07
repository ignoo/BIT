const farm = [
  { name: "Moo", type: "cow" },

  { name: "Oink", type: "pig" },

  { name: "Cluck", type: "chicken" },

  { name: "Neigh", type: "horse" },

  { name: "Baa", type: "sheep" },

  { name: "Meow", type: "cat" },

  { name: "Woof", type: "dog" },

  { name: "Moo", type: "cow" },

  { name: "Oink", type: "pig" },

  { name: "Cluck", type: "chicken" },

  { name: "Neigh", type: "horse" },

  { name: "Baa", type: "sheep" },

  { name: "Meow", type: "cat" },

  { name: "Woof", type: "dog" },

  { name: "Moo", type: "cow" },

  { name: "Oink", type: "pig" },

  { name: "Cluck", type: "chicken" },

  { name: "Neigh", type: "horse" },

  { name: "Baa", type: "sheep" },

  { name: "Meow", type: "cat" },

  { name: "Woof", type: "dog" },

  { name: "Moo", type: "cow" },

  { name: "Oink", type: "pig" },

  { name: "Cluck", type: "chicken" },

  { name: "Neigh", type: "horse" },

  { name: "Baa", type: "sheep" },

  { name: "Meow", type: "cat" },

  { name: "Woof", type: "dog" },

  { name: "Moo", type: "cow" },

  { name: "Oink", type: "pig" },

  { name: "Cluck", type: "chicken" },

  { name: "Neigh", type: "horse" },

  { name: "Baa", type: "sheep" },

  { name: "Meow", type: "cat" },

  { name: "Woof", type: "dog" },

  { name: "Moo", type: "cow" },
];

console.log(farm);

const catdog = farm.filter((item) => item.type == "cat" || item.type == "dog");
console.log(catdog);

const nopig = farm.filter((item) => item.type != "pig");
console.log(nopig);

const kates = farm.filter((item) => item.type == "cat");
let pasirinktaKate = "";
const catCounter = (kelintas) => {
  for (i = 0; i < kelintas; i++) {
    pasirinktaKate = kates.find((item) => item.type == "cat");
  }
};

console.log(catCounter(1));



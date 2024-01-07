const arr123 = [1, 2, 3, 77, 78];

let sum = 0;
arr123.forEach((num) => (sum += num));

console.log(sum);

const arr = [1, 2, -3, 1, -1];

let sum1 = 0;

arr.forEach((positive) => {
  if (positive > 0) {
    sum1 += positive;
  }
});

console.log(sum1);

const farm = ["Cow", "Chicken", "Pig", "Cow", "Chicken", "Cow"];
let cows = 0;
farm.forEach((animal) => (animal === "Cow" ? cows++ : null));

console.log("Karviu sk.:", cows);

const superFarm = [
  { animal: "Cow", weight: 500 },
  { animal: "Chicken", weight: 3 },
  { animal: "Pig", weight: 100 },
  { animal: "Cow", weight: 400 },
  { animal: "Chicken", weight: 2 },
  { animal: "Cow", weight: 600 },
];

let cowWeight = 0;
let chickenWeight = 0;
let pigWeight = 0;

superFarm.forEach((selectedAnimal) =>
  selectedAnimal.animal === "Cow" ? (cowWeight += selectedAnimal.weight) : null
);

console.log("karvių svoris =", cowWeight);

const ataskaita = [
  { animal: "Cow", weight: 0 },
  { animal: "Chicken", weight: 0 },
  { animal: "Pig", weight: 0 },
];

superFarm.forEach((selectedAnimal) => {
  if (selectedAnimal.animal === "Cow") {
    ataskaita[0].weight += selectedAnimal.weight;
  } else if (selectedAnimal.animal === "Chicken") {
    ataskaita[1].weight += selectedAnimal.weight;
  } else {
    ataskaita[2].weight += selectedAnimal.weight;
  }
});

console.log("Ataskaita:", ataskaita);

const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

let black = "no";
let pink = "no";

colors.forEach((color) => {
  if (color === "black") {
    black = "yes";
  }
  if (color === "pink") {
    pink = "yes";
  }
});

console.log(black);
console.log(pink);

colors.forEach((color) => color === "pink" && (isPink = "YES"));

const arrr1 = [
  [1, 7, 3],
  [4, 22, 6],
  [0, 8],
];

let suma = 0;

arrr1.forEach((array) => {
  array.forEach((num) => (suma += num));
});

console.log(suma);

const arr3 = [-5, 8, -3, 0, 4, 2, -1, 0, 1, -9, 6];
const arr31 = [...arr3];

for (i = 0; i < arr3.length - 1; i++) {
  if (arr3[i] < 0) {
    arr3[i] = 0;
  }
}

for (i = 0; i < arr31.length - 1; i++) {
  if (arr31[i] < 0) {
    arr31[i] = 1;
  }
}

console.log(arr3);
console.log(arr31);

const colors1 = ["pink", "green", "blue", "yellow", "pink", "black", "pink"];

const noPink = colors1.map((item) => (item == "pink" ? "black" : item));
console.log(noPink);

// const wtf = colors1.map("pink");
// console.log(wtf);

const colors2 = [
  { color: "pink" },

  { color: "green" },

  { color: "blue" },

  { color: "yellow" },

  { color: "pink" },

  { color: "black" },

  { color: "pink" },
];

const noPink2 = colors2.map((item) =>
  item.color == "pink" ? { color: "black" } : item
);
console.log(noPink2);

const colors3 = [
  { color: "pink", id: 1, sky: "blue" },

  { color: "green", id: 2, sky: "blue" },

  { color: "blue", id: 3, tractor: "green" },

  { color: "yellow", id: 4, sky: "blue" },

  { color: "pink", id: 5, forest: "green" },

  { color: "black", id: 6, sky: "blue" },

  { color: "pink", id: 7, sky: "blue" },
];

const noPink3 = colors3.map((item, i) =>
  item.color == "pink" ? { ...item, color: "black" } : item
);
console.log(noPink3);

const noPink4 = colors3.map((item) => ({ ...item, color: "black" }));

console.log(noPink4);

const colors4 = [
  ["pink", "green", "blue"],

  ["yellow", "pink", "black"],

  ["pink", "green", "blue"],

  ["yellow", "pink", "black"],

  ["pink", "green", "blue"],

  ["yellow", "pink", "black"],

  ["pink", "green", "blue"],

  ["yellow", "pink", "black"],

  ["pink", "green", "blue"],

  ["yellow", "pink", "black"],

  ["pink", "green", "blue"],

  ["yellow", "pink", "black"],
];

const noPink5 = colors4.map((item) => {
  item[1] = "black";
  return item;
});

console.log(noPink5);

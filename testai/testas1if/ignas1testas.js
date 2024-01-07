function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("1 užduotis");

let num1 = rand(1, 6);
let num2 = rand(1, 6);

console.log("1 kauliukas =", num1);
console.log("2 kauliukas =", num2);

let sum =
  num1 + num2 > 8
    ? console.log("Jūs laimėjote!")
    : console.log("Jūs pralaimėjote!");

console.log("2 užduotis");

let murklys = rand(3, 6);
let pilkis = rand(3, 6);

console.log("Pilkis sveria", pilkis, "kg");
console.log("Murklys sveria", murklys, "kg");

let lengvesnis =
  murklys > pilkis
    ? console.log("Lengvesnis Pilkis.")
    : murklys < pilkis
    ? console.log("Lengvesnis Murklys.")
    : console.log("Katinukų svoriai vienodi.");

console.log("3 užduotis");

let cow = rand(0, 30);
let cat = rand(0, 30);

console.log("Karvių", cow);
console.log("Katinukų", cat);

let result =
  cow <= 15 && cat <= 15 ? console.log("Telpa.") : console.log("Netelpa.");

console.log("4 užduotis");

let dice = rand(1, 6);

console.log("Išrideno", dice);

let decision =
  dice == 1 || dice == 5
    ? console.log("Pirk teliką.")
    : dice == 3 || dice == 4
    ? console.log("Pirk skalbenkę.")
    : console.log("pirk šaldytuvą.");

console.log("5 užduotis (Nespėjau išspręsti)");

let sk1 = rand(1, 7);
let sk2 = rand(1, 7);
let sk3 = rand(1, 7);

console.log("1 skaičius =", sk1);
console.log("2 skaičius =", sk2);
console.log("3 skaičius =", sk3);

let skaitmuo1 =
  sk1 <= sk2 && sk1 <= sk3
    ? (digit1 = sk1)
    : sk2 <= sk1 && sk2 <= sk3
    ? (digit1 = sk2)
    : (digit1 = sk3);

let skaitmuo3 =
  sk1 >= sk2 && sk1 >= sk3
    ? (digit3 = sk1)
    : sk2 >= sk1 && sk2 >= sk3
    ? (digit3 = sk2)
    : (digit3 = sk3);

let skaitmuo2 =
  (digit1 == sk1 || digit1 == sk2) && (digit3 == sk1 || digit3 == sk2)
    ? (digit2 = sk3)
    : (digit1 == sk2 || digit1 == sk3) && (digit3 == sk2 || digit3 == sk3)
    ? (digit2 = sk1)
    : (digit2 = sk2);

console.log("rezultatas =", digit1, digit2, digit3);

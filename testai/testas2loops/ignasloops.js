function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("1 uzduotis");

for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log("2 uzduotis");

let speedsum = 0;

for (let i = 10; i > 0; i--) {
  let lapspeed = rand(120, 220);
  speedsum += lapspeed;
}

let averagespeed = speedsum / 10;
console.log("Vidutinis greitis =", averagespeed);

console.log("3 uzduotis");

let remainingfuel = 44;
for (let i = 10; i > 0; i--) {
  let consumption = rand(3, 6);
  remainingfuel -= consumption;
  if (remainingfuel < 0) {
    break;
  }
}
if (remainingfuel >= 0) {
  console.log("Kuro uzteko.");
} else {
  console.log("Kuro neuzteko.");
}

console.log("4 uzduotis");

let minspeed = 120;
for (let lap = 10; lap > 0; lap--) {
  for (let i = 5; i > 0; i--) {
    let speed = rand(20, 120);
    if (minspeed > speed) {
      minspeed = speed;
    }
  }
}

console.log("Maziausias greitis:", minspeed);

console.log("5 uzduotis");

let km = 0;
let kengura;
let vairas;
let stabdis;

do {
  km++;
  kengura = rand(0, 1);
  vairas = rand(0, 1);
  stabdis = rand(0, 1);
} while (kengura != 1 || vairas != 1 || stabdis != 1);

console.log("Automobilis be avarijos nuvaziavo:", km, "km");

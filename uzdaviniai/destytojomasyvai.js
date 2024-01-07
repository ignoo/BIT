function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("1 uzduotis");

const masyvas1 = [];

for (i = 0; i < 30; i++) {
  masyvas1[i] = rand(5, 25);
}
console.log(masyvas1);

console.log("2 uzduotis");
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

let virs10 = 0;
masyvas1.forEach((reiksme) => (reiksme > 10 && virs10++));
console.log("", virs10, "reiksmiu virs 10");

console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");

let didziausiaReiksme = 0;
let indeksas = 0;
masyvas1.forEach((num, i) => {
  if (num > didziausiaReiksme) {
    didziausiaReiksme = num;
    indeksas = i;
  }
});
console.log("Didziausia reiksme:", didziausiaReiksme);
console.log("Indeksas:", indeksas);

console.log("cccccccccccccccccccccccccccccccccccccc");

let lyginiuSuma = 0;
masyvas1.forEach((num) => (num % 2 == 0 ? (lyginiuSuma += num) : null));
console.log("Lyginiu skaiciu suma:", lyginiuSuma);

console.log("dddddddddddddddddddddddddddddddddddddd");
const newMasyv = [...masyvas1];

newMasyv.forEach((num, i) => (newMasyv[i] = num - i));
console.log(newMasyv);

console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

for (i = 0; i < 10; i++) {
  newMasyv.push(rand(5, 25));
}
console.log(newMasyv);

console.log("ffffffffffffffffffffffffffffffffffffff");

const lyginisMasyvas = [];
const nelyginisMasyvas = [];

newMasyv.forEach((num, i) => {
  if (i % 2 == 0) {
    lyginisMasyvas.push(newMasyv[i]);
  } else {
    nelyginisMasyvas.push(newMasyv[i]);
  }
});
console.log(lyginisMasyvas);
console.log(nelyginisMasyvas);

console.log("ggggggggggggggggggggggggggggggggggggg");

masyvas1.forEach((num, i) => {
  if (i % 2 === 0 && num > 15) {
    masyvas1[i] = 0;
  }
});
console.log(masyvas1);

console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");

let gaig = 0;

for (i = masyvas1.length - 1; i >= 0; i--) {
  if (masyvas1[i] > 10) {
    gaig = i;
  }
}
console.log("Maziausias indeksas, kurio reiksme daugiau uz 10:", gaig);

console.log("3 uzduotis");

const raidziuMasyvas = [];
let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;

for (i = 0; i < 200; i++) {
  let randomaizer = rand(1, 4);
  if (randomaizer === 1) {
    raidziuMasyvas.push("A");
    aCount++;
  } else if (randomaizer === 2) {
    raidziuMasyvas.push("B");
    bCount++;
  } else if (randomaizer === 3) {
    raidziuMasyvas.push("C");
    cCount++;
  } else {
    raidziuMasyvas.push("D");
    dCount++;
  }
}
console.log("A raidziu:", aCount);
console.log("B raidziu:", bCount);
console.log("C raidziu:", cCount);
console.log("D raidziu:", dCount);

console.log("4 uzduotis");

const generate = (masiv) => {
  for (i = 0; i < 200; i++) {
    let randomaizer = rand(1, 4);
    if (randomaizer === 1) {
      masiv.push("A");
      aCount++;
    } else if (randomaizer === 2) {
      masiv.push("B");
      bCount++;
    } else if (randomaizer === 3) {
      masiv.push("C");
      cCount++;
    } else {
      masiv.push("D");
      dCount++;
    }
  }
};

const masyv41 = [];
const masyv42 = [];
const masyv43 = [];

generate(masyv41);
generate(masyv42);
generate(masyv43);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("3 uzduotis");
let hai = "Labas";

for (let i = 0; i < 5; i++) {
  console.log(hai);
}

console.log("4 uzduotis");
let randnum = rand(5, 10);
for (let i = 0; i < 7; i++) {
  console.log(randnum);
}

console.log("5 uzduotis");
for (let i = 0; i < randnum; i++) {
  console.log(randnum);
}

console.log("6 uzduotis");

if (randnum > 7) {
  for (let i = 0; i < randnum; i++) {
    console.log(randnum);
  }
}

console.log("7 uzduotis");

let kint = 0;
let summ = 0;
stringus = '';
for (let i = 0; i < 5; i++) {
  kint = rand(10, 20);
  console.log(kint);
  summ = summ + kint;
  stringus = stringus + kint + ' ';
  
}
console.log('sum =',summ)
console.log('string =',stringus)
console.log('galutinis =',stringus + summ)

console.log('8 uzduotis');

let kinta = 0;
let i = 0;
sum = 0;
denied = 0;
even = 0;
odd = 0;
do {
  var number = rand(10, 25);
  i++
  kinta = number;
  console.log(kinta);
  let suma = kinta < 18 ? sum = sum + kinta : denied++;
  let lyginiai = kinta % 2 == 0 ? even++ : odd++;
} while (number > 11);
console.log('', i, 'iteracijos');
console.log('suma ', sum);
console.log('denied', denied);
console.log('lyginiai ', even);
console.log('nelyginiai', odd);

console.log('9 uzduotis');

let outercykl = 0;
let innercykl = 0;
let iseiles = 0;

for (let i = 0; i < 5; i++) {
  let ranum = rand(5, 6);
  outercykl++;
  console.log('random nomer',ranum);
  if (outercykl == 3 && ranum == 5) {
    break
  }

  if (ranum == 5) {
    iseiles++;
  } else {
    iseiles = 0;
  }

  if (iseiles == 3) {
    break
  }

  for (let g = 0; g < ranum; g++) {
    innercykl++;
  }
}

console.log('isorinis ciklas', outercykl, 'kartu/us')
console.log('vidinis ciklas', innercykl, 'kartu/us')

console.log('10 uzduotis');

let ptaskai = 0;
let ktaskai = 0;
let ppartija = 0;
let kpartija = 0;


do {
  ppartija = rand(10, 20);
  kpartija = rand(5, 25);
  console.log('Petro taskai:', ppartija);
  console.log('Kazio taskai:', kpartija);
  let laimetojas = ppartija > kpartija ? console.log('Partija laimejo Petras') : kpartija > ppartija ? console.log('Partija laimejo Kazys') : console.log('Lygiosios');
  ptaskai += ppartija;
  ktaskai += kpartija;
  console.log('Petro bendri taskai:', ptaskai);
  console.log('Kazio bendri taskai:', ktaskai);
} while (ptaskai < 222 && ktaskai < 222);
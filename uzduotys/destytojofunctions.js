function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("1 uzduotis");

const fun1 = (x) => console.log(x);
fun1("labas");

console.log("2 uzduotis");

const fun2 = (text, times) => {
  for (i = times; i > 0; i--) {
    console.log(text);
  }
};

fun2("labadiena", 1);

console.log("4 uzduotis");

const fun4 = (num) => {
  let result = 0;
  for (i = num - 1; i > 1; i--) {
    if (num % i == 0) {
      result++;
    }
  }
  return result;
};

console.log(fun4(36));

console.log("5 uzduotis");

const masyvas = [];
for (i = 0; i < 100; i++) {
  masyvas[i] = rand(33, 77);
}

console.log(masyvas);

masyvas.sort((a, b) => fun4(a) - fun4(b));

console.log(masyvas);

console.log("6 uzduotis");

const masyvenas = [];
for (i = 0; i < 100; i++) {
  masyvenas[i] = rand(333, 777);
}

const nePirminiai = masyvenas.filter(item => fun4(item) > 0);

console.log(nePirminiai);

console.log("7 uzduotis");

const masuolis = [];


const masyvoGeneratorius = (reiksme) => {
  for (i = 0; i < rand(9, 19); i++) {
    masuolis.push(rand(0, 10));
  }
  masuolis.push(reiksme)
}




for (i = 0; i < rand(9, 29); i++) {
  masyvoGeneratorius(masyvoGeneratorius());
}
masyvoGeneratorius(0);

console.log(masuolis);

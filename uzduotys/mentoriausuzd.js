console.log("3 uzduotis");

let factorial = (x) => {
  let fact = x;
  if (x === 0) {
    fact = 1;
  }
  for (let i = x; i > 1; i--) {
    x = x - 1;
    fact = fact * x;
  }
  return fact;
};

console.log(factorial(0));

console.log("4 uzduotis");

// const reverse = (string) => {
//   let letters = string.split("");
//   for (letter in letters) {

//   }

// }

// reverse('labas')

console.log("5 uzduotis");

const primechecker = (x) => {
  if (x === 1) {
    return console.log("1 is neither prime or composite number");
  } else if (x < 1) {
    return console.log("invalid number");
  } else {
    let dalinam = x;
    for (let i = x - 1; i > 1; i--) {
      dalinam--;
      console.log(dalinam);
      if (x % dalinam == 0) {
        return console.log(x, "is a composite number");
      }
    }
    return console.log(x, "is a prime number");
  }
};

primechecker(0);

console.log("6 uzduotis");

let totalVowels = 0;
const vowelCount = (text) => {
  for (letter of text) {
    if (
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u"
    ) {
      totalVowels++;
    }
  }
  console.log(totalVowels);
};

vowelCount("labadiena");

console.log("7 uzduotis");

const squares = (x) => {
  let rezultatas = 0;
  for (let i = 1; i <= x; i++) {
    rezultatas += i * i;
  }
  return console.log("rezultatas", rezultatas);
};

squares(0);

console.log("8 uzduotis");

let reversedWord = "";
const palindromeChecker = (word) => {
  word = word.toLowerCase();
  for (i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  reversedWord = reversedWord.toLowerCase();
  for (i = 0; i < word.length - 1; i++) {
    if (word[i] !== reversedWord[i]) {
      return console.log("It's not a palindrome");
    }
  }
  console.log("It's a palindrome!");
};

palindromeChecker("Sigis");

console.log("9 uzduotis");

const multitable = (x) => {
  for (let i = 1; i <= 10; i++) {
    let rez = x * i;
    console.log(x, "*", i, "=", rez);
  }
};

multitable(0);

console.log("10 uzduotis");

const pswchecker = (str) => {
  if (str.length < 8) {
    console.log("Password is too short");
  }
  if (str === str.toLowerCase()) {
    console.log("Password has no uppercase letters!");
  }
  if (str === str.toUpperCase()) {
    console.log("Password has no lowercase letters!");
  }
};

pswchecker("GaIDITIS");

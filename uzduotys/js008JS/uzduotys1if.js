function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('1 užduotis')

let a1 = rand(0, 4);
let b1 = rand(0, 4);

console.log('a = ',a1);
console.log('b = ',b1);

if(a1 >= b1) {
    console.log('a / b = ',a1 / b1)
} else if(b1 > a1) {
    console.log('b / a = ',b1 / a1)
}


console.log('2 užduotis')

let a2 = rand(0, 25);
let b2 = rand(0, 25);
let c2 = rand(0, 25);

console.log('a = ',a2);
console.log('b = ',b2);
console.log('c = ',c2);

if(b2 > a2 && a2 > c2 || c2 > a2 && a2 > b2) {
    console.log('Vidurinis a = ',a2)
} else if(a2 > b2 && b2 > c2 || c2 > b2 && b2 > a2) {
    console.log('Vidurinis b = ',b2)
} else if(a2 > c2 && c2 > b2 || b2 > c2 && c2 > a2) {
    console.log('Vidurinis c = ',c2)
} else {
    console.log('Yra vienodų skaičių.')
}


console.log('3 užduotis')

let a3 = rand(0, 10);
let b3 = rand(0, 10);
let c3 = rand(0, 10);

console.log('a = ',a3);
console.log('b = ',b3);
console.log('c = ',c3);

if(a3 + b3 > c3 && a3 + c3 > b3 && b3 + c3 > a3) {
    console.log('Trikampis galimas.')
} else {
    console.log('Trikampis negalimas.')
}


console.log('4 užduotis')

let a4 = rand(0, 2);
let b4 = rand(0, 2);
let c4 = rand(0, 2);
let d4 = rand(0, 2);

let nulis = 0;
let vienas = 0;
let du = 0;

console.log('a = ',a4);
console.log('b = ',b4);
console.log('c = ',c4);
console.log('d = ',d4);

if(a4 == 0) {
    nulis++
} else if(a4 == 1) {
    vienas++
} else if(a4 == 2) {
    du++
}

if(b4 == 0) {
    nulis++
} else if(b4 == 1) {
    vienas++
} else if(b4 == 2) {
    du++
}

if(c4 == 0) {
    nulis++
} else if(c4 == 1) {
    vienas++
} else if(c4 == 2) {
    du++
}

if(d4 == 0) {
    nulis++
} else if(d4 == 1) {
    vienas++
} else if(d4 == 2) {
    du++
}

console.log('nulių ', nulis)
console.log('vienetų ', vienas)
console.log('dvejetų ', du)


console.log('5 užduotis')

let a5 = rand(-10, 10);
let b5 = rand(-10, 10);
let c5 = rand(-10, 10);

console.log('a = ',a5);
console.log('b = ',b5);
console.log('c = ',c5);

if(a5 < 0) {
    console.log('+',a5,'+')
} else if(a5 == 0) {
    console.log('*',a5,'*')
} else if(a5 > 0) {
    console.log('-',a5,'-')
}

if(b5 < 0) {
    console.log('+',b5,'+')
} else if(b5 == 0) {
    console.log('*',b5,'*')
} else if(b5 > 0) {
    console.log('-',b5,'-')
}

if(c5 < 0) {
    console.log('+',c5,'+')
} else if(c5 == 0) {
    console.log('*',c5,'*')
} else if(c5 > 0) {
    console.log('-',c5,'-')
}


console.log('6 užduotis')

let candle = rand(1, 3000);
let price = 0;

if(candle <= 1000) {
    price = candle
} else if(candle > 1000 && candle <= 2000) {
    price = candle * 0.97
} else if(candle > 2000) {
    price = candle * 0.96
}

console.log('Perkama žvakių:',candle,'už',price,'EUR');


console.log('7 užduotis');

let a7 = rand(0, 100);
let b7 = rand(0, 100);
let c7 = rand(0, 100);

numbers = 3;

console.log('a = ',a7);
console.log('b = ',b7);
console.log('c = ',c7);
console.log('Vidurkis =',(a7 + b7 + c7) / numbers);

if(a7 < 10 || a7 > 90) {
    a7 = 0
    numbers--
}

if(b7 < 10 || b7 > 90) {
    b7 = 0
    numbers--
}

if(c7 < 10 || c7 > 90) {
    c7 = 0
    numbers--
}

console.log('Vidurkis atmetus netinkamus =',(a7 + b7 + c7) / numbers);
console.log('1 UZDUOTIS')

const masyvusuma = masyvas => {
    let suma = 0;
    masyvas.forEach(num => suma += num);
    console.log(`Masyvo skaičių suma: ${suma}`);
}

mase = [1, 5, 8, 11, 24, 5];

masyvusuma(mase);


console.log('2 UZDUOTIS');
console.log("<<<<<<<<<<<<<<<<");
let answerText = document.querySelector('.answer');

const compareFun = () => {
    n1 = document.querySelector('.num1').value;
    n2 = document.querySelector('.num2').value;
    return n1 > n2 ? answerText.innerText = `${n1} is bigger than ${n2}.` : n1 === n2 ? answerText.innerText = 'Numbers are equal.' : answerText.innerText = `${n2} is bigger than ${n1}.`;
}

const submitBtn = document.querySelector('#compare-btn');
submitBtn.addEventListener('click', _ => {
    compareFun();
});


console.log('3 UZDUOTIS');

const faktorial = x => {
    let fact = x;
    for (let i = x - 1; i > 0; i--) {
        fact = fact * i;
    }
    return console.log(`Skaičiaus ${x} faktorialas yra ${fact}.`);
}

faktorial(4);

console.log('4 UZDUOTIS');

let sakyk = 'Sveiks, kaip laikais? Ka tu nuori?'

const zodziuSk = sakinys => {
    let split = sakinys.split(' ');
    return console.log(`Žodžių sakinyje: ${split.length}`);
}

zodziuSk(sakyk);

console.log('5 UZDUOTIS');

const atvirkst = text => {
    return console.log(text.split('').reverse().join(''));
}

atvirkst('Laba diena, kas ce viksta?');

console.log('6 UZDUOTIS');

const skaiciuMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lyginiuAtrinktuvas = skaiciai => {
    return skaiciai.filter(num => num % 2 === 0);
}

console.log(`Atrinkti lyginiai skaičiai: ${lyginiuAtrinktuvas(skaiciuMasyvas)}`);

console.log('7 UZDUOTIS');

let minutes = 122;

const minIVal = min => console.log(`${min}min. yra ${Math.floor(min / 60)}val.${min % 60}min.`);

minIVal(minutes);

console.log('8 UZDUOTIS');

let skaicius = 7;

const arPirminis = numb => {
    for (let i = numb - 1; i > 1; i--) {
        if (numb % i === 0) {
            return console.log(`Skaičius ${numb} ne pirminis.`);
        }
    }
    return console.log((`Skaičius ${numb} pirminis.`));
}

arPirminis(skaicius);

console.log('9 UZDUOTIS');
console.log('<<<<<<<<<<<<<<');


const pasveikinkBtn = document.querySelector('.pasveik-btn');
let sveikinimoText = document.querySelector('.pasisveikinimas');

pasveikinkBtn.addEventListener('click', _ => {
    sveikinimoText.innerText = `Hello, ${document.querySelector('#name').value}! How are you?`;
});

console.log('10 UZDUOTIS');

const redBtn = document.querySelector('.red');
const whiteBtn = document.querySelector('.white');
const normalBtn = document.querySelector('.normal');
const bigBtn = document.querySelector('.big');
const body = document.querySelector('body');

redBtn.addEventListener('click', _ => {
    body.style.backgroundColor = 'firebrick';
})

whiteBtn.addEventListener('click', _ => {
    body.style.backgroundColor = 'white';
})

normalBtn.addEventListener('click', _ => {
    document.querySelector('h2').style.fontSize = '24px';
})

bigBtn.addEventListener('click', _ => {
    document.querySelector('h2').style.fontSize = '60px';
})
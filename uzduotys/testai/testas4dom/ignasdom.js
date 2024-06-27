function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1 UZDUOTIS
const mygtukas = document.querySelector('button.b1');
const tagaiH2 = document.querySelectorAll('h2');
const h211 = document.querySelector('.h11');
const h212 = document.querySelector('.h12');

mygtukas.addEventListener('click', _ => {
    tagaiH2.forEach(tag => {
        tag.innerText = rand(1, 6);
    })
    if (h211.innerText === h212.innerText) {
        h211.style.color = 'firebrick';
        h212.style.color = 'firebrick';
        } else {
        h211.style.color = null;
        h212.style.color = null;
        }
});

//2 UZDUOTIS

const saugykla = [];
const mygtukas2 = document.querySelector('button.b2');
const h31 = document.querySelector('h3')
let sum = 0;
mygtukas2.addEventListener('click', _ => {
    let randnum = rand(1, 10);
    saugykla.push(randnum);
    console.log(saugykla);
    sum += randnum;
    h31.innerText = sum;
});

//3 UZDUOTIS

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

const ul3 = document.querySelector('.ul3');
africa.forEach(animal => {
    if(animal == '') {
        null;
    } else {
        const newLi = document.createElement('li');
        newLi.innerText = animal;
        ul3.appendChild(newLi);
    }
   
})

//4 UZDUOTIS

const plusBtn = document.querySelector('.plius');
const minusBtn = document.querySelector('.minus');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const h5 = document.querySelector('h5');
sum = 0;

plusBtn.addEventListener('click', _ => {
    h5.innerText = Number(input1.value) + Number(input2.value);
})

minusBtn.addEventListener('click', _ => {
    h5.innerText = Number(input1.value) - Number(input2.value);
})

//5 UZDUOTIS

australia.forEach(animal => {
    
})

//  JS pagalba perskaitykite masyvą australia ir
//  kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus
//   sudėkite į vieną bendrą stringą. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų.
//    Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai.
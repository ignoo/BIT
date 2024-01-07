function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

console.log('1 uzduotis');

bitGirls.unshift('Nausėda');

console.log('2 uzduotis');

const bitCats = [];
let svoris = '';

cats.forEach((catName) => {
    if (rand(0, 1) == 0) {
        svoris = 'storas';
    } else {
        svoris = 'normalus';
    }
    let neww = [catName, svoris];
    bitCats.push(neww);
})

console.log(bitCats);


console.log('3 uzduotis');

let stori = 0;
let normalus = 0;

bitCats.forEach(cat => {
    if (cat[1] === 'storas') {
        stori++;
    } else {
        normalus++;
    }
})

console.log('storu', stori);
console.log('normaliu', normalus);

console.log('4 uzduotis');

bitCats.sort(function(a, b) {
    if (a[0][1] < b[0][1]) {
        return -1
    }
    if (b[0][1] < a[0][1]) {
        return 1
    }
    return 0;
});

console.log(bitCats);

console.log('5 uzduotis');

const happyCats = [];

bitGirls.forEach((name, i) => {
    if (name === 'Nausėda') {
        let element = [name, 'Barsukas'];
        happyCats.push(element);
    } else {
        let element = [name, bitCats[i-1][0]];
        happyCats.push(element);
    }
})

console.log(happyCats);
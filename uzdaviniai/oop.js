function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//1 UZDUOTIS

class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(`Pririnkta ${this.akmenuKiekis} akmenys/ų.`);
    }
}

const kibiras = new Kibiras1();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(8);
kibiras.kiekPririnktaAkmenu();

//2 UZDUOTIS ir 6 UZDUOTIS

class Pinigine {

    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.monetu = 0;
        this.banknotu = 0;
    }

    ideti(kiekis) {
        if(kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
            this.monetu++;
        } else {
            this.popieriniaiPinigai += kiekis;
            this.banknotu++;
        }
    }

    skaiciuoti() {
        console.log(this.metaliniaiPinigai + this.popieriniaiPinigai);
    }

    monetos() {
        console.log(`Monetu: ${this.monetu}`);
    }

    banknotai() {
        console.log(`Banknotu: ${this.banknotu}`);
    }

}

const pinigine = new Pinigine();
pinigine.ideti(1);
pinigine.ideti(2);
pinigine.ideti(20);
pinigine.ideti(500);
pinigine.skaiciuoti();
pinigine.monetos();
pinigine.banknotai();

//3 UZDUOTIS

// class Troleibusas {

//     static visiKeleiviai = 0;
//     static trulai = [];

//     static keleiviuSkaiciusVisuoseTroleibusuose() {
//         console.log(`ar yra trulai masyve neigiamu reiksmiu?: ${this.trulai.some(el => el < 0)}`);
//         this.trulai.forEach(trulik => {
//             console.log(trulik.some(el => el < 0))
//         })
//         if(this.trulai.some(el => el < 0)) {
//             console.log('DĖMESIO: Bent viename troleibuse yra neigiamas keleivių skaičius.');
//         } else {
//             this.trulai.forEach(trulik => {
//                 this.visiKeleiviai += trulik.keleiviuSkaicius;
//             })
//             console.log(`Keleivių skaičius visuose troleibusuose: ${this.visiKeleiviai}`);
//             this.visiKeleiviai = 0;
//         }
        
//     }
    
//     // static keleiviuSkaiciusVisuoseTroleibusuose() {
//     //     console.log(this.constructor.visiKeleiviai);
//     // }

//     constructor() {
//         this.keleiviuSkaicius = 0;
//         this.constructor.trulai.push(this);
//     }

//     ilipa(sk) {
//         this.keleiviuSkaicius += sk;
//     }

//     islipa(sk) {
//         this.keleiviuSkaicius -= sk;
//     }

//     vaziuoja() {
//         if(this.keleiviuSkaicius < 0) {
//             console.log('Blogai įvestas keleivių skaičius. Gautas neigiamas skaičius.');
//         } else {
//             console.log(`Troleibuse važiuoja ${this.keleiviuSkaicius}`);
//         }
//     }

    
// }

// const traliebusas = new Troleibusas();
// traliebusas.ilipa(14);
// traliebusas.islipa(42);
// traliebusas.ilipa(9);
// traliebusas.vaziuoja();

// const tralabusas = new Troleibusas();
// tralabusas.islipa(69);
// tralabusas.ilipa(455568);
// tralabusas.vaziuoja();

// Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();


//4 UZDUOTIS

// (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose
//  Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą 
//  bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės
//   visiKeleiviai (kurioje yra įrašytas bendras keleivių
//      skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).



//5 UZDUOTIS

// class PirkiniuKrepselis {

//     constructor() {
//         this.turinys
//     }
// }

// (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas.
//  Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą
//   krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus
//    galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis

//8 UZDUOTIS

class Stikline {

    constructor(vol) {
        this.turis = vol;
        this.kiekis = 0;
    }

    ipilti(kiek) {
        this.kiekis += kiek;
        if(this.kiekis > this.turis) {
            this.kiekis = this.turis;
        }
    }

    ispilti(obj) {
        obj.kiekis += this.kiekis;
        if(this.kiekis > obj.turis) {
            obj.kiekis = obj.turis;
        }
    }

    stiklinejeYra() {
        console.log(`${this.turis}ml stiklinėje yra ${this.kiekis}ml`);
    }
}

const stikline200 = new Stikline(200);
const stikline150 = new Stikline(150);
const stikline100 = new Stikline(100);

stikline200.ipilti(300);
stikline200.stiklinejeYra();
stikline200.ispilti(stikline150);
stikline150.stiklinejeYra();
stikline150.ispilti(stikline100);
stikline100.stiklinejeYra();


//9 UZDUOTIS

class Grybas {

        constructor() {
            this.valgomas = rand(0, 1);
            this.sukirmijes = rand(0, 1);
            this.svoris = rand(5, 45);
        }

    }

class Krepsys {
    
    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }

    deti(grybas) {
        if(grybas.valgomas && !grybas.sukirmijes) {
            this.dydis -= grybas.svoris;
            this.prikrauta++;
        }
    }
}

const keselys = new Krepsys();
let rastaGrybu = 0;
while (keselys.dydis > 0) {
    const grybe = new Grybas();
    keselys.deti(grybe);
    rastaGrybu++;
}
console.log(`Likusi vieta keselyje: ${keselys.dydis}`);
console.log(`Grybu keselyje: ${keselys.prikrauta}`);
console.log(`Viso rasta grybų: ${rastaGrybu}`);


for (let i = 1; i < 5; i++) {
    console.log(i);
}
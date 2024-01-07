// 1 UZDUOTIS
//AAAAAAAAAAAAAA
const header = document.querySelector('h1')
header.style.color = 'green';
//BBBBBBBBBBBBBBB
const iTag = document.querySelector('i');

iTag.classList.add('small');
//CCCCCCCCCCCCCCCC
header.classList.remove('main');
//DDDDDDDDDDDDD
const firsth2 = document.querySelector('h2');
firsth2.classList.remove('main');
firsth2.classList.add('first');
//EEEEEEEEEEEEE
const firstSpan = document.querySelector('span');
firstSpan.style.fontSize = '10px';
firstSpan.style.color = 'gray';

// 2 UZDUOTIS
//AAAAAAAAAAA
const visiH2 = document.querySelectorAll('h2');
console.log(visiH2.length);
//BBBBBBBBBBBB
const clFirstH2 = document.querySelectorAll('h2.first');
console.log(visiH2.length - clFirstH2.length);
//CCCCCCCCCC
visiH2.forEach(item => item.style.color = 'skyblue');
//DDDDDDDDDDD
const priceH2 = document.querySelectorAll('div.prices h2');
priceH2.forEach(item => item.classList.add('price-tag'));
//EEEEEEEEEEE
const newElements = document.querySelectorAll('.new');
newElements.forEach (item => item.style.textDecoration = 'underline');
//FFFFFFFFFFF
const gyvKategorijos = document.querySelectorAll('ul');
const zirafos = document.querySelectorAll('#zirafos li');
console.log(`Gyvunu kategoriju: ${gyvKategorijos.length}`);
console.log(`Zirafu: ${zirafos.length}`);
//GGGGGGGGGGG
gyvKategorijos.forEach(item => {
    item.style.border = 'solid 1px black';
    item.style.padding = '15px 50px';
});
//HHHHHHHHHHH
const naujiGyv = document.querySelectorAll('ul .new');
console.log(`Nauju gyvunu: ${naujiGyv.length}`);
//IIIIIIIIIII
const newZirafos = document.querySelectorAll('#zirafos .new');
console.log(`Nauju zirafu: ${newZirafos.length}`);
const newPlesrunai = document.querySelectorAll('#plesrunai .new');
console.log(`Nauju plesrunu: ${newPlesrunai.length}`);
const newGyvates = document.querySelectorAll('#gyvates .new');
console.log(`Nauju gyvaciu: ${newGyvates.length}`);
const newZoliaedziai = document.querySelectorAll('#zoliaedziai .new');
console.log(`Nauju zoliaedziu: ${newZoliaedziai.length}`);

//3 UZDUOTIS
//AAAAAAAAAAA
const colorBtn = document.querySelector('#h1-color');
const fontBtn = document.querySelector('#h1-font');
colorBtn.addEventListener('click', _ => {
    header.style.color = 'green';
})
fontBtn.addEventListener('click', _ => {
    header.style.fontSize = '10px';
})
//BBBBBBBBBBB
iTag.addEventListener('click', _ => {
    iTag.style.fontWeight = 'bold';
})
//CCCCCCCCCCC
const pricesTag = document.querySelector('.prices');
pricesTag.addEventListener('click', _ => {
    if(pricesTag.style.backgroundColor == 'white') {
        pricesTag.style.backgroundColor = 'gray';
    } else {
        pricesTag.style.backgroundColor = 'white';
    }
});
//DDDDDDDDDDD
const contacts = document.querySelector('#contacts');
contacts.addEventListener('click', _ => {
    contacts.style.color = 'orange';
});
//EEEEEEEEEE
const padidinti = document.querySelector('#contacts u');
padidinti.addEventListener('click', _ =>{
    contacts.style.fontSize = '20px';
});
//FFFFFFFFFF
const x = document.querySelector('#contacts b');
x.addEventListener('click', e => {
    contacts.style.color = null;
    contacts.style.fontSize = null;
    e.stopPropagation();
})
//GGGGGGGGGG
const colorBackBtn = document.querySelector('#h1-color-back');
const fontBackBtn = document.querySelector('#h1-font-back');
colorBackBtn.addEventListener('click', _ => {
    header.style.color = null;
})
fontBackBtn.addEventListener('click', _ => {
    header.style.fontSize = null;
})

//4 UZDUOTIS
//AAAAAAAAAA
naujiGyv.forEach(item => {
    item.addEventListener('dblclick', e => {
        e.target.style.color = 'firebrick';
        e.stopPropagation();
    });
});
//BBBBBBBBBB
const visiGyvunai = document.querySelectorAll('li:not(.like-button)');
visiGyvunai.forEach(item => {
    item.addEventListener('click', e => {
        e.target.style.fontSize = '40px';
        e.stopPropagation();
    });
});
//CCCCCCCCCC
const patinka = document.querySelectorAll('.like-button');
patinka.forEach(item => {
    item.addEventListener('click', _ => {
        item.parentNode.classList.add('like');
    })
})

//5 UZDUOTIS
//AAAAAAAAAA
const senjoru = document.createElement('h2');
senjoru.innerText = 'Senjorai tik: 1.99 eur';
pricesTag.append(senjoru);
//BBBBBBBBBB
const senjoruGr = document.createElement('h2');
senjoruGr.classList.add('new');
senjoruGr.innerText = 'Senjorų grupė iki 10: tik 5.99 eur';
pricesTag.append(senjoruGr);
senjoruGr.addEventListener('click', _ => {
    senjoruGr.style.color = 'green';
});
//CCCCCCCCCC
patinka.forEach(item => {
    const nepatinka = document.createElement('li');
    nepatinka.innerText = 'NEPATINKA';
    item.after(nepatinka);
    nepatinka.addEventListener('click', _ => {
        item.parentNode.classList.remove('like');
    })
});
//DDDDDDDDDD
const fieldset = document.createElement('fieldset');
const header3 = document.createElement('legend');
const braukti = document.createElement('button');
const nebraukti = document.createElement('button');
header3.innerText = 'HEADER 3';
braukti.innerText = 'Pabraukti H1 tagą';
nebraukti.innerText = 'Nepabraukti H1 tagą';
fieldset.append(header3, braukti, nebraukti);
contacts.insertAdjacentElement('beforebegin', fieldset);
braukti.addEventListener('click', _ => {
    header.style.textDecoration = 'underline';
});
nebraukti.addEventListener('click', _ => {
    header.style.textDecoration = null;
});
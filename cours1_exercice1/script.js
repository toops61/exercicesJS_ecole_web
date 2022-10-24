
/* const goPage2 = e => {
    console.log('page2',e);
    window.location.pathname = "/page2.html"
}

const buttonClicPage2 = document.querySelector('.leButton');
buttonClicPage2.addEventListener('click',event => goPage2(event)); */

//boucles for in
const objectBagnole = {
    roues: 4,
    volant: 1,
    portes: 5,
    passagers: [
        {nom:'machin',age:20,sympa:true},
        {nom:'bidule',age:45,sympa:true},
        {nom:'truc',age:55,sympa:false},
        {nom:'trucmuch',age:18,sympa:false}
    ]
}

for (const property in objectBagnole) {
    console.log(`${property}: ${objectBagnole[property]}`);
}

console.log({...objectBagnole});

console.log(objectBagnole.hasOwnProperty('roues'));
console.log(Object.keys(objectBagnole));
console.log(Object.values(objectBagnole));
console.log(Object());

const capitales = {
    autriche : "Vienne",
    argentine : "Buenos Aires",
    estonie : "Tallinn",
    australie : "Cambera"
  }

//on peut appeler capitales.autriche ou capitales['autriche']
  
for (const valeur in capitales){
console.log(`Pays: ${valeur}, capitale: ${capitales[valeur]}`);
}

const fruits = ['Fraise', 'Cerise', 'Orange', 'Citron', 'Ananas'];

for (const fruit of fruits) {
  console.log(fruit);
}
fruits.map(e => console.log(e));


//try catch pour vérifier l'absence d'erreurs
try {
    console.log('ligne 1');

    functionInexistante();

    console.log('ligne2');
}
catch (err) {
    console.log(err);
}
finally {
    console.log('fin');
}

/* document.addEventListener('keydown', function (e) {
   console.log(e);
}) */

// EXERCICE 6 : Les évènements.
// 1. Changez la couleur du cercle en "crimson" quand votre souris le survole.
const cercle = document.querySelector('.cercle');
const changeCrimson = () => {
  cercle.style.backgroundColor = 'crimson';
}
cercle.addEventListener('mouseover',changeCrimson);
// 2. Changez la couleur du carré en "violet" quand vous cliquez dessus.
const carre = document.querySelector('.carre');
const changePurple = () => {
  carre.style.backgroundColor = 'purple';
}
carre.addEventListener('click',changePurple);

// 3. Rajoutez l'évenement "click" au document, puis loggez la position(x,y) des clics que vous effectuez sur le document. utilisation de ASYNC AWAIT
/* (async () => {
    const mousePosition = e => console.log(`positionX : ${e.pageX}, positionY : ${e.pageY}`);
    const listenFunc = () => {
        return new Promise(resolve => {
            const listen = document.addEventListener('click',mousePosition);
            resolve(listen);
        })
    };

    await listenFunc();
})() */

function testThis() {
    const truc = 56;
    console.log(this);
}
testThis();

const testThis6 = () => {
    const truc = 88;
    console.log(this);
}
testThis6();

class Pays {
    constructor(population,nom,pib){
        this.population = population;
        this.nom = nom;
        this.pib = pib;
    }

    showPop(){
        console.log(this.population);
    }
}
const France = new Pays(70,'France',200);
const Australie = new Pays(35,'Australie',150);
console.log(France,Australie);
France.showPop();

//destructuring
const pays = {
    nom: 'Norvège',
    population: 9
}
const {nom,population} = pays;
console.log(nom);
const tabTruc = ['a','b'];
const [x,y] = tabTruc;
console.log(x,y);

//raccourci objet :
(() => {
    let truc = 'much';
    let bidule = 'fdjslk';
    const objCourt = {
        truc,
        bidule
    }
    console.log(objCourt.bidule);
})();

//valeur par défaut
const additionFunc = (x, y=25) => {
    return x + y;
}
console.log(additionFunc(34));
console.log(additionFunc(34,10));

//function dont on ne connait pas le nombre de variables
const funcVariablesInconnues = (...args) => {
    console.log(args);
}
funcVariablesInconnues(2,76,4,9);

//fonction d'ordre supérieur
const funcAdd = el => el+1;
const funcMultDix = el => el*10;
const superiorFunction = (array,callback) => {
  console.log(array.map(e => callback(e)))
}
superiorFunction([5,4,9,25],funcAdd);
superiorFunction([6,9,34,2],funcMultDix);

//reduce avec 20 en valeur de départ sinon 0
(() => {
    const arrayTest = [0,5,4,9,23];
    const reducedArray = arrayTest.reduce((a,b) => {
        return a + b;
    }, 20);
    console.log(reducedArray);
})();

//strings
(() => {
    const stringTest = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, pariatur!';
    console.log(stringTest.charAt(4));
    //use unicode from first character
    console.log(stringTest.charCodeAt(0));
    //split les mots en tableaux puis join en string
    console.log(stringTest.split(' ').join());
    //REGEX
    //g pour general
    console.log(stringTest.replace(/[ao]/g,'@'));
    //i non sensible à la casse donc min et maj
    console.log(stringTest.replace(/l/gi,'%'));

})();

//change circle color with keyboard arrows
const detectorFunc = (e) => {
    const circle = document.querySelector('.cercle');
    const square = document.querySelector('.carre');
    if (e.altKey === true) switch (e.keyCode) {
        case 37:
            square.style.backgroundColor = circle.style.backgroundColor;
            circle.style.backgroundColor = 'orange';
            break;
        case 38:
            square.style.backgroundColor = circle.style.backgroundColor;
            circle.style.backgroundColor = 'blue';
            break;
        case 39:
            square.style.backgroundColor = circle.style.backgroundColor;
            circle.style.backgroundColor = 'green';
            break;
        case 40:
            square.style.backgroundColor = circle.style.backgroundColor;
            circle.style.backgroundColor = 'pink';
            break;
        case 82:
                square.style.backgroundColor = 'lightblue';
                circle.style.backgroundColor = 'lightgreen';
            break;
    }
}
document.addEventListener('keydown',detectorFunc);

//bind
(() => {
    const voiture = {
        couleur: 'noire',
        marque: 'Peugeot',
        annee: 2007,
        myFunction() {
            console.log(this);
        }
    }
    let newFunc1 = voiture.myFunction;
    newFunc1();
    //bind = lier
    let newFunc2 = voiture.myFunction.bind(voiture);
    newFunc2();
    const exemple2 = {
        valeur: 'clé',
        truc: 'machin',
        funcExemp() {
            console.log(this.truc);
        }
    }
    //undefined car this = window
    exemple2.funcExemp();
    //lié à exemple2
    exemple2.funcExemp.bind(exemple2);
})();

(() => {
    const objet = {
        firstValue: 'key1',
        secondValue: 'key2',
        arrayFirst: [
            {
                arrayValue1: 'first',
                arrayValue2: 'second'
            },
            {
                arrayValue3: 'third',
                arrayValue4: 'fourth'
            }
        ]
    }
})();

class Voiture {
    constructor(annee,marque,couleur) {
        this.annee = annee;
        this.marque = marque;
        this.couleur = couleur;
        this.option = 0
    }

    addOption(nomOption) {
        this.option++;
        console.log(`Rajout de ${nomOption}, nombre d'options : ${this.option}`);
        return this;
    }
}
//chainage des méthodes :
const voiture1 = new Voiture(1969,'Ford','rouge');

voiture1
.addOption('5 portes')
.addOption('turbo')
.addOption('hybrid');

//sous classe
class Moto extends Voiture {

}
const moto1 = new Moto(2011,'Suzuki','verte');
console.log(moto1);

//avant ES6 :
function Personnage(nom,taille){
    this.nom = nom;
    this.taille = taille;
}
Personnage.prototype.avancer = function() {
    console.log(`${this.nom} avance ...`);
}
const perso1 = new Personnage('Bidule',175);
const perso2 = new Personnage('Machin',185);

perso1.avancer();

//ASYNC AWAIT
function funcTest2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('test 1 : 2 sec');
        }, 2000);
    });
}

const funcTest = async () => {
    console.log('ok');
    let text = await funcTest2();
    return text;
}

funcTest().then(text => console.log(text));

//exemple2
(async () => {
    const funcTwo = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('test 2 : 1 sec')
            }, 1000);
        })
    }

    const text = await funcTwo();
    console.log(text);
})();

//get img Nasa API
/* (() => {
    fetch('http://images-api.nasa.gov/asset/PIA25334')
    .then(result => {
        return result.json();
    })
    .then(data => {
        const imgNasa = data.collection.items[3].href;
        document.querySelector('.main-section').innerHTML += `<div class='nasa-img'><img src="${imgNasa}" alt="nasa"></div>`;
    })
    .catch(e => console.log(e));
})() */
(async () => {
    const getNasaImg = () => {
        return new Promise((resolve,reject) => {
            fetch('http://images-api.nasa.gov/asset/PIA00270')
            .then(result => result.json())
            .then(data => resolve(data))
            .catch(e => reject(e));
        })
    }
    const imgNasa = await getNasaImg();
    const imagesArray = imgNasa.collection.items;
    const img = imagesArray.find(e => e.href.includes('small'));
    const divImg = document.createElement("div");
    divImg.className = 'nasa-img';
    document.querySelector('.main-section').append(divImg);
    document.querySelector('.nasa-img').innerHTML = `<img src="${img.href}" alt="nasa">`;
})();
/* (async () => {
    const getNasaImg = () => {
        return new Promise((resolve,reject) => {
            fetch('http://images-api.nasa.gov/asset/NASA\'s Return to Venus')
            .then(result => {
                return result.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(e => reject(e));
        })
    }
    const imgNasa = await getNasaImg();
    console.log(imgNasa);
    const imagesArray = imgNasa.collection.items;
    const img = imagesArray.find(e => e.href.includes('small'));
    document.querySelector('.main-section').innerHTML += `<div class='nasa-video'><video src="${img.href}" autoplay loop controls></div>`;
})(); */

//chainage optionnel :
const adventurer = {
    name: 'machin'
}
const dogName = adventurer.dog?.name;
console.log(dogName);
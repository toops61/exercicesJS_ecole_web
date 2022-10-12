class Book {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

let bookInput = new Book;

const books = [];

const inputTitle = document.getElementById('titre');
inputTitle.addEventListener('change', event => bookInput.title = event.target.value);
const inputAuthor = document.getElementById('auteur');
inputAuthor.addEventListener('change', event => bookInput.author = event.target.value);
const inputYear = document.getElementById('annee');
inputYear.addEventListener('change', event => bookInput.year = event.target.value);

const deleteBook = i => {
    document.querySelectorAll('.colonne.titre p')[i].remove();
    document.querySelectorAll('.colonne.auteur p')[i].remove();
    document.querySelectorAll('.colonne.annee p')[i].remove();
    document.querySelectorAll('.colonne.supprimer button')[i].remove();
    books.splice(i,1);
}

const fillBook = () => {
    const alert = document.createElement("div");
    alert.className = 'alert-box';
    document.querySelector('.formulaire').prepend(alert);
    if (Object.values(bookInput).every(e => e !== undefined) && Object.values(bookInput).every(e => e !== '') && JSON.stringify(bookInput) !== JSON.stringify(books[books.length - 1])) {
        
        alert.className += ' success';
        books.push({...bookInput});
        document.querySelector('.colonne.titre').innerHTML += `<p>${bookInput.title}</p>`;
        document.querySelector('.colonne.auteur').innerHTML += `<p>${bookInput.author}</p>`;
        document.querySelector('.colonne.annee').innerHTML += `<p>${bookInput.year}</p>`;
        document.querySelector('.colonne.supprimer').innerHTML += `<button class="delete">X</button>`;
        console.log(books);
        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('input')[i].value = '';
        }
        Array.from(document.querySelectorAll('.alert-box')).map(e => e.innerHTML = `<p>Nouveau livre de ${bookInput.author} ajouté</p>`);
        bookInput = new Book('','','');
    } else {
        alert.className += ' error';
        Array.from(document.querySelectorAll('.alert-box')).map(e => e.innerHTML = '<p>remplissez tous les champs</p>');
    }
    setTimeout(() => {
        Array.from(document.querySelectorAll('.alert-box')).map(e => e.remove());
    }, 2000);
}

document.querySelector('.colonne.supprimer').addEventListener('click', e => {
    if (e.target.className === 'delete' && window.confirm("Voulez-vous vraiment supprimer le livre ?")) {
        const allButtonsArray = Array.from(document.querySelectorAll('.colonne.supprimer button'));
        let ind;
        allButtonsArray.map((el,index) => {
            el == e.target && (ind = index);
        })
        deleteBook(ind);
    }
})

document.querySelector('.button-soumettre').addEventListener('click',fillBook);

(async () => {
    const getNasaImg = () => {
        return new Promise((resolve,reject) => {
            fetch('http://images-api.nasa.gov/asset/PIA01492')
            .then(result => result.json())
            .then(data => resolve(data))
            .catch(e => reject(e));
        })
    }
    const imgNasa = await getNasaImg();
    const imagesArray = imgNasa.collection.items;
    const img = imagesArray.find(e => e.href.includes('small'));
    document.querySelector('.page2-main').style.background = `url(${img.href}) fixed no-repeat`;
})();
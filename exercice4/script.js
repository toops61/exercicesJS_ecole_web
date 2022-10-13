class Article {
    constructor(category,title,content) {
        this.category = category;
        this.title = title;
        this.content = content;
    }
    createArticleDom() {
        const tab = document.createElement('div');
        tab.className = 'onglet';
        tab.innerHTML = `<h2>${this.category}</h2>`;
        document.querySelector('.onglets').append(tab);
        const article = document.createElement('div');
        article.className = 'article';
        document.querySelector('.articles').append(article);
        const articleTitle = document.createElement('div');
        articleTitle.className = 'article__title';
        article.append(articleTitle);
        articleTitle.innerHTML = `<h3>${this.title}</h3>`;
        const articleText = document.createElement('div');
        articleText.className = 'article__content';
        article.append(articleText);
        articleText.innerHTML = `<p>${this.content}</p>`;
    }
}

const article1 = new Article('Destination','Fdjslgk fddfe','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed perferendis voluptas, quis autem doloremque animi rerum dignissimos officiis odio eius quae, aut nesciunt laborum laboriosam!');
article1.createArticleDom();

const article2 = new Article('Voyages','Sgf dfsfd','Rem earum nulla suscipit omnis ratione iste, iure nemo blanditiis assumenda non, fugit doloribus quam alias distinctio consectetur at veritatis! Magni, minus cumque nostrum minima, dolorem culpa architecto sapiente voluptatum pariatur laborum quis molestiae aliquam.');
article2.createArticleDom();

const article3 = new Article('Tarifs','Mfdsfd fdsfdsf','Suidem porro nihil eos dicta officia aliquid eius facilis quisquam nobis. Nisi odio ipsam perferendis odit ullam nobis aut quia reprehenderit mollitia recusandae itaque accusantium, veniam ducimus minus praesentium amet. Consequatur ducimus esse rerum molestiae ratione!');
article3.createArticleDom();

document.querySelector('section').addEventListener('click', e => selectArticle(e));

function selectArticle(e) {
    if (e.target.className === 'onglet' || e.target.className === 'onglet selected' || e.srcElement.localName === 'h2') {
        let ind = 0;
        Array.from(document.querySelectorAll('.article')).map(el => el.className = 'article');
        Array.from(document.querySelectorAll('.onglet')).map((el,index) => {
            el.className = 'onglet';
            (e.target === el || e.srcElement.parentElement === el) && (ind = index);
        });
        e.target.className === 'onglet' && e.target.classList.add('selected');
        e.srcElement.localName === 'h2' && (e.srcElement.parentElement.classList.add('selected'));
        document.querySelectorAll('.article')[ind].classList.add('visible');
    }
}
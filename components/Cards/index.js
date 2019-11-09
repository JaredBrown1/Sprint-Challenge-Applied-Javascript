// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// const axiosPromises = axios.get('https://lambda-times-backend.herokuapp.com/articles');
// console.log(axiosPromises);

function articleCreator(headline,authorImg,name) {
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const authName = document.createElement('span');

    headLine.textContent = headline;
    img.src = authorImg;
    authName.textContent = name;

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    card.appendChild(authName);

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    return card;
}

const cardsCont = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    console.log(response.data.articles);
    response.data.articles.bootstrap.forEach(item => {
        let newCard = articleCreator(item.headline, item.authorPhoto, item.authorName);
        cardsCont.appendChild(newCard);
    })
    response.data.articles.javascript.forEach(item => {
        let newCard = articleCreator(item.headline, item.authorPhoto, item.authorName);
        cardsCont.appendChild(newCard);
    })
    response.data.articles.jquery.forEach(item => {
        let newCard = articleCreator(item.headline, item.authorPhoto, item.authorName);
        cardsCont.appendChild(newCard);
    })
    response.data.articles.node.forEach(item => {
        let newCard = articleCreator(item.headline, item.authorPhoto, item.authorName);
        cardsCont.appendChild(newCard);
    })
    response.data.articles.technology.forEach(item => {
        let newCard = articleCreator(item.headline, item.authorPhoto, item.authorName);
        cardsCont.appendChild(newCard);
    })
});


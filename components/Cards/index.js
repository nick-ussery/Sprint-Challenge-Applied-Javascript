// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

function createCard(article){
    // console.log(article.headline);
    const theDiv = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const cardImg = document.createElement('img');
    const authorNameDiv = document.createElement('span');

    theDiv.append(headLine, author);
    author.append(imgContainer, authorNameDiv);
    imgContainer.append(cardImg);

    headLine.textContent = article.headline;
    cardImg.src = article.authorPhoto;
    authorNameDiv.textContent = article.authorName;

    theDiv.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    // console.log('the div', theDiv)
    cardsContainer.append(theDiv);
}


const getArticles = ()=>{
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response=>{




        console.log('articles', response.data.articles)
        const allJavascript = response.data.articles.javascript;
        const allBootstrap = response.data.articles.bootstrap;
        const allTech = response.data.articles.technology;
        const allJQuery = response.data.articles.jquery;
        const allNode = response.data.articles.node;

        const javascriptArticles = (allJavascript.map(topic=>{createCard(topic)}))
        allBootstrap.map(topic=>{createCard(topic)});
        allTech.map(topic=>{createCard(topic)});
        allJQuery.map(topic=>{createCard(topic)});
        allNode.map(topic=>{createCard(topic)});

    }
    )
    .catch(err=>{console.log('err0r', err)});

}
getArticles();
